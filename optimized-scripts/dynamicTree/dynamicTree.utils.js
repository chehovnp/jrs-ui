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

define(["require","exports","module","prototype","./dynamicTree.treesupport","../util/utils.common","../util/touch.controller"],function(e,o,r){var t=e("prototype"),i=t.$,s=e("./dynamicTree.treesupport"),l=e("../util/utils.common"),a=l.deepClone,d=l.isIPad,p=e("../util/touch.controller");s.RepositoryFolder=function(e){s.TreeNode.call(this,e),this.Types={Folder:new s.TreeNode.Type("com.jaspersoft.jasperserver.api.metadata.common.domain.Folder"),SuperRoot:new s.TreeNode.Type("superroot"),Root:new s.TreeNode.Type("root")},this.nodeHeaderTemplateDomId="list_responsive_collapsible_folders:folders",this.param.extra&&this.param.extra.isActiveThemeFolder&&(this.param.cssClass=this.ACTIVE_THEME_CLASS)},s.TreeNode&&(s.RepositoryFolder.prototype=a(s.TreeNode.prototype)),s.RepositoryFolder.addVar("ACTIVE_THEME_CLASS","activeTheme"),s.RepositoryFolder.addMethod("isParent",function(){return this.param.type==this.Types.Folder.name||this.param.type==this.Types.SuperRoot.name||this.param.type==this.Types.Root.name}),s.RepositoryFolder.addMethod("isSuperRoot",function(){return this.param.type==this.Types.SuperRoot.name}),s.RepositoryFolder.addMethod("isPublic",function(){return"public"===this.param.id}),s.createRepositoryTree=function(e,o){var r=null!=o.organizationId&&""!==o.organizationId;null==o.bShowRoot&&(o.bShowRoot=!r),o.nodeClass||(o.nodeClass=s.RepositoryFolder),o.templateDomId="list_responsive_collapsible_folders";var t=new s.TreeSupport(e,o);if(t.organizationId=o.organizationId,t.publicFolderUri=o.publicFolderUri,t.orgMode=r,t.modifyRootObject=function(e,o,r){var t;if(o){t=[];for(var i=0;i<e.length;i++)e[i].uri==this.publicFolderUri&&r&&"/"!=r.param.uri||t.push(e[i])}else if(this.orgMode&&null!=e.children){for(var s,l=e.children,a=[],i=0;i<l.length;i++)l[i].uri==this.publicFolderUri?s=l[i]:a.push(l[i]);e.children=a,t={type:"superroot",label:"",extra:{}},t.children=[e,s]}else t=e;return t},t.getRootNode=function(){var e=this.rootNode;return e.isSuperRoot()?e.childs[0].isPublic()?e.childs[1]:e.childs[0]:e},t.findNodeChildByMetaName=function(e,o){if(e.isSuperRoot()){var r,i;if(e.childs[0].isPublic()?(r=e.childs[0],i=e.childs[1]):(r=e.childs[1],i=e.childs[0]),"public"===o)return r;e=i}if(e.hasChilds())for(var s=0;s<e.childs.length;s++)if(e.childs[s].param.id==o)return e.childs[s];return"public"==o&&e.parent&&e.parent.isSuperRoot()?t.findNodeChildByMetaName(e.parent,o):null},d()){var l=i(e);t.touchController=new p(l,l.up(1),{absolute:!0})}return t},r.exports=s});