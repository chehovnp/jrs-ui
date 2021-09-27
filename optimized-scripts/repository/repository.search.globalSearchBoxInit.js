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

define(["require","exports","module","../components/components.searchBox","../actionModel/actionModel.primaryNavigation","../util/utils.common","prototype"],function(o,t,e){var n=o("../components/components.searchBox"),i=o("../actionModel/actionModel.primaryNavigation"),a=o("../util/utils.common"),c=a.encodeUriParameter,r=o("prototype"),s=r.$,h={_searchBox:null,_containerId:"globalSearch",_searchInputId:"searchInput",initialize:function(){this._searchBox=new n({id:this._containerId}),this._searchBox.onSearch=function(o){s(this._searchInputId).setValue(o),i.navigationPaths.search.params+="&searchText="+c(o),i.navigationOption("search")}.bind(this)},setText:function(o){this._searchBox.setText(o)}};e.exports=h});