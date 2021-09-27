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

define(["require","exports","module","../enum/importRestErrorCodesEnum","bundle!ImportExportBundle","settings!awsSettings"],function(e,r,t){var n=e("../enum/importRestErrorCodesEnum"),o=e("bundle!ImportExportBundle"),i=e("settings!awsSettings"),u=function(){return i.productTypeIsJrsAmi||i.productTypeIsMpAmi?o["import.decode.failed.aws"]:o["import.decode.failed"]},d=function(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}({},n.IMPORT_DECODE_FAILED,u);t.exports={create:function(e){var r=d[e];return r?r():o[e]||o["import.error.unexpected"]}}});