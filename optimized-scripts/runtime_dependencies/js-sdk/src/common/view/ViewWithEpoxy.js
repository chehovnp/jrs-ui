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

define(["require","exports","module","backbone","underscore","./mixin/epoxyViewMixin"],function(e,i,t){var o=e("backbone"),n=e("underscore"),r=e("./mixin/epoxyViewMixin"),p=o.View.extend({el:function(){return this.template({i18n:this.i18n,model:this.model.toJSON(),options:this.options})},constructor:function(e){if(e||(e={}),!e.template)throw new Error("Template must be defined");if(!e.model)throw new Error("Model must be defined");this.template=n.template(e.template),this.model=e.model,this.i18n=e.i18n||{},this.options=n.omit(e,"model","template","i18n"),o.View.apply(this,arguments)},initialize:function(){this.epoxifyView()},render:function(){return this.applyEpoxyBindings(),this},remove:function(){this.removeEpoxyBindings(),o.View.prototype.remove.apply(this,arguments)}});n.extend(p.prototype,r),t.exports=p});