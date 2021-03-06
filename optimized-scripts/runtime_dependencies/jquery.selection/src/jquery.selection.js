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

!function(t,e,r){var n=function(t){var n={text:"",start:0,end:0};if(!t.value)return n;try{if(e.getSelection)n.start=t.selectionStart,n.end=t.selectionEnd,n.text=t.value.slice(n.start,n.end);else if(r.selection){t.focus();var s=r.selection.createRange(),a=r.body.createTextRange();n.text=s.text;try{a.moveToElementText(t),a.setEndPoint("StartToStart",s)}catch(e){a=t.createTextRange(),a.setEndPoint("StartToStart",s)}n.start=t.value.length-a.text.length,n.end=n.start+s.text.length}}catch(t){}return n},s={getPos:function(t){var e=n(t);return{start:e.start,end:e.end}},setPos:function(t,r,n){n=this._caretMode(n),"start"==n?r.end=r.start:"end"==n&&(r.start=r.end),t.focus();try{if(t.createTextRange){var s=t.createTextRange();e.navigator.userAgent.toLowerCase().indexOf("msie")>=0&&(r.start=t.value.substr(0,r.start).replace(/\r/g,"").length,r.end=t.value.substr(0,r.end).replace(/\r/g,"").length),s.collapse(!0),s.moveStart("character",r.start),s.moveEnd("character",r.end-r.start),s.select()}else t.setSelectionRange&&t.setSelectionRange(r.start,r.end)}catch(t){}},getText:function(t){return n(t).text},_caretMode:function(t){switch(t=t||"keep",!1===t&&(t="end"),t){case"keep":case"start":case"end":break;default:t="keep"}return t},replace:function(e,r,s){var a=n(e),c=e.value,o=t(e).scrollTop(),i={start:a.start,end:a.start+r.length};e.value=c.substr(0,a.start)+r+c.substr(a.end),t(e).scrollTop(o),this.setPos(e,i,s)},insertBefore:function(e,r,s){var a=n(e),c=e.value,o=t(e).scrollTop(),i={start:a.start+r.length,end:a.end+r.length};e.value=c.substr(0,a.start)+r+c.substr(a.start),t(e).scrollTop(o),this.setPos(e,i,s)},insertAfter:function(e,r,s){var a=n(e),c=e.value,o=t(e).scrollTop(),i={start:a.start,end:a.end};e.value=c.substr(0,a.end)+r+c.substr(a.end),t(e).scrollTop(o),this.setPos(e,i,s)}};t.extend({selection:function(n){var s="text"==(n||"text").toLowerCase();try{if(e.getSelection){if(s)return e.getSelection().toString();var a,c=e.getSelection();return c.getRangeAt?a=c.getRangeAt(0):(a=r.createRange(),a.setStart(c.anchorNode,c.anchorOffset),a.setEnd(c.focusNode,c.focusOffset)),t("<div></div>").append(a.cloneContents()).html()}if(r.selection)return s?r.selection.createRange().text:r.selection.createRange().htmlText}catch(t){}return""}}),t.fn.extend({selection:function(t,e){switch(e=e||{},t){case"getPos":return s.getPos(this[0]);case"setPos":return this.each(function(){s.setPos(this,e)});case"replace":return this.each(function(){s.replace(this,e.text,e.caret)});case"insert":return this.each(function(){"before"==e.mode?s.insertBefore(this,e.text,e.caret):s.insertAfter(this,e.text,e.caret)});case"get":default:return s.getText(this[0])}return this}})}(jQuery,window,window.document);