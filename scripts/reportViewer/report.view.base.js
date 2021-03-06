define(function(require, exports, module) {
var __disableStrictMode__ = "use strict";

var _coreCoreAjax = require('../core/core.ajax');

var ajax = _coreCoreAjax.ajax;

var layoutModule = require('../core/core.layout');

var _utilUtilsCommon = require('../util/utils.common');

var doNothing = _utilUtilsCommon.doNothing;

var dialogs = require('../components/components.dialogs');

var _ = require('underscore');

var _controlsControlsBase = require('../controls/controls.base');

var ControlsBase = _controlsControlsBase.ControlsBase;

var jQuery = require('jquery');

var _prototype = require('prototype');

var $ = _prototype.$;

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

/**
 * @version: $Id$
 */
(function (exports) {
  var dashboardViewFrame = window.dashboardViewFrame;
  var Template = window.Template;
  var Report = {
    _messages: {},
    _scroll: null,
    pageActions: {},
    viewReportForm: null,
    pageIndex: 0,
    lastPageIndex: 0,
    pageTimestamp: null,
    checkPageUpdatedTimeoutId: null,
    emptyReport: true,
    reportForceControls: false,
    hasInputControls: false,
    reportControlsLayout: null,
    refreshReportCanceled: false,
    reportParameterValues: null,
    allRequestParameters: null,
    requestedInputParameters: {},
    parametersWithoutDefaultValues: null,
    isLoaded: false,
    hasError: false,
    // ViewReport id's
    EXPORT_ACTION_FORM: "exportActionForm",
    TOOLBAR_SUBMENU: "toolbarText",
    PAGINATION_PAGE_FIRST: "page_first",
    PAGINATION_PAGE_PREV: "page_prev",
    PAGINATION_PAGE_CURRENT: "page_current",
    PAGINATION_PAGE_NEXT: "page_next",
    PAGINATION_PAGE_LAST: "page_last",
    PAGINATION_PAGE_TOTAL: "page_total",
    DATA_TIMESTAMP_SPAN: "dataTimestampMessage",
    DATA_REFRESH_BUTTON: "dataRefreshButton",
    ASYNC_CANCEL_BUTTON: "asyncCancel",
    REPORT_COMPONENT_ID: "report",
    getMessage: function getMessage(messageId, object) {
      var message = this._messages[messageId];
      return message ? new Template(message).evaluate(object ? object : {}) : "";
    },

    /**
     *  The common init function. Invoke it from page-specific initialize()
     */
    commonInit: function commonInit(options) {
      var ajaxLoading = jQuery('#' + ajax.LOADING_ID);

      if (ajaxLoading.length > 0) {
        ajaxLoading.addClass(layoutModule.CANCELLABLE_CLASS);
        ajaxLoading.find("#cancel").click(function () {
          if (!this._reportIsCanceled) {
            this._reportIsCanceled = true;
            Report.cancelReportExecution();
          }
        });
      }
      /*
          Used for embedding report viewer with no decoration in CE
       */


      if (document.location.href.indexOf("frame=0") > 0) {
        jQuery('#reportViewFrame > .content > .header').hide();
        jQuery('#reportViewFrame').css('margin', 0);
        jQuery('#innerPagination').css('margin', 'none');
        jQuery('#reportViewFrame > .content > .body').css({
          'top': 0,
          'margin-top': 0
        });
      }
    },
    navigateToReportPage: function navigateToReportPage(page, silentUpdate, isAutomaticRefresh) {
      if (window.viewer.jive) window.viewer.jive.hide();
      window.viewer.reportInstance.gotoPage(page);
    },
    goToPage: function goToPage(page) {
      if (parseInt(page, 10) && parseInt(page, 10) > 0 && (Report.lastPageIndex == null || parseInt(page, 10) <= Report.lastPageIndex + 1)) {
        Report.navigateToReportPage(parseInt(page, 10) - 1);
      } else {
        doNothing();
      }
    },

    /**
     * Returns the updated flowExecutionKey after every report refresh
     */
    reportExecutionKey: function reportExecutionKey() {
      if (Report.flowExecutionKeyOutput) {
        return Report.flowExecutionKeyOutput;
      } else if (window.dashboardViewFrame) {
        return dashboardViewFrame.flowExecutionKey;
      } else {
        return Report.flowExecutionKey;
      }
    },
    //////////////////////////////
    // Communication with server
    //////////////////////////////

    /**
     * The main API function to view or update the report on the page
     * @param {Object} urlParams - an object literal optionally defining:
     * @option {String} _flowExecutionKey (default value will be resolved by Report.reportExecutionKey())
     * @option {String} _eventId (default is "refreshReport")
     * @param {Object} options - an object literal optionally defining:
     * @option {String} fillLocation - id indicating where in the DOM to dump the updated report (default is "reportContainer")
     * @option {Array} callback - JS functions to evaluate after report update (default is Report.reportRefreshed())
     * @option {String} fromLocation - id indicating which part of the ajax response to use (default is "reportOutput" implemented in DefaultJasperViewer)
     */
    refreshReport: function refreshReport(urlParams, options, reportParameters) {
      var result = /(\?|&)output=([^&]*)/.exec(location.href);
      var output = result && result.length === 3 ? result[2] : '';
      dialogs.popup.showShared($(ajax.LOADING_ID), true, {
        owner: this.REPORT_COMPONENT_ID
      });
      urlParams = urlParams || {};
      urlParams._flowExecutionKey = urlParams._flowExecutionKey ? urlParams._flowExecutionKey : Report.reportExecutionKey();
      urlParams._eventId = urlParams._eventId ? urlParams._eventId : "refreshReport";
      urlParams.decorate = "no";
      urlParams.confirm = "true";
      urlParams.decorator = "empty";

      if (!urlParams.ajax) {
        urlParams.ajax = "true";
      }

      var url = 'flow.html?' + Object.toQueryString(urlParams); //(reportParameters) ? reportParameters : reportParameters = this.getParametersFromRequest();

      Report.requestedInputParameters = reportParameters ? reportParameters : this.getParametersFromRequest();

      if (urlParams.freshData) {
        Report.requestedInputParameters += '&freshData=true';
      }

      if (output === '' || output === 'html') {
        /*
            TODO: remove after Emerald2 release
         */

        /*
        options = options || {};
        ajaxTargettedUpdate(url, {
            postData: reportParameters,
            fillLocation: options.fillLocation ? options.fillLocation : "reportContainer",
            fromLocation: options.fromLocation ? options.fromLocation : "reportOutput",
            callback: options.callback ? options.callback : "Report.reportRefreshed();",
            errorHandler: options.errorHandler ? options.errorHandler : Report.refreshReportErrorHandler,
            isAutomaticRefresh: options.isAutomaticRefresh
        });
        */
        if (Report.isLoaded) {
          window.viewer.reportInstance.eventManager.triggerEvent("beforeAction", {
            name: "beforeAction",
            type: "reportRefresh"
          });
          return window.viewer.reportInstance.refreshPage(0);
        } else {
          return window.viewer.loadReport().always(function () {
            Report.isLoaded = true;
          });
        }
      } else {
        return Report.exportReport(output, url);
      }
    },

    /**
     *  Cancels the report execution on the server
     */
    cancelReportExecution: function cancelReportExecution() {
      document.body.style.cursor = "default";
      dialogs.popup.hideShared($(ajax.LOADING_ID), this.REPORT_COMPONENT_ID);

      if (window.viewer.reportInstance) {
        window.viewer.reportInstance.cancelExecution().then(function () {
          // If report was never loaded before - back to repository
          if (!Report.isLoaded) {
            this._reportIsCanceled = false;
            Report.goBack();
          }
        }, function () {//nothing to do on exception,
          //popup dialog with exception still should appears
        });
      } else {
        //there is no report instance to cancel
        //the only thing we could do is to return back to repo
        this._reportIsCanceled = false;
        Report.goBack();
      }
      /*
          TODO: remove after Emerald 2 release.
       */
      //var url = "viewReportCancel.html?_flowExecutionKey=" + Report.reportExecutionKey();
      //ajaxNonReturningUpdate(url, {});

    },

    /**
     * Get report parameters from request in case if JRS.Controls is not available.
     */
    getParametersFromRequest: function getParametersFromRequest() {
      return ControlsBase.buildParams(Report.getAllRequestParameters());
    },

    /**
     * All request parameters get formed into JSONObject on server side,
     * where key is a string and value is always array of strings even if there is single value.
     */
    getAllRequestParameters: function getAllRequestParameters() {
      return _.isObject(Report.allRequestParameters) ? Report.allRequestParameters : {};
    },

    /*
        Used as test in actionModel
     */
    canSaveReport: function canSaveReport() {
      return !Report.isReportReadOnly;
    },
    confirmExit: function confirmExit() {
      // empty in CE because there's no save; overridden in Pro
      return true;
    },
    confirmAndLeave: function confirmAndLeave() {
      return Report.confirmExit() ? Report.closeViewerOnExit : false;
    },
    closeViewerOnExit: function closeViewerOnExit(exitCallback) {
      window.viewer.exit().then(function () {
        exitCallback();
      });
    },

    /*
        Convenience method to show dialog, called from jasperreports-loader
     */
    showAjaxDialog: function showAjaxDialog() {
      dialogs.popup.showShared($(ajax.LOADING_ID), true, {
        owner: this.REPORT_COMPONENT_ID
      });
    },
    hideAjaxDialog: function hideAjaxDialog() {
      dialogs.popup.hideShared($(ajax.LOADING_ID), this.REPORT_COMPONENT_ID);
    }
  };
  exports["Report"] = Report;
})(window);

module.exports = window.Report;

});