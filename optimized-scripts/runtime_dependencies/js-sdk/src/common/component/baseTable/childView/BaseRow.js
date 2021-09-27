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

define(["require","exports","module","underscore","backbone.marionette","../../../view/mixin/epoxyViewMixin","../behaviors/TooltipRowBehavior"],function(e,i,o){var t=e("underscore"),n=e("backbone.marionette"),r=e("../../../view/mixin/epoxyViewMixin"),p=e("../behaviors/TooltipRowBehavior"),s=n.ItemView.extend({behaviors:{Tooltip:{behaviorClass:p}},initialize:function(){this.epoxifyView()},render:function(){return n.ItemView.prototype.render.apply(this,arguments),this.applyEpoxyBindings(),this},remove:function(){this.removeEpoxyBindings(),n.ItemView.prototype.remove.apply(this,arguments)}});t.extend(s.prototype,r),o.exports=s});