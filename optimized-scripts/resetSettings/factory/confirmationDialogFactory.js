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

define(["require","exports","module","bundle!EditSettingsBundle","../../serverSettingsCommon/enum/confirmDialogTypesEnum","runtime_dependencies/js-sdk/src/common/component/dialog/ConfirmationDialog"],function(e,n,t){var i=e("bundle!EditSettingsBundle"),o=e("../../serverSettingsCommon/enum/confirmDialogTypesEnum"),m=e("runtime_dependencies/js-sdk/src/common/component/dialog/ConfirmationDialog"),d={},r={title:i["editSettings.confirm.dialog.title"]};d[o.DELETE_CONFIRM]=r,d[o.CANCEL_CONFIRM]={title:i["editSettings.confirm.dialog.title"],text:i["editSettings.confirm.cancel.dialog.text.custom"]},t.exports=function(e){return d[e]&&new m(d[e])}});