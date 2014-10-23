/***
 requires:
   jquery.js
   foundation.js

****/

var syncAccordionGridContentHeight;

// initialize foundation
$(document).foundation();

$(document).ready(function(){
  // initialize skrollr library
  skrollr.init();
  //skrollr.menu.init();


  // initialize slick libary
  initializeSlickCarousels();
  
  var locationhash = window.location.hash;

  if (locationhash != '' && locationhash != '#') {
    activateFoundationElement(locationhash);
  }

  // // trigger opening and closing of foundation's reveal-modal
  // $('#topbar').click(function(e){
  //   $('.reveal-modal.open').foundation('reveal', 'close');
  // });
  // $('.reveal-modal:target').foundation('reveal', 'open');
  // var targetRevealModal = $('.modal-target:target').attr('id');
  // if(targetRevealModal) $('#'+targetRevealModal+'-details').foundation('reveal', 'open');


  // // event listeners for reveal-modal opening and closing
  // $(document).on('open.fndtn.reveal', '[data-reveal]', function () {
  //   var $modal = $(this);
  //   //$modal.hide();
  // });
  // $(document).on('opened.fndtn.reveal', '[data-reveal]', function () {
  //   var $modal = $(this);
  //   initializeSlickCarousels($modal).focus();
  //   $modal.append('<a class="close-reveal-modal">&#215;</a>');
  //   $('[data-reveal-close]').click(function(e){
  //     var revealCloseId = $(this).attr('data-reveal-close');
  //     $('#'+revealCloseId).foundation('reveal', 'close');
  //   });

  //   //$modal.fadeIn();
  // });

  // http://foundation.zurb.com/forum/posts/743-accordions---how-do-you-animate-opening-and-closing-content

  // $(".accordion-grid dd").on("click", "a:eq(0)", function (event){
  //   var dd_parent = $(this).parent('dd'),
  //       dd_content = dd_parent.children(".content"),
  //       dd_sibling_content = $(".accordion dd div.content:visible"),
  //       dd_sibling_parent = dd_sibling_content.parent('dd'),
  //       toggleOptions = {
  //         step : function(now,fx){
  //           if(fx.prop == 'height')
  //           $(fx.elem).parent('dd').css('padding-bottom',now+'px');
  //         }
  //       };
  //   //toggleOptions = "normal";
  //     dd_sibling_content.slideToggle(toggleOptions);
  //     dd_sibling_parent.
  //   if(dd_parent.hasClass('active') == false){
  //     dd_content.slideToggle(toggleOptions);
  //   }
  //   skrollr.menu.click(this);
  // });

  // replace href in accordion navigation links
  $("a[data-accordion-content]")
    .each(function(){
      var contentId = $(this).attr('data-accordion-content');
      $(this).attr('href','#'+contentId);
    });

  $('.accordion.accordion-grid > .accordion-navigation > .content')
    // use escape key to close accordion navigation
    .keydown(function(e){
      switch (e.keyCode) {
        case 27: // escape
          $(this).parent().children('a').first().focus().click();
      }
    })
    // use jquery slide to toggle accordion navigation
    .on('toggled', function (event,accordion){
      var target = $(this),
          targetId = target.attr('id'),
          targetLink = $('a[href$=#'+targetId+']');
          targetData = target.data(),
          //eventTargetId = $(event.target).attr('id'),
          settings = accordion.data('accordion-init'),
          slideOptions = {
            duration:200,
            step : function(now,fx){
              if(fx.prop == 'height')
              $(fx.elem).parent('dd').css('padding-bottom',now+'px');
            },
          };
      if(target.hasClass('active')){
        target.hide(); // in preparation for slideDown()
        slideOptions.complete = function(){
          scrollToElementId(targetLink,false);
          window.location.hash = targetId;
          target.attr('aria-expanded', true).focus();
        };
        if(targetData.load){
          target.attr('aria-busy',true);
          target.load(targetData.load,function(){
            target.attr('aria-busy',false);
            initAccordionContent(target);
            target.slideDown(slideOptions);
          });
        }else{
          // slideOptions.step = function(now,fx){
          //     if(fx.prop == 'height')
          //     $(fx.elem).parent('dd').css('padding-bottom',now+'px');
          // };
          target.slideDown(slideOptions);
        }
      }else{
        slideOptions.complete = function(){
          //targetLink.focus();
          //window.location.hash = '';
          target.attr('aria-expanded', false);
        };
        target.slideUp(slideOptions);
        //if(targetId == eventTargetId) window.location.hash = '';
      }
    });
  

  $('.accordion.accordion-grid > .accordion-navigation > a')
    .mouseenter(function(e){
      $(this).focus();
    })
    .mouseleave(function(e){
      $(this).blur();
    })
    .keydown(function(e){
      // This is modified from foundaton tabs interpret_keyup_action() function
      // which itself is modified from  Heydon Pickering's Practical ARIA Examples: 
      // http://heydonworks.com/practical_aria_examples/js/a11y.js 
      var $original = $(this);
      var $parent = $original.closest('li,dd');
      var role = $original.attr('role');
      var position = $parent.position();
      var upRowTop = position.top - $parent.outerHeight(true);
      var downRowTop = position.top + $parent.outerHeight(true);
      var $target;
      // determine the key which was pressed, and which direction to shift focus
      switch (e.keyCode) {
        case 9: // tab key
          //console.log(e);
          //$target = $(event.relatedTarget);
          e.preventDefault();
          if($parent.hasClass('active')){
            $parent.children('.content').first().focus();
            return;
          }
          if(e.shiftKey){ // shift tab 
          $target = 
            $original.closest('li,dd').prev().children('[role="'+role+'"]');
          }else{ // tab
          $target = 
            $original.closest('li,dd').next().children('[role="'+role+'"]');
          }
          break;
        case 37: // left
          $target = 
            $(this).closest('li,dd').prev().children('[role="'+role+'"]');
          break;
        case 39: // right
          $target = 
            $(this).closest('li,dd').next().children('[role="'+role+'"]');
          break;
        case 38: // up
          $target = 
            $(this).closest('li,dd').siblings().filter(function(index, element){
              var epos = $(element).position();
              if(epos.top == upRowTop && epos.left == position.left) return true;
              //console.log('upkey :: element top:'+epos.top+' left:'+epos.left+' :: original top:'+position.top+' left:'+position.left+'  outerHeight:'+$parent.outerHeight(true));
            }).first().children('[role="'+role+'"]');
          break;
        case 40: // down
          $target = 
            $(this).closest('li,dd').siblings().filter(function(index, element){
              var epos = $(element).position();
              if(epos.top == downRowTop && epos.left == position.left) return true;
              //console.log('downkey :: element top:'+epos.top+' left:'+epos.left+' :: original top:'+position.top+' left:'+position.left+'  outerHeight:'+$parent.outerHeight(true));
            }).first().children('[role="'+role+'"]');
          break;
        default:
          $target = false
            break;
      }
      if ($target.length) {
        $original.attr({
          //'tabindex' : '-1',
          'aria-selected' : null
        }).mouseleave();
        $target.attr({
          //'tabindex' : '0',
          'aria-selected' : true
        }).mouseenter();
      }
    });


  // $(".accordion-navigation > a").click( function (event){
  //   var target = $(this);
  //       accordion = target.closest('[data-accordion]'),
  //       groupSelector = 'data-accordion=' + accordion.attr('data-accordion'),
  //       aunts = accordion.attr('data-accordion') ? $('[' + groupSelector + '] dd') : $('> dd', accordion),
  //       navigation = target.closest('dd.accordion-navigation'),
  //       previous = aunts.filter('.previous').not(navigation);

  //   animateAccordionContent(previous);
  //   animateAccordionContent(navigation);
  // });


  // $(document).foundation({
  //   accordion: {
  //     callback : function (target) {
  //         var accordion = target.closest('[data-accordion]'),
  //             navigation = target.closest('.accordion-navigation'),
  //             aunts = $('> dd', accordion),
  //             settings = accordion.data('accordion-init'),
  //             groupSelector = 'data-accordion=' + accordion.attr('data-accordion');
  //         if (accordion.attr('data-accordion')) {
  //           aunts = aunts.add('[' + groupSelector + '] dd');
  //         }
  //         // var siblings = aunts.children('.content').not(target);
  //         var previous = aunts.filter('.previous').not(target.parent());
  //         // var previous_active = siblings.filter(function(index,sibling){
  //         //   $sibling = $(sibling);
  //         //   if(  $sibling.not('.active') 
  //         //     && $sibling.style('display') != 'none' 
  //         //     && $sibling.height() != 0
  //         //     ) return true;
  //         // });

  //         console.log("accordion");
  //         console.log(accordion);
  //         console.log("target");
  //         console.log(target);
  //         console.log("previous");
  //         console.log(previous);
  //         console.log("settings");
  //         console.log(settings);

  //         // if (!settings || !settings.multi_expand) {
  //         animateAccordionContent(previous);
  //         // }

  //         // if (!settings || settings.toggleable) {
  //         animateAccordionContent(navigation);
  //           // target.parent('dd').toggleClass(settings.active_class, false);
  //           // target.toggleClass(settings.active_class, false);
  //           // settings.callback(target);
  //           // target.triggerHandler('toggled', [accordion]);
  //           // accordion.triggerHandler('toggled', [target]);
  //           // return;
  //         // }

  //       //if($accordion.hasClass('.active')){
  //         // var dataAccordion = $accordion.parents('.accordion[data-accordion]').attr('data-accordion');
  //         // var dataAccordionAttr = dataAccordion ? '='+dataAccordion : '';
  //         // var $openContent = $('.accordion[data-accordion'+dataAccordionAttr+']').children('.content').not('.active');
  //         //animateAccordionContent($openContent);
  //       //} 
  //       // animateAccordionContent($accordion);
  //     }
  //   }
  // });

// trigger special functinality when page is requested with an anchor
//var accordion_target = $('.accordion-navigation > .content:target').siblings('a');

//if(accordion_target.first()) skrollr.menu.click(accordion_target.first());

});



