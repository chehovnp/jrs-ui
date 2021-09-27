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

define(["require","exports","module","jquery"],function(e,n,t){var i=e("jquery"),r=function(e){this.hyperlinks=e,this.reportInstance=null,this.reportContainer=null};r.prototype={register:function(){var e=this;i(e.hyperlinks[0].selector).on("click",function(n){var t=e._getHyperlinkData(i(this).attr("data-id"));t&&e._handleHyperlinkClick(t)}).css("cursor","pointer")},handleInteraction:function(e){if("hyperlinkClicked"==e.type){var n=this._getHyperlinkData(e.data.hyperlink.id);n&&this._handleHyperlinkClick(n)}},_getHyperlinkData:function(e){var n=null;return i.each(this.hyperlinks,function(t,i){if(e===i.id)return n=i,!1}),n},_handleHyperlinkClick:function(e){e.targetValue?window.open(e.href,e.targetValue):window.location=e.href}},t.exports=r});