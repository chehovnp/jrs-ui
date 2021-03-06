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

define(["require","exports","module","underscore","runtime_dependencies/js-sdk/src/jrs.configs","runtime_dependencies/js-sdk/src/common/component/dialog/Dialog","./ExportView","bundle!CommonBundle","bundle!ImportExportBundle","../enum/exportTypesEnum"],function(e,t,o){function i(e){return s.isArray(e)?s.pluck(e,"URIString"):[e.URIString]}function n(e){return s.isArray(e)||(e=[e]),!!s.reduce(e,function(e,t){return e||!t.resourceType||t.resourceType.indexOf("ReportUnit")+1||t.resourceType.indexOf("ReportOptions")+1},!1)}var s=e("underscore"),r=e("runtime_dependencies/js-sdk/src/jrs.configs"),p=e("runtime_dependencies/js-sdk/src/common/component/dialog/Dialog"),l=e("./ExportView"),d=e("bundle!CommonBundle"),c=e("bundle!ImportExportBundle"),a=e("../enum/exportTypesEnum");o.exports=p.extend({constructor:function(e){e||(e={}),this.options=e,p.prototype.constructor.call(this,{model:this.model,resizable:!0,modal:!0,content:"",buttons:[{label:d["button.export"],action:"export",primary:!0},{label:d["button.cancel"],action:"cancel",primary:!1}]}),this.on("button:export",s.bind(this._onExportButtonClick,this)),this.on("button:cancel",s.bind(this._closeExportDialog,this))},initialize:function(e){this.exportView=new l,this.listenTo(this.exportView.model,"validated",function(e){e?this.buttons.enable("export"):this.buttons.disable("export")},this),p.prototype.initialize.apply(this,arguments)},openRepoDialog:function(e){var t=i(e),o=r.organizationsFolderUri||"/organizations",s=r.orgTemplateFolderUri||"/org_template",p=new RegExp("^("+o+"/([^/]+))+"),l=new RegExp("^"+o+s+"(/.*)?"),d=!!p.exec(t[0])&&!l.exec(t[0]),u={type:a.REPOSITORY,isSubOrgLevel:d},h=" "+c["export.dialog.repository.title"];this.addCssClasses("repository-export-dialog"),this._openExportDialog(u,h),this.exportView.model.set({uris:t,includeScheduledReportJobs:n(e)})},openTenantDialog:function(e){var t=" "+e.name,o=e.isRoot()?a.ROOT_TENANT:a.TENANT,i={type:o,tenantId:e.id};this.addCssClasses("tenant-export-dialog"),this._openExportDialog(i,t)},fieldIsValid:function(){},fieldIsInvalid:function(e){},_onExportButtonClick:function(){this.exportView.doExport(),this._closeExportDialog()},_closeExportDialog:function(){this.$el.css({width:this.width}),this.close(),this.$el.find(".export-view").html("")},_openExportDialog:function(e,t){var o=c["export.dialog.title"]+(t||"");this.setContent(this.exportView.render(e).$el),this.setTitle(o),this.exportView.applyEpoxyBindings(),this.exportView.delegateEvents(),p.prototype.open.apply(this,arguments),this.$el.css({minHeight:this.$el.outerHeight()}),this.width=this.$el.outerWidth()}})});