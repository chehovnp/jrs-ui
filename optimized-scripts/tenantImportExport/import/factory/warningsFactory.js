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

define(["require","exports","module","bundle!ImportExportBundle","underscore"],function(e,r,o){function t(e,r){var o={};return n.each(e,function(e,t){o[e]=r[t]}),o}var s=e("bundle!ImportExportBundle"),n=e("underscore"),m={};m["import.resource.uri.too.long"]=[{msg:s["import.resource.uri.too.long"],parameters:["resourceURI"]},{msg:s["import.resource.uri.too.long.length"],parameters:["resourceURI","maxURILength"]}],m["import.access.denied"]=[{msg:s["import.access.denied"],parameters:["resourceURI"]}],m["import.resource.not.found"]=[{msg:s["import.resource.not.found"],parameters:["resourceURI"]}],m["import.resource.different.type.already.exists"]=[{msg:s["import.resource.different.type.already.exists"],parameters:["resourceURI"]}],m["import.resource.uri.not.valid"]=[{msg:s["import.resource.uri.not.valid"],parameters:["resourceURI"]}],m["import.resource.data.missing"]=[{msg:s["import.resource.data.missing"],parameters:["resourceURI"]}],m["import.reference.resource.not.found"]=[{msg:s["import.reference.resource.not.found"],parameters:["resourceURI"]},{msg:s["import.reference.dependent.resource.not.found"],parameters:["dependentResourceURI","resourceURI"]}],m["import.resource.attached.not.exist.org"]=[{msg:s["import.resource.attached.not.exist.org"],parameters:["resourceURI"]}],m["import.folder.attached.not.exist.org"]=[{msg:s["import.folder.attached.not.exist.org"],parameters:["resourceURI"]}],m["import.multi.tenancy.not.supported"]=[{msg:s["import.multi.tenancy.not.supported"],parameters:["organizationId"]}],m["import.skip.resource"]=[{msg:s["import.skip.resource"],parameters:["resourceURI"]}],m["import.report.job.reference.resource.not.found"]=[{msg:s["import.report.job.reference.resource.not.found"],parameters:["resourceURI"]},{msg:s["import.report.job.reference.dependent.resource.not.found"],parameters:["dependentResourceURI","resourceURI"]}],o.exports=function(e){var r=e.code,o=e.parameters,s=m[r];return n.template(s[o.length-1].msg)(t(s[o.length-1].parameters,o))}});