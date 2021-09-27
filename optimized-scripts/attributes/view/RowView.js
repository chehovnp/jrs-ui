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

define(["require","exports","module","underscore","bundle!AttributesBundle","bundle!CommonBundle","runtime_dependencies/js-sdk/src/common/component/baseTable/childView/BaseRow","../../attributes/enum/attributesTypesEnum","../../attributes/factory/rowTemplatesFactory"],function(e,t,n){var s=e("underscore"),i=e("bundle!AttributesBundle"),r=e("bundle!CommonBundle"),u=e("runtime_dependencies/js-sdk/src/common/component/baseTable/childView/BaseRow"),o=e("../../attributes/enum/attributesTypesEnum"),a=e("../../attributes/factory/rowTemplatesFactory"),c=u.extend({className:"table-row",template:s.template(a({readOnly:!0})),templateHelpers:function(){return{i18n:i,i18n2:r,type:this.type,types:o,encrypted:"~secure~"}},computeds:{encrypt:{get:function(){return"~secure~"},set:function(e){this.setBinding("value",e)}}},initialize:function(e){this.type=e.type,u.prototype.initialize.apply(this,arguments)}});n.exports=c});