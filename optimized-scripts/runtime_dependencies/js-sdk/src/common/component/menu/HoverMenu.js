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

define(["require","exports","module","jquery","./AttachableMenu","underscore"],function(t,e,o){var i=t("jquery"),s=t("./AttachableMenu"),n=t("underscore");o.exports=s.extend({_isVisible:!1,_elementHovered:!1,_menuHovered:!1,TIME_BETWEEN_MOUSE_OVERS:200,constructor:function(t,e,o,i){n.bindAll(this,"_onAttachToMouseOver","_onAttachToMouseOut"),this.padding=o||{top:0,left:0},s.call(this,t,e,this.padding,i),this.on("mouseover container:mouseover",this._onMenuItemMouseOver),this.on("mouseout container:mouseout",this._onMenuItemMouseOut),this.on("selectionMade",this._hide)},setAttachTo:function(t){this._removeEventListeners(),s.prototype.setAttachTo.call(this,t),this._addEventListeners()},hide:function(){this._hide()},_onMenuItemMouseOver:function(){this._menuHovered=!0,this._elementHovered=!1},_onMenuItemMouseOut:function(){this._menuHovered=!1,this._hideByTimeout()},_onAttachToMouseOver:function(){this.$attachTo.is(":disabled")||(this._elementHovered=!0,this._isVisible||(this.show(),this._isVisible=!0))},_onAttachToMouseOut:function(t){var e=t.relatedTarget;this.el===e||i.contains(this.el,e)||(this._elementHovered=!1,this._hideByTimeout())},_hideByTimeout:function(){this._elementHovered||this._menuHovered||setTimeout(n.bind(this._tryHide,this),this.TIME_BETWEEN_MOUSE_OVERS)},_tryHide:function(){this._elementHovered||this._menuHovered||this._hide()},_hide:function(){s.prototype.hide.call(this),this._isVisible=!1,this.trigger("hidden")},_addEventListeners:function(){this.$attachTo&&this.$attachTo.on("mouseover",this._onAttachToMouseOver),this.$attachTo&&this.$attachTo.on("mouseout",this._onAttachToMouseOut)},_removeEventListeners:function(){this.$attachTo&&this.$attachTo.off("mouseover",this._onAttachToMouseOver),this.$attachTo&&this.$attachTo.off("mouseout",this._onAttachToMouseOut)},remove:function(){this._removeEventListeners(),s.prototype.remove.apply(this,arguments)}})});