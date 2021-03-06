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

define(["require","exports","module","runtime_dependencies/js-sdk/src/common/component/tree/Tree","jquery","underscore","runtime_dependencies/js-sdk/src/common/component/tree/TreeDataLayer","runtime_dependencies/js-sdk/src/common/component/tree/plugin/TooltipPlugin","runtime_dependencies/js-sdk/src/common/component/tree/plugin/ContextMenuTreePlugin","../utils/tenantTreeDataUriTemplateUtil","bundle!CommonBundle","runtime_dependencies/js-sdk/src/jrs.configs"],function(e,n,t){var o=e("runtime_dependencies/js-sdk/src/common/component/tree/Tree"),r=e("jquery"),s=e("underscore"),a=e("runtime_dependencies/js-sdk/src/common/component/tree/TreeDataLayer"),i=e("runtime_dependencies/js-sdk/src/common/component/tree/plugin/TooltipPlugin"),c=e("runtime_dependencies/js-sdk/src/common/component/tree/plugin/ContextMenuTreePlugin"),d=e("../utils/tenantTreeDataUriTemplateUtil"),l=e("bundle!CommonBundle"),u=e("runtime_dependencies/js-sdk/src/jrs.configs"),m={tenantProcessor:function(e){return{processItem:function(n){return n._node=!0,n.label=n.value.tenantName,n.value.label=n.label,n.value.uri=n.value.tenantUri,n.id===e&&(n.addToSelection=!0),n}}}};t.exports=function(e){var n=e.comparator,t=o.use(i,{i18n:l,contentTemplate:e.tooltipContentTemplate});return e.contextMenu&&(t=t.use(c,{contextMenu:e.contextMenu})),t.create().instance(s.extend({},{selection:{allowed:{left:!0,right:!0},multiple:!1},rootless:!0,collapsed:!0,lazyLoad:!0,bufferSize:5e3,allowMouseDownEventPropagation:!0,dataUriTemplate:d({contextPath:u.contextPath}),levelDataId:"id",getDataArray:function(e,t,o){var r=e?e.organization:[];return n&&r.sort(n),r},processors:[m.tenantProcessor(e.tenantId)],customDataLayers:{"/":s.extend(new a({dataUriTemplate:u.contextPath+"/flow.html?_flowId=treeFlow&method=getNode&provider=tenantTreeFoldersProvider&uri=/",processors:[m.tenantProcessor(e.tenantId)],getDataArray:function(e){return e=JSON.parse(r(e).text()),[{id:e.id,tenantName:e.label,tenantUri:"/",resourceType:"folder",_links:{content:"@fakeContentLink"}}]}}),{accept:"text/html",dataType:"text"})}}))}});