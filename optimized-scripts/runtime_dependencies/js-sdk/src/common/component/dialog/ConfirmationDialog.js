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

define(["require","exports","module","underscore","./Dialog","text!./template/confirmDialogTemplate.htm","bundle!CommonBundle"],function(t,e,o){var i=t("underscore"),n=t("./Dialog"),l=t("text!./template/confirmDialogTemplate.htm"),a=t("bundle!CommonBundle");o.exports=n.extend({constructor:function(t){t||(t={}),this.confirmDialogTemplate=t.confirmDialogTemplate||i.template(l),n.prototype.constructor.call(this,{modal:!0,additionalCssClasses:t.additionalCssClasses||"confirmationDialog",title:t.title||a["dialog.confirm.title"],content:this.confirmDialogTemplate({text:t.text}),buttons:[{label:t.yesLabel||a["button.yes"],action:"yes",primary:!0},{label:t.noLabel||a["button.no"],action:"no",primary:!1}]})},initialize:function(){n.prototype.initialize.apply(this,arguments),this.on("button:yes",this.close),this.on("button:no",this.close)},setContent:function(t){n.prototype.setContent.call(this,this.confirmDialogTemplate({text:t}))}})});