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

define(["require","exports","module","jquery","runtime_dependencies/js-sdk/src/common/logging/logger"],function(e,r,n){var o=e("jquery"),t=e("runtime_dependencies/js-sdk/src/common/logging/logger"),i=function(e){this.loader=e},p=t.register("component-registrar");i.prototype={registerComponents:function(r,n,t){var i=this,s=[],d=new o.Deferred,u={};return o.each(r,function(r,d){if(d.parentId)u[d.parentId]?u[d.parentId].then(function(e){e.registerPart(d)}):p.error("Could not find promise for component with id: "+d.parentId);else if(d.module){var c=new o.Deferred;u[d.id]=c,s.push(c),e([d.module],function(e){var r=new e(d);r.parent=n,r.loader=i.loader,t[d.type]=t[d.type]||[],t[d.type].push(r),r.rdy?r.rdy.then(function(){c.resolve(r)}):c.resolve(r)})}else{var a={config:d};t[d.type]=t[d.type]||[],t[d.type].push(a)}}),o.when.apply(o,s).then(function(){d.resolve()}),d}},n.exports=i});