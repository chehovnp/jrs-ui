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

define(["require","exports","module","jquery"],function(t,n,o){var e=t("jquery"),r=function(t){this.config={},e.extend(this.config,t),this.parent=null,this.loader=null,this.events={ACTION_PERFORMED:"action",BEFORE_ACTION_PERFORMED:"beforeAction"}};r.prototype={getId:function(){return this.config.crosstabId},getFragmentId:function(){return this.config.fragmentId},sortRowGroup:function(t,n){var o=this,e={action:{actionName:"sortXTabRowGroup",sortData:{crosstabId:this.getId(),order:n,groupIndex:t}}};return o._notify({name:o.events.BEFORE_ACTION_PERFORMED}),this.loader.runAction(e).then(function(t){return o._notify({name:o.events.ACTION_PERFORMED,type:"sortXTabRowGroup",data:t}),o})},isDataColumnSortable:function(t){return"number"==typeof this.config.dataColumns[t-this.config.startColumnIndex].sortMeasureIndex},getColumnOrder:function(t){return this.config.dataColumns[t-this.config.startColumnIndex].order},sortByDataColumn:function(t,n){var o=this,e=this.config.dataColumns[t-this.config.startColumnIndex],r={action:{actionName:"sortXTabByColumn",sortData:{crosstabId:this.getId(),order:n,measureIndex:e.sortMeasureIndex,columnValues:e.columnValues}}};return o._notify({name:o.events.BEFORE_ACTION_PERFORMED}),this.loader.runAction(r).then(function(t){return o._notify({name:o.events.ACTION_PERFORMED,type:"sortXTabByColumn",data:t}),o})},_notify:function(t){this.parent._notify(t)}},o.exports=r});