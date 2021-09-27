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

define(["require","exports","module","../error/JavaScriptExceptionBiComponentError","../error/BiComponentError","../error/SchemaValidationBiComponentError","../error/ContainerNotFoundBiComponentError","../error/AlreadyDestroyedBiComponentError","../error/RequestBiComponentError","../error/NotYetRenderedBiComponentError","../error/InputControlParameterNotFoundBiComponentError"],function(r,o,e){var n=r("../error/JavaScriptExceptionBiComponentError"),t=r("../error/BiComponentError"),i=r("../error/SchemaValidationBiComponentError"),u=r("../error/ContainerNotFoundBiComponentError"),a=r("../error/AlreadyDestroyedBiComponentError"),p=r("../error/RequestBiComponentError"),E=r("../error/NotYetRenderedBiComponentError"),d=r("../error/InputControlParameterNotFoundBiComponentError");e.exports={genericError:function(r,o,e){return new t(r,o,e)},validationError:function(r){return new i(r)},javaScriptException:function(r){return new n(r)},requestError:function(r,o){return new p(r,o)},containerNotFoundError:function(r){return new u(r)},alreadyDestroyedError:function(){return new a},notYetRenderedError:function(){return new E},inputControlParameterNotFound:function(r){return new d(r)}}});