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
  $(document).focusin(function(e){
    if($(document.activeElement).is('body') && document.previousActiveElement ){
      $(document.previousActiveElement).focus();
    }
  });
  $(document).focusout(function(e){
    document.previousActiveElement = document.activeElement;
  });

  // add scrolling animation to internal hash links
  $('a[href]').each(function(e){
    if(this.hash){
      var $target = $(this.hash);
      var sameHostname = this.hostname == window.location.hostname;
      var samePathname = this.pathname == window.location.pathname;
      var tabindex;
      if($target.length > 0 && sameHostname && samePathname){
        tabindex = $target.attr('tabindex');
        $(this).aria('flowto',this.hash.substring(1),'add');
        $(this).click(function(e){
          $.uix.scrollToElement($target,true);
          if(!(tabindex > -1)){
            $target.attr('tabindex',0);
          }
          $target.focus();
          e.preventDefault();
          return true;
        });
        $target.blur(function(){
          if(tabindex !== null){
            $(this).attr('tabindex',tabindex);
          }else{
            $(this).removeAttr('tabindex');
          }
        });
      }
    }
  });
  // $(':target').each(function(e){
  //   $this = $(this);
  //   $.uix.scrollToElement($this,true);
  //   if($this.attr('tabindex') > -1){
  //     $this.attr('tabindex',0);
  //   }
  //   this.focus();
  //   e.preventDefault();
  // })
  
  //$('.top-bar .toggle-topbar a').attr('href','');
  $('.top-bar .top-bar-section a').click(function(e){
    $(this).closest('.top-bar').find('.toggle-topbar:visible a').click();
  });
  

  $('#topbar-homepage').focus();
  $(':focusable').toggleClass('focusable',true)


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






