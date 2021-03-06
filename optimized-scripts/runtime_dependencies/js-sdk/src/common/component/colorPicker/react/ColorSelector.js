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

define(["require","exports","module","react","react-dom","./ColorSample","./AttachableColorPicker"],function(e,o,t){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}function i(e,o){for(var t=0;t<o.length;t++){var r=o[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,o,t){return o&&i(e.prototype,o),t&&i(e,t),e}function l(e,o){return!o||"object"!==r(o)&&"function"!=typeof o?u(e):o}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(o&&o.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),o&&s(e,o)}function s(e,o){return(s=Object.setPrototypeOf||function(e,o){return e.__proto__=o,e})(e,o)}function f(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}var h=e("react"),m=e("react-dom"),b=e("./ColorSample"),y=b.ColorSample,C=e("./AttachableColorPicker"),d=C.AttachableColorPicker,P=function(e,o){return function(t){function r(e){var o;return n(this,r),o=l(this,a(r).call(this,e)),f(u(o),"colorSampleRef",void 0),f(u(o),"colorPickerContainerWrapper",void 0),o.state={show:!1},o.colorSampleRef=h.createRef(),o.colorPickerContainerWrapper=null,o}return p(r,t),c(r,[{key:"componentWillMount",value:function(){this.colorPickerContainerWrapper=document.createElement("div"),this.colorPickerContainerWrapper.className="jr-jColorPickerWrapper",document.body.appendChild(this.colorPickerContainerWrapper)}},{key:"componentWillUnmount",value:function(){this.colorPickerContainerWrapper&&this.colorPickerContainerWrapper.remove()}},{key:"onClick",value:function(){var e=this.state.show;this.setState({show:!e})}},{key:"onColorPickerHide",value:function(){this.setState({show:!1})}},{key:"render",value:function(){var t,r=this,n=this.state.show,i=this.props,c=i.color,l=i.label,a=this.colorSampleRef.current,u=void 0===this.props.showTransparentPreset||this.props.showTransparentPreset;return t=a?h.createElement(o,{padding:{top:0,left:0},show:n,color:c,showTransparentPreset:u,onChangeComplete:this.props.onColorChange,onHide:function(){r.onColorPickerHide()},attachTo:a}):h.createElement("div",null),h.createElement(h.Fragment,null,h.createElement("div",{className:"jr-jColorSample",ref:this.colorSampleRef},h.createElement(e,{color:c,label:l,onClick:function(){r.onClick()}})),m.createPortal(t,this.colorPickerContainerWrapper))}}]),r}(h.Component)},k=P(y,d);o.createColorSampleWithColorPicker=P,o.ColorSelector=k});