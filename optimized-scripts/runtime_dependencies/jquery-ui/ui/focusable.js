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

!function(e){"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}(function(e){function i(e){for(var i=e.css("visibility");"inherit"===i;)e=e.parent(),i=e.css("visibility");return"hidden"!==i}return e.ui.focusable=function(t,n){var a,r,s,o,u,f=t.nodeName.toLowerCase();return"area"===f?(a=t.parentNode,r=a.name,!(!t.href||!r||"map"!==a.nodeName.toLowerCase())&&(s=e("img[usemap='#"+r+"']"),s.length>0&&s.is(":visible"))):(/^(input|select|textarea|button|object)$/.test(f)?(o=!t.disabled)&&(u=e(t).closest("fieldset")[0])&&(o=!u.disabled):o="a"===f?t.href||n:n,o&&e(t).is(":visible")&&i(e(t)))},e.extend(e.expr[":"],{focusable:function(i){return e.ui.focusable(i,null!=e.attr(i,"tabindex"))}}),e.ui.focusable});