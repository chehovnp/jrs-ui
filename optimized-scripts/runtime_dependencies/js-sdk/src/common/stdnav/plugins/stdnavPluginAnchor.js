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

define(["require","exports","module","jquery","../../util/eventAutomation","../../logging/logger","../stdnav"],function(t,n,e){var i=t("jquery"),r=t("../../util/eventAutomation"),o=t("../../logging/logger"),s=t("../stdnav"),u=0,a=o.register("stdnav"),l=function(){u++,this.serial=u};i.extend(l.prototype,{zinit:function(t){return a.debug("stdnavPluginAnchor.init("+t+")\n"),this},activate:function(){this.behavior={ariaprep:[this,this._ariaPrep,null],ariarefresh:[this,this._ariaRefresh,null],down:[this,this._onLeftOrUp,null],enter:[this,this._onEnterOrEntered,null],inherit:!1,inheritable:!0,left:[this,this._onLeftOrUp,null],right:[this,this._onRightOrDown,null],up:[this,this._onRightOrDown,null]},s.registerNavtype(this.navtype,this.behavior,this.navtype_tags)},deactivate:function(){s.unregisterNavtype("anchor",this.behavior)},_ariaPrep:function(t){return i(t).attr("role","link"),null},_ariaRefresh:function(t){return i(t).attr("role","link"),null},_fixSubfocus:function(t){var n,e=i(t);if(e.is("A"))n=e;else if(void 0===(n=i(t).closest("A")))return;return n.find(".ghostfocus").removeClass(".ghostfocus"),n.children().find(".subfocus").removeClass(".subfocus"),n},_onFocusIn:function(t){var n,e=i(t).children(".ghostfocus");if(e.length>0)e.removeClass("ghostfocus"),n=this._fixSubfocus(e[0]);else{var r=i(t).children('li[js-navigable!="false"]');n=r.length>0?this._fixSubfocus(r[0]):t}return n},_onLeftOrUp:function(t){var n=i(t).prev("a");return n.length<1?t:n[0]},_onRightOrDown:function(t){var n=i(t).next("a");return n.length<1?t:n[0]},_onSubfocusIn:function(t){if("A"!=i(t).prop("nodeName")){var n=this._fixSubfocus(t);s.setSubfocus(n,!1)}},_onEnterOrEntered:function(t){return i(t).is("a")&&r.simulateClickSequence(t),t}}),i.extend(l.prototype,{navtype:"anchor",navtype_tags:["A"]});var h=new l;e.exports=h});