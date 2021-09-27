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

!function(t){"function"==typeof define&&define.amd?define(["jquery","./version"],t):t(jQuery)}(function(t){"1.7"===t.fn.jquery.substring(0,3)&&(t.each(["Width","Height"],function(n,i){function e(n,i,e,h){return t.each(r,function(){i-=parseFloat(t.css(n,"padding"+this))||0,e&&(i-=parseFloat(t.css(n,"border"+this+"Width"))||0),h&&(i-=parseFloat(t.css(n,"margin"+this))||0)}),i}var r="Width"===i?["Left","Right"]:["Top","Bottom"],h=i.toLowerCase(),s={innerWidth:t.fn.innerWidth,innerHeight:t.fn.innerHeight,outerWidth:t.fn.outerWidth,outerHeight:t.fn.outerHeight};t.fn["inner"+i]=function(n){return void 0===n?s["inner"+i].call(this):this.each(function(){t(this).css(h,e(this,n)+"px")})},t.fn["outer"+i]=function(n,r){return"number"!=typeof n?s["outer"+i].call(this,n):this.each(function(){t(this).css(h,e(this,n,!0,r)+"px")})}}),t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))})});