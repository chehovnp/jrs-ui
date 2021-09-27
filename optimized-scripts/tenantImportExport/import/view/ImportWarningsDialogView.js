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

define(["require","exports","module","underscore","bundle!CommonBundle","bundle!ImportExportBundle","../../view/BaseWarningDialogView"],function(e,n,o){var t=e("underscore"),i=e("bundle!CommonBundle"),l=e("bundle!ImportExportBundle"),r=e("../../view/BaseWarningDialogView");o.exports=r.extend({constructor:function(e){e||(e={}),t.extend(e,{resizable:!0,title:l["import.dialog.warnings.title"],additionalCssClasses:"warnings-dialog",buttons:[{label:i["button.close"],action:"close",primary:!1}]}),r.prototype.constructor.call(this,e),this.on("button:close",t.bind(this.close,this))}})});