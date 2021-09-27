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

define(["require","exports","module","backbone","underscore","./datatableTemplate.html","./DatatableModel","./datatableData"],function(e,t,a){var l=e("backbone"),n=e("underscore"),i=e("./datatableTemplate.html"),d=e("./DatatableModel"),o=e("./datatableData");a.exports=l.View.extend({template:n.template(i),initialize:function(){this.model=new d(o),this.render()},render:function(){return this.$el.html(this.template(this.model.toJSON())),this}})});