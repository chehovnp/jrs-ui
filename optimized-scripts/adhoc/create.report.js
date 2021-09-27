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

define(["require","exports","module","jquery","../namespace/namespace","runtime_dependencies/js-sdk/src/jrs.configs","../components/components.dialogs","../repository/repository.search.root"],function(e,o,r){var n=e("jquery"),t=e("../namespace/namespace"),s=t.JRS,a=e("runtime_dependencies/js-sdk/src/jrs.configs"),p=e("../components/components.dialogs"),c=e("../repository/repository.search.root");s.CreateReport=function(e,o){var r=function(e){return new s.GeneratorPropertiesDialog({advUri:e,okHandler:s.CreateReport.showGeneratedReport,messages:o})};return{showGeneratedReport:function(o){var r="reportGenerator.html?action=displayTempReportUnit&advUri="+encodeURIComponent(o.sourceURI)+"&template="+encodeURIComponent(o.template||"")+"&generator="+encodeURIComponent(o.generator||"")+"&exportFormat=html";e.ajax(r,{type:"GET",dataType:"json",success:function(e,o,r){"OK"===e.status?window.location=e.data:p.errorPopup.show(e.data.msg)},error:function(e,o,r){p.errorPopup.show("Unknown Error")}})},selectADV:function(){var e=c.model.getSelectedResources(),o=e&&e.length>0?e[0].URIString:"";r(o).show()},selectGenerator:function(e){r(e).show()}}}(n,a),n(function(){0===n("#ajaxbuffer").length&&n("body").append(n('<div id="ajaxbuffer" style="display:none"></div>'))}),r.exports=s.CreateReport});