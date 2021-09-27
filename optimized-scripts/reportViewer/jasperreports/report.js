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

define(["require","exports","module","../jasperreports-loader","./status-checker","./component-registrar","./event-manager","jquery","runtime_dependencies/js-sdk/src/common/logging/logger"],function(e,t,n){var r=e("../jasperreports-loader"),a=e("./status-checker"),o=e("./component-registrar"),s=e("./event-manager"),i=e("jquery"),c=e("runtime_dependencies/js-sdk/src/common/logging/logger"),u=c.register("jasperreports/report"),g=function(e){this.config={reporturi:null,async:!0,page:0,updateInterval:1e3,container:null},i.extend(this.config,e),this.currentpage=this.config.page,this.html=null,this.status=null,this.components=null,this.eventManager=new s,this.events={ACTION_PERFORMED:"action",BEFORE_ACTION_PERFORMED:"beforeAction",UNDO_PERFORMED:"undo",UNDO_ALL_PERFORMED:"undoall",SEARCH_PERFORMED:"search",SAVE_ZOOM_PERFORMED:"saveZoom",REDO_PERFORMED:"redo",PAGE_MODIFIED:"pageModified",REPORT_HTML_READY:"reportHtmlReady",COMPONENTS_LOADED:"componentsLoaded",COMPONENTS_REGISTERED:"componentsRegistered",REPORT_FINISHED:"reportFinished"},this.loader=new r({reporturi:this.config.reporturi,async:this.config.async,eventManager:this.eventManager}),this.statusChecker=new a(this.loader,this.config.updateInterval),this.componentRegistrar=new o(this.loader),e.stopOnFinishOnly&&(this.loader.config.stopOnFinishOnly=!0)};g.prototype={init:function(e){return this.refreshPage(this.currentpage,null,e)},refreshPage:function(e,t,n){var r=this;return r.currentpage=e,r.loader.getHtmlForPage(r.currentpage,t,n).then(function(e,t,n){return r.status=i.parseJSON(n.getResponseHeader("jasperreports-report-status")),r.html=e,r.status&&null!=r.status.pageIndex&&(r.currentpage=r.status.pageIndex),r.config.postProcess&&r.config.postProcess.call(r),r.eventManager.triggerEvent(r.events.REPORT_HTML_READY),r.status.isComponentMetadataEmbedded?i.parseJSON(i(e).find("#reportComponents").text()):r.loader.getComponentsForPage(r.currentpage)}).then(function(e){return r.loadedComponents=e,r.eventManager.triggerEvent(r.events.COMPONENTS_LOADED),r.components={},r.componentRegistrar.registerComponents(e,r,r.components)}).then(function(){return!r.status.pageTimestamp&&r.status.totalPages||"canceled"==r.status.reportStatus||r.statusChecker.checkPageModified(r.currentpage,r.status.pageTimestamp).then(function(e){r.status.originalStatus=e,"finished"==e.status?(r.status.totalPages=e.lastPageIndex+1,r.status.partialPageCount=e.lastPartialPageIndex+1,r.status.reportStatus=e.status,r.status.pageFinal?r.loader.getComponentsForPage().then(function(e){r.reportComponents={},r.componentRegistrar.registerComponents(e,r,r.reportComponents).then(function(){r.eventManager.triggerEvent(r.events.REPORT_FINISHED)})}):r.eventManager.triggerEvent(r.events.REPORT_FINISHED)):e.pageModified&&r.eventManager.triggerEvent(r.events.PAGE_MODIFIED)}),r.eventManager.triggerEvent(r.events.COMPONENTS_REGISTERED),r})},gotoPage:function(e){return this.statusChecker.cancelCheckPageModified(),this.refreshPage(e,!0)},search:function(e){var t=this;return t._notify({name:t.events.BEFORE_ACTION_PERFORMED,type:"search"}),this.loader.runAction({action:{actionName:"search",searchData:{searchString:e.searchString,caseSensitive:e.caseSensitive||!1,wholeWordsOnly:e.wholeWordsOnly||!1}}}).then(function(e){return t._notify({name:t.events.SEARCH_PERFORMED,type:"search",data:e}),t})},saveZoom:function(e){var t=this;return this.loader.runAction({action:{actionName:"saveZoom",zoomValue:e},showAjaxDialog:!1}).then(function(e){return t._notify({name:t.events.SAVE_ZOOM_PERFORMED,type:"saveZoom",data:e}),t})},undo:function(){var e=this;return e._notify({name:e.events.BEFORE_ACTION_PERFORMED}),this.loader.runAction({action:{actionName:"undo"}}).then(function(t){return e._notify({name:e.events.UNDO_PERFORMED,type:"undo",data:t}),e})},redo:function(){var e=this;return e._notify({name:e.events.BEFORE_ACTION_PERFORMED}),this.loader.runAction({action:{actionName:"redo"}}).then(function(t){return e._notify({name:e.events.REDO_PERFORMED,type:"redo",data:t}),e})},undoAll:function(){var e=this;return e._notify({name:e.events.BEFORE_ACTION_PERFORMED}),this.loader.runAction({action:{actionName:"undoAll"}}).then(function(t){return e._notify({name:e.events.UNDO_ALL_PERFORMED,type:"undoall",data:t}),e})},cancelStatusUpdates:function(){this.statusChecker.cancelCheckPageModified()},cancelExecution:function(e){return this.statusChecker.cancelCheckPageModified(),this.loader.cancelExecution(e)},on:function(e,t){return this.eventManager.subscribeToEvent({name:e,callback:t,thisContext:this,keep:!0}),this},_notify:function(e){this.config.debug&&u.debug("report notified of event: "+e.name+"; type: "+e.type),this.eventManager.triggerEvent(e.name,e)}},n.exports=g});