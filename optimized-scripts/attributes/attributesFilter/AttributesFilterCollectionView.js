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

define(["require","exports","module","jquery","underscore","backbone","backbone.marionette","bundle!AttributesBundle","runtime_dependencies/js-sdk/src/common/view/mixin/epoxyViewMixin"],function(e,t,i){var n=e("jquery"),r=e("underscore"),o=e("backbone"),l=e("backbone.marionette"),s=e("bundle!AttributesBundle"),c=e("runtime_dependencies/js-sdk/src/common/view/mixin/epoxyViewMixin"),a=["true","false"],u=l.CompositeView.extend({className:"filtersContainer",events:{"change select":"_onCurrentFilterChange"},templateHelpers:function(){return{i18n:s}},constructor:function(e){this._initCurrentCriteria(),l.CompositeView.apply(this,arguments)},initialize:function(e){this.targetCollection=e&&e.targetCollection||[],this.epoxifyView(),this.initEvents()},initEvents:function(){this.listenTo(this.targetCollection,"add",this.addItemToFilterCollection),this.listenTo(this.targetCollection,"remove",this.removeItemFromFilterCollection),this.listenTo(this.targetCollection,"sync",this._initFilterCollection)},filter:function(e){var t=e||this.currentCriteria,i=t.defaultFilter?this.filterCollection.models:this.filterCollection.where(t);this.targetCollection.reset(i)},reset:function(){this.currentCriteria.defaultFilter||(this.$el.find("option[value='defaultFilter::true']").prop("selected",!0),this._initCurrentCriteria(),this.filter())},addItemToFilterCollection:function(e){this.filterCollection.add(e)},removeItemFromFilterCollection:function(e){this.filterCollection.remove(e)},render:function(){return l.CompositeView.prototype.render.apply(this,arguments),this.applyEpoxyBindings(),this.delegateEvents(this.events),this},remove:function(){this.removeEpoxyBindings(),l.CompositeView.prototype.remove.apply(this,arguments)},_initCurrentCriteria:function(e,t){e=e||"defaultFilter",t=!!r.isUndefined(t)||t,this.currentCriteria={},this.currentCriteria[e]=t},_initFilterCollection:function(){this.filterCollection=new o.Collection(this.targetCollection.models)},_onCurrentFilterChange:function(e){var t=n(e.target).val().split("::"),i=t[0],o=t[1];-1!==r.indexOf(a,o)&&(this._initCurrentCriteria(i,JSON.parse(o)),this.filter())}});r.extend(u.prototype,c),i.exports=u});