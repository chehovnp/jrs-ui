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

define(["require","exports","module","jquery","backbone","runtime_dependencies/js-sdk/src/jrs.configs","../../scheduler/model/HolidayCal"],function(e,n,r){var s=e("jquery"),d=e("backbone"),a=e("runtime_dependencies/js-sdk/src/jrs.configs"),c=e("../../scheduler/model/HolidayCal");r.exports=d.Collection.extend({url:a.contextPath+"/rest_v2/jobs/calendars",model:c,parse:function(e){var n=[];return e&&e.calendarName&&s.each(e.calendarName,function(e,r){n.push({id:r})}),n}})});