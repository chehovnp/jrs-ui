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

define(["require","exports","module","../namespace/namespace","underscore","./controls.core"],function(e,r,t){var n=e("../namespace/namespace"),o=n.JRS,u=e("underscore");e("./controls.core"),function(e,r,t){var n=t.Base.extend({structureFormater:function(e){if(!e)return e;var t=r.map(e.inputControl,function(e){return e.readOnly="true"==String(e.readOnly),e.uri=e.uri.replace("repo:",""),e}),n=r.map(t,function(e){return e.state});return n=r.compact(n),r.each(t,function(e){delete e.state}),r.extend({structure:t},this.convertResponseToControlsState(n))},convertResponseToControlsState:function(e){var t={},n=e.inputControlState?e.inputControlState:e,o=function(e){var r={value:e.value,label:e.label};return"true"==String(e.selected)&&(r.selected=!0),r},u=function(e){return r.isArray(e)?r.map(e,o):[]},a=function(e){return r.isUndefined(e.value)||r.isNull(e.value)?u(e.options):e.value};return r.each(n,function(e){e&&e.uri&&(t[e.id]={error:r.isUndefined(e.error)?null:e.error,values:a(e)})}),{state:t}}});e.DataConverter=n}(o.Controls,u,o.Controls),t.exports=o.Controls});