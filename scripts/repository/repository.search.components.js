define(function(require, exports, module) {
var __disableStrictMode__ = "use strict";

var _dragdropextra = require('dragdropextra');

var Droppables = _dragdropextra.Droppables;
var Draggables = _dragdropextra.Draggables;

var _prototype = require('prototype');

var $ = _prototype.$;
var $break = _prototype.$break;

var accessibilityModule = require('../core/core.accessibility');

var buttonManager = require('../core/core.events.bis');

var orgModule = require('../manage/mng.common');

var _componentsListBase = require('../components/list.base');

var dynamicList = _componentsListBase.dynamicList;
var baseList = _componentsListBase.baseList;

var _repositorySearchMain = require("./repository.search.main");

var repositorySearch = _repositorySearchMain.repositorySearch;
var Folder = _repositorySearchMain.Folder;
var canFolderBeCopied = _repositorySearchMain.canFolderBeCopied;
var invokeFolderAction = _repositorySearchMain.invokeFolderAction;
var canFolderBeMoved = _repositorySearchMain.canFolderBeMoved;
var canFolderBeCopiedOrMovedToFolder = _repositorySearchMain.canFolderBeCopiedOrMovedToFolder;
var canAllBeCopiedOrMovedToFolder = _repositorySearchMain.canAllBeCopiedOrMovedToFolder;
var invokeBulkAction = _repositorySearchMain.invokeBulkAction;
var invokeRedirectAction = _repositorySearchMain.invokeRedirectAction;
var ResourcesUtils = _repositorySearchMain.ResourcesUtils;

var SearchBox = require('../components/components.searchBox');

var dialogs = require('../components/components.dialogs');

var toolbarButtonModule = require('../components/components.toolbarButtons.events');

var _utilUtilsCommon = require("../util/utils.common");

var isMetaHeld = _utilUtilsCommon.isMetaHeld;
var getBoxOffsets = _utilUtilsCommon.getBoxOffsets;
var toFunction = _utilUtilsCommon.toFunction;
var getAsFunction = _utilUtilsCommon.getAsFunction;
var isArray = _utilUtilsCommon.isArray;
var disableSelectionWithoutCursorStyle = _utilUtilsCommon.disableSelectionWithoutCursorStyle;
var isIPad = _utilUtilsCommon.isIPad;
var isSupportsTouch = _utilUtilsCommon.isSupportsTouch;
var matchAny = _utilUtilsCommon.matchAny;
var centerElement = _utilUtilsCommon.centerElement;
var ValidationModule = _utilUtilsCommon.ValidationModule;
var fileSender = _utilUtilsCommon.fileSender;

var dynamicTree = require('../dynamicTree/dynamicTree.utils');

var actionModel = require('../actionModel/actionModel.modelGenerator');

var layoutModule = require('../core/core.layout');

var TouchController = require('../util/touch.controller');

var InfiniteScroll = require('../util/tools.infiniteScroll');

var ConfirmationDialog = require("runtime_dependencies/js-sdk/src/common/component/dialog/ConfirmationDialog");

var _componentsComponentsTooltip = require('../components/components.tooltip');

var JSTooltip = _componentsComponentsTooltip.JSTooltip;
var tooltipModule = _componentsComponentsTooltip.tooltipModule;

var ExportDialogView = require('../tenantImportExport/export/view/ExportDialogView');

var exportTypesEnum = require('../tenantImportExport/export/enum/exportTypesEnum');

var xssUtil = require("runtime_dependencies/js-sdk/src/common/util/xssUtil");

var _ = require('underscore');

var jQuery = require('jquery');

var __jrsConfigs__ = require("runtime_dependencies/js-sdk/src/jrs.configs");

require("runtime_dependencies/js-sdk/src/common/extension/customEventExtension");

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

/* global alert, confirm*/
// Get functions from the global scope in order to fix JRS-20092
// in fact they are declared in repository.search.main for CE or in
// jrs-ui-pro/src/repository/repository.search.js for PRO
// Functions from PRO override same functions from CE
var canBeRun = window.canBeRun;
var canBeOpened = window.canBeOpened;
var canBeScheduled = window.canBeScheduled; ///////////////////////////////
// Export dialog
///////////////////////////////

repositorySearch.exportDialog = new ExportDialogView();
repositorySearch.exportDialog.render({
  type: exportTypesEnum.REPOSITORY
}); ///////////////////////////////
// Secondary search box object
///////////////////////////////

repositorySearch.secondarySearchBox = {
  _searchBox: null,
  initialize: function initialize(text) {
    this._searchBox = new SearchBox({
      id: 'secondarySearchBox'
    });

    this._searchBox.onSearch = function (text) {
      repositorySearch.fire(repositorySearch.Event.SEARCH_SEARCH, {
        text: text
      });
    };

    this.setText(text);
  },
  setText: function setText(text) {
    this._searchBox.setText(text);
  }
}; ///////////////////////////////
// Toolbar object
///////////////////////////////
///////////////////////////////
// Toolbar object
///////////////////////////////

repositorySearch.toolbar = {
  _bulkActions: {},
  initialize: function initialize(bulkActions) {
    this._bulkActions = bulkActions;
    toolbarButtonModule.initialize(this._toActionMap(this._bulkActions));
    this.refresh();
  },
  refresh: function refresh() {
    for (var name in this._bulkActions) {
      var id = this._bulkActions[name].buttonId;
      var testFn = toFunction(this._bulkActions[name].test);
      toolbarButtonModule.setButtonState($(id), testFn());
    }
  },
  _toActionMap: function _toActionMap(bulkActionModel) {
    var actionMap = {};

    for (var name in bulkActionModel) {
      var bulkAction = bulkActionModel[name];
      var id = bulkAction.buttonId;

      actionMap[id] = function (action, actionArgs) {
        return function () {
          var myAction = getAsFunction(action);
          var args = actionArgs;
          var belongsToLocalContext = window.localContext && window.localContext[action];

          if (args && isArray(args)) {
            myAction.apply(belongsToLocalContext ? window.localContext : null, args);
          } else {
            myAction.call(belongsToLocalContext ? window.localContext : null, args);
          }
        };
      }(bulkAction.action, bulkAction.actionArgs);
    }

    return actionMap;
  }
}; ///////////////////////////////
// Folder panel object
///////////////////////////////
///////////////////////////////
// Folder panel object
///////////////////////////////

repositorySearch.foldersPanel = {
  _treeId: 'foldersTree',
  _uri: '/',
  _cookieName: 'lastFolderUri',
  _canDoBrowse: true,
  _touchController: null,
  initialize: function initialize(options) {
    if (options.isFolderSet) {
      this._uri = options.state.folderUri;
    } else {
      var storedUri = window.localStorage ? localStorage.getItem(this._cookieName) : undefined;
      this._uri = storedUri && storedUri.length > 0 ? storedUri : '/';
    }

    this._container = $(this.getTreeId()).up(1);
    this.tree = new dynamicTree.createRepositoryTree(this.getTreeId(), {
      providerId: 'repositoryExplorerTreeFoldersProvider',
      rootUri: repositorySearch.model.getRootFolderUri(),
      organizationId: options.organizationId,
      publicFolderUri: options.publicFolderUri,
      urlGetNode: 'flow.html?_flowId=searchFlow&method=getNode',
      urlGetChildren: 'flow.html?_flowId=searchFlow&method=getChildren',
      dragPattern: '.draggable',
      selectOnMousedown: false,
      escapeHyperlinks: true
    });
    disableSelectionWithoutCursorStyle($(this.getTreeId()).up(1));
    this.tree.observe('key:contextMenu', function (event) {
      var node = event.memo.node;
      var nodePosition = getBoxOffsets(node, true);
      repositorySearch.actionModel.showFolderMenu(event, {
        menuLeft: nodePosition[0] + 100,
        //TODO: use constants for offsets
        menuTop: nodePosition[1] + 20 //TODO: use constants for offsets

      });
      Event.stop(event);
    });
    this.tree.observe('key:escape', function (event) {
      actionModel.hideMenu();
      Event.stop(event);
    });
    this.tree.observe('tree:mouseover', function (event) {
      this.tree._overNode = event.memo.node;
    }.bindAsEventListener(this));
    this.tree.observe('tree:mouseout', function (event) {
      this.tree.refreshDropTarget(false);
      this.tree._overNode == event.memo.node && (this.tree._overNode = null);
    }.bindAsEventListener(this));

    this.tree.setDragStartState = function (node, draggable, event) {
      dynamicTree.Tree.prototype.setDragStartState.call(this, node, draggable, event);
      var folder = new Folder(node);

      if (isMetaHeld(event, true)) {
        canFolderBeCopied(folder) && invokeFolderAction('CopyFolder', folder);
        $(document.body).addClassName(layoutModule.COPY_CLASS);
      } else {
        canFolderBeMoved(folder) && invokeFolderAction('MoveFolder', folder);
      }
    };

    this.tree.setDragEndState = function (node, draggable, event) {
      repositorySearch.CopyMoveController.cancel();
      this.refreshDropTarget(false);
      $(document.body).removeClassName(layoutModule.COPY_CLASS);
      dynamicTree.Tree.prototype.setDragEndState.call(this, node, draggable, event);
    };

    this.tree.refreshDropTarget = function (allowed) {
      if (this._overNode) {
        this._overNode.isDropTarget = allowed;

        this._overNode.refreshStyle();
      }
    };

    Droppables.remove(this.getTreeId());
    Droppables.add(this.getTreeId(), {
      accept: ['dragging', 'wrap'],
      onHover: function (dragged, dropped, event) {
        if (this.tree._overNode) {
          var toFolder = new Folder(this.tree._overNode);
          var hover = dragged.node && canFolderBeCopiedOrMovedToFolder(toFolder) || dragged.items && canAllBeCopiedOrMovedToFolder(toFolder);
          this.tree.refreshDropTarget(hover);
        }
      }.bind(this),
      onDrop: function (dragged, dropped, event) {
        var node;

        if (Draggables.supportsTouch) {
          var touch = event.changedTouches[0];
          node = this.tree.getTreeNodeByElement($(document.elementFromPoint(touch.pageX, touch.pageY)));
        } else {
          node = this.tree.getTreeNodeByEvent(event);
        }

        node && (this.tree._overNode = node);

        if (this.tree._overNode) {
          var toFolder = new Folder(this.tree._overNode);
          dragged.node && canFolderBeCopiedOrMovedToFolder(toFolder) && invokeFolderAction('PasteFolder', toFolder);
          dragged.items && canAllBeCopiedOrMovedToFolder(toFolder) && invokeFolderAction('PasteResources', toFolder);
        }
      }.bind(this)
    });
    this.tree.observe('server:error', function () {
      if (window.console) {
        alert('Tree load error.');
      }
    });
    this.tree.observe('childredPrefetched:loaded', function (event) {
      this.tree.openAndSelectNode(this._uri);
    }.bindAsEventListener(this));
    this.tree.observe('tree:loaded', function (event) {
      this._canDoBrowse = false; // Forbid do browse to prevent initial browsing for each folder in the uri.
      // Forbid do browse to prevent initial browsing for each folder in the uri.

      if (this._uri == '/') {
        this.tree.rootNode.select();
      } else {
        this.tree.openAndSelectNode(this._uri);
      }

      this._canDoBrowse = true;
      var node = this.tree.getSelectedNode();

      if (node) {
        node.scroll($(this._treeId).parentNode);
      }

      this.doBrowse(); // Do initial browse.
    }.bindAsEventListener(this));
    this.tree.observe('node:selected', function (event) {
      this._uri = event.memo.node.param.uri;
      window.localStorage && localStorage.setItem(this._cookieName, this._uri);
      repositorySearch.model.setSelectedFolder(new Folder(event.memo.node));
      this.doBrowse();
    }.bindAsEventListener(this));
    this.tree.observe('node:mouseup', function (event) {
      repositorySearch.model.setContextFolder(new Folder(event.memo.node));
    });
    this.tree.showTreePrefetchNodes(this._uri);
    return this;
  },
  doBrowse: function doBrowse() {
    if (this._canDoBrowse) {
      repositorySearch.fire(repositorySearch.Event.SEARCH_BROWSE, {
        uri: this._uri
      });
    }
  },
  getSelectedUri: function getSelectedUri() {
    return this._uri;
  },
  getTreeId: function getTreeId() {
    return this._treeId;
  },
  selectFolder: function selectFolder(folder) {
    this.tree.openAndSelectNode(folder.URI);
  },
  reselectFolder: function reselectFolder(folder) {
    if (folder.node.isSelected()) {
      folder.node.deselect();
      folder.node.select();
    }
  },
  refreshFolder: function refreshFolder(folder) {
    this.selectFolder(folder);
    this.updateSubFolders(folder);
  },
  updateFolder: function updateFolder(folder, label, description) {
    folder.label = label;
    folder.description = description;
    folder.node.changeName(folder.label);
    folder.node.param.extra.desc = folder.description;
    this.tree.resortSubtree(folder.node.parent);
    folder.node.parent.refreshNode(); //        folder.node.param.extra.date = folder.date;
  },
  updateSubFolders: function updateSubFolders(folder) {
    if (!folder.node.hasChilds()) {
      folder.node.setHasChilds(true);
    }

    if (folder.node.isOpen()) {
      folder.node.handleNode();
    }

    folder.node.isloaded = false;
    folder.node.handleNode();
  },
  isFolderContextMenu: function isFolderContextMenu(event) {
    return this.tree.getTreeNodeByEvent(event) && !this.tree.isIconEvent(event);
  },
  moveOrCopyFolder: function moveOrCopyFolder(targetFolder, toFolder, copy) {
    var parent = targetFolder.getParentFolder().node;
    copy || parent.removeChild(targetFolder.node);
    return this.tree.getTreeNodeChildren(toFolder.node, function (result) {
      if (result) {
        var node = result.detect(function (n) {
          return n.param.id == targetFolder.name;
        });
        node && this.tree.openAndSelectNode(node.param.uri);
      }
    }.bind(this));
  }
}; ///////////////////////////////
// Results panel object
///////////////////////////////
///////////////////////////////
// Results panel object
///////////////////////////////

repositorySearch.resultsPanel = {
  _list: null,
  _infiniteScroll: null,
  _resultListHeaderId: 'resultsListHeader',
  _resultListId: 'resultsList',
  _resultsContainerId: 'resultsContainer',
  _touchScroller: null,
  _folderDisplayPathCache: {},
  NOTHING_TO_DISPLAY_ID: 'nothingToDisplay',
  RESOURCE_NAME_TOOLTIP_ID: 'resourceNameTooltip',
  NAME_PATTERN: '.resourceName',
  LINK_NAME_PATTERN: '.resourceName > a',
  DISCLOSURE_PATTERN: '.disclosure',
  SCHEDULED_PATTERN: '.scheduled',
  LOADING_CLASS_NAME: 'loading',
  initialize: function initialize(options) {
    var it = this;
    this._container = $(this._resultListId).up();
    this._header = $(this._resultListHeaderId);
    this._list = new dynamicList.List(this._resultListId, {
      listTemplateDomId: 'tabular_fourColumn_resources',
      itemTemplateDomId: 'tabular_fourColumn_resources:leaf',
      //dragPattern: '.selected>.wrap',
      dragPattern: options.enableDnD ? '.draggable' : '',
      multiSelect: true,
      selectOnMousedown: !isIPad()
    });

    this._intiListEvents();

    this._initDnD();

    this.getList().show();

    if (isSupportsTouch()) {
      this._touchController = new TouchController(document.getElementById(this._resultListId), document.getElementById(this._resultsContainerId), {
        scrollbars: true
      });
      jQuery('#' + this._resultListId).on('layout_update orientationchange', function () {
        jQuery('#' + it._resultListId).css('min-width', jQuery('#' + it._resultsContainerId).width() + 'px');
        jQuery('#' + it._resultListId).width(jQuery('#' + it._resultsContainerId).width());
      });
    }

    if (isIPad()) {
      this._infiniteScroll = new InfiniteScroll({
        id: this._container.identify(),
        contentId: this._resultListId,
        scroll: this._touchController
      });
    } else {
      this._infiniteScroll = new InfiniteScroll({
        id: this._container.identify(),
        contentId: this._resultListId
      });
    }

    this._infiniteScroll.onLoad = function () {
      repositorySearch.fire(repositorySearch.Event.SEARCH_NEXT);
    };

    disableSelectionWithoutCursorStyle(this._container);

    var resizeHandler = this._toggleInfiniteScrollBasedOnViewportHeight.bind(this); // call the handler only after 250ms would pass after last resize event


    Event.observe($(window), 'resize', _.debounce(resizeHandler, 250));

    this._fixHeaderWidth();

    return this;
  },
  _fixHeaderWidth: function _fixHeaderWidth() {
    if (!isIPad()) {
      this._header.setStyle({
        'marginRight': this._container.getWidth() - $(this._resultListId).getWidth() + 'px'
      });
    }
  },
  _createResourceItem: function _createResourceItem(value) {
    var resourceItem;

    if (value.hasChildren) {
      resourceItem = new dynamicList.CompositeItem({
        cssClassName: layoutModule.NODE_CLASS,
        label: value.label,
        value: value,
        openHandlerPattern: '.disclosure.icon',
        closeHandlerPattern: '.disclosure.icon',
        //respondOnItemEvents: false,
        excludeFromSelectionTriggers: ['.disclosure.icon'],
        listOptions: {
          listTemplateDomId: 'tabular_fourColumn_resources_sublist',
          itemTemplateDomId: 'tabular_fourColumn_resources_sublist:leaf',
          multiSelect: true
        }
      });

      resourceItem.setLoading = function (b) {
        this.isLoading = b;
        this.refreshStyle();
        repositorySearch.resultsPanel.refresh();
      };
    } else {
      resourceItem = new dynamicList.ListItem({
        cssClassName: layoutModule.LEAF_CLASS,
        label: value.label,
        value: value
      });
    }

    resourceItem.processTemplate = function (element) {
      var isRunnable = canBeRun(this.getValue()) || canBeOpened(this.getValue());
      var nameSelector = isRunnable ? repositorySearch.resultsPanel.LINK_NAME_PATTERN : repositorySearch.resultsPanel.NAME_PATTERN;
      var name = element.select(nameSelector)[0];
      var nameTitleElement = element.select(repositorySearch.resultsPanel.NAME_PATTERN)[0];
      var desc = element.select('.resourceDescription')[0];
      name.update(xssUtil.hardEscape(this.getValue().label));
      var that = this;
      new JSTooltip(nameTitleElement, {
        text: [xssUtil.hardEscape(this.getValue().label), xssUtil.hardEscape(repositorySearch.messages['loading'])],
        templateId: repositorySearch.resultsPanel.RESOURCE_NAME_TOOLTIP_ID,
        loadTextCallback: function loadTextCallback(tooltip) {
          var folderPath = that.getValue().parentFolder;
          var folderDisplayPath = repositorySearch.resultsPanel._folderDisplayPathCache[folderPath];
          var label, uri;

          function getUri(parentUri, name) {
            var separator = repositorySearch.model.getFolderSeparator();

            if (parentUri === separator) {
              return parentUri + name;
            } else {
              return parentUri + separator + name;
            }
          }

          function updateTooltip(parentUri, label, name) {
            label = xssUtil.hardEscape(label);
            uri = xssUtil.hardEscape(getUri(parentUri, name));
            tooltip.updateText([label, uri]);
          }

          if (folderDisplayPath) {
            updateTooltip(folderDisplayPath, that.getValue().label, that.getValue().name);
          } else {
            var action = new repositorySearch.ServerAction(repositorySearch.InfoAction.GET_DISPLAY_PATH, {
              data: {
                resourceUri: folderPath,
                isFolder: true
              }
            });

            action.onSuccess = function (data) {
              // Cache the display path of the folder.
              repositorySearch.resultsPanel._folderDisplayPathCache[folderPath] = data;
              updateTooltip(data, that.getValue().label, that.getValue().name);
            };

            action.onError = repositorySearch.defaultErrorHandler;
            action.invokeAction();
          }
        }
      });
      var descriptionValue = this.getValue().description;
      desc.update(xssUtil.hardEscape(descriptionValue));

      if (!descriptionValue) {
        desc.jsTooltip && desc.jsTooltip.disable();
      } else {
        new JSTooltip(desc, {
          text: descriptionValue
        });
      }

      var type = element.select('.resourceType')[0];
      var modifiedDate = element.select('.modifiedDate')[0];
      var createdDate = element.select('.createdDate')[0];
      type.update(this.getValue().type);
      modifiedDate.update(this.getValue().updateDate);
      new JSTooltip(modifiedDate, {
        text: this.getValue().updateDateTime
      });
      createdDate.update(this.getValue().date);
      new JSTooltip(createdDate, {
        text: this.getValue().dateTime
      });
      return element;
    };

    var baseRefreshStyle = resourceItem.refreshStyle;

    resourceItem.refreshStyle = function () {
      baseRefreshStyle.call(this);

      var element = this._getElement();

      if (this.getValue().isScheduled) {
        element.addClassName(layoutModule.SCHEDULED_CLASS);
      }

      if (this.isLoading) {
        element.addClassName(layoutModule.LOADING_CLASS);
      }
    };

    return resourceItem;
  },
  _initDnD: function _initDnD() {
    var list = this.getList();

    list.setDragStartState = function (item, draggable, event) {
      dynamicList.List.prototype.setDragStartState.call(this, item, draggable, event);
      isMetaHeld(event, true) && $(document.body).addClassName(layoutModule.COPY_CLASS).setStyle({
        cursor: null
      });
      invokeBulkAction(isMetaHeld(event, true) ? 'Copy' : 'Move');
    };

    list.setDragEndState = function (item, draggable, event) {
      repositorySearch.CopyMoveController.cancel();
      repositorySearch.foldersPanel.tree.refreshDropTarget(false);
      $(document.body).removeClassName(layoutModule.COPY_CLASS);
      dynamicList.List.prototype.setDragEndState.call(this, item, draggable, event);
    };
  },
  _intiListEvents: function _intiListEvents() {
    this.getList().observe('item:click', function (event) {
      var item = event.memo.item;
      var e = event.memo.targetEvent;
      var resource = item.getValue();

      if (this._isLinkEvent(e)) {
        if (canBeRun(resource)) {
          invokeRedirectAction('RunResourceAction');
        } else {
          if (__jrsConfigs__.isProVersion) {
            canBeOpened(resource) && invokeRedirectAction('OpenResourceAction', {
              isContentResource: window.isContentResource(resource)
            });
          } else {
            canBeOpened(resource) && invokeRedirectAction('OpenResourceAction');
          }
        }
      }

      if (this._isScheduleIconEvent(e) && canBeScheduled(resource)) {
        invokeRedirectAction('ScheduleAction');
      }
    }.bindAsEventListener(this));
    this.getList().observe('item:selected', function (event) {
      var item = event.memo.item;
      var resources = this.getList().getSelectedItems().collect(function (lItem) {
        return lItem.getValue();
      });
      repositorySearch.model.setSelectedResources(resources);
      repositorySearch.actionModel.refreshToolbar();
    }.bindAsEventListener(this));
    this.getList().observe('item:unselected', function (event) {
      var item = event.memo.item;
      var resources = this.getList().getSelectedItems().collect(function (lItem) {
        return lItem.getValue();
      });
      repositorySearch.model.setSelectedResources(resources);
      repositorySearch.actionModel.refreshToolbar();
    }.bindAsEventListener(this));
    this.getList().observe('item:mouseup', function (event) {} //            var item = event.memo.item;
    //            var resource = item.getValue();
    //            repositorySearch.model.setContextResource(resource);
    );
    this.getList().observe('item:open', function (event) {
      var item = event.memo.item;
      var resource = item.getValue();

      if (!resource.isLoaded()) {
        item.setLoading(true);
        repositorySearch.fire(repositorySearch.Event.SEARCH_CHILDREN, {
          resource: resource,
          item: item
        });
      }

      this.refresh();
    }.bindAsEventListener(this));
    this.getList().observe('item:closed', function (event) {
      this.refresh();
    }.bindAsEventListener(this));
    this.getList().observe('key:contextMenu', function (event) {
      var item = event.memo.node;
      var itemPosition = getBoxOffsets(item, true);
      var menuPosition = {
        menuLeft: itemPosition[0] + 100,
        //TODO: use constants for offsets
        menuTop: itemPosition[1] + 20 //TODO: use constants for offsets

      };

      if (this.getList().getSelectedItems().length > 1) {
        repositorySearch.actionModel.showResourceBulkMenu(event, menuPosition);
      } else {
        repositorySearch.actionModel.showResourceMenu(event, menuPosition);
      }

      Event.stop(event);
    }.bindAsEventListener(this));
    this.getList().observe('key:escape', function (event) {
      actionModel.hideMenu();
      Event.stop(event);
    });
  },
  _isLinkEvent: function _isLinkEvent(event) {
    var element = Event.element(event);
    return matchAny(element, [this.LINK_NAME_PATTERN]) != null;
  },
  _isScheduleIconEvent: function _isScheduleIconEvent(event) {
    var element = Event.element(event);
    return element.match(this.SCHEDULED_PATTERN);
  },
  _isDisclosureEvent: function _isDisclosureEvent(event) {
    var element = Event.element(event);
    return matchAny(element, [this.DISCLOSURE_PATTERN]) != null;
  },
  _refreshEmptyListMessage: function _refreshEmptyListMessage() {
    var nothingToDisplay = $(this.NOTHING_TO_DISPLAY_ID);

    if (this._list.getItems().length === 0) {
      nothingToDisplay.removeClassName(layoutModule.HIDDEN_CLASS);
      centerElement(nothingToDisplay, {
        horz: true,
        vert: true
      });
    } else {
      nothingToDisplay.addClassName(layoutModule.HIDDEN_CLASS);
    }
  },
  _toggleInfiniteScrollBasedOnViewportHeight: function _toggleInfiniteScrollBasedOnViewportHeight() {
    if (this._isListHeightLessThanViewport()) {
      this._infiniteScroll.onLoad();
    } else {
      this.refresh();

      this._infiniteScroll.stopWaiting();
    }
  },
  _isListHeightLessThanViewport: function _isListHeightLessThanViewport() {
    return this.getList()._element.clientHeight < document.body.clientHeight;
  },
  getList: function getList() {
    return this._list;
  },
  removeResources: function removeResources(resources) {
    var children = resources.findAll(function (r) {
      return r.isChild;
    });
    var other = resources.findAll(function (r) {
      return !r.isChild;
    });
    var items = this.getList().getItems();
    var removedItems = [];
    var compositeItems = [];
    items.each(function (item) {
      item.isComposite && compositeItems.push(item);
      other.include(item.getValue()) && removedItems.push(item);
    });
    compositeItems.each(function (item) {
      if (item.getItems()) {
        item.removeItems(item.getItems().findAll(function (item) {
          return children.include(item.getValue());
        }));
      }
    });
    this.getList().removeItems(removedItems);

    this._refreshEmptyListMessage();

    this.refresh();
  },
  setResources: function setResources(resources, toItem) {
    var items = resources.collect(this._createResourceItem);
    var list = this.getList();

    if (toItem) {
      toItem.setItems(items);
      toItem.refresh();
    } else {
      this._infiniteScroll && this._infiniteScroll.reset();
      list.setItems(items);
      list.show();

      this._refreshEmptyListMessage();
    }

    if (this._isListHeightLessThanViewport()) {
      tooltipModule.disableTooltips();
    }

    if (items.length > 0) {
      this._toggleInfiniteScrollBasedOnViewportHeight();
    } //custom event is necessary for QAA so they will know
    //when list is loaded


    var event = new CustomEvent("".concat(list._id, ":loaded"));

    list._element.dispatchEvent(event);
  },
  addResources: function addResources(resources) {
    var items = resources.collect(this._createResourceItem);
    tooltipModule.disableTooltips();
    this.getList().addItems(items);
    this.getList().refresh();

    if (items.length > 0) {
      this._toggleInfiniteScrollBasedOnViewportHeight();

      tooltipModule.enableTooltips();
    }
  },
  isResourceContextMenu: function isResourceContextMenu(event) {
    return this.getList().getItemByEvent(event);
  },
  updateResource: function updateResource(resource) {
    var items = this.getList().getItems();
    items.each(function (item) {
      if (item.getValue().URIString == resource.URIString) {
        item.setValue(resource);
        item.refresh();

        if (this.getList().isItemSelected(item)) {
          // Reselecting to update item in selected list.
          this.getList().selectItem(item);
        }
      }
    }.bind(this));
  },
  findResource: function findResource(uri) {
    var items = this.getList().getItems();
    var item = items.detect(function (item) {
      return item.getValue().URIString === uri;
    });
    return item ? item.getValue() : null;
  },
  refresh: function refresh() {
    this._fixHeaderWidth();

    tooltipModule.cleanUp();
  }
}; ///////////////////////////////
// Filter panel object
///////////////////////////////
///////////////////////////////
// Filter panel object
///////////////////////////////

repositorySearch.filtersPanel = {
  _id: 'filtersPanel',
  _container: undefined,
  _filtersLists: {},
  _cookieName: 'filtersPopularity',
  _ignoreFilterEvent: false,
  initialize: function initialize(filtersMetaData, selectedFilters) {
    //this._getContainer().update();    // Process filters configuration
    // Process filters configuration
    filtersMetaData.each(function (filter, index) {
      var element = jQuery(this._getContainer().childElements()[index]);
      element.find('.subcontainer.ui-resizable')[0].insert(new Element('ul', {
        id: filter.id,
        'data-tab-index': 5 + index,
        'data-component-type': 'list'
      }));

      var list = this._createFiltersList(filter.id, filter);

      list.show();
      this._filtersLists[filter.id] = list;
      element.find('.buttonIconToggle')[0].observe('click', this._buttonToggleListener.bindAsEventListener(this._container.children[index]));
    }.bind(this));

    for (var filterId in selectedFilters) {
      this.select(filterId, selectedFilters[filterId]);
    }

    if (isSupportsTouch()) {
      this._touchController = new TouchController(document.getElementById(this._id), $(this._id).up());
    } //this._refreshScroll();
    //this._refreshScroll();


    return this;
  },
  _buttonToggleListener: function _buttonToggleListener(element) {
    if (this.hasClassName('open')) {
      this.addClassName('closed').removeClassName('open');
      jQuery(this).find('.subcontainer.ui-resizable')[0].hide();
    } else {
      this.addClassName('open').removeClassName('closed');
      jQuery(this).find('.subcontainer.ui-resizable')[0].show();
    }
  },
  _refreshScroll: function _refreshScroll() {
    var scroll = layoutModule.scrolls.get(this._id);
    scroll && scroll.refresh();
  },
  _createItemsList: function _createItemsList(filterMetaData) {
    var optionsMetaData = filterMetaData.options;
    var index = 0;
    var allItems = optionsMetaData.collect(function (optionMetaData) {
      return new dynamicList.ListItem({
        value: optionMetaData,
        cssClassName: layoutModule.LEAF_CLASS,
        label: repositorySearch.getMessage(optionMetaData.labelId)
      });
    }).partition(function () {
      index++;
      return filterMetaData.showCount === -1 || filterMetaData.showCount > index;
    });

    if (allItems[1].length > 0) {
      allItems[0].push(new dynamicList.CompositeItem({
        value: {
          isMore: true
        },
        templateDomId: 'list_responsive_filters:node',
        openUp: true,
        openHandlerPattern: '.more.launcher',
        closeHandlerPattern: '.fewer.launcher',
        respondOnItemEvents: false,
        items: allItems[1]
      }));
    }

    return allItems[0];
  },
  _createFiltersList: function _createFiltersList(filterId, filterMetaData) {
    var list = new dynamicList.List(filterId, {
      listTemplateDomId: 'list_responsive_filters',
      itemTemplateDomId: 'list_responsive_filters:leaf',
      items: this._createItemsList(filterMetaData)
    }); // When item is selected fire filter event
    // When item is selected fire filter event

    list.observe('item:selected', function (event) {
      var item = event.memo.item;

      if (item.getValue().isSeparator || item.getValue().isMore || this._ignoreFilterEvent) {
        return;
      }

      repositorySearch.fire(repositorySearch.Event.SEARCH_FILTER, {
        filterId: list.getId(),
        optionId: item.getValue().id
      });
    }.bindAsEventListener(this));
    return list;
  },
  select: function select(filterId, optionId, isRestore) {
    var list = this._filtersLists[filterId];

    var filterOptionSelector = function (item) {
      if (item.getValue().id == optionId) {
        if (!item.isSelected()) {
          this._ignoreFilterEvent = isRestore;
          item.select();
          this._ignoreFilterEvent = false;
        }

        throw $break;
      }

      if (item.isComposite) {
        var element = item._getElement();

        if (!baseList.isItemOpen(element)) {
          baseList.openItem(element);
        }

        if (item.getItems()) {
          item.getItems().each(filterOptionSelector);
        }
      }
    }.bind(this);

    list.getItems().each(filterOptionSelector);
  },
  _getContainer: function _getContainer() {
    if (!this._container) {
      this._container = $(this._id);
      this._container.hasClassName(layoutModule.SWIPE_SCROLL_PATTERN) && (this._container = this._container.down());
    }

    return this._container;
  }
}; ///////////////////////////////
// Filter path object
///////////////////////////////
///////////////////////////////
// Filter path object
///////////////////////////////

repositorySearch.filterPath = {
  _containerId: 'filterPath',
  _contentBodySelector: '.primary.column>.content>.body',
  initialize: function initialize() {
    this._filterPathList = new dynamicList.List(this._containerId, {
      listTemplateDomId: 'list_control_path',
      itemTemplateDomId: 'list_control_path:step'
    }); // When item is selected fire rollback event
    // When item is selected fire rollback event

    this._filterPathList.observe('item:selected', function (event) {
      var item = event.memo.item;

      if (!item.getValue().isLast) {
        repositorySearch.fire(repositorySearch.Event.SEARCH_ROLLBACK, {
          position: item.getValue().position
        });
      }
    });

    return this;
  },
  setPathItems: function setPathItems(pathItems) {
    if (pathItems.length > 1) {
      var lastIndex = pathItems.length - 1;
      var listItems = pathItems.collect(function (pathItem, index) {
        pathItem.isLast = index == lastIndex;
        return new dynamicList.ListItem({
          label: pathItem.label,
          value: pathItem
        });
      });

      this._filterPathList.setItems(listItems);

      this._filterPathList.show();

      $(this._containerId).up().removeClassName('hidden');
      $(document.body).select(this._contentBodySelector)[0].addClassName('showingSubHeader');
    } else {
      this._filterPathList.setItems([]);

      this._filterPathList.show();

      $(this._containerId).up().addClassName('hidden');
      $(document.body).select(this._contentBodySelector)[0].removeClassName('showingSubHeader');
    }
  }
}; ///////////////////////////////
// Sorters panel object
///////////////////////////////
///////////////////////////////
// Sorters panel object
///////////////////////////////

repositorySearch.sortersPanel = {
  _LABEL_TEMPLATE_DOM_ID: 'sortPanelLabelTemplate',
  _containerId: 'sortMode',
  _ignoreSortEvent: false,
  sortersList: null,
  initialize: function initialize(sortersMetaData, selectedSorter) {
    this.labelItem = new dynamicList.ListItem({
      label: repositorySearch.getMessage("SEARCH_SORT_BY") + ":",
      value: {
        isLabel: true
      },
      templateDomId: "tabSet_control_horizontal_responsive:label",
      respondOnItemEvents: false
    });
    var sortItems = sortersMetaData.collect(function (sorterMetaData, index) {
      return new dynamicList.ListItem({
        label: repositorySearch.getMessage(sorterMetaData.labelId),
        value: sorterMetaData
      });
    });
    this.sortersList = new dynamicList.List(this._containerId, {
      listTemplateDomId: "tabSet_control_horizontal_responsive",
      itemTemplateDomId: "tabSet_control_horizontal_responsive:tab",
      items: [this.labelItem].concat(sortItems)
    });
    var self = this; // When item is selected fire sort event

    this.sortersList.observe(this.sortersList.Event.ITEM_SELECTED, function (event) {
      var item = event.memo.item;

      if (item.getValue().isLabel || self._ignoreSortEvent) {
        return;
      }

      repositorySearch.sortersPanel.disableItems();
      repositorySearch.fire(repositorySearch.Event.SEARCH_SORT, {
        sorterId: item.getValue().id
      });
    });
    this.sortersList.show();
    this.labelItem.disable();
    this.select(selectedSorter);
    return this;
  },
  select: function select(sorterId, isRestore) {
    this.sortersList.getItems().each(function (item) {
      if (item.getValue().id === sorterId && !item.isSelected()) {
        this._ignoreSortEvent = isRestore;
        this.sortersList.selectItem(item);
        this._ignoreSortEvent = false;
        return;
      }
    }.bind(this));
  },
  disableItems: function disableItems() {
    var self = this;
    this.sortersList.getItems().each(function (item) {
      if (item !== self.labelItem && !item.isSelected()) {
        item.disable();
        item.refresh();
      }
    });
  },
  enableItems: function enableItems() {
    var self = this;
    this.sortersList.getItems().each(function (item) {
      if (item !== self.labelItem && !item.isSelected()) {
        item.enable();
        item.refresh();
      }
    });
  },
  _getContainer: function _getContainer() {
    if (!this._container) {
      this._container = $(this._containerId);
    }

    return this._container;
  },
  _getLabelTemplate: function _getLabelTemplate() {
    var e = $(this._LABEL_TEMPLATE_DOM_ID).cloneNode(true);
    e.removeAttribute('id');
    return e;
  }
}; /////////////////////////////////
// Repository permissions dialog
/////////////////////////////////
/////////////////////////////////
// Repository permissions dialog
/////////////////////////////////

var ResourcePermissions = function ResourcePermissions(resource) {
  this._resource = resource;
  this._isVisible = false;
  this._listId = this.ENTITY_LIST_ID;
  this._listContainerId = this.LIST_CONTAINER_ID;
  this._searchBoxId = this.SEARCH_BOX_ID;
  this.viewBy = 'USER', this._processTemplate();
};

ResourcePermissions.addVar('TEMPLATE_DOM_ID', 'permissions');
ResourcePermissions.addVar('TOOLTIP_TEMPLATE_DOM_ID', 'orgTooltip');
ResourcePermissions.addVar('LIST_TEMPLATE_ID', 'tabular_twoColumn_setLeft');
ResourcePermissions.addVar('ITEM_TEMPLATE_ID', 'tabular_twoColumn_setLeft:leaf');
ResourcePermissions.addVar('WAIT_ITEM_TEMPLATE_ID', 'tabular_twoColumn_setLeft:loading');
ResourcePermissions.addVar('ENTITY_LIST_ID', 'permissionsList');
ResourcePermissions.addVar('LIST_CONTAINER_ID', 'permissionsListContainer');
ResourcePermissions.addVar('SEARCH_BOX_ID', 'searchPermissionsBox');
ResourcePermissions.addVar('NAME_TOOLTIP_PATTERN', '.one');
ResourcePermissions.addVar('NAME_PATTERN', '.one>a.launcher');
ResourcePermissions.addVar('PERMISSIONS_PATTERN', '.two>select');
ResourcePermissions.addVar('VIEW_BY_TAB_SET_PATTERN', '#permissionsViewBy');
ResourcePermissions.addVar('TAB_PATTERN', '.tab>p');
ResourcePermissions.addVar('PATH_PATTERN', '.path');
ResourcePermissions.addVar('SUBMIT_BUTTON', '#permissionsOk');
ResourcePermissions.addVar('APPLAY_BUTTON', '#permissionsApply');
ResourcePermissions.addVar('CANCEL_BUTTON', '#permissionsCancel');
ResourcePermissions.addVar('BODY_PATTERN', 'div.body');
ResourcePermissions.addMethod('_processTemplate', function () {
  this._dom = $(this.TEMPLATE_DOM_ID).cloneNode(true);

  this._dom.writeAttribute('id', null);

  this._dom.down('.body').writeAttribute('id', '');

  var path = this._dom.select(this.PATH_PATTERN)[0];

  path.update(xssUtil.hardEscape(this._resource.URIString.truncate(50)));
  path.writeAttribute('title', this._resource.URIString);
  this._viewByTabSet = this._dom.select(this.VIEW_BY_TAB_SET_PATTERN)[0];
  this._byUsersButton = this._dom.select(this.TAB_PATTERN)[0];
  this._byRolesButton = this._dom.select(this.TAB_PATTERN)[1];
  this._submitButton = this._dom.select(this.SUBMIT_BUTTON)[0];
  this._applyButton = this._dom.select(this.APPLAY_BUTTON)[0];
  this._cancelButton = this._dom.select(this.CANCEL_BUTTON)[0];
  this._byUsersButton.viewType = 'USER';
  this._byRolesButton.viewType = 'ROLE';

  this._submitButton.writeAttribute('id', null);

  this._applyButton.writeAttribute('id', null);

  this._cancelButton.writeAttribute('id', null);

  var list = this._dom.select('#' + this.ENTITY_LIST_ID)[0];

  var listContainer = this._dom.select('#' + this.LIST_CONTAINER_ID)[0];

  var searchBox = this._dom.select('#' + this.SEARCH_BOX_ID)[0];

  this._listId = list.writeAttribute('id', null).identify();
  this._listContainerId = listContainer.writeAttribute('id', null).identify();
  this._searchBoxId = searchBox.writeAttribute('id', null).identify();
});
ResourcePermissions.addMethod('_updateValueAndLabel', function (element, veSelector, value, leSelector) {
  var valueElement = element.select(veSelector)[0];
  valueElement.writeAttribute('id', null);
  valueElement.setValue(value);
  element.select(leSelector)[0].writeAttribute('for', valueElement.identify());
  return valueElement;
});
ResourcePermissions.addMethod('_updateContentAndLabel', function (element, veSelector, content, leSelector) {
  var valueElement = element.select(veSelector)[0];
  valueElement.writeAttribute('id', null);
  valueElement.update(content);
  element.select(leSelector)[0].writeAttribute('for', valueElement.identify());
  return valueElement;
});
ResourcePermissions.addMethod('_buttonClickHandler', function (e) {
  var element = e.element();

  if (!this._waiting) {
    var button = matchAny(element, [layoutModule.BUTTON_PATTERN], true);
    var uri = this._resource.URIString;

    if ([this._submitButton, this._applyButton].include(button)) {
      this._byUsersButton.addClassName(layoutModule.BUTTON_CLASS);

      this._byRolesButton.addClassName(layoutModule.BUTTON_CLASS);

      repositorySearch.fire(repositorySearch.PermissionEvent.UPDATE, {
        uri: uri,
        entities: this.getChangedEntities(),
        finishEdit: button == this._submitButton
      });
    }

    if ([this._byUsersButton, this._byRolesButton].include(button)) {
      if (this.isChanged()) {
        this._showWarning();

        e.stop();
      } else {
        this._hideWarning();

        this.viewBy = button.viewType;
        repositorySearch.fire(repositorySearch.PermissionEvent.BROWSE, {
          uri: uri,
          type: this.viewBy
        });
      }
    }

    [this._cancelButton].include(button) && this.hide();
  }
});
ResourcePermissions.addMethod('_showWarning', function () {
  this._dom.select(this.BODY_PATTERN)[0].addClassName(layoutModule.ERROR_CLASS);
});
ResourcePermissions.addMethod('_hideWarning', function () {
  this._dom.select(this.BODY_PATTERN)[0].removeClassName(layoutModule.ERROR_CLASS);
});
ResourcePermissions.addMethod('_launcherClickHandler', function (e) {
  var element = e.element();

  if (!this._waiting) {
    var launcher = matchAny(element, [this.NAME_PATTERN], true);

    if (launcher) {
      var li = element.up('li');

      if (li && li.listItem) {
        var value = li.listItem.getValue();
        value.navigateToManager();
      }
    }
  }

  e.stop();
});
ResourcePermissions.addMethod('_selectChangeHandler', function (e) {
  var element = e.element();
  e.stop();

  if (this._waiting) {
    return;
  }

  if (element.tagName.toLowerCase() == 'select') {
    var newPermission = element.options[element.selectedIndex].value;
    var li = element.up('li');

    if (li && li.listItem) {
      var value = li.listItem.getValue();
      li.listItem.getValue().permission.newPermission = newPermission != value.permission.getResolvedPermission() ? newPermission : undefined;
      li.listItem.refresh();
    }
  }

  if (this.isChanged()) {
    this._byUsersButton.removeClassName(layoutModule.BUTTON_CLASS);

    this._byRolesButton.removeClassName(layoutModule.BUTTON_CLASS);
  } else {
    this._byUsersButton.addClassName(layoutModule.BUTTON_CLASS);

    this._byRolesButton.addClassName(layoutModule.BUTTON_CLASS);
  }
});
ResourcePermissions.addMethod('_selectMouseOverHandler', function (e) {
  var element = matchAny(e.element(), [this.PERMISSIONS_PATTERN], true);
  element && e.stop();
});
ResourcePermissions.addMethod('_initControls', function () {
  this.list = new dynamicList.List(this._listId, {
    listTemplateDomId: this.LIST_TEMPLATE_ID,
    itemTemplateDomId: this.ITEM_TEMPLATE_ID
  });
  var container = $(this._listId).up();

  if (isSupportsTouch()) {
    if (!this._touchController) {
      this._touchController = new TouchController($(this._listId), $(this._listId).up(), {
        forceLayout: true
      });
    }
  }

  this._infiniteScroll = new InfiniteScroll({
    id: container.identify(),
    contentId: this._listId,
    scroll: this._touchController || undefined
  });
  this._searchBox = new SearchBox({
    id: this._searchBoxId
  });
  var uri = this._resource.URIString;

  this._infiniteScroll.onLoad = function () {
    if (!this._waiting) {
      repositorySearch.fire(repositorySearch.PermissionEvent.NEXT, {
        text: this._searchBox.getText(),
        uri: uri,
        type: this.viewBy
      });
    }
  }.bind(this);

  this._searchBox.onSearch = function (text) {
    if (!this._waiting) {
      if (this.isChanged()) {
        this._showWarning();
      } else {
        this._hideWarning();

        repositorySearch.fire(repositorySearch.PermissionEvent.SEARCH, {
          text: text,
          uri: uri,
          type: this.viewBy
        });
      }
    }
  }.bind(this);
});
ResourcePermissions.addMethod('show', function () {
  if (!this._isVisible) {
    document.body.insert(this._dom);

    this._initControls();

    this.list.setItems([]);
    this.list.show();
    orgModule.entityList._createEntityItem = this._createEntityItem;
    this.viewBy = 'ROLE';
    repositorySearch.fire(repositorySearch.PermissionEvent.BROWSE, {
      initialize: true,
      uri: this._resource.URIString,
      type: this.viewBy,
      isFolder: this._resource.isFolder()
    });
    this._isVisible = true;
    document.getElementById(this._listId).parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.style.height = '360px';
    dialogs.popup.show(this._dom);

    this._dom.observe('click', this._buttonClickHandler.bindAsEventListener(this));

    if (isSupportsTouch()) {
      this._viewByTabSet.observe('touchstart', this._buttonClickHandler.bindAsEventListener(this));
    }

    this._dom.observe('click', this._launcherClickHandler.bindAsEventListener(this)); // Change event not bubbled up in IE
    //        this._dom.observe('change', this._selectChangeHandler.bindAsEventListener(this));
    // Change event not bubbled up in IE
    //        this._dom.observe('change', this._selectChangeHandler.bindAsEventListener(this));


    this._dom.observe('mouseover', this._selectMouseOverHandler.bindAsEventListener(this));
  }
});
ResourcePermissions.addMethod('showAndWait', function () {
  if (!this._isVisible) {
    this._waiting = true;
    this.show();
    this._waitingItem = new dynamicList.ListItem({
      templateDomId: this.WAIT_ITEM_TEMPLATE_ID
    });
    this.list.addItems([this._waitingItem]);
    this.list.refresh();
    this.disable();
  }
});
ResourcePermissions.addMethod('stopWaiting', function () {
  if (this._waiting) {
    this._waiting = false;
    this.list.removeItems([this._waitingItem]);
    this.enable();
  }
});
ResourcePermissions.addMethod('hide', function () {
  dialogs.popup.hide(this._dom);

  this._dom.remove();

  this._dom.stopObserving('click');

  this._dom.stopObserving('change');

  this._dom.stopObserving('mouseover');

  if (isSupportsTouch()) {
    this._viewByTabSet.stopObserving('touchstart');
  }

  repositorySearch.dialogsPool.removePermissionsDialog(this._resource);
});
ResourcePermissions.addMethod('enable', function () {
  this._searchBox.enable();

  buttonManager.enable(this._byUsersButton);
  buttonManager.enable(this._byRolesButton);
});
ResourcePermissions.addMethod('disable', function () {
  this._searchBox.disable();

  buttonManager.disable(this._byUsersButton);
  buttonManager.disable(this._byRolesButton);
});
ResourcePermissions.addMethod('_createItem', function (value) {
  var item = new dynamicList.ListItem({
    label: value.getDisplayName(),
    value: value
  });
  var nameTooltipSelector = this.NAME_TOOLTIP_PATTERN;
  var nameSelector = this.NAME_PATTERN;
  var permissionsSelector = this.PERMISSIONS_PATTERN;
  var template = this.TOOLTIP_TEMPLATE_DOM_ID;

  var _this = this;

  item.processTemplate = function (element) {
    var nameTooltip = element.select(nameTooltipSelector)[0];
    var name = element.select(nameSelector)[0];
    var permissions = element.select(permissionsSelector)[0];
    var permission = this.getValue().permission;
    var tenantId = this.getValue().tenantId;

    if (permission.newPermission) {
      name.addClassName(layoutModule.EMPHASIS_CLASS);
    } else {
      name.removeClassName(layoutModule.EMPHASIS_CLASS);
    }

    name.update(xssUtil.hardEscape(this.getValue().getDisplayName()));

    if (tenantId && tenantId.length > 0) {
      new JSTooltip(nameTooltip, {
        text: xssUtil.hardEscape(tenantId),
        templateId: template
      });
      var origRemove = element.remove;

      element.remove = function () {
        tooltipModule.hideJSTooltip(nameTooltip);
        tooltipModule.cleanUp();
        origRemove.apply(this);
      };
    }

    permissions.update('');
    var index = 0,
        permissionsConfig = repositorySearch.model.getConfiguration().permissions;
    permissionsConfig = _.uniq(permissionsConfig, false, function (p) {
      return p.labelId;
    });

    for (var i = 0; i < permissionsConfig.length; i++) {
      if (permissionsConfig[i].name === 'REAL_READ_WRITE_DELETE') {
        permissionsConfig[i].name = "READ_WRITE_DELETE";
      }

      var label = repositorySearch.getMessage(permissionsConfig[i].labelId);
      var option = new Element('option', {
        value: permissionsConfig[i].name
      });
      permissions.insert(option.update(permission.inheritedPermission == permissionsConfig[i].name ? xssUtil.hardEscape(label + ' *') : xssUtil.hardEscape(label)));

      if (permission.newPermission) {
        permission.newPermission == permissionsConfig[i].name && (index = i);
      } else {
        permission.getResolvedPermission() == permissionsConfig[i].name && (index = i);
      }
    }

    permissions.observe('change', _this._selectChangeHandler.bindAsEventListener(_this));
    permissions.selectedIndex = index;

    if (this.getValue().permission.isDisabled) {
      permissions.writeAttribute('disabled', 'disabled');
    }

    return element;
  };

  return item;
});
ResourcePermissions.addMethod('addEntities', function (entities) {
  var items = entities.collect(this._createItem.bind(this));
  this.list.addItems(items);
  this.list.refresh();

  this._infiniteScroll.stopWaiting();
});
ResourcePermissions.addMethod('resetList', function (listId) {
  // removes stdNav(508c) behavior for permissions list
  // to correct a firefox-only issue with select elements in permissions list
  // see http://jira.jaspersoft.com/browse/JRS-8471
  var listUl = jQuery('#' + listId);
  listUl.find('[js-nonmodal-tabindex]').removeAttr('js-nonmodal-tabindex');
  listUl.find('[js-navtype]').attr('js-navtype', false);
  listUl.find('[tabindex]').removeAttr('tabindex');
});
ResourcePermissions.addMethod('scrollReset', function () {
  var listId = this._listId;
  var resetList = this.resetList;
  var scrollBody = jQuery('#' + this._listContainerId).find('.content').find('.body');
  scrollBody.on('scroll', _.debounce(function () {
    resetList(listId);
  }, 100));
});
ResourcePermissions.addMethod('setEntities', function (entities) {
  this.list.setItems([]);
  this._touchController && this._touchController.reset();
  this.addEntities(entities);
  this.resetList(this._listId);
  this.scrollReset();
});
ResourcePermissions.addMethod('getChangedEntities', function () {
  var items = this.list.getItems();
  var changed = [];
  items.each(function (item) {
    var value = item.getValue();

    if (value.permission && value.permission.newPermission) {
      changed.push(value);
    }
  });
  return changed;
});
ResourcePermissions.addMethod('updateEntities', function (entities) {
  var items = this.list.getItems();
  items.each(function (item) {
    var value = item.getValue();
    var updated = entities.detect(function (entity) {
      return entity.equals(value);
    });

    if (updated) {
      item.setValue(updated);
      item.refresh();
    }
  });
});
ResourcePermissions.addMethod('isChanged', function () {
  return this.getChangedEntities().length > 0;
}); /////////////////////////////////////////////////////////////////
// Poll with all properties and permissions dialogs.
// Use this pool object to create instances of those dialogs.
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
// Poll with all properties and permissions dialogs.
// Use this pool object to create instances of those dialogs.
/////////////////////////////////////////////////////////////////

repositorySearch.dialogsPool = {
  POOL_NOT_FOUND_EXCEPTION: 'PoolNotFoundException',
  DIALOD_EXIST_EXCEPTION: 'DialodExistException',
  NULL_RESOURCE_EXCEPTION: 'NullResourceException',
  _permissionsDialogPool: {},
  _propertiesDialogPool: {},
  _getPool: function _getPool(clazz) {
    var pool;
    clazz == ResourcePermissions && (pool = this._permissionsDialogPool);
    clazz == ResourceProperties && (pool = this._propertiesDialogPool);

    if (pool) {
      return pool;
    } else {
      throw {
        name: this.POOL_NOT_FOUND_EXCEPTION,
        message: 'Can\'t find pool for ' + clazz.toString()
      };
    }
  },
  _createDialog: function _createDialog(clazz, resource, options) {
    var uri = resource.URIString;

    var pool = this._getPool(clazz);

    if (resource == null) {
      throw {
        name: this.NULL_RESOURCE_EXCEPTION,
        message: 'Resource is null.'
      };
    }

    if (!pool[uri]) {
      pool[uri] = new clazz(resource, options);
    } else {
      throw {
        name: this.DIALOD_EXIST_EXCEPTION,
        message: clazz.toString() + ' dilaog for resource \'' + uri + '\' arleady exist.'
      };
    }

    return pool[uri];
  },
  _createOrGetDialog: function _createOrGetDialog(clazz, resource, options) {
    try {
      return this._createDialog(clazz, resource, options);
    } catch (e) {
      if (e.name == this.DIALOD_EXIST_EXCEPTION) {
        return this._getDialog(clazz, resource);
      } else {
        throw e;
      }
    }
  },
  _getDialog: function _getDialog(clazz, resourceOrUri) {
    var uri = Object.isString(resourceOrUri) ? resourceOrUri : resourceOrUri.URIString;
    return this._getPool(clazz)[uri];
  },
  _getAllDialogs: function _getAllDialogs(clazz) {
    var pool = this._getPool(clazz),
        dialogs = [];

    for (var uri in pool) {
      pool[uri] && dialogs.push(pool[uri]);
    }

    return dialogs;
  },
  _removeDialog: function _removeDialog(clazz, resourceOrUri) {
    var uri = Object.isString(resourceOrUri) ? resourceOrUri : resourceOrUri.URIString;
    this._getPool(clazz)[uri] = undefined;
  },
  createPermissionsDialog: function createPermissionsDialog(resource) {
    return this._createDialog(ResourcePermissions, resource);
  },
  createPropertiesDialog: function createPropertiesDialog(resource) {
    return this._createDialog(ResourceProperties, resource);
  },
  createOrGetPermissionsDialog: function createOrGetPermissionsDialog(resource) {
    return this._createOrGetDialog(ResourcePermissions, resource);
  },
  createOrGetPropertiesDialog: function createOrGetPropertiesDialog(resource, options) {
    return this._createOrGetDialog(ResourceProperties, resource, options);
  },
  getAllPermissionsDialogs: function getAllPermissionsDialogs() {
    return this._getAllDialogs(ResourcePermissions);
  },
  getAllPropertiesDialogs: function getAllPropertiesDialogs() {
    return this._getAllDialogs(ResourceProperties);
  },
  getPermissionsDialog: function getPermissionsDialog(resourceOrUri) {
    return this._getDialog(ResourcePermissions, resourceOrUri);
  },
  getPropertiesDialog: function getPropertiesDialog(resourceOrUri) {
    return this._getDialog(ResourceProperties, resourceOrUri);
  },
  removePermissionsDialog: function removePermissionsDialog(resourceOrUri) {
    return this._removeDialog(ResourcePermissions, resourceOrUri);
  },
  removePropertiesDialog: function removePropertiesDialog(resourceOrUri) {
    return this._removeDialog(ResourceProperties, resourceOrUri);
  }
}; /////////////////////////////////
// Repository properties dialog
/////////////////////////////////
/////////////////////////////////
// Repository properties dialog
/////////////////////////////////

var ResourceProperties = function ResourceProperties(resource, options) {
  this._resource = resource;
  this._changedCallback = options.changedCallback;
  this._showMode = options.showMode;

  this._processTemplate();
};

ResourceProperties.addVar('TEMPLATE_DOM_ID', 'propertiesResource');
ResourceProperties.addMethod('_processTemplate', function () {
  this._dom = $(this.TEMPLATE_DOM_ID).cloneNode(true);

  this._dom.writeAttribute('id', null);

  this._dom.addClassName('_activeResourcePropertiesDialog');

  var title = this._dom.select('.title')[0];

  title.update(jQuery(title).html().strip() + ': ' + xssUtil.hardEscape(this._resource.label).truncate(50));
  this._label = this._updateValueAndLabel(this._dom, 'input#displayName', this._resource.label, 'label[for="displayName"]');
  this._description = this._updateContentAndLabel(this._dom, 'textarea#description', xssUtil.hardEscape(this._resource.description), 'label[for="description"]');
  this._path = this._updateValueAndLabel(this._dom, 'input#path', xssUtil.hardEscape(this._resource.URIString), 'label[for="path"]');

  if (this._showMode) {
    this._dom.addClassName('showMode');

    this._label.writeAttribute('readonly', 'readonly');

    this._description.writeAttribute('readonly', 'readonly');
  }

  this._updateValueAndLabel(this._dom, 'div#resourceID', xssUtil.hardEscape(this._resource.name), 'label[for="resourceID"]');

  this._updateValueAndLabel(this._dom, 'input#type', xssUtil.hardEscape(this._resource.type), 'label[for="type"]');

  this._updateValueAndLabel(this._dom, 'input#createdDate', xssUtil.hardEscape(this._resource.date), 'label[for="createdDate"]');

  this._updateValueAndLabel(this._dom, 'input#userAccess', xssUtil.hardEscape(this._resource.permissionsToString()), 'label[for="userAccess"]');

  this._submitButton = this._dom.select('button.submit')[0];
  this._cancelButton = this._dom.select('button.cancel')[0];
  this._okButton = this._dom.select('button.ok')[0];
});
ResourceProperties.addMethod('_updateValueAndLabel', function (element, veSelector, value, leSelector) {
  var valueElement = element.select(veSelector)[0];
  valueElement.writeAttribute('id', null);
  valueElement.writeAttribute('value', value);
  valueElement.setValue ? valueElement.setValue(value) : valueElement.update(value);
  element.select(leSelector)[0].writeAttribute('for', valueElement.identify());
  return valueElement;
});
ResourceProperties.addMethod('_updateContentAndLabel', function (element, veSelector, content, leSelector) {
  var valueElement = element.select(veSelector)[0];
  valueElement.writeAttribute('id', null);
  valueElement.update(content);
  element.select(leSelector)[0].writeAttribute('for', valueElement.identify());
  return valueElement;
});
ResourceProperties.addMethod('_buttonClickHandler', function (e) {
  var button = matchAny(e.element(), [layoutModule.BUTTON_PATTERN], true);

  if (button == this._submitButton) {
    if (this._showMode) {
      this._hide();
    } else {
      if (this._isDataValid()) {
        if (this._changedCallback) {
          var resource = this._resource.clone();

          resource.label = this._label.getValue();
          resource.description = this._description.getValue();

          this._changedCallback(resource);
        }

        this._hide();
      }
    }
  } else if (button == this._cancelButton || button == this._okButton) {
    this._hide();
  }
});
ResourceProperties.addMethod('_isDataValid', function (e) {
  return ValidationModule.validate([{
    validator: ResourcesUtils.labelValidator,
    element: this._label
  }, {
    validator: ResourcesUtils.descriptionValidator,
    element: this._description
  }]);
});
ResourceProperties.addMethod('show', function (options) {
  document.body.insert(this._dom);

  if (options && options.cascade) {
    dialogs.popup.show(this._dom, false, options);
  } else {
    dialogs.popup.show(this._dom);
  }

  this._dom.observe('click', this._buttonClickHandler.bindAsEventListener(this));
});
ResourceProperties.addMethod('_hide', function () {
  dialogs.popup.hide(this._dom);

  this._dom.remove();

  this._dom.stopObserving('click');

  repositorySearch.dialogsPool.removePropertiesDialog(this._resource);
});
ResourceProperties.addMethod('isChanged', function () {
  return this._resource.label != this._label.getValue() || this._resource.description != this._description.getValue();
});

repositorySearch.showCreateFolderConfirm = function (folder) {
  var toFolder;
  var dialog = $('addFolder'),
      name = $('addFolderInputName'),
      description = $('addFolderInputDescription'),
      add = $('addFolderBtnAdd'),
      cancel = $('addFolderBtnCancel');

  var doShow = function doShow(folder) {
    toFolder = folder;
    dialogs.popup.show(dialog);
    name.setValue(repositorySearch.messages['action.create.folder.name']);
    accessibilityModule.disable();
    setTimeout(function () {
      name.focus();
      name.select();
    }, 500);
  };

  var doHide = function doHide(event) {
    name.clear();
    description.clear();
    ValidationModule.hideError(name);
    ValidationModule.hideError(description);
    dialogs.popup.hide(dialog);
    accessibilityModule.enable();
    event.stop();
  };

  var doValidate = function doValidate() {
    var isValid = ValidationModule.validate([{
      validator: ResourcesUtils.labelValidator,
      element: name
    }, {
      validator: ResourcesUtils.descriptionValidator,
      element: description
    }]);
    return isValid;
  };

  var doAdd = function doAdd(event) {
    if (add.readAttribute('disabled') === 'disabled') {
      return;
    }

    new repositorySearch.ServerAction.createFolderAction(repositorySearch.FolderAction.CREATE, {
      toFolder: toFolder,
      label: name.getValue(),
      desc: description.getValue()
    }).invokeAction();
    doHide(event);
  };

  add.observe('click', function (event) {
    if (doValidate()) {
      doAdd(event);
    }

    event.stop();
  });
  cancel.observe('click', doHide);
  repositorySearch.showCreateFolderConfirm = doShow;
  doShow(folder);
};

repositorySearch.DeleteConfirmation = {
  ID_DELETE_DIALOG_CONTAINER: 'standardConfirm',
  ID_DELETE_DIALOG_OK_BUTTON: 'deleteResourceOK',
  ID_DELETE_DIALOG_CANCEL_BUTTON: 'deleteResourceCancel'
};

repositorySearch.showDeleteFolderConfirm = function (folder) {
  var message = repositorySearch.getMessage('SEARCH_DELETE_FOLDER_CONFIRM_MSG', {
    folderUri: folder.URI
  });
  var action = new repositorySearch.ServerAction.createFolderAction(repositorySearch.FolderAction.DELETE, {
    folder: folder
  });

  repositorySearch._showDeleteDialog(message, action);
};

repositorySearch.showDeleteResourceConfirm = function (resource) {
  var message = repositorySearch.getMessage('SEARCH_DELETE_CONFIRM_MSG', {
    resourceUri: resource.URIString
  });
  var action = new repositorySearch.ServerAction.createResourceAction(repositorySearch.ResourceAction.DELETE, {
    resources: [resource]
  });

  repositorySearch._showDeleteDialog(message, action);
};

repositorySearch.showBulkDeleteResourcesConfirm = function (resources) {
  var message = repositorySearch.getMessage('SEARCH_BULK_DELETE_CONFIRM_MSG', {
    count: resources.length
  });
  var action = new repositorySearch.ServerAction.createResourceAction(repositorySearch.ResourceAction.DELETE, {
    resources: resources
  });

  repositorySearch._showDeleteDialog(message, action);
};

repositorySearch._showDeleteDialog = function (message, action) {
  var confirmElement = $(repositorySearch.DeleteConfirmation.ID_DELETE_DIALOG_CONTAINER);
  confirmElement.down('.body').update(xssUtil.hardEscape(message));
  dialogs.popupConfirm.show(confirmElement, true, {
    okButtonSelector: '#' + repositorySearch.DeleteConfirmation.ID_DELETE_DIALOG_OK_BUTTON,
    cancelButtonSelector: '#' + repositorySearch.DeleteConfirmation.ID_DELETE_DIALOG_CANCEL_BUTTON
  });
  jQuery('#' + repositorySearch.DeleteConfirmation.ID_DELETE_DIALOG_OK_BUTTON).on('click', function () {
    action.invokeAction();
  });
};

repositorySearch.showResourceProperties = function (resource, options) {
  var resourceProperties = repositorySearch.dialogsPool.createOrGetPropertiesDialog(resource, {
    showMode: true
  });
  resourceProperties.show(options);
};

repositorySearch.editResourceProperties = function (resource, options) {
  var resourceProperties = repositorySearch.dialogsPool.createOrGetPropertiesDialog(resource, {
    changedCallback: function changedCallback(resource) {
      var action = new repositorySearch.ServerAction.createResourceAction(repositorySearch.ResourceAction.UPDATE, {
        resource: resource
      });
      action.invokeAction();
    }
  });
  resourceProperties.show(options);
};

repositorySearch.showFolderProperties = function (folder) {
  var folderProperties = repositorySearch.dialogsPool.createOrGetPropertiesDialog(folder, {
    showMode: true
  });
  folderProperties.show();
};

repositorySearch.editFolderProperties = function (folder) {
  var folderProperties = repositorySearch.dialogsPool.createOrGetPropertiesDialog(folder, {
    changedCallback: function changedCallback(folder) {
      var action = new repositorySearch.ServerAction.createFolderAction(repositorySearch.FolderAction.UPDATE, {
        folder: folder
      });
      action.invokeAction();
    }
  });
  folderProperties.show();
};

repositorySearch.editResourcePermissions = function (resource) {
  var dialog = repositorySearch.dialogsPool.createOrGetPermissionsDialog(resource);
  dialog.showAndWait();
};

repositorySearch.editFolderPermissions = function (folder) {
  var dialog = repositorySearch.dialogsPool.createOrGetPermissionsDialog(folder);
  dialog.showAndWait();
};

repositorySearch.showUploadThemeConfirm = function (folder, reupload) {
  var toFolder;
  var isReupload;
  var dialog = $('uploadTheme'),
      themeName = $('themeName'),
      zip = $('themeZip'),
      upload = $('uploadThemeBtnUpload'),
      cancel = $('uploadThemeBtnCancel');

  var doShow = function doShow(folder, reupload) {
    toFolder = folder;
    isReupload = reupload;
    dialogs.popup.show(dialog);
    themeName.removeAttribute('disabled');
    themeName.setValue(repositorySearch.messages['RM_NEW_THEME_NAME']);

    if (isReupload) {
      themeName.writeAttribute('disabled');
      themeName.setValue(toFolder.name);
    }

    themeName.select();
    themeName.focus();
  };

  var doHide = function doHide(event) {
    themeName.clear();
    zip.clear();
    dialogs.popup.hide(dialog);
    event.stop();
  };

  var doValidate = function doValidate() {
    var isValid = ValidationModule.validate([{
      validator: ResourcesUtils.labelValidator,
      element: themeName
    }, {
      validator: ResourcesUtils.zipFileTypeValidator,
      element: zip
    }]);
    return isValid;
  };

  var doUpload = function doUpload(event) {
    var options = {};
    options.themeName = themeName.getValue();
    options._eventId = 'uploadTheme';
    options._flowExecutionKey = repositorySearch.flowExecutionKey;
    options.folderUri = toFolder.URI;
    options.folderUri = toFolder.URI;

    if (isReupload) {
      var basicURI = toFolder.URI;
      options.folderUri = basicURI.slice(0, basicURI.lastIndexOf('/'));
      options.reuploadAction = isReupload;
      options._eventId = 'reuploadTheme';
    }

    var callback = function callback(responseBody) {
      var respObj; //zip var should be refreshed to point to correct file input
      //zip var should be refreshed to point to correct file input

      zip = $('themeZip');

      if (responseBody) {
        try {
          respObj = responseBody.evalJSON();

          if (respObj && respObj.status == 'OK') {
            if (respObj.data.themeExist) {
              var msg = repositorySearch.messages["SEARCH_OVERWRITE_THEME_CONFIRM_MSG"];
              var dialog = new ConfirmationDialog({
                text: msg
              });
              dialog.on("button:yes", function () {
                var action = new repositorySearch.ServerAction.createFolderAction(repositorySearch.ThemeAction.REUPLOAD, options);
                action.invokeAction();
                dialog.remove();
              });
              dialog.on("button:no", function () {
                dialog.remove();
              });
              dialog.open();
            } else if (respObj.data.isActiveTheme) {
              var uri = respObj.data.themeUri;
              var action = new repositorySearch.ServerAction.createFolderAction(repositorySearch.ThemeAction.SETTHEME, {
                folderUri: uri
              });
              action.invokeAction();
            }
          } else if (respObj && respObj.status == 'ERROR') {
            alert(respObj.data);
          } else {
            alert(repositorySearch.messages['RM_UPLOAD_THEME_ERROR']);
          }
        } catch (ex) {
          alert(ex);
        }
      } //for all cases, except active theme re-uploade (for this action handler of "theme:updated" event will reload window)
      //for all cases, except active theme re-uploade (for this action handler of "theme:updated" event will reload window)


      if (!isReupload || !respObj.data.isActiveTheme) {
        repositorySearch.foldersPanel.refreshFolder(toFolder);
      }
    };

    fileSender.upload(zip, 'searchFlow', options, callback);
    doHide(event);
  };

  upload.observe('click', function (event) {
    if (doValidate()) {
      doUpload(event);
    }

    event.stop();
  });
  cancel.observe('click', doHide);
  repositorySearch.showUploadThemeConfirm = doShow;
  doShow(folder, reupload);
};

module.exports = repositorySearch;

});