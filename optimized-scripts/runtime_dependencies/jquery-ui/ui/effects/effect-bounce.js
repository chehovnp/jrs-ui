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

!function(e){"function"==typeof define&&define.amd?define(["jquery","../version","../effect"],e):e(jQuery)}(function(e){return e.effects.define("bounce",function(t,i){var n,o,f,a=e(this),c=t.mode,u="hide"===c,s="show"===c,d=t.direction||"up",r=t.distance,p=t.times||5,h=2*p+(s||u?1:0),m=t.duration/h,y=t.easing,l="up"===d||"down"===d?"top":"left",g="up"===d||"left"===d,q=0,w=a.queue().length;for(e.effects.createPlaceholder(a),f=a.css(l),r||(r=a["top"===l?"outerHeight":"outerWidth"]()/3),s&&(o={opacity:1},o[l]=f,a.css("opacity",0).css(l,g?2*-r:2*r).animate(o,m,y)),u&&(r/=Math.pow(2,p-1)),o={},o[l]=f;q<p;q++)n={},n[l]=(g?"-=":"+=")+r,a.animate(n,m,y).animate(o,m,y),r=u?2*r:r/2;u&&(n={opacity:0},n[l]=(g?"-=":"+=")+r,a.animate(n,m,y)),a.queue(i),e.effects.unshift(a,w,h+1)})});