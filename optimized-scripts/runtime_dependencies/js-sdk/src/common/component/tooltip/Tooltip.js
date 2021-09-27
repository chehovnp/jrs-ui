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

define(["require","exports","module","jquery","underscore","backbone","text!./template/tooltipTemplate.htm"],function(t,e,s){var o=t("jquery"),i=t("underscore"),h=t("backbone"),n=t("text!./template/tooltipTemplate.htm");s.exports=h.View.extend({template:i.template(n),delay:500,offset:{x:10,y:10},attribute:"data-tooltip",cssClasses:"panel info tooltip",contentSelector:".body",triggerEvents:!1,el:function(){return this.template({cssClasses:this.cssClasses})},constructor:function(t){if(t||(t={}),!t.attachTo||0===o(t.attachTo).length)throw new Error("Tooltip should be attached to an element");if(!t.contentTemplate)throw new Error("Tooltip should have contentTemplate");this._shown=!1,this.$attachTo=o(t.attachTo),this.$attachTo[0].tooltip=this,t.delay&&(this.delay=t.delay),t.offset&&(this.offset=t.offset),t.attribute&&(this.attribute=t.attribute),t.cssClasses&&(this.cssClasses=t.cssClasses),this.contentTemplate=t.contentTemplate,this.i18n=t.i18n||{},!i.isUndefined(t.triggerEvents)&&(this.triggerEvents=t.triggerEvents),this.selector="["+this.attribute+"]",i.bindAll(this,"show","_onMouseMove","_onMouseLeave"),this.$attachTo.on("mousemove touchmove",this.selector,this._onMouseMove),this.$attachTo.on("mouseleave touchend",this.selector,this._onMouseLeave),h.View.prototype.constructor.apply(this,arguments)},_render:function(t,e,s){if(this._event){t=t instanceof h.Model?t.toJSON():t;var o=i.template(this.contentTemplate)({model:t,i18n:this.i18n,options:e||{}});this.$el.find(".body").empty().append(o),this._showTooltip()}s.resolve()},show:function(t,e){var s=new o.Deferred;return this._timer=setTimeout(i.bind(this._render,this,t,e,s),this.delay),s},_showTooltip:function(){o("body").append(this.$el),this._updatePosition(),this._shown=!0,this.triggerEvents&&this.trigger("show",this)},hide:function(){this.contentTemplate&&this._timer&&clearTimeout(this._timer),this.$el.detach(),this._shown=!1,this.triggerEvents&&this.trigger("hide",this)},_updatePosition:function(){var t=this.$el.innerHeight(),e=this.$el.innerWidth(),s=o(window).height(),i=o(window).width(),h=this.offset.y,n=this.offset.x;t+this._event.pageY+this.offset.y+3>=s&&(h=-this.offset.y-t),e+this._event.pageX+this.offset.x+3>=i&&(n=-this.offset.x-e),this.$el.css({top:this._event.pageY+h,left:this._event.pageX+n})},_onMouseMove:function(t){this._event=t},_onMouseLeave:function(){this._shown&&this.hide(),this._timer&&clearTimeout(this._timer),this._event=null},remove:function(){this._shown&&this.hide(),this._timer&&clearTimeout(this._timer),this.$attachTo.off("mousemove touchmove",this.selector,this._onMouseMove),this.$attachTo.off("mouseleave touchend",this.selector,this._onMouseLeave),h.View.prototype.remove.apply(this,arguments)}},{attachTo:function(t,e){var s=this;return e||(e={}),e.attachTo=t||"body",new s(e)},detachFrom:function(t){t=o(t)[0],t.tooltip&&t.tooltip.remove()}})});