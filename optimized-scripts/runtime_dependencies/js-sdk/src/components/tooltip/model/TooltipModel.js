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

define(["require","exports","module","backbone","../enum/tooltipPlacements","../enum/tooltipTypesEnum","../../../common/extension/backboneValidationExtension","underscore","../../../common/logging/logger"],function(e,o,t){var n=e("backbone"),i=e("../enum/tooltipPlacements"),l=e("../enum/tooltipTypesEnum"),s=e("../../../common/extension/backboneValidationExtension"),p=e("underscore"),c=e("../../../common/logging/logger"),a=n.Model.extend({defaults:{visible:!1,defaultType:l.INFO,type:l.INFO,offset:{top:0,left:0},content:{title:void 0,text:void 0},placement:i.BOTTOM,position:{top:0,left:0}},validation:{visible:{type:"boolean"},content:{type:"object"},type:{type:"string"},offset:{type:"object"}},initialize:function(e){e=e||{},this.log=e.log||c,this.listenTo(this,"invalid",function(e,o){this.log.error(o)})}});p.extend(a.prototype,s.mixin),t.exports=a});