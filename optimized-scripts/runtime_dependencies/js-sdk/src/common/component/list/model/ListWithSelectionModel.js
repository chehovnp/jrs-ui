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

define(["require","exports","module","underscore","./BaseListWithSelectionModel"],function(e,t,i){var n=e("underscore"),o=e("./BaseListWithSelectionModel"),r=o.extend({_addToSelection:function(e,t){this.selection[t]=e},_removeFromSelection:function(e,t){this.selection[t]=void 0},_clearSelection:function(){this.selection=[]},_selectionContains:function(e,t){return this.selection[t]===e},_getSelection:function(){return this.selection},_isSelectionEmpty:function(e){if(!e)return!0;if(n.isArray(e)&&0===e.length)return!0;if(n.isArray(e)||"string"==typeof e)return!1;for(var t in e)if(e.hasOwnProperty(t)&&void 0!==e[t])return!1;return!0},_selectPendingSelection:function(e,t){if(0===this.get("bufferStartIndex")&&this.get("bufferEndIndex")==this.get("total")-1)this._convertInitialArrayToSelection(this.get("items"),e,t);else{var i=this;this.getData().done(function(n){i._convertInitialArrayToSelection(n.data,e,t)}).fail(this.fetchFailed)}},_convertInitialArrayToSelection:function(e,t,i){for(var n=0;n<e.length;n++)t[e[n].value]&&this._addToSelection(e[n].value,n);this._triggerSelectionChange(i)},_triggerSelectionChange:function(e){this._calcSelectionStartIndex&&this._calcSelectionStartIndex(),o.prototype._triggerSelectionChange.call(this,e)},_calcSelectionStartIndex:function(){if(void 0===this.selectionStartIndex)for(var e in this.selection)if(this.selection.hasOwnProperty(e)&&void 0!==this.selection[e]){this.selectionStartIndex=parseInt(e,10);break}},select:function(e,t){if(this._clearSelection(),this._isSelectionEmpty(e))return void this._triggerSelectionChange(t);if(n.isArray(e)||"string"==typeof e){var i={};if("string"==typeof e)i[e]=!0;else for(var o=0;o<e.length;o++)i[e[o]]=!0;this._selectPendingSelection(i,t)}else{for(var r in e)if(e.hasOwnProperty(r)){var s=e[r];void 0!==s&&this._addToSelection(s,r)}this._triggerSelectionChange(t)}}});i.exports=r});