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

define(["require","exports","module","jquery","underscore","../view/AvailableItemsList","../mixin/listWithTrueAllSelectionTrait"],function(e,t,i){var l=(e("jquery"),e("underscore")),n=e("../view/AvailableItemsList"),s=e("../mixin/listWithTrueAllSelectionTrait"),o=n.extend({initialize:function(e){e.trueAll&&delete e.value,n.prototype.initialize.call(this,e),this.setTrueAll(e.trueAll)},_createListView:function(e){var t=n.prototype._createListView.call(this,e);return l.extend(t,s)},initListeners:function(){n.prototype.initListeners.call(this),this.listenTo(this.model,"change:isTrueAll",this.changeTrueAll,this)},listRenderError:function(e,t){this._boundedOnSelectionChangeOnce&&this.listViewModel.off("selection:change",this._boundedOnSelectionChangeOnce),this.trigger("listRenderError",e,t)},selectionAdd:function(e){if(this.model.get("isTrueAll")){this.model.set("isTrueAll",!1,{silent:!0});var t=l.chain(this.listViewModel.get("items")).map(function(e){return e.value}).reject(function(t){return t===e.value}).value();this.listView.setTrueAll(!1,{silent:!0}),this.listView.setValue(t,{silent:!0}),this._boundedOnSelectionChangeOnce=l.bind(this._onSelectionChangeOnce,this,e),this.listViewModel.once("selection:change",this._boundedOnSelectionChangeOnce),this.listView.selectAll({silent:!0})}else this.model.get("value")[e.value]=!0,this.model.trigger("change:value")},_onSelectionChangeOnce:function(e){this.listViewModel.once("selection:remove",function(){this.processSelectionThroughApi(this.listView.getValue())},this),this.listViewModel.toggleSelection(e.value,e.index)},onSelectAll:function(){this.model.get("isTrueAll")||this.model.set("isTrueAll",!0)},onSelectNone:function(){this.model.set("isTrueAll",!1),n.prototype.onSelectNone.call(this)},onInvertSelection:function(){this.model.get("isTrueAll")?this.onSelectNone():l.isEmpty(this.model.get("value"))?this.onSelectAll():n.prototype.onInvertSelection.call(this)},changeTrueAll:function(){if(this.model.get("isTrueAll")){this.listView.activate(void 0),this.listView.reset();var e=this;this.clearFilter(function(){e.listView.once("selection:change",e.processSelectionThroughApi,e),e.listView.setTrueAll(!0)})}else this.model.trigger("change:value"),this.listView.setTrueAll(!1)},getModelForRendering:function(){return l.extend(n.prototype.getModelForRendering.call(this),{isTrueAll:this.model.get("isTrueAll")})},setTrueAll:function(e){this.model.set("isTrueAll",e)},getTrueAll:function(){return this.model.get("isTrueAll")}});i.exports=o});