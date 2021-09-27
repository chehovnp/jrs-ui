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

define(["require","exports","module","jquery","underscore","bundle!all","runtime_dependencies/js-sdk/src/jrs.configs","backbone","../../../components/components.pickers","../../../resource/resource.base","text!../../template/editor/outputTabTemplate.htm","runtime_dependencies/bi-repository/src/bi/repository/dialog/resourceChooser/RepositoryChooserDialogFactory","runtime_dependencies/bi-repository/src/bi/repository/enum/repositoryResourceTypes","settings!treeComponent"],function(t,e,o){var r=t("jquery"),s=t("underscore"),n=t("bundle!all"),i=t("runtime_dependencies/js-sdk/src/jrs.configs"),a=t("backbone"),l=(t("../../../components/components.pickers"),t("../../../resource/resource.base"),t("text!../../template/editor/outputTabTemplate.htm")),u=t("runtime_dependencies/bi-repository/src/bi/repository/dialog/resourceChooser/RepositoryChooserDialogFactory"),p=t("runtime_dependencies/bi-repository/src/bi/repository/enum/repositoryResourceTypes"),c=t("settings!treeComponent");o.exports=a.View.extend({events:{"click .ftp-test":"testFTPConnection","click [name=outputRepositoryButton]":"outputRepositoryButtonClick","click [name=sshKeyPathButton]":"sshKeyPathButtonClick","change [name=outputRepository]":"fixUriInput","change [name=sshKeyPath]":"fixUriInput"},binding:[{attr:"baseOutputFilename",control:"baseOutputFilename"},{attr:"outputTimeZone",control:"timeZone"},{attr:"outputLocale",control:"outputLocale"},{attr:"outputFormats/outputFormat",control:"outputFormats"},{attr:"repositoryDestination/outputDescription",control:"outputDescription"},{attr:"repositoryDestination/overwriteFiles",control:"overwriteFiles"},{attr:"repositoryDestination/sequentialFilenames",control:"sequentialFilenames"},{attr:"repositoryDestination/timestampPattern",control:"timestampPattern"},{attr:"repositoryDestination",control:"timestampPattern",depends:"repositoryDestination/sequentialFilenames"},{attr:"repositoryDestination/saveToRepository",control:"outputToRepository"},{attr:"repositoryDestination",control:"outputRepository, outputRepositoryButton",depends:"repositoryDestination/saveToRepository"},{attr:"repositoryDestination/folderURI",control:"outputRepository"},{attr:"repositoryDestination",control:"outputHostFileSystem",depends:"repositoryDestination/outputLocalFolder",disabled:!("true"===i.enableSaveToHostFS||!0===i.enableSaveToHostFS)},{attr:"repositoryDestination/outputLocalFolder",control:"outputToHostFileSystem",getter:function(t){return!1===t?null:""},setter:function(t){return""===t||!!t}},{attr:"repositoryDestination/outputLocalFolder",control:"outputHostFileSystem"},{attr:"repositoryDestination/outputFTPInfo/enabled",control:"outputToFTPServer",getter:function(t){return!1===t&&this.$el.find("#ftpServerOutput").find(".error").removeClass("error"),t}},{attr:"repositoryDestination/outputFTPInfo",control:"ftpAddress, ftpDirectory, ftpUsername, ftpPassword, ftpTestButton, ftpPort, ftpProtocol, sshKeyEnabled, sshKeyPath, sshKeyPathButton, sshPassphrase",depends:"repositoryDestination/outputFTPInfo/enabled"},{attr:"repositoryDestination/outputFTPInfo/serverName",control:"ftpAddress"},{attr:"repositoryDestination/outputFTPInfo/folderPath",control:"ftpDirectory"},{attr:"repositoryDestination/outputFTPInfo/userName",control:"ftpUsername",setter:function(t){return"anonymous"==t?null:t}},{attr:"repositoryDestination/outputFTPInfo/password",control:"ftpPassword"},{attr:"repositoryDestination/outputFTPInfo/port",control:"ftpPort"},{attr:"repositoryDestination/outputFTPInfo/type",control:"ftpProtocol",setter:function(t){return this.$el.find(".control[data-ftp-type]").addClass("hidden"),t&&"sftp"===t&&this.$el.find(".control[data-ftp-type=sftp]").removeClass("hidden"),t}},{attr:"repositoryDestination/outputFTPInfo/sshKeyEnabled",control:"sshKeyEnabled"},{attr:"repositoryDestination/outputFTPInfo/sshKey",control:"sshKeyPath"},{attr:"repositoryDestination/outputFTPInfo/sshPassphrase",control:"sshPassphrase"},{attr:"repositoryDestination/outputFTPInfo",control:"sshKeyPath, sshKeyPathButton, sshPassphrase",depends:"repositoryDestination/outputFTPInfo/sshKeyEnabled",setter:function(t){return t&&!!this.$el.find("[name=outputToFTPServer]").filter(":checked").map(function(){return r(this).val()}).get()[0]}}],availableFormats:i.availableReportJobOutputFormats||[],initialize:function(t){this.options=s.extend({},t);var e=this;this.model.on("change:repositoryDestination",function(t,o){var r=t.get("repositoryDestination");e.$el.find("[name=ftpPort]").val(r.outputFTPInfo.port)})},isFormatAvailable:function(t){return s.contains(this.availableFormats,t)},getFolderChooserDialog:function(){if(this.folderChooserDialog)return this.folderChooserDialog;var t=this,e=u.getDialog("folder");return this.folderChooserDialog=new e({treeBufferSize:parseInt(c.treeLevelLimit,10),setMinSizeAsSize:!0}),this.listenTo(this.folderChooserDialog,"close",function(){var e;this.folderChooserDialog.selectedResource&&this.folderChooserDialog.selectedResource.resourceUri&&(e=this.folderChooserDialog.selectedResource.resourceUri,t.$el.find("[name=outputRepository]").val(e).trigger("change"))}),this.folderChooserDialog.setDefaultSelectedItem(this.model.get("repositoryDestination").folderURI),this.folderChooserDialog},outputRepositoryButtonClick:function(){this.getFolderChooserDialog().open()},getSshKeyChooserDialog:function(){if(this.sshKeyChooserDialog)return this.sshKeyChooserDialog;var t=this,e=u.getDialog("item");this.sshKeyChooserDialog=new e({disableListTab:!0,treeBufferSize:parseInt(c.treeLevelLimit,10),resourcesTypeToSelect:[p.SECURE_FILE]}),this.listenTo(this.sshKeyChooserDialog,"close",function(){var e;this.sshKeyChooserDialog.selectedResource&&this.sshKeyChooserDialog.selectedResource.resourceUri&&(e=this.sshKeyChooserDialog.selectedResource.resourceUri,t.$el.find("[name=sshKeyPath]").val(e).trigger("change"))});var o=this.model.get("repositoryDestination").outputFTPInfo,r=(o||{}).sshKey;return this.sshKeyChooserDialog.setDefaultSelectedItem(r),this.sshKeyChooserDialog},sshKeyPathButtonClick:function(){this.getSshKeyChooserDialog().open()},fixUriInput:function(t){var e=r(t.currentTarget),o=e.val();if(this.model.isValidUri(o))return""===o||s.startsWith(o,"/")?s.startsWith(o,"//")?void e.val(o.substring(1,o.length)).trigger("change"):o.length>1&&s.endsWith(o,"/")?void e.val(o.substring(0,o.length-1)).trigger("change"):void 0:void e.val("/"+o).trigger("change")},render:function(){this._renderTemplate(),this._initializeBinding()},_renderTemplate:function(){var t=s.extend({},{_:s,i18n:n,availableFormats:this.availableFormats,timeZones:i.timeZones,locales:i.avaliableLocales,localesName:i.avaliableLocalesFullName},this.model.attributes);this.setElement(r(s.template(l,t)))},_initializeBinding:function(){var t=this;this.$el.find("[name=outputToHostFileSystem]").attr("disabled","true"!==i.enableSaveToHostFS&&!0!==i.enableSaveToHostFS&&"disabled"),this.map=s.map(this.binding,s.clone),s.each(this.map,function(e){if(e.control=e.control.split(","),e.control=e.control.map(function(t){return"[name="+t+"]"}),e.control=t.$el.find(e.control.join(",")),e.attr&&(e.attr=e.attr.split("/")),e.depends&&"!"===e.depends[0]&&(e.invert=!0,e.depends=e.depends.substr(1)),e.depends&&!e.attr){e.depends=t.$el.find("[name="+e.depends+"]");var o=function(){var o=e.setter?e.setter.call(t,e.depends):e.depends.val(),r=e.disabled||(e.invert?!!o:!o);e.control.attr("disabled",!!r&&"disabled")};return e.depends.on("change",o),o()}t.model.on("change:"+e.attr[0],function(o,r){if(r=o.value(e.attr.join("/")),e.setter&&(r=e.setter.call(t,r)),e.depends){var s=o.value(e.depends);e.setter?s=e.setter.call(t,s):""===s&&(s=!0);var n=e.disabled||(e.invert?!!s:!s);return e.control.attr("disabled",!!n&&"disabled")}e.control.is("[type=checkbox]")&&1===e.control.length?e.control.prop("checked",r):e.control.is("[type=radio]")?e.control.filter("[value="+r+"]").prop("checked",!0):e.control.val(r)}),e.control.length&&!e.depends&&e.control.on("change",function(){var o,n,i,a;if(n=e.control.is("[type=checkbox]")?e.control.filter(":checked").map(function(){return r(this).val()}).get():e.control.val(),e.control.is("[type=checkbox]")&&1===e.control.length&&(n=!!n[0]),e.control.is("[type=radio]")&&(n=e.control.filter(":checked").val()),e.getter&&(n=e.getter.call(t,n,s.clone(t.model.value(e.attr.join("/"))))),e.attr.length>1){a=i=s.clone(t.model.get(e.attr[0]));for(var l=1,u=e.attr.length-1;l<u;l++)o=e.attr[l],a[o]=a[o]?s.clone(a[o]):{},a=a[o];a[e.attr[e.attr.length-1]]=n,"repositoryDestination/outputFTPInfo/type"===e.attr.join("/")&&(a.port=t.model.ftpPortDefaults[n])}t.model.update(e.attr[0],i||n)})})},testFTPConnection:function(){r("#ftpTestButton").addClass("disabled"),this.$el.find("#ftpServerOutput").find(".error").removeClass("error"),this.model.testFTPConnection(function(){r("#ftpTestButton").removeClass("disabled")})}})});