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

define(["require","exports","module","underscore","jquery","./abstractPanelTrait","../../menu/ClickMenu","../../menu/groupMenuTrait","text!../template/menuPanelTemplate.htm"],function(e,t,n){var i=e("underscore"),u=e("jquery"),l=e("./abstractPanelTrait"),o=e("../../menu/ClickMenu"),m=e("../../menu/groupMenuTrait"),s=e("text!../template/menuPanelTemplate.htm"),r=o.extend(m);n.exports=i.extend({},l,{onConstructor:function(e){e||(e={}),this.menuOptions=e.menuOptions,this.menuOptionSelectable=e.menuOptionSelectable,this.menuPadding=e.menuPadding,this.menuToggleMode=e.menuToggleMode},afterSetElement:function(){this.$menuEl=u(s),this.$el.find(".title").after(this.$menuEl),this.filterMenu=new r(this.menuOptions,this.$menuEl,{toggle:this.menuOptionSelectable,toggleClass:"active",padding:this.menuPadding,menuToggleMode:this.menuToggleMode}),this.listenTo(this.filterMenu,"all",function(e,t,n){e.indexOf(this.filterMenu.contextName)>=0&&(this.filterMenu.hide(),this.trigger(e,t,n))},this)},onRemove:function(){this.filterMenu.remove()}})});