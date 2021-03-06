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

define(["require","exports","module","prototype","../util/utils.common","../actionModel/actionModel.modelGenerator","../core/core.layout","../actionModel/actionModel.primaryNavigation"],function(e,o,t){var n=e("prototype"),i=n.$,d=e("../util/utils.common"),r=d.Keys,v=d.isMetaHeld,E=d.isShiftHeld,y=d.matchMeOrUp,a=e("../actionModel/actionModel.modelGenerator"),k=e("../core/core.layout"),c=e("../actionModel/actionModel.primaryNavigation"),_={ignoreKeyDown:[r.DOM_VK_SHIFT,r.DOM_VK_CONTROL,r.DOM_VK_ALT],noBubbleOnKeyUp:[r.DOM_VK_F10]};document.observe("keyup",function(e){_.noBubbleOnKeyUp.include(e.keyCode)&&Event.stop(e)}),document.observe("keydown",function(e){if(!_.ignoreKeyDown.include(e.keyCode)){var o=e.element();return e.keyCode==Event.KEY_RETURN?void o.fire("key:enter",{targetEvent:e,node:o}):e.shiftKey&&e.keyCode==r.DOM_VK_F10?(Event.stop(e),void o.fire("key:contextMenu",{targetEvent:e,node:o})):e.keyCode==Event.KEY_LEFT?void o.fire("key:left",{targetEvent:e,node:o}):e.keyCode==Event.KEY_RIGHT?void o.fire("key:right",{targetEvent:e,node:o}):e.keyCode==Event.KEY_UP?void o.fire("key:up",{targetEvent:e,node:o}):e.keyCode==Event.KEY_DOWN?void o.fire("key:down",{targetEvent:e,node:o}):e.keyCode==Event.KEY_PAGEUP?void o.fire("key:pageup",{targetEvent:e,node:o}):e.keyCode==Event.KEY_PAGEDOWN?void o.fire("key:pagedown",{targetEvent:e,node:o}):e.keyCode==Event.KEY_HOME?void o.fire("key:home",{targetEvent:e,node:o}):e.keyCode==Event.KEY_END?void o.fire("key:end",{targetEvent:e,node:o}):v(e)&&89==e.keyCode?void o.fire("key:redo",{targetEvent:e,node:o}):v(e)&&90==e.keyCode?void o.fire("key:undo",{targetEvent:e,node:o}):e.keyCode==Event.KEY_ESC?void o.fire("key:escape",{targetEvent:e,node:o}):e.keyCode==Event.KEY_TAB?void o.fire("key:tab",{targetEvent:e,node:o}):e.keyCode==Event.KEY_DELETE?void o.fire("key:delete",{targetEvent:e,node:o}):65==e.keyCode&&v(e)?void o.fire("key:selectAll",{targetEvent:e,node:o}):83==e.keyCode&&v(e)&&!E(e)?void o.fire("key:save",{targetEvent:e,node:o}):76==e.keyCode&&v(e)&&E(e)?void o.fire("key:chartZoomIn",{targetEvent:e,node:o}):79==e.keyCode&&v(e)&&E(e)?void o.fire("key:chartZoomOut",{targetEvent:e,node:o}):void 0}}),document.observe("key:esc",function(e){a.isMenuShowing()&&a.hideActionModelMenu()}),document.observe("key:enter",function(e){var o,t=e.element(),n=i(k.MENU_ID);if(k.isVisible(n)){Event.stop(e);var d=n.select(":focus,."+k.HOVERED_CLASS)[0];if(d){var r=d;d.match(k.MENU_LIST_PATTERN)||(r=d.up(k.MENU_LIST_PATTERN)),setTimeout(r.onmouseup.curry(e.memo.targetEvent),0)}}(o=y(t,k.NAVIGATION_PATTERN))&&(o.identify()==k.MAIN_NAVIGATION_HOME_ITEM_ID?(Event.stop(e),c.navigationOption("home")):o.identify()==k.MAIN_NAVIGATION_LIBRARY_ITEM_ID&&(Event.stop(e),c.navigationOption("library")))}),t.exports=_});