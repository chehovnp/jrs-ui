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

define(["require","exports","module","underscore","../model/SingleSelectListModel","../../scalableList/view/ListWithNavigation"],function(e,t,i){var n=e("underscore"),o=e("../model/SingleSelectListModel"),l=e("../../scalableList/view/ListWithNavigation"),s=l.extend({events:n.extend({},l.prototype.events,{"mouseup li":"onMouseup"}),initialize:function(e){var t=e.model||new o(e);l.prototype.initialize.call(this,n.extend({model:t,lazy:!0,selection:{allowed:!0,multiple:!1}},e))},onMouseup:function(){this.trigger("item:mouseup")},activate:function(e){if(this.getCanActivate()){var t=this.getActiveValue();if(t&&t.index===e)return;this.model.once("selection:change",this._triggerSelectionChanged,this).activate(e)}}});i.exports=s});