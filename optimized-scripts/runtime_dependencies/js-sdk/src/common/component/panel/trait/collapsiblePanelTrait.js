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

define(["require","exports","module","underscore","jquery","./abstractPanelTrait"],function(l,e,o){function s(l,e){!e&&l.stopPropagation(),this.onCollapseControlPressed?this.onCollapseControlPressed(l):this.toggleCollapsedState()}function t(){this.$collapser&&this.$collapser.off("mousedown"),this.$el&&this.$el.find(this.expandOnDblClickSelector).off("dblclick")}var n=l("underscore"),a=l("jquery"),i=l("./abstractPanelTrait");o.exports=n.extend({},i,{onConstructor:function(l){this.collapserClass=l.collapserClass||"buttonIconToggle",this.collapserSelector=l.collapserSelector||".buttonIconToggle",this.collapsiblePanelClass=l.collapsiblePanelClass||"collapsiblePanel",this.expandOnDblClickSelector=l.expandOnDblClickSelector||"> p:first",this.allowEventPropagation=!!l.allowMouseDownEventPropagation,this.onCollapseControlPressed=l.onCollapseControlPressed},beforeSetElement:function(){t.call(this)},afterSetElement:function(){this.$el.addClass(this.collapsiblePanelClass),this.$collapser=this.$(this.collapserSelector),this.$collapser.length||(this.$collapser=a("<button></button>").addClass(this.collapserClass),this.$("> .header").prepend(this.$collapser)),this.$collapser.on("mousedown",n.bind(s,this,this.allowEventPropagation)),this.$el.find(this.expandOnDblClickSelector).on("dblclick",n.bind(s,this))},onRemove:function(){t.call(this)}})});