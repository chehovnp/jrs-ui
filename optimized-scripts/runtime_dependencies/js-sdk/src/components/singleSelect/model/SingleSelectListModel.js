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

define(["require","exports","module","underscore","../../scalableList/model/ListWithSelectionModel","../../scalableList/model/listWithNavigationModelTrait"],function(e,t,i){var l=e("underscore"),n=e("../../scalableList/model/ListWithSelectionModel"),s=e("../../scalableList/model/listWithNavigationModelTrait"),a=n.extend(s);a=a.extend({setActive:function(e){s.setActive.call(this,l.extend(e,{silent:!0}));var t={};"number"==typeof e.index&&(t[e.index]=e.item.value),this.select(t)},_convertInitialArrayToSelection:function(e,t,i){for(var l=0;l<e.length;l++)t[e[l].value]&&(this._addToSelection(e[l].value,l),this.getActive()||s.setActive.call(this,{index:l,item:e[l],silent:!0}));this._triggerSelectionChange(i)},_convertSelectionObject:function(e){for(var t in e)if(e.hasOwnProperty(t)&&void 0!==e[t]){var i=e[t];return{index:parseInt(t,10),value:i}}},_select:n.prototype.select,select:function(e,t){var i,n=!1;if(!e||"string"==typeof e||l.isArray(e))s.setActive.call(this,{silent:!0});else if(i=this._convertSelectionObject(e)){var a=this.getActive();a&&i.value===a.value&&i.index===a.index||(n=!0)}else s.setActive.call(this,{silent:!0});return n?this.activate(i.index):this._select(e,t),this}}),i.exports=a});