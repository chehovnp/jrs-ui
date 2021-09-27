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

define(["require","exports","module","runtime_dependencies/js-sdk/src/jrs.configs","../util/redirectToUrlUtil","./utils.common"],function(e,n,r){var o=e("runtime_dependencies/js-sdk/src/jrs.configs"),t=e("../util/redirectToUrlUtil"),i=e("./utils.common"),c=i.JSCookie;r.exports={saveCurrent:function(e){new c(e,encodeURIComponent(document.location.href))},saveReferrer:function(e){-1===document.referrer.indexOf("login.html")&&new c(e,encodeURIComponent(document.referrer))},restore:function(e,n){var r=encodeURIComponent(document.location.href),i=new c(e).value;if(i&&i!==r){var d=decodeURIComponent(i);if(d)return void t.redirect(d)}n=n||"/",t.redirect(o.contextPath+n)}}});