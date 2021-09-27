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

!function(r,e){"function"==typeof define&&define.amd?define([],e):"undefined"!=typeof module&&module.exports?module.exports=e():r.tv4=e()}(this,function(){function r(r){return encodeURI(r).replace(/%25[0-9][0-9]/g,function(r){return"%"+r.substring(3)})}function e(e){var t="";p[e.charAt(0)]&&(t=e.charAt(0),e=e.substring(1));var i="",n="",a=!0,o=!1,s=!1;"+"===t?a=!1:"."===t?(n=".",i="."):"/"===t?(n="/",i="/"):"#"===t?(n="#",a=!1):";"===t?(n=";",i=";",o=!0,s=!0):"?"===t?(n="?",i="&",o=!0):"&"===t&&(n="&",i="&",o=!0);for(var l=[],h=e.split(","),u=[],f={},d=0;d<h.length;d++){var m=h[d],v=null;if(-1!==m.indexOf(":")){var y=m.split(":");m=y[0],v=parseInt(y[1],10)}for(var E={};c[m.charAt(m.length-1)];)E[m.charAt(m.length-1)]=!0,m=m.substring(0,m.length-1);var g={truncate:v,name:m,suffices:E};u.push(g),f[m]=g,l.push(m)}var O=function(e){for(var t="",l=0,h=0;h<u.length;h++){var f=u[h],p=e(f.name);if(null===p||void 0===p||Array.isArray(p)&&0===p.length||"object"==typeof p&&0===Object.keys(p).length)l++;else if(t+=h===l?n:i||",",Array.isArray(p)){o&&(t+=f.name+"=");for(var c=0;c<p.length;c++)c>0&&(t+=f.suffices["*"]?i||",":",",f.suffices["*"]&&o&&(t+=f.name+"=")),t+=a?encodeURIComponent(p[c]).replace(/!/g,"%21"):r(p[c])}else if("object"==typeof p){o&&!f.suffices["*"]&&(t+=f.name+"=");var d=!0;for(var m in p)d||(t+=f.suffices["*"]?i||",":","),d=!1,t+=a?encodeURIComponent(m).replace(/!/g,"%21"):r(m),t+=f.suffices["*"]?"=":",",t+=a?encodeURIComponent(p[m]).replace(/!/g,"%21"):r(p[m])}else o&&(t+=f.name,s&&""===p||(t+="=")),null!=f.truncate&&(p=p.substring(0,f.truncate)),t+=a?encodeURIComponent(p).replace(/!/g,"%21"):r(p)}return t};return O.varNames=l,{prefix:n,substitution:O}}function t(r){if(!(this instanceof t))return new t(r);for(var i=r.split("{"),n=[i.shift()],a=[],o=[],s=[];i.length>0;){var l=i.shift(),h=l.split("}")[0],u=l.substring(h.length+1),f=e(h);o.push(f.substitution),a.push(f.prefix),n.push(u),s=s.concat(f.substitution.varNames)}this.fill=function(r){for(var e=n[0],t=0;t<o.length;t++){e+=(0,o[t])(r),e+=n[t+1]}return e},this.varNames=s,this.template=r}function i(r,e){if(r===e)return!0;if(r&&e&&"object"==typeof r&&"object"==typeof e){if(Array.isArray(r)!==Array.isArray(e))return!1;if(Array.isArray(r)){if(r.length!==e.length)return!1;for(var t=0;t<r.length;t++)if(!i(r[t],e[t]))return!1}else{var n;for(n in r)if(void 0===e[n]&&void 0!==r[n])return!1;for(n in e)if(void 0===r[n]&&void 0!==e[n])return!1;for(n in r)if(!i(r[n],e[n]))return!1}return!0}return!1}function n(r){var e=String(r).replace(/^\s+|\s+$/g,"").match(/^([^:\/?#]+:)?(\/\/(?:[^:@]*(?::[^:@]*)?@)?(([^:\/?#]*)(?::(\d*))?))?([^?#]*)(\?[^#]*)?(#[\s\S]*)?/);return e?{href:e[0]||"",protocol:e[1]||"",authority:e[2]||"",host:e[3]||"",hostname:e[4]||"",port:e[5]||"",pathname:e[6]||"",search:e[7]||"",hash:e[8]||""}:null}function a(r,e){return e=n(e||""),r=n(r||""),e&&r?(e.protocol||r.protocol)+(e.protocol||e.authority?e.authority:r.authority)+function(r){var e=[];return r.replace(/^(\.\.?(\/|$))+/,"").replace(/\/(\.(\/|$))+/g,"/").replace(/\/\.\.$/,"/../").replace(/\/?[^\/]*/g,function(r){"/.."===r?e.pop():e.push(r)}),e.join("").replace(/^\//,"/"===r.charAt(0)?"/":"")}(e.protocol||e.authority||"/"===e.pathname.charAt(0)?e.pathname:e.pathname?(r.authority&&!r.pathname?"/":"")+r.pathname.slice(0,r.pathname.lastIndexOf("/")+1)+e.pathname:r.pathname)+(e.protocol||e.authority||e.pathname?e.search:e.search||r.search)+e.hash:null}function o(r){return r.split("#")[0]}function s(r,e){if(r&&"object"==typeof r)if(void 0===e?e=r.id:"string"==typeof r.id&&(e=a(e,r.id),r.id=e),Array.isArray(r))for(var t=0;t<r.length;t++)s(r[t],e);else{"string"==typeof r.$ref&&(r.$ref=a(e,r.$ref));for(var i in r)"enum"!==i&&s(r[i],e)}}function l(r){r=r||"en";var e=P[r];return function(r){var t=e[r.code]||O[r.code];if("string"!=typeof t)return"Unknown error code "+r.code+": "+JSON.stringify(r.messageParams);var i=r.params;return t.replace(/\{([^{}]*)\}/g,function(r,e){var t=i[e];return"string"==typeof t||"number"==typeof t?t:r})}}function h(r,e,t,i,n){if(Error.call(this),void 0===r)throw new Error("No error code supplied: "+i);this.message="",this.params=e,this.code=r,this.dataPath=t||"",this.schemaPath=i||"",this.subErrors=n||null;var a=new Error(this.message);if(this.stack=a.stack||a.stacktrace,!this.stack)try{throw a}catch(a){this.stack=a.stack||a.stacktrace}}function u(r,e){if(e.substring(0,r.length)===r){var t=e.substring(r.length);if(e.length>0&&"/"===e.charAt(r.length-1)||"#"===t.charAt(0)||"?"===t.charAt(0))return!0}return!1}function f(r){var e,t,i=new d,n={setErrorReporter:function(r){return"string"==typeof r?this.language(r):(t=r,!0)},addFormat:function(){i.addFormat.apply(i,arguments)},language:function(r){return r?(P[r]||(r=r.split("-")[0]),!!P[r]&&(e=r,r)):e},addLanguage:function(r,e){var t;for(t in y)e[t]&&!e[y[t]]&&(e[y[t]]=e[t]);var i=r.split("-")[0];if(P[i]){P[r]=Object.create(P[i]);for(t in e)void 0===P[i][t]&&(P[i][t]=e[t]),P[r][t]=e[t]}else P[r]=e,P[i]=e;return this},freshApi:function(r){var e=f();return r&&e.language(r),e},validate:function(r,n,a,o){var s=l(e),h=t?function(r,e,i){return t(r,e,i)||s(r,e,i)}:s,u=new d(i,!1,h,a,o);"string"==typeof n&&(n={$ref:n}),u.addSchema("",n);var f=u.validateAll(r,n,null,null,"");return!f&&o&&(f=u.banUnknownProperties(r,n)),this.error=f,this.missing=u.missing,this.valid=null===f,this.valid},validateResult:function(){var r={};return this.validate.apply(r,arguments),r},validateMultiple:function(r,n,a,o){var s=l(e),h=t?function(r,e,i){return t(r,e,i)||s(r,e,i)}:s,u=new d(i,!0,h,a,o);"string"==typeof n&&(n={$ref:n}),u.addSchema("",n),u.validateAll(r,n,null,null,""),o&&u.banUnknownProperties(r,n);var f={};return f.errors=u.errors,f.missing=u.missing,f.valid=0===f.errors.length,f},addSchema:function(){return i.addSchema.apply(i,arguments)},getSchema:function(){return i.getSchema.apply(i,arguments)},getSchemaMap:function(){return i.getSchemaMap.apply(i,arguments)},getSchemaUris:function(){return i.getSchemaUris.apply(i,arguments)},getMissingUris:function(){return i.getMissingUris.apply(i,arguments)},dropSchemas:function(){i.dropSchemas.apply(i,arguments)},defineKeyword:function(){i.defineKeyword.apply(i,arguments)},defineError:function(r,e,t){if("string"!=typeof r||!/^[A-Z]+(_[A-Z]+)*$/.test(r))throw new Error("Code name must be a string in UPPER_CASE_WITH_UNDERSCORES");if("number"!=typeof e||e%1!=0||e<1e4)throw new Error("Code number must be an integer > 10000");if(void 0!==y[r])throw new Error("Error already defined: "+r+" as "+y[r]);if(void 0!==E[e])throw new Error("Error code already used: "+E[e]+" as "+e);y[r]=e,E[e]=r,O[r]=O[e]=t;for(var i in P){var n=P[i];n[r]&&(n[e]=n[e]||n[r])}},reset:function(){i.reset(),this.error=null,this.missing=[],this.valid=!0},missing:[],error:null,valid:!0,normSchema:s,resolveUrl:a,getDocumentUri:o,errorCodes:y};return n.language(r||"en"),n}Object.keys||(Object.keys=function(){var r=Object.prototype.hasOwnProperty,e=!{toString:null}.propertyIsEnumerable("toString"),t=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],i=t.length;return function(n){if("object"!=typeof n&&"function"!=typeof n||null===n)throw new TypeError("Object.keys called on non-object");var a=[];for(var o in n)r.call(n,o)&&a.push(o);if(e)for(var s=0;s<i;s++)r.call(n,t[s])&&a.push(t[s]);return a}}()),Object.create||(Object.create=function(){function r(){}return function(e){if(1!==arguments.length)throw new Error("Object.create implementation only accepts one parameter.");return r.prototype=e,new r}}()),Array.isArray||(Array.isArray=function(r){return"[object Array]"===Object.prototype.toString.call(r)}),Array.prototype.indexOf||(Array.prototype.indexOf=function(r){if(null===this)throw new TypeError;var e=Object(this),t=e.length>>>0;if(0===t)return-1;var i=0;if(arguments.length>1&&(i=Number(arguments[1]),i!==i?i=0:0!==i&&i!==1/0&&i!==-1/0&&(i=(i>0||-1)*Math.floor(Math.abs(i)))),i>=t)return-1;for(var n=i>=0?i:Math.max(t-Math.abs(i),0);n<t;n++)if(n in e&&e[n]===r)return n;return-1}),Object.isFrozen||(Object.isFrozen=function(r){for(var e="tv4_test_frozen_key";r.hasOwnProperty(e);)e+=Math.random();try{return r[e]=!0,delete r[e],!1}catch(r){return!0}});var p={"+":!0,"#":!0,".":!0,"/":!0,";":!0,"?":!0,"&":!0},c={"*":!0};t.prototype={toString:function(){return this.template},fillFromObject:function(r){return this.fill(function(e){return r[e]})}};var d=function(r,e,t,i,n){if(this.missing=[],this.missingMap={},this.formatValidators=r?Object.create(r.formatValidators):{},this.schemas=r?Object.create(r.schemas):{},this.collectMultiple=e,this.errors=[],this.handleError=e?this.collectError:this.returnError,i&&(this.checkRecursive=!0,this.scanned=[],this.scannedFrozen=[],this.scannedFrozenSchemas=[],this.scannedFrozenValidationErrors=[],this.validatedSchemasKey="tv4_validation_id",this.validationErrorsKey="tv4_validation_errors_id"),n&&(this.trackUnknownProperties=!0,this.knownPropertyPaths={},this.unknownPropertyPaths={}),this.errorReporter=t||l("en"),"string"==typeof this.errorReporter)throw new Error("debug");if(this.definedKeywords={},r)for(var a in r.definedKeywords)this.definedKeywords[a]=r.definedKeywords[a].slice(0)};d.prototype.defineKeyword=function(r,e){this.definedKeywords[r]=this.definedKeywords[r]||[],this.definedKeywords[r].push(e)},d.prototype.createError=function(r,e,t,i,n,a,o){var s=new h(r,e,t,i,n);return s.message=this.errorReporter(s,a,o),s},d.prototype.returnError=function(r){return r},d.prototype.collectError=function(r){return r&&this.errors.push(r),null},d.prototype.prefixErrors=function(r,e,t){for(var i=r;i<this.errors.length;i++)this.errors[i]=this.errors[i].prefixWith(e,t);return this},d.prototype.banUnknownProperties=function(r,e){for(var t in this.unknownPropertyPaths){var i=this.createError(y.UNKNOWN_PROPERTY,{path:t},t,"",null,r,e),n=this.handleError(i);if(n)return n}return null},d.prototype.addFormat=function(r,e){if("object"==typeof r){for(var t in r)this.addFormat(t,r[t]);return this}this.formatValidators[r]=e},d.prototype.resolveRefs=function(r,e){if(void 0!==r.$ref){if(e=e||{},e[r.$ref])return this.createError(y.CIRCULAR_REFERENCE,{urls:Object.keys(e).join(", ")},"","",null,void 0,r);e[r.$ref]=!0,r=this.getSchema(r.$ref,e)}return r},d.prototype.getSchema=function(r,e){var t;if(void 0!==this.schemas[r])return t=this.schemas[r],this.resolveRefs(t,e);var i=r,n="";if(-1!==r.indexOf("#")&&(n=r.substring(r.indexOf("#")+1),i=r.substring(0,r.indexOf("#"))),"object"==typeof this.schemas[i]){t=this.schemas[i];var a=decodeURIComponent(n);if(""===a)return this.resolveRefs(t,e);if("/"!==a.charAt(0))return;for(var o=a.split("/").slice(1),s=0;s<o.length;s++){var l=o[s].replace(/~1/g,"/").replace(/~0/g,"~");if(void 0===t[l]){t=void 0;break}t=t[l]}if(void 0!==t)return this.resolveRefs(t,e)}void 0===this.missing[i]&&(this.missing.push(i),this.missing[i]=i,this.missingMap[i]=i)},d.prototype.searchSchemas=function(r,e){if(Array.isArray(r))for(var t=0;t<r.length;t++)this.searchSchemas(r[t],e);else if(r&&"object"==typeof r){"string"==typeof r.id&&u(e,r.id)&&void 0===this.schemas[r.id]&&(this.schemas[r.id]=r);for(var i in r)if("enum"!==i)if("object"==typeof r[i])this.searchSchemas(r[i],e);else if("$ref"===i){var n=o(r[i]);n&&void 0===this.schemas[n]&&void 0===this.missingMap[n]&&(this.missingMap[n]=n)}}},d.prototype.addSchema=function(r,e){if("string"!=typeof r||void 0===e){if("object"!=typeof r||"string"!=typeof r.id)return;e=r,r=e.id}r===o(r)+"#"&&(r=o(r)),this.schemas[r]=e,delete this.missingMap[r],s(e,r),this.searchSchemas(e,r)},d.prototype.getSchemaMap=function(){var r={};for(var e in this.schemas)r[e]=this.schemas[e];return r},d.prototype.getSchemaUris=function(r){var e=[];for(var t in this.schemas)r&&!r.test(t)||e.push(t);return e},d.prototype.getMissingUris=function(r){var e=[];for(var t in this.missingMap)r&&!r.test(t)||e.push(t);return e},d.prototype.dropSchemas=function(){this.schemas={},this.reset()},d.prototype.reset=function(){this.missing=[],this.missingMap={},this.errors=[]},d.prototype.validateAll=function(r,e,t,i,n){var a;if(!(e=this.resolveRefs(e)))return null;if(e instanceof h)return this.errors.push(e),e;var o,s=this.errors.length,l=null,u=null;if(this.checkRecursive&&r&&"object"==typeof r){if(a=!this.scanned.length,r[this.validatedSchemasKey]){var f=r[this.validatedSchemasKey].indexOf(e);if(-1!==f)return this.errors=this.errors.concat(r[this.validationErrorsKey][f]),null}if(Object.isFrozen(r)&&-1!==(o=this.scannedFrozen.indexOf(r))){var p=this.scannedFrozenSchemas[o].indexOf(e);if(-1!==p)return this.errors=this.errors.concat(this.scannedFrozenValidationErrors[o][p]),null}if(this.scanned.push(r),Object.isFrozen(r))-1===o&&(o=this.scannedFrozen.length,this.scannedFrozen.push(r),this.scannedFrozenSchemas.push([])),l=this.scannedFrozenSchemas[o].length,this.scannedFrozenSchemas[o][l]=e,this.scannedFrozenValidationErrors[o][l]=[];else{if(!r[this.validatedSchemasKey])try{Object.defineProperty(r,this.validatedSchemasKey,{value:[],configurable:!0}),Object.defineProperty(r,this.validationErrorsKey,{value:[],configurable:!0})}catch(e){r[this.validatedSchemasKey]=[],r[this.validationErrorsKey]=[]}u=r[this.validatedSchemasKey].length,r[this.validatedSchemasKey][u]=e,r[this.validationErrorsKey][u]=[]}}var c=this.errors.length,d=this.validateBasic(r,e,n)||this.validateNumeric(r,e,n)||this.validateString(r,e,n)||this.validateArray(r,e,n)||this.validateObject(r,e,n)||this.validateCombinations(r,e,n)||this.validateHypermedia(r,e,n)||this.validateFormat(r,e,n)||this.validateDefinedKeywords(r,e,n)||null;if(a){for(;this.scanned.length;){delete this.scanned.pop()[this.validatedSchemasKey]}this.scannedFrozen=[],this.scannedFrozenSchemas=[]}if(d||c!==this.errors.length)for(;t&&t.length||i&&i.length;){var m=t&&t.length?""+t.pop():null,v=i&&i.length?""+i.pop():null;d&&(d=d.prefixWith(m,v)),this.prefixErrors(c,m,v)}return null!==l?this.scannedFrozenValidationErrors[o][l]=this.errors.slice(s):null!==u&&(r[this.validationErrorsKey][u]=this.errors.slice(s)),this.handleError(d)},d.prototype.validateFormat=function(r,e){if("string"!=typeof e.format||!this.formatValidators[e.format])return null;var t=this.formatValidators[e.format].call(null,r,e);return"string"==typeof t||"number"==typeof t?this.createError(y.FORMAT_CUSTOM,{message:t},"","/format",null,r,e):t&&"object"==typeof t?this.createError(y.FORMAT_CUSTOM,{message:t.message||"?"},t.dataPath||"",t.schemaPath||"/format",null,r,e):null},d.prototype.validateDefinedKeywords=function(r,e,t){for(var i in this.definedKeywords)if(void 0!==e[i])for(var n=this.definedKeywords[i],a=0;a<n.length;a++){var o=n[a],s=o(r,e[i],e,t);if("string"==typeof s||"number"==typeof s)return this.createError(y.KEYWORD_CUSTOM,{key:i,message:s},"","",null,r,e).prefixWith(null,i);if(s&&"object"==typeof s){var l=s.code;if("string"==typeof l){if(!y[l])throw new Error("Undefined error code (use defineError): "+l);l=y[l]}else"number"!=typeof l&&(l=y.KEYWORD_CUSTOM);var h="object"==typeof s.message?s.message:{key:i,message:s.message||"?"},u=s.schemaPath||"/"+i.replace(/~/g,"~0").replace(/\//g,"~1");return this.createError(l,h,s.dataPath||null,u,null,r,e)}}return null},d.prototype.validateBasic=function(r,e,t){var i;return(i=this.validateType(r,e,t))?i.prefixWith(null,"type"):(i=this.validateEnum(r,e,t))?i.prefixWith(null,"type"):null},d.prototype.validateType=function(r,e){if(void 0===e.type)return null;var t=typeof r;null===r?t="null":Array.isArray(r)&&(t="array");var i=e.type;Array.isArray(i)||(i=[i]);for(var n=0;n<i.length;n++){var a=i[n];if(a===t||"integer"===a&&"number"===t&&r%1==0)return null}return this.createError(y.INVALID_TYPE,{type:t,expected:i.join("/")},"","",null,r,e)},d.prototype.validateEnum=function(r,e){if(void 0===e.enum)return null;for(var t=0;t<e.enum.length;t++){if(i(r,e.enum[t]))return null}return this.createError(y.ENUM_MISMATCH,{value:"undefined"!=typeof JSON?JSON.stringify(r):r},"","",null,r,e)},d.prototype.validateNumeric=function(r,e,t){return this.validateMultipleOf(r,e,t)||this.validateMinMax(r,e,t)||this.validateNaN(r,e,t)||null};var m=Math.pow(2,-51),v=1-m;d.prototype.validateMultipleOf=function(r,e){var t=e.multipleOf||e.divisibleBy;if(void 0===t)return null;if("number"==typeof r){var i=r/t%1;if(i>=m&&i<v)return this.createError(y.NUMBER_MULTIPLE_OF,{value:r,multipleOf:t},"","",null,r,e)}return null},d.prototype.validateMinMax=function(r,e){if("number"!=typeof r)return null;if(void 0!==e.minimum){if(r<e.minimum)return this.createError(y.NUMBER_MINIMUM,{value:r,minimum:e.minimum},"","/minimum",null,r,e);if(e.exclusiveMinimum&&r===e.minimum)return this.createError(y.NUMBER_MINIMUM_EXCLUSIVE,{value:r,minimum:e.minimum},"","/exclusiveMinimum",null,r,e)}if(void 0!==e.maximum){if(r>e.maximum)return this.createError(y.NUMBER_MAXIMUM,{value:r,maximum:e.maximum},"","/maximum",null,r,e);if(e.exclusiveMaximum&&r===e.maximum)return this.createError(y.NUMBER_MAXIMUM_EXCLUSIVE,{value:r,maximum:e.maximum},"","/exclusiveMaximum",null,r,e)}return null},d.prototype.validateNaN=function(r,e){return"number"!=typeof r?null:!0===isNaN(r)||r===1/0||r===-1/0?this.createError(y.NUMBER_NOT_A_NUMBER,{value:r},"","/type",null,r,e):null},d.prototype.validateString=function(r,e,t){return this.validateStringLength(r,e,t)||this.validateStringPattern(r,e,t)||null},d.prototype.validateStringLength=function(r,e){return"string"!=typeof r?null:void 0!==e.minLength&&r.length<e.minLength?this.createError(y.STRING_LENGTH_SHORT,{length:r.length,minimum:e.minLength},"","/minLength",null,r,e):void 0!==e.maxLength&&r.length>e.maxLength?this.createError(y.STRING_LENGTH_LONG,{length:r.length,maximum:e.maxLength},"","/maxLength",null,r,e):null},d.prototype.validateStringPattern=function(r,e){if("string"!=typeof r||"string"!=typeof e.pattern&&!(e.pattern instanceof RegExp))return null;var t;if(e.pattern instanceof RegExp)t=e.pattern;else{var i,n="",a=e.pattern.match(/^\/(.+)\/([img]*)$/);a?(i=a[1],n=a[2]):i=e.pattern,t=new RegExp(i,n)}return t.test(r)?null:this.createError(y.STRING_PATTERN,{pattern:e.pattern},"","/pattern",null,r,e)},d.prototype.validateArray=function(r,e,t){return Array.isArray(r)?this.validateArrayLength(r,e,t)||this.validateArrayUniqueItems(r,e,t)||this.validateArrayItems(r,e,t)||null:null},d.prototype.validateArrayLength=function(r,e){var t;return void 0!==e.minItems&&r.length<e.minItems&&(t=this.createError(y.ARRAY_LENGTH_SHORT,{length:r.length,minimum:e.minItems},"","/minItems",null,r,e),this.handleError(t))?t:void 0!==e.maxItems&&r.length>e.maxItems&&(t=this.createError(y.ARRAY_LENGTH_LONG,{length:r.length,maximum:e.maxItems},"","/maxItems",null,r,e),this.handleError(t))?t:null},d.prototype.validateArrayUniqueItems=function(r,e){if(e.uniqueItems)for(var t=0;t<r.length;t++)for(var n=t+1;n<r.length;n++)if(i(r[t],r[n])){var a=this.createError(y.ARRAY_UNIQUE,{match1:t,match2:n},"","/uniqueItems",null,r,e);if(this.handleError(a))return a}return null},d.prototype.validateArrayItems=function(r,e,t){if(void 0===e.items)return null;var i,n;if(Array.isArray(e.items)){for(n=0;n<r.length;n++)if(n<e.items.length){if(i=this.validateAll(r[n],e.items[n],[n],["items",n],t+"/"+n))return i}else if(void 0!==e.additionalItems)if("boolean"==typeof e.additionalItems){if(!e.additionalItems&&(i=this.createError(y.ARRAY_ADDITIONAL_ITEMS,{},"/"+n,"/additionalItems",null,r,e),this.handleError(i)))return i}else if(i=this.validateAll(r[n],e.additionalItems,[n],["additionalItems"],t+"/"+n))return i}else for(n=0;n<r.length;n++)if(i=this.validateAll(r[n],e.items,[n],["items"],t+"/"+n))return i;return null},d.prototype.validateObject=function(r,e,t){return"object"!=typeof r||null===r||Array.isArray(r)?null:this.validateObjectMinMaxProperties(r,e,t)||this.validateObjectRequiredProperties(r,e,t)||this.validateObjectProperties(r,e,t)||this.validateObjectDependencies(r,e,t)||null},d.prototype.validateObjectMinMaxProperties=function(r,e){var t,i=Object.keys(r);return void 0!==e.minProperties&&i.length<e.minProperties&&(t=this.createError(y.OBJECT_PROPERTIES_MINIMUM,{propertyCount:i.length,minimum:e.minProperties},"","/minProperties",null,r,e),this.handleError(t))?t:void 0!==e.maxProperties&&i.length>e.maxProperties&&(t=this.createError(y.OBJECT_PROPERTIES_MAXIMUM,{propertyCount:i.length,maximum:e.maxProperties},"","/maxProperties",null,r,e),this.handleError(t))?t:null},d.prototype.validateObjectRequiredProperties=function(r,e){if(void 0!==e.required)for(var t=0;t<e.required.length;t++){var i=e.required[t];if(void 0===r[i]){var n=this.createError(y.OBJECT_REQUIRED,{key:i},"","/required/"+t,null,r,e);if(this.handleError(n))return n}}return null},d.prototype.validateObjectProperties=function(r,e,t){var i;for(var n in r){var a=t+"/"+n.replace(/~/g,"~0").replace(/\//g,"~1"),o=!1;if(void 0!==e.properties&&void 0!==e.properties[n]&&(o=!0,i=this.validateAll(r[n],e.properties[n],[n],["properties",n],a)))return i;if(void 0!==e.patternProperties)for(var s in e.patternProperties){var l=new RegExp(s);if(l.test(n)&&(o=!0,i=this.validateAll(r[n],e.patternProperties[s],[n],["patternProperties",s],a)))return i}if(o)this.trackUnknownProperties&&(this.knownPropertyPaths[a]=!0,delete this.unknownPropertyPaths[a]);else if(void 0!==e.additionalProperties){if(this.trackUnknownProperties&&(this.knownPropertyPaths[a]=!0,delete this.unknownPropertyPaths[a]),"boolean"==typeof e.additionalProperties){if(!e.additionalProperties&&(i=this.createError(y.OBJECT_ADDITIONAL_PROPERTIES,{key:n},"","/additionalProperties",null,r,e).prefixWith(n,null),this.handleError(i)))return i}else if(i=this.validateAll(r[n],e.additionalProperties,[n],["additionalProperties"],a))return i}else this.trackUnknownProperties&&!this.knownPropertyPaths[a]&&(this.unknownPropertyPaths[a]=!0)}return null},d.prototype.validateObjectDependencies=function(r,e,t){var i;if(void 0!==e.dependencies)for(var n in e.dependencies)if(void 0!==r[n]){var a=e.dependencies[n];if("string"==typeof a){if(void 0===r[a]&&(i=this.createError(y.OBJECT_DEPENDENCY_KEY,{key:n,missing:a},"","",null,r,e).prefixWith(null,n).prefixWith(null,"dependencies"),this.handleError(i)))return i}else if(Array.isArray(a))for(var o=0;o<a.length;o++){var s=a[o];if(void 0===r[s]&&(i=this.createError(y.OBJECT_DEPENDENCY_KEY,{key:n,missing:s},"","/"+o,null,r,e).prefixWith(null,n).prefixWith(null,"dependencies"),this.handleError(i)))return i}else if(i=this.validateAll(r,a,[],["dependencies",n],t))return i}return null},d.prototype.validateCombinations=function(r,e,t){return this.validateAllOf(r,e,t)||this.validateAnyOf(r,e,t)||this.validateOneOf(r,e,t)||this.validateNot(r,e,t)||null},d.prototype.validateAllOf=function(r,e,t){if(void 0===e.allOf)return null;for(var i,n=0;n<e.allOf.length;n++){var a=e.allOf[n];if(i=this.validateAll(r,a,[],["allOf",n],t))return i}return null},d.prototype.validateAnyOf=function(r,e,t){if(void 0===e.anyOf)return null;var i,n,a=[],o=this.errors.length;this.trackUnknownProperties&&(i=this.unknownPropertyPaths,n=this.knownPropertyPaths);for(var s=!0,l=0;l<e.anyOf.length;l++){this.trackUnknownProperties&&(this.unknownPropertyPaths={},this.knownPropertyPaths={});var h=e.anyOf[l],u=this.errors.length,f=this.validateAll(r,h,[],["anyOf",l],t);if(null===f&&u===this.errors.length){if(this.errors=this.errors.slice(0,o),this.trackUnknownProperties){for(var p in this.knownPropertyPaths)n[p]=!0,delete i[p];for(var c in this.unknownPropertyPaths)n[c]||(i[c]=!0);s=!1;continue}return null}f&&a.push(f.prefixWith(null,""+l).prefixWith(null,"anyOf"))}return this.trackUnknownProperties&&(this.unknownPropertyPaths=i,this.knownPropertyPaths=n),s?(a=a.concat(this.errors.slice(o)),this.errors=this.errors.slice(0,o),this.createError(y.ANY_OF_MISSING,{},"","/anyOf",a,r,e)):void 0},d.prototype.validateOneOf=function(r,e,t){if(void 0===e.oneOf)return null;var i,n,a=null,o=[],s=this.errors.length;this.trackUnknownProperties&&(i=this.unknownPropertyPaths,n=this.knownPropertyPaths);for(var l=0;l<e.oneOf.length;l++){this.trackUnknownProperties&&(this.unknownPropertyPaths={},this.knownPropertyPaths={});var h=e.oneOf[l],u=this.errors.length,f=this.validateAll(r,h,[],["oneOf",l],t);if(null===f&&u===this.errors.length){if(null!==a)return this.errors=this.errors.slice(0,s),this.createError(y.ONE_OF_MULTIPLE,{index1:a,index2:l},"","/oneOf",null,r,e);if(a=l,this.trackUnknownProperties){for(var p in this.knownPropertyPaths)n[p]=!0,delete i[p];for(var c in this.unknownPropertyPaths)n[c]||(i[c]=!0)}}else f&&o.push(f)}return this.trackUnknownProperties&&(this.unknownPropertyPaths=i,this.knownPropertyPaths=n),null===a?(o=o.concat(this.errors.slice(s)),this.errors=this.errors.slice(0,s),this.createError(y.ONE_OF_MISSING,{},"","/oneOf",o,r,e)):(this.errors=this.errors.slice(0,s),null)},d.prototype.validateNot=function(r,e,t){if(void 0===e.not)return null;var i,n,a=this.errors.length;this.trackUnknownProperties&&(i=this.unknownPropertyPaths,n=this.knownPropertyPaths,this.unknownPropertyPaths={},this.knownPropertyPaths={});var o=this.validateAll(r,e.not,null,null,t),s=this.errors.slice(a);return this.errors=this.errors.slice(0,a),this.trackUnknownProperties&&(this.unknownPropertyPaths=i,this.knownPropertyPaths=n),null===o&&0===s.length?this.createError(y.NOT_PASSED,{},"","/not",null,r,e):null},d.prototype.validateHypermedia=function(r,e,i){if(!e.links)return null;for(var n,a=0;a<e.links.length;a++){var o=e.links[a];if("describedby"===o.rel){for(var s=new t(o.href),l=!0,h=0;h<s.varNames.length;h++)if(!(s.varNames[h]in r)){l=!1;break}if(l){var u=s.fillFromObject(r),f={$ref:u};if(n=this.validateAll(r,f,[],["links",a],i))return n}}}};var y={INVALID_TYPE:0,ENUM_MISMATCH:1,ANY_OF_MISSING:10,ONE_OF_MISSING:11,ONE_OF_MULTIPLE:12,NOT_PASSED:13,NUMBER_MULTIPLE_OF:100,NUMBER_MINIMUM:101,NUMBER_MINIMUM_EXCLUSIVE:102,NUMBER_MAXIMUM:103,NUMBER_MAXIMUM_EXCLUSIVE:104,NUMBER_NOT_A_NUMBER:105,STRING_LENGTH_SHORT:200,STRING_LENGTH_LONG:201,STRING_PATTERN:202,OBJECT_PROPERTIES_MINIMUM:300,OBJECT_PROPERTIES_MAXIMUM:301,OBJECT_REQUIRED:302,OBJECT_ADDITIONAL_PROPERTIES:303,OBJECT_DEPENDENCY_KEY:304,ARRAY_LENGTH_SHORT:400,ARRAY_LENGTH_LONG:401,ARRAY_UNIQUE:402,ARRAY_ADDITIONAL_ITEMS:403,FORMAT_CUSTOM:500,KEYWORD_CUSTOM:501,CIRCULAR_REFERENCE:600,UNKNOWN_PROPERTY:1e3},E={};for(var g in y)E[y[g]]=g;var O={INVALID_TYPE:"Invalid type: {type} (expected {expected})",ENUM_MISMATCH:"No enum match for: {value}",ANY_OF_MISSING:'Data does not match any schemas from "anyOf"',ONE_OF_MISSING:'Data does not match any schemas from "oneOf"',ONE_OF_MULTIPLE:'Data is valid against more than one schema from "oneOf": indices {index1} and {index2}',NOT_PASSED:'Data matches schema from "not"',NUMBER_MULTIPLE_OF:"Value {value} is not a multiple of {multipleOf}",NUMBER_MINIMUM:"Value {value} is less than minimum {minimum}",NUMBER_MINIMUM_EXCLUSIVE:"Value {value} is equal to exclusive minimum {minimum}",NUMBER_MAXIMUM:"Value {value} is greater than maximum {maximum}",NUMBER_MAXIMUM_EXCLUSIVE:"Value {value} is equal to exclusive maximum {maximum}",NUMBER_NOT_A_NUMBER:"Value {value} is not a valid number",STRING_LENGTH_SHORT:"String is too short ({length} chars), minimum {minimum}",STRING_LENGTH_LONG:"String is too long ({length} chars), maximum {maximum}",STRING_PATTERN:"String does not match pattern: {pattern}",OBJECT_PROPERTIES_MINIMUM:"Too few properties defined ({propertyCount}), minimum {minimum}",OBJECT_PROPERTIES_MAXIMUM:"Too many properties defined ({propertyCount}), maximum {maximum}",OBJECT_REQUIRED:"Missing required property: {key}",OBJECT_ADDITIONAL_PROPERTIES:"Additional properties not allowed",OBJECT_DEPENDENCY_KEY:"Dependency failed - key must exist: {missing} (due to key: {key})",ARRAY_LENGTH_SHORT:"Array is too short ({length}), minimum {minimum}",ARRAY_LENGTH_LONG:"Array is too long ({length}), maximum {maximum}",ARRAY_UNIQUE:"Array items are not unique (indices {match1} and {match2})",ARRAY_ADDITIONAL_ITEMS:"Additional items not allowed",FORMAT_CUSTOM:"Format validation failed ({message})",KEYWORD_CUSTOM:"Keyword failed: {key} ({message})",CIRCULAR_REFERENCE:"Circular $refs: {urls}",UNKNOWN_PROPERTY:"Unknown property (not in schema)"};h.prototype=Object.create(Error.prototype),h.prototype.constructor=h,h.prototype.name="ValidationError",h.prototype.prefixWith=function(r,e){if(null!==r&&(r=r.replace(/~/g,"~0").replace(/\//g,"~1"),this.dataPath="/"+r+this.dataPath),null!==e&&(e=e.replace(/~/g,"~0").replace(/\//g,"~1"),this.schemaPath="/"+e+this.schemaPath),null!==this.subErrors)for(var t=0;t<this.subErrors.length;t++)this.subErrors[t].prefixWith(r,e);return this};var P={},_=f();return _.addLanguage("en-gb",O),_.tv4=_,_});