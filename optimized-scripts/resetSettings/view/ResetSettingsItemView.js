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

define(["require","exports","module","underscore","runtime_dependencies/js-sdk/src/common/component/baseTable/childView/BaseRow","text!../templates/itemViewTemplate.htm","../../serverSettingsCommon/behaviors/DeleteConfirmBehavior"],function(e,t,o){var s=e("underscore"),r=e("runtime_dependencies/js-sdk/src/common/component/baseTable/childView/BaseRow"),i=e("text!../templates/itemViewTemplate.htm"),m=e("../../serverSettingsCommon/behaviors/DeleteConfirmBehavior"),a=r.extend({tagName:"div",className:"table-row",template:s.template(i),behaviors:s.extend(r.prototype.behaviors,{DeleteConfirm:{behaviorClass:m}})});o.exports=a});