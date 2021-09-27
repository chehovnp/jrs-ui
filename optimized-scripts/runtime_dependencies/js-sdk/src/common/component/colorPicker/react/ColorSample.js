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

define(["require","exports","module","react","../util/colorConvertUtil","./enum/colors"],function(r,o,e){var l=r("react"),t=r("../util/colorConvertUtil"),n=r("./enum/colors"),c="".concat("jr-mControl-launcher-swatchLight"," jr-mControl-launcher-swatchTransparent"),a=function(r){return r===n.TRANSPARENT?c:t.isColorDark(r)?"":"jr-mControl-launcher-swatchLight"},u=function(r){var o={backgroundColor:r.color},e="jr-mControl-launcher-swatch ".concat(a(r.color)," jr");return l.createElement("div",{className:"jr-mControl-launcher jr",onClick:r.onClick},l.createElement("div",{className:e,style:o}),l.createElement("div",{className:"jr-mControl-launcher-hex jr"},r.label))};o.ColorSample=u});