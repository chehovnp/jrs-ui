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

define(["require","exports","module","jquery","../util/utils.common","../core/core.events.bis","./components.toolbarButtons"],function(o,e,n){var t=o("jquery"),s=o("../util/utils.common"),i=s.isFirefox,u=s.getAsFunction,a=o("../core/core.events.bis"),r=o("./components.toolbarButtons");r.initialize=function(o){r.actionMap=o,t(".toolbar").on("mouseup mouseover mouseout","button",function(o){t(this).prop("disabled")||r["mouse"+o.type.substring(5,6).toUpperCase()+o.type.substring(6)+"Handler"](o,this)}),i()&&t(".toolbar li").each(function(o,e){t(e).css("padding","0 2px")})},r.mouseUpHandler=function(o,e){var n=e.className.indexOf("capsule")>=0?r.actionMap[e.id]:null;if(n){u(n)(o),o.stopPropagation()}},r.mouseOverHandler=function(o,e){e.className.indexOf("capsule")>=0&&e.className.indexOf("mutton")>=0&&!a.isDisabled(e)&&r.showButtonMenu(o.originalEvent,e)},r.mouseOutHandler=function(o,e){},n.exports=r});