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

define(["require","exports","module","underscore","./BaseDataSourceModel","../enum/connectionTypes","runtime_dependencies/bi-repository/src/bi/repository/enum/repositoryResourceTypes","bundle!jasperserver_messages"],function(e,r,o){var t=e("underscore"),n=e("./BaseDataSourceModel"),a=e("../enum/connectionTypes"),s=e("runtime_dependencies/bi-repository/src/bi/repository/enum/repositoryResourceTypes"),i=e("bundle!jasperserver_messages");o.exports=n.extend({type:s.BEAN_DATA_SOURCE,defaults:function(){var e={};return t.extend(e,n.prototype.defaults,{beanName:"",beanMethod:"",connectionType:a.BEAN}),e}(),validation:function(){var e={};return t.extend(e,n.prototype.validation,{beanName:[{required:!0,msg:i["ReportDataSourceValidator.error.not.empty.reportDataSource.beanName"]}],beanMethod:[{required:!0,msg:i["ReportDataSourceValidator.error.not.empty.reportDataSource.beanMethod"]}]}),e}()})});