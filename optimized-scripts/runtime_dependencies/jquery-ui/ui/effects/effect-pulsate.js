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

!function(e){"function"==typeof define&&define.amd?define(["jquery","../version","../effect"],e):e(jQuery)}(function(e){return e.effects.define("pulsate","show",function(i,n){var t=e(this),f=i.mode,s="show"===f,o="hide"===f,u=s||o,a=2*(i.times||5)+(u?1:0),c=i.duration/a,d=0,r=1,h=t.queue().length;for(!s&&t.is(":visible")||(t.css("opacity",0).show(),d=1);r<a;r++)t.animate({opacity:d},c,i.easing),d=1-d;t.animate({opacity:d},c,i.easing),t.queue(n),e.effects.unshift(t,h,a+1)})});