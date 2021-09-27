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

define(["require","exports","module","backbone","../../../extension/backboneValidationExtension","bundle!CommonBundle","../../../util/i18nMessage","underscore"],function(e,n,r){var t=e("backbone"),o=e("../../../extension/backboneValidationExtension"),i=e("bundle!CommonBundle"),a=e("../../../util/i18nMessage"),u=e("underscore"),l=a.extend({bundle:i}),p=t.Model.extend({validation:{step:[{min:1,msg:new l("error.pagination.property.min.value","step",1)}],current:[{integerNumber:!0,msg:new l("error.pagination.property.integer.value","current",1)},{min:1,msg:new l("error.pagination.property.min.value","current",1)},{fn:function(e){if(e>this.get("total"))return new l("error.pagination.property.max.value","current",e)}}],total:[{min:1,msg:new l("error.pagination.property.min.value","total",1)}]},defaults:{step:1,current:1,total:1}});u.extend(p.prototype,o.mixin),r.exports=p});