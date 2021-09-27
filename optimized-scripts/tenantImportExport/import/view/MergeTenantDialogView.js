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

define(["require","exports","module","underscore","bundle!CommonBundle","bundle!ImportExportBundle","../../view/BaseWarningDialogView","text!../template/mergeTenantDialogTemplate.htm"],function(e,t,n){var o=e("underscore"),i=e("bundle!CommonBundle"),l=e("bundle!ImportExportBundle"),a=e("../../view/BaseWarningDialogView"),r=e("text!../template/mergeTenantDialogTemplate.htm");n.exports=a.extend({constructor:function(e){e||(e={}),o.extend(e,{resizable:!0,additionalCssClasses:"merge-tenant-dialog",title:l["import.dialog.merge.tenant.title"],buttons:[{label:l["import.button.continue"],action:"import",primary:!0},{label:i["button.cancel"],action:"cancel",primary:!1}],template:r}),a.prototype.constructor.call(this,e),this.on("button:import",o.bind(this.close,this)),this.on("button:cancel",o.bind(this.close,this))},open:function(e){o.extend(e,{i18n:l}),a.prototype.open.call(this,e)}})});