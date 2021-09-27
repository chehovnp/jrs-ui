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

define(["require","exports","module","prototype","../util/utils.common"],function(t,e,i){var n=t("prototype"),a=n.$,p=n.Class,r=n.Template,d=t("../util/utils.common"),o=d.isIE,s=p.create({initialize:function(t,e){if(t&&t[0]){var i=null;e&&(i=e),t.each(function(t){this.truncate(t,i)}.bind(this))}},truncate:function(t,e){if("ABBR"==t.nodeName){var i=t.title.replace("&quot;",'"');t=t.parentNode,t.update(i.strip().escapeHTML())}var n=Object.isUndefined(t.innerText)?t.textContent:t.innerText;t.insert(s.template.evaluate({divId:s.tmpDivId,spanId:s.tmpSpanId}));var p=a(s.tmpSpanId);p.insert(n.escapeHTML());var r=e||t.getWidth();if(p.getWidth()<=r)return void a(s.tmpDivId).remove();for(var d=n,u=0,c=n.length,l=(c-u)/2;l>1;)l+=u,d=n.substr(0,l),o()?p.innerText=d:p.update(d.escapeHTML()),p.getWidth()+30>r?c=l:u=l,l=(c-u)/2;a(s.tmpDivId).remove(),t.update(this.truncateString(this.ellipsifyString(d.escapeHTML()),n.escapeHTML().replace('"',"&quot;")))},untruncate:function(t){t.each(function(t){"ABBR"==t.nodeName&&t.update(t.title.strip().escapeHTML())})},ellipsifyString:function(t){return t+"&hellip;"},truncateString:function(t,e){return'<abbr title="'+e+'">'+t+"</abbr>"}});s.tmpDivId="truncator-tmp-div",s.tmpSpanId="truncator-tmp-span",s.template=new r('    <div id="#{divId}" style="width:9999px; left:-9999px; top:-9999px; display:block; position: absolute">        <span id="#{spanId}"></span>    </div>'),i.exports=s});