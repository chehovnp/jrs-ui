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

define(["require","exports","module","underscore","jquery","backbone","request","../../components/components.templateengine","../../serverSettingsCommon/enum/serverSettingGroupsEnum","../../attributes/enum/levelIdEnum"],function(e,t,n){var r=e("underscore"),i=e("jquery"),a=e("backbone"),s=e("request"),o=e("../../components/components.templateengine"),u=e("../../serverSettingsCommon/enum/serverSettingGroupsEnum"),c=e("../../attributes/enum/levelIdEnum"),l={TENANT:"tenant:/",USER:"user:/"},h=a.Collection.extend({initialize:function(e,t){t=t||{};var n="rest_v2/attributes?_embedded=permission&group="+u.CUSTOM,r=t.context||{};this.urlGETTemplate=r.urlGETTemplate||n,this.urlPUTTemplate=r.urlPUTTemplate||"rest_v2/attributes?_embedded=permission"},parse:function(e){return e&&e.attribute?e.attribute:[]},setContext:function(e,t){e=e||{urlGETTemplate:this.urlGETTemplate,urlPUTTemplate:this.urlPUTTemplate};var n=new i.Deferred;return r.isEqual(this.context,e)&&!t?n.resolve():(this.context=e,this.fetch({cache:!1,reset:!0,headers:{Accept:"application/attributes.collection.hal+json"}}).done(n.resolve)),n},getContext:function(){return this.context},url:function(e){var t=r.extend({},this.context),n="PUT"===e?this.urlPUTTemplate:this.urlGETTemplate;return r.each(c,function(e){t[e]&&(t[e]=this.escapeLevelId(t[e]))},this),o.renderUrl(n,t,!1)},escapeLevelId:function(e){return encodeURIComponent(e).replace(/'/g,"%27")},save:function(e,t){var n=this._modelsToJSON(t,!0);return s({url:this.url("PUT")+this._concatNames(e),type:"PUT",cache:!1,contentType:"application/hal+json",headers:{Accept:"application/hal+json"},data:JSON.stringify({attribute:n})})},validateSearch:function(e,t,n,i){var a=i&&this._concatGroups();return this.search(e,t,"&recursive=true",n,a).done(r.bind(this._successSearchCallback,this,e,t))},filterInheritedAttributes:function(e){var t=e&&e.attribute;return e?r.filter(t,function(e){return e.inherited&&!this.findWhere({name:e.name,inherited:!0})},this):null},search:function(e,t,n,r,i){n=n||"",i=i||"";var a="application/attributes.collection.hal+json";return s({url:this.url()+this._concatNames(e,r)+n+i,type:"GET",dataType:"json",cache:!1,contentType:a,headers:{Accept:a}})},getHolder:function(){return this.context.id?l.TENANT+this.context.id:this.context.tenantId?l.USER+this.context.tenantId+"/"+this.context.userName:l.TENANT},addItemsToCollection:function(e){!r.isArray(e)&&(e=[e]),r.each(e,function(e){this.addNew(e)},this)},addNew:function(e){e=e||{};var t=new this.model(e);return this.add(t),t},_modelsToJSON:function(e,t){return r.map(e,function(e){return e.toJSON({omitValue:t})})},_successSearchCallback:function(e,t,n){e=r.isArray(e)?e:[e],t=this._modelsToJSON(t);var i,a,s=this.getHolder();r.each(e,function(e){a=s||e.holder,e.holder=a,n&&n.attribute.length&&(e.attr=n.attribute),t&&r.where(t,{name:e.get("name"),inherited:!1}).length>1&&(i={holder:a},e.attr?e.attr.push(i):e.attr=[i])},this)},_concatGroups:function(){var e="";return r.each(r.omit(u,"CUSTOM"),function(t){e+="&group="+t}),e},_concatNames:function(e,t){e=r.isArray(e)?e:[e];var n,i="",a=this,s=function(e){return"&name="+a.escapeLevelId(e)};return r.each(e,function(e){n=e.get("id"),!t&&e.isRenamed()&&n&&(i+=s(n)),i+=s(e.get("name"))},this),i}});n.exports=h});