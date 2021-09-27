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

define(["require","exports","module","underscore","backbone","text!../template/list/oneJob.htm","text!../template/list/oneMasterJob.htm","bundle!all","runtime_dependencies/js-sdk/src/common/util/xssUtil","runtime_dependencies/js-sdk/src/common/component/dialog/ConfirmationDialog","../enum/jobStateEnum","runtime_dependencies/js-sdk/src/common/util/parse/date","../../components/components.tooltip"],function(e,t,i){var o=e("underscore"),n=e("backbone"),s=e("text!../template/list/oneJob.htm"),a=e("text!../template/list/oneMasterJob.htm"),l=e("bundle!all"),r=e("runtime_dependencies/js-sdk/src/common/util/xssUtil"),m=e("runtime_dependencies/js-sdk/src/common/component/dialog/ConfirmationDialog"),d=e("../enum/jobStateEnum"),c=e("runtime_dependencies/js-sdk/src/common/util/parse/date"),p=e("../../components/components.tooltip"),u=p.JSTooltip,h=(p.tooltipModule,function(e){return e.state.previousFireTime?c.isoTimestampToLocalizedTimestampByTimezone(e.state.previousFireTime):""}),b=function(e){var t=e.state.value;return t!==d.NORMAL&&t!==d.EXECUTING?l["report.scheduling.list.label.disabled"]:e.state.nextFireTime?c.isoTimestampToLocalizedTimestampByTimezone(e.state.nextFireTime):""},T=function(e){var t=e.state.value;return t===d.NORMAL||t===d.EXECUTING};i.exports=n.View.extend({tagName:"li",className:"jobs first leaf",events:{"click [name=editJob]":"edit","click [name=deleteJob]":"remove","change [name=enableJob]":"enable"},initialize:function(e){this.options=o.extend({},e);var t=this.options.masterViewMode?a:s;this.template=o.template(t),this.model.on("change",this.render,this)},render:function(){var e=this.model.toJSON();return this.$el.html(this.template({model:e,i18n:l,lastRanDate:h(e),nextRunDate:b(e),isJobEnabled:T(e)})),this.model.collection&&this.model.collection.options.masterViewMode&&this.addToolTipToListElement(this.$el),this},addToolTipToListElement:function(e){var t=e.find(".jobResource")[0],i=e.find(".jobResourcePath")[0];t.update(r.hardEscape(this.model.attributes.reportLabel)),i.update(r.hardEscape(this.model.attributes.reportUnitURI)),new u(t,{text:r.hardEscape(this.model.attributes.reportLabel)}),new u(i,{text:r.hardEscape(this.model.attributes.reportUnitURI)})},edit:function(){this.trigger("editJobPressed",this.model.get("id"))},remove:function(){var e=this,t=l["report.scheduling.editing.job.confirm.delete"].replace("{name}",r.hardEscape(this.model.get("label"))).replace("{newline}","<br><br>"),i=new m({title:l["report.scheduling.editing.job.confirm.title"],text:t,additionalCssClasses:"schedulerJobRemoveDialog"});this.listenTo(i,"button:yes",function(){e.model.destroy()}),i.open()},enable:function(e){this.model.state(e.target.checked)}})});