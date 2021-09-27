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

define(["require","exports","module","underscore","jquery","backbone","./TreePlugin","text!../template/searchPluginTemplate.htm"],function(e,t,r){var n=e("underscore"),i=e("jquery"),a=e("backbone"),s=e("./TreePlugin"),c=e("text!../template/searchPluginTemplate.htm"),h=a.View.extend({template:n.template(c),el:function(){return this.template()},events:{"click .button.search":"clickHandler","click .button.searchClear":"clear","keydown input[type=text]":"keyHandler"},initialize:function(e){this.owner=e.owner,this.$searchInput=this.$el.find("input[type=text]")},search:function(e){var t=this.$searchInput.val();this.owner.refresh(n.extend({searchString:t},e)),t?this.$el.find(".button.searchClear").addClass("up"):this.$el.find(".button.searchClear").removeClass("up")},clearInput:function(){this.$searchInput.val("")},clear:function(){this.clearInput(),this.clickHandler(),this.trigger("clear",this)},clearSilently:function(){this.clearInput(),delete this.owner.context.searchString,this.owner.refresh(n.extend({searchString:""},this.owner.context)),this.$el.find(".button.searchClear").removeClass("up")},clickHandler:function(){delete this.owner.context.searchString,this.search(this.owner.context),this.trigger("search",this.owner.context)},keyHandler:function(e){13===e.which&&this.clickHandler()},setSearchString:function(e){this.$searchInput.val(e)}});r.exports=s.extend({initialize:function(e){this.searchParameter=e&&e.searchParameter||"q",this.additionalParams=e&&e.additionalParams},dataLayerObtained:function(e){var t=this;if(!e.__searchPluginExtended){var r=e.getDataUri,a=this.searchParameter;e.getDataUri=function(e){var s=r.apply(this,arguments),c={};return e.searchString&&(c[a]=e.searchString),t.additionalParams&&n.extend(c,t.additionalParams,n.pick(e,n.keys(t.additionalParams))),s+=(-1===s.indexOf("?")?"?":"&")+i.param(c,!0)},e.__searchPluginExtended=!0}}},{treeInitialized:function(e){e=e||{};var t=this;this.searchForm=new h({owner:this}),e.dfdRenderTo?e.dfdRenderTo.done(function(e){e.prepend(t.searchForm.render().el)}):this.$el.prepend(this.searchForm.render().el)},treeRemoved:function(){this.searchForm.remove()}})});