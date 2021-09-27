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

!function(t){"function"==typeof define&&define.amd?define(["jquery","../version","../effect"],t):t(jQuery)}(function(t){return t.effects.define("size",function(e,o){var i,f,n,s=t(this),r=["fontSize"],h=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],c=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],a=e.mode,d="effect"!==a,g=e.scale||"both",m=e.origin||["middle","center"],u=s.css("position"),y=s.position(),p=t.effects.scaledDimensions(s),l=e.from||p,x=e.to||t.effects.scaledDimensions(s,0);t.effects.createPlaceholder(s),"show"===a&&(n=l,l=x,x=n),f={from:{y:l.height/p.height,x:l.width/p.width},to:{y:x.height/p.height,x:x.width/p.width}},"box"!==g&&"both"!==g||(f.from.y!==f.to.y&&(l=t.effects.setTransition(s,h,f.from.y,l),x=t.effects.setTransition(s,h,f.to.y,x)),f.from.x!==f.to.x&&(l=t.effects.setTransition(s,c,f.from.x,l),x=t.effects.setTransition(s,c,f.to.x,x))),"content"!==g&&"both"!==g||f.from.y!==f.to.y&&(l=t.effects.setTransition(s,r,f.from.y,l),x=t.effects.setTransition(s,r,f.to.y,x)),m&&(i=t.effects.getBaseline(m,p),l.top=(p.outerHeight-l.outerHeight)*i.y+y.top,l.left=(p.outerWidth-l.outerWidth)*i.x+y.left,x.top=(p.outerHeight-x.outerHeight)*i.y+y.top,x.left=(p.outerWidth-x.outerWidth)*i.x+y.left),s.css(l),"content"!==g&&"both"!==g||(h=h.concat(["marginTop","marginBottom"]).concat(r),c=c.concat(["marginLeft","marginRight"]),s.find("*[width]").each(function(){var o=t(this),i=t.effects.scaledDimensions(o),n={height:i.height*f.from.y,width:i.width*f.from.x,outerHeight:i.outerHeight*f.from.y,outerWidth:i.outerWidth*f.from.x},s={height:i.height*f.to.y,width:i.width*f.to.x,outerHeight:i.height*f.to.y,outerWidth:i.width*f.to.x};f.from.y!==f.to.y&&(n=t.effects.setTransition(o,h,f.from.y,n),s=t.effects.setTransition(o,h,f.to.y,s)),f.from.x!==f.to.x&&(n=t.effects.setTransition(o,c,f.from.x,n),s=t.effects.setTransition(o,c,f.to.x,s)),d&&t.effects.saveStyle(o),o.css(n),o.animate(s,e.duration,e.easing,function(){d&&t.effects.restoreStyle(o)})})),s.animate(x,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){var e=s.offset();0===x.opacity&&s.css("opacity",l.opacity),d||(s.css("position","static"===u?"relative":u).offset(e),t.effects.saveStyle(s)),o()}})})});