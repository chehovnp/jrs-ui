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

define(["require","exports","module","prototype","../core/core.layout","../core/core.ajax","../core/core.ajax.utils","./components.dialogs"],function(t,e,o){var i=t("prototype"),r=i.$,s=t("../core/core.layout"),a=t("../core/core.ajax"),n=a.ajaxNonReturningUpdate,h=a.appendPostData,c=t("../core/core.ajax.utils"),p=c.baseErrorHandler,l=t("./components.dialogs"),_={init:!1,DOM_ID:"heartbeatOptin",PERMIT_CHECKBOX_ID:"heartbeatCheck",initialize:function(t){this._baseUrl=t.baseUrl,this._showDialog=t.showDialog,this._sendClientInfo=t.sendClientInfo,this._dom=r(this.DOM_ID),this._dom&&(this._permit=r(this.PERMIT_CHECKBOX_ID),this._okButton=this._dom.select(s.BUTTON_PATTERN)[0],this._okButton.observe("click",this._okHandler.bind(this)),this.init=!0)},_okHandler:function(){l.popup.hide(this._dom);var t=this._baseUrl+"/heartbeat.html?permit="+this._permit.checked;n(t,{errorHandler:p})},start:function(){!1!==this.init&&(this._showDialog&&(l.popup.show(this._dom),this._okButton.focus()),this._sendClientInfo&&this._doSendClientInfo())},_doSendClientInfo:function(){try{var t={};t.navAppName=navigator.appName,t.navAppVersion=navigator.appVersion,t.scrWidth=screen.width,t.scrHeight=screen.height,t.scrColorDepth=screen.colorDepth;var e=h("",t),o=this._baseUrl+"/heartbeatInfo.html";n(o,{postData:e})}catch(t){}}};o.exports=_});