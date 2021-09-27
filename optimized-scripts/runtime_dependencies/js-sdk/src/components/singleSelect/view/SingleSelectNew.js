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

define(["require","exports","module","underscore","../../scalableList/model/listWithNavigationModelTrait","./SingleSelect","../model/SingleSelectListModelNew"],function(e,t,i){function l(e,t){if(t&&"string"==typeof t&&!this.getActive()){var i=e(t);void 0!==i&&a.setActive.call(this,{index:i,item:{value:t},silent:!0})}}var n=e("underscore"),a=e("../../scalableList/model/listWithNavigationModelTrait"),s=e("./SingleSelect"),o=e("../model/SingleSelectListModelNew"),r=s.extend({initialize:function(e){n.bindAll(this,"_getSelectionIndex"),this.formatValue=e.formatValue,s.prototype.initialize.call(this,e)},_createListViewModel:function(e){return this.getData=e.getData,e.model||n.extend(new o(e),{_afterSelect:n.partial(l,this._getSelectionIndex)})},_getSelectionIndex:function(e){for(var t=this.listViewModel.get("bufferStartIndex"),i=this.listViewModel.get("items"),l=0;l<i.length;l++)if(e===i[l].value)return t+l},_getGetData:function(){return this.getData},_getActiveValueIndex:function(e){return this._getSelectionIndex(e.value)},changeFilter:function(){var e=this,t=this.model.get("criteria");this.listView.scrollTo(0),this._getGetData()({criteria:t,offset:0,limit:1}).done(function(){e.listView.fetch(function(){e.listView.resize(),e.setValueToList()})})},getControlLabelByValue:function(e){return null==e.label?this.formatValue?this.formatValue(e.value):e.value:e.label},setValue:function(e,t){e=this.convertExternalValueToInternalFormat(e),t&&t.silent&&(this.silent=!0),this.model.set("value",e),this.setValueToList(t),this.silent&&delete this.silent},setValueToList:function(e){var t=this.model.get("value"),i={};t&&t.index?i[t.index]=t.value:t&&(i=t.value),this.listView.setValue(i,e)}});i.exports=r});