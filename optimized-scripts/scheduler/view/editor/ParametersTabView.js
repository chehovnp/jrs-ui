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

define(["require","exports","module","jquery","underscore","bundle!all","runtime_dependencies/js-sdk/src/jrs.configs","backbone","text!../../template/editor/parametersTabTemplate.htm","../../../controls/controls.base","../../../namespace/namespace","../../../controls/controls.options","../../../controls/controls.controller"],function(e,t,o){var r=e("jquery"),n=e("underscore"),i=e("bundle!all"),s=e("runtime_dependencies/js-sdk/src/jrs.configs"),l=e("backbone"),a=e("text!../../template/editor/parametersTabTemplate.htm"),p=e("../../../controls/controls.base"),c=p.ControlsBase,d=e("../../../namespace/namespace"),u=d.JRS;e("../../../controls/controls.options"),e("../../../controls/controls.controller"),n.extend(c,s.inputControlsConstants),o.exports=l.View.extend({initialize:function(e){this.options=n.extend({},e),this.listenTo(this.model,"change:source",this.sourceChange),r(document).on("viewmodel:values:changed",n.bind(this.viewModelValuesChange,this))},render:function(){this.setElement(r(n.template(a,{i18n:i,config:s})))},saveAsDialogButtonSaveClick:function(){var e=this,t=this.reportOptionsDialog.input.getValue(),o=this.model.controlsController.getViewModel().get("selection"),n=t===this.reportOptionsDialog.optionNameToOverwrite;r.when(this.reportOptions.add(this.reportOptions.optionsUrl||this.reportOptions.url,t,o,n)).done(function(){e.reportOptionsDialog.hideWarning();var t=e.reportOptions.getElem().parent();0===t.length&&(t=e.$el.find(".saveCurrentValuesContainer"),t.prepend(e.reportOptions.getElem())),e.reportOptionsDialog.hide(),delete e.reportOptionsDialog.optionNameToOverwrite}).fail(function(o){try{var r=JSON.parse(o.responseText);"report.options.dialog.confirm.message"===r.errorCode&&!n&&(e.reportOptionsDialog.optionNameToOverwrite=t),e.reportOptionsDialog.showWarning(r.message)}catch(e){}})},sourceChange:function(e,t){var o=t&&t.reportUnitURI,r=this.model.get("source").parameters;if(r){var n=r.parameterValues;for(var i in n)n.hasOwnProperty(i)&&null===n[i]&&delete n[i];this.reportOptions&&(this.reportOptions.url=void 0),this.model.controlsController=new u.Controls.Controller({reportUri:o,reportOptionUri:"",preSelectedData:n});var s=this;this.model.controlsController.fetchAndSetInputControlsState(n).done(function(e){e?s.trigger("IC_Displayed"):s.trigger("failedToGet_IC")}).fail(function(){s.trigger("failedToGet_IC")})}},viewModelValuesChange:function(){this.model.set("source",{reportUnitURI:this.model.get("source").reportUnitURI,parameters:{parameterValues:this.model.controlsController.getViewModel().get("selection")}},{validate:!1,silent:!0})}})});