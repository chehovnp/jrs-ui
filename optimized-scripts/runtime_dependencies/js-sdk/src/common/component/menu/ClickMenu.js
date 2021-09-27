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

define(["require","exports","module","./Menu","../base/ClickComponent"],function(t,e,o){function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t},r.apply(this,arguments)}var p=t("./Menu"),n=t("../base/ClickComponent");o.exports=p.extend(n.extend({constructor:function(t,e,o){o||(o={});var i=r({toggleMode:o.menuToggleMode},o);n.call(this,e,o.padding,i);try{p.call(this,t,o)}catch(t){throw n.prototype.remove.apply(this,arguments),t}},show:function(){return n.prototype.show.apply(this,arguments),p.prototype.show.apply(this,arguments)},remove:function(){n.prototype.remove.apply(this,arguments),p.prototype.remove.apply(this,arguments)}}).prototype)});