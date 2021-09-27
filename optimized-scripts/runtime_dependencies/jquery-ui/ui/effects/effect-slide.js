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

!function(e){"function"==typeof define&&define.amd?define(["jquery","../version","../effect"],e):e(jQuery)}(function(e){return e.effects.define("slide","show",function(t,i){var o,n,c=e(this),f={up:["bottom","top"],down:["top","bottom"],left:["right","left"],right:["left","right"]},s=t.mode,l=t.direction||"left",p="up"===l||"down"===l?"top":"left",r="up"===l||"left"===l,u=t.distance||c["top"===p?"outerHeight":"outerWidth"](!0),d={};e.effects.createPlaceholder(c),o=c.cssClip(),n=c.position()[p],d[p]=(r?-1:1)*u+n,d.clip=c.cssClip(),d.clip[f[l][1]]=d.clip[f[l][0]],"show"===s&&(c.cssClip(d.clip),c.css(p,d[p]),d.clip=o,d[p]=n),c.animate(d,{queue:!1,duration:t.duration,easing:t.easing,complete:i})})});