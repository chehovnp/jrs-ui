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

define(["require","exports","module","./Menu","./HoverMenu","./AttachableMenu","underscore"],function(e,t,n){var i=e("./Menu"),o=e("./HoverMenu"),s=e("./AttachableMenu"),u=e("underscore"),h=function(e,t,n,i){u.bindAll(this,"_onAttachToMouseOver","_onAttachToMouseOut"),this.padding=n||{top:0,left:0},s.call(this,e,t,this.padding,i),this.on("mouseover container:mouseover",this._onMenuItemMouseOver),this.on("container:mouseout",this._onMenuItemMouseOut),this.on("mouseout",this._onCascadeMenuItemMouseOut),this.on("selectionMade",this._hide)},d={_subMenuHovered:!1,_onConstructor:function(e,t){this.additionalOptions=t},_onInitialize:function(){this.on("mouseover",u.bind(this._showSubMenu,this))},_showSubMenu:function(e){if(e.model.has("children")){var t=this._getSubMenu(e.cid,e.model.get("children"),e,this);t&&t.show()}},_onCascadeMenuItemMouseOut:function(e,t,n){var i=e.model.get("children");if(this._menuHovered=!1,i){var o=this._getSubMenu(e.cid),s=o.$el.offset(),u=n.pageX-s.left,h=n.pageY-s.top;this._subMenuHovered=u>=0&&u<=o.$el.width()+3&&h>=0&&h<=o.$el.height()+3}this._hideByTimeout()},_initCascadingMenuEvents:function(e){var t=this;this.listenTo(e.collection,"select",function(e,n,i){t._selectOption(e,n,i)}),this.listenTo(e,"hidden",function(){t._subMenuHovered=!1,t._tryHide()})},_hideByTimeout:function(){this._elementHovered||this._menuHovered||this._subMenuHovered||setTimeout(u.bind(this._tryHide,this),this.TIME_BETWEEN_MOUSE_OVERS)},_tryHide:function(){this._elementHovered||this._menuHovered||this._subMenuHovered||this._hide()},_getSubMenu:u.memoize(function(e,t,n,i){var o=new r(t,n,i.additionalOptions);return i._initCascadingMenuEvents(o),o})},r=o.extend(u.extend({constructor:function(e,t,n){h.call(this,e,t.$el,null,n)},show:function(){var e=this.$attachTo.offset(),t=this.$attachTo.outerWidth();return this.$el.css({top:e.top,left:e.left+t}),i.prototype.show.apply(this,arguments)}},d));n.exports=u.extend({},d,{constructor:h})});