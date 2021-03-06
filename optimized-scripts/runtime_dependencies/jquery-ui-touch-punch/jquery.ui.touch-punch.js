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

(function(o,t){if("function"!=typeof define||!define.amd)throw"jQuery UI is not loaded.";define(["jquery","jquery-ui/widget","jquery-ui/widgets/mouse"],o)})(function(o){function t(o,t){if(!(o.originalEvent.touches.length>1)){o.preventDefault();var e=o.originalEvent.changedTouches[0],u=document.createEvent("MouseEvents");u.initMouseEvent(t,!0,!0,window,1,e.screenX,e.screenY,e.clientX,e.clientY,!1,!1,!1,!1,0,null),o.target.dispatchEvent(u)}}if(o.support.touch="ontouchend"in document,o.support.touch){var e,u=o.ui.mouse.prototype,n=u._mouseInit,c=u._mouseDestroy;u._touchStart=function(o){var u=this;!e&&u._mouseCapture(o.originalEvent.changedTouches[0])&&(e=!0,u._touchMoved=!1,t(o,"mouseover"),t(o,"mousemove"),t(o,"mousedown"))},u._touchMove=function(o){e&&(this._touchMoved=!0,t(o,"mousemove"))},u._touchEnd=function(o){e&&(t(o,"mouseup"),t(o,"mouseout"),this._touchMoved||t(o,"click"),e=!1)},u._mouseInit=function(){var t=this;t.element.bind({touchstart:o.proxy(t,"_touchStart"),touchmove:o.proxy(t,"_touchMove"),touchend:o.proxy(t,"_touchEnd")}),n.call(t)},u._mouseDestroy=function(){var t=this;t.element.unbind({touchstart:o.proxy(t,"_touchStart"),touchmove:o.proxy(t,"_touchMove"),touchend:o.proxy(t,"_touchEnd")}),c.call(t)}}}),this.jQuery;