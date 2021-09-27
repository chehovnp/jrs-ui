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

define(["require","exports","module","prototype","../core/core.layout","../components/components.webHelp","./administer.base","../util/utils.common","../core/core.events.bis","../components/components.dialogs","../namespace/namespace","jquery"],function(e,t,o){var n=e("prototype"),s=n.$,a=e("../core/core.layout"),c=e("../components/components.webHelp"),i=e("./administer.base"),r=e("../util/utils.common"),l=r.matchAny,u=r.matchMeOrUp,m=e("../core/core.events.bis"),p=e("../components/components.dialogs"),d=e("../namespace/namespace"),f=d.isProVersion,v=e("jquery"),_={SAVE_PFX:"save",CANCEL_PFX:"cancel",ERROR_PFX:"error_",INPUT_PFX:"input_",BUTTON_FLASH:"flushOLAPCache",initialize:function(){v("#serverSettingsMenu").length>0&&a.resizeOnClient("serverSettingsMenu","settings"),c.setCurrentContext("admin"),s("display").observe("click",function(e){var t=e.element();for(var o in i.menuActions)if(l(t,[o],!0)&&!u(t.parentNode,"li").hasClassName("selected"))return void(document.location=i.menuActions[o]());if(l(t,["#"+_.BUTTON_FLASH],!0))return Event.stop(e),void _.flushCache();var n=l(t,["#"+_.SAVE_PFX],!0);if(n){Event.stop(e);var s=n.name;return void _.saveValue(s)}n=l(t,["#"+_.CANCEL_PFX],!0),n&&(Event.stop(e),_.resetValue(n.name,n.value)),l(t,[".checkBox > input","select"])&&_.switchButtons(t,!0)}),s("display").observe("keydown",function(e){var t=e.element();t.match("input")&&_.switchButtons(t,!0)})},saveValue:function(e){var t=s(_.INPUT_PFX+e),o={name:e,value:"checkbox"==t.type?t.checked:t.value,_flowExecutionKey:i.flowExecutionKey,_eventId:"saveSingleProperty"},n="flow.html?"+Object.toQueryString(o);i._sendRequest(n,o,_._updateCallback)},resetValue:function(e,t){var o=s(_.INPUT_PFX+e);"checkbox"==o.type?o.checked="true"==String(t):o.value=t,_.switchButtons(o,!1),s(document.body).select('[for="'+_.INPUT_PFX+e+'"]')[0].removeClassName(a.ERROR_CLASS)},flushCache:function(){var e=f()?"flow.html?_flowExecutionKey="+i.flowExecutionKey+"&_eventId=flushCache":"flush.html";i._sendRequest(e,null,_._flushCallback)},switchButtons:function(e,t){"string"==typeof e&&(e=s(_.INPUT_PFX+e)),_._enableButton(s(u(e,"li")).select("button")[0],t),_._enableButton(s(u(e,"li")).select("button")[1],t)},_enableButton:function(e,t){t?m.enable(e):m.disable(e)},_updateCallback:function(e){e.error?(s(document.body).select('[for="'+_.INPUT_PFX+e.optionName+'"]')[0].addClassName(a.ERROR_CLASS),s(_.ERROR_PFX+e.optionName).update(i.getMessage(e.error))):(_.switchButtons(e.optionName,!1),p.systemConfirm.show(i.getMessage(e.result)),s(document.body).select('[for="'+_.INPUT_PFX+e.optionName+'"]')[0].removeClassName(a.ERROR_CLASS))},_flushCallback:function(e){e.error?p.systemConfirm.show(i.getMessage("JAM_018_ERROR")+": "+e.error):p.systemConfirm.show(i.getMessage(e.result))}};void 0===e&&document.observe("dom:loaded",_.initialize.bind(_)),o.exports=_});