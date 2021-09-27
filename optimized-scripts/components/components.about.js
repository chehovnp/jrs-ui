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

define(["require","exports","module","jquery","./components.dialogs"],function(o,i,n){var t=o("jquery"),e=o("./components.dialogs"),u={initialize:function(){u.aboutBox.registerListeners()}};u.aboutBox={show:function(){var o=t("#aboutBox");o.hasClass("hidden")&&e.popup.show(o[0],!0)},_hide:function(){var o=t("#aboutBox");o.hasClass("hidden")||e.popup.hide(o[0])},registerListeners:function(){var o=t("#about"),i=t("#aboutBox button");o.on("click",function(o){o.preventDefault(),u.aboutBox.show()}),i.on("click",function(o){u.aboutBox._hide(),o.stopPropagation()})}},t(function(){void 0===o&&u.initialize()}),n.exports=u});