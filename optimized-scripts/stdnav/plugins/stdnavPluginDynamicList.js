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

define(["require","exports","module","jquery","runtime_dependencies/js-sdk/src/common/util/eventAutomation","runtime_dependencies/js-sdk/src/common/stdnav/stdnav","../../components/list.base","runtime_dependencies/js-sdk/src/common/logging/logger"],function(e,n,t){var i=e("jquery"),s=e("runtime_dependencies/js-sdk/src/common/util/eventAutomation"),r=e("runtime_dependencies/js-sdk/src/common/stdnav/stdnav"),u=e("../../components/list.base"),o=u.dynamicList,a=e("runtime_dependencies/js-sdk/src/common/logging/logger"),l=a.register("stdnav"),c=0,f=function(){c++,this.serial=c};i.extend(f.prototype,{zinit:function(e){return l.debug("stdnavPluginDynamicList.init("+e+")\n"),this},activate:function(){this.behavior={ariaprep:[this,this._ariaPrep,null],ariarefresh:[this,this._ariaRefresh,null],click:null,down:null,end:null,enter:[this,this._onEnter,null],fixfocus:[this,this._fixFocus,null],fixsuperfocus:[this,this._fixSuperfocus,null],home:null,inherit:!0,inheritable:!0,left:null,pagedown:null,pageup:null,right:null,superfocusin:[r,r.basicSuperfocusIn,{maxdepth:1,focusSelector:"li",ghostfocus:!1}],superfocusout:[r,r.basicSuperfocusOut,{ghostfocus:!1}],up:null},r.registerNavtype(this.navtype,this.behavior,this.navtype_tags)},deactivate:function(){r.unregisterNavtype(this.navtype,this.behavior)},_ariaPrep:function(e){return i(e).attr("role","application"),i(e).attr("aria-label","Dynamic List"),null},_ariaRefresh:function(e){return i(e).attr("role","application"),i(e).attr("aria-label","Dynamic List"),null},_onEnter:function(e){var n=i(e);if(n.is(".supercursor"))l.error("dynamicList item has supercursor class-- should not have focus while this is true."),n.find("ul > li.cursor")<0&&l.error("...additionally, no sublist item appears to have the cursor class.");else{var t=n.find("a,:input");t.length>0&&s.simulateClickSequence(t[0])}return e},_fixFocus:function(e){var n=i(e).closest("[js-navtype='"+this.navtype+"']");if(n.length<1)return l.warn("Can't find a dynamic list to fix focus to"),e;var t=o.getDynamicListForElement(n[0]);return r.nullOrUndefined(t)?(l.warn("Can't map a dynamic list to fix focus to"),e):t.getCursorElement()},_fixSubfocus:function(e){return null},_fixSuperfocus:function(e){var n=i(e).closest("ol,ul");return n.length>0?n[0]:null},_onSuperfocusIn:function(e){var n,t=i(e).children("li .ghostfocus");if(t.length>0)t.removeClass("ghostfocus"),n=t[0];else{var s=i(e).children('li[js-navigable!="false"]');n=s.length>0?s[0]:e}return n},_onSuperfocusOut:function(e){}}),i.extend(f.prototype,{navtype:"dynamiclist",navtype_tags:[]});var p=new f;t.exports=p});