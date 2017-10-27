/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* Bulk Pinner - Create multiple pins in your Pinterest boards at once
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright (C) 2017 Luke Denton
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * This program is free software: you can redistribute it and/or modify
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * it under the terms of the GNU General Public License as published by
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * the Free Software Foundation; either version 3 of the License, or
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * (at your option) any later version.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * This program is distributed in the hope that it will be useful,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * but WITHOUT ANY WARRANTY; without even the implied warranty of
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * GNU General Public License for more details.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * You should have received a copy of the GNU General Public License
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * along with this program.  If not, see <http://www.gnu.org/licenses/>.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _API = __webpack_require__(8);

var _API2 = _interopRequireDefault(_API);

var _DataStore = __webpack_require__(3);

var _DataStore2 = _interopRequireDefault(_DataStore);

var _PinPreview = __webpack_require__(2);

var _PinPreview2 = _interopRequireDefault(_PinPreview);

var _ClearPreviews = __webpack_require__(1);

var _ClearPreviews2 = _interopRequireDefault(_ClearPreviews);

var _Analytics = __webpack_require__(9);

var _Analytics2 = _interopRequireDefault(_Analytics);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Class BulkPinner
 */
var BulkPinner = function () {
    function BulkPinner() {
        _classCallCheck(this, BulkPinner);

        this.previewsPinsContainer = document.querySelector('.preview-pins-container');

        if (!_API2.default.IsAuthenticated()) {
            this.initAuthorization();
        } else {
            this.initApplication();
        }
    }

    /**
     * Initialise code required for the user to authenticate the application
     *
     * @returns {null}
     */


    _createClass(BulkPinner, [{
        key: 'initAuthorization',
        value: function initAuthorization() {
            var _this = this;

            document.querySelector(".authentication-container").classList.toggle('hidden', false);
            document.querySelector(".authenticate-button").addEventListener('click', function () {
                _API2.default.Login().then(function (_ref) {
                    var accessToken = _ref.accessToken;

                    _DataStore2.default.Set(_DataStore2.default.DATA__ACCESS_TOKEN(), accessToken);
                    _this.initApplication();
                }).catch(function (response) {
                    console.error(response);
                });
            });
        }

        /**
         * Initialise the code required for the application
         *
         * @returns {null}
         */

    }, {
        key: 'initApplication',
        value: function initApplication() {
            var _this2 = this;

            var clearPreviews = new _ClearPreviews2.default();

            document.querySelector(".authentication-container").classList.toggle('hidden', true);
            document.querySelector(".image-select-container").classList.toggle('hidden', false);

            document.querySelector('.refresh-boards').addEventListener('click', function () {
                _this2.loadBoards(true).then(function (boards) {
                    _this2.populateBoardNames(boards);
                }).catch(function (response) {
                    console.error(response);
                });
            });

            document.querySelector('.pins-container').addEventListener('blur', function (e) {
                if (e.target.matches('.note')) {
                    e.target.classList.toggle('invalid', e.target.value !== '');
                }
            });

            document.querySelector('.send-to-pinterest').addEventListener('click', function () {
                if (_this2.validateInputs()) {
                    _this2.createPins();
                }
            });

            document.getElementById('send-all-to-board').addEventListener('change', function (e) {
                var boardValue = e.target.value;

                if (boardValue !== '') {
                    _this2.updateSelectedBoards(boardValue);
                }
            });

            var input = document.getElementById("fileToUpload");
            input.onchange = function (e) {
                return _this2.handleImagesSelected(e);
            };

            // Prepare the preview pin template with names of boards to pin to
            this.loadBoards().then(function (boards) {
                _this2.populateBoardNames(boards);
            });
        }

        /**
         * Loop through the images selected and create new FileReader objects for them,
         * displaying the image preview to the user
         *
         * @param {Event} e The event object
         *
         * @returns {null}
         */

    }, {
        key: 'handleImagesSelected',
        value: function handleImagesSelected(e) {
            var _this3 = this;

            var input = e.target;

            document.querySelector('.page-header').classList.toggle('large', false);
            document.querySelector('.get-started').classList.toggle('hidden', true);
            document.querySelector('.application-container').classList.toggle('expanded', true);
            document.querySelector('.label-text').innerText = 'Add More Images';
            this.previewsPinsContainer.classList.toggle('hidden', false);

            window.setTimeout(function () {
                // Allow time for the CSS animation to run before
                for (var i = 0; i < input.files.length; i++) {
                    var file = input.files[i];
                    var pinPreview = new _PinPreview2.default(file);
                    _this3.previewsPinsContainer.querySelector(".pins-container").appendChild(pinPreview.render());
                }
            }, 300);
        }

        /**
         * Load the users boards
         *
         * @param {Boolean} forceLoad [Optional] Indicates if the API should be queried regardless of DataStore
         *
         * @returns {Promise}
         */

    }, {
        key: 'loadBoards',
        value: function loadBoards() {
            var forceLoad = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            return new Promise(function (resolve, reject) {
                var boards = _DataStore2.default.Get(_DataStore2.default.DATA__BOARDS());
                if (boards !== null && !forceLoad) {
                    resolve(JSON.parse(boards));
                    return;
                }

                _API2.default.Boards().then(function (boards) {
                    _DataStore2.default.Set(_DataStore2.default.DATA__BOARDS(), JSON.stringify(boards));
                    resolve(boards);
                }).catch(function (response) {
                    reject(response);
                });
            });
        }

        /**
         * Populate the <select> of board names with the names returned from Pinterest API
         *
         * @param {Array} boards An array of board objects
         *
         * @return {null}
         */

    }, {
        key: 'populateBoardNames',
        value: function populateBoardNames(boards) {
            var boardNames = document.getElementById('preview-template').content.querySelector(".board-names");
            boardNames.innerHTML = ''; // Remove the 'Loading...' option

            if (boards.length === 0) {
                var option = this.createBoardNameOptionElement({ id: '', name: 'You don\'t have any Pinterest boards!' });
                boardNames.appendChild(option);
                document.querySelector(".send-to-pinterest").classList.toggle('hidden', true); // Can't send to pinterest as the user doesn't have any boards
                return;
            }

            // The user may have seen the message above, gone to Pinterest to create a board, and then come back to click the Refresh Boards button
            document.querySelector(".send-to-pinterest").classList.toggle('hidden', false);

            for (var i = 0; i < boards.length; i++) {
                var board = boards[i];
                var _option = this.createBoardNameOptionElement(board);
                boardNames.appendChild(_option);
            }

            // Update any <select> elements in preview-containers that have already been activated from the template
            var existingBoardNameSelectors = document.querySelectorAll('.board-names');
            for (var _i = 0; _i < existingBoardNameSelectors.length; _i++) {
                var select = existingBoardNameSelectors[_i];
                select.innerHTML = '';

                // If the board being looped is the 'send all to board', need to add the blank option
                if (select.id = 'send-all-to-board') {
                    var _option2 = this.createBoardNameOptionElement({ name: '---', id: '' });
                    select.appendChild(_option2);
                }

                for (var _i2 = 0; _i2 < boards.length; _i2++) {
                    var _board = boards[_i2];
                    var _option3 = this.createBoardNameOptionElement(_board);
                    select.appendChild(_option3);
                }
            }
        }

        /**
         * Create a new <option> element for the provided board object
         *
         * @param {Object} board Object representing a Pinterest board
         *
         * @returns {Element}
         */

    }, {
        key: 'createBoardNameOptionElement',
        value: function createBoardNameOptionElement(board) {
            var option = document.createElement('option');
            option.value = board.id;
            option.innerText = board.name;
            return option;
        }

        /**
         * Update the selected board in each of the pin previews to match the one selected in the
         * Send all images to board drop down
         *
         * @param {int} newBoard The ID value of the board to be selected
         */

    }, {
        key: 'updateSelectedBoards',
        value: function updateSelectedBoards(newBoard) {
            // Loop through all existing board name selectors and update their values to match the one just selected
            var boardNameSelectors = document.querySelectorAll('.preview-pin-board-select');
            for (var i = 0; i < boardNameSelectors.length; i++) {
                var boardNameSelect = boardNameSelectors[i];

                boardNameSelect.value = newBoard;
            }
        }

        /**
         * Loop through all pin previews and make sure a note has been set
         *
         * If a required field isn't filled in, it will be marked as invalid, but also set up with tabIndexing,
         * so that users can click tab to easily move between only the notes that aren't filled in yet
         *
         * @returns {Boolean}
         */

    }, {
        key: 'validateInputs',
        value: function validateInputs() {
            var previews = document.querySelectorAll('.preview-container');
            var error = false;
            var tabIndex = 1;

            var _loop = function _loop(i) {
                var preview = previews[i];

                var noteContainer = preview.querySelector(".note-container");
                var note = noteContainer.querySelector(".note").value;

                if (note === '') {
                    var _note = preview.querySelector('.note');
                    _note.classList.toggle('invalid', true);
                    _note.tabIndex = tabIndex;
                    if (tabIndex === 1) {
                        _note.focus();
                        noteContainer.dataset.balloon = noteContainer.dataset.tooltip;

                        // @todo: This needs to be cleaned up and removed from here. Also need to make sure it only triggers once
                        _note.addEventListener('blur', function (e) {
                            noteContainer.removeAttribute('data-balloon');
                        });
                    }
                    tabIndex++;
                    error = true;
                }
            };

            for (var i = 0; i < previews.length; i++) {
                _loop(i);
            }

            return error === false;
        }

        /**
         * Loop through all of the <img> elements, and call the API function to create a pin,
         * with all the relevant information
         *
         * @returns {null}
         */

    }, {
        key: 'createPins',
        value: function createPins() {
            var previews = document.querySelectorAll('.preview-container');

            var _loop2 = function _loop2(i) {
                var preview = previews[i];

                // Skip any images that have already been pinned in this session
                if (preview.dataset.pinned) {
                    return 'continue';
                }

                var imageData = preview.querySelector('.preview-image').src;
                var note = preview.querySelector(".note").value;
                var board = preview.querySelector(".board-names").value;
                var link = preview.querySelector(".link").value;

                preview.classList.toggle('sending', true);

                _API2.default.CreatePin({
                    board: board, // Sending just the board ID. Documentation doesn't say this can be done, but it works. Reason is: spaces in board names
                    image_base64: imageData,
                    note: note,
                    link: link
                }).then(function (response) {
                    preview.dataset.pinned = true;
                    preview.classList.toggle('sending', false);
                    _Analytics2.default.PinCreated();
                });
            };

            for (var i = 0; i < previews.length; i++) {
                var _ret2 = _loop2(i);

                if (_ret2 === 'continue') continue;
            }
        }
    }]);

    return BulkPinner;
}();

