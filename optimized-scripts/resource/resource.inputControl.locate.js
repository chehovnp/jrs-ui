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

define(["require","exports","module","prototype","./resource.locate","../core/core.events.bis"],function(e,t,o){var i=e("prototype"),r=i.$$,n=i.Form,s=i.$,u=e("./resource.locate"),a=e("../core/core.events.bis"),c={messages:[],initialize:function(){this.form=r("input[name=_flowExecutionKey]")[0].up("form"),this.defineRadio=s("LOCAL"),this.resourceUriInput=s("resourceUri");try{this.resourcePicker(),this.updateButtonsState()}finally{this.initEvents()}},resourcePicker:function(){u.initialize({resourceInput:"resourceUri",browseButton:"browser_button",treeId:"inputControlTreeRepoLocation",providerId:"inputControlResourceTreeDataProvider",dialogTitle:c.messages["InputControlLocate.Title"],selectLeavesOnly:!0})},initEvents:function(){this.form&&new n.Observer(this.form,.3,function(){this.updateButtonsState()}.bind(this))},updateButtonsState:function(){this.resourceUriInput.getValue().blank()&&"LOCAL"!==this.defineRadio.getValue()?a.disable("next"):a.enable("next")}};void 0===e&&document.observe("dom:loaded",function(){c.initialize(window.localContext.initOptions)}),o.exports=c});