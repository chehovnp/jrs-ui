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

define(["require","exports","module","underscore","./Log","./Level","./appender/ConsoleAppender"],function(e,t,n){var s=e("underscore"),i=e("./Log"),r=e("./Level"),o=e("./appender/ConsoleAppender"),a={console:o},l=function(e){this.initialize(e||{})};s.extend(l.prototype,{defaults:function(){return{enabled:!1,level:"error",appenders:{},appenderInstances:{},loggers:{}}},initialize:function(e){this.attributes=s.defaults(e,this.defaults());var t={};s.each(a,function(e,n){t[n]=new e}),this.set("appenderInstances",t)},get:function(e){return this.attributes[e]},set:function(e,t){this.attributes[e]=t},register:function(e){var t={id:"root"};if("string"==typeof e&&""!==e?t.id=e:e&&e.hasOwnProperty("id")&&(t.id=e.id),!this.get("loggers").hasOwnProperty(t.id)){var n=this.get("loggers");n[t.id]=new i(t,s.bind(this._processLogItem,this)),this.set("loggers",n)}return this.get("loggers")[t.id]},disable:function(){this.set("enabled",!1)},enable:function(e){e&&this.set("level",r.getLevel(e)),this.set("enabled",!0)},setLevel:function(e){this.set("level",e)},_processLogItem:function(e){this.get("enabled")&&e.level.isGreaterOrEqual(this.get("level"))&&this._appendLogItem(e)},_appendLogItem:function(e){var t=this.get("appenders"),n=this.get("appenderInstances");for(var s in t)n.hasOwnProperty(t[s])&&n[t[s]].write(e)}}),n.exports=l});