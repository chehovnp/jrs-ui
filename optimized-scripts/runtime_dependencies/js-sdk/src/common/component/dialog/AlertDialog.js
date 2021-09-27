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

define(["require","exports","module","underscore","./Dialog","../../util/xssUtil","text!./template/alertDialogTemplate.htm","bundle!CommonBundle"],function(t,e,s){var o=t("underscore"),l=t("./Dialog"),i=t("../../util/xssUtil"),n=t("text!./template/alertDialogTemplate.htm"),a=t("bundle!CommonBundle");s.exports=l.extend({contentTemplate:o.template(n),constructor:function(t){t||(t={}),l.prototype.constructor.call(this,{modal:!1!==t.modal,message:t.message,additionalCssClasses:"alertDialog "+(t.additionalCssClasses||""),title:t.title||a["dialog.exception.title"],buttons:[{label:a["button.close"],action:"close",primary:!0}]},t)},initialize:function(t){l.prototype.initialize.apply(this,arguments),this.on("button:close",this.close),this.setMessage(t.message)},setMessage:function(t){t=i.softHtmlEscape(t,{whiteList:["br"]}),this.content=this.contentTemplate({message:t});var e=this.renderContent();this.$contentContainer.html(e)}})});