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

define(["require","exports","module","underscore"],function(i,t,e){var r=i("underscore"),n=function(i,t,e){this.setKeyword(i),this.setSign(t),this.setNumber(e)};n.prototype.setKeyword=function(i){this.keyword=i.toUpperCase()},n.prototype.setSign=function(i){this.sign=i},n.prototype.setNumber=function(i){if(r.isNumber(i))this.number=i;else{var t=parseInt(i,10);isNaN(t)?this.number=0:this.number=t}},n.prototype.toString=function(){return r.isNumber(this.number)&&!isNaN(this.number)&&this.number>0&&("+"===this.sign||"-"===this.sign)&&this.keyword in n.PATTERNS?this.keyword+this.sign+this.number.toString():this.keyword in n.PATTERNS?this.keyword:""},n.PATTERNS={DAY:/^(DAY)(([+|\-])(\d{1,9}))?$/i,WEEK:/^(WEEK)(([+|\-])(\d{1,9}))?$/i,MONTH:/^(MONTH)(([+|\-])(\d{1,9}))?$/i,QUARTER:/^(QUARTER)(([+|\-])(\d{1,9}))?$/i,SEMI:/^(SEMI)(([+|\-])(\d{1,9}))?$/i,YEAR:/^(YEAR)(([+|\-])(\d{1,9}))?$/i},n.parse=function(i){if(n.isValid(i))for(var t in n.PATTERNS){var e=n.PATTERNS[t].exec(i);if(null!==e&&r.isArray(e)&&5===e.length)return new n(e[1],e[3],e[4])}},n.isValid=function(i){if(i instanceof n)return""!==i.toString();if(r.isString(i))for(var t in n.PATTERNS)if(n.PATTERNS[t].test(i))return!0;return!1},e.exports=n});