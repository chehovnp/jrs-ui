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

define(["require","exports","module","underscore","jquery","backbone","text!./template/overlayTemplate.htm"],function(e,t,i){var s=e("underscore"),l=(e("jquery"),e("backbone")),n=e("text!./template/overlayTemplate.htm");i.exports=l.View.extend({el:function(){return this.template()},template:s.template(n),initialize:function(e){e=s.defaults(e||{},{zIndex:4e3}),this.delay=e.delay,this.$el.css({zIndex:e.zIndex}),this.$el.parent().css({position:"relative"})},show:function(e){var t=this,i=function(){t.$el.show(),t.$el.removeClass("jr-isHidden")};this.delay||e?this._timer||(this._timer=setTimeout(i,this.delay||e)):i()},hide:function(){this._timer&&(clearTimeout(this._timer),this._timer=null),this.$el.hide(),this.$el.addClass("jr-isHidden")}})});