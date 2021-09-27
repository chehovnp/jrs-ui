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

define(["require","exports","module","prototype","underscore","../core/core.ajax","../core/core.ajax.utils"],function(t,e,n){var r=t("prototype"),o=r.Template,i=t("underscore"),s=t("../core/core.ajax"),l=s.ajaxTargettedUpdate,d=s.AjaxRequester,u=t("../core/core.ajax.utils"),a=u.baseErrorHandler;void 0===window.Administer&&(window.Administer={}),window.Administer=i.extend({_messages:{},urlContext:null,getMessage:function(t,e){var n=this._messages[t];return n?new o(n).evaluate(e||{}):""},menuActions:{"p#navAnalysisOptions":function(){return window.Administer.urlContext+"/flow.html?_flowId=mondrianPropertiesFlow"},"p#navAnalysisOptionsCE":function(){return window.Administer.urlContext+"/olap/properties.html"},"p#navDesignerOptions":function(){return window.Administer.urlContext+"/flow.html?_flowId=designerOptionsFlow"},"p#navDesignerCache":function(){return window.Administer.urlContext+"/flow.html?_flowId=designerCacheFlow"},"p#navAwsSettings":function(){return window.Administer.urlContext+"/flow.html?_flowId=awsSettingsFlow"},"p#navLogSettings":function(){return window.Administer.urlContext+"/log_settings.html"},"p#logCollectors":function(){return window.Administer.urlContext+"/logCollectors.html"},"p#navImport":function(){return window.Administer.urlContext+"/adminImport.html"},"p#navExport":function(){return window.Administer.urlContext+"/adminExport.html"},"p#navCustomAttributes":function(){return window.Administer.urlContext+"/customAttributes.html"},"p#navResetSettings":function(){return window.Administer.urlContext+"/resetSettings.html"}},_sendRequest:function(t,e,n){l(t,{postData:e,callback:n,mode:d.prototype.EVAL_JSON,errorHandler:this._errorHandler})},_errorHandler:function(t){return t.getResponseHeader("LoginRequested")?(window.location="flow.html?_flowId=designerCacheFlow",!0):a(t)}},window.Administer),n.exports=window.Administer});