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

define(["require","exports","module","underscore","backbone","../../actionModel/actionModel.primaryNavigation","./PermissionModel"],function(e,t,n){var a=e("underscore"),i=e("backbone"),o=e("../../actionModel/actionModel.primaryNavigation"),r=e("./PermissionModel"),s=i.Model.extend({initialize:function(e){e&&(this.roleName=e.roleName,this.external=e.external,this.tenantId=e.tenantId),e.permissionToDisplay&&(this.permission=new r(e.permissionToDisplay))},getDisplayName:function(){return this.roleName},getNameWithTenant:function(){return this.tenantId&&!this.tenantId.blank()?this.roleName+"|"+this.tenantId:this.roleName},getManagerURL:function(){return"flow.html?"+Object.toQueryString({_flowId:"roleListFlow",text:void 0!==this.roleName?encodeURIComponent(this.roleName):this.roleName,tenantId:void 0!==this.tenantId?encodeURIComponent(this.tenantId):this.tenantId})},navigateToManager:function(){o.navigationPaths.tempNavigateToManager=a.cloneDeep(o.navigationPaths.role),o.navigationPaths.tempNavigateToManager.params+="&"+Object.toQueryString({text:this.roleName,tenantId:this.tenantId}),o.navigationOption("tempNavigateToManager")},equals:function(e){return e&&this.roleName==e.roleName&&this.tenantId==e.tenantId},toPermissionData:function(e){return{roleName:this.roleName,tenantId:this.tenantId,permissionToDisplay:this.permission.toData()}}});n.exports=s});