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

define(["require","exports","module","underscore","./abstractPanelTrait","jquery-ui/ui/widgets/resizable"],function(i,e,t){function s(i,e){this.trigger("resize",i,e)}function h(i,e){this.trigger("resizeStart",i,e)}function n(i,e){this.trigger("resizeStop",i,e)}var r=i("underscore"),a=i("./abstractPanelTrait");i("jquery-ui/ui/widgets/resizable"),t.exports=r.extend({},a,{onConstructor:function(i){i||(i={}),this.handles=i.handles||"e, s, se",this.minWidth=i.minWidth||10,this.minHeight=i.minHeight||10,this.maxWidth=i.maxWidth||null,this.maxHeight=i.maxHeight||null,this.alsoResize=i.alsoResize||!1,this.resizableEl=i.resizableEl},afterSetElement:function(){this.$resizableEl=this.$el.find(this.resizableEl).length?this.$el.find(this.resizableEl):this.$el;var i=this.handles;"function"==typeof i&&(i=i(this.$el)),this.$resizableEl.resizable({handles:i,minHeight:this.minHeight,minWidth:this.minWidth,maxWidth:this.maxWidth,maxHeight:this.maxHeight,alsoResize:this.alsoResize,resize:r.bind(s,this),start:r.bind(h,this),stop:r.bind(n,this)})},onRemove:function(){try{this.$el.resizable("destroy")}catch(i){}}})});