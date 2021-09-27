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

define(["require","exports","module"],function(t,a,e){function n(t,a){if(!(t instanceof a))throw new TypeError("Cannot call a class as a function")}function r(t,a){for(var e=0;e<a.length;e++){var n=a[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function o(t,a,e){return a&&r(t.prototype,a),e&&r(t,e),t}function i(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}var u=function(){function t(a){n(this,t),i(this,"inputControlsDataProvider",void 0),i(this,"dataLabelHash",void 0),this.dataLabelHash={},this.inputControlsDataProvider=a.inputControlsDataProvider}return o(t,[{key:"getData",value:function(t,a){var e=this;return this.inputControlsDataProvider.getData(t,a).then(function(t){var a=t.data,n=t.total;return a.forEach(function(t){e.dataLabelHash[t.value]=t.label}),{data:a,total:n}})}},{key:"getLabelByValue",value:function(t){return this.dataLabelHash[t]}}]),t}();e.exports=u});