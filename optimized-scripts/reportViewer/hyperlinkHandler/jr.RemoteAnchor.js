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

define(["require","exports","module","jquery"],function(n,e,i){var t=n("jquery"),r=function(n){this.hyperlinks=n,this.reportInstance=null,this.reportContainer=null};r.prototype={register:function(){var n=this;t(n.hyperlinks[0].selector).on("click",function(e){var i=n._getHyperlinkData(t(this).attr("data-id"));n._handleHyperlinkClick(i)}).css("cursor","pointer")},handleInteraction:function(n){if("hyperlinkClicked"==n.type){var e=this._getHyperlinkData(n.data.hyperlink.id);e&&this._handleHyperlinkClick(e)}},_getHyperlinkData:function(n){var e=null;return t.each(this.hyperlinks,function(i,t){if(n===t.id)return e=t,!1}),e},_handleHyperlinkClick:function(n){n&&n.href&&(window.location=n.href)}},i.exports=r});