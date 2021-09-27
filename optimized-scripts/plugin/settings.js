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

define(["require","request","requestSettings","underscore","runtime_dependencies/js-sdk/src/jrs.configs"],function(e){"use strict";var n=e("request"),t=e("requestSettings"),r=e("underscore"),s=e("runtime_dependencies/js-sdk/src/jrs.configs"),i=function(e,i){var u=s.contextPath+"/rest_v2/settings/",d=r.extend({},t,{type:"GET",dataType:"json",url:u+e});d.headers["Cache-Control"]="private",delete d.headers.Pragma,n(d).fail(function(){i(null)}).then(function(e){i(e)})};return i.load=function(e,n,t,r){if(r.isBuild)return void t();i(e,t)},i});