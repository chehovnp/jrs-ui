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

define(["require","exports","module","underscore","backbone","./RoleModel","./PermissionModel","../../actionModel/actionModel.primaryNavigation"],function(e,t,n){var i=e("underscore"),a=e("backbone"),s=e("./RoleModel"),o=e("./PermissionModel"),r=e("../../actionModel/actionModel.primaryNavigation"),d=a.Model.extend({initialize:function(e){e&&(this.userName=e.userName,this.fullName=e.fullName,this.password=e.password||"",this.confirmPassword=e.confirmPassword||"",this.tenantId=e.tenantId,this.email=e.email,this.enabled=e.enabled,this.external=e.external,this.roles=[],e.roles&&e.roles.each(function(e){this.roles.push(new s(e))}.bind(this)),e.permissionToDisplay&&(this.permission=new o(e.permissionToDisplay)))},getNameWithTenant:function(){return this.tenantId&&!i.isEmpty(this.tenantId)?this.userName+"|"+this.tenantId:this.userName},getDisplayName:function(){return this.userName},getManagerURL:function(){return"flow.html?"+Object.toQueryString({_flowId:"userListFlow",text:i.isUndefined(this.userName)?this.userName:encodeURIComponent(this.userName),tenantId:i.isUndefined(this.tenantId)?this.tenantId:encodeURIComponent(this.tenantId)})},equals:function(e){return e&&this.userName==e.userName&&this.tenantId==e.tenantId},toPermissionData:function(){return{userName:this.userName,tenantId:this.tenantId,permissionToDisplay:this.permission.toData()}},navigateToManager:function(){r.navigationPaths.tempNavigateToManager=i.cloneDeep(r.navigationPaths.user),r.navigationPaths.tempNavigateToManager.params+="&"+Object.toQueryString({text:this.userName,tenantId:this.tenantId}),r.navigationOption("tempNavigateToManager")}});n.exports=d});