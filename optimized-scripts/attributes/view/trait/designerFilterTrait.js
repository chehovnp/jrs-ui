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

define(["require","exports","module","underscore","backbone","../../../attributes/attributesFilter/AttributesFilterCollectionView","../../../attributes/attributesFilter/view/AttributesFilterView","text!../../../attributes/attributesFilter/template/attributesFilterCollectionViewTemplate.htm"],function(t,e,i){var r=t("underscore"),l=t("backbone"),s=t("../../../attributes/attributesFilter/AttributesFilterCollectionView"),n=t("../../../attributes/attributesFilter/view/AttributesFilterView"),o=t("text!../../../attributes/attributesFilter/template/attributesFilterCollectionViewTemplate.htm");i.exports={_initFilters:function(t){this.filters=new s({collection:new l.Collection(t.filters||[]),childView:n,childViewContainer:"select",template:r.template(o),model:new l.Model({currentFilter:null}),targetCollection:this.collection})},_renderFilters:function(t){var e=this.filters.render().el;return!t&&this.$el.prepend(e)},_resetFilters:function(){this.filters.reset()}}});