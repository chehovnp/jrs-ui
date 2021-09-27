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

define(["require","exports","module","prototype","./resource.locate"],function(e,o,r){var t=e("prototype"),i=t.$,n=e("./resource.locate"),u={messages:[],initialize:function(){n.initialize({resourceInput:"resourceUri",browseButton:"browser_button",newResourceLink:"newQueryLink",treeId:"queryTreeRepoLocation",providerId:"queryTreeDataProvider",dialogTitle:u.messages["resource.QueryLocate.Title"],selectLeavesOnly:!0});var e=i("newQueryLink");e&&e.observe("click",function(){i("LOCAL").checked&&i("next").click()})},jumpTo:function(e){return i("jumpToPage").setValue(e),i("jumpButton").click(),!1}};void 0===e&&document.observe("dom:loaded",function(){u.initialize()}),r.exports=u});