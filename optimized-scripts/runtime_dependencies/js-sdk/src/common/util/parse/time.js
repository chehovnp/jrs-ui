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

define(["require","exports","module","../../../jrs.configs","../datetime/RelativeTime","../datetime/Time"],function(e,i,t){function n(e){return c.isValid(e)}function r(e,i){var t=f.parse(e,null!=i?i:T.timeFormat);return void 0!==t&&t.isValid()}function o(e){return r(e,l)}function m(e,i,t){var n=e instanceof f?e:f.parse(e,null!=t?t:T.timeFormat),r=i instanceof f?i:f.parse(i,null!=t?t:T.timeFormat);if(void 0!==n&&void 0!==r)return f.compare(n,r)}function a(e,i,t){var n=new f(e,i,t);if(n.isValid())return n.format(l)}function s(e){return f.parse(e,l)}var u=e("../../../jrs.configs"),c=e("../datetime/RelativeTime"),f=e("../datetime/Time"),l="HH:mm:ss",T=u.localeSettings;t.exports={isRelativeTime:n,isTime:r,isIso8601Time:o,compareTimes:m,timeToIso8061Time:a,iso8601TimeToTimeObject:s}});