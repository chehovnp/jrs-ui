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

define(["require","exports","module","backbone","underscore"],function(t,e,i){var f=t("backbone"),r=t("underscore"),s=f.Model.extend({initialize:function(t){t=t||{},r.bindAll(this,"_fetchComplete","fetchFailed","afterFetchComplete","fetch"),this.set({items:[]},{silent:!0}),this.getData=t.getData,this.bufferSize=t.bufferSize||100,this.loadFactor=t.loadFactor||.95},_fetchComplete:function(t){this.attributes.total=t.total,this.set({items:t.data},{silent:!0}),this.attributes.bufferEndIndex=Math.max(0,Math.min(this.attributes.bufferStartIndex+this.bufferSize-1,this.attributes.bufferStartIndex+t.data.length-1)),this.attributes.bufferEndIndex<this.attributes.bufferStartIndex+this.bufferSize-1&&(this.attributes.total=Math.min(t.total,this.attributes.bufferEndIndex+1)),this.afterFetchComplete&&this.afterFetchComplete(t.data,this.attributes.total),this.trigger("change",this)},_isBufferReloadNecessary:function(t,e){if(void 0===this.get("bufferStartIndex")||void 0===this.get("bufferEndIndex"))return!0;if(t>=0&&t<this.get("bufferStartIndex")||e<this.get("total")&&e>this.get("bufferEndIndex"))return!0;if(t===this.get("bufferStartIndex")&&e===this.get("bufferEndIndex"))return!1;var i=1-(t-this.get("bufferStartIndex"))/this.bufferSize,f=1-(this.get("bufferEndIndex")-e)/this.bufferSize;return this.get("bufferStartIndex")>0&&i>=this.loadFactor||this.get("bufferEndIndex")<this.get("total")&&f>=this.loadFactor},afterFetchComplete:function(t,e){},fetchFailed:function(t,e){this.trigger("fetchFailed",t,e)},fetch:function(t){if(t=r.extend({top:this.get("bufferStartIndex")||0,bottom:this.get("bufferEndIndex")||this.bufferSize-1},t),t.force||this._isBufferReloadNecessary(t.top,t.bottom)){if(t.top!==this.attributes.bufferStartIndex||t.bottom!==this.attributes.bufferEndIndex||t.force){var e=t.top+Math.floor((t.bottom-t.top)/2),i=Math.floor(this.bufferSize/2);this.attributes.bufferStartIndex=Math.max(0,e-i),this.get("total")&&!t.force?this.attributes.bufferEndIndex=Math.min(this.get("total"),this.attributes.bufferStartIndex+this.bufferSize)-1:this.attributes.bufferEndIndex=this.attributes.bufferStartIndex+this.bufferSize-1}this.getData({offset:this.get("bufferStartIndex"),limit:this.get("bufferEndIndex")-this.get("bufferStartIndex")+1}).done(this._fetchComplete).fail(this.fetchFailed)}else this.afterFetchComplete&&this.afterFetchComplete(this.get("items"),this.get("total"))},reset:function(t){this.attributes={},this.set({items:[]},{silent:!0}),t&&t.silent||this.trigger("change",this)}});i.exports=s});