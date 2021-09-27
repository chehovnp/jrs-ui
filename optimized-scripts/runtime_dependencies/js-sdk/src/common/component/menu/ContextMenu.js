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

define(["require","exports","module","./Menu","jquery","underscore"],function(t,e,i){var s=t("./Menu"),o=t("jquery"),h=t("underscore");i.exports=s.extend({constructor:function(t,e){s.call(this,t,e),h.bindAll(this,"_tryHide"),this.topPadding=e&&e.topPadding||5,this.leftPadding=e&&e.leftPadding||5,this.extraOffset=t.extraOffset||10,this.hideOnMouseLeave=e&&e.hideOnMouseLeave||!1,h.bindAll(this,"_tryHide","_checkBounds"),this.hideOnMouseLeave&&this.$el.on("mouseleave",this._tryHide)},_tryHide:function(){this.hide(),this._signOffTryHide()},_signOffTryHide:function(){o(document.body).off("click.contextMenu",this._tryHide),o(document.body).off("mousemove",this._checkBounds)},show:function(t,e){if(!t||!h.isNumber(t.top)||!h.isNumber(t.left))throw new Error("Required params (top, left) missing: "+JSON.stringify(t));o(document.body).on("click.contextMenu",this._tryHide),this.hideOnMouseLeave&&o(document.body).on("mousemove",this._checkBounds);var i=t.top,n=t.left,f=this.topPadding,d=this.leftPadding,r=o("body"),u=this._calculateMenuHeightOnShow(),l=this.$el.width(),c=e?e.height():r.height(),a=e?e.width():r.width(),p=e?e.offset():r.offset(),y=c-t.top,O=a-t.left;return y<u&&(i=t.top-u-f,i<p.top&&(i+=p.top-i+f),i=i<0?c/2-u/2:i),O<l&&(n=t.left-l-d,n<p.left&&(n+=p.left-n+d),n=n<0?a/2-l/2:n),h.extend(this,{top:i,left:n}),this.$el.css({top:this.top,left:this.left}),s.prototype.show.apply(this,arguments)},_checkBounds:function(t){var e={top:this.$el[0].offsetTop-this.extraOffset,bottom:this.$el[0].offsetTop+this.$el[0].offsetHeight+this.extraOffset,left:this.$el[0].offsetLeft-this.extraOffset,right:this.$el[0].offsetLeft+this.$el[0].offsetWidth+this.extraOffset};this._isPointerOutOfBounds(e,t)&&this._tryHide()},_isPointerOutOfBounds:function(t,e){return e.clientX<t.left||e.clientX>t.right||e.clientY<t.top||e.clientY>t.bottom},_calculateMenuHeightOnShow:function(){this.$el.css({opacity:0}),s.prototype.show.apply(this,arguments);var t=this.$el.height();return this.hide(),this.$el.css({opacity:""}),t},remove:function(){this._signOffTryHide(),this.hideOnMouseLeave&&this.$el.off("mouseleave",this._tryHide),s.prototype.remove.apply(this,arguments)}})});