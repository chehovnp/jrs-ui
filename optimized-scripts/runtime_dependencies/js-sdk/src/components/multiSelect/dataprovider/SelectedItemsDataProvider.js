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

define(["require","exports","module","underscore","../../singleSelect/dataprovider/CacheableDataProvider"],function(t,e,a){var r=t("underscore"),o=t("../../singleSelect/dataprovider/CacheableDataProvider"),n=function(t){t=t||{},r.defaults(t,{sortFunc:this._sortFunc,formatLabel:this._formatLabel}),this.sortFunc=t.sortFunc,this.formatLabel=t.formatLabel,o.call(this,t.data)};r.extend(n.prototype,o.prototype),r.extend(n.prototype,{setData:function(t){t=this._convertToStandardData(t),t=this._sortData(t),o.prototype.setData.call(this,t)},_sortFunc:function(t,e){return t.label.localeCompare(e.label)},_formatLabel:function(t){return t},_sortData:function(t){return t=t||[],t.sort(this.sortFunc)},_convertToStandardData:function(t){var e=this;return r.map(t,function(t){return{value:t,label:e.formatLabel(t)}})}}),a.exports=n});