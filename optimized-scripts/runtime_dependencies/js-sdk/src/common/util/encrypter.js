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

define(["require","exports","module","../extension/jQueryjCryptionExtensions"],function(e,n,t){var r=e("../extension/jQueryjCryptionExtensions"),i={};i.code="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",i.encode16BitString=function(e){var n,t,r,o,c,a,h,f,d,u,s,y,p=[],v="",A=i.code;if(s=e,(u=s.length%2)>0)for(;u++<2;)v+="===",s+="\0";for(u=0;u<s.length;u+=2)n=s.charCodeAt(u),t=s.charCodeAt(u+1),r=n<<16|t,o=r>>26&63,c=r>>20&63,a=r>>14&63,h=r>>8&63,f=r>>2&63,d=3&r,p[u/2]=A.charAt(o)+A.charAt(c)+A.charAt(a)+A.charAt(h)+A.charAt(f)+A.charAt(d);return y=p.join(""),y=y.slice(0,y.length-v.length)+v},i.decode16BitString=function(e){var n,t,r,o,c,a,h,f,d,u,s,y,p=[],v=i.code;y=e;for(var A=0;A<y.length;A+=6)c=v.indexOf(y.charAt(A)),a=v.indexOf(y.charAt(A+1)),h=v.indexOf(y.charAt(A+2)),f=v.indexOf(y.charAt(A+3)),d=v.indexOf(y.charAt(A+4)),u=v.indexOf(y.charAt(A+5)),s=c<<26|a<<20|h<<14|f<<8|d<<2|3&u,n=s>>>24&255,t=s>>>16&255,r=s>>>8&255,o=255&s,p[A/6]=String.fromCharCode(n<<8|t,r<<8|o),64==f&&(p[A/6]=p[A/6]=String.fromCharCode(n<<8|t));return p.join("")};var o={encryptData:function(e,n){if(!e)return void n();r.jCryption.getKeys("GetEncryptionKey",function(t){var r=t,i=[];for(var c in e)i.push(c);var a={};o._encryptDataRecursive(e,i,0,r,a,n)})},_encryptDataRecursive:function(e,n,t,i,c,a){if(n&&n.length!=t){var h=encodeURIComponent(e[n[t]]),f=h.split("").reverse().join("");r.jCryption.encryptKeyWithoutRedundancy(f,i,function(r){c[n[t]]=r,n.length==t+1?a(c):o._encryptDataRecursive(e,n,t+1,i,c,a)})}}};t.exports=o});