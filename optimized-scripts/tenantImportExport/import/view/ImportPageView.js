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

define(["require","exports","module","backbone","runtime_dependencies/js-sdk/src/jrs.configs","./ImportView","../../export/enum/exportTypesEnum"],function(e,i,t){var n=e("backbone"),o=e("runtime_dependencies/js-sdk/src/jrs.configs"),r=e("./ImportView"),s=e("../../export/enum/exportTypesEnum");t.exports=n.View.extend({events:{"click #importButton":"doImport"},initialize:function(){this.importView=new r,this.importView.render({tenantId:o.isProVersion?"organizations":null,type:o.isProVersion?s.SERVER_PRO:s.SERVER_CE}),this.$el.find(".body").append(this.importView.el),this.listenTo(this.importView.model,"validated",function(e){var i=this.$("#importButton"),t=e?null:"disabled";i.attr("disabled",t)},this)},doImport:function(){this.importView.doImport()}})});