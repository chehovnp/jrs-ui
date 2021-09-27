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

define(["require","exports","module","prototype","./core.layout","../util/utils.common"],function(e,t,S){var a=e("prototype"),i=a.$,s=e("./core.layout"),o=e("../util/utils.common"),E=o.isIPad,n={over:function(e,t){if(e&&!this.isSelected(e)){var S=t?t(e):e;i(S).addClassName(s.HOVERED_CLASS)}},out:function(e,t){if(e){var S=t?t(e):e;i(S).removeClassName(s.HOVERED_CLASS).removeClassName(s.PRESSED_CLASS)}},down:function(e,t){if(e&&!this.isSelected(e)){var S=t?t(e):e;i(S).removeClassName(s.HOVERED_CLASS).addClassName(s.PRESSED_CLASS)}},up:function(e,t){if(e&&!this.isSelected(e)){var S=t?t(e):e;S=i(S),S.removeClassName(s.PRESSED_CLASS),!E()&&S.addClassName(s.HOVERED_CLASS)}},disable:function(e){e&&(n.out(e),i(e).writeAttribute(s.DISABLED_ATTR_NAME,s.DISABLED_ATTR_NAME))},enable:function(e){e&&(n.out(e),i(e).writeAttribute(s.DISABLED_ATTR_NAME,null))},isDisabled:function(e){if(e)return i(e).readAttribute(s.DISABLED_ATTR_NAME)===s.DISABLED_ATTR_NAME||i(e).hasClassName(s.DISABLED_CLASS)},unSelect:function(e){e&&i(e).removeClassName(s.SELECTED_CLASS)},select:function(e){e&&i(e).addClassName(s.SELECTED_CLASS)},isSelected:function(e,t){if(e){var S=t?t(e):i(e),a=S.up("li");return a&&a.hasClassName(s.SELECTED_CLASS)}return!1}};S.exports=n});