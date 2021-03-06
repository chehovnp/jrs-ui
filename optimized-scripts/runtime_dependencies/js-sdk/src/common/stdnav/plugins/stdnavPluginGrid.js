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

define(["require","exports","module","jquery","../../logging/logger","../stdnav"],function(i,e,t){var n=i("jquery"),s=i("../../logging/logger"),r=i("../stdnav"),l=s.register("stdnavPluginGrid"),o=0,u=function(){o++,this.serial=o};n.extend(u.prototype,{zinit:function(i){return l.debug("stdnavPluginGrid.init("+i+")\n"),this},activate:function(){this.behavior={focusin:[this,r.basicFocusIn,{maxdepth:2,subfocusclass:"gridcell"}],focusout:[this,r.ghostFocusOut,null],subfocusin:[this,this._onSubfocusIn,null],left:[this,this._onLeft,null],right:[this,this._onRight,null],up:[this,this._onUp,null],down:[this,this._onDown,null],hoverin:[this,this._onHover,null],inherit:!0,inheritable:!0},r.registerNavtype(this.navtype,this.behavior,this.navtype_tags)},deactivate:function(){r.unregisterNavtype(this.navtype,this.behavior)},_findSubfocus:function(i){var e=n(i).closest(".grid"),t=e.find(".subfocus");if(void 0!==t)return n(t[0])},_fixSubfocus:function(i){var e,t;if(i.hasClass("grid"))if(e=i.children(".gridrow").children(".gridcell .ghostfocus"),e.length>0)t=e[0];else{var s=i.children(".gridrow");if(s.length>0){var r=n(s[0]).children(".gridcell");t=r.length>0?r[0]:s[0]}else t=i}else i.hasClass("gridrow")?(e=i.children(".gridcell .ghostfocus"),t=e[0]):i.hasClass("gridcell")&&(t=i);return t},_onSubfocusIn:function(i){if(!1===n(i).hasClass("gridcell")){var e=this._fixSubfocus(n(i));r.setSubfocus(e,!1)}},_onLeft:function(i){var e=this._findSubfocus(i),t=n(!1);return e.hasClass("gridcell")&&(t=e.prev(".gridcell")),1===t.length&&r.setSubfocus(t),!1},_onRight:function(i){var e=this._findSubfocus(i),t=n(!1);return e.hasClass("gridcell")&&(t=e.next(".gridcell")),1===t.length&&r.setSubfocus(t),!1},_onUp:function(i){var e=this._findSubfocus(i),t=n(!1),s=n(!1),l=n(!1);if(e.hasClass("gridcell")&&(t=e.closest(".gridrow"),1===t.length&&(s=t.prev(".gridrow")),1===s.length)){var o=e,u=-1;do{u++,o=n(o.prev(".gridcell")[0])}while(o.length>0);for(l=n(s.find(".gridcell")[0]);u>0;)o=l.next(".gridcell"),o.length>0&&(l=n(o[0])),u--}return 1===l.length&&r.setSubfocus(l),!1},_onDown:function(i){var e=this._findSubfocus(i),t=n(!1),s=n(!1),l=n(!1);if(e.hasClass("gridcell")&&(t=e.closest(".gridrow"),t.length>0&&(s=t.next(".gridrow")),s.length>0)){var o=e,u=-1;do{u++,o=n(o.prev(".gridcell")[0])}while(o.length>0);for(l=n(s.find(".gridcell")[0]);u>0;)o=l.next(".gridcell"),o.length>0&&(l=n(o[0])),u--}return 1===l.length&&r.setSubfocus(l),!1}}),n.extend(u.prototype,{navtype:"grid",navtype_tags:[]});var h=new u;t.exports=h});