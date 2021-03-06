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

define(["require","exports","module","jquery","underscore","backbone","runtime_dependencies/js-sdk/src/jrs.configs","../../scheduler/model/JobModel"],function(e,t,o){var r=e("jquery"),s=e("underscore"),n=e("backbone"),i=e("runtime_dependencies/js-sdk/src/jrs.configs"),c=e("../../scheduler/model/JobModel");o.exports=n.Collection.extend({model:c,initialize:function(e,t){this.options=s.extend({},t),this.initialAmountOfJobsToLoad=100,this.amountOfJobsToLoad=100,this.amountOfLoadedJobs=0},setSearchingTerm:function(e){this.searchingTerm=e},getSearchingTerm:function(){return this.searchingTerm},getReportUri:function(){return this.options.parentReportURI||this.options.reportUri},fetch:function(){if(this.urlsOfReportsToFetchJobs=[],this.options.masterViewMode)return void this.getJobsWithPagination();if(this.getReportUri()){if(this.urlsOfReportsToFetchJobs.push(this.getReportUri()),!i.isProVersion)return void this.getJobsOfAllReportsWeHave();this._secondFetchPart()}},_secondFetchPart:function(){var e=this;this.getReportOptions().always(function(){e.getJobsOfAllReportsWeHave()})},getReportOptions:function(){var e=this,t=this.getReportUri();return this.request({url:i.contextPath+"/rest_v2/reports"+t+"/options"}).done(function(t){if(t=t.reportOptionsSummary)for(var o=0,r=t.length;o<r;o++)t[o].uri&&e.urlsOfReportsToFetchJobs.push(t[o].uri)}).fail(function(){})},getJobsOfAllReportsWeHave:function(){var e=this,t=[],o=0;s.each(this.urlsOfReportsToFetchJobs,function(r){e.getJobOfReport(r).done(function(o){t=t.concat(e.parse(o))}).fail(function(t){e.trigger("error",t)}).always(function(){++o===e.urlsOfReportsToFetchJobs.length&&e.reset(t)})})},getJobsFromBackend:function(e,t){var o=["sortType=SORTBY_REPORTURI"];if(e&&o.push("startIndex="+e),t&&o.push("numberOfRows="+t),this.searchingTerm){var s=encodeURI(this.searchingTerm);o.push("label="+s)}var n=this,c=r.Deferred(),a=i.contextPath+"/rest_v2/jobs?"+o.join("&");return this.request({url:a}).done(function(e){var t=n.parse(e);n.amountOfLoadedJobs+=t.length,c.resolve(t)}).fail(function(e){n.trigger("error",e),c.reject(e)}),c},getJobOfReport:function(e){var t=i.contextPath+"/rest_v2/jobs?reportUnitURI="+encodeURI(e);return this.request({url:t})},getJobsWithPagination:function(){this.amountOfLoadedJobs=0;var e=this;this.getJobsFromBackend(this.amountOfLoadedJobs,this.initialAmountOfJobsToLoad).done(function(t){e.reset(t)})},loadMoreJobs:function(){var e=this;this.getJobsFromBackend(this.amountOfLoadedJobs,this.amountOfJobsToLoad).done(function(t){e.add(t)})},parse:function(e){return e?e.jobsummary:[]},request:function(e){return e=e||{},e.cache=!1,n.sync.call(this,"read",new n.Model,e)},permission:function(e,t){return n.sync.call(this,"read",new n.Model,{url:i.contextPath+"/rest_v2/resources/"+e.replace(/\/[^\/]+$/,""),cache:!1,headers:{Accept:"application/repository.folder+json"},type:"GET",success:function(e,o){"function"==typeof t&&t(void 0,e.permissionMask)},error:function(e){"function"==typeof t&&t(e)}})}})});