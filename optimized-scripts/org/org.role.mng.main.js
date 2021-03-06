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

define(["require","exports","module","../manage/mng.root","underscore","../core/core.layout","../components/components.webHelp","../namespace/namespace"],function(e,n,t){function i(){return!l.roleManager.tenantsTree||null!=l.roleManager.tenantsTree.getTenant()}function o(e){var e=e||l.properties.getValue();return e.tenantId||l.manager.isUserSuperuser()}function r(e){var e=e||l.properties.getValue();return e.tenantId||l.manager.isUserSuperuser()&&!s.contains(l.systemRoles,e.roleName)}function a(){var e=l.entityList.getSelectedEntities();return e.length>0&&!e.detect(function(e){return!r(e)})}var l=e("../manage/mng.root"),s=e("underscore"),d=e("../core/core.layout"),c=e("../components/components.webHelp"),u=e("../namespace/namespace"),g=u.isProVersion;l.roleManager={Event:{},Action:{},initialize:function(e){d.resizeOnClient("folders","roles","properties"),c.setCurrentContext("admin");var n=s.extend(e,window.localContext.roleMngInitOptions,{removeContextMenuTreePlugin:!0});l.manager.initialize(n),l.manager.entityJsonToObject=function(e){return new l.Role(e)},l.manager.relatedEntityJsonToObject=function(e){return new l.User(e)},this.roleList.initialize({toolbarModel:this.actionModel,text:l.manager.state.text}),l.addDialog.show=function(e){this.addDialog.show(e)}.bind(this),l.addDialog.hide=function(e){this.addDialog.hide(e)}.bind(this),this.properties.initialize(),this.addDialog.initialize(),l.observe("server:unavailable",function(e){var n=l.manager.tree,t=n?n.getOrganization().id:null;new l.Role({roleName:"",tenantId:t}).navigateToManager()}.bindAsEventListener(this)),l.observe("entity:deleted",function(){l.properties.hide()}),l.observe("entities:deleted",function(){l.properties.hide()}),g()||l.manager.reloadEntities()},actionModel:{ADD:{buttonId:"addNewRoleBtn",action:l.invokeClientAction,actionArgs:"create",test:i},DELETE:{buttonId:"deleteAllRolesBtn",action:l.invokeClientAction,actionArgs:"deleteAll",test:a}}},void 0===e&&document.observe("dom:loaded",l.roleManager.initialize.bind(l.roleManager)),l.canDeleteRole=r,l.canEditRole=o,l.canAddRole=i,l.canDeleteAllRoles=a,t.exports=l});