/***
 requires:
   jquery.js
   foundation.js

****/

var syncAccordionGridContentHeight;

// initialize foundation
$(document).foundation();

$(document).load(function(){
	
});


$(document).ready(function(){
  //skrollr.menu.init();
  // 
  // var locationhash = window.location.hash;
  // if (locationhash != '' && locationhash != '#') {
  //   event.preventDefault();
  //   scrollToElement(locationhash,false);
  // }

  // add scrolling animation to internal hash links
  $('a[role="link"]').each(function(e){
    var $target = $(this.hash);
    var sameHostname = this.hostname == window.location.hostname;
    var samePathname = this.pathname == window.location.pathname;
    if(this.hash && $target.length > 0 && sameHostname && samePathname){
        $(this).attr('aria-flowto',this.hash.substring(1));
        $(this).click(function(e){
          scrollToElement($target,true);
          e.preventDefault();
          return false;
        });
      }
  });

  //$('.top-bar .toggle-topbar a').attr('href','');
	$('.top-bar .top-bar-section a').click(function(e){
		$(this).closest('.top-bar').find('.toggle-topbar:visible a').click();
	});
	

  $('#topbar-homepage').focus();
  $(':focusable').toggleClass('focusable',true);


  // initialize aria tabpanel functionality
  initializeAriaTabGroups();

  // initialize slick libary
  // initializeSlickCarousels();
  
  // initialize skrollr library
  if(typeof skrollr === 'object' && typeof skrollr.init === 'function') skrollr.init();


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
  //         scrollToElement(targetLink,false);
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
  // var contentId = $content.attr('id');
  //   var contentRole = $content.attr('role');
  // close content tabpanels from a link inside the panel
  // if(contentRole == 'tabpanel'){
  //   $content.find($('[aria-controls="'+contentId+'"]:not([role="tab"])')).click(function(e){
  //     $('[role="tab"][aria-controls="'+contentId+'"]').first().click();
  //     e.preventDefault();
  //   });
  // }
  $(':focusable').toggleClass('focusable',true);
  // initialize foundation
  $content.foundation();
  // initialize ariaTabGroups
  initializeAriaTabGroups($content);
  // loadClearingThumbs($content);
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

function scrollToElement(elementId,updateLocation){
  var $target = $(elementId);
  if($target.length >0 ){
    var scrollOffset = Number($target.attr('data-scroll-offset')) || 0;
    var targetOffset = 0;
    if($target.offset()){
      targetOffset = $target.offset()['top'];
    }else{
     targetOffset = $target.offsetParent().offset()['top'];
     targetOffset = targetOffset + $target.position()['top'];
    }
    if($('body').hasClass('f-topbar-fixed')) targetOffset -= 45;
    // console.log('scrollTo : '+elementId+' ('+targetOffset+')');
    // console.log($target.offset());
    $('html, body').stop().animate({
        'scrollTop': targetOffset + scrollOffset
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
       return('');
  }


  // function initializeSlickCarousels(element){
  //   var $carousels;
  //   var carouselSelector = '.slick-carousel:not(.slick-initialized)';
  //   if(element){
  //     $carousels = $(element).find(carouselSelector);
  //   }else{
  //     $carousels = $(carouselSelector);
  //   }
  //   var slickCarouselDefault = {
  //       lazyLoad: 'ondemand',
  //       slidesToShow: 1,
  //       infinite: false,
  //       slidesToScroll: 1,
  //       focusOnSelect: true,
  //       dots: true,
  //       arrows: true,
  //       variableWidth: false,
  //       adaptiveHeight: false,
  //       centerMode: false,
  //       responsive: [
  //         { breakpoint: 900,
  //           settings: {
  //           slidesToShow: 1,
  //           slidesToScroll: 1,
  //           }},
  //         { breakpoint: 600,
  //           settings: {
  //           slidesToShow: 1,
  //           slidesToScroll: 1,
  //           }}
  //       ]
  //   }
  //   var slickCarouselWithNavigator = {
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     asNavFor: null,
  //     arrows: true,
  //     fade: true,
  //     adaptiveHeight: true,
  //   };
  //   var slickNavigator = {
  //     slidesToShow: 3,
  //     slidesToScroll: 1,
  //     asNavFor: null,
  //     dots: true,
  //     centerMode: true,
  //     focusOnSelect: true
  //   };

  //   $carousels.each(function(index){
  //     var slickCarouselConfig = slickCarouselDefault;
  //     var addNavigator = $(this).hasClass('add-navigator');
  //     var $SlickNavigator = null;
  //     $(this).children(':not(div)').wrap('<div/>');
  //     // $(this).children('p').wrapInner('<p/>').changeElementType('<div/>');

  //     if(addNavigator){
  //       $SlickNavigator = $(this).clone()
  //         .removeClass('slick-carousel')
  //         .addClass('slick-carousel-navigator')
  //         .attr('id', $(this).attr('id') + '-navigator')
  //         .children().css('transform','scale(.1)');

  //       $(this).removeClass('add-navigator')
  //         .wrap('<div class="slick-carousel-wrapper"/>')
  //         .parent('.slick-carousel-wrapper').prepend($SlickNavigator);

  //       slickNavigatorConfig = slickNavigatorDefault;
  //       slickNavigatorConfig.asNavFor = $(this).id;
  //       $SlickNavigator.slick(slickNavigatorConfig);
  //       $SlickNavigator.appendTo($(this).parent.prepend);

  //       slickCarouselConfig.asNavFor = $SlickNavigator.attr('id');      
  //     }

  //     $(this).slick(slickCarouselConfig);
  //   });


  //   return $carousels;
  // }


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
 * ARIA Accessible Tabs and Accordions 
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

function initializeAriaTabGroups($content){
  $('[id][data-aria-tab-group]',$content).each(function(){
    var id = $(this).attr('id');
    var settings = $(this).data('ariaTabGroup');
    if(window.location.hash){
        // && $(this).find('a[href="window.location.hash"][role="tab"]').length > 0
        // console.log('window.location.hash = '+window.location.hash);
        if(typeof settings === 'string') settings = {'extend':settings};
        settings.defaultExpandedId = window.location.hash.substring(1);
      }
    new ariaTabGroup(id,settings);
  });
}

/**
 * ariaTabGroup() is a class constructor to create a ARIA-enabled tab panel widget. 
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
function ariaTabGroup(id, settings) { 
  // define the class properties 
  this.containerId = id; // store the id of the containing div 
  this.$container = $('#' + id);  // store the jQuery object for the tabset 

  if(typeof(settings)==='string' ){
    this.settings = this.settingsPreset(settings);
  }else if(typeof(settings)==='object'){
    this.settings = jQuery.extend(true,this.settingsPreset(settings.extend),settings);
  } else {
    this.settings = this.settingsPreset();
  }

	if(this.settings.tabDepth < 1)this.settings.tabDepth = 1;
  if(this.settings.tabPanelDepth < 1)this.settings.tabPanelDepth = 1;

  //this.layout = {'tabandpanels':null,'tabwithpanel':null};

  this.keys = new keyCodes(); // keycodes needed for event handlers 
	this.$tabList = this.initWidget('$tabList');
	this.$tabListItems = this.initWidget('$tabListItems');
	this.$tabs = this.initWidget('$tabs');
	this.$panels = this.initWidget('$panels');
	this.$helpRegion = this.initWidget('$helpRegion');

  // this.tabWrapSelector = '[role="tablist"] > *';
  // this.$tabListItems = this.$container.find('[role="tablist"]').children().has('[role="tab"]');
  //this.tabWrapHasPanel = $(this.tabWrapSelector).find();

  this.tabClick = false; // flag to track touch click events

  if(this.settings.queueOpeningEffect) this.openingEffectTimer;

  // Bind event handlers 
  this.bindHandlers(); 

  // Initialize the tab panel 
  this.init();

  console.log('New TabSet:'); 
  console.log(this); 

} // end ariaTabGroup() constructor 

// retrieves a set of preset settings
ariaTabGroup.prototype.settingsPreset = function(preset) { 
  var defaultSettings = {
        extend: '', // set this to the string identifier of a settings preset which to extend.
        navigateTabsByTabKey: false, // should both tab and arrow keys be used to navigate tabs
        expandPanelOnTabFocus: true, // should a panel be opened when it's tab has focus?
        focusPanelOnTabExpand: false, // should focus be set on the first focusable item in a panel when it is opened?
        focusTabOnPanelBlur: false, // should focus be sent back to the tab when "Shif+Tab" key is pressed from first panel focusable
        tabsMultiSelectable: false, // can multiple panels be open at once?
        tabsSelfClosable: false, // can an open panel be closed by it's own tab or only by opening oanother panel?
        navigateTabGridByArrowKeys: false, // should up and down arrow keys be used to navigate accros rows if tabs span multiple rows?
        navigateTabsAsCircularLoop: false, // should navigation keys loop to the other end when the end is reached in a group of tabs?
        scrollOnOpen: false, // should the browser window be scrolled to the top of a newly opened panel?
        updateLocationHash: false, // should the browser's location hash be updated when a panel is opened?
				getExpandedTabFromLocationHash: false, // test
				setLocationHashToExpandedTab: false, // test
				defaultExpandedId: '', // specify the ID of a tab or panel to be opened when the tabgroup is instantiated.
				// The settings.widgets object allows for any variety of HTML structures to be used with this plugin. 
				// Each '$…' element key represents an HTML DOM element that this plugin will reference and manipulate
			  // Five properties on these element keys are used to locate the elements in the HTML DOM.
			  // The 'selector', 'selectorContext', and 'selectorDepth'  properties of each key 
				// 	are used to define the jQuery selector by which to locate this element in the DOM.
			  // The 'relatedby' and 'relationship' properties of each key are alternatively used to define 
				// 	an aria relationship attribute in another DOM element that references this element's ID.
				widgets: {
					$tabSet: {
						selector: "[data-a2c-tabset]",
						selectorDepth: 0,
					},
					$tabList: { 
						selector:"[role='tablist']",
						relationship: "aria-owns",
						classes: {
							expanded:"has-active",
						},
					},
					$tabListItems: { 
						selector:"*",
						selectorContext: "$tabList",
						selectorDepth: 1,
						relatedby: "$tabList",
						relationship: "aria-owns",
						classes: {
							expanded:"active",
						},
					},
					$tabs: { 
						selector:"[role='tab']",
						selectorContext: "$tabList",
						relatedby: "$tabList",
						relationship: "aria-controls",
						classes:{
							focus: "focus",
							selected: "selected",
							expanded:"active",
						},
					},
					$panels: {
						selector:"[role='tabpanel']",
						relatedby: "$tabs",
						relationship: "aria-controls",							
						classes: {
							expanded:"active",
						},
					},
					$helpRegion: { 
						relatedby: "$tabList", 
						relationship: "aria-describedby",
					},
				},
        effect: 'none', // which effect should be used to hide/show the panels ['fade', 'slide', 'none']
        effectOptions: {duration:0}, // an options object to be passed to effect calling function
        queueOpeningEffect: true, // should the opening effect be delayed till closing operations are complete
        sync: function(tabgroup){return null;}, // this is a function that will be called by setInterval. Use it to keep dynamic layouts in order.
        syncInterval: 0, // number of milliseconds between each calling of the sync function
				// helpRegionId: '', // 
				helptext:{ // help text to be added to the help region
					navigateTabsByArrowKeys :{
						content: 		"Use the <key>&rarr;</key> and <key>&larr;</key> arrow keys to navigate through the tabs.",
						condition: {navigateTabsByTabKey:false},
						sort:10,
					},
					navigateTabsByTabKey :{
						content: 		"Use the <key>&rarr;</key> and <key>&larr;</key> arrow keys or <key>TAB</key> and <key>SHIFT</key>+<key>TAB</key> keys to navigate through all tabs",
						condition: {navigateTabsByTabKey:true},
						sort:20,
					},
					navigateTabGridByArrowKeys :{
						content: 		"Use the <key>&uarr;</key> and <key>&darr;</key> arrow keys to navigate vertically across rows of tabs.",
						condition: {navigateTabGridByArrowKeys:true},
						sort:30,
					},
					navigateTabContentByTabKey :{
						content: 		"Use the <key>TAB</key> and <key>SHIFT</key>+<key>TAB</key> keys to navigate expanded tabs and content.",
						condition: {navigateTabsByTabKey:false},
						sort:40,
					},
					navigateTabsAsCircularLoop :{
						content: 		"Tabs may be navigated as a circular loop.",
						condition: {navigateTabsAsCircularLoop:true},
						sort:50,
					},
					expandTabOnMouseClick :{
						content: 		"Expand tabs using the mouse click or <key>ENTER</key>/<key>RETURN</key> key.",
						condition: {tabsSelfClosable:false,expandPanelOnTabFocus:false},
						sort:60,
					},
					expandAndCloseTabOnMouseClick :{
						content: 		"Expand and close tabs using the mouse click or <key>ENTER</key>/<key>RETURN</key> key.",
						condition: {tabsSelfClosable:true,expandPanelOnTabFocus:false},
						sort:70,
					},
					expandTabOnFocus :{
						content: 		"Expand tabs upon focus or mouse click.",
						condition: {expandPanelOnTabFocus:true,tabsSelfClosable:false},
						sort:80,
					},
					expandAndCloseTabOnFocus :{
						content: 		"Expand and close tabs upon focus or mouse click.",
						condition: {expandPanelOnTabFocus:true,tabsSelfClosable:true},
						sort:90,
					},
					tabsMultiSelectable :{
						content: 		"Multiple tabs may be expanded at once.",
						condition: {tabsMultiSelectable:true},
						sort:100,
					},
				},
      };
  switch(preset){
    case 'tabs':
      return jQuery.extend(true,{},defaultSettings,{
				focusTabOnPanelBlur: true,
      });
    case 'tabs-grid':
      return jQuery.extend(true,{},this.settingsPreset('tabs'),{
				widgets:{
					$tabList:{selectorDepth:3},
				},
        navigateTabGridByArrowKeys: true,
      });
    case 'accordion':
      return jQuery.extend(true,{},defaultSettings,{
        expandPanelOnTabFocus: false,
				focusPanelOnTabExpand: true,
				focusTabOnPanelBlur: true,
				widgets:{
					$tabList:{selectorDepth:0},
				},
        tabsSelfClosable: true,
        effect: 'slide',
        effectOptions: {duration:200},
        queueOpeningEffect: false,
      });
    case 'accordion-grid':
      var tabgroup = this;
      return jQuery.extend(true,{},this.settingsPreset('accordion'),{
        navigateTabGridByArrowKeys: true,
        scrollOnOpen: true,
        updateLocationHash: true,
        effectOptions: {
              duration:200,
              step : function(now,fx){
                if(fx.prop == 'height')
                $(fx.elem).parent().css('padding-bottom',now+'px');
              },
            },
        sync: function(tabgroup){
            tabgroup.$panels.filter('[aria-hidden="false"]').each(function(){
                var tabpanelHeight = $(this).height();
                $(this).parent().css('padding-bottom',tabpanelHeight+'px');
            });
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
ariaTabGroup.prototype.init = function() { 
	console.log('Calling ariaTabGroup.init()');
  var tabGroup = this,
  		expandedId = tabGroup.settings.defaultExpandedId,
			$expandedTab = $();
	console.log('	init() : $activeTab =');
	console.log($expandedTab);
  // add aria attributes to the tabgroup container 
  tabGroup.$container.attr('aria-multiselectable', tabGroup.settings.tabsMultiSelectable); 

  // add aria attributes to the panels and hide  them
  tabGroup.$panels.attr('aria-hidden', 'true').hide(); 

  // for all tabs that control a panel...
	// swap tab href values for the aria-controls value
	// 	(href value might be pointing to URL of remote content for graceful degradation)
	// set aria-expanded to false, if it's not already set
  // set initial tabindex 
	tabGroup.$tabs.filter('[aria-controls]').each(function(index,element){
		var $tab = $(this);
		if($tab.attr('href')) $tab.attr('href','#'+$tab.attr('aria-controls'));
		if($tab.attr('aria-expanded') != 'true') $tab.attr('aria-expanded','false');
		tabGroup.setTabIndex($tab);
	});
	
	// if there is a tab to activate, 
	// set focus to it, expand it's panel, and set tabindex
	if(expandedId){
			 $expandedTab = tabGroup.$tabs.filter('#'+expandedId+',[aria-controls='+expandedId+']')
		}
	if($expandedTab.length === 0){
			 $expandedTab = tabGroup.$tabs.filter('[aria-controls][aria-expanded="true"]')
		}
  if($expandedTab.length > 0){
		$expandedTab.first().click();
		// tabGroup.setTabIndex($activeTab, true);
		// tabGroup.togglePanel($activeTab,true);
  }else{
		// otherwise, set the tabindex of the first tab
		tabGroup.setTabIndex(tabGroup.$tabs.eq(0), true);
	}
	
	// initialize sync function
  var syncFunction = tabGroup.settings.sync;
  if(typeof(syncFunction) == 'function' && tabGroup.settings.syncInterval > 0){
    setInterval(function(){ syncFunction(tabGroup); },tabGroup.settings.syncInterval);
  }

  // initialize remote tab links that lie outside this tabGroup
	this.initRemoteTabLinks();
	
} // end init() 

// initialize remote tab links 
ariaTabGroup.prototype.initRemoteTabLinks = function($element){
	if(!$element || $element.length > 0) var $element = $('body');
	var tabGroup = this;
	$element.find($('a[role="link"],a:not([role])')).each(function(){
		var $targetTab = $('a[role="tab"][aria-controls="'+this.hash.substring(1)+'"]');
		if(tabGroup.$tabs.is($targetTab)){
			$(this).click(function(e){
				$targetTab.click()
				e.preventDefault();
			});
		}
	});
}

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
ariaTabGroup.prototype.switchTabs = function($curTab, $newTab, expand) { 
  // Set focus on new tab and make it navigable 
  $newTab.focus();
	// expand panel if requested
	if(expand != null){
		this.togglePanel($newTab,expand);
	}
  // unfocus curent tab and remove tabindex
	// must happen AFTER panel open/close operations
	$curTab.blur();

  // // if panels should be oppened on tab focus  show the new tab panel
  // if (this.settings.expandPanelOnTabFocus == true || show===true) { 
  //   this.togglePanel($newTab,show); 
  // 		// if only one panel is allowed to be open, hide the current tab panel
  //   if(this.settings.tabsMultiSelectable == false ){
  //     this.togglePanel($curTab,false); 
  //   }
  //   // get new list of focusable elements 
  //   //this.$focusable.length = 0; 
  //   //this.$panels.find(':focusable'); 
  // } 

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
ariaTabGroup.prototype.togglePanel = function($tab,expand) { 
  if(this.$tabs.index($tab) === -1) return false;
  expand = expand == null ? null : expand ? true : false;
  // console.log('calling togglePanel()');
  // console.log('$tab: ');
  // console.log($tab);
  //console.log(expand);
  var tabGroup = this;
  var $tabWrapper = this.$tabListItems.has($tab);
  var $panel = this.$container.find('#' + $tab.attr('aria-controls')); 
  var panelHidden = $panel.attr('aria-hidden') == 'true' ? true : false ;
  var panelId = $panel.attr('id');
  var panelLoadUri = $panel.attr('data-load');
  var effectOptions = $.extend(true, {}, this.settings.effectOptions);
  var openingDelay = 0;
  var panelsToClose = [];
  if(panelHidden == false && this.settings.tabsSelfClosable == true && !expand){
     $panelsToClose = $panel;
     if(window.location.hash == '#'+panelId) this.clearLocationHash();
  }else if(panelHidden == true && this.settings.tabsMultiSelectable == false){
     $panelsToClose = this.$container.find('[role="tabpanel"][aria-hidden="false"]');
  }
  // if($panelsToClose.index($panel) > -1) expand = false;
  // console.log('panelHidden: '+panelHidden+', expand: '+expand);
  // console.log('$panelsToClose: ');
  // console.log($panelsToClose);
  if($panelsToClose.length > 0){ 
    // console.log('closing panels:');
    // console.log($panelsToClose);
    if($panelsToClose.is($panel) && tabGroup.settings.scrollOnOpen){ 
      scrollToElement($tabWrapper,false);
      $tab.focus(); //$panel.attr('aria-hidden', 'true').removeClass('active'); 
    }
    effectOptions.complete = function(){
        var $thisPanel = $(this);
        var thisPanelId = $thisPanel.attr('id');
        var $thisPanelTab = $('[role="tab"][aria-controls="'+thisPanelId+'"]');
        $thisPanel.attr('aria-hidden', 'true').removeClass('active');
        $thisPanelTab.attr('aria-expanded', 'false').attr('aria-selected', 'false').removeClass('active');//.attr('tabindex', '-1'); 
      };
    this.effectHide($panelsToClose,effectOptions);
    //$panel.slideUp(100); 
  }
  //console.log('panelHidden = '+panelHidden );
  //if($panelsToClose.filter($panel).length == 0)
  if(panelHidden == true || expand===true) { 
    if($panelsToClose.length > 0 && tabGroup.settings.queueOpeningEffect == true){
      //openingDelay = effectOptions.duration || $.fx.speed._default;
      openingDelay = effectOptions.duration || 400;
    } 

    // console.log('opening panel:');
    // console.log($panel);
    effectOptions.complete = function(){
        if(tabGroup.settings.scrollOnOpen) scrollToElement($panel,false);
        if(tabGroup.settings.updateLocationHash) window.location.hash = panelId;
        $panel.attr('aria-hidden', 'false').addClass('active');
        $tab.attr('aria-expanded', 'true').attr('aria-selected', 'true').addClass('active');//.attr('tabindex', '0'); 
        //if(tabGroup.settings.focusPanelOnTabExpand) $panel.find(':focusable').first().focus();
				if(tabGroup.settings.focusPanelOnTabExpand) $panel.focus();

      };
    if(panelLoadUri){
        $tab.attr('aria-busy',true);
        tabGroup = this;
        $panel.load(panelLoadUri,function(){
          $panel.attr('data-loaded',panelLoadUri).removeAttr('data-load');
          $tab.attr('aria-busy',false);
          tabGroup.effectShow($panel,effectOptions,openingDelay);
          initAjaxContent($panel);
					tabGroup.initRemoteTabLinks($panel);
        });
    }else{
      this.effectShow($panel,effectOptions,openingDelay);
    }
    //$panel.attr('aria-hidden', 'false').addClass('active'); 
    //$panel.slideDown(100); 
  }
  //} 

} // end togglePanel() 


// define effects to be called for hiding and showing the panels
ariaTabGroup.prototype.effectFunction = function(show){
  show = show == null ? null : show ? true : false;
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
ariaTabGroup.prototype.effectFunctionCall = function(show,$element,effectOptions,delayEffect){
  var effectFunction = this.effectFunction(show);
  if($element instanceof jQuery != true) return false;
  effectOptions = effectOptions == {} ? null : effectOptions;
  delayEffect = $.isNumeric(delayEffect) ? Number(delayEffect) : false;
  if(delayEffect){ 
    //if(this.settings.tabsMultiSelectable == false) clearTimeout(this.openingEffectTimer);
    this.openingEffectTimer = setTimeout(function(){
          $element[effectFunction](effectOptions);
        },delayEffect);
  }else{
    return $element[effectFunction](effectOptions);
  }
}
// use effect from settings to hide or show the panels
ariaTabGroup.prototype.effectHide = function($element,effectOptions,delayEffect){
  return this.effectFunctionCall(false,$element,effectOptions,delayEffect);
}
ariaTabGroup.prototype.effectShow = function($element,effectOptions,delayEffect){
  return this.effectFunctionCall(true,$element,effectOptions,delayEffect);
}
ariaTabGroup.prototype.effectToggle = function($element,effectOptions,delayEffect){
  return this.effectFunctionCall(null,$element,effectOptions,delayEffect);
}

ariaTabGroup.prototype.hasTabPanel = function($tab){
	return $tab.attr('aria-controls') != '' ? true : false;
}
ariaTabGroup.prototype.getPanelTab = function($panel){
	return this.$tabs.filter('[aria-controls="'+$panel.attr('id')+'"]');
}
ariaTabGroup.prototype.getTabPanel = function($tab){
	return this.$panels.filter('#'+$tab.attr('aria-controls'));
}
ariaTabGroup.prototype.setTabIndex = function($tab,tabindex){
  tabindex = tabindex === true || tabindex === 0 || this.settings.navigateBytabKey || this.isTabExpanded($tab) ? 0 : -1;
	$tab.attr('tabindex', tabindex);
	return this;
}
ariaTabGroup.prototype.isTabExpanded = function($tab){
	return $tab.attr('aria-expanded') == 'true' ? true : false;
}
ariaTabGroup.prototype.isPanelHidden = function($panel){
	return $panel.attr('aria-hidden') == 'true' ? true : false;
}
ariaTabGroup.prototype.getPreviousTab = function($tab){
	var index = this.$tabs.index($tab);
	index = index < 0 ? 0 : index;
	if(this.settings.navigateTabsAsCircularLoop){
		index = index == 0 ? -1 : index -1;		
	}else{
		index = index == 0 ? 0 : index -1;
	}
	return this.$tabs.eq(index);
}
ariaTabGroup.prototype.getNextTab = function($tab){
	var end = this.$tabs.length -1;
	var index = this.$tabs.index($tab);
	index = index < 0 ? 0 : index;
	if(this.settings.navigateTabsAsCircularLoop){
		index = index == end ? 0 : index +1;		
	}else{
		index = index == end ? end : index +1;
	}
	return this.$tabs.eq(index);
}
ariaTabGroup.prototype.isATab = function($tab){
	var index = this.$tabs.index($tab);
	return index > -1 ? true : false;
}

ariaTabGroup.prototype.isFirstTab = function($tab){
	var index = this.$tabs.index($tab);
	return index === 0 ? true : false;
}

ariaTabGroup.prototype.isLastTab = function($tab){
	var end = this.$tabs.length -1;
	var index = this.$tabs.index($tab);
	return index === end ? true : false
}

// return the $tab in the next or previous direction (same column) in a grid tab layout
ariaTabGroup.prototype.getNextVerticalTab = function($tab,direction) {
	if($tab instanceof jQuery === false) return;
	direction =  direction === true  || direction === 1 || direction === 'down' ? 1 : 
				 direction === false  || direction === -1 || direction === 'up' ? -1 :
				 0;
	var tabGroup = this,
      $tabWrapper = $tab.closest(tabGroup.$tabListItems),
	    tabOffset, tabPrevRowOffset, $newTab;
  if($tabWrapper.length){
    tabOffset = $tabWrapper.offset();
    tabPrevRowOffset = tabOffset.top + (direction * $tabWrapper.outerHeight(true));
    $newTab = tabGroup.$tabs.filter(
      function(index, thisTab){
        var thisTabOffset = $(thisTab).closest(tabGroup.$tabListItems).offset();
        if(thisTabOffset.top == tabPrevRowOffset && thisTabOffset.left == tabOffset.left) {
					return true;
				}
      });
  }
	return $newTab;
}

/**
 * initWidget(selector)
 *
 * settings.widgets[key]
 * [key].selector (string) :
 *		jQuery selector or key from this.settings.elements.
 *		if a key from this.settings.elements is used, all other values for this init property will be inherited from that key's init property
 *    "" or NULL will result in "*" (default)
 *		all other strings will be treated as a jQuery selector
 *    the result will be a jQuery selector passed to either find() or filter() methods called on a jQuery object
 * [key].selectorContext (string) :
 *		jQuery selector or key from this.settings.elements.
 *		If there no elements are found using query.relatedby and query.relationship properties below...
 *		if a key from this.settings.elements is used, the associated jQuery object will be referenced
 *    "" or NULL (default) will result in referencing the parent $tabSet jQuery object
 *		all other strings will be treated as selectors, from which a jQuery object will be built
 *		the resulting jQuery object will have filter() or find() called on it to obtain the desired elements
 * [key].selectorDepth (number) :
 *		If there no elements are found using query.relatedby and query.relationship properties below...
 *		0 will attempt to call filter() on the jQuery Object returned by query.selectorContext, using the unmodified query.selector as an argument. 
 * 		all other values will result in find() being called on the jQuery object returned by query.selectorContext
 * 		1 will prepend ">" to query.selector, selecting from the first level children. 
 * 		any other number will prepend "> *" N times to query.selector, selecting from the specified level children. 
 * 		NULL (default) will select from any level children.
 * [key].relationship (string) :
 *		may by the name of any HTML attribute whose allowed value is of the type "ID Reference List"
 *		this includes the following aria relationship attributes:
 *		"aria-describedby" "aria-controls","aria-flowto","aria-labelledby", "aria-owns"
 *		"" or NULL (default) will result in no action taken
 * [key].relatedBy (string) :
 *		jQuery selector or key from this.settings.elements.
 *		If query.relationship property is a valid attribute name, determine which element(s) the attribute will be found in...
 *		if a key from this.settings.elements is used, the associated jQuery object will be referenced
 *    "" or NULL (default) will result in referencing the parent $tabSet jQuery object
 *		All other strings will be treated as selectors, from which a jQuery object will be built.
 *		Each element in this jQuery object will be querried for the attribute indicated by query.relationship
 *		If the attribute and values are found, then a new jQuery object will be made 
 *		by selecting all the element IDs found in the attributes' values
 *		This new jQuery object will then be filtered using the query.selector string above
 *		to determin the final collection of DOM elements
 */
ariaTabGroup.prototype.initWidget = function(key){
	console.log('Calling initWidget('+key+')')
	if (typeof key !== 'string' || this.settings.widgets[key] === undefined){
		return $();// TODO return error
	}
	var $elements = $(),
			elementSettings = this.settings.widgets[key],
	 		$selector,depth,depthString,$context;
	
	//console.log('	initWidget('+key+') elementSettings : ');
	//console.log(elementSettings);

	if(elementSettings.relationship !== undefined ){
		$selector = this.getWidget(elementSettings.selector, false);
		$context = this.getRelatedElements(elementSettings.relatedby,elementSettings.relationship);
		$elements = $context.length > 0 ? $context.filter($selector) : $elements;
		//console.log('	initWidget('+key+') found '+$elements.length+' elements via relationship attributes');
	}
	if(elementSettings.selector !== undefined && $elements.length === 0){
		$selector = this.getWidget(elementSettings.selector, false);
		$context = this.getWidget(elementSettings.selectorContext);
		depth = typeof elementSettings.selectorDepth === "number" ? elementSettings.selectorDepth : null;
		if(depth > 0 ){
			// elementSettings children at a specified depth
			depthString = '> ';
		  for (var i = 1; i < depth; i++) {
		    depthString = '> * '+depthString;
			}
			$elements = 
				$selector instanceof jQuery ? 
				$context.find(depthString+'* ').filter($selector):
				$context.find(depthString+$selector);
		}
		if(depth === 0){
			// filter the context object
			$elements = $context.filter($selector);
		}
		if(depth == null){
			// elementSettings all children
			$elements = $context.find($selector);
		}
		//console.log('	initWidget('+key+') found '+$elements.length+' elements via selector and context.');
	}
	// console.log($elements);
	return $elements;
}

/**
 * getRelatedElements(relatedby,relationship)
 *
 * query the DOM to find 'related' elements from the content's of an element's 'relationship' attribute
 * 
 * @param relatedby (string,jQuery) a widgetKey, jQuery selector, or jQuery object on which a relationship attribute is present.
 * @param relationship (string) the name of the attribute which contains a single or list of element IDs
 * @returns (jQuery) a list of elements found to be 'related'
 */
ariaTabGroup.prototype.getRelatedElements = function(relatedby,relationship){
	console.log('Calling getRelatedElements("'+relatedby+'", "'+relationship+'")');
	if( relatedby != null && 
			typeof relatedby !== 'string' && 
			relatedby instanceof jQuery === false) {
		return; // TODO generate error
	}
	if(typeof relationship !== 'string' ) {
		return; // TODO generate error
	}
	var $relatedby = relatedby instanceof jQuery ? relatedby : this.getWidget(relatedby);
	var $related = $();
	var attrValue = "";
	var attrSplit = [];
	console.log('	getRelatedElements() found  '+$relatedby.length+' elements to check for relationship attribute');
	$relatedby.each(function(){
		attrValue = $(this).attr(relationship);
		if(typeof attrValue !== 'string' || attrValue === ""){
			return; // TODO generate notice
		}
		attrSplit = attrValue.indexOf(', ') > -1 ? attrValue.split(', ') : 
								attrValue.indexOf(',') > -1 ? attrValue.split(',') :
								attrValue.split(' ') ;
	  //console.log('$relatedby : found '+attrSplit.length+' element IDs in "['+relationship+']"');
	  for(index in attrSplit){
		  console.log('	getRelatedElements() adding "#'+attrSplit[index]+'" to $related');
			$related = $related.add('#'+attrSplit[index]);
		}
	});
	console.log('	getRelatedElements() found '+$related.length+' related elements');
	return $related;
}

/**
 * getWidget(key,callJQuery)
 *
 */
ariaTabGroup.prototype.getWidget = function(key,callJQuery){
	callJQuery = callJQuery === false ? false : true ;
	if(key == null || key == "" || typeof key !== 'string'){
		return callJQuery ?  this.$container : "";
	}
	if(this[key] !== undefined && this[key] instanceof jQuery){
		return this[key];
	}
	if(this.settings.widgets[key] !== undefined){
		return this.initWidget(key);
	}
	return callJQuery ? $(key,this.$container) : key;
}

// 
// Function bindHandlers() is a member function to bind event handlers for the tabs 
// 
// @return N/A 
// 
ariaTabGroup.prototype.bindHandlers = function() { 

  var tabGroup = this; // Store the this pointer for reference 

  ////////////////////////////// 
  // Bind handlers for the tabs / accordian headers 

  // bind a tab keydown handler 
  this.$tabs.keydown(function(e) { 
    return tabGroup.handleTabKeyDown($(this), e); 
  }); 

  // bind a tab keypress handler 
  this.$tabs.keypress(function(e) { 
    return tabGroup.handleTabKeyPress($(this), e); 
  }); 

  // bind a tab click handler 
  this.$tabs.on('click touchstart touchmove touchend',function(e) { 
		switch(e.type){
			case 'touchstart':
				tabGroup.tabClick = true;
				return;
			case 'touchmove':
				tabGroup.tabClick = false;
				return;
			case 'click':
				tabGroup.tabClick = true;			
		}
		if(tabGroup.tabClick == true){
			tabGroup.tabClick = false;
    	return tabGroup.handleTabClick($(this), e); 
		}
  }); 

  // bind a tab focus handler 
  this.$tabs.focus(function(e) { 
    return tabGroup.handleTabFocus($(this), e); 
  }); 

  // bind a tab blur handler 
  this.$tabs.blur(function(e) { 
    return tabGroup.handleTabFocus($(this), e); 
  }); 

  ///////////////////////////// 
  // Bind handlers for the panels 
   
  // bind a keydown handlers for the panel focusable elements 
  this.$panels.keydown(function(e) { 
    return tabGroup.handlePanelKeyDown($(this), e); 
  }); 

  // bind a keypress handler for the panel 
  this.$panels.keypress(function(e) { 
    return tabGroup.handlePanelKeyPress($(this), e); 
  }); 

  // bind a focus handler for the panel 
  this.$panels.focus(function(e) { 
    return tabGroup.handlePanelFocus($(this), e); 
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
ariaTabGroup.prototype.handleTabKeyDown = function($tab, e) { 
  if (e.altKey) { 
    // do nothing 
    return true; 
  } 

  var keyCode = e.keyCode;
  var tabExpanded = this.isTabExpanded($tab);

	// 'tab' keypress should act just the same as arrow keys, if tab is closed and navigateTabsByTabKey is true
	// TODO handle case where navigateTabsByTabKey is true and last or first tab has focus
  if (keyCode == this.keys.tab && this.settings.navigateTabsByTabKey === true && tabExpanded != true) {
      if(e.shiftKey){ 
        keyCode = this.keys.left; 
      }
      else{ 
        keyCode = this.keys.right; 
      }
    }

  switch (keyCode) { 
    case this.keys.enter: 
    case this.keys.space: { 
      // only consume 'enter' or 'space' keypress if $tab has an 'aria-controls' attribute
			// because we want to allow regular links to be included in the tab navigation
      if(!this.hasTabPanel($tab)) {
				return true;
			} 
      // toggle the panel if it has not been toggled on focus
      if (!tabExpanded || tabExpanded && this.settings.tabsSelfClosable) { 
        this.togglePanel($tab); 
      }
			// set focus on panel if it is now open
			if (this.isTabExpanded($tab)){
        //this.$panels.filter('#'+$tab.attr('aria-controls')).find(':focusable').first().focus();
				this.handlePanelFocus(this.getTabPanel($tab),e,0);
      }
      e.stopPropagation(); 
      return false; 
    } 

    case this.keys.tab: {
			// only consume 'tab' keypress if $tab panel is open, and then only if a focausable element lies within
      if(tabExpanded == true){
        //this.$panels.filter('#'+$tab.attr('aria-controls')).find(':focusable').first().focus();
				$tab = e.shiftKey ? this.getPreviousTab($tab) : $tab;
				return this.handlePanelFocus(this.getTabPanel($tab),e);
      }
			return true;
    }

    case this.keys.left: 
    case this.keys.up: { 

      var tabGroup = this; 
      var $prevTab; // holds jQuery object of tab from previous pass 
      var $newTab; // the new tab to switch to 

      if (e.ctrlKey) { 
        // Ctrl+arrow moves focus from panel content to the open 
        // tab/accordian header. 
      }
      else { 
       // use arrow keys to navigate "up" and "down" rows in a grid tab layout
        if(tabGroup.settings.navigateTabGridByArrowKeys == true && keyCode == tabGroup.keys.up){
					$newTab = tabGroup.getNextVerticalTab($tab,'up');
          // var $tabWrapper = $tab.closest(tabGroup.$tabListItems);
          // if($tabWrapper){
          //   var tabOffset = $tabWrapper.offset();
          //   var tabPrevRowOffset = tabOffset.top - $tabWrapper.outerHeight(true);
          //   $newTab = tabGroup.$tabs.filter(
          //     function(index, thisTab){
          //       var thisTabOffset = $(thisTab).closest(tabGroup.$tabListItems).offset();
          //       //console.log('upkey :: thisTab top:'+thisTabOffset.top+' left:'+thisTabOffset.left+' :: original top:'+tabOffset.top+' left:'+tabOffset.left+'  outerHeight:'+$tabWrapper.outerHeight(true));
          //       if(thisTabOffset.top == tabPrevRowOffset && thisTabOffset.left == tabOffset.left) return true;
          //     });
          // }
        }
        if(!$newTab || !$newTab.length){       
          var curNdx = this.$tabs.index($tab); 

          if (curNdx == 0 && this.settings.navigateTabsAsCircularLoop == true) { 
            // tab is the first one: 
            // set newTab to last tab 
            $newTab = this.$tabs.last(); 
          } 
          else { 
            // set newTab to previous 
            $newTab = this.$tabs.eq(curNdx - 1); 
          }
        } 
        // switch to the new tab 
        if($newTab.length) this.switchTabs($tab, $newTab);
        e.stopPropagation(); 
        return false;
      } 
    } 
    case this.keys.right: 
    case this.keys.down: { 

      var tabGroup = this; 
      var foundTab = false; // set to true when current tab found in array 
      var $newTab; // the new tab to switch to 

      if (e.ctrlKey) { 
        // Ctrl+arrow
      }
      else{
        // use arrow keys to navigate "up" and "down" rows in a grid tab layout
        if(this.settings.navigateTabGridByArrowKeys == true && keyCode == this.keys.down){
					$newTab = tabGroup.getNextVerticalTab($tab,'down');
          // //console.log('key down: tabWrapSelector = '+tabGroup.tabWrapSelector);
          // var $tabWrapper = $tab.closest(tabGroup.$tabListItems);
          // if($tabWrapper){
          //   var tabOffset = $tabWrapper.offset();
          //   var tabNextRowOffset = tabOffset.top + $tabWrapper.outerHeight(true);
          //   $newTab = tabGroup.$tabs.filter(function(index, thisTab){
          //       var thisTabOffset = $(thisTab).closest(tabGroup.tabWrapSelector).offset();
          //       //console.log('downkey :: thisTab top:'+thisTabOffset.top+' left:'+thisTabOffset.left+' :: original top:'+tabOffset.top+' left:'+tabOffset.left+'  outerHeight:'+$tabWrapper.outerHeight(true));
          //       if(thisTabOffset.top == tabNextRowOffset && thisTabOffset.left == tabOffset.left) return true;
          //     });
          // }
        }
        if(!$newTab || !$newTab.length){
          var curNdx = this.$tabs.index($tab); 

          if (curNdx == this.$tabs.last().index() && this.settings.navigateTabsAsCircularLoop == true) { 
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
        if($newTab.length)this.switchTabs($tab, $newTab);
        e.stopPropagation(); 
        return false;
      }
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
    case this.keys.esc:{
      return true; 
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
ariaTabGroup.prototype.handleTabKeyPress = function($tab, e) { 

  if (e.altKey) { 
    // do nothing 
    return true; 
  } 

  switch (e.keyCode) { 
    case this.keys.enter: 
    case this.keys.space: 
      if(!$tab.attr('aria-controls')) return true;
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
ariaTabGroup.prototype.handleTabClick = function($tab, e) { 

  // remove all tabs from the tab order 
  //this.$tabs.attr('tabindex', '-1'); 

  // make clicked tab navigable 
  //$tab.attr('tabindex', '0'); 

  if(!$tab.attr('aria-controls')) return true;

  // Expand the new panel 
  this.togglePanel($tab); 

  e.stopPropagation(); 
  return false; 

} // end handleTabClick() 


// 
// Function handleTabFocus() is a member function to process focus and blur events for tabs 
// 
// @param ($tab object) $tab is the jQuery object of the tab being processed 
// 
// @paran (e object) e is the associated event object 
// 
// @return (boolean) returns true 
//
ariaTabGroup.prototype.handleTabFocus = function($tab,e,focus){
	focus = focus ? true :
					focus != null ? false :
					e == null || e.type == null ? null : 
					e.type === 'focus' ? true : 
					e.type === 'blur' ? false:
					e.keyCode && e.shiftKey ? false:
					e.keyCode ? true:
					null;
	// set focus class
	if(focus !== null){
		$tab.toggleClass('focus', focus);
	}
	// modify tabindex if tab key is not used for navigation and new focus target is also a tab
	if(this.settings.navigateTabsByTabKey === false &&(
			focus === true ||
			(focus === false && this.isATab(e.relatedTarget) === true)
			)){
		this.setTabIndex($tab, focus);
		// 		console.log('handleTabFocus($tab, e,focus)');
		// 		console.log(e);
		// 		console.log($tab);
		// 		console.log(focus);
	}
		
	// show or hide the panel
  if(focus && this.settings.expandPanelOnTabFocus){
		this.togglePanel($tab,true);
	} 
  
	return this;
}


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
ariaTabGroup.prototype.handlePanelKeyDown = function($panel, e) { 
  if (e.altKey) { 
    // do nothing 
    return true; 
  } 

  // get the jQuery object of the tab 
  var $tab = this.$tabs.filter('[aria-controls="'+$panel.attr('id')+'"]'); 

  switch (e.keyCode) { 
    case this.keys.tab: { 
			return this.handlePanelFocus($panel,e);
    } 
    case this.keys.left: 
    case this.keys.up: { 

      if (!e.ctrlKey) { 
        // do not process 
        return true; 
      } 
   
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
      $tab.focus();
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
ariaTabGroup.prototype.handlePanelKeyPress = function($panel, e) { 

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




// 
// Function handlePanelFocus() is a member function to process focus or keyboard events
// determine where focus should land when sent to a panel.
// 
// @param ($panel obj) $panel is the jquery object of the panel being processed 
// @paran (e obj) e is the associated event object 
// @param (increment boolean) the direction of focus change. "true" will move focus forward. "false" will move the focus backward. "null" will not move focus;
// @param (increment number) the direction of focus change. "1" will move focus forward. "-1" will move the focus backward. "0" will not move focus;
// 
// @return (boolean) Returns true if propagating; false if consuming event 
//
ariaTabGroup.prototype.handlePanelFocus = function(panel, e, shift){
  	$panel = $(panel);
		$eventTarget = $(e.target);
		shift = shift === null || shift === 0 || shift === 'none' ? 0 :
					  shift === false || shift < 0 || shift === 'prev' ? -1 :
					  shift === true || shift > 1 || shift === 'next' ? 1 :
					  shift === undefined && e.keyCode == null ? 0 :
					  shift === undefined && e.keyCode && e.shiftKey ? -1 :
					  1;
		var panelNdx,numPanels,$newTarget,
     		$focusable = $panel.find(':focusable'),
     		curNdx = $focusable.index($eventTarget); 
		// if current focus is outside the panel, 
		// assume it is the first focusable item in the panel if shift is set to none
		curNdx = shift === 0 && $focusable.length && curNdx === -1 ? 0 : curNdx;

		// console.log('focusOnPanel()');
		// console.log('$panel: ');
		// console.log($panel);
		// console.log('$eventTarget: ');
		// console.log($eventTarget);
		// console.log('shift: ' + shift);
		// console.log('$focusable: ');
		// console.log($focusable);
		// console.log('curNdx: '+curNdx);

		// if there is a focusable item in the panel then go to it
		// unless the current focus is on the first (or last) item in the panel and shift is -1 (or 1)
		if ($focusable.length && (
				(shift === 0) || 
				(shift === -1 && curNdx > 0) || 
				(shift === 1 && curNdx < $focusable.length -1)
				)) {
			$newTarget = $focusable.eq(curNdx + shift);
			console.log(' - focus on item in panel (#'+$newTarget.attr('id')+')');
		}
		// otherwise send focus to outside this panel
		else {
	    panelNdx = this.$panels.index($panel); 
	    numPanels = this.$panels.length;
			// if the focusTabOnPanelBlur setting is set to true AND ... 
			// 	if current focus is on the first (or last) item in the panel and shift is -1 (or 1)
			// 	or if current focus is outside the panel and shift is 0 or 1 and there is nothing to focus on in the panel
			// THEN send focus to the parent tab.
			if(this.settings.focusTabOnPanelBlur &&
					(shift === -1 && curNdx === 0) ||
					(shift ===  1 && curNdx > 0 && curNdx === $focusable.length -1) ||
					(shift === 0 && !$focusable.length)
				){
				$panel = shift === 1 && curNdx > 0 ? this.$panels.eq(panelNdx + shift) :  $panel;
				$newTarget = this.getPanelTab($panel);
				//$newTarget = this.getPanelTab($panels.eq(panelNdx + shift));
				console.log(' - focus on panel tab (#'+$newTarget.attr('id')+')');
			}
			// otherwise, 
			// if this is the last (or first) panel, 
			// go to next (or previous) focusable item outside the tabset.
			else if(
				(shift == 1 && panelNdx == numPanels -1) || 
				(shift == -1 && panelNdx == 0) 
				){
				console.log(' -  send focus outside this tabgroup');
				return true;
			// otherwise 
			// call this method for the next (or previous) panel to find other focusable items
			}else{
				$panel = this.$panels.eq(panelNdx + shift);
				console.log(' - send focus to another panel (#'+$panel.attr('id')+')');
				return this.handlePanelFocus($panel,event,shift);
			}
		}
		
	  $newTarget.focus();
    e.stopPropagation(); 
		return false;
}


// // tabGroup property getter
// // return a selector for the outermost element that wraps a single tab
// ariaTabGroup.prototype.getTabWrapSelector = function($tab) {
//   if(typeof $tab === 'undefined' || $tab.length == 0) $tab = this.$tabs.first();
//   //return $tab.closest('* ~ [role="tab"]');
//   var $parentWrapper;
//   var parentSelector='';
//   var parentSelectorMod = '';
//   var childSelector = '';
//   var childSelectorMod = '';
//   for (var i = 0; i == this.settings.tabDepth; i++) {
//     childSelector = ' + '+childSelectorMod+'[role="tab"]';
//     parentSelector = '[role="tab"]'+parentSelectorMod;
//     //console.log('try : tabWrapSelector = '+parentSelector);
//     $sibling = $tab.closest(childSelector);
//     if($sibling.length > 0) return parentSelector;
//     parentSelectorMod = parentSelectorMod.concat(':parent');
//     childSelectorMod = childSelectorMod.concat(' > ');
//   };
//   return null;
// } // end findTabWrapper()


// remove location.hash without scrolling page to top
// http://stackoverflow.com/a/5298684
ariaTabGroup.prototype.clearLocationHash = function() { 
    var scrollV, scrollH, loc = window.location;
    if ("pushState" in history)
        history.pushState("", document.title, loc.pathname + loc.search);
    else {
        // Prevent scrolling by storing the page's current scroll offset
        scrollV = document.body.scrollTop;
        scrollH = document.body.scrollLeft;

        loc.hash = "";

        // Restore the scroll offset, should be flicker free
        document.body.scrollTop = scrollV;
        document.body.scrollLeft = scrollH;
    }
}

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

    // If tabindex is defined, its value must be greater than or equal to 0 
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





