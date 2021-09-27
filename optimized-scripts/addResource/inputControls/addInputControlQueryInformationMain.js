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

define("addResource/addinputcontrol.queryextra",["require","exports","module","prototype","../util/utils.common","../core/core.events.bis","../core/core.layout"],function(e,t,i){var a=e("prototype"),r=a.$,n=e("../util/utils.common"),o=n.matchAny,u=e("../core/core.events.bis"),d=e("../core/core.layout"),l={flowExecutionKey:"",messages:[],initialize:function(){this._stepDisplay=r("stepDisplay"),this._wizardNav=r("wizardNav"),this.initEvents()},initEvents:function(){r("frame").observe("click",function(e){var t=e.element();if(o(t,["#add"])&&(r("ar").writeAttribute("name","_eventId_addItem"),r("extra").submit()),"A"==t.nodeName&&"add"!=t.identify()){var i=t.identify();r("itemToDelete").setValue(i),r("ar").writeAttribute("name","_eventId_removeItem"),r("extra").submit()}}.bindAsEventListener(this)),r("frame").observe("keyup",function(e){var t=e.element();o(t,["#value","#labelID"])&&this.allowSubmit()}.bindAsEventListener(this))},allowSubmit:function(){r("labelID").getValue().blank()?(u.disable("save"),r("save").writeAttribute(d.DISABLED_ATTR_NAME,d.DISABLED_ATTR_NAME)):(u.enable("save"),r("save").writeAttribute(d.DISABLED_ATTR_NAME,null)),r("value").getValue().blank()?(u.disable("add"),r("add").writeAttribute(d.DISABLED_ATTR_NAME,d.DISABLED_ATTR_NAME)):(u.enable("add"),r("add").writeAttribute(d.DISABLED_ATTR_NAME,null))}};void 0===e&&document.observe("dom:loaded",function(){l.initialize(),l.allowSubmit()}),i.exports=l}),define("addResource/inputControls/addInputControlQueryInformationMain",["require","exports","module","requirejs-domready","../../addResource/addinputcontrol.queryextra"],function(e,t,i){var a=e("requirejs-domready"),r=e("../../addResource/addinputcontrol.queryextra");a(function(){r.initialize(),r.allowSubmit()})});