exports.default = BulkPinner;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* Bulk Pinner - Create multiple pins in your Pinterest boards at once
 * Copyright (C) 2017 Luke Denton
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * Class API
 *
 * Interface for communicating with the API
 */
var ClearPreviews = function () {
    function ClearPreviews() {
        _classCallCheck(this, ClearPreviews);

        this.clearButton = document.querySelector(".clear-completed");
        this.clearAllButton = document.querySelector(".clear-all");

        this.attachListeners();
    }

    /**
     * Attach listeners to the clear buttons
     *
     * @returns {null}
     */


    _createClass(ClearPreviews, [{
        key: "attachListeners",
        value: function attachListeners() {
            var _this = this;

            this.clearButton.addEventListener('click', function (e) {
                _this.clearCompleted();
            });

            this.clearAllButton.addEventListener('click', function (e) {
                _this.clearAll();
            });
        }

        /**
         * Clear preview pins that have been uploaded to pinterest
         *
         * @returns {null}
         */

    }, {
        key: "clearCompleted",
        value: function clearCompleted() {
            var completedPins = document.querySelectorAll(".preview-container[data-pinned='true']");
            this.clear(completedPins);
        }

        /**
         * Clear all preview pins
         *
         * @returns {null}
         */

    }, {
        key: "clearAll",
        value: function clearAll() {
            var previewPins = document.querySelectorAll(".preview-container");
            this.clear(previewPins);
        }

        /**
         * Remove elements from the DOM
         *
         * @param {NodeList} elements Array of elements to remove
         */

    }, {
        key: "clear",
        value: function clear(elements) {
            for (var i = 0; i < elements.length; i++) {
                elements[i].remove();
            }

            if (document.querySelectorAll(".preview-container").length === 0) {
                document.querySelector('.page-header').classList.toggle('large', true);
                document.querySelector('.get-started').classList.toggle('hidden', false);
                document.querySelector('.application-container').classList.toggle('expanded', false);
                document.querySelector('.label-text').innerText = 'Choose Images';
                document.querySelector('.preview-pins-container').classList.toggle('hidden', true);
            }
        }
    }]);

    return ClearPreviews;
}();

