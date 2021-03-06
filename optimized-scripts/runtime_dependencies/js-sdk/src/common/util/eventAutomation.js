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

define(["require","exports","module","./browserDetection","jquery"],function(e,t,n){var i=e("./browserDetection"),c=e("jquery");n.exports={mouseEventOptions:{bubbles:!0,cancelable:!0,view:document.defaultView,detail:0,screenX:0,screenY:0,clientX:0,clientY:0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,button:0,relatedTarget:null,srcElement:null},triggerNativeEvent:function(e,t,n){var s,r=i.isIE();if(t=t||(r?document.documentElement:window),document.createEvent){var o;switch(e){case"click":case"doubleclick":case"mousedown":case"mousemove":case"mouseout":case"mouseover":case"mouseup":o=c.extend({},this.mouseEventOptions,n),o.srcElement=t,"function"==typeof MouseEvent?s=new MouseEvent(e,o):(s=document.createEvent("MouseEvents"),s.initMouseEvent(e,o.bubbles,o.cancelable,o.view,o.detail,o.screenX,o.screenY,o.clientX,o.clientY,o.ctrlKey,o.altKey,o.shiftKey,o.metaKey,o.button,o.relatedTarget));break;default:o=c.extend({},this.eventOptions,n),o.srcElement=t,s=document.createEvent("HTMLEvents"),s.initEvent(e,o.bubble,o.cancelable)}t.dispatchEvent(s)}else s=document.createEventObject(),s.srcElement=t,"click"==e&&void 0!==t.click?t.click():t.fireEvent("on"+e,s)},simulateClickSequence:function(e){this.triggerNativeEvent("mousedown",e),this.triggerNativeEvent("mouseup",e),this.triggerNativeEvent("click",e)},simulateDoubleClickSequence:function(e){this.triggerNativeEvent("mousedown",e),this.triggerNativeEvent("mouseup",e),this.triggerNativeEvent("click",e),this.triggerNativeEvent("mousedown",e),this.triggerNativeEvent("mouseup",e),this.triggerNativeEvent("click",e),this.triggerNativeEvent("dblclick",e)}}});