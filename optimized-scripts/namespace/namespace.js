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

define(["require","exports","module"],function(e,o,r){function n(){return __jrsConfigs__.isProVersion}var i={vars:{element_scrolled:!1,ajax_in_progress:!1,current_flow:null,contextPath:__jrsConfigs__.contextPath},i18n:{}};if(void 0===t)var t=!1;var s={components:{},i18n:{}};void 0===i&&(i={Mocks:{}}),void 0===i.vars&&(i.vars={element_scrolled:!1,ajax_in_progress:!1,current_flow:null}),void 0===i.Export&&(i.Export={i18n:{"file.name.empty":"export.file.name.empty","file.name.too.long":"export.file.name.too.long","file.name.not.valid":"export.file.name.not.valid","export.select.users":"export.select.users","export.select.roles":"export.select.roles","export.session.expired":"export.session.expired","error.timeout":"export.file.name.empty"},configs:{TIMEOUT:12e5,DELAY:3e3}}),void 0===window.localContext&&(window.localContext={}),__jrsConfigs__.calendar&&(i.i18n.bundledCalendarFormat=__jrsConfigs__.calendar.i18n.bundledCalendarFormat,i.i18n.bundledCalendarTimeFormat=__jrsConfigs__.calendar.i18n.bundledCalendarTimeFormat),window.JRS=i,window.jaspersoft=s,window.isProVersion=n,o.jaspersoft=s,o.JRS=i,o.isProVersion=n});