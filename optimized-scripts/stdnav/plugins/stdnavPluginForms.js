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

define(["require","exports","module","jquery","runtime_dependencies/js-sdk/src/common/logging/logger","runtime_dependencies/js-sdk/src/common/stdnav/stdnav","runtime_dependencies/js-sdk/src/common/util/eventAutomation","../../core/core.layout"],function(e,n,t){var i=e("jquery"),r=e("runtime_dependencies/js-sdk/src/common/logging/logger"),o=e("runtime_dependencies/js-sdk/src/common/stdnav/stdnav"),s=e("runtime_dependencies/js-sdk/src/common/util/eventAutomation"),a=e("../../core/core.layout"),u=r.register("stdnav"),l=0;a.INPUT_ZOOM_VALUE="input#zoom_value",a.INPUT_SEARCH_REPORT="input#search_report",a.PAGE_CURRENT="input#page_current",a.MENU_VWROPTIONS="#vwroptions .menu.vertical.dropDown.fitable",a.MENU_VWROPTIONS_LIST="#vwroptions .menu.vertical.dropDown.fitable li";var c=function(){l++,this.serial=l};i.extend(c.prototype,{zinit:function(e){return u.debug("stdnavPluginForms.init("+e+")\n"),this},activate:function(){this.behavior={ariaprep:[this,this._ariaPrep,null],ariarefresh:[this,this._ariaRefresh,null],down:[this,this._onDown,null],enter:[this,this._onEnter,null],exit:[this,this._onExit,null],inherit:!1,inheritable:!0,fixsuperfocus:[o,o.basicFixSuperfocus,null],superfocusin:[o,o.basicSuperfocusIn,{maxdepth:1,focusSelector:":input",ghostfocus:!1}]},o.registerNavtype(this.navtype,this.behavior,this.navtype_tags)},deactivate:function(){o.unregisterNavtype(this.navtype,this.behavior)},_ariaPrep:function(e){return i(e).attr("role","form"),null},_ariaRefresh:function(e){return i(e).attr("role","form"),null},_onDown:function(e){var n=i(e);return n.is("input#zoom_value")?(this.parent=e,n.closest("li").addClass("isParent"),s.simulateClickSequence(i("button#zoom_value_button")[0]),i(a.MENU_VWROPTIONS_LIST).first().find("p").addClass("over"),e=i(a.MENU_VWROPTIONS_LIST).first()[0]):n.is("input#search_report")&&(this.parent=e,n.closest("li").addClass("isParent"),s.simulateClickSequence(i("button#search_options")[0]),i(a.MENU_VWROPTIONS_LIST).first().find("p").addClass("over"),e=i(a.MENU_VWROPTIONS_LIST).first()[0]),e},_onExit:function(e){var n=i(e);return n.is(a.INPUT_ZOOM_VALUE)?e=i("li.zoom.leaf.j-dropdown")[0]:n.is(a.INPUT_SEARCH_REPORT)?e=i("li.search.leaf.j-dropdown")[0]:n.is(a.PAGE_CURRENT)&&(e=i("li.paging.leaf.j-dropdown")[0]),e},_onEnter:function(e){var n=i(e);return n.is(a.INPUT_ZOOM_VALUE)?e=i("li.zoom.leaf.j-dropdown")[0]:n.is(a.INPUT_SEARCH_REPORT)?e=i("li.search.leaf.j-dropdown")[0]:n.is(a.PAGE_CURRENT)&&(e=i("li.paging.leaf.j-dropdown")[0]),e}}),i.extend(c.prototype,{navtype:"forms",navtype_tags:["FORM","INPUT","OPTGROUP","OPTION","SELECT","TEXTAREA"]});var d=new c;t.exports=d});