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

define([],function(){function e(e){var n,t;n=document.createElement("script"),n.type="text/javascript",n.async=!0,n.src=e,t=document.getElementsByTagName("script")[0],t.parentNode.insertBefore(n,t)}function n(e,n){var t=/!(.+)/,c=e.replace(t,""),a=t.test(e)?e.replace(/.+!/,""):r;return(c+=c.indexOf("?")<0?"?":"&")+a+"="+n}function t(){return"__async_req_"+(c+=1)+"__"}var r="callback",c=0;return{load:function(r,c,a,i){if(i.isBuild)a(null);else{var l=t();window[l]=a,e(n(c.toUrl(r),l))}}}});