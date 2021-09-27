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

define(["require","exports","module","backbone","runtime_dependencies/bi-repository/src/bi/repository/model/RepositoryResourceModel","bundle!jasperserver_messages"],function(e,r,o){var t=e("backbone"),a=e("runtime_dependencies/bi-repository/src/bi/repository/model/RepositoryResourceModel"),i=e("bundle!jasperserver_messages");o.exports=t.Model.extend({defaults:{id:void 0,uri:"",name:"",readOnly:!1},idAttribute:"uri",validation:{id:[{required:!0,msg:i["ReportDataSourceValidator.error.not.empty.reportDataSource.name"]},{maxLength:a.settings.NAME_MAX_LENGTH,msg:i["ReportDataSourceValidator.error.too.long.reportDataSource.name"]},{startsWithLetter:!0,msg:i["ReportDataSourceValidator.error.invalid.chars.shouldStartWithLetter"]},{containsOnlyWordCharacters:!0,msg:i["ReportDataSourceValidator.error.invalid.chars.wordCharsOnly"]}]},initialize:function(e){this.set("name",/.*\/(.+)$/.exec(e.uri)[1])}})});