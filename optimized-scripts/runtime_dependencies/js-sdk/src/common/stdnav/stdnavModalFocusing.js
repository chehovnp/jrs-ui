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

define(["require","exports","module","jquery"],function(t,o,n){var a=t("jquery");n.exports={beginModalFocus:function(t){if(t){!0===this.modalDialogActive&&this.endModalFocus(this.modalDialogRoot);var o=a(t),n=a("body *").filter(function(){return!(a.contains(t,this)||o.is(this))});this.modalDialogActive=!0,this.modalDialogRoot=t,n.each(function(t,o){var n=a(o),i=n.attr("tabIndex");void 0===i?(n.attr("js-nonmodal-tabindex","undefined"),n.attr("tabIndex","-1")):(n.attr("js-nonmodal-tabindex",i),n.attr("tabIndex","-1"))})}},endModalFocus:function(t){var o,n;t?(o=a(t),n=a("body *").filter(function(){return!(a.contains(o,this)||o.is(this))})):(o=a(),n=a("body *")),n.each(function(t,o){var n=a(o),i=n.attr("js-nonmodal-tabindex");void 0===i||("undefined"===i?(n.removeAttr("js-nonmodal-tabindex"),n.removeAttr("tabIndex")):(n.removeAttr("js-nonmodal-tabindex"),n.attr("tabIndex",i)))}),this.modalDialogActive=!1,this.modalDialogRoot=null}}});