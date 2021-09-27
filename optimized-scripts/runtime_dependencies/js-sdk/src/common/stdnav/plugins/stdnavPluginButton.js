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

define(["require","exports","module","jquery","../../util/eventAutomation","../../logging/logger","../stdnav"],function(t,e,n){var i=t("jquery"),o=t("../../util/eventAutomation"),s=t("../../logging/logger"),r=t("../stdnav"),u=0,a=s.register("stdnav"),l=function(){u++,this.serial=u};i.extend(l.prototype,{zinit:function(t){return a.debug("stdnavPluginButton.init("+t+")\n"),this},activate:function(){this.behavior={enter:[this,this._onEnterOrEntered,null],entered:[this,this._onEnterOrEntered,null],exit:[this,this._onExit,null],toggle:[this,this._onEnterOrEntered,null],inherit:!1,inheritable:!0},r.registerNavtype(this.navtype,this.behavior,this.navtype_tags)},deactivate:function(){r.unregisterNavtype("button",this.behavior)},_fixSubfocus:function(t){var e,n=i(t);if(n.is("BUTTON,[role='button']"))e=n;else if(void 0===(e=i(t).closest("BUTTON,[role='button']")))return;return e.find(".ghostfocus").removeClass(".ghostfocus"),e.children().find(".subfocus").removeClass(".subfocus"),e},_onFocusIn:function(t){var e,n=i(t).children(".ghostfocus");if(n.length>0)n.removeClass("ghostfocus"),e=this._fixSubfocus(n[0]);else{var o=i(t).children('li[js-navigable!="false"]');e=o.length>0?this._fixSubfocus(o[0]):t}return e},_onSubfocusIn:function(t){if("BUTTON"!=i(t).prop("nodeName")){var e=this._fixSubfocus(t);r.setSubfocus(e,!1)}},_onEnterOrEntered:function(t){return i(t).is("BUTTON,[role='button']")&&o.simulateClickSequence(t),t},_onExit:function(){return i("#searchInput")[0]}}),i.extend(l.prototype,{navtype:"button",navtype_tags:["BUTTON"]});var f=new l;n.exports=f});