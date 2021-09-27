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

define(["require","exports","module","../util/utils.common","../util/touch.controller","jquery"],function(e,n,o){var t=e("../util/utils.common"),d=t.isIPad,i=e("../util/touch.controller");e("jquery")(function(){d()&&(document.body.addEventListener("touchstart",function(e){window.calendar&&window.calendar.hide&&!window.calendar.hidden&&window.calendar.hide(),void 0!==i&&(i.element_scrolled=!1)},!1),document.body.addEventListener("touchmove",function(e){e.preventDefault()},!1))})});