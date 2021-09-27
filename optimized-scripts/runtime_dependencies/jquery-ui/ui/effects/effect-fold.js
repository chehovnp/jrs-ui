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

!function(e){"function"==typeof define&&define.amd?define(["jquery","../version","../effect"],e):e(jQuery)}(function(e){return e.effects.define("fold","hide",function(i,t){var n=e(this),c=i.mode,f="show"===c,o="hide"===c,s=i.size||15,a=/([0-9]+)%/.exec(s),l=!!i.horizFirst,u=l?["right","bottom"]:["bottom","right"],p=i.duration/2,r=e.effects.createPlaceholder(n),d=n.cssClip(),h={clip:e.extend({},d)},m={clip:e.extend({},d)},g=[d[u[0]],d[u[1]]],x=n.queue().length;a&&(s=parseInt(a[1],10)/100*g[o?0:1]),h.clip[u[0]]=s,m.clip[u[0]]=s,m.clip[u[1]]=0,f&&(n.cssClip(m.clip),r&&r.css(e.effects.clipToBox(m)),m.clip=d),n.queue(function(t){r&&r.animate(e.effects.clipToBox(h),p,i.easing).animate(e.effects.clipToBox(m),p,i.easing),t()}).animate(h,p,i.easing).animate(m,p,i.easing).queue(t),e.effects.unshift(n,x,4)})});