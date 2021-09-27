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

define(["require","exports","module","backbone","underscore","jquery","bundle!CommonBundle","./enum/colors","text!./template/simpleColorPickerTemplate.htm"],function(e,t,n){var o=e("backbone"),l=e("underscore"),r=e("jquery"),s=e("bundle!CommonBundle"),i=e("./enum/colors"),a=e("text!./template/simpleColorPickerTemplate.htm");n.exports=o.View.extend({events:{"click .color":"_selectColor"},constructor:function(e){e||(e={}),this.label=e&&e.label,this.showTransparentInput=e&&e.showTransparentInput,this.showNoneInput=e&&e.showNoneInput,o.View.apply(this,arguments)},el:function(){return l.template(a)({colors:i,i18n:s,label:this.label,showTransparentInput:this.showTransparentInput,showNoneInput:this.showNoneInput})},highlightColor:function(e){var t,n;null===e?t=this.$el.find(".color.none"):"rgba(0, 0, 0, 0)"===e||"transparent"===e?t=this.$el.find(".color.transparent"):(n=l.indexOf(i,e))>=0&&(t=this.$el.find("div[data-index='"+n+"']")),this.$el.find(".color.transparent.selected, .color.none.selected, .colorWrapper.selected").removeClass("selected"),t&&t.addClass("selected")},_selectColor:function(e){var t,n=r(e.target);t=n.is(".none")?null:n.css("background-color"),this.highlightColor(t),this.trigger("color:selected",t)},show:function(){this.$el.show()},hide:function(){this.$el.hide()}})});