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

define(["require","exports","module","jquery"],function(e,i,n){var r=e("jquery");n.exports={isMozilla:function(){return"Netscape"===navigator.appName},isFirefox:function(){return-1!==navigator.userAgent.toLowerCase().indexOf("firefox")},isWebKitEngine:function(){return r.browser&&r.browser.webkit},isChrome:function(){return navigator.userAgent.toLowerCase().indexOf("chrome")},isIPad:function(){return"iPad"==navigator.platform},isIOS:function(){return navigator.userAgent.match(/(iPad|iPhone|iPod)/g)},isAndroid:function(){return navigator.userAgent.toLowerCase().indexOf("android")},isIE:function(){return"Microsoft Internet Explorer"===navigator.appName||navigator.userAgent.indexOf("Trident/")>=0||this.isEdge()},isIE6:function(){return this.isIEVersion(6)},isIE7:function(){return this.isIEVersion(7)},isIE8:function(){return this.isIEVersion(8)},isIE9:function(){return this.isIEVersion(9)},isIE10:function(){return this.isIEVersion(10)},isIE11:function(){return this.isIEVersion(11)},isEdge:function(){return"Netscape"===navigator.appName&&navigator.userAgent.indexOf("Edge/")>=0},isIEVersion7Upwards:function(){return this.getIEVersion()>=7},isIEVersion:function(e){return this.getIEVersion()===e},getIEVersion:function(){var e=0;if(this.getIEVersion.version>=0)return this.getIEVersion.version;if(this.isIE())if("Netscape"===navigator.appName){var i=navigator.userAgent,n=new RegExp("Trident/.*rv:([0-9]{1,}[\\.0-9]{0,})");null!=n.exec(i)&&(e=parseFloat(RegExp.$1))}else{var r=navigator.appVersion.split("MSIE")[1];e=parseFloat(r)}return this.getIEVersion.version=e,e}}});