exports.default = ClearPreviews;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* Bulk Pinner - Create multiple pins in your Pinterest boards at once
 * Copyright (C) 2017 Luke Denton
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * Class PinPreview
 */
var PinPreview = function () {
    function PinPreview(file) {
        _classCallCheck(this, PinPreview);

        this.file = file;
    }

    /**
     * Render a pin preview template instance
     *
     * @returns {Node}
     */


    _createClass(PinPreview, [{
        key: 'render',
        value: function render() {
            var template = document.getElementById('preview-template');
            var instance = document.importNode(template.content, true);

            var reader = new FileReader();

            reader.onload = function (theFile) {
                var previewContainer = theFile.querySelector('.preview-container');
                var previewImage = previewContainer.querySelector(".preview-image");

                return function (e) {
                    previewImage.src = e.target.result;
                    previewImage.classList.toggle('loaded', true);
                };
            }(instance);

            reader.abort();
            reader.readAsDataURL(this.file);

            return instance;
        }
    }]);

    return PinPreview;
}();

exports.default = PinPreview;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* Bulk Pinner - Create multiple pins in your Pinterest boards at once
 * Copyright (C) 2017 Luke Denton
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * Class API
 *
 * Interface for communicating with the API
 */
var DataStore = function () {
  function DataStore() {
    _classCallCheck(this, DataStore);
  }

  _createClass(DataStore, null, [{
    key: 'DATA__ACCESS_TOKEN',


    /**
     * String constant for access token key
     *
     * @returns {string}
     */
    value: function DATA__ACCESS_TOKEN() {
      return 'pinterest_accessToken';
    }
  }, {
    key: 'DATA__BOARDS',
    value: function DATA__BOARDS() {
      return 'pinterest_boards';
    }

    /**
     * Set value in the data store
     *
     * @param {string} key   The identifying key for the value
     * @param {string} value The value for the identifying key
     *
     * @returns {null}
     */

  }, {
    key: 'Set',
    value: function Set(key, value) {
      window.localStorage.setItem(key, value);
    }

    /**
     * Get the value for a given key
     *
     * @param {string} key The identifying key for the value
     *
     * @returns {string}
     */

  }, {
    key: 'Get',
    value: function Get(key) {
      return window.localStorage.getItem(key);
    }
  }]);

  return DataStore;
}();

