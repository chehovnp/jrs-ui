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

define(["require","exports","module","jquery"],function(n,t,e){var i=n("jquery"),o={sort:{},move:{},format:{},filter:{},hide:{},unhide:{},resize:{}},a=function(n){this.config=n,this.parent=null,this.loader=null,this.events={ACTION_PERFORMED:"action",BEFORE_ACTION_PERFORMED:"beforeAction"},this.api=o};a.prototype={sort:function(n){var t=this,e={action:this.config.headerToolbar["sort"+n.order+"Btn"].sortData};return e.action.sortData.tableUuid=t.config.parentId,t._notify({name:t.events.BEFORE_ACTION_PERFORMED}),this.loader.runAction(e).then(function(n){return t._notify({name:t.events.ACTION_PERFORMED,type:"sort",data:n}),t})},move:function(n){var t=this,e={action:{actionName:"move",moveColumnData:{tableUuid:t.config.parentId,columnToMoveIndex:t.config.columnIndex,columnToMoveNewIndex:n.index}}};return t._notify({name:t.events.BEFORE_ACTION_PERFORMED}),this.loader.runAction(e).then(function(n){return t._notify({name:t.events.ACTION_PERFORMED,type:"move",data:n}),t})},format:function(n){var t=this,e={action:n};return t._notify({name:t.events.BEFORE_ACTION_PERFORMED}),this.loader.runAction(e).then(function(n){return t._notify({name:t.events.ACTION_PERFORMED,type:"format",data:n}),t})},filter:function(n){var t=this,e=i.extend({},t.config.filtering.filterData,n),o={action:{actionName:"filter",filterData:e}};return t._notify({name:t.events.BEFORE_ACTION_PERFORMED}),this.loader.runAction(o).then(function(n){return t._notify({name:t.events.ACTION_PERFORMED,type:"filter",data:n}),t})},hide:function(){var n=this,t={action:{actionName:"hideUnhideColumns",columnData:{tableUuid:n.config.parentId,hide:!0,columnIndexes:[this.config.columnIndex]}}};return n._notify({name:n.events.BEFORE_ACTION_PERFORMED}),this.loader.runAction(t).then(function(t){return n._notify({name:n.events.ACTION_PERFORMED,type:"hide",data:t}),n})},unhide:function(n){var t=this,e={action:{actionName:"hideUnhideColumns",columnData:{tableUuid:t.config.parentId,hide:!1,columnIndexes:n||[this.config.columnIndex]}}};return t._notify({name:t.events.BEFORE_ACTION_PERFORMED}),this.loader.runAction(e).then(function(n){return t._notify({name:t.events.ACTION_PERFORMED,type:"unhide",data:n}),t})},resize:function(n){var t=this,e={action:{actionName:"resize",resizeColumnData:{tableUuid:t.config.parentId,columnIndex:this.config.columnIndex,direction:"right",width:n.width}}};return t._notify({name:t.events.BEFORE_ACTION_PERFORMED}),this.loader.runAction(e).then(function(n){return t._notify({name:t.events.ACTION_PERFORMED,type:"resize",data:n}),t})},_notify:function(n){this.parent._notify(n)}},e.exports=a});