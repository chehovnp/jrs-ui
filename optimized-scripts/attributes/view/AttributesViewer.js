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

define(["require","exports","module","jquery","underscore","bundle!AttributesBundle","../../attributes/enum/attributesTypesEnum","runtime_dependencies/js-sdk/src/common/component/baseTable/BaseTable","../../attributes/factory/tableTemplatesFactory","css!attributes.css"],function(t,e,i){var s=t("jquery"),n=t("underscore"),o=t("bundle!AttributesBundle"),r=t("../../attributes/enum/attributesTypesEnum"),l=t("runtime_dependencies/js-sdk/src/common/component/baseTable/BaseTable"),u=t("../../attributes/factory/tableTemplatesFactory");t("css!attributes.css");var a=l.extend({className:"attributesViewer",templateHelpers:function(){return{i18n:o,type:this.type,types:r}},initialize:function(t){t=t||{},this.type=t.type,this.childViewOptions=n.extend({},t.childViewOptions,{type:this.type}),this.$container=s(t.$container),l.prototype.initialize.apply(this,arguments),this.tooltip&&this._initTooltipEvents()},render:function(){return l.prototype.render.apply(this,arguments),this.$container.append(this.$el),this},setContext:function(t,e){return this.collection.setContext(t,e)},show:function(){this.$el.show()},hide:function(){this.$el.hide()},getTemplate:function(){var t=u({readOnly:!0,empty:!this.collection.models.length});return n.template(t)},_initTooltipEvents:function(){this.listenTo(this,"childview:mouseover",this._onChildViewMouseOver),this.listenTo(this,"childview:mouseout",this._onChildViewMouseOut)},_onChildViewMouseOver:function(t,e,i){var o=s(i.target).closest(".table-column");o.hasClass("name")&&(e=n.pick(e.toJSON(),["name","description"])),o.hasClass("value")&&(e=n.pick(e.toJSON(),"value")),this.tooltip.show(e)},_onChildViewMouseOut:function(t,e,i){this.tooltip.hide()}});i.exports=a});