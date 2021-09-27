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

define(["require","require-css","underscore"],function(e){var n=e("require-css"),r=e("underscore"),o=r.clone(n);return o.load=function(e,o,c,i){var u=!!i.config&&i.config.theme;if(!u||!u.href)return void c();e=[u.href,e].join("/");var t=r.extend(r.clone(o),{toUrl:function(){return e+".css"}});n.load.call(this,e,t,c,i)},o.manualLoad=function(n,r){var c=function(){};o.load(n,e,c,{config:{theme:r}},!0)},o});