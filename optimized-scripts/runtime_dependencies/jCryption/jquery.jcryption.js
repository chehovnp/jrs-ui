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

function setMaxDigits(i){maxDigits=i,ZERO_ARRAY=new Array(maxDigits);for(var t=0;t<ZERO_ARRAY.length;t++)ZERO_ARRAY[t]=0;bigZero=new BigInt,bigOne=new BigInt,bigOne.digits[0]=1}function BigInt(i){this.digits="boolean"==typeof i&&1==i?null:ZERO_ARRAY.slice(0),this.isNeg=!1}function biFromDecimal(i){for(var t,e="-"==i.charAt(0),r=e?1:0;r<i.length&&"0"==i.charAt(r);)++r;if(r==i.length)t=new BigInt;else{var n=i.length-r,s=n%dpl10;for(0==s&&(s=dpl10),t=biFromNumber(Number(i.substr(r,s))),r+=s;r<i.length;)t=biAdd(biMultiply(t,biFromNumber(1e15)),biFromNumber(Number(i.substr(r,dpl10)))),r+=dpl10;t.isNeg=e}return t}function biCopy(i){var t=new BigInt(!0);return t.digits=i.digits.slice(0),t.isNeg=i.isNeg,t}function biFromNumber(i){var t=new BigInt;t.isNeg=i<0,i=Math.abs(i);for(var e=0;i>0;)t.digits[e++]=i&maxDigitVal,i>>=biRadixBits;return t}function reverseStr(i){for(var t="",e=i.length-1;e>-1;--e)t+=i.charAt(e);return t}function biToString(i,t){var e=new BigInt;e.digits[0]=t;for(var r=biDivideModulo(i,e),n=hexatrigesimalToChar[r[1].digits[0]];1==biCompare(r[0],bigZero);)r=biDivideModulo(r[0],e),digit=r[1].digits[0],n+=hexatrigesimalToChar[r[1].digits[0]];return(i.isNeg?"-":"")+reverseStr(n)}function biToDecimal(i){var t=new BigInt;t.digits[0]=10;for(var e=biDivideModulo(i,t),r=String(e[1].digits[0]);1==biCompare(e[0],bigZero);)e=biDivideModulo(e[0],t),r+=String(e[1].digits[0]);return(i.isNeg?"-":"")+reverseStr(r)}function digitToHex(t){var e="";for(i=0;i<4;++i)e+=hexToChar[15&t],t>>>=4;return reverseStr(e)}function biToHex(i){for(var t="",e=(biHighIndex(i),biHighIndex(i));e>-1;--e)t+=digitToHex(i.digits[e]);return t}function charToHex(i){return i>=48&&i<=57?i-48:i>=65&&i<=90?10+i-65:i>=97&&i<=122?10+i-97:0}function hexToDigit(i){for(var t=0,e=Math.min(i.length,4),r=0;r<e;++r)t<<=4,t|=charToHex(i.charCodeAt(r));return t}function biFromHex(i){for(var t=new BigInt,e=i.length,r=e,n=0;r>0;r-=4,++n)t.digits[n]=hexToDigit(i.substr(Math.max(r-4,0),Math.min(r,4)));return t}function biFromString(i,t){var e="-"==i.charAt(0),r=e?1:0,n=new BigInt,s=new BigInt;s.digits[0]=1;for(var g=i.length-1;g>=r;g--){n=biAdd(n,biMultiplyDigit(s,charToHex(i.charCodeAt(g)))),s=biMultiplyDigit(s,t)}return n.isNeg=e,n}function biDump(i){return(i.isNeg?"-":"")+i.digits.join(" ")}function biAdd(i,t){var e;if(i.isNeg!=t.isNeg)t.isNeg=!t.isNeg,e=biSubtract(i,t),t.isNeg=!t.isNeg;else{e=new BigInt;for(var r,n=0,s=0;s<i.digits.length;++s)r=i.digits[s]+t.digits[s]+n,e.digits[s]=65535&r,n=Number(r>=biRadix);e.isNeg=i.isNeg}return e}function biSubtract(i,t){var e;if(i.isNeg!=t.isNeg)t.isNeg=!t.isNeg,e=biAdd(i,t),t.isNeg=!t.isNeg;else{e=new BigInt;var r,n;n=0;for(var s=0;s<i.digits.length;++s)r=i.digits[s]-t.digits[s]+n,e.digits[s]=65535&r,e.digits[s]<0&&(e.digits[s]+=biRadix),n=0-Number(r<0);if(-1==n){n=0;for(var s=0;s<i.digits.length;++s)r=0-e.digits[s]+n,e.digits[s]=65535&r,e.digits[s]<0&&(e.digits[s]+=biRadix),n=0-Number(r<0);e.isNeg=!i.isNeg}else e.isNeg=i.isNeg}return e}function biHighIndex(i){for(var t=i.digits.length-1;t>0&&0==i.digits[t];)--t;return t}function biNumBits(i){var t,e=biHighIndex(i),r=i.digits[e],n=(e+1)*bitsPerDigit;for(t=n;t>n-bitsPerDigit&&0==(32768&r);--t)r<<=1;return t}function biMultiply(i,t){for(var e,r,n,s=new BigInt,g=biHighIndex(i),o=biHighIndex(t),d=0;d<=o;++d){for(e=0,n=d,j=0;j<=g;++j,++n)r=s.digits[n]+i.digits[j]*t.digits[d]+e,s.digits[n]=r&maxDigitVal,e=r>>>biRadixBits;s.digits[d+g+1]=e}return s.isNeg=i.isNeg!=t.isNeg,s}function biMultiplyDigit(i,t){var e,r,n,s=new BigInt;e=biHighIndex(i),r=0;for(var g=0;g<=e;++g)n=s.digits[g]+i.digits[g]*t+r,s.digits[g]=n&maxDigitVal,r=n>>>biRadixBits;return s.digits[1+e]=r,s}function arrayCopy(i,t,e,r,n){for(var s=Math.min(t+n,i.length),g=t,o=r;g<s;++g,++o)e[o]=i[g]}function biShiftLeft(i,t){var e=Math.floor(t/bitsPerDigit),r=new BigInt;arrayCopy(i.digits,0,r.digits,e,r.digits.length-e);for(var n=t%bitsPerDigit,s=bitsPerDigit-n,g=r.digits.length-1,o=g-1;g>0;--g,--o)r.digits[g]=r.digits[g]<<n&maxDigitVal|(r.digits[o]&highBitMasks[n])>>>s;return r.digits[0]=r.digits[g]<<n&maxDigitVal,r.isNeg=i.isNeg,r}function biShiftRight(i,t){var e=Math.floor(t/bitsPerDigit),r=new BigInt;arrayCopy(i.digits,e,r.digits,0,i.digits.length-e);for(var n=t%bitsPerDigit,s=bitsPerDigit-n,g=0,o=g+1;g<r.digits.length-1;++g,++o)r.digits[g]=r.digits[g]>>>n|(r.digits[o]&lowBitMasks[n])<<s;return r.digits[r.digits.length-1]>>>=n,r.isNeg=i.isNeg,r}function biMultiplyByRadixPower(i,t){var e=new BigInt;return arrayCopy(i.digits,0,e.digits,t,e.digits.length-t),e}function biDivideByRadixPower(i,t){var e=new BigInt;return arrayCopy(i.digits,t,e.digits,0,e.digits.length-t),e}function biModuloByRadixPower(i,t){var e=new BigInt;return arrayCopy(i.digits,0,e.digits,0,t),e}function biCompare(i,t){if(i.isNeg!=t.isNeg)return 1-2*Number(i.isNeg);for(var e=i.digits.length-1;e>=0;--e)if(i.digits[e]!=t.digits[e])return i.isNeg?1-2*Number(i.digits[e]>t.digits[e]):1-2*Number(i.digits[e]<t.digits[e]);return 0}function biDivideModulo(i,t){var e,r,n=biNumBits(i),s=biNumBits(t),g=t.isNeg;if(n<s)return i.isNeg?(e=biCopy(bigOne),e.isNeg=!t.isNeg,i.isNeg=!1,t.isNeg=!1,r=biSubtract(t,i),i.isNeg=!0,t.isNeg=g):(e=new BigInt,r=biCopy(i)),new Array(e,r);e=new BigInt,r=i;for(var o=Math.ceil(s/bitsPerDigit)-1,d=0;t.digits[o]<biHalfRadix;)t=biShiftLeft(t,1),++d,++s,o=Math.ceil(s/bitsPerDigit)-1;r=biShiftLeft(r,d),n+=d;for(var a=Math.ceil(n/bitsPerDigit)-1,u=biMultiplyByRadixPower(t,a-o);-1!=biCompare(r,u);)++e.digits[a-o],r=biSubtract(r,u);for(var b=a;b>o;--b){var l=b>=r.digits.length?0:r.digits[b],h=b-1>=r.digits.length?0:r.digits[b-1],f=b-2>=r.digits.length?0:r.digits[b-2],c=o>=t.digits.length?0:t.digits[o],p=o-1>=t.digits.length?0:t.digits[o-1];e.digits[b-o-1]=l==c?maxDigitVal:Math.floor((l*biRadix+h)/c);for(var m=e.digits[b-o-1]*(c*biRadix+p),v=l*biRadixSquared+(h*biRadix+f);m>v;)--e.digits[b-o-1],m=e.digits[b-o-1]*(c*biRadix|p),v=l*biRadix*biRadix+(h*biRadix+f);u=biMultiplyByRadixPower(t,b-o-1),r=biSubtract(r,biMultiplyDigit(u,e.digits[b-o-1])),r.isNeg&&(r=biAdd(r,u),--e.digits[b-o-1])}return r=biShiftRight(r,d),e.isNeg=i.isNeg!=g,i.isNeg&&(e=g?biAdd(e,bigOne):biSubtract(e,bigOne),t=biShiftRight(t,d),r=biSubtract(t,r)),0==r.digits[0]&&0==biHighIndex(r)&&(r.isNeg=!1),new Array(e,r)}function biDivide(i,t){return biDivideModulo(i,t)[0]}function biModulo(i,t){return biDivideModulo(i,t)[1]}function biMultiplyMod(i,t,e){return biModulo(biMultiply(i,t),e)}function biPow(i,t){for(var e=bigOne,r=i;;){if(0!=(1&t)&&(e=biMultiply(e,r)),0==(t>>=1))break;r=biMultiply(r,r)}return e}function biPowMod(i,t,e){for(var r=bigOne,n=i,s=t;;){if(0!=(1&s.digits[0])&&(r=biMultiplyMod(r,n,e)),s=biShiftRight(s,1),0==s.digits[0]&&0==biHighIndex(s))break;n=biMultiplyMod(n,n,e)}return r}function BarrettMu(i){this.modulus=biCopy(i),this.k=biHighIndex(this.modulus)+1;var t=new BigInt;t.digits[2*this.k]=1,this.mu=biDivide(t,this.modulus),this.bkplus1=new BigInt,this.bkplus1.digits[this.k+1]=1,this.modulo=BarrettMu_modulo,this.multiplyMod=BarrettMu_multiplyMod,this.powMod=BarrettMu_powMod}function BarrettMu_modulo(i){var t=biDivideByRadixPower(i,this.k-1),e=biMultiply(t,this.mu),r=biDivideByRadixPower(e,this.k+1),n=biModuloByRadixPower(i,this.k+1),s=biMultiply(r,this.modulus),g=biModuloByRadixPower(s,this.k+1),o=biSubtract(n,g);o.isNeg&&(o=biAdd(o,this.bkplus1));for(var d=biCompare(o,this.modulus)>=0;d;)o=biSubtract(o,this.modulus),d=biCompare(o,this.modulus)>=0;return o}function BarrettMu_multiplyMod(i,t){var e=biMultiply(i,t);return this.modulo(e)}function BarrettMu_powMod(i,t){var e=new BigInt;for(e.digits[0]=1;;){if(0!=(1&t.digits[0])&&(e=this.multiplyMod(e,i)),t=biShiftRight(t,1),0==t.digits[0]&&0==biHighIndex(t))break;i=this.multiplyMod(i,i)}return e}!function(i){i.jCryption=function(t,e){var r=this;r.$el=i(t),r.el=t,r.$el.data("jCryption",r),r.init=function(){if(r.options=i.extend({},i.jCryption.defaultOptions,e),$encryptedElement=i("<input />",{type:"hidden",name:r.options.postVariable}),!1!==r.options.submitElement)var t=r.options.submitElement;else var t=r.$el.find(":input:submit");t.bind(r.options.submitEvent,function(){return i(this).attr("disabled",!0),r.options.beforeEncryption()&&i.jCryption.getKeys(r.options.getKeysURL,function(t){i.jCryption.encrypt(r.$el.serialize(),t,function(t){$encryptedElement.val(t),i(r.$el).find(r.options.formFieldSelector).attr("disabled",!0).end().append($encryptedElement).submit()})}),!1})},r.init()},i.jCryption.getKeys=function(t,e){var r=function(i,t,e){setMaxDigits(parseInt(e,10)),this.e=biFromHex(i),this.m=biFromHex(t),this.chunkSize=2*biHighIndex(this.m),this.radix=16,this.barrett=new BarrettMu(this.m)};i.getJSON(t,function(t){var n=new r(t.e,t.n,t.maxdigits);i.isFunction(e)&&e.call(this,n)})},i.jCryption.encrypt=function(t,e,r){for(var n=0,s=0;s<t.length;s++)n+=t.charCodeAt(s);var g="0123456789abcdef",o="";o+=g.charAt((240&n)>>4)+g.charAt(15&n);for(var d=o+t,a=[],u=0;u<d.length;)a[u]=d.charCodeAt(u),u++;for(;a.length%e.chunkSize!=0;)a[u++]=0;!function(t){function n(){g=new BigInt,s=0;for(var a=o;a<o+e.chunkSize;++s)g.digits[s]=t[a++],g.digits[s]+=t[a++]<<8;var u=e.barrett.powMod(g,e.e),b=16==e.radix?biToHex(u):biToString(u,e.radix);if(d+=b+" ",(o+=e.chunkSize)<t.length)setTimeout(n,1);else{var l=d.substring(0,d.length-1);if(!i.isFunction(r))return l;r(l)}}var s,g,o=0,d="";setTimeout(n,1)}(a)},i.jCryption.defaultOptions={submitElement:!1,submitEvent:"click",getKeysURL:"main.php?generateKeypair=true",beforeEncryption:function(){return!0},postVariable:"jCryption",formFieldSelector:":input"},i.fn.jCryption=function(t){return this.each(function(){new i.jCryption(this,t)})}}(jQuery);var biRadixBase=2,biRadixBits=16,bitsPerDigit=biRadixBits,biRadix=65536,biHalfRadix=biRadix>>>1,biRadixSquared=biRadix*biRadix,maxDigitVal=biRadix-1,maxInteger=9999999999999998,maxDigits,ZERO_ARRAY,bigZero,bigOne,dpl10=15,highBitMasks=new Array(0,32768,49152,57344,61440,63488,64512,65024,65280,65408,65472,65504,65520,65528,65532,65534,65535),hexatrigesimalToChar=new Array("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"),hexToChar=new Array("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"),lowBitMasks=new Array(0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535);