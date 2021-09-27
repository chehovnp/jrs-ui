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

define(["require","exports","module","../../attributes/enum/attributesTypesEnum"],function(t,e,n){var r=t("../../attributes/enum/attributesTypesEnum");n.exports={initScrollEvent:function(t){var e=t.type===r.SERVER?t.$el.parent():t.$container.parent(),n=t.$el.find(".addNewItem");e.scroll(function(t){n.css("margin-right",20-e.scrollLeft()+"px")})},detachScrollEvent:function(t){t.off()}}});