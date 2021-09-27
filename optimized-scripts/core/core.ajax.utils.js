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

define(["require","exports","module","../components/components.dialogs","../namespace/namespace","jquery"],function(e,r,o){function n(e,r){(e&&e.indexOf("sessionAttributeMissingException"))>-1?p.clusterErrorPopup.show(e):p.errorPopup.show(e,!1,r)}function s(e){if(500==e.status)return n(e.responseText),!0;if(e.getResponseHeader("LoginRequested"))return document.location=".",!0;if(e.getResponseHeader("JasperServerError"))return e.getResponseHeader("SuppressError")||(1==d(".dashboardViewFrame").length?(d(document.body).html(e.responseText),d("#"+u.fid,window.parent.document).removeClass("hidden").show()):n(e.responseText)),!0;return!1}function t(){}function a(){}var p=e("../components/components.dialogs"),i=e("../namespace/namespace"),u=i.JRS,d=e("jquery");r.showErrorPopup=n,r.baseErrorHandler=s,r.errorHandler=t,r.showMessageDialog=a});