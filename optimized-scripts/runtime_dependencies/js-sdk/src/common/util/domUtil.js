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

define(["require","exports","module","underscore"],function(t,e,o){var r=t("underscore"),n=0;o.exports={getScrollbarWidth:function(){if(n)return n;var t=document.createElement("div");return t.style.width="100px",t.style.height="100px",t.style.overflow="scroll",t.style.position="absolute",t.style.top="-9999px",document.body.appendChild(t),n=t.offsetWidth-t.clientWidth,document.body.removeChild(t),n},hasScrollBar:function(t,e){e="vertical"===e?"scrollTop":"scrollLeft";var o=!!t[e];return o||(t[e]=1,o=!!t[e],t[e]=0),o},isScrollable:function(t){var e=window.getComputedStyle?window.getComputedStyle(t):t.currentStyle;if(e)return"scroll"==e.overflow||"auto"==e.overflow||"scroll"==e.overflowX||"auto"==e.overflowX||"scroll"==e.overflowY||"auto"==e.overflowY},getElementOffset:function(t){var e=0,o=0;if(t.offsetParent)for(e=t.offsetLeft,o=t.offsetTop;t=t.offsetParent;)e+=t.offsetLeft,o+=t.offsetTop;return{left:e,top:o}},getMargins:function(t){var e={top:parseInt(t.css("margin-top"),10),right:parseInt(t.css("margin-right"),10),bottom:parseInt(t.css("margin-bottom"),10),left:parseInt(t.css("margin-left"),10)};return r.each(e,function(t,o){isNaN(e[o])&&(e[o]=0)}),e},getPaddings:function(t){var e={top:parseInt(t.css("padding-top"),10),right:parseInt(t.css("padding-right"),10),bottom:parseInt(t.css("padding-bottom"),10),left:parseInt(t.css("padding-left"),10)};return r.each(e,function(t,o){isNaN(e[o])&&(e[o]=0)}),e},disableBackForwordCache:function(){window.onpageshow=function(){event.persisted&&window.location.reload()}}}});