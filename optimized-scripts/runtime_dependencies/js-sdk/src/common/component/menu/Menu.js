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

define(["require","exports","module","jquery","underscore","../base/OptionContainer","text!./template/menuOptionTemplate.htm","text!./template/menuContainerTemplate.htm"],function(t,e,i){var o=t("jquery"),n=t("underscore"),a=t("../base/OptionContainer"),l=t("text!./template/menuOptionTemplate.htm"),p=t("text!./template/menuContainerTemplate.htm");i.exports=a.extend({constructor:function(t,e){if(!t||!n.isArray(t)||0===t.length)throw new Error("Menu should have options");e||(e={}),a.call(this,{options:t,collection:e.collection,mainTemplate:e.menuContainerTemplate||p,optionTemplate:e.menuOptionTemplate||l,toggle:e.toggle,toggleClass:e.toggleClass}),this.maxSize=e.maxSize,this._onConstructor&&this._onConstructor(t,e)},initialize:function(){a.prototype.initialize.apply(this,arguments),o("body").append(this.$el),this._onInitialize&&this._onInitialize()},show:function(){var t=a.prototype.show.apply(this,arguments);return this.applyMaxSize(),t},applyMaxSize:function(){this.maxSize&&this.options.length>this.maxSize&&this.$el.css({"overflow-y":"auto","max-height":this.maxSize*this.options[0].$el.height()+"px"})}})});