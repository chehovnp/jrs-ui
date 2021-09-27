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

define(["module"],function(e){"use strict";function n(e,n){return void 0===e||""===e?n:e}function t(e,t,r,o){if(t===o)return!0;if(e===r){if("http"===e)return n(t,"80")===n(o,"80");if("https"===e)return n(t,"443")===n(o,"443")}return!1}var r,o,i,a,s,u=["Msxml2.XMLHTTP","Microsoft.XMLHTTP","Msxml2.XMLHTTP.4.0"],c=/^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,l=/<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,f="undefined"!=typeof location&&location.href,p=f&&location.protocol&&location.protocol.replace(/\:/,""),d=f&&location.hostname,v=f&&(location.port||void 0),m={},g=e.config&&e.config()||{};return r={version:"2.0.15",strip:function(e){if(e){e=e.replace(c,"");var n=e.match(l);n&&(e=n[1])}else e="";return e},jsEscape:function(e){return e.replace(/(['\\])/g,"\\$1").replace(/[\f]/g,"\\f").replace(/[\b]/g,"\\b").replace(/[\n]/g,"\\n").replace(/[\t]/g,"\\t").replace(/[\r]/g,"\\r").replace(/[\u2028]/g,"\\u2028").replace(/[\u2029]/g,"\\u2029")},createXhr:g.createXhr||function(){var e,n,t;if("undefined"!=typeof XMLHttpRequest)return new XMLHttpRequest;if("undefined"!=typeof ActiveXObject)for(n=0;n<3;n+=1){t=u[n];try{e=new ActiveXObject(t)}catch(e){}if(e){u=[t];break}}return e},parseName:function(e){var n,t,r,o=!1,i=e.lastIndexOf("."),a=0===e.indexOf("./")||0===e.indexOf("../");return-1!==i&&(!a||i>1)?(n=e.substring(0,i),t=e.substring(i+1)):n=e,r=t||n,i=r.indexOf("!"),-1!==i&&(o="strip"===r.substring(i+1),r=r.substring(0,i),t?t=r:n=r),{moduleName:n,ext:t,strip:o}},xdRegExp:/^((\w+)\:)?\/\/([^\/\\]+)/,useXhr:function(e,n,o,i){var a,s,u,c=r.xdRegExp.exec(e);return!c||(a=c[2],s=c[3],s=s.split(":"),u=s[1],s=s[0],(!a||a===n)&&(!s||s.toLowerCase()===o.toLowerCase())&&(!u&&!s||t(a,u,n,i)))},finishLoad:function(e,n,t,o){t=n?r.strip(t):t,g.isBuild&&(m[e]=t),o(t)},load:function(e,n,t,o){if(o&&o.isBuild&&!o.inlineText)return void t();g.isBuild=o&&o.isBuild;var i=r.parseName(e),a=i.moduleName+(i.ext?"."+i.ext:""),s=n.toUrl(a),u=g.useXhr||r.useXhr;if(0===s.indexOf("empty:"))return void t();!f||u(s,p,d,v)?r.get(s,function(n){r.finishLoad(e,i.strip,n,t)},function(e){t.error&&t.error(e)}):n([a],function(e){r.finishLoad(i.moduleName+"."+i.ext,i.strip,e,t)})},write:function(e,n,t,o){if(m.hasOwnProperty(n)){var i=r.jsEscape(m[n]);t.asModule(e+"!"+n,"define(function () { return '"+i+"';});\n")}},writeFile:function(e,n,t,o,i){var a=r.parseName(n),s=a.ext?"."+a.ext:"",u=a.moduleName+s,c=t.toUrl(a.moduleName+s)+".js";r.load(u,t,function(n){var t=function(e){return o(c,e)};t.asModule=function(e,n){return o.asModule(e,c,n)},r.write(e,u,t,i)},i)}},"node"===g.env||!g.env&&"undefined"!=typeof process&&process.versions&&process.versions.node&&!process.versions["node-webkit"]&&!process.versions["atom-shell"]?(o=require.nodeRequire("fs"),r.get=function(e,n,t){try{var r=o.readFileSync(e,"utf8");"\ufeff"===r[0]&&(r=r.substring(1)),n(r)}catch(e){t&&t(e)}}):"xhr"===g.env||!g.env&&r.createXhr()?r.get=function(e,n,t,o){var i,a=r.createXhr();if(a.open("GET",e,!0),o)for(i in o)o.hasOwnProperty(i)&&a.setRequestHeader(i.toLowerCase(),o[i]);g.onXhr&&g.onXhr(a,e),a.onreadystatechange=function(r){var o,i;4===a.readyState&&(o=a.status||0,o>399&&o<600?(i=new Error(e+" HTTP status: "+o),i.xhr=a,t&&t(i)):n(a.responseText),g.onXhrComplete&&g.onXhrComplete(a,e))},a.send(null)}:"rhino"===g.env||!g.env&&"undefined"!=typeof Packages&&"undefined"!=typeof java?r.get=function(e,n){var t,r,o=new java.io.File(e),i=java.lang.System.getProperty("line.separator"),a=new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(o),"utf-8")),s="";try{for(t=new java.lang.StringBuffer,r=a.readLine(),r&&r.length()&&65279===r.charAt(0)&&(r=r.substring(1)),null!==r&&t.append(r);null!==(r=a.readLine());)t.append(i),t.append(r);s=String(t.toString())}finally{a.close()}n(s)}:("xpconnect"===g.env||!g.env&&"undefined"!=typeof Components&&Components.classes&&Components.interfaces)&&(i=Components.classes,a=Components.interfaces,Components.utils.import("resource://gre/modules/FileUtils.jsm"),s="@mozilla.org/windows-registry-key;1"in i,r.get=function(e,n){var t,r,o,u={};s&&(e=e.replace(/\//g,"\\")),o=new FileUtils.File(e);try{t=i["@mozilla.org/network/file-input-stream;1"].createInstance(a.nsIFileInputStream),t.init(o,1,0,!1),r=i["@mozilla.org/intl/converter-input-stream;1"].createInstance(a.nsIConverterInputStream),r.init(t,"utf-8",t.available(),a.nsIConverterInputStream.DEFAULT_REPLACEMENT_CHARACTER),r.readString(t.available(),u),r.close(),t.close(),n(u.value)}catch(e){throw new Error((o&&o.path||"")+": "+e)}}),r});