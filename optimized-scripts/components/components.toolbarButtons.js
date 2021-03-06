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

define(["require","exports","module","jquery","../actionModel/actionModel.modelGenerator","../core/core.events.bis"],function(e,o,t){var n=e("jquery"),i=e("../actionModel/actionModel.modelGenerator"),s=e("../core/core.events.bis"),a={UP:"up",DOWN:"down",OVER:"over",DISABLED:"disabled",PRESSED:"pressed",CONTENT_PREFIX:"toolbar_",MenuClass:"menu vertical dropDown",TOOLBAR_MENU_CLASS:"menu vertical dropDown fitable",ACTION_MODEL_TAG:"adhocActionModel",CAPSULE_PATTERN:"capsule",showButtonMenu:function(e,o){o=n(o);var t=this.CONTENT_PREFIX+o.attr("id"),s="adhocActionModel"==this.ACTION_MODEL_TAG?this.actionModel:this.ACTION_MODEL_TAG;i.showDropDownMenu(e,o,t,this.TOOLBAR_MENU_CLASS,s)},setActionModel:function(e){this.actionModel=e},isToolBarButton:function(e){return!!e&&n(e).hasClass("capsule")},enable:function(e,o){s.enable(e)},disable:function(e){s.disable(e)},setButtonState:function(e,o){o?this.enable(e):this.disable(e)}};t.exports=a});