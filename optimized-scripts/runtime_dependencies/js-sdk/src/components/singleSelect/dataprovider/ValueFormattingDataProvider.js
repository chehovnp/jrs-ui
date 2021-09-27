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

define(["require","exports","module","underscore","jquery"],function(e,t,r){var o=e("underscore"),a=e("jquery"),i=function(e){o.bindAll(this,"getData"),e=e||{},this.format=e.format,this.request=e.request};o.extend(i.prototype,{getData:function(e){var t=a.Deferred();return this.request(e).done(o.bind(this._requestDone,this,t)).fail(t.reject),t.promise()},_requestDone:function(e,t){if(this.format&&t&&t.data){var r=t.data;if(r.length>0&&!r[0].label)for(var o=0;o<r.length;o++)r[o].label=this.format(r[o].value)}e.resolve(t)}}),r.exports=i});