syncAccordionGridContentHeight = setInterval(function(){
  $(".accordion-grid .accordion-navigation.active").each(function(){
    var contentHeight = $(this).children('.content').first().css('height');
    $(this).css('padding-bottom',contentHeight);
  });

}, 500);

function unsyncAccordionGridContentHeight() {
    clearInterval(syncAccordionGridContentHeight);
}

function initAccordionContent($content){
  // initialize foundation
  $content.foundation();
  // close accordions from a link inside the content
  $("a[data-accordion-close]",$content).click(function(){
    $(this).closest("[data-accordion] .accordion-navigation").children('a').first().click();
  });
  // initialize slick carousel
  initializeSlickCarousels($content);
};

function activateFoundationElement(elementId){
  var $target = $(elementId);
  var $parent = $target.parent();
  // if this is an accordion element, open the accordion
  if($target.hasClass('content') && $parent.hasClass('accordion-navigation'))  
    $target.siblings('a[href$="' + elementId + '"]').click();
}

function scrollToElementId(elementId,updateLocation){
  var $target = $(elementId);
  var targetOffset = Number($target.attr('data-scroll-offset')) || 0;

  if($target){
      //console.log('scrollTo : '+elementId+' ('+$target.offset()+')');
      //console.log($target);
      $('html, body').stop().animate({
          'scrollTop': $target.offset().top + targetOffset
      }, 900, 'swing', function () {
          if(updateLocation) window.location.hash = $target.attr('id');
      });
  }
}

