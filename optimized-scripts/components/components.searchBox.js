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

define(["require","exports","module","prototype","../core/core.layout","../core/core.events.bis"],function(t,e,i){var s=t("prototype"),n=s.$,o=t("../core/core.layout"),d=t("../core/core.events.bis"),a=function(t){this._id=t.id,this._dom=n(this._id),this._enabled=!0,this._process(),this._assignHandlers()};a.addMethod("_process",function(){this._input=this._dom.select("input")[0],this._clearButton=this._dom.select(".button.searchClear")[0],this._searchButton=this._dom.select(".button.search")[0]}),a.addMethod("_assignHandlers",function(){this._dom.observe("submit",function(t){Event.stop(t)}),this._input.observe("keypress",this._keyPressHandler.bindAsEventListener(this)),this._clearButton.observe("click",this._clearHandler.bindAsEventListener(this)),this._searchButton.observe("click",this._searchHandler.bindAsEventListener(this))}),a.addMethod("_keyPressHandler",function(t){this._enabled&&Event.KEY_RETURN==t.keyCode&&(this._doSearch(),Event.stop(t))}),a.addMethod("_updateClearButtonVisibility",function(){this.getText().blank()?this._clearButton.removeClassName(o.UP_CLASS):this._clearButton.addClassName(o.UP_CLASS)}),a.addMethod("_clearHandler",function(){this._enabled&&(this.setText(""),this._doSearch())}),a.addMethod("_searchHandler",function(){this._enabled&&this._doSearch()}),a.addMethod("getText",function(){return this._input.getValue()}),a.addMethod("setText",function(t){this._input.setValue(t),this._updateClearButtonVisibility()}),a.addMethod("enable",function(){d.enable(this._clearButton),d.enable(this._searchButton),this._input.writeAttribute(o.READONLY_ATTR_NAME,null),this._dom.writeAttribute(o.DISABLED_ATTR_NAME,null),this._enabled=!0}),a.addMethod("disable",function(){d.disable(this._clearButton),d.disable(this._searchButton),this._input.writeAttribute(o.READONLY_ATTR_NAME,o.READONLY_ATTR_NAME),this._dom.writeAttribute(o.DISABLED_ATTR_NAME,o.DISABLED_ATTR_NAME),this._enabled=!1}),a.addMethod("_doSearch",function(t){this._updateClearButtonVisibility(),this.onSearch(this.getText())}),a.addMethod("onSearch",function(t){}),i.exports=a});