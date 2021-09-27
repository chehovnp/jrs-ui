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

define(["require","exports","module","jquery","../../scalableList/model/ScalableListModel","../../../common/util/browserDetection","../../scalableList/util/domAndCssUtil"],function(i,t,e){var s=i("jquery"),l=i("../../scalableList/model/ScalableListModel"),h=i("../../../common/util/browserDetection"),a=i("../../scalableList/util/domAndCssUtil"),o=a.doCalcOnVisibleNodeClone,n={render:function(){return this._itemHeightSet||(this._calcItemHeight(),this._itemHeightSet=!0),this},_calcItemHeight:function(){var i=this;this._model=this.model,this._lazy=this.lazy,this._visibility=this.$el.css("visibility"),this._display=this.$el.css("display"),this.model=new l({getData:function(){var i=new s.Deferred;return i.resolve({total:1,data:[{value:"test value",label:"test label"}]}),i}}),this.$el.css({visibility:"hidden",display:"block"}),this.model.once("change",this.onModelChange,this),this.renderData(),o({el:this.$el,css:{width:"100px"},classes:" jr "+(h.isIPad()?"ipad":""),callback:function(t){i.itemHeight=t.find("li").outerHeight(!0),i.itemsPerChunk=Math.floor(i.defaultChunkHeight/i.itemHeight),i.chunkHeight=i.itemsPerChunk*i.itemHeight}}),this.$el.empty().css({visibility:this._visibility,display:this._display}),delete this._visibility,delete this._display,this.totalItems=void 0,this.$firstViewChunk=void 0,this.model=this._model,delete this._model,this.lazy=this._lazy,this._lazy&&delete this._lazy},_calcViewPortConstants:function(){if(!this.viewPortConstantsInitialized){if(!this._itemHeightSet)return;this._calcViewPortHeight(),this._renderViewChunks(!0),this._renderItems(),this.viewPortConstantsInitialized=!0}}};e.exports=n});