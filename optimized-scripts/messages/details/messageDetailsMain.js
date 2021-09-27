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

define("messages/details/messageDetails",["require","exports","module","../../components/components.toolbarButtons","../../core/core.layout","../../util/utils.common","runtime_dependencies/js-sdk/src/common/util/xssUtil","prototype"],function(e,t,s){var i=e("../../components/components.toolbarButtons"),n=e("../../core/core.layout"),o=e("../../util/utils.common"),a=o.matchAny,c=e("runtime_dependencies/js-sdk/src/common/util/xssUtil"),l=e("prototype"),u=l.$,r={_flowExecutionKey:null,_message:null,toolbar:{_buttons:null,_id:"toolbar",initialize:function(){i.initialize({}),this._buttons=document.body.select(n.TOOLBAR_CAPSULE_PATTERN),this._initEventHandlers()},refresh:function(){this._buttons.each(function(e){i.setButtonState(e,!0)}.bind(this))},_initEventHandlers:function(){u(this._id).observe("click",function(e){var t=a(e.element(),[n.BUTTON_PATTERN],!0);document.location="flow.html?_flowExecutionKey="+r._flowExecutionKey+"&_eventId="+t.identify()}.bindAsEventListener(this))}},initialize:function(e){this._flowExecutionKey=e.flowExecutionKey,this._message=e.message,this._process(),this.toolbar.initialize()},_process:function(){u("subject").update(c.hardEscape(this._message.subject)),u("date").update(c.hardEscape(this._message.date)),u("component").update(c.hardEscape(this._message.component)),u("message").update(c.hardEscape(this._message.message))}};void 0===e&&document.observe("dom:loaded",function(){r.initialize(window.localContext.initOptions)}),s.exports=r}),define("messages/details/messageDetailsMain",["require","exports","module","requirejs-domready","./messageDetails","runtime_dependencies/js-sdk/src/jrs.configs"],function(e,t,s){var i=e("requirejs-domready"),n=e("./messageDetails"),o=e("runtime_dependencies/js-sdk/src/jrs.configs");i(function(){n.initialize(o.messageDetailsInitOptions)})});