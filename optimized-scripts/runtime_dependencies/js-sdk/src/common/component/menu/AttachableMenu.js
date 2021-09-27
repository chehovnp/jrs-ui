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

define(["require","exports","module","./Menu","../base/AttachableComponent"],function(t,e,o){var n=t("./Menu"),p=t("../base/AttachableComponent");o.exports=n.extend(p.extend({constructor:function(t,e,o,s){this.padding=o||{top:0,left:0},p.call(this,e,this.padding),n.call(this,t,s)},show:function(){return p.prototype.show.apply(this,arguments),n.prototype.show.apply(this,arguments)}}).prototype)});