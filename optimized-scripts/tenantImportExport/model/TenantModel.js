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

define(["require","exports","module","underscore","backbone","../../actionModel/actionModel.primaryNavigation"],function(t,n,i){var a=t("underscore"),e=t("backbone"),o=t("../../actionModel/actionModel.primaryNavigation"),r=e.Model.extend({defaults:{id:void 0,name:void 0,alias:void 0,desc:"",uri:void 0,parentId:void 0},initialize:function(t){if(!t)throw new Error("Can't create Tenant from undefined json");this.name=t.label||t.tenantName,this.label=this.name,this.alias=t.alias||t.tenantAlias,this.desc=t.tenantDesc,this.uri=t.tenantUri||t.uri,this.parentId=t.parentId,this.subTenantCount=t.subTenantCount,this.set({id:t.id||t.tenantId,name:this.name,uri:t.tenantUri||t.uri,alias:t.alias||t.tenantAlias})},isRoot:function(){return"organizations"==this.get("id")},getId:function(){return this.get("id")},getNameWithTenant:function(){return this.get("id")},getDisplayName:function(){return this.get("name")},equals:function(t){return t&&this.get("id")==t.get("id")},navigateToManager:function(){o.navigationPaths.tempNavigateToManager=a.cloneDeep(o.navigationPaths.organization),o.navigationPaths.tempNavigateToManager.params+="&"+Object.toQueryString({tenantId:this.get("id")}),o.navigationOption("tempNavigateToManager")}});i.exports=r});