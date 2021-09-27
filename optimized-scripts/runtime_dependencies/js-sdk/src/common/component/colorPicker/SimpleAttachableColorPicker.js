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

define(["require","exports","module","./SimpleColorPicker","../base/ClickComponent","jquery"],function(e,o,t){var i=e("./SimpleColorPicker"),p=e("../base/ClickComponent"),r=e("jquery");t.exports=i.extend(p.extend({constructor:function(e,o,t){p.call(this,e,o),i.call(this,t)},initialize:function(){i.prototype.initialize.apply(this),this.hide(),r("body").append(this.$el)},_selectColor:function(e){this.hide(),i.prototype._selectColor.apply(this,arguments)},remove:function(){p.prototype.remove.apply(this,arguments),i.prototype.remove.apply(this,arguments)}}).prototype)});