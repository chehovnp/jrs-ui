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

define(["require","exports","module","underscore","../../export/enum/exportTypesEnum"],function(e,n,t){var r=e("underscore"),s=e("../../export/enum/exportTypesEnum"),u={},d={includeAccessEvents:!0,includeAuditEvents:!0,includeMonitoringEvents:!0},i={skipThemes:!0},c={includeServerSettings:!0};u[s.ROOT_TENANT]=r.extend({},d,i),u[s.TENANT]=r.extend({},i),u[s.SERVER_PRO]=r.extend({},d,i,c),u[s.SERVER_CE]=r.extend({},c,{includeAccessEvents:!0}),t.exports=function(e){return u[e]}});