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

define(["require","exports","module","react","react-dom","./ColorSelector"],function(e,r,o){function t(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),o.push.apply(o,t)}return o}function n(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?t(o,!0).forEach(function(r){i(e,r,o[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):t(o).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))})}return e}function l(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function a(e,r){for(var o=0;o<r.length;o++){var t=r[o];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function c(e,r,o){return r&&a(e.prototype,r),o&&a(e,o),e}function i(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}var u=e("react"),s=e("react-dom"),f=e("./ColorSelector"),h=f.ColorSelector,p={color:"",label:"",showTransparentPreset:!0,onColorChange:function(){},ColorSelector:h},C=function(){function e(r){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:p;l(this,e),i(this,"element",void 0),i(this,"onColorChange",void 0),this.element=r,this.onColorChange=o.onColorChange,this.renderColorSelector({color:o.color,label:o.label,showTransparentPreset:o.showTransparentPreset,onColorChange:this.onColorChange})}return c(e,[{key:"renderColorSelector",value:function(e){s.render(u.createElement(h,e),this.element)}},{key:"setState",value:function(e){this.renderColorSelector(n({},e,{onColorChange:this.onColorChange}))}},{key:"remove",value:function(){s.unmountComponentAtNode(this.element)}}]),e}();o.exports=C});