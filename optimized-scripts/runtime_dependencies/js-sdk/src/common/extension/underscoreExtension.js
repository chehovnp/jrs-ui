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

define(["require","exports","module","underscore","jquery","../util/cloneDeep","../util/xssUtil","underscore.string","../../jrs.configs"],function(e,s,t){var r=e("underscore"),n=e("jquery"),a=e("../util/cloneDeep"),i=e("../util/xssUtil"),c=e("underscore.string"),l=e("../../jrs.configs"),p=RegExp(/(<js-templateNonce>\s*<\/js-templateNonce>)|(<js-templateNonce\s*\/>)/gi);r.str=c,r.templateSettings={evaluate:/\{\{([\s\S]+?)\}\}/g,interpolate:/\{\{=([\s\S]+?)\}\}/g,escape:/\{\{-([\s\S]+?)\}\}/g};var o=r.str.exports(),u=["wrap"];r.mixin(r.omit(o,u));var x=r.template,m=r.isEqual;r.mixin({xssSoftEscape:i.softHtmlEscape,xssHardEscape:i.hardEscape,template:function(e,s,t){var n=r.templateSettings,a=/($^)/;e=String(e||""),t=r.defaults({},t,n);var i=RegExp((t.escape||a).source+"|$","g");e=e.replace(i,"{{ print(_.xssHardEscape($1)); }}"),e=e.replace(p,"\x3c!-- "+l.xssNonce+" (htm xss nonce) --\x3e");var c=x.call(r,e,t);return s?c(s):c},isEqual:function(e,s){return r.isElement(e)&&r.isElement(s)||e instanceof n&&s instanceof n?e===s:m.apply(r,arguments)},cloneDeep:a}),t.exports=r});