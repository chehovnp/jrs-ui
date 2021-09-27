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

define(["require","exports","module","underscore"],function(e,n,t){var i=e("underscore"),d=function(e){return this.initialize(e),this};i.extend(d.prototype,{systemKeyCodes:[16,17,18,91],keydownHandlers:{38:"onUpKey",40:"onDownKey",13:"onEnterKey",27:"onEscKey",36:"onHomeKey",35:"onEndKey",9:"onTabKey",33:"onPageUpKey",34:"onPageDownKey"},preventKeydownHandlers:{33:"onPageUpKey",34:"onPageDownKey"},initialize:function(e){i.bindAll(this,"onKeydown"),e.keydownHandlers&&(this.keydownHandlers=e.keydownHandlers),this.stopPropagation=e.stopPropagation,this.keydownTimeout=e.keydownTimeout||200,this.context=e.context,this.deferredKeydownHandler=e.deferredKeydownHandler,this.immediateHandleCondition=e.immediateHandleCondition,this.immediateKeydownHandler=e.immediateKeydownHandler},onKeydown:function(e){this._isSystemKeyPressed(e)||(this._canImmediatelyHandleKeyboardEvent(e)?this._immediatelyHandleKeyboardEvent(e):this.deferredHandleKeyboardEvent(e),this.stopPropagation&&e.stopPropagation())},deferredHandleKeyboardEvent:function(e){this.deferredKeydownHandler&&(this.keydownTimeout>0?(clearTimeout(this.deferredTimeout),this.deferredTimeout=setTimeout(i.bind(this.deferredKeydownHandler,this.context,e),this.keydownTimeout)):this.deferredKeydownHandler.call(this.context,e))},_isSystemKeyPressed:function(e){return i.indexOf(this.systemKeyCodes,e.which)>-1},_immediateHandleCondition:function(e){return this.immediateHandleCondition&&this.immediateHandleCondition.call(this.context,e)},_canImmediatelyHandleKeyboardEvent:function(e){var n=this.keydownHandlers[""+e.which];return n&&"function"==typeof this.context[n]||this._immediateHandleCondition(e)},_immediatelyHandleKeyboardEvent:function(e){var n=this.keydownHandlers[""+e.which];n&&"function"==typeof this.context[n]?(this.context[n].call(this.context,e),this._immediatePreventdefaultHandler(e)):this._immediateHandleCondition(e)&&this.immediateKeydownHandler&&this.immediateKeydownHandler.call(this.context,e)},_immediatePreventdefaultHandler:function(e){this.preventKeydownHandlers[""+e.which]&&e.preventDefault()}}),t.exports=d});