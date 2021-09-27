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

define(["require","exports","module"],function(t,i,n){function e(){this.agents=[],this.currentAgentName=null,this.dragger}function g(t,i,n,e,g,r,s){t=t||event,this.originalX=[],this.originalY=[],this.draggingObjs=i,this.dragsX=n,this.dragsY=e,this.sigMove=g,this.dragListener=r,this.cleanUpUtil=s,this.dragListener&&(this.dragListener.dragger=this);for(var a=0;a<i.length;a++)this.originalX[a]=parseInt(i[a].style.left),this.originalY[a]=parseInt(i[a].style.top);this.mouseX=t.clientX,this.mouseY=t.clientY,this.isDragging=!1,this.initDragger(t)}e.DRAGGING_STARTED="draggingStarted",e.DRAGGING_FINISHED="draggingFinished",e.DRAGGING="dragging",e.prototype.registerAgent=function(t){this.agents[t]=[]},e.prototype.publishEvent=function(t,i,n){this.agents[t][i]=n},e.prototype.notify=function(t,i){var n=this.agents[this.currentAgentName];if(n){var e=n[t];if(e){e(i,this.dragger?this.dragger.draggingObjs:null)}}},e.prototype.isDragging=function(){return null!=this.currentAgentName},e.prototype.setCurrentAgentName=function(t){this.currentAgentName=t},e.prototype.getCurrentAgentName=function(){return this.currentAgentName};var r=function(t){return function(i){t.dragging(i)}},s=function(t){return function(i){t.draggingFinished(i)}};g.prototype.addAnotherDraggingObject=function(t,i){t=t||event,this.draggingObjs[this.draggingObjs.length]=i,this.originalX[this.originalX.length]=parseInt(i.style.left),this.originalY[this.originalY.length]=parseInt(i.style.top),this.initDragger(t)},g.prototype.initDragger=function(t){this.isDragging=!1,this.mouseX=t.clientX,this.mouseY=t.clientY,document.onmousemove=r(this),document.onmouseup=s(this)},g.prototype.dragging=function(t){var i=t||event,n=!1,g=0,r=0;if(this.dragsX&&(g=i.clientX-this.mouseX,n=Math.abs(g)>this.sigMove),this.dragsY&&(r=i.clientY-this.mouseY,n=n||Math.abs(r)>this.sigMove),!this.isDragging&&n){this.isDragging=!0,this.dragListener&&this.dragListener.notify(e.DRAGGING_STARTED,t);for(var s=0;s<this.draggingObjs.length;s++)this.draggingObjs[s].style.display="block"}if(this.isDragging){if(g){for(var s=0;s<this.draggingObjs.length;s++){parseInt(this.originalX[s]+g)}if(g)for(var s=0;s<this.draggingObjs.length;s++)this.draggingObjs[s].style.left=parseInt(this.originalX[s]+g)+"px"}if(r){for(var s=0;s<this.draggingObjs.length;s++){parseInt(this.originalY[s]+r)}if(r)for(var s=0;s<this.draggingObjs.length;s++)this.draggingObjs[s].style.top=parseInt(this.originalY[s]+r)+"px"}(g||r)&&this.dragListener.notify(e.DRAGGING,t)}},g.prototype.draggingFinished=function(t){document.onmousemove="default",document.onmouseup="default",this.isDragging?(this.isDragging=!1,this.cleanUpUtil&&this.cleanUpUtil(),this.dragListener&&(this.dragListener.notify(e.DRAGGING_FINISHED,t),this.dragListener.setCurrentAgentName(null))):this.dragListener&&this.dragListener.setCurrentAgentName(null)},g.prototype.clearDraggingObjects=function(){for(var t=0;t<this.draggingObjs.length;t++){var i=this.draggingObjs[t];i&&(i.parentNode&&i.parentNode.removeChild(i),i=null)}},i.Dragger=g,i.DragListener=e});