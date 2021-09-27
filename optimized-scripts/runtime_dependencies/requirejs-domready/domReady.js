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

define([],function(){"use strict";function n(n){var e;for(e=0;e<n.length;e+=1)n[e](r)}function e(){var e=u;l&&e.length&&(u=[],n(e))}function t(){l||(l=!0,c&&clearInterval(c),e())}function o(n){return l?n(r):u.push(n),o}var d,i,c,a="undefined"!=typeof window&&window.document,l=!a,r=a?document:null,u=[];if(a){if(document.addEventListener)document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1);else if(window.attachEvent){window.attachEvent("onload",t),i=document.createElement("div");try{d=null===window.frameElement}catch(n){}i.doScroll&&d&&window.external&&(c=setInterval(function(){try{i.doScroll(),t()}catch(n){}},30))}"complete"===document.readyState&&t()}return o.version="2.0.1",o.load=function(n,e,t,d){d.isBuild?t(null):o(t)},o});