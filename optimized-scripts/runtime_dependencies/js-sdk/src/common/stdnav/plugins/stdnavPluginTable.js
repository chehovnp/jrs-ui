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

define(["require","exports","module","jquery","../../logging/logger","../stdnav"],function(t,e,n){var i=t("jquery"),s=t("../../logging/logger"),a=t("../stdnav"),r=s.register("stdnavPluginTable"),o=0,l=function(){o++,this.serial=o};i.extend(l.prototype,{zinit:function(t){return r.debug("stdnavPluginTable.init("+t+")\n"),this},activate:function(){this.behavior={ariaprep:[this,this._ariaPrep,null],ariarefresh:[this,this._ariaRefresh,null],down:[this,this._onDown,null],fixfocus:[this,this._fixFocus,null],fixsuperfocus:[this,this._fixSuperfocus,null],inherit:!0,inheritable:!0,left:[this,this._onLeft,null],mousedown:[a,a.basicMouseDown],right:[this,this._onRight,null],up:[this,this._onUp,null],superfocusin:[a,a.basicSuperfocusIn,{maxdepth:4,focusSelector:"td",ghostfocus:!1}],superfocusout:[a,a.basicSuperfocusOut,{ghostfocus:!1}]},a.registerNavtype(this.navtype,this.behavior,this.navtype_tags)},deactivate:function(){a.unregisterNavtype(this.navtype,this.behavior)},_ariaPrep:function(t){this._ariaRefresh(t)},_ariaRefresh:function(t){var e=i(t);e.attr("role","application");var n=e.attr("aria-label"),s=e.attr("aria-labelledby"),r=e.find("td,th");if(a.nullOrUndefined(n)&&a.nullOrUndefined(s)){r.find("a").length===r.length?(e.attr("aria-label","Table of "+r.length+" links."),!0):e.attr("aria-label","Table of "+r.length+" cells.")}return i.each(r,function(t,e){var n=i(e),s=n.find("a");if(s.length>0){n.attr("role","link");var r=n.attr("aria-label"),o=n.attr("aria-labelledby");if(a.nullOrUndefined(r)&&a.nullOrUndefined(o)){var l=n.text();i(s[0]).text();r=l,n.attr("aria-label",r)}}}),null},_findSubfocus:function(t){var e=i(t).closest("table"),n=e.find(".subfocus");if(void 0!==n)return i(n[0])},_getPreviousSection:function(t){var e,n=i(t).closest("thead,tbody,tfoot");if(void 0!==n){switch(n.prop("nodeType")){case"TFOOT":e=n.parent().children("TBODY");break;case"TBODY":e=n.parent().children("THEAD")}return void 0!==e&&e.length>0?e[0]:void 0}},_getNextSection:function(t){var e,n=i(t).closest("thead,tbody,tfoot");if(void 0!==n){switch(n.prop("nodeType")){case"THEAD":e=n.parent().children("TBODY");break;case"TBODY":e=n.parent().children("TFOOT")}return void 0!==e&&e.length>0?e[0]:void 0}},_fixSuperfocus:function(t){var e=i(t).closest("table");return e.length>0?e[0]:null},_fixFocus:function(t){var e;switch(i(t).prop("nodeName")){case"TH":case"TD":e=t;break;case"TR":e=a.closestDescendant(t,"td,th .ghostfocus",null,1),void 0===e&&void 0===(e=a.closestDescendant(t,"td,th",null,1))&&void 0===(e=i(t).prev("tr"))&&(e=this._fixFocus(i(t).parent()));break;case"THEAD":case"TBODY":case"TFOOT":if(void 0===(e=a.closestDescendant(t,"td,th .ghostfocus",null,2))&&void 0===(e=a.closestDescendant(t,"td,th",null,2))){var n=this._getNextSection(t);e=void 0===n?this._fixFocus(i(t).closest("table")):this._fixFocus(n)}break;case"COLGROUP":case"COL":case"CAPTION":e=this._fixFocus(i(t).closest("table"));break;case"TABLE":e=a.closestDescendant(t,"td,th .ghostfocus",null,5),void 0===e&&void 0===(e=a.closestDescendant(t,"td,th",null,5))&&(e=t);break;default:e=this._fixFocus(i(t).closest("td,th,table"))}return e},_onSubfocusIn:function(t){var e=t;!1===i(t).is("td")&&(e=this._fixSubfocus(i(t)),a.setSubfocus(e,!1)),i.call(this,a.basicSubfocusIn,e)},_onLeft:function(t){var e=this._findSubfocus(t),n=i(!1);return e.is("td")&&(n=e.prev("td")),1===n.length?n:t},_onRight:function(t){var e=this._findSubfocus(t),n=i(!1);return e.is("td")&&(n=e.next("td")),1===n.length?n:t},_onUp:function(t){var e=this._findSubfocus(t),n=i(!1),s=i(!1),a=i(!1);if(e.is("td")&&(n=e.closest("tr"),1===n.length&&(s=n.prev("tr")),1==s.length)){var r=e,o=-1;do{o++,r=i(r.prev("td")[0])}while(r.length>0);for(a=i(s.find("td")[0]);o>0;)r=a.next("td"),r.length>0&&(a=i(r[0])),o--}return 1===a.length?a:t},_onDown:function(t){var e=this._findSubfocus(t),n=i(!1),s=i(!1),a=i(!1);if(e.is("td")&&(n=e.closest("tr"),n.length>0&&(s=n.next("tr")),s.length>0)){var r=e,o=-1;do{o++,r=i(r.prev("td")[0])}while(r.length>0);for(a=i(s.find("td")[0]);o>0;)r=a.next("td"),r.length>0&&(a=i(r[0])),o--}return 1===a.length?a:t}}),i.extend(l.prototype,{navtype:"table",navtype_tags:["TABLE"]});var u=new l;n.exports=u});