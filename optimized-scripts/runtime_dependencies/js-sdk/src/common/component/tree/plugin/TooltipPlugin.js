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

define(["require","exports","module","./TreePlugin","underscore","../../tooltip/Tooltip"],function(t,i,o){var e=t("./TreePlugin"),s=t("underscore"),n=t("../../tooltip/Tooltip");o.exports=e.extend({initialize:function(t){this.tooltip=n.attachTo(t.attachTo,s.omit(t,"el")),this.listensToList=!1,e.prototype.initialize.apply(this,arguments)},itemsRendered:function(t,i){var o=this;this.listensToList||(this.listensToList=!0,this.listenTo(i,"list:item:mouseover",function(t,i){o.tooltip.show(t)}),this.listenTo(i,"list:item:mouseout",function(){o.tooltip.hide()}))},remove:function(){n.detachFrom(this.$el),this.tooltip.remove(),e.prototype.remove.apply(this,arguments)}})});