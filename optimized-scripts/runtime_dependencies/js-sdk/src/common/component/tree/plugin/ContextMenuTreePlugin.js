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

define(["require","exports","module","./TreePlugin","underscore","jquery"],function(t,e,n){var i=t("./TreePlugin"),o=t("underscore"),u=(t("jquery"),o.memoize(function(t){return o.map(t.options,function(t){return t.model.get("action")})},function(t){return t.cid}));n.exports=i.extend({initialize:function(t){if(!t)throw new Error("Initialization error. Options required.");if(this.contextMenus=t.contextMenus,this.contextMenu=t.contextMenu,this.defaultSelectedItems=t.defaultSelectedItems||function(){},!this.contextMenus&&!this.contextMenu)throw new Error("contextMenu or contextMenus must be specified.");if(this.showContextMenuCondition=t.showContextMenuCondition,!this.showContextMenuCondition&&!this.contextMenu)throw new Error("contextMenu must be specified for default behaviour");!this.showContextMenuCondition&&(this.showContextMenuCondition=function(){return this.contextMenu}),this.model=t.model,i.prototype.initialize.apply(this,arguments)},itemAction:function(t){var e=t.get("action");this.treeItem.action=e},itemsRendered:function(t,e){var n=this;this.listenTo(e,"list:item:contextmenu",function(t,e){if(this.currentContextMenu=n.showContextMenuCondition(t),this.lastContextMenu&&this.lastContextMenu.hide(),this.lastContextMenu=this.currentContextMenu,this.currentContextMenu){this.currentContextMenu.treeItem=t;var i=this.currentContextMenu.treeItem.action;i||(i=n.defaultSelectedItems.call(this.currentContextMenu,t,u(this.currentContextMenu)))?this.currentContextMenu.resetSelection([i]):this.currentContextMenu.resetSelection(),this.currentContextMenu.show({left:e.pageX,top:e.pageY}),this.listenTo(this.currentContextMenu.collection,"select",function(t,e){this.itemAction.call(this.currentContextMenu,e)},this)}},this)},remove:function(){this.stopListening(),this.contextMenu&&this.contextMenu.remove()}})});