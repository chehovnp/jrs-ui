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

define(["require","exports","module","jquery","../../logging/logger","../stdnav"],function(t,i,n){var e=t("jquery"),r=t("../../logging/logger"),a=t("../stdnav"),l=r.register("stdnavPluginWorkflowCard"),u=0,s=function(){u++,this.serial=u};e.extend(s.prototype,{zinit:function(t){return l.debug("stdnavPluginWorkflowCard.init("+t+")\n"),this},activate:function(){this.behavior={ariaprep:[this,this._ariaPrep,null],ariarefresh:[this,this._ariaRefresh,null],right:[this,this._onRight,null],left:[this,this._onLeft,null],fixfocus:[this,this._fixFocus,null],fixsuperfocus:[this,this._fixSuperfocus,null],focusin:[this,this._onFocusIn,null],inherit:!0,inheritable:!0},a.registerNavtype(this.navtype,this.behavior,this.navtype_tags)},deactivate:function(){a.unregisterNavtype("list2",this.behavior)},_ariaPrep:function(t){this._ariaRefresh(t)},_ariaRefresh:function(t){var i=e(t);i.attr("role","application");var n=i.attr("aria-label"),r=i.attr("aria-labelledby"),l=i.children("li"),u=i.attr("js-itemplural");""!==u&&u||(u="items");if(a.nullOrUndefined(n)&&a.nullOrUndefined(r)){l.find("a").length===l.length?(i.attr("aria-label","List of "+l.length+" links."),!0):i.attr("aria-label","List of "+l.length+u)}return e.each(l,function(t,i){var n=e(i),r=n.find("a");if(r.length>0){n.attr("role","link");var s=n.attr("aria-label"),o=n.attr("aria-labelledby");if(a.nullOrUndefined(s)&&a.nullOrUndefined(o)){var f=n.text();e(r[0]).text();s=f+". "+(t+1)+" of "+l.length+" "+u+".",n.attr("aria-label",s)}}}),null},_fixFocus:function(t){var i=e(t);return i.is("li")&&(t=i.find("button").eq(0)[0]),t},_fixSuperfocus:function(t){var i=e(t).closest("li");return i.length>0?i[0]:null},_onClick:function(t){e(t).closest("li").focus(),a.setSubfocus(this._fixSubfocus(t))},_onFocusIn:function(t){var i=e(t);return i.is("li>div button")||(t=i.closest("li>div").find("button")[0]),t},_onLeft:function(){var t=e("li.superfocus button").index(e("button.subfocus")),i=t-1,n=e("li.superfocus button").eq(i);return i>=0&&n[0]},_onRight:function(){var t=e("li.superfocus button").index(e("button.subfocus")),i=t+1,n=e("li.superfocus button").eq(i);return n.length&&n[0]}}),e.extend(s.prototype,{navtype:"workflowCard",navtype_tags:["li","button"]});var o=new s;n.exports=o});