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

define(["require","exports","module","underscore","bundle!CommonBundle","bundle!ImportExportBundle","../../view/BaseWarningDialogView"],function(e,n,t){var o=e("underscore"),i=e("bundle!CommonBundle"),r=e("bundle!ImportExportBundle"),l=e("../../view/BaseWarningDialogView");t.exports=l.extend({constructor:function(e){e||(e={}),o.extend(e,{resizable:!0,buttons:[{label:r["import.button.include"],action:"include",primary:!0},{label:r["import.button.skip"],action:"skip",primary:!1},{label:i["button.cancel"],action:"cancel",primary:!1}]}),l.prototype.constructor.call(this,e),this.on("button:include",o.bind(this.close,this)),this.on("button:skip",o.bind(this.close,this)),this.on("button:cancel",o.bind(this.close,this))},open:function(e){o.extend(e,{message:r["import.dialog.broken.dependencies.intro"]}),l.prototype.open.call(this,e)}})});