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

define(["require","exports","module","request","backbone","jquery"],function(e,t,n){var r=e("request"),o=e("backbone"),u=e("jquery"),s=o.Model.extend({getCustomKeys:function(){var e=new u.Deferred;return r({url:"rest_v2/keys",type:"GET",dataType:"json",contentType:"application/json"}).done(function(t,n,r){return 200===r.status?e.resolve(t):e.resolve([])}).fail(function(t){e.reject(t)}),e}});n.exports=s});