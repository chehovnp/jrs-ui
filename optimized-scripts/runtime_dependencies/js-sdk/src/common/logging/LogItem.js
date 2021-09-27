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

define(["require","exports","module"],function(t,e,n){function i(t){var e=t.getHours().toString(),n=t.getMinutes().toString(),i=t.getSeconds().toString(),r=t.getMilliseconds();return 1===e.length&&(e="0"+e),1===n.length&&(n="0"+n),1===i.length&&(i="0"+i),e+":"+n+":"+i+"."+r}function r(t){for(var e in t)if(t.hasOwnProperty(e)){if("args"===e)for(var n=0,i=t[e].length;n<i;n++)t[e][n]instanceof Error&&(t[e][n]=t[e][n].message);this[e]=t[e]}}r.prototype.toArray=function(){var t=[];return t.push(i(this.time)),t.push("["+this.id+"]"),"unknown"!==this.file&&t.push("["+this.file+":"+this.line+"]"),t.push("["+this.level.toString()+"] -"),t=t.concat(this.args)},n.exports=r});