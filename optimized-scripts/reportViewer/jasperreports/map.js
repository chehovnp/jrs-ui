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

define(["require","exports","module"],function(o,n,i){var e=function(o){this.config=o,this.parent=null,this.loader=null,this.infowindow={},this._init()};e.prototype={_init:function(){var n=this,i=n.config.instanceData,e=i.requestParams||"";"undefined"==typeof google||"undefined"!=typeof google&&void 0===google.maps?o(["async!//maps.google.com/maps/api/js?"+e+"!callback"],function(){n._showMap(n.config.id,i.latitude,i.longitude,i.zoom,i.mapType,i.markerList,i.pathsList)}):n._showMap(n.config.id,i.latitude,i.longitude,i.zoom,i.mapType,i.markerList,i.pathsList)},_configureImage:function(o,n,i){var e,t,a,l,r,s;e=n[o+".width"]?parseInt(n[o+".width"]):null,t=n[o+".height"]?parseInt(n[o+".height"]):null,a=n[o+".origin.x"]?parseInt(n[o+".origin.x"]):0,l=n[o+".origin.y"]?parseInt(n[o+".origin.y"]):0,r=n[o+".anchor.x"]?parseInt(n[o+".anchor.x"]):0,s=n[o+".anchor.y"]?parseInt(n[o+".anchor.y"]):0,i[o]={url:n[o+".url"],size:e&&t?new google.maps.Size(e,t):null,origin:new google.maps.Point(a,l),anchor:new google.maps.Point(r,s)}},_createInfo:function(o){if(o["infowindow.content"]&&o["infowindow.content"].length>0){var n=google.maps,i={content:o["infowindow.content"]};return o["infowindow.pixelOffset"]&&(i.pixelOffset=o["infowindow.pixelOffset"]),o["infowindow.latitude"]&&o["infowindow.longitude"]&&(i.position=new n.LatLng(o["infowindow.latitude"],o["infowindow.longitude"])),o["infowindow.maxWidth"]&&(i.maxWidth=o["infowindow.maxWidth"]),new n.InfoWindow(i)}return null},_showMap:function(o,n,i,e,t,a,l){var r=this,s=google.maps,g={zoom:e,center:new s.LatLng(n,i),mapTypeId:s.MapTypeId[t],autocloseinfo:!0},d=new s.Map(document.getElementById(o),g);if(a)for(var h,p=0;p<a.length;p++){var c=a[p],f=new s.LatLng(c.latitude,c.longitude),w={position:f,map:d};c["icon.url"]&&c["icon.url"].length>0?r._configureImage("icon",c,w):c.icon&&c.icon.length>0?w.icon=c.icon:c.color&&c.color.length>0&&(w.icon="https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%7C"+c.color),c["shadow.url"]&&c["shadow.url"].length>0?r._configureImage("shadow",c,w):c.shadow&&c.shadow.length>0&&(w.shadow=c.shadow);for(h in c)h.indexOf(".")<0&&c.hasOwnProperty(h)&&!w.hasOwnProperty(h)&&(w[h]=c[h]);var u=new google.maps.Marker(w);u.info=r._createInfo(c),s.event.addListener(u,"click",function(){d.autocloseinfo&&r.infowindow&&r.infowindow.close&&r.infowindow.close(),this.info?(r.infowindow=this.info,this.info.open(d,this)):this.url&&this.url.length>0&&window.open(this.url,this.target)})}if(l)for(var m=0;m<l.length;m++){var y,v=l[m],_={},I=[],L=!1;for(var x in v)if("locations"===x&&v[x])for(var k=v[x],h=0;h<k.length;h++){var P=k[h];I.push(new google.maps.LatLng(P.latitude,P.longitude))}else"isPolygon"===x?L=r._getBooleanValue(v[x]):_[x]="visible"===x||"editable"===x||"clickable"===x||"draggable"===x||"geodesic"===x?r._getBooleanValue(v[x]):v[x];_.map=d,L?(_.paths=I,y=new google.maps.Polygon(_)):(_.path=I,y=new google.maps.Polyline(_)),_["path.hyperlink"]&&s.event.addListener(y,"click",function(){window.open(_["path.hyperlink"],_["path.hyperlink.target"])})}},_getBooleanValue:function(o){return!0===o||"true"===o}},i.exports=e});