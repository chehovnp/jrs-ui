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

define(["require","exports","module","underscore","jquery","../../util/classUtil","../../util/xssUtil","request"],function(t,e,a){function r(t,e){return s.call(this,i.call(this,t),e)}function i(t){for(var e=0,a=t.length;e<a;e++)t[e]={id:this.extractId(t[e]),value:t[e]};return t}function s(t,e){var a,r;if(this.processors&&this.processors.length)for(var i=0,s=this.processors.length;i<s;i++){a=[];for(var n=0,o=t.length;n<o;n++)(r=this.processors[i].processItem(t[n],e,this))&&a.push(r);t=a}return t}var n=t("underscore"),o=t("jquery"),l=t("../../util/classUtil"),c=(t("../../util/xssUtil"),t("request"));a.exports=l.extend({constructor:function(t){this.requestType=t.requestType?t.requestType:"GET",t.getDataUri&&(this.getDataUri=t.getDataUri),this.getDataUri||(this.getDataUri=n.template(t.dataUriTemplate)),t.getDataArray&&(this.getDataArray=t.getDataArray),t.getDataSize&&(this.getDataSize=t.getDataSize),t.extractId&&(this.extractId=t.extractId),this.levelDataId=t.levelDataId?t.levelDataId:"id",this.processors=t.processors||[],this.initialize(t)},initialize:function(t){},extractId:function(t){return t[this.levelDataId]},getDataSize:function(t,e,a){return this.getDataArray(t,e,a).length},getDataArray:function(t,e,a){return t},obtainData:function(t,e){var a=new o.Deferred,i=this;return this.predefinedData&&this.predefinedData[t.id]?a.resolve({total:this.predefinedData[t.id].length,data:this.predefinedData[t.id]}):c({type:this.requestType,dataType:this.dataType||"json",headers:{Accept:this.accept||"application/json","Content-Type":this.contentType||void 0},cache:!1,data:this.data||void 0,url:this.getDataUri(t)}).done(function(){var e=arguments[0];i.dataSize=i.getDataSize.call(i,e,t,arguments[2]),a.resolve({total:i.dataSize,data:r.call(i,i.getDataArray.call(i,e,t,arguments[2]),t)})}).fail(function(t){a.reject(t.status,t.responseText)}),a},_process:r})});