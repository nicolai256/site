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


var _AJAX = __webpack_require__(11);

var _AJAX2 = _interopRequireDefault(_AJAX);

var _DataStore = __webpack_require__(2);

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
/* 1 */
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

var _bulletPubsub = __webpack_require__(5);

var _bulletPubsub2 = _interopRequireDefault(_bulletPubsub);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Class Event
 *
 * Wrapper for the event library chosen, preventing the application from being tightly coupled to the library
 *
 * This class will only be used for custom events. Events like click, hover etc will be handled by vanilla JS handlers
 */
var CustomEvent = function () {
  function CustomEvent() {
    _classCallCheck(this, CustomEvent);
  }

  _createClass(CustomEvent, null, [{
    key: 'on',


    /**
     * Wrapper for the .on event listener
     *
     * @param {string}   eventName The name of the event to listen for
     * @param {function} callback  The function to execute when the event is detected
     *
     * @returns {null}
     */
    value: function on(eventName, callback) {
      _bulletPubsub2.default.on(eventName, callback, false);
    }

    /**
     * Wrapper for the .off function
     *
     * @param {string}   eventName The name of the event to remove
     * @param {function} callback  [Optional] The function to remove. If the event listener needs to remain for some instances.
     *
     * @returns {null}
     */

  }, {
    key: 'off',
    value: function off(eventName, callback) {
      _bulletPubsub2.default.off(eventName, callback);
    }

    /**
     * Wrapper for the .once event listener.
     * This listener will only be triggered once, and then removed
     *
     * @param {string}   eventName The name of the event to listen for
     * @param {function} callback  The function to execute when event is detected
     *
     * @returns {null}
     */

  }, {
    key: 'once',
    value: function once(eventName, callback) {
      _bulletPubsub2.default.once(eventName, callback);
    }

    /**
     * Wrapper for the .trigger function, that will trigger an event
     *
     * @param {string} eventName The name of the event to trigger
     * @param {Object} data      [Optional] Custom data to pass to the event listener callback
     *
     * @returns {null}
     */

  }, {
    key: 'trigger',
    value: function trigger(eventName) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _bulletPubsub2.default.trigger(eventName, data);
    }
  }]);

  return CustomEvent;
}();

exports.default = CustomEvent;

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
/* 3 */
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

var _CustomEvent = __webpack_require__(1);

var _CustomEvent2 = _interopRequireDefault(_CustomEvent);

var _ClearPreviews = __webpack_require__(8);

var _ClearPreviews2 = _interopRequireDefault(_ClearPreviews);

var _API = __webpack_require__(0);

var _API2 = _interopRequireDefault(_API);

var _DataStore = __webpack_require__(2);

var _DataStore2 = _interopRequireDefault(_DataStore);

var _PinPreview = __webpack_require__(9);

var _PinPreview2 = _interopRequireDefault(_PinPreview);

var _ErrorUtil = __webpack_require__(13);

var _ErrorUtil2 = _interopRequireDefault(_ErrorUtil);

var _Analytics = __webpack_require__(12);

var _Analytics2 = _interopRequireDefault(_Analytics);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Class Application
 */
var Application = function () {
    function Application() {
        var _this = this;

        _classCallCheck(this, Application);

        this.clearPreviews = new _ClearPreviews2.default();
        this.previewsPinsContainer = document.querySelector('.preview-pins-container');
        this.imageSelectContainer = document.querySelector(".image-select-container");
        this.refreshBoardsButton = document.querySelector('.refresh-boards');
        this.pinsContainer = document.querySelector('.pins-container');
        this.sendToPinterestButton = document.querySelector('.send-to-pinterest');
        this.sendAllToBoardSelect = document.getElementById('send-all-to-board');
        this.fileUploadInput = document.getElementById("fileToUpload");
        this.modalOverlay = document.querySelector('.modal-overlay');

        // Wait until the user is authenticated before showing the main application interface
        _CustomEvent2.default.on('user-authenticated', function () {
            _this.init();
        });
    }

    /**
     * @returns {null}
     */


    _createClass(Application, [{
        key: 'init',
        value: function init() {
            this.showApplicationContainer();
            this.attachListeners();
        }

        /**
         * @returns {null}
         */

    }, {
        key: 'showApplicationContainer',
        value: function showApplicationContainer() {
            this.imageSelectContainer.classList.toggle('hidden', false);
        }

        /**
         * @returns {null}
         */

    }, {
        key: 'hideApplicationContainer',
        value: function hideApplicationContainer() {
            this.imageSelectContainer.classList.toggle('hidden', true);
        }

        /**
         * Attach event listeners
         *
         * @returns {null}
         */

    }, {
        key: 'attachListeners',
        value: function attachListeners() {
            var _this2 = this;

            this.refreshBoardsButton.addEventListener('click', function () {
                _this2.loadBoards(true).then(function (boards) {
                    _this2.populateBoardNames(boards);
                }).catch(function (response) {
                    console.error(response);
                });
            });

            this.pinsContainer.addEventListener('blur', function (e) {
                if (e.target.matches('.note')) {
                    e.target.classList.toggle('invalid', e.target.value !== '');
                }
            });

            this.sendToPinterestButton.addEventListener('click', function () {
                if (_this2.validateInputs()) {
                    _this2.createPins();
                }
            });

            this.sendAllToBoardSelect.addEventListener('change', function (e) {
                var boardValue = e.target.value;

                if (boardValue !== '') {
                    _this2.updateSelectedBoards(boardValue);
                }
            });

            this.fileUploadInput.onchange = function (e) {
                return _this2.handleImagesSelected(e);
            };

            document.querySelector('.privacy-policy-link').addEventListener('click', function (e) {
                _this2.showPrivacyPolicy();
            });

            document.querySelector('.modal-overlay').addEventListener('click', function (e) {
                if (e.target.classList.contains('modal-overlay')) {
                    _this2.hidePrivacyPolicy();
                }
            });

            document.querySelector('.modal-close .close').addEventListener('click', function (e) {
                _this2.hidePrivacyPolicy();
            });

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

            if (input.files.length === 0) {
                return;
            }

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
                if (select.id === 'send-all-to-board') {
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
                delete preview.dataset.pinError; // Remove any previous error that might be displaying

                try {
                    _API2.default.CreatePin({
                        board: board, // Sending just the board ID. Documentation doesn't say this can be done, but it works. Reason is: spaces in board names
                        image_base64: imageData,
                        note: note,
                        link: link
                    }).then(function (response) {
                        preview.dataset.pinned = true;
                        preview.classList.toggle('sending', false);
                        _Analytics2.default.PinCreated();
                    }).catch(function (err) {
                        _ErrorUtil2.default.Log(new Error('Create Pin promise rejected'), {
                            metaData: {
                                'error': err
                            },
                            severity: 'error'
                        });
                    });
                } catch (exception) {
                    _ErrorUtil2.default.Log(new Error('Exception thrown from CreatePin function'), {
                        exception: exception,
                        severity: 'error'
                    });
                }
            };

            for (var i = 0; i < previews.length; i++) {
                var _ret2 = _loop2(i);

                if (_ret2 === 'continue') continue;
            }
        }

        /**
         * Display the privacy policy modal
         *
         * @returns {null}
         */

    }, {
        key: 'showPrivacyPolicy',
        value: function showPrivacyPolicy() {
            this.modalOverlay.classList.remove('hidden');
        }

        /**
         * Hide the privacy policy modal
         *
         * @returns {null}
         */

    }, {
        key: 'hidePrivacyPolicy',
        value: function hidePrivacyPolicy() {
            this.modalOverlay.classList.add('hidden');
        }
    }]);

    return Application;
}();

exports.default = Application;

/***/ }),
/* 4 */
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

var _CustomEvent = __webpack_require__(1);

var _CustomEvent2 = _interopRequireDefault(_CustomEvent);

var _API = __webpack_require__(0);

var _API2 = _interopRequireDefault(_API);

var _DataStore = __webpack_require__(2);

var _DataStore2 = _interopRequireDefault(_DataStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Class Authorization
 */
var Authorization = function () {
    function Authorization() {
        var _this = this;

        _classCallCheck(this, Authorization);

        this.authenticationContainer = document.querySelector(".authentication-container");
        this.authenticationButton = document.querySelector(".authenticate-button");

        // Listen for the instruction that the user isn't authenticated yet
        _CustomEvent2.default.on('user-not-authenticated', function () {
            _this.init();
        });
    }

    /**
     * Initialise the authorization section of the application
     *
     * @returns {null}
     */


    _createClass(Authorization, [{
        key: 'init',
        value: function init() {
            this.showAuthenticationContainer();
            this.attachListeners();
        }

        /**
         * @returns {null}
         */

    }, {
        key: 'showAuthenticationContainer',
        value: function showAuthenticationContainer() {
            this.authenticationContainer.classList.toggle('hidden', false);
            _CustomEvent2.default.trigger('authentication-shown');
        }

        /**
         * @returns {null}
         */

    }, {
        key: 'hideAuthenticationContainer',
        value: function hideAuthenticationContainer() {
            this.authenticationContainer.classList.toggle('hidden', true);
            _CustomEvent2.default.trigger('authentication-hidden');
        }

        /**
         * Attach event listeners
         *
         * @returns {null}
         */

    }, {
        key: 'attachListeners',
        value: function attachListeners() {
            var _this2 = this;

            this.authenticationButton.addEventListener('click', function () {
                _API2.default.Login().then(function (_ref) {
                    var accessToken = _ref.accessToken;

                    _DataStore2.default.Set(_DataStore2.default.DATA__ACCESS_TOKEN(), accessToken);
                    _CustomEvent2.default.trigger('user-authenticated');
                }).catch(function (response) {
                    console.error(response);
                });
            });

            // Make sure the authentication container is hidden if the application container gets shown
            _CustomEvent2.default.on('user-authenticated', function (e) {
                _this2.hideAuthenticationContainer();
            });
        }
    }]);

    return Authorization;
}();

exports.default = Authorization;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function () {

    'use strict';

    function Bullet() {
        // ------------------------------------------------------------------------------------------
        // -- Custom Errors
        // ------------------------------------------------------------------------------------------
        function ParamCountError(methodName, expectedParamsString, paramCount) {

            this.message = 'Bullet:: [' + methodName + '] ' + expectedParamsString + ', but received: ' + paramCount;
            var error = new Error(this.message);
            if (typeof error.stack !== 'undefined') this.stack = error.stack;
        }
        ParamCountError.prototype = new Error();
        ParamCountError.prototype.name = ParamCountError.name;
        ParamCountError.prototype.constructor = ParamCountError;

        function ParamTypeError(methodName, parameterName, parameter, expectedType) {

            this.message = 'Bullet:: [' + methodName + '] Expected parameter - ' + parameterName + ' - to be type: ' + expectedType + ', but received type: ' + (typeof parameter === 'undefined' ? 'undefined' : _typeof(parameter));
            var error = new TypeError(this.message);
            if (typeof error.stack !== 'undefined') this.stack = error.stack;
        }
        ParamTypeError.prototype = new TypeError();
        ParamTypeError.prototype.name = ParamTypeError.name;
        ParamTypeError.prototype.constructor = ParamTypeError;

        function EventNameLengthError(methodName) {

            this.message = 'Bullet:: [' + methodName + '] Expected event name parameter to be longer than 0 characters';
            var error = new Error(this.message);
            if (typeof error.stack !== 'undefined') this.stack = error.stack;
        }
        EventNameLengthError.prototype = new Error();
        EventNameLengthError.prototype.name = EventNameLengthError.name;
        EventNameLengthError.prototype.constructor = EventNameLengthError;

        function EventNamesArrayLengthError(methodName) {

            this.message = 'Bullet:: [' + methodName + '] Expected event names array to contain one or more event names';
            var error = new Error(this.message);
            if (typeof error.stack !== 'undefined') this.stack = error.stack;
        }
        EventNamesArrayLengthError.prototype = new Error();
        EventNamesArrayLengthError.prototype.name = EventNamesArrayLengthError.name;
        EventNamesArrayLengthError.prototype.constructor = EventNamesArrayLengthError;

        function UndeclaredEventError(methodName, eventName) {

            this.message = 'Bullet:: [' + methodName + '] Event string: "' + eventName + '" does not exist within the events dictionary\nPlease use the Bullet.addEventName method to add this string.';

            var error = new Error(this.message);
            if (typeof error.stack !== 'undefined') this.stack = error.stack;
        }
        UndeclaredEventError.prototype = new Error();
        UndeclaredEventError.prototype.name = UndeclaredEventError.name;
        UndeclaredEventError.prototype.constructor = UndeclaredEventError;

        function UnmappedEventError(methodName, eventName) {

            this.message = 'Bullet:: [' + methodName + '] Event string: "' + eventName + '" is not mapped to any callbacks\nPlease use the Bullet.on method to map this string to a callback.';

            var error = new Error(this.message);
            if (typeof error.stack !== 'undefined') this.stack = error.stack;
        }
        UnmappedEventError.prototype = new Error();
        UnmappedEventError.prototype.name = UnmappedEventError.name;
        UnmappedEventError.prototype.constructor = UnmappedEventError;

        var _CALLBACK_NAMESPACE = '__bullet_pubsub__';
        // ------------------------------------------------------------------------------------------
        // -- Private variables
        // ------------------------------------------------------------------------------------------
        var _self = this;
        var _mappings = {};
        var _strictMode = false;
        var _triggerAsync = true;

        // Expose custom error type constructors (for testing), but use an underscore to imply privacy.
        _self._errors = {
            ParamCountError: ParamCountError,
            ParamTypeError: ParamTypeError,
            EventNameLengthError: EventNameLengthError,
            EventNamesArrayLengthError: EventNamesArrayLengthError,
            UndeclaredEventError: UndeclaredEventError,
            UnmappedEventError: UnmappedEventError
        };

        // ------------------------------------------------------------------------------------------
        // -- Public variables
        // ------------------------------------------------------------------------------------------
        _self.events = {};

        // ------------------------------------------------------------------------------------------
        // -- Private methods
        // ------------------------------------------------------------------------------------------
        function _runCallback(eventName, data) {
            for (var id in _mappings[eventName].callbacks) {
                var callbackObject = _mappings[eventName].callbacks[id];

                if (typeof callbackObject.cb === 'function') callbackObject.cb(data);
                if (typeof callbackObject.once === 'boolean' && callbackObject.once === true) _self.off(eventName, callbackObject.cb);
            }
        }

        function _cloneCallbacks(callbacks) {
            var clonedCallbacks = {};

            for (var callbackName in callbacks) {

                clonedCallbacks[callbackName] = {
                    cb: callbacks[callbackName].cb,
                    once: callbacks[callbackName].once
                };
            }

            return clonedCallbacks;
        }

        function _deleteAllCallbackReferencesForEvent(eventName) {
            for (var id in _mappings[eventName].callbacks) {
                var callback = _mappings[eventName].callbacks[id].cb;

                callback[_CALLBACK_NAMESPACE].totalEvents--;

                if (callback[_CALLBACK_NAMESPACE].totalEvents === 0) {
                    delete callback[_CALLBACK_NAMESPACE];
                } else {
                    delete callback[_CALLBACK_NAMESPACE][eventName];
                }
            }
        }

        function _deleteAllCallbackReferences() {
            for (var eventName in _mappings) {
                _deleteAllCallbackReferencesForEvent(eventName);
            }
        }

        // Expose _getMappings method (for testing), but use an underscore to imply privacy.
        _self._getMappings = function () {

            // Return a dictionary object that has no effect on app state to ensure '_mappings'
            // stays private, even if the value returned from this method is modified.
            var clonedMappings = {};

            for (var mapping in _mappings) {
                clonedMappings[mapping] = {
                    callbacks: _cloneCallbacks(_mappings[mapping].callbacks),
                    totalCallbacks: _mappings[mapping].totalCallbacks
                };
            }

            return clonedMappings;
        };

        // ------------------------------------------------------------------------------------------
        // -- Public methods
        // ------------------------------------------------------------------------------------------
        _self.on = function (eventName, fn, once) {
            if (arguments.length < 2 || arguments.length > 3) {
                throw new ParamCountError('on', 'Expected between 2 and 3 parameters', arguments.length);
            }

            if (typeof eventName !== 'string') {
                throw new ParamTypeError('on', 'event name', eventName, 'string');
            } else if (eventName.length === 0) {
                throw new EventNameLengthError('on');
            } else if (_strictMode && typeof _self.events[eventName] === 'undefined') {
                throw new UndeclaredEventError('on', eventName);
            }

            if (typeof fn !== 'function') {
                throw new ParamTypeError('on', 'callback', fn, 'function');
            }

            if (typeof once !== 'undefined' && typeof once !== 'boolean') {
                throw new ParamTypeError('on', 'once', once, 'boolean');
            }

            // Create a reference between the callback and stored event.
            var callbackId = null;

            // If the named event object already exists in the dictionary...
            if (typeof _mappings[eventName] !== 'undefined') {
                // Attempt to get the callback ID from the callback itself.
                if (typeof fn[_CALLBACK_NAMESPACE] === 'undefined') {
                    fn[_CALLBACK_NAMESPACE] = {
                        totalEvents: 0
                    };
                }

                // Add a new callback object to the existing event object.
                if (typeof fn[_CALLBACK_NAMESPACE][eventName] === 'undefined') {
                    callbackId = _mappings[eventName].totalCallbacks;

                    _mappings[eventName].totalCallbacks++;

                    _mappings[eventName].callbacks[callbackId] = {
                        cb: fn,
                        once: typeof once === 'boolean' ? once : false
                    };

                    // On the callback, create a reference to the event mapping.
                    fn[_CALLBACK_NAMESPACE][eventName] = callbackId;
                    fn[_CALLBACK_NAMESPACE].totalEvents++;
                }

                if (typeof once === 'boolean') {
                    // Get the callback ID from the value of the existing event name key.
                    callbackId = fn[_CALLBACK_NAMESPACE][eventName];

                    // The function already exists, so update it's 'once' value.
                    _mappings[eventName].callbacks[callbackId].once = once;
                }
            } else {
                // Create a new event object in the dictionary with the specified name and callback.
                _mappings[eventName] = {
                    callbacks: {}
                };

                callbackId = 0;

                _mappings[eventName].callbacks[callbackId] = { cb: fn, once: !!once };
                _mappings[eventName].totalCallbacks = 1;

                // On the callback, create a reference to the event mapping.
                if (typeof fn[_CALLBACK_NAMESPACE] === 'undefined') {
                    fn[_CALLBACK_NAMESPACE] = {};
                    fn[_CALLBACK_NAMESPACE].totalEvents = 1;
                } else {
                    fn[_CALLBACK_NAMESPACE].totalEvents++;
                }

                fn[_CALLBACK_NAMESPACE][eventName] = callbackId;
            }
        };

        _self.once = function (eventName, fn) {
            if (arguments.length !== 2) {
                throw new ParamCountError('once', 'Expected 2 parameters', arguments.length);
            } else if (typeof eventName !== 'string') {
                throw new ParamTypeError('once', 'event name', eventName, 'string');
            } else if (eventName.length === 0) {
                throw new EventNameLengthError('once');
            } else if (_strictMode && typeof _self.events[eventName] === 'undefined') {
                throw new UndeclaredEventError('once', eventName);
            }

            if (typeof fn !== 'function') {
                throw new ParamTypeError('once', 'callback', fn, 'function');
            }

            _self.on(eventName, fn, true);
        };

        _self.off = function (eventName, fn) {
            if (arguments.length === 0) {
                // delete all references to Bullet that exist on mapped callbacks.
                _deleteAllCallbackReferences();

                // Remove all mappings from the dictionary.
                _mappings = {};

                return;
            } else if (typeof eventName !== 'string') {
                throw new ParamTypeError('off', 'event name', eventName, 'string');
            } else if (eventName.length === 0) {
                throw new EventNameLengthError('off');
            } else if (_strictMode && typeof _self.events[eventName] === 'undefined') {
                throw new UndeclaredEventError('off', eventName);
            }

            if (typeof _mappings[eventName] === 'undefined') {
                // There is no mapping to remove, so return silently.
                return;
            }

            // Remove just the function, if passed as a parameter and in the dictionary.
            if (typeof fn === 'function') {
                // if (typeof fn[_CALLBACK_NAMESPACE] === 'undefined' || typeof fn[_CALLBACK_NAMESPACE][eventName] === 'undefined')
                // {
                //     // TODO: Throw error here if in strict mode.
                // }

                // Retrieve a reference to the stored event from the callback.
                var id = fn[_CALLBACK_NAMESPACE][eventName];
                var fnToRemove = _mappings[eventName].callbacks[id];

                if (typeof fnToRemove !== 'undefined') {
                    // delete the callback object from the dictionary.
                    delete _mappings[eventName].callbacks[id];

                    // delete the event reference on the callback function.
                    delete fn[_CALLBACK_NAMESPACE][eventName];

                    _mappings[eventName].totalCallbacks--;
                    fn[_CALLBACK_NAMESPACE].totalEvents--;

                    if (_mappings[eventName].totalCallbacks === 0) {
                        // There are no more functions in the dictionary that are
                        // registered to this event, so delete the named event object.
                        delete _mappings[eventName];
                    }

                    if (fn[_CALLBACK_NAMESPACE].totalEvents === 0) {
                        // There are no more events registered on this callback,
                        // so delete the Bullet namespace.
                        delete fn[_CALLBACK_NAMESPACE];
                    }
                }
            } else if (typeof fn !== 'undefined') {
                throw new ParamTypeError('off', 'callback', fn, 'function');
            } else {
                // No callback was passed to the 'off' method...

                // For each callback in _mappings[eventName], delete the reference to
                // the specified event name on the callback itself.
                _deleteAllCallbackReferencesForEvent(eventName);

                // Delete all functions in the dictionary that are registered to this
                // event by deleting the named event object.
                delete _mappings[eventName];
            }
        };

        // Replace a single mapped callback for the specified event name with a new callback.
        _self.replaceCallback = function (eventName, oldFn, newFn, once) {

            if (typeof eventName !== 'string') {
                throw new ParamTypeError('replaceCallback', 'event name', eventName, 'string');
            } else if (eventName.length === 0) {
                throw new EventNameLengthError('replaceCallback');
            } else if (typeof _mappings[eventName] === 'undefined') {
                throw new UnmappedEventError('replaceCallback', eventName);
            } else if (_strictMode && typeof _self.events[eventName] === 'undefined') {
                throw new UndeclaredEventError('replaceCallback', eventName);
            }

            if (typeof oldFn !== 'function') {
                throw new ParamTypeError('replaceCallback', 'callback', oldFn, 'function');
            }

            if (typeof newFn !== 'function') {
                throw new ParamTypeError('replaceCallback', 'callback', newFn, 'function');
            }

            if (typeof once !== 'undefined' && typeof once !== 'boolean') {
                throw new ParamTypeError('replaceCallback', 'once', once, 'boolean');
            }

            _self.off(eventName, oldFn);
            _self.on(eventName, newFn, once);
        };

        // Replace all of the specified event name’s mapped callbacks with the specified callback.
        _self.replaceAllCallbacks = function (eventName, newFn, once) {

            if (typeof eventName !== 'string') {
                throw new ParamTypeError('replace', 'event name', eventName, 'string');
            } else if (eventName.length === 0) {
                throw new EventNameLengthError('replace');
            } else if (typeof _mappings[eventName] === 'undefined') {
                throw new UnmappedEventError('replace', eventName);
            } else if (_strictMode && typeof _self.events[eventName] === 'undefined') {
                throw new UndeclaredEventError('replace', eventName);
            }

            if (typeof newFn !== 'function') {
                throw new ParamTypeError('replace', 'callback', newFn, 'function');
            }

            if (typeof once !== 'undefined' && typeof once !== 'boolean') {
                throw new ParamTypeError('replace', 'once', once, 'boolean');
            }

            _self.off(eventName);
            _self.on(eventName, newFn, once);
        };

        _self.trigger = function (eventName, data) {
            if (typeof eventName !== 'string') {
                throw new ParamTypeError('trigger', 'event name', eventName, 'string');
            } else if (eventName.length === 0) {
                throw new EventNameLengthError('trigger');
            } else if (_strictMode && typeof _self.events[eventName] === 'undefined') {
                throw new UndeclaredEventError('trigger', eventName);
            }

            if (typeof _mappings[eventName] === 'undefined') {
                if (_strictMode) throw new UnmappedEventError('trigger', eventName);

                // Return silently if not in strict mode.
                return;
            }

            // Check whether or not this is a browser environment.
            if (_triggerAsync && typeof window !== 'undefined') {
                window.setTimeout(function () {
                    _runCallback(eventName, data);
                }, 0);
            } else {
                _runCallback(eventName, data);
            }
        };

        _self.addEventName = function (eventName) {

            if (typeof eventName !== 'string') {
                throw new ParamTypeError('addEventName', 'event name', eventName, 'string');
            } else if (eventName.length === 0) {
                throw new EventNameLengthError('addEventName');
            }

            _self.events[eventName] = eventName;
        };

        _self.addMultipleEventNames = function (eventNames) {

            if (!(eventNames instanceof Array)) {
                throw new ParamTypeError('addMultipleEventNames', 'event names', eventNames, 'array');
            } else if (eventNames.length === 0) {
                throw new EventNamesArrayLengthError('addMultipleEventNames');
            }

            var i = 0;
            var length = eventNames.length;

            for (i; i < length; i++) {
                var currentEventName = eventNames[i];

                _self.addEventName(currentEventName);
            }
        };

        _self.removeEventName = function (eventName) {

            if (typeof eventName !== 'string') {
                throw new ParamTypeError('removeEventName', 'event name', eventName, 'string');
            } else if (eventName.length === 0) {
                throw new EventNameLengthError('removeEventName');
            }

            if (_self.events[eventName]) delete _self.events[eventName];
        };

        _self.getStrictMode = function () {

            // Return a boolean that doesn't directly point to the internal '_strictMode' property.
            return _strictMode === true ? true : false;
        };

        _self.setStrictMode = function (useStrictMode) {

            if (typeof useStrictMode !== 'boolean') throw new ParamTypeError('setStrictMode', 'strict mode', useStrictMode, 'boolean');

            _strictMode = useStrictMode;
        };

        _self.getTriggerAsync = function () {

            // Return a boolean that doesn't directly point to the internal '_triggerAsync' property.
            return _triggerAsync === true ? true : false;
        };

        _self.setTriggerAsync = function (useAsync) {

            if (typeof useAsync !== 'boolean') throw new ParamTypeError('setTriggerAsync', 'trigger async', useAsync, 'boolean');

            _triggerAsync = useAsync;
        };

        // TODO : Create an 'addMultipleEventNames' method with an array of strings passed as a param.
        // - include type checks for string while looping over the array.

        // TODO : Create a 'replaceAllEventNames' method with an array of strings passed as a param.
        // - include type checks for string while looping over the array.

        // TODO : Create a 'removeAllEventNames' method. No params necessary.
        // – Internally this could simply call 'replaceAllEventNames' and pass an empty array as a param.

        // TODO : Create an 'onAny' method with an array of strings passed as the first param and a single callback as the second.
        // - include type checks for string while looping over the array.

        // TODO : Create an 'onMultiple' method with an array of flat objects passed as a param.
        // - example of required param structure:
        // [{eventName: 'someEvent', callback: someCallback, once: false}, {eventName: 'anotherEvent', callback: anotherCallback, once: true}]
    }

    // ------------------------------------------------------------------------------------------
    // -- Module definition
    // ------------------------------------------------------------------------------------------
    // Check for AMD/Module support, otherwise define Bullet as a global variable.

    if (true) {
        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
            return new Bullet();
        }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = new Bullet();
    } else {
        window.Bullet = new Bullet();
    }
})();

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var type = __webpack_require__(7);

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
/* 7 */
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
/* 8 */
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

            this.resetSendAllToBoard();
        }

        /**
         * Reset the selected value in the Send all to board drop down
         *
         * @returns {null}
         */

    }, {
        key: "resetSendAllToBoard",
        value: function resetSendAllToBoard() {
            document.querySelector("#send-all-to-board").value = "";
        }
    }]);

    return ClearPreviews;
}();

exports.default = ClearPreviews;

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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Authorization = __webpack_require__(4);

var _Authorization2 = _interopRequireDefault(_Authorization);

var _Application = __webpack_require__(3);

var _Application2 = _interopRequireDefault(_Application);

var _API = __webpack_require__(0);

var _API2 = _interopRequireDefault(_API);

var _CustomEvent = __webpack_require__(1);

var _CustomEvent2 = _interopRequireDefault(_CustomEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Create instances of application classes
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

new _Authorization2.default();
new _Application2.default();

// Determine if used is logged in and publish appropriate status
if (!_API2.default.IsAuthenticated()) {
    _CustomEvent2.default.trigger('user-not-authenticated');
} else {
    _CustomEvent2.default.trigger('user-authenticated');
}

if (window.location.origin !== 'https://bulkpinner.github.io') {
    Bugsnag.releaseStage = 'development';
    Bugsnag.notifyReleaseStages = ['production', 'staging'];
}

/***/ }),
/* 11 */
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


var _packingAjax = __webpack_require__(6);

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
/* 12 */
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
/* 13 */
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
 * Class ErrorUtil
 *
 * Interface for abstracting the error reporting service
 */
var ErrorUtil = function () {
    function ErrorUtil() {
        _classCallCheck(this, ErrorUtil);
    }

    _createClass(ErrorUtil, null, [{
        key: 'Log',


        /**
         * Log an error to the bug tracking system
         *
         * @param {Error}  error   A description of the error
         * @param {Object} options Extra details of the error
         *
         * @returns {null}
         */
        value: function Log(error, options) {
            if (window.location.origin === 'https://bulkpinner.github.io') {
                Bugsnag.notifyException(error, options);
            } else {
                console.error(error);
                console.error(options);
            }
        }
    }]);

    return ErrorUtil;
}();

exports.default = ErrorUtil;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNjk0NDhlMmEwODE1NmZkNGI1NjgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3NlcnZpY2VzL0FQSS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc2VydmljZXMvQ3VzdG9tRXZlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3NlcnZpY2VzL0RhdGFTdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdmlld3MvQXBwbGljYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3ZpZXdzL0F1dGhvcml6YXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9idWxsZXQtcHVic3ViL2Rpc3QvYnVsbGV0LmpzIiwid2VicGFjazovLy8uL34vcGFja2luZy1hamF4L2luZGV4LmpzIiwid2VicGFjazovLy8uL34vdHlwZS1vZi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvQ2xlYXJQcmV2aWV3cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvUGluUHJldmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc2VydmljZXMvQUpBWC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc2VydmljZXMvQW5hbHl0aWNzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9zZXJ2aWNlcy9FcnJvclV0aWwuanMiXSwibmFtZXMiOlsiQVBJIiwiR2V0IiwiREFUQV9fQUNDRVNTX1RPS0VOIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJQREsiLCJpbml0IiwiYXBwSWQiLCJjb29raWUiLCJsb2dpbiIsInNjb3BlIiwic2Vzc2lvbiIsInNldFNlc3Npb24iLCJQb3N0IiwiZGF0YSIsInRoZW4iLCJjYXRjaCIsImFjY2Vzc190b2tlbiIsInNvcnQiLCJhIiwiYiIsIm5hbWVBIiwibmFtZSIsInRvVXBwZXJDYXNlIiwibmFtZUIiLCJDdXN0b21FdmVudCIsImV2ZW50TmFtZSIsImNhbGxiYWNrIiwib24iLCJvZmYiLCJvbmNlIiwidHJpZ2dlciIsIkRhdGFTdG9yZSIsImtleSIsInZhbHVlIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImdldEl0ZW0iLCJBcHBsaWNhdGlvbiIsImNsZWFyUHJldmlld3MiLCJwcmV2aWV3c1BpbnNDb250YWluZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpbWFnZVNlbGVjdENvbnRhaW5lciIsInJlZnJlc2hCb2FyZHNCdXR0b24iLCJwaW5zQ29udGFpbmVyIiwic2VuZFRvUGludGVyZXN0QnV0dG9uIiwic2VuZEFsbFRvQm9hcmRTZWxlY3QiLCJnZXRFbGVtZW50QnlJZCIsImZpbGVVcGxvYWRJbnB1dCIsIm1vZGFsT3ZlcmxheSIsInNob3dBcHBsaWNhdGlvbkNvbnRhaW5lciIsImF0dGFjaExpc3RlbmVycyIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJsb2FkQm9hcmRzIiwicG9wdWxhdGVCb2FyZE5hbWVzIiwiYm9hcmRzIiwiY29uc29sZSIsImVycm9yIiwicmVzcG9uc2UiLCJlIiwidGFyZ2V0IiwibWF0Y2hlcyIsInZhbGlkYXRlSW5wdXRzIiwiY3JlYXRlUGlucyIsImJvYXJkVmFsdWUiLCJ1cGRhdGVTZWxlY3RlZEJvYXJkcyIsIm9uY2hhbmdlIiwiaGFuZGxlSW1hZ2VzU2VsZWN0ZWQiLCJzaG93UHJpdmFjeVBvbGljeSIsImNvbnRhaW5zIiwiaGlkZVByaXZhY3lQb2xpY3kiLCJpbnB1dCIsImZpbGVzIiwibGVuZ3RoIiwiaW5uZXJUZXh0Iiwic2V0VGltZW91dCIsImkiLCJmaWxlIiwicGluUHJldmlldyIsImFwcGVuZENoaWxkIiwicmVuZGVyIiwiZm9yY2VMb2FkIiwiREFUQV9fQk9BUkRTIiwiSlNPTiIsInBhcnNlIiwiQm9hcmRzIiwiU2V0Iiwic3RyaW5naWZ5IiwiYm9hcmROYW1lcyIsImNvbnRlbnQiLCJpbm5lckhUTUwiLCJvcHRpb24iLCJjcmVhdGVCb2FyZE5hbWVPcHRpb25FbGVtZW50IiwiaWQiLCJib2FyZCIsImV4aXN0aW5nQm9hcmROYW1lU2VsZWN0b3JzIiwicXVlcnlTZWxlY3RvckFsbCIsInNlbGVjdCIsImNyZWF0ZUVsZW1lbnQiLCJuZXdCb2FyZCIsImJvYXJkTmFtZVNlbGVjdG9ycyIsImJvYXJkTmFtZVNlbGVjdCIsInByZXZpZXdzIiwidGFiSW5kZXgiLCJwcmV2aWV3Iiwibm90ZUNvbnRhaW5lciIsIm5vdGUiLCJmb2N1cyIsImRhdGFzZXQiLCJiYWxsb29uIiwidG9vbHRpcCIsInJlbW92ZUF0dHJpYnV0ZSIsInBpbm5lZCIsImltYWdlRGF0YSIsInNyYyIsImxpbmsiLCJwaW5FcnJvciIsIkNyZWF0ZVBpbiIsImltYWdlX2Jhc2U2NCIsIlBpbkNyZWF0ZWQiLCJMb2ciLCJFcnJvciIsIm1ldGFEYXRhIiwiZXJyIiwic2V2ZXJpdHkiLCJleGNlcHRpb24iLCJyZW1vdmUiLCJhZGQiLCJBdXRob3JpemF0aW9uIiwiYXV0aGVudGljYXRpb25Db250YWluZXIiLCJhdXRoZW50aWNhdGlvbkJ1dHRvbiIsInNob3dBdXRoZW50aWNhdGlvbkNvbnRhaW5lciIsIkxvZ2luIiwiYWNjZXNzVG9rZW4iLCJoaWRlQXV0aGVudGljYXRpb25Db250YWluZXIiLCJCdWxsZXQiLCJQYXJhbUNvdW50RXJyb3IiLCJtZXRob2ROYW1lIiwiZXhwZWN0ZWRQYXJhbXNTdHJpbmciLCJwYXJhbUNvdW50IiwibWVzc2FnZSIsInN0YWNrIiwicHJvdG90eXBlIiwiY29uc3RydWN0b3IiLCJQYXJhbVR5cGVFcnJvciIsInBhcmFtZXRlck5hbWUiLCJwYXJhbWV0ZXIiLCJleHBlY3RlZFR5cGUiLCJUeXBlRXJyb3IiLCJFdmVudE5hbWVMZW5ndGhFcnJvciIsIkV2ZW50TmFtZXNBcnJheUxlbmd0aEVycm9yIiwiVW5kZWNsYXJlZEV2ZW50RXJyb3IiLCJVbm1hcHBlZEV2ZW50RXJyb3IiLCJfQ0FMTEJBQ0tfTkFNRVNQQUNFIiwiX3NlbGYiLCJfbWFwcGluZ3MiLCJfc3RyaWN0TW9kZSIsIl90cmlnZ2VyQXN5bmMiLCJfZXJyb3JzIiwiZXZlbnRzIiwiX3J1bkNhbGxiYWNrIiwiY2FsbGJhY2tzIiwiY2FsbGJhY2tPYmplY3QiLCJjYiIsIl9jbG9uZUNhbGxiYWNrcyIsImNsb25lZENhbGxiYWNrcyIsImNhbGxiYWNrTmFtZSIsIl9kZWxldGVBbGxDYWxsYmFja1JlZmVyZW5jZXNGb3JFdmVudCIsInRvdGFsRXZlbnRzIiwiX2RlbGV0ZUFsbENhbGxiYWNrUmVmZXJlbmNlcyIsIl9nZXRNYXBwaW5ncyIsImNsb25lZE1hcHBpbmdzIiwibWFwcGluZyIsInRvdGFsQ2FsbGJhY2tzIiwiZm4iLCJhcmd1bWVudHMiLCJjYWxsYmFja0lkIiwiZm5Ub1JlbW92ZSIsInJlcGxhY2VDYWxsYmFjayIsIm9sZEZuIiwibmV3Rm4iLCJyZXBsYWNlQWxsQ2FsbGJhY2tzIiwiYWRkRXZlbnROYW1lIiwiYWRkTXVsdGlwbGVFdmVudE5hbWVzIiwiZXZlbnROYW1lcyIsIkFycmF5IiwiY3VycmVudEV2ZW50TmFtZSIsInJlbW92ZUV2ZW50TmFtZSIsImdldFN0cmljdE1vZGUiLCJzZXRTdHJpY3RNb2RlIiwidXNlU3RyaWN0TW9kZSIsImdldFRyaWdnZXJBc3luYyIsInNldFRyaWdnZXJBc3luYyIsInVzZUFzeW5jIiwiZGVmaW5lIiwibW9kdWxlIiwiZXhwb3J0cyIsInR5cGUiLCJyZXF1aXJlIiwianNvbnBJRCIsInJzY3JpcHQiLCJzY3JpcHRUeXBlUkUiLCJ4bWxUeXBlUkUiLCJqc29uVHlwZSIsImh0bWxUeXBlIiwiYmxhbmtSRSIsImFqYXgiLCJvcHRpb25zIiwic2V0dGluZ3MiLCJleHRlbmQiLCJ1bmRlZmluZWQiLCJhamF4U3RhcnQiLCJjcm9zc0RvbWFpbiIsInRlc3QiLCJ1cmwiLCJSZWdFeHAiLCIkMiIsImxvY2F0aW9uIiwiaG9zdCIsImRhdGFUeXBlIiwiaGFzUGxhY2Vob2xkZXIiLCJhcHBlbmRRdWVyeSIsIkpTT05QIiwidG9TdHJpbmciLCJzZXJpYWxpemVEYXRhIiwibWltZSIsImFjY2VwdHMiLCJiYXNlSGVhZGVycyIsInByb3RvY29sIiwiJDEiLCJ4aHIiLCJhYm9ydFRpbWVvdXQiLCJpbmRleE9mIiwic3BsaXQiLCJvdmVycmlkZU1pbWVUeXBlIiwiY29udGVudFR5cGUiLCJoZWFkZXJzIiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVhZHlTdGF0ZSIsImNsZWFyVGltZW91dCIsInJlc3VsdCIsInN0YXR1cyIsIm1pbWVUb0RhdGFUeXBlIiwiZ2V0UmVzcG9uc2VIZWFkZXIiLCJyZXNwb25zZVRleHQiLCJldmFsIiwicmVzcG9uc2VYTUwiLCJhamF4RXJyb3IiLCJhamF4U3VjY2VzcyIsImFzeW5jIiwib3BlbiIsInNldFJlcXVlc3RIZWFkZXIiLCJhamF4QmVmb3JlU2VuZCIsImFib3J0IiwidGltZW91dCIsImVtcHR5Iiwic2VuZCIsInRyaWdnZXJBbmRSZXR1cm4iLCJjb250ZXh0IiwidHJpZ2dlckdsb2JhbCIsImdsb2JhbCIsImFjdGl2ZSIsImFqYXhTdG9wIiwiYmVmb3JlU2VuZCIsImNhbGwiLCJzdWNjZXNzIiwiYWpheENvbXBsZXRlIiwiY29tcGxldGUiLCJzY3JpcHQiLCJoZWFkIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJkb2N1bWVudEVsZW1lbnQiLCJvbmVycm9yIiwicmVwbGFjZSIsImluc2VydEJlZm9yZSIsImZpcnN0Q2hpbGQiLCJYTUxIdHRwUmVxdWVzdCIsImpzb24iLCJ4bWwiLCJodG1sIiwidGV4dCIsInF1ZXJ5IiwicGFyYW0iLCJnZXQiLCJwb3N0IiwiZ2V0SlNPTiIsImVzY2FwZSIsImVuY29kZVVSSUNvbXBvbmVudCIsInNlcmlhbGl6ZSIsInBhcmFtcyIsIm9iaiIsInRyYWRpdGlvbmFsIiwiYXJyYXkiLCJrIiwidiIsInB1c2giLCJqb2luIiwic2xpY2UiLCJmb3JFYWNoIiwic291cmNlIiwiT2JqZWN0IiwidmFsIiwiY2FsbGVlIiwiZXgiLCJub2RlVHlwZSIsIkNsZWFyUHJldmlld3MiLCJjbGVhckJ1dHRvbiIsImNsZWFyQWxsQnV0dG9uIiwiY2xlYXJDb21wbGV0ZWQiLCJjbGVhckFsbCIsImNvbXBsZXRlZFBpbnMiLCJjbGVhciIsInByZXZpZXdQaW5zIiwiZWxlbWVudHMiLCJyZXNldFNlbmRBbGxUb0JvYXJkIiwiUGluUHJldmlldyIsInRlbXBsYXRlIiwiaW5zdGFuY2UiLCJpbXBvcnROb2RlIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsInByZXZpZXdDb250YWluZXIiLCJ0aGVGaWxlIiwicHJldmlld0ltYWdlIiwicmVhZEFzRGF0YVVSTCIsIklzQXV0aGVudGljYXRlZCIsIm9yaWdpbiIsIkJ1Z3NuYWciLCJyZWxlYXNlU3RhZ2UiLCJub3RpZnlSZWxlYXNlU3RhZ2VzIiwiQUpBWCIsImJhc2VVcmwiLCJhcGlWZXJzaW9uIiwiZW5kcG9pbnQiLCJfYnVpbGRVcmwiLCJfZmV0Y2giLCJBbmFseXRpY3MiLCJndGFnIiwiRXJyb3JVdGlsIiwibm90aWZ5RXhjZXB0aW9uIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7cWpCQ2hFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUE7Ozs7O0lBS3FCQSxHOzs7Ozs7Ozs7QUFFakI7Ozs7OzBDQUt5QjtBQUNy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QUFNSDs7Ozs7O2tCQXJGZ0IyVSxJOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCckI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBOzs7SUFHcUJNLFM7Ozs7Ozs7OztBQUVqQjs7O2lDQUdvQjtBQUNoQkMsV0FBSyxPQUFMLEVBQWMsYUFBZCxFQUE2QixFQUFDLFFBQVEsQ0FBVCxFQUE3QjtBQUNIOzs7Ozs7a0JBUGdCRCxTOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCckI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBOzs7OztJQUtxQkUsUzs7Ozs7Ozs7O0FBRWpCOzs7Ozs7Ozs0QkFRVzFSLEssRUFBT3NKLE8sRUFBUztBQUN2QixnQkFBSWhMLE9BQU8wTCxRQUFQLENBQWdCOEcsTUFBaEIsS0FBMkIsOEJBQS9CLEVBQStEO0FBQzNEQyx3QkFBUVksZUFBUixDQUF3QjNSLEtBQXhCLEVBQStCc0osT0FBL0I7QUFDSCxhQUZELE1BRU87QUFDSHZKLHdCQUFRQyxLQUFSLENBQWNBLEtBQWQ7QUFDQUQsd0JBQVFDLEtBQVIsQ0FBY3NKLE9BQWQ7QUFDSDtBQUNKOzs7Ozs7a0JBakJnQm9JLFMiLCJmaWxlIjoiNjk0NDhlMmEwODE1NmZkNGI1NjguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA2OTQ0OGUyYTA4MTU2ZmQ0YjU2OCIsIi8qIEJ1bGsgUGlubmVyIC0gQ3JlYXRlIG11bHRpcGxlIHBpbnMgaW4geW91ciBQaW50ZXJlc3QgYm9hcmRzIGF0IG9uY2VcclxuICogQ29weXJpZ2h0IChDKSAyMDE3IEx1a2UgRGVudG9uXHJcbiAqXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XHJcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XHJcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb247IGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXHJcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXHJcbiAqXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxyXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxyXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXHJcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqXHJcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXHJcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxyXG4gKi9cclxuaW1wb3J0IEFKQVggZnJvbSAnc2VydmljZXMvQUpBWCc7XHJcbmltcG9ydCBEYXRhU3RvcmUgZnJvbSAnc2VydmljZXMvRGF0YVN0b3JlJztcclxuXHJcbi8qKlxyXG4gKiBDbGFzcyBBUElcclxuICpcclxuICogSW50ZXJmYWNlIGZvciBjb21tdW5pY2F0aW5nIHdpdGggdGhlIEFQSVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQVBJIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENoZWNrIGlmIGEgdXNlciBoYXMgYXV0aGVudGljYXRlZCB0aGUgYXBwbGljYXRpb24uIEkuZS4gYW4gYWNjZXNzIHRva2VuIGV4aXN0c1xyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgSXNBdXRoZW50aWNhdGVkKCkge1xyXG4gICAgICAgIHJldHVybiBEYXRhU3RvcmUuR2V0KERhdGFTdG9yZS5EQVRBX19BQ0NFU1NfVE9LRU4oKSkgIT09IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXNlIHRoZSBQaW50ZXJlc3QgU0RLIGFuZCBjYWxsIHRoZSBsb2dpbiBmdW5jdGlvbiB0byBnZXQgYW4gYWNjZXNzIHRva2VuXHJcbiAgICAgKiBBY2Nlc3MgdG9rZW4gaW5mb3JtYXRpb24gd2lsbCBiZSBzZXQgaW4gdGhlIFBpbnRlcmVzdCBTREssIGhvd2V2ZXIgYXQgdGhlIG1vbWVudFxyXG4gICAgICogdGhlIFNESyBpcyBvbmx5IHVzZWQgaGVyZVxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgTG9naW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgUERLLmluaXQoe1xyXG4gICAgICAgICAgICAgICAgYXBwSWQ6IFwiNDkyNzY5NDY1MzQwNjMyOTQ2MVwiLCAvLyBDaGFuZ2UgdGhpc1xyXG4gICAgICAgICAgICAgICAgY29va2llOiB0cnVlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBQREsubG9naW4oe3Njb3BlOiAncmVhZF9wdWJsaWMsIHdyaXRlX3B1YmxpYyd9LCAoe3Nlc3Npb259KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBQREsuc2V0U2Vzc2lvbihzZXNzaW9uKTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoc2Vzc2lvbik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgY3Vyc29yIG9mIHVzZXJzJyBQaW5zXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge1Byb21pc2V9XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBQaW5zKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIEFKQVguUG9zdCgnbWUvcGlucy8nLCBkYXRhKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzb2x2ZSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChyZWplY3QpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IGxpc3Qgb2YgdXNlcnMgYm9hcmRzXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge1Byb21pc2V9XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBCb2FyZHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgQUpBWC5HZXQoJ21lL2JvYXJkcy8nLCB7XHJcbiAgICAgICAgICAgICAgICBhY2Nlc3NfdG9rZW46IERhdGFTdG9yZS5HZXQoRGF0YVN0b3JlLkRBVEFfX0FDQ0VTU19UT0tFTigpKVxyXG4gICAgICAgICAgICB9LCB0cnVlKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHtkYXRhfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmFtZUEgPSBhLm5hbWUudG9VcHBlckNhc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5hbWVCID0gYi5uYW1lLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuYW1lQSA8IG5hbWVCKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5hbWVBID4gbmFtZUIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNlbmQgcmVxdWVzdCB0byBQaW50ZXJlc3QgQVBJIHRvIGNyZWF0ZSBhIG5ldyBwaW5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YSBUaGUgZGF0YSB0byBjcmVhdGUgdGhlIHBpbiB3aXRoXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge1Byb21pc2V9XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBDcmVhdGVQaW4oZGF0YSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIEFKQVguUG9zdCgncGlucy8nLCB7XHJcbiAgICAgICAgICAgICAgICBhY2Nlc3NfdG9rZW46IERhdGFTdG9yZS5HZXQoRGF0YVN0b3JlLkRBVEFfX0FDQ0VTU19UT0tFTigpKSxcclxuICAgICAgICAgICAgICAgIC4uLmRhdGFcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzb2x2ZSlcclxuICAgICAgICAgICAgLmNhdGNoKHJlamVjdCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL3NlcnZpY2VzL0FQSS5qcyIsIi8qIEJ1bGsgUGlubmVyIC0gQ3JlYXRlIG11bHRpcGxlIHBpbnMgaW4geW91ciBQaW50ZXJlc3QgYm9hcmRzIGF0IG9uY2VcbiAqIENvcHlyaWdodCAoQykgMjAxNyBMdWtlIERlbnRvblxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbjsgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cblxuaW1wb3J0IEJ1bGxldCBmcm9tICdidWxsZXQtcHVic3ViJztcblxuLyoqXG4gKiBDbGFzcyBFdmVudFxuICpcbiAqIFdyYXBwZXIgZm9yIHRoZSBldmVudCBsaWJyYXJ5IGNob3NlbiwgcHJldmVudGluZyB0aGUgYXBwbGljYXRpb24gZnJvbSBiZWluZyB0aWdodGx5IGNvdXBsZWQgdG8gdGhlIGxpYnJhcnlcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgb25seSBiZSB1c2VkIGZvciBjdXN0b20gZXZlbnRzLiBFdmVudHMgbGlrZSBjbGljaywgaG92ZXIgZXRjIHdpbGwgYmUgaGFuZGxlZCBieSB2YW5pbGxhIEpTIGhhbmRsZXJzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1c3RvbUV2ZW50IHtcblxuICAgIC8qKlxuICAgICAqIFdyYXBwZXIgZm9yIHRoZSAub24gZXZlbnQgbGlzdGVuZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSAgIGV2ZW50TmFtZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnQgdG8gbGlzdGVuIGZvclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrICBUaGUgZnVuY3Rpb24gdG8gZXhlY3V0ZSB3aGVuIHRoZSBldmVudCBpcyBkZXRlY3RlZFxuICAgICAqXG4gICAgICogQHJldHVybnMge251bGx9XG4gICAgICovXG4gICAgc3RhdGljIG9uKGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgQnVsbGV0Lm9uKGV2ZW50TmFtZSwgY2FsbGJhY2ssIGZhbHNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXcmFwcGVyIGZvciB0aGUgLm9mZiBmdW5jdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9ICAgZXZlbnROYW1lIFRoZSBuYW1lIG9mIHRoZSBldmVudCB0byByZW1vdmVcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayAgW09wdGlvbmFsXSBUaGUgZnVuY3Rpb24gdG8gcmVtb3ZlLiBJZiB0aGUgZXZlbnQgbGlzdGVuZXIgbmVlZHMgdG8gcmVtYWluIGZvciBzb21lIGluc3RhbmNlcy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtudWxsfVxuICAgICAqL1xuICAgIHN0YXRpYyBvZmYoZXZlbnROYW1lLCBjYWxsYmFjaykge1xuICAgICAgICBCdWxsZXQub2ZmKGV2ZW50TmFtZSwgY2FsbGJhY2spO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdyYXBwZXIgZm9yIHRoZSAub25jZSBldmVudCBsaXN0ZW5lci5cbiAgICAgKiBUaGlzIGxpc3RlbmVyIHdpbGwgb25seSBiZSB0cmlnZ2VyZWQgb25jZSwgYW5kIHRoZW4gcmVtb3ZlZFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9ICAgZXZlbnROYW1lIFRoZSBuYW1lIG9mIHRoZSBldmVudCB0byBsaXN0ZW4gZm9yXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgIFRoZSBmdW5jdGlvbiB0byBleGVjdXRlIHdoZW4gZXZlbnQgaXMgZGV0ZWN0ZWRcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtudWxsfVxuICAgICAqL1xuICAgIHN0YXRpYyBvbmNlKGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgQnVsbGV0Lm9uY2UoZXZlbnROYW1lLCBjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV3JhcHBlciBmb3IgdGhlIC50cmlnZ2VyIGZ1bmN0aW9uLCB0aGF0IHdpbGwgdHJpZ2dlciBhbiBldmVudFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnQgdG8gdHJpZ2dlclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhICAgICAgW09wdGlvbmFsXSBDdXN0b20gZGF0YSB0byBwYXNzIHRvIHRoZSBldmVudCBsaXN0ZW5lciBjYWxsYmFja1xuICAgICAqXG4gICAgICogQHJldHVybnMge251bGx9XG4gICAgICovXG4gICAgc3RhdGljIHRyaWdnZXIoZXZlbnROYW1lLCBkYXRhID0ge30pIHtcbiAgICAgICAgQnVsbGV0LnRyaWdnZXIoZXZlbnROYW1lLCBkYXRhKVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9zZXJ2aWNlcy9DdXN0b21FdmVudC5qcyIsIi8qIEJ1bGsgUGlubmVyIC0gQ3JlYXRlIG11bHRpcGxlIHBpbnMgaW4geW91ciBQaW50ZXJlc3QgYm9hcmRzIGF0IG9uY2VcbiAqIENvcHlyaWdodCAoQykgMjAxNyBMdWtlIERlbnRvblxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbjsgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cblxuLyoqXG4gKiBDbGFzcyBBUElcbiAqXG4gKiBJbnRlcmZhY2UgZm9yIGNvbW11bmljYXRpbmcgd2l0aCB0aGUgQVBJXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGFTdG9yZSB7XG5cbiAgICAvKipcbiAgICAgKiBTdHJpbmcgY29uc3RhbnQgZm9yIGFjY2VzcyB0b2tlbiBrZXlcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgc3RhdGljIERBVEFfX0FDQ0VTU19UT0tFTigpIHtcbiAgICAgICAgcmV0dXJuICdwaW50ZXJlc3RfYWNjZXNzVG9rZW4nO1xuICAgIH1cblxuICAgIHN0YXRpYyBEQVRBX19CT0FSRFMoKSB7XG4gICAgICAgIHJldHVybiAncGludGVyZXN0X2JvYXJkcyc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHZhbHVlIGluIHRoZSBkYXRhIHN0b3JlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5ICAgVGhlIGlkZW50aWZ5aW5nIGtleSBmb3IgdGhlIHZhbHVlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIFRoZSB2YWx1ZSBmb3IgdGhlIGlkZW50aWZ5aW5nIGtleVxuICAgICAqXG4gICAgICogQHJldHVybnMge251bGx9XG4gICAgICovXG4gICAgc3RhdGljIFNldChrZXksIHZhbHVlKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIHZhbHVlIGZvciBhIGdpdmVuIGtleVxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUgaWRlbnRpZnlpbmcga2V5IGZvciB0aGUgdmFsdWVcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgc3RhdGljIEdldChrZXkpIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9zZXJ2aWNlcy9EYXRhU3RvcmUuanMiLCIvKiBCdWxrIFBpbm5lciAtIENyZWF0ZSBtdWx0aXBsZSBwaW5zIGluIHlvdXIgUGludGVyZXN0IGJvYXJkcyBhdCBvbmNlXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTcgTHVrZSBEZW50b25cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb247IGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5cbmltcG9ydCBDdXN0b21FdmVudCBmcm9tICdzZXJ2aWNlcy9DdXN0b21FdmVudCc7XG5pbXBvcnQgQ2xlYXJQcmV2aWV3cyBmcm9tIFwiQ2xlYXJQcmV2aWV3c1wiO1xuaW1wb3J0IEFQSSBmcm9tICdzZXJ2aWNlcy9BUEknO1xuaW1wb3J0IERhdGFTdG9yZSBmcm9tICdzZXJ2aWNlcy9EYXRhU3RvcmUnO1xuaW1wb3J0IFBpblByZXZpZXcgZnJvbSAnUGluUHJldmlldyc7XG5pbXBvcnQgRXJyb3JVdGlsIGZyb20gJ3NlcnZpY2VzL0Vycm9yVXRpbCc7XG5pbXBvcnQgQW5hbHl0aWNzIGZyb20gJ3NlcnZpY2VzL0FuYWx5dGljcyc7XG5cbi8qKlxuICogQ2xhc3MgQXBwbGljYXRpb25cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwbGljYXRpb24ge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY2xlYXJQcmV2aWV3cyA9IG5ldyBDbGVhclByZXZpZXdzKCk7XG4gICAgICAgIHRoaXMucHJldmlld3NQaW5zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZXZpZXctcGlucy1jb250YWluZXInKTtcbiAgICAgICAgdGhpcy5pbWFnZVNlbGVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW1hZ2Utc2VsZWN0LWNvbnRhaW5lclwiKTtcbiAgICAgICAgdGhpcy5yZWZyZXNoQm9hcmRzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlZnJlc2gtYm9hcmRzJyk7XG4gICAgICAgIHRoaXMucGluc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5waW5zLWNvbnRhaW5lcicpO1xuICAgICAgICB0aGlzLnNlbmRUb1BpbnRlcmVzdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZW5kLXRvLXBpbnRlcmVzdCcpO1xuICAgICAgICB0aGlzLnNlbmRBbGxUb0JvYXJkU2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbmQtYWxsLXRvLWJvYXJkJyk7XG4gICAgICAgIHRoaXMuZmlsZVVwbG9hZElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaWxlVG9VcGxvYWRcIik7XG4gICAgICAgIHRoaXMubW9kYWxPdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLW92ZXJsYXknKTtcblxuICAgICAgICAvLyBXYWl0IHVudGlsIHRoZSB1c2VyIGlzIGF1dGhlbnRpY2F0ZWQgYmVmb3JlIHNob3dpbmcgdGhlIG1haW4gYXBwbGljYXRpb24gaW50ZXJmYWNlXG4gICAgICAgIEN1c3RvbUV2ZW50Lm9uKCd1c2VyLWF1dGhlbnRpY2F0ZWQnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybnMge251bGx9XG4gICAgICovXG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5zaG93QXBwbGljYXRpb25Db250YWluZXIoKTtcbiAgICAgICAgdGhpcy5hdHRhY2hMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJucyB7bnVsbH1cbiAgICAgKi9cbiAgICBzaG93QXBwbGljYXRpb25Db250YWluZXIoKSB7XG4gICAgICAgIHRoaXMuaW1hZ2VTZWxlY3RDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJywgZmFsc2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm5zIHtudWxsfVxuICAgICAqL1xuICAgIGhpZGVBcHBsaWNhdGlvbkNvbnRhaW5lcigpIHtcbiAgICAgICAgdGhpcy5pbWFnZVNlbGVjdENvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nLCB0cnVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBdHRhY2ggZXZlbnQgbGlzdGVuZXJzXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7bnVsbH1cbiAgICAgKi9cbiAgICBhdHRhY2hMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHRoaXMucmVmcmVzaEJvYXJkc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubG9hZEJvYXJkcyh0cnVlKVxuICAgICAgICAgICAgLnRoZW4oYm9hcmRzID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVsYXRlQm9hcmROYW1lcyhib2FyZHMpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihyZXNwb25zZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5waW5zQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBlID0+IHtcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKCcubm90ZScpKSB7XG4gICAgICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnaW52YWxpZCcsIGUudGFyZ2V0LnZhbHVlICE9PSAnJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc2VuZFRvUGludGVyZXN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMudmFsaWRhdGVJbnB1dHMoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlUGlucygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNlbmRBbGxUb0JvYXJkU2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGUgPT4ge1xuICAgICAgICAgICAgY29uc3QgYm9hcmRWYWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuXG4gICAgICAgICAgICBpZiAoYm9hcmRWYWx1ZSAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVNlbGVjdGVkQm9hcmRzKGJvYXJkVmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmZpbGVVcGxvYWRJbnB1dC5vbmNoYW5nZSA9IGUgPT4gdGhpcy5oYW5kbGVJbWFnZXNTZWxlY3RlZChlKTtcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpdmFjeS1wb2xpY3ktbGluaycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNob3dQcml2YWN5UG9saWN5KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1vdmVybGF5JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ21vZGFsLW92ZXJsYXknKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaGlkZVByaXZhY3lQb2xpY3koKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWNsb3NlIC5jbG9zZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhpZGVQcml2YWN5UG9saWN5KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFByZXBhcmUgdGhlIHByZXZpZXcgcGluIHRlbXBsYXRlIHdpdGggbmFtZXMgb2YgYm9hcmRzIHRvIHBpbiB0b1xuICAgICAgICB0aGlzLmxvYWRCb2FyZHMoKS50aGVuKGJvYXJkcyA9PiB7XG4gICAgICAgICAgICB0aGlzLnBvcHVsYXRlQm9hcmROYW1lcyhib2FyZHMpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvb3AgdGhyb3VnaCB0aGUgaW1hZ2VzIHNlbGVjdGVkIGFuZCBjcmVhdGUgbmV3IEZpbGVSZWFkZXIgb2JqZWN0cyBmb3IgdGhlbSxcbiAgICAgKiBkaXNwbGF5aW5nIHRoZSBpbWFnZSBwcmV2aWV3IHRvIHRoZSB1c2VyXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBlIFRoZSBldmVudCBvYmplY3RcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtudWxsfVxuICAgICAqL1xuICAgIGhhbmRsZUltYWdlc1NlbGVjdGVkKGUpIHtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBlLnRhcmdldDtcblxuICAgICAgICBpZiAoaW5wdXQuZmlsZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZS1oZWFkZXInKS5jbGFzc0xpc3QudG9nZ2xlKCdsYXJnZScsIGZhbHNlKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdldC1zdGFydGVkJykuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJywgdHJ1ZSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcHBsaWNhdGlvbi1jb250YWluZXInKS5jbGFzc0xpc3QudG9nZ2xlKCdleHBhbmRlZCcsIHRydWUpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGFiZWwtdGV4dCcpLmlubmVyVGV4dCA9ICdBZGQgTW9yZSBJbWFnZXMnO1xuICAgICAgICB0aGlzLnByZXZpZXdzUGluc0NvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nLCBmYWxzZSk7XG5cbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4geyAvLyBBbGxvdyB0aW1lIGZvciB0aGUgQ1NTIGFuaW1hdGlvbiB0byBydW4gYmVmb3JlXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMCA7IGkgPCBpbnB1dC5maWxlcy5sZW5ndGggOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgZmlsZSA9IGlucHV0LmZpbGVzW2ldO1xuICAgICAgICAgICAgICAgIGxldCBwaW5QcmV2aWV3ID0gbmV3IFBpblByZXZpZXcoZmlsZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wcmV2aWV3c1BpbnNDb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5waW5zLWNvbnRhaW5lclwiKS5hcHBlbmRDaGlsZChwaW5QcmV2aWV3LnJlbmRlcigpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMzAwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb2FkIHRoZSB1c2VycyBib2FyZHNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gZm9yY2VMb2FkIFtPcHRpb25hbF0gSW5kaWNhdGVzIGlmIHRoZSBBUEkgc2hvdWxkIGJlIHF1ZXJpZWQgcmVnYXJkbGVzcyBvZiBEYXRhU3RvcmVcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgICAqL1xuICAgIGxvYWRCb2FyZHMoZm9yY2VMb2FkID0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGJvYXJkcyA9IERhdGFTdG9yZS5HZXQoRGF0YVN0b3JlLkRBVEFfX0JPQVJEUygpKTtcbiAgICAgICAgICAgIGlmIChib2FyZHMgIT09IG51bGwgJiYgIWZvcmNlTG9hZCkge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoSlNPTi5wYXJzZShib2FyZHMpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEFQSS5Cb2FyZHMoKVxuICAgICAgICAgICAgLnRoZW4oKGJvYXJkcykgPT4ge1xuICAgICAgICAgICAgICAgIERhdGFTdG9yZS5TZXQoRGF0YVN0b3JlLkRBVEFfX0JPQVJEUygpLCBKU09OLnN0cmluZ2lmeShib2FyZHMpKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKGJvYXJkcyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHJlamVjdChyZXNwb25zZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUG9wdWxhdGUgdGhlIDxzZWxlY3Q+IG9mIGJvYXJkIG5hbWVzIHdpdGggdGhlIG5hbWVzIHJldHVybmVkIGZyb20gUGludGVyZXN0IEFQSVxuICAgICAqXG4gICAgICogQHBhcmFtIHtBcnJheX0gYm9hcmRzIEFuIGFycmF5IG9mIGJvYXJkIG9iamVjdHNcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge251bGx9XG4gICAgICovXG4gICAgcG9wdWxhdGVCb2FyZE5hbWVzKGJvYXJkcykge1xuICAgICAgICBjb25zdCBib2FyZE5hbWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXZpZXctdGVtcGxhdGUnKS5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9hcmQtbmFtZXNcIik7XG4gICAgICAgIGJvYXJkTmFtZXMuaW5uZXJIVE1MID0gJyc7IC8vIFJlbW92ZSB0aGUgJ0xvYWRpbmcuLi4nIG9wdGlvblxuXG4gICAgICAgIGlmIChib2FyZHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBsZXQgb3B0aW9uID0gdGhpcy5jcmVhdGVCb2FyZE5hbWVPcHRpb25FbGVtZW50KHtpZDogJycsIG5hbWU6IGBZb3UgZG9uJ3QgaGF2ZSBhbnkgUGludGVyZXN0IGJvYXJkcyFgfSk7XG4gICAgICAgICAgICBib2FyZE5hbWVzLmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlbmQtdG8tcGludGVyZXN0XCIpLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicsIHRydWUpOyAvLyBDYW4ndCBzZW5kIHRvIHBpbnRlcmVzdCBhcyB0aGUgdXNlciBkb2Vzbid0IGhhdmUgYW55IGJvYXJkc1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVGhlIHVzZXIgbWF5IGhhdmUgc2VlbiB0aGUgbWVzc2FnZSBhYm92ZSwgZ29uZSB0byBQaW50ZXJlc3QgdG8gY3JlYXRlIGEgYm9hcmQsIGFuZCB0aGVuIGNvbWUgYmFjayB0byBjbGljayB0aGUgUmVmcmVzaCBCb2FyZHMgYnV0dG9uXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VuZC10by1waW50ZXJlc3RcIikuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJywgZmFsc2UpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwIDsgaSA8IGJvYXJkcy5sZW5ndGggOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBib2FyZCA9IGJvYXJkc1tpXTtcbiAgICAgICAgICAgIGxldCBvcHRpb24gPSB0aGlzLmNyZWF0ZUJvYXJkTmFtZU9wdGlvbkVsZW1lbnQoYm9hcmQpO1xuICAgICAgICAgICAgYm9hcmROYW1lcy5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXBkYXRlIGFueSA8c2VsZWN0PiBlbGVtZW50cyBpbiBwcmV2aWV3LWNvbnRhaW5lcnMgdGhhdCBoYXZlIGFscmVhZHkgYmVlbiBhY3RpdmF0ZWQgZnJvbSB0aGUgdGVtcGxhdGVcbiAgICAgICAgY29uc3QgZXhpc3RpbmdCb2FyZE5hbWVTZWxlY3RvcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYm9hcmQtbmFtZXMnKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAgOyBpIDwgZXhpc3RpbmdCb2FyZE5hbWVTZWxlY3RvcnMubGVuZ3RoIDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgc2VsZWN0ID0gZXhpc3RpbmdCb2FyZE5hbWVTZWxlY3RvcnNbaV07XG4gICAgICAgICAgICBzZWxlY3QuaW5uZXJIVE1MID0gJyc7XG5cbiAgICAgICAgICAgIC8vIElmIHRoZSBib2FyZCBiZWluZyBsb29wZWQgaXMgdGhlICdzZW5kIGFsbCB0byBib2FyZCcsIG5lZWQgdG8gYWRkIHRoZSBibGFuayBvcHRpb25cbiAgICAgICAgICAgIGlmIChzZWxlY3QuaWQgPT09ICdzZW5kLWFsbC10by1ib2FyZCcpIHtcbiAgICAgICAgICAgICAgICBsZXQgb3B0aW9uID0gdGhpcy5jcmVhdGVCb2FyZE5hbWVPcHRpb25FbGVtZW50KHtuYW1lOiAnLS0tJywgaWQ6ICcnfSk7XG4gICAgICAgICAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwIDsgaSA8IGJvYXJkcy5sZW5ndGggOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgYm9hcmQgPSBib2FyZHNbaV07XG4gICAgICAgICAgICAgICAgbGV0IG9wdGlvbiA9IHRoaXMuY3JlYXRlQm9hcmROYW1lT3B0aW9uRWxlbWVudChib2FyZCk7XG4gICAgICAgICAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgPG9wdGlvbj4gZWxlbWVudCBmb3IgdGhlIHByb3ZpZGVkIGJvYXJkIG9iamVjdFxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGJvYXJkIE9iamVjdCByZXByZXNlbnRpbmcgYSBQaW50ZXJlc3QgYm9hcmRcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtFbGVtZW50fVxuICAgICAqL1xuICAgIGNyZWF0ZUJvYXJkTmFtZU9wdGlvbkVsZW1lbnQoYm9hcmQpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IGJvYXJkLmlkO1xuICAgICAgICBvcHRpb24uaW5uZXJUZXh0ID0gYm9hcmQubmFtZTtcbiAgICAgICAgcmV0dXJuIG9wdGlvbjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIHNlbGVjdGVkIGJvYXJkIGluIGVhY2ggb2YgdGhlIHBpbiBwcmV2aWV3cyB0byBtYXRjaCB0aGUgb25lIHNlbGVjdGVkIGluIHRoZVxuICAgICAqIFNlbmQgYWxsIGltYWdlcyB0byBib2FyZCBkcm9wIGRvd25cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7aW50fSBuZXdCb2FyZCBUaGUgSUQgdmFsdWUgb2YgdGhlIGJvYXJkIHRvIGJlIHNlbGVjdGVkXG4gICAgICovXG4gICAgdXBkYXRlU2VsZWN0ZWRCb2FyZHMobmV3Qm9hcmQpIHtcbiAgICAgICAgLy8gTG9vcCB0aHJvdWdoIGFsbCBleGlzdGluZyBib2FyZCBuYW1lIHNlbGVjdG9ycyBhbmQgdXBkYXRlIHRoZWlyIHZhbHVlcyB0byBtYXRjaCB0aGUgb25lIGp1c3Qgc2VsZWN0ZWRcbiAgICAgICAgY29uc3QgYm9hcmROYW1lU2VsZWN0b3JzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByZXZpZXctcGluLWJvYXJkLXNlbGVjdCcpO1xuICAgICAgICBmb3IgKGxldCBpID0gMCA7IGkgPCBib2FyZE5hbWVTZWxlY3RvcnMubGVuZ3RoIDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYm9hcmROYW1lU2VsZWN0ID0gYm9hcmROYW1lU2VsZWN0b3JzW2ldO1xuXG4gICAgICAgICAgICBib2FyZE5hbWVTZWxlY3QudmFsdWUgPSBuZXdCb2FyZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvb3AgdGhyb3VnaCBhbGwgcGluIHByZXZpZXdzIGFuZCBtYWtlIHN1cmUgYSBub3RlIGhhcyBiZWVuIHNldFxuICAgICAqXG4gICAgICogSWYgYSByZXF1aXJlZCBmaWVsZCBpc24ndCBmaWxsZWQgaW4sIGl0IHdpbGwgYmUgbWFya2VkIGFzIGludmFsaWQsIGJ1dCBhbHNvIHNldCB1cCB3aXRoIHRhYkluZGV4aW5nLFxuICAgICAqIHNvIHRoYXQgdXNlcnMgY2FuIGNsaWNrIHRhYiB0byBlYXNpbHkgbW92ZSBiZXR3ZWVuIG9ubHkgdGhlIG5vdGVzIHRoYXQgYXJlbid0IGZpbGxlZCBpbiB5ZXRcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIHZhbGlkYXRlSW5wdXRzKCkge1xuICAgICAgICBjb25zdCBwcmV2aWV3cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcmV2aWV3LWNvbnRhaW5lcicpO1xuICAgICAgICBsZXQgZXJyb3IgPSBmYWxzZTtcbiAgICAgICAgbGV0IHRhYkluZGV4ID0gMTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMCA7IGkgPCBwcmV2aWV3cy5sZW5ndGggOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBwcmV2aWV3ID0gcHJldmlld3NbaV07XG5cbiAgICAgICAgICAgIGNvbnN0IG5vdGVDb250YWluZXIgPSBwcmV2aWV3LnF1ZXJ5U2VsZWN0b3IoXCIubm90ZS1jb250YWluZXJcIik7XG4gICAgICAgICAgICBjb25zdCBub3RlID0gbm90ZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLm5vdGVcIikudmFsdWU7XG5cbiAgICAgICAgICAgIGlmIChub3RlID09PSAnJykge1xuICAgICAgICAgICAgICAgIGxldCBub3RlID0gcHJldmlldy5xdWVyeVNlbGVjdG9yKCcubm90ZScpO1xuICAgICAgICAgICAgICAgIG5vdGUuY2xhc3NMaXN0LnRvZ2dsZSgnaW52YWxpZCcsIHRydWUpO1xuICAgICAgICAgICAgICAgIG5vdGUudGFiSW5kZXggPSB0YWJJbmRleDtcbiAgICAgICAgICAgICAgICBpZiAodGFiSW5kZXggPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgbm90ZS5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICBub3RlQ29udGFpbmVyLmRhdGFzZXQuYmFsbG9vbiA9IG5vdGVDb250YWluZXIuZGF0YXNldC50b29sdGlwO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIEB0b2RvOiBUaGlzIG5lZWRzIHRvIGJlIGNsZWFuZWQgdXAgYW5kIHJlbW92ZWQgZnJvbSBoZXJlLiBBbHNvIG5lZWQgdG8gbWFrZSBzdXJlIGl0IG9ubHkgdHJpZ2dlcnMgb25jZVxuICAgICAgICAgICAgICAgICAgICBub3RlLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdGVDb250YWluZXIucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWJhbGxvb24nKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRhYkluZGV4Kys7XG4gICAgICAgICAgICAgICAgZXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGVycm9yID09PSBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb29wIHRocm91Z2ggYWxsIG9mIHRoZSA8aW1nPiBlbGVtZW50cywgYW5kIGNhbGwgdGhlIEFQSSBmdW5jdGlvbiB0byBjcmVhdGUgYSBwaW4sXG4gICAgICogd2l0aCBhbGwgdGhlIHJlbGV2YW50IGluZm9ybWF0aW9uXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7bnVsbH1cbiAgICAgKi9cbiAgICBjcmVhdGVQaW5zKCkge1xuICAgICAgICBjb25zdCBwcmV2aWV3cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcmV2aWV3LWNvbnRhaW5lcicpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwIDsgaSA8IHByZXZpZXdzLmxlbmd0aCA7IGkrKykge1xuICAgICAgICAgICAgbGV0IHByZXZpZXcgPSBwcmV2aWV3c1tpXTtcblxuICAgICAgICAgICAgLy8gU2tpcCBhbnkgaW1hZ2VzIHRoYXQgaGF2ZSBhbHJlYWR5IGJlZW4gcGlubmVkIGluIHRoaXMgc2Vzc2lvblxuICAgICAgICAgICAgaWYgKHByZXZpZXcuZGF0YXNldC5waW5uZWQpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgaW1hZ2VEYXRhID0gcHJldmlldy5xdWVyeVNlbGVjdG9yKCcucHJldmlldy1pbWFnZScpLnNyYztcbiAgICAgICAgICAgIGNvbnN0IG5vdGUgICAgICA9IHByZXZpZXcucXVlcnlTZWxlY3RvcihcIi5ub3RlXCIpLnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgYm9hcmQgICAgID0gcHJldmlldy5xdWVyeVNlbGVjdG9yKFwiLmJvYXJkLW5hbWVzXCIpLnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgbGluayAgICAgID0gcHJldmlldy5xdWVyeVNlbGVjdG9yKFwiLmxpbmtcIikudmFsdWU7XG5cbiAgICAgICAgICAgIHByZXZpZXcuY2xhc3NMaXN0LnRvZ2dsZSgnc2VuZGluZycsIHRydWUpO1xuICAgICAgICAgICAgZGVsZXRlIHByZXZpZXcuZGF0YXNldC5waW5FcnJvcjsgLy8gUmVtb3ZlIGFueSBwcmV2aW91cyBlcnJvciB0aGF0IG1pZ2h0IGJlIGRpc3BsYXlpbmdcblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBBUEkuQ3JlYXRlUGluKHtcbiAgICAgICAgICAgICAgICAgICAgYm9hcmQ6IGJvYXJkLCAvLyBTZW5kaW5nIGp1c3QgdGhlIGJvYXJkIElELiBEb2N1bWVudGF0aW9uIGRvZXNuJ3Qgc2F5IHRoaXMgY2FuIGJlIGRvbmUsIGJ1dCBpdCB3b3Jrcy4gUmVhc29uIGlzOiBzcGFjZXMgaW4gYm9hcmQgbmFtZXNcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VfYmFzZTY0OiBpbWFnZURhdGEsXG4gICAgICAgICAgICAgICAgICAgIG5vdGU6IG5vdGUsXG4gICAgICAgICAgICAgICAgICAgIGxpbms6IGxpbmtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcHJldmlldy5kYXRhc2V0LnBpbm5lZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHByZXZpZXcuY2xhc3NMaXN0LnRvZ2dsZSgnc2VuZGluZycsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgQW5hbHl0aWNzLlBpbkNyZWF0ZWQoKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICBFcnJvclV0aWwuTG9nKG5ldyBFcnJvcignQ3JlYXRlIFBpbiBwcm9taXNlIHJlamVjdGVkJyksIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGFEYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Vycm9yJzogZXJyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V2ZXJpdHk6ICdlcnJvcidcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGNhdGNoIChleGNlcHRpb24pIHtcbiAgICAgICAgICAgICAgICBFcnJvclV0aWwuTG9nKG5ldyBFcnJvcignRXhjZXB0aW9uIHRocm93biBmcm9tIENyZWF0ZVBpbiBmdW5jdGlvbicpLCB7XG4gICAgICAgICAgICAgICAgICAgIGV4Y2VwdGlvbjogZXhjZXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICBzZXZlcml0eTogJ2Vycm9yJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGlzcGxheSB0aGUgcHJpdmFjeSBwb2xpY3kgbW9kYWxcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtudWxsfVxuICAgICAqL1xuICAgIHNob3dQcml2YWN5UG9saWN5KCkge1xuICAgICAgICB0aGlzLm1vZGFsT3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIaWRlIHRoZSBwcml2YWN5IHBvbGljeSBtb2RhbFxuICAgICAqXG4gICAgICogQHJldHVybnMge251bGx9XG4gICAgICovXG4gICAgaGlkZVByaXZhY3lQb2xpY3koKSB7XG4gICAgICAgIHRoaXMubW9kYWxPdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy92aWV3cy9BcHBsaWNhdGlvbi5qcyIsIi8qIEJ1bGsgUGlubmVyIC0gQ3JlYXRlIG11bHRpcGxlIHBpbnMgaW4geW91ciBQaW50ZXJlc3QgYm9hcmRzIGF0IG9uY2VcbiAqIENvcHlyaWdodCAoQykgMjAxNyBMdWtlIERlbnRvblxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbjsgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cblxuaW1wb3J0IEN1c3RvbUV2ZW50IGZyb20gJ3NlcnZpY2VzL0N1c3RvbUV2ZW50JztcbmltcG9ydCBBUEkgZnJvbSAnc2VydmljZXMvQVBJJztcbmltcG9ydCBEYXRhU3RvcmUgZnJvbSAnc2VydmljZXMvRGF0YVN0b3JlJztcblxuLyoqXG4gKiBDbGFzcyBBdXRob3JpemF0aW9uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dGhvcml6YXRpb24ge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmF1dGhlbnRpY2F0aW9uLWNvbnRhaW5lclwiKTtcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbkJ1dHRvbiAgICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXV0aGVudGljYXRlLWJ1dHRvblwiKTtcblxuICAgICAgICAvLyBMaXN0ZW4gZm9yIHRoZSBpbnN0cnVjdGlvbiB0aGF0IHRoZSB1c2VyIGlzbid0IGF1dGhlbnRpY2F0ZWQgeWV0XG4gICAgICAgIEN1c3RvbUV2ZW50Lm9uKCd1c2VyLW5vdC1hdXRoZW50aWNhdGVkJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpc2UgdGhlIGF1dGhvcml6YXRpb24gc2VjdGlvbiBvZiB0aGUgYXBwbGljYXRpb25cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtudWxsfVxuICAgICAqL1xuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuc2hvd0F1dGhlbnRpY2F0aW9uQ29udGFpbmVyKCk7XG4gICAgICAgIHRoaXMuYXR0YWNoTGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybnMge251bGx9XG4gICAgICovXG4gICAgc2hvd0F1dGhlbnRpY2F0aW9uQ29udGFpbmVyKCkge1xuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9uQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicsIGZhbHNlKTtcbiAgICAgICAgQ3VzdG9tRXZlbnQudHJpZ2dlcignYXV0aGVudGljYXRpb24tc2hvd24nKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJucyB7bnVsbH1cbiAgICAgKi9cbiAgICBoaWRlQXV0aGVudGljYXRpb25Db250YWluZXIoKSB7XG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25Db250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJywgdHJ1ZSk7XG4gICAgICAgIEN1c3RvbUV2ZW50LnRyaWdnZXIoJ2F1dGhlbnRpY2F0aW9uLWhpZGRlbicpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEF0dGFjaCBldmVudCBsaXN0ZW5lcnNcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtudWxsfVxuICAgICAqL1xuICAgIGF0dGFjaExpc3RlbmVycygpIHtcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIEFQSS5Mb2dpbigpXG4gICAgICAgICAgICAudGhlbigoe2FjY2Vzc1Rva2VufSkgPT4ge1xuICAgICAgICAgICAgICAgIERhdGFTdG9yZS5TZXQoRGF0YVN0b3JlLkRBVEFfX0FDQ0VTU19UT0tFTigpLCBhY2Nlc3NUb2tlbik7XG4gICAgICAgICAgICAgICAgQ3VzdG9tRXZlbnQudHJpZ2dlcigndXNlci1hdXRoZW50aWNhdGVkJyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IocmVzcG9uc2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIE1ha2Ugc3VyZSB0aGUgYXV0aGVudGljYXRpb24gY29udGFpbmVyIGlzIGhpZGRlbiBpZiB0aGUgYXBwbGljYXRpb24gY29udGFpbmVyIGdldHMgc2hvd25cbiAgICAgICAgQ3VzdG9tRXZlbnQub24oJ3VzZXItYXV0aGVudGljYXRlZCcsIGUgPT4ge1xuICAgICAgICAgICAgdGhpcy5oaWRlQXV0aGVudGljYXRpb25Db250YWluZXIoKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL3ZpZXdzL0F1dGhvcml6YXRpb24uanMiLCIoZnVuY3Rpb24gKCkge1xuXG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgIFxuICAgIGZ1bmN0aW9uIEJ1bGxldCAoKVxuICAgIHtcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIC8vIC0tIEN1c3RvbSBFcnJvcnNcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIGZ1bmN0aW9uIFBhcmFtQ291bnRFcnJvciAobWV0aG9kTmFtZSwgZXhwZWN0ZWRQYXJhbXNTdHJpbmcsIHBhcmFtQ291bnQpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gJ0J1bGxldDo6IFsnICsgbWV0aG9kTmFtZSArICddICcgKyBleHBlY3RlZFBhcmFtc1N0cmluZyArICcsIGJ1dCByZWNlaXZlZDogJyArIHBhcmFtQ291bnQ7XG4gICAgICAgICAgICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IodGhpcy5tZXNzYWdlKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZXJyb3Iuc3RhY2sgIT09ICd1bmRlZmluZWQnKSB0aGlzLnN0YWNrID0gZXJyb3Iuc3RhY2s7XG4gICAgICAgIH1cbiAgICAgICAgUGFyYW1Db3VudEVycm9yLnByb3RvdHlwZSA9IG5ldyBFcnJvcigpO1xuICAgICAgICBQYXJhbUNvdW50RXJyb3IucHJvdG90eXBlLm5hbWUgPSBQYXJhbUNvdW50RXJyb3IubmFtZTtcbiAgICAgICAgUGFyYW1Db3VudEVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFBhcmFtQ291bnRFcnJvcjtcblxuICAgICAgICBmdW5jdGlvbiBQYXJhbVR5cGVFcnJvciAobWV0aG9kTmFtZSwgcGFyYW1ldGVyTmFtZSwgcGFyYW1ldGVyLCBleHBlY3RlZFR5cGUpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gJ0J1bGxldDo6IFsnICsgbWV0aG9kTmFtZSArICddIEV4cGVjdGVkIHBhcmFtZXRlciAtICcgKyBwYXJhbWV0ZXJOYW1lICsgJyAtIHRvIGJlIHR5cGU6ICcgKyBleHBlY3RlZFR5cGUgKyAnLCBidXQgcmVjZWl2ZWQgdHlwZTogJyArIHR5cGVvZiBwYXJhbWV0ZXI7XG4gICAgICAgICAgICB2YXIgZXJyb3IgPSBuZXcgVHlwZUVycm9yKHRoaXMubWVzc2FnZSk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGVycm9yLnN0YWNrICE9PSAndW5kZWZpbmVkJykgdGhpcy5zdGFjayA9IGVycm9yLnN0YWNrO1xuICAgICAgICB9XG4gICAgICAgIFBhcmFtVHlwZUVycm9yLnByb3RvdHlwZSA9IG5ldyBUeXBlRXJyb3IoKTtcbiAgICAgICAgUGFyYW1UeXBlRXJyb3IucHJvdG90eXBlLm5hbWUgPSBQYXJhbVR5cGVFcnJvci5uYW1lO1xuICAgICAgICBQYXJhbVR5cGVFcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBQYXJhbVR5cGVFcnJvcjtcblxuICAgICAgICBmdW5jdGlvbiBFdmVudE5hbWVMZW5ndGhFcnJvciAobWV0aG9kTmFtZSkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSAnQnVsbGV0OjogWycgKyBtZXRob2ROYW1lICsgJ10gRXhwZWN0ZWQgZXZlbnQgbmFtZSBwYXJhbWV0ZXIgdG8gYmUgbG9uZ2VyIHRoYW4gMCBjaGFyYWN0ZXJzJztcbiAgICAgICAgICAgIHZhciBlcnJvciA9IG5ldyBFcnJvcih0aGlzLm1lc3NhZ2UpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBlcnJvci5zdGFjayAhPT0gJ3VuZGVmaW5lZCcpIHRoaXMuc3RhY2sgPSBlcnJvci5zdGFjaztcbiAgICAgICAgfVxuICAgICAgICBFdmVudE5hbWVMZW5ndGhFcnJvci5wcm90b3R5cGUgPSBuZXcgRXJyb3IoKTtcbiAgICAgICAgRXZlbnROYW1lTGVuZ3RoRXJyb3IucHJvdG90eXBlLm5hbWUgPSBFdmVudE5hbWVMZW5ndGhFcnJvci5uYW1lO1xuICAgICAgICBFdmVudE5hbWVMZW5ndGhFcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBFdmVudE5hbWVMZW5ndGhFcnJvcjtcblxuICAgICAgICBmdW5jdGlvbiBFdmVudE5hbWVzQXJyYXlMZW5ndGhFcnJvciAobWV0aG9kTmFtZSkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSAnQnVsbGV0OjogWycgKyBtZXRob2ROYW1lICsgJ10gRXhwZWN0ZWQgZXZlbnQgbmFtZXMgYXJyYXkgdG8gY29udGFpbiBvbmUgb3IgbW9yZSBldmVudCBuYW1lcyc7XG4gICAgICAgICAgICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IodGhpcy5tZXNzYWdlKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZXJyb3Iuc3RhY2sgIT09ICd1bmRlZmluZWQnKSB0aGlzLnN0YWNrID0gZXJyb3Iuc3RhY2s7XG4gICAgICAgIH1cbiAgICAgICAgRXZlbnROYW1lc0FycmF5TGVuZ3RoRXJyb3IucHJvdG90eXBlID0gbmV3IEVycm9yKCk7XG4gICAgICAgIEV2ZW50TmFtZXNBcnJheUxlbmd0aEVycm9yLnByb3RvdHlwZS5uYW1lID0gRXZlbnROYW1lc0FycmF5TGVuZ3RoRXJyb3IubmFtZTtcbiAgICAgICAgRXZlbnROYW1lc0FycmF5TGVuZ3RoRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gRXZlbnROYW1lc0FycmF5TGVuZ3RoRXJyb3I7XG5cbiAgICAgICAgZnVuY3Rpb24gVW5kZWNsYXJlZEV2ZW50RXJyb3IgKG1ldGhvZE5hbWUsIGV2ZW50TmFtZSkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSAnQnVsbGV0OjogWycgKyBtZXRob2ROYW1lICsgJ10gRXZlbnQgc3RyaW5nOiBcIicgKyBldmVudE5hbWUgKyAnXCIgZG9lcyBub3QgZXhpc3Qgd2l0aGluIHRoZSBldmVudHMgZGljdGlvbmFyeVxcblBsZWFzZSB1c2UgdGhlIEJ1bGxldC5hZGRFdmVudE5hbWUgbWV0aG9kIHRvIGFkZCB0aGlzIHN0cmluZy4nO1xuXG4gICAgICAgICAgICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IodGhpcy5tZXNzYWdlKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZXJyb3Iuc3RhY2sgIT09ICd1bmRlZmluZWQnKSB0aGlzLnN0YWNrID0gZXJyb3Iuc3RhY2s7XG4gICAgICAgIH1cbiAgICAgICAgVW5kZWNsYXJlZEV2ZW50RXJyb3IucHJvdG90eXBlID0gbmV3IEVycm9yKCk7XG4gICAgICAgIFVuZGVjbGFyZWRFdmVudEVycm9yLnByb3RvdHlwZS5uYW1lID0gVW5kZWNsYXJlZEV2ZW50RXJyb3IubmFtZTtcbiAgICAgICAgVW5kZWNsYXJlZEV2ZW50RXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gVW5kZWNsYXJlZEV2ZW50RXJyb3I7XG5cblxuICAgICAgICBmdW5jdGlvbiBVbm1hcHBlZEV2ZW50RXJyb3IgKG1ldGhvZE5hbWUsIGV2ZW50TmFtZSkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSAnQnVsbGV0OjogWycgKyBtZXRob2ROYW1lICsgJ10gRXZlbnQgc3RyaW5nOiBcIicgKyBldmVudE5hbWUgKyAnXCIgaXMgbm90IG1hcHBlZCB0byBhbnkgY2FsbGJhY2tzXFxuUGxlYXNlIHVzZSB0aGUgQnVsbGV0Lm9uIG1ldGhvZCB0byBtYXAgdGhpcyBzdHJpbmcgdG8gYSBjYWxsYmFjay4nO1xuXG4gICAgICAgICAgICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IodGhpcy5tZXNzYWdlKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZXJyb3Iuc3RhY2sgIT09ICd1bmRlZmluZWQnKSB0aGlzLnN0YWNrID0gZXJyb3Iuc3RhY2s7XG4gICAgICAgIH1cbiAgICAgICAgVW5tYXBwZWRFdmVudEVycm9yLnByb3RvdHlwZSA9IG5ldyBFcnJvcigpO1xuICAgICAgICBVbm1hcHBlZEV2ZW50RXJyb3IucHJvdG90eXBlLm5hbWUgPSBVbm1hcHBlZEV2ZW50RXJyb3IubmFtZTtcbiAgICAgICAgVW5tYXBwZWRFdmVudEVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFVubWFwcGVkRXZlbnRFcnJvcjtcblxuICAgICAgICB2YXIgX0NBTExCQUNLX05BTUVTUEFDRSA9ICdfX2J1bGxldF9wdWJzdWJfXyc7XG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAvLyAtLSBQcml2YXRlIHZhcmlhYmxlc1xuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgdmFyIF9zZWxmID0gdGhpcztcbiAgICAgICAgdmFyIF9tYXBwaW5ncyA9IHt9O1xuICAgICAgICB2YXIgX3N0cmljdE1vZGUgPSBmYWxzZTtcbiAgICAgICAgdmFyIF90cmlnZ2VyQXN5bmMgPSB0cnVlO1xuXG4gICAgICAgIC8vIEV4cG9zZSBjdXN0b20gZXJyb3IgdHlwZSBjb25zdHJ1Y3RvcnMgKGZvciB0ZXN0aW5nKSwgYnV0IHVzZSBhbiB1bmRlcnNjb3JlIHRvIGltcGx5IHByaXZhY3kuXG4gICAgICAgIF9zZWxmLl9lcnJvcnMgPSB7XG4gICAgICAgICAgICBQYXJhbUNvdW50RXJyb3IgOiBQYXJhbUNvdW50RXJyb3IsXG4gICAgICAgICAgICBQYXJhbVR5cGVFcnJvciA6IFBhcmFtVHlwZUVycm9yLFxuICAgICAgICAgICAgRXZlbnROYW1lTGVuZ3RoRXJyb3IgOiBFdmVudE5hbWVMZW5ndGhFcnJvcixcbiAgICAgICAgICAgIEV2ZW50TmFtZXNBcnJheUxlbmd0aEVycm9yOiBFdmVudE5hbWVzQXJyYXlMZW5ndGhFcnJvcixcbiAgICAgICAgICAgIFVuZGVjbGFyZWRFdmVudEVycm9yIDogVW5kZWNsYXJlZEV2ZW50RXJyb3IsXG4gICAgICAgICAgICBVbm1hcHBlZEV2ZW50RXJyb3IgOiBVbm1hcHBlZEV2ZW50RXJyb3IsXG4gICAgICAgIH07XG5cblxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgLy8gLS0gUHVibGljIHZhcmlhYmxlc1xuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgX3NlbGYuZXZlbnRzID0ge307XG5cblxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgLy8gLS0gUHJpdmF0ZSBtZXRob2RzXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICBmdW5jdGlvbiBfcnVuQ2FsbGJhY2sgKGV2ZW50TmFtZSwgZGF0YSkge1xuICAgICAgICAgICAgZm9yICh2YXIgaWQgaW4gX21hcHBpbmdzW2V2ZW50TmFtZV0uY2FsbGJhY2tzKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHZhciBjYWxsYmFja09iamVjdCA9IF9tYXBwaW5nc1tldmVudE5hbWVdLmNhbGxiYWNrc1tpZF07XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrT2JqZWN0LmNiID09PSAnZnVuY3Rpb24nKSBjYWxsYmFja09iamVjdC5jYihkYXRhKTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrT2JqZWN0Lm9uY2UgPT09ICdib29sZWFuJyAmJiBjYWxsYmFja09iamVjdC5vbmNlID09PSB0cnVlKSBfc2VsZi5vZmYoZXZlbnROYW1lLCBjYWxsYmFja09iamVjdC5jYik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBfY2xvbmVDYWxsYmFja3MgKGNhbGxiYWNrcykge1xuICAgICAgICAgICAgdmFyIGNsb25lZENhbGxiYWNrcyA9IHt9O1xuXG4gICAgICAgICAgICBmb3IgKHZhciBjYWxsYmFja05hbWUgaW4gY2FsbGJhY2tzKSB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY2xvbmVkQ2FsbGJhY2tzW2NhbGxiYWNrTmFtZV0gPSB7XG4gICAgICAgICAgICAgICAgICAgIGNiIDogY2FsbGJhY2tzW2NhbGxiYWNrTmFtZV0uY2IsXG4gICAgICAgICAgICAgICAgICAgIG9uY2UgOiBjYWxsYmFja3NbY2FsbGJhY2tOYW1lXS5vbmNlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGNsb25lZENhbGxiYWNrcztcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIF9kZWxldGVBbGxDYWxsYmFja1JlZmVyZW5jZXNGb3JFdmVudCAoZXZlbnROYW1lKVxuICAgICAgICB7XG4gICAgICAgICAgICBmb3IgKHZhciBpZCBpbiBfbWFwcGluZ3NbZXZlbnROYW1lXS5jYWxsYmFja3MpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdmFyIGNhbGxiYWNrID0gX21hcHBpbmdzW2V2ZW50TmFtZV0uY2FsbGJhY2tzW2lkXS5jYjtcblxuICAgICAgICAgICAgICAgIGNhbGxiYWNrW19DQUxMQkFDS19OQU1FU1BBQ0VdLnRvdGFsRXZlbnRzLS07XG5cbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2tbX0NBTExCQUNLX05BTUVTUEFDRV0udG90YWxFdmVudHMgPT09IDApXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgY2FsbGJhY2tbX0NBTExCQUNLX05BTUVTUEFDRV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBjYWxsYmFja1tfQ0FMTEJBQ0tfTkFNRVNQQUNFXVtldmVudE5hbWVdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIF9kZWxldGVBbGxDYWxsYmFja1JlZmVyZW5jZXMgKClcbiAgICAgICAge1xuICAgICAgICAgICAgZm9yICh2YXIgZXZlbnROYW1lIGluIF9tYXBwaW5ncylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBfZGVsZXRlQWxsQ2FsbGJhY2tSZWZlcmVuY2VzRm9yRXZlbnQoZXZlbnROYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEV4cG9zZSBfZ2V0TWFwcGluZ3MgbWV0aG9kIChmb3IgdGVzdGluZyksIGJ1dCB1c2UgYW4gdW5kZXJzY29yZSB0byBpbXBseSBwcml2YWN5LlxuICAgICAgICBfc2VsZi5fZ2V0TWFwcGluZ3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIFJldHVybiBhIGRpY3Rpb25hcnkgb2JqZWN0IHRoYXQgaGFzIG5vIGVmZmVjdCBvbiBhcHAgc3RhdGUgdG8gZW5zdXJlICdfbWFwcGluZ3MnXG4gICAgICAgICAgICAvLyBzdGF5cyBwcml2YXRlLCBldmVuIGlmIHRoZSB2YWx1ZSByZXR1cm5lZCBmcm9tIHRoaXMgbWV0aG9kIGlzIG1vZGlmaWVkLlxuICAgICAgICAgICAgdmFyIGNsb25lZE1hcHBpbmdzID0ge307XG5cbiAgICAgICAgICAgIGZvciAodmFyIG1hcHBpbmcgaW4gX21hcHBpbmdzKVxuICAgICAgICAgICAgeyAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjbG9uZWRNYXBwaW5nc1ttYXBwaW5nXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tzIDogX2Nsb25lQ2FsbGJhY2tzKF9tYXBwaW5nc1ttYXBwaW5nXS5jYWxsYmFja3MpLFxuICAgICAgICAgICAgICAgICAgICB0b3RhbENhbGxiYWNrcyA6IF9tYXBwaW5nc1ttYXBwaW5nXS50b3RhbENhbGxiYWNrc1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBjbG9uZWRNYXBwaW5ncztcbiAgICAgICAgfTtcblxuXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAvLyAtLSBQdWJsaWMgbWV0aG9kc1xuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgX3NlbGYub24gPSBmdW5jdGlvbiAoZXZlbnROYW1lLCBmbiwgb25jZSlcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyIHx8IGFyZ3VtZW50cy5sZW5ndGggPiAzKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBQYXJhbUNvdW50RXJyb3IoJ29uJywgJ0V4cGVjdGVkIGJldHdlZW4gMiBhbmQgMyBwYXJhbWV0ZXJzJywgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgZXZlbnROYW1lICE9PSAnc3RyaW5nJylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUGFyYW1UeXBlRXJyb3IoJ29uJywgJ2V2ZW50IG5hbWUnLCBldmVudE5hbWUsICdzdHJpbmcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGV2ZW50TmFtZS5sZW5ndGggPT09IDApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEV2ZW50TmFtZUxlbmd0aEVycm9yKCdvbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoX3N0cmljdE1vZGUgJiYgdHlwZW9mIF9zZWxmLmV2ZW50c1tldmVudE5hbWVdID09PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVW5kZWNsYXJlZEV2ZW50RXJyb3IoJ29uJywgZXZlbnROYW1lKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUGFyYW1UeXBlRXJyb3IoJ29uJywgJ2NhbGxiYWNrJywgZm4sICdmdW5jdGlvbicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9uY2UgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBvbmNlICE9PSAnYm9vbGVhbicpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFBhcmFtVHlwZUVycm9yKCdvbicsICdvbmNlJywgb25jZSwgJ2Jvb2xlYW4nKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQ3JlYXRlIGEgcmVmZXJlbmNlIGJldHdlZW4gdGhlIGNhbGxiYWNrIGFuZCBzdG9yZWQgZXZlbnQuXG4gICAgICAgICAgICB2YXIgY2FsbGJhY2tJZCA9IG51bGw7XG5cbiAgICAgICAgICAgIC8vIElmIHRoZSBuYW1lZCBldmVudCBvYmplY3QgYWxyZWFkeSBleGlzdHMgaW4gdGhlIGRpY3Rpb25hcnkuLi5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgX21hcHBpbmdzW2V2ZW50TmFtZV0gIT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vIEF0dGVtcHQgdG8gZ2V0IHRoZSBjYWxsYmFjayBJRCBmcm9tIHRoZSBjYWxsYmFjayBpdHNlbGYuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmbltfQ0FMTEJBQ0tfTkFNRVNQQUNFXSA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBmbltfQ0FMTEJBQ0tfTkFNRVNQQUNFXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsRXZlbnRzOiAwXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIEFkZCBhIG5ldyBjYWxsYmFjayBvYmplY3QgdG8gdGhlIGV4aXN0aW5nIGV2ZW50IG9iamVjdC5cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZuW19DQUxMQkFDS19OQU1FU1BBQ0VdW2V2ZW50TmFtZV0gPT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tJZCA9IF9tYXBwaW5nc1tldmVudE5hbWVdLnRvdGFsQ2FsbGJhY2tzO1xuXG4gICAgICAgICAgICAgICAgICAgIF9tYXBwaW5nc1tldmVudE5hbWVdLnRvdGFsQ2FsbGJhY2tzKys7XG5cbiAgICAgICAgICAgICAgICAgICAgX21hcHBpbmdzW2V2ZW50TmFtZV0uY2FsbGJhY2tzW2NhbGxiYWNrSWRdID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2IgOiBmbixcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uY2UgOiB0eXBlb2Ygb25jZSA9PT0gJ2Jvb2xlYW4nID8gb25jZSA6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gT24gdGhlIGNhbGxiYWNrLCBjcmVhdGUgYSByZWZlcmVuY2UgdG8gdGhlIGV2ZW50IG1hcHBpbmcuXG4gICAgICAgICAgICAgICAgICAgIGZuW19DQUxMQkFDS19OQU1FU1BBQ0VdW2V2ZW50TmFtZV0gPSBjYWxsYmFja0lkO1xuICAgICAgICAgICAgICAgICAgICBmbltfQ0FMTEJBQ0tfTkFNRVNQQUNFXS50b3RhbEV2ZW50cysrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb25jZSA9PT0gJ2Jvb2xlYW4nKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gR2V0IHRoZSBjYWxsYmFjayBJRCBmcm9tIHRoZSB2YWx1ZSBvZiB0aGUgZXhpc3RpbmcgZXZlbnQgbmFtZSBrZXkuXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrSWQgPSBmbltfQ0FMTEJBQ0tfTkFNRVNQQUNFXVtldmVudE5hbWVdO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIFRoZSBmdW5jdGlvbiBhbHJlYWR5IGV4aXN0cywgc28gdXBkYXRlIGl0J3MgJ29uY2UnIHZhbHVlLlxuICAgICAgICAgICAgICAgICAgICBfbWFwcGluZ3NbZXZlbnROYW1lXS5jYWxsYmFja3NbY2FsbGJhY2tJZF0ub25jZSA9IG9uY2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBhIG5ldyBldmVudCBvYmplY3QgaW4gdGhlIGRpY3Rpb25hcnkgd2l0aCB0aGUgc3BlY2lmaWVkIG5hbWUgYW5kIGNhbGxiYWNrLlxuICAgICAgICAgICAgICAgIF9tYXBwaW5nc1tldmVudE5hbWVdID0ge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFja3MgOiB7fVxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBjYWxsYmFja0lkID0gMDtcblxuICAgICAgICAgICAgICAgIF9tYXBwaW5nc1tldmVudE5hbWVdLmNhbGxiYWNrc1tjYWxsYmFja0lkXSA9IHtjYiA6IGZuLCBvbmNlIDogISFvbmNlfTtcbiAgICAgICAgICAgICAgICBfbWFwcGluZ3NbZXZlbnROYW1lXS50b3RhbENhbGxiYWNrcyA9IDE7XG5cbiAgICAgICAgICAgICAgICAvLyBPbiB0aGUgY2FsbGJhY2ssIGNyZWF0ZSBhIHJlZmVyZW5jZSB0byB0aGUgZXZlbnQgbWFwcGluZy5cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZuW19DQUxMQkFDS19OQU1FU1BBQ0VdID09PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGZuW19DQUxMQkFDS19OQU1FU1BBQ0VdID0ge307XG4gICAgICAgICAgICAgICAgICAgIGZuW19DQUxMQkFDS19OQU1FU1BBQ0VdLnRvdGFsRXZlbnRzID0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZm5bX0NBTExCQUNLX05BTUVTUEFDRV0udG90YWxFdmVudHMrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZm5bX0NBTExCQUNLX05BTUVTUEFDRV1bZXZlbnROYW1lXSA9IGNhbGxiYWNrSWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgX3NlbGYub25jZSA9IGZ1bmN0aW9uIChldmVudE5hbWUsIGZuKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCAhPT0gMilcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUGFyYW1Db3VudEVycm9yKCdvbmNlJywgJ0V4cGVjdGVkIDIgcGFyYW1ldGVycycsIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIGV2ZW50TmFtZSAhPT0gJ3N0cmluZycpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFBhcmFtVHlwZUVycm9yKCdvbmNlJywgJ2V2ZW50IG5hbWUnLCBldmVudE5hbWUsICdzdHJpbmcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGV2ZW50TmFtZS5sZW5ndGggPT09IDApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEV2ZW50TmFtZUxlbmd0aEVycm9yKCdvbmNlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChfc3RyaWN0TW9kZSAmJiB0eXBlb2YgX3NlbGYuZXZlbnRzW2V2ZW50TmFtZV0gPT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBVbmRlY2xhcmVkRXZlbnRFcnJvcignb25jZScsIGV2ZW50TmFtZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFBhcmFtVHlwZUVycm9yKCdvbmNlJywgJ2NhbGxiYWNrJywgZm4sICdmdW5jdGlvbicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfc2VsZi5vbihldmVudE5hbWUsIGZuLCB0cnVlKTtcbiAgICAgICAgfTtcblxuICAgICAgICBfc2VsZi5vZmYgPSBmdW5jdGlvbiAoZXZlbnROYW1lLCBmbilcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy8gZGVsZXRlIGFsbCByZWZlcmVuY2VzIHRvIEJ1bGxldCB0aGF0IGV4aXN0IG9uIG1hcHBlZCBjYWxsYmFja3MuXG4gICAgICAgICAgICAgICAgX2RlbGV0ZUFsbENhbGxiYWNrUmVmZXJlbmNlcygpO1xuXG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIGFsbCBtYXBwaW5ncyBmcm9tIHRoZSBkaWN0aW9uYXJ5LlxuICAgICAgICAgICAgICAgIF9tYXBwaW5ncyA9IHt9O1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIGV2ZW50TmFtZSAhPT0gJ3N0cmluZycpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFBhcmFtVHlwZUVycm9yKCdvZmYnLCAnZXZlbnQgbmFtZScsIGV2ZW50TmFtZSwgJ3N0cmluZycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZXZlbnROYW1lLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXZlbnROYW1lTGVuZ3RoRXJyb3IoJ29mZicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoX3N0cmljdE1vZGUgJiYgdHlwZW9mIF9zZWxmLmV2ZW50c1tldmVudE5hbWVdID09PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVW5kZWNsYXJlZEV2ZW50RXJyb3IoJ29mZicsIGV2ZW50TmFtZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgX21hcHBpbmdzW2V2ZW50TmFtZV0gPT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vIFRoZXJlIGlzIG5vIG1hcHBpbmcgdG8gcmVtb3ZlLCBzbyByZXR1cm4gc2lsZW50bHkuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBSZW1vdmUganVzdCB0aGUgZnVuY3Rpb24sIGlmIHBhc3NlZCBhcyBhIHBhcmFtZXRlciBhbmQgaW4gdGhlIGRpY3Rpb25hcnkuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vIGlmICh0eXBlb2YgZm5bX0NBTExCQUNLX05BTUVTUEFDRV0gPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBmbltfQ0FMTEJBQ0tfTkFNRVNQQUNFXVtldmVudE5hbWVdID09PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICAgIC8vIFRPRE86IFRocm93IGVycm9yIGhlcmUgaWYgaW4gc3RyaWN0IG1vZGUuXG4gICAgICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICAgICAgLy8gUmV0cmlldmUgYSByZWZlcmVuY2UgdG8gdGhlIHN0b3JlZCBldmVudCBmcm9tIHRoZSBjYWxsYmFjay5cbiAgICAgICAgICAgICAgICB2YXIgaWQgPSBmbltfQ0FMTEJBQ0tfTkFNRVNQQUNFXVtldmVudE5hbWVdO1xuICAgICAgICAgICAgICAgIHZhciBmblRvUmVtb3ZlID0gX21hcHBpbmdzW2V2ZW50TmFtZV0uY2FsbGJhY2tzW2lkXTtcblxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZm5Ub1JlbW92ZSAhPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAvLyBkZWxldGUgdGhlIGNhbGxiYWNrIG9iamVjdCBmcm9tIHRoZSBkaWN0aW9uYXJ5LlxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgX21hcHBpbmdzW2V2ZW50TmFtZV0uY2FsbGJhY2tzW2lkXTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBkZWxldGUgdGhlIGV2ZW50IHJlZmVyZW5jZSBvbiB0aGUgY2FsbGJhY2sgZnVuY3Rpb24uXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBmbltfQ0FMTEJBQ0tfTkFNRVNQQUNFXVtldmVudE5hbWVdO1xuXG4gICAgICAgICAgICAgICAgICAgIF9tYXBwaW5nc1tldmVudE5hbWVdLnRvdGFsQ2FsbGJhY2tzLS07XG4gICAgICAgICAgICAgICAgICAgIGZuW19DQUxMQkFDS19OQU1FU1BBQ0VdLnRvdGFsRXZlbnRzLS07XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKF9tYXBwaW5nc1tldmVudE5hbWVdLnRvdGFsQ2FsbGJhY2tzID09PSAwKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGVyZSBhcmUgbm8gbW9yZSBmdW5jdGlvbnMgaW4gdGhlIGRpY3Rpb25hcnkgdGhhdCBhcmVcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlZ2lzdGVyZWQgdG8gdGhpcyBldmVudCwgc28gZGVsZXRlIHRoZSBuYW1lZCBldmVudCBvYmplY3QuXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgX21hcHBpbmdzW2V2ZW50TmFtZV07XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoZm5bX0NBTExCQUNLX05BTUVTUEFDRV0udG90YWxFdmVudHMgPT09IDApXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZXJlIGFyZSBubyBtb3JlIGV2ZW50cyByZWdpc3RlcmVkIG9uIHRoaXMgY2FsbGJhY2ssXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzbyBkZWxldGUgdGhlIEJ1bGxldCBuYW1lc3BhY2UuXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgZm5bX0NBTExCQUNLX05BTUVTUEFDRV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgZm4gIT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBQYXJhbVR5cGVFcnJvcignb2ZmJywgJ2NhbGxiYWNrJywgZm4sICdmdW5jdGlvbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vIE5vIGNhbGxiYWNrIHdhcyBwYXNzZWQgdG8gdGhlICdvZmYnIG1ldGhvZC4uLlxuXG4gICAgICAgICAgICAgICAgLy8gRm9yIGVhY2ggY2FsbGJhY2sgaW4gX21hcHBpbmdzW2V2ZW50TmFtZV0sIGRlbGV0ZSB0aGUgcmVmZXJlbmNlIHRvXG4gICAgICAgICAgICAgICAgLy8gdGhlIHNwZWNpZmllZCBldmVudCBuYW1lIG9uIHRoZSBjYWxsYmFjayBpdHNlbGYuXG4gICAgICAgICAgICAgICAgX2RlbGV0ZUFsbENhbGxiYWNrUmVmZXJlbmNlc0ZvckV2ZW50KGV2ZW50TmFtZSk7XG5cbiAgICAgICAgICAgICAgICAvLyBEZWxldGUgYWxsIGZ1bmN0aW9ucyBpbiB0aGUgZGljdGlvbmFyeSB0aGF0IGFyZSByZWdpc3RlcmVkIHRvIHRoaXNcbiAgICAgICAgICAgICAgICAvLyBldmVudCBieSBkZWxldGluZyB0aGUgbmFtZWQgZXZlbnQgb2JqZWN0LlxuICAgICAgICAgICAgICAgIGRlbGV0ZSBfbWFwcGluZ3NbZXZlbnROYW1lXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvLyBSZXBsYWNlIGEgc2luZ2xlIG1hcHBlZCBjYWxsYmFjayBmb3IgdGhlIHNwZWNpZmllZCBldmVudCBuYW1lIHdpdGggYSBuZXcgY2FsbGJhY2suXG4gICAgICAgIF9zZWxmLnJlcGxhY2VDYWxsYmFjayA9IGZ1bmN0aW9uIChldmVudE5hbWUsIG9sZEZuLCBuZXdGbiwgb25jZSkge1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGV2ZW50TmFtZSAhPT0gJ3N0cmluZycpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFBhcmFtVHlwZUVycm9yKCdyZXBsYWNlQ2FsbGJhY2snLCAnZXZlbnQgbmFtZScsIGV2ZW50TmFtZSwgJ3N0cmluZycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZXZlbnROYW1lLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXZlbnROYW1lTGVuZ3RoRXJyb3IoJ3JlcGxhY2VDYWxsYmFjaycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIF9tYXBwaW5nc1tldmVudE5hbWVdID09PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVW5tYXBwZWRFdmVudEVycm9yKCdyZXBsYWNlQ2FsbGJhY2snLCBldmVudE5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoX3N0cmljdE1vZGUgJiYgdHlwZW9mIF9zZWxmLmV2ZW50c1tldmVudE5hbWVdID09PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVW5kZWNsYXJlZEV2ZW50RXJyb3IoJ3JlcGxhY2VDYWxsYmFjaycsIGV2ZW50TmFtZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb2xkRm4gIT09ICdmdW5jdGlvbicpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFBhcmFtVHlwZUVycm9yKCdyZXBsYWNlQ2FsbGJhY2snLCAnY2FsbGJhY2snLCBvbGRGbiwgJ2Z1bmN0aW9uJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgbmV3Rm4gIT09ICdmdW5jdGlvbicpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFBhcmFtVHlwZUVycm9yKCdyZXBsYWNlQ2FsbGJhY2snLCAnY2FsbGJhY2snLCBuZXdGbiwgJ2Z1bmN0aW9uJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb25jZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIG9uY2UgIT09ICdib29sZWFuJylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUGFyYW1UeXBlRXJyb3IoJ3JlcGxhY2VDYWxsYmFjaycsICdvbmNlJywgb25jZSwgJ2Jvb2xlYW4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgX3NlbGYub2ZmKGV2ZW50TmFtZSwgb2xkRm4pO1xuICAgICAgICAgICAgX3NlbGYub24oZXZlbnROYW1lLCBuZXdGbiwgb25jZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gUmVwbGFjZSBhbGwgb2YgdGhlIHNwZWNpZmllZCBldmVudCBuYW1l4oCZcyBtYXBwZWQgY2FsbGJhY2tzIHdpdGggdGhlIHNwZWNpZmllZCBjYWxsYmFjay5cbiAgICAgICAgX3NlbGYucmVwbGFjZUFsbENhbGxiYWNrcyA9IGZ1bmN0aW9uIChldmVudE5hbWUsIG5ld0ZuLCBvbmNlKSB7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgZXZlbnROYW1lICE9PSAnc3RyaW5nJylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUGFyYW1UeXBlRXJyb3IoJ3JlcGxhY2UnLCAnZXZlbnQgbmFtZScsIGV2ZW50TmFtZSwgJ3N0cmluZycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZXZlbnROYW1lLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXZlbnROYW1lTGVuZ3RoRXJyb3IoJ3JlcGxhY2UnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBfbWFwcGluZ3NbZXZlbnROYW1lXSA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFVubWFwcGVkRXZlbnRFcnJvcigncmVwbGFjZScsIGV2ZW50TmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChfc3RyaWN0TW9kZSAmJiB0eXBlb2YgX3NlbGYuZXZlbnRzW2V2ZW50TmFtZV0gPT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBVbmRlY2xhcmVkRXZlbnRFcnJvcigncmVwbGFjZScsIGV2ZW50TmFtZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgbmV3Rm4gIT09ICdmdW5jdGlvbicpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFBhcmFtVHlwZUVycm9yKCdyZXBsYWNlJywgJ2NhbGxiYWNrJywgbmV3Rm4sICdmdW5jdGlvbicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9uY2UgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBvbmNlICE9PSAnYm9vbGVhbicpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFBhcmFtVHlwZUVycm9yKCdyZXBsYWNlJywgJ29uY2UnLCBvbmNlLCAnYm9vbGVhbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBfc2VsZi5vZmYoZXZlbnROYW1lKTtcbiAgICAgICAgICAgIF9zZWxmLm9uKGV2ZW50TmFtZSwgbmV3Rm4sIG9uY2UpO1xuICAgICAgICB9O1xuXG4gICAgICAgIF9zZWxmLnRyaWdnZXIgPSBmdW5jdGlvbiAoZXZlbnROYW1lLCBkYXRhKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGV2ZW50TmFtZSAhPT0gJ3N0cmluZycpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFBhcmFtVHlwZUVycm9yKCd0cmlnZ2VyJywgJ2V2ZW50IG5hbWUnLCBldmVudE5hbWUsICdzdHJpbmcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGV2ZW50TmFtZS5sZW5ndGggPT09IDApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEV2ZW50TmFtZUxlbmd0aEVycm9yKCd0cmlnZ2VyJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChfc3RyaWN0TW9kZSAmJiB0eXBlb2YgX3NlbGYuZXZlbnRzW2V2ZW50TmFtZV0gPT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBVbmRlY2xhcmVkRXZlbnRFcnJvcigndHJpZ2dlcicsIGV2ZW50TmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICh0eXBlb2YgX21hcHBpbmdzW2V2ZW50TmFtZV0gPT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmIChfc3RyaWN0TW9kZSkgdGhyb3cgbmV3IFVubWFwcGVkRXZlbnRFcnJvcigndHJpZ2dlcicsIGV2ZW50TmFtZSk7XG5cbiAgICAgICAgICAgICAgICAvLyBSZXR1cm4gc2lsZW50bHkgaWYgbm90IGluIHN0cmljdCBtb2RlLlxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQ2hlY2sgd2hldGhlciBvciBub3QgdGhpcyBpcyBhIGJyb3dzZXIgZW52aXJvbm1lbnQuXG4gICAgICAgICAgICBpZiAoX3RyaWdnZXJBc3luYyAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICBfcnVuQ2FsbGJhY2soZXZlbnROYW1lLCBkYXRhKTtcbiAgICAgICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBfcnVuQ2FsbGJhY2soZXZlbnROYW1lLCBkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBfc2VsZi5hZGRFdmVudE5hbWUgPSBmdW5jdGlvbiAoZXZlbnROYW1lKSB7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgZXZlbnROYW1lICE9PSAnc3RyaW5nJylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUGFyYW1UeXBlRXJyb3IoJ2FkZEV2ZW50TmFtZScsICdldmVudCBuYW1lJywgZXZlbnROYW1lLCAnc3RyaW5nJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChldmVudE5hbWUubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFdmVudE5hbWVMZW5ndGhFcnJvcignYWRkRXZlbnROYW1lJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF9zZWxmLmV2ZW50c1tldmVudE5hbWVdID0gZXZlbnROYW1lO1xuICAgICAgICB9O1xuXG4gICAgICAgIF9zZWxmLmFkZE11bHRpcGxlRXZlbnROYW1lcyA9IGZ1bmN0aW9uIChldmVudE5hbWVzKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICghKGV2ZW50TmFtZXMgaW5zdGFuY2VvZiBBcnJheSkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFBhcmFtVHlwZUVycm9yKCdhZGRNdWx0aXBsZUV2ZW50TmFtZXMnLCAnZXZlbnQgbmFtZXMnLCBldmVudE5hbWVzLCAnYXJyYXknKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGV2ZW50TmFtZXMubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFdmVudE5hbWVzQXJyYXlMZW5ndGhFcnJvcignYWRkTXVsdGlwbGVFdmVudE5hbWVzJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgICAgIHZhciBsZW5ndGggPSBldmVudE5hbWVzLmxlbmd0aDtcblxuICAgICAgICAgICAgZm9yKGk7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50RXZlbnROYW1lID0gZXZlbnROYW1lc1tpXTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBfc2VsZi5hZGRFdmVudE5hbWUoY3VycmVudEV2ZW50TmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBfc2VsZi5yZW1vdmVFdmVudE5hbWUgPSBmdW5jdGlvbiAoZXZlbnROYW1lKSB7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgZXZlbnROYW1lICE9PSAnc3RyaW5nJylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUGFyYW1UeXBlRXJyb3IoJ3JlbW92ZUV2ZW50TmFtZScsICdldmVudCBuYW1lJywgZXZlbnROYW1lLCAnc3RyaW5nJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgZWxzZSBpZiAoZXZlbnROYW1lLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXZlbnROYW1lTGVuZ3RoRXJyb3IoJ3JlbW92ZUV2ZW50TmFtZScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoX3NlbGYuZXZlbnRzW2V2ZW50TmFtZV0pIGRlbGV0ZSBfc2VsZi5ldmVudHNbZXZlbnROYW1lXTtcbiAgICAgICAgfTtcblxuICAgICAgICBfc2VsZi5nZXRTdHJpY3RNb2RlID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAvLyBSZXR1cm4gYSBib29sZWFuIHRoYXQgZG9lc24ndCBkaXJlY3RseSBwb2ludCB0byB0aGUgaW50ZXJuYWwgJ19zdHJpY3RNb2RlJyBwcm9wZXJ0eS5cbiAgICAgICAgICAgIHJldHVybiBfc3RyaWN0TW9kZSA9PT0gdHJ1ZSA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgfTtcblxuICAgICAgICBfc2VsZi5zZXRTdHJpY3RNb2RlID0gZnVuY3Rpb24gKHVzZVN0cmljdE1vZGUpIHtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiB1c2VTdHJpY3RNb2RlICE9PSAnYm9vbGVhbicpIHRocm93IG5ldyBQYXJhbVR5cGVFcnJvcignc2V0U3RyaWN0TW9kZScsICdzdHJpY3QgbW9kZScsIHVzZVN0cmljdE1vZGUsICdib29sZWFuJyk7XG5cbiAgICAgICAgICAgIF9zdHJpY3RNb2RlID0gdXNlU3RyaWN0TW9kZTtcbiAgICAgICAgfTtcblxuICAgICAgICBfc2VsZi5nZXRUcmlnZ2VyQXN5bmMgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIC8vIFJldHVybiBhIGJvb2xlYW4gdGhhdCBkb2Vzbid0IGRpcmVjdGx5IHBvaW50IHRvIHRoZSBpbnRlcm5hbCAnX3RyaWdnZXJBc3luYycgcHJvcGVydHkuXG4gICAgICAgICAgICByZXR1cm4gX3RyaWdnZXJBc3luYyA9PT0gdHJ1ZSA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgfTtcblxuICAgICAgICBfc2VsZi5zZXRUcmlnZ2VyQXN5bmMgPSBmdW5jdGlvbiAodXNlQXN5bmMpIHtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiB1c2VBc3luYyAhPT0gJ2Jvb2xlYW4nKSB0aHJvdyBuZXcgUGFyYW1UeXBlRXJyb3IoJ3NldFRyaWdnZXJBc3luYycsICd0cmlnZ2VyIGFzeW5jJywgdXNlQXN5bmMsICdib29sZWFuJyk7XG5cbiAgICAgICAgICAgIF90cmlnZ2VyQXN5bmMgPSB1c2VBc3luYztcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBUT0RPIDogQ3JlYXRlIGFuICdhZGRNdWx0aXBsZUV2ZW50TmFtZXMnIG1ldGhvZCB3aXRoIGFuIGFycmF5IG9mIHN0cmluZ3MgcGFzc2VkIGFzIGEgcGFyYW0uXG4gICAgICAgIC8vIC0gaW5jbHVkZSB0eXBlIGNoZWNrcyBmb3Igc3RyaW5nIHdoaWxlIGxvb3Bpbmcgb3ZlciB0aGUgYXJyYXkuXG5cbiAgICAgICAgLy8gVE9ETyA6IENyZWF0ZSBhICdyZXBsYWNlQWxsRXZlbnROYW1lcycgbWV0aG9kIHdpdGggYW4gYXJyYXkgb2Ygc3RyaW5ncyBwYXNzZWQgYXMgYSBwYXJhbS5cbiAgICAgICAgLy8gLSBpbmNsdWRlIHR5cGUgY2hlY2tzIGZvciBzdHJpbmcgd2hpbGUgbG9vcGluZyBvdmVyIHRoZSBhcnJheS5cblxuICAgICAgICAvLyBUT0RPIDogQ3JlYXRlIGEgJ3JlbW92ZUFsbEV2ZW50TmFtZXMnIG1ldGhvZC4gTm8gcGFyYW1zIG5lY2Vzc2FyeS5cbiAgICAgICAgLy8g4oCTIEludGVybmFsbHkgdGhpcyBjb3VsZCBzaW1wbHkgY2FsbCAncmVwbGFjZUFsbEV2ZW50TmFtZXMnIGFuZCBwYXNzIGFuIGVtcHR5IGFycmF5IGFzIGEgcGFyYW0uXG5cbiAgICAgICAgLy8gVE9ETyA6IENyZWF0ZSBhbiAnb25BbnknIG1ldGhvZCB3aXRoIGFuIGFycmF5IG9mIHN0cmluZ3MgcGFzc2VkIGFzIHRoZSBmaXJzdCBwYXJhbSBhbmQgYSBzaW5nbGUgY2FsbGJhY2sgYXMgdGhlIHNlY29uZC5cbiAgICAgICAgLy8gLSBpbmNsdWRlIHR5cGUgY2hlY2tzIGZvciBzdHJpbmcgd2hpbGUgbG9vcGluZyBvdmVyIHRoZSBhcnJheS5cblxuICAgICAgICAvLyBUT0RPIDogQ3JlYXRlIGFuICdvbk11bHRpcGxlJyBtZXRob2Qgd2l0aCBhbiBhcnJheSBvZiBmbGF0IG9iamVjdHMgcGFzc2VkIGFzIGEgcGFyYW0uXG4gICAgICAgIC8vIC0gZXhhbXBsZSBvZiByZXF1aXJlZCBwYXJhbSBzdHJ1Y3R1cmU6XG4gICAgICAgIC8vIFt7ZXZlbnROYW1lOiAnc29tZUV2ZW50JywgY2FsbGJhY2s6IHNvbWVDYWxsYmFjaywgb25jZTogZmFsc2V9LCB7ZXZlbnROYW1lOiAnYW5vdGhlckV2ZW50JywgY2FsbGJhY2s6IGFub3RoZXJDYWxsYmFjaywgb25jZTogdHJ1ZX1dXG4gICAgfVxuXG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAtLSBNb2R1bGUgZGVmaW5pdGlvblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIENoZWNrIGZvciBBTUQvTW9kdWxlIHN1cHBvcnQsIG90aGVyd2lzZSBkZWZpbmUgQnVsbGV0IGFzIGEgZ2xvYmFsIHZhcmlhYmxlLlxuXG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgIT09ICd1bmRlZmluZWQnICYmIGRlZmluZS5hbWQpXG4gICAge1xuICAgICAgICAvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUuXG4gICAgICAgIGRlZmluZSAoZnVuY3Rpb24oKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEJ1bGxldCgpO1xuICAgICAgICB9KTtcblxuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cylcbiAgICB7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gbmV3IEJ1bGxldCgpO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICB3aW5kb3cuQnVsbGV0ID0gbmV3IEJ1bGxldCgpO1xuICAgIH1cbiAgICBcbn0pKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9idWxsZXQtcHVic3ViL2Rpc3QvYnVsbGV0LmpzIiwidmFyIHR5cGUgPSByZXF1aXJlKCd0eXBlLW9mJyk7XG5cbnZhciBqc29ucElEID0gMCxcbiAgICBkb2N1bWVudCA9IHdpbmRvdy5kb2N1bWVudCxcbiAgICBrZXksXG4gICAgbmFtZSxcbiAgICByc2NyaXB0ID0gLzxzY3JpcHRcXGJbXjxdKig/Oig/ITxcXC9zY3JpcHQ+KTxbXjxdKikqPFxcL3NjcmlwdD4vZ2ksXG4gICAgc2NyaXB0VHlwZVJFID0gL14oPzp0ZXh0fGFwcGxpY2F0aW9uKVxcL2phdmFzY3JpcHQvaSxcbiAgICB4bWxUeXBlUkUgPSAvXig/OnRleHR8YXBwbGljYXRpb24pXFwveG1sL2ksXG4gICAganNvblR5cGUgPSAnYXBwbGljYXRpb24vanNvbicsXG4gICAgaHRtbFR5cGUgPSAndGV4dC9odG1sJyxcbiAgICBibGFua1JFID0gL15cXHMqJC9cblxudmFyIGFqYXggPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9wdGlvbnMpe1xuICB2YXIgc2V0dGluZ3MgPSBleHRlbmQoe30sIG9wdGlvbnMgfHwge30pXG4gIGZvciAoa2V5IGluIGFqYXguc2V0dGluZ3MpIGlmIChzZXR0aW5nc1trZXldID09PSB1bmRlZmluZWQpIHNldHRpbmdzW2tleV0gPSBhamF4LnNldHRpbmdzW2tleV1cblxuICBhamF4U3RhcnQoc2V0dGluZ3MpXG5cbiAgaWYgKCFzZXR0aW5ncy5jcm9zc0RvbWFpbikgc2V0dGluZ3MuY3Jvc3NEb21haW4gPSAvXihbXFx3LV0rOik/XFwvXFwvKFteXFwvXSspLy50ZXN0KHNldHRpbmdzLnVybCkgJiZcbiAgICBSZWdFeHAuJDIgIT0gd2luZG93LmxvY2F0aW9uLmhvc3RcblxuICB2YXIgZGF0YVR5cGUgPSBzZXR0aW5ncy5kYXRhVHlwZSwgaGFzUGxhY2Vob2xkZXIgPSAvPVxcPy8udGVzdChzZXR0aW5ncy51cmwpXG4gIGlmIChkYXRhVHlwZSA9PSAnanNvbnAnIHx8IGhhc1BsYWNlaG9sZGVyKSB7XG4gICAgaWYgKCFoYXNQbGFjZWhvbGRlcikgc2V0dGluZ3MudXJsID0gYXBwZW5kUXVlcnkoc2V0dGluZ3MudXJsLCAnY2FsbGJhY2s9PycpXG4gICAgcmV0dXJuIGFqYXguSlNPTlAoc2V0dGluZ3MpXG4gIH1cblxuICBpZiAoIXNldHRpbmdzLnVybCkgc2V0dGluZ3MudXJsID0gd2luZG93LmxvY2F0aW9uLnRvU3RyaW5nKClcbiAgc2VyaWFsaXplRGF0YShzZXR0aW5ncylcblxuICB2YXIgbWltZSA9IHNldHRpbmdzLmFjY2VwdHNbZGF0YVR5cGVdLFxuICAgICAgYmFzZUhlYWRlcnMgPSB7IH0sXG4gICAgICBwcm90b2NvbCA9IC9eKFtcXHctXSs6KVxcL1xcLy8udGVzdChzZXR0aW5ncy51cmwpID8gUmVnRXhwLiQxIDogd2luZG93LmxvY2F0aW9uLnByb3RvY29sLFxuICAgICAgeGhyID0gYWpheC5zZXR0aW5ncy54aHIoKSwgYWJvcnRUaW1lb3V0XG5cbiAgaWYgKCFzZXR0aW5ncy5jcm9zc0RvbWFpbikgYmFzZUhlYWRlcnNbJ1gtUmVxdWVzdGVkLVdpdGgnXSA9ICdYTUxIdHRwUmVxdWVzdCdcbiAgaWYgKG1pbWUpIHtcbiAgICBiYXNlSGVhZGVyc1snQWNjZXB0J10gPSBtaW1lXG4gICAgaWYgKG1pbWUuaW5kZXhPZignLCcpID4gLTEpIG1pbWUgPSBtaW1lLnNwbGl0KCcsJywgMilbMF1cbiAgICB4aHIub3ZlcnJpZGVNaW1lVHlwZSAmJiB4aHIub3ZlcnJpZGVNaW1lVHlwZShtaW1lKVxuICB9XG4gIGlmIChzZXR0aW5ncy5jb250ZW50VHlwZSB8fCAoc2V0dGluZ3MuZGF0YSAmJiBzZXR0aW5ncy50eXBlLnRvVXBwZXJDYXNlKCkgIT0gJ0dFVCcpKVxuICAgIGJhc2VIZWFkZXJzWydDb250ZW50LVR5cGUnXSA9IChzZXR0aW5ncy5jb250ZW50VHlwZSB8fCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJylcbiAgc2V0dGluZ3MuaGVhZGVycyA9IGV4dGVuZChiYXNlSGVhZGVycywgc2V0dGluZ3MuaGVhZGVycyB8fCB7fSlcblxuICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKXtcbiAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT0gNCkge1xuICAgICAgY2xlYXJUaW1lb3V0KGFib3J0VGltZW91dClcbiAgICAgIHZhciByZXN1bHQsIGVycm9yID0gZmFsc2VcbiAgICAgIGlmICgoeGhyLnN0YXR1cyA+PSAyMDAgJiYgeGhyLnN0YXR1cyA8IDMwMCkgfHwgeGhyLnN0YXR1cyA9PSAzMDQgfHwgKHhoci5zdGF0dXMgPT0gMCAmJiBwcm90b2NvbCA9PSAnZmlsZTonKSkge1xuICAgICAgICBkYXRhVHlwZSA9IGRhdGFUeXBlIHx8IG1pbWVUb0RhdGFUeXBlKHhoci5nZXRSZXNwb25zZUhlYWRlcignY29udGVudC10eXBlJykpXG4gICAgICAgIHJlc3VsdCA9IHhoci5yZXNwb25zZVRleHRcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIGlmIChkYXRhVHlwZSA9PSAnc2NyaXB0JykgICAgKDEsZXZhbCkocmVzdWx0KVxuICAgICAgICAgIGVsc2UgaWYgKGRhdGFUeXBlID09ICd4bWwnKSAgcmVzdWx0ID0geGhyLnJlc3BvbnNlWE1MXG4gICAgICAgICAgZWxzZSBpZiAoZGF0YVR5cGUgPT0gJ2pzb24nKSByZXN1bHQgPSBibGFua1JFLnRlc3QocmVzdWx0KSA/IG51bGwgOiBKU09OLnBhcnNlKHJlc3VsdClcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBlcnJvciA9IGUgfVxuXG4gICAgICAgIGlmIChlcnJvcikgYWpheEVycm9yKGVycm9yLCAncGFyc2VyZXJyb3InLCB4aHIsIHNldHRpbmdzKVxuICAgICAgICBlbHNlIGFqYXhTdWNjZXNzKHJlc3VsdCwgeGhyLCBzZXR0aW5ncylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFqYXhFcnJvcihudWxsLCAnZXJyb3InLCB4aHIsIHNldHRpbmdzKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZhciBhc3luYyA9ICdhc3luYycgaW4gc2V0dGluZ3MgPyBzZXR0aW5ncy5hc3luYyA6IHRydWVcbiAgeGhyLm9wZW4oc2V0dGluZ3MudHlwZSwgc2V0dGluZ3MudXJsLCBhc3luYylcblxuICBmb3IgKG5hbWUgaW4gc2V0dGluZ3MuaGVhZGVycykgeGhyLnNldFJlcXVlc3RIZWFkZXIobmFtZSwgc2V0dGluZ3MuaGVhZGVyc1tuYW1lXSlcblxuICBpZiAoYWpheEJlZm9yZVNlbmQoeGhyLCBzZXR0aW5ncykgPT09IGZhbHNlKSB7XG4gICAgeGhyLmFib3J0KClcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGlmIChzZXR0aW5ncy50aW1lb3V0ID4gMCkgYWJvcnRUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGVtcHR5XG4gICAgICB4aHIuYWJvcnQoKVxuICAgICAgYWpheEVycm9yKG51bGwsICd0aW1lb3V0JywgeGhyLCBzZXR0aW5ncylcbiAgICB9LCBzZXR0aW5ncy50aW1lb3V0KVxuXG4gIC8vIGF2b2lkIHNlbmRpbmcgZW1wdHkgc3RyaW5nICgjMzE5KVxuICB4aHIuc2VuZChzZXR0aW5ncy5kYXRhID8gc2V0dGluZ3MuZGF0YSA6IG51bGwpXG4gIHJldHVybiB4aHJcbn1cblxuXG4vLyB0cmlnZ2VyIGEgY3VzdG9tIGV2ZW50IGFuZCByZXR1cm4gZmFsc2UgaWYgaXQgd2FzIGNhbmNlbGxlZFxuZnVuY3Rpb24gdHJpZ2dlckFuZFJldHVybihjb250ZXh0LCBldmVudE5hbWUsIGRhdGEpIHtcbiAgLy90b2RvOiBGaXJlIG9mZiBzb21lIGV2ZW50c1xuICAvL3ZhciBldmVudCA9ICQuRXZlbnQoZXZlbnROYW1lKVxuICAvLyQoY29udGV4dCkudHJpZ2dlcihldmVudCwgZGF0YSlcbiAgcmV0dXJuIHRydWU7Ly8hZXZlbnQuZGVmYXVsdFByZXZlbnRlZFxufVxuXG4vLyB0cmlnZ2VyIGFuIEFqYXggXCJnbG9iYWxcIiBldmVudFxuZnVuY3Rpb24gdHJpZ2dlckdsb2JhbChzZXR0aW5ncywgY29udGV4dCwgZXZlbnROYW1lLCBkYXRhKSB7XG4gIGlmIChzZXR0aW5ncy5nbG9iYWwpIHJldHVybiB0cmlnZ2VyQW5kUmV0dXJuKGNvbnRleHQgfHwgZG9jdW1lbnQsIGV2ZW50TmFtZSwgZGF0YSlcbn1cblxuLy8gTnVtYmVyIG9mIGFjdGl2ZSBBamF4IHJlcXVlc3RzXG5hamF4LmFjdGl2ZSA9IDBcblxuZnVuY3Rpb24gYWpheFN0YXJ0KHNldHRpbmdzKSB7XG4gIGlmIChzZXR0aW5ncy5nbG9iYWwgJiYgYWpheC5hY3RpdmUrKyA9PT0gMCkgdHJpZ2dlckdsb2JhbChzZXR0aW5ncywgbnVsbCwgJ2FqYXhTdGFydCcpXG59XG5mdW5jdGlvbiBhamF4U3RvcChzZXR0aW5ncykge1xuICBpZiAoc2V0dGluZ3MuZ2xvYmFsICYmICEoLS1hamF4LmFjdGl2ZSkpIHRyaWdnZXJHbG9iYWwoc2V0dGluZ3MsIG51bGwsICdhamF4U3RvcCcpXG59XG5cbi8vIHRyaWdnZXJzIGFuIGV4dHJhIGdsb2JhbCBldmVudCBcImFqYXhCZWZvcmVTZW5kXCIgdGhhdCdzIGxpa2UgXCJhamF4U2VuZFwiIGJ1dCBjYW5jZWxhYmxlXG5mdW5jdGlvbiBhamF4QmVmb3JlU2VuZCh4aHIsIHNldHRpbmdzKSB7XG4gIHZhciBjb250ZXh0ID0gc2V0dGluZ3MuY29udGV4dFxuICBpZiAoc2V0dGluZ3MuYmVmb3JlU2VuZC5jYWxsKGNvbnRleHQsIHhociwgc2V0dGluZ3MpID09PSBmYWxzZSB8fFxuICAgICAgdHJpZ2dlckdsb2JhbChzZXR0aW5ncywgY29udGV4dCwgJ2FqYXhCZWZvcmVTZW5kJywgW3hociwgc2V0dGluZ3NdKSA9PT0gZmFsc2UpXG4gICAgcmV0dXJuIGZhbHNlXG5cbiAgdHJpZ2dlckdsb2JhbChzZXR0aW5ncywgY29udGV4dCwgJ2FqYXhTZW5kJywgW3hociwgc2V0dGluZ3NdKVxufVxuZnVuY3Rpb24gYWpheFN1Y2Nlc3MoZGF0YSwgeGhyLCBzZXR0aW5ncykge1xuICB2YXIgY29udGV4dCA9IHNldHRpbmdzLmNvbnRleHQsIHN0YXR1cyA9ICdzdWNjZXNzJ1xuICBzZXR0aW5ncy5zdWNjZXNzLmNhbGwoY29udGV4dCwgZGF0YSwgc3RhdHVzLCB4aHIpXG4gIHRyaWdnZXJHbG9iYWwoc2V0dGluZ3MsIGNvbnRleHQsICdhamF4U3VjY2VzcycsIFt4aHIsIHNldHRpbmdzLCBkYXRhXSlcbiAgYWpheENvbXBsZXRlKHN0YXR1cywgeGhyLCBzZXR0aW5ncylcbn1cbi8vIHR5cGU6IFwidGltZW91dFwiLCBcImVycm9yXCIsIFwiYWJvcnRcIiwgXCJwYXJzZXJlcnJvclwiXG5mdW5jdGlvbiBhamF4RXJyb3IoZXJyb3IsIHR5cGUsIHhociwgc2V0dGluZ3MpIHtcbiAgdmFyIGNvbnRleHQgPSBzZXR0aW5ncy5jb250ZXh0XG4gIHNldHRpbmdzLmVycm9yLmNhbGwoY29udGV4dCwgeGhyLCB0eXBlLCBlcnJvcilcbiAgdHJpZ2dlckdsb2JhbChzZXR0aW5ncywgY29udGV4dCwgJ2FqYXhFcnJvcicsIFt4aHIsIHNldHRpbmdzLCBlcnJvcl0pXG4gIGFqYXhDb21wbGV0ZSh0eXBlLCB4aHIsIHNldHRpbmdzKVxufVxuLy8gc3RhdHVzOiBcInN1Y2Nlc3NcIiwgXCJub3Rtb2RpZmllZFwiLCBcImVycm9yXCIsIFwidGltZW91dFwiLCBcImFib3J0XCIsIFwicGFyc2VyZXJyb3JcIlxuZnVuY3Rpb24gYWpheENvbXBsZXRlKHN0YXR1cywgeGhyLCBzZXR0aW5ncykge1xuICB2YXIgY29udGV4dCA9IHNldHRpbmdzLmNvbnRleHRcbiAgc2V0dGluZ3MuY29tcGxldGUuY2FsbChjb250ZXh0LCB4aHIsIHN0YXR1cylcbiAgdHJpZ2dlckdsb2JhbChzZXR0aW5ncywgY29udGV4dCwgJ2FqYXhDb21wbGV0ZScsIFt4aHIsIHNldHRpbmdzXSlcbiAgYWpheFN0b3Aoc2V0dGluZ3MpXG59XG5cbi8vIEVtcHR5IGZ1bmN0aW9uLCB1c2VkIGFzIGRlZmF1bHQgY2FsbGJhY2tcbmZ1bmN0aW9uIGVtcHR5KCkge31cblxuYWpheC5KU09OUCA9IGZ1bmN0aW9uKG9wdGlvbnMpe1xuICBpZiAoISgndHlwZScgaW4gb3B0aW9ucykpIHJldHVybiBhamF4KG9wdGlvbnMpXG5cbiAgdmFyIGNhbGxiYWNrTmFtZSA9ICdqc29ucCcgKyAoKytqc29ucElEKSxcbiAgICBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKSxcbiAgICBhYm9ydCA9IGZ1bmN0aW9uKCl7XG4gICAgICAvL3RvZG86IHJlbW92ZSBzY3JpcHRcbiAgICAgIC8vJChzY3JpcHQpLnJlbW92ZSgpXG4gICAgICBpZiAoY2FsbGJhY2tOYW1lIGluIHdpbmRvdykgd2luZG93W2NhbGxiYWNrTmFtZV0gPSBlbXB0eVxuICAgICAgYWpheENvbXBsZXRlKCdhYm9ydCcsIHhociwgb3B0aW9ucylcbiAgICB9LFxuICAgIHhociA9IHsgYWJvcnQ6IGFib3J0IH0sIGFib3J0VGltZW91dCxcbiAgICBoZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdXG4gICAgICB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnRcblxuICBpZiAob3B0aW9ucy5lcnJvcikgc2NyaXB0Lm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICB4aHIuYWJvcnQoKVxuICAgIG9wdGlvbnMuZXJyb3IoKVxuICB9XG5cbiAgd2luZG93W2NhbGxiYWNrTmFtZV0gPSBmdW5jdGlvbihkYXRhKXtcbiAgICBjbGVhclRpbWVvdXQoYWJvcnRUaW1lb3V0KVxuICAgICAgLy90b2RvOiByZW1vdmUgc2NyaXB0XG4gICAgICAvLyQoc2NyaXB0KS5yZW1vdmUoKVxuICAgIGRlbGV0ZSB3aW5kb3dbY2FsbGJhY2tOYW1lXVxuICAgIGFqYXhTdWNjZXNzKGRhdGEsIHhociwgb3B0aW9ucylcbiAgfVxuXG4gIHNlcmlhbGl6ZURhdGEob3B0aW9ucylcbiAgc2NyaXB0LnNyYyA9IG9wdGlvbnMudXJsLnJlcGxhY2UoLz1cXD8vLCAnPScgKyBjYWxsYmFja05hbWUpXG5cbiAgLy8gVXNlIGluc2VydEJlZm9yZSBpbnN0ZWFkIG9mIGFwcGVuZENoaWxkIHRvIGNpcmN1bXZlbnQgYW4gSUU2IGJ1Zy5cbiAgLy8gVGhpcyBhcmlzZXMgd2hlbiBhIGJhc2Ugbm9kZSBpcyB1c2VkIChzZWUgalF1ZXJ5IGJ1Z3MgIzI3MDkgYW5kICM0Mzc4KS5cbiAgaGVhZC5pbnNlcnRCZWZvcmUoc2NyaXB0LCBoZWFkLmZpcnN0Q2hpbGQpO1xuXG4gIGlmIChvcHRpb25zLnRpbWVvdXQgPiAwKSBhYm9ydFRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICB4aHIuYWJvcnQoKVxuICAgICAgYWpheENvbXBsZXRlKCd0aW1lb3V0JywgeGhyLCBvcHRpb25zKVxuICAgIH0sIG9wdGlvbnMudGltZW91dClcblxuICByZXR1cm4geGhyXG59XG5cbmFqYXguc2V0dGluZ3MgPSB7XG4gIC8vIERlZmF1bHQgdHlwZSBvZiByZXF1ZXN0XG4gIHR5cGU6ICdHRVQnLFxuICAvLyBDYWxsYmFjayB0aGF0IGlzIGV4ZWN1dGVkIGJlZm9yZSByZXF1ZXN0XG4gIGJlZm9yZVNlbmQ6IGVtcHR5LFxuICAvLyBDYWxsYmFjayB0aGF0IGlzIGV4ZWN1dGVkIGlmIHRoZSByZXF1ZXN0IHN1Y2NlZWRzXG4gIHN1Y2Nlc3M6IGVtcHR5LFxuICAvLyBDYWxsYmFjayB0aGF0IGlzIGV4ZWN1dGVkIHRoZSB0aGUgc2VydmVyIGRyb3BzIGVycm9yXG4gIGVycm9yOiBlbXB0eSxcbiAgLy8gQ2FsbGJhY2sgdGhhdCBpcyBleGVjdXRlZCBvbiByZXF1ZXN0IGNvbXBsZXRlIChib3RoOiBlcnJvciBhbmQgc3VjY2VzcylcbiAgY29tcGxldGU6IGVtcHR5LFxuICAvLyBUaGUgY29udGV4dCBmb3IgdGhlIGNhbGxiYWNrc1xuICBjb250ZXh0OiBudWxsLFxuICAvLyBXaGV0aGVyIHRvIHRyaWdnZXIgXCJnbG9iYWxcIiBBamF4IGV2ZW50c1xuICBnbG9iYWw6IHRydWUsXG4gIC8vIFRyYW5zcG9ydFxuICB4aHI6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbmV3IHdpbmRvdy5YTUxIdHRwUmVxdWVzdCgpXG4gIH0sXG4gIC8vIE1JTUUgdHlwZXMgbWFwcGluZ1xuICBhY2NlcHRzOiB7XG4gICAgc2NyaXB0OiAndGV4dC9qYXZhc2NyaXB0LCBhcHBsaWNhdGlvbi9qYXZhc2NyaXB0JyxcbiAgICBqc29uOiAgIGpzb25UeXBlLFxuICAgIHhtbDogICAgJ2FwcGxpY2F0aW9uL3htbCwgdGV4dC94bWwnLFxuICAgIGh0bWw6ICAgaHRtbFR5cGUsXG4gICAgdGV4dDogICAndGV4dC9wbGFpbidcbiAgfSxcbiAgLy8gV2hldGhlciB0aGUgcmVxdWVzdCBpcyB0byBhbm90aGVyIGRvbWFpblxuICBjcm9zc0RvbWFpbjogZmFsc2UsXG4gIC8vIERlZmF1bHQgdGltZW91dFxuICB0aW1lb3V0OiAwXG59XG5cbmZ1bmN0aW9uIG1pbWVUb0RhdGFUeXBlKG1pbWUpIHtcbiAgcmV0dXJuIG1pbWUgJiYgKCBtaW1lID09IGh0bWxUeXBlID8gJ2h0bWwnIDpcbiAgICBtaW1lID09IGpzb25UeXBlID8gJ2pzb24nIDpcbiAgICBzY3JpcHRUeXBlUkUudGVzdChtaW1lKSA/ICdzY3JpcHQnIDpcbiAgICB4bWxUeXBlUkUudGVzdChtaW1lKSAmJiAneG1sJyApIHx8ICd0ZXh0J1xufVxuXG5mdW5jdGlvbiBhcHBlbmRRdWVyeSh1cmwsIHF1ZXJ5KSB7XG4gIHJldHVybiAodXJsICsgJyYnICsgcXVlcnkpLnJlcGxhY2UoL1smP117MSwyfS8sICc/Jylcbn1cblxuLy8gc2VyaWFsaXplIHBheWxvYWQgYW5kIGFwcGVuZCBpdCB0byB0aGUgVVJMIGZvciBHRVQgcmVxdWVzdHNcbmZ1bmN0aW9uIHNlcmlhbGl6ZURhdGEob3B0aW9ucykge1xuICBpZiAodHlwZShvcHRpb25zLmRhdGEpID09PSAnb2JqZWN0Jykgb3B0aW9ucy5kYXRhID0gcGFyYW0ob3B0aW9ucy5kYXRhKVxuICBpZiAob3B0aW9ucy5kYXRhICYmICghb3B0aW9ucy50eXBlIHx8IG9wdGlvbnMudHlwZS50b1VwcGVyQ2FzZSgpID09ICdHRVQnKSlcbiAgICBvcHRpb25zLnVybCA9IGFwcGVuZFF1ZXJ5KG9wdGlvbnMudXJsLCBvcHRpb25zLmRhdGEpXG59XG5cbmFqYXguZ2V0ID0gZnVuY3Rpb24odXJsLCBzdWNjZXNzKXsgcmV0dXJuIGFqYXgoeyB1cmw6IHVybCwgc3VjY2Vzczogc3VjY2VzcyB9KSB9XG5cbmFqYXgucG9zdCA9IGZ1bmN0aW9uKHVybCwgZGF0YSwgc3VjY2VzcywgZGF0YVR5cGUpe1xuICBpZiAodHlwZShkYXRhKSA9PT0gJ2Z1bmN0aW9uJykgZGF0YVR5cGUgPSBkYXRhVHlwZSB8fCBzdWNjZXNzLCBzdWNjZXNzID0gZGF0YSwgZGF0YSA9IG51bGxcbiAgcmV0dXJuIGFqYXgoeyB0eXBlOiAnUE9TVCcsIHVybDogdXJsLCBkYXRhOiBkYXRhLCBzdWNjZXNzOiBzdWNjZXNzLCBkYXRhVHlwZTogZGF0YVR5cGUgfSlcbn1cblxuYWpheC5nZXRKU09OID0gZnVuY3Rpb24odXJsLCBzdWNjZXNzKXtcbiAgcmV0dXJuIGFqYXgoeyB1cmw6IHVybCwgc3VjY2Vzczogc3VjY2VzcywgZGF0YVR5cGU6ICdqc29uJyB9KVxufVxuXG52YXIgZXNjYXBlID0gZW5jb2RlVVJJQ29tcG9uZW50XG5cbmZ1bmN0aW9uIHNlcmlhbGl6ZShwYXJhbXMsIG9iaiwgdHJhZGl0aW9uYWwsIHNjb3BlKXtcbiAgdmFyIGFycmF5ID0gdHlwZShvYmopID09PSAnYXJyYXknO1xuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgdmFyIHZhbHVlID0gb2JqW2tleV07XG5cbiAgICBpZiAoc2NvcGUpIGtleSA9IHRyYWRpdGlvbmFsID8gc2NvcGUgOiBzY29wZSArICdbJyArIChhcnJheSA/ICcnIDoga2V5KSArICddJ1xuICAgIC8vIGhhbmRsZSBkYXRhIGluIHNlcmlhbGl6ZUFycmF5KCkgZm9ybWF0XG4gICAgaWYgKCFzY29wZSAmJiBhcnJheSkgcGFyYW1zLmFkZCh2YWx1ZS5uYW1lLCB2YWx1ZS52YWx1ZSlcbiAgICAvLyByZWN1cnNlIGludG8gbmVzdGVkIG9iamVjdHNcbiAgICBlbHNlIGlmICh0cmFkaXRpb25hbCA/ICh0eXBlKHZhbHVlKSA9PT0gJ2FycmF5JykgOiAodHlwZSh2YWx1ZSkgPT09ICdvYmplY3QnKSlcbiAgICAgIHNlcmlhbGl6ZShwYXJhbXMsIHZhbHVlLCB0cmFkaXRpb25hbCwga2V5KVxuICAgIGVsc2UgcGFyYW1zLmFkZChrZXksIHZhbHVlKVxuICB9XG59XG5cbmZ1bmN0aW9uIHBhcmFtKG9iaiwgdHJhZGl0aW9uYWwpe1xuICB2YXIgcGFyYW1zID0gW11cbiAgcGFyYW1zLmFkZCA9IGZ1bmN0aW9uKGssIHYpeyB0aGlzLnB1c2goZXNjYXBlKGspICsgJz0nICsgZXNjYXBlKHYpKSB9XG4gIHNlcmlhbGl6ZShwYXJhbXMsIG9iaiwgdHJhZGl0aW9uYWwpXG4gIHJldHVybiBwYXJhbXMuam9pbignJicpLnJlcGxhY2UoJyUyMCcsICcrJylcbn1cblxuZnVuY3Rpb24gZXh0ZW5kKHRhcmdldCkge1xuICB2YXIgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG4gIHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKS5mb3JFYWNoKGZ1bmN0aW9uKHNvdXJjZSkge1xuICAgIGZvciAoa2V5IGluIHNvdXJjZSlcbiAgICAgIGlmIChzb3VyY2Vba2V5XSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldXG4gIH0pXG4gIHJldHVybiB0YXJnZXRcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vcGFja2luZy1hamF4L2luZGV4LmpzIiwidmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih2YWwpe1xyXG4gIHN3aXRjaCAodG9TdHJpbmcuY2FsbCh2YWwpKSB7XHJcbiAgICBjYXNlICdbb2JqZWN0IEZ1bmN0aW9uXSc6IHJldHVybiAnZnVuY3Rpb24nXHJcbiAgICBjYXNlICdbb2JqZWN0IERhdGVdJzogcmV0dXJuICdkYXRlJ1xyXG4gICAgY2FzZSAnW29iamVjdCBSZWdFeHBdJzogcmV0dXJuICdyZWdleHAnXHJcbiAgICBjYXNlICdbb2JqZWN0IEFyZ3VtZW50c10nOiByZXR1cm4gJ2FyZ3VtZW50cydcclxuICAgIGNhc2UgJ1tvYmplY3QgQXJyYXldJzogcmV0dXJuICdhcnJheSdcclxuICAgIGNhc2UgJ1tvYmplY3QgU3RyaW5nXSc6IHJldHVybiAnc3RyaW5nJ1xyXG4gIH1cclxuXHJcbiAgaWYgKHR5cGVvZiB2YWwgPT0gJ29iamVjdCcgJiYgdmFsICYmIHR5cGVvZiB2YWwubGVuZ3RoID09ICdudW1iZXInKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBpZiAodHlwZW9mIHZhbC5jYWxsZWUgPT0gJ2Z1bmN0aW9uJykgcmV0dXJuICdhcmd1bWVudHMnO1xyXG4gICAgfSBjYXRjaCAoZXgpIHtcclxuICAgICAgaWYgKGV4IGluc3RhbmNlb2YgVHlwZUVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuICdhcmd1bWVudHMnO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAodmFsID09PSBudWxsKSByZXR1cm4gJ251bGwnXHJcbiAgaWYgKHZhbCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gJ3VuZGVmaW5lZCdcclxuICBpZiAodmFsICYmIHZhbC5ub2RlVHlwZSA9PT0gMSkgcmV0dXJuICdlbGVtZW50J1xyXG4gIGlmICh2YWwgPT09IE9iamVjdCh2YWwpKSByZXR1cm4gJ29iamVjdCdcclxuXHJcbiAgcmV0dXJuIHR5cGVvZiB2YWxcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3R5cGUtb2YvaW5kZXguanMiLCIvKiBCdWxrIFBpbm5lciAtIENyZWF0ZSBtdWx0aXBsZSBwaW5zIGluIHlvdXIgUGludGVyZXN0IGJvYXJkcyBhdCBvbmNlXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTcgTHVrZSBEZW50b25cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb247IGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5cbi8qKlxuICogQ2xhc3MgQVBJXG4gKlxuICogSW50ZXJmYWNlIGZvciBjb21tdW5pY2F0aW5nIHdpdGggdGhlIEFQSVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbGVhclByZXZpZXdzIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNsZWFyQnV0dG9uICAgID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbGVhci1jb21wbGV0ZWRcIik7XG4gICAgICAgIHRoaXMuY2xlYXJBbGxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNsZWFyLWFsbFwiKTtcblxuICAgICAgICB0aGlzLmF0dGFjaExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEF0dGFjaCBsaXN0ZW5lcnMgdG8gdGhlIGNsZWFyIGJ1dHRvbnNcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtudWxsfVxuICAgICAqL1xuICAgIGF0dGFjaExpc3RlbmVycygpIHtcbiAgICAgICAgdGhpcy5jbGVhckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgdGhpcy5jbGVhckNvbXBsZXRlZCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmNsZWFyQWxsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNsZWFyQWxsKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsZWFyIHByZXZpZXcgcGlucyB0aGF0IGhhdmUgYmVlbiB1cGxvYWRlZCB0byBwaW50ZXJlc3RcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtudWxsfVxuICAgICAqL1xuICAgIGNsZWFyQ29tcGxldGVkKCkge1xuICAgICAgICBjb25zdCBjb21wbGV0ZWRQaW5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcmV2aWV3LWNvbnRhaW5lcltkYXRhLXBpbm5lZD0ndHJ1ZSddXCIpO1xuICAgICAgICB0aGlzLmNsZWFyKGNvbXBsZXRlZFBpbnMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsZWFyIGFsbCBwcmV2aWV3IHBpbnNcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtudWxsfVxuICAgICAqL1xuICAgIGNsZWFyQWxsKCkge1xuICAgICAgICBjb25zdCBwcmV2aWV3UGlucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJldmlldy1jb250YWluZXJcIik7XG4gICAgICAgIHRoaXMuY2xlYXIocHJldmlld1BpbnMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBlbGVtZW50cyBmcm9tIHRoZSBET01cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Tm9kZUxpc3R9IGVsZW1lbnRzIEFycmF5IG9mIGVsZW1lbnRzIHRvIHJlbW92ZVxuICAgICAqL1xuICAgIGNsZWFyKGVsZW1lbnRzKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwIDsgaSA8IGVsZW1lbnRzLmxlbmd0aCA7IGkrKykge1xuICAgICAgICAgICAgZWxlbWVudHNbaV0ucmVtb3ZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcmV2aWV3LWNvbnRhaW5lclwiKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlLWhlYWRlcicpLmNsYXNzTGlzdC50b2dnbGUoJ2xhcmdlJywgdHJ1ZSk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2V0LXN0YXJ0ZWQnKS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nLCBmYWxzZSk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXBwbGljYXRpb24tY29udGFpbmVyJykuY2xhc3NMaXN0LnRvZ2dsZSgnZXhwYW5kZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGFiZWwtdGV4dCcpLmlubmVyVGV4dCA9ICdDaG9vc2UgSW1hZ2VzJztcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmV2aWV3LXBpbnMtY29udGFpbmVyJykuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJywgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlc2V0U2VuZEFsbFRvQm9hcmQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXNldCB0aGUgc2VsZWN0ZWQgdmFsdWUgaW4gdGhlIFNlbmQgYWxsIHRvIGJvYXJkIGRyb3AgZG93blxuICAgICAqXG4gICAgICogQHJldHVybnMge251bGx9XG4gICAgICovXG4gICAgcmVzZXRTZW5kQWxsVG9Cb2FyZCgpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZW5kLWFsbC10by1ib2FyZFwiKS52YWx1ZSA9IFwiXCI7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL0NsZWFyUHJldmlld3MuanMiLCIvKiBCdWxrIFBpbm5lciAtIENyZWF0ZSBtdWx0aXBsZSBwaW5zIGluIHlvdXIgUGludGVyZXN0IGJvYXJkcyBhdCBvbmNlXHJcbiAqIENvcHlyaWdodCAoQykgMjAxNyBMdWtlIERlbnRvblxyXG4gKlxyXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxyXG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxyXG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uOyBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxyXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxyXG4gKlxyXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcclxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcclxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxyXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxyXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cclxuICovXHJcblxyXG4vKipcclxuICogQ2xhc3MgUGluUHJldmlld1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGluUHJldmlldyB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZmlsZSkge1xyXG4gICAgICAgIHRoaXMuZmlsZSA9IGZpbGU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZW5kZXIgYSBwaW4gcHJldmlldyB0ZW1wbGF0ZSBpbnN0YW5jZVxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtOb2RlfVxyXG4gICAgICovXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJldmlldy10ZW1wbGF0ZScpO1xyXG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gZG9jdW1lbnQuaW1wb3J0Tm9kZSh0ZW1wbGF0ZS5jb250ZW50LCB0cnVlKTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuXHJcbiAgICAgICAgcmVhZGVyLm9ubG9hZCA9ICh0aGVGaWxlID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcHJldmlld0NvbnRhaW5lciA9IHRoZUZpbGUucXVlcnlTZWxlY3RvcignLnByZXZpZXctY29udGFpbmVyJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHByZXZpZXdJbWFnZSA9IHByZXZpZXdDb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5wcmV2aWV3LWltYWdlXCIpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgcHJldmlld0ltYWdlLnNyYyA9IGUudGFyZ2V0LnJlc3VsdDtcclxuICAgICAgICAgICAgICAgIHByZXZpZXdJbWFnZS5jbGFzc0xpc3QudG9nZ2xlKCdsb2FkZWQnLCB0cnVlKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KShpbnN0YW5jZSk7XHJcblxyXG4gICAgICAgIHJlYWRlci5hYm9ydCgpO1xyXG4gICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKHRoaXMuZmlsZSk7XHJcblxyXG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvUGluUHJldmlldy5qcyIsIi8qIEJ1bGsgUGlubmVyIC0gQ3JlYXRlIG11bHRpcGxlIHBpbnMgaW4geW91ciBQaW50ZXJlc3QgYm9hcmRzIGF0IG9uY2VcbiAqIENvcHlyaWdodCAoQykgMjAxNyBMdWtlIERlbnRvblxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbjsgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cblxuaW1wb3J0IEF1dGhvcml6YXRpb24gZnJvbSAndmlld3MvQXV0aG9yaXphdGlvbic7XG5pbXBvcnQgQXBwbGljYXRpb24gZnJvbSAndmlld3MvQXBwbGljYXRpb24nO1xuaW1wb3J0IEFQSSBmcm9tICdzZXJ2aWNlcy9BUEknO1xuaW1wb3J0IEN1c3RvbUV2ZW50IGZyb20gJ3NlcnZpY2VzL0N1c3RvbUV2ZW50JztcblxuLy8gQ3JlYXRlIGluc3RhbmNlcyBvZiBhcHBsaWNhdGlvbiBjbGFzc2VzXG5uZXcgQXV0aG9yaXphdGlvbigpO1xubmV3IEFwcGxpY2F0aW9uKCk7XG5cbi8vIERldGVybWluZSBpZiB1c2VkIGlzIGxvZ2dlZCBpbiBhbmQgcHVibGlzaCBhcHByb3ByaWF0ZSBzdGF0dXNcbmlmICghQVBJLklzQXV0aGVudGljYXRlZCgpKSB7XG4gICAgQ3VzdG9tRXZlbnQudHJpZ2dlcigndXNlci1ub3QtYXV0aGVudGljYXRlZCcpO1xufSBlbHNlIHtcbiAgICBDdXN0b21FdmVudC50cmlnZ2VyKCd1c2VyLWF1dGhlbnRpY2F0ZWQnKTtcbn1cblxuaWYgKHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gIT09ICdodHRwczovL2J1bGtwaW5uZXIuZ2l0aHViLmlvJykge1xuICAgIEJ1Z3NuYWcucmVsZWFzZVN0YWdlID0gJ2RldmVsb3BtZW50JztcbiAgICBCdWdzbmFnLm5vdGlmeVJlbGVhc2VTdGFnZXMgPSBbJ3Byb2R1Y3Rpb24nLCAnc3RhZ2luZyddO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL21haW4uanMiLCIvKiBCdWxrIFBpbm5lciAtIENyZWF0ZSBtdWx0aXBsZSBwaW5zIGluIHlvdXIgUGludGVyZXN0IGJvYXJkcyBhdCBvbmNlXHJcbiAqIENvcHlyaWdodCAoQykgMjAxNyBMdWtlIERlbnRvblxyXG4gKlxyXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxyXG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxyXG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uOyBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxyXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxyXG4gKlxyXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcclxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcclxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxyXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxyXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cclxuICovXHJcbmltcG9ydCBhamF4IGZyb20gJ3BhY2tpbmctYWpheCdcclxuXHJcbi8qKlxyXG4gKiBDbGFzcyBBSkFYXHJcbiAqXHJcbiAqIEFic3RyYWN0aW9uIG9mIGFsbCBBSkFYIGludGVyYWN0aW9uc1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQUpBWCB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDbGFzcyBjb25zdHJ1Y3RvclxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudWxsfVxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmJhc2VVcmwgPSAnaHR0cHM6Ly9hcGkucGludGVyZXN0LmNvbS8nO1xyXG4gICAgICAgIHRoaXMuYXBpVmVyc2lvbiA9ICd2MS8nO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQnVpbGQgdGhlIFVSTCBvZiB0aGUgYXBwcm9wcmlhdGUgQVBJIGJlaW5nIGNhbGxlZFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSAgZW5kcG9pbnQgVGhlIEFQSSBlbmRwb2ludCBiZWluZyBxdWVyaWVkXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge3N0cmluZ31cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIF9idWlsZFVybChlbmRwb2ludCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJhc2VVcmwgKyB0aGlzLmFwaVZlcnNpb24gKyBlbmRwb2ludDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEV4ZWN1dGUgdGhlIEFQSSBxdWVyeVxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBlbmRwb2ludCBUaGUgQVBJIGVuZHBvaW50IHRvIGJlIHF1ZXJpZWRcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhICAgICBBbnkgYWRkaXRpb25hbCBkYXRhIHJlcXVpcmVkXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSAgICAgVGhlIHR5cGUgb2YgcmVxdWVzdCBiZWluZyBtYWRlLiBFLmcuIEdFVCwgUE9TVCBldGNcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIF9mZXRjaChlbmRwb2ludCwgZGF0YSwgdHlwZSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IHRoaXMuX2J1aWxkVXJsKGVuZHBvaW50KTtcclxuXHJcbiAgICAgICAgICAgIGFqYXgoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiB0eXBlLFxyXG4gICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIZWxwZXIgZnVuY3Rpb24gZm9yIHBlcmZvcm1pbmcgYSBHRVQgcmVxdWVzdFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBlbmRwb2ludCBUaGUgQVBJIGVuZHBvaW50IHRvIGJlIHF1ZXJpZWRcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhICAgICBBZGRpdGlvbmFsIGRhdGEgdG8gYmUgc2VudCB3aXRoIHRoZSByZXF1ZXN0XHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge1Byb21pc2V9XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBHZXQoZW5kcG9pbnQsIGRhdGEpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBhamF4ID0gbmV3IEFKQVgoKTtcclxuICAgICAgICAgICAgYWpheC5fZmV0Y2goZW5kcG9pbnQsIGRhdGEsICdHRVQnKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzb2x2ZSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChyZWplY3QpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSGVscGVyIGZ1bmN0aW9uIGZvciBwZXJmb3JtaW5nIGEgUE9TVCByZXF1ZXN0XHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGVuZHBvaW50IFRoZSBBUEkgZW5kcG9pbnQgdG8gYmUgcXVlcmllZFxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgICAgIEFkZGl0aW9uYWwgZGF0YSB0byBiZSBzZW50IHdpdGggdGhlIHJlcXVlc3RcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cclxuICAgICAqL1xyXG4gICAgc3RhdGljIFBvc3QoZW5kcG9pbnQsIGRhdGEpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBhamF4ID0gbmV3IEFKQVgoKTtcclxuICAgICAgICAgICAgYWpheC5fZmV0Y2goZW5kcG9pbnQsIGRhdGEsICdQT1NUJylcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlc29sdmUpXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2gocmVqZWN0KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvc2VydmljZXMvQUpBWC5qcyIsIi8qIEJ1bGsgUGlubmVyIC0gQ3JlYXRlIG11bHRpcGxlIHBpbnMgaW4geW91ciBQaW50ZXJlc3QgYm9hcmRzIGF0IG9uY2VcclxuICogQ29weXJpZ2h0IChDKSAyMDE3IEx1a2UgRGVudG9uXHJcbiAqXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XHJcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XHJcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb247IGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXHJcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXHJcbiAqXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxyXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxyXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXHJcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqXHJcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXHJcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBDbGFzcyBBbmFseXRpY3NcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFuYWx5dGljcyB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQZXJmb3JtIGFuYWx5dGljcyB0cmFja2luZyBhY3Rpb25zIHJlbGF0aXZlIHRvIGEgcGluIGJlaW5nIGNyZWF0ZWRcclxuICAgICAqL1xyXG4gICAgc3RhdGljIFBpbkNyZWF0ZWQoKSB7XHJcbiAgICAgICAgZ3RhZygnZXZlbnQnLCAncGluX2NyZWF0ZWQnLCB7J3BpbnMnOiAxfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL3NlcnZpY2VzL0FuYWx5dGljcy5qcyIsIi8qIEJ1bGsgUGlubmVyIC0gQ3JlYXRlIG11bHRpcGxlIHBpbnMgaW4geW91ciBQaW50ZXJlc3QgYm9hcmRzIGF0IG9uY2VcclxuICogQ29weXJpZ2h0IChDKSAyMDE3IEx1a2UgRGVudG9uXHJcbiAqXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XHJcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XHJcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb247IGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXHJcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXHJcbiAqXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxyXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxyXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXHJcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqXHJcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXHJcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBDbGFzcyBFcnJvclV0aWxcclxuICpcclxuICogSW50ZXJmYWNlIGZvciBhYnN0cmFjdGluZyB0aGUgZXJyb3IgcmVwb3J0aW5nIHNlcnZpY2VcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVycm9yVXRpbCB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMb2cgYW4gZXJyb3IgdG8gdGhlIGJ1ZyB0cmFja2luZyBzeXN0ZW1cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0Vycm9yfSAgZXJyb3IgICBBIGRlc2NyaXB0aW9uIG9mIHRoZSBlcnJvclxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgRXh0cmEgZGV0YWlscyBvZiB0aGUgZXJyb3JcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVsbH1cclxuICAgICAqL1xyXG4gICAgc3RhdGljIExvZyhlcnJvciwgb3B0aW9ucykge1xyXG4gICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24ub3JpZ2luID09PSAnaHR0cHM6Ly9idWxrcGlubmVyLmdpdGh1Yi5pbycpIHtcclxuICAgICAgICAgICAgQnVnc25hZy5ub3RpZnlFeGNlcHRpb24oZXJyb3IsIG9wdGlvbnMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKG9wdGlvbnMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL3NlcnZpY2VzL0Vycm9yVXRpbC5qcyJdLCJzb3VyY2VSb290IjoiIn0=