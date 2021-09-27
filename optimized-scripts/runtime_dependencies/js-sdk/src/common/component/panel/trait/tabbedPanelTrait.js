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

define(["require","exports","module","underscore","jquery","backbone","./abstractPanelTrait","../../base/OptionContainer","text!../template/tabbedPanelButtonTemplate.htm"],function(t,e,a){function n(t,e){var a=e.get("action");this._contentRendered[a]||(this._contentRendered[a]=!0,this.tabs[a].render&&this.tabs[a].render()),this.$tabs.hide(),this.$tabs.filter(function(){return s(this).data("tab")===a}).css("display","block"),this.selectedTab=a,this.trigger("tab:"+a,t,e)}var i=t("underscore"),s=t("jquery"),r=t("backbone"),o=t("./abstractPanelTrait"),b=t("../../base/OptionContainer"),d=t("text!../template/tabbedPanelButtonTemplate.htm");a.exports=i.extend({},o,{onConstructor:function(t){if(t||(t={}),!t.tabs||!i.isArray(t.tabs)||0===t.tabs.length)throw new Error("Tabbed panel should have at least one tab");this.tabContainerClass=t.tabContainerClass||"tabContainer",this.tabHeaderContainerSelector=t.tabHeaderContainerSelector||"> .header > .tabHeaderContainer",this.tabHeaderContainerClass=t.tabHeaderContainerClass||"tabHeaderContainer",this.tabbedPanelClass=t.tabbedPanelClass||"tabbedPanel",this.tabs={},i.each(t.tabs,i.bind(function(t){this.tabs[t.action]=t.content,delete t.content},this))},afterSetElement:function(){this.$el.addClass(this.tabbedPanelClass),this.$tabHeaderContainer=this.$(this.tabHeaderContainerSelector),this.$tabHeaderContainer.length||(this.$tabHeaderContainer=s("<div></div>").addClass(this.tabHeaderContainerClass),this.$("> .header").append(this.$tabHeaderContainer)),this.$contentContainer.empty(),i.each(this.tabs,i.bind(function(t,e){var a=s("<div></div>").addClass(this.tabContainerClass);a.data("tab",e),a.html(t instanceof r.View?t.$el:t),this.$contentContainer.append(a)},this));var t=this.tabContainerClass.split(" ");this.$tabs=this.$("."+t[0])},afterInitialize:function(t){this.tabHeaderContainer=new b({options:t.tabs,el:this.$tabHeaderContainer,contextName:"tab",toggleClass:t.toggleClass||"active",toggle:!0,optionTemplate:t.optionTemplate||d}),this._contentRendered={},this.listenTo(this.tabHeaderContainer,i.map(t.tabs,function(t){return"tab:"+t.action}).join(" "),i.bind(n,this));for(var e=0;e<t.tabs.length;e++)if(t.tabs[e].primary){this.openTab(t.tabs[e].action);break}},onRemove:function(){i.each(this.tabs,function(t){t.remove&&t.remove()}),this.tabHeaderContainer.remove()},extension:{openTab:function(t){var e=this.tabHeaderContainer.getOptionView(t);e&&e.select()},showTab:function(t){var e=this.tabHeaderContainer.getOptionView(t);e&&e.show()},hideTab:function(t){var e=this.tabHeaderContainer.getOptionView(t);e&&e.hide()}}})});