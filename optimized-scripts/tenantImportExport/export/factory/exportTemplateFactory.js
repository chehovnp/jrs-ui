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

define(["require","exports","module","jquery","text!../template/assetsToIncludeExtendedVersionTemplate.htm","text!../template/eventsToIncludeTemplate.htm","text!../template/exportDataFileTemplate.htm","text!../template/rolesAndUsersToIncludeTemplate.htm","text!../template/exportOptionsContainerTemplate.htm","text!../template/repositoryExportTemplate.htm","../enum/exportTypesEnum","text!../../templates/secretKeyTemplate.htm"],function(e,t,m){var p=e("jquery"),l=e("text!../template/assetsToIncludeExtendedVersionTemplate.htm"),a=e("text!../template/eventsToIncludeTemplate.htm"),o=e("text!../template/exportDataFileTemplate.htm"),n=e("text!../template/rolesAndUsersToIncludeTemplate.htm"),r=e("text!../template/exportOptionsContainerTemplate.htm"),T=e("text!../template/repositoryExportTemplate.htm"),s=e("../enum/exportTypesEnum"),x=e("text!../../templates/secretKeyTemplate.htm"),i={};i[s.ROOT_TENANT]=[n,l,a].join(""),i[s.TENANT]=[n,l].join(""),i[s.SERVER_PRO]=[n,l,a].join(""),i[s.SERVER_CE]=[n,l,a].join(""),i[s.REPOSITORY]=[T].join(""),m.exports=function(e){return e=e||{},o+x+p(r).append(i[e.type])[0].outerHTML}});