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

define(["require","exports","module","jquery","backbone","underscore","text!./template/sizerTemplate.htm","../../common/logging/logger","jquery-ui/ui/widgets/resizable"],function(e,i,t){var n=e("jquery"),r=e("backbone"),s=e("underscore"),o=e("text!./template/sizerTemplate.htm"),a=e("../../common/logging/logger");e("jquery-ui/ui/widgets/resizable");var h=a.register("Sizer");t.exports=r.View.extend({template:s.template(o),el:function(){return this.template()},initialize:function(e){this.container=e.container,this.sizerOptions=s.clone(e),delete this.sizerOptions.container,this.$container=n(this.container),this.render()},render:function(){return s.defaults(this.sizerOptions,{minHeight:this.$container.height(),handles:{s:this.$el}}),this.$container.resizable(this.sizerOptions),this},show:function(){return this.$el.removeClass("jr-isInvisible"),this},hide:function(){return this.$el.addClass("jr-isInvisible"),this},updateMinMax:function(e){this.$container.resizable("option","minHeight",e.minHeight),this.$container.resizable("option","maxHeight",e.maxHeight)},remove:function(){try{this.$container.resizable("destroy")}catch(e){h.debug(e)}r.View.prototype.remove.apply(this,arguments)}})});