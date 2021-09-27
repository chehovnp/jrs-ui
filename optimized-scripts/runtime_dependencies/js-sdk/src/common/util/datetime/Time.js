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

define(["require","exports","module","underscore"],function(t,s,e){function r(t){return new RegExp("^"+t.toLowerCase().replace("hh","([0-1][0-9]|2[0-3])").replace("mm","([0-5][0-9])").replace("ss","([0-5][0-9])")+"$")}function n(t){var s=t.toLowerCase().match(/(hh|mm|ss)/g),e={h:-1,m:-1,s:-1};if(s)for(var r=0;r<s.length;r++)-1==e[s[r].toString().charAt(0)]&&(e[s[r].toString().charAt(0)]=r+1);return e}function o(t,s,e){this.hours=t||0,this.minutes=s||0,this.seconds=e||0}var i=t("underscore");o.prototype.total=function(){return 3600*this.hours+60*this.minutes+this.seconds},o.prototype.isValid=function(){return this.hours>=0&&this.hours<=23&&this.minutes>=0&&this.minutes<=59&&this.seconds>=0&&this.seconds<=59},o.prototype.format=function(t){return t.toLowerCase().replace("hh",this.hours<10?"0"+this.hours:this.hours).replace("mm",this.minutes<10?"0"+this.minutes:this.minutes).replace("ss",this.seconds<10?"0"+this.seconds:this.seconds)},o.compare=function(t,s){var e=t.total(),r=s.total();return e<r?-1:e>r?1:0},o.parse=function(t,s){var e=r(s);if(i.isString(t)&&e.test(t)){var h=new o,u=e.exec(t),c=n(s);return h.hours=parseInt(u[c.h],10),h.minutes=parseInt(u[c.m],10),h.seconds=parseInt(u[c.s],10),h}},e.exports=o});