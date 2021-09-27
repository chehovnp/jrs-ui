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

define(["require","exports","module","backbone","underscore","../model/JdbcDriverModel"],function(e,t,i){var r=e("backbone"),n=e("underscore"),o=e("../model/JdbcDriverModel");i.exports=r.Collection.extend({model:o,initialize:function(e,t){this.options=t},getDefaultDriver:function(){var e=this.find(function(e){return!n.isUndefined(e.get("default"))&&!1!==e.get("default")});return e||this.first()},set:function(e,t){return void 0===t&&(t={}),n.extend(t,this.options),r.Collection.prototype.set.call(this,e,t)},getDriverByClass:function(e){var t=this.findWhere({jdbcDriverClass:e});return t||this.findWhere({jdbcDriverClass:o.OTHER_DRIVER})},getAllPossibleCustomAttributes:function(){return n.keys(o.VALIDATION_PATTERNS)}})});