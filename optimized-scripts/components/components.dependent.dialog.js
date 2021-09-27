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

define(["require","exports","module","./components.dialogs","underscore","../core/core.layout","./list.base","runtime_dependencies/js-sdk/src/common/util/xssUtil","jquery"],function(e,t,n){var s=e("./components.dialogs"),i=e("underscore"),a=e("../core/core.layout"),c=e("./list.base"),d=c.dynamicList,l=e("runtime_dependencies/js-sdk/src/common/util/xssUtil"),o=e("jquery");s.dependentResources={dependenciesPanel:null,show:function(e,t,n){this.dependenciesPanel=o("#dependencies"),this._$title=this.dependenciesPanel.find(".content .header .title"),n.dialogTitle&&(this._titleBackup=this._$title.html(),this._$title.html(n.dialogTitle)),s.popup.show(this.dependenciesPanel[0]),this._changeMessage(n),this._switchButtons(n);var a=this._initList(e);this.dependenciesPanel.on("click",function(e){var n=o(e.target).closest("button").attr("id"),c=t&&t[n];i.include(["dependenciesBtnSave","dependenciesBtnSaveAs","dependenciesBtnOk","dependenciesBtnCancel"],n)&&(s.dependentResources.hide(),a.setItems([]),e.stopPropagation(),c&&c())})},hide:function(){this.dependenciesPanel&&(this.dependenciesPanel.off("click"),s.popup.hide(this.dependenciesPanel[0]),this.dependenciesPanel=null),this._titleBackup&&this._$title&&(this._$title.html(this._titleBackup),this._titleBackup=null)},_changeMessage:function(e){o("#topMessage").html(e.topMessage),o("#bottomMessage").html(e.bottomMessage)},_initList:function(e){var t=new d.List("dependenciesList",{listTemplateDomId:"tabular_oneColumn",itemTemplateDomId:"tabular_oneColumn:leaf"}),n=[];return e&&(n=e.collect(function(e){var t=new d.ListItem({cssClassName:a.LEAF_CLASS,value:e});return t.processTemplate=function(e){var t,n=e.select(".uri")[0];return t="string"==typeof this.getValue()?this.getValue():this.getValue().uristring?this.getValue().uristring:this.getValue().URIString,n.update(l.hardEscape(t)),e},t})),t.setItems(n),t.show(),t},_switchButtons:function(e){var t,n={save:o("#dependenciesBtnSave"),saveAs:o("#dependenciesBtnSaveAs"),ok:o("#dependenciesBtnOk"),cancel:o("#dependenciesBtnCancel")};t=e.buttons?e.buttons:e.okOnly?["ok"]:e.canSave?["save","saveAs","cancel"]:["ok","cancel"],i.each(n,function(e,n){t.indexOf(n)<0?e.addClass("hidden"):e.removeClass("hidden")})}},n.exports=s.dependentResources});