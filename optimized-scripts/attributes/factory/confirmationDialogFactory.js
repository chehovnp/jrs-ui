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

define(["require","exports","module","underscore","bundle!AttributesBundle","../../serverSettingsCommon/enum/confirmDialogTypesEnum","runtime_dependencies/js-sdk/src/common/component/dialog/ConfirmationDialog"],function(t,e,i){var n=t("underscore"),o=t("bundle!AttributesBundle"),r=t("../../serverSettingsCommon/enum/confirmDialogTypesEnum"),m=t("runtime_dependencies/js-sdk/src/common/component/dialog/ConfirmationDialog"),s={},u={title:o["attributes.confirm.dialog.title"]};s[r.DELETE_CONFIRM]=u,s[r.NAME_CONFIRM]={title:o["attributes.confirm.dialog.title"],text:o["attributes.confirm.name.dialog.text"]},s[r.CANCEL_CONFIRM]={title:o["attributes.confirm.dialog.title"],text:o["attributes.confirm.cancel.dialog.text.custom"]},s[r.PERMISSION_CONFIRM]=u,s[r.EDIT_CONFIRM]=n.extend({},{text:o["attributes.confirm.edit.dialog.text"]},u),i.exports=function(t){return s[t]&&new m(s[t])}});