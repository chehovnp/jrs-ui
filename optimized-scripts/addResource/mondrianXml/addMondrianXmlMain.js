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

define("resource/resource.base",["require","exports","module","prototype","../util/touch.controller","../util/utils.common","../core/core.events.bis","../dynamicTree/dynamicTree.utils"],function(e,t,i){var o=e("prototype"),s=o.$,r=o.$$,n=o.$break,d=e("../util/touch.controller"),a=e("../util/utils.common"),l=a.buildActionUrl,c=a.isIPad,u=e("../core/core.events.bis"),h=e("../dynamicTree/dynamicTree.utils"),_={messages:{},resourceLabelMaxLength:100,resourceIdMaxLength:100,resourceDescriptionMaxLength:250,PROPAGATE_EVENT:"propagateEvent",STEP_DISPLAY_ID:"stepDisplay",FLOW_CONTROLS_ID:"flowControls",initSwipeScroll:function(){var e=s(_.STEP_DISPLAY_ID);e&&new d(e.up(),e.up(1),{})},submitForm:function(e,t,i){if(t){var o=l(t);i&&i(),s(e).writeAttribute("method","post").writeAttribute("action",o),s(e).submit()}},registerClickHandlers:function(e,t,i){if(_._bodyClickEventHandlers)return void(i?Array.prototype.unshift:Array.prototype.push).apply(_._bodyClickEventHandlers,e);_._bodyClickEventHandlers=e,r(t||"body")[0].observe("click",function(e){_._bodyClickEventHandlers&&_._bodyClickEventHandlers.each(function(t){var i=t(e);if(i)throw i!==_.PROPAGATE_EVENT&&Event.stop(e),n})})},TreeWrapper:function(e){var t=this;if(this._treeId=e.treeId,this._resourceUriInput=s(e.resourceUriInput||"resourceUri"),this._uri=this._resourceUriInput&&this._resourceUriInput.getValue()||e.uri||"/",!e.providerId)throw"There is no tree provider set for tree #{id}".interpolate({id:this._treeId});var i=["providerId","rootUri","organizationId","publicFolderUri","urlGetNode","urlGetChildren"].inject({},function(t,i){return null!==e[i]&&(t[i]=e[i]),t});return this._tree=new h.createRepositoryTree(this._treeId,i),this._tree.observe("tree:loaded",function(){t._tree.openAndSelectNode(s(t._resourceUriInput).getValue())}),this._tree.observe("leaf:selected",function(e){t._uri=e.memo.node.param.uri,t._resourceUriInput.setValue(t._uri)}),this._tree.observe("node:selected",function(){t._resourceUriInput.setValue(t._uri="")}),{getTreeId:function(){return t._treeId},getTree:function(){return t._tree},selectFolder:function(e){t._tree.openAndSelectNode(e)},getSelectedFolderUri:function(){return t._uri}}},switchButtonState:function(e,t){u[t?"enable":"disable"].call(u,e)},switchDisableState:function(e,t){(e=s(e))&&e[t?"disable":"enable"].call(e)},generateResourceId:function(e){if(window.localContext&&window.localContext.initOptions&&window.localContext.initOptions.resourceIdNotSupportedSymbols)return e.replace(new RegExp(window.localContext.initOptions.resourceIdNotSupportedSymbols,"g"),"_");throw"There is no resourceIdNotSupportedSymbols property in init options."},testResourceId:function(e){if(window.localContext&&window.localContext.initOptions&&window.localContext.initOptions.resourceIdNotSupportedSymbols)return new RegExp(window.localContext.initOptions.resourceIdNotSupportedSymbols,"g").test(e);throw"There is no resourceIdNotSupportedSymbols property in init options."},labelValidator:function(e){var t=!0,i="";return e.blank()?(i=_.messages.labelIsEmpty,t=!1):e.length>_.resourceLabelMaxLength&&(i=_.messages.labelToLong,t=!1),{isValid:t,errorMessage:i}},getLabelValidationEntry:function(e){return{element:e,validators:[{method:"mandatory",messages:{mandatory:_.messages.labelIsEmpty}},{method:"minMaxLength",messages:{tooLong:_.messages.labelToLong},options:{maxLength:_.resourceLabelMaxLength}}]}},getIdValidationEntry:function(e){return{element:e,validators:[{method:"resourceIdChars",messages:_.messages},{method:"mandatory",messages:{mandatory:_.messages.resourceIdIsEmpty}},{method:"minMaxLength",messages:{tooLong:_.messages.resourceIdToLong},options:{maxLength:_.resourceIdMaxLength}}]}},resourceIdValidator:function(e){var t=!0,i="";return this._isEditMode||(e.blank()?(i=_.messages.resourceIdIsEmpty,t=!1):e.length>_.resourceIdMaxLength?(i=_.messages.resourceIdToLong,t=!1):_.testResourceId(e)&&(i=_.messages.resourceIdInvalidChars,t=!1)),{isValid:t,errorMessage:i}},getDescriptionValidationEntry:function(e){return{element:e,validators:[{method:"minMaxLength",messages:{tooLong:_.messages.descriptionToLong},options:{maxLength:_.resourceDescriptionMaxLength}}]}},descriptionValidator:function(e){var t=!0,i="";return e.length>_.resourceDescriptionMaxLength&&(i=_.messages.descriptionToLong,t=!1),{isValid:t,errorMessage:i}},dataSourceValidator:function(e){var t=!0,i="";return""===e.trim()&&(i=_.messages.dataSourceInvalid,t=!1),{isValid:t,errorMessage:i}},queryValidator:function(e){var t=!0,i="";return""===e.trim()&&(i=_.messages.queryInvalid,t=!1),{isValid:t,errorMessage:i}},getValidationEntries:function(e){return e.collect(function(e){return e.validationEntry?e.validationEntry:{validator:e.validator,element:e}})}};void 0===e&&c()&&document.observe("dom:loaded",_.initSwipeScroll.bind(_)),i.exports=_}),define("components/components.pickers",["require","exports","module","prototype","../core/core.events.bis","underscore","../core/core.layout","../dynamicTree/dynamicTree.utils","./components.dialogs","../util/utils.common","jquery"],function(e,t,i){var o=e("prototype"),s=o.$,r=o.$F,n=e("../core/core.events.bis"),d=e("underscore"),a=e("../core/core.layout"),l=e("../dynamicTree/dynamicTree.utils"),c=e("./components.dialogs"),u=e("../util/utils.common"),h=u.matchAny,_=e("jquery"),m={};m.FileSelector=function(e){this._disabled=void 0!==e.disabled&&e.disabled,this._uriTextbox=s(e.uriTextboxId),this._browseButtonId=s(e.browseButtonId),this._onChange=e.onChange||!1,this._options=e,this._disabled?(n.disable(this._uriTextbox),n.disable(this._browseButtonId)):(this._id=e.id,this._suffix=e.suffix?e.suffix:(new Date).getTime(),this._treeDomId=e.treeId,this._selectLeavesOnly=void 0!==e.selectLeavesOnly&&e.selectLeavesOnly,this._selectedUri=r(this._uriTextbox),this._process(e),this._assignHandlers(),this._refreshButtonsState())},m.FileSelector.addVar("DEFAULT_TEMPLATE_DOM_ID","selectFromRepository"),m.FileSelector.addVar("DEFAULT_TREE_ID","selectFromRepoTree"),m.FileSelector.addVar("OK_BUTTON_ID","selectFromRepoBtnSelect"),m.FileSelector.addVar("CANCEL_BUTTON_ID","selectFromRepoBtnCancel"),m.FileSelector.addVar("TITLE_PATTERN","div.title"),m.FileSelector.addMethod("_process",function(e){!this._id&&(this._id=this.DEFAULT_TEMPLATE_DOM_ID),!s(this._id)&&this._options.template&&this._options.i18n?(this._dom=_(d.template(this._options.template,{i18n:this._options.i18n})),this._dom=this._dom[0]):this._dom=s(this._id).cloneNode(!0),this._dom.writeAttribute("id",this._id+this._suffix),this._okButton=this._dom.select("#"+this.OK_BUTTON_ID)[0],this._okButton.writeAttribute("id",this.OK_BUTTON_ID+this._suffix),this._cancelButton=this._dom.select("#"+this.CANCEL_BUTTON_ID)[0],this._cancelButton.writeAttribute("id",this.CANCEL_BUTTON_ID+this._suffix),!this._treeDomId&&(this._treeDomId=this.DEFAULT_TREE_ID),this._treeDom=this._dom.select("#"+this._treeDomId)[0],this._treeDom.writeAttribute("id",this._treeDomId+this._suffix),this._visible=!1,e.title&&this._dom.select(this.TITLE_PATTERN)[0].update(e.title),this._onOk=e.onOk,this._onCancel=e.onCancel,_(document.body).append(this._dom);var t,i=this._dom.down(a.SWIPE_SCROLL_PATTERN);i&&(t=a.createScroller(i));var o=Object.extend({providerId:e.providerId,scroll:t},e.treeOptions);this._tree=l.createRepositoryTree(this._treeDomId+this._suffix,o),this._selectedUri&&this._selectedUri.length>0?this._tree.showTreePrefetchNodes(this._selectedUri):this._tree.showTree(1)}),m.FileSelector.addMethod("_assignHandlers",function(){this._dom.observe("click",this._dialogClickHandler.bindAsEventListener(this)),["node:dblclick","leaf:dblclick"].each(function(e){this._tree.observe(e,this._treeClickHandler.bindAsEventListener(this))},this),["node:click","leaf:click","node:selected","leaf:selected"].each(function(e){this._tree.observe(e,this._refreshButtonsState.bindAsEventListener(this))},this),["childredPrefetched:loaded","tree:loaded"].each(function(e){this._tree.observe(e,this._treeLoadHandler.bindAsEventListener(this))},this),this._browseButtonId.observe("click",this._browseClickHandler.bindAsEventListener(this))}),m.FileSelector.addMethod("_canClickOk",function(e){return this._tree.getSelectedNode()&&(!this._selectLeavesOnly||this._tree.getSelectedNode().param.type!==this._tree.getSelectedNode().FOLDER_TYPE_NAME)}),m.FileSelector.addMethod("_dialogClickHandler",function(e){var t=e.element();if(h(t,["#"+this.OK_BUTTON_ID+this._suffix],!0)){e.stop();var i=this._tree.getSelectedNode().param.uri;this._uriTextbox.setValue(i),this._onChange&&this._onChange(i),this._hide(),this._onOk&&this._onOk()}else h(t,["#"+this.CANCEL_BUTTON_ID+this._suffix],!0)&&(e.stop(),this._hide(),this._onCancel&&this._onCancel())}),m.FileSelector.addMethod("_treeClickHandler",function(e){if(this._canClickOk()){var t=this._tree.getSelectedNode().param.uri;this._uriTextbox.setValue(t),this._onChange&&this._onChange(t),this._hide(),this._onOk&&this._onOk()}}),m.FileSelector.addMethod("_treeLoadHandler",function(e){this._visible&&this._selectedUri&&this._tree.openAndSelectNode(this._selectedUri)}),m.FileSelector.addMethod("_browseClickHandler",function(e){e.stop(),this._show()}),m.FileSelector.addMethod("_refreshButtonsState",function(){this._canClickOk()?n.enable(this._okButton):n.disable(this._okButton)}),m.FileSelector.addMethod("_hide",function(){c.popup.hide(this._dom),this._visible=!1}),m.FileSelector.addMethod("_show",function(){this._selectedUri=r(this._uriTextbox),this._selectedUri&&this._selectedUri.length>0?this._tree.showTreePrefetchNodes(this._selectedUri):this._tree.showTree(1),c.popup.show(this._dom,!0),this._visible=!0,this._selectedUri&&this._tree.openAndSelectNode(this._selectedUri),this._refreshButtonsState()}),m.FileSelector.addMethod("remove",function(){_(this._dom).remove()}),i.exports=m}),define("resource/resource.add.mondrianxmla",["require","exports","module","prototype","./resource.base","../util/utils.common","../components/components.pickers"],function(e,t,i){var o=e("prototype"),s=o.$,r=e("./resource.base"),n=e("../util/utils.common"),d=n.ValidationModule,a=e("../components/components.pickers"),l={LABEL_ID:"label",RESOURCE_ID_ID:"resourceID",DESCRIPTION_ID:"description",CATALOG_ID:"catalog",SAVE_BUTTON_ID:"save",_canGenerateId:!0,initialize:function(e){this._form=s(document.body).select("form")[0],this._label=s(this.LABEL_ID),this._resourceId=s(this.RESOURCE_ID_ID),this._description=s(this.DESCRIPTION_ID),this._catalog=s(this.CATALOG_ID),this._saveButton=s(this.SAVE_BUTTON_ID),this._isEditMode=e.isEditMode,this._label.validator=r.labelValidator.bind(this),this._resourceId.validator=r.resourceIdValidator.bind(this),this._description.validator=r.descriptionValidator.bind(this),this._catalog.validator=this._catalogValidator.bind(this),new a.FileSelector({treeId:"resourceTreeRepoLocation",providerId:"mondrianTreeDataProvider",uriTextboxId:"mondrianConnectionReference",browseButtonId:"browser_button",title:r.messages["resource.Add.Files.Title"],selectLeavesOnly:!0}),this._initEvents()},_initEvents:function(){this._saveButton.observe("click",function(e){this._isDataValid()||e.stop()}.bindAsEventListener(this)),this._form.observe("keyup",function(e){var t=e.element();[this._label,this._resourceId,this._description,this._catalog].include(t)&&(d.validate(r.getValidationEntries([t])),t==this._resourceId&&this._resourceId.getValue()!=r.generateResourceId(this._label.getValue())&&(this._canGenerateId=!1),t==this._label&&!this._isEditMode&&this._canGenerateId&&(this._resourceId.setValue(r.generateResourceId(this._label.getValue())),d.validate(r.getValidationEntries([this._resourceId]))))}.bindAsEventListener(this))},_isDataValid:function(){var e=[this._label,this._resourceId,this._description,this._catalog];return d.validate(r.getValidationEntries(e))},_catalogValidator:function(e){var t=!0,i="";return e.blank()&&(i=r.messages.catalogIsEmpty,t=!1),{isValid:t,errorMessage:i}}};void 0===e&&document.observe("dom:loaded",function(){l.initialize(window.localContext.initOptions)}),i.exports=l}),define("addResource/mondrianXml/addMondrianXmlMain",["require","exports","module","requirejs-domready","underscore","runtime_dependencies/js-sdk/src/jrs.configs","../../resource/resource.base","../../resource/resource.add.mondrianxmla","../../util/utils.common"],function(e,t,i){var o=e("requirejs-domready"),s=e("underscore"),r=e("runtime_dependencies/js-sdk/src/jrs.configs"),n=e("../../resource/resource.base"),d=e("../../resource/resource.add.mondrianxmla"),a=e("../../util/utils.common"),l=a.isIPad;o(function(){var e=r.addMondrianXML.localContext.initOptions;s.extend(window.localContext,r.addMondrianXML.localContext),s.extend(n.messages,r.addMondrianXML.resource.messages),d.initialize(e),l()&&n.initSwipeScroll()})});