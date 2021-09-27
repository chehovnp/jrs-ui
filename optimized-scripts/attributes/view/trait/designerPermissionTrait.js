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

define(["require","exports","module","../../../serverSettingsCommon/enum/confirmDialogTypesEnum"],function(i,e,n){var o=i("../../../serverSettingsCommon/enum/confirmDialogTypesEnum");n.exports={_initPermissionConfirmEvents:function(){this.listenTo(this.confirmationDialogs[o.PERMISSION_CONFIRM],"button:yes",this._onPermissionConfirm),this.listenTo(this.confirmationDialogs[o.PERMISSION_CONFIRM],"button:no",this._onPermissionCancel)},_onPermissionConfirm:function(){var i;this.currentChildView?this.currentChildView.triggerModelValidation({dfd:this.validateDfD}):(i=this.model.get("changedChildView").model,i.setState("confirmedState"),i.hasChanged("inherited")&&this._resetFilters&&this._resetFilters())},_onPermissionCancel:function(){this._revertChangedModelProperty("_embedded")},_showPermissionConfirm:function(i){i._showPermissionConfirm(!1)}}});