// function animateAccordionContent(navigation){
//   var $content = navigation.children('.content');
//   var toggleOptions = {
//     progress : function(anime,progr,remain){
//       $(this).parent().style('margin-bottom',$(this).css('height'));
//     }
//   };
//   $content.slideToggle({
//     progress : function(anime,progr,remain){
//         $(this).parent().style('margin-bottom',$(this).css('height'));
//       }
//   });
//   navigation.toggleClass('previous');
//   // if(navigation.hasClass('previous')){
//     // if(navigation.hasClass('active') != true){
//       // $content.slideUp();
//       // navigation.removeClass('previous');
//     // }
//   // }else if(navigation.hasClass('active')){
//       // $content.slideDown();
//       // navigation.addClass('previous');
//   // }
// }

  function getUrlParameter(param){
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == param){return pair[1];}
       }
       return(false);
  }


  function initializeSlickCarousels(element){
    var $carousels;
    var carouselSelector = '.slick-carousel:not(.slick-initialized)';
    if(element){
      $carousels = $(element).find(carouselSelector);
    }else{
      $carousels = $(carouselSelector);
    }
    var slickCarouselDefault = {
        slidesToShow: 2,
        infinite: false,
        slidesToScroll: 2,
        focusOnSelect: true,
        dots: true,
        arrows: true,
        variableWidth: false,
        adaptiveHeight: true,
        centerMode: false,
        responsive: [
          { breakpoint: 900,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            }},
          { breakpoint: 600,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            }}
        ]
    }
    var slickCarouselWithNavigator = {
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: null,
      arrows: true,
      fade: true,
      adaptiveHeight: true,
    };
    var slickNavigator = {
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: null,
      dots: true,
      centerMode: true,
      focusOnSelect: true
    };

    $carousels.each(function(index){
      var slickCarouselConfig = slickCarouselDefault;
      var addNavigator = $(this).hasClass('add-navigator');
      var $SlickNavigator = null;
      $(this).children(':not(div)').wrap('<div/>');
      // $(this).children('p').wrapInner('<p/>').changeElementType('<div/>');

      if(addNavigator){
        $SlickNavigator = $(this).clone()
          .removeClass('slick-carousel')
          .addClass('slick-carousel-navigator')
          .attr('id', $(this).attr('id') + '-navigator')
          .children().css('transform','scale(.1)');

        $(this).removeClass('add-navigator')
          .wrap('<div class="slick-carousel-wrapper"/>')
          .parent('.slick-carousel-wrapper').prepend($SlickNavigator);

        slickNavigatorConfig = slickNavigatorDefault;
        slickNavigatorConfig.asNavFor = $(this).id;
        $SlickNavigator.slick(slickNavigatorConfig);
        $SlickNavigator.appendTo($(this).parent.prepend);

        slickCarouselConfig.asNavFor = $SlickNavigator.attr('id');      
      }

      $(this).slick(slickCarouselConfig);
    });


    return $carousels;
  }


/**
 * change an element type
 * http://stackoverflow.com/questions/8584098/how-to-change-an-element-type-using-jquery
 */
(function($) {
  $.fn.changeElementType = function(newElement) {
    if(this[0]){
      var attrs = {};
      $.each(this[0].attributes, function(idx, attr) {
          attrs[attr.nodeName] = attr.nodeValue;
      });

      this.replaceWith(function() {
          return $(newElement, attrs).append($(this).contents());
      });
    }
  };
})(jQuery);

