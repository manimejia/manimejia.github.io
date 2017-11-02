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
  console.log("DOCUMENT READY")
});


$(document).ready(function(){
  // console.log("DOCUMENT READY");
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
    $("*").removeClass("child-has-focus");
    $(document.activeElement).parents().addClass("child-has-focus");
  });
  $(document).focusout(function(e){
    document.previousActiveElement = document.activeElement;
  });

  // make sure modal links transfer focus 
  // to newly opened modal when clicked
  $(document).on('opened.fndtn.reveal', '[data-reveal]', function (e) {
    var $modal = $(this);
    var $trigger = $(e.delegateTarget.activeElement);
    $modal.data('revealTrigger', $trigger);
    $modal.focus();
  });
  // TODO releasing focus to modal trigger does not work yet
  $(document).on('closed.fndtn.reveal', '[data-reveal]', function () {
    var $modal = $(this);
    $modal.data('revealTrigger').focus();
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


  // $.uix.init();
  
  // initialize skrollr library
  if(typeof skrollr === 'object' && typeof skrollr.init === 'function') skrollr.init();

  init();

  // take action on URL params
  var filterParam = getUrlParameter('filter');
  if(filterParam){
    filterPortfolioItems(decodeURIComponent(filterParam));
  }


});

function init($content){
  $content = $content || $(document);

  // add .focusable class to all focusable elements
  $(':focusable').toggleClass('focusable',true);

  // initialize click callback for internal hash links 
  // to triger scrolling animation 
  $('a[href]').each(function(e){
    if(this.hash){
      var sameHostname = this.hostname == window.location.hostname;
      var samePathname = this.pathname == window.location.pathname;
      var $target,tabindex;
      if(sameHostname && samePathname){
        $target = $(this.hash);
        if($target.length > 0){
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
    }
  });


  // initialize scroll callback for 
  // .fixed-inside-parent elements
  $(".fixed-inside-parent").each(function(){
    var $this = $(this),
        $parent = $this.parent();
  
    $(window).on("scroll", function(e) {
      var scrollTop = $(window).scrollTop();
          fixedTop = $parent.offset().top - $this.height();
          fixedBottom = fixedTop + $parent.height() - $this.height();
  
      if ( scrollTop >  fixedTop && scrollTop < fixedBottom) {
        // console.log(
        //   "FIXED TO #" 
        //   + $parent.attr('id') + " : " 
        //   + "\n\t(" + scrollTop + "=" + $(window).scrollTop() +") > " 
        //   + "\n\t(" + fixedTop + "=" + $parent.offset().top + "+" + $this.height()+")"
        //   );
        $this.addClass("fixed");
      } else {
        $this.removeClass("fixed");
      }
    });
  });

  // initialize click callback callback for 
  // [copy-on-click] elements
  $("[data-copy-on-click]").click(function(e){
      // console.log("clicked",this);
      var targetId = $(this).attr("data-copy-on-click");
      copyContents(this,targetId,true);
  });

  // initialize foundation
  $content.foundation();
  // initialize UIX
  $.uix.init($content);

};

function filterPortfolioItems(newVals,doCloseAll,updateHistory){
  newVals = 
    typeof newVals === "string" ? [newVals] :
    newVals instanceof Array ? newVals :
    newVals === false ? false :
    null;
  doCloseAll = doCloseAll == false ? false : true,
  updateHistory = updateHistory == false ? false : true;
  var 
    $portfolioFilters = $('#portfolio-filters'),
    $portfolioList = $('#portfolio-accordion-grid'),
    showAllClass = 'filter-show-all',
    showItemClass = 'filter-show',
    filterAttr = 'data-filter',
    filterVal = 'showall',
    doShowSome = false;

    if(newVals === false || (newVals && newVals.toString() === filterVal)){
      $portfolioList.addClass(showAllClass)
        .find('['+filterAttr+']').removeClass(showItemClass);
      $portfolioFilters.addClass(showAllClass)
        .find('['+filterAttr+']').prop('checked',false);
    }else{
      if(newVals instanceof Array){
        for(i in newVals){
          if(typeof newVals[i] === "string")
          $("input["+filterAttr+"="+newVals[i]+"]", $portfolioFilters).prop('checked',true);
        }
      }
      $portfolioList.removeClass(showAllClass)
        .find('.'+showItemClass).removeClass(showItemClass);
      $portfolioFilters.removeClass(showAllClass)
        .find('input').each(function(){
          var $input = $(this);
          if($input.prop('checked')){
            filterVal = $input.attr(filterAttr);
            doShowSome = true;
            $portfolioList.find('['+filterAttr+'~='+filterVal+']').addClass(showItemClass);
          }
        });
    }
    $portfolioFilters.find('select').val(filterVal);
    // $filterDisplaySelected.content('All Projects');
    // if(!doShowAll && !doShowSome) filterPortfolioItems(false);
    if(updateHistory ) {
      history.pushState({}, "", setUrlParameter("filter",newVals));
    }
    $.uix.scrollToElement('#portfolio',false);
}

/**
* http://stackoverflow.com/questions/22581345/click-button-copy-to-clipboard-using-jquery
*/
function copyContents(elem,targetId,restoreFocus,restoreSelection) {
    // create hidden text element, if it doesn't already exist
    targetId = targetId || "_hiddenCopyText_";
    var isInput = elem.tagName === "INPUT" || elem.tagName === "TEXTAREA";
    var origSelectionStart, origSelectionEnd;
    if (isInput) {
        // can just use the original source element for the selection and copy
        target = elem;
        origSelectionStart = elem.selectionStart;
        origSelectionEnd = elem.selectionEnd;
    } else {
        // must use a temporary form element for the selection and copy
        target = document.getElementById(targetId);
        if (!target) {
            var target = document.createElement("textarea");
            target.style.position = "absolute";
            target.style.left = "-9999px";
            target.style.top = "0";
            target.id = targetId;
            document.body.appendChild(target);
        }
        target.textContent = elem.textContent;
    }
    // select the content
    var currentFocus = document.activeElement;
    target.focus();
    target.setSelectionRange(0, target.value.length);
    
    // copy the selection
    var succeed;
    try {
        succeed = document.execCommand("copy");
    } catch(e) {
        succeed = false;
    }
    // restore original focus
    if (currentFocus && typeof currentFocus.focus === "function" && restoreFocus) {
        currentFocus.focus();
    }
    
    if (isInput && restoreSelection) {
        // restore prior selection
        elem.setSelectionRange(origSelectionStart, origSelectionEnd);
    } else {
        // clear temporary content
        target.textContent = "";
    }
    if(succeed){
      $(elem).addClass("copied");
    }
    return succeed;
}

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


  function getUrlParameter(param, url){
       url = typeof url == "string" ? url : document.location.href;
       var a = document.createElement('a');
       a.setAttribute("href",url);
       var vars = a.search.substring(1).split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == param){
                 return pair[1];
               }
       }
       return null;
  }
  function setUrlParameter(param, value, url){
       url = typeof url == "string" ? url : document.location.href;
       var a = document.createElement('a');
       a.setAttribute("href",url);
       var vars = a.search.substring(1).split("&");
       for (var i=0;i<vars.length;i++) {
           if(vars[i] === "" || vars[i].indexOf(param)===0) vars.splice(i,1);
       }
       if(value !== false) vars.push(param+"="+value);
       a.search = vars.length ? "?" + vars.join("&") : '';
       // hash = hash ? "#" + match[3] : '';
       return a.getAttribute("href");
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






