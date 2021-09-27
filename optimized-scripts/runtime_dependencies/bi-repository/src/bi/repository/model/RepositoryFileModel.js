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

define(["require","exports","module","./RepositoryResourceModel","backbone","../enum/repositoryResourceTypes","../enum/repositoryFileTypes","runtime_dependencies/js-sdk/src/common/util/base64","underscore"],function(e,t,n){var o=e("./RepositoryResourceModel"),i=e("backbone"),s=e("../enum/repositoryResourceTypes"),r=e("../enum/repositoryFileTypes"),c=e("runtime_dependencies/js-sdk/src/common/util/base64"),d=e("underscore");n.exports=o.extend({type:s.FILE,stringifyContent:!0,validation:function(){var e=d.extend({},o.prototype.validation);return delete e.parentFolderUri,e}(),defaults:d.extend({type:r.UNSPECIFIED,content:void 0},o.prototype.defaults),initialize:function(e){o.prototype.initialize.apply(this,arguments),this.content=this._decodeContent(this.get("content")),this.on("change:content",function(){this.content=this._decodeContent(this.get("content"))},this)},setContent:function(e){this.content=e,this.set("content",this._encodeContent(e),{silent:!0})},fetchContent:function(e){e||(e={});var t=this;return i.ajax(d.defaults(e,{type:"GET",url:this.url()+"?expanded=false",success:function(e){t.setContent(e)}}))},_encodeContent:function(e){return d.isUndefined(e)||(this.stringifyContent&&(e=JSON.stringify(e)),e=e&&c.encode(e)),e},_decodeContent:function(e){try{/[A-Za-z0-9+\/=]/.test(e)&&(e=c.decode(e),this.stringifyContent&&(e=JSON.parse(e)))}catch(e){}return e}})});