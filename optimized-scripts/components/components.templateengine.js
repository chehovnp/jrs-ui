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

define(["require","exports","module","jquery","underscore","../namespace/namespace"],function(e,t,n){var r=e("jquery"),a=e("underscore"),c=e("../namespace/namespace"),u=c.jaspersoft;u.components.templateEngine=function(e,t){return{render:function(e,n,r){if(!r)return t.template(e)(n);if(r==this.STD_PLACEHOLDERS){var a=String(e);return t.each(n,function(e,t){var n=new RegExp("\\{"+t+"\\}");a=a.replace(n,e)}),a}},renderUrl:function(e,n,r){var a=t.template(e)(n);return r&&(a=encodeURI(a)),a},getTemplateText:function(t){return e("#"+t).html()},createTemplate:function(n){var r=e("#"+n),a=r.html();if(a&&a.length>0)return function(e){return t.template(a)(e)}},createTemplateFromText:function(e){if(e&&e.length>0)return function(n){return t.template(e)(n)}},createTemplateSection:function(e,n){var r="\x3c!--#val--\x3e(\\s|\\S)*\x3c!--/val--\x3e",a=r.replace(/val/g,e),c=new RegExp(a,"g"),u=this.getTemplateText(n),o=u.match(c)[0];return function(e){return t.template(o)(e)}},STD_PLACEHOLDERS:"std_placeholder"}}(r,a),n.exports=u.components.templateEngine});