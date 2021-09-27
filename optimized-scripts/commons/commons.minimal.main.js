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

define(["require","exports","module","requirejs-domready","../components/components.heartbeat","runtime_dependencies/js-sdk/src/jrs.configs","../components/components.about","../components/components.webHelp","jquery","runtime_dependencies/js-sdk/src/common/stdnav/stdnav","runtime_dependencies/js-sdk/src/common/stdnav/plugins/stdnavPluginAnchor","runtime_dependencies/js-sdk/src/common/stdnav/plugins/stdnavPluginButton","runtime_dependencies/js-sdk/src/common/stdnav/plugins/stdnavPluginGrid","runtime_dependencies/js-sdk/src/common/stdnav/plugins/stdnavPluginList","runtime_dependencies/js-sdk/src/common/stdnav/plugins/stdnavPluginTable","../stdnav/plugins/stdnavPluginActionMenu","../stdnav/plugins/stdnavPluginDynamicList","../stdnav/plugins/stdnavPluginForms","../stdnav/plugins/stdnavPluginToolbar","runtime_dependencies/js-sdk/src/common/stdnav/plugins/stdnavPluginWorkflowCard","./commons.bare.main","../config/dateAndTimeSettings"],function(n,s,e){var t=n("requirejs-domready"),i=n("../components/components.heartbeat"),d=n("runtime_dependencies/js-sdk/src/jrs.configs"),a=n("../components/components.about"),o=n("../components/components.webHelp"),c=n("jquery"),u=n("runtime_dependencies/js-sdk/src/common/stdnav/stdnav"),m=n("runtime_dependencies/js-sdk/src/common/stdnav/plugins/stdnavPluginAnchor"),r=n("runtime_dependencies/js-sdk/src/common/stdnav/plugins/stdnavPluginButton"),l=n("runtime_dependencies/js-sdk/src/common/stdnav/plugins/stdnavPluginGrid"),v=n("runtime_dependencies/js-sdk/src/common/stdnav/plugins/stdnavPluginList"),p=n("runtime_dependencies/js-sdk/src/common/stdnav/plugins/stdnavPluginTable"),g=n("../stdnav/plugins/stdnavPluginActionMenu"),j=n("../stdnav/plugins/stdnavPluginDynamicList"),k=n("../stdnav/plugins/stdnavPluginForms"),P=n("../stdnav/plugins/stdnavPluginToolbar"),b=n("runtime_dependencies/js-sdk/src/common/stdnav/plugins/stdnavPluginWorkflowCard");n("./commons.bare.main"),n("../config/dateAndTimeSettings"),t(function(){i.initialize(d.heartbeatInitOptions),i.start(),d.initAdditionalUIComponents&&a.initialize();var n=c("#helpLink");n&&n.on("click",function(n){n.preventDefault(),o.displayWebHelp()}),"true"===d.enableAccessibility&&(u.activate(),m.activate(u),r.activate(u),k.activate(u),l.activate(u),v.activate(u),p.activate(u),g.activate(u),j.activate(u),P.activate(u),b.activate(u),u.start())})});