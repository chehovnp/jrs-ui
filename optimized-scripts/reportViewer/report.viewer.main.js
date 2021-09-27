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

define(["require","exports","module","requirejs-domready","runtime_dependencies/js-sdk/src/jrs.configs","../controls/controls.base","prototype","underscore","jquery","../core/core.layout","./report.view.runtime","../components/components.toolbarButtons.events","../controls/controls.report","jquery-ui-touch-punch"],function(e,o,t){var r=e("requirejs-domready"),n=e("runtime_dependencies/js-sdk/src/jrs.configs"),s=e("../controls/controls.base"),i=s.ControlsBase,p=e("prototype"),c=p.Hash,u=e("underscore"),d=e("jquery"),a=e("../core/core.layout"),l=e("./report.view.runtime");e("../components/components.toolbarButtons.events"),e("../controls/controls.report"),e("jquery-ui-touch-punch"),window.printRequest=function(){},window.FC_Rendered=function(e){d("#"+e).hide().show()},r(function(){window.Prototype&&(delete Object.prototype.toJSON,delete Array.prototype.toJSON,delete c.prototype.toJSON,delete String.prototype.toJSON),u.extend(i,n.inputControlConstants),u.extend(l,n.reportViewer.ReportSettings),!l.hasInputControls||2!==l.reportControlsLayout&&4!==l.reportControlsLayout||a.resizeOnClient("inputControlsForm","reportViewFrame"),e(["ReportRequireJsConfig"],function(){e(["./viewer"],function(e){window.viewer=new e({at:"#reportContainer",reporturi:l.reportUnitURI,async:!0,page:0,contextPath:n.contextPath}),window.jasperreports={reportviewertoolbar:window.viewer},l.initialize()});var o=d("body");o.hasClass("jr")||o.addClass("jr")})})});