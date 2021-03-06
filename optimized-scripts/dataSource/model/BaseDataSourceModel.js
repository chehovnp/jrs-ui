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

define(["require","exports","module","runtime_dependencies/bi-repository/src/bi/repository/model/RepositoryResourceModel","underscore","jquery","backbone","runtime_dependencies/js-sdk/src/jrs.configs","../../core/core.ajax","../../components/components.dialogs"],function(e,o,t){var i=e("runtime_dependencies/bi-repository/src/bi/repository/model/RepositoryResourceModel"),n=e("underscore"),r=e("jquery"),s=e("backbone"),c=e("runtime_dependencies/js-sdk/src/jrs.configs"),a=e("../../core/core.ajax"),d=a.ajax,p=a.AjaxRequester,u=e("../../components/components.dialogs");t.exports=i.extend({defaults:function(){var e={};return n.extend(e,i.prototype.defaults,{connectionType:void 0}),e}(),validation:{},initialize:function(e,o){o=n.defaults(o||{},{contextPath:c.contextPath}),this.options=o,this.isNew()&&o.parentFolderUri&&this.set("parentFolderUri",o.parentFolderUri,{silent:!0});var t=o.parentFolderUri?o.parentFolderUri:e.parentFolderUri;e.name&&t&&!e.uri&&!0===o.isEditMode&&this.set("uri",i.constructUri(t,e.name),{silent:!0}),i.prototype.initialize.call(this,e,o)},testConnection:function(){if(this.validate(),this._isValid){var e=r.Deferred(),o=r("#"+d.LOADING_ID)[0],t=!1,i=window.setTimeout(function(){t=!0,u.popup.show(o,!0)},p.prototype.MAX_WAIT_TIME),n=this.toJSON();return s.ajax({type:"POST",url:c.contextPath+"/rest_v2/connections",contentType:n.connectionType,headers:{Accept:"application/json"},data:JSON.stringify(n)}).always(function(){window.clearTimeout(i),t&&u.popup.hide(o)}).done(e.resolve).fail(e.reject),e.promise()}}})});