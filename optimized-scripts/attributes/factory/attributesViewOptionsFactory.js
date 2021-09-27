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

define(["require","exports","module","underscore","bundle!AttributesBundle","../../attributes/collection/AttributesCollection","../../attributes/view/DesignerRowView","../../attributes/view/DesignerEmptyView","../../attributes/view/viewWithPermissionTrait","../../attributes/view/RowView","../../attributes/enum/attributesTypesEnum","bundle!CommonBundle","../../attributes/model/AttributeModel","../../attributes/model/modelWithPermissionTrait","text!../../attributes/templates/tooltipTemplate.htm"],function(t,e,i){var r=t("underscore"),l=t("bundle!AttributesBundle"),n=t("../../attributes/collection/AttributesCollection"),s=t("../../attributes/view/DesignerRowView"),u=t("../../attributes/view/DesignerEmptyView"),a=t("../../attributes/view/viewWithPermissionTrait"),o=t("../../attributes/view/RowView"),b=t("../../attributes/enum/attributesTypesEnum"),d=t("bundle!CommonBundle"),m=t("../../attributes/model/AttributeModel"),w=t("../../attributes/model/modelWithPermissionTrait"),c=t("text!../../attributes/templates/tooltipTemplate.htm");i.exports=function(t){var e=new n([],{context:t.context,model:t.type===b.USER?m:m.extend(w)}),i={type:t.type,collection:e,childViewContainer:".tbody",tooltip:{template:c,i18n:l}};return r.extend(i,t.type!==b.SERVER?{$container:t.container,designer:{childView:t.type===b.USER?s:s.extend(a),emptyView:u,filters:[{title:l["attributes.table.filters.all"],value:"true",field:"defaultFilter",selected:!0},{title:l["attributes.table.filters.true"],value:"true",field:"inherited"},{title:l["attributes.table.filters.false"],value:"false",field:"inherited"}]},viewer:{childView:o}}:{el:t.el,childView:s.extend(a),emptyView:u,buttons:[{label:d["button.save"],action:"save",primary:!0},{label:d["button.cancel"],action:"cancel",primary:!1}],buttonsContainer:".buttonsContainer"})}});