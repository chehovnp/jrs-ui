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

define(["require","exports","module","runtime_dependencies/js-sdk/src/common/component/dialog/Dialog","underscore","bundle!CommonBundle","text!../template/loadingDialogTemplate.htm"],function(e,o,t){var n=e("runtime_dependencies/js-sdk/src/common/component/dialog/Dialog"),l=e("underscore"),d=e("bundle!CommonBundle"),a=e("text!../template/loadingDialogTemplate.htm");t.exports=n.extend({defaultTemplate:a,constructor:function(e){l.defaults(e,{contentContainer:".body > .message",title:d["dialog.overlay.title"],modal:!0}),n.call(this,e)}})});