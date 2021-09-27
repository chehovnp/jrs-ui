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

define(["require","exports","module","underscore","bundle!all","runtime_dependencies/js-sdk/src/common/component/dialog/Dialog","text!../template/repositoryFolderChooserDialogTemplate.htm","../../../factory/repositoryTreeFactory","../../../enum/repositoryResourceTypes"],function(e,t,s){var o=e("underscore"),i=e("bundle!all"),r=e("runtime_dependencies/js-sdk/src/common/component/dialog/Dialog"),l=e("text!../template/repositoryFolderChooserDialogTemplate.htm"),n=e("../../../factory/repositoryTreeFactory"),c=e("../../../enum/repositoryResourceTypes");s.exports=r.extend({constructor:function(e){e||(e={});var t="selectFolder";e.additionalCssClasses&&(t+=" "+e.additionalCssClasses),this.foldersTree=n({processors:["folderTreeProcessor","treeNodeProcessor","i18nItemProcessor","filterPublicFolderProcessor","cssClassItemProcessor","fakeUriProcessor"],treeBufferSize:e.treeBufferSize,types:[c.FOLDER],tooltipOptions:{}}),r.prototype.constructor.call(this,{modal:!0,resizable:!0,minWidth:400,minHeight:400,setMinSizeAsSize:e.setMinSizeAsSize,additionalCssClasses:t,title:i["repository.content"],content:o.template(l)({i18n:i}),buttons:[{label:i["button.select"],action:"select",primary:!0},{label:i["button.cancel"],action:"cancel",primary:!1}]}),this.$contentContainer.find(".control.groupBox .body").append(this.foldersTree.render().el)},initialize:function(e){this.listenTo(this.foldersTree,"selection:change",this._selectionListener),this.listenTo(this,"button:select",this._onOkButtonClick),this.listenTo(this,"button:cancel",this._onCancelButtonClick),r.prototype.initialize.apply(this,arguments),this._isOpened=!1,this.selectedResource=null,this._lastSelectedResource=null},open:function(){this._openDialog()},close:function(){this._closeDialog()},remove:function(){this._closeDialog(),this.foldersTree.remove(),r.prototype.remove.apply(this,arguments)},setDefaultSelectedItem:function(e){this._defaultSelectedItem=e},_onOkButtonClick:function(){this.selectedResource&&(this._closeDialog(),this._lastSelectedResource=this.selectedResource)},_onCancelButtonClick:function(){this.selectedResource=null,this._lastSelectedResource&&(this.selectedResource=this._lastSelectedResource),this._closeDialog()},_openDialog:function(){this._isOpened||(r.prototype.open.apply(this,arguments),this._resetTree(),this.disableButton("select"),this._preselectItem(),this._isOpened=!0)},_closeDialog:function(){this._isOpened&&(r.prototype.close.apply(this,arguments),this._isOpened=!1)},_onDialogResize:function(){var e=this.$contentContainer.find(".treeBox > .content > .body"),t=this.$contentContainer.closest(".jr-mDialog > .jr-mDialog-body");e.width(t.outerWidth(!0)-55),e.height(t.outerHeight(!0)-50)},_selectionListener:function(e){var t=Object.keys(e),s=e&&(o.isArray(e)||o.isObject(e))&&e[t[0]],i=s?s.uri:void 0,r=s?s.resourceType:void 0;if(!(s||i||r))return void this.disableButton("select");this.selectedResource={resourceUri:i},this.enableButton("select")},_resetTree:function(){this.foldersTree.collapse("/root",{silent:!0}),this.foldersTree.collapse("/public",{silent:!0}),this.foldersTree.resetSelection()},_preselectItem:function(){var e=!1;if(this._lastSelectedResource?e=this._lastSelectedResource.resourceUri:this._defaultSelectedItem&&(e=this._defaultSelectedItem),e){var t=this.foldersTree.$el.parent();this.foldersTree._selectTreeNode(e,t)}}})});