exports.default = DataStore;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _BulkPinner = __webpack_require__(0);

var _BulkPinner2 = _interopRequireDefault(_BulkPinner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bulkPinner = new _BulkPinner2.default(); /* Bulk Pinner - Create multiple pins in your Pinterest boards at once
                                              * Copyright (C) 2017 Luke Denton
                                              *
                                              * This program is free software: you can redistribute it and/or modify
                                              * it under the terms of the GNU General Public License as published by
                                              * the Free Software Foundation; either version 3 of the License, or
                                              * (at your option) any later version.
                                              *
                                              * This program is distributed in the hope that it will be useful,
                                              * but WITHOUT ANY WARRANTY; without even the implied warranty of
                                              * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
                                              * GNU General Public License for more details.
                                              *
                                              * You should have received a copy of the GNU General Public License
                                              * along with this program.  If not, see <http://www.gnu.org/licenses/>.
                                              */

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var type = __webpack_require__(6);

var jsonpID = 0,
    document = window.document,
    key,
    name,
    rscript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    scriptTypeRE = /^(?:text|application)\/javascript/i,
    xmlTypeRE = /^(?:text|application)\/xml/i,
    jsonType = 'application/json',
    htmlType = 'text/html',
    blankRE = /^\s*$/;

var ajax = module.exports = function (options) {
  var settings = extend({}, options || {});
  for (key in ajax.settings) {
    if (settings[key] === undefined) settings[key] = ajax.settings[key];
  }ajaxStart(settings);

  if (!settings.crossDomain) settings.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(settings.url) && RegExp.$2 != window.location.host;

  var dataType = settings.dataType,
      hasPlaceholder = /=\?/.test(settings.url);
  if (dataType == 'jsonp' || hasPlaceholder) {
    if (!hasPlaceholder) settings.url = appendQuery(settings.url, 'callback=?');
    return ajax.JSONP(settings);
  }

  if (!settings.url) settings.url = window.location.toString();
  serializeData(settings);

  var mime = settings.accepts[dataType],
      baseHeaders = {},
      protocol = /^([\w-]+:)\/\//.test(settings.url) ? RegExp.$1 : window.location.protocol,
      xhr = ajax.settings.xhr(),
      abortTimeout;

  if (!settings.crossDomain) baseHeaders['X-Requested-With'] = 'XMLHttpRequest';
  if (mime) {
    baseHeaders['Accept'] = mime;
    if (mime.indexOf(',') > -1) mime = mime.split(',', 2)[0];
    xhr.overrideMimeType && xhr.overrideMimeType(mime);
  }
  if (settings.contentType || settings.data && settings.type.toUpperCase() != 'GET') baseHeaders['Content-Type'] = settings.contentType || 'application/x-www-form-urlencoded';
  settings.headers = extend(baseHeaders, settings.headers || {});

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      clearTimeout(abortTimeout);
      var result,
          error = false;
      if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304 || xhr.status == 0 && protocol == 'file:') {
        dataType = dataType || mimeToDataType(xhr.getResponseHeader('content-type'));
        result = xhr.responseText;

        try {
          if (dataType == 'script') (1, eval)(result);else if (dataType == 'xml') result = xhr.responseXML;else if (dataType == 'json') result = blankRE.test(result) ? null : JSON.parse(result);
        } catch (e) {
          error = e;
        }

        if (error) ajaxError(error, 'parsererror', xhr, settings);else ajaxSuccess(result, xhr, settings);
      } else {
        ajaxError(null, 'error', xhr, settings);
      }
    }
  };

  var async = 'async' in settings ? settings.async : true;
  xhr.open(settings.type, settings.url, async);

  for (name in settings.headers) {
    xhr.setRequestHeader(name, settings.headers[name]);
  }if (ajaxBeforeSend(xhr, settings) === false) {
    xhr.abort();
    return false;
  }

  if (settings.timeout > 0) abortTimeout = setTimeout(function () {
    xhr.onreadystatechange = empty;
    xhr.abort();
    ajaxError(null, 'timeout', xhr, settings);
  }, settings.timeout);

  // avoid sending empty string (#319)
  xhr.send(settings.data ? settings.data : null);
  return xhr;
};

