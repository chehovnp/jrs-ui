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

define(["require","exports","module","underscore","jquery"],function(e,s,l){var a=e("underscore"),o=e("jquery");l.exports={doCalcOnVisibleNodeClone:function(e){if(!e||!e.el)throw"Missing required option: el";if(a.defaults(e,{css:{},classes:"",container:"<div></div>",appendTo:"body",callback:function(){throw"no callback was defined"},alwaysClone:!1,cloneHandlers:!1}),a.defaults(e.css,{position:"absolute",left:"-9999px"}),!e.alwaysClone&&o(e.el).is(":visible"))e.callback(o(e.el));else{var s=o(e.el).clone(),l=o(e.container).css(e.css).addClass(e.classes).appendTo(o(e.appendTo)).append(s);e.callback(s),l.remove()}}}});