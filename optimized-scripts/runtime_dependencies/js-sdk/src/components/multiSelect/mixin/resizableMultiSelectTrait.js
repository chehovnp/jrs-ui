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

define(["require","exports","module","underscore","jquery","../view/MultiSelect","jquery-ui/ui/widgets/resizable"],function(e,t,i){var s=e("underscore"),a=e("jquery"),l=e("../view/MultiSelect");e("jquery-ui/ui/widgets/resizable");i.exports={_checkDataSize:function(){var e=this.resizableOptions,t=e.sizer,i=e.el,s=e.defaultItemsCount,a=this.availableItemsList.listViewModel.get("total");if(this.resized)return void t.removeClass("hidden");a<=e.defaultItemsCount?(t.addClass("hidden"),i.css("height",this.calcHeightByItemsCount(a)+"px")):(t.removeClass("hidden"),i.css("height",this.calcHeightByItemsCount(s)+"px"))},makeResizable:function(e){if(e=e||{},!e.el||!e.sizer)throw"resizableMultiSelectTrait expect el and sizable to be defined";s.defaults(e,{defaultItemsCount:10,minItemsCount:3,sizerOptions:{}}),this.resizableOptions=e,e.el=a(e.el),e.sizer=a(e.sizer);var t=e.el,i=e.sizer,l=e.sizerOptions,n=e.minItemsCount,r=Math.max(e.defaultItemsCount,n),o=this.calcHeightByItemsCount(r);return s.defaults(l,{handles:{s:i},minHeight:this.calcHeightByItemsCount(n),stop:s.bind(function(){this.resize(),this.resized=!0},this)}),i.addClass(e.sizerClass),t.css("height",o+"px").resizable(l),this.listenTo(this.availableItemsList.model,"change:totalValues",this._checkDataSize,this),this},calcHeightByItemsCount:function(e){return e*this.availableItemsList.listView.itemHeight+this.emptyContainerHeight},destroyResizable:function(){try{this.resizableOptions&&this.resizableOptions.el.resizable("destroy")}catch(e){}},enableResizable:function(){try{this.resizableOptions&&this.resizableOptions.el.resizable("disable")}catch(e){}},disableResizable:function(){try{this.resizableOptions&&this.resizableOptions.el.resizable("enable")}catch(e){}},remove:function(){this.destroyResizable(),l.prototype.remove.call(this)}}});