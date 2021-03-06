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

define(["require","exports","module","./utils.common","prototype"],function(t,o,i){var n=t("./utils.common"),s=n.doNothing,e=n.isSupportsTouch,h=n.isIPad,l=t("prototype"),c=l.$,r=function(t){this._id=t.id,this._contentId=t.contentId?t.contentId:void 0,this._scroll=t.scroll,this._loadFactor=t.loadFactor?t.loadFactor:.95,this._lastContentHeight=0,this._loading=!1,t.control?void 0!==t.control.length&&t.control.length>1?this._control=c(t.control[0]):this._control=c(t.control):this._control=this._scroll?this._scroll.parent:c(this._id),this._scroll?this._content=this._scroll.element:t.content?void 0!==t.content.length&&t.content.length>1?this._content=c(t.content[0]):this._content=c(t.content):this._content=this._contentId?c(this._contentId):this._control.childElements()[0],this._eventType=e()?"touchmove":"scroll",this._control.observe(this._eventType,this._onScrollHandler.bind(this))};r.addMethod("destroy",function(){this._control&&this._control.stopObserving(this._eventType,this._handler)}),r.addMethod("_onScrollHandler",function(t){var o=this._scroll?-1*this._scroll.y:this._control.scrollTop,i=this._content.getHeight(),n=this._control.getHeight();i!=this._lastContentHeight&&(this._loading=!1);var s=!this._loading&&0!=i;(s=this._scroll?s&&this._scroll.isBottom():s&&(n+o)/i>this._loadFactor)&&(this._loading=!0,this._lastContentHeight=i,h()&&this.wait(),this.onLoad())}),r.addMethod("onLoad",s),r.addMethod("reset",function(){h()?this._scroll.reset():this._control.scrollTop=0,this._loading=!1}),r.addMethod("wait",function(){if(!this._waitIndicator){this._waitIndicator=new Element("div",{class:"dimmer resultsOverlay"});var t=this._control.getDimensions(),o=this._control.positionedOffset();this._waitIndicator.setStyle({zIndex:"4000",top:o.top+"px",left:o.left+"px",height:t.height+"px",width:t.width+"px"}),this._control.insert({after:this._waitIndicator})}this._waitIndicator.show()}),r.addMethod("stopWaiting",function(){this._waitIndicator&&this._waitIndicator.hide()}),window.InfiniteScroll=r,i.exports=r});