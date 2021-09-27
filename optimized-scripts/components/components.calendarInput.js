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

define(["require","exports","module","jquery","underscore","settings!dateTimeSettings","../util/utils.common","../config/dateAndTimeSettings"],function(e,t,i){var n=e("jquery"),a=e("underscore"),s=e("settings!dateTimeSettings"),o=e("../util/utils.common"),r=o.cancelEventBubbling;e("../config/dateAndTimeSettings");var h=function(e){this.container=null,void 0!==e.container&&(this.container=void 0===e.container.jquery?n(e.container):e.container),this.name=e.name,this.id=e.name.replace(".","_"),this.value=e.value,this.onChange=e.onchange||null,this.isReadOnly=void 0!==e.readOnly&&e.readOnly,this.hasDate=void 0!==e.date&&""!==e.date&&"true"===e.date,this.hasTime=void 0!==e.time&&""!==e.time&&"true"===e.time,this.pickerOptions=a.extend({},this.defaultPickerOptions),this.hasDate&&a.extend(this.pickerOptions,s.datepicker),this.hasTime&&a.extend(this.pickerOptions,s.timepicker),void 0!==e.picker&&a.isObject(e.picker)&&a.extend(this.pickerOptions,e.picker),this.field=null};h.prototype.defaultPickerOptions={showOn:"button",buttonText:"",changeYear:!0,changeMonth:!0,showButtonPanel:!0,onChangeMonthYear:null,beforeShow:n.datepicker.movePickerRelativelyToTriggerIcon},h.prototype.create=function(){var e=n("<input type='text'/>").attr({name:this.name,id:this.id,value:this.value});if(e.on("mousedown",r),this.onChange&&e.on("change",this.onChange),this.isReadOnly&&e.attr("disabled","disabled"),this.field=e,this.container.append(this.field),!this.isReadOnly){var t=this.hasDate?"date":"";t+=this.hasTime?"time":"",t+="picker",n.fn[t].call(e,this.pickerOptions).next().addClass("button").addClass("picker"),e[0].getValue=function(){return n(this).val()}}},i.exports=h});