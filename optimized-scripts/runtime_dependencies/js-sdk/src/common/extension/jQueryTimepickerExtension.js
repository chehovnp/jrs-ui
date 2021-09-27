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

define(["require","exports","module","jquery","./jQueryDatepickerExtension","./jQueryUiSliderAccessExtension","jqueryui-timepicker-addon/dist/jquery-ui-timepicker-addon"],function(e,n,i){var r=e("jquery");e("./jQueryDatepickerExtension"),e("./jQueryUiSliderAccessExtension"),e("jqueryui-timepicker-addon/dist/jquery-ui-timepicker-addon");var t=r.timepicker._newInst;r.timepicker._newInst=function(e,n){n.onChangeMonthYear||(n.onChangeMonthYear=function(e,n,i,r){i.currentYear=i.selectedYear,i.currentMonth=i.selectedMonth,i.currentDay=i.selectedDay,r._updateDateTime(i)});var i=t.call(r.timepicker,e,n),u=i._onTimeChange;return i._onTimeChange=function(){return this.$timeObj[0].setSelectionRange=null,u.apply(this,arguments)},i},i.exports=r});