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

define(["require","runtime_dependencies/js-sdk/src/jrs.configs","request"],function(e){"use strict";var n=e("runtime_dependencies/js-sdk/src/jrs.configs"),r=e("request"),i=n.userLocale.toLowerCase().replace("_","-");return{create:function(e){return{load:function(n,s,t,u){if(u.isBuild)return void t();if("en"===i||"en-us"===i)return void t();var c=e+i,o=s.toUrl(c);r({url:o+".js",type:"HEAD"}).done(function(){s([c],function(e){t(e)})}).fail(function(){t()})}}}}});