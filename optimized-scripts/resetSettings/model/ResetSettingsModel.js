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

define(["require","exports","module","backbone.epoxy"],function(e,i,t){var n=e("backbone.epoxy"),o=n.Model.extend({defaults:{id:void 0,name:void 0,value:"",description:""},initialize:function(){this.get("id")||this.setId()},url:function(){var e=encodeURIComponent(this.id).replace("'","%27");return e=e.replace("'","%27"),this.collection.url(this.isNew()?"":e)},setId:function(){var e=this.get("name");e!==this.get("id")&&this.set("id",e)}});t.exports=o});