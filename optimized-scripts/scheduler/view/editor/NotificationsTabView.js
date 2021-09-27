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

define(["require","exports","module","jquery","underscore","bundle!all","backbone","text!../../template/editor/notificationsTabTemplate.htm"],function(e,t,a){var s=e("jquery"),n=e("underscore"),i=e("bundle!all"),o=e("backbone"),c=e("text!../../template/editor/notificationsTabTemplate.htm");a.exports=o.View.extend({events:{"change [name=to_suc]":"to_suc_Change","change [name=cc_suc]":"cc_suc_Change","change [name=bcc_suc]":"bcc_suc_Change","change [name=subject_suc]":"subject_suc_Change","change [name=message_suc]":"message_suc_Change","change [name=resultSendTypeRadio]":"setResultSendType","change [name=includeHtmlReport]":"setResultSendType","change [name=dontSendEmptyReport]":"dont_send_empty_report_Change","change [name=job_status_to]":"job_status_to_Change","change [name=job_status_subject]":"job_status_subject_Change","change [name=job_status_success_message]":"job_status_success_message_Change","change [name=job_status_failed_message]":"job_status_failed_message_Change","change [name=send_success_notification]":"twoCheckboxes_Change","change [name=send_failure_notification]":"twoCheckboxes_Change","change [name=include_report]":"include_report_Change","change [name=include_stack_trace]":"include_stack_trace_Change"},initialize:function(e){var t=this;this.options=e,this.model.on("change:mailNotification",function(e){var a=e.get("mailNotification");if(a){t.$el.find("[name=to_suc]").val(a.toAddresses.address),t.$el.find("[name=cc_suc]").val(a.ccAddresses.address),t.$el.find("[name=bcc_suc]").val(a.bccAddresses.address),t.$el.find("[name=subject_suc]").val(a.subject),t.$el.find("[name=message_suc]").val(a.messageText),t.message_suc_DisabledEnabled(e);var s=!1,n="";switch(a.resultSendType){case"SEND":s=!1,n="asRepoLinks";break;case"SEND_EMBED":s=!0,n="asAttachedFiles";break;case"SEND_EMBED_ZIP_ALL_OTHERS":s=!0,n="asAttachedZip";break;case"SEND_ATTACHMENT":s=!1,n="asAttachedFiles";break;case"SEND_ATTACHMENT_ZIP_ALL":s=!1,n="asAttachedZip"}t.$el.find("[name=resultSendTypeRadio]").filter("[value="+n+"]").prop("checked",!0),t.asRepoLinks_DisabledEnabled(e),t.$el.find("[name=includeHtmlReport]").prop("checked",s),t.includeHtmlReport_DisabledEnabled(e),t.$el.find("[name=dontSendEmptyReport]").prop("checked",a.skipEmptyReports)}}),this.model.on("change:alert",function(e){var a=e.get("alert");a&&(t.$el.find("[name=job_status_to]").val(a.toAddresses.address),t.$el.find("[name=send_success_notification]").prop("checked",-1!==a.jobState.indexOf("SUCCESS_ONLY")||-1!==a.jobState.indexOf("ALL")),t.$el.find("[name=send_failure_notification]").prop("checked",-1!==a.jobState.indexOf("FAIL_ONLY")||-1!==a.jobState.indexOf("ALL")),t.$el.find("[name=job_status_subject]").val(a.subject),t.$el.find("[name=job_status_success_message]").val(a.messageText),t.$el.find("[name=job_status_failed_message]").val(a.messageTextWhenJobFails),t.$el.find("[name=include_report]").prop("checked",!!a.includingReportJobInfo),t.$el.find("[name=include_stack_trace]").prop("checked",!!a.includingStackTrace))}),this.model.on("change:outputFormats",function(e,a){if(!(a.outputFormat.indexOf("HTML")>=0)){var s=t.model.get("mailNotification");if(s&&s.resultSendType&&("SEND_EMBED"===s.resultSendType||"SEND_EMBED_ZIP_ALL_OTHERS"===s.resultSendType)){var n="SEND",i=e.get("repositoryDestination");return i&&(i.saveToRepository||(n="SEND_ATTACHMENT")),void e.update("mailNotification",{resultSendType:n})}}t.includeHtmlReport_DisabledEnabled(e)}),this.model.on("change:repositoryDestination",function(e,a){if(!a.saveToRepository){var s=t.model.get("mailNotification");if(s&&s.resultSendType&&"SEND"===s.resultSendType)return void e.update("mailNotification",{resultSendType:"SEND_ATTACHMENT"})}t.asRepoLinks_DisabledEnabled(e)})},render:function(){this.setElement(s(n.template(c,{i18n:i})))},includeHtmlReport_DisabledEnabled:function(e){var t=!0,a=e.get("mailNotification");a&&"SEND"===a.resultSendType&&(t=!1);var s=e.get("outputFormats");s&&-1===s.outputFormat.indexOf("HTML")&&(t=!1),this.$el.find("[name=includeHtmlReport]").prop("disabled",!t&&"disabled")},message_suc_DisabledEnabled:function(e){var t=!0,a=e.get("mailNotification");a&&("SEND_EMBED"!==a.resultSendType&&"SEND_EMBED_ZIP_ALL_OTHERS"!==a.resultSendType||(t=!1)),this.$el.find("[name=message_suc]").prop("disabled",!t&&"disabled")},asRepoLinks_DisabledEnabled:function(e){var t=!0,a=e.get("repositoryDestination");a&&(a.saveToRepository||(t=!1)),this.$el.find("[name=resultSendTypeRadio][value=asRepoLinks]").prop("disabled",!t&&"disabled")},to_suc_Change:function(e){this.model.update("mailNotification",{toAddresses:{address:s(e.target).val()}})},cc_suc_Change:function(e){this.model.update("mailNotification",{ccAddresses:{address:s(e.target).val()}})},bcc_suc_Change:function(e){this.model.update("mailNotification",{bccAddresses:{address:s(e.target).val()}})},subject_suc_Change:function(e){this.model.update("mailNotification",{subject:s(e.target).val()})},message_suc_Change:function(e){this.model.update("mailNotification",{messageText:s(e.target).val()})},setResultSendType:function(e){var t=this.$el.find("[name=resultSendTypeRadio]").filter(":checked").val(),a=this.$el.find("[name=includeHtmlReport]").is(":checked"),s="";a?"asRepoLinks"===t?s="SEND":"asAttachedFiles"===t?s="SEND_EMBED":"asAttachedZip"===t&&(s="SEND_EMBED_ZIP_ALL_OTHERS"):"asRepoLinks"===t?s="SEND":"asAttachedFiles"===t?s="SEND_ATTACHMENT":"asAttachedZip"===t&&(s="SEND_ATTACHMENT_ZIP_ALL"),this.model.update("mailNotification",{resultSendType:s})},dont_send_empty_report_Change:function(e){this.model.update("mailNotification",{skipEmptyReports:s(e.target).is(":checked")})},job_status_to_Change:function(e){this.model.update("alert",{toAddresses:{address:s(e.target).val()}})},job_status_subject_Change:function(e){this.model.update("alert",{subject:s(e.target).val()})},twoCheckboxes_Change:function(e){var t=this.$el.find("[name=send_success_notification]").is(":checked"),a=this.$el.find("[name=send_failure_notification]").is(":checked"),s=[];t&&s.push("SUCCESS_ONLY"),a&&s.push("FAIL_ONLY"),0===s.length&&(s=["NONE"]),2===s.length&&(s=["ALL"]),s=s.join("|"),this.model.update("alert",{jobState:s})},job_status_success_message_Change:function(e){this.model.update("alert",{messageText:s(e.target).val()})},job_status_failed_message_Change:function(e){this.model.update("alert",{messageTextWhenJobFails:s(e.target).val()})},include_report_Change:function(e){this.model.update("alert",{includingReportJobInfo:s(e.target).is(":checked")})},include_stack_trace_Change:function(e){this.model.update("alert",{includingStackTrace:s(e.target).is(":checked")})}})});