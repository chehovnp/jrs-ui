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

define(["require","exports","module","jquery","react","react-dom","./AttachableColorPicker"],function(e,o,t){function r(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}function i(e,o){for(var t=0;t<o.length;t++){var r=o[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n(e,o,t){return o&&i(e.prototype,o),t&&i(e,t),e}function a(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}var c=e("jquery"),l=e("react"),h=e("react-dom"),s=e("./AttachableColorPicker"),p=s.AttachableColorPicker,d={padding:{top:0,left:0},disableAlpha:!0,showTransparentPreset:!0,color:"",onChangeComplete:function(){},onHide:function(){},ColorPicker:p},C=function(){function e(o){var t=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:d;r(this,e),a(this,"attachTo",void 0),a(this,"options",void 0),a(this,"color",void 0),a(this,"colorPickerContainerWrapper",void 0),a(this,"onChangeCompleteWrapper",void 0),a(this,"onHideWrapper",void 0),a(this,"ColorPicker",void 0),a(this,"boundOnAttachElementClick",void 0),this.options=i,this.attachTo=o,this.color=this.options.color,this.ColorPicker=this.options.ColorPicker||p,this.colorPickerContainerWrapper=document.createElement("div"),this.colorPickerContainerWrapper.className="jr-jColorPickerWrapper",this.boundOnAttachElementClick=this.onAttachElementClick.bind(this);var n=this.options,c=n.onChangeComplete,l=n.onHide;this.onChangeCompleteWrapper=function(e){t.color=e.hex,c(e)},this.onHideWrapper=function(){var e=t.getColorPickerState(!1);t.renderColorPicker(e),l&&l()};var h=this.getColorPickerState(!1);this.renderColorPicker(h)}return n(e,[{key:"renderColorPicker",value:function(e){this.remove(),this.attachTo.addEventListener("click",this.boundOnAttachElementClick),document.body.appendChild(this.colorPickerContainerWrapper),h.render(l.createElement(this.ColorPicker,e),this.colorPickerContainerWrapper)}},{key:"onAttachElementClick",value:function(){var e=this.getColorPickerState(!0);this.renderColorPicker(e)}},{key:"getColorPickerState",value:function(e){return{padding:this.options.padding,show:e,color:this.color,disableAlpha:this.options.disableAlpha,showTransparentPreset:this.options.showTransparentPreset,onChangeComplete:this.onChangeCompleteWrapper,onHide:this.onHideWrapper,attachTo:this.attachTo}}},{key:"setColor",value:function(e){this.color=e}},{key:"remove",value:function(){this.attachTo.removeEventListener("click",this.boundOnAttachElementClick),h.unmountComponentAtNode(this.colorPickerContainerWrapper),c(this.colorPickerContainerWrapper).remove()}}]),e}();t.exports=C});