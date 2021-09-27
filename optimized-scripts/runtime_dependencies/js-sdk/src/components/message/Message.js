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

define(["require","exports","module","backbone","underscore","text!./template/messageTemplate.htm","./enums/messageTypes"],function(e,t,s){var i=e("backbone"),n=e("underscore"),l=e("text!./template/messageTemplate.htm"),m=e("./enums/messageTypes"),o=i.Model.extend({defaults:{visible:!0,icon:!1,title:"Title",text:"Text",type:m.Type.Info}});s.exports=i.View.extend({template:n.template(l),initialize:function(e){this.model=new o(e),this.listenTo(this.model,"change",this.render),this.render()},render:function(){return this.$el.html(this.template(this.model.toJSON())),this}},m)});