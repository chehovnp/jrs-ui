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

define(["require","exports","module"],function(o,e,t){function r(){}r.prototype.console=function(){if("undefined"==typeof console){var o=function(){};return{assert:o,clear:o,count:o,debug:o,dir:o,dirxml:o,error:o,group:o,groupCollapsed:o,groupEnd:o,info:o,log:o,markTimeline:o,profile:o,profileEnd:o,table:o,time:o,timeEnd:o,timeStamp:o,trace:o,warn:o}}return console}(),r.prototype.write=function(o){var e=this.console.log;switch(o.level.toString()){case"DEBUG":e=this.console.debug||this.console.log;break;case"INFO":e=this.console.info||this.console.log;break;case"WARN":e=this.console.warn;break;case"ERROR":e=this.console.error}try{e.apply(this.console,o.toArray())}catch(t){try{Function.prototype.apply.call(e,this.console,o.toArray())}catch(o){}}},t.exports=r});