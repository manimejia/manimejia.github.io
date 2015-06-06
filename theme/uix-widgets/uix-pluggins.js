(function( $ ) {  

  var rclass = /[\t\r\n\f]/g;
  var rnotwhite = /\S+/g;
  var dataPriv = new Data();


// plugins
$.fn.extend({
  normalHref: function(){
    // jQuery support: IE7
    // IE7 doesn't normalize the href property when set via script (issue #9317)
    var anchor = this.get(0).cloneNode( false );
    return anchor.href(); 
  },
  
  aria: function(attr,value,tokenOpp){
    return this.attr('aria-'+attr,value,tokenOpp);
  },

	attr: function( attr, value , tokenOpp ) {
    var tokenFuncion = 
        tokenOpp === 'add' ? 'attrAddToken' :
        tokenOpp === 'remove' ? 'attrRemoveToken' :
        tokenOpp === 'toggle' ? 'attrToggleToken' :
        tokenOpp === 'has' ? 'attrHasToken' :
        null;
    if( tokenFuncion && typeof(attr) === 'string' && typeof value === 'string'){
      return this[tokenFuncion](attr,value);
    }
		return $.access( this, $.attr, attr, value, arguments.length > 1 );
	},

	attrAddToken: function( attr, value ) {
		var values, elem, curValue, newValue, j, finalValue, getValue,
		  attrIsString = typeof attr === "string" && attr,
			valueIsString = typeof value === "string" && value,
			i = 0,
			len = this.length;

		if (attrIsString && jQuery.isFunction( value ) ) {
			return this.each(function( j ) {
				jQuery( this ).attrAddToken( attr, value.call( this, j, this.getAttribute(attr) ) );
			});
		}

		if (attrIsString && valueIsString ) {
			// The disjunction here is for better compressibility (see removeClass)
			values = ( value || "" ).match( rnotwhite ) || [];

			for ( ; i < len; i++ ) {
				elem = this[ i ];
				getValue = elem.getAttribute(attr);
				curValue = elem.nodeType === 1 && ( getValue ?
					( " " + getValue + " " ).replace( rclass, " " ) :
					" "
				);

				if ( curValue ) {
					j = 0;
					while ( (newValue = values[j++]) ) {
						if ( curValue.indexOf( " " + newValue + " " ) < 0 ) {
							curValue += newValue + " ";
						}
					}

					// only assign if different to avoid unneeded rendering.
					finalValue = jQuery.trim( curValue );
					if ( getValue !== finalValue ) {
						elem.setAttribute(attr,finalValue);
					}
				}
			}
		}

		return this;
	},

	attrRemoveToken: function( attr, value ) {
		var values, elem, curValue, newValue, j, finalValue, getValue,
	    attrIsString = typeof attr === "string" && attr,
			valueIsString = arguments.length === 1 || typeof value === "string" && value,
			i = 0,
			len = this.length;

		if ( attrIsString && jQuery.isFunction( value ) ) {
			return this.each(function( j ) {
				jQuery( this ).removeClass( value.call( this, j, this.getAttribute(attr) ) );
			});
		}
		if ( attrIsString && valueIsString ) {
			values = ( value || "" ).match( rnotwhite ) || [];

			for ( ; i < len; i++ ) {
				elem = this[ i ];
				getValue = elem.getAttribute(attr);
				// This expression is here for better compressibility (see addClass)
				curValue = elem.nodeType === 1 && ( getValue ?
					( " " + getValue + " " ).replace( rclass, " " ) :
					""
				);

				if ( curValue ) {
					j = 0;
					while ( (newValue = values[j++]) ) {
						// Remove *all* instances
						while ( curValue.indexOf( " " + newValue + " " ) > -1 ) {
							curValue = curValue.replace( " " + newValue + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = value ? jQuery.trim( curValue ) : "";
					if ( getValue !== finalValue ) {
						elem.setAttribute(attr,finalValue);
					}
				}
			}
		}

		return this;
	},

	attrToggleToken: function( attr, value, stateVal ) {
		var typeOfAttr = typeof attr, 
		    typeOfValue = typeof value;

		if ( typeof stateVal === "boolean" && typeOfValue === "string" &&  typeOfAttr === "string" ) {
			return stateVal ? this.attrAddToken( attr, value ) : this.attrRemoveToken( attr, value );
		}

		if ( typeOfAttr === "string" && jQuery.isFunction( value ) ) {
			return this.each(function( i ) {
				jQuery( this ).attrToggleToken(
					attr, value.call(this, i, this.getAttribute(attr), stateVal), stateVal
				);
			});
		}

		return this.each(function() {
			if ( typeOfAttr === "string" && typeOfValue === "string" ) {
				// Toggle individual class names
				var newValue,
					i = 0,
					self = jQuery( this ),
					values = value.match( rnotwhite ) || [],
  		    getValue, finalValue;

				while ( (newValue = values[ i++ ]) ) {
					// Check each className given, space separated list
					if ( self.attrHasToken( attr, newValue ) ) {
						self.attrRemoveToken( attr, newValue );
					} else {
						self.attrAddToken( attr, newValue );
					}
				}

			// Toggle whole class name
			} else if ( typeOfAttr === "string" && value === undefined || typeOfValue === "boolean" ) {
			  getValue = elem.getAttribute(attr);
				if ( getValue ) {
					// store className if set
					dataPriv.set( this, "__"+attr+"Value__", getValue );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				finalValue = getValue || value === false ?
					"" :
					dataPriv.get( this, "__"+attr+"Value__" ) || "";
				this.setAttribute(attr,finalValue);
			}
		});
	},

	attrHasToken: function( attr, value ) {
		var attr = typeof attr === "string" ? attr : false,
		    value = typeof value === "string" ? " " + value + " " : false,
			i = 0,
			l = this.length;
		if(attr && value){
  		for ( ; i < l; i++ ) {
  			if ( this[i].nodeType === 1 &&
  				(" " + this[i].getAttribute(attr) + " ").replace(rclass, " ").indexOf( value ) > -1 ) {

  				return true;
  			}
  		}
		}

		return false;
	}
});

}(jQuery))