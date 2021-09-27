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

define(["require","exports","module","backbone","../../../components/components.templateengine","underscore"],function(e,t,r){var n=e("backbone"),o=e("../../../components/components.templateengine"),s=e("underscore");r.exports=n.Model.extend({defaults:{items:[]},url:function(){return o.renderUrl(this.urlTemplate,this.context,!0)},parse:function(e){return{items:e?e.role?e.role:e.user:[]}},defaultErrorHandler:function(e,t){var r;try{r=JSON.parse(t.responseText)}catch(e){r=null}this.trigger("error:server",t.status,r,e)},setContext:function(e){this.context=s.extend(this.context||{searchString:"",excludeSubOrgs:!1},e),this.fetch({error:s.bind(this.defaultErrorHandler,this)})}},{instance:function(e,t){var r=new this;return r.urlTemplate=e,t&&r.setContext(t),r}})});