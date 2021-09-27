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

define(["require","exports","module","underscore","./Dialog","text!./template/loadingDialogTemplate.htm","bundle!CommonBundle"],function(t,e,i){var s=t("underscore"),n=t("./Dialog"),o=t("text!./template/loadingDialogTemplate.htm"),l=t("bundle!CommonBundle");i.exports=n.extend({events:s.extend({},n.prototype.events,{"click button":"cancel"}),el:function(){return this.template({title:this.title,additionalCssClasses:this.additionalCssClasses,i18n:l})},constructor:function(t){this.options=t||{},n.prototype.constructor.call(this,{modal:!0,additionalCssClasses:this.options.additionalCssClasses,template:o,title:this.options.title||l["dialog.overlay.title"]}),this.options.showProgress&&(this.progress=s.bind(function(t){return 0===arguments.length?+this.$(".percents").text():this.$(".percents").text(t+"%")},this),this.on("open",s.bind(this.progress,this,0)))},initialize:function(){n.prototype.initialize.apply(this,arguments),this.options.cancellable?this.on("button:cancel",this.close):this.$("button").hide()},cancel:function(){this.trigger("button:cancel",this)}})});