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

define(["require","exports","module","underscore","runtime_dependencies/js-sdk/src/common/model/BaseModel"],function(e,n,i){var t=e("underscore"),o=e("runtime_dependencies/js-sdk/src/common/model/BaseModel"),s={INPROGRESS:"inprogress",READY:"finished",FAILED:"failed",PENDING:"pending",CANCELLED:"cancelled"};i.exports=o.extend({url:function(){return"rest_v2/export/"+this.id+"/state"},initialize:function(e){o.prototype.initialize.call(this),this.on("change:phase",function(e,n){n==s.INPROGRESS&&t.isUndefined(e.interval)?e.interval=window.setInterval(function(){e.fetch({cache:!1}).fail(t.bind(e.stopPolling,e))},1e3):e.stopPolling()})},stopPolling:function(){t.isUndefined(this.interval)||(window.clearInterval(this.interval),this.interval=void 0)}},{STATE:s})});