define(function(require, exports, module) {
var __disableStrictMode__ = "use strict";

var request = require("request");

var Backbone = require('backbone');

var $ = require('jquery');

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
var CustomKeyModel = Backbone.Model.extend({
  getCustomKeys: function getCustomKeys() {
    var dfd = new $.Deferred();
    request({
      url: 'rest_v2/keys',
      type: 'GET',
      dataType: 'json',
      contentType: 'application/json'
    }).done(function (response, textStatus, jqXHR) {
      return jqXHR.status === 200 ? dfd.resolve(response) : dfd.resolve([]);
    }).fail(function (response) {
      dfd.reject(response);
    });
    return dfd;
  }
});
module.exports = CustomKeyModel;

});