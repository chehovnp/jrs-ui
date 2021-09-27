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

define(["require","exports","module","underscore","jquery","bundle!all","../view/BaseDataSourceView","text!../template/customDataSourceTemplate.htm","../model/CustomDataSourceModel"],function(e,t,o){var a=e("underscore"),s=e("jquery"),r=e("bundle!all"),l=e("../view/BaseDataSourceView"),i=e("text!../template/customDataSourceTemplate.htm"),n=e("../model/CustomDataSourceModel");o.exports=l.extend({PAGE_TITLE_NEW_MESSAGE_CODE:"resource.datasource.custom.page.title.new",PAGE_TITLE_EDIT_MESSAGE_CODE:"resource.datasource.custom.page.title.edit",modelConstructor:n,customFieldsTemplate:i,render:function(){return this.$el.empty(),this.renderCustomFieldsSection(),this.model.testable&&this.renderTestConnectionSection(),this},templateData:function(){return a.extend({},l.prototype.templateData.apply(this,arguments),{i18n:r,customFields:this.model.customFields})},renderCustomFieldsSection:function(){var e=a.template(this.customFieldsTemplate,this.templateData()),t=this.$el.find("[name=customFieldsContainer]");t.length>0?t.empty().append(s(e).children()):this.$el.append(e)}},{})});