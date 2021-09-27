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

define(["require","exports","module","backbone.marionette","underscore","../attributes/factory/attributesDesignerFactory","../attributes/view/AttributesViewer"],function(e,t,r){var i=e("backbone.marionette"),n=e("underscore"),s=e("../attributes/factory/attributesDesignerFactory"),u=e("../attributes/view/AttributesViewer"),o=i.Controller.extend({initialize:function(e){e=e||{};var t=n.extend({},e,e.designer),r=n.extend({},e,e.viewer);this.designer=s(t.type,t),this.viewer=new u(r),this.listenTo(this.designer,"change",this._triggerChangeEvent),this.setCurrentView()},render:function(e){return this.getCurrentView().render(e),this},getCurrentView:function(){return this.currentView},cancel:function(){return this.currentView.revertChanges()},containsUnsavedItems:function(){return this.currentView.containsUnsavedItems&&this.currentView.containsUnsavedItems()},setCurrentView:function(e){this.currentView=e||this.viewer},toggleMode:function(e,t){this.getCurrentView().hide(),this.setCurrentView(e?this.designer:this.viewer),this.render(t).getCurrentView().show()},_triggerChangeEvent:function(){this.trigger("change",this.containsUnsavedItems())}});r.exports=o});