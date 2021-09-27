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

define(["require","exports","module","backbone","underscore","../../components/list.base","../view/SubDataSourceItemView","runtime_dependencies/js-sdk/src/common/util/featureDetection","text!../template/subDataSourcesListTemplate.htm","../../util/utils.common"],function(e,t,i){var s=e("backbone"),n=e("underscore"),o=e("../../components/list.base"),u=o.dynamicList,l=e("../view/SubDataSourceItemView"),c=e("runtime_dependencies/js-sdk/src/common/util/featureDetection"),r=e("text!../template/subDataSourcesListTemplate.htm"),m=e("../../util/utils.common"),a=m.disableSelectionWithoutCursorStyle,h=m.enableSelection;i.exports=s.View.extend({events:{"blur input.dataSourceID":"disableSelection","focus input.dataSourceID":"enableSelection"},initialize:function(e){this.options=e,this.subviews=[],this._list=new u.UnderscoreTemplatedList("selectedSubDataSourcesList",{template:r,dragPattern:"",multiSelect:!0,selectOnMousedown:!c.supportsTouch}),this._list.observe("item:unselected",n.bind(this._itemUnselected,this)),this._list.observe("item:selected",n.bind(this._itemSelected,this)),this.setElement("#selectedSubDataSourcesList",!1),this.listenTo(this.collection,"reset",this.render)},disableSelection:function(){a(this._list._getElement())},enableSelection:function(){h(this._list._getElement())},_itemUnselected:function(e){var t=this.getSubviewByListItem(e.memo.item),i=t?t.model:null;this.trigger("item:unselected",i)},_itemSelected:function(e){var t=this.getSubviewByListItem(e.memo.item),i=t?t.model:null;this.trigger("item:selected",i)},render:function(e,t){this._list.resetSelected();var i=[],s=[],o=[],u=!1,c=this.collection.map(function(e){return e.get("uri")}),r=this;if(t&&t.previousModels&&(o=n.map(t.previousModels,function(e){return e.get("uri")}),n.each(t.previousModels,function(e){n.include(c,e.get("uri"))||s.push(e)}),u=!0),this.collection.forEach(function(e){n.include(o,e.get("uri"))||i.push(e)}),i.length){if(n.each(i,function(e){var t=new l({model:e});r.subviews.push(t),r._list.addItems([t.getListItem()]),r._list.show()}),this._list.show(),u){var m=n.compact(n.map(i,n.bind(r.getSubviewByModel,r)));n.each(m,function(e){r._list.selectItem(e.getListItem(),!0)})}n.each(this.subviews,function(e){n.defer(n.bind(e.setRootElement,e))})}return s.length&&(n.each(s,function(e){r.removeSubview(e)}),this._list.show()),this},getSubviewByModel:function(e){return n.find(this.subviews,function(t){return t.model===e})},getList:function(){return this._list},getListLength:function(){return this._list._items.length},getSelectedModels:function(){var e=this._list.getSelectedItems(),t=n.compact(n.map(e,n.bind(this.getSubviewByListItem,this)));return n.map(t,function(e){return e.model})},getSubviewByListItem:function(e){return n.find(this.subviews,function(t){return t.getListItem()===e})},removeSubview:function(e){var t=this.getSubviewByModel(e);t&&(this._list.removeItems([t.getListItem()]),t.remove(),this._list.show())},removeSubviews:function(){var e=n.map(this.subviews,function(e){return e.getListItem()});this._list.removeItems(e),n.invoke(this.subviews,"remove")},remove:function(){this.removeSubviews(),s.View.prototype.remove.apply(this,arguments)}})});