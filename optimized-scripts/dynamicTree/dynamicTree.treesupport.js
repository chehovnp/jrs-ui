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

define(["require","exports","module","prototype","./dynamicTree.events","../util/utils.common","runtime_dependencies/js-sdk/src/jrs.configs","../core/core.ajax","../core/core.ajax.utils","runtime_dependencies/js-sdk/src/common/util/xssUtil","jquery","underscore"],function(e,t,r){var i=e("prototype"),d=(i.$,e("./dynamicTree.events")),o=e("../util/utils.common"),n=o.deepClone,s=o.trim,a=o.unescapeBackslash,l=e("runtime_dependencies/js-sdk/src/jrs.configs"),h=e("../core/core.ajax"),u=h.ajaxTargettedUpdate,c=e("../core/core.ajax.utils"),f=c.baseErrorHandler,p=e("runtime_dependencies/js-sdk/src/common/util/xssUtil"),v=e("jquery"),g=e("underscore");d.TreeSupport=function(e,t){if(d.Tree.call(this,e,t),this.providerId=t.providerId,this.hideLoader=t.hideLoader,this.rootUri=Object.isUndefined(t.rootUri)?"/":t.rootUri,this.nodeClass=t.nodeClass&&Object.isFunction(t.nodeClass)?t.nodeClass:d.TreeNode,t.rootObjectModifier&&(this.modifyRootObject=t.rootObjectModifier),this.resetStatesOnShow=Object.isUndefined(t.resetStatesOnShow)||t.resetStatesOnShow,this.inInit=!0,this.ajaxBufferId="ajaxbuffer",this.nodeTextId="treeNodeText",this.urlGetNode=t.urlGetNode?t.urlGetNode:this._getFlowUrl("getNode"),this.urlGetChildren=t.urlGetChildren?t.urlGetChildren:this._getFlowUrl("getChildren"),this.urlGetMultipleChildren=t.urlGetMultipleChildren?t.urlGetMultipleChildren:this._getFlowUrl("getMultipleChildren"),this.urlGetMessage=t.urlGetMessage?t.urlGetMessage:this._getFlowUrl("getMessage"),this.additionalParams=t.additionalParams?t.additionalParams:{},null==this.TREE_NN_ITEMS_SELECTED){var r=function(e){this.TREE_NN_ITEMS_SELECTED=e}.bind(this);this.getMessage("TREE_NN_ITEMS_SELECTED",r,null)}this._initOpenListener()},d.TreeSupport.prototype=n(d.Tree.prototype),d.TreeSupport.addMethod("_initOpenListener",function(){this.observe("node:open",function(e){var t=e.memo.node;t&&!t.isloaded&&this.getTreeNodeChildren(t)}.bindAsEventListener(this))}),d.TreeSupport.addMethod("stopObserving",function(e,t){this._getElement().stopObserving(e,t),"node:open"!==e||t||this._initOpenListener()}),d.TreeSupport.addMethod("_getFlowUrl",function(e){return l.contextPath+"/flow.html?_flowId=treeFlow&method="+e}),d.TreeSupport.addMethod("showTree",function(e,t,r,i){var d=this.urlGetNode+"&provider="+this.providerId+"&uri="+this.rootUri+"&depth="+e;i&&(d+="&forceHtmlEscape=true"),d+="&"+this._evaluateAdditionalParams(),this._showTree(d,t,r)}),d.TreeSupport.addMethod("_evaluateAdditionalParams",function(){var e=this.additionalParams;return g.isFunction(e)&&(e=e.call(null)),g.isObject(e)?Object.toQueryString(e):null}),d.TreeSupport.addMethod("showTreePrefetchNodes",function(e,t,r){var i=this.urlGetNode+"&provider="+this.providerId+"&uri="+this.rootUri;e&&(i+="&prefetch="+encodeURIComponent(e)),i+="&"+this._evaluateAdditionalParams(),this._showTree(i,t,r)}),d.TreeSupport.addMethod("_showTree",function(e,t,r){var i=this;this.inInit=!0,this.wait();var d=function(e,t,r){return function(){return e.showTreeCallback(t,r)}}(this,t,r),o=function(){var e=!1;return i.httpErrorHandler&&(e=i.httpErrorHandler.apply(window,arguments)),!1===e&&(e=f.apply(window,arguments)),e};u(e,{fillLocation:this.ajaxBufferId,callback:d,errorHandler:o,hideLoader:this.hideLoader})}),d.TreeSupport.addMethod("showTreeCallback",function(e,t){var r=document.getElementById(this.nodeTextId);if(null==r)return void(t?t():this.fireServerErrorEvent());var i=p.unescape(v(r).text()),d=i.evalJSON();this.modifyRootObject&&(d=this.modifyRootObject(d,!1)),r=document.getElementById(this.ajaxBufferId),v(r).html(""),this.setRootNode(this.processNode(d)),this.resortTree(),this.resetStatesOnShow&&this.resetStates(),this.renderTree(),this.inInit=!1,e?e():this.fireTreeLoadedEvent({tree:this})}),d.TreeSupport.addMethod("processNode",function(e){var t={};t.id=e.id,t.type=e.type,t.uri=e.uri,t.extra=n(e.extra),e.cssClass&&(t.cssClass=e.cssClass);var r=this.nodeClass,i=new r({name:a(e.label),param:t,orderNumber:e.order});e.tooltip&&(i.tooltip=e.tooltip);var d=e.children;if(null!=d){var o=d.length;if(0===o)i.setHasChilds(!1);else for(var s=0;s<o;s++){var l=d[s];if(l){var h=this.processNode(l);i.addChild(h)}}i.isloaded=!0}return i}),d.TreeSupport.addMethod("getTreeNodeChildren",function(e,t,r){var i=e.param.uri,d=function(e,t,r,i){return function(){return e.getTreeNodeChildrenCallback(t,r,i)}}(this,e.id,t,r),o=function(t){(500==t.status||t.getResponseHeader("JasperServerError"))&&e.stopWaiting(),f(t)};u(this.urlGetChildren+"&provider="+this.providerId+"&uri="+encodeURIComponent(encodeURIComponent(i))+"&"+this._evaluateAdditionalParams(),{fillLocation:this.ajaxBufferId,callback:d,errorHandler:o,hideLoader:this.hideLoader}),this.inInit||e.wait()}),d.TreeSupport.addMethod("getTreeNodeChildrenCallback",function(e,t,r){var i=document.getElementById(this.nodeTextId);if(null==i)return void(r?r():this.fireServerErrorEvent());var o=p.unescape(v(i).text()).evalJSON(),n=d.nodes[e];this.modifyRootObject&&(o=this.modifyRootObject(o,!0,n)),i=document.getElementById(this.ajaxBufferId),v(i).html(""),n.resetChilds(),n.stopWaiting();var s=o.length;if(0===s)n.setHasChilds(!1);else{var a=n.getTreeId(),l=a?d.trees[a]:null,h=l?l.sortNodes:null;l&&(l.sortNodes=!1);for(var u=0;u<s;u++){var c=this.processNode(o[u]);n.addChild(c)}l&&(l.sortNodes=h,n.resortChilds())}n.isloaded=!0,n.refreshNode(),t?t(n.childs):this.fireChildrenLoadedEvent(n.childs)}),d.TreeSupport.addMethod("getTreeMultipleNodesChildren",function(e,t,r){var i,d="",o=[];if(e&&e.length)for(i=0;i<e.length;i++)i>0&&(d+=","),d+=encodeURIComponent(encodeURIComponent(e[i].param.uri)),o[i]=e[i].id;if(d.length){var n=function(e,t,r,i){return function(){return e.getTreeMultipleNodesChildrenCallback(t,r,i)}}(this,o,t,r);if(u(this.urlGetMultipleChildren+"&provider="+this.providerId,{fillLocation:this.ajaxBufferId,callback:n,postData:"uris="+d,errorHandler:f,hideLoader:this.hideLoader}),!this.inInit)for(i=0;i<e.length;i++)e[i].wait()}}),d.TreeSupport.addMethod("getTreeMultipleNodesChildrenCallback",function(e,t,r){var i=document.getElementById(this.nodeTextId);if(null==i)return void(r?r():this.fireServerErrorEvent());var d=p.unescape(v(i).text()).evalJSON();i=document.getElementById(this.ajaxBufferId),v(i).html(""),t?t(e,d):(this.setMultipleNodesChilden(e,d),this.fireMultipleChildrenLoadedEvent(e,d))}),d.TreeSupport.addMethod("setMultipleNodesChilden",function(e,t,r){if(e&&t)for(var i=0;i<t.length;i++){for(var o=t[i],n=o.children,s=null,a=0;a<e.length;a++){var l=d.nodes[e[a]];if(l.param.uri==o.parentUri){s=l;break}}if(s){s.resetChilds(),s.stopWaiting();var h=n.length;if(0===h)s.setHasChilds(!1);else{var u=s.getTreeId(),c=u?d.trees[u]:null,f=c?c.sortNodes:null;c&&(c.sortNodes=!1);for(var p=0;p<h;p++){var v=this.processNode(n[p]);s.addChild(v)}c&&(c.sortNodes=f,s.resortChilds())}s.isloaded=!0,r||s.refreshNode()}}}),d.TreeSupport.addMethod("getTreeNodeChildrenPrefetched",function(e,t,r,i,d,o,n){var s=e.param.uri,a=this.urlGetNode+"&provider="+this.providerId+"&uri="+s,l="";t&&(l="&prefetch="+t),d&&(a+="&depth="+d);var h=function(e,t,r,i,d,o){return function(){return e.getTreeNodeChildrenPrefetchedCallback(t,r,i,d,o)}}(this,e.id,r,i,o,n);u(a,{fillLocation:this.ajaxBufferId,callback:h,postData:l,errorHandler:f,hideLoader:this.hideLoader}),this.inInit||e.wait()}),d.TreeSupport.addMethod("getTreeNodeChildrenPrefetchedCallback",function(e,t,r,i,o){var n=document.getElementById(this.nodeTextId);if(null==n)return void(r?r():this.fireServerErrorEvent());var s=p.unescape(v(n).text()).evalJSON();n=document.getElementById(this.ajaxBufferId),v(n).html("");var a=d.nodes[e];if(a.resetChilds(),a.stopWaiting(),s.children){var l=a.getTreeId(),h=l?d.trees[l]:null,u=h?h.sortNodes:null;h&&(h.sortNodes=!1);for(var c=0;c<s.children.length;c++){var f=this.processNode(s.children[c]);a.addChild(f)}h&&(h.sortNodes=u,i||a.resortChilds())}a.isloaded=!0,o||a.refreshNode(),t?t():this.fireChildredPrefetchedLoadedEvent(a.childs)}),d.TreeSupport.addMethod("openAndSelectNode",function(e,t,r,i){var o=function(e){var t=d.trees[e.getTreeId()];e.parent&&t&&t.rootNode!=e.parent&&t.getState(e.parent.id)==d.TreeNode.State.CLOSED&&e.parent.handleNode(),e&&v("#dataChooserSource").length&&(e.nofocus=!0),t._selectOrEditNode(void 0,e,!1,!1,!1,i)};this.processNodePath(e,o,r);var n=this.getSelectedNode();n&&n.scroll(),t&&t()}),d.TreeSupport.addMethod("processNodePath",function(e,t,r){var i=this.getRootNode();if("/"===e)t(i);else{var d,o=e.split("/");for(d=0;d<o.length;d++)if(o[d]){var n=i;if(!(i=this.findNodeChildByMetaName(i,o[d]))){if(!r)return;if(!(i=this.findNodeFirstNodeChildByAlphabeticalOrder(n)))return}t(i)}}}),d.TreeSupport.addMethod("findLastLoadedNode",function(e){var t={node:null},r=function(e){return function(t){e.node=t}}(t);return this.processNodePath(e,r),t.node}),d.TreeSupport.addMethod("findNodeChildByMetaName",function(e,t){if(e.hasChilds())for(var r=0;r<e.childs.length;r++)if(e.childs[r].param.id==t)return e.childs[r];return null}),d.TreeSupport.addMethod("findNodeFirstNodeChildByAlphabeticalOrder",function(e){var t=null,r=null;if(e.childs.length>0){t=e.childs[0].param.id,r=0;for(var i=null,d=null,o=1;o<e.childs.length;o++){i=e.childs[o].param.id,d=o;for(var n=i.length<t.length?i.length:t.length,s=0;s<n;s++){if(i.charCodeAt(s)<t.charCodeAt(s)){t=i,r=d;break}if(i.charCodeAt(s)>t.charCodeAt(s))break}}return e.childs[r]}return null}),d.TreeSupport.addMethod("findNodeById",function(e,t){return function e(t,r){if(!r||!t)return null;if(r.param.id===t)return r;if(r.hasChilds())for(var i=0;i<r.childs.length;++i){var d=e(t,r.childs[i]);if(d)return d}return null}(e,t||this.getRootNode())}),d.TreeSupport.addMethod("hasVisibleFolders",function(e){if(this.bShowRoot)return!0;var t=e.children;if(t)for(var r=0;r<t.length;r++){var i=e.children[r].children;if(i&&i.length>0)return!0}return!1}),d.TreeSupport.addMethod("getMessage",function(e,t,r){var i=this.urlGetMessage+"&messageId="+e,d=function(e,t,r){return function(){return e.getMessageCallback(t,r)}}(this,t,r);u(i,{fillLocation:this.ajaxBufferId,callback:d,errorHandler:f,hideLoader:this.hideLoader})}),d.TreeSupport.addMethod("getMessageCallback",function(e,t){var r=document.getElementById(this.ajaxBufferId);if(null==r)return void(t&&t());var i=v(r),d=s(i.html());i.html(""),e&&e(d)}),d.TreeSupport.addMethod("fireServerErrorEvent",function(){this._getElement().fire("server:error",{})}),d.TreeSupport.addMethod("fireTreeLoadedEvent",function(e){this._getElement().fire("tree:loaded",{tree:e})}),d.TreeSupport.addMethod("fireChildrenLoadedEvent",function(e){this._getElement().fire("children:loaded",{nodes:e})}),d.TreeSupport.addMethod("fireMultipleChildrenLoadedEvent",function(e,t){this._getElement().fire("multipleChildren:loaded",{parentNodeIds:e,metaNodes:t})}),d.TreeSupport.addMethod("fireChildredPrefetchedLoadedEvent",function(e){this._getElement().fire("childredPrefetched:loaded",{nodes:e})}),r.exports=d});