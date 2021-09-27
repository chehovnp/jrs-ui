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

define(["require","exports","module","underscore","../../attributes/view/AttributesDesigner","../../attributes/enum/attributesTypesEnum","../../serverSettingsCommon/view/traits/buttonsTrait","../../attributes/view/trait/designerFilterTrait","../../attributes/view/trait/designerInheritedTrait","../../attributes/view/trait/designerPermissionTrait"],function(t,e,i){function r(t){var e={};return s.each(t,function(t){s.extend(e,t)}),e}var s=t("underscore"),n=t("../../attributes/view/AttributesDesigner"),a=t("../../attributes/enum/attributesTypesEnum"),u=t("../../serverSettingsCommon/view/traits/buttonsTrait"),o=t("../../attributes/view/trait/designerFilterTrait"),b=t("../../attributes/view/trait/designerInheritedTrait"),d=t("../../attributes/view/trait/designerPermissionTrait"),v={};v[a.SERVER]=[u,d],v[a.TENANT]=[o,b,d],v[a.USER]=[o,b],i.exports=function(t,e){return new(n.extend(r(v[t])))(e)}});