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

define(["require","requirejs-text","underscore","request"],function(e){"use strict";var t=e("requirejs-text"),r=e("underscore"),n=e("request"),s=t.createXhr,o=t.load;return r.extend(t,{useXhr:function(){return!0},createXhr:function(){var e=s.apply(t,arguments),o={headers:{"Cache-Control":"private",Pragma:""}},u={response:void 0,responseBody:void 0,responseText:void 0,responseType:void 0,responseXML:void 0,status:void 0,statusText:void 0};for(var i in e)-1==i.indexOf("response")&&-1==i.indexOf("status")&&(u[i]=e[i]);return r.extend(u,{open:function(e,t,r){o.url=t,u.status=1},send:function(){n(o).done(function(e,t,r){u.readyState=r.readyState,u.status=r.status,u.responseText=r.responseText,u.onreadystatechange()}).fail(function(e){u.onerror(e)})}})},load:function(e,t,n,s){return s.isBuild&&s.excludeText&&r.indexOf(s.excludeText,e)>=0?void n():o(e,t,n,s)}})});