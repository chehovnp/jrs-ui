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

!function(t){"function"==typeof define&&define.amd?define(["jquery","../version","../effect"],t):t(jQuery)}(function(t){return t.effects.define("clip","hide",function(e,i){var o,n={},c=t(this),f=e.direction||"vertical",r="both"===f,l=r||"horizontal"===f,a=r||"vertical"===f;o=c.cssClip(),n.clip={top:a?(o.bottom-o.top)/2:o.top,right:l?(o.right-o.left)/2:o.right,bottom:a?(o.bottom-o.top)/2:o.bottom,left:l?(o.right-o.left)/2:o.left},t.effects.createPlaceholder(c),"show"===e.mode&&(c.cssClip(n.clip),n.clip=o),c.animate(n,{queue:!1,duration:e.duration,easing:e.easing,complete:i})})});