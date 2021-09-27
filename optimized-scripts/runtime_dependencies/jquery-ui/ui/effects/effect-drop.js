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

!function(e){"function"==typeof define&&define.amd?define(["jquery","../version","../effect"],e):e(jQuery)}(function(e){return e.effects.define("drop","hide",function(t,i){var n,o=e(this),f=t.mode,c="show"===f,d=t.direction||"left",u="up"===d||"down"===d?"top":"left",r="up"===d||"left"===d?"-=":"+=",a="+="===r?"-=":"+=",s={opacity:0};e.effects.createPlaceholder(o),n=t.distance||o["top"===u?"outerHeight":"outerWidth"](!0)/2,s[u]=r+n,c&&(o.css(s),s[u]=a+n,s.opacity=1),o.animate(s,{queue:!1,duration:t.duration,easing:t.easing,complete:i})})});