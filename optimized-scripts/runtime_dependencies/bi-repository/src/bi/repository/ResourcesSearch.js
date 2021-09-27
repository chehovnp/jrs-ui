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

define(["require","exports","module","underscore","backbone","runtime_dependencies/js-sdk/src/common/bi/component/BiComponent","runtime_dependencies/js-sdk/src/common/bi/component/util/biComponentUtil","runtime_dependencies/js-sdk/src/common/bi/error/biComponentErrorFactory","request","json!./schema/ResourcesSearch.json"],function(e,r,n){function o(e,r){var n=this.validate(),o=this;n?e.reject(d.validationError(n)):u({dataType:"json",url:t(r)}).done(function(n,t,i){r.data=n?n.resourceLookup:[],e.resolve(o.data())}).fail(function(r){e.reject(d.requestError(r))})}function t(e){var r=e.properties.server;return r+("/"===r.charAt(r.length-1)?"rest_v2/resources?":"/rest_v2/resources?")+i(e.properties).keys().reduce(function(r,n){var o=f[n];return o&&(i.isArray(e.properties[n])?r=r.concat(i.reduce(e.properties[n],function(e,r){return e.push(o+"="+r),e},[])):r.push(o+"="+e.properties[n])),r},[]).join("&")}var i=e("underscore"),s=e("backbone"),c=e("runtime_dependencies/js-sdk/src/common/bi/component/BiComponent"),a=e("runtime_dependencies/js-sdk/src/common/bi/component/util/biComponentUtil"),d=e("runtime_dependencies/js-sdk/src/common/bi/error/biComponentErrorFactory"),u=e("request"),p=e("json!./schema/ResourcesSearch.json"),m=i.keys(p.properties),l=["properties"],b=["data"],f=function(){var e=i.reduce(m,function(e,r){return e[r]=r,e},{});return e.server=!1,e.types="type",e}(),y=function(e){var r={properties:i.extend({},e),data:[]},n=new s.Model;a.createInstancePropertiesAndFields(this,r,m,l,b,n),i.extend(this,{validate:a.createValidateAction(r,p,n),run:a.createDeferredAction(o,n,r)})};y.prototype=new c,i.extend(y,{types:["folder","dataType","jdbcDataSource","awsDataSource","jndiJdbcDataSource","virtualDataSource","customDataSource","beanDataSource","xmlaConnection","listOfValues","file","reportOptions","dashboard","adhocDataView","query","olapUnit","reportUnit","domainTopic","semanticLayerDataSource","secureMondrianConnection","mondrianXmlaDefinition","mondrianConnection","inputControl"],sortBy:["uri","label","description","type","creationDate","updateDate","accessTime","popularity"],accessTypes:["viewed","modified"]}),n.exports=y});