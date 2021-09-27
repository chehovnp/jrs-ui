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

define(["require","exports","module","backbone"],function(i,e,s){var n=i("backbone"),r=n.Model.extend({initialize:function(i){this.isInherited=!!i.isInherited,i.permission&&(this.permission=i.permission),i.inheritedPermission&&(this.inheritedPermission=i.inheritedPermission),this.isDisabled=!!i.isDisabled},getResolvedPermission:function(){return this.isInherited?this.inheritedPermission:this.permission},toJSON:function(){return{permission:this.permission,isInherited:this.isInherited,inheritedPermission:this.inheritedPermission,newPermission:this.newPermission}},toData:function(){return{permission:this.permission,isInherited:this.isInherited,inheritedPermission:this.inheritedPermission,newPermission:this.newPermission}}});s.exports=r});