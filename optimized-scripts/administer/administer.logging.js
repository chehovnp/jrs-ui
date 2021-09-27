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

define(["require","exports","module","prototype","../core/core.layout","../util/utils.common","./administer.base","../components/components.webHelp","jquery"],function(e,t,n){var o=e("prototype"),i=o.$,s=e("../core/core.layout"),r=e("../util/utils.common"),l=r.matchAny,c=e("./administer.base"),a=e("../components/components.webHelp"),u=e("jquery"),m={initialize:function(){s.resizeOnClient("serverSettingsMenu","settings"),a.setCurrentContext("admin"),this.initEvents()},initEvents:function(){var e=this;i("display").observe("click",function(e){var t=e.element(),n=l(t,[s.BUTTON_PATTERN],!0);if(n)for(var o in c.menuActions)if(n.match(o)&&!n.up("li").hasClassName("selected"))return void(document.location=c.menuActions[o]())}),u(".js-logSettings select").on("change",function(t){var n,o=u(t.target);n=o.hasClass("js-newLogger")?u("#newLoggerName").val():o.parent().prev().text(),e._setLevel(encodeURIComponent(n),o.val())})},_setLevel:function(e,t){document.location="log_settings.html?logger="+e+"&level="+t}};void 0===e&&document.observe("dom:loaded",function(){m.initialize()}),n.exports=m});