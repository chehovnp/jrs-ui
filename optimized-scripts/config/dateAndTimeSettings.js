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

define(["require","exports","module","runtime_dependencies/js-sdk/src/jrs.configs","jquery","underscore","settings!dateTimeSettings","runtime_dependencies/js-sdk/src/components/dateAndTime/DateAndTimePicker"],function(e,s,n){var i=e("runtime_dependencies/js-sdk/src/jrs.configs"),t=e("jquery"),r=e("underscore"),c=e("settings!dateTimeSettings"),d=e("runtime_dependencies/js-sdk/src/components/dateAndTime/DateAndTimePicker"),a=function(e,s){var n="en";return e&&(r.contains(s,e)?n=e:r.contains(s,e.substring(0,2))&&(n=e.substring(0,2))),n.replace("_","-")}(i.userLocale,i.avaliableLocales);d.setDefaults({locale:a,date:c.datepicker,time:c.timepicker}),n.exports=t});