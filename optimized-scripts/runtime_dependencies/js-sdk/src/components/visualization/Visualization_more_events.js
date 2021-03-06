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

define(["require","exports","module","jquery","backbone","underscore","text!./template/visualizationTemplate.htm"],function(t,e,i){function s(t,e,i){var s=t[e],a=s,r=function(){return a},n=function(t){return s=a,a=i.call(this,t,s,e)};delete t[e]&&(Object.defineProperty?Object.defineProperty(t,e,{get:r,set:n}):Object.prototype.__defineGetter__&&Object.prototype.__defineSetter__&&(Object.prototype.__defineGetter__.call(t,e,r),Object.prototype.__defineSetter__.call(t,e,n)))}var a=t("jquery"),r=t("backbone"),n=t("underscore"),l=t("text!./template/visualizationTemplate.htm");i.exports=r.View.extend({template:n.template(l),events:{"click .jr-mVisualization-switcher":"_switcherActivated"},initialize:function(t){t&&t.props?this.props=t.props:this.props={title:!1},s(this.props,"title",this._onTitleChange.bind(this)),this.listenTo(this,"canvas:switch",this.switchCanvasTo.bind(this)),this.listenTo(this,"canvas:ready",t.evts["canvas:ready"]),this.render()},render:function(){return this.$el=a(this.template({props:this.props})),this.$canvas=this.$(".jr-mVisualization-canvas"),this.trigger("canvas:ready",this.$canvas),this.$switcher=this.$(".jr-mVisualization-switcher"),this.$title=this.$(".jr-mVisualization-title"),this},switchCanvasTo:function(t){this.$canvas.children().detach(),t&&this.$canvas.append(t)},remove:function(){this.switchCanvasTo(null),r.View.prototype.remove.call(this)},_onTitleChange:function(t){var e=this.$switcher.find(".jr-mIcon");t?(this.$title.find(".jr-mVisualization-title-text").text(t),this.$title.removeClass("jr-isHidden"),this.$switcher.removeClass("jr-isMinimized"),e.hasClass("jr-meatball")&&e.removeClass("jr-meatball'").addClass("jr-chartColumn'")):(this.$title.addClass("jr-isHidden"),this.$switcher.addClass("jr-isMinimized"),e.hasClass("jr-chartColumn")&&e.removeClass("jr-chartColumn").addClass("jr-meatball"))},_switcherActivated:function(){this.trigger("switcher:activated")}})});