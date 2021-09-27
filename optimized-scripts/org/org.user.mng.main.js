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

define(["require","exports","module","../manage/mng.root","underscore","../components/components.webHelp","../core/core.layout","../namespace/namespace"],function(e,t,n){function i(e,t){c.userActionFactory[e](t).invokeAction()}function s(e,t){c.userManager.actionFactory[e](t).invokeAction()}function r(){var e=c.entityList.getSelectedEntities(),t=c.userManager.options.currentUser;return e.length>0&&!!e.detect(function(e){return e.getNameWithTenant()==t})}function o(){return!c.manager.tenantsTree||null!=c.manager.tenantsTree.getTenant()}function a(){return c.entityList.getSelectedEntities().length>0}function l(){return c.entityList.getSelectedEntities().length>0&&!r()}function d(){return c.entityList.getSelectedEntities().length>0&&!r()}var c=e("../manage/mng.root"),u=e("underscore"),g=e("../components/components.webHelp"),A=e("../core/core.layout"),b=e("../namespace/namespace"),m=b.isProVersion;c.userManager={Event:{USERS_ENABLED:"users:enabled",USERS_DISABLED:"users:disabled"},Action:{ENABLE_ALL:"enableAll",DISABLE_ALL:"disableAll"},initialize:function(e){function t(e){var t=e.memo.inputData.users;c.properties.isEditMode&&c.properties.changeMode(!1),1==t.length&&c.entityList.selectEntity(t[0].getNameWithTenant())}g.setCurrentContext("admin"),A.resizeOnClient("folders","users","properties");var n=u.extend({},e,window.localContext.userMngInitOptions,{removeContextMenuTreePlugin:!0});c.userManager.options=n,c.manager.initialize(n),c.manager.entityJsonToObject=function(e){return new c.User(e)},c.manager.relatedEntityJsonToObject=function(e){return new c.Role(e)},this.userList.initialize({toolbarModel:this.actionModel,text:c.manager.state.text}),c.addDialog.show=function(e){this.addDialog.show(e)}.bind(this),c.addDialog.hide=function(e){this.addDialog.hide(e)}.bind(this),this.properties.initialize(n),this.addDialog.initialize(),c.observe("users:enabled",t.bindAsEventListener(this)),c.observe("users:disabled",t.bindAsEventListener(this)),c.observe("entity:deleted",function(){c.properties.hide()}),c.observe("entities:deleted",function(){c.properties.hide()}),c.observe("server:unavailable",function(e){var t=c.manager.tenantsTree,n=t?t.getOrganization().id:null;new c.User({userName:"",tenantId:n}).navigateToManager()}.bindAsEventListener(this)),m()||c.manager.reloadEntities()},actionModel:{ADD:{buttonId:"addNewUserBtn",action:c.invokeClientAction,actionArgs:"create",test:o},ENABLE:{buttonId:"enableAllUsersBtn",action:s,actionArgs:"enableAllUsers",test:a},DISABLE:{buttonId:"disableAllUsersBtn",action:s,actionArgs:"disableAllUsers",test:l},DELETE:{buttonId:"deleteAllUsersBtn",action:c.invokeClientAction,actionArgs:"deleteAll",test:d}},validators:{}},void 0===e&&document.observe("dom:loaded",c.userManager.initialize.bind(c.userManager)),c.canDeleteAllUsers=d,c.canAddUser=o,c.canEnableAllUsers=a,c.isLoggedInUserSelected=r,c.invokeUserAction=i,c.invokeUserManagerAction=s,n.exports=c});