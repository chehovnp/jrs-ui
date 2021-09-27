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

define(["require","exports","module","underscore","runtime_dependencies/js-sdk/src/common/component/dialog/Dialog","bundle!ImportExportBundle","text!../import/template/dependentResourcesDialogTemplate.htm"],function(e,t,i){var n=e("underscore"),o=e("runtime_dependencies/js-sdk/src/common/component/dialog/Dialog"),s=e("bundle!ImportExportBundle"),r=e("text!../import/template/dependentResourcesDialogTemplate.htm");i.exports=o.extend({events:{resize:"onResizeHeight"},onResizeHeight:function(){this.$contentContainer.height(this.$el.height()-this._resizableContainerShiftHeight),this.$(".control.groupBox").css("min-height",this.$contentContainer.height()-this.$(".message").outerHeight(!0))},constructor:function(e){e=e||{},this.options=e,o.prototype.constructor.call(this,{modal:!0,resizable:e.resizable,minWidth:e.minWidth,minHeight:e.minHeight,additionalCssClasses:e.additionalCssClasses||"dependent-resources-dialog jr-uWidth-725px jr-uHeight-500px",title:e.title||s["dialog.broken.dependencies.title"],content:"",buttons:e.buttons}),this.template=n.template(e.template||r)},open:function(e){this.setContent(this.template(n.defaults(e,{message:""}))),o.prototype.open.apply(this,arguments),this.$contentContainer.scrollTop(0);var t=this.$(".jr-mDialog-footer").outerHeight(),i=this.$(".jr-mDialog-header").outerHeight(),s=this.$contentContainer.outerHeight(),r=this.$contentContainer.height();this._resizableContainerShiftHeight=t+i+s-r,this.onResizeHeight()}})});