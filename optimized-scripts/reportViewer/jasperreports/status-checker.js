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

define(["require","exports","module","jquery"],function(e,t,i){var a=e("jquery"),d=function(e,t){this.loader=e,this.timeoutId=null,this.updateInterval=t};d.prototype={checkPageModified:function(e,t){var i=this,d=a.Deferred();return i._timedCheckPageModified(!1,e,t,d,null),d.promise()},cancelCheckPageModified:function(){clearTimeout(this.timeoutId)},_timedCheckPageModified:function(e,t,i,a,d){var o=this;e?a.resolve(d):o.timeoutId=setTimeout(function(){o._getPageModifiedStatus(t,i,a)},o.updateInterval)},_getPageModifiedStatus:function(e,t,i){var a=this;return a.loader.getStatusForPage(e,t).then(function(d,o,u){var r;r=a.loader.config.stopOnFinishOnly?"finished"==d.result.status:d.result.pageModified||"finished"==d.result.status,!r&&a.loader.setPageUpdateStatus&&a.loader.setPageUpdateStatus(d),a._timedCheckPageModified(r,e,t,i,d.result)})}},i.exports=d});