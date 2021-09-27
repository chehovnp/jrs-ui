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

define(["require","exports","module","underscore","runtime_dependencies/js-sdk/src/common/component/base/OptionContainer","../../enum/confirmDialogTypesEnum","text!../../templates/buttonTemplate.htm"],function(t,n,e){var o=t("underscore"),s=t("runtime_dependencies/js-sdk/src/common/component/base/OptionContainer"),i=t("../../enum/confirmDialogTypesEnum"),u=t("text!../../templates/buttonTemplate.htm");e.exports={_initButtons:function(t){this.buttons=new s({options:t.buttons,el:t.buttonsContainer,contextName:"button",optionTemplate:u}),this.buttons.disable(),this.listenTo(this.buttons,"button:save",this.saveChildren),this.listenTo(this.buttons,"button:cancel",o.bind(this._openConfirm,this,null,i.CANCEL_CONFIRM))},toggleButtons:function(){var t=this.buttons;this.containsUnsavedItems()?t.enable():(o.each(t.options,function(t){t.$el.removeClass("over")}),t.disable())}}});