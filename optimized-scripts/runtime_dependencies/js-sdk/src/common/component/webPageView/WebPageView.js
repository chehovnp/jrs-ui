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

define(["require","exports","module","backbone","underscore","jquery","../../util/browserDetection"],function(e,i,t){function r(){-1===(this.url||"").toLowerCase().indexOf("javascript:")&&(this.$iframe.attr("src",this.url),this._iframeSrcSet=!0,this.$el.addClass("loading"),this._loadingTimeoutId&&clearTimeout(this._loadingTimeoutId),this._loadingTimeoutId=setTimeout(o.bind(this.$el.removeClass,this.$el,"loading"),this.timeout))}var s=e("backbone"),o=e("underscore"),n=e("jquery"),l=e("../../util/browserDetection"),a=s.View.extend({tagName:"div",className:"webPageView",constructor:function(e){if(e||(e={}),e.renderTo&&(!n(e.renderTo)[0]||!n(e.renderTo)[0].tagName))throw new Error("WebPageView cannot be rendered to specified container");this.renderTo=e.renderTo,this.url=e.url,this.scrolling=o.isUndefined(e.scrolling)?a.SCROLLING:e.scrolling,this.timeout=o.isUndefined(e.timeout)?a.TIMEOUT:e.timeout,s.View.prototype.constructor.apply(this,arguments)},initialize:function(){this.$iframe=n("<iframe></iframe>").addClass("externalUrlIframe"),this.$el.html(this.$iframe),this.$el.addClass("invisible"),n("body").append(this.$el),this.listenToReadyStateCompete(),this.setScrolling(this.scrolling,{silent:!0}),this.url&&o.isString(this.url)&&(r.call(this),this.renderTo&&this.render(this.renderTo))},listenToReadyStateCompete:function(){var e=this.$iframe[0].contentDocument||this.$iframe[0].contentWindow,i=this;this.$iframe.on("load",function(){clearInterval(i._loadingTimerId),n(this).blur(),n(this).parent().focus(),i.trigger("load")}),e.document&&(e=e.document),this._loadingTimerId=setInterval(function(){"complete"==e.readyState&&(clearInterval(i._loadingTimerId),i.$iframe.blur(),i.$iframe.parent().focus(),i.$el.removeClass("loading"),i.trigger("load"))},300)},render:function(e){if(!this.url||!o.isString(this.url))throw new Error("WebPageView URL is not specified");if(!e||!n(e)[0]||!n(e)[0].tagName)throw new Error("WebPageView cannot be rendered to specified container");this._iframeSrcSet||r.call(this);var i=this.$el.detach();return i.removeClass("invisible"),n(e).html(i),this._rendered=!0,this.trigger("render",this,n(e)),this},setUrl:function(e,i){this.url=e,this.trigger("change:url",this,this.url),i||this.refresh()},setTimeout:function(e){this.timeout=e,this.trigger("change:timeout",this,this.timeout)},setScrolling:function(e,i){this.scrolling=e,this.$iframe.attr("scrolling",this.scrolling?"yes":"no"),l.isIPad()&&(this.scrolling?this.$el.addClass("touchScroll"):this.$el.removeClass("touchScroll")),i&&i.silent||this.trigger("change:scrolling",this,this.scrolling)},refresh:function(){if(!this._rendered)throw new Error("WebPageView must be rendered to a specific container first");if(!this.url||!o.isString(this.url))throw new Error("WebPageView URL is not specified");r.call(this),this.trigger("refresh",this,this.url)},remove:function(){this._loadingTimeoutId&&clearTimeout(this._loadingTimeoutId),this._loadingTimerId&&clearTimeout(this._loadingTimerId),this.$iframe.off("load"),this.trigger("remove",this),s.View.prototype.remove.apply(this,arguments)}},{TIMEOUT:2e4,SCROLLING:!0,open:function(e,i){var t,r;try{t=new a(o.isObject(e)?e:{url:e})}catch(e){if(r=e,!i||!o.isFunction(i))throw e}return i&&o.isFunction(i)&&i(r,t),t}});t.exports=a});