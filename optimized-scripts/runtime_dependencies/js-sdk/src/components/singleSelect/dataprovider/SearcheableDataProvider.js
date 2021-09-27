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

define(["require","exports","module","jquery","underscore"],function(e,t,i){var a=e("jquery"),r=e("underscore"),n=function(e){r.bindAll(this,"getData","_filterValues","_shouldFilter"),this.indexMapping={},this.internalGetData=e.getData};r.extend(n.prototype,{getData:function(e){var t=new a.Deferred;if(e&&void 0!==e.criteria)return this.dataCache=null,this.criteria=e.criteria,t.resolve(),t.promise();var i=this;return i._shouldFilter()?(this.dataCache?this._resolvePromise(e,t):this.internalGetData().done(function(a){i.indexMapping={},i.reverseIndexMapping={},i.dataCache=i._filterValues(a.data),i._resolvePromise(e,t)}).fail(t.reject),t.promise()):(this.indexMapping=null,this.reverseIndexMapping=null,this.dataCache=null,this.internalGetData(e))},getIndexMapping:function(){return this.indexMapping},getReverseIndexMapping:function(){return this.reverseIndexMapping},_resolvePromise:function(e,t){var i=e&&e.offset?e.offset:0,a=e&&e.limit?i+e.limit:this.dataCache.length,r=this._getDataSegment(this.dataCache,i,a);t.resolve({data:r,total:this.dataCache.length})},_shouldFilter:function(){return this.criteria},_filterValues:function(e){for(var t=[],i=0,a=0;a<e.length;a++){var r=e[a];(void 0===r.label?r.value:r.label).toLowerCase().indexOf(this.criteria.toLowerCase())>-1&&(t[i]=r,this.indexMapping[i]=a,this.reverseIndexMapping[a]=i,i+=1)}return t},_getDataSegment:function(e,t,i){i=Math.min(i,e.length);for(var a=[],r=t;r<i;r++)a.push({label:e[r].label,value:e[r].value});return a}}),i.exports=n});