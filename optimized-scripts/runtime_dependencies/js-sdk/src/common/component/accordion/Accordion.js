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

define(["require","exports","module","underscore","backbone","jquery"],function(e,t,i){function n(e,t){var i=this;s.indexOf(this.panels,t)<0||("toggle"!==e&&"open"!==e||i.allowMultiplePanelsOpen||s.each(this.panels,function(e){e!==t&&e.close()}),"toggle"===e?t.collapsed?t.open():t.close():t[e](),this.fit())}function o(e){if(e||(e={}),!e.container||!a(e.container).length)throw new Error("Accordion should have specified container");this.container=e.container,this.panels=e.panels||[],this.allowMultiplePanelsOpen=e.allowMultiplePanelsOpen||!1,a(this.container).css("overflow","hidden"),s.each(this.panels,function(e){e.$resizableEl&&this.listenTo(e,"resizeStart",s.bind(this.calcMaxHeight,this,e))},this)}var s=e("underscore"),l=e("backbone"),a=e("jquery");o.prototype.toggle=function(e){n.call(this,"toggle",e)},o.prototype.expand=function(e){n.call(this,"open",e)},o.prototype.collapse=function(e){n.call(this,"close",e)},o.prototype.fit=function(){var e=[],t=[];s.each(this.panels,function(i){i.collapsed?e.push(i):t.push(i)});var i=0,n=a(this.container).height(),o=0,l=0;s.each(e,function(e){i+=e.$el.outerHeight(!0)}),o=n-i,s.each(t,function(e){e.fixedHeight&&(o-=e.$el.outerHeight(!0),l++)}),s.each(t,function(e){e.fixedHeight?e.setHeight(e.$el.outerHeight(!0)):e.setHeight(Math.floor(o/(t.length-l)))}),this.trigger("fit",this)},o.prototype.calcMaxHeight=function(e){var t=a(this.container).height(),i=this.panels[this.panels.indexOf(e)+1],n=0;s.each(this.panels,function(o){s.isEqual(e,o)||(n=o.$el.find(">.header").outerHeight(!0)||n,t-=n,s.isEqual(i,o)?t-=o.collapsed?0:parseInt(o.$el.find(">.subcontainer").css("minHeight"),10):t-=o.$el.outerHeight(!0)||0)},this),e.$resizableEl.resizable("option","maxHeight",t)},s.extend(o.prototype,l.Events),i.exports=o});