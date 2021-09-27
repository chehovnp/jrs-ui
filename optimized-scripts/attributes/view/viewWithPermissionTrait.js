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

define(["require","exports","module","underscore","../../serverSettingsCommon/enum/confirmDialogTypesEnum","../../attributes/enum/permissionMasksEnum"],function(e,i,s){var n=e("underscore"),o=e("../../serverSettingsCommon/enum/confirmDialogTypesEnum"),t=e("../../attributes/enum/permissionMasksEnum"),m={1:1,2:2,32:3,0:4};s.exports={_onViewInitialize:function(){this.listenTo(this.model,"change:_embedded",n.bind(this._onPermissionChange,this))},_onViewRender:function(){var e=this.model.get("inherited"),i=this.model.getPermission(),s=i&&i.mask,o=n.isNumber(s)?s:this.model.get("permissionMask");if(e&&o!==t.ADMINISTRATOR){this.$el.find("option:selected").prevAll().attr("disabled","disabled")}},_onPermissionChange:function(e,i){var s=this._isPermissionLimited(i);this._showPermissionConfirm(!1),this.modelChanged._embedded&&s?this.editMode?this._showPermissionConfirm(!0):this._openPermissionConfirm():!this.editMode&&e.setState("confirmedState")},_showPermissionConfirm:function(e){this.permissionConfirmShouldBeShown=e},_isPermissionLimited:function(e){var i=this.model,s=i.getState("confirmedState");return m[i.getPermission(e).mask]>m[i.getPermission(s._embedded).mask]},_openPermissionConfirm:function(e){this.trigger("open:confirm",o.PERMISSION_CONFIRM,e||{})}}});