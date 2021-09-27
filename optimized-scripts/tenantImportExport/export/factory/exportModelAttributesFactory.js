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

define(["require","exports","module","underscore","../enum/exportTypesEnum"],function(e,n,u){var s=e("underscore"),r=e("../enum/exportTypesEnum"),t={},i={roles:null,users:null,everything:!0,userForRoles:!1,rolesForUser:!1,includeReports:!0,includeOtherResourceFiles:!0,includeDataSources:!0,includeDependentObjects:!0,includeAttributes:!0,includeAttributeValues:!0},c={includeAccessEvents:!1,includeAuditEvents:!1,includeMonitoringEvents:!1},d={includeDomains:!0,includeAdHocViews:!0,includeDashboards:!0},l={includeSubOrganizations:!0},o={includeServerSettings:!0};t[r.ROOT_TENANT]=s.extend({},i,c,d,l,o),t[r.TENANT]=s.extend({},i,d,l),t[r.SERVER_PRO]=s.extend({},i,c,d,l,o),t[r.SERVER_CE]=s.extend({},i,o,{includeAccessEvents:!0}),u.exports=function(e){return t[e]}});