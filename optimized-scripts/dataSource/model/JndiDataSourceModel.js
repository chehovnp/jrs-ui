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

define(["require","exports","module","underscore","./BaseDataSourceModel","runtime_dependencies/bi-repository/src/bi/repository/enum/repositoryResourceTypes","../enum/connectionTypes","bundle!jasperserver_messages"],function(e,r,o){var n=e("underscore"),t=e("./BaseDataSourceModel"),s=e("runtime_dependencies/bi-repository/src/bi/repository/enum/repositoryResourceTypes"),i=e("../enum/connectionTypes"),a=e("bundle!jasperserver_messages");o.exports=t.extend({type:s.JNDI_DATA_SOURCE,defaults:function(){var e={};return n.extend(e,t.prototype.defaults,{jndiName:"",timezone:"",connectionType:i.JNDI}),e}(),validation:function(){var e={};return n.extend(e,t.prototype.validation,{jndiName:[{required:!0,msg:a["ReportDataSourceValidator.error.not.empty.reportDataSource.jndiName"]}]}),e}()})});