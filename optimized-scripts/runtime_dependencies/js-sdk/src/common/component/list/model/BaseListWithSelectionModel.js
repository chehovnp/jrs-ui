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

define(["require","exports","module","underscore","./ScalableListModel"],function(e,t,i){var n=e("underscore"),o=e("./ScalableListModel"),l=o.extend({initialize:function(e){o.prototype.initialize.call(this,e),this.select(e.value,{silent:!0})},_addToSelection:function(e,t){throw"Not implemented"},_removeFromSelection:function(e,t){throw"Not implemented"},_clearSelection:function(){throw"Not implemented"},_selectionContains:function(e,t){throw"Not implemented"},_getSelection:function(){throw"Not implemented"},_triggerSelectionChange:function(e){e&&e.silent||this.trigger("change"),this.trigger("selection:change")},_addRangeToSelection:function(e,t,i){for(var n=0;n<e.length;n++)this._addToSelection(e[n].value,n+t);this.trigger("selection:addRange",{start:t,end:i,selection:this.getSelection()})},_fetchAllDataAndModifySelection:function(e,t){return this.getData().done(function(i){for(var n=0;n<i.data.length;n++)e(i.data[n].value,n);t&&t()}).fail(this.fetchFailed),this},addValueToSelection:function(e,t){return this.selectionStartIndex=t,this._addToSelection(e,t),this.trigger("selection:add",{value:e,index:t})},addRangeToSelection:function(e,t){if(void 0===this.selectionStartIndex)return void this.addValueToSelection(e,t);if(this.selectionStartIndex!==t){var i=Math.min(this.selectionStartIndex,t),n=Math.max(this.selectionStartIndex,t);if(this.selectionStartIndex=t,i>=this.get("bufferStartIndex")&&n<=this.get("bufferEndIndex")){var o=Array.prototype.slice.call(this.get("items"),i-this.get("bufferStartIndex"),n-this.get("bufferStartIndex")+1);this._addRangeToSelection(o,i,n)}else{var l=this;this.getData({offset:i,limit:n-i+1}).done(function(e){l._addRangeToSelection(e.data,i,n)}).fail(this.fetchFailed)}}},removeValueFromSelection:function(e,t){this._removeFromSelection(e,t),this.trigger("selection:remove",{value:e,index:t})},toggleSelection:function(e,t){this.selectionContains(e,t)?this.removeValueFromSelection(e,t):this.addValueToSelection(e,t)},selectionContains:function(e,t){return this._selectionContains(e,t)},clearSelection:function(){return this._clearSelection(),this.trigger("selection:clear")},getSelection:function(){return this._getSelection()},select:function(e,t){throw"Not implemented"},selectAll:function(){var e=this,t=!0;this._fetchAllDataAndModifySelection(function(i,n){t&&(e._clearSelection(),t=!1),e._addToSelection(i,n)},n.bind(this._triggerSelectionChange,this))},invertSelection:function(){var e=this;this._fetchAllDataAndModifySelection(function(t,i){e._selectionContains(t,i)?e._removeFromSelection(t,i):e._addToSelection(t,i)},n.bind(this._triggerSelectionChange,this))}});i.exports=l});