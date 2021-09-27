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

!function(e){"function"==typeof define&&define.amd?define(["jquery","../version","../effect"],e):e(jQuery)}(function(e){return e.effects.define("blind","hide",function(t,i){var o={up:["bottom","top"],vertical:["bottom","top"],down:["top","bottom"],left:["right","left"],horizontal:["right","left"],right:["left","right"]},n=e(this),c=t.direction||"up",f=n.cssClip(),l={clip:e.extend({},f)},r=e.effects.createPlaceholder(n);l.clip[o[c][0]]=l.clip[o[c][1]],"show"===t.mode&&(n.cssClip(l.clip),r&&r.css(e.effects.clipToBox(l)),l.clip=f),r&&r.animate(e.effects.clipToBox(l),t.duration,t.easing),n.animate(l,{queue:!1,duration:t.duration,easing:t.easing,complete:i})})});