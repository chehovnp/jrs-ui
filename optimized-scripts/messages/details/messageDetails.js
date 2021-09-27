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

define(["require","exports","module","../../components/components.toolbarButtons","../../core/core.layout","../../util/utils.common","runtime_dependencies/js-sdk/src/common/util/xssUtil","prototype"],function(e,t,o){var n=e("../../components/components.toolbarButtons"),i=e("../../core/core.layout"),s=e("../../util/utils.common"),c=s.matchAny,a=e("runtime_dependencies/js-sdk/src/common/util/xssUtil"),u=e("prototype"),l=u.$,d={_flowExecutionKey:null,_message:null,toolbar:{_buttons:null,_id:"toolbar",initialize:function(){n.initialize({}),this._buttons=document.body.select(i.TOOLBAR_CAPSULE_PATTERN),this._initEventHandlers()},refresh:function(){this._buttons.each(function(e){n.setButtonState(e,!0)}.bind(this))},_initEventHandlers:function(){l(this._id).observe("click",function(e){var t=c(e.element(),[i.BUTTON_PATTERN],!0);document.location="flow.html?_flowExecutionKey="+d._flowExecutionKey+"&_eventId="+t.identify()}.bindAsEventListener(this))}},initialize:function(e){this._flowExecutionKey=e.flowExecutionKey,this._message=e.message,this._process(),this.toolbar.initialize()},_process:function(){l("subject").update(a.hardEscape(this._message.subject)),l("date").update(a.hardEscape(this._message.date)),l("component").update(a.hardEscape(this._message.component)),l("message").update(a.hardEscape(this._message.message))}};void 0===e&&document.observe("dom:loaded",function(){d.initialize(window.localContext.initOptions)}),o.exports=d});