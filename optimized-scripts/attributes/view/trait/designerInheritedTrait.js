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

define(["require","exports","module","underscore"],function(e,i,t){var n=e("underscore");t.exports={_findOriginallyInheritedModelByName:function(e,i){return n.find(e,function(e){return e.isOriginallyInherited()&&e.get("name")===i})},_filterInheritedViews:function(e){this.filteredInheriteds=this.collection.filterInheritedAttributes(e)},_findInheriteds:function(e){return this._findModelsWhere({name:e,inherited:!0})},_revertInheritedRemoval:function(e){if(!this._findInheriteds(e)){var i=this._findOriginallyInheritedModelByName(n.union(this.changedModels,this.overriddenInheritedModels),e);i&&this.revertViewRemoval(i)}},_searchForInherited:function(e){var i=this;return this.collection.search(e).done(function(e){e&&(i._filterInheritedViews(e),i.collection.addItemsToCollection(i.filteredInheriteds))})},_removeInheritedView:function(e){var i=this._findInheriteds(e.get("name"));i&&this.removeView(i)},_addInheritedView:function(e){this.filteredInheriteds&&this.filteredInheriteds.length&&(e.resetField("id"),this.collection.addItemsToCollection(this.filteredInheriteds))}}});