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

define(["require","exports","module","jquery","underscore","../../util/classUtil","./util/attachableComponentPositionUtil"],function(t,i,e){var s=t("jquery"),o=t("underscore"),h=t("../../util/classUtil"),n=t("./util/attachableComponentPositionUtil");e.exports=h.extend({constructor:function(t,i){this.padding=i||{top:5,left:0},this.setAttachTo(t)},setAttachTo:function(t){t&&s(t).length>0?this.$attachTo=s(t):this.$attachTo=s("<div></div>")},show:function(){var t=n.getPosition(this.$attachTo[0],this.padding,this.$el[0]);o.extend(this,{top:t.top,left:t.left}),this.$el.css({top:this.top,left:this.left}),this.$el.show(),this.trigger("show",this)},hide:function(){return this.$el.hide(),this.trigger("hide",this),this}})});