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

define(["require","exports","module","prototype","../util/touch.controller","../util/utils.common","../core/core.events.bis","../dynamicTree/dynamicTree.utils"],function(e,t,r){var o=e("prototype"),n=o.$,i=o.$$,s=o.$break,a=e("../util/touch.controller"),l=e("../util/utils.common"),d=l.buildActionUrl,u=l.isIPad,c=e("../core/core.events.bis"),p=e("../dynamicTree/dynamicTree.utils"),m={messages:{},resourceLabelMaxLength:100,resourceIdMaxLength:100,resourceDescriptionMaxLength:250,PROPAGATE_EVENT:"propagateEvent",STEP_DISPLAY_ID:"stepDisplay",FLOW_CONTROLS_ID:"flowControls",initSwipeScroll:function(){var e=n(m.STEP_DISPLAY_ID);e&&new a(e.up(),e.up(1),{})},submitForm:function(e,t,r){if(t){var o=d(t);r&&r(),n(e).writeAttribute("method","post").writeAttribute("action",o),n(e).submit()}},registerClickHandlers:function(e,t,r){if(m._bodyClickEventHandlers)return void(r?Array.prototype.unshift:Array.prototype.push).apply(m._bodyClickEventHandlers,e);m._bodyClickEventHandlers=e,i(t||"body")[0].observe("click",function(e){m._bodyClickEventHandlers&&m._bodyClickEventHandlers.each(function(t){var r=t(e);if(r)throw r!==m.PROPAGATE_EVENT&&Event.stop(e),s})})},TreeWrapper:function(e){var t=this;if(this._treeId=e.treeId,this._resourceUriInput=n(e.resourceUriInput||"resourceUri"),this._uri=this._resourceUriInput&&this._resourceUriInput.getValue()||e.uri||"/",!e.providerId)throw"There is no tree provider set for tree #{id}".interpolate({id:this._treeId});var r=["providerId","rootUri","organizationId","publicFolderUri","urlGetNode","urlGetChildren"].inject({},function(t,r){return null!==e[r]&&(t[r]=e[r]),t});return this._tree=new p.createRepositoryTree(this._treeId,r),this._tree.observe("tree:loaded",function(){t._tree.openAndSelectNode(n(t._resourceUriInput).getValue())}),this._tree.observe("leaf:selected",function(e){t._uri=e.memo.node.param.uri,t._resourceUriInput.setValue(t._uri)}),this._tree.observe("node:selected",function(){t._resourceUriInput.setValue(t._uri="")}),{getTreeId:function(){return t._treeId},getTree:function(){return t._tree},selectFolder:function(e){t._tree.openAndSelectNode(e)},getSelectedFolderUri:function(){return t._uri}}},switchButtonState:function(e,t){c[t?"enable":"disable"].call(c,e)},switchDisableState:function(e,t){(e=n(e))&&e[t?"disable":"enable"].call(e)},generateResourceId:function(e){if(window.localContext&&window.localContext.initOptions&&window.localContext.initOptions.resourceIdNotSupportedSymbols)return e.replace(new RegExp(window.localContext.initOptions.resourceIdNotSupportedSymbols,"g"),"_");throw"There is no resourceIdNotSupportedSymbols property in init options."},testResourceId:function(e){if(window.localContext&&window.localContext.initOptions&&window.localContext.initOptions.resourceIdNotSupportedSymbols)return new RegExp(window.localContext.initOptions.resourceIdNotSupportedSymbols,"g").test(e);throw"There is no resourceIdNotSupportedSymbols property in init options."},labelValidator:function(e){var t=!0,r="";return e.blank()?(r=m.messages.labelIsEmpty,t=!1):e.length>m.resourceLabelMaxLength&&(r=m.messages.labelToLong,t=!1),{isValid:t,errorMessage:r}},getLabelValidationEntry:function(e){return{element:e,validators:[{method:"mandatory",messages:{mandatory:m.messages.labelIsEmpty}},{method:"minMaxLength",messages:{tooLong:m.messages.labelToLong},options:{maxLength:m.resourceLabelMaxLength}}]}},getIdValidationEntry:function(e){return{element:e,validators:[{method:"resourceIdChars",messages:m.messages},{method:"mandatory",messages:{mandatory:m.messages.resourceIdIsEmpty}},{method:"minMaxLength",messages:{tooLong:m.messages.resourceIdToLong},options:{maxLength:m.resourceIdMaxLength}}]}},resourceIdValidator:function(e){var t=!0,r="";return this._isEditMode||(e.blank()?(r=m.messages.resourceIdIsEmpty,t=!1):e.length>m.resourceIdMaxLength?(r=m.messages.resourceIdToLong,t=!1):m.testResourceId(e)&&(r=m.messages.resourceIdInvalidChars,t=!1)),{isValid:t,errorMessage:r}},getDescriptionValidationEntry:function(e){return{element:e,validators:[{method:"minMaxLength",messages:{tooLong:m.messages.descriptionToLong},options:{maxLength:m.resourceDescriptionMaxLength}}]}},descriptionValidator:function(e){var t=!0,r="";return e.length>m.resourceDescriptionMaxLength&&(r=m.messages.descriptionToLong,t=!1),{isValid:t,errorMessage:r}},dataSourceValidator:function(e){var t=!0,r="";return""===e.trim()&&(r=m.messages.dataSourceInvalid,t=!1),{isValid:t,errorMessage:r}},queryValidator:function(e){var t=!0,r="";return""===e.trim()&&(r=m.messages.queryInvalid,t=!1),{isValid:t,errorMessage:r}},getValidationEntries:function(e){return e.collect(function(e){return e.validationEntry?e.validationEntry:{validator:e.validator,element:e}})}};void 0===e&&u()&&document.observe("dom:loaded",m.initSwipeScroll.bind(m)),r.exports=m});