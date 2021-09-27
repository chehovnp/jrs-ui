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

define(["require","exports","module","../enum/loggingLevels"],function(e,t,n){function r(e,t){this.level=e,this.name=t.toUpperCase()}var o=e("../enum/loggingLevels");r.prototype.isGreaterOrEqual=function(e){var t=(e instanceof r?e:r.getLevel(e)).level;return this.level>=t},r.prototype.toString=function(){return this.name},r.getLevel=function(e){return r[e.toUpperCase()]};for(var i in o)o.hasOwnProperty(i)&&(r[i]=new r(o[i],i));n.exports=r});