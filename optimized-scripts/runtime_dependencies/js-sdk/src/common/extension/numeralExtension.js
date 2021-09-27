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

define(["require","exports","module","underscore","numeral/numeral","../../jrs.configs","bundle!jasperserver_config","numeral/locales"],function(e,l,r){var a=(e("underscore"),e("numeral/numeral")),c=e("../../jrs.configs"),s=e("bundle!jasperserver_config");e("numeral/locales");var n=c.userLocale,o=n.toLowerCase().replace("_","-");try{a.locale(o),a.localeData(o)}catch(e){o="en",a.locale(o)}a.localeData(o).currency.symbol=s["client.currency.symbol"],a.localeData(o).delimiters.thousands=s["client.delimiters.thousands"],a.localeData(o).delimiters.decimal=s["client.delimiters.decimal"],r.exports=a});