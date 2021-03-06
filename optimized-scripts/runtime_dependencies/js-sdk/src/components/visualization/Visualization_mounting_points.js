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

define(["require","exports","module","jquery","backbone","underscore","text!./template/visualizationTemplate.htm"],function(t,e,i){function s(t,e,i){var s=t[e],n=s,r=function(){return n},a=function(t){return s=n,n=i.call(this,t,s,e)};delete t[e]&&(Object.defineProperty?Object.defineProperty(t,e,{get:r,set:a}):Object.prototype.__defineGetter__&&Object.prototype.__defineSetter__&&(Object.prototype.__defineGetter__.call(t,e,r),Object.prototype.__defineSetter__.call(t,e,a)))}var n=t("jquery"),r=t("backbone"),a=t("underscore"),o=t("text!./template/visualizationTemplate.htm");i.exports=r.View.extend({template:a.template(o),initialize:function(t){t&&t.props?this.props=t.props:this.props={title:!1},s(this.props,"title",this._onTitleChange.bind(this)),this.render()},render:function(){return this.$el=n(this.template({props:this.props})),this.$canvas=this.$(".jr-mVisualization-canvas"),this.$switcher=this.$(".jr-mVisualization-switcher"),this.$title=this.$(".jr-mVisualization-title"),this},switchCanvasTo:function(t){this.$canvas.children().detach(),t&&this.$canvas.append(t)},_onTitleChange:function(t){t?(this.$title.find(".jr-mVisualization-title-text").text(t),this.$title.removeClass("jr-isHidden"),this.$switcher.removeClass("jr-isMinimized")):(this.$title.addClass("jr-isHidden"),this.$switcher.addClass("jr-isMinimized"))},remove:function(){this.switchCanvasTo(null),r.View.prototype.remove.call(this)}})});