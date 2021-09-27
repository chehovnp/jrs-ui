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

define(["require","exports","module","prototype","./resource.locate"],function(e,i,t){var o=e("prototype"),n=o.$,r=e("./resource.locate"),s={FRAME_ID:"frame",TYPE_ID:"type",TYPE_SUBMIT_ID:"chooseType",messages:{},initialize:function(){this.typeSubmit=n(this.TYPE_SUBMIT_ID),r.initialize({resourceInput:"resourceUri",browseButton:"browser_button",treeId:"OLAPTreeRepoLocation",providerId:"MondrianTreeDataProvider",dialogTitle:s.messages["resource.AnalysisConnectionMmondrianLocate.Title"],selectLeavesOnly:!0}),this._initEventHandlers()},_initEventHandlers:function(){n(this.TYPE_ID).observe("change",function(){this.typeSubmit.click()}.bind(this))}};void 0===e&&document.observe("dom:loaded",function(){s.initialize()}),t.exports=s});