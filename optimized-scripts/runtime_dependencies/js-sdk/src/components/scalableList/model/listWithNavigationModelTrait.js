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

define(["require","exports","module","underscore"],function(e,t,i){var n=e("underscore"),s={activate:function(e,t){if("number"!=typeof e)return void this.setActive(n.extend({},t));if(t=t||{},e>=this.get("bufferStartIndex")&&e<=this.get("bufferEndIndex")){var i=this.get("items")[e-this.get("bufferStartIndex")];i&&this.setActive(n.extend(t,{index:e,item:i}))}else{var s=this;this.getData({offset:e,limit:1}).done(function(i){s.setActive(n.extend(t,{index:e,item:i.data[0]}))}).fail(this.fetchFailed)}},setActive:function(e){this.active&&e.index===this.active.index&&e.item.value===this.active.value||(this.active=e&&"number"==typeof e.index?{index:e.index,value:e.item.value,label:e.item.label}:void 0,e&&e.silent||(this.trigger("change"),this.trigger("active:changed",this.active)))},getActive:function(){return this.active}};i.exports=s});