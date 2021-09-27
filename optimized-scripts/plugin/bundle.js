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

define(["require","request","requestSettings","underscore","runtime_dependencies/js-sdk/src/jrs.configs"],function(e){"use strict";var n=e("request"),r=e("requestSettings"),t=e("underscore"),s=e("runtime_dependencies/js-sdk/src/jrs.configs"),u=function(e,u){var d,i=s.contextPath+"/rest_v2/bundles";"all"===e?d="?expanded=true":(e=e.split("/"),d="/"+e[e.length-1]);var c=t.extend({},r,{type:"GET",dataType:"json",url:i+d});c.headers["Cache-Control"]="private",delete c.headers.Pragma,n(c).then(function(n){u("all"!==e?n:t(n).reduce(function(e,n){return t.extend(e,n)},{}))})};return u.load=function(e,n,r,t){if(t.isBuild)return void r();u(e,r)},u});