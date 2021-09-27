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

define(["require","exports","module","underscore"],function(e,t,i){function n(e,t,i){var n=this.get("bufferStartIndex")+t;this.selectionContains&&(i?(e.selected=!0,!this.selectionContains(e.value,n)&&this.addValueToSelection(e.value,n)):(e.selected=!1,this.selectionContains(e.value,n)&&this.removeValueFromSelection(e.value,n))),delete e.addToSelection}var o=e("underscore");i.exports={afterFetchComplete:function(e,t){o.each(e,function(e,t){e&&(e.addToSelection?n.call(this,e,t,!0):o.isUndefined(e.addToSelection)||n.call(this,e,t))},this)}}});