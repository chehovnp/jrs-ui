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

define(["require","exports","module","jquery","jCryption"],function(e,i,t){var n=e("jquery"),r=e("jCryption"),o=r.BigInt,u=r.biToHex,a=r.biToString;n.jCryption.encryptKeyWithoutRedundancy=function(e,i,t){if(""===e)return n.isFunction(t)?void t(e):e;for(var r=0,c=0;c<e.length;c++)r+=e.charCodeAt(c);for(var d=[],f=0;f<e.length;)d[f]=e.charCodeAt(f),f++;for(;d.length%i.chunkSize!=0;)d[f++]=0;!function(e){function r(){d=new o,c=0;for(var s=f;s<f+i.chunkSize;++c)d.digits[c]=e[s++],d.digits[c]+=e[s++]<<8;var g=i.barrett.powMod(d,i.e),v=16==i.radix?u(g):a(g,i.radix);if(h+=v+" ",(f+=i.chunkSize)<e.length)setTimeout(r,1);else{var y=h.substring(0,h.length-1);if(!n.isFunction(t))return y;t(y)}}var c,d,f=0,h="";setTimeout(r,1)}(d)},t.exports=n});