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

define(["require","exports","module"],function(e,o,t){function r(e){this.scope=e}r.prototype.getPropertiesCount=function(){return this.getPropertiesNames().length},r.prototype.getPropertiesNames=function(){return Object.keys(this.scope)},r.prototype.compareProperties=function(e,o){if(!e)throw"Properties for scope 1 not specified";o||(o=this.getPropertiesNames());var t,r,d={added:[],removed:[],madeUndefined:[],pollution:[]};for(t=0;t<e.length;t++)for(d.removed.push(e[t]),r=0;r<o.length;r++)if(e[t]===o[r]){d.removed.pop();break}for(t=0;t<o.length;t++)for(d.added.push(o[t]),r=0;r<e.length;r++)if(o[t]===e[r]){d.added.pop();break}for(t=0;t<d.added.length;t++)void 0===this.scope[d.added[t]]?d.madeUndefined.push(d.added[t]):d.pollution.push(d.added[t]);return d},t.exports=r});