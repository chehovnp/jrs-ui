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

define(["require","exports","module","runtime_dependencies/js-sdk/src/jrs.configs","underscore","../../util/utils.common"],function(e,o,r){var n=e("runtime_dependencies/js-sdk/src/jrs.configs"),t=e("underscore"),c=e("../../util/utils.common"),i=c.redirectToUrl;r.exports={SCHEDULER_BACK_URL_STORAGE_NAME:"tibco-jrs-scheduler-back-url",getParamsFromUri:function(){var e={},o=document.location.search.substr(1).split("&");t.each(o,function(o){var r=o.split("="),n=r[0],t=r[1];""!==t&&(e[n]=decodeURIComponent(t))});var r=document.location.hash.substr(1);0===r.indexOf("runInBackground@")&&(r=r.replace("runInBackground@",""));var n=r.split("@@");return e.reportUri=n.shift(),t.each(n,function(o){var r=o.split("="),n=r[0],t=r[1];""!==t&&(e[n]=decodeURIComponent(t))}),e},saveCurrentLocation:function(){-1===document.referrer.indexOf("login.html")&&window.localStorage&&localStorage.setItem(this.SCHEDULER_BACK_URL_STORAGE_NAME,encodeURIComponent(document.referrer))},getBackToPreviousLocation:function(){var e=encodeURIComponent(document.location.href),o=window.localStorage?localStorage.getItem(this.SCHEDULER_BACK_URL_STORAGE_NAME):"";if(o&&o!==e){var r=decodeURIComponent(o);if(r)return void i(r)}i(n.contextPath+"/flow.html?_flowId=searchFlow")}}});