// trigger a custom event and return false if it was cancelled
function triggerAndReturn(context, eventName, data) {
  //todo: Fire off some events
  //var event = $.Event(eventName)
  //$(context).trigger(event, data)
  return true; //!event.defaultPrevented
}

// trigger an Ajax "global" event
function triggerGlobal(settings, context, eventName, data) {
  if (settings.global) return triggerAndReturn(context || document, eventName, data);
}

// Number of active Ajax requests
ajax.active = 0;

function ajaxStart(settings) {
  if (settings.global && ajax.active++ === 0) triggerGlobal(settings, null, 'ajaxStart');
}
function ajaxStop(settings) {
  if (settings.global && ! --ajax.active) triggerGlobal(settings, null, 'ajaxStop');
}

// triggers an extra global event "ajaxBeforeSend" that's like "ajaxSend" but cancelable
function ajaxBeforeSend(xhr, settings) {
  var context = settings.context;
  if (settings.beforeSend.call(context, xhr, settings) === false || triggerGlobal(settings, context, 'ajaxBeforeSend', [xhr, settings]) === false) return false;

  triggerGlobal(settings, context, 'ajaxSend', [xhr, settings]);
}
function ajaxSuccess(data, xhr, settings) {
  var context = settings.context,
      status = 'success';
  settings.success.call(context, data, status, xhr);
  triggerGlobal(settings, context, 'ajaxSuccess', [xhr, settings, data]);
  ajaxComplete(status, xhr, settings);
}
// type: "timeout", "error", "abort", "parsererror"
function ajaxError(error, type, xhr, settings) {
  var context = settings.context;
  settings.error.call(context, xhr, type, error);
  triggerGlobal(settings, context, 'ajaxError', [xhr, settings, error]);
  ajaxComplete(type, xhr, settings);
}
// status: "success", "notmodified", "error", "timeout", "abort", "parsererror"
function ajaxComplete(status, xhr, settings) {
  var context = settings.context;
  settings.complete.call(context, xhr, status);
  triggerGlobal(settings, context, 'ajaxComplete', [xhr, settings]);
  ajaxStop(settings);
}

