define(function(require, exports, module) {
var __disableStrictMode__ = "use strict";

var confirmDialogTypesEnum = require('../../../serverSettingsCommon/enum/confirmDialogTypesEnum');

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
module.exports = {
  _initPermissionConfirmEvents: function _initPermissionConfirmEvents() {
    this.listenTo(this.confirmationDialogs[confirmDialogTypesEnum.PERMISSION_CONFIRM], 'button:yes', this._onPermissionConfirm);
    this.listenTo(this.confirmationDialogs[confirmDialogTypesEnum.PERMISSION_CONFIRM], 'button:no', this._onPermissionCancel);
  },
  _onPermissionConfirm: function _onPermissionConfirm() {
    var changedChildViewModel;

    if (this.currentChildView) {
      this.currentChildView.triggerModelValidation({
        dfd: this.validateDfD
      });
    } else {
      changedChildViewModel = this.model.get('changedChildView').model;
      changedChildViewModel.setState('confirmedState');
      changedChildViewModel.hasChanged('inherited') && this._resetFilters && this._resetFilters();
    }
  },
  _onPermissionCancel: function _onPermissionCancel() {
    this._revertChangedModelProperty('_embedded');
  },
  _showPermissionConfirm: function _showPermissionConfirm(childView) {
    childView._showPermissionConfirm(false);
  }
};

});