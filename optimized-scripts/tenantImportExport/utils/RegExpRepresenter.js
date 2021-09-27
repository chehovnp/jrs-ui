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

define(["require","exports","module","underscore","prototype"],function(require,exports,module){function RegExpRepresenter(e){this.charMap={"\\s":" "},this.expressionTokens=this.__parse(e)}var __disableStrictMode__="use strict",_=require("underscore"),_prototype=require("prototype"),$A=_prototype.$A;_.extend(RegExpRepresenter.prototype,{__parse:function(e){for(var t=$A(),r=1;r<e.length-1;r++){var s=e.charAt(r);"\\"==s&&(s+=e.charAt(++r)),"\\u"==s&&(s+=e.substring(++r,r+4),r+=3),t.push(s)}return t},getCharacters:function getCharacters(){var result=$A();return this.expressionTokens.each(function(token){if(token.startsWith("\\u"))result.push(eval('"'+token+'"'));else if(token.startsWith("\\")){var ch=this.charMap[token];result.push(ch||token.substring(1,token.length))}else result.push(token)}.bind(this)),result},getRepresentedString:function(){for(var e="",t=this.getCharacters(),r=t.length,s=0;s<r;s++){var n=t[s];e+=" "==n||"."==n||","==n?"["+n+"]":n,s<r-1&&(e+=", ")}return e}}),module.exports=RegExpRepresenter});