// Empty function, used as default callback
function empty() {}

ajax.JSONP = function (options) {
  if (!('type' in options)) return ajax(options);

  var callbackName = 'jsonp' + ++jsonpID,
      script = document.createElement('script'),
      abort = function abort() {
    //todo: remove script
    //$(script).remove()
    if (callbackName in window) window[callbackName] = empty;
    ajaxComplete('abort', xhr, options);
  },
      xhr = { abort: abort },
      abortTimeout,
      head = document.getElementsByTagName("head")[0] || document.documentElement;

  if (options.error) script.onerror = function () {
    xhr.abort();
    options.error();
  };

  window[callbackName] = function (data) {
    clearTimeout(abortTimeout);
    //todo: remove script
    //$(script).remove()
    delete window[callbackName];
    ajaxSuccess(data, xhr, options);
  };

  serializeData(options);
  script.src = options.url.replace(/=\?/, '=' + callbackName);

  // Use insertBefore instead of appendChild to circumvent an IE6 bug.
  // This arises when a base node is used (see jQuery bugs #2709 and #4378).
  head.insertBefore(script, head.firstChild);

  if (options.timeout > 0) abortTimeout = setTimeout(function () {
    xhr.abort();
    ajaxComplete('timeout', xhr, options);
  }, options.timeout);

  return xhr;
};

ajax.settings = {
  // Default type of request
  type: 'GET',
  // Callback that is executed before request
  beforeSend: empty,
  // Callback that is executed if the request succeeds
  success: empty,
  // Callback that is executed the the server drops error
  error: empty,
  // Callback that is executed on request complete (both: error and success)
  complete: empty,
  // The context for the callbacks
  context: null,
  // Whether to trigger "global" Ajax events
  global: true,
  // Transport
  xhr: function xhr() {
    return new window.XMLHttpRequest();
  },
  // MIME types mapping
  accepts: {
    script: 'text/javascript, application/javascript',
    json: jsonType,
    xml: 'application/xml, text/xml',
    html: htmlType,
    text: 'text/plain'
  },
  // Whether the request is to another domain
  crossDomain: false,
  // Default timeout
  timeout: 0
};

function mimeToDataType(mime) {
  return mime && (mime == htmlType ? 'html' : mime == jsonType ? 'json' : scriptTypeRE.test(mime) ? 'script' : xmlTypeRE.test(mime) && 'xml') || 'text';
}

function appendQuery(url, query) {
  return (url + '&' + query).replace(/[&?]{1,2}/, '?');
}

// serialize payload and append it to the URL for GET requests
function serializeData(options) {
  if (type(options.data) === 'object') options.data = param(options.data);
  if (options.data && (!options.type || options.type.toUpperCase() == 'GET')) options.url = appendQuery(options.url, options.data);
}

ajax.get = function (url, success) {
  return ajax({ url: url, success: success });
};

ajax.post = function (url, data, success, dataType) {
  if (type(data) === 'function') dataType = dataType || success, success = data, data = null;
  return ajax({ type: 'POST', url: url, data: data, success: success, dataType: dataType });
};

ajax.getJSON = function (url, success) {
  return ajax({ url: url, success: success, dataType: 'json' });
};

var escape = encodeURIComponent;

function serialize(params, obj, traditional, scope) {
  var array = type(obj) === 'array';
  for (var key in obj) {
    var value = obj[key];

    if (scope) key = traditional ? scope : scope + '[' + (array ? '' : key) + ']';
    // handle data in serializeArray() format
    if (!scope && array) params.add(value.name, value.value);
    // recurse into nested objects
    else if (traditional ? type(value) === 'array' : type(value) === 'object') serialize(params, value, traditional, key);else params.add(key, value);
  }
}

function param(obj, traditional) {
  var params = [];
  params.add = function (k, v) {
    this.push(escape(k) + '=' + escape(v));
  };
  serialize(params, obj, traditional);
  return params.join('&').replace('%20', '+');
}

function extend(target) {
  var slice = Array.prototype.slice;
  slice.call(arguments, 1).forEach(function (source) {
    for (key in source) {
      if (source[key] !== undefined) target[key] = source[key];
    }
  });
  return target;
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var toString = Object.prototype.toString;

module.exports = function (val) {
  switch (toString.call(val)) {
    case '[object Function]':
      return 'function';
    case '[object Date]':
      return 'date';
    case '[object RegExp]':
      return 'regexp';
    case '[object Arguments]':
      return 'arguments';
    case '[object Array]':
      return 'array';
    case '[object String]':
      return 'string';
  }

  if ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) == 'object' && val && typeof val.length == 'number') {
    try {
      if (typeof val.callee == 'function') return 'arguments';
    } catch (ex) {
      if (ex instanceof TypeError) {
        return 'arguments';
      }
    }
  }

  if (val === null) return 'null';
  if (val === undefined) return 'undefined';
  if (val && val.nodeType === 1) return 'element';
  if (val === Object(val)) return 'object';

  return typeof val === 'undefined' ? 'undefined' : _typeof(val);
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* Bulk Pinner - Create multiple pins in your Pinterest boards at once
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright (C) 2017 Luke Denton
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * This program is free software: you can redistribute it and/or modify
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * it under the terms of the GNU General Public License as published by
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * the Free Software Foundation; either version 3 of the License, or
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * (at your option) any later version.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * This program is distributed in the hope that it will be useful,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * but WITHOUT ANY WARRANTY; without even the implied warranty of
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * GNU General Public License for more details.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * You should have received a copy of the GNU General Public License
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * along with this program.  If not, see <http://www.gnu.org/licenses/>.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _packingAjax = __webpack_require__(5);

var _packingAjax2 = _interopRequireDefault(_packingAjax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Class AJAX
 *
 * Abstraction of all AJAX interactions
 */
var AJAX = function () {

    /**
     * Class constructor
     *
     * @returns {null}
     */
    function AJAX() {
        _classCallCheck(this, AJAX);

        this.baseUrl = 'https://api.pinterest.com/';
        this.apiVersion = 'v1/';
    }

    /**
     * Build the URL of the appropriate API being called
     *
     * @param {string}  endpoint The API endpoint being queried
     *
     * @returns {string}
     * @private
     */


    _createClass(AJAX, [{
        key: '_buildUrl',
        value: function _buildUrl(endpoint) {
            return this.baseUrl + this.apiVersion + endpoint;
        }

        /**
         * Execute the API query
         *
         * @param {string} endpoint The API endpoint to be queried
         * @param {Object} data     Any additional data required
         * @param {string} type     The type of request being made. E.g. GET, POST etc
         *
         * @returns {Promise}
         * @private
         */

    }, {
        key: '_fetch',
        value: function _fetch(endpoint, data, type) {
            var _this = this;

            return new Promise(function (resolve, reject) {
                var url = _this._buildUrl(endpoint);

                (0, _packingAjax2.default)({
                    url: url,
                    type: type,
                    dataType: 'json',
                    data: data,
                    success: function success(response) {
                        resolve(response);
                    },
                    error: function error(response) {
                        reject(response);
                    }
                });
            });
        }

        /**
         * Helper function for performing a GET request
         *
         * @param {string} endpoint The API endpoint to be queried
         * @param {Object} data     Additional data to be sent with the request
         *
         * @returns {Promise}
         */

    }], [{
        key: 'Get',
        value: function Get(endpoint, data) {
            return new Promise(function (resolve, reject) {
                var ajax = new AJAX();
                ajax._fetch(endpoint, data, 'GET').then(resolve).catch(reject);
            });
        }

        /**
         * Helper function for performing a POST request
         *
         * @param {string} endpoint The API endpoint to be queried
         * @param {Object} data     Additional data to be sent with the request
         *
         * @returns {Promise}
         */

    }, {
        key: 'Post',
        value: function Post(endpoint, data) {
            return new Promise(function (resolve, reject) {
                var ajax = new AJAX();
                ajax._fetch(endpoint, data, 'POST').then(resolve).catch(reject);
            });
        }
    }]);

    return AJAX;
}();

exports.default = AJAX;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* Bulk Pinner - Create multiple pins in your Pinterest boards at once
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright (C) 2017 Luke Denton
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * This program is free software: you can redistribute it and/or modify
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * it under the terms of the GNU General Public License as published by
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * the Free Software Foundation; either version 3 of the License, or
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * (at your option) any later version.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * This program is distributed in the hope that it will be useful,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * but WITHOUT ANY WARRANTY; without even the implied warranty of
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * GNU General Public License for more details.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * You should have received a copy of the GNU General Public License
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * along with this program.  If not, see <http://www.gnu.org/licenses/>.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _AJAX = __webpack_require__(7);

var _AJAX2 = _interopRequireDefault(_AJAX);

var _DataStore = __webpack_require__(3);

var _DataStore2 = _interopRequireDefault(_DataStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Class API
 *
 * Interface for communicating with the API
 */
var API = function () {
    function API() {
        _classCallCheck(this, API);
    }

    _createClass(API, null, [{
        key: 'IsAuthenticated',


        /**
         * Check if a user has authenticated the application. I.e. an access token exists
         *
         * @returns {boolean}
         */
        value: function IsAuthenticated() {
            return _DataStore2.default.Get(_DataStore2.default.DATA__ACCESS_TOKEN()) !== null;
        }

        /**
         * Initialise the Pinterest SDK and call the login function to get an access token
         * Access token information will be set in the Pinterest SDK, however at the moment
         * the SDK is only used here
         *
         * @returns {Promise}
         */

    }, {
        key: 'Login',
        value: function Login() {
            return new Promise(function (resolve, reject) {
                PDK.init({
                    appId: "4927694653406329461", // Change this
                    cookie: true
                });
                PDK.login({ scope: 'read_public, write_public' }, function (_ref) {
                    var session = _ref.session;

                    PDK.setSession(session);
                    resolve(session);
                });
            });
        }

        /**
         * Get cursor of users' Pins
         *
         * @returns {Promise}
         */

    }, {
        key: 'Pins',
        value: function Pins() {
            return new Promise(function (resolve, reject) {
                _AJAX2.default.Post('me/pins/', data).then(resolve).catch(reject);
            });
        }

        /**
         * Get list of users boards
         *
         * @returns {Promise}
         */

    }, {
        key: 'Boards',
        value: function Boards() {
            return new Promise(function (resolve, reject) {
                _AJAX2.default.Get('me/boards/', {
                    access_token: _DataStore2.default.Get(_DataStore2.default.DATA__ACCESS_TOKEN())
                }, true).then(function (_ref2) {
                    var data = _ref2.data;

                    data.sort(function (a, b) {
                        var nameA = a.name.toUpperCase();
                        var nameB = b.name.toUpperCase();
                        if (nameA < nameB) {
                            return -1;
                        }
                        if (nameA > nameB) {
                            return 1;
                        }
                        return 0;
                    });

                    resolve(data);
                });
            });
        }

        /**
         * Send request to Pinterest API to create a new pin
         *
         * @param {Object} data The data to create the pin with
         *
         * @returns {Promise}
         */

    }, {
        key: 'CreatePin',
        value: function CreatePin(data) {
            return new Promise(function (resolve, reject) {
                _AJAX2.default.Post('pins/', _extends({
                    access_token: _DataStore2.default.Get(_DataStore2.default.DATA__ACCESS_TOKEN())
                }, data)).then(resolve).catch(reject);
            });
        }
    }]);

    return API;
}();

exports.default = API;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* Bulk Pinner - Create multiple pins in your Pinterest boards at once
 * Copyright (C) 2017 Luke Denton
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * Class Analytics
 */
var Analytics = function () {
  function Analytics() {
    _classCallCheck(this, Analytics);
  }

  _createClass(Analytics, null, [{
    key: 'PinCreated',


    /**
     * Perform analytics tracking actions relative to a pin being created
     */
    value: function PinCreated() {
      gtag('event', 'pin_created', { 'pins': 1 });
    }
  }]);

  return Analytics;
}();

exports.default = Analytics;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
__webpack_require__(1);
__webpack_require__(4);
module.exports = __webpack_require__(2);


/***/ })
/******/ ]);