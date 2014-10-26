/***
 requires:
   jquery.js
   foundation.js

****/

var syncAccordionGridContentHeight;

// initialize foundation
$(document).foundation();

$(document).load(function(){
  var locationhash = window.location.hash;
  if (locationhash != '' && locationhash != '#') {
    activateFoundationElement(locationhash);
  }
});


$(document).ready(function(){
  // initialize skrollr library
  // skrollr.init();
  //skrollr.menu.init();

  // initialize aria tabpanel functionality
  var portfolioAccordionGrid = new tabpanel('portfolio-accordion-grid', 'accordion-grid');

  // initialize slick libary
  initializeSlickCarousels();
  

  // // trigger opening and closing of foundation's show-modal
  // $('#topbar').click(function(e){
  //   $('.show-modal.open').foundation('show', 'close');
  // });
  // $('.show-modal:target').foundation('show', 'open');
  // var targetRevealModal = $('.modal-target:target').attr('id');
  // if(targetRevealModal) $('#'+targetRevealModal+'-details').foundation('show', 'open');


  // // event listeners for show-modal opening and closing
  // $(document).on('open.fndtn.show', '[data-show]', function () {
  //   var $modal = $(this);
  //   //$modal.hide();
  // });
  // $(document).on('opened.fndtn.show', '[data-show]', function () {
  //   var $modal = $(this);
  //   initializeSlickCarousels($modal).focus();
  //   $modal.append('<a class="close-show-modal">&#215;</a>');
  //   $('[data-show-close]').click(function(e){
  //     var showCloseId = $(this).attr('data-show-close');
  //     $('#'+showCloseId).foundation('show', 'close');
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
  // $("a[data-accordion-content]")
  //   .each(function(){
  //     var contentId = $(this).attr('data-accordion-content');
  //     $(this).attr('href','#'+contentId);
  //   });

  // $('.accordion.accordion-grid > * > [role="tabpanel"]')
  //   // use escape key to close accordion navigation
  //   // .keydown(function(e){
  //   //   switch (e.keyCode) {
  //   //     case 27: // escape
  //   //       $(this).parent().children('a').first().focus().click();
  //   //   }
  //   // })
  //   // use jquery slide to toggle accordion navigation
  //   .on('toggled', function (event,accordion){
  //     var target = $(this),
  //         targetId = target.attr('id'),
  //         targetLink = $('a[href$=#'+targetId+']');
  //         targetData = target.data(),
  //         //eventTargetId = $(event.target).attr('id'),
  //         settings = accordion.data('accordion-init'),
  //         slideOptions = {
  //           duration:200,
  //           step : function(now,fx){
  //             if(fx.prop == 'height')
  //             $(fx.elem).parent('dd').css('padding-bottom',now+'px');
  //           },
  //         };
  //     if(target.hasClass('active')){
  //       target.hide(); // in preparation for slideDown()
  //       slideOptions.complete = function(){
  //         scrollToElementId(targetLink,false);
  //         window.location.hash = targetId;
  //         target.attr('aria-expanded', true).focus();
  //       };
  //       if(targetData.load){
  //         target.attr('aria-busy',true);
  //         target.load(targetData.load,function(){
  //           target.attr('aria-busy',false);
  //           initAjaxContent(target);
  //           target.slideDown(slideOptions);
  //         });
  //       }else{
  //         // slideOptions.step = function(now,fx){
  //         //     if(fx.prop == 'height')
  //         //     $(fx.elem).parent('dd').css('padding-bottom',now+'px');
  //         // };
  //         target.slideDown(slideOptions);
  //       }
  //     }else{
  //       slideOptions.complete = function(){
  //         //targetLink.focus();
  //         //window.location.hash = '';
  //         target.attr('aria-expanded', false);
  //       };
  //       target.slideUp(slideOptions);
  //       //if(targetId == eventTargetId) window.location.hash = '';
  //     }
  //   });
  

  // $('.accordion.accordion-grid[data-accordion] > .accordion-navigation > a')
  //   .mouseenter(function(e){
  //     $(this).focus();
  //   })
  //   .mouseleave(function(e){
  //     $(this).blur();
  //   })
  //   .keydown(function(e){
  //     // This is modified from foundaton tabs interpret_keyup_action() function
  //     // which itself is modified from  Heydon Pickering's Practical ARIA Examples: 
  //     // http://heydonworks.com/practical_aria_examples/js/a11y.js 
  //     var $original = $(this);
  //     var $parent = $original.closest('li,dd');
  //     var role = $original.attr('role');
  //     var position = $parent.position();
  //     var upRowTop = position.top - $parent.outerHeight(true);
  //     var downRowTop = position.top + $parent.outerHeight(true);
  //     var $target;
  //     // determine the key which was pressed, and which direction to shift focus
  //     switch (e.keyCode) {
  //       case 9: // tab key
  //         //console.log(e);
  //         //$target = $(event.relatedTarget);
  //         e.preventDefault();
  //         if($parent.hasClass('active')){
  //           $parent.children('.content').first().focus();
  //           return;
  //         }
  //         if(e.shiftKey){ // shift tab 
  //         $target = 
  //           $original.closest('li,dd').prev().children('[role="'+role+'"]');
  //         }else{ // tab
  //         $target = 
  //           $original.closest('li,dd').next().children('[role="'+role+'"]');
  //         }
  //         break;
  //       case 37: // left
  //         $target = 
  //           $(this).closest('li,dd').prev().children('[role="'+role+'"]');
  //         break;
  //       case 39: // right
  //         $target = 
  //           $(this).closest('li,dd').next().children('[role="'+role+'"]');
  //         break;
  //       case 38: // up
  //         $target = 
  //           $(this).closest('li,dd').siblings().filter(function(index, element){
  //             var epos = $(element).position();
  //             if(epos.top == upRowTop && epos.left == position.left) return true;
  //             //console.log('upkey :: element top:'+epos.top+' left:'+epos.left+' :: original top:'+position.top+' left:'+position.left+'  outerHeight:'+$parent.outerHeight(true));
  //           }).first().children('[role="'+role+'"]');
  //         break;
  //       case 40: // down
  //         $target = 
  //           $(this).closest('li,dd').siblings().filter(function(index, element){
  //             var epos = $(element).position();
  //             if(epos.top == downRowTop && epos.left == position.left) return true;
  //             //console.log('downkey :: element top:'+epos.top+' left:'+epos.left+' :: original top:'+position.top+' left:'+position.left+'  outerHeight:'+$parent.outerHeight(true));
  //           }).first().children('[role="'+role+'"]');
  //         break;
  //       default:
  //         $target = false
  //           break;
  //     }
  //     if ($target.length) {
  //       $original.attr({
  //         //'tabindex' : '-1',
  //         'aria-selected' : null
  //       }).mouseleave();
  //       $target.attr({
  //         //'tabindex' : '0',
  //         'aria-selected' : true
  //       }).mouseenter();
  //     }
  //   });


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

function initAjaxContent($content){
  var contentId = $content.attr('id');
  var contentRole = $content.attr('role');
  // initialize foundation
  $content.foundation();
  // close content tabpanels from a link inside the panel
  if(contentRole == 'tabpanel'){
    $content.find($('[aria-controls="'+contentId+'"]:not([role="tab"])')).click(function(e){
      $('[role="tab"][aria-controls="'+contentId+'"]').first().click();
      e.preventDefault();
    });
  }
  loadClearingThumbs($content);
  // load remote images
  // initialize slick carousel
  // initializeSlickCarousels($content);
};

function loadClearingThumbs($content){
  $('.clearing-thumbs img',$content).load(function(){
    $(this).closest('.clearing-thumbs').foundation();
  });
}

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
        lazyLoad: 'ondemand',
        slidesToShow: 1,
        infinite: false,
        slidesToScroll: 1,
        focusOnSelect: true,
        dots: true,
        arrows: true,
        variableWidth: false,
        adaptiveHeight: false,
        centerMode: false,
        responsive: [
          { breakpoint: 900,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
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




/**************************************************
 *************************************************
 * ARIA Accessible TabPanel javascript 
 * for controlling both tab and accordion layouts
 * Adapted from: 
 * Illinois Center for Information Technology and Web Accessibility
 * http://test.cita.illinois.edu/aria/tabpanel
 *
 * Adapted by Manuel Mejia:
 */

// 
// keyCodes() is an object to contain keycodes needed for the application 
// 
function keyCodes() { 
  // Define values for keycodes 
  this.tab        = 9; 
  this.enter      = 13; 
  this.esc        = 27; 

  this.space      = 32; 
  this.pageup     = 33; 
  this.pagedown   = 34; 
  this.end        = 35; 
  this.home       = 36; 

  this.left       = 37; 
  this.up         = 38; 
  this.right      = 39; 
  this.down       = 40; 

} // end keyCodes 

/**
 * tabpanel() is a class constructor to create a ARIA-enabled tab panel widget. 
 * 
 * @param (id string) id is the id of the div containing the tab panel. 
 * 
 * @param (settings obj) a typical options object
 *      optionally the second parameter may be a string identifying a settings preset.
 *      possible string values are ['tab','tab-grid','accordion','accordion-grid']
 * 
 * @return N/A 
 * 
 * Usage: Requires a div container and children as follows: 
 * 
 *         1. tabs/accordian headers have class 'tab' 
 * 
 *         2. panels are divs with class 'panel' 
 */ 
function tabpanel(id, settings) { 

  // define the class properties 
  this.panel_id = id; // store the id of the containing div 
  this.$container = $('#' + id);  // store the jQuery object for the panel 
  this.keys = new keyCodes(); // keycodes needed for event handlers 
  this.$tabs = this.$container.children().children('[role="tab"]'); // Array of panel tabs. 
  this.$panels = this.$container.children().children('[role="tabpanel"]'); // Array of panel. 

  if(typeof(settings)==='string' ){
    this.settings = this.settingsPreset(settings);
  }else if(typeof(settings)==='object'){
    this.settings = jQuery.extend(true,this.settingsPreset(),settings);
  } else {
    this.settings = this.settingsPreset();
  }


  // Bind event handlers 
  this.bindHandlers(); 

  // Initialize the tab panel 
  this.init();

  console.log('New TabPanel:'); 
  console.log(this); 

} // end tabpanel() constructor 


// retrieves a set of preset settings
tabpanel.prototype.settingsPreset = function(preset) { 
  var defaultSettings = {
        openoOnFocus: true, // set true to open and close panels on tab on focus
        multiSelect: false, // can multiple panels be open at once?
        selfClosable: false, // can an open panel be closed by it's own tab or only by opening oanother panel?
        gridNavigation: false, // should up and down arrow keys be used to navigate accros rows if tabs span multiple rows?
        defaultSelect: '', // id of the default panel to be opened.
        effect: 'none', // which effect should be used to hide/show the panels ['fade', 'slide', 'none']
        effectOptions: {}, 
        sync: function($container){return;}, // this is a function that will be called by setInterval. Use it to keep dynamic layouts in order.
        syncInterval: 0, // number of milliseconds between each calling of the sync function
      };
  switch(preset){
    case 'tabs':
      return jQuery.extend(true,defaultSettings,{

      });
    case 'tabs-grid':
      return jQuery.extend(true,defaultSettings,{
        gridNavigation: true,
      });
    case 'accordion':
      return jQuery.extend(true,defaultSettings,{
        openOnFocus: false,
        selfClosable: true,
        effect: 'slide',
        effectOptions: {duration:200},
      });
    case 'accordion-grid':
      return jQuery.extend(true,defaultSettings,{
        openOnFocus: false,
        selfClosable: true,
        gridNavigation: true,
        effect: 'slide',
        effectOptions: {
              duration:200,
              step : function(now,fx){
                if(fx.prop == 'height')
                $(fx.elem).parent().css('padding-bottom',now+'px');
              },
            },
        sync: function($container){
            $container.children().has('[role="tabpanel"][aria-hidden="false"]')
              .each(function(){
                var tabpanelHeight = $(this).children('[role="tabpanel"][aria-hidden="false"]').height();
                $(this).css('padding-bottom',tabpanelHeight+'px');
            });

            $('.accordion-grid [role="tabpanel"][aria-hidden="false"]').height();
          },
        syncInterval: 500,
        });
    default:
      return defaultSettings;
  }
}


// 
// Function init() is a member function to initialize the tab/accordian panel. Hides all panels. If a tab 
// has the class 'active', makes that panel visible; otherwise, makes first panel visible. 
// 
// @return N/A 
// 
tabpanel.prototype.init = function() { 
  var $tab; // the active tab - if one is active 

  // add aria attributes to the panel container 
  this.$container.attr('aria-multiselectable', this.settings.multiSelect); 

  // add aria attributes to the panels 
  this.$panels.attr('aria-hidden', 'true'); 

  // hide all the panels 
  this.$panels.hide(); 

  // get the active tab 
  $tab = this.$tabs.filter('.active'); 

  if ($tab == undefined && this.settings.defaultSelect) { 
    $tab = this.$tabs.attr('aria-controls',this.settings.defaultSelect); 
    $tab.addClass('active'); 
  } 

  var syncFunction = this.settings.sync;
  if(typeof(syncFunction) == 'function' && this.settings.syncInterval > 0){
    var $container = this.$container;
    setInterval(function(){ syncFunction($container); },this.settings.syncInterval);
  }

  // show the panel that the active tab controls and set aria-hidden to false 
  // this.$container.find('#' + $tab.attr('aria-controls')).show().attr('aria-hidden', 'false'); 
  //if($tab !== undefined) this.togglePanel($tab,true);

} // end init() 

// 
// Function switchTabs() is a member function to give focus to a new tab or accordian header. 
// If it's a tab panel, the currently displayed panel is hidden and the panel associated with the new tab 
// is displayed. 
// 
// @param ($curTab obj) $curTab is the jQuery object of the currently active tab 
// 
// @param ($newTab obj) $newTab is the jQuery object of new tab to switch to 
// 
// @param (show boolean) activate is true if focus should be set on an element in the panel; false if on tab 
// 
// @return N/A 
// 
tabpanel.prototype.switchTabs = function($curTab, $newTab, show) { 
  if(typeof(show)!=='undefined' && show!==false ) show = true;

  // Remove the highlighting from the current tab 
  //$curTab.removeClass('active'); 
  $curTab.removeClass('focus').blur(); 

  // remove tab from the tab order 
  //$curTab.attr('tabindex', '-1'); 

  // update the aria attributes 
   
  // Highlight the new tab 
  //$newTab.addClass('active'); 

  // If this is a tab panel, swap displayed tabs 
  if (this.settings.openOnFocus == true || show===true) { 
    if(this.settings.multiSelect == false ){
      // hide the current tab panel and set aria-hidden to true 
      // this.$container.find('#' + $curTab.attr('aria-controls')).hide().attr('aria-hidden', 'true');
      this.togglePanel($curTab,false); 
    }

    // show the new tab panel and set aria-hidden to false 
    // this.$container.find('#' + $newTab.attr('aria-controls')).show().attr('aria-hidden', 'false'); 
    this.togglePanel($newTab,show); 

    // get new list of focusable elements 
    //this.$focusable.length = 0; 
          //this.$panels.find(':focusable'); 
  } 

  // Make new tab navigable 
  //$newTab.attr('tabindex', '0'); 

  // give the new tab focus 
  $newTab.addClass('focus').focus(); 

} // end switchTabs() 

// 
// Function togglePanel() is a member function to display or hide the panel 
// associated with an accordian header. Function also binds a keydown handler to the focusable items 
// in the panel when expanding and unbinds the handlers when collapsing. 
// 
// @param ($tab obj) $tab is the jQuery object of the currently active tab 
// 
// @param (action string) override default action for tab, depending on the string 
//                       possible values are ['focus','blur','show','hide'] 
//
// @return N/A 
// 
tabpanel.prototype.togglePanel = function($tab,show) { 
  // console.log('calling togglePanel()');
  // console.log($tab);

  if(typeof(show)!=='undefined' && show!==false ) show = true;
  var $panel = this.$container.find('#' + $tab.attr('aria-controls')); 
  var panelHidden = $panel.attr('aria-hidden') == 'true' ? true : false ;
  var panelId = $panel.attr('id');
  var panelLoadUri = $panel.attr('data-load');
  var effectOptions = this.settings.effectOptions;
  var panelsToClose = [];
  if(panelHidden == false){
     $panelsToClose = $panel;
  }else if(this.settings.multiSelect == false){
     $panelsToClose = this.$container.find('[role="tabpanel"][aria-hidden="false"]')
  }
  if($panelsToClose.index($panel) > -1) show = false;
  // console.log('panelHidden = '+panelHidden);
  // console.log($panelsToClose);
  if($panelsToClose.length > 0){ 
    // console.log('closing panels:');
    // console.log($panelsToClose);
    effectOptions.complete = function(){
        var $thisPanel = $(this);
        var thisPanelId = $thisPanel.attr('id');
        var $thisPanelTab = $('[role="tab"][aria-controls="'+thisPanelId+'"]');
        $thisPanel.attr('aria-hidden', 'true').removeClass('active');
        $thisPanelTab.attr('aria-expanded', 'false').removeClass('active').attr('tabindex', '-1'); 
      };
    this.effectHide($panelsToClose,effectOptions);
    //$panel.attr('aria-hidden', 'true').removeClass('active'); 
    //$panel.slideUp(100); 
  }
  //console.log('panelHidden = '+panelHidden );
  //if($panelsToClose.filter($panel).length == 0)
    if(panelHidden == true || show===true) { 
      // console.log('opening panel:');
      // console.log($panel);
      effectOptions.complete = function(){
          scrollToElementId($tab,false);
          window.location.hash = panelId;
          $panel.attr('aria-hidden', 'false').addClass('active');
          $tab.attr('aria-expanded', 'true').addClass('active').attr('tabindex', '0'); 
        };
      if(panelLoadUri){
          $panel.attr('aria-busy',true);
          thisObj = this;
          $panel.load(panelLoadUri,function(){
            $panel.attr('aria-busy',false);
            thisObj.effectShow($panel,effectOptions);
            initAjaxContent($panel);
          });
      }else{
        this.effectShow($panel,effectOptions);
      }
      //$panel.attr('aria-hidden', 'false').addClass('active'); 
      //$panel.slideDown(100); 
    }
  //} 

} // end togglePanel() 


// define effects to be called for hiding and showing the panels
tabpanel.prototype.effectFunction = function(show){
  if(typeof(show)!=='undefined' && show!==false ) show = true;
  switch(this.settings.effect){
    case 'fade' : 
        if(show === true) return 'fadeIn';
        if(show === false)  return 'fadeOut';
        return 'fadeToggle';
    case 'slide' : 
      if(show === true) return 'slideDown';
      if(show === false) return 'slideUp';
      return 'slideToggle';
    case 'none' : 
    default:
      if(show === true) return 'show';
      if(show === false) return 'hide';
      return 'toggle';
  }
}
// use effect from settings to hide or show the panels
tabpanel.prototype.effectHide = function($element,effectOptions){
  console.log('effectHide : #'+$element.attr('id'));
  var effectFunction = this.effectFunction(false);
  return $element[effectFunction](effectOptions);
}
tabpanel.prototype.effectShow = function($element,effectOptions){
  console.log('effectShow : #'+$element.attr('id'));
  var effectFunction = this.effectFunction(true);
  return $element[effectFunction](effectOptions);
}
tabpanel.prototype.effectToggle = function($element,effectOptions){
  console.log('effectToggle : #'+$element.attr('id'));
  var effectFunction = this.effectFunction();
  return $element[effectFunction](effectOptions);
}

// 
// Function bindHandlers() is a member function to bind event handlers for the tabs 
// 
// @return N/A 
// 
tabpanel.prototype.bindHandlers = function() { 

  var thisObj = this; // Store the this pointer for reference 

  ////////////////////////////// 
  // Bind handlers for the tabs / accordian headers 

  // bind a tab keydown handler 
  this.$tabs.keydown(function(e) { 
    return thisObj.handleTabKeyDown($(this), e); 
  }); 

  // bind a tab keypress handler 
  this.$tabs.keypress(function(e) { 
    return thisObj.handleTabKeyPress($(this), e); 
  }); 

  // bind a tab click handler 
  this.$tabs.click(function(e) { 
    return thisObj.handleTabClick($(this), e); 
  }); 

  // bind a tab focus handler 
  this.$tabs.focus(function(e) { 
    return thisObj.handleTabFocus($(this), e); 
  }); 

  // bind a tab blur handler 
  this.$tabs.blur(function(e) { 
    return thisObj.handleTabBlur($(this), e); 
  }); 

  ///////////////////////////// 
  // Bind handlers for the panels 
   
  // bind a keydown handlers for the panel focusable elements 
  this.$panels.keydown(function(e) { 
    return thisObj.handlePanelKeyDown($(this), e); 
  }); 

  // bind a keypress handler for the panel 
  this.$panels.keypress(function(e) { 
    return thisObj.handlePanelKeyPress($(this), e); 
  }); 

} // end bindHandlers() 

// 
// Function handleTabKeyDown() is a member function to process keydown events for a tab 
// 
// @param ($tab obj) $tab is the jquery object of the tab being processed 
// 
// @paran (e obj) e is the associated event object 
// 
// @return (boolean) Returns true if propagating; false if consuming event 
// 
tabpanel.prototype.handleTabKeyDown = function($tab, e) { 

  if (e.altKey) { 
    // do nothing 
    return true; 
  } 

  switch (e.keyCode) { 
    case this.keys.enter: 
    case this.keys.space: { 

      // Only process if this is an accordian widget 
      if (this.settings.accordian == true) { 
        // display or collapse the panel 
        this.togglePanel($tab); 

        e.stopPropagation(); 
        return false; 
      } 

      return true; 
    } 
    case this.keys.left: 
    case this.keys.up: { 

      var thisObj = this; 
      var $prevTab; // holds jQuery object of tab from previous pass 
      var $newTab; // the new tab to switch to 

      // use arrow keys to navigate "up" and "down" rows in a grid tab layout
      if(this.settings.gridNavigation == true && e.keyCode == this.keys.up){
        var tabOffset = $tab.offset();
        var tabPrevRowOffset = tabOffset.top - $tab.outerHeight(true);
        $newTab = this.$tabs.filter(function(index, thisTab){
            var thisTabOffset = $(thisTab).offset();
            if(thisTabOffset.top == tabPrevRowOffset && thisTabOffset.left == tabOffset.left) return true;
            //console.log('upkey :: thisTab top:'+epos.top+' left:'+epos.left+' :: original top:'+position.top+' left:'+position.left+'  outerHeight:'+$parent.outerHeight(true));
          });
      }
      else if (e.ctrlKey) { 
        // Ctrl+arrow moves focus from panel content to the open 
        // tab/accordian header. 
      }
      else { 
        var curNdx = this.$tabs.index($tab); 

        if (curNdx == 0) { 
          // tab is the first one: 
          // set newTab to last tab 
          $newTab = this.$tabs.last(); 
        } 
        else { 
          // set newTab to previous 
          $newTab = this.$tabs.eq(curNdx - 1); 
        } 

        // switch to the new tab 
        this.switchTabs($tab, $newTab); 
      } 

      e.stopPropagation(); 
      return false; 
    } 
    case this.keys.right: 
    case this.keys.down: { 

      var thisObj = this; 
      var foundTab = false; // set to true when current tab found in array 
      var $newTab; // the new tab to switch to 

      // use arrow keys to navigate "up" and "down" rows in a grid tab layout
      if(this.settings.gridNavigation == true && e.keyCode == this.keys.down){
        var tabOffset = $tab.offset();
        var tabNextRowOffset = tabOffset.top + $tab.outerHeight(true);
        $newTab = this.$tabs.filter(function(index, thisTab){
            var thisTabOffset = $(thisTab).offset();
            if(thisTabOffset.top == tabNextRowOffset && thisTabOffset.left == tabOffset.left) return true;
            //console.log('upkey :: thisTab top:'+epos.top+' left:'+epos.left+' :: original top:'+position.top+' left:'+position.left+'  outerHeight:'+$parent.outerHeight(true));
          });
      }
      else{
        var curNdx = this.$tabs.index($tab); 

        if (curNdx == this.$tabs.last().index()) { 
          // tab is the last one: 
          // set newTab to first tab 
          $newTab = this.$tabs.first(); 
        } 
        else { 
          // set newTab to next tab 
          $newTab = this.$tabs.eq(curNdx + 1); 
        } 
      }
      // switch to the new tab 
      this.switchTabs($tab, $newTab); 

      e.stopPropagation(); 
      return false; 
    } 
    case this.keys.home: { 

      // switch to the first tab 
      this.switchTabs($tab, this.$tabs.first()); 

      e.stopPropagation(); 
      return false; 
    } 
    case this.keys.end: { 

      // switch to the last tab 
      this.switchTabs($tab, this.$tabs.last()); 

      e.stopPropagation(); 
      return false; 
    } 
  } 
} // end handleTabKeyDown() 

// 
// Function handleTabKeyPress() is a member function to process keypress events for a tab. 
// 
// 
// @param ($tab obj) $tab is the jquery object of the tab being processed 
// 
// @paran (e obj) e is the associated event object 
// 
// @return (boolean) Returns true if propagating; false if consuming event 
// 
tabpanel.prototype.handleTabKeyPress = function($tab, e) { 

  if (e.altKey) { 
    // do nothing 
    return true; 
  } 

  switch (e.keyCode) { 
    case this.keys.enter: 
    case this.keys.space: 
    case this.keys.left: 
    case this.keys.up: 
    case this.keys.right: 
    case this.keys.down: 
    case this.keys.home: 
    case this.keys.end: { 
      e.stopPropagation(); 
      return false; 
    } 
    case this.keys.pageup: 
    case this.keys.pagedown: { 

      // The tab keypress handler must consume pageup and pagedown 
      // keypresses to prevent Firefox from switching tabs 
      // on ctrl+pageup and ctrl+pagedown 

      if (!e.ctrlKey) { 
        return true; 
      } 

      e.stopPropagation(); 
      return false; 
    } 
  } 

  return true; 

} // end handleTabKeyPress() 

// 
// Function handleTabClick() is a member function to process click events for tabs 
// 
// @param ($tab object) $tab is the jQuery object of the tab being processed 
// 
// @paran (e object) e is the associated event object 
// 
// @return (boolean) returns true 
// 
tabpanel.prototype.handleTabClick = function($tab, e) { 

  // remove all tabs from the tab order 
  //this.$tabs.attr('tabindex', '-1'); 

  // make clicked tab navigable 
  //$tab.attr('tabindex', '0'); 

  // Expand the new panel 
  this.togglePanel($tab); 

  e.stopPropagation(); 
  return false; 

} // end handleTabClick() 

// 
// Function handleTabFocus() is a member function to process focus events for tabs 
// 
// @param ($tab object) $tab is the jQuery object of the tab being processed 
// 
// @paran (e object) e is the associated event object 
// 
// @return (boolean) returns true 
// 
tabpanel.prototype.handleTabFocus = function($tab, e) { 

  // Add the focus class to the tab 
  $tab.addClass('focus'); 

  return true; 

} // end handleTabFocus() 

// 
// Function handleTabBlur() is a member function to process blur events for tabs 
// 
// @param ($tab object) $tab is the jQuery object of the tab being processed 
// 
// @paran (e object) e is the associated event object 
// 
// @return (boolean) returns true 
// 
tabpanel.prototype.handleTabBlur = function($tab, e) { 

  // Remove the focus class to the tab 
  $tab.removeClass('focus'); 

  return true; 

} // end handleTabBlur() 


///////////////////////////////////////////////////////// 
// Panel Event handlers 
// 

// 
// Function handlePanelKeyDown() is a member function to process keydown events for a panel 
// 
// @param ($panel obj) $panel is the jquery object of the panel being processed 
// 
// @paran (e obj) e is the associated event object 
// 
// @return (boolean) Returns true if propagating; false if consuming event 
// 
tabpanel.prototype.handlePanelKeyDown = function($panel, e) { 

  if (e.altKey) { 
    // do nothing 
    return true; 
  } 

  switch (e.keyCode) { 
    case this.keys.tab: { 
      var $focusable = $panel.find(':focusable'); 
      var curNdx = $focusable.index($(e.target)); 
      var panelNdx = this.$panels.index($panel); 
      var numPanels = this.$panels.length 

      if (e.shiftKey) { 
        // if this is the first focusable item in the panel 
        // find the preceding expanded panel (if any) that has 
        // focusable items and set focus to the last one in that 
        // panel. If there is no preceding panel or no focusable items 
        // do not process. 
        if (curNdx == 0 && panelNdx > 0) { 

          // Iterate through previous panels until we find one that 
          // is expanded and has focusable elements 
          // 
          for (var ndx = panelNdx - 1; ndx >= 0; ndx--) { 

            var $prevPanel = this.$panels.eq(ndx); 

            // get the focusable items in the panel 
            $focusable.length = 0; 
            $focusable = $prevPanel.find(':focusable'); 

            if ($focusable.length > 0) { 
              // there are focusable items in the panel. 
              // Set focus to the last item. 
              $focusable.last().focus(); 
              e.stopPropagation; 
              return false; 
            } 
          } 
        } 
      } 
      else if (panelNdx < numPanels) { 

        // if this is the last focusable item in the panel 
        // find the nearest following expanded panel (if any) that has 
        // focusable items and set focus to the first one in that 
        // panel. If there is no preceding panel or no focusable items 
        // do not process. 
        if (curNdx == $focusable.length - 1) { 

          // Iterate through following panels until we find one that 
          // is expanded and has focusable elements 
          // 
          for (var ndx = panelNdx + 1; ndx < numPanels; ndx++) { 

            var $nextPanel = this.$panels.eq(ndx); 

            // get the focusable items in the panel 
            $focusable.length = 0; 
            $focusable = $nextPanel.find(':focusable'); 

            if ($focusable.length > 0) { 
              // there are focusable items in the panel. 
              // Set focus to the first item. 
              $focusable.first().focus(); 
              e.stopPropagation; 
              return false; 
            } 
          } 
        } 
      } 

      break; 
    } 
    case this.keys.left: 
    case this.keys.up: { 

      if (!e.ctrlKey) { 
        // do not process 
        return true; 
      } 
   
      // get the jQuery object of the tab 
      var $tab = $('#' + $panel.attr('aria-labeledby')); 

      // Move focus to the tab 
      $tab.focus(); 

      e.stopPropagation(); 
      return false; 
    } 
    case this.keys.pageup: { 

      var $newTab; 

      if (!e.ctrlKey) { 
        // do not process 
        return true; 
      } 

      // get the jQuery object of the tab 
      var $tab = this.$tabs.filter('.active'); 

      // get the index of the tab in the tab list 
      var curNdx = this.$tabs.index($tab); 

      if (curNdx == 0) { 
        // this is the first tab, set focus on the last one 
        $newTab = this.$tabs.last(); 
      } 
      else { 
        // set focus on the previous tab 
        $newTab = this.$tabs.eq(curNdx - 1); 
      } 

      // switch to the new tab 
      this.switchTabs($tab, $newTab); 

      e.stopPropagation(); 
      e.preventDefault(); 
      return false; 
    } 
    case this.keys.pagedown: { 

      var $newTab; 

      if (!e.ctrlKey) { 
        // do not process 
        return true; 
      } 

      // get the jQuery object of the tab 
      var $tab = $('#' + $panel.attr('aria-labeledby')); 

      // get the index of the tab in the tab list 
      var curNdx = this.$tabs.index($tab); 

      if (curNdx == this.$tabs.last().index()) { 
        // this is the last tab, set focus on the first one 
        $newTab = this.$tabs.first(); 
      } 
      else { 
        // set focus on the next tab 
        $newTab = this.$tabs.eq(curNdx + 1); 
      } 

      // switch to the new tab 
      this.switchTabs($tab, $newTab); 

      e.stopPropagation(); 
      e.preventDefault(); 
      return false; 
    } 
    case this.keys.esc:{
      this.togglePanel($tab,false);
    }
  } 

  return true; 

} // end handlePanelKeyDown() 

// 
// Function handlePanelKeyPress() is a member function to process keypress events for a panel 
// 
// @param ($panel obj) $panel is the jquery object of the panel being processed 
// 
// @paran (e obj) e is the associated event object 
// 
// @return (boolean) Returns true if propagating; false if consuming event 
// 
tabpanel.prototype.handlePanelKeyPress = function($panel, e) { 

  if (e.altKey) { 
    // do nothing 
    return true; 
  } 

  if (e.ctrlKey && (e.keyCode == this.keys.pageup || e.keyCode == this.keys.pagedown)) { 
      e.stopPropagation(); 
      e.preventDefault(); 
      return false; 
  } 

  switch (e.keyCode) { 
    case this.keys.esc: { 
      e.stopPropagation(); 
      e.preventDefault(); 
      return false; 
    } 
  } 

  return true; 

} // end handlePanelKeyPress() 

// focusable is a small jQuery extension to add a :focusable selector. It is used to 
// get a list of all focusable elements in a panel. Credit to ajpiano on the jQuery forums. 
// 
$.extend($.expr[':'], { 
  focusable: function(element) { 
    var nodeName = element.nodeName.toLowerCase(); 
    var tabIndex = $(element).attr('tabindex'); 

    // the element and all of its ancestors must be visible 
    if (($(element)[(nodeName == 'area' ? 'parents' : 'closest')](':hidden').length) == true) { 
      return false; 
    } 

    // If tabindex is defined, its value must be greater than 0 
    if (!isNaN(tabIndex) && tabIndex < 0) { 
      return false; 
    } 

    // if the element is a standard form control, it must not be disabled 
    if (/input|select|textarea|button|object/.test(nodeName) == true) { 

             return !element.disabled; 
    } 

    // if the element is a link, href must be defined 
    if ((nodeName == 'a' ||  nodeName == 'area') == true) { 

      return (element.href.length > 0); 
    } 
             
    // this is some other page element that is not normally focusable. 
    return false; 
  } 
});  





