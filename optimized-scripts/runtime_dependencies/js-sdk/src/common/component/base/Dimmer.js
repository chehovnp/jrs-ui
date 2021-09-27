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

define(["require","exports","module","jquery","../../util/classUtil"],function(t,i,e){var n,s,o=t("jquery"),u=t("../../util/classUtil");e.exports=u.extend({constructor:function(t){n||(s=0,n=o("<div id='dialogDimmer' class='dimmer'></div>").css(t),o(document.body).append(n),n.hide()),s++},css:function(t){return n.css(t),this},show:function(){var t=this.getCount()||0;return this.setCount(++t),n.show(),this},hide:function(){if(this.isVisible()){var t=this.getCount();return this.setCount(--t),!t&&n.hide(),this}},setCount:function(t){n.data({count:t})},getCount:function(){return parseInt(n.data("count"),10)},isVisible:function(){return n.is(":visible")},remove:function(){this._removed||(this._removed=!0,n&&(--s||(n.remove(),n=null)))}})});