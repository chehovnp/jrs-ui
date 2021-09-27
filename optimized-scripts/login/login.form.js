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

define(["require","exports","module","jquery","runtime_dependencies/js-sdk/src/jrs.configs","runtime_dependencies/js-sdk/src/common/util/encrypter","../components/components.webHelp"],function(e,s,n){var o=e("jquery"),r=e("runtime_dependencies/js-sdk/src/jrs.configs"),d=e("runtime_dependencies/js-sdk/src/common/util/encrypter"),i=e("../components/components.webHelp");o(function(){var e=o("#j_username"),s=o("#j_password_pseudo"),n=o("#orgId");i.setCurrentContext("login");var t=function(e){if(r.isEncryptionOn){var n={j_password:s.val()};if(void 0!==window.doesAllowUserPasswordChange&&window.doesAllowUserPasswordChange){var i=o("#j_newpassword1_pseudo").val(),t=o("#j_newpassword2_pseudo").val();o.trim(i)&&(n.j_newpassword1=i),o.trim(t)&&(n.j_newpassword2=t)}d.encryptData(n,function(e){for(var s in e)o("#"+s).val(e[s]),o("#"+s+"_pseudo").val("");o("#loginForm").submit()})}else o("#j_password").val(s.val()),o("#j_newpassword1").val(o("#j_newpassword1_pseudo").val()),o("#j_newpassword2").val(o("#j_newpassword2_pseudo").val()),o("#loginForm").submit();e.preventDefault()};o("#submitButton").click(t).removeAttr("disabled"),e.keypress(function(e){13==(e.keyCode||e.which)&&t(e)}),s.keypress(function(e){13==(e.keyCode||e.which)&&t(e)}),n.keypress(function(e){13==(e.keyCode||e.which)&&t(e)})})});