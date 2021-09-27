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

define(["require","exports","module","underscore","jquery","backbone","../error/biComponentErrorFactory","./util/biComponentUtil"],function(e,t,n){function r(e,t,n){return function(r,o,s){var u=new a.Deferred;r&&i.isFunction(r)&&u.done(r),o&&i.isFunction(o)&&u.fail(o),s&&i.isFunction(s)&&u.always(s);try{var p=e.validate();p?u.reject(c.validationError(p)):n(t,u)}catch(e){u.reject(c.javaScriptException(e))}return u}}var i=e("underscore"),a=e("jquery"),o=e("backbone"),c=e("../error/biComponentErrorFactory"),s=e("./util/biComponentUtil"),u=function(e,t){this.instanceData={properties:i.extend({},t),data:null},this.schema=i.isString(e)?JSON.parse(e):e};u.prototype.decorateComponent=function(e,t){s.createInstancePropertiesAndFields(e,this.instanceData,i.keys(this.schema.properties),["properties"],["data"],new o.Model),i.extend(e,{validate:s.createValidateAction(this.instanceData,this.schema),run:r(e,this.instanceData,t)})},n.exports={newInstance:function(e,t){return new u(e,t)}}});