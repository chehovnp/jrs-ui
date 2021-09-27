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

define(["require","exports","module","jquery"],function(e,t,n){var u=e("jquery");n.exports={updateDebugInfo:function(){if(this.debugElementID){var e=u("#"+this.debugElementID),t=u(".superfocus"),n=u(document.activeElement),o=u(".subfocus"),i="[sup:";e.length<1||(i+=t.length,t.length>0?i+=":"+t[0].nodeName+"#"+t[0].id:i+="?",i+=", foc:",i+=n.length,n.length>0?i+=":"+n[0].nodeName+"#"+n[0].id:i+="?",i+=", sub:",i+=o.length,o.length>0?i+=":"+o[0].nodeName+"#"+o[0].id:i+="?",t=u(this._priorSuperfocus),n=u(this._priorFocus),o=u(this._priorSubfocus),i+=" :: psup:",e.length<1||(i+=t.length,t.length>0?i+=":"+t[0].nodeName+"#"+t[0].id:i+="?",i+=", pfoc:",i+=n.length,n.length>0?i+=":"+n[0].nodeName+"#"+n[0].id:i+="?",i+=", psub:",i+=o.length,o.length>0?i+=":"+o[0].nodeName+"#"+o[0].id:i+="?",i+="]",e.text(i)))}}}});