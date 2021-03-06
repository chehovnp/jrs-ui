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

define(["require","exports","module","../namespace/namespace","underscore","jquery","./controls.core"],function(e,t,i){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var s=e("../namespace/namespace"),r=s.JRS,o=e("underscore"),l=e("jquery");e("./controls.core"),r.Controls=function(e,t,i){return t.extend(i,{BaseControl:i.Base.extend({id:null,elem:null,error:null,templateChunks:{},constructor:function(e){this.initialize.apply(this,arguments)},getElem:function(){return this.elem},setElem:function(e){this.elem=e},bindCustomEventListeners:function(){},isSingleSelect:function(){return!t.isArray(this.get("selection"))},isSingleValue:function(){return!t.isArray(this.get("values"))},getTemplateSection:function(e){return this.templateChunks[this.type+"_"+e]||(this.templateChunks[this.type+"_"+e]=i.TemplateEngine.createTemplateSection(e,this.type)),this.templateChunks[this.type+"_"+e]},initialize:function(){this.baseRender.apply(this,arguments),this.isVisible.apply(this,arguments)&&this.bindCustomEventListeners()},fireControlSelectionChangeEvent:function(t){e(document).trigger(i.CHANGE_CONTROL,{control:this,selection:t})},baseRender:function(n){n&&t.extend(this,n);var s=i.TemplateEngine.createTemplate(this.type);if(s){var r=e(s(this));this.setElem(r)}},setValue:function(e){},fetch:function(e){},render:function(){},get:function(e){return this[e]},isValid:function(){return null===this.error||this.error&&this.error instanceof String&&0===this.error.length},isVisible:function(e){return!e||void 0===e.visible||!0===e.visible},updateWarningMessage:function(){var e=null!=this.error?this.error:"";this.getElem()&&this.getElem().find(".warning").text(e)},reset:function(e){this.set(e);var t=this.get("values");this.isVisible(this)&&void 0===t&&this.setValue(t)},set:function(e,i){if(t.extend(this,e),void 0!==e.values){var n=e.values;this.isVisible(this)&&this.setValue(n),this.isSingleValue()?this.selection=n:this.isSingleSelect()?this.selection=n[0]:this.selection=n}if(void 0!==e.selection&&(this.isSingleValue()&&(this.values=e.selection),!i&&this.fireControlSelectionChangeEvent(e.selection)),void 0!==e.disabled&&!this.get("readOnly")){var s=e.disabled;i||(s?this.disable():this.enable())}void 0!==e.error&&(this.updateWarningMessage(),this.mandatory&&void 0===this.selection&&(this.selection=[]))},find:function(e){if(void 0!==e&&e&&"object"==n(e)){var i=t.keys(e)[0],s=t.values(e)[0];return t.find(this.get("values"),function(e){return e[i]===s})}},enable:function(){this.getElem().find("input").prop("disabled",!1),this.getElem().find("select").prop("disabled",!1)},disable:function(){this.getElem().find("input").prop("disabled",!0),this.getElem().find("select").prop("disabled",!0)}},{merge:function(e,i){return t.isNull(e)||t.isUndefined(e)?i:t.isNull(i)||t.isUndefined(i)?e:t.isArray(i)?t.map(e,function(e){return void 0!==t.find(i,function(t){return t===e.value})?e.selected=!0:delete e.selected,e}):this.merge(e,[i])}}),CHANGE_CONTROL:"changed:control"})}(l,o,r.Controls),i.exports=r.Controls});