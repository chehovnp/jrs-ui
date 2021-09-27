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

define(["require","exports","module","underscore","backbone","text!./template/panelTemplate.htm"],function(t,e,i){var s=t("underscore"),n=t("backbone"),o=t("text!./template/panelTemplate.htm");i.exports=n.View.extend({defaultTemplate:o,el:function(){var t=this.getTemplateArguments();return this.template(t)},getTemplateArguments:function(){return{title:this.title,additionalCssClasses:this.additionalCssClasses}},constructor:function(t){t||(t={}),this.template=s.template(t.template||this.defaultTemplate),this.title=t.title||"",this.dataNameAttribute=t.dataNameAttribute||"",this.additionalCssClasses=t.additionalCssClasses||"",this.content=t.content||"",this.collapsed=!t.collapsed,this.openClass=t.openClass||"open",this.closedClass=t.closedClass||"closed",this.loadingClass=t.loadingClass||"loading",this.fixedHeight=t.fixedHeight||!1,this.contentContainer=t.contentContainer||".subcontainer",this.overflow=t.overflow||"auto",this.traits=t.traits||[],s.each(this.traits,s.bind(function(t){t.extension&&s.extend(this,t.extension)},this)),this.invokeTraits("onConstructor",t),n.View.apply(this,arguments)},invokeTraits:function(t){var e=Array.prototype.slice.call(arguments,1),i=this;s.each(this.traits,function(s){s[t]&&s[t].apply(i,e)})},initialize:function(t){this.invokeTraits("beforeInitialize",t),this.content&&this.setContent(this.content),this.toggleCollapsedState(),this.dataNameAttribute&&this.$el.attr("data-name",this.dataNameAttribute),this.invokeTraits("afterInitialize",t)},setElement:function(t){this.invokeTraits("beforeSetElement",t);var e=n.View.prototype.setElement.apply(this,arguments);return this.$contentContainer=this.$(this.contentContainer),this.$contentContainer[this.collapsed?"hide":"show"](),this.invokeTraits("afterSetElement",t),e},open:function(t){return this.invokeTraits("beforeOpen",t),this.$contentContainer.show(),this.$el.removeClass(this.closedClass).addClass(this.openClass),this.collapsed=!1,t&&t.renderContent&&this.renderContent(),this.invokeTraits("afterOpen",t),t&&t.silent||this.trigger("open",this),this},close:function(t){return this.invokeTraits("beforeClose",t),this.$contentContainer.hide(),this.$el.removeClass(this.openClass).addClass(this.closedClass),this.collapsed=!0,this.invokeTraits("afterClose",t),t&&t.silent||this.trigger("close",this),this},setContent:function(t,e){this.content=t;var i=this.renderContent();this.$contentContainer[!0===e?"append":"html"](i)},renderContent:function(){return this.content instanceof n.View?this.content.render().$el:this.content},setHeight:function(t){var e=this.$("> .header").outerHeight();this.$contentContainer.css({height:s.isNumber(t)?t-e+"px":"auto",overflow:this.overflow})},toggleCollapsedState:function(){return this.collapsed?this.open():this.close(),this},remove:function(){this.invokeTraits("onRemove"),this.content&&this.content.remove&&this.content.remove(),n.View.prototype.remove.call(this)}})});