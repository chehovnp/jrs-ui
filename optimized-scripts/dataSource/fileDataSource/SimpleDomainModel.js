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

define(["require","exports","module","jquery","underscore","request","runtime_dependencies/js-sdk/src/jrs.configs","runtime_dependencies/bi-repository/src/bi/repository/model/RepositoryResourceModel"],function(e,t,r){var a=e("jquery"),o=e("underscore"),n=e("request"),s=e("runtime_dependencies/js-sdk/src/jrs.configs"),i=e("runtime_dependencies/bi-repository/src/bi/repository/model/RepositoryResourceModel");r.exports=i.extend({defaults:{uri:void 0,label:void 0,columns:[],dataSourceUri:void 0},validation:{columns:function(e){var t=[];return o.each(e,function(e,r){e.label||t.push({rowId:r,name:"label"})}),0!==t.length?this.trigger("validationFailed",t):this.trigger("validationPassed"),null}},type:"simpleDomain",url:function(){return s.contextPath+"/rest_v2/domains"},isNew:function(){return!0},constructor:function(e,t){i.prototype.constructor.apply(this,arguments),this.dataSource=t.dataSource,t.dataSource&&t.dataSource.uri&&this.set("dataSourceUri",t.dataSource.uri)},save:function(e,t){return o.defaults(t||(t={}),{headers:{Accept:"application/json","Content-Type":"application/simpleDomain+json; charset=UTF-8"}}),i.prototype.save.call(this,e,t)},parseMetadata:function(e){return o.each(e.columns,function(e){e.show=!0}),e},parse:function(e){var t=i.prototype.parse.apply(this,arguments);return t.dataSource&&(t.dataSourceUri=t.dataSource.dataSourceReference,delete t.dataSource),t.metadata&&(t.columns=t.metadata.columns,delete t.metadata),t},toJSON:function(){var e=i.prototype.toJSON.apply(this,arguments);return e.dataSource={dataSourceReference:e.dataSourceUri},e.metadata={columns:o.reduce(e.columns,function(e,t){return t.show&&e.push(t),e},[]),queryLanguage:"csv"},delete e.dataSourceUri,delete e.columns,e},fetchMetadata:function(){var e=this,t=a.Deferred();return n({type:"POST",url:s.contextPath+"/rest_v2/connections",dataType:"json",data:JSON.stringify(this.dataSource),headers:{"Content-Type":"application/repository.customDataSource+json",Accept:"application/table.metadata+json"}}).done(function(r){r=e.parseMetadata(r),e.set("columns",r.columns),t.resolve(r)}).fail(function(e){t.reject(e)}),t}})});