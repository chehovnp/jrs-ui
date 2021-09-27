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

define(["require","exports","module","./AttachableComponent","jquery","underscore"],function(t,o,e){var n=t("./AttachableComponent"),i=t("jquery"),s=t("underscore");e.exports=n.extend({constructor:function(t,o,e){this.additionalSettings=e||{},n.apply(this,arguments),s.bindAll(this,"_onElementClick","_onDocumentMousedown"),this.$attachTo.on("click",this._onElementClick),i("body").on("mousedown",this._onDocumentMousedown)},_onElementClick:function(){this.$attachTo.attr("disabled")||(this.$el.is(":visible")&&this.additionalSettings.toggleMode?this.hide():this.show())},_onDocumentMousedown:function(t){i.contains(this.$el[0],t.target)||this.$el.is(t.target)||i.contains(this.$attachTo[0],t.target)||this.$attachTo.is(t.target)||this.hide()},remove:function(){this.$attachTo.off("click",this._onElementClick),i("body").off("mousedown",this._onDocumentMousedown)}})});