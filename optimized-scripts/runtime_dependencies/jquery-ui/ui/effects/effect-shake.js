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

!function(e){"function"==typeof define&&define.amd?define(["jquery","../version","../effect"],e):e(jQuery)}(function(e){return e.effects.define("shake",function(n,t){var i=1,a=e(this),f=n.direction||"left",u=n.distance||20,s=n.times||3,o=2*s+1,c=Math.round(n.duration/o),r="up"===f||"down"===f?"top":"left",d="up"===f||"left"===f,m={},g={},h={},l=a.queue().length;for(e.effects.createPlaceholder(a),m[r]=(d?"-=":"+=")+u,g[r]=(d?"+=":"-=")+2*u,h[r]=(d?"-=":"+=")+2*u,a.animate(m,c,n.easing);i<s;i++)a.animate(g,c,n.easing).animate(h,c,n.easing);a.animate(g,c,n.easing).animate(m,c/2,n.easing).queue(t),e.effects.unshift(a,l,o+1)})});