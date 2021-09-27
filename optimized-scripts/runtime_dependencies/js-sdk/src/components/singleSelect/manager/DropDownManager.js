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

define(["require","exports","module","underscore","jquery"],function(t,e,s){var f=t("underscore"),i=t("jquery"),o=i("body"),n=function(t){return this.initialize(t),this};f.extend(n.prototype,{initialize:function(t){f.bindAll(this,"checkOffset","setNewOffset"),this.$dropDownEl=t.dropDownEl,this.calcOffset=t.calcOffset,this.isOffsetChanged=t.isOffsetChanged||this._isOffsetChanged,this.recalcInterval=t.recalcInterval||500,this.onOffsetChanged=t.onOffsetChanged},startCalc:function(){this.checkOffset(this.setNewOffset),clearInterval(this.recalcTimer),this.recalcTimer=setInterval(f.bind(this.checkOffset,this,this.onOffsetChanged),this.recalcInterval)},stopCalc:function(){clearInterval(this.recalcTimer)},checkOffset:function(t){var e=this.calcOffset(),s=this.$dropDownEl.position(),f=o.offset();(f.top||f.left)&&(s.top+=f.top,s.left+=f.left),this.$dropDownEl.width()!==e.width&&this.setNewOffset(e),this.isOffsetChanged(s,e)&&t&&t(e)},setNewOffset:function(t){this.$dropDownEl.css("top",t.top-o.offset().top).css("left",t.left-o.offset().left).css("width",t.width)},_isOffsetChanged:function(t,e){return Math.floor(t.top)!==Math.floor(e.top)||Math.floor(t.left)!==Math.floor(e.left)}}),s.exports=n});