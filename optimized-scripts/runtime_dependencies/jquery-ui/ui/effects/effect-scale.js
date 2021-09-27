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

!function(e){"function"==typeof define&&define.amd?define(["jquery","../version","../effect","./effect-size"],e):e(jQuery)}(function(e){return e.effects.define("scale",function(f,t){var n=e(this),i=f.mode,c=parseInt(f.percent,10)||(0===parseInt(f.percent,10)?0:"effect"!==i?0:100),o=e.extend(!0,{from:e.effects.scaledDimensions(n),to:e.effects.scaledDimensions(n,c,f.direction||"both"),origin:f.origin||["middle","center"]},f);f.fade&&(o.from.opacity=1,o.to.opacity=0),e.effects.effect.size.call(this,o,t)})});