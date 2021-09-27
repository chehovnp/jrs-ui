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

define(["require","exports","module","./BiComponentError","./enum/biComponentErrorCodes","./enum/biComponentErrorMessages"],function(e,r,s){var o=e("./BiComponentError"),t=e("./enum/biComponentErrorCodes"),n=e("./enum/biComponentErrorMessages");s.exports=o.extend({constructor:function(e,r){this.xmlHttpRequest=e;var s,a,m,p=r;if(!r)switch(e.status){case 401:p=t.AUTHENTICATION_ERROR;break;case 403:p=t.AUTHORIZATION_ERROR;break;default:p=t.UNEXPECTED_ERROR}a=n[p];try{s=JSON.parse(e.responseText)}catch(e){}s&&(s.errorCode?(p=s.errorCode,a=s.message,m=s.parameters||!s.properties?s.parameters:s.properties[0].value):a+=" : "+s.message,s.result&&s.result.msg&&(p=s.result.msg,s.result.devmsg&&(a=s.result.devmsg))),o.prototype.constructor.call(this,p,a,m)}})});