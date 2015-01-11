/***
 requires:
   jquery.js
   foundation.js
	 uix-widgets.js
****/

// var syncAccordionGridContentHeight;

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


	$.uix.init();
  
  // initialize skrollr library
  if(typeof skrollr === 'object' && typeof skrollr.init === 'function') skrollr.init();


});


function initAjaxContent($content){
  $(':focusable').toggleClass('focusable',true);
  // initialize foundation
  $content.foundation();
  $.uix.init($content);
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


  function getUrlParameter(param){
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == param){return pair[1];}
       }
       return('');
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






