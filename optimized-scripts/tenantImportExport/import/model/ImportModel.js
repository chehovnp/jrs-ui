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

define(["require","exports","module","underscore","jquery","../factory/importModelAttributesFactory","../enum/brokenDependencyStrategyEnum","runtime_dependencies/js-sdk/src/common/transport/AjaxFormSubmitter","runtime_dependencies/js-sdk/src/common/extension/backboneValidationExtension","runtime_dependencies/js-sdk/src/common/model/BaseModel","../enum/secureKeyTypeEnum"],function(e,t,i){var n=e("underscore"),r=e("jquery"),s=e("../factory/importModelAttributesFactory"),o=e("../enum/brokenDependencyStrategyEnum"),u=e("runtime_dependencies/js-sdk/src/common/transport/AjaxFormSubmitter"),a=e("runtime_dependencies/js-sdk/src/common/extension/backboneValidationExtension"),d=e("runtime_dependencies/js-sdk/src/common/model/BaseModel"),c=e("../enum/secureKeyTypeEnum"),m=d.extend({defaults:{fileName:"",update:!0,skipUserUpdate:!1,mergeOrganization:!1,skipThemes:!0,keyType:"",secretKey:"",secretUri:"",keyAlias:"",invalidKeyError:"",invalidSecureFileContentError:"",brokenDependencies:o.FAIL},url:"rest_v2/import",validation:{fileName:[{fn:function(e){return!/\.zip$/.test(e)}}]},initialize:function(e,t){this.form=new u(t.form,this.url,"post","multipart/form-data")},parse:function(){return this.attributes},save:function(){var e,t,i=this;return this.isNew()?(e=new r.Deferred,this.form.submit().done(function(t){i.set("id",t.id),n.isUndefined(t.errorCode)&&n.isUndefined(t.error)?e.resolve(t):e.reject(t)}).fail(function(t){i.trigger("error",t),e.reject(t)})):(t=this._convertParameters(),e=d.prototype.save.call(this,{parameters:t},{url:this.url+"/"+this.id}).fail(n.bind(this.trigger,this,"error"))),e},cancel:function(){var e=this.url+"/"+this.id;this.destroy({url:e})},reset:function(e,t,i){var o=n.extend({},this.defaults,s(e),t);o.keyAlias=i?i[0].alias:"",this.clear().set(n.extend({},o)),this.id=void 0,r('input[name ="key-alias"]').length&&(r('input[name ="key-alias"]')[0].value=c.DEFAULTKEY)},_convertParameters:function(){var e=[];this.get("skipUserUpdate")&&e.push("skip-user-update"),this.get("includeAccessEvents")&&e.push("include-access-events"),this.get("includeAuditEvents")&&e.push("include-audit-events"),this.get("includeMonitoringEvents")&&e.push("include-monitoring-events"),this.get("includeServerSettings")&&e.push("include-server-setting"),this.get("mergeOrganization")&&e.push("merge-organization"),this.get("skipThemes")&&e.push("skip-themes"),this.get("update")&&e.push("update");var t=this.get("keyType");return t&&(e.push("keyType"),t===c.VALUE&&e.push("secret-key"),t===c.FILE&&e.push("secret-uri"),t===c.CUSTOMKEY&&e.push("key-alias")),e}});n.extend(m.prototype,a.mixin),i.exports=m});