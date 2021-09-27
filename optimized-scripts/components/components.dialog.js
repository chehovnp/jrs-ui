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

define(["require","exports","module","jquery","underscore","../namespace/namespace","backbone","./components.templateengine","./components.dialogs"],function(e,t,n){var i=e("jquery"),o=e("underscore"),s=e("../namespace/namespace"),a=s.jaspersoft,c=e("backbone"),d=e("./components.templateengine"),l=e("./components.dialogs"),h=c.View.extend({rendered:!1,contentSelector:".body",events:{"click .cancel":"hide"},initialize:function(e){if(this.templateId=e&&e.templateId||this.templateId,this.contentSelector=e&&e.contentSelector||this.contentSelector,!this.templateId)throw"Dialog template is not provided";o.bindAll(this,"render","hide","show","setContent","_updateMessage"),this.options=o.extend({},e)},render:function(e){return this.undelegateEvents(),this.$el=i(d.getTemplateText(this.templateId)).closest("div"),this.el=this.$el[0],i(e||document.body).append(this.$el),this.delegateEvents(),this.rendered=!0,this},hide:function(e){l.popup.hide(this.el),e&&e.stopPropagation()},show:function(e){this.rendered||this.render(e),l.popup.show(this.el,this.options.modal)},setContent:function(e){this.$el.find(this.contentSelector).html(i(e))},_updateMessage:function(e){e=o.isString(e)?[e]:e;var t=document.createDocumentFragment();o.each(e||[],function(e){t.appendChild(i("<p></p>",{text:e,class:"message"})[0])},this),this.$el.find(".body").html(t)}}),p=h.extend({templateId:"standardConfirmTemplate",events:{"click button.cancel":"hide","click button.ok":"onOk"},initialize:function(e){h.prototype.initialize.call(this,e),o.extend(this,o.defaults(e||{},{messages:"",ok:function(){}}))},show:function(e){h.prototype.show.call(this),this._updateMessage(e.messages||this.messages),e.ok&&(this.ok=e.ok)},onOk:function(){this.hide(),this.ok()}});a.components.Dialog=h,a.components.ConfirmDialog=p,n.exports=h});