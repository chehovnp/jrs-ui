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

define(["require","exports","module","jquery","underscore","../view/ScalableList","../view/ListWithSelection"],function(e,t,i){var s=e("jquery"),n=e("underscore"),l=e("../view/ScalableList"),o=e("../view/ListWithSelection");i.exports={initListeners:function(){l.prototype.initListeners.call(this),this.listenTo(this.model,"selection:clear",this.clearSelection,this),this.listenTo(this.model,"selection:add",this.selectValue,this),this.listenTo(this.model,"selection:addRange",this.selectRange,this),this.listenTo(this.model,"selection:remove",this.deselectValue,this),s("body").on("mouseup",this.onGlobalMouseup)},delegateEvents:function(){var e=o.prototype.delegateEvents.apply(this,arguments);return this.$el.on("mouseup",this.eventListenerPattern,n.bind(this._onMouseup,this)),e},onMousedblclick:function(e){if((this.selection.allowed.left||this.selection.allowed.right)&&!this.getDisabled()){var t=this._getDomItemData(e.currentTarget);this._singleSelect(e,t.value,t.index),this.selectionChanged&&(this._triggerSelectionChanged(),this._triggerDblclicked(),this.selectionChanged=!1)}},onMousemove:function(){},onGlobalMouseup:function(){this.selectionStarted=!1},_multiSelect:function(e,t,i){this.selectionStarted=!0;var s=this.model;e.shiftKey?s.addRangeToSelection(t,i):e.ctrlKey||e.metaKey?s.toggleSelection(t,i):n.compact(s.getSelection()).length<=1&&(this._singleSelect(e,t,i),this._triggerSelectionChanged())},_onMouseup:function(e){var t;this.selectionStarted&&(t=this._getDomItemData(e.currentTarget),e.ctrlKey||e.shiftKey||e.metaKey||this._singleSelect(e,t.value,t.index),this.selectionChanged&&(this._triggerSelectionChanged(),this.selectionChanged=!1)),this.selectionStarted=!1}}});