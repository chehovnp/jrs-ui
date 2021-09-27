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

define(["require","exports","module","prototype","../util/utils.common","./actionModel.modelGenerator","./actionModel.json.property","runtime_dependencies/js-sdk/src/jrs.configs","jquery"],function(e,o,r){var a=e("prototype"),n=a.$,t=e("../util/utils.common"),i=t.isNotNullORUndefined,l=t.getAsFunction,s=e("./actionModel.modelGenerator"),d=e("./actionModel.json.property"),m=e("runtime_dependencies/js-sdk/src/jrs.configs"),u=e("jquery"),c={NAVIGATION_MENU_CLASS:"menu vertical dropDown",ACTION_MODEL_TAG:"navigationActionModel",CONTEXT_POSTFIX:"_mutton",NAVIGATION_MUTTON_DOM_ID:"navigation_mutton",NAVIGATION_MENU_PARENT_DOM_ID:"navigationOptions",navigationPaths:{browse:{url:"flow.html",params:"_flowId=searchFlow"},home:{url:"home.html"},library:{url:"flow.html",params:"_flowId=searchFlow&mode=library"},logOut:{url:"exituser.html"},search:{url:"flow.html",params:"_flowId=searchFlow&mode=search"},report:{url:"flow.html",params:"_flowId=searchFlow&mode=search&filterId=resourceTypeFilter&filterOption=resourceTypeFilter-reports&searchText="},jobs:{url:"scheduler/main.html"},olap:{url:"flow.html",params:"_flowId=searchFlow&mode=search&filterId=resourceTypeFilter&filterOption=resourceTypeFilter-view&searchText="},event:{url:"flow.html",params:"_flowId=logEventFlow"},adminHome:{url:"flow.html",params:"_flowId=adminHomeFlow"},organization:{url:"flow.html",params:"_flowId=tenantFlow"},etl:{url:"etl"},mondrianProperties:{url:"olap/properties.html"},flush:{url:"olap/flush.html"},user:{url:"flow.html",params:"_flowId=userListFlow"},role:{url:"flow.html",params:"_flowId=roleListFlow"},analysisOptions:{url:"flow.html",params:"_flowId=mondrianPropertiesFlow"},designerOptions:{url:"flow.html",params:"_flowId=designerOptionsFlow"},designerCache:{url:"flow.html",params:"_flowId=designerCacheFlow"},awsSettings:{url:"flow.html",params:"_flowId=awsSettingsFlow"},designer:{url:"flow.html",params:"_flowId=adhocFlow"},dashboard:{url:"dashboard/designer.html"},legacyDashboard:{url:"flow.html",params:"_flowId=dashboardDesignerFlow&createNew=true"},domain:{url:"domaindesigner.html"},dataSource:{url:"flow.html",params:"_flowId=addDataSourceFlow&ParentFolderUri="+encodeURIComponent("/datasources")},logSettings:{url:"log_settings.html"},createReport:{url:"view/view/modules/adhoc/createReport"}},bodyIds:{designer:"designerBase.confirmAndLeave",dashboardDesigner:"designerBase.confirmAndLeave",repoBrowse:"repositorySearch.confirmAndLeave",repoSearch:"repositorySearch.confirmAndLeave",manage_users:"orgModule.confirmAndLeave",manage_roles:"orgModule.confirmAndLeave",manage_orgs:"orgModule.confirmAndLeave",domainDesigner_tables:"domain.designer.confirmAndLeave",domainDesigner_derivedTables:"domain.designer.confirmAndLeave",domainDesigner_joins:"domain.designer.confirmAndLeave",domainDesigner_calculatedFields:"domain.designer.confirmAndLeave",domainDesigner_filters:"domain.designer.confirmAndLeave",domainDesigner_display:"domain.designer.confirmAndLeave",dataChooserDisplay:"domain.chooser.confirmAndLeave",dataChooserFields:"domain.chooser.confirmAndLeave",dataChooserPreFilters:"domain.chooser.confirmAndLeave",dataChooserSaveAsTopic:"domain.chooser.confirmAndLeave",reportViewer:"Report.confirmAndLeave"},globalActions:{logOut:function(e){return c.bodyIds[e]}},initializeNavigation:function(){var e,o,r;if(null!==n(this.ACTION_MODEL_TAG)){d.JSON=n(this.ACTION_MODEL_TAG).text?n(this.ACTION_MODEL_TAG).text.evalJSON():{};var a=/[A-Za-z]+[_]{1}[A-Za-z]+/;for(e in d.JSON)if(o=a.exec(e)[0],r=d.JSON[e][0],i(r))this.createMutton(o,r.text);else if("main_home"===o||"main_library"===o){var t=n(o);t&&n(t).removeClassName("hidden")}}},createMutton:function(e,o){var r=n(this.NAVIGATION_MUTTON_DOM_ID).cloneNode("true"),a=n(r).down(".button");n(r).setAttribute("id",e);var t=document.createTextNode(o);a.appendChild(t);var i=n(this.NAVIGATION_MENU_PARENT_DOM_ID);i&&i.appendChild(r)},showNavButtonMenu:function(e,o){var r=u(o).attr("id");s.showDropDownMenu(e,o,r+this.CONTEXT_POSTFIX,this.NAVIGATION_MENU_CLASS,this.ACTION_MODEL_TAG),n("menu").parentId=r},isNavButton:function(e){return n(e).hasClassName("mutton")||n(e).hasClassName("icon")},setNewLocation:function(e,o){var r=this.navigationPaths[e],a=o||r.params;if(r){a=a?"?"+a:"";var n=m.urlContext+"/"+r.url+a;try{window.location.href=n}catch(e){}}},navigationOption:function(e){var o=n(document.body).readAttribute("id"),r=null;if(c.globalActions[e]?r=c.globalActions[e](o):c.bodyIds[o]&&(r=c.bodyIds[o]),r){var a=l(r),t=a();if("function"==typeof t)return void t(function(){c.setNewLocation(e)});if(!t)return}c.setNewLocation(e)},onMenuHeaderMouseOver:function(e,o){this.showNavButtonMenu(e,o)}};window.primaryNavModule=c,r.exports=c});