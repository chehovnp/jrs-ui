/*
 * Copyright (C) 2005 - 2020 TIBCO Software Inc. All rights reserved.
 * http://www.jaspersoft.com.
 *
 * Unless you have purchased a commercial license agreement from Jaspersoft,
 * the following license terms apply:
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

define(["require","exports","module","jquery","underscore","../util/browserDetection","../logging/logger","./stdnavEventHandlers","./stdnavFocusing","./stdnavModalFocusing","./stdnavDebugger"],function(t,i,n){function e(t){for(var i,n=u(t).parents(),e=0;e<n.length;e++){var s=u(n[e]).attr("js-stdnav");if("true"===s?i=!0:"false"===s&&(i=!1),r.isBoolean(i))break}return Boolean(i)}function s(t,i){var n=Array.prototype.slice.call(arguments,1);if(e(i.target))return t.apply(this,n);b.debug("StdNav is disabled in this subdom, aborting action")}function o(t){var i=function(){},n=["_onFocusIn","_onFocusOut","_onKeydown","_onClick","_onDblClick","_onMouseDown","_onMouseOut","_onMouseOver","_onMouseUp","_onLabeledTagOver","_onTouchStart"];r.each(n,function(n){var e=t[n];t[n]=e?r.bind(s,t,e):i})}var u=t("jquery"),r=t("underscore"),a=t("../util/browserDetection"),l=t("../logging/logger"),h=t("./stdnavEventHandlers"),d=t("./stdnavFocusing"),c=t("./stdnavModalFocusing"),v=t("./stdnavDebugger"),f=0,b=l.register("stdnav"),g=function(){f++,this.serial=f,this.menuItemCallbacks={click:{}},this.plugins={},this.modalDialogActive=!1,this.modalDialogRoot=null,this.debugElementID=null,this.chaffLength=1,this.maxChaffLength=8};u.extend(g.prototype,h,d,c,v,{_maxNavDepth:100,nullOrUndefined:function(t){return null===t||void 0===t},closestAncestor:function(t,i,n,e){if(void 0!==t&&null!==t)for(var s=u(t).parent(),o=1;void 0!==s;){if(null!==e&&void 0!==e&&o>=e)return;if(s.is(n))return;if(s.is(i))return s;o++,s=s.parent()}},closestDescendant:function(t,i,n,e){if(null!==t&&void 0!==t&&null!==i&&void 0!==i){var s;s=null===e||void 0===e?this._maxNavDepth:e;for(var o=[],r=0,a=1,l=0,h=t;void 0!==h;){if(u(h).is(i)&&r>0)return h;if(!u(h).is(n)){u(h).children().each(function(t,i){o.unshift(i),l++})}if(0==--a&&(r++,a=l,l=0),r>s)return;h=o.pop()}}},zinit:function(t){return b.debug("stdnav.init("+t+")\n"),this},navtype_nodeNames:{},isNavigable:function(t){return!(!u(t).is(this._navigableFilter)||u(t).is(this._unnavigableFilter))},closestNavigableAncestor:function(t){return this.closestAncestor(t,this._navigableFilter,this._unnavigableFilter,this._maxNavDepth)},closestNavigableDescendant:function(t){return this.closestDescendant(t,this._navigableFilter,this._unnavigableFilter,this._maxNavDepth)},_rebuildNavigationFilters:function(){var t="";u.each(this.navtype_nodeNames,function(i,n){u.each(n,function(i,n){t+=n+","})}),t+="[js-navtype]",this._navigableFilter=t,this._unnavigableFilter='[js-stdnav="false"],[js-navtype="none"]'},registerPlugin:function(t,i){this.plugins[t]=i},unregisterPlugin:function(t){this.plugins[t].unload(),delete this.plugins[t]},registerNavtype:function(t,i,n){this.navtypeBehaviors[t.toLowerCase()]=i,this.navtype_nodeNames[t.toLowerCase()]=n,this._rebuildNavigationFilters()},unregisterNavtype:function(t,i){delete this.navtypeBehaviors[t.toLowerCase()],delete this.navtype_nodeNames[t.toLowerCase()],this._rebuildNavigationFilters()},activate:function(){this.nullBehavior={ariaprep:null,ariarefresh:null,click:null,down:null,end:null,enter:null,exit:null,fixfocus:null,fixsubfocus:null,fixsuperfocus:null,focusin:null,focusout:null,home:null,hoverin:null,hoverout:null,inherit:null,inheritable:null,left:null,mousedown:null,mouseover:null,mouseout:null,mouseup:null,next:null,pagedown:null,pageup:null,prev:null,rejoined:null,right:null,subfocusin:null,subfocusout:null,superfocusin:null,superfocusout:null,toggle:null,touchend:null,touchstart:null,up:null},this.defaultBehavior={enter:[this,this.basicEnter,null],toggle:[this,this.basicToggle,null],exit:[this,this.basicExit,null],fixfocus:[this,this.basicFixFocus,null],fixsubfocus:[this,this.basicFixSubfocus,null],fixsuperfocus:[this,this.basicFixSuperfocus,null],focusin:[this,this.basicFocusIn,{maxdepth:0}],focusout:[this,this.basicFocusOut,null],inherit:!0,inheritable:!0,rejoined:[this,this.basicRejoined,null],subfocusin:[this,this.basicSubfocusIn,null],subfocusout:[this,this.basicSubfocusOut,null],superfocusin:[this,this.basicSuperfocusIn,null],superfocusout:[this,this.basicSuperfocusOut,{ghostfocus:!1}]},this.navtypeBehaviors={block:{},global:{},inline:{},modal:{next:this._onModalNext,inherit:!1,inheritable:!0}},this._refocusing=!1,this._priorSuperfocus=null,this._priorFocus=null,this._priorSubfocus=null,this._currentSuperfocus=document.activeElement,this._currentFocus=document.activeElement,this._currentSubfocus=document.activeElement,u(this._currentSuperfocus).addClass("superfocus"),u(this._currentSubfocus).addClass("subfocus"),this._rebuildNavigationFilters(),o(this),this.$body=u("body"),this._bindFocusEvents(),this._bindKeyboardEvents(),this._bindMouseEvents(),this._bindTouchEvents()},start:function(){var t=u(".stdnavinitialfocus");t.length<1&&(document.activeElement&&document.activeElement!=u("body")[0]?t=u(document.activeElement):(t=u("body").children("[tabindex='0']:first"),t.length<1&&(t=u("body")))),a.isIE11()&&(this.forceFocus(u("body")[0]),u("#IECM").html("&nbsp;"),this._unforceFocus(u("body")[0]),u("body").blur(),u("#IECM").html("&nbsp;&nbsp;")),this.forceFocus(t[t.length-1]),u("body").attr("aria-busy",!1),u("#ariastatus").attr("aria-label","Standard Navigation initialized."),this.updateDebugInfo()},stop:function(){},deactivate:function(){this._unbindTouchEvents(),this._unbindMouseEvents(),this._unbindKeyboardEvents(),this._unbindFocusEvents()},_bindFocusEvents:function(){this.$body.on("focusin",this._onFocusIn),this.$body.on("focusout",this._onFocusOut)},_bindKeyboardEvents:function(){u(document).on("keydown",this._onKeydown)},_bindMouseEvents:function(){this.$body.on("click",this._onClick),this.$body.on("dblclick",this._onDblClick),this.$body.on("mousedown",this._onMouseDown),this.$body.on("mouseover",this._onMouseOut),this.$body.on("mouseout",this._onMouseOver),this.$body.on("mouseup",this._onMouseUp),this.$body.on("mouseover","[aria-label]",this._onLabeledTagOver)},_bindTouchEvents:function(){this.$body.on("touchend",this._onTouchStart),this.$body.on("touchstart",this._onTouchStart)},_unbindTouchEvents:function(){this.$body.off("touchend",this._onTouchStart),this.$body.off("touchstart",this._onTouchStart)},_unbindMouseEvents:function(){this.$body.off("click",this._onClick),this.$body.off("dblclick",this._onDblClick),this.$body.off("mousedown",this._onMouseDown),this.$body.off("mouseover",this._onMouseOut),this.$body.off("mouseout",this._onMouseOver),this.$body.off("mouseup",this._onMouseUp)},_unbindKeyboardEvents:function(){u(document).off("keydown",this._onKeydown)},_unbindFocusEvents:function(){this.$body.off("focusin",this._onFocusIn),this.$body.off("focusout",this._onFocusOut)},_getExplicitBehavior:function(t){var i={};return void 0!==t.attr("js-stdanv-enter")&&(i.enter=t.attr("js-stdnav-enter")),void 0!==t.attr("js-stdanv-exit")&&(i.exit=t.attr("js-stdnav-exit")),void 0!==t.attr("js-stdanv-toggle")&&(i.toggle=t.attr("js-stdnav-toggle")),void 0!==t.attr("js-stdanv-rejoin")&&(i.rejoin=t.attr("js-stdnav-rejoin")),void 0!==t.attr("js-stdanv-up")&&(i.up=t.attr("js-stdnav-up")),void 0!==t.attr("js-stdanv-down")&&(i.down=t.attr("js-stdnav-down")),void 0!==t.attr("js-stdanv-left")&&(i.left=t.attr("js-stdnav-left")),void 0!==t.attr("js-stdanv-right")&&(i.right=t.attr("js-stdnav-right")),void 0!==t.attr("js-stdanv-next")&&(i.next=t.attr("js-stdnav-next")),void 0!==t.attr("js-stdanv-prev")&&(i.prev=t.attr("js-stdnav-prev")),void 0!==t.attr("js-stdanv-inherit")&&(i.inherit=t.attr("js-stdnav-inherit")),void 0!==t.attr("js-stdanv-inheritable")&&(i.inheritable=t.attr("js-stdnav-inheritable")),i},_buildParentBehaviorOBSOLETE:function(t){var i=u(t.parent()[0]);if(void 0===i)return this.defaultBehavior;var n=this._buildImmediateBehavior(i);if(!1===n.inheritable)return this.defaultBehavior;if(!1===n.inherit||i.is("body,iframe"))return u.extend({},!0,this.defaultBehavior,n);var e=this._buildParentBehavior(i);return u.extend({},!0,e,n,{inherit:!1})},_buildBehavior:function(t){for(var i=u.extend(!0,{},this.nullBehavior),n=t,e=0,s=this._buildImmediateBehavior(n);e<this._maxNavDepth&&(u.each(s,function(t,n){t in i?null===i[t]&&(i[t]=n):(b.debug("StdNav: Key '"+t+"' is missing from the NULL-behavior hash"),i[t]=n)}),!1!==s.inherit)&&(e++,n=u(n).parent()[0],s=this._buildImmediateBehavior(n),!1!==s.inheritable););return u.each(this.defaultBehavior,function(t,n){t in i?null===i[t]&&(i[t]=n):(b.debug("StdNav: Key '"+t+"' is defined in defaults but missing from the NULL-behavior hash"),i[t]=n)}),u.extend(!0,{},i)},_buildImmediateBehavior:function(t){var i=this;if(this.nullOrUndefined(t))return this.defaultBehavior;var n,e=u(t),s=e.prop("nodeName");u.each(this.navtype_nodeNames,function(e,o){u.inArray(s,o)>-1&&i.isNavigable(t)&&(n=e)});var o={};void 0!==n&&(o=this.navtypeBehaviors[n]);var r=e.attr("js-navtype"),a={};void 0!==r&&(a=this.navtypeBehaviors[r.toLowerCase()]);var l=this._getExplicitBehavior(e);return u.extend(!0,{inherit:!0},o,a,l)},_buildBehaviorOBSOLETE:function(t){if(void 0===t||null===t)return this.defaultBehavior;var i=u(t),n=this._buildImmediateBehavior(i),e={};return!0===n.inherit&&(e=this._buildParentBehavior(i)),u.extend(!0,e,n)},runAction:function(t,i){if(null===i)return void b.debug("tried to run action '"+t+"' on null element");if(void 0===i)return void b.debug("tried to run action '"+t+"' on undefined element");b.debug("stdnav.runAction("+t+", "+i.nodeName+"#"+i.id+")");var n=this._buildBehavior(i);return this.nullOrUndefined(n[t])?void 0:this._runActionDesc(n[t],i)},_runActionDesc:function(t,i){var n=!0;if("string"==typeof t||t instanceof String){if("#"==t.substr(0,1))if("##parent"==t)this.forceFocus(u(i).parent());else if("##child"==t){var e=u(i).children();e.length>0&&this.forceFocus(u(i).children()[0])}else if("##prev"==t){var s=u(i).prev();s.length>0&&this.forceFocus(u(i).prev()[0])}else if("##next"==t){var o=u(i).next();o.length>0&&this.forceFocus(u(i).next()[0])}else{var r=u(t);void 0!==r&&this.forceFocus(r)}else if("@"==t.substr(0,1)){var a,l,h,d,c,v,f=this;if("@"==t.substr(1,1))f=u(i).data("stdnav-context");else if((d=t.indexOf(":"))>-1){var g=t.substr(0,d);f=this.actionContexts[g]}c=t.indexOf("("),-1==c?a=t.substr(2):(v=t.indexOf(")"),a=t.substr(2,c-2),-1==v?b.debug("Bad stdnav action: "+t):h=t.substr(c,v-c)),l=f[a],n=l.call(f,h)}}else if(t instanceof Array){void 0===t[1]&&b.debug("undefined actionDesc[1]");var f=t[0];null!==f&&void 0!==f||(f=this);var _=t[1],p=t[2];null!==p&&void 0!==p||(p={}),n=_.call(f,i,p)}return n}}),n.exports=new g});