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

define(["require","exports","module","prototype","../util/utils.common","../core/core.events.bis","../core/core.layout"],function(e,t,i){var a=e("prototype"),n=a.$,r=e("../util/utils.common"),o=r.matchAny,l=e("../core/core.events.bis"),s=e("../core/core.layout"),u={flowExecutionKey:"",messages:[],initialize:function(){this._stepDisplay=n("stepDisplay"),this._wizardNav=n("wizardNav"),this.initEvents()},initEvents:function(){n("frame").observe("click",function(e){var t=e.element();if(o(t,["#add"])&&(n("ar").writeAttribute("name","_eventId_addItem"),n("extra").submit()),"A"==t.nodeName&&"add"!=t.identify()){var i=t.identify();n("itemToDelete").setValue(i),n("ar").writeAttribute("name","_eventId_removeItem"),n("extra").submit()}}.bindAsEventListener(this)),n("frame").observe("keyup",function(e){var t=e.element();o(t,["#value","#labelID"])&&this.allowSubmit()}.bindAsEventListener(this))},allowSubmit:function(){n("labelID").getValue().blank()?(l.disable("save"),n("save").writeAttribute(s.DISABLED_ATTR_NAME,s.DISABLED_ATTR_NAME)):(l.enable("save"),n("save").writeAttribute(s.DISABLED_ATTR_NAME,null)),n("value").getValue().blank()?(l.disable("add"),n("add").writeAttribute(s.DISABLED_ATTR_NAME,s.DISABLED_ATTR_NAME)):(l.enable("add"),n("add").writeAttribute(s.DISABLED_ATTR_NAME,null))}};void 0===e&&document.observe("dom:loaded",function(){u.initialize(),u.allowSubmit()}),i.exports=u});