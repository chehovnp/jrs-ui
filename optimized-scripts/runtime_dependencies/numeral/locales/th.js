!function(e,n){"function"==typeof define&&define.amd?define(["../numeral"],n):n("object"==typeof module&&module.exports?require("../numeral"):e.numeral)}(this,function(e){e.register("locale","th",{delimiters:{thousands:",",decimal:"."},abbreviations:{thousand:"พัน",million:"ล้าน",billion:"พันล้าน",trillion:"ล้านล้าน"},ordinal:function(e){return"."},currency:{symbol:"฿"}})});