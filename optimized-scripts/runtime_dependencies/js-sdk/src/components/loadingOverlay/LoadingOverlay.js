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

define(["require","exports","module","underscore","backbone","text!./template/overlayLayout.htm"],function(e,t,i){var r=e("underscore"),n=e("backbone"),s=e("text!./template/overlayLayout.htm");i.exports=n.View.extend({template:r.template(s),initialize:function(e){this.delay=e.delay,this.render()},render:function(){return this.$el.append(this.template()),this.$elSpinner=this.$(".jr-mSpinnerDatatable"),this.$elOverlay=this.$(".jr-mOverlay"),this},show:function(e){var t=this,i=function(){t.$elSpinner.show(),t.$elOverlay.show()};this.delay||e?this._timer||(this._timer=setTimeout(i,this.delay||e)):i()},hide:function(){this._timer&&(clearTimeout(this._timer),this._timer=null),this.$elSpinner.hide(),this.$elOverlay.hide()},remove:function(){return this.$elSpinner.remove(),this.$elOverlay.remove(),this.stopListening(),this}})});