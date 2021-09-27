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

define(["require","exports","module","underscore","./BaseListWithSelectionModel"],function(e,t,i){var n=e("underscore"),o=e("./BaseListWithSelectionModel"),s=o.extend({_addToSelection:function(e,t){this.selection[e]=!0},_removeFromSelection:function(e,t){delete this.selection[e]},_clearSelection:function(){this.selection={}},_selectionContains:function(e,t){return this.selection[e]},_getSelection:function(){return n.keys(this.selection)},select:function(e,t){if(this._clearSelection(),"string"==typeof e)this._addToSelection(e);else if(n.isArray(e))for(var i=0;i<e.length;i++)this._addToSelection(e[i]);else if(void 0!==e)for(var o in e)if(e.hasOwnProperty(o)){var s=e[o];void 0!==s&&this._addToSelection(s,o)}this._afterSelect&&this._afterSelect(e,t),this._triggerSelectionChange(t)}});i.exports=s});