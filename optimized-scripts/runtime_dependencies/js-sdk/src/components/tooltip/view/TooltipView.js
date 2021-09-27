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

define(["require","exports","module","backbone","underscore","text!../template/tooltipTemplate.htm","../enum/tooltipTypesEnum","../enum/tooltipPlacements"],function(e,t,i){var o=e("backbone"),s=e("underscore"),l=e("text!../template/tooltipTemplate.htm"),n=e("../enum/tooltipTypesEnum"),a=e("../enum/tooltipPlacements"),m=s.str.capitalize,h=o.View.extend({template:s.template(l),el:function(){return this.template(this.model.toJSON())},initialize:function(e){e=e||{},this.listenTo(this.model,"change",this.render)},position:function(){var e=this.model.get("position");this.$el.offset(e)},render:function(){var e=this.$el.find(".jr-mTooltip"),t=this.$el.find(".jr-jTooltipText"),i=this.$el.find(".jr-jTooltipLabel");if(this.model.hasChanged("content")){var o=this.model.get("content");t.text(o.text),i.text(o.label)}if(this.model.hasChanged("visible")&&(this.model.get("visible")?this.$el.removeClass("jr-isInvisible"):this.$el.addClass("jr-isInvisible")),this.model.hasChanged("type")){var s=this.model.get("type");s!==h.TYPES.INFO&&e.addClass("jr-mTooltip"+m(s))}if(this.model.hasChanged("position")){var l=this.model.get("position");this.$el.offset(l)}if(this.model.hasChanged("placement")){var n=m(this.model.previousAttributes().placement),a=m(this.model.get("placement"));this.$el.removeClass("jr-mTooltip"+n),this.$el.addClass("jr-mTooltip"+a)}return this}},{PLACEMENTS:a,TYPES:n});i.exports=h});