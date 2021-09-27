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

define(["require","exports","module","prototype","./resource.locate"],function(e,o,r){var t=e("prototype"),i=t.$,n=e("./resource.locate"),s={FRAME_ID:"frame",TYPE_ID:"type",messages:[],initialize:function(){var e=i(this.TYPE_ID);n.initialize({resourceInput:"resourceUri",browseButton:"browser_button",treeId:"OLAPTreeRepoLocation",providerId:"XMLATreeDataProvider",dialogTitle:s.messages["resource.AnalysisConnectionXmlaLocate.Title"],selectLeavesOnly:!0}),e.observe("change",function(){i("chooseType").click()})}};void 0===e&&document.observe("dom:loaded",function(){s.initialize()}),r.exports=s});