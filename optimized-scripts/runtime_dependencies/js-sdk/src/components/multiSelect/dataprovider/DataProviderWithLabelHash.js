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

define(["require","exports","module","underscore","../../singleSelect/dataprovider/CacheableDataProvider"],function(a,e,t){var r=a("underscore"),s=a("../../singleSelect/dataprovider/CacheableDataProvider"),o=function(){s.apply(this,arguments)};r.extend(o.prototype,s.prototype),r.extend(o.prototype,{setData:function(a){s.prototype.setData.call(this,a),this.dataLabelsHash={};for(var e=0;e<this.data.length;e++)this.dataLabelsHash[this.data[e].value]=this.data[e].label},getDataLabelHash:function(){return this.dataLabelsHash}}),t.exports=o});