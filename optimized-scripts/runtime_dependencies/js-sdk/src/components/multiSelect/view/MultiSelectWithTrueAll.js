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

define(["require","exports","module","underscore","../dataprovider/DelegatingDataProvider","../dataprovider/SelectedItemsDataProvider","../view/AvailableItemsListWithTrueAll","../view/MultiSelect"],function(e,t,a){var i=e("underscore"),s=e("../dataprovider/DelegatingDataProvider"),l=e("../dataprovider/SelectedItemsDataProvider"),r=e("../view/AvailableItemsListWithTrueAll"),n=e("../view/MultiSelect");a.exports=n.extend({_createAvailableItemsList:function(e){return this.availableItemsListDataProvider=e.getData,e.availableItemsList||new r({model:this.availableItemsListModel,getData:e.getData,bufferSize:e.bufferSize,loadFactor:e.loadFactor,chunksTemplate:e.chunksTemplate,scrollTimeout:e.scrollTimeout,trueAll:e.trueAll})},_createSelectedItemsListDataProvider:function(e){return this.selectedListOptions=e?e.selectedListOptions:{},this.selectedItemsDataProviderInstance=e?e.selectedItemsDataProvider:null,new s},selectionRemoved:function(e){if(this.getTrueAll()){var t;for(var a in e)if(e.hasOwnProperty(a)){t={value:e[a],index:a};break}this.availableItemsList.selectionAdd(t)}else n.prototype.selectionRemoved.call(this,e)},selectionChangeInternal:function(e){if(this.getTrueAll()){this.selectedItemsDataProvider.setGetData(this.availableItemsListDataProvider),this.selectedItemsDataProvider.setData=null;var t=this;this.selectedItemsList.fetch(function(){t._updateSelectedItemsCountLabel(),t.selectedItemsList.resize()}),this.silent?delete this.silent:this.triggerSelectionChange()}else{var a=this._getSelectedItemsDataProviderInstance();this.selectedItemsDataProvider.setGetData(a.getData),this.selectedItemsDataProvider.setData=i.bind(a.setData,a),this.selectedItemsDataProvider.getAllCachedData=i.bind(a.getAllCachedData,a),n.prototype.selectionChangeInternal.call(this,e)}},triggerSelectionChange:function(){this.trigger("selection:change",this.getValue(),{isTrueAll:this.getTrueAll()})},setTrueAll:function(e,t){t=t||{},t.silent&&(this.silent=!0),delete t.silent,this.availableItemsList.setTrueAll(e,t)},getTrueAll:function(){return this.availableItemsList.getTrueAll()},_getSelectedItemsDataProviderInstance:function(){var e=this.selectedItemsDataProviderInstance||new l(this.selectedListOptions);return e.setData([]),e}})});