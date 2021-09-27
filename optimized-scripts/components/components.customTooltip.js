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

define(["require","exports","module","../util/utils.common","jquery"],function(t,e,o){function l(t,e){u(t);var t=t||window.event,o=document.getElementById("customTooltipTemplate").cloneNode(!0);return o.style.display=e?"block":"none",o.setAttribute("id",f.TOOLTIP_ID),T(o).html(e),o.onmouseover=function(t){u(t)},o}function i(t){document.body.appendChild(t),s(t,t.style.left,t.style.top,t.clientWidth,t.clientWidth)}function n(t,e,o,n,r,u){var c=l(t,e);return o&&(c.style.maxWidth=o),r&&(c.style.backgroundColor=r),n&&(c.style.color=n),c.style.left=t.clientX+d(),c.style.top=t.clientY+p()+5+(u||0),i(c),c}function r(t,e,o,n,r){if(r.parentNode){var u=l(t,e);o&&(u.style.maxWidth=o),n&&(u.className=n);var c=a(r),s=c[1]+r.clientHeight+5;return u.style.left=c[0],u.style.top=s,i(u),u}}function u(t){var t=t||window.event,e=t.explicitOriginalTarget?m(t.explicitOriginalTarget):null;if(!e||e.getAttribute("id")!=f.TOOLTIP_ID){var o=document.getElementById(f.TOOLTIP_ID);o&&(o.parentNode&&o.parentNode.removeChild(o),o=null)}}var c=t("../util/utils.common"),s=c.fitObjectIntoScreen,d=c.getScrollLeft,a=c.getBoxOffsets,m=c.getParentDiv,p=c.getScrollTop,T=t("jquery"),f={};f.TOOLTIP_ID="custTooltip",e.customTooltip=f,e.showCustomTooltip=n,e.hideCustomTooltip=u,e.showCustomTooltipBelowObject=r});