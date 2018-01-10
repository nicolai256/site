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
                        metaData: {
                            'exception': exception
                        },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzczOGYwMjQzZDkxYWU3NDA0YTAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3NlcnZpY2VzL0FQSS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc2VydmljZXMvQ3VzdG9tRXZlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3NlcnZpY2VzL0RhdGFTdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdmlld3MvQXBwbGljYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3ZpZXdzL0F1dGhvcml6YXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9idWxsZXQtcHVic3ViL2Rpc3QvYnVsbGV0LmpzIiwid2VicGFjazovLy8uL34vcGFja2luZy1hamF4L2luZGV4LmpzIiwid2VicGFjazovLy8uL34vdHlwZS1vZi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvQ2xlYXJQcmV2aWV3cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvUGluUHJldmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc2VydmljZXMvQUpBWC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc2VydmljZXMvQW5hbHl0aWNzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9zZXJ2aWNlcy9FcnJvclV0aWwuanMiXSwibmFtZXMiOlsiQVBJIiwiR2V0IiwiREFUQV9fQUNDRVNTX1RPS0VOIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJQREsiLCJpbml0IiwiYXBwSWQiLCJjb29raWUiLCJsb2dpbiIsInNjb3BlIiwic2Vzc2lvbiIsInNldFNlc3Npb24iLCJQb3N0IiwiZGF0YSIsInRoZW4iLCJjYXRjaCIsImFjY2Vzc190b2tlbiIsInNvcnQiLCJhIiwiYiIsIm5hbWVBIiwibmFtZSIsInRvVXBwZXJDYXNlIiwibmFtZUIiLCJDdXN0b21FdmVudCIsImV2ZW50TmFtZSIsImNhbGxiYWNrIiwib24iLCJvZmYiLCJvbmNlIiwidHJpZ2dlciIsIkRhdGFTdG9yZSIsImtleSIsInZhbHVlIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImdldEl0ZW0iLCJBcHBsaWNhdGlvbiIsImNsZWFyUHJldmlld3MiLCJwcmV2aWV3c1BpbnNDb250YWluZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpbWFnZVNlbGVjdENvbnRhaW5lciIsInJlZnJlc2hCb2FyZHNCdXR0b24iLCJwaW5zQ29udGFpbmVyIiwic2VuZFRvUGludGVyZXN0QnV0dG9uIiwic2VuZEFsbFRvQm9hcmRTZWxlY3QiLCJnZXRFbGVtZW50QnlJZCIsImZpbGVVcGxvYWRJbnB1dCIsIm1vZGFsT3ZlcmxheSIsInNob3dBcHBsaWNhdGlvbkNvbnRhaW5lciIsImF0dGFjaExpc3RlbmVycyIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJsb2FkQm9hcmRzIiwicG9wdWxhdGVCb2FyZE5hbWVzIiwiYm9hcmRzIiwiY29uc29sZSIsImVycm9yIiwicmVzcG9uc2UiLCJlIiwidGFyZ2V0IiwibWF0Y2hlcyIsInZhbGlkYXRlSW5wdXRzIiwiY3JlYXRlUGlucyIsImJvYXJkVmFsdWUiLCJ1cGRhdGVTZWxlY3RlZEJvYXJkcyIsIm9uY2hhbmdlIiwiaGFuZGxlSW1hZ2VzU2VsZWN0ZWQiLCJzaG93UHJpdmFjeVBvbGljeSIsImNvbnRhaW5zIiwiaGlkZVByaXZhY3lQb2xpY3kiLCJpbnB1dCIsImZpbGVzIiwibGVuZ3RoIiwiaW5uZXJUZXh0Iiwic2V0VGltZW91dCIsImkiLCJmaWxlIiwicGluUHJldmlldyIsImFwcGVuZENoaWxkIiwicmVuZGVyIiwiZm9yY2VMb2FkIiwiREFUQV9fQk9BUkRTIiwiSlNPTiIsInBhcnNlIiwiQm9hcmRzIiwiU2V0Iiwic3RyaW5naWZ5IiwiYm9hcmROYW1lcyIsImNvbnRlbnQiLCJpbm5lckhUTUwiLCJvcHRpb24iLCJjcmVhdGVCb2FyZE5hbWVPcHRpb25FbGVtZW50IiwiaWQiLCJib2FyZCIsImV4aXN0aW5nQm9hcmROYW1lU2VsZWN0b3JzIiwicXVlcnlTZWxlY3RvckFsbCIsInNlbGVjdCIsImNyZWF0ZUVsZW1lbnQiLCJuZXdCb2FyZCIsImJvYXJkTmFtZVNlbGVjdG9ycyIsImJvYXJkTmFtZVNlbGVjdCIsInByZXZpZXdzIiwidGFiSW5kZXgiLCJwcmV2aWV3Iiwibm90ZUNvbnRhaW5lciIsIm5vdGUiLCJmb2N1cyIsImRhdGFzZXQiLCJiYWxsb29uIiwidG9vbHRpcCIsInJlbW92ZUF0dHJpYnV0ZSIsInBpbm5lZCIsImltYWdlRGF0YSIsInNyYyIsImxpbmsiLCJwaW5FcnJvciIsIkNyZWF0ZVBpbiIsImltYWdlX2Jhc2U2NCIsIlBpbkNyZWF0ZWQiLCJMb2ciLCJFcnJvciIsIm1ldGFEYXRhIiwiZXJyIiwic2V2ZXJpdHkiLCJleGNlcHRpb24iLCJyZW1vdmUiLCJhZGQiLCJBdXRob3JpemF0aW9uIiwiYXV0aGVudGljYXRpb25Db250YWluZXIiLCJhdXRoZW50aWNhdGlvbkJ1dHRvbiIsInNob3dBdXRoZW50aWNhdGlvbkNvbnRhaW5lciIsIkxvZ2luIiwiYWNjZXNzVG9rZW4iLCJoaWRlQXV0aGVudGljYXRpb25Db250YWluZXIiLCJCdWxsZXQiLCJQYXJhbUNvdW50RXJyb3IiLCJtZXRob2ROYW1lIiwiZXhwZWN0ZWRQYXJhbXNTdHJpbmciLCJwYXJhbUNvdW50IiwibWVzc2FnZSIsInN0YWNrIiwicHJvdG90eXBlIiwiY29uc3RydWN0b3IiLCJQYXJhbVR5cGVFcnJvciIsInBhcmFtZXRlck5hbWUiLCJwYXJhbWV0ZXIiLCJleHBlY3RlZFR5cGUiLCJUeXBlRXJyb3IiLCJFdmVudE5hbWVMZW5ndGhFcnJvciIsIkV2ZW50TmFtZXNBcnJheUxlbmd0aEVycm9yIiwiVW5kZWNsYXJlZEV2ZW50RXJyb3IiLCJVbm1hcHBlZEV2ZW50RXJyb3IiLCJfQ0FMTEJBQ0tfTkFNRVNQQUNFIiwiX3NlbGYiLCJfbWFwcGluZ3MiLCJfc3RyaWN0TW9kZSIsIl90cmlnZ2VyQXN5bmMiLCJfZXJyb3JzIiwiZXZlbnRzIiwiX3J1bkNhbGxiYWNrIiwiY2FsbGJhY2tzIiwiY2FsbGJhY2tPYmplY3QiLCJjYiIsIl9jbG9uZUNhbGxiYWNrcyIsImNsb25lZENhbGxiYWNrcyIsImNhbGxiYWNrTmFtZSIsIl9kZWxldGVBbGxDYWxsYmFja1JlZmVyZW5jZXNGb3JFdmVudCIsInRvdGFsRXZlbnRzIiwiX2RlbGV0ZUFsbENhbGxiYWNrUmVmZXJlbmNlcyIsIl9nZXRNYXBwaW5ncyIsImNsb25lZE1hcHBpbmdzIiwibWFwcGluZyIsInRvdGFsQ2FsbGJhY2tzIiwiZm4iLCJhcmd1bWVudHMiLCJjYWxsYmFja0lkIiwiZm5Ub1JlbW92ZSIsInJlcGxhY2VDYWxsYmFjayIsIm9sZEZuIiwibmV3Rm4iLCJyZXBsYWNlQWxsQ2FsbGJhY2tzIiwiYWRkRXZlbnROYW1lIiwiYWRkTXVsdGlwbGVFdmVudE5hbWVzIiwiZXZlbnROYW1lcyIsIkFycmF5IiwiY3VycmVudEV2ZW50TmFtZSIsInJlbW92ZUV2ZW50TmFtZSIsImdldFN0cmljdE1vZGUiLCJzZXRTdHJpY3RNb2RlIiwidXNlU3RyaWN0TW9kZSIsImdldFRyaWdnZXJBc3luYyIsInNldFRyaWdnZXJBc3luYyIsInVzZUFzeW5jIiwiZGVmaW5lIiwibW9kdWxlIiwiZXhwb3J0cyIsInR5cGUiLCJyZXF1aXJlIiwianNvbnBJRCIsInJzY3JpcHQiLCJzY3JpcHRUeXBlUkUiLCJ4bWxUeXBlUkUiLCJqc29uVHlwZSIsImh0bWxUeXBlIiwiYmxhbmtSRSIsImFqYXgiLCJvcHRpb25zIiwic2V0dGluZ3MiLCJleHRlbmQiLCJ1bmRlZmluZWQiLCJhamF4U3RhcnQiLCJjcm9zc0RvbWFpbiIsInRlc3QiLCJ1cmwiLCJSZWdFeHAiLCIkMiIsImxvY2F0aW9uIiwiaG9zdCIsImRhdGFUeXBlIiwiaGFzUGxhY2Vob2xkZXIiLCJhcHBlbmRRdWVyeSIsIkpTT05QIiwidG9TdHJpbmciLCJzZXJpYWxpemVEYXRhIiwibWltZSIsImFjY2VwdHMiLCJiYXNlSGVhZGVycyIsInByb3RvY29sIiwiJDEiLCJ4aHIiLCJhYm9ydFRpbWVvdXQiLCJpbmRleE9mIiwic3BsaXQiLCJvdmVycmlkZU1pbWVUeXBlIiwiY29udGVudFR5cGUiLCJoZWFkZXJzIiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVhZHlTdGF0ZSIsImNsZWFyVGltZW91dCIsInJlc3VsdCIsInN0YXR1cyIsIm1pbWVUb0RhdGFUeXBlIiwiZ2V0UmVzcG9uc2VIZWFkZXIiLCJyZXNwb25zZVRleHQiLCJldmFsIiwicmVzcG9uc2VYTUwiLCJhamF4RXJyb3IiLCJhamF4U3VjY2VzcyIsImFzeW5jIiwib3BlbiIsInNldFJlcXVlc3RIZWFkZXIiLCJhamF4QmVmb3JlU2VuZCIsImFib3J0IiwidGltZW91dCIsImVtcHR5Iiwic2VuZCIsInRyaWdnZXJBbmRSZXR1cm4iLCJjb250ZXh0IiwidHJpZ2dlckdsb2JhbCIsImdsb2JhbCIsImFjdGl2ZSIsImFqYXhTdG9wIiwiYmVmb3JlU2VuZCIsImNhbGwiLCJzdWNjZXNzIiwiYWpheENvbXBsZXRlIiwiY29tcGxldGUiLCJzY3JpcHQiLCJoZWFkIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJkb2N1bWVudEVsZW1lbnQiLCJvbmVycm9yIiwicmVwbGFjZSIsImluc2VydEJlZm9yZSIsImZpcnN0Q2hpbGQiLCJYTUxIdHRwUmVxdWVzdCIsImpzb24iLCJ4bWwiLCJodG1sIiwidGV4dCIsInF1ZXJ5IiwicGFyYW0iLCJnZXQiLCJwb3N0IiwiZ2V0SlNPTiIsImVzY2FwZSIsImVuY29kZVVSSUNvbXBvbmVudCIsInNlcmlhbGl6ZSIsInBhcmFtcyIsIm9iaiIsInRyYWRpdGlvbmFsIiwiYXJyYXkiLCJrIiwidiIsInB1c2giLCJqb2luIiwic2xpY2UiLCJmb3JFYWNoIiwic291cmNlIiwiT2JqZWN0IiwidmFsIiwiY2FsbGVlIiwiZXgiLCJub2RlVHlwZSIsIkNsZWFyUHJldmlld3MiLCJjbGVhckJ1dHRvbiIsImNsZWFyQWxsQnV0dG9uIiwiY2xlYXJDb21wbGV0ZWQiLCJjbGVhckFsbCIsImNvbXBsZXRlZFBpbnMiLCJjbGVhciIsInByZXZpZXdQaW5zIiwiZWxlbWVudHMiLCJyZXNldFNlbmRBbGxUb0JvYXJkIiwiUGluUHJldmlldyIsInRlbXBsYXRlIiwiaW5zdGFuY2UiLCJpbXBvcnROb2RlIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsInByZXZpZXdDb250YWluZXIiLCJ0aGVGaWxlIiwicHJldmlld0ltYWdlIiwicmVhZEFzRGF0YVVSTCIsIklzQXV0aGVudGljYXRlZCIsIm9yaWdpbiIsIkJ1Z3NuYWciLCJyZWxlYXNlU3RhZ2UiLCJub3RpZnlSZWxlYXNlU3RhZ2VzIiwiQUpBWCIsImJhc2VVcmwiLCJhcGlWZXJzaW9uIiwiZW5kcG9pbnQiLCJfYnVpbGRVcmwiLCJfZmV0Y2giLCJBbmFseXRpY3MiLCJndGFnIiwiRXJyb3JVdGlsIiwibm90aWZ5RXhjZXB0aW9uIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7cWpCQ2hFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUE7Ozs7O0lBS3FCQSxHOzs7Ozs7Ozs7QUFFakI7Ozs7OzBDQUt5QjtBQUNyQixtQkFBTyxvQkFBVUMsR0FBVixDQUFjLG9CQUFVQyxrQkFBVixFQUFkLE1BQWtELElBQXpEO0FBQ0g7O0FBRUQ7Ozs7Ozs7Ozs7Z0NBT2U7QUFDWCxtQkFBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3BDQyxvQkFBSUMsSUFBSixDQUFTO0FBQ0xDLDJCQUFPLHFCQURGLEVBQ3lCO0FBQzlCQyw0QkFBUTtBQUZILGlCQUFUO0FBSUFILG9CQUFJSSxLQUFKLENBQVUsRUFBQ0MsT0FBTywyQkFBUixFQUFWLEVBQWdELGdCQUFlO0FBQUEsd0JBQWJDLE9BQWEsUUFBYkEsT0FBYTs7QUFDM0ROLHdCQUFJTyxVQUFKLENBQWVELE9BQWY7QUFDQVIsNEJBQVFRLE9BQVI7QUFDSCxpQkFIRDtBQUlILGFBVE0sQ0FBUDtBQVVIOztBQUVEOzs7Ozs7OzsrQkFLYztBQUNWLG1CQUFPLElBQUlULE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDcEMsK0JBQUtTLElBQUwsQ0FBVSxVQUFWLEVBQXNCQyxJQUF0QixFQUNLQyxJQURMLENBQ1VaLE9BRFYsRUFFS2EsS0FGTCxDQUVXWixNQUZYO0FBR0gsYUFKTSxDQUFQO0FBS0g7O0FBRUQ7Ozs7Ozs7O2lDQUtnQjtBQUNaLG1CQUFPLElBQUlGLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDcEMsK0JBQUtKLEdBQUwsQ0FBUyxZQUFULEVBQXVCO0FBQ25CaUIsa0NBQWMsb0JBQVVqQixHQUFWLENBQWMsb0JBQVVDLGtCQUFWLEVBQWQ7QUFESyxpQkFBdkIsRUFFRyxJQUZILEVBR0tjLElBSEwsQ0FHVSxpQkFBWTtBQUFBLHdCQUFWRCxJQUFVLFNBQVZBLElBQVU7O0FBQ2RBLHlCQUFLSSxJQUFMLENBQVUsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKLEVBQVU7QUFDaEIsNEJBQUlDLFFBQVFGLEVBQUVHLElBQUYsQ0FBT0MsV0FBUCxFQUFaO0FBQ0EsNEJBQUlDLFFBQVFKLEVBQUVFLElBQUYsQ0FBT0MsV0FBUCxFQUFaO0FBQ0EsNEJBQUlGLFFBQVFHLEtBQVosRUFBbUI7QUFDZixtQ0FBTyxDQUFDLENBQVI7QUFDSDtBQUNELDRCQUFJSCxRQUFRRyxLQUFaLEVBQW1CO0FBQ2YsbUNBQU8sQ0FBUDtBQUNIO0FBQ0QsK0JBQU8sQ0FBUDtBQUNILHFCQVZEOztBQVlBckIsNEJBQVFXLElBQVI7QUFDSCxpQkFqQkw7QUFrQkgsYUFuQk0sQ0FBUDtBQW9CSDs7QUFFRDs7Ozs7Ozs7OztrQ0FPaUJBLEksRUFBTTtBQUNuQixtQkFBTyxJQUFJWixPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3BDLCtCQUFLUyxJQUFMLENBQVUsT0FBVjtBQUNJSSxrQ0FBYyxvQkFBVWpCLEdBQVYsQ0FBYyxvQkFBVUMsa0JBQVYsRUFBZDtBQURsQixtQkFFT2EsSUFGUCxHQUlDQyxJQUpELENBSU1aLE9BSk4sRUFLQ2EsS0FMRCxDQUtPWixNQUxQO0FBTUgsYUFQTSxDQUFQO0FBUUg7Ozs7OztrQkF4RmdCTCxHOzs7Ozs7Ozs7Ozs7O3FqQkN4QnJCOzs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQTs7Ozs7Ozs7QUFFQTs7Ozs7OztJQU9xQjBCLFc7Ozs7Ozs7OztBQUVqQjs7Ozs7Ozs7dUJBUVVDLFMsRUFBV0MsUSxFQUFVO0FBQzNCLDZCQUFPQyxFQUFQLENBQVVGLFNBQVYsRUFBcUJDLFFBQXJCLEVBQStCLEtBQS9CO0FBQ0g7O0FBRUQ7Ozs7Ozs7Ozs7O3dCQVFXRCxTLEVBQVdDLFEsRUFBVTtBQUM1Qiw2QkFBT0UsR0FBUCxDQUFXSCxTQUFYLEVBQXNCQyxRQUF0QjtBQUNIOztBQUVEOzs7Ozs7Ozs7Ozs7eUJBU1lELFMsRUFBV0MsUSxFQUFVO0FBQzdCLDZCQUFPRyxJQUFQLENBQVlKLFNBQVosRUFBdUJDLFFBQXZCO0FBQ0g7O0FBRUQ7Ozs7Ozs7Ozs7OzRCQVFlRCxTLEVBQXNCO0FBQUEsVUFBWFosSUFBVyx1RUFBSixFQUFJOztBQUNqQyw2QkFBT2lCLE9BQVAsQ0FBZUwsU0FBZixFQUEwQlosSUFBMUI7QUFDSDs7Ozs7O2tCQWpEZ0JXLFc7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkE7Ozs7O0lBS3FCTyxTOzs7Ozs7Ozs7QUFFakI7Ozs7O3lDQUs0QjtBQUN4QixhQUFPLHVCQUFQO0FBQ0g7OzttQ0FFcUI7QUFDbEIsYUFBTyxrQkFBUDtBQUNIOztBQUVEOzs7Ozs7Ozs7Ozt3QkFRV0MsRyxFQUFLQyxLLEVBQU87QUFDbkJDLGFBQU9DLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTRCSixHQUE1QixFQUFpQ0MsS0FBakM7QUFDSDs7QUFFRDs7Ozs7Ozs7Ozt3QkFPV0QsRyxFQUFLO0FBQ1osYUFBT0UsT0FBT0MsWUFBUCxDQUFvQkUsT0FBcEIsQ0FBNEJMLEdBQTVCLENBQVA7QUFDSDs7Ozs7O2tCQXBDZ0JELFM7Ozs7Ozs7Ozs7Ozs7cWpCQ3RCckI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUVBOzs7SUFHcUJPLFc7QUFFakIsMkJBQWM7QUFBQTs7QUFBQTs7QUFDVixhQUFLQyxhQUFMLEdBQXFCLDZCQUFyQjtBQUNBLGFBQUtDLHFCQUFMLEdBQTZCQyxTQUFTQyxhQUFULENBQXVCLHlCQUF2QixDQUE3QjtBQUNBLGFBQUtDLG9CQUFMLEdBQTRCRixTQUFTQyxhQUFULENBQXVCLHlCQUF2QixDQUE1QjtBQUNBLGFBQUtFLG1CQUFMLEdBQTJCSCxTQUFTQyxhQUFULENBQXVCLGlCQUF2QixDQUEzQjtBQUNBLGFBQUtHLGFBQUwsR0FBcUJKLFNBQVNDLGFBQVQsQ0FBdUIsaUJBQXZCLENBQXJCO0FBQ0EsYUFBS0kscUJBQUwsR0FBNkJMLFNBQVNDLGFBQVQsQ0FBdUIsb0JBQXZCLENBQTdCO0FBQ0EsYUFBS0ssb0JBQUwsR0FBNEJOLFNBQVNPLGNBQVQsQ0FBd0IsbUJBQXhCLENBQTVCO0FBQ0EsYUFBS0MsZUFBTCxHQUF1QlIsU0FBU08sY0FBVCxDQUF3QixjQUF4QixDQUF2QjtBQUNBLGFBQUtFLFlBQUwsR0FBb0JULFNBQVNDLGFBQVQsQ0FBdUIsZ0JBQXZCLENBQXBCOztBQUVBO0FBQ0EsOEJBQVlmLEVBQVosQ0FBZSxvQkFBZixFQUFxQyxZQUFNO0FBQ3ZDLGtCQUFLdEIsSUFBTDtBQUNILFNBRkQ7QUFHSDs7QUFFRDs7Ozs7OzsrQkFHTztBQUNILGlCQUFLOEMsd0JBQUw7QUFDQSxpQkFBS0MsZUFBTDtBQUNIOztBQUVEOzs7Ozs7bURBRzJCO0FBQ3ZCLGlCQUFLVCxvQkFBTCxDQUEwQlUsU0FBMUIsQ0FBb0NDLE1BQXBDLENBQTJDLFFBQTNDLEVBQXFELEtBQXJEO0FBQ0g7O0FBRUQ7Ozs7OzttREFHMkI7QUFDdkIsaUJBQUtYLG9CQUFMLENBQTBCVSxTQUExQixDQUFvQ0MsTUFBcEMsQ0FBMkMsUUFBM0MsRUFBcUQsSUFBckQ7QUFDSDs7QUFFRDs7Ozs7Ozs7MENBS2tCO0FBQUE7O0FBQ2QsaUJBQUtWLG1CQUFMLENBQXlCVyxnQkFBekIsQ0FBMEMsT0FBMUMsRUFBbUQsWUFBTTtBQUNyRCx1QkFBS0MsVUFBTCxDQUFnQixJQUFoQixFQUNDMUMsSUFERCxDQUNNLGtCQUFVO0FBQ1osMkJBQUsyQyxrQkFBTCxDQUF3QkMsTUFBeEI7QUFDSCxpQkFIRCxFQUlDM0MsS0FKRCxDQUlPLG9CQUFZO0FBQ2Y0Qyw0QkFBUUMsS0FBUixDQUFjQyxRQUFkO0FBQ0gsaUJBTkQ7QUFPSCxhQVJEOztBQVVBLGlCQUFLaEIsYUFBTCxDQUFtQlUsZ0JBQW5CLENBQW9DLE1BQXBDLEVBQTRDLGFBQUs7QUFDN0Msb0JBQUlPLEVBQUVDLE1BQUYsQ0FBU0MsT0FBVCxDQUFpQixPQUFqQixDQUFKLEVBQStCO0FBQzNCRixzQkFBRUMsTUFBRixDQUFTVixTQUFULENBQW1CQyxNQUFuQixDQUEwQixTQUExQixFQUFxQ1EsRUFBRUMsTUFBRixDQUFTOUIsS0FBVCxLQUFtQixFQUF4RDtBQUNIO0FBQ0osYUFKRDs7QUFNQSxpQkFBS2EscUJBQUwsQ0FBMkJTLGdCQUEzQixDQUE0QyxPQUE1QyxFQUFxRCxZQUFNO0FBQ3ZELG9CQUFJLE9BQUtVLGNBQUwsRUFBSixFQUEyQjtBQUN2QiwyQkFBS0MsVUFBTDtBQUNIO0FBQ0osYUFKRDs7QUFNQSxpQkFBS25CLG9CQUFMLENBQTBCUSxnQkFBMUIsQ0FBMkMsUUFBM0MsRUFBcUQsYUFBSztBQUN0RCxvQkFBTVksYUFBYUwsRUFBRUMsTUFBRixDQUFTOUIsS0FBNUI7O0FBRUEsb0JBQUlrQyxlQUFlLEVBQW5CLEVBQXVCO0FBQ25CLDJCQUFLQyxvQkFBTCxDQUEwQkQsVUFBMUI7QUFDSDtBQUNKLGFBTkQ7O0FBUUEsaUJBQUtsQixlQUFMLENBQXFCb0IsUUFBckIsR0FBZ0M7QUFBQSx1QkFBSyxPQUFLQyxvQkFBTCxDQUEwQlIsQ0FBMUIsQ0FBTDtBQUFBLGFBQWhDOztBQUVBckIscUJBQVNDLGFBQVQsQ0FBdUIsc0JBQXZCLEVBQStDYSxnQkFBL0MsQ0FBZ0UsT0FBaEUsRUFBeUUsYUFBSztBQUMxRSx1QkFBS2dCLGlCQUFMO0FBQ0gsYUFGRDs7QUFJQTlCLHFCQUFTQyxhQUFULENBQXVCLGdCQUF2QixFQUF5Q2EsZ0JBQXpDLENBQTBELE9BQTFELEVBQW1FLGFBQUs7QUFDcEUsb0JBQUlPLEVBQUVDLE1BQUYsQ0FBU1YsU0FBVCxDQUFtQm1CLFFBQW5CLENBQTRCLGVBQTVCLENBQUosRUFBa0Q7QUFDOUMsMkJBQUtDLGlCQUFMO0FBQ0g7QUFDSixhQUpEOztBQU1BaEMscUJBQVNDLGFBQVQsQ0FBdUIscUJBQXZCLEVBQThDYSxnQkFBOUMsQ0FBK0QsT0FBL0QsRUFBd0UsYUFBSztBQUN6RSx1QkFBS2tCLGlCQUFMO0FBQ0gsYUFGRDs7QUFJQTtBQUNBLGlCQUFLakIsVUFBTCxHQUFrQjFDLElBQWxCLENBQXVCLGtCQUFVO0FBQzdCLHVCQUFLMkMsa0JBQUwsQ0FBd0JDLE1BQXhCO0FBQ0gsYUFGRDtBQUdIOztBQUVEOzs7Ozs7Ozs7Ozs2Q0FRcUJJLEMsRUFBRztBQUFBOztBQUNwQixnQkFBTVksUUFBUVosRUFBRUMsTUFBaEI7O0FBRUEsZ0JBQUlXLE1BQU1DLEtBQU4sQ0FBWUMsTUFBWixLQUF1QixDQUEzQixFQUE4QjtBQUMxQjtBQUNIOztBQUVEbkMscUJBQVNDLGFBQVQsQ0FBdUIsY0FBdkIsRUFBdUNXLFNBQXZDLENBQWlEQyxNQUFqRCxDQUF3RCxPQUF4RCxFQUFpRSxLQUFqRTtBQUNBYixxQkFBU0MsYUFBVCxDQUF1QixjQUF2QixFQUF1Q1csU0FBdkMsQ0FBaURDLE1BQWpELENBQXdELFFBQXhELEVBQWtFLElBQWxFO0FBQ0FiLHFCQUFTQyxhQUFULENBQXVCLHdCQUF2QixFQUFpRFcsU0FBakQsQ0FBMkRDLE1BQTNELENBQWtFLFVBQWxFLEVBQThFLElBQTlFO0FBQ0FiLHFCQUFTQyxhQUFULENBQXVCLGFBQXZCLEVBQXNDbUMsU0FBdEMsR0FBa0QsaUJBQWxEO0FBQ0EsaUJBQUtyQyxxQkFBTCxDQUEyQmEsU0FBM0IsQ0FBcUNDLE1BQXJDLENBQTRDLFFBQTVDLEVBQXNELEtBQXREOztBQUVBcEIsbUJBQU80QyxVQUFQLENBQWtCLFlBQU07QUFBRTtBQUN0QixxQkFBSyxJQUFJQyxJQUFJLENBQWIsRUFBaUJBLElBQUlMLE1BQU1DLEtBQU4sQ0FBWUMsTUFBakMsRUFBMENHLEdBQTFDLEVBQStDO0FBQzNDLHdCQUFJQyxPQUFPTixNQUFNQyxLQUFOLENBQVlJLENBQVosQ0FBWDtBQUNBLHdCQUFJRSxhQUFhLHlCQUFlRCxJQUFmLENBQWpCO0FBQ0EsMkJBQUt4QyxxQkFBTCxDQUEyQkUsYUFBM0IsQ0FBeUMsaUJBQXpDLEVBQTREd0MsV0FBNUQsQ0FBd0VELFdBQVdFLE1BQVgsRUFBeEU7QUFDSDtBQUNKLGFBTkQsRUFNRyxHQU5IO0FBT0g7O0FBRUQ7Ozs7Ozs7Ozs7cUNBTzhCO0FBQUEsZ0JBQW5CQyxTQUFtQix1RUFBUCxLQUFPOztBQUMxQixtQkFBTyxJQUFJbkYsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUNwQyxvQkFBTXVELFNBQVMsb0JBQVUzRCxHQUFWLENBQWMsb0JBQVVzRixZQUFWLEVBQWQsQ0FBZjtBQUNBLG9CQUFJM0IsV0FBVyxJQUFYLElBQW1CLENBQUMwQixTQUF4QixFQUFtQztBQUMvQmxGLDRCQUFRb0YsS0FBS0MsS0FBTCxDQUFXN0IsTUFBWCxDQUFSO0FBQ0E7QUFDSDs7QUFFRCw4QkFBSThCLE1BQUosR0FDQzFFLElBREQsQ0FDTSxVQUFDNEMsTUFBRCxFQUFZO0FBQ2Qsd0NBQVUrQixHQUFWLENBQWMsb0JBQVVKLFlBQVYsRUFBZCxFQUF3Q0MsS0FBS0ksU0FBTCxDQUFlaEMsTUFBZixDQUF4QztBQUNBeEQsNEJBQVF3RCxNQUFSO0FBQ0gsaUJBSkQsRUFLQzNDLEtBTEQsQ0FLTyxVQUFDOEMsUUFBRCxFQUFjO0FBQ2pCMUQsMkJBQU8wRCxRQUFQO0FBQ0gsaUJBUEQ7QUFRSCxhQWZNLENBQVA7QUFnQkg7O0FBRUQ7Ozs7Ozs7Ozs7MkNBT21CSCxNLEVBQVE7QUFDdkIsZ0JBQU1pQyxhQUFhbEQsU0FBU08sY0FBVCxDQUF3QixrQkFBeEIsRUFBNEM0QyxPQUE1QyxDQUFvRGxELGFBQXBELENBQWtFLGNBQWxFLENBQW5CO0FBQ0FpRCx1QkFBV0UsU0FBWCxHQUF1QixFQUF2QixDQUZ1QixDQUVJOztBQUUzQixnQkFBSW5DLE9BQU9rQixNQUFQLEtBQWtCLENBQXRCLEVBQXlCO0FBQ3JCLG9CQUFJa0IsU0FBUyxLQUFLQyw0QkFBTCxDQUFrQyxFQUFDQyxJQUFJLEVBQUwsRUFBUzNFLDZDQUFULEVBQWxDLENBQWI7QUFDQXNFLDJCQUFXVCxXQUFYLENBQXVCWSxNQUF2QjtBQUNBckQseUJBQVNDLGFBQVQsQ0FBdUIsb0JBQXZCLEVBQTZDVyxTQUE3QyxDQUF1REMsTUFBdkQsQ0FBOEQsUUFBOUQsRUFBd0UsSUFBeEUsRUFIcUIsQ0FHMEQ7QUFDL0U7QUFDSDs7QUFFRDtBQUNBYixxQkFBU0MsYUFBVCxDQUF1QixvQkFBdkIsRUFBNkNXLFNBQTdDLENBQXVEQyxNQUF2RCxDQUE4RCxRQUE5RCxFQUF3RSxLQUF4RTs7QUFFQSxpQkFBSyxJQUFJeUIsSUFBSSxDQUFiLEVBQWlCQSxJQUFJckIsT0FBT2tCLE1BQTVCLEVBQXFDRyxHQUFyQyxFQUEwQztBQUN0QyxvQkFBSWtCLFFBQVF2QyxPQUFPcUIsQ0FBUCxDQUFaO0FBQ0Esb0JBQUllLFVBQVMsS0FBS0MsNEJBQUwsQ0FBa0NFLEtBQWxDLENBQWI7QUFDQU4sMkJBQVdULFdBQVgsQ0FBdUJZLE9BQXZCO0FBQ0g7O0FBRUQ7QUFDQSxnQkFBTUksNkJBQTZCekQsU0FBUzBELGdCQUFULENBQTBCLGNBQTFCLENBQW5DO0FBQ0EsaUJBQUssSUFBSXBCLEtBQUksQ0FBYixFQUFpQkEsS0FBSW1CLDJCQUEyQnRCLE1BQWhELEVBQXlERyxJQUF6RCxFQUE4RDtBQUMxRCxvQkFBSXFCLFNBQVNGLDJCQUEyQm5CLEVBQTNCLENBQWI7QUFDQXFCLHVCQUFPUCxTQUFQLEdBQW1CLEVBQW5COztBQUVBO0FBQ0Esb0JBQUlPLE9BQU9KLEVBQVAsS0FBYyxtQkFBbEIsRUFBdUM7QUFDbkMsd0JBQUlGLFdBQVMsS0FBS0MsNEJBQUwsQ0FBa0MsRUFBQzFFLE1BQU0sS0FBUCxFQUFjMkUsSUFBSSxFQUFsQixFQUFsQyxDQUFiO0FBQ0FJLDJCQUFPbEIsV0FBUCxDQUFtQlksUUFBbkI7QUFDSDs7QUFFRCxxQkFBSyxJQUFJZixNQUFJLENBQWIsRUFBaUJBLE1BQUlyQixPQUFPa0IsTUFBNUIsRUFBcUNHLEtBQXJDLEVBQTBDO0FBQ3RDLHdCQUFJa0IsU0FBUXZDLE9BQU9xQixHQUFQLENBQVo7QUFDQSx3QkFBSWUsV0FBUyxLQUFLQyw0QkFBTCxDQUFrQ0UsTUFBbEMsQ0FBYjtBQUNBRywyQkFBT2xCLFdBQVAsQ0FBbUJZLFFBQW5CO0FBQ0g7QUFDSjtBQUNKOztBQUVEOzs7Ozs7Ozs7O3FEQU82QkcsSyxFQUFPO0FBQ2hDLGdCQUFNSCxTQUFTckQsU0FBUzRELGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZjtBQUNBUCxtQkFBTzdELEtBQVAsR0FBZWdFLE1BQU1ELEVBQXJCO0FBQ0FGLG1CQUFPakIsU0FBUCxHQUFtQm9CLE1BQU01RSxJQUF6QjtBQUNBLG1CQUFPeUUsTUFBUDtBQUNIOztBQUVEOzs7Ozs7Ozs7NkNBTXFCUSxRLEVBQVU7QUFDM0I7QUFDQSxnQkFBTUMscUJBQXFCOUQsU0FBUzBELGdCQUFULENBQTBCLDJCQUExQixDQUEzQjtBQUNBLGlCQUFLLElBQUlwQixJQUFJLENBQWIsRUFBaUJBLElBQUl3QixtQkFBbUIzQixNQUF4QyxFQUFpREcsR0FBakQsRUFBc0Q7QUFDbEQsb0JBQUl5QixrQkFBa0JELG1CQUFtQnhCLENBQW5CLENBQXRCOztBQUVBeUIsZ0NBQWdCdkUsS0FBaEIsR0FBd0JxRSxRQUF4QjtBQUNIO0FBQ0o7O0FBRUQ7Ozs7Ozs7Ozs7O3lDQVFpQjtBQUNiLGdCQUFNRyxXQUFXaEUsU0FBUzBELGdCQUFULENBQTBCLG9CQUExQixDQUFqQjtBQUNBLGdCQUFJdkMsUUFBUSxLQUFaO0FBQ0EsZ0JBQUk4QyxXQUFXLENBQWY7O0FBSGEsdUNBS0ozQixDQUxJO0FBTVQsb0JBQUk0QixVQUFVRixTQUFTMUIsQ0FBVCxDQUFkOztBQUVBLG9CQUFNNkIsZ0JBQWdCRCxRQUFRakUsYUFBUixDQUFzQixpQkFBdEIsQ0FBdEI7QUFDQSxvQkFBTW1FLE9BQU9ELGNBQWNsRSxhQUFkLENBQTRCLE9BQTVCLEVBQXFDVCxLQUFsRDs7QUFFQSxvQkFBSTRFLFNBQVMsRUFBYixFQUFpQjtBQUNiLHdCQUFJQSxRQUFPRixRQUFRakUsYUFBUixDQUFzQixPQUF0QixDQUFYO0FBQ0FtRSwwQkFBS3hELFNBQUwsQ0FBZUMsTUFBZixDQUFzQixTQUF0QixFQUFpQyxJQUFqQztBQUNBdUQsMEJBQUtILFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0Esd0JBQUlBLGFBQWEsQ0FBakIsRUFBb0I7QUFDaEJHLDhCQUFLQyxLQUFMO0FBQ0FGLHNDQUFjRyxPQUFkLENBQXNCQyxPQUF0QixHQUFnQ0osY0FBY0csT0FBZCxDQUFzQkUsT0FBdEQ7O0FBRUE7QUFDQUosOEJBQUt0RCxnQkFBTCxDQUFzQixNQUF0QixFQUE4QixhQUFLO0FBQy9CcUQsMENBQWNNLGVBQWQsQ0FBOEIsY0FBOUI7QUFDSCx5QkFGRDtBQUdIO0FBQ0RSO0FBQ0E5Qyw0QkFBUSxJQUFSO0FBQ0g7QUExQlE7O0FBS2IsaUJBQUssSUFBSW1CLElBQUksQ0FBYixFQUFpQkEsSUFBSTBCLFNBQVM3QixNQUE5QixFQUF1Q0csR0FBdkMsRUFBNEM7QUFBQSxzQkFBbkNBLENBQW1DO0FBc0IzQzs7QUFFRCxtQkFBT25CLFVBQVUsS0FBakI7QUFDSDs7QUFFRDs7Ozs7Ozs7O3FDQU1hO0FBQ1QsZ0JBQU02QyxXQUFXaEUsU0FBUzBELGdCQUFULENBQTBCLG9CQUExQixDQUFqQjs7QUFEUyx5Q0FHQXBCLENBSEE7QUFJTCxvQkFBSTRCLFVBQVVGLFNBQVMxQixDQUFULENBQWQ7O0FBRUE7QUFDQSxvQkFBSTRCLFFBQVFJLE9BQVIsQ0FBZ0JJLE1BQXBCLEVBQTRCO0FBQ3hCO0FBQ0g7O0FBRUQsb0JBQU1DLFlBQVlULFFBQVFqRSxhQUFSLENBQXNCLGdCQUF0QixFQUF3QzJFLEdBQTFEO0FBQ0Esb0JBQU1SLE9BQVlGLFFBQVFqRSxhQUFSLENBQXNCLE9BQXRCLEVBQStCVCxLQUFqRDtBQUNBLG9CQUFNZ0UsUUFBWVUsUUFBUWpFLGFBQVIsQ0FBc0IsY0FBdEIsRUFBc0NULEtBQXhEO0FBQ0Esb0JBQU1xRixPQUFZWCxRQUFRakUsYUFBUixDQUFzQixPQUF0QixFQUErQlQsS0FBakQ7O0FBRUEwRSx3QkFBUXRELFNBQVIsQ0FBa0JDLE1BQWxCLENBQXlCLFNBQXpCLEVBQW9DLElBQXBDO0FBQ0EsdUJBQU9xRCxRQUFRSSxPQUFSLENBQWdCUSxRQUF2QixDQWpCSyxDQWlCNEI7O0FBRWpDLG9CQUFJO0FBQ0Esa0NBQUlDLFNBQUosQ0FBYztBQUNWdkIsK0JBQU9BLEtBREcsRUFDSTtBQUNkd0Isc0NBQWNMLFNBRko7QUFHVlAsOEJBQU1BLElBSEk7QUFJVlMsOEJBQU1BO0FBSkkscUJBQWQsRUFNQ3hHLElBTkQsQ0FNTSxvQkFBWTtBQUNkNkYsZ0NBQVFJLE9BQVIsQ0FBZ0JJLE1BQWhCLEdBQXlCLElBQXpCO0FBQ0FSLGdDQUFRdEQsU0FBUixDQUFrQkMsTUFBbEIsQ0FBeUIsU0FBekIsRUFBb0MsS0FBcEM7QUFDQSw0Q0FBVW9FLFVBQVY7QUFDSCxxQkFWRCxFQVdDM0csS0FYRCxDQVdPLGVBQU87QUFDViw0Q0FBVTRHLEdBQVYsQ0FBYyxJQUFJQyxLQUFKLENBQVUsNkJBQVYsQ0FBZCxFQUF3RDtBQUNwREMsc0NBQVU7QUFDTix5Q0FBU0M7QUFESCw2QkFEMEM7QUFJcERDLHNDQUFVO0FBSjBDLHlCQUF4RDtBQU1ILHFCQWxCRDtBQW1CSCxpQkFwQkQsQ0FvQkUsT0FBT0MsU0FBUCxFQUFrQjtBQUNoQix3Q0FBVUwsR0FBVixDQUFjLElBQUlDLEtBQUosQ0FBVSwwQ0FBVixDQUFkLEVBQXFFO0FBQ2pFQyxrQ0FBVTtBQUNOLHlDQUFhRztBQURQLHlCQUR1RDtBQUlqRUQsa0NBQVU7QUFKdUQscUJBQXJFO0FBTUg7QUE5Q0k7O0FBR1QsaUJBQUssSUFBSWhELElBQUksQ0FBYixFQUFpQkEsSUFBSTBCLFNBQVM3QixNQUE5QixFQUF1Q0csR0FBdkMsRUFBNEM7QUFBQSxtQ0FBbkNBLENBQW1DOztBQUFBLDBDQUtwQztBQXVDUDtBQUNKOztBQUVEOzs7Ozs7Ozs0Q0FLb0I7QUFDaEIsaUJBQUs3QixZQUFMLENBQWtCRyxTQUFsQixDQUE0QjRFLE1BQTVCLENBQW1DLFFBQW5DO0FBQ0g7O0FBRUQ7Ozs7Ozs7OzRDQUtvQjtBQUNoQixpQkFBSy9FLFlBQUwsQ0FBa0JHLFNBQWxCLENBQTRCNkUsR0FBNUIsQ0FBZ0MsUUFBaEM7QUFDSDs7Ozs7O2tCQXhWZ0I1RixXOzs7Ozs7Ozs7Ozs7O3FqQkM1QnJCOzs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUE7OztJQUdxQjZGLGE7QUFFakIsNkJBQWM7QUFBQTs7QUFBQTs7QUFDVixhQUFLQyx1QkFBTCxHQUErQjNGLFNBQVNDLGFBQVQsQ0FBdUIsMkJBQXZCLENBQS9CO0FBQ0EsYUFBSzJGLG9CQUFMLEdBQStCNUYsU0FBU0MsYUFBVCxDQUF1QixzQkFBdkIsQ0FBL0I7O0FBRUE7QUFDQSw4QkFBWWYsRUFBWixDQUFlLHdCQUFmLEVBQXlDLFlBQU07QUFDM0Msa0JBQUt0QixJQUFMO0FBQ0gsU0FGRDtBQUdIOztBQUVEOzs7Ozs7Ozs7K0JBS087QUFDSCxpQkFBS2lJLDJCQUFMO0FBQ0EsaUJBQUtsRixlQUFMO0FBQ0g7O0FBRUQ7Ozs7OztzREFHOEI7QUFDMUIsaUJBQUtnRix1QkFBTCxDQUE2Qi9FLFNBQTdCLENBQXVDQyxNQUF2QyxDQUE4QyxRQUE5QyxFQUF3RCxLQUF4RDtBQUNBLGtDQUFZeEIsT0FBWixDQUFvQixzQkFBcEI7QUFDSDs7QUFFRDs7Ozs7O3NEQUc4QjtBQUMxQixpQkFBS3NHLHVCQUFMLENBQTZCL0UsU0FBN0IsQ0FBdUNDLE1BQXZDLENBQThDLFFBQTlDLEVBQXdELElBQXhEO0FBQ0Esa0NBQVl4QixPQUFaLENBQW9CLHVCQUFwQjtBQUNIOztBQUVEOzs7Ozs7OzswQ0FLa0I7QUFBQTs7QUFDZCxpQkFBS3VHLG9CQUFMLENBQTBCOUUsZ0JBQTFCLENBQTJDLE9BQTNDLEVBQW9ELFlBQU07QUFDdEQsOEJBQUlnRixLQUFKLEdBQ0N6SCxJQURELENBQ00sZ0JBQW1CO0FBQUEsd0JBQWpCMEgsV0FBaUIsUUFBakJBLFdBQWlCOztBQUNyQix3Q0FBVS9DLEdBQVYsQ0FBYyxvQkFBVXpGLGtCQUFWLEVBQWQsRUFBOEN3SSxXQUE5QztBQUNBLDBDQUFZMUcsT0FBWixDQUFvQixvQkFBcEI7QUFDSCxpQkFKRCxFQUtDZixLQUxELENBS08sVUFBQzhDLFFBQUQsRUFBYztBQUNqQkYsNEJBQVFDLEtBQVIsQ0FBY0MsUUFBZDtBQUNILGlCQVBEO0FBUUgsYUFURDs7QUFXQTtBQUNBLGtDQUFZbEMsRUFBWixDQUFlLG9CQUFmLEVBQXFDLGFBQUs7QUFDdEMsdUJBQUs4RywyQkFBTDtBQUNILGFBRkQ7QUFHSDs7Ozs7O2tCQTNEZ0JOLGE7Ozs7Ozs7Ozs7O0FDeEJyQixDQUFDLFlBQVk7O0FBRVQ7O0FBRUEsYUFBU08sTUFBVCxHQUNBO0FBQ0k7QUFDQTtBQUNBO0FBQ0EsaUJBQVNDLGVBQVQsQ0FBMEJDLFVBQTFCLEVBQXNDQyxvQkFBdEMsRUFBNERDLFVBQTVELEVBQXdFOztBQUVwRSxpQkFBS0MsT0FBTCxHQUFlLGVBQWVILFVBQWYsR0FBNEIsSUFBNUIsR0FBbUNDLG9CQUFuQyxHQUEwRCxrQkFBMUQsR0FBK0VDLFVBQTlGO0FBQ0EsZ0JBQUlsRixRQUFRLElBQUlnRSxLQUFKLENBQVUsS0FBS21CLE9BQWYsQ0FBWjtBQUNBLGdCQUFJLE9BQU9uRixNQUFNb0YsS0FBYixLQUF1QixXQUEzQixFQUF3QyxLQUFLQSxLQUFMLEdBQWFwRixNQUFNb0YsS0FBbkI7QUFDM0M7QUFDREwsd0JBQWdCTSxTQUFoQixHQUE0QixJQUFJckIsS0FBSixFQUE1QjtBQUNBZSx3QkFBZ0JNLFNBQWhCLENBQTBCNUgsSUFBMUIsR0FBaUNzSCxnQkFBZ0J0SCxJQUFqRDtBQUNBc0gsd0JBQWdCTSxTQUFoQixDQUEwQkMsV0FBMUIsR0FBd0NQLGVBQXhDOztBQUVBLGlCQUFTUSxjQUFULENBQXlCUCxVQUF6QixFQUFxQ1EsYUFBckMsRUFBb0RDLFNBQXBELEVBQStEQyxZQUEvRCxFQUE2RTs7QUFFekUsaUJBQUtQLE9BQUwsR0FBZSxlQUFlSCxVQUFmLEdBQTRCLHlCQUE1QixHQUF3RFEsYUFBeEQsR0FBd0UsaUJBQXhFLEdBQTRGRSxZQUE1RixHQUEyRyx1QkFBM0csV0FBNElELFNBQTVJLHlDQUE0SUEsU0FBNUksRUFBZjtBQUNBLGdCQUFJekYsUUFBUSxJQUFJMkYsU0FBSixDQUFjLEtBQUtSLE9BQW5CLENBQVo7QUFDQSxnQkFBSSxPQUFPbkYsTUFBTW9GLEtBQWIsS0FBdUIsV0FBM0IsRUFBd0MsS0FBS0EsS0FBTCxHQUFhcEYsTUFBTW9GLEtBQW5CO0FBQzNDO0FBQ0RHLHVCQUFlRixTQUFmLEdBQTJCLElBQUlNLFNBQUosRUFBM0I7QUFDQUosdUJBQWVGLFNBQWYsQ0FBeUI1SCxJQUF6QixHQUFnQzhILGVBQWU5SCxJQUEvQztBQUNBOEgsdUJBQWVGLFNBQWYsQ0FBeUJDLFdBQXpCLEdBQXVDQyxjQUF2Qzs7QUFFQSxpQkFBU0ssb0JBQVQsQ0FBK0JaLFVBQS9CLEVBQTJDOztBQUV2QyxpQkFBS0csT0FBTCxHQUFlLGVBQWVILFVBQWYsR0FBNEIsZ0VBQTNDO0FBQ0EsZ0JBQUloRixRQUFRLElBQUlnRSxLQUFKLENBQVUsS0FBS21CLE9BQWYsQ0FBWjtBQUNBLGdCQUFJLE9BQU9uRixNQUFNb0YsS0FBYixLQUF1QixXQUEzQixFQUF3QyxLQUFLQSxLQUFMLEdBQWFwRixNQUFNb0YsS0FBbkI7QUFDM0M7QUFDRFEsNkJBQXFCUCxTQUFyQixHQUFpQyxJQUFJckIsS0FBSixFQUFqQztBQUNBNEIsNkJBQXFCUCxTQUFyQixDQUErQjVILElBQS9CLEdBQXNDbUkscUJBQXFCbkksSUFBM0Q7QUFDQW1JLDZCQUFxQlAsU0FBckIsQ0FBK0JDLFdBQS9CLEdBQTZDTSxvQkFBN0M7O0FBRUEsaUJBQVNDLDBCQUFULENBQXFDYixVQUFyQyxFQUFpRDs7QUFFN0MsaUJBQUtHLE9BQUwsR0FBZSxlQUFlSCxVQUFmLEdBQTRCLGlFQUEzQztBQUNBLGdCQUFJaEYsUUFBUSxJQUFJZ0UsS0FBSixDQUFVLEtBQUttQixPQUFmLENBQVo7QUFDQSxnQkFBSSxPQUFPbkYsTUFBTW9GLEtBQWIsS0FBdUIsV0FBM0IsRUFBd0MsS0FBS0EsS0FBTCxHQUFhcEYsTUFBTW9GLEtBQW5CO0FBQzNDO0FBQ0RTLG1DQUEyQlIsU0FBM0IsR0FBdUMsSUFBSXJCLEtBQUosRUFBdkM7QUFDQTZCLG1DQUEyQlIsU0FBM0IsQ0FBcUM1SCxJQUFyQyxHQUE0Q29JLDJCQUEyQnBJLElBQXZFO0FBQ0FvSSxtQ0FBMkJSLFNBQTNCLENBQXFDQyxXQUFyQyxHQUFtRE8sMEJBQW5EOztBQUVBLGlCQUFTQyxvQkFBVCxDQUErQmQsVUFBL0IsRUFBMkNuSCxTQUEzQyxFQUFzRDs7QUFFbEQsaUJBQUtzSCxPQUFMLEdBQWUsZUFBZUgsVUFBZixHQUE0QixtQkFBNUIsR0FBa0RuSCxTQUFsRCxHQUE4RCw4R0FBN0U7O0FBRUEsZ0JBQUltQyxRQUFRLElBQUlnRSxLQUFKLENBQVUsS0FBS21CLE9BQWYsQ0FBWjtBQUNBLGdCQUFJLE9BQU9uRixNQUFNb0YsS0FBYixLQUF1QixXQUEzQixFQUF3QyxLQUFLQSxLQUFMLEdBQWFwRixNQUFNb0YsS0FBbkI7QUFDM0M7QUFDRFUsNkJBQXFCVCxTQUFyQixHQUFpQyxJQUFJckIsS0FBSixFQUFqQztBQUNBOEIsNkJBQXFCVCxTQUFyQixDQUErQjVILElBQS9CLEdBQXNDcUkscUJBQXFCckksSUFBM0Q7QUFDQXFJLDZCQUFxQlQsU0FBckIsQ0FBK0JDLFdBQS9CLEdBQTZDUSxvQkFBN0M7O0FBR0EsaUJBQVNDLGtCQUFULENBQTZCZixVQUE3QixFQUF5Q25ILFNBQXpDLEVBQW9EOztBQUVoRCxpQkFBS3NILE9BQUwsR0FBZSxlQUFlSCxVQUFmLEdBQTRCLG1CQUE1QixHQUFrRG5ILFNBQWxELEdBQThELHFHQUE3RTs7QUFFQSxnQkFBSW1DLFFBQVEsSUFBSWdFLEtBQUosQ0FBVSxLQUFLbUIsT0FBZixDQUFaO0FBQ0EsZ0JBQUksT0FBT25GLE1BQU1vRixLQUFiLEtBQXVCLFdBQTNCLEVBQXdDLEtBQUtBLEtBQUwsR0FBYXBGLE1BQU1vRixLQUFuQjtBQUMzQztBQUNEVywyQkFBbUJWLFNBQW5CLEdBQStCLElBQUlyQixLQUFKLEVBQS9CO0FBQ0ErQiwyQkFBbUJWLFNBQW5CLENBQTZCNUgsSUFBN0IsR0FBb0NzSSxtQkFBbUJ0SSxJQUF2RDtBQUNBc0ksMkJBQW1CVixTQUFuQixDQUE2QkMsV0FBN0IsR0FBMkNTLGtCQUEzQzs7QUFFQSxZQUFJQyxzQkFBc0IsbUJBQTFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBSUMsUUFBUSxJQUFaO0FBQ0EsWUFBSUMsWUFBWSxFQUFoQjtBQUNBLFlBQUlDLGNBQWMsS0FBbEI7QUFDQSxZQUFJQyxnQkFBZ0IsSUFBcEI7O0FBRUE7QUFDQUgsY0FBTUksT0FBTixHQUFnQjtBQUNadEIsNkJBQWtCQSxlQUROO0FBRVpRLDRCQUFpQkEsY0FGTDtBQUdaSyxrQ0FBdUJBLG9CQUhYO0FBSVpDLHdDQUE0QkEsMEJBSmhCO0FBS1pDLGtDQUF1QkEsb0JBTFg7QUFNWkMsZ0NBQXFCQTtBQU5ULFNBQWhCOztBQVVBO0FBQ0E7QUFDQTtBQUNBRSxjQUFNSyxNQUFOLEdBQWUsRUFBZjs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxpQkFBU0MsWUFBVCxDQUF1QjFJLFNBQXZCLEVBQWtDWixJQUFsQyxFQUF3QztBQUNwQyxpQkFBSyxJQUFJbUYsRUFBVCxJQUFlOEQsVUFBVXJJLFNBQVYsRUFBcUIySSxTQUFwQyxFQUNBO0FBQ0ksb0JBQUlDLGlCQUFpQlAsVUFBVXJJLFNBQVYsRUFBcUIySSxTQUFyQixDQUErQnBFLEVBQS9CLENBQXJCOztBQUVBLG9CQUFJLE9BQU9xRSxlQUFlQyxFQUF0QixLQUE2QixVQUFqQyxFQUE2Q0QsZUFBZUMsRUFBZixDQUFrQnpKLElBQWxCO0FBQzdDLG9CQUFJLE9BQU93SixlQUFleEksSUFBdEIsS0FBK0IsU0FBL0IsSUFBNEN3SSxlQUFleEksSUFBZixLQUF3QixJQUF4RSxFQUE4RWdJLE1BQU1qSSxHQUFOLENBQVVILFNBQVYsRUFBcUI0SSxlQUFlQyxFQUFwQztBQUNqRjtBQUNKOztBQUVELGlCQUFTQyxlQUFULENBQTBCSCxTQUExQixFQUFxQztBQUNqQyxnQkFBSUksa0JBQWtCLEVBQXRCOztBQUVBLGlCQUFLLElBQUlDLFlBQVQsSUFBeUJMLFNBQXpCLEVBQW9DOztBQUVoQ0ksZ0NBQWdCQyxZQUFoQixJQUFnQztBQUM1Qkgsd0JBQUtGLFVBQVVLLFlBQVYsRUFBd0JILEVBREQ7QUFFNUJ6SSwwQkFBT3VJLFVBQVVLLFlBQVYsRUFBd0I1STtBQUZILGlCQUFoQztBQUlIOztBQUVELG1CQUFPMkksZUFBUDtBQUNIOztBQUVELGlCQUFTRSxvQ0FBVCxDQUErQ2pKLFNBQS9DLEVBQ0E7QUFDSSxpQkFBSyxJQUFJdUUsRUFBVCxJQUFlOEQsVUFBVXJJLFNBQVYsRUFBcUIySSxTQUFwQyxFQUNBO0FBQ0ksb0JBQUkxSSxXQUFXb0ksVUFBVXJJLFNBQVYsRUFBcUIySSxTQUFyQixDQUErQnBFLEVBQS9CLEVBQW1Dc0UsRUFBbEQ7O0FBRUE1SSx5QkFBU2tJLG1CQUFULEVBQThCZSxXQUE5Qjs7QUFFQSxvQkFBSWpKLFNBQVNrSSxtQkFBVCxFQUE4QmUsV0FBOUIsS0FBOEMsQ0FBbEQsRUFDQTtBQUNJLDJCQUFPakosU0FBU2tJLG1CQUFULENBQVA7QUFDSCxpQkFIRCxNQUtBO0FBQ0ksMkJBQU9sSSxTQUFTa0ksbUJBQVQsRUFBOEJuSSxTQUE5QixDQUFQO0FBQ0g7QUFDSjtBQUNKOztBQUVELGlCQUFTbUosNEJBQVQsR0FDQTtBQUNJLGlCQUFLLElBQUluSixTQUFULElBQXNCcUksU0FBdEIsRUFDQTtBQUNJWSxxREFBcUNqSixTQUFyQztBQUNIO0FBQ0o7O0FBRUQ7QUFDQW9JLGNBQU1nQixZQUFOLEdBQXFCLFlBQVk7O0FBRTdCO0FBQ0E7QUFDQSxnQkFBSUMsaUJBQWlCLEVBQXJCOztBQUVBLGlCQUFLLElBQUlDLE9BQVQsSUFBb0JqQixTQUFwQixFQUNBO0FBQ0lnQiwrQkFBZUMsT0FBZixJQUEwQjtBQUN0QlgsK0JBQVlHLGdCQUFnQlQsVUFBVWlCLE9BQVYsRUFBbUJYLFNBQW5DLENBRFU7QUFFdEJZLG9DQUFpQmxCLFVBQVVpQixPQUFWLEVBQW1CQztBQUZkLGlCQUExQjtBQUlIOztBQUVELG1CQUFPRixjQUFQO0FBQ0gsU0FmRDs7QUFrQkE7QUFDQTtBQUNBO0FBQ0FqQixjQUFNbEksRUFBTixHQUFXLFVBQVVGLFNBQVYsRUFBcUJ3SixFQUFyQixFQUF5QnBKLElBQXpCLEVBQ1g7QUFDSSxnQkFBSXFKLFVBQVV0RyxNQUFWLEdBQW1CLENBQW5CLElBQXdCc0csVUFBVXRHLE1BQVYsR0FBbUIsQ0FBL0MsRUFDQTtBQUNJLHNCQUFNLElBQUkrRCxlQUFKLENBQW9CLElBQXBCLEVBQTBCLHFDQUExQixFQUFpRXVDLFVBQVV0RyxNQUEzRSxDQUFOO0FBQ0g7O0FBRUQsZ0JBQUksT0FBT25ELFNBQVAsS0FBcUIsUUFBekIsRUFDQTtBQUNJLHNCQUFNLElBQUkwSCxjQUFKLENBQW1CLElBQW5CLEVBQXlCLFlBQXpCLEVBQXVDMUgsU0FBdkMsRUFBa0QsUUFBbEQsQ0FBTjtBQUNILGFBSEQsTUFJSyxJQUFJQSxVQUFVbUQsTUFBVixLQUFxQixDQUF6QixFQUNMO0FBQ0ksc0JBQU0sSUFBSTRFLG9CQUFKLENBQXlCLElBQXpCLENBQU47QUFDSCxhQUhJLE1BSUEsSUFBSU8sZUFBZSxPQUFPRixNQUFNSyxNQUFOLENBQWF6SSxTQUFiLENBQVAsS0FBbUMsV0FBdEQsRUFDTDtBQUNJLHNCQUFNLElBQUlpSSxvQkFBSixDQUF5QixJQUF6QixFQUErQmpJLFNBQS9CLENBQU47QUFDSDs7QUFFRCxnQkFBSSxPQUFPd0osRUFBUCxLQUFjLFVBQWxCLEVBQ0E7QUFDSSxzQkFBTSxJQUFJOUIsY0FBSixDQUFtQixJQUFuQixFQUF5QixVQUF6QixFQUFxQzhCLEVBQXJDLEVBQXlDLFVBQXpDLENBQU47QUFDSDs7QUFFRCxnQkFBSSxPQUFPcEosSUFBUCxLQUFnQixXQUFoQixJQUErQixPQUFPQSxJQUFQLEtBQWdCLFNBQW5ELEVBQ0E7QUFDSSxzQkFBTSxJQUFJc0gsY0FBSixDQUFtQixJQUFuQixFQUF5QixNQUF6QixFQUFpQ3RILElBQWpDLEVBQXVDLFNBQXZDLENBQU47QUFDSDs7QUFFRDtBQUNBLGdCQUFJc0osYUFBYSxJQUFqQjs7QUFFQTtBQUNBLGdCQUFJLE9BQU9yQixVQUFVckksU0FBVixDQUFQLEtBQWdDLFdBQXBDLEVBQ0E7QUFDSTtBQUNBLG9CQUFJLE9BQU93SixHQUFHckIsbUJBQUgsQ0FBUCxLQUFtQyxXQUF2QyxFQUNBO0FBQ0lxQix1QkFBR3JCLG1CQUFILElBQTBCO0FBQ3RCZSxxQ0FBYTtBQURTLHFCQUExQjtBQUdIOztBQUVEO0FBQ0Esb0JBQUksT0FBT00sR0FBR3JCLG1CQUFILEVBQXdCbkksU0FBeEIsQ0FBUCxLQUE4QyxXQUFsRCxFQUNBO0FBQ0kwSixpQ0FBYXJCLFVBQVVySSxTQUFWLEVBQXFCdUosY0FBbEM7O0FBRUFsQiw4QkFBVXJJLFNBQVYsRUFBcUJ1SixjQUFyQjs7QUFFQWxCLDhCQUFVckksU0FBVixFQUFxQjJJLFNBQXJCLENBQStCZSxVQUEvQixJQUE2QztBQUN6Q2IsNEJBQUtXLEVBRG9DO0FBRXpDcEosOEJBQU8sT0FBT0EsSUFBUCxLQUFnQixTQUFoQixHQUE0QkEsSUFBNUIsR0FBbUM7QUFGRCxxQkFBN0M7O0FBS0E7QUFDQW9KLHVCQUFHckIsbUJBQUgsRUFBd0JuSSxTQUF4QixJQUFxQzBKLFVBQXJDO0FBQ0FGLHVCQUFHckIsbUJBQUgsRUFBd0JlLFdBQXhCO0FBQ0g7O0FBRUQsb0JBQUksT0FBTzlJLElBQVAsS0FBZ0IsU0FBcEIsRUFDQTtBQUNJO0FBQ0FzSixpQ0FBYUYsR0FBR3JCLG1CQUFILEVBQXdCbkksU0FBeEIsQ0FBYjs7QUFFQTtBQUNBcUksOEJBQVVySSxTQUFWLEVBQXFCMkksU0FBckIsQ0FBK0JlLFVBQS9CLEVBQTJDdEosSUFBM0MsR0FBa0RBLElBQWxEO0FBQ0g7QUFDSixhQW5DRCxNQXFDQTtBQUNJO0FBQ0FpSSwwQkFBVXJJLFNBQVYsSUFBdUI7QUFDbkIySSwrQkFBWTtBQURPLGlCQUF2Qjs7QUFJQWUsNkJBQWEsQ0FBYjs7QUFFQXJCLDBCQUFVckksU0FBVixFQUFxQjJJLFNBQXJCLENBQStCZSxVQUEvQixJQUE2QyxFQUFDYixJQUFLVyxFQUFOLEVBQVVwSixNQUFPLENBQUMsQ0FBQ0EsSUFBbkIsRUFBN0M7QUFDQWlJLDBCQUFVckksU0FBVixFQUFxQnVKLGNBQXJCLEdBQXNDLENBQXRDOztBQUVBO0FBQ0Esb0JBQUksT0FBT0MsR0FBR3JCLG1CQUFILENBQVAsS0FBbUMsV0FBdkMsRUFDQTtBQUNJcUIsdUJBQUdyQixtQkFBSCxJQUEwQixFQUExQjtBQUNBcUIsdUJBQUdyQixtQkFBSCxFQUF3QmUsV0FBeEIsR0FBc0MsQ0FBdEM7QUFDSCxpQkFKRCxNQU1BO0FBQ0lNLHVCQUFHckIsbUJBQUgsRUFBd0JlLFdBQXhCO0FBQ0g7O0FBRURNLG1CQUFHckIsbUJBQUgsRUFBd0JuSSxTQUF4QixJQUFxQzBKLFVBQXJDO0FBQ0g7QUFDSixTQS9GRDs7QUFpR0F0QixjQUFNaEksSUFBTixHQUFhLFVBQVVKLFNBQVYsRUFBcUJ3SixFQUFyQixFQUNiO0FBQ0ksZ0JBQUlDLFVBQVV0RyxNQUFWLEtBQXFCLENBQXpCLEVBQ0E7QUFDSSxzQkFBTSxJQUFJK0QsZUFBSixDQUFvQixNQUFwQixFQUE0Qix1QkFBNUIsRUFBcUR1QyxVQUFVdEcsTUFBL0QsQ0FBTjtBQUNILGFBSEQsTUFJSyxJQUFJLE9BQU9uRCxTQUFQLEtBQXFCLFFBQXpCLEVBQ0w7QUFDSSxzQkFBTSxJQUFJMEgsY0FBSixDQUFtQixNQUFuQixFQUEyQixZQUEzQixFQUF5QzFILFNBQXpDLEVBQW9ELFFBQXBELENBQU47QUFDSCxhQUhJLE1BSUEsSUFBSUEsVUFBVW1ELE1BQVYsS0FBcUIsQ0FBekIsRUFDTDtBQUNJLHNCQUFNLElBQUk0RSxvQkFBSixDQUF5QixNQUF6QixDQUFOO0FBQ0gsYUFISSxNQUlBLElBQUlPLGVBQWUsT0FBT0YsTUFBTUssTUFBTixDQUFhekksU0FBYixDQUFQLEtBQW1DLFdBQXRELEVBQ0w7QUFDSSxzQkFBTSxJQUFJaUksb0JBQUosQ0FBeUIsTUFBekIsRUFBaUNqSSxTQUFqQyxDQUFOO0FBQ0g7O0FBRUQsZ0JBQUksT0FBT3dKLEVBQVAsS0FBYyxVQUFsQixFQUNBO0FBQ0ksc0JBQU0sSUFBSTlCLGNBQUosQ0FBbUIsTUFBbkIsRUFBMkIsVUFBM0IsRUFBdUM4QixFQUF2QyxFQUEyQyxVQUEzQyxDQUFOO0FBQ0g7O0FBRURwQixrQkFBTWxJLEVBQU4sQ0FBU0YsU0FBVCxFQUFvQndKLEVBQXBCLEVBQXdCLElBQXhCO0FBQ0gsU0F6QkQ7O0FBMkJBcEIsY0FBTWpJLEdBQU4sR0FBWSxVQUFVSCxTQUFWLEVBQXFCd0osRUFBckIsRUFDWjtBQUNJLGdCQUFJQyxVQUFVdEcsTUFBVixLQUFxQixDQUF6QixFQUNBO0FBQ0k7QUFDQWdHOztBQUVBO0FBQ0FkLDRCQUFZLEVBQVo7O0FBRUE7QUFDSCxhQVRELE1BVUssSUFBSSxPQUFPckksU0FBUCxLQUFxQixRQUF6QixFQUNMO0FBQ0ksc0JBQU0sSUFBSTBILGNBQUosQ0FBbUIsS0FBbkIsRUFBMEIsWUFBMUIsRUFBd0MxSCxTQUF4QyxFQUFtRCxRQUFuRCxDQUFOO0FBQ0gsYUFISSxNQUlBLElBQUlBLFVBQVVtRCxNQUFWLEtBQXFCLENBQXpCLEVBQ0w7QUFDSSxzQkFBTSxJQUFJNEUsb0JBQUosQ0FBeUIsS0FBekIsQ0FBTjtBQUNILGFBSEksTUFJQSxJQUFJTyxlQUFlLE9BQU9GLE1BQU1LLE1BQU4sQ0FBYXpJLFNBQWIsQ0FBUCxLQUFtQyxXQUF0RCxFQUNMO0FBQ0ksc0JBQU0sSUFBSWlJLG9CQUFKLENBQXlCLEtBQXpCLEVBQWdDakksU0FBaEMsQ0FBTjtBQUNIOztBQUVELGdCQUFJLE9BQU9xSSxVQUFVckksU0FBVixDQUFQLEtBQWdDLFdBQXBDLEVBQ0E7QUFDSTtBQUNBO0FBQ0g7O0FBRUQ7QUFDQSxnQkFBSSxPQUFPd0osRUFBUCxLQUFjLFVBQWxCLEVBQ0E7QUFDSTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFJakYsS0FBS2lGLEdBQUdyQixtQkFBSCxFQUF3Qm5JLFNBQXhCLENBQVQ7QUFDQSxvQkFBSTJKLGFBQWF0QixVQUFVckksU0FBVixFQUFxQjJJLFNBQXJCLENBQStCcEUsRUFBL0IsQ0FBakI7O0FBRUEsb0JBQUksT0FBT29GLFVBQVAsS0FBc0IsV0FBMUIsRUFDQTtBQUNJO0FBQ0EsMkJBQU90QixVQUFVckksU0FBVixFQUFxQjJJLFNBQXJCLENBQStCcEUsRUFBL0IsQ0FBUDs7QUFFQTtBQUNBLDJCQUFPaUYsR0FBR3JCLG1CQUFILEVBQXdCbkksU0FBeEIsQ0FBUDs7QUFFQXFJLDhCQUFVckksU0FBVixFQUFxQnVKLGNBQXJCO0FBQ0FDLHVCQUFHckIsbUJBQUgsRUFBd0JlLFdBQXhCOztBQUVBLHdCQUFJYixVQUFVckksU0FBVixFQUFxQnVKLGNBQXJCLEtBQXdDLENBQTVDLEVBQ0E7QUFDSTtBQUNBO0FBQ0EsK0JBQU9sQixVQUFVckksU0FBVixDQUFQO0FBQ0g7O0FBRUQsd0JBQUl3SixHQUFHckIsbUJBQUgsRUFBd0JlLFdBQXhCLEtBQXdDLENBQTVDLEVBQ0E7QUFDSTtBQUNBO0FBQ0EsK0JBQU9NLEdBQUdyQixtQkFBSCxDQUFQO0FBQ0g7QUFDSjtBQUNKLGFBcENELE1BcUNLLElBQUksT0FBT3FCLEVBQVAsS0FBYyxXQUFsQixFQUNMO0FBQ0ksc0JBQU0sSUFBSTlCLGNBQUosQ0FBbUIsS0FBbkIsRUFBMEIsVUFBMUIsRUFBc0M4QixFQUF0QyxFQUEwQyxVQUExQyxDQUFOO0FBQ0gsYUFISSxNQUtMO0FBQ0k7O0FBRUE7QUFDQTtBQUNBUCxxREFBcUNqSixTQUFyQzs7QUFFQTtBQUNBO0FBQ0EsdUJBQU9xSSxVQUFVckksU0FBVixDQUFQO0FBQ0g7QUFDSixTQXJGRDs7QUF1RkE7QUFDQW9JLGNBQU13QixlQUFOLEdBQXdCLFVBQVU1SixTQUFWLEVBQXFCNkosS0FBckIsRUFBNEJDLEtBQTVCLEVBQW1DMUosSUFBbkMsRUFBeUM7O0FBRTdELGdCQUFJLE9BQU9KLFNBQVAsS0FBcUIsUUFBekIsRUFDQTtBQUNJLHNCQUFNLElBQUkwSCxjQUFKLENBQW1CLGlCQUFuQixFQUFzQyxZQUF0QyxFQUFvRDFILFNBQXBELEVBQStELFFBQS9ELENBQU47QUFDSCxhQUhELE1BSUssSUFBSUEsVUFBVW1ELE1BQVYsS0FBcUIsQ0FBekIsRUFDTDtBQUNJLHNCQUFNLElBQUk0RSxvQkFBSixDQUF5QixpQkFBekIsQ0FBTjtBQUNILGFBSEksTUFJQSxJQUFJLE9BQU9NLFVBQVVySSxTQUFWLENBQVAsS0FBZ0MsV0FBcEMsRUFDTDtBQUNJLHNCQUFNLElBQUlrSSxrQkFBSixDQUF1QixpQkFBdkIsRUFBMENsSSxTQUExQyxDQUFOO0FBQ0gsYUFISSxNQUlBLElBQUlzSSxlQUFlLE9BQU9GLE1BQU1LLE1BQU4sQ0FBYXpJLFNBQWIsQ0FBUCxLQUFtQyxXQUF0RCxFQUNMO0FBQ0ksc0JBQU0sSUFBSWlJLG9CQUFKLENBQXlCLGlCQUF6QixFQUE0Q2pJLFNBQTVDLENBQU47QUFDSDs7QUFFRCxnQkFBSSxPQUFPNkosS0FBUCxLQUFpQixVQUFyQixFQUNBO0FBQ0ksc0JBQU0sSUFBSW5DLGNBQUosQ0FBbUIsaUJBQW5CLEVBQXNDLFVBQXRDLEVBQWtEbUMsS0FBbEQsRUFBeUQsVUFBekQsQ0FBTjtBQUNIOztBQUVELGdCQUFJLE9BQU9DLEtBQVAsS0FBaUIsVUFBckIsRUFDQTtBQUNJLHNCQUFNLElBQUlwQyxjQUFKLENBQW1CLGlCQUFuQixFQUFzQyxVQUF0QyxFQUFrRG9DLEtBQWxELEVBQXlELFVBQXpELENBQU47QUFDSDs7QUFFRCxnQkFBSSxPQUFPMUosSUFBUCxLQUFnQixXQUFoQixJQUErQixPQUFPQSxJQUFQLEtBQWdCLFNBQW5ELEVBQ0E7QUFDSSxzQkFBTSxJQUFJc0gsY0FBSixDQUFtQixpQkFBbkIsRUFBc0MsTUFBdEMsRUFBOEN0SCxJQUE5QyxFQUFvRCxTQUFwRCxDQUFOO0FBQ0g7O0FBRURnSSxrQkFBTWpJLEdBQU4sQ0FBVUgsU0FBVixFQUFxQjZKLEtBQXJCO0FBQ0F6QixrQkFBTWxJLEVBQU4sQ0FBU0YsU0FBVCxFQUFvQjhKLEtBQXBCLEVBQTJCMUosSUFBM0I7QUFDSCxTQXBDRDs7QUFzQ0E7QUFDQWdJLGNBQU0yQixtQkFBTixHQUE0QixVQUFVL0osU0FBVixFQUFxQjhKLEtBQXJCLEVBQTRCMUosSUFBNUIsRUFBa0M7O0FBRTFELGdCQUFJLE9BQU9KLFNBQVAsS0FBcUIsUUFBekIsRUFDQTtBQUNJLHNCQUFNLElBQUkwSCxjQUFKLENBQW1CLFNBQW5CLEVBQThCLFlBQTlCLEVBQTRDMUgsU0FBNUMsRUFBdUQsUUFBdkQsQ0FBTjtBQUNILGFBSEQsTUFJSyxJQUFJQSxVQUFVbUQsTUFBVixLQUFxQixDQUF6QixFQUNMO0FBQ0ksc0JBQU0sSUFBSTRFLG9CQUFKLENBQXlCLFNBQXpCLENBQU47QUFDSCxhQUhJLE1BSUEsSUFBSSxPQUFPTSxVQUFVckksU0FBVixDQUFQLEtBQWdDLFdBQXBDLEVBQ0w7QUFDSSxzQkFBTSxJQUFJa0ksa0JBQUosQ0FBdUIsU0FBdkIsRUFBa0NsSSxTQUFsQyxDQUFOO0FBQ0gsYUFISSxNQUlBLElBQUlzSSxlQUFlLE9BQU9GLE1BQU1LLE1BQU4sQ0FBYXpJLFNBQWIsQ0FBUCxLQUFtQyxXQUF0RCxFQUNMO0FBQ0ksc0JBQU0sSUFBSWlJLG9CQUFKLENBQXlCLFNBQXpCLEVBQW9DakksU0FBcEMsQ0FBTjtBQUNIOztBQUVELGdCQUFJLE9BQU84SixLQUFQLEtBQWlCLFVBQXJCLEVBQ0E7QUFDSSxzQkFBTSxJQUFJcEMsY0FBSixDQUFtQixTQUFuQixFQUE4QixVQUE5QixFQUEwQ29DLEtBQTFDLEVBQWlELFVBQWpELENBQU47QUFDSDs7QUFFRCxnQkFBSSxPQUFPMUosSUFBUCxLQUFnQixXQUFoQixJQUErQixPQUFPQSxJQUFQLEtBQWdCLFNBQW5ELEVBQ0E7QUFDSSxzQkFBTSxJQUFJc0gsY0FBSixDQUFtQixTQUFuQixFQUE4QixNQUE5QixFQUFzQ3RILElBQXRDLEVBQTRDLFNBQTVDLENBQU47QUFDSDs7QUFFRGdJLGtCQUFNakksR0FBTixDQUFVSCxTQUFWO0FBQ0FvSSxrQkFBTWxJLEVBQU4sQ0FBU0YsU0FBVCxFQUFvQjhKLEtBQXBCLEVBQTJCMUosSUFBM0I7QUFDSCxTQS9CRDs7QUFpQ0FnSSxjQUFNL0gsT0FBTixHQUFnQixVQUFVTCxTQUFWLEVBQXFCWixJQUFyQixFQUNoQjtBQUNJLGdCQUFJLE9BQU9ZLFNBQVAsS0FBcUIsUUFBekIsRUFDQTtBQUNJLHNCQUFNLElBQUkwSCxjQUFKLENBQW1CLFNBQW5CLEVBQThCLFlBQTlCLEVBQTRDMUgsU0FBNUMsRUFBdUQsUUFBdkQsQ0FBTjtBQUNILGFBSEQsTUFJSyxJQUFJQSxVQUFVbUQsTUFBVixLQUFxQixDQUF6QixFQUNMO0FBQ0ksc0JBQU0sSUFBSTRFLG9CQUFKLENBQXlCLFNBQXpCLENBQU47QUFDSCxhQUhJLE1BSUEsSUFBSU8sZUFBZSxPQUFPRixNQUFNSyxNQUFOLENBQWF6SSxTQUFiLENBQVAsS0FBbUMsV0FBdEQsRUFDTDtBQUNJLHNCQUFNLElBQUlpSSxvQkFBSixDQUF5QixTQUF6QixFQUFvQ2pJLFNBQXBDLENBQU47QUFDSDs7QUFFRCxnQkFBSSxPQUFPcUksVUFBVXJJLFNBQVYsQ0FBUCxLQUFnQyxXQUFwQyxFQUNBO0FBQ0ksb0JBQUlzSSxXQUFKLEVBQWlCLE1BQU0sSUFBSUosa0JBQUosQ0FBdUIsU0FBdkIsRUFBa0NsSSxTQUFsQyxDQUFOOztBQUVqQjtBQUNBO0FBQ0g7O0FBRUQ7QUFDQSxnQkFBSXVJLGlCQUFpQixPQUFPOUgsTUFBUCxLQUFrQixXQUF2QyxFQUNBO0FBQ0lBLHVCQUFPNEMsVUFBUCxDQUFrQixZQUFVO0FBQ3hCcUYsaUNBQWExSSxTQUFiLEVBQXdCWixJQUF4QjtBQUNILGlCQUZELEVBRUcsQ0FGSDtBQUdILGFBTEQsTUFPQTtBQUNJc0osNkJBQWExSSxTQUFiLEVBQXdCWixJQUF4QjtBQUNIO0FBQ0osU0FsQ0Q7O0FBb0NBZ0osY0FBTTRCLFlBQU4sR0FBcUIsVUFBVWhLLFNBQVYsRUFBcUI7O0FBRXRDLGdCQUFJLE9BQU9BLFNBQVAsS0FBcUIsUUFBekIsRUFDQTtBQUNJLHNCQUFNLElBQUkwSCxjQUFKLENBQW1CLGNBQW5CLEVBQW1DLFlBQW5DLEVBQWlEMUgsU0FBakQsRUFBNEQsUUFBNUQsQ0FBTjtBQUNILGFBSEQsTUFJSyxJQUFJQSxVQUFVbUQsTUFBVixLQUFxQixDQUF6QixFQUNMO0FBQ0ksc0JBQU0sSUFBSTRFLG9CQUFKLENBQXlCLGNBQXpCLENBQU47QUFDSDs7QUFFREssa0JBQU1LLE1BQU4sQ0FBYXpJLFNBQWIsSUFBMEJBLFNBQTFCO0FBQ0gsU0FaRDs7QUFjQW9JLGNBQU02QixxQkFBTixHQUE4QixVQUFVQyxVQUFWLEVBQXNCOztBQUVoRCxnQkFBSSxFQUFFQSxzQkFBc0JDLEtBQXhCLENBQUosRUFDQTtBQUNJLHNCQUFNLElBQUl6QyxjQUFKLENBQW1CLHVCQUFuQixFQUE0QyxhQUE1QyxFQUEyRHdDLFVBQTNELEVBQXVFLE9BQXZFLENBQU47QUFDSCxhQUhELE1BSUssSUFBSUEsV0FBVy9HLE1BQVgsS0FBc0IsQ0FBMUIsRUFDTDtBQUNJLHNCQUFNLElBQUk2RSwwQkFBSixDQUErQix1QkFBL0IsQ0FBTjtBQUNIOztBQUVELGdCQUFJMUUsSUFBSSxDQUFSO0FBQ0EsZ0JBQUlILFNBQVMrRyxXQUFXL0csTUFBeEI7O0FBRUEsaUJBQUlHLENBQUosRUFBT0EsSUFBSUgsTUFBWCxFQUFtQkcsR0FBbkIsRUFBd0I7QUFDcEIsb0JBQUk4RyxtQkFBbUJGLFdBQVc1RyxDQUFYLENBQXZCOztBQUVBOEUsc0JBQU00QixZQUFOLENBQW1CSSxnQkFBbkI7QUFDSDtBQUNKLFNBbkJEOztBQXFCQWhDLGNBQU1pQyxlQUFOLEdBQXdCLFVBQVVySyxTQUFWLEVBQXFCOztBQUV6QyxnQkFBSSxPQUFPQSxTQUFQLEtBQXFCLFFBQXpCLEVBQ0E7QUFDSSxzQkFBTSxJQUFJMEgsY0FBSixDQUFtQixpQkFBbkIsRUFBc0MsWUFBdEMsRUFBb0QxSCxTQUFwRCxFQUErRCxRQUEvRCxDQUFOO0FBQ0gsYUFIRCxNQUlNLElBQUlBLFVBQVVtRCxNQUFWLEtBQXFCLENBQXpCLEVBQ047QUFDSSxzQkFBTSxJQUFJNEUsb0JBQUosQ0FBeUIsaUJBQXpCLENBQU47QUFDSDs7QUFFRCxnQkFBSUssTUFBTUssTUFBTixDQUFhekksU0FBYixDQUFKLEVBQTZCLE9BQU9vSSxNQUFNSyxNQUFOLENBQWF6SSxTQUFiLENBQVA7QUFDaEMsU0FaRDs7QUFjQW9JLGNBQU1rQyxhQUFOLEdBQXNCLFlBQVk7O0FBRTlCO0FBQ0EsbUJBQU9oQyxnQkFBZ0IsSUFBaEIsR0FBdUIsSUFBdkIsR0FBOEIsS0FBckM7QUFDSCxTQUpEOztBQU1BRixjQUFNbUMsYUFBTixHQUFzQixVQUFVQyxhQUFWLEVBQXlCOztBQUUzQyxnQkFBSSxPQUFPQSxhQUFQLEtBQXlCLFNBQTdCLEVBQXdDLE1BQU0sSUFBSTlDLGNBQUosQ0FBbUIsZUFBbkIsRUFBb0MsYUFBcEMsRUFBbUQ4QyxhQUFuRCxFQUFrRSxTQUFsRSxDQUFOOztBQUV4Q2xDLDBCQUFja0MsYUFBZDtBQUNILFNBTEQ7O0FBT0FwQyxjQUFNcUMsZUFBTixHQUF3QixZQUFZOztBQUVoQztBQUNBLG1CQUFPbEMsa0JBQWtCLElBQWxCLEdBQXlCLElBQXpCLEdBQWdDLEtBQXZDO0FBQ0gsU0FKRDs7QUFNQUgsY0FBTXNDLGVBQU4sR0FBd0IsVUFBVUMsUUFBVixFQUFvQjs7QUFFeEMsZ0JBQUksT0FBT0EsUUFBUCxLQUFvQixTQUF4QixFQUFtQyxNQUFNLElBQUlqRCxjQUFKLENBQW1CLGlCQUFuQixFQUFzQyxlQUF0QyxFQUF1RGlELFFBQXZELEVBQWlFLFNBQWpFLENBQU47O0FBRW5DcEMsNEJBQWdCb0MsUUFBaEI7QUFDSCxTQUxEOztBQU9BO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0g7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsUUFBSSxJQUFKLEVBQ0E7QUFDSTtBQUNBQyxRQUFBLGtDQUFRLFlBQ1I7QUFDSSxtQkFBTyxJQUFJM0QsTUFBSixFQUFQO0FBQ0gsU0FIRDtBQUFBO0FBS0gsS0FSRCxNQVNLLElBQUksT0FBTzRELE1BQVAsS0FBa0IsV0FBbEIsSUFBaUNBLE9BQU9DLE9BQTVDLEVBQ0w7QUFDSUQsZUFBT0MsT0FBUCxHQUFpQixJQUFJN0QsTUFBSixFQUFqQjtBQUNILEtBSEksTUFLTDtBQUNJeEcsZUFBT3dHLE1BQVAsR0FBZ0IsSUFBSUEsTUFBSixFQUFoQjtBQUNIO0FBRUosQ0FsbUJELEk7Ozs7Ozs7OztBQ0FBLElBQUk4RCxPQUFPLG1CQUFBQyxDQUFRLENBQVIsQ0FBWDs7QUFFQSxJQUFJQyxVQUFVLENBQWQ7QUFBQSxJQUNJakssV0FBV1AsT0FBT08sUUFEdEI7QUFBQSxJQUVJVCxHQUZKO0FBQUEsSUFHSVgsSUFISjtBQUFBLElBSUlzTCxVQUFVLHFEQUpkO0FBQUEsSUFLSUMsZUFBZSxvQ0FMbkI7QUFBQSxJQU1JQyxZQUFZLDZCQU5oQjtBQUFBLElBT0lDLFdBQVcsa0JBUGY7QUFBQSxJQVFJQyxXQUFXLFdBUmY7QUFBQSxJQVNJQyxVQUFVLE9BVGQ7O0FBV0EsSUFBSUMsT0FBT1gsT0FBT0MsT0FBUCxHQUFpQixVQUFTVyxPQUFULEVBQWlCO0FBQzNDLE1BQUlDLFdBQVdDLE9BQU8sRUFBUCxFQUFXRixXQUFXLEVBQXRCLENBQWY7QUFDQSxPQUFLbEwsR0FBTCxJQUFZaUwsS0FBS0UsUUFBakI7QUFBMkIsUUFBSUEsU0FBU25MLEdBQVQsTUFBa0JxTCxTQUF0QixFQUFpQ0YsU0FBU25MLEdBQVQsSUFBZ0JpTCxLQUFLRSxRQUFMLENBQWNuTCxHQUFkLENBQWhCO0FBQTVELEdBRUFzTCxVQUFVSCxRQUFWOztBQUVBLE1BQUksQ0FBQ0EsU0FBU0ksV0FBZCxFQUEyQkosU0FBU0ksV0FBVCxHQUF1QiwwQkFBMEJDLElBQTFCLENBQStCTCxTQUFTTSxHQUF4QyxLQUNoREMsT0FBT0MsRUFBUCxJQUFhekwsT0FBTzBMLFFBQVAsQ0FBZ0JDLElBREo7O0FBRzNCLE1BQUlDLFdBQVdYLFNBQVNXLFFBQXhCO0FBQUEsTUFBa0NDLGlCQUFpQixNQUFNUCxJQUFOLENBQVdMLFNBQVNNLEdBQXBCLENBQW5EO0FBQ0EsTUFBSUssWUFBWSxPQUFaLElBQXVCQyxjQUEzQixFQUEyQztBQUN6QyxRQUFJLENBQUNBLGNBQUwsRUFBcUJaLFNBQVNNLEdBQVQsR0FBZU8sWUFBWWIsU0FBU00sR0FBckIsRUFBMEIsWUFBMUIsQ0FBZjtBQUNyQixXQUFPUixLQUFLZ0IsS0FBTCxDQUFXZCxRQUFYLENBQVA7QUFDRDs7QUFFRCxNQUFJLENBQUNBLFNBQVNNLEdBQWQsRUFBbUJOLFNBQVNNLEdBQVQsR0FBZXZMLE9BQU8wTCxRQUFQLENBQWdCTSxRQUFoQixFQUFmO0FBQ25CQyxnQkFBY2hCLFFBQWQ7O0FBRUEsTUFBSWlCLE9BQU9qQixTQUFTa0IsT0FBVCxDQUFpQlAsUUFBakIsQ0FBWDtBQUFBLE1BQ0lRLGNBQWMsRUFEbEI7QUFBQSxNQUVJQyxXQUFXLGlCQUFpQmYsSUFBakIsQ0FBc0JMLFNBQVNNLEdBQS9CLElBQXNDQyxPQUFPYyxFQUE3QyxHQUFrRHRNLE9BQU8wTCxRQUFQLENBQWdCVyxRQUZqRjtBQUFBLE1BR0lFLE1BQU14QixLQUFLRSxRQUFMLENBQWNzQixHQUFkLEVBSFY7QUFBQSxNQUcrQkMsWUFIL0I7O0FBS0EsTUFBSSxDQUFDdkIsU0FBU0ksV0FBZCxFQUEyQmUsWUFBWSxrQkFBWixJQUFrQyxnQkFBbEM7QUFDM0IsTUFBSUYsSUFBSixFQUFVO0FBQ1JFLGdCQUFZLFFBQVosSUFBd0JGLElBQXhCO0FBQ0EsUUFBSUEsS0FBS08sT0FBTCxDQUFhLEdBQWIsSUFBb0IsQ0FBQyxDQUF6QixFQUE0QlAsT0FBT0EsS0FBS1EsS0FBTCxDQUFXLEdBQVgsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsQ0FBUDtBQUM1QkgsUUFBSUksZ0JBQUosSUFBd0JKLElBQUlJLGdCQUFKLENBQXFCVCxJQUFyQixDQUF4QjtBQUNEO0FBQ0QsTUFBSWpCLFNBQVMyQixXQUFULElBQXlCM0IsU0FBU3RNLElBQVQsSUFBaUJzTSxTQUFTWCxJQUFULENBQWNsTCxXQUFkLE1BQStCLEtBQTdFLEVBQ0VnTixZQUFZLGNBQVosSUFBK0JuQixTQUFTMkIsV0FBVCxJQUF3QixtQ0FBdkQ7QUFDRjNCLFdBQVM0QixPQUFULEdBQW1CM0IsT0FBT2tCLFdBQVAsRUFBb0JuQixTQUFTNEIsT0FBVCxJQUFvQixFQUF4QyxDQUFuQjs7QUFFQU4sTUFBSU8sa0JBQUosR0FBeUIsWUFBVTtBQUNqQyxRQUFJUCxJQUFJUSxVQUFKLElBQWtCLENBQXRCLEVBQXlCO0FBQ3ZCQyxtQkFBYVIsWUFBYjtBQUNBLFVBQUlTLE1BQUo7QUFBQSxVQUFZdkwsUUFBUSxLQUFwQjtBQUNBLFVBQUs2SyxJQUFJVyxNQUFKLElBQWMsR0FBZCxJQUFxQlgsSUFBSVcsTUFBSixHQUFhLEdBQW5DLElBQTJDWCxJQUFJVyxNQUFKLElBQWMsR0FBekQsSUFBaUVYLElBQUlXLE1BQUosSUFBYyxDQUFkLElBQW1CYixZQUFZLE9BQXBHLEVBQThHO0FBQzVHVCxtQkFBV0EsWUFBWXVCLGVBQWVaLElBQUlhLGlCQUFKLENBQXNCLGNBQXRCLENBQWYsQ0FBdkI7QUFDQUgsaUJBQVNWLElBQUljLFlBQWI7O0FBRUEsWUFBSTtBQUNGLGNBQUl6QixZQUFZLFFBQWhCLEVBQTZCLENBQUMsR0FBRTBCLElBQUgsRUFBU0wsTUFBVCxFQUE3QixLQUNLLElBQUlyQixZQUFZLEtBQWhCLEVBQXdCcUIsU0FBU1YsSUFBSWdCLFdBQWIsQ0FBeEIsS0FDQSxJQUFJM0IsWUFBWSxNQUFoQixFQUF3QnFCLFNBQVNuQyxRQUFRUSxJQUFSLENBQWEyQixNQUFiLElBQXVCLElBQXZCLEdBQThCN0osS0FBS0MsS0FBTCxDQUFXNEosTUFBWCxDQUF2QztBQUM5QixTQUpELENBSUUsT0FBT3JMLENBQVAsRUFBVTtBQUFFRixrQkFBUUUsQ0FBUjtBQUFXOztBQUV6QixZQUFJRixLQUFKLEVBQVc4TCxVQUFVOUwsS0FBVixFQUFpQixhQUFqQixFQUFnQzZLLEdBQWhDLEVBQXFDdEIsUUFBckMsRUFBWCxLQUNLd0MsWUFBWVIsTUFBWixFQUFvQlYsR0FBcEIsRUFBeUJ0QixRQUF6QjtBQUNOLE9BWkQsTUFZTztBQUNMdUMsa0JBQVUsSUFBVixFQUFnQixPQUFoQixFQUF5QmpCLEdBQXpCLEVBQThCdEIsUUFBOUI7QUFDRDtBQUNGO0FBQ0YsR0FwQkQ7O0FBc0JBLE1BQUl5QyxRQUFRLFdBQVd6QyxRQUFYLEdBQXNCQSxTQUFTeUMsS0FBL0IsR0FBdUMsSUFBbkQ7QUFDQW5CLE1BQUlvQixJQUFKLENBQVMxQyxTQUFTWCxJQUFsQixFQUF3QlcsU0FBU00sR0FBakMsRUFBc0NtQyxLQUF0Qzs7QUFFQSxPQUFLdk8sSUFBTCxJQUFhOEwsU0FBUzRCLE9BQXRCO0FBQStCTixRQUFJcUIsZ0JBQUosQ0FBcUJ6TyxJQUFyQixFQUEyQjhMLFNBQVM0QixPQUFULENBQWlCMU4sSUFBakIsQ0FBM0I7QUFBL0IsR0FFQSxJQUFJME8sZUFBZXRCLEdBQWYsRUFBb0J0QixRQUFwQixNQUFrQyxLQUF0QyxFQUE2QztBQUMzQ3NCLFFBQUl1QixLQUFKO0FBQ0EsV0FBTyxLQUFQO0FBQ0Q7O0FBRUQsTUFBSTdDLFNBQVM4QyxPQUFULEdBQW1CLENBQXZCLEVBQTBCdkIsZUFBZTVKLFdBQVcsWUFBVTtBQUMxRDJKLFFBQUlPLGtCQUFKLEdBQXlCa0IsS0FBekI7QUFDQXpCLFFBQUl1QixLQUFKO0FBQ0FOLGNBQVUsSUFBVixFQUFnQixTQUFoQixFQUEyQmpCLEdBQTNCLEVBQWdDdEIsUUFBaEM7QUFDRCxHQUpzQyxFQUlwQ0EsU0FBUzhDLE9BSjJCLENBQWY7O0FBTTFCO0FBQ0F4QixNQUFJMEIsSUFBSixDQUFTaEQsU0FBU3RNLElBQVQsR0FBZ0JzTSxTQUFTdE0sSUFBekIsR0FBZ0MsSUFBekM7QUFDQSxTQUFPNE4sR0FBUDtBQUNELENBMUVEOztBQTZFQTtBQUNBLFNBQVMyQixnQkFBVCxDQUEwQkMsT0FBMUIsRUFBbUM1TyxTQUFuQyxFQUE4Q1osSUFBOUMsRUFBb0Q7QUFDbEQ7QUFDQTtBQUNBO0FBQ0EsU0FBTyxJQUFQLENBSmtELENBSXRDO0FBQ2I7O0FBRUQ7QUFDQSxTQUFTeVAsYUFBVCxDQUF1Qm5ELFFBQXZCLEVBQWlDa0QsT0FBakMsRUFBMEM1TyxTQUExQyxFQUFxRFosSUFBckQsRUFBMkQ7QUFDekQsTUFBSXNNLFNBQVNvRCxNQUFiLEVBQXFCLE9BQU9ILGlCQUFpQkMsV0FBVzVOLFFBQTVCLEVBQXNDaEIsU0FBdEMsRUFBaURaLElBQWpELENBQVA7QUFDdEI7O0FBRUQ7QUFDQW9NLEtBQUt1RCxNQUFMLEdBQWMsQ0FBZDs7QUFFQSxTQUFTbEQsU0FBVCxDQUFtQkgsUUFBbkIsRUFBNkI7QUFDM0IsTUFBSUEsU0FBU29ELE1BQVQsSUFBbUJ0RCxLQUFLdUQsTUFBTCxPQUFrQixDQUF6QyxFQUE0Q0YsY0FBY25ELFFBQWQsRUFBd0IsSUFBeEIsRUFBOEIsV0FBOUI7QUFDN0M7QUFDRCxTQUFTc0QsUUFBVCxDQUFrQnRELFFBQWxCLEVBQTRCO0FBQzFCLE1BQUlBLFNBQVNvRCxNQUFULElBQW1CLENBQUUsR0FBRXRELEtBQUt1RCxNQUFoQyxFQUF5Q0YsY0FBY25ELFFBQWQsRUFBd0IsSUFBeEIsRUFBOEIsVUFBOUI7QUFDMUM7O0FBRUQ7QUFDQSxTQUFTNEMsY0FBVCxDQUF3QnRCLEdBQXhCLEVBQTZCdEIsUUFBN0IsRUFBdUM7QUFDckMsTUFBSWtELFVBQVVsRCxTQUFTa0QsT0FBdkI7QUFDQSxNQUFJbEQsU0FBU3VELFVBQVQsQ0FBb0JDLElBQXBCLENBQXlCTixPQUF6QixFQUFrQzVCLEdBQWxDLEVBQXVDdEIsUUFBdkMsTUFBcUQsS0FBckQsSUFDQW1ELGNBQWNuRCxRQUFkLEVBQXdCa0QsT0FBeEIsRUFBaUMsZ0JBQWpDLEVBQW1ELENBQUM1QixHQUFELEVBQU10QixRQUFOLENBQW5ELE1BQXdFLEtBRDVFLEVBRUUsT0FBTyxLQUFQOztBQUVGbUQsZ0JBQWNuRCxRQUFkLEVBQXdCa0QsT0FBeEIsRUFBaUMsVUFBakMsRUFBNkMsQ0FBQzVCLEdBQUQsRUFBTXRCLFFBQU4sQ0FBN0M7QUFDRDtBQUNELFNBQVN3QyxXQUFULENBQXFCOU8sSUFBckIsRUFBMkI0TixHQUEzQixFQUFnQ3RCLFFBQWhDLEVBQTBDO0FBQ3hDLE1BQUlrRCxVQUFVbEQsU0FBU2tELE9BQXZCO0FBQUEsTUFBZ0NqQixTQUFTLFNBQXpDO0FBQ0FqQyxXQUFTeUQsT0FBVCxDQUFpQkQsSUFBakIsQ0FBc0JOLE9BQXRCLEVBQStCeFAsSUFBL0IsRUFBcUN1TyxNQUFyQyxFQUE2Q1gsR0FBN0M7QUFDQTZCLGdCQUFjbkQsUUFBZCxFQUF3QmtELE9BQXhCLEVBQWlDLGFBQWpDLEVBQWdELENBQUM1QixHQUFELEVBQU10QixRQUFOLEVBQWdCdE0sSUFBaEIsQ0FBaEQ7QUFDQWdRLGVBQWF6QixNQUFiLEVBQXFCWCxHQUFyQixFQUEwQnRCLFFBQTFCO0FBQ0Q7QUFDRDtBQUNBLFNBQVN1QyxTQUFULENBQW1COUwsS0FBbkIsRUFBMEI0SSxJQUExQixFQUFnQ2lDLEdBQWhDLEVBQXFDdEIsUUFBckMsRUFBK0M7QUFDN0MsTUFBSWtELFVBQVVsRCxTQUFTa0QsT0FBdkI7QUFDQWxELFdBQVN2SixLQUFULENBQWUrTSxJQUFmLENBQW9CTixPQUFwQixFQUE2QjVCLEdBQTdCLEVBQWtDakMsSUFBbEMsRUFBd0M1SSxLQUF4QztBQUNBME0sZ0JBQWNuRCxRQUFkLEVBQXdCa0QsT0FBeEIsRUFBaUMsV0FBakMsRUFBOEMsQ0FBQzVCLEdBQUQsRUFBTXRCLFFBQU4sRUFBZ0J2SixLQUFoQixDQUE5QztBQUNBaU4sZUFBYXJFLElBQWIsRUFBbUJpQyxHQUFuQixFQUF3QnRCLFFBQXhCO0FBQ0Q7QUFDRDtBQUNBLFNBQVMwRCxZQUFULENBQXNCekIsTUFBdEIsRUFBOEJYLEdBQTlCLEVBQW1DdEIsUUFBbkMsRUFBNkM7QUFDM0MsTUFBSWtELFVBQVVsRCxTQUFTa0QsT0FBdkI7QUFDQWxELFdBQVMyRCxRQUFULENBQWtCSCxJQUFsQixDQUF1Qk4sT0FBdkIsRUFBZ0M1QixHQUFoQyxFQUFxQ1csTUFBckM7QUFDQWtCLGdCQUFjbkQsUUFBZCxFQUF3QmtELE9BQXhCLEVBQWlDLGNBQWpDLEVBQWlELENBQUM1QixHQUFELEVBQU10QixRQUFOLENBQWpEO0FBQ0FzRCxXQUFTdEQsUUFBVDtBQUNEOztBQUVEO0FBQ0EsU0FBUytDLEtBQVQsR0FBaUIsQ0FBRTs7QUFFbkJqRCxLQUFLZ0IsS0FBTCxHQUFhLFVBQVNmLE9BQVQsRUFBaUI7QUFDNUIsTUFBSSxFQUFFLFVBQVVBLE9BQVosQ0FBSixFQUEwQixPQUFPRCxLQUFLQyxPQUFMLENBQVA7O0FBRTFCLE1BQUl6QyxlQUFlLFVBQVcsRUFBRWlDLE9BQWhDO0FBQUEsTUFDRXFFLFNBQVN0TyxTQUFTNEQsYUFBVCxDQUF1QixRQUF2QixDQURYO0FBQUEsTUFFRTJKLFFBQVEsU0FBUkEsS0FBUSxHQUFVO0FBQ2hCO0FBQ0E7QUFDQSxRQUFJdkYsZ0JBQWdCdkksTUFBcEIsRUFBNEJBLE9BQU91SSxZQUFQLElBQXVCeUYsS0FBdkI7QUFDNUJXLGlCQUFhLE9BQWIsRUFBc0JwQyxHQUF0QixFQUEyQnZCLE9BQTNCO0FBQ0QsR0FQSDtBQUFBLE1BUUV1QixNQUFNLEVBQUV1QixPQUFPQSxLQUFULEVBUlI7QUFBQSxNQVEwQnRCLFlBUjFCO0FBQUEsTUFTRXNDLE9BQU92TyxTQUFTd08sb0JBQVQsQ0FBOEIsTUFBOUIsRUFBc0MsQ0FBdEMsS0FDRnhPLFNBQVN5TyxlQVZoQjs7QUFZQSxNQUFJaEUsUUFBUXRKLEtBQVosRUFBbUJtTixPQUFPSSxPQUFQLEdBQWlCLFlBQVc7QUFDN0MxQyxRQUFJdUIsS0FBSjtBQUNBOUMsWUFBUXRKLEtBQVI7QUFDRCxHQUhrQjs7QUFLbkIxQixTQUFPdUksWUFBUCxJQUF1QixVQUFTNUosSUFBVCxFQUFjO0FBQ25DcU8saUJBQWFSLFlBQWI7QUFDRTtBQUNBO0FBQ0YsV0FBT3hNLE9BQU91SSxZQUFQLENBQVA7QUFDQWtGLGdCQUFZOU8sSUFBWixFQUFrQjROLEdBQWxCLEVBQXVCdkIsT0FBdkI7QUFDRCxHQU5EOztBQVFBaUIsZ0JBQWNqQixPQUFkO0FBQ0E2RCxTQUFPMUosR0FBUCxHQUFhNkYsUUFBUU8sR0FBUixDQUFZMkQsT0FBWixDQUFvQixLQUFwQixFQUEyQixNQUFNM0csWUFBakMsQ0FBYjs7QUFFQTtBQUNBO0FBQ0F1RyxPQUFLSyxZQUFMLENBQWtCTixNQUFsQixFQUEwQkMsS0FBS00sVUFBL0I7O0FBRUEsTUFBSXBFLFFBQVErQyxPQUFSLEdBQWtCLENBQXRCLEVBQXlCdkIsZUFBZTVKLFdBQVcsWUFBVTtBQUN6RDJKLFFBQUl1QixLQUFKO0FBQ0FhLGlCQUFhLFNBQWIsRUFBd0JwQyxHQUF4QixFQUE2QnZCLE9BQTdCO0FBQ0QsR0FIcUMsRUFHbkNBLFFBQVErQyxPQUgyQixDQUFmOztBQUt6QixTQUFPeEIsR0FBUDtBQUNELENBekNEOztBQTJDQXhCLEtBQUtFLFFBQUwsR0FBZ0I7QUFDZDtBQUNBWCxRQUFNLEtBRlE7QUFHZDtBQUNBa0UsY0FBWVIsS0FKRTtBQUtkO0FBQ0FVLFdBQVNWLEtBTks7QUFPZDtBQUNBdE0sU0FBT3NNLEtBUk87QUFTZDtBQUNBWSxZQUFVWixLQVZJO0FBV2Q7QUFDQUcsV0FBUyxJQVpLO0FBYWQ7QUFDQUUsVUFBUSxJQWRNO0FBZWQ7QUFDQTlCLE9BQUssZUFBWTtBQUNmLFdBQU8sSUFBSXZNLE9BQU9xUCxjQUFYLEVBQVA7QUFDRCxHQWxCYTtBQW1CZDtBQUNBbEQsV0FBUztBQUNQMEMsWUFBUSx5Q0FERDtBQUVQUyxVQUFRMUUsUUFGRDtBQUdQMkUsU0FBUSwyQkFIRDtBQUlQQyxVQUFRM0UsUUFKRDtBQUtQNEUsVUFBUTtBQUxELEdBcEJLO0FBMkJkO0FBQ0FwRSxlQUFhLEtBNUJDO0FBNkJkO0FBQ0EwQyxXQUFTO0FBOUJLLENBQWhCOztBQWlDQSxTQUFTWixjQUFULENBQXdCakIsSUFBeEIsRUFBOEI7QUFDNUIsU0FBT0EsU0FBVUEsUUFBUXJCLFFBQVIsR0FBbUIsTUFBbkIsR0FDZnFCLFFBQVF0QixRQUFSLEdBQW1CLE1BQW5CLEdBQ0FGLGFBQWFZLElBQWIsQ0FBa0JZLElBQWxCLElBQTBCLFFBQTFCLEdBQ0F2QixVQUFVVyxJQUFWLENBQWVZLElBQWYsS0FBd0IsS0FIbkIsS0FHOEIsTUFIckM7QUFJRDs7QUFFRCxTQUFTSixXQUFULENBQXFCUCxHQUFyQixFQUEwQm1FLEtBQTFCLEVBQWlDO0FBQy9CLFNBQU8sQ0FBQ25FLE1BQU0sR0FBTixHQUFZbUUsS0FBYixFQUFvQlIsT0FBcEIsQ0FBNEIsV0FBNUIsRUFBeUMsR0FBekMsQ0FBUDtBQUNEOztBQUVEO0FBQ0EsU0FBU2pELGFBQVQsQ0FBdUJqQixPQUF2QixFQUFnQztBQUM5QixNQUFJVixLQUFLVSxRQUFRck0sSUFBYixNQUF1QixRQUEzQixFQUFxQ3FNLFFBQVFyTSxJQUFSLEdBQWVnUixNQUFNM0UsUUFBUXJNLElBQWQsQ0FBZjtBQUNyQyxNQUFJcU0sUUFBUXJNLElBQVIsS0FBaUIsQ0FBQ3FNLFFBQVFWLElBQVQsSUFBaUJVLFFBQVFWLElBQVIsQ0FBYWxMLFdBQWIsTUFBOEIsS0FBaEUsQ0FBSixFQUNFNEwsUUFBUU8sR0FBUixHQUFjTyxZQUFZZCxRQUFRTyxHQUFwQixFQUF5QlAsUUFBUXJNLElBQWpDLENBQWQ7QUFDSDs7QUFFRG9NLEtBQUs2RSxHQUFMLEdBQVcsVUFBU3JFLEdBQVQsRUFBY21ELE9BQWQsRUFBc0I7QUFBRSxTQUFPM0QsS0FBSyxFQUFFUSxLQUFLQSxHQUFQLEVBQVltRCxTQUFTQSxPQUFyQixFQUFMLENBQVA7QUFBNkMsQ0FBaEY7O0FBRUEzRCxLQUFLOEUsSUFBTCxHQUFZLFVBQVN0RSxHQUFULEVBQWM1TSxJQUFkLEVBQW9CK1AsT0FBcEIsRUFBNkI5QyxRQUE3QixFQUFzQztBQUNoRCxNQUFJdEIsS0FBSzNMLElBQUwsTUFBZSxVQUFuQixFQUErQmlOLFdBQVdBLFlBQVk4QyxPQUF2QixFQUFnQ0EsVUFBVS9QLElBQTFDLEVBQWdEQSxPQUFPLElBQXZEO0FBQy9CLFNBQU9vTSxLQUFLLEVBQUVULE1BQU0sTUFBUixFQUFnQmlCLEtBQUtBLEdBQXJCLEVBQTBCNU0sTUFBTUEsSUFBaEMsRUFBc0MrUCxTQUFTQSxPQUEvQyxFQUF3RDlDLFVBQVVBLFFBQWxFLEVBQUwsQ0FBUDtBQUNELENBSEQ7O0FBS0FiLEtBQUsrRSxPQUFMLEdBQWUsVUFBU3ZFLEdBQVQsRUFBY21ELE9BQWQsRUFBc0I7QUFDbkMsU0FBTzNELEtBQUssRUFBRVEsS0FBS0EsR0FBUCxFQUFZbUQsU0FBU0EsT0FBckIsRUFBOEI5QyxVQUFVLE1BQXhDLEVBQUwsQ0FBUDtBQUNELENBRkQ7O0FBSUEsSUFBSW1FLFNBQVNDLGtCQUFiOztBQUVBLFNBQVNDLFNBQVQsQ0FBbUJDLE1BQW5CLEVBQTJCQyxHQUEzQixFQUFnQ0MsV0FBaEMsRUFBNkM3UixLQUE3QyxFQUFtRDtBQUNqRCxNQUFJOFIsUUFBUS9GLEtBQUs2RixHQUFMLE1BQWMsT0FBMUI7QUFDQSxPQUFLLElBQUlyUSxHQUFULElBQWdCcVEsR0FBaEIsRUFBcUI7QUFDbkIsUUFBSXBRLFFBQVFvUSxJQUFJclEsR0FBSixDQUFaOztBQUVBLFFBQUl2QixLQUFKLEVBQVd1QixNQUFNc1EsY0FBYzdSLEtBQWQsR0FBc0JBLFFBQVEsR0FBUixJQUFlOFIsUUFBUSxFQUFSLEdBQWF2USxHQUE1QixJQUFtQyxHQUEvRDtBQUNYO0FBQ0EsUUFBSSxDQUFDdkIsS0FBRCxJQUFVOFIsS0FBZCxFQUFxQkgsT0FBT2xLLEdBQVAsQ0FBV2pHLE1BQU1aLElBQWpCLEVBQXVCWSxNQUFNQSxLQUE3QjtBQUNyQjtBQURBLFNBRUssSUFBSXFRLGNBQWU5RixLQUFLdkssS0FBTCxNQUFnQixPQUEvQixHQUEyQ3VLLEtBQUt2SyxLQUFMLE1BQWdCLFFBQS9ELEVBQ0hrUSxVQUFVQyxNQUFWLEVBQWtCblEsS0FBbEIsRUFBeUJxUSxXQUF6QixFQUFzQ3RRLEdBQXRDLEVBREcsS0FFQW9RLE9BQU9sSyxHQUFQLENBQVdsRyxHQUFYLEVBQWdCQyxLQUFoQjtBQUNOO0FBQ0Y7O0FBRUQsU0FBUzRQLEtBQVQsQ0FBZVEsR0FBZixFQUFvQkMsV0FBcEIsRUFBZ0M7QUFDOUIsTUFBSUYsU0FBUyxFQUFiO0FBQ0FBLFNBQU9sSyxHQUFQLEdBQWEsVUFBU3NLLENBQVQsRUFBWUMsQ0FBWixFQUFjO0FBQUUsU0FBS0MsSUFBTCxDQUFVVCxPQUFPTyxDQUFQLElBQVksR0FBWixHQUFrQlAsT0FBT1EsQ0FBUCxDQUE1QjtBQUF3QyxHQUFyRTtBQUNBTixZQUFVQyxNQUFWLEVBQWtCQyxHQUFsQixFQUF1QkMsV0FBdkI7QUFDQSxTQUFPRixPQUFPTyxJQUFQLENBQVksR0FBWixFQUFpQnZCLE9BQWpCLENBQXlCLEtBQXpCLEVBQWdDLEdBQWhDLENBQVA7QUFDRDs7QUFFRCxTQUFTaEUsTUFBVCxDQUFnQnJKLE1BQWhCLEVBQXdCO0FBQ3RCLE1BQUk2TyxRQUFRaEgsTUFBTTNDLFNBQU4sQ0FBZ0IySixLQUE1QjtBQUNBQSxRQUFNakMsSUFBTixDQUFXekYsU0FBWCxFQUFzQixDQUF0QixFQUF5QjJILE9BQXpCLENBQWlDLFVBQVNDLE1BQVQsRUFBaUI7QUFDaEQsU0FBSzlRLEdBQUwsSUFBWThRLE1BQVo7QUFDRSxVQUFJQSxPQUFPOVEsR0FBUCxNQUFnQnFMLFNBQXBCLEVBQ0V0SixPQUFPL0IsR0FBUCxJQUFjOFEsT0FBTzlRLEdBQVAsQ0FBZDtBQUZKO0FBR0QsR0FKRDtBQUtBLFNBQU8rQixNQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7QUMzUkQsSUFBSW1LLFdBQVc2RSxPQUFPOUosU0FBUCxDQUFpQmlGLFFBQWhDOztBQUVBNUIsT0FBT0MsT0FBUCxHQUFpQixVQUFTeUcsR0FBVCxFQUFhO0FBQzVCLFVBQVE5RSxTQUFTeUMsSUFBVCxDQUFjcUMsR0FBZCxDQUFSO0FBQ0UsU0FBSyxtQkFBTDtBQUEwQixhQUFPLFVBQVA7QUFDMUIsU0FBSyxlQUFMO0FBQXNCLGFBQU8sTUFBUDtBQUN0QixTQUFLLGlCQUFMO0FBQXdCLGFBQU8sUUFBUDtBQUN4QixTQUFLLG9CQUFMO0FBQTJCLGFBQU8sV0FBUDtBQUMzQixTQUFLLGdCQUFMO0FBQXVCLGFBQU8sT0FBUDtBQUN2QixTQUFLLGlCQUFMO0FBQXdCLGFBQU8sUUFBUDtBQU4xQjs7QUFTQSxNQUFJLFFBQU9BLEdBQVAseUNBQU9BLEdBQVAsTUFBYyxRQUFkLElBQTBCQSxHQUExQixJQUFpQyxPQUFPQSxJQUFJcE8sTUFBWCxJQUFxQixRQUExRCxFQUFvRTtBQUNsRSxRQUFJO0FBQ0YsVUFBSSxPQUFPb08sSUFBSUMsTUFBWCxJQUFxQixVQUF6QixFQUFxQyxPQUFPLFdBQVA7QUFDdEMsS0FGRCxDQUVFLE9BQU9DLEVBQVAsRUFBVztBQUNYLFVBQUlBLGNBQWMzSixTQUFsQixFQUE2QjtBQUMzQixlQUFPLFdBQVA7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQsTUFBSXlKLFFBQVEsSUFBWixFQUFrQixPQUFPLE1BQVA7QUFDbEIsTUFBSUEsUUFBUTNGLFNBQVosRUFBdUIsT0FBTyxXQUFQO0FBQ3ZCLE1BQUkyRixPQUFPQSxJQUFJRyxRQUFKLEtBQWlCLENBQTVCLEVBQStCLE9BQU8sU0FBUDtBQUMvQixNQUFJSCxRQUFRRCxPQUFPQyxHQUFQLENBQVosRUFBeUIsT0FBTyxRQUFQOztBQUV6QixnQkFBY0EsR0FBZCx5Q0FBY0EsR0FBZDtBQUNELENBMUJELEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBOzs7OztJQUtxQkksYTtBQUVqQiw2QkFBYztBQUFBOztBQUNWLGFBQUtDLFdBQUwsR0FBc0I1USxTQUFTQyxhQUFULENBQXVCLGtCQUF2QixDQUF0QjtBQUNBLGFBQUs0USxjQUFMLEdBQXNCN1EsU0FBU0MsYUFBVCxDQUF1QixZQUF2QixDQUF0Qjs7QUFFQSxhQUFLVSxlQUFMO0FBQ0g7O0FBRUQ7Ozs7Ozs7OzswQ0FLa0I7QUFBQTs7QUFDZCxpQkFBS2lRLFdBQUwsQ0FBaUI5UCxnQkFBakIsQ0FBa0MsT0FBbEMsRUFBMkMsYUFBSztBQUM1QyxzQkFBS2dRLGNBQUw7QUFDSCxhQUZEOztBQUlBLGlCQUFLRCxjQUFMLENBQW9CL1AsZ0JBQXBCLENBQXFDLE9BQXJDLEVBQThDLGFBQUs7QUFDL0Msc0JBQUtpUSxRQUFMO0FBQ0gsYUFGRDtBQUdIOztBQUVEOzs7Ozs7Ozt5Q0FLaUI7QUFDYixnQkFBTUMsZ0JBQWdCaFIsU0FBUzBELGdCQUFULENBQTBCLHdDQUExQixDQUF0QjtBQUNBLGlCQUFLdU4sS0FBTCxDQUFXRCxhQUFYO0FBQ0g7O0FBRUQ7Ozs7Ozs7O21DQUtXO0FBQ1AsZ0JBQU1FLGNBQWNsUixTQUFTMEQsZ0JBQVQsQ0FBMEIsb0JBQTFCLENBQXBCO0FBQ0EsaUJBQUt1TixLQUFMLENBQVdDLFdBQVg7QUFDSDs7QUFFRDs7Ozs7Ozs7OEJBS01DLFEsRUFBVTtBQUNaLGlCQUFLLElBQUk3TyxJQUFJLENBQWIsRUFBaUJBLElBQUk2TyxTQUFTaFAsTUFBOUIsRUFBdUNHLEdBQXZDLEVBQTRDO0FBQ3hDNk8seUJBQVM3TyxDQUFULEVBQVlrRCxNQUFaO0FBQ0g7O0FBRUQsZ0JBQUl4RixTQUFTMEQsZ0JBQVQsQ0FBMEIsb0JBQTFCLEVBQWdEdkIsTUFBaEQsS0FBMkQsQ0FBL0QsRUFBa0U7QUFDOURuQyx5QkFBU0MsYUFBVCxDQUF1QixjQUF2QixFQUF1Q1csU0FBdkMsQ0FBaURDLE1BQWpELENBQXdELE9BQXhELEVBQWlFLElBQWpFO0FBQ0FiLHlCQUFTQyxhQUFULENBQXVCLGNBQXZCLEVBQXVDVyxTQUF2QyxDQUFpREMsTUFBakQsQ0FBd0QsUUFBeEQsRUFBa0UsS0FBbEU7QUFDQWIseUJBQVNDLGFBQVQsQ0FBdUIsd0JBQXZCLEVBQWlEVyxTQUFqRCxDQUEyREMsTUFBM0QsQ0FBa0UsVUFBbEUsRUFBOEUsS0FBOUU7QUFDQWIseUJBQVNDLGFBQVQsQ0FBdUIsYUFBdkIsRUFBc0NtQyxTQUF0QyxHQUFrRCxlQUFsRDtBQUNBcEMseUJBQVNDLGFBQVQsQ0FBdUIseUJBQXZCLEVBQWtEVyxTQUFsRCxDQUE0REMsTUFBNUQsQ0FBbUUsUUFBbkUsRUFBNkUsSUFBN0U7QUFDSDs7QUFFRCxpQkFBS3VRLG1CQUFMO0FBQ0g7O0FBRUQ7Ozs7Ozs7OzhDQUtzQjtBQUNsQnBSLHFCQUFTQyxhQUFULENBQXVCLG9CQUF2QixFQUE2Q1QsS0FBN0MsR0FBcUQsRUFBckQ7QUFDSDs7Ozs7O2tCQXhFZ0JtUixhOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCckI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBOzs7SUFHcUJVLFU7QUFFakIsd0JBQVk5TyxJQUFaLEVBQWtCO0FBQUE7O0FBQ2QsYUFBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0g7O0FBRUQ7Ozs7Ozs7OztpQ0FLUztBQUNMLGdCQUFNK08sV0FBV3RSLFNBQVNPLGNBQVQsQ0FBd0Isa0JBQXhCLENBQWpCO0FBQ0EsZ0JBQU1nUixXQUFXdlIsU0FBU3dSLFVBQVQsQ0FBb0JGLFNBQVNuTyxPQUE3QixFQUFzQyxJQUF0QyxDQUFqQjs7QUFFQSxnQkFBTXNPLFNBQVMsSUFBSUMsVUFBSixFQUFmOztBQUVBRCxtQkFBT0UsTUFBUCxHQUFpQixtQkFBVztBQUN4QixvQkFBTUMsbUJBQW1CQyxRQUFRNVIsYUFBUixDQUFzQixvQkFBdEIsQ0FBekI7QUFDQSxvQkFBTTZSLGVBQWVGLGlCQUFpQjNSLGFBQWpCLENBQStCLGdCQUEvQixDQUFyQjs7QUFFQSx1QkFBTyxhQUFLO0FBQ1I2UixpQ0FBYWxOLEdBQWIsR0FBbUJ2RCxFQUFFQyxNQUFGLENBQVNvTCxNQUE1QjtBQUNBb0YsaUNBQWFsUixTQUFiLENBQXVCQyxNQUF2QixDQUE4QixRQUE5QixFQUF3QyxJQUF4QztBQUNILGlCQUhEO0FBSUgsYUFSZSxDQVFiMFEsUUFSYSxDQUFoQjs7QUFVQUUsbUJBQU9sRSxLQUFQO0FBQ0FrRSxtQkFBT00sYUFBUCxDQUFxQixLQUFLeFAsSUFBMUI7O0FBRUEsbUJBQU9nUCxRQUFQO0FBQ0g7Ozs7OztrQkEvQmdCRixVOzs7Ozs7Ozs7QUNIckI7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBO0FBdEJBOzs7Ozs7Ozs7Ozs7Ozs7OztBQXVCQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxDQUFDLGNBQUlXLGVBQUosRUFBTCxFQUE0QjtBQUN4QiwwQkFBWTNTLE9BQVosQ0FBb0Isd0JBQXBCO0FBQ0gsQ0FGRCxNQUVPO0FBQ0gsMEJBQVlBLE9BQVosQ0FBb0Isb0JBQXBCO0FBQ0g7O0FBRUQsSUFBSUksT0FBTzBMLFFBQVAsQ0FBZ0I4RyxNQUFoQixLQUEyQiw4QkFBL0IsRUFBK0Q7QUFDM0RDLFlBQVFDLFlBQVIsR0FBdUIsYUFBdkI7QUFDQUQsWUFBUUUsbUJBQVIsR0FBOEIsQ0FBQyxZQUFELEVBQWUsU0FBZixDQUE5QjtBQUNILEM7Ozs7Ozs7Ozs7Ozs7cWpCQ3BDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBOzs7Ozs7OztBQUVBOzs7OztJQUtxQkMsSTs7QUFFakI7Ozs7O0FBS0Esb0JBQWM7QUFBQTs7QUFDVixhQUFLQyxPQUFMLEdBQWUsNEJBQWY7QUFDQSxhQUFLQyxVQUFMLEdBQWtCLEtBQWxCO0FBQ0g7O0FBRUQ7Ozs7Ozs7Ozs7OztrQ0FRVUMsUSxFQUFVO0FBQ2hCLG1CQUFPLEtBQUtGLE9BQUwsR0FBZSxLQUFLQyxVQUFwQixHQUFpQ0MsUUFBeEM7QUFDSDs7QUFFRDs7Ozs7Ozs7Ozs7OzsrQkFVT0EsUSxFQUFVcFUsSSxFQUFNMkwsSSxFQUFNO0FBQUE7O0FBQ3pCLG1CQUFPLElBQUl2TSxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3BDLG9CQUFNc04sTUFBTSxNQUFLeUgsU0FBTCxDQUFlRCxRQUFmLENBQVo7O0FBRUEsMkNBQUs7QUFDRHhILHlCQUFLQSxHQURKO0FBRURqQiwwQkFBTUEsSUFGTDtBQUdEc0IsOEJBQVUsTUFIVDtBQUlEak4sMEJBQU1BLElBSkw7QUFLRCtQLDZCQUFTLGlCQUFDL00sUUFBRCxFQUFjO0FBQ25CM0QsZ0NBQVEyRCxRQUFSO0FBQ0gscUJBUEE7QUFRREQsMkJBQU8sZUFBQ0MsUUFBRCxFQUFjO0FBQ2pCMUQsK0JBQU8wRCxRQUFQO0FBQ0g7QUFWQSxpQkFBTDtBQVlILGFBZk0sQ0FBUDtBQWdCSDs7QUFFRDs7Ozs7Ozs7Ozs7NEJBUVdvUixRLEVBQVVwVSxJLEVBQU07QUFDdkIsbUJBQU8sSUFBSVosT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUNwQyxvQkFBTThNLE9BQU8sSUFBSTZILElBQUosRUFBYjtBQUNBN0gscUJBQUtrSSxNQUFMLENBQVlGLFFBQVosRUFBc0JwVSxJQUF0QixFQUE0QixLQUE1QixFQUNLQyxJQURMLENBQ1VaLE9BRFYsRUFFS2EsS0FGTCxDQUVXWixNQUZYO0FBR0gsYUFMTSxDQUFQO0FBTUg7O0FBRUQ7Ozs7Ozs7Ozs7OzZCQVFZOFUsUSxFQUFVcFUsSSxFQUFNO0FBQ3hCLG1CQUFPLElBQUlaLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDcEMsb0JBQU04TSxPQUFPLElBQUk2SCxJQUFKLEVBQWI7QUFDQTdILHFCQUFLa0ksTUFBTCxDQUFZRixRQUFaLEVBQXNCcFUsSUFBdEIsRUFBNEIsTUFBNUIsRUFDS0MsSUFETCxDQUNVWixPQURWLEVBRUthLEtBRkwsQ0FFV1osTUFGWDtBQUdILGFBTE0sQ0FBUDtBQU1IOzs7Ozs7a0JBckZnQjJVLEk7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkE7OztJQUdxQk0sUzs7Ozs7Ozs7O0FBRWpCOzs7aUNBR29CO0FBQ2hCQyxXQUFLLE9BQUwsRUFBYyxhQUFkLEVBQTZCLEVBQUMsUUFBUSxDQUFULEVBQTdCO0FBQ0g7Ozs7OztrQkFQZ0JELFM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkE7Ozs7O0lBS3FCRSxTOzs7Ozs7Ozs7QUFFakI7Ozs7Ozs7OzRCQVFXMVIsSyxFQUFPc0osTyxFQUFTO0FBQ3ZCLGdCQUFJaEwsT0FBTzBMLFFBQVAsQ0FBZ0I4RyxNQUFoQixLQUEyQiw4QkFBL0IsRUFBK0Q7QUFDM0RDLHdCQUFRWSxlQUFSLENBQXdCM1IsS0FBeEIsRUFBK0JzSixPQUEvQjtBQUNILGFBRkQsTUFFTztBQUNIdkosd0JBQVFDLEtBQVIsQ0FBY0EsS0FBZDtBQUNBRCx3QkFBUUMsS0FBUixDQUFjc0osT0FBZDtBQUNIO0FBQ0o7Ozs7OztrQkFqQmdCb0ksUyIsImZpbGUiOiI3NzM4ZjAyNDNkOTFhZTc0MDRhMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDc3MzhmMDI0M2Q5MWFlNzQwNGEwIiwiLyogQnVsayBQaW5uZXIgLSBDcmVhdGUgbXVsdGlwbGUgcGlucyBpbiB5b3VyIFBpbnRlcmVzdCBib2FyZHMgYXQgb25jZVxyXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTcgTHVrZSBEZW50b25cclxuICpcclxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcclxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcclxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbjsgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cclxuICpcclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXHJcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXHJcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcclxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcclxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXHJcbiAqL1xyXG5pbXBvcnQgQUpBWCBmcm9tICdzZXJ2aWNlcy9BSkFYJztcclxuaW1wb3J0IERhdGFTdG9yZSBmcm9tICdzZXJ2aWNlcy9EYXRhU3RvcmUnO1xyXG5cclxuLyoqXHJcbiAqIENsYXNzIEFQSVxyXG4gKlxyXG4gKiBJbnRlcmZhY2UgZm9yIGNvbW11bmljYXRpbmcgd2l0aCB0aGUgQVBJXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBUEkge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2sgaWYgYSB1c2VyIGhhcyBhdXRoZW50aWNhdGVkIHRoZSBhcHBsaWNhdGlvbi4gSS5lLiBhbiBhY2Nlc3MgdG9rZW4gZXhpc3RzXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBJc0F1dGhlbnRpY2F0ZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIERhdGFTdG9yZS5HZXQoRGF0YVN0b3JlLkRBVEFfX0FDQ0VTU19UT0tFTigpKSAhPT0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEluaXRpYWxpc2UgdGhlIFBpbnRlcmVzdCBTREsgYW5kIGNhbGwgdGhlIGxvZ2luIGZ1bmN0aW9uIHRvIGdldCBhbiBhY2Nlc3MgdG9rZW5cclxuICAgICAqIEFjY2VzcyB0b2tlbiBpbmZvcm1hdGlvbiB3aWxsIGJlIHNldCBpbiB0aGUgUGludGVyZXN0IFNESywgaG93ZXZlciBhdCB0aGUgbW9tZW50XHJcbiAgICAgKiB0aGUgU0RLIGlzIG9ubHkgdXNlZCBoZXJlXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge1Byb21pc2V9XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBMb2dpbigpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBQREsuaW5pdCh7XHJcbiAgICAgICAgICAgICAgICBhcHBJZDogXCI0OTI3Njk0NjUzNDA2MzI5NDYxXCIsIC8vIENoYW5nZSB0aGlzXHJcbiAgICAgICAgICAgICAgICBjb29raWU6IHRydWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFBESy5sb2dpbih7c2NvcGU6ICdyZWFkX3B1YmxpYywgd3JpdGVfcHVibGljJ30sICh7c2Vzc2lvbn0pID0+IHtcclxuICAgICAgICAgICAgICAgIFBESy5zZXRTZXNzaW9uKHNlc3Npb24pO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShzZXNzaW9uKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCBjdXJzb3Igb2YgdXNlcnMnIFBpbnNcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cclxuICAgICAqL1xyXG4gICAgc3RhdGljIFBpbnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgQUpBWC5Qb3N0KCdtZS9waW5zLycsIGRhdGEpXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXNvbHZlKVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKHJlamVjdCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgbGlzdCBvZiB1c2VycyBib2FyZHNcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cclxuICAgICAqL1xyXG4gICAgc3RhdGljIEJvYXJkcygpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBBSkFYLkdldCgnbWUvYm9hcmRzLycsIHtcclxuICAgICAgICAgICAgICAgIGFjY2Vzc190b2tlbjogRGF0YVN0b3JlLkdldChEYXRhU3RvcmUuREFUQV9fQUNDRVNTX1RPS0VOKCkpXHJcbiAgICAgICAgICAgIH0sIHRydWUpXHJcbiAgICAgICAgICAgICAgICAudGhlbigoe2RhdGF9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuYW1lQSA9IGEubmFtZS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmFtZUIgPSBiLm5hbWUudG9VcHBlckNhc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5hbWVBIDwgbmFtZUIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmFtZUEgPiBuYW1lQikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2VuZCByZXF1ZXN0IHRvIFBpbnRlcmVzdCBBUEkgdG8gY3JlYXRlIGEgbmV3IHBpblxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIFRoZSBkYXRhIHRvIGNyZWF0ZSB0aGUgcGluIHdpdGhcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cclxuICAgICAqL1xyXG4gICAgc3RhdGljIENyZWF0ZVBpbihkYXRhKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgQUpBWC5Qb3N0KCdwaW5zLycsIHtcclxuICAgICAgICAgICAgICAgIGFjY2Vzc190b2tlbjogRGF0YVN0b3JlLkdldChEYXRhU3RvcmUuREFUQV9fQUNDRVNTX1RPS0VOKCkpLFxyXG4gICAgICAgICAgICAgICAgLi4uZGF0YVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihyZXNvbHZlKVxyXG4gICAgICAgICAgICAuY2F0Y2gocmVqZWN0KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvc2VydmljZXMvQVBJLmpzIiwiLyogQnVsayBQaW5uZXIgLSBDcmVhdGUgbXVsdGlwbGUgcGlucyBpbiB5b3VyIFBpbnRlcmVzdCBib2FyZHMgYXQgb25jZVxuICogQ29weXJpZ2h0IChDKSAyMDE3IEx1a2UgRGVudG9uXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uOyBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuXG5pbXBvcnQgQnVsbGV0IGZyb20gJ2J1bGxldC1wdWJzdWInO1xuXG4vKipcbiAqIENsYXNzIEV2ZW50XG4gKlxuICogV3JhcHBlciBmb3IgdGhlIGV2ZW50IGxpYnJhcnkgY2hvc2VuLCBwcmV2ZW50aW5nIHRoZSBhcHBsaWNhdGlvbiBmcm9tIGJlaW5nIHRpZ2h0bHkgY291cGxlZCB0byB0aGUgbGlicmFyeVxuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCBvbmx5IGJlIHVzZWQgZm9yIGN1c3RvbSBldmVudHMuIEV2ZW50cyBsaWtlIGNsaWNrLCBob3ZlciBldGMgd2lsbCBiZSBoYW5kbGVkIGJ5IHZhbmlsbGEgSlMgaGFuZGxlcnNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9tRXZlbnQge1xuXG4gICAgLyoqXG4gICAgICogV3JhcHBlciBmb3IgdGhlIC5vbiBldmVudCBsaXN0ZW5lclxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9ICAgZXZlbnROYW1lIFRoZSBuYW1lIG9mIHRoZSBldmVudCB0byBsaXN0ZW4gZm9yXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgIFRoZSBmdW5jdGlvbiB0byBleGVjdXRlIHdoZW4gdGhlIGV2ZW50IGlzIGRldGVjdGVkXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7bnVsbH1cbiAgICAgKi9cbiAgICBzdGF0aWMgb24oZXZlbnROYW1lLCBjYWxsYmFjaykge1xuICAgICAgICBCdWxsZXQub24oZXZlbnROYW1lLCBjYWxsYmFjaywgZmFsc2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdyYXBwZXIgZm9yIHRoZSAub2ZmIGZ1bmN0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gICBldmVudE5hbWUgVGhlIG5hbWUgb2YgdGhlIGV2ZW50IHRvIHJlbW92ZVxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrICBbT3B0aW9uYWxdIFRoZSBmdW5jdGlvbiB0byByZW1vdmUuIElmIHRoZSBldmVudCBsaXN0ZW5lciBuZWVkcyB0byByZW1haW4gZm9yIHNvbWUgaW5zdGFuY2VzLlxuICAgICAqXG4gICAgICogQHJldHVybnMge251bGx9XG4gICAgICovXG4gICAgc3RhdGljIG9mZihldmVudE5hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIEJ1bGxldC5vZmYoZXZlbnROYW1lLCBjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV3JhcHBlciBmb3IgdGhlIC5vbmNlIGV2ZW50IGxpc3RlbmVyLlxuICAgICAqIFRoaXMgbGlzdGVuZXIgd2lsbCBvbmx5IGJlIHRyaWdnZXJlZCBvbmNlLCBhbmQgdGhlbiByZW1vdmVkXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gICBldmVudE5hbWUgVGhlIG5hbWUgb2YgdGhlIGV2ZW50IHRvIGxpc3RlbiBmb3JcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayAgVGhlIGZ1bmN0aW9uIHRvIGV4ZWN1dGUgd2hlbiBldmVudCBpcyBkZXRlY3RlZFxuICAgICAqXG4gICAgICogQHJldHVybnMge251bGx9XG4gICAgICovXG4gICAgc3RhdGljIG9uY2UoZXZlbnROYW1lLCBjYWxsYmFjaykge1xuICAgICAgICBCdWxsZXQub25jZShldmVudE5hbWUsIGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXcmFwcGVyIGZvciB0aGUgLnRyaWdnZXIgZnVuY3Rpb24sIHRoYXQgd2lsbCB0cmlnZ2VyIGFuIGV2ZW50XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lIFRoZSBuYW1lIG9mIHRoZSBldmVudCB0byB0cmlnZ2VyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgICAgICBbT3B0aW9uYWxdIEN1c3RvbSBkYXRhIHRvIHBhc3MgdG8gdGhlIGV2ZW50IGxpc3RlbmVyIGNhbGxiYWNrXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7bnVsbH1cbiAgICAgKi9cbiAgICBzdGF0aWMgdHJpZ2dlcihldmVudE5hbWUsIGRhdGEgPSB7fSkge1xuICAgICAgICBCdWxsZXQudHJpZ2dlcihldmVudE5hbWUsIGRhdGEpXG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL3NlcnZpY2VzL0N1c3RvbUV2ZW50LmpzIiwiLyogQnVsayBQaW5uZXIgLSBDcmVhdGUgbXVsdGlwbGUgcGlucyBpbiB5b3VyIFBpbnRlcmVzdCBib2FyZHMgYXQgb25jZVxuICogQ29weXJpZ2h0IChDKSAyMDE3IEx1a2UgRGVudG9uXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uOyBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuXG4vKipcbiAqIENsYXNzIEFQSVxuICpcbiAqIEludGVyZmFjZSBmb3IgY29tbXVuaWNhdGluZyB3aXRoIHRoZSBBUElcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0YVN0b3JlIHtcblxuICAgIC8qKlxuICAgICAqIFN0cmluZyBjb25zdGFudCBmb3IgYWNjZXNzIHRva2VuIGtleVxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBzdGF0aWMgREFUQV9fQUNDRVNTX1RPS0VOKCkge1xuICAgICAgICByZXR1cm4gJ3BpbnRlcmVzdF9hY2Nlc3NUb2tlbic7XG4gICAgfVxuXG4gICAgc3RhdGljIERBVEFfX0JPQVJEUygpIHtcbiAgICAgICAgcmV0dXJuICdwaW50ZXJlc3RfYm9hcmRzJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgdmFsdWUgaW4gdGhlIGRhdGEgc3RvcmVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgICBUaGUgaWRlbnRpZnlpbmcga2V5IGZvciB0aGUgdmFsdWVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgVGhlIHZhbHVlIGZvciB0aGUgaWRlbnRpZnlpbmcga2V5XG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7bnVsbH1cbiAgICAgKi9cbiAgICBzdGF0aWMgU2V0KGtleSwgdmFsdWUpIHtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgdmFsdWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgdmFsdWUgZm9yIGEgZ2l2ZW4ga2V5XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBpZGVudGlmeWluZyBrZXkgZm9yIHRoZSB2YWx1ZVxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBzdGF0aWMgR2V0KGtleSkge1xuICAgICAgICByZXR1cm4gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL3NlcnZpY2VzL0RhdGFTdG9yZS5qcyIsIi8qIEJ1bGsgUGlubmVyIC0gQ3JlYXRlIG11bHRpcGxlIHBpbnMgaW4geW91ciBQaW50ZXJlc3QgYm9hcmRzIGF0IG9uY2VcbiAqIENvcHlyaWdodCAoQykgMjAxNyBMdWtlIERlbnRvblxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbjsgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cblxuaW1wb3J0IEN1c3RvbUV2ZW50IGZyb20gJ3NlcnZpY2VzL0N1c3RvbUV2ZW50JztcbmltcG9ydCBDbGVhclByZXZpZXdzIGZyb20gXCJDbGVhclByZXZpZXdzXCI7XG5pbXBvcnQgQVBJIGZyb20gJ3NlcnZpY2VzL0FQSSc7XG5pbXBvcnQgRGF0YVN0b3JlIGZyb20gJ3NlcnZpY2VzL0RhdGFTdG9yZSc7XG5pbXBvcnQgUGluUHJldmlldyBmcm9tICdQaW5QcmV2aWV3JztcbmltcG9ydCBFcnJvclV0aWwgZnJvbSAnc2VydmljZXMvRXJyb3JVdGlsJztcbmltcG9ydCBBbmFseXRpY3MgZnJvbSAnc2VydmljZXMvQW5hbHl0aWNzJztcblxuLyoqXG4gKiBDbGFzcyBBcHBsaWNhdGlvblxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHBsaWNhdGlvbiB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jbGVhclByZXZpZXdzID0gbmV3IENsZWFyUHJldmlld3MoKTtcbiAgICAgICAgdGhpcy5wcmV2aWV3c1BpbnNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJldmlldy1waW5zLWNvbnRhaW5lcicpO1xuICAgICAgICB0aGlzLmltYWdlU2VsZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbWFnZS1zZWxlY3QtY29udGFpbmVyXCIpO1xuICAgICAgICB0aGlzLnJlZnJlc2hCb2FyZHNCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVmcmVzaC1ib2FyZHMnKTtcbiAgICAgICAgdGhpcy5waW5zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBpbnMtY29udGFpbmVyJyk7XG4gICAgICAgIHRoaXMuc2VuZFRvUGludGVyZXN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbmQtdG8tcGludGVyZXN0Jyk7XG4gICAgICAgIHRoaXMuc2VuZEFsbFRvQm9hcmRTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VuZC1hbGwtdG8tYm9hcmQnKTtcbiAgICAgICAgdGhpcy5maWxlVXBsb2FkSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZpbGVUb1VwbG9hZFwiKTtcbiAgICAgICAgdGhpcy5tb2RhbE92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtb3ZlcmxheScpO1xuXG4gICAgICAgIC8vIFdhaXQgdW50aWwgdGhlIHVzZXIgaXMgYXV0aGVudGljYXRlZCBiZWZvcmUgc2hvd2luZyB0aGUgbWFpbiBhcHBsaWNhdGlvbiBpbnRlcmZhY2VcbiAgICAgICAgQ3VzdG9tRXZlbnQub24oJ3VzZXItYXV0aGVudGljYXRlZCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJucyB7bnVsbH1cbiAgICAgKi9cbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLnNob3dBcHBsaWNhdGlvbkNvbnRhaW5lcigpO1xuICAgICAgICB0aGlzLmF0dGFjaExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm5zIHtudWxsfVxuICAgICAqL1xuICAgIHNob3dBcHBsaWNhdGlvbkNvbnRhaW5lcigpIHtcbiAgICAgICAgdGhpcy5pbWFnZVNlbGVjdENvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybnMge251bGx9XG4gICAgICovXG4gICAgaGlkZUFwcGxpY2F0aW9uQ29udGFpbmVyKCkge1xuICAgICAgICB0aGlzLmltYWdlU2VsZWN0Q29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicsIHRydWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEF0dGFjaCBldmVudCBsaXN0ZW5lcnNcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtudWxsfVxuICAgICAqL1xuICAgIGF0dGFjaExpc3RlbmVycygpIHtcbiAgICAgICAgdGhpcy5yZWZyZXNoQm9hcmRzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5sb2FkQm9hcmRzKHRydWUpXG4gICAgICAgICAgICAudGhlbihib2FyZHMgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucG9wdWxhdGVCb2FyZE5hbWVzKGJvYXJkcyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnBpbnNDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGUgPT4ge1xuICAgICAgICAgICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoJy5ub3RlJykpIHtcbiAgICAgICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdpbnZhbGlkJywgZS50YXJnZXQudmFsdWUgIT09ICcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zZW5kVG9QaW50ZXJlc3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy52YWxpZGF0ZUlucHV0cygpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVQaW5zKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc2VuZEFsbFRvQm9hcmRTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZSA9PiB7XG4gICAgICAgICAgICBjb25zdCBib2FyZFZhbHVlID0gZS50YXJnZXQudmFsdWU7XG5cbiAgICAgICAgICAgIGlmIChib2FyZFZhbHVlICE9PSAnJykge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU2VsZWN0ZWRCb2FyZHMoYm9hcmRWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZmlsZVVwbG9hZElucHV0Lm9uY2hhbmdlID0gZSA9PiB0aGlzLmhhbmRsZUltYWdlc1NlbGVjdGVkKGUpO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcml2YWN5LXBvbGljeS1saW5rJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1ByaXZhY3lQb2xpY3koKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLW92ZXJsYXknKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbW9kYWwtb3ZlcmxheScpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlUHJpdmFjeVBvbGljeSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtY2xvc2UgLmNsb3NlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgIHRoaXMuaGlkZVByaXZhY3lQb2xpY3koKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gUHJlcGFyZSB0aGUgcHJldmlldyBwaW4gdGVtcGxhdGUgd2l0aCBuYW1lcyBvZiBib2FyZHMgdG8gcGluIHRvXG4gICAgICAgIHRoaXMubG9hZEJvYXJkcygpLnRoZW4oYm9hcmRzID0+IHtcbiAgICAgICAgICAgIHRoaXMucG9wdWxhdGVCb2FyZE5hbWVzKGJvYXJkcyk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9vcCB0aHJvdWdoIHRoZSBpbWFnZXMgc2VsZWN0ZWQgYW5kIGNyZWF0ZSBuZXcgRmlsZVJlYWRlciBvYmplY3RzIGZvciB0aGVtLFxuICAgICAqIGRpc3BsYXlpbmcgdGhlIGltYWdlIHByZXZpZXcgdG8gdGhlIHVzZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGUgVGhlIGV2ZW50IG9iamVjdFxuICAgICAqXG4gICAgICogQHJldHVybnMge251bGx9XG4gICAgICovXG4gICAgaGFuZGxlSW1hZ2VzU2VsZWN0ZWQoZSkge1xuICAgICAgICBjb25zdCBpbnB1dCA9IGUudGFyZ2V0O1xuXG4gICAgICAgIGlmIChpbnB1dC5maWxlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlLWhlYWRlcicpLmNsYXNzTGlzdC50b2dnbGUoJ2xhcmdlJywgZmFsc2UpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2V0LXN0YXJ0ZWQnKS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nLCB0cnVlKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFwcGxpY2F0aW9uLWNvbnRhaW5lcicpLmNsYXNzTGlzdC50b2dnbGUoJ2V4cGFuZGVkJywgdHJ1ZSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sYWJlbC10ZXh0JykuaW5uZXJUZXh0ID0gJ0FkZCBNb3JlIEltYWdlcyc7XG4gICAgICAgIHRoaXMucHJldmlld3NQaW5zQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicsIGZhbHNlKTtcblxuICAgICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7IC8vIEFsbG93IHRpbWUgZm9yIHRoZSBDU1MgYW5pbWF0aW9uIHRvIHJ1biBiZWZvcmVcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwIDsgaSA8IGlucHV0LmZpbGVzLmxlbmd0aCA7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBmaWxlID0gaW5wdXQuZmlsZXNbaV07XG4gICAgICAgICAgICAgICAgbGV0IHBpblByZXZpZXcgPSBuZXcgUGluUHJldmlldyhmaWxlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnByZXZpZXdzUGluc0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLnBpbnMtY29udGFpbmVyXCIpLmFwcGVuZENoaWxkKHBpblByZXZpZXcucmVuZGVyKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAzMDApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvYWQgdGhlIHVzZXJzIGJvYXJkc1xuICAgICAqXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBmb3JjZUxvYWQgW09wdGlvbmFsXSBJbmRpY2F0ZXMgaWYgdGhlIEFQSSBzaG91bGQgYmUgcXVlcmllZCByZWdhcmRsZXNzIG9mIERhdGFTdG9yZVxuICAgICAqXG4gICAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAgICovXG4gICAgbG9hZEJvYXJkcyhmb3JjZUxvYWQgPSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYm9hcmRzID0gRGF0YVN0b3JlLkdldChEYXRhU3RvcmUuREFUQV9fQk9BUkRTKCkpO1xuICAgICAgICAgICAgaWYgKGJvYXJkcyAhPT0gbnVsbCAmJiAhZm9yY2VMb2FkKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShKU09OLnBhcnNlKGJvYXJkcykpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQVBJLkJvYXJkcygpXG4gICAgICAgICAgICAudGhlbigoYm9hcmRzKSA9PiB7XG4gICAgICAgICAgICAgICAgRGF0YVN0b3JlLlNldChEYXRhU3RvcmUuREFUQV9fQk9BUkRTKCksIEpTT04uc3RyaW5naWZ5KGJvYXJkcykpO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoYm9hcmRzKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQb3B1bGF0ZSB0aGUgPHNlbGVjdD4gb2YgYm9hcmQgbmFtZXMgd2l0aCB0aGUgbmFtZXMgcmV0dXJuZWQgZnJvbSBQaW50ZXJlc3QgQVBJXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBib2FyZHMgQW4gYXJyYXkgb2YgYm9hcmQgb2JqZWN0c1xuICAgICAqXG4gICAgICogQHJldHVybiB7bnVsbH1cbiAgICAgKi9cbiAgICBwb3B1bGF0ZUJvYXJkTmFtZXMoYm9hcmRzKSB7XG4gICAgICAgIGNvbnN0IGJvYXJkTmFtZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJldmlldy10ZW1wbGF0ZScpLmNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi5ib2FyZC1uYW1lc1wiKTtcbiAgICAgICAgYm9hcmROYW1lcy5pbm5lckhUTUwgPSAnJzsgLy8gUmVtb3ZlIHRoZSAnTG9hZGluZy4uLicgb3B0aW9uXG5cbiAgICAgICAgaWYgKGJvYXJkcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGxldCBvcHRpb24gPSB0aGlzLmNyZWF0ZUJvYXJkTmFtZU9wdGlvbkVsZW1lbnQoe2lkOiAnJywgbmFtZTogYFlvdSBkb24ndCBoYXZlIGFueSBQaW50ZXJlc3QgYm9hcmRzIWB9KTtcbiAgICAgICAgICAgIGJvYXJkTmFtZXMuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VuZC10by1waW50ZXJlc3RcIikuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJywgdHJ1ZSk7IC8vIENhbid0IHNlbmQgdG8gcGludGVyZXN0IGFzIHRoZSB1c2VyIGRvZXNuJ3QgaGF2ZSBhbnkgYm9hcmRzXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUaGUgdXNlciBtYXkgaGF2ZSBzZWVuIHRoZSBtZXNzYWdlIGFib3ZlLCBnb25lIHRvIFBpbnRlcmVzdCB0byBjcmVhdGUgYSBib2FyZCwgYW5kIHRoZW4gY29tZSBiYWNrIHRvIGNsaWNrIHRoZSBSZWZyZXNoIEJvYXJkcyBidXR0b25cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZW5kLXRvLXBpbnRlcmVzdFwiKS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nLCBmYWxzZSk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDAgOyBpIDwgYm9hcmRzLmxlbmd0aCA7IGkrKykge1xuICAgICAgICAgICAgbGV0IGJvYXJkID0gYm9hcmRzW2ldO1xuICAgICAgICAgICAgbGV0IG9wdGlvbiA9IHRoaXMuY3JlYXRlQm9hcmROYW1lT3B0aW9uRWxlbWVudChib2FyZCk7XG4gICAgICAgICAgICBib2FyZE5hbWVzLmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVcGRhdGUgYW55IDxzZWxlY3Q+IGVsZW1lbnRzIGluIHByZXZpZXctY29udGFpbmVycyB0aGF0IGhhdmUgYWxyZWFkeSBiZWVuIGFjdGl2YXRlZCBmcm9tIHRoZSB0ZW1wbGF0ZVxuICAgICAgICBjb25zdCBleGlzdGluZ0JvYXJkTmFtZVNlbGVjdG9ycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ib2FyZC1uYW1lcycpO1xuICAgICAgICBmb3IgKGxldCBpID0gMCA7IGkgPCBleGlzdGluZ0JvYXJkTmFtZVNlbGVjdG9ycy5sZW5ndGggOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBzZWxlY3QgPSBleGlzdGluZ0JvYXJkTmFtZVNlbGVjdG9yc1tpXTtcbiAgICAgICAgICAgIHNlbGVjdC5pbm5lckhUTUwgPSAnJztcblxuICAgICAgICAgICAgLy8gSWYgdGhlIGJvYXJkIGJlaW5nIGxvb3BlZCBpcyB0aGUgJ3NlbmQgYWxsIHRvIGJvYXJkJywgbmVlZCB0byBhZGQgdGhlIGJsYW5rIG9wdGlvblxuICAgICAgICAgICAgaWYgKHNlbGVjdC5pZCA9PT0gJ3NlbmQtYWxsLXRvLWJvYXJkJykge1xuICAgICAgICAgICAgICAgIGxldCBvcHRpb24gPSB0aGlzLmNyZWF0ZUJvYXJkTmFtZU9wdGlvbkVsZW1lbnQoe25hbWU6ICctLS0nLCBpZDogJyd9KTtcbiAgICAgICAgICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAgOyBpIDwgYm9hcmRzLmxlbmd0aCA7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBib2FyZCA9IGJvYXJkc1tpXTtcbiAgICAgICAgICAgICAgICBsZXQgb3B0aW9uID0gdGhpcy5jcmVhdGVCb2FyZE5hbWVPcHRpb25FbGVtZW50KGJvYXJkKTtcbiAgICAgICAgICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyA8b3B0aW9uPiBlbGVtZW50IGZvciB0aGUgcHJvdmlkZWQgYm9hcmQgb2JqZWN0XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gYm9hcmQgT2JqZWN0IHJlcHJlc2VudGluZyBhIFBpbnRlcmVzdCBib2FyZFxuICAgICAqXG4gICAgICogQHJldHVybnMge0VsZW1lbnR9XG4gICAgICovXG4gICAgY3JlYXRlQm9hcmROYW1lT3B0aW9uRWxlbWVudChib2FyZCkge1xuICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gYm9hcmQuaWQ7XG4gICAgICAgIG9wdGlvbi5pbm5lclRleHQgPSBib2FyZC5uYW1lO1xuICAgICAgICByZXR1cm4gb3B0aW9uO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgc2VsZWN0ZWQgYm9hcmQgaW4gZWFjaCBvZiB0aGUgcGluIHByZXZpZXdzIHRvIG1hdGNoIHRoZSBvbmUgc2VsZWN0ZWQgaW4gdGhlXG4gICAgICogU2VuZCBhbGwgaW1hZ2VzIHRvIGJvYXJkIGRyb3AgZG93blxuICAgICAqXG4gICAgICogQHBhcmFtIHtpbnR9IG5ld0JvYXJkIFRoZSBJRCB2YWx1ZSBvZiB0aGUgYm9hcmQgdG8gYmUgc2VsZWN0ZWRcbiAgICAgKi9cbiAgICB1cGRhdGVTZWxlY3RlZEJvYXJkcyhuZXdCb2FyZCkge1xuICAgICAgICAvLyBMb29wIHRocm91Z2ggYWxsIGV4aXN0aW5nIGJvYXJkIG5hbWUgc2VsZWN0b3JzIGFuZCB1cGRhdGUgdGhlaXIgdmFsdWVzIHRvIG1hdGNoIHRoZSBvbmUganVzdCBzZWxlY3RlZFxuICAgICAgICBjb25zdCBib2FyZE5hbWVTZWxlY3RvcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJldmlldy1waW4tYm9hcmQtc2VsZWN0Jyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwIDsgaSA8IGJvYXJkTmFtZVNlbGVjdG9ycy5sZW5ndGggOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBib2FyZE5hbWVTZWxlY3QgPSBib2FyZE5hbWVTZWxlY3RvcnNbaV07XG5cbiAgICAgICAgICAgIGJvYXJkTmFtZVNlbGVjdC52YWx1ZSA9IG5ld0JvYXJkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9vcCB0aHJvdWdoIGFsbCBwaW4gcHJldmlld3MgYW5kIG1ha2Ugc3VyZSBhIG5vdGUgaGFzIGJlZW4gc2V0XG4gICAgICpcbiAgICAgKiBJZiBhIHJlcXVpcmVkIGZpZWxkIGlzbid0IGZpbGxlZCBpbiwgaXQgd2lsbCBiZSBtYXJrZWQgYXMgaW52YWxpZCwgYnV0IGFsc28gc2V0IHVwIHdpdGggdGFiSW5kZXhpbmcsXG4gICAgICogc28gdGhhdCB1c2VycyBjYW4gY2xpY2sgdGFiIHRvIGVhc2lseSBtb3ZlIGJldHdlZW4gb25seSB0aGUgbm90ZXMgdGhhdCBhcmVuJ3QgZmlsbGVkIGluIHlldFxuICAgICAqXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgdmFsaWRhdGVJbnB1dHMoKSB7XG4gICAgICAgIGNvbnN0IHByZXZpZXdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByZXZpZXctY29udGFpbmVyJyk7XG4gICAgICAgIGxldCBlcnJvciA9IGZhbHNlO1xuICAgICAgICBsZXQgdGFiSW5kZXggPSAxO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwIDsgaSA8IHByZXZpZXdzLmxlbmd0aCA7IGkrKykge1xuICAgICAgICAgICAgbGV0IHByZXZpZXcgPSBwcmV2aWV3c1tpXTtcblxuICAgICAgICAgICAgY29uc3Qgbm90ZUNvbnRhaW5lciA9IHByZXZpZXcucXVlcnlTZWxlY3RvcihcIi5ub3RlLWNvbnRhaW5lclwiKTtcbiAgICAgICAgICAgIGNvbnN0IG5vdGUgPSBub3RlQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIubm90ZVwiKS52YWx1ZTtcblxuICAgICAgICAgICAgaWYgKG5vdGUgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgbGV0IG5vdGUgPSBwcmV2aWV3LnF1ZXJ5U2VsZWN0b3IoJy5ub3RlJyk7XG4gICAgICAgICAgICAgICAgbm90ZS5jbGFzc0xpc3QudG9nZ2xlKCdpbnZhbGlkJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgbm90ZS50YWJJbmRleCA9IHRhYkluZGV4O1xuICAgICAgICAgICAgICAgIGlmICh0YWJJbmRleCA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBub3RlLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgIG5vdGVDb250YWluZXIuZGF0YXNldC5iYWxsb29uID0gbm90ZUNvbnRhaW5lci5kYXRhc2V0LnRvb2x0aXA7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gQHRvZG86IFRoaXMgbmVlZHMgdG8gYmUgY2xlYW5lZCB1cCBhbmQgcmVtb3ZlZCBmcm9tIGhlcmUuIEFsc28gbmVlZCB0byBtYWtlIHN1cmUgaXQgb25seSB0cmlnZ2VycyBvbmNlXG4gICAgICAgICAgICAgICAgICAgIG5vdGUuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm90ZUNvbnRhaW5lci5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtYmFsbG9vbicpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGFiSW5kZXgrKztcbiAgICAgICAgICAgICAgICBlcnJvciA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZXJyb3IgPT09IGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvb3AgdGhyb3VnaCBhbGwgb2YgdGhlIDxpbWc+IGVsZW1lbnRzLCBhbmQgY2FsbCB0aGUgQVBJIGZ1bmN0aW9uIHRvIGNyZWF0ZSBhIHBpbixcbiAgICAgKiB3aXRoIGFsbCB0aGUgcmVsZXZhbnQgaW5mb3JtYXRpb25cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtudWxsfVxuICAgICAqL1xuICAgIGNyZWF0ZVBpbnMoKSB7XG4gICAgICAgIGNvbnN0IHByZXZpZXdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByZXZpZXctY29udGFpbmVyJyk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDAgOyBpIDwgcHJldmlld3MubGVuZ3RoIDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcHJldmlldyA9IHByZXZpZXdzW2ldO1xuXG4gICAgICAgICAgICAvLyBTa2lwIGFueSBpbWFnZXMgdGhhdCBoYXZlIGFscmVhZHkgYmVlbiBwaW5uZWQgaW4gdGhpcyBzZXNzaW9uXG4gICAgICAgICAgICBpZiAocHJldmlldy5kYXRhc2V0LnBpbm5lZCkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBpbWFnZURhdGEgPSBwcmV2aWV3LnF1ZXJ5U2VsZWN0b3IoJy5wcmV2aWV3LWltYWdlJykuc3JjO1xuICAgICAgICAgICAgY29uc3Qgbm90ZSAgICAgID0gcHJldmlldy5xdWVyeVNlbGVjdG9yKFwiLm5vdGVcIikudmFsdWU7XG4gICAgICAgICAgICBjb25zdCBib2FyZCAgICAgPSBwcmV2aWV3LnF1ZXJ5U2VsZWN0b3IoXCIuYm9hcmQtbmFtZXNcIikudmFsdWU7XG4gICAgICAgICAgICBjb25zdCBsaW5rICAgICAgPSBwcmV2aWV3LnF1ZXJ5U2VsZWN0b3IoXCIubGlua1wiKS52YWx1ZTtcblxuICAgICAgICAgICAgcHJldmlldy5jbGFzc0xpc3QudG9nZ2xlKCdzZW5kaW5nJywgdHJ1ZSk7XG4gICAgICAgICAgICBkZWxldGUgcHJldmlldy5kYXRhc2V0LnBpbkVycm9yOyAvLyBSZW1vdmUgYW55IHByZXZpb3VzIGVycm9yIHRoYXQgbWlnaHQgYmUgZGlzcGxheWluZ1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIEFQSS5DcmVhdGVQaW4oe1xuICAgICAgICAgICAgICAgICAgICBib2FyZDogYm9hcmQsIC8vIFNlbmRpbmcganVzdCB0aGUgYm9hcmQgSUQuIERvY3VtZW50YXRpb24gZG9lc24ndCBzYXkgdGhpcyBjYW4gYmUgZG9uZSwgYnV0IGl0IHdvcmtzLiBSZWFzb24gaXM6IHNwYWNlcyBpbiBib2FyZCBuYW1lc1xuICAgICAgICAgICAgICAgICAgICBpbWFnZV9iYXNlNjQ6IGltYWdlRGF0YSxcbiAgICAgICAgICAgICAgICAgICAgbm90ZTogbm90ZSxcbiAgICAgICAgICAgICAgICAgICAgbGluazogbGlua1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICBwcmV2aWV3LmRhdGFzZXQucGlubmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcHJldmlldy5jbGFzc0xpc3QudG9nZ2xlKCdzZW5kaW5nJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBBbmFseXRpY3MuUGluQ3JlYXRlZCgpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIEVycm9yVXRpbC5Mb2cobmV3IEVycm9yKCdDcmVhdGUgUGluIHByb21pc2UgcmVqZWN0ZWQnKSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWV0YURhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZXJyb3InOiBlcnJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXZlcml0eTogJ2Vycm9yJ1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGV4Y2VwdGlvbikge1xuICAgICAgICAgICAgICAgIEVycm9yVXRpbC5Mb2cobmV3IEVycm9yKCdFeGNlcHRpb24gdGhyb3duIGZyb20gQ3JlYXRlUGluIGZ1bmN0aW9uJyksIHtcbiAgICAgICAgICAgICAgICAgICAgbWV0YURhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdleGNlcHRpb24nOiBleGNlcHRpb25cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgc2V2ZXJpdHk6ICdlcnJvcidcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERpc3BsYXkgdGhlIHByaXZhY3kgcG9saWN5IG1vZGFsXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7bnVsbH1cbiAgICAgKi9cbiAgICBzaG93UHJpdmFjeVBvbGljeSgpIHtcbiAgICAgICAgdGhpcy5tb2RhbE92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGlkZSB0aGUgcHJpdmFjeSBwb2xpY3kgbW9kYWxcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtudWxsfVxuICAgICAqL1xuICAgIGhpZGVQcml2YWN5UG9saWN5KCkge1xuICAgICAgICB0aGlzLm1vZGFsT3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvdmlld3MvQXBwbGljYXRpb24uanMiLCIvKiBCdWxrIFBpbm5lciAtIENyZWF0ZSBtdWx0aXBsZSBwaW5zIGluIHlvdXIgUGludGVyZXN0IGJvYXJkcyBhdCBvbmNlXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTcgTHVrZSBEZW50b25cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb247IGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5cbmltcG9ydCBDdXN0b21FdmVudCBmcm9tICdzZXJ2aWNlcy9DdXN0b21FdmVudCc7XG5pbXBvcnQgQVBJIGZyb20gJ3NlcnZpY2VzL0FQSSc7XG5pbXBvcnQgRGF0YVN0b3JlIGZyb20gJ3NlcnZpY2VzL0RhdGFTdG9yZSc7XG5cbi8qKlxuICogQ2xhc3MgQXV0aG9yaXphdGlvblxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRob3JpemF0aW9uIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hdXRoZW50aWNhdGlvbi1jb250YWluZXJcIik7XG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25CdXR0b24gICAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmF1dGhlbnRpY2F0ZS1idXR0b25cIik7XG5cbiAgICAgICAgLy8gTGlzdGVuIGZvciB0aGUgaW5zdHJ1Y3Rpb24gdGhhdCB0aGUgdXNlciBpc24ndCBhdXRoZW50aWNhdGVkIHlldFxuICAgICAgICBDdXN0b21FdmVudC5vbigndXNlci1ub3QtYXV0aGVudGljYXRlZCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXNlIHRoZSBhdXRob3JpemF0aW9uIHNlY3Rpb24gb2YgdGhlIGFwcGxpY2F0aW9uXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7bnVsbH1cbiAgICAgKi9cbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLnNob3dBdXRoZW50aWNhdGlvbkNvbnRhaW5lcigpO1xuICAgICAgICB0aGlzLmF0dGFjaExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm5zIHtudWxsfVxuICAgICAqL1xuICAgIHNob3dBdXRoZW50aWNhdGlvbkNvbnRhaW5lcigpIHtcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbkNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nLCBmYWxzZSk7XG4gICAgICAgIEN1c3RvbUV2ZW50LnRyaWdnZXIoJ2F1dGhlbnRpY2F0aW9uLXNob3duJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybnMge251bGx9XG4gICAgICovXG4gICAgaGlkZUF1dGhlbnRpY2F0aW9uQ29udGFpbmVyKCkge1xuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9uQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicsIHRydWUpO1xuICAgICAgICBDdXN0b21FdmVudC50cmlnZ2VyKCdhdXRoZW50aWNhdGlvbi1oaWRkZW4nKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBdHRhY2ggZXZlbnQgbGlzdGVuZXJzXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7bnVsbH1cbiAgICAgKi9cbiAgICBhdHRhY2hMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBBUEkuTG9naW4oKVxuICAgICAgICAgICAgLnRoZW4oKHthY2Nlc3NUb2tlbn0pID0+IHtcbiAgICAgICAgICAgICAgICBEYXRhU3RvcmUuU2V0KERhdGFTdG9yZS5EQVRBX19BQ0NFU1NfVE9LRU4oKSwgYWNjZXNzVG9rZW4pO1xuICAgICAgICAgICAgICAgIEN1c3RvbUV2ZW50LnRyaWdnZXIoJ3VzZXItYXV0aGVudGljYXRlZCcpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBNYWtlIHN1cmUgdGhlIGF1dGhlbnRpY2F0aW9uIGNvbnRhaW5lciBpcyBoaWRkZW4gaWYgdGhlIGFwcGxpY2F0aW9uIGNvbnRhaW5lciBnZXRzIHNob3duXG4gICAgICAgIEN1c3RvbUV2ZW50Lm9uKCd1c2VyLWF1dGhlbnRpY2F0ZWQnLCBlID0+IHtcbiAgICAgICAgICAgIHRoaXMuaGlkZUF1dGhlbnRpY2F0aW9uQ29udGFpbmVyKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy92aWV3cy9BdXRob3JpemF0aW9uLmpzIiwiKGZ1bmN0aW9uICgpIHtcblxuICAgICd1c2Ugc3RyaWN0JztcbiAgICBcbiAgICBmdW5jdGlvbiBCdWxsZXQgKClcbiAgICB7XG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAvLyAtLSBDdXN0b20gRXJyb3JzXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICBmdW5jdGlvbiBQYXJhbUNvdW50RXJyb3IgKG1ldGhvZE5hbWUsIGV4cGVjdGVkUGFyYW1zU3RyaW5nLCBwYXJhbUNvdW50KSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZSA9ICdCdWxsZXQ6OiBbJyArIG1ldGhvZE5hbWUgKyAnXSAnICsgZXhwZWN0ZWRQYXJhbXNTdHJpbmcgKyAnLCBidXQgcmVjZWl2ZWQ6ICcgKyBwYXJhbUNvdW50O1xuICAgICAgICAgICAgdmFyIGVycm9yID0gbmV3IEVycm9yKHRoaXMubWVzc2FnZSk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGVycm9yLnN0YWNrICE9PSAndW5kZWZpbmVkJykgdGhpcy5zdGFjayA9IGVycm9yLnN0YWNrO1xuICAgICAgICB9XG4gICAgICAgIFBhcmFtQ291bnRFcnJvci5wcm90b3R5cGUgPSBuZXcgRXJyb3IoKTtcbiAgICAgICAgUGFyYW1Db3VudEVycm9yLnByb3RvdHlwZS5uYW1lID0gUGFyYW1Db3VudEVycm9yLm5hbWU7XG4gICAgICAgIFBhcmFtQ291bnRFcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBQYXJhbUNvdW50RXJyb3I7XG5cbiAgICAgICAgZnVuY3Rpb24gUGFyYW1UeXBlRXJyb3IgKG1ldGhvZE5hbWUsIHBhcmFtZXRlck5hbWUsIHBhcmFtZXRlciwgZXhwZWN0ZWRUeXBlKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZSA9ICdCdWxsZXQ6OiBbJyArIG1ldGhvZE5hbWUgKyAnXSBFeHBlY3RlZCBwYXJhbWV0ZXIgLSAnICsgcGFyYW1ldGVyTmFtZSArICcgLSB0byBiZSB0eXBlOiAnICsgZXhwZWN0ZWRUeXBlICsgJywgYnV0IHJlY2VpdmVkIHR5cGU6ICcgKyB0eXBlb2YgcGFyYW1ldGVyO1xuICAgICAgICAgICAgdmFyIGVycm9yID0gbmV3IFR5cGVFcnJvcih0aGlzLm1lc3NhZ2UpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBlcnJvci5zdGFjayAhPT0gJ3VuZGVmaW5lZCcpIHRoaXMuc3RhY2sgPSBlcnJvci5zdGFjaztcbiAgICAgICAgfVxuICAgICAgICBQYXJhbVR5cGVFcnJvci5wcm90b3R5cGUgPSBuZXcgVHlwZUVycm9yKCk7XG4gICAgICAgIFBhcmFtVHlwZUVycm9yLnByb3RvdHlwZS5uYW1lID0gUGFyYW1UeXBlRXJyb3IubmFtZTtcbiAgICAgICAgUGFyYW1UeXBlRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUGFyYW1UeXBlRXJyb3I7XG5cbiAgICAgICAgZnVuY3Rpb24gRXZlbnROYW1lTGVuZ3RoRXJyb3IgKG1ldGhvZE5hbWUpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gJ0J1bGxldDo6IFsnICsgbWV0aG9kTmFtZSArICddIEV4cGVjdGVkIGV2ZW50IG5hbWUgcGFyYW1ldGVyIHRvIGJlIGxvbmdlciB0aGFuIDAgY2hhcmFjdGVycyc7XG4gICAgICAgICAgICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IodGhpcy5tZXNzYWdlKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZXJyb3Iuc3RhY2sgIT09ICd1bmRlZmluZWQnKSB0aGlzLnN0YWNrID0gZXJyb3Iuc3RhY2s7XG4gICAgICAgIH1cbiAgICAgICAgRXZlbnROYW1lTGVuZ3RoRXJyb3IucHJvdG90eXBlID0gbmV3IEVycm9yKCk7XG4gICAgICAgIEV2ZW50TmFtZUxlbmd0aEVycm9yLnByb3RvdHlwZS5uYW1lID0gRXZlbnROYW1lTGVuZ3RoRXJyb3IubmFtZTtcbiAgICAgICAgRXZlbnROYW1lTGVuZ3RoRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gRXZlbnROYW1lTGVuZ3RoRXJyb3I7XG5cbiAgICAgICAgZnVuY3Rpb24gRXZlbnROYW1lc0FycmF5TGVuZ3RoRXJyb3IgKG1ldGhvZE5hbWUpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gJ0J1bGxldDo6IFsnICsgbWV0aG9kTmFtZSArICddIEV4cGVjdGVkIGV2ZW50IG5hbWVzIGFycmF5IHRvIGNvbnRhaW4gb25lIG9yIG1vcmUgZXZlbnQgbmFtZXMnO1xuICAgICAgICAgICAgdmFyIGVycm9yID0gbmV3IEVycm9yKHRoaXMubWVzc2FnZSk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGVycm9yLnN0YWNrICE9PSAndW5kZWZpbmVkJykgdGhpcy5zdGFjayA9IGVycm9yLnN0YWNrO1xuICAgICAgICB9XG4gICAgICAgIEV2ZW50TmFtZXNBcnJheUxlbmd0aEVycm9yLnByb3RvdHlwZSA9IG5ldyBFcnJvcigpO1xuICAgICAgICBFdmVudE5hbWVzQXJyYXlMZW5ndGhFcnJvci5wcm90b3R5cGUubmFtZSA9IEV2ZW50TmFtZXNBcnJheUxlbmd0aEVycm9yLm5hbWU7XG4gICAgICAgIEV2ZW50TmFtZXNBcnJheUxlbmd0aEVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEV2ZW50TmFtZXNBcnJheUxlbmd0aEVycm9yO1xuXG4gICAgICAgIGZ1bmN0aW9uIFVuZGVjbGFyZWRFdmVudEVycm9yIChtZXRob2ROYW1lLCBldmVudE5hbWUpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gJ0J1bGxldDo6IFsnICsgbWV0aG9kTmFtZSArICddIEV2ZW50IHN0cmluZzogXCInICsgZXZlbnROYW1lICsgJ1wiIGRvZXMgbm90IGV4aXN0IHdpdGhpbiB0aGUgZXZlbnRzIGRpY3Rpb25hcnlcXG5QbGVhc2UgdXNlIHRoZSBCdWxsZXQuYWRkRXZlbnROYW1lIG1ldGhvZCB0byBhZGQgdGhpcyBzdHJpbmcuJztcblxuICAgICAgICAgICAgdmFyIGVycm9yID0gbmV3IEVycm9yKHRoaXMubWVzc2FnZSk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGVycm9yLnN0YWNrICE9PSAndW5kZWZpbmVkJykgdGhpcy5zdGFjayA9IGVycm9yLnN0YWNrO1xuICAgICAgICB9XG4gICAgICAgIFVuZGVjbGFyZWRFdmVudEVycm9yLnByb3RvdHlwZSA9IG5ldyBFcnJvcigpO1xuICAgICAgICBVbmRlY2xhcmVkRXZlbnRFcnJvci5wcm90b3R5cGUubmFtZSA9IFVuZGVjbGFyZWRFdmVudEVycm9yLm5hbWU7XG4gICAgICAgIFVuZGVjbGFyZWRFdmVudEVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFVuZGVjbGFyZWRFdmVudEVycm9yO1xuXG5cbiAgICAgICAgZnVuY3Rpb24gVW5tYXBwZWRFdmVudEVycm9yIChtZXRob2ROYW1lLCBldmVudE5hbWUpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gJ0J1bGxldDo6IFsnICsgbWV0aG9kTmFtZSArICddIEV2ZW50IHN0cmluZzogXCInICsgZXZlbnROYW1lICsgJ1wiIGlzIG5vdCBtYXBwZWQgdG8gYW55IGNhbGxiYWNrc1xcblBsZWFzZSB1c2UgdGhlIEJ1bGxldC5vbiBtZXRob2QgdG8gbWFwIHRoaXMgc3RyaW5nIHRvIGEgY2FsbGJhY2suJztcblxuICAgICAgICAgICAgdmFyIGVycm9yID0gbmV3IEVycm9yKHRoaXMubWVzc2FnZSk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGVycm9yLnN0YWNrICE9PSAndW5kZWZpbmVkJykgdGhpcy5zdGFjayA9IGVycm9yLnN0YWNrO1xuICAgICAgICB9XG4gICAgICAgIFVubWFwcGVkRXZlbnRFcnJvci5wcm90b3R5cGUgPSBuZXcgRXJyb3IoKTtcbiAgICAgICAgVW5tYXBwZWRFdmVudEVycm9yLnByb3RvdHlwZS5uYW1lID0gVW5tYXBwZWRFdmVudEVycm9yLm5hbWU7XG4gICAgICAgIFVubWFwcGVkRXZlbnRFcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBVbm1hcHBlZEV2ZW50RXJyb3I7XG5cbiAgICAgICAgdmFyIF9DQUxMQkFDS19OQU1FU1BBQ0UgPSAnX19idWxsZXRfcHVic3ViX18nO1xuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgLy8gLS0gUHJpdmF0ZSB2YXJpYWJsZXNcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIHZhciBfc2VsZiA9IHRoaXM7XG4gICAgICAgIHZhciBfbWFwcGluZ3MgPSB7fTtcbiAgICAgICAgdmFyIF9zdHJpY3RNb2RlID0gZmFsc2U7XG4gICAgICAgIHZhciBfdHJpZ2dlckFzeW5jID0gdHJ1ZTtcblxuICAgICAgICAvLyBFeHBvc2UgY3VzdG9tIGVycm9yIHR5cGUgY29uc3RydWN0b3JzIChmb3IgdGVzdGluZyksIGJ1dCB1c2UgYW4gdW5kZXJzY29yZSB0byBpbXBseSBwcml2YWN5LlxuICAgICAgICBfc2VsZi5fZXJyb3JzID0ge1xuICAgICAgICAgICAgUGFyYW1Db3VudEVycm9yIDogUGFyYW1Db3VudEVycm9yLFxuICAgICAgICAgICAgUGFyYW1UeXBlRXJyb3IgOiBQYXJhbVR5cGVFcnJvcixcbiAgICAgICAgICAgIEV2ZW50TmFtZUxlbmd0aEVycm9yIDogRXZlbnROYW1lTGVuZ3RoRXJyb3IsXG4gICAgICAgICAgICBFdmVudE5hbWVzQXJyYXlMZW5ndGhFcnJvcjogRXZlbnROYW1lc0FycmF5TGVuZ3RoRXJyb3IsXG4gICAgICAgICAgICBVbmRlY2xhcmVkRXZlbnRFcnJvciA6IFVuZGVjbGFyZWRFdmVudEVycm9yLFxuICAgICAgICAgICAgVW5tYXBwZWRFdmVudEVycm9yIDogVW5tYXBwZWRFdmVudEVycm9yLFxuICAgICAgICB9O1xuXG5cbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIC8vIC0tIFB1YmxpYyB2YXJpYWJsZXNcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIF9zZWxmLmV2ZW50cyA9IHt9O1xuXG5cbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIC8vIC0tIFByaXZhdGUgbWV0aG9kc1xuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgZnVuY3Rpb24gX3J1bkNhbGxiYWNrIChldmVudE5hbWUsIGRhdGEpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGlkIGluIF9tYXBwaW5nc1tldmVudE5hbWVdLmNhbGxiYWNrcylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB2YXIgY2FsbGJhY2tPYmplY3QgPSBfbWFwcGluZ3NbZXZlbnROYW1lXS5jYWxsYmFja3NbaWRdO1xuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFja09iamVjdC5jYiA9PT0gJ2Z1bmN0aW9uJykgY2FsbGJhY2tPYmplY3QuY2IoZGF0YSk7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFja09iamVjdC5vbmNlID09PSAnYm9vbGVhbicgJiYgY2FsbGJhY2tPYmplY3Qub25jZSA9PT0gdHJ1ZSkgX3NlbGYub2ZmKGV2ZW50TmFtZSwgY2FsbGJhY2tPYmplY3QuY2IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gX2Nsb25lQ2FsbGJhY2tzIChjYWxsYmFja3MpIHtcbiAgICAgICAgICAgIHZhciBjbG9uZWRDYWxsYmFja3MgPSB7fTtcblxuICAgICAgICAgICAgZm9yICh2YXIgY2FsbGJhY2tOYW1lIGluIGNhbGxiYWNrcykge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNsb25lZENhbGxiYWNrc1tjYWxsYmFja05hbWVdID0ge1xuICAgICAgICAgICAgICAgICAgICBjYiA6IGNhbGxiYWNrc1tjYWxsYmFja05hbWVdLmNiLFxuICAgICAgICAgICAgICAgICAgICBvbmNlIDogY2FsbGJhY2tzW2NhbGxiYWNrTmFtZV0ub25jZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBjbG9uZWRDYWxsYmFja3M7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBfZGVsZXRlQWxsQ2FsbGJhY2tSZWZlcmVuY2VzRm9yRXZlbnQgKGV2ZW50TmFtZSlcbiAgICAgICAge1xuICAgICAgICAgICAgZm9yICh2YXIgaWQgaW4gX21hcHBpbmdzW2V2ZW50TmFtZV0uY2FsbGJhY2tzKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHZhciBjYWxsYmFjayA9IF9tYXBwaW5nc1tldmVudE5hbWVdLmNhbGxiYWNrc1tpZF0uY2I7XG5cbiAgICAgICAgICAgICAgICBjYWxsYmFja1tfQ0FMTEJBQ0tfTkFNRVNQQUNFXS50b3RhbEV2ZW50cy0tO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrW19DQUxMQkFDS19OQU1FU1BBQ0VdLnRvdGFsRXZlbnRzID09PSAwKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGNhbGxiYWNrW19DQUxMQkFDS19OQU1FU1BBQ0VdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgY2FsbGJhY2tbX0NBTExCQUNLX05BTUVTUEFDRV1bZXZlbnROYW1lXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBfZGVsZXRlQWxsQ2FsbGJhY2tSZWZlcmVuY2VzICgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZvciAodmFyIGV2ZW50TmFtZSBpbiBfbWFwcGluZ3MpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgX2RlbGV0ZUFsbENhbGxiYWNrUmVmZXJlbmNlc0ZvckV2ZW50KGV2ZW50TmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBFeHBvc2UgX2dldE1hcHBpbmdzIG1ldGhvZCAoZm9yIHRlc3RpbmcpLCBidXQgdXNlIGFuIHVuZGVyc2NvcmUgdG8gaW1wbHkgcHJpdmFjeS5cbiAgICAgICAgX3NlbGYuX2dldE1hcHBpbmdzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBSZXR1cm4gYSBkaWN0aW9uYXJ5IG9iamVjdCB0aGF0IGhhcyBubyBlZmZlY3Qgb24gYXBwIHN0YXRlIHRvIGVuc3VyZSAnX21hcHBpbmdzJ1xuICAgICAgICAgICAgLy8gc3RheXMgcHJpdmF0ZSwgZXZlbiBpZiB0aGUgdmFsdWUgcmV0dXJuZWQgZnJvbSB0aGlzIG1ldGhvZCBpcyBtb2RpZmllZC5cbiAgICAgICAgICAgIHZhciBjbG9uZWRNYXBwaW5ncyA9IHt9O1xuXG4gICAgICAgICAgICBmb3IgKHZhciBtYXBwaW5nIGluIF9tYXBwaW5ncylcbiAgICAgICAgICAgIHsgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY2xvbmVkTWFwcGluZ3NbbWFwcGluZ10gPSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrcyA6IF9jbG9uZUNhbGxiYWNrcyhfbWFwcGluZ3NbbWFwcGluZ10uY2FsbGJhY2tzKSxcbiAgICAgICAgICAgICAgICAgICAgdG90YWxDYWxsYmFja3MgOiBfbWFwcGluZ3NbbWFwcGluZ10udG90YWxDYWxsYmFja3NcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gY2xvbmVkTWFwcGluZ3M7XG4gICAgICAgIH07XG5cblxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgLy8gLS0gUHVibGljIG1ldGhvZHNcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIF9zZWxmLm9uID0gZnVuY3Rpb24gKGV2ZW50TmFtZSwgZm4sIG9uY2UpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMiB8fCBhcmd1bWVudHMubGVuZ3RoID4gMylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUGFyYW1Db3VudEVycm9yKCdvbicsICdFeHBlY3RlZCBiZXR3ZWVuIDIgYW5kIDMgcGFyYW1ldGVycycsIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGV2ZW50TmFtZSAhPT0gJ3N0cmluZycpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFBhcmFtVHlwZUVycm9yKCdvbicsICdldmVudCBuYW1lJywgZXZlbnROYW1lLCAnc3RyaW5nJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChldmVudE5hbWUubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFdmVudE5hbWVMZW5ndGhFcnJvcignb24nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKF9zdHJpY3RNb2RlICYmIHR5cGVvZiBfc2VsZi5ldmVudHNbZXZlbnROYW1lXSA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFVuZGVjbGFyZWRFdmVudEVycm9yKCdvbicsIGV2ZW50TmFtZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFBhcmFtVHlwZUVycm9yKCdvbicsICdjYWxsYmFjaycsIGZuLCAnZnVuY3Rpb24nKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvbmNlICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygb25jZSAhPT0gJ2Jvb2xlYW4nKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBQYXJhbVR5cGVFcnJvcignb24nLCAnb25jZScsIG9uY2UsICdib29sZWFuJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIHJlZmVyZW5jZSBiZXR3ZWVuIHRoZSBjYWxsYmFjayBhbmQgc3RvcmVkIGV2ZW50LlxuICAgICAgICAgICAgdmFyIGNhbGxiYWNrSWQgPSBudWxsO1xuXG4gICAgICAgICAgICAvLyBJZiB0aGUgbmFtZWQgZXZlbnQgb2JqZWN0IGFscmVhZHkgZXhpc3RzIGluIHRoZSBkaWN0aW9uYXJ5Li4uXG4gICAgICAgICAgICBpZiAodHlwZW9mIF9tYXBwaW5nc1tldmVudE5hbWVdICE9PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvLyBBdHRlbXB0IHRvIGdldCB0aGUgY2FsbGJhY2sgSUQgZnJvbSB0aGUgY2FsbGJhY2sgaXRzZWxmLlxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZm5bX0NBTExCQUNLX05BTUVTUEFDRV0gPT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZm5bX0NBTExCQUNLX05BTUVTUEFDRV0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3RhbEV2ZW50czogMFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBBZGQgYSBuZXcgY2FsbGJhY2sgb2JqZWN0IHRvIHRoZSBleGlzdGluZyBldmVudCBvYmplY3QuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmbltfQ0FMTEJBQ0tfTkFNRVNQQUNFXVtldmVudE5hbWVdID09PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrSWQgPSBfbWFwcGluZ3NbZXZlbnROYW1lXS50b3RhbENhbGxiYWNrcztcblxuICAgICAgICAgICAgICAgICAgICBfbWFwcGluZ3NbZXZlbnROYW1lXS50b3RhbENhbGxiYWNrcysrO1xuXG4gICAgICAgICAgICAgICAgICAgIF9tYXBwaW5nc1tldmVudE5hbWVdLmNhbGxiYWNrc1tjYWxsYmFja0lkXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNiIDogZm4sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbmNlIDogdHlwZW9mIG9uY2UgPT09ICdib29sZWFuJyA/IG9uY2UgOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIE9uIHRoZSBjYWxsYmFjaywgY3JlYXRlIGEgcmVmZXJlbmNlIHRvIHRoZSBldmVudCBtYXBwaW5nLlxuICAgICAgICAgICAgICAgICAgICBmbltfQ0FMTEJBQ0tfTkFNRVNQQUNFXVtldmVudE5hbWVdID0gY2FsbGJhY2tJZDtcbiAgICAgICAgICAgICAgICAgICAgZm5bX0NBTExCQUNLX05BTUVTUEFDRV0udG90YWxFdmVudHMrKztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9uY2UgPT09ICdib29sZWFuJylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgY2FsbGJhY2sgSUQgZnJvbSB0aGUgdmFsdWUgb2YgdGhlIGV4aXN0aW5nIGV2ZW50IG5hbWUga2V5LlxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFja0lkID0gZm5bX0NBTExCQUNLX05BTUVTUEFDRV1bZXZlbnROYW1lXTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBUaGUgZnVuY3Rpb24gYWxyZWFkeSBleGlzdHMsIHNvIHVwZGF0ZSBpdCdzICdvbmNlJyB2YWx1ZS5cbiAgICAgICAgICAgICAgICAgICAgX21hcHBpbmdzW2V2ZW50TmFtZV0uY2FsbGJhY2tzW2NhbGxiYWNrSWRdLm9uY2UgPSBvbmNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvLyBDcmVhdGUgYSBuZXcgZXZlbnQgb2JqZWN0IGluIHRoZSBkaWN0aW9uYXJ5IHdpdGggdGhlIHNwZWNpZmllZCBuYW1lIGFuZCBjYWxsYmFjay5cbiAgICAgICAgICAgICAgICBfbWFwcGluZ3NbZXZlbnROYW1lXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tzIDoge31cbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgY2FsbGJhY2tJZCA9IDA7XG5cbiAgICAgICAgICAgICAgICBfbWFwcGluZ3NbZXZlbnROYW1lXS5jYWxsYmFja3NbY2FsbGJhY2tJZF0gPSB7Y2IgOiBmbiwgb25jZSA6ICEhb25jZX07XG4gICAgICAgICAgICAgICAgX21hcHBpbmdzW2V2ZW50TmFtZV0udG90YWxDYWxsYmFja3MgPSAxO1xuXG4gICAgICAgICAgICAgICAgLy8gT24gdGhlIGNhbGxiYWNrLCBjcmVhdGUgYSByZWZlcmVuY2UgdG8gdGhlIGV2ZW50IG1hcHBpbmcuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmbltfQ0FMTEJBQ0tfTkFNRVNQQUNFXSA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBmbltfQ0FMTEJBQ0tfTkFNRVNQQUNFXSA9IHt9O1xuICAgICAgICAgICAgICAgICAgICBmbltfQ0FMTEJBQ0tfTkFNRVNQQUNFXS50b3RhbEV2ZW50cyA9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGZuW19DQUxMQkFDS19OQU1FU1BBQ0VdLnRvdGFsRXZlbnRzKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGZuW19DQUxMQkFDS19OQU1FU1BBQ0VdW2V2ZW50TmFtZV0gPSBjYWxsYmFja0lkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIF9zZWxmLm9uY2UgPSBmdW5jdGlvbiAoZXZlbnROYW1lLCBmbilcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggIT09IDIpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFBhcmFtQ291bnRFcnJvcignb25jZScsICdFeHBlY3RlZCAyIHBhcmFtZXRlcnMnLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBldmVudE5hbWUgIT09ICdzdHJpbmcnKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBQYXJhbVR5cGVFcnJvcignb25jZScsICdldmVudCBuYW1lJywgZXZlbnROYW1lLCAnc3RyaW5nJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChldmVudE5hbWUubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFdmVudE5hbWVMZW5ndGhFcnJvcignb25jZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoX3N0cmljdE1vZGUgJiYgdHlwZW9mIF9zZWxmLmV2ZW50c1tldmVudE5hbWVdID09PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVW5kZWNsYXJlZEV2ZW50RXJyb3IoJ29uY2UnLCBldmVudE5hbWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBQYXJhbVR5cGVFcnJvcignb25jZScsICdjYWxsYmFjaycsIGZuLCAnZnVuY3Rpb24nKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgX3NlbGYub24oZXZlbnROYW1lLCBmbiwgdHJ1ZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgX3NlbGYub2ZmID0gZnVuY3Rpb24gKGV2ZW50TmFtZSwgZm4pXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vIGRlbGV0ZSBhbGwgcmVmZXJlbmNlcyB0byBCdWxsZXQgdGhhdCBleGlzdCBvbiBtYXBwZWQgY2FsbGJhY2tzLlxuICAgICAgICAgICAgICAgIF9kZWxldGVBbGxDYWxsYmFja1JlZmVyZW5jZXMoKTtcblxuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBhbGwgbWFwcGluZ3MgZnJvbSB0aGUgZGljdGlvbmFyeS5cbiAgICAgICAgICAgICAgICBfbWFwcGluZ3MgPSB7fTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBldmVudE5hbWUgIT09ICdzdHJpbmcnKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBQYXJhbVR5cGVFcnJvcignb2ZmJywgJ2V2ZW50IG5hbWUnLCBldmVudE5hbWUsICdzdHJpbmcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGV2ZW50TmFtZS5sZW5ndGggPT09IDApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEV2ZW50TmFtZUxlbmd0aEVycm9yKCdvZmYnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKF9zdHJpY3RNb2RlICYmIHR5cGVvZiBfc2VsZi5ldmVudHNbZXZlbnROYW1lXSA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFVuZGVjbGFyZWRFdmVudEVycm9yKCdvZmYnLCBldmVudE5hbWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZW9mIF9tYXBwaW5nc1tldmVudE5hbWVdID09PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvLyBUaGVyZSBpcyBubyBtYXBwaW5nIHRvIHJlbW92ZSwgc28gcmV0dXJuIHNpbGVudGx5LlxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gUmVtb3ZlIGp1c3QgdGhlIGZ1bmN0aW9uLCBpZiBwYXNzZWQgYXMgYSBwYXJhbWV0ZXIgYW5kIGluIHRoZSBkaWN0aW9uYXJ5LlxuICAgICAgICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvLyBpZiAodHlwZW9mIGZuW19DQUxMQkFDS19OQU1FU1BBQ0VdID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgZm5bX0NBTExCQUNLX05BTUVTUEFDRV1bZXZlbnROYW1lXSA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgICAvLyBUT0RPOiBUaHJvdyBlcnJvciBoZXJlIGlmIGluIHN0cmljdCBtb2RlLlxuICAgICAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgICAgIC8vIFJldHJpZXZlIGEgcmVmZXJlbmNlIHRvIHRoZSBzdG9yZWQgZXZlbnQgZnJvbSB0aGUgY2FsbGJhY2suXG4gICAgICAgICAgICAgICAgdmFyIGlkID0gZm5bX0NBTExCQUNLX05BTUVTUEFDRV1bZXZlbnROYW1lXTtcbiAgICAgICAgICAgICAgICB2YXIgZm5Ub1JlbW92ZSA9IF9tYXBwaW5nc1tldmVudE5hbWVdLmNhbGxiYWNrc1tpZF07XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZuVG9SZW1vdmUgIT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZGVsZXRlIHRoZSBjYWxsYmFjayBvYmplY3QgZnJvbSB0aGUgZGljdGlvbmFyeS5cbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIF9tYXBwaW5nc1tldmVudE5hbWVdLmNhbGxiYWNrc1tpZF07XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gZGVsZXRlIHRoZSBldmVudCByZWZlcmVuY2Ugb24gdGhlIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgZm5bX0NBTExCQUNLX05BTUVTUEFDRV1bZXZlbnROYW1lXTtcblxuICAgICAgICAgICAgICAgICAgICBfbWFwcGluZ3NbZXZlbnROYW1lXS50b3RhbENhbGxiYWNrcy0tO1xuICAgICAgICAgICAgICAgICAgICBmbltfQ0FMTEJBQ0tfTkFNRVNQQUNFXS50b3RhbEV2ZW50cy0tO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChfbWFwcGluZ3NbZXZlbnROYW1lXS50b3RhbENhbGxiYWNrcyA9PT0gMClcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlcmUgYXJlIG5vIG1vcmUgZnVuY3Rpb25zIGluIHRoZSBkaWN0aW9uYXJ5IHRoYXQgYXJlXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZWdpc3RlcmVkIHRvIHRoaXMgZXZlbnQsIHNvIGRlbGV0ZSB0aGUgbmFtZWQgZXZlbnQgb2JqZWN0LlxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIF9tYXBwaW5nc1tldmVudE5hbWVdO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGZuW19DQUxMQkFDS19OQU1FU1BBQ0VdLnRvdGFsRXZlbnRzID09PSAwKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGVyZSBhcmUgbm8gbW9yZSBldmVudHMgcmVnaXN0ZXJlZCBvbiB0aGlzIGNhbGxiYWNrLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc28gZGVsZXRlIHRoZSBCdWxsZXQgbmFtZXNwYWNlLlxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGZuW19DQUxMQkFDS19OQU1FU1BBQ0VdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIGZuICE9PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUGFyYW1UeXBlRXJyb3IoJ29mZicsICdjYWxsYmFjaycsIGZuLCAnZnVuY3Rpb24nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvLyBObyBjYWxsYmFjayB3YXMgcGFzc2VkIHRvIHRoZSAnb2ZmJyBtZXRob2QuLi5cblxuICAgICAgICAgICAgICAgIC8vIEZvciBlYWNoIGNhbGxiYWNrIGluIF9tYXBwaW5nc1tldmVudE5hbWVdLCBkZWxldGUgdGhlIHJlZmVyZW5jZSB0b1xuICAgICAgICAgICAgICAgIC8vIHRoZSBzcGVjaWZpZWQgZXZlbnQgbmFtZSBvbiB0aGUgY2FsbGJhY2sgaXRzZWxmLlxuICAgICAgICAgICAgICAgIF9kZWxldGVBbGxDYWxsYmFja1JlZmVyZW5jZXNGb3JFdmVudChldmVudE5hbWUpO1xuXG4gICAgICAgICAgICAgICAgLy8gRGVsZXRlIGFsbCBmdW5jdGlvbnMgaW4gdGhlIGRpY3Rpb25hcnkgdGhhdCBhcmUgcmVnaXN0ZXJlZCB0byB0aGlzXG4gICAgICAgICAgICAgICAgLy8gZXZlbnQgYnkgZGVsZXRpbmcgdGhlIG5hbWVkIGV2ZW50IG9iamVjdC5cbiAgICAgICAgICAgICAgICBkZWxldGUgX21hcHBpbmdzW2V2ZW50TmFtZV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gUmVwbGFjZSBhIHNpbmdsZSBtYXBwZWQgY2FsbGJhY2sgZm9yIHRoZSBzcGVjaWZpZWQgZXZlbnQgbmFtZSB3aXRoIGEgbmV3IGNhbGxiYWNrLlxuICAgICAgICBfc2VsZi5yZXBsYWNlQ2FsbGJhY2sgPSBmdW5jdGlvbiAoZXZlbnROYW1lLCBvbGRGbiwgbmV3Rm4sIG9uY2UpIHtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBldmVudE5hbWUgIT09ICdzdHJpbmcnKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBQYXJhbVR5cGVFcnJvcigncmVwbGFjZUNhbGxiYWNrJywgJ2V2ZW50IG5hbWUnLCBldmVudE5hbWUsICdzdHJpbmcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGV2ZW50TmFtZS5sZW5ndGggPT09IDApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEV2ZW50TmFtZUxlbmd0aEVycm9yKCdyZXBsYWNlQ2FsbGJhY2snKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBfbWFwcGluZ3NbZXZlbnROYW1lXSA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFVubWFwcGVkRXZlbnRFcnJvcigncmVwbGFjZUNhbGxiYWNrJywgZXZlbnROYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKF9zdHJpY3RNb2RlICYmIHR5cGVvZiBfc2VsZi5ldmVudHNbZXZlbnROYW1lXSA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFVuZGVjbGFyZWRFdmVudEVycm9yKCdyZXBsYWNlQ2FsbGJhY2snLCBldmVudE5hbWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9sZEZuICE9PSAnZnVuY3Rpb24nKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBQYXJhbVR5cGVFcnJvcigncmVwbGFjZUNhbGxiYWNrJywgJ2NhbGxiYWNrJywgb2xkRm4sICdmdW5jdGlvbicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZW9mIG5ld0ZuICE9PSAnZnVuY3Rpb24nKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBQYXJhbVR5cGVFcnJvcigncmVwbGFjZUNhbGxiYWNrJywgJ2NhbGxiYWNrJywgbmV3Rm4sICdmdW5jdGlvbicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9uY2UgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBvbmNlICE9PSAnYm9vbGVhbicpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFBhcmFtVHlwZUVycm9yKCdyZXBsYWNlQ2FsbGJhY2snLCAnb25jZScsIG9uY2UsICdib29sZWFuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIF9zZWxmLm9mZihldmVudE5hbWUsIG9sZEZuKTtcbiAgICAgICAgICAgIF9zZWxmLm9uKGV2ZW50TmFtZSwgbmV3Rm4sIG9uY2UpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIFJlcGxhY2UgYWxsIG9mIHRoZSBzcGVjaWZpZWQgZXZlbnQgbmFtZeKAmXMgbWFwcGVkIGNhbGxiYWNrcyB3aXRoIHRoZSBzcGVjaWZpZWQgY2FsbGJhY2suXG4gICAgICAgIF9zZWxmLnJlcGxhY2VBbGxDYWxsYmFja3MgPSBmdW5jdGlvbiAoZXZlbnROYW1lLCBuZXdGbiwgb25jZSkge1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGV2ZW50TmFtZSAhPT0gJ3N0cmluZycpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFBhcmFtVHlwZUVycm9yKCdyZXBsYWNlJywgJ2V2ZW50IG5hbWUnLCBldmVudE5hbWUsICdzdHJpbmcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGV2ZW50TmFtZS5sZW5ndGggPT09IDApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEV2ZW50TmFtZUxlbmd0aEVycm9yKCdyZXBsYWNlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgX21hcHBpbmdzW2V2ZW50TmFtZV0gPT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBVbm1hcHBlZEV2ZW50RXJyb3IoJ3JlcGxhY2UnLCBldmVudE5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoX3N0cmljdE1vZGUgJiYgdHlwZW9mIF9zZWxmLmV2ZW50c1tldmVudE5hbWVdID09PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVW5kZWNsYXJlZEV2ZW50RXJyb3IoJ3JlcGxhY2UnLCBldmVudE5hbWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZW9mIG5ld0ZuICE9PSAnZnVuY3Rpb24nKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBQYXJhbVR5cGVFcnJvcigncmVwbGFjZScsICdjYWxsYmFjaycsIG5ld0ZuLCAnZnVuY3Rpb24nKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvbmNlICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygb25jZSAhPT0gJ2Jvb2xlYW4nKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBQYXJhbVR5cGVFcnJvcigncmVwbGFjZScsICdvbmNlJywgb25jZSwgJ2Jvb2xlYW4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgX3NlbGYub2ZmKGV2ZW50TmFtZSk7XG4gICAgICAgICAgICBfc2VsZi5vbihldmVudE5hbWUsIG5ld0ZuLCBvbmNlKTtcbiAgICAgICAgfTtcblxuICAgICAgICBfc2VsZi50cmlnZ2VyID0gZnVuY3Rpb24gKGV2ZW50TmFtZSwgZGF0YSlcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBldmVudE5hbWUgIT09ICdzdHJpbmcnKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBQYXJhbVR5cGVFcnJvcigndHJpZ2dlcicsICdldmVudCBuYW1lJywgZXZlbnROYW1lLCAnc3RyaW5nJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChldmVudE5hbWUubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFdmVudE5hbWVMZW5ndGhFcnJvcigndHJpZ2dlcicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoX3N0cmljdE1vZGUgJiYgdHlwZW9mIF9zZWxmLmV2ZW50c1tldmVudE5hbWVdID09PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVW5kZWNsYXJlZEV2ZW50RXJyb3IoJ3RyaWdnZXInLCBldmVudE5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAodHlwZW9mIF9tYXBwaW5nc1tldmVudE5hbWVdID09PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZiAoX3N0cmljdE1vZGUpIHRocm93IG5ldyBVbm1hcHBlZEV2ZW50RXJyb3IoJ3RyaWdnZXInLCBldmVudE5hbWUpO1xuXG4gICAgICAgICAgICAgICAgLy8gUmV0dXJuIHNpbGVudGx5IGlmIG5vdCBpbiBzdHJpY3QgbW9kZS5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENoZWNrIHdoZXRoZXIgb3Igbm90IHRoaXMgaXMgYSBicm93c2VyIGVudmlyb25tZW50LlxuICAgICAgICAgICAgaWYgKF90cmlnZ2VyQXN5bmMgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgX3J1bkNhbGxiYWNrKGV2ZW50TmFtZSwgZGF0YSk7XG4gICAgICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgX3J1bkNhbGxiYWNrKGV2ZW50TmFtZSwgZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgX3NlbGYuYWRkRXZlbnROYW1lID0gZnVuY3Rpb24gKGV2ZW50TmFtZSkge1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGV2ZW50TmFtZSAhPT0gJ3N0cmluZycpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFBhcmFtVHlwZUVycm9yKCdhZGRFdmVudE5hbWUnLCAnZXZlbnQgbmFtZScsIGV2ZW50TmFtZSwgJ3N0cmluZycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZXZlbnROYW1lLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXZlbnROYW1lTGVuZ3RoRXJyb3IoJ2FkZEV2ZW50TmFtZScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfc2VsZi5ldmVudHNbZXZlbnROYW1lXSA9IGV2ZW50TmFtZTtcbiAgICAgICAgfTtcblxuICAgICAgICBfc2VsZi5hZGRNdWx0aXBsZUV2ZW50TmFtZXMgPSBmdW5jdGlvbiAoZXZlbnROYW1lcykge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoIShldmVudE5hbWVzIGluc3RhbmNlb2YgQXJyYXkpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBQYXJhbVR5cGVFcnJvcignYWRkTXVsdGlwbGVFdmVudE5hbWVzJywgJ2V2ZW50IG5hbWVzJywgZXZlbnROYW1lcywgJ2FycmF5Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChldmVudE5hbWVzLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXZlbnROYW1lc0FycmF5TGVuZ3RoRXJyb3IoJ2FkZE11bHRpcGxlRXZlbnROYW1lcycpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgICAgICB2YXIgbGVuZ3RoID0gZXZlbnROYW1lcy5sZW5ndGg7XG5cbiAgICAgICAgICAgIGZvcihpOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudEV2ZW50TmFtZSA9IGV2ZW50TmFtZXNbaV07XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgX3NlbGYuYWRkRXZlbnROYW1lKGN1cnJlbnRFdmVudE5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgX3NlbGYucmVtb3ZlRXZlbnROYW1lID0gZnVuY3Rpb24gKGV2ZW50TmFtZSkge1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGV2ZW50TmFtZSAhPT0gJ3N0cmluZycpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFBhcmFtVHlwZUVycm9yKCdyZW1vdmVFdmVudE5hbWUnLCAnZXZlbnQgbmFtZScsIGV2ZW50TmFtZSwgJ3N0cmluZycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgIGVsc2UgaWYgKGV2ZW50TmFtZS5sZW5ndGggPT09IDApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEV2ZW50TmFtZUxlbmd0aEVycm9yKCdyZW1vdmVFdmVudE5hbWUnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKF9zZWxmLmV2ZW50c1tldmVudE5hbWVdKSBkZWxldGUgX3NlbGYuZXZlbnRzW2V2ZW50TmFtZV07XG4gICAgICAgIH07XG5cbiAgICAgICAgX3NlbGYuZ2V0U3RyaWN0TW9kZSA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgLy8gUmV0dXJuIGEgYm9vbGVhbiB0aGF0IGRvZXNuJ3QgZGlyZWN0bHkgcG9pbnQgdG8gdGhlIGludGVybmFsICdfc3RyaWN0TW9kZScgcHJvcGVydHkuXG4gICAgICAgICAgICByZXR1cm4gX3N0cmljdE1vZGUgPT09IHRydWUgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgIH07XG5cbiAgICAgICAgX3NlbGYuc2V0U3RyaWN0TW9kZSA9IGZ1bmN0aW9uICh1c2VTdHJpY3RNb2RlKSB7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdXNlU3RyaWN0TW9kZSAhPT0gJ2Jvb2xlYW4nKSB0aHJvdyBuZXcgUGFyYW1UeXBlRXJyb3IoJ3NldFN0cmljdE1vZGUnLCAnc3RyaWN0IG1vZGUnLCB1c2VTdHJpY3RNb2RlLCAnYm9vbGVhbicpO1xuXG4gICAgICAgICAgICBfc3RyaWN0TW9kZSA9IHVzZVN0cmljdE1vZGU7XG4gICAgICAgIH07XG5cbiAgICAgICAgX3NlbGYuZ2V0VHJpZ2dlckFzeW5jID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAvLyBSZXR1cm4gYSBib29sZWFuIHRoYXQgZG9lc24ndCBkaXJlY3RseSBwb2ludCB0byB0aGUgaW50ZXJuYWwgJ190cmlnZ2VyQXN5bmMnIHByb3BlcnR5LlxuICAgICAgICAgICAgcmV0dXJuIF90cmlnZ2VyQXN5bmMgPT09IHRydWUgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgIH07XG5cbiAgICAgICAgX3NlbGYuc2V0VHJpZ2dlckFzeW5jID0gZnVuY3Rpb24gKHVzZUFzeW5jKSB7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdXNlQXN5bmMgIT09ICdib29sZWFuJykgdGhyb3cgbmV3IFBhcmFtVHlwZUVycm9yKCdzZXRUcmlnZ2VyQXN5bmMnLCAndHJpZ2dlciBhc3luYycsIHVzZUFzeW5jLCAnYm9vbGVhbicpO1xuXG4gICAgICAgICAgICBfdHJpZ2dlckFzeW5jID0gdXNlQXN5bmM7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gVE9ETyA6IENyZWF0ZSBhbiAnYWRkTXVsdGlwbGVFdmVudE5hbWVzJyBtZXRob2Qgd2l0aCBhbiBhcnJheSBvZiBzdHJpbmdzIHBhc3NlZCBhcyBhIHBhcmFtLlxuICAgICAgICAvLyAtIGluY2x1ZGUgdHlwZSBjaGVja3MgZm9yIHN0cmluZyB3aGlsZSBsb29waW5nIG92ZXIgdGhlIGFycmF5LlxuXG4gICAgICAgIC8vIFRPRE8gOiBDcmVhdGUgYSAncmVwbGFjZUFsbEV2ZW50TmFtZXMnIG1ldGhvZCB3aXRoIGFuIGFycmF5IG9mIHN0cmluZ3MgcGFzc2VkIGFzIGEgcGFyYW0uXG4gICAgICAgIC8vIC0gaW5jbHVkZSB0eXBlIGNoZWNrcyBmb3Igc3RyaW5nIHdoaWxlIGxvb3Bpbmcgb3ZlciB0aGUgYXJyYXkuXG5cbiAgICAgICAgLy8gVE9ETyA6IENyZWF0ZSBhICdyZW1vdmVBbGxFdmVudE5hbWVzJyBtZXRob2QuIE5vIHBhcmFtcyBuZWNlc3NhcnkuXG4gICAgICAgIC8vIOKAkyBJbnRlcm5hbGx5IHRoaXMgY291bGQgc2ltcGx5IGNhbGwgJ3JlcGxhY2VBbGxFdmVudE5hbWVzJyBhbmQgcGFzcyBhbiBlbXB0eSBhcnJheSBhcyBhIHBhcmFtLlxuXG4gICAgICAgIC8vIFRPRE8gOiBDcmVhdGUgYW4gJ29uQW55JyBtZXRob2Qgd2l0aCBhbiBhcnJheSBvZiBzdHJpbmdzIHBhc3NlZCBhcyB0aGUgZmlyc3QgcGFyYW0gYW5kIGEgc2luZ2xlIGNhbGxiYWNrIGFzIHRoZSBzZWNvbmQuXG4gICAgICAgIC8vIC0gaW5jbHVkZSB0eXBlIGNoZWNrcyBmb3Igc3RyaW5nIHdoaWxlIGxvb3Bpbmcgb3ZlciB0aGUgYXJyYXkuXG5cbiAgICAgICAgLy8gVE9ETyA6IENyZWF0ZSBhbiAnb25NdWx0aXBsZScgbWV0aG9kIHdpdGggYW4gYXJyYXkgb2YgZmxhdCBvYmplY3RzIHBhc3NlZCBhcyBhIHBhcmFtLlxuICAgICAgICAvLyAtIGV4YW1wbGUgb2YgcmVxdWlyZWQgcGFyYW0gc3RydWN0dXJlOlxuICAgICAgICAvLyBbe2V2ZW50TmFtZTogJ3NvbWVFdmVudCcsIGNhbGxiYWNrOiBzb21lQ2FsbGJhY2ssIG9uY2U6IGZhbHNlfSwge2V2ZW50TmFtZTogJ2Fub3RoZXJFdmVudCcsIGNhbGxiYWNrOiBhbm90aGVyQ2FsbGJhY2ssIG9uY2U6IHRydWV9XVxuICAgIH1cblxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gLS0gTW9kdWxlIGRlZmluaXRpb25cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBDaGVjayBmb3IgQU1EL01vZHVsZSBzdXBwb3J0LCBvdGhlcndpc2UgZGVmaW5lIEJ1bGxldCBhcyBhIGdsb2JhbCB2YXJpYWJsZS5cblxuICAgIGlmICh0eXBlb2YgZGVmaW5lICE9PSAndW5kZWZpbmVkJyAmJiBkZWZpbmUuYW1kKVxuICAgIHtcbiAgICAgICAgLy8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxuICAgICAgICBkZWZpbmUgKGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBCdWxsZXQoKTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpXG4gICAge1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IG5ldyBCdWxsZXQoKTtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgd2luZG93LkJ1bGxldCA9IG5ldyBCdWxsZXQoKTtcbiAgICB9XG4gICAgXG59KSgpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYnVsbGV0LXB1YnN1Yi9kaXN0L2J1bGxldC5qcyIsInZhciB0eXBlID0gcmVxdWlyZSgndHlwZS1vZicpO1xuXG52YXIganNvbnBJRCA9IDAsXG4gICAgZG9jdW1lbnQgPSB3aW5kb3cuZG9jdW1lbnQsXG4gICAga2V5LFxuICAgIG5hbWUsXG4gICAgcnNjcmlwdCA9IC88c2NyaXB0XFxiW148XSooPzooPyE8XFwvc2NyaXB0Pik8W148XSopKjxcXC9zY3JpcHQ+L2dpLFxuICAgIHNjcmlwdFR5cGVSRSA9IC9eKD86dGV4dHxhcHBsaWNhdGlvbilcXC9qYXZhc2NyaXB0L2ksXG4gICAgeG1sVHlwZVJFID0gL14oPzp0ZXh0fGFwcGxpY2F0aW9uKVxcL3htbC9pLFxuICAgIGpzb25UeXBlID0gJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIGh0bWxUeXBlID0gJ3RleHQvaHRtbCcsXG4gICAgYmxhbmtSRSA9IC9eXFxzKiQvXG5cbnZhciBhamF4ID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcHRpb25zKXtcbiAgdmFyIHNldHRpbmdzID0gZXh0ZW5kKHt9LCBvcHRpb25zIHx8IHt9KVxuICBmb3IgKGtleSBpbiBhamF4LnNldHRpbmdzKSBpZiAoc2V0dGluZ3Nba2V5XSA9PT0gdW5kZWZpbmVkKSBzZXR0aW5nc1trZXldID0gYWpheC5zZXR0aW5nc1trZXldXG5cbiAgYWpheFN0YXJ0KHNldHRpbmdzKVxuXG4gIGlmICghc2V0dGluZ3MuY3Jvc3NEb21haW4pIHNldHRpbmdzLmNyb3NzRG9tYWluID0gL14oW1xcdy1dKzopP1xcL1xcLyhbXlxcL10rKS8udGVzdChzZXR0aW5ncy51cmwpICYmXG4gICAgUmVnRXhwLiQyICE9IHdpbmRvdy5sb2NhdGlvbi5ob3N0XG5cbiAgdmFyIGRhdGFUeXBlID0gc2V0dGluZ3MuZGF0YVR5cGUsIGhhc1BsYWNlaG9sZGVyID0gLz1cXD8vLnRlc3Qoc2V0dGluZ3MudXJsKVxuICBpZiAoZGF0YVR5cGUgPT0gJ2pzb25wJyB8fCBoYXNQbGFjZWhvbGRlcikge1xuICAgIGlmICghaGFzUGxhY2Vob2xkZXIpIHNldHRpbmdzLnVybCA9IGFwcGVuZFF1ZXJ5KHNldHRpbmdzLnVybCwgJ2NhbGxiYWNrPT8nKVxuICAgIHJldHVybiBhamF4LkpTT05QKHNldHRpbmdzKVxuICB9XG5cbiAgaWYgKCFzZXR0aW5ncy51cmwpIHNldHRpbmdzLnVybCA9IHdpbmRvdy5sb2NhdGlvbi50b1N0cmluZygpXG4gIHNlcmlhbGl6ZURhdGEoc2V0dGluZ3MpXG5cbiAgdmFyIG1pbWUgPSBzZXR0aW5ncy5hY2NlcHRzW2RhdGFUeXBlXSxcbiAgICAgIGJhc2VIZWFkZXJzID0geyB9LFxuICAgICAgcHJvdG9jb2wgPSAvXihbXFx3LV0rOilcXC9cXC8vLnRlc3Qoc2V0dGluZ3MudXJsKSA/IFJlZ0V4cC4kMSA6IHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCxcbiAgICAgIHhociA9IGFqYXguc2V0dGluZ3MueGhyKCksIGFib3J0VGltZW91dFxuXG4gIGlmICghc2V0dGluZ3MuY3Jvc3NEb21haW4pIGJhc2VIZWFkZXJzWydYLVJlcXVlc3RlZC1XaXRoJ10gPSAnWE1MSHR0cFJlcXVlc3QnXG4gIGlmIChtaW1lKSB7XG4gICAgYmFzZUhlYWRlcnNbJ0FjY2VwdCddID0gbWltZVxuICAgIGlmIChtaW1lLmluZGV4T2YoJywnKSA+IC0xKSBtaW1lID0gbWltZS5zcGxpdCgnLCcsIDIpWzBdXG4gICAgeGhyLm92ZXJyaWRlTWltZVR5cGUgJiYgeGhyLm92ZXJyaWRlTWltZVR5cGUobWltZSlcbiAgfVxuICBpZiAoc2V0dGluZ3MuY29udGVudFR5cGUgfHwgKHNldHRpbmdzLmRhdGEgJiYgc2V0dGluZ3MudHlwZS50b1VwcGVyQ2FzZSgpICE9ICdHRVQnKSlcbiAgICBiYXNlSGVhZGVyc1snQ29udGVudC1UeXBlJ10gPSAoc2V0dGluZ3MuY29udGVudFR5cGUgfHwgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpXG4gIHNldHRpbmdzLmhlYWRlcnMgPSBleHRlbmQoYmFzZUhlYWRlcnMsIHNldHRpbmdzLmhlYWRlcnMgfHwge30pXG5cbiAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCl7XG4gICAgaWYgKHhoci5yZWFkeVN0YXRlID09IDQpIHtcbiAgICAgIGNsZWFyVGltZW91dChhYm9ydFRpbWVvdXQpXG4gICAgICB2YXIgcmVzdWx0LCBlcnJvciA9IGZhbHNlXG4gICAgICBpZiAoKHhoci5zdGF0dXMgPj0gMjAwICYmIHhoci5zdGF0dXMgPCAzMDApIHx8IHhoci5zdGF0dXMgPT0gMzA0IHx8ICh4aHIuc3RhdHVzID09IDAgJiYgcHJvdG9jb2wgPT0gJ2ZpbGU6JykpIHtcbiAgICAgICAgZGF0YVR5cGUgPSBkYXRhVHlwZSB8fCBtaW1lVG9EYXRhVHlwZSh4aHIuZ2V0UmVzcG9uc2VIZWFkZXIoJ2NvbnRlbnQtdHlwZScpKVxuICAgICAgICByZXN1bHQgPSB4aHIucmVzcG9uc2VUZXh0XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAoZGF0YVR5cGUgPT0gJ3NjcmlwdCcpICAgICgxLGV2YWwpKHJlc3VsdClcbiAgICAgICAgICBlbHNlIGlmIChkYXRhVHlwZSA9PSAneG1sJykgIHJlc3VsdCA9IHhoci5yZXNwb25zZVhNTFxuICAgICAgICAgIGVsc2UgaWYgKGRhdGFUeXBlID09ICdqc29uJykgcmVzdWx0ID0gYmxhbmtSRS50ZXN0KHJlc3VsdCkgPyBudWxsIDogSlNPTi5wYXJzZShyZXN1bHQpXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgZXJyb3IgPSBlIH1cblxuICAgICAgICBpZiAoZXJyb3IpIGFqYXhFcnJvcihlcnJvciwgJ3BhcnNlcmVycm9yJywgeGhyLCBzZXR0aW5ncylcbiAgICAgICAgZWxzZSBhamF4U3VjY2VzcyhyZXN1bHQsIHhociwgc2V0dGluZ3MpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhamF4RXJyb3IobnVsbCwgJ2Vycm9yJywgeGhyLCBzZXR0aW5ncylcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2YXIgYXN5bmMgPSAnYXN5bmMnIGluIHNldHRpbmdzID8gc2V0dGluZ3MuYXN5bmMgOiB0cnVlXG4gIHhoci5vcGVuKHNldHRpbmdzLnR5cGUsIHNldHRpbmdzLnVybCwgYXN5bmMpXG5cbiAgZm9yIChuYW1lIGluIHNldHRpbmdzLmhlYWRlcnMpIHhoci5zZXRSZXF1ZXN0SGVhZGVyKG5hbWUsIHNldHRpbmdzLmhlYWRlcnNbbmFtZV0pXG5cbiAgaWYgKGFqYXhCZWZvcmVTZW5kKHhociwgc2V0dGluZ3MpID09PSBmYWxzZSkge1xuICAgIHhoci5hYm9ydCgpXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBpZiAoc2V0dGluZ3MudGltZW91dCA+IDApIGFib3J0VGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBlbXB0eVxuICAgICAgeGhyLmFib3J0KClcbiAgICAgIGFqYXhFcnJvcihudWxsLCAndGltZW91dCcsIHhociwgc2V0dGluZ3MpXG4gICAgfSwgc2V0dGluZ3MudGltZW91dClcblxuICAvLyBhdm9pZCBzZW5kaW5nIGVtcHR5IHN0cmluZyAoIzMxOSlcbiAgeGhyLnNlbmQoc2V0dGluZ3MuZGF0YSA/IHNldHRpbmdzLmRhdGEgOiBudWxsKVxuICByZXR1cm4geGhyXG59XG5cblxuLy8gdHJpZ2dlciBhIGN1c3RvbSBldmVudCBhbmQgcmV0dXJuIGZhbHNlIGlmIGl0IHdhcyBjYW5jZWxsZWRcbmZ1bmN0aW9uIHRyaWdnZXJBbmRSZXR1cm4oY29udGV4dCwgZXZlbnROYW1lLCBkYXRhKSB7XG4gIC8vdG9kbzogRmlyZSBvZmYgc29tZSBldmVudHNcbiAgLy92YXIgZXZlbnQgPSAkLkV2ZW50KGV2ZW50TmFtZSlcbiAgLy8kKGNvbnRleHQpLnRyaWdnZXIoZXZlbnQsIGRhdGEpXG4gIHJldHVybiB0cnVlOy8vIWV2ZW50LmRlZmF1bHRQcmV2ZW50ZWRcbn1cblxuLy8gdHJpZ2dlciBhbiBBamF4IFwiZ2xvYmFsXCIgZXZlbnRcbmZ1bmN0aW9uIHRyaWdnZXJHbG9iYWwoc2V0dGluZ3MsIGNvbnRleHQsIGV2ZW50TmFtZSwgZGF0YSkge1xuICBpZiAoc2V0dGluZ3MuZ2xvYmFsKSByZXR1cm4gdHJpZ2dlckFuZFJldHVybihjb250ZXh0IHx8IGRvY3VtZW50LCBldmVudE5hbWUsIGRhdGEpXG59XG5cbi8vIE51bWJlciBvZiBhY3RpdmUgQWpheCByZXF1ZXN0c1xuYWpheC5hY3RpdmUgPSAwXG5cbmZ1bmN0aW9uIGFqYXhTdGFydChzZXR0aW5ncykge1xuICBpZiAoc2V0dGluZ3MuZ2xvYmFsICYmIGFqYXguYWN0aXZlKysgPT09IDApIHRyaWdnZXJHbG9iYWwoc2V0dGluZ3MsIG51bGwsICdhamF4U3RhcnQnKVxufVxuZnVuY3Rpb24gYWpheFN0b3Aoc2V0dGluZ3MpIHtcbiAgaWYgKHNldHRpbmdzLmdsb2JhbCAmJiAhKC0tYWpheC5hY3RpdmUpKSB0cmlnZ2VyR2xvYmFsKHNldHRpbmdzLCBudWxsLCAnYWpheFN0b3AnKVxufVxuXG4vLyB0cmlnZ2VycyBhbiBleHRyYSBnbG9iYWwgZXZlbnQgXCJhamF4QmVmb3JlU2VuZFwiIHRoYXQncyBsaWtlIFwiYWpheFNlbmRcIiBidXQgY2FuY2VsYWJsZVxuZnVuY3Rpb24gYWpheEJlZm9yZVNlbmQoeGhyLCBzZXR0aW5ncykge1xuICB2YXIgY29udGV4dCA9IHNldHRpbmdzLmNvbnRleHRcbiAgaWYgKHNldHRpbmdzLmJlZm9yZVNlbmQuY2FsbChjb250ZXh0LCB4aHIsIHNldHRpbmdzKSA9PT0gZmFsc2UgfHxcbiAgICAgIHRyaWdnZXJHbG9iYWwoc2V0dGluZ3MsIGNvbnRleHQsICdhamF4QmVmb3JlU2VuZCcsIFt4aHIsIHNldHRpbmdzXSkgPT09IGZhbHNlKVxuICAgIHJldHVybiBmYWxzZVxuXG4gIHRyaWdnZXJHbG9iYWwoc2V0dGluZ3MsIGNvbnRleHQsICdhamF4U2VuZCcsIFt4aHIsIHNldHRpbmdzXSlcbn1cbmZ1bmN0aW9uIGFqYXhTdWNjZXNzKGRhdGEsIHhociwgc2V0dGluZ3MpIHtcbiAgdmFyIGNvbnRleHQgPSBzZXR0aW5ncy5jb250ZXh0LCBzdGF0dXMgPSAnc3VjY2VzcydcbiAgc2V0dGluZ3Muc3VjY2Vzcy5jYWxsKGNvbnRleHQsIGRhdGEsIHN0YXR1cywgeGhyKVxuICB0cmlnZ2VyR2xvYmFsKHNldHRpbmdzLCBjb250ZXh0LCAnYWpheFN1Y2Nlc3MnLCBbeGhyLCBzZXR0aW5ncywgZGF0YV0pXG4gIGFqYXhDb21wbGV0ZShzdGF0dXMsIHhociwgc2V0dGluZ3MpXG59XG4vLyB0eXBlOiBcInRpbWVvdXRcIiwgXCJlcnJvclwiLCBcImFib3J0XCIsIFwicGFyc2VyZXJyb3JcIlxuZnVuY3Rpb24gYWpheEVycm9yKGVycm9yLCB0eXBlLCB4aHIsIHNldHRpbmdzKSB7XG4gIHZhciBjb250ZXh0ID0gc2V0dGluZ3MuY29udGV4dFxuICBzZXR0aW5ncy5lcnJvci5jYWxsKGNvbnRleHQsIHhociwgdHlwZSwgZXJyb3IpXG4gIHRyaWdnZXJHbG9iYWwoc2V0dGluZ3MsIGNvbnRleHQsICdhamF4RXJyb3InLCBbeGhyLCBzZXR0aW5ncywgZXJyb3JdKVxuICBhamF4Q29tcGxldGUodHlwZSwgeGhyLCBzZXR0aW5ncylcbn1cbi8vIHN0YXR1czogXCJzdWNjZXNzXCIsIFwibm90bW9kaWZpZWRcIiwgXCJlcnJvclwiLCBcInRpbWVvdXRcIiwgXCJhYm9ydFwiLCBcInBhcnNlcmVycm9yXCJcbmZ1bmN0aW9uIGFqYXhDb21wbGV0ZShzdGF0dXMsIHhociwgc2V0dGluZ3MpIHtcbiAgdmFyIGNvbnRleHQgPSBzZXR0aW5ncy5jb250ZXh0XG4gIHNldHRpbmdzLmNvbXBsZXRlLmNhbGwoY29udGV4dCwgeGhyLCBzdGF0dXMpXG4gIHRyaWdnZXJHbG9iYWwoc2V0dGluZ3MsIGNvbnRleHQsICdhamF4Q29tcGxldGUnLCBbeGhyLCBzZXR0aW5nc10pXG4gIGFqYXhTdG9wKHNldHRpbmdzKVxufVxuXG4vLyBFbXB0eSBmdW5jdGlvbiwgdXNlZCBhcyBkZWZhdWx0IGNhbGxiYWNrXG5mdW5jdGlvbiBlbXB0eSgpIHt9XG5cbmFqYXguSlNPTlAgPSBmdW5jdGlvbihvcHRpb25zKXtcbiAgaWYgKCEoJ3R5cGUnIGluIG9wdGlvbnMpKSByZXR1cm4gYWpheChvcHRpb25zKVxuXG4gIHZhciBjYWxsYmFja05hbWUgPSAnanNvbnAnICsgKCsranNvbnBJRCksXG4gICAgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JyksXG4gICAgYWJvcnQgPSBmdW5jdGlvbigpe1xuICAgICAgLy90b2RvOiByZW1vdmUgc2NyaXB0XG4gICAgICAvLyQoc2NyaXB0KS5yZW1vdmUoKVxuICAgICAgaWYgKGNhbGxiYWNrTmFtZSBpbiB3aW5kb3cpIHdpbmRvd1tjYWxsYmFja05hbWVdID0gZW1wdHlcbiAgICAgIGFqYXhDb21wbGV0ZSgnYWJvcnQnLCB4aHIsIG9wdGlvbnMpXG4gICAgfSxcbiAgICB4aHIgPSB7IGFib3J0OiBhYm9ydCB9LCBhYm9ydFRpbWVvdXQsXG4gICAgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXVxuICAgICAgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50XG5cbiAgaWYgKG9wdGlvbnMuZXJyb3IpIHNjcmlwdC5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgeGhyLmFib3J0KClcbiAgICBvcHRpb25zLmVycm9yKClcbiAgfVxuXG4gIHdpbmRvd1tjYWxsYmFja05hbWVdID0gZnVuY3Rpb24oZGF0YSl7XG4gICAgY2xlYXJUaW1lb3V0KGFib3J0VGltZW91dClcbiAgICAgIC8vdG9kbzogcmVtb3ZlIHNjcmlwdFxuICAgICAgLy8kKHNjcmlwdCkucmVtb3ZlKClcbiAgICBkZWxldGUgd2luZG93W2NhbGxiYWNrTmFtZV1cbiAgICBhamF4U3VjY2VzcyhkYXRhLCB4aHIsIG9wdGlvbnMpXG4gIH1cblxuICBzZXJpYWxpemVEYXRhKG9wdGlvbnMpXG4gIHNjcmlwdC5zcmMgPSBvcHRpb25zLnVybC5yZXBsYWNlKC89XFw/LywgJz0nICsgY2FsbGJhY2tOYW1lKVxuXG4gIC8vIFVzZSBpbnNlcnRCZWZvcmUgaW5zdGVhZCBvZiBhcHBlbmRDaGlsZCB0byBjaXJjdW12ZW50IGFuIElFNiBidWcuXG4gIC8vIFRoaXMgYXJpc2VzIHdoZW4gYSBiYXNlIG5vZGUgaXMgdXNlZCAoc2VlIGpRdWVyeSBidWdzICMyNzA5IGFuZCAjNDM3OCkuXG4gIGhlYWQuaW5zZXJ0QmVmb3JlKHNjcmlwdCwgaGVhZC5maXJzdENoaWxkKTtcblxuICBpZiAob3B0aW9ucy50aW1lb3V0ID4gMCkgYWJvcnRUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgeGhyLmFib3J0KClcbiAgICAgIGFqYXhDb21wbGV0ZSgndGltZW91dCcsIHhociwgb3B0aW9ucylcbiAgICB9LCBvcHRpb25zLnRpbWVvdXQpXG5cbiAgcmV0dXJuIHhoclxufVxuXG5hamF4LnNldHRpbmdzID0ge1xuICAvLyBEZWZhdWx0IHR5cGUgb2YgcmVxdWVzdFxuICB0eXBlOiAnR0VUJyxcbiAgLy8gQ2FsbGJhY2sgdGhhdCBpcyBleGVjdXRlZCBiZWZvcmUgcmVxdWVzdFxuICBiZWZvcmVTZW5kOiBlbXB0eSxcbiAgLy8gQ2FsbGJhY2sgdGhhdCBpcyBleGVjdXRlZCBpZiB0aGUgcmVxdWVzdCBzdWNjZWVkc1xuICBzdWNjZXNzOiBlbXB0eSxcbiAgLy8gQ2FsbGJhY2sgdGhhdCBpcyBleGVjdXRlZCB0aGUgdGhlIHNlcnZlciBkcm9wcyBlcnJvclxuICBlcnJvcjogZW1wdHksXG4gIC8vIENhbGxiYWNrIHRoYXQgaXMgZXhlY3V0ZWQgb24gcmVxdWVzdCBjb21wbGV0ZSAoYm90aDogZXJyb3IgYW5kIHN1Y2Nlc3MpXG4gIGNvbXBsZXRlOiBlbXB0eSxcbiAgLy8gVGhlIGNvbnRleHQgZm9yIHRoZSBjYWxsYmFja3NcbiAgY29udGV4dDogbnVsbCxcbiAgLy8gV2hldGhlciB0byB0cmlnZ2VyIFwiZ2xvYmFsXCIgQWpheCBldmVudHNcbiAgZ2xvYmFsOiB0cnVlLFxuICAvLyBUcmFuc3BvcnRcbiAgeGhyOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG5ldyB3aW5kb3cuWE1MSHR0cFJlcXVlc3QoKVxuICB9LFxuICAvLyBNSU1FIHR5cGVzIG1hcHBpbmdcbiAgYWNjZXB0czoge1xuICAgIHNjcmlwdDogJ3RleHQvamF2YXNjcmlwdCwgYXBwbGljYXRpb24vamF2YXNjcmlwdCcsXG4gICAganNvbjogICBqc29uVHlwZSxcbiAgICB4bWw6ICAgICdhcHBsaWNhdGlvbi94bWwsIHRleHQveG1sJyxcbiAgICBodG1sOiAgIGh0bWxUeXBlLFxuICAgIHRleHQ6ICAgJ3RleHQvcGxhaW4nXG4gIH0sXG4gIC8vIFdoZXRoZXIgdGhlIHJlcXVlc3QgaXMgdG8gYW5vdGhlciBkb21haW5cbiAgY3Jvc3NEb21haW46IGZhbHNlLFxuICAvLyBEZWZhdWx0IHRpbWVvdXRcbiAgdGltZW91dDogMFxufVxuXG5mdW5jdGlvbiBtaW1lVG9EYXRhVHlwZShtaW1lKSB7XG4gIHJldHVybiBtaW1lICYmICggbWltZSA9PSBodG1sVHlwZSA/ICdodG1sJyA6XG4gICAgbWltZSA9PSBqc29uVHlwZSA/ICdqc29uJyA6XG4gICAgc2NyaXB0VHlwZVJFLnRlc3QobWltZSkgPyAnc2NyaXB0JyA6XG4gICAgeG1sVHlwZVJFLnRlc3QobWltZSkgJiYgJ3htbCcgKSB8fCAndGV4dCdcbn1cblxuZnVuY3Rpb24gYXBwZW5kUXVlcnkodXJsLCBxdWVyeSkge1xuICByZXR1cm4gKHVybCArICcmJyArIHF1ZXJ5KS5yZXBsYWNlKC9bJj9dezEsMn0vLCAnPycpXG59XG5cbi8vIHNlcmlhbGl6ZSBwYXlsb2FkIGFuZCBhcHBlbmQgaXQgdG8gdGhlIFVSTCBmb3IgR0VUIHJlcXVlc3RzXG5mdW5jdGlvbiBzZXJpYWxpemVEYXRhKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGUob3B0aW9ucy5kYXRhKSA9PT0gJ29iamVjdCcpIG9wdGlvbnMuZGF0YSA9IHBhcmFtKG9wdGlvbnMuZGF0YSlcbiAgaWYgKG9wdGlvbnMuZGF0YSAmJiAoIW9wdGlvbnMudHlwZSB8fCBvcHRpb25zLnR5cGUudG9VcHBlckNhc2UoKSA9PSAnR0VUJykpXG4gICAgb3B0aW9ucy51cmwgPSBhcHBlbmRRdWVyeShvcHRpb25zLnVybCwgb3B0aW9ucy5kYXRhKVxufVxuXG5hamF4LmdldCA9IGZ1bmN0aW9uKHVybCwgc3VjY2Vzcyl7IHJldHVybiBhamF4KHsgdXJsOiB1cmwsIHN1Y2Nlc3M6IHN1Y2Nlc3MgfSkgfVxuXG5hamF4LnBvc3QgPSBmdW5jdGlvbih1cmwsIGRhdGEsIHN1Y2Nlc3MsIGRhdGFUeXBlKXtcbiAgaWYgKHR5cGUoZGF0YSkgPT09ICdmdW5jdGlvbicpIGRhdGFUeXBlID0gZGF0YVR5cGUgfHwgc3VjY2Vzcywgc3VjY2VzcyA9IGRhdGEsIGRhdGEgPSBudWxsXG4gIHJldHVybiBhamF4KHsgdHlwZTogJ1BPU1QnLCB1cmw6IHVybCwgZGF0YTogZGF0YSwgc3VjY2Vzczogc3VjY2VzcywgZGF0YVR5cGU6IGRhdGFUeXBlIH0pXG59XG5cbmFqYXguZ2V0SlNPTiA9IGZ1bmN0aW9uKHVybCwgc3VjY2Vzcyl7XG4gIHJldHVybiBhamF4KHsgdXJsOiB1cmwsIHN1Y2Nlc3M6IHN1Y2Nlc3MsIGRhdGFUeXBlOiAnanNvbicgfSlcbn1cblxudmFyIGVzY2FwZSA9IGVuY29kZVVSSUNvbXBvbmVudFxuXG5mdW5jdGlvbiBzZXJpYWxpemUocGFyYW1zLCBvYmosIHRyYWRpdGlvbmFsLCBzY29wZSl7XG4gIHZhciBhcnJheSA9IHR5cGUob2JqKSA9PT0gJ2FycmF5JztcbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIHZhciB2YWx1ZSA9IG9ialtrZXldO1xuXG4gICAgaWYgKHNjb3BlKSBrZXkgPSB0cmFkaXRpb25hbCA/IHNjb3BlIDogc2NvcGUgKyAnWycgKyAoYXJyYXkgPyAnJyA6IGtleSkgKyAnXSdcbiAgICAvLyBoYW5kbGUgZGF0YSBpbiBzZXJpYWxpemVBcnJheSgpIGZvcm1hdFxuICAgIGlmICghc2NvcGUgJiYgYXJyYXkpIHBhcmFtcy5hZGQodmFsdWUubmFtZSwgdmFsdWUudmFsdWUpXG4gICAgLy8gcmVjdXJzZSBpbnRvIG5lc3RlZCBvYmplY3RzXG4gICAgZWxzZSBpZiAodHJhZGl0aW9uYWwgPyAodHlwZSh2YWx1ZSkgPT09ICdhcnJheScpIDogKHR5cGUodmFsdWUpID09PSAnb2JqZWN0JykpXG4gICAgICBzZXJpYWxpemUocGFyYW1zLCB2YWx1ZSwgdHJhZGl0aW9uYWwsIGtleSlcbiAgICBlbHNlIHBhcmFtcy5hZGQoa2V5LCB2YWx1ZSlcbiAgfVxufVxuXG5mdW5jdGlvbiBwYXJhbShvYmosIHRyYWRpdGlvbmFsKXtcbiAgdmFyIHBhcmFtcyA9IFtdXG4gIHBhcmFtcy5hZGQgPSBmdW5jdGlvbihrLCB2KXsgdGhpcy5wdXNoKGVzY2FwZShrKSArICc9JyArIGVzY2FwZSh2KSkgfVxuICBzZXJpYWxpemUocGFyYW1zLCBvYmosIHRyYWRpdGlvbmFsKVxuICByZXR1cm4gcGFyYW1zLmpvaW4oJyYnKS5yZXBsYWNlKCclMjAnLCAnKycpXG59XG5cbmZ1bmN0aW9uIGV4dGVuZCh0YXJnZXQpIHtcbiAgdmFyIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xuICBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSkuZm9yRWFjaChmdW5jdGlvbihzb3VyY2UpIHtcbiAgICBmb3IgKGtleSBpbiBzb3VyY2UpXG4gICAgICBpZiAoc291cmNlW2tleV0gIT09IHVuZGVmaW5lZClcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XVxuICB9KVxuICByZXR1cm4gdGFyZ2V0XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3BhY2tpbmctYWpheC9pbmRleC5qcyIsInZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odmFsKXtcclxuICBzd2l0Y2ggKHRvU3RyaW5nLmNhbGwodmFsKSkge1xyXG4gICAgY2FzZSAnW29iamVjdCBGdW5jdGlvbl0nOiByZXR1cm4gJ2Z1bmN0aW9uJ1xyXG4gICAgY2FzZSAnW29iamVjdCBEYXRlXSc6IHJldHVybiAnZGF0ZSdcclxuICAgIGNhc2UgJ1tvYmplY3QgUmVnRXhwXSc6IHJldHVybiAncmVnZXhwJ1xyXG4gICAgY2FzZSAnW29iamVjdCBBcmd1bWVudHNdJzogcmV0dXJuICdhcmd1bWVudHMnXHJcbiAgICBjYXNlICdbb2JqZWN0IEFycmF5XSc6IHJldHVybiAnYXJyYXknXHJcbiAgICBjYXNlICdbb2JqZWN0IFN0cmluZ10nOiByZXR1cm4gJ3N0cmluZydcclxuICB9XHJcblxyXG4gIGlmICh0eXBlb2YgdmFsID09ICdvYmplY3QnICYmIHZhbCAmJiB0eXBlb2YgdmFsLmxlbmd0aCA9PSAnbnVtYmVyJykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKHR5cGVvZiB2YWwuY2FsbGVlID09ICdmdW5jdGlvbicpIHJldHVybiAnYXJndW1lbnRzJztcclxuICAgIH0gY2F0Y2ggKGV4KSB7XHJcbiAgICAgIGlmIChleCBpbnN0YW5jZW9mIFR5cGVFcnJvcikge1xyXG4gICAgICAgIHJldHVybiAnYXJndW1lbnRzJztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKHZhbCA9PT0gbnVsbCkgcmV0dXJuICdudWxsJ1xyXG4gIGlmICh2YWwgPT09IHVuZGVmaW5lZCkgcmV0dXJuICd1bmRlZmluZWQnXHJcbiAgaWYgKHZhbCAmJiB2YWwubm9kZVR5cGUgPT09IDEpIHJldHVybiAnZWxlbWVudCdcclxuICBpZiAodmFsID09PSBPYmplY3QodmFsKSkgcmV0dXJuICdvYmplY3QnXHJcblxyXG4gIHJldHVybiB0eXBlb2YgdmFsXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90eXBlLW9mL2luZGV4LmpzIiwiLyogQnVsayBQaW5uZXIgLSBDcmVhdGUgbXVsdGlwbGUgcGlucyBpbiB5b3VyIFBpbnRlcmVzdCBib2FyZHMgYXQgb25jZVxuICogQ29weXJpZ2h0IChDKSAyMDE3IEx1a2UgRGVudG9uXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uOyBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuXG4vKipcbiAqIENsYXNzIEFQSVxuICpcbiAqIEludGVyZmFjZSBmb3IgY29tbXVuaWNhdGluZyB3aXRoIHRoZSBBUElcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xlYXJQcmV2aWV3cyB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jbGVhckJ1dHRvbiAgICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xlYXItY29tcGxldGVkXCIpO1xuICAgICAgICB0aGlzLmNsZWFyQWxsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbGVhci1hbGxcIik7XG5cbiAgICAgICAgdGhpcy5hdHRhY2hMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBdHRhY2ggbGlzdGVuZXJzIHRvIHRoZSBjbGVhciBidXR0b25zXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7bnVsbH1cbiAgICAgKi9cbiAgICBhdHRhY2hMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHRoaXMuY2xlYXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2xlYXJDb21wbGV0ZWQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5jbGVhckFsbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgdGhpcy5jbGVhckFsbCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbGVhciBwcmV2aWV3IHBpbnMgdGhhdCBoYXZlIGJlZW4gdXBsb2FkZWQgdG8gcGludGVyZXN0XG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7bnVsbH1cbiAgICAgKi9cbiAgICBjbGVhckNvbXBsZXRlZCgpIHtcbiAgICAgICAgY29uc3QgY29tcGxldGVkUGlucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJldmlldy1jb250YWluZXJbZGF0YS1waW5uZWQ9J3RydWUnXVwiKTtcbiAgICAgICAgdGhpcy5jbGVhcihjb21wbGV0ZWRQaW5zKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbGVhciBhbGwgcHJldmlldyBwaW5zXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7bnVsbH1cbiAgICAgKi9cbiAgICBjbGVhckFsbCgpIHtcbiAgICAgICAgY29uc3QgcHJldmlld1BpbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByZXZpZXctY29udGFpbmVyXCIpO1xuICAgICAgICB0aGlzLmNsZWFyKHByZXZpZXdQaW5zKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgZWxlbWVudHMgZnJvbSB0aGUgRE9NXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge05vZGVMaXN0fSBlbGVtZW50cyBBcnJheSBvZiBlbGVtZW50cyB0byByZW1vdmVcbiAgICAgKi9cbiAgICBjbGVhcihlbGVtZW50cykge1xuICAgICAgICBmb3IgKGxldCBpID0gMCA7IGkgPCBlbGVtZW50cy5sZW5ndGggOyBpKyspIHtcbiAgICAgICAgICAgIGVsZW1lbnRzW2ldLnJlbW92ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJldmlldy1jb250YWluZXJcIikubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZS1oZWFkZXInKS5jbGFzc0xpc3QudG9nZ2xlKCdsYXJnZScsIHRydWUpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdldC1zdGFydGVkJykuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJywgZmFsc2UpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFwcGxpY2F0aW9uLWNvbnRhaW5lcicpLmNsYXNzTGlzdC50b2dnbGUoJ2V4cGFuZGVkJywgZmFsc2UpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxhYmVsLXRleHQnKS5pbm5lclRleHQgPSAnQ2hvb3NlIEltYWdlcyc7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJldmlldy1waW5zLWNvbnRhaW5lcicpLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicsIHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZXNldFNlbmRBbGxUb0JvYXJkKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVzZXQgdGhlIHNlbGVjdGVkIHZhbHVlIGluIHRoZSBTZW5kIGFsbCB0byBib2FyZCBkcm9wIGRvd25cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtudWxsfVxuICAgICAqL1xuICAgIHJlc2V0U2VuZEFsbFRvQm9hcmQoKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VuZC1hbGwtdG8tYm9hcmRcIikudmFsdWUgPSBcIlwiO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9DbGVhclByZXZpZXdzLmpzIiwiLyogQnVsayBQaW5uZXIgLSBDcmVhdGUgbXVsdGlwbGUgcGlucyBpbiB5b3VyIFBpbnRlcmVzdCBib2FyZHMgYXQgb25jZVxyXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTcgTHVrZSBEZW50b25cclxuICpcclxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcclxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcclxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbjsgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cclxuICpcclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXHJcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXHJcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcclxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcclxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIENsYXNzIFBpblByZXZpZXdcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBpblByZXZpZXcge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGZpbGUpIHtcclxuICAgICAgICB0aGlzLmZpbGUgPSBmaWxlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVuZGVyIGEgcGluIHByZXZpZXcgdGVtcGxhdGUgaW5zdGFuY2VcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7Tm9kZX1cclxuICAgICAqL1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXZpZXctdGVtcGxhdGUnKTtcclxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IGRvY3VtZW50LmltcG9ydE5vZGUodGVtcGxhdGUuY29udGVudCwgdHJ1ZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcblxyXG4gICAgICAgIHJlYWRlci5vbmxvYWQgPSAodGhlRmlsZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByZXZpZXdDb250YWluZXIgPSB0aGVGaWxlLnF1ZXJ5U2VsZWN0b3IoJy5wcmV2aWV3LWNvbnRhaW5lcicpO1xyXG4gICAgICAgICAgICBjb25zdCBwcmV2aWV3SW1hZ2UgPSBwcmV2aWV3Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIucHJldmlldy1pbWFnZVwiKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBlID0+IHtcclxuICAgICAgICAgICAgICAgIHByZXZpZXdJbWFnZS5zcmMgPSBlLnRhcmdldC5yZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICBwcmV2aWV3SW1hZ2UuY2xhc3NMaXN0LnRvZ2dsZSgnbG9hZGVkJywgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSkoaW5zdGFuY2UpO1xyXG5cclxuICAgICAgICByZWFkZXIuYWJvcnQoKTtcclxuICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTCh0aGlzLmZpbGUpO1xyXG5cclxuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL1BpblByZXZpZXcuanMiLCIvKiBCdWxrIFBpbm5lciAtIENyZWF0ZSBtdWx0aXBsZSBwaW5zIGluIHlvdXIgUGludGVyZXN0IGJvYXJkcyBhdCBvbmNlXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTcgTHVrZSBEZW50b25cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb247IGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5cbmltcG9ydCBBdXRob3JpemF0aW9uIGZyb20gJ3ZpZXdzL0F1dGhvcml6YXRpb24nO1xuaW1wb3J0IEFwcGxpY2F0aW9uIGZyb20gJ3ZpZXdzL0FwcGxpY2F0aW9uJztcbmltcG9ydCBBUEkgZnJvbSAnc2VydmljZXMvQVBJJztcbmltcG9ydCBDdXN0b21FdmVudCBmcm9tICdzZXJ2aWNlcy9DdXN0b21FdmVudCc7XG5cbi8vIENyZWF0ZSBpbnN0YW5jZXMgb2YgYXBwbGljYXRpb24gY2xhc3Nlc1xubmV3IEF1dGhvcml6YXRpb24oKTtcbm5ldyBBcHBsaWNhdGlvbigpO1xuXG4vLyBEZXRlcm1pbmUgaWYgdXNlZCBpcyBsb2dnZWQgaW4gYW5kIHB1Ymxpc2ggYXBwcm9wcmlhdGUgc3RhdHVzXG5pZiAoIUFQSS5Jc0F1dGhlbnRpY2F0ZWQoKSkge1xuICAgIEN1c3RvbUV2ZW50LnRyaWdnZXIoJ3VzZXItbm90LWF1dGhlbnRpY2F0ZWQnKTtcbn0gZWxzZSB7XG4gICAgQ3VzdG9tRXZlbnQudHJpZ2dlcigndXNlci1hdXRoZW50aWNhdGVkJyk7XG59XG5cbmlmICh3aW5kb3cubG9jYXRpb24ub3JpZ2luICE9PSAnaHR0cHM6Ly9idWxrcGlubmVyLmdpdGh1Yi5pbycpIHtcbiAgICBCdWdzbmFnLnJlbGVhc2VTdGFnZSA9ICdkZXZlbG9wbWVudCc7XG4gICAgQnVnc25hZy5ub3RpZnlSZWxlYXNlU3RhZ2VzID0gWydwcm9kdWN0aW9uJywgJ3N0YWdpbmcnXTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9tYWluLmpzIiwiLyogQnVsayBQaW5uZXIgLSBDcmVhdGUgbXVsdGlwbGUgcGlucyBpbiB5b3VyIFBpbnRlcmVzdCBib2FyZHMgYXQgb25jZVxyXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTcgTHVrZSBEZW50b25cclxuICpcclxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcclxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcclxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbjsgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cclxuICpcclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXHJcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXHJcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcclxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcclxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXHJcbiAqL1xyXG5pbXBvcnQgYWpheCBmcm9tICdwYWNraW5nLWFqYXgnXHJcblxyXG4vKipcclxuICogQ2xhc3MgQUpBWFxyXG4gKlxyXG4gKiBBYnN0cmFjdGlvbiBvZiBhbGwgQUpBWCBpbnRlcmFjdGlvbnNcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFKQVgge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2xhc3MgY29uc3RydWN0b3JcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVsbH1cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5iYXNlVXJsID0gJ2h0dHBzOi8vYXBpLnBpbnRlcmVzdC5jb20vJztcclxuICAgICAgICB0aGlzLmFwaVZlcnNpb24gPSAndjEvJztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEJ1aWxkIHRoZSBVUkwgb2YgdGhlIGFwcHJvcHJpYXRlIEFQSSBiZWluZyBjYWxsZWRcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gIGVuZHBvaW50IFRoZSBBUEkgZW5kcG9pbnQgYmVpbmcgcXVlcmllZFxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBfYnVpbGRVcmwoZW5kcG9pbnQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5iYXNlVXJsICsgdGhpcy5hcGlWZXJzaW9uICsgZW5kcG9pbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFeGVjdXRlIHRoZSBBUEkgcXVlcnlcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZW5kcG9pbnQgVGhlIEFQSSBlbmRwb2ludCB0byBiZSBxdWVyaWVkXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YSAgICAgQW55IGFkZGl0aW9uYWwgZGF0YSByZXF1aXJlZFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgICAgIFRoZSB0eXBlIG9mIHJlcXVlc3QgYmVpbmcgbWFkZS4gRS5nLiBHRVQsIFBPU1QgZXRjXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge1Byb21pc2V9XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBfZmV0Y2goZW5kcG9pbnQsIGRhdGEsIHR5cGUpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB1cmwgPSB0aGlzLl9idWlsZFVybChlbmRwb2ludCk7XHJcblxyXG4gICAgICAgICAgICBhamF4KHtcclxuICAgICAgICAgICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogdHlwZSxcclxuICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSGVscGVyIGZ1bmN0aW9uIGZvciBwZXJmb3JtaW5nIGEgR0VUIHJlcXVlc3RcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZW5kcG9pbnQgVGhlIEFQSSBlbmRwb2ludCB0byBiZSBxdWVyaWVkXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YSAgICAgQWRkaXRpb25hbCBkYXRhIHRvIGJlIHNlbnQgd2l0aCB0aGUgcmVxdWVzdFxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgR2V0KGVuZHBvaW50LCBkYXRhKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYWpheCA9IG5ldyBBSkFYKCk7XHJcbiAgICAgICAgICAgIGFqYXguX2ZldGNoKGVuZHBvaW50LCBkYXRhLCAnR0VUJylcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlc29sdmUpXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2gocmVqZWN0KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEhlbHBlciBmdW5jdGlvbiBmb3IgcGVyZm9ybWluZyBhIFBPU1QgcmVxdWVzdFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBlbmRwb2ludCBUaGUgQVBJIGVuZHBvaW50IHRvIGJlIHF1ZXJpZWRcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhICAgICBBZGRpdGlvbmFsIGRhdGEgdG8gYmUgc2VudCB3aXRoIHRoZSByZXF1ZXN0XHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge1Byb21pc2V9XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBQb3N0KGVuZHBvaW50LCBkYXRhKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYWpheCA9IG5ldyBBSkFYKCk7XHJcbiAgICAgICAgICAgIGFqYXguX2ZldGNoKGVuZHBvaW50LCBkYXRhLCAnUE9TVCcpXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXNvbHZlKVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKHJlamVjdCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL3NlcnZpY2VzL0FKQVguanMiLCIvKiBCdWxrIFBpbm5lciAtIENyZWF0ZSBtdWx0aXBsZSBwaW5zIGluIHlvdXIgUGludGVyZXN0IGJvYXJkcyBhdCBvbmNlXHJcbiAqIENvcHlyaWdodCAoQykgMjAxNyBMdWtlIERlbnRvblxyXG4gKlxyXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxyXG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxyXG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uOyBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxyXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxyXG4gKlxyXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcclxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcclxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxyXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxyXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cclxuICovXHJcblxyXG4vKipcclxuICogQ2xhc3MgQW5hbHl0aWNzXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbmFseXRpY3Mge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogUGVyZm9ybSBhbmFseXRpY3MgdHJhY2tpbmcgYWN0aW9ucyByZWxhdGl2ZSB0byBhIHBpbiBiZWluZyBjcmVhdGVkXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBQaW5DcmVhdGVkKCkge1xyXG4gICAgICAgIGd0YWcoJ2V2ZW50JywgJ3Bpbl9jcmVhdGVkJywgeydwaW5zJzogMX0pO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9zZXJ2aWNlcy9BbmFseXRpY3MuanMiLCIvKiBCdWxrIFBpbm5lciAtIENyZWF0ZSBtdWx0aXBsZSBwaW5zIGluIHlvdXIgUGludGVyZXN0IGJvYXJkcyBhdCBvbmNlXHJcbiAqIENvcHlyaWdodCAoQykgMjAxNyBMdWtlIERlbnRvblxyXG4gKlxyXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxyXG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxyXG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uOyBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxyXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxyXG4gKlxyXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcclxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcclxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxyXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxyXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cclxuICovXHJcblxyXG4vKipcclxuICogQ2xhc3MgRXJyb3JVdGlsXHJcbiAqXHJcbiAqIEludGVyZmFjZSBmb3IgYWJzdHJhY3RpbmcgdGhlIGVycm9yIHJlcG9ydGluZyBzZXJ2aWNlXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcnJvclV0aWwge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogTG9nIGFuIGVycm9yIHRvIHRoZSBidWcgdHJhY2tpbmcgc3lzdGVtXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtFcnJvcn0gIGVycm9yICAgQSBkZXNjcmlwdGlvbiBvZiB0aGUgZXJyb3JcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIEV4dHJhIGRldGFpbHMgb2YgdGhlIGVycm9yXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bGx9XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBMb2coZXJyb3IsIG9wdGlvbnMpIHtcclxuICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLm9yaWdpbiA9PT0gJ2h0dHBzOi8vYnVsa3Bpbm5lci5naXRodWIuaW8nKSB7XHJcbiAgICAgICAgICAgIEJ1Z3NuYWcubm90aWZ5RXhjZXB0aW9uKGVycm9yLCBvcHRpb25zKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihvcHRpb25zKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9zZXJ2aWNlcy9FcnJvclV0aWwuanMiXSwic291cmNlUm9vdCI6IiJ9