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

define(["require","exports","module","../view/CustomDataSourceView","../enum/dataSourceResourceTypes","../enum/customDataSourceTypes","../view/JdbcDataSourceView","../view/JndiDataSourceView","../view/AwsDataSourceView","../view/AzureSqlDataSourceView","../view/VirtualDataSourceView","../view/BeanDataSourceView","../view/MongoDbDataSourceView","../view/MongoDbJdbcDataSourceView","../view/DiagnosticCustomDataSourceView"],function(e,a,o){var i=e("../view/CustomDataSourceView"),t=e("../enum/dataSourceResourceTypes"),r=e("../enum/customDataSourceTypes"),w=e("../view/JdbcDataSourceView"),u=e("../view/JndiDataSourceView"),c=e("../view/AwsDataSourceView"),D=e("../view/AzureSqlDataSourceView"),S=e("../view/VirtualDataSourceView"),s=e("../view/BeanDataSourceView"),n=e("../view/MongoDbDataSourceView"),V=e("../view/MongoDbJdbcDataSourceView"),v=e("../view/DiagnosticCustomDataSourceView"),C={};C[t.JDBC.toLowerCase()]=w,C[t.JNDI.toLowerCase()]=u,C[t.AWS.toLowerCase()]=c,C[t.AZURE_SQL.toLowerCase()]=D,C[t.VIRTUAL.toLowerCase()]=S,C[t.BEAN.toLowerCase()]=s,C[t.MONGODB]=n,C[t.MONGODBJDBC]=V,C[r.DIAGNOSTIC]=v,o.exports={getView:function(e){var a;return e.dataSourceType?(a=C[e.dataSourceType])||(a=i):a=w,new a(e)},getViewType:function(e,a){var o=/application\/repository\.([^+]+)\+json/.exec(e),i=o&&o[1]?o[1].toLowerCase():e.toLowerCase();return t.CUSTOM.toLowerCase()===i&&(i=a.dataSourceName),i}}});