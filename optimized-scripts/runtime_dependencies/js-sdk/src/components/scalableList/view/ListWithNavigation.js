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

define(["require","exports","module","./ListWithSelection","../model/ListWithSelectionModel","../model/listWithNavigationModelTrait"],function(t,e,i){var a=t("./ListWithSelection"),o=t("../model/ListWithSelectionModel"),n=t("../model/listWithNavigationModelTrait"),s=a.extend({canActivate:!0,initialize:function(t){t=t||{};var e=o.extend(n);t.model=t.model||new e(t),a.prototype.initialize.call(this,t)},onMousemove:function(t){if(a.prototype.onMousemove.call(this,t),!this.mouseMovePos||this._mouseMoved(t,this.mouseMovePos)){this.mouseMovePos=this._getMousePos(t);var e=this._getDomItemData(t.currentTarget);this.activate(e.index)}},setCanActivate:function(t){this.canActivate=t},getCanActivate:function(){return this.canActivate&&!this.getDisabled()},activateFirst:function(){this.activate(0)},activateLast:function(){this.activate(Math.max(0,this.model.get("total")-1))},activateNext:function(){this.activate(Math.min(this.model.get("total")-1,this._getActiveIndex()+1))},activatePrevious:function(){this.activate(Math.max(0,this._getActiveIndex()-1))},pageDown:function(){this.activate(Math.min(this.model.get("total")-1,this._getActiveIndex()+this._getItemsPerView()))},pageUp:function(){this.activate(Math.max(0,this._getActiveIndex()-this._getItemsPerView()))},getActiveValue:function(){return this.model.getActive&&this.model.getActive()},activate:function(t,e){if(this.getCanActivate()){var i=this.getActiveValue();if(i&&i.index===t)return;if(!e||!e.silent){var a=this;this.model.once("active:changed",function(){a.trigger("active:changed",a.getActiveValue())})}this.model.activate(t,e)}},postProcessChunkModelItem:function(t,e){a.prototype.postProcessChunkModelItem.call(this,t,e);var i=this._getActiveIndex&&this._getActiveIndex();t.active=void 0!==i&&i===this.model.get("bufferStartIndex")+e},_getActiveIndex:function(){var t=this.getActiveValue();return t&&t.index}});i.exports=s});