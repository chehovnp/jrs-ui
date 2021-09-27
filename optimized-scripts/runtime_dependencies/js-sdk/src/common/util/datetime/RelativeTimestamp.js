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

define(["require","exports","module","./RelativeDate","underscore"],function(e,r,t){var i=e("./RelativeDate"),n=e("underscore"),o=function(){i.apply(this,arguments)},u=function(){};u.prototype=i.prototype,o.prototype=new u,o.prototype.constructor=o,o.PATTERNS={DAY:/^(DAY)(([+|\-])(\d{1,9}))?$/i,WEEK:/^(WEEK)(([+|\-])(\d{1,9}))?$/i,MONTH:/^(MONTH)(([+|\-])(\d{1,9}))?$/i,QUARTER:/^(QUARTER)(([+|\-])(\d{1,9}))?$/i,SEMI:/^(SEMI)(([+|\-])(\d{1,9}))?$/i,YEAR:/^(YEAR)(([+|\-])(\d{1,9}))?$/i},o.parse=function(e){if(o.isValid(e))for(var r in o.PATTERNS){var t=o.PATTERNS[r].exec(e);if(null!==t&&n.isArray(t)&&5===t.length)return new o(t[1],t[3],t[4])}},o.isValid=function(e){if(e instanceof o)return""!==e.toString();if(n.isString(e))for(var r in o.PATTERNS)if(o.PATTERNS[r].test(e))return!0;return!1},t.exports=o});