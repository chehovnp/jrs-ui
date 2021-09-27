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

define(["require","exports","module","jquery"],function(t,e,i){var o=t("jquery"),n=function(t){return{top:t.attachToOffset.top+t.attachToSize.height+t.padding.top,left:t.attachToOffset.left}},h=function(t){return t.attachToOffset.top-t.elementSize.height-t.padding.top},f=function(t){return t.attachToOffset.left+t.attachToSize.width},a=function(t){return t.attachToOffset.left-t.elementSize.width},r=function(t){return t.attachToOffset.top-t.elementSize.height/2-t.padding.top},d=function(t){return t.attachToOffset.left+t.attachToSize.width/2-t.elementSize.width/2},c=function(t){return t.attachToOffset.left+t.attachToSize.width-t.elementSize.width};i.exports={getPosition:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{top:0,left:0},i=arguments.length>2?arguments[2]:void 0,u=arguments.length>3?arguments[3]:void 0,l=u||o,g=l("body"),p=l(t),s=l(i),T=p.offset()||{top:0,left:0},w=p[0].tagName&&"input"===p[0].tagName.toLowerCase()?p.outerHeight()||0:p.height()||0,z=p.width()||0,S=g.height()||0,m=g.width()||0,O=s.innerWidth()||0,v=s.innerHeight()||0,q={attachToOffset:T,attachToSize:{width:z,height:w},elementSize:{width:O,height:v},padding:e},y=n(q),j=y.top,x=y.left,H=!1;return j+v>S&&(j=h(q)),j<0&&(j=r(q),x=f(q),H=!0),x+O>m&&(x=H?a(q):c(q)),x<0&&(x=d(q)),j<0&&(j=0),x<0&&(x=0),{top:j,left:x}}}});