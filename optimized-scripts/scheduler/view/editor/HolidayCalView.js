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

define(["require","exports","module","jquery","underscore","bundle!all","backbone","text!../../template/editor/holidayCalendarTemplate.htm"],function(e,t,a){var i=e("jquery"),l=e("underscore"),n=e("bundle!all"),d=e("backbone"),r=e("text!../../template/editor/holidayCalendarTemplate.htm");a.exports=d.View.extend({initialize:function(){this.listenTo(this.collection,"reset change",this.render)},render:function(){var e=i(l.template(r,{i18n:n}));this.$el.empty().append(e);var t=this.$el.find(".calendarBlock"),a=this.$el.find("[name=calendarSelect]");t.removeClass("disabled").find("select").attr("disabled",!1),a.empty("");var d;return 0===this.collection.size()?(d=i("<option>").attr("value","").text(n["report.scheduling.job.edit.trigger.calendars.nocalendars"]),a.append(d),t.addClass("disabled").find("select").attr("disabled","disabled"),this):(d=i("<option>").attr("value","").text(n["label.none"]),a.append(d),this.collection.forEach(function(e){d=i("<option>").attr("value",e.id).text(e.id),a.append(d)}),this)}})});