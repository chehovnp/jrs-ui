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

define(["require","exports","module","backbone","underscore","jquery","../../../components/components.dialogs","text!../../template/dialog/baseDialogTemplate.htm"],function(t,e,n){var o=t("backbone"),i=t("underscore"),r=t("jquery"),a=t("../../../components/components.dialogs"),c=t("text!../../template/dialog/baseDialogTemplate.htm");n.exports=o.View.extend({events:{"click button.action.primary":"primaryButtonOnClick","click button.action:not(.primary)":"secondaryButtonOnClick"},isModal:!0,TITLE:"",PRIMARY_BUTTON_LABEL:"",SECONDARY_BUTTON_LABEL:"",el:function(){return i.template(c,{title:this.TITLE,primaryButtonLabel:this.PRIMARY_BUTTON_LABEL,secondaryButtonLabel:this.SECONDARY_BUTTON_LABEL})},initialize:function(){r("body").append(this.render().$el)},show:function(){a.popup.show(this.el,this.isModal)},hide:function(){a.popup.hide(this.el)},render:function(){return this},primaryButtonOnClick:function(){throw new Error("Method not implemented")},secondaryButtonOnClick:function(){this.hide()}})});