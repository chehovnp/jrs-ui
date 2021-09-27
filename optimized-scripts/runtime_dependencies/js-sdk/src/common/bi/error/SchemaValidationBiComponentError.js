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

define(["require","exports","module","./BiComponentError","./enum/biComponentErrorCodes","./enum/biComponentErrorMessages"],function(r,o,e){var t=r("./BiComponentError"),n=r("./enum/biComponentErrorCodes"),s=r("./enum/biComponentErrorMessages");e.exports=t.extend({constructor:function(r){this.validationError=r;var o=r.dataPath.substring(1);t.prototype.constructor.call(this,n.SCHEMA_VALIDATION_ERROR,s[n.SCHEMA_VALIDATION_ERROR]+": "+o+": "+this.validationError.message,[r.dataPath,this.validationError.message])}})});