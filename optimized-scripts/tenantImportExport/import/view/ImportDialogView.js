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

define(["require","exports","module","underscore","runtime_dependencies/js-sdk/src/common/component/dialog/Dialog","./ImportView","bundle!CommonBundle","bundle!ImportExportBundle","../../export/enum/exportTypesEnum"],function(t,i,o){var e=t("underscore"),n=t("runtime_dependencies/js-sdk/src/common/component/dialog/Dialog"),s=t("./ImportView"),r=t("bundle!CommonBundle"),l=t("bundle!ImportExportBundle"),p=t("../../export/enum/exportTypesEnum");o.exports=n.extend({constructor:function(t){t||(t={}),this.options=t,n.prototype.constructor.call(this,{model:this.model,modal:!0,resizable:!0,additionalCssClasses:"tenant-import-dialog",content:"",buttons:[{label:r["button.import"],action:"import",primary:!0},{label:r["button.cancel"],action:"cancel",primary:!1}]}),this.on("button:import",e.bind(this._onImportButtonClick,this)),this.on("button:cancel",e.bind(this._closeImportDialog,this))},initialize:function(t){n.prototype.initialize.apply(this,arguments),this.importView=new s,this.listenTo(this.importView,"import:finished",function(t){this.close(),this.trigger("import:finished",t)}),this.listenTo(this.importView.model,"validated",function(t){t?this.buttons.enable("import"):this.buttons.disable("import")},this)},openDialog:function(t){var i=l["tenant.import.dialog.title"]+" "+t.name,o=t.isRoot()?p.ROOT_TENANT:p.TENANT;t.isRoot()&&this.addCssClasses("tenant"),this.setContent(this.importView.render({type:o,tenantId:t.id}).$el),this.setTitle(i),n.prototype.open.apply(this,arguments),this.importView.applyEpoxyBindings(),this.importView.delegateEvents()},fieldIsValid:function(){},fieldIsInvalid:function(t){},_closeImportDialog:function(){this.close()},_onImportButtonClick:function(){var t=this;this.importView.doImport().done(function(i){t._closeImportDialog()})}})});