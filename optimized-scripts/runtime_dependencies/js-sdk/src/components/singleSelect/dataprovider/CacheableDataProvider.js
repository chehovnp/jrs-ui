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

define(["require","exports","module","jquery","underscore"],function(t,e,a){var n=t("jquery"),r=t("underscore"),i=function(t){r.bindAll(this,"getData","getAllCachedData"),this.data=t||[]};r.extend(i.prototype,{setData:function(t){this.data=t||[]},getAllCachedData:function(){return this.data},getData:function(t){var e=new n.Deferred,a=t&&t.offset?t.offset:0,r=t&&t.limit?a+t.limit:this.data.length,i=this._getDataSegment(this.data,a,r);return e.resolve({data:i,total:this.data.length}),e.promise()},_getDataSegment:function(t,e,a){a=Math.min(a,t.length);for(var n=[],r=e;r<a;r++)n.push({label:t[r].label,value:t[r].value});return n}}),a.exports=i});