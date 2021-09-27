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

define(["require","exports","module","underscore","backbone","../enum/httpStatusCodes","../enum/errorCodes"],function(r,e,t){var o=r("underscore"),n=r("backbone"),s=r("../enum/httpStatusCodes"),a=r("../enum/errorCodes"),u=n.Model.extend({initialize:function(){this.on("error",u.unifyServerErrors)},serialize:function(){return o.clone(this.attributes)}},{unifyServerErrors:function(r,e){var t=s[e.status],o=u.createServerError(e);r.trigger("error:"+t,r,o,e),r.trigger("error:all",r,o,e)},createServerError:function(r){var e;try{e=JSON.parse(r.responseText)}catch(r){e={message:"Can't parse server response",errorCode:a.UNEXPECTED_ERROR,parameters:[]}}return e}});t.exports=u});