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

define(["require","exports","module","underscore","./BaseDataSourceModel","../collection/SubDataSourceCollection","runtime_dependencies/bi-repository/src/bi/repository/enum/repositoryResourceTypes","bundle!jasperserver_messages"],function(e,r,t){var s=e("underscore"),o=e("./BaseDataSourceModel"),a=e("../collection/SubDataSourceCollection"),u=e("runtime_dependencies/bi-repository/src/bi/repository/enum/repositoryResourceTypes"),n=e("bundle!jasperserver_messages");t.exports=o.extend({type:u.VIRTUAL_DATA_SOURCE,defaults:function(){var e={};return s.extend(e,o.prototype.defaults,{subDataSources:[]}),e}(),validation:function(){var e={};return s.extend(e,o.prototype.validation,{subDataSources:[{arrayMinLength:1,msg:n["ReportDataSourceValidator.error.sub.datasources.needed"]},{fn:function(e,r,t){var o=s.map(e,function(e){return e.id.toLowerCase()}),a={},u=[];s.each(o,function(e){e in a?a[e]++:a[e]=1});for(var i in a)a[i]>1&&u.push(i);if(u.length>0)return n["ReportDataSourceValidator.error.sub.datasources.id.duplicates"].replace("{0}",u.join(", "))}},{fn:function(){for(var e=null,r=0;r<this.subDataSources.models.length;r++)this.subDataSources.models[r].isValid(!0)||(e=!0);return e}}]}),e}(),initialize:function(e,r){o.prototype.initialize.apply(this,arguments),this.subDataSources=new a(this.get("subDataSources")),this.listenTo(this.subDataSources,"change reset",this.updateSubDataSourcesArray),r.dependentResources&&r.dependentResources.length>0&&this.subDataSources.forEach(function(e){e.set("readOnly",!0)})},updateSubDataSourcesArray:function(){this.set("subDataSources",this.subDataSources.toJSON())}})});