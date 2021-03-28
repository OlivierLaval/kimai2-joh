(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// ------------------- INLINED ADMIN-LTE DEFINITIONS -------------------
// require('../vendor/kevinpapst/adminlte-bundle/Resources/assets/admin-lte');
// this was replaced to save around 300kb by:
// - removing moment locales which are not used
// - removing fullcalendar locales which are not used
// - removing icheck which is not used
// - removing jquery-ui which is not used
var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

global.$ = global.jQuery = $;

__webpack_require__(/*! bootstrap-sass */ "./node_modules/bootstrap-sass/assets/javascripts/bootstrap.js");

__webpack_require__(/*! jquery-slimscroll */ "./node_modules/jquery-slimscroll/jquery.slimscroll.js");

__webpack_require__(/*! select2 */ "./node_modules/select2/dist/js/select2.js");

__webpack_require__(/*! select2/dist/js/i18n/ar */ "./node_modules/select2/dist/js/i18n/ar.js");

__webpack_require__(/*! select2/dist/js/i18n/cs */ "./node_modules/select2/dist/js/i18n/cs.js");

__webpack_require__(/*! select2/dist/js/i18n/da */ "./node_modules/select2/dist/js/i18n/da.js");

__webpack_require__(/*! select2/dist/js/i18n/de */ "./node_modules/select2/dist/js/i18n/de.js");

__webpack_require__(/*! select2/dist/js/i18n/es */ "./node_modules/select2/dist/js/i18n/es.js");

__webpack_require__(/*! select2/dist/js/i18n/eu */ "./node_modules/select2/dist/js/i18n/eu.js");

__webpack_require__(/*! select2/dist/js/i18n/fi */ "./node_modules/select2/dist/js/i18n/fi.js");

__webpack_require__(/*! select2/dist/js/i18n/fr */ "./node_modules/select2/dist/js/i18n/fr.js");

__webpack_require__(/*! select2/dist/js/i18n/he */ "./node_modules/select2/dist/js/i18n/he.js");

__webpack_require__(/*! select2/dist/js/i18n/hu */ "./node_modules/select2/dist/js/i18n/hu.js");

__webpack_require__(/*! select2/dist/js/i18n/it */ "./node_modules/select2/dist/js/i18n/it.js");

__webpack_require__(/*! select2/dist/js/i18n/ja */ "./node_modules/select2/dist/js/i18n/ja.js");

__webpack_require__(/*! select2/dist/js/i18n/ko */ "./node_modules/select2/dist/js/i18n/ko.js");

__webpack_require__(/*! select2/dist/js/i18n/nl */ "./node_modules/select2/dist/js/i18n/nl.js");

__webpack_require__(/*! select2/dist/js/i18n/pl */ "./node_modules/select2/dist/js/i18n/pl.js");

__webpack_require__(/*! select2/dist/js/i18n/pt */ "./node_modules/select2/dist/js/i18n/pt.js");

__webpack_require__(/*! select2/dist/js/i18n/pt-BR */ "./node_modules/select2/dist/js/i18n/pt-BR.js");

__webpack_require__(/*! select2/dist/js/i18n/ro */ "./node_modules/select2/dist/js/i18n/ro.js");

__webpack_require__(/*! select2/dist/js/i18n/ru */ "./node_modules/select2/dist/js/i18n/ru.js");

__webpack_require__(/*! select2/dist/js/i18n/sk */ "./node_modules/select2/dist/js/i18n/sk.js");

__webpack_require__(/*! select2/dist/js/i18n/sv */ "./node_modules/select2/dist/js/i18n/sv.js");

__webpack_require__(/*! select2/dist/js/i18n/tr */ "./node_modules/select2/dist/js/i18n/tr.js");

__webpack_require__(/*! select2/dist/js/i18n/vi */ "./node_modules/select2/dist/js/i18n/vi.js");

__webpack_require__(/*! select2/dist/js/i18n/zh-CN */ "./node_modules/select2/dist/js/i18n/zh-CN.js");

var Moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");

global.moment = Moment;

__webpack_require__(/*! moment/locale/ar */ "./node_modules/moment/locale/ar.js");

__webpack_require__(/*! moment/locale/cs */ "./node_modules/moment/locale/cs.js");

__webpack_require__(/*! moment/locale/da */ "./node_modules/moment/locale/da.js");

__webpack_require__(/*! moment/locale/de */ "./node_modules/moment/locale/de.js");

__webpack_require__(/*! moment/locale/de-at */ "./node_modules/moment/locale/de-at.js");

__webpack_require__(/*! moment/locale/de-ch */ "./node_modules/moment/locale/de-ch.js");

__webpack_require__(/*! moment/locale/eo */ "./node_modules/moment/locale/eo.js");

__webpack_require__(/*! moment/locale/es */ "./node_modules/moment/locale/es.js");

__webpack_require__(/*! moment/locale/eu */ "./node_modules/moment/locale/eu.js");

__webpack_require__(/*! moment/locale/fi */ "./node_modules/moment/locale/fi.js");

__webpack_require__(/*! moment/locale/fr */ "./node_modules/moment/locale/fr.js");

__webpack_require__(/*! moment/locale/he */ "./node_modules/moment/locale/he.js");

__webpack_require__(/*! moment/locale/hu */ "./node_modules/moment/locale/hu.js");

__webpack_require__(/*! moment/locale/it */ "./node_modules/moment/locale/it.js");

__webpack_require__(/*! moment/locale/ja */ "./node_modules/moment/locale/ja.js");

__webpack_require__(/*! moment/locale/ko */ "./node_modules/moment/locale/ko.js");

__webpack_require__(/*! moment/locale/nl */ "./node_modules/moment/locale/nl.js");

__webpack_require__(/*! moment/locale/pl */ "./node_modules/moment/locale/pl.js");

__webpack_require__(/*! moment/locale/pt */ "./node_modules/moment/locale/pt.js");

__webpack_require__(/*! moment/locale/pt-br */ "./node_modules/moment/locale/pt-br.js");

__webpack_require__(/*! moment/locale/ro */ "./node_modules/moment/locale/ro.js");

__webpack_require__(/*! moment/locale/ru */ "./node_modules/moment/locale/ru.js");

__webpack_require__(/*! moment/locale/sk */ "./node_modules/moment/locale/sk.js");

__webpack_require__(/*! moment/locale/sv */ "./node_modules/moment/locale/sv.js");

__webpack_require__(/*! moment/locale/tr */ "./node_modules/moment/locale/tr.js");

__webpack_require__(/*! moment/locale/vi */ "./node_modules/moment/locale/vi.js");

__webpack_require__(/*! moment/locale/zh-cn */ "./node_modules/moment/locale/zh-cn.js");

__webpack_require__(/*! daterangepicker */ "./node_modules/daterangepicker/daterangepicker.js");

var Sortable = __webpack_require__(/*! sortablejs/Sortable.min */ "./node_modules/sortablejs/Sortable.min.js");

global.Sortable = Sortable; // ------ AdminLTE framework ------

__webpack_require__(/*! ./sass/bootstrap.scss */ "./assets/sass/bootstrap.scss");

__webpack_require__(/*! ./sass/fontawesome.scss */ "./assets/sass/fontawesome.scss");

__webpack_require__(/*! admin-lte/dist/css/AdminLTE.min.css */ "./node_modules/admin-lte/dist/css/AdminLTE.min.css");

__webpack_require__(/*! admin-lte/dist/css/skins/_all-skins.css */ "./node_modules/admin-lte/dist/css/skins/_all-skins.css");

__webpack_require__(/*! ../vendor/kevinpapst/adminlte-bundle/Resources/assets/admin-lte-extensions.scss */ "./vendor/kevinpapst/adminlte-bundle/Resources/assets/admin-lte-extensions.scss");

global.$.AdminLTE = {};
global.$.AdminLTE.options = {};

__webpack_require__(/*! admin-lte/dist/js/adminlte.min */ "./node_modules/admin-lte/dist/js/adminlte.min.js"); // ------------------- INLINED ADMIN-LTE DEFINITIONS -------------------
// ---------------------------------------------------------------------


__webpack_require__(/*! ./sass/app.scss */ "./assets/sass/app.scss"); // ------ Kimai itself ------


__webpack_require__(/*! ./js/KimaiWebLoader.js */ "./assets/js/KimaiWebLoader.js");

global.KimaiPaginatedBoxWidget = __webpack_require__(/*! ./js/widgets/KimaiPaginatedBoxWidget */ "./assets/js/widgets/KimaiPaginatedBoxWidget.js")["default"];
global.KimaiReloadPageWidget = __webpack_require__(/*! ./js/widgets/KimaiReloadPageWidget */ "./assets/js/widgets/KimaiReloadPageWidget.js")["default"];
global.KimaiCookies = __webpack_require__(/*! ./js/widgets/KimaiCookies */ "./assets/js/widgets/KimaiCookies.js")["default"]; // ------ Autocomplete for tags only ------

__webpack_require__(/*! jquery-ui/ui/widgets/autocomplete */ "./node_modules/jquery-ui/ui/widgets/autocomplete.js");
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./assets/js/KimaiConfiguration.js":
/*!*****************************************!*\
  !*** ./assets/js/KimaiConfiguration.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KimaiConfiguration; });
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
 * This file is part of the Kimai time-tracking app.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*!
 * [KIMAI] KimaiConfiguration: handling all configuration and runtime settings
 */
var KimaiConfiguration = /*#__PURE__*/function () {
  function KimaiConfiguration(configurations) {
    _classCallCheck(this, KimaiConfiguration);

    this._configurations = configurations;
  }

  _createClass(KimaiConfiguration, [{
    key: "get",
    value: function get(name) {
      return this._configurations[name];
    }
  }, {
    key: "has",
    value: function has(name) {
      return name in this._configurations;
    }
  }]);

  return KimaiConfiguration;
}();



/***/ }),

/***/ "./assets/js/KimaiContainer.js":
/*!*************************************!*\
  !*** ./assets/js/KimaiContainer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KimaiContainer; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.is-array */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _KimaiConfiguration__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./KimaiConfiguration */ "./assets/js/KimaiConfiguration.js");
/* harmony import */ var _KimaiTranslation__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./KimaiTranslation */ "./assets/js/KimaiTranslation.js");
/* harmony import */ var _KimaiPlugin__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./KimaiPlugin */ "./assets/js/KimaiPlugin.js");















function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
 * This file is part of the Kimai time-tracking app.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*!
 * [KIMAI] KimaiContainer
 *
 * ServiceContainer for Kimai
 */




var KimaiContainer = /*#__PURE__*/function () {
  /**
   * Create a new Container with the given configurations and translations.
   *
   * @param {Object} configuration
   * @param {Object} translation
   */
  function KimaiContainer(configuration, translation) {
    _classCallCheck(this, KimaiContainer);

    if (!(configuration instanceof _KimaiConfiguration__WEBPACK_IMPORTED_MODULE_14__["default"])) {
      throw new Error('Configuration needs to a KimaiConfiguration instance');
    }

    this._configuration = configuration;

    if (!(translation instanceof _KimaiTranslation__WEBPACK_IMPORTED_MODULE_15__["default"])) {
      throw new Error('Configuration needs to a KimaiTranslation instance');
    }

    this._translation = translation;
    this._plugins = [];
  }
  /**
   * Register a new Plugin.
   *
   * @param {KimaiPlugin} plugin
   * @returns {KimaiPlugin}
   */


  _createClass(KimaiContainer, [{
    key: "registerPlugin",
    value: function registerPlugin(plugin) {
      if (!(plugin instanceof _KimaiPlugin__WEBPACK_IMPORTED_MODULE_16__["default"])) {
        throw new Error('Invalid plugin given, needs to be a KimaiPlugin instance');
      }

      plugin.setContainer(this);

      this._plugins.push(plugin);

      return plugin;
    }
    /**
     * @param {string} name
     * @returns {KimaiPlugin}
     */

  }, {
    key: "getPlugin",
    value: function getPlugin(name) {
      var _iterator = _createForOfIteratorHelper(this._plugins),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var plugin = _step.value;

          if (plugin.getId() !== null && plugin.getId() === name) {
            return plugin;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      throw new Error('Unknown plugin: ' + name);
    }
    /**
     * @returns {Array<KimaiPlugin>}
     */

  }, {
    key: "getPlugins",
    value: function getPlugins() {
      return this._plugins;
    }
    /**
     * @returns {KimaiTranslation}
     */

  }, {
    key: "getTranslation",
    value: function getTranslation() {
      return this._translation;
    }
    /**
     * @returns {KimaiConfiguration}
     */

  }, {
    key: "getConfiguration",
    value: function getConfiguration() {
      return this._configuration;
    }
  }]);

  return KimaiContainer;
}();



/***/ }),

/***/ "./assets/js/KimaiLoader.js":
/*!**********************************!*\
  !*** ./assets/js/KimaiLoader.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KimaiLoader; });
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _KimaiTranslation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./KimaiTranslation */ "./assets/js/KimaiTranslation.js");
/* harmony import */ var _KimaiConfiguration__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./KimaiConfiguration */ "./assets/js/KimaiConfiguration.js");
/* harmony import */ var _KimaiContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./KimaiContainer */ "./assets/js/KimaiContainer.js");
/* harmony import */ var _plugins_KimaiActiveRecordsDuration_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./plugins/KimaiActiveRecordsDuration.js */ "./assets/js/plugins/KimaiActiveRecordsDuration.js");
/* harmony import */ var _plugins_KimaiDatatableColumnView_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./plugins/KimaiDatatableColumnView.js */ "./assets/js/plugins/KimaiDatatableColumnView.js");
/* harmony import */ var _plugins_KimaiThemeInitializer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./plugins/KimaiThemeInitializer */ "./assets/js/plugins/KimaiThemeInitializer.js");
/* harmony import */ var _plugins_KimaiDateRangePicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./plugins/KimaiDateRangePicker */ "./assets/js/plugins/KimaiDateRangePicker.js");
/* harmony import */ var _plugins_KimaiDatatable__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./plugins/KimaiDatatable */ "./assets/js/plugins/KimaiDatatable.js");
/* harmony import */ var _plugins_KimaiToolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./plugins/KimaiToolbar */ "./assets/js/plugins/KimaiToolbar.js");
/* harmony import */ var _plugins_KimaiAPI__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./plugins/KimaiAPI */ "./assets/js/plugins/KimaiAPI.js");
/* harmony import */ var _plugins_KimaiSelectDataAPI__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./plugins/KimaiSelectDataAPI */ "./assets/js/plugins/KimaiSelectDataAPI.js");
/* harmony import */ var _plugins_KimaiDateTimePicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./plugins/KimaiDateTimePicker */ "./assets/js/plugins/KimaiDateTimePicker.js");
/* harmony import */ var _plugins_KimaiAlternativeLinks__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./plugins/KimaiAlternativeLinks */ "./assets/js/plugins/KimaiAlternativeLinks.js");
/* harmony import */ var _plugins_KimaiAjaxModalForm__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./plugins/KimaiAjaxModalForm */ "./assets/js/plugins/KimaiAjaxModalForm.js");
/* harmony import */ var _plugins_KimaiActiveRecords__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./plugins/KimaiActiveRecords */ "./assets/js/plugins/KimaiActiveRecords.js");
/* harmony import */ var _plugins_KimaiRecentActivities__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./plugins/KimaiRecentActivities */ "./assets/js/plugins/KimaiRecentActivities.js");
/* harmony import */ var _plugins_KimaiEvent__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./plugins/KimaiEvent */ "./assets/js/plugins/KimaiEvent.js");
/* harmony import */ var _plugins_KimaiAPILink__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./plugins/KimaiAPILink */ "./assets/js/plugins/KimaiAPILink.js");
/* harmony import */ var _plugins_KimaiAlert__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./plugins/KimaiAlert */ "./assets/js/plugins/KimaiAlert.js");
/* harmony import */ var _plugins_KimaiAutocomplete__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./plugins/KimaiAutocomplete */ "./assets/js/plugins/KimaiAutocomplete.js");
/* harmony import */ var _plugins_KimaiFormSelect__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./plugins/KimaiFormSelect */ "./assets/js/plugins/KimaiFormSelect.js");
/* harmony import */ var _plugins_KimaiForm__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./plugins/KimaiForm */ "./assets/js/plugins/KimaiForm.js");
/* harmony import */ var _plugins_KimaiDatePicker__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./plugins/KimaiDatePicker */ "./assets/js/plugins/KimaiDatePicker.js");
/* harmony import */ var _plugins_KimaiConfirmationLink__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./plugins/KimaiConfirmationLink */ "./assets/js/plugins/KimaiConfirmationLink.js");
/* harmony import */ var _plugins_KimaiMultiUpdateTable__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./plugins/KimaiMultiUpdateTable */ "./assets/js/plugins/KimaiMultiUpdateTable.js");
/* harmony import */ var _plugins_KimaiDateUtils__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./plugins/KimaiDateUtils */ "./assets/js/plugins/KimaiDateUtils.js");





function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
 * This file is part of the Kimai time-tracking app.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*!
 * [KIMAI] KimaiLoader: bootstrap the application and all plugins
 */




























var KimaiLoader = /*#__PURE__*/function () {
  function KimaiLoader(configurations, translations) {
    _classCallCheck(this, KimaiLoader);

    // set the current locale for all javascript components
    moment__WEBPACK_IMPORTED_MODULE_4___default.a.locale(configurations['locale'].replace('_', '-').toLowerCase());
    var kimai = new _KimaiContainer__WEBPACK_IMPORTED_MODULE_7__["default"](new _KimaiConfiguration__WEBPACK_IMPORTED_MODULE_6__["default"](configurations), new _KimaiTranslation__WEBPACK_IMPORTED_MODULE_5__["default"](translations));
    kimai.registerPlugin(new _plugins_KimaiEvent__WEBPACK_IMPORTED_MODULE_21__["default"]());
    kimai.registerPlugin(new _plugins_KimaiAPI__WEBPACK_IMPORTED_MODULE_14__["default"]());
    kimai.registerPlugin(new _plugins_KimaiAlert__WEBPACK_IMPORTED_MODULE_23__["default"]());
    kimai.registerPlugin(new _plugins_KimaiDateUtils__WEBPACK_IMPORTED_MODULE_30__["default"]());
    kimai.registerPlugin(new _plugins_KimaiFormSelect__WEBPACK_IMPORTED_MODULE_25__["default"]('.selectpicker'));
    kimai.registerPlugin(new _plugins_KimaiConfirmationLink__WEBPACK_IMPORTED_MODULE_28__["default"]('confirmation-link'));
    kimai.registerPlugin(new _plugins_KimaiActiveRecordsDuration_js__WEBPACK_IMPORTED_MODULE_8__["default"]('[data-since]'));
    kimai.registerPlugin(new _plugins_KimaiDatatableColumnView_js__WEBPACK_IMPORTED_MODULE_9__["default"]('data-column-visibility'));
    kimai.registerPlugin(new _plugins_KimaiDateRangePicker__WEBPACK_IMPORTED_MODULE_11__["default"]('input[data-daterangepickerenable="on"]'));
    kimai.registerPlugin(new _plugins_KimaiDateTimePicker__WEBPACK_IMPORTED_MODULE_16__["default"]('input[data-datetimepicker="on"]'));
    kimai.registerPlugin(new _plugins_KimaiDatePicker__WEBPACK_IMPORTED_MODULE_27__["default"]('input[data-datepickerenable="on"]'));
    kimai.registerPlugin(new _plugins_KimaiDatatable__WEBPACK_IMPORTED_MODULE_12__["default"]('section.content', 'table.dataTable'));
    kimai.registerPlugin(new _plugins_KimaiToolbar__WEBPACK_IMPORTED_MODULE_13__["default"]('form.searchform', 'toolbar-action'));
    kimai.registerPlugin(new _plugins_KimaiSelectDataAPI__WEBPACK_IMPORTED_MODULE_15__["default"]('select[data-related-select]'));
    kimai.registerPlugin(new _plugins_KimaiAlternativeLinks__WEBPACK_IMPORTED_MODULE_17__["default"]('.alternative-link'));
    kimai.registerPlugin(new _plugins_KimaiAjaxModalForm__WEBPACK_IMPORTED_MODULE_18__["default"]('.modal-ajax-form'));
    kimai.registerPlugin(new _plugins_KimaiRecentActivities__WEBPACK_IMPORTED_MODULE_20__["default"]('li.notifications-menu'));
    kimai.registerPlugin(new _plugins_KimaiActiveRecords__WEBPACK_IMPORTED_MODULE_19__["default"]('li.messages-menu', 'li.messages-menu-empty'));
    kimai.registerPlugin(new _plugins_KimaiAPILink__WEBPACK_IMPORTED_MODULE_22__["default"]('api-link'));
    kimai.registerPlugin(new _plugins_KimaiAutocomplete__WEBPACK_IMPORTED_MODULE_24__["default"]('.js-autocomplete'));
    kimai.registerPlugin(new _plugins_KimaiForm__WEBPACK_IMPORTED_MODULE_26__["default"]());
    kimai.registerPlugin(new _plugins_KimaiThemeInitializer__WEBPACK_IMPORTED_MODULE_10__["default"]());
    kimai.registerPlugin(new _plugins_KimaiMultiUpdateTable__WEBPACK_IMPORTED_MODULE_29__["default"]()); //kimai.registerPlugin(new KimaiPauseRecord('li.messages-menu ul.menu li'));
    // notify all listeners that Kimai plugins can now be registered

    kimai.getPlugin('event').trigger('kimai.pluginRegister', {
      'kimai': kimai
    }); // initialize all plugins

    kimai.getPlugins().map(function (plugin) {
      plugin.init();
    }); // notify all listeners that Kimai is now ready to be used

    kimai.getPlugin('event').trigger('kimai.initialized', {
      'kimai': kimai
    });
    this.kimai = kimai;
  }

  _createClass(KimaiLoader, [{
    key: "getKimai",
    value: function getKimai() {
      return this.kimai;
    }
  }]);

  return KimaiLoader;
}();



/***/ }),

/***/ "./assets/js/KimaiPlugin.js":
/*!**********************************!*\
  !*** ./assets/js/KimaiPlugin.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KimaiPlugin; });
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _KimaiContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./KimaiContainer */ "./assets/js/KimaiContainer.js");


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
 * This file is part of the Kimai time-tracking app.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*!
 * [KIMAI] KimaiPlugin: base class for all plugins
 */


var KimaiPlugin = /*#__PURE__*/function () {
  function KimaiPlugin() {
    _classCallCheck(this, KimaiPlugin);
  }

  _createClass(KimaiPlugin, [{
    key: "init",

    /**
     * Overwrite this method to initialize your plugin.
     *
     * It is called AFTER setContainer() and AFTER DOMContentLoaded was fired.
     * You don't have access to the container before this method!
     */
    value: function init() {}
    /**
     * If you return an ID, you indicate that your plugin can be used by other plugins.
     *
     * @returns {string|null}
     */

  }, {
    key: "getId",
    value: function getId() {
      return null;
    }
    /**
     * @param {KimaiContainer} core
     */

  }, {
    key: "setContainer",
    value: function setContainer(core) {
      if (!(core instanceof _KimaiContainer__WEBPACK_IMPORTED_MODULE_1__["default"])) {
        throw new Error('Plugin was given an invalid KimaiContainer');
      }

      this._core = core;
    }
    /**
     * This function returns null, if xou call it BEFORE init().
     *
     * @returns {KimaiContainer}
     */

  }, {
    key: "getContainer",
    value: function getContainer() {
      return this._core;
    }
    /**
     * @param {string} name
     * @returns {(string|number|boolean)}
     */

  }, {
    key: "getConfiguration",
    value: function getConfiguration(name) {
      return this.getContainer().getConfiguration().get(name);
    }
    /**
     * @param {string} name
     * @returns {KimaiPlugin}
     */

  }, {
    key: "getPlugin",
    value: function getPlugin(name) {
      return this.getContainer().getPlugin(name);
    }
  }]);

  return KimaiPlugin;
}();



/***/ }),

/***/ "./assets/js/KimaiTranslation.js":
/*!***************************************!*\
  !*** ./assets/js/KimaiTranslation.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KimaiTranslation; });
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
 * This file is part of the Kimai time-tracking app.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*!
 * [KIMAI] KimaiTranslation: handling translation strings
 */
var KimaiTranslation = /*#__PURE__*/function () {
  /**
   * @param {Array<string, string>} translations
   */
  function KimaiTranslation(translations) {
    _classCallCheck(this, KimaiTranslation);

    this._translations = translations;
  }
  /**
   * @param {string} name
   * @returns {string}
   */


  _createClass(KimaiTranslation, [{
    key: "get",
    value: function get(name) {
      return this._translations[name];
    }
    /**
     * @param {string} name
     * @returns {boolean}
     */

  }, {
    key: "has",
    value: function has(name) {
      return name in this._translations;
    }
  }]);

  return KimaiTranslation;
}();



/***/ }),

/***/ "./assets/js/KimaiWebLoader.js":
/*!*************************************!*\
  !*** ./assets/js/KimaiWebLoader.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _KimaiLoader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./KimaiLoader */ "./assets/js/KimaiLoader.js");














function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
 * This file is part of the Kimai time-tracking app.
 *
 * Main JS application file for Kimai 2. This file should be included in all pages.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*!
 * [KIMAI] Wrapper class for loading Kimai app in browser script scope
 */


(function (root, factory) {
  if (typeof define === 'function' && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")) {
    define([], function () {
      return root.KimaiWebLoader = factory();
    });
  } else if (( false ? undefined : _typeof(module)) === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.KimaiWebLoader = factory();
  }
})(typeof self !== 'undefined' ? self : undefined, function () {
  var KimaiWebLoader = /*#__PURE__*/function (_KimaiLoader) {
    _inherits(KimaiWebLoader, _KimaiLoader);

    var _super = _createSuper(KimaiWebLoader);

    function KimaiWebLoader() {
      _classCallCheck(this, KimaiWebLoader);

      return _super.apply(this, arguments);
    }

    return KimaiWebLoader;
  }(_KimaiLoader__WEBPACK_IMPORTED_MODULE_13__["default"]);

  return KimaiWebLoader;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./assets/js/plugins/KimaiAPI.js":
/*!***************************************!*\
  !*** ./assets/js/plugins/KimaiAPI.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KimaiAPI; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.is-array */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _KimaiPlugin__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../KimaiPlugin */ "./assets/js/KimaiPlugin.js");



















function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/*
 * This file is part of the Kimai time-tracking app.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*!
 * [KIMAI] KimaiAPI: easy access to API methods
 */



var KimaiAPI = /*#__PURE__*/function (_KimaiPlugin) {
  _inherits(KimaiAPI, _KimaiPlugin);

  var _super = _createSuper(KimaiAPI);

  function KimaiAPI() {
    _classCallCheck(this, KimaiAPI);

    return _super.apply(this, arguments);
  }

  _createClass(KimaiAPI, [{
    key: "getId",
    value: function getId() {
      return 'api';
    }
  }, {
    key: "get",
    value: function get(url, data, callbackSuccess, callbackError) {
      jquery__WEBPACK_IMPORTED_MODULE_18___default.a.ajax({
        url: url,
        headers: {
          'X-AUTH-SESSION': true,
          'Content-Type': 'application/json'
        },
        method: 'GET',
        data: data,
        dataType: 'json',
        success: callbackSuccess,
        error: callbackError
      });
    }
  }, {
    key: "post",
    value: function post(url, data, callbackSuccess, callbackError) {
      if (callbackError === null || callbackError === undefined) {
        callbackError = this.getPostErrorHandler();
      }

      jquery__WEBPACK_IMPORTED_MODULE_18___default.a.ajax({
        url: url,
        headers: {
          'X-AUTH-SESSION': true,
          'Content-Type': 'application/json'
        },
        method: 'POST',
        data: data,
        dataType: 'json',
        success: callbackSuccess,
        error: callbackError
      });
    }
  }, {
    key: "patch",
    value: function patch(url, data, callbackSuccess, callbackError) {
      if (callbackError === null || callbackError === undefined) {
        callbackError = this.getPatchErrorHandler();
      }

      jquery__WEBPACK_IMPORTED_MODULE_18___default.a.ajax({
        url: url,
        headers: {
          'X-AUTH-SESSION': true,
          'Content-Type': 'application/json'
        },
        method: 'PATCH',
        data: data,
        dataType: 'json',
        success: callbackSuccess,
        error: callbackError
      });
    }
  }, {
    key: "delete",
    value: function _delete(url, callbackSuccess, callbackError) {
      if (callbackError === null || callbackError === undefined) {
        callbackError = this.getDeleteErrorHandler();
      }

      jquery__WEBPACK_IMPORTED_MODULE_18___default.a.ajax({
        url: url,
        headers: {
          'X-AUTH-SESSION': true,
          'Content-Type': 'application/json'
        },
        method: 'DELETE',
        dataType: 'json',
        success: callbackSuccess,
        error: callbackError
      });
    }
  }, {
    key: "getDeleteErrorHandler",
    value: function getDeleteErrorHandler() {
      var self = this;
      return function (xhr, err) {
        self.handleError('action.delete.error', xhr, err);
      };
    }
  }, {
    key: "getPatchErrorHandler",
    value: function getPatchErrorHandler() {
      var self = this;
      return function (xhr, err) {
        self.handleError('action.update.error', xhr, err);
      };
    }
  }, {
    key: "getPostErrorHandler",
    value: function getPostErrorHandler() {
      var self = this;
      return function (xhr, err) {
        self.handleError('action.update.error', xhr, err);
      };
    }
    /**
     * @param {string} message
     * @param {jqXHR} xhr
     * @param {string} err
     */

  }, {
    key: "handleError",
    value: function handleError(message, xhr, err) {
      var resultError = err;

      if (xhr.responseJSON && xhr.responseJSON.message) {
        resultError = xhr.responseJSON.message; // find validation errors

        if (xhr.status === 400 && xhr.responseJSON.errors) {
          var collected = ['<u>' + resultError + '</u>']; // form errors that are not attached to a field (like extra fields)

          if (xhr.responseJSON.errors.errors) {
            var _iterator = _createForOfIteratorHelper(xhr.responseJSON.errors.errors),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var error = _step.value;
                collected.push(error);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }

          if (xhr.responseJSON.errors.children) {
            for (var field in xhr.responseJSON.errors.children) {
              var tmpField = xhr.responseJSON.errors.children[field];

              if (tmpField.hasOwnProperty('errors') && tmpField.errors.length > 0) {
                var _iterator2 = _createForOfIteratorHelper(tmpField.errors),
                    _step2;

                try {
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                    var _error = _step2.value;
                    collected.push(_error);
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }
              }
            }
          }

          if (collected.length > 0) {
            resultError = collected;
          }
        }
      } else if (xhr.status && xhr.statusText) {
        resultError = '[' + xhr.status + '] ' + xhr.statusText;
      }

      this.getPlugin('alert').error(message, resultError);
    }
  }]);

  return KimaiAPI;
}(_KimaiPlugin__WEBPACK_IMPORTED_MODULE_19__["default"]);



/***/ }),

/***/ "./assets/js/plugins/KimaiAPILink.js":
/*!*******************************************!*\
  !*** ./assets/js/plugins/KimaiAPILink.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KimaiAPILink; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _KimaiPlugin__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../KimaiPlugin */ "./assets/js/KimaiPlugin.js");















function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/*
 * This file is part of the Kimai time-tracking app.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/**
 * Needs to be initialized with a class name.
 *
 * A link like <a href=# class=remoteLink> can be activated with:
 * new KimaiAPILink('remoteLink')
 *
 * Allows to assign the given selector to any element, which then is used as click-handler
 * calling an API method and trigger the event from data-event attribute afterwards.
 *
 * @param selector
 */

var KimaiAPILink = /*#__PURE__*/function (_KimaiPlugin) {
  _inherits(KimaiAPILink, _KimaiPlugin);

  var _super = _createSuper(KimaiAPILink);

  function KimaiAPILink(selector) {
    var _this;

    _classCallCheck(this, KimaiAPILink);

    _this = _super.call(this);
    _this.selector = selector;
    return _this;
  }

  _createClass(KimaiAPILink, [{
    key: "init",
    value: function init() {
      var self = this;
      document.addEventListener('click', function (event) {
        var target = event.target;

        while (target !== null && !target.matches('body')) {
          if (target.classList.contains(self.selector)) {
            (function () {
              var attributes = target.dataset;
              var url = attributes['href'];

              if (!url) {
                url = target.getAttribute('href');
              }

              if (attributes.question !== undefined) {
                self.getContainer().getPlugin('alert').question(attributes.question, function (value) {
                  if (value) {
                    self._callApi(url, attributes);
                  }
                });
              } else {
                self._callApi(url, attributes);
              }

              event.preventDefault();
              event.stopPropagation();
            })();
          }

          target = target.parentNode;
        }
      });
    }
  }, {
    key: "_callApi",
    value: function _callApi(url, attributes) {
      var method = attributes['method'];
      var eventName = attributes['event'];
      var API = this.getContainer().getPlugin('api');
      var eventing = this.getContainer().getPlugin('event');
      var alert = this.getContainer().getPlugin('alert');

      var successHandle = function successHandle(result) {
        eventing.trigger(eventName);

        if (attributes.msgSuccess) {
          alert.success(attributes.msgSuccess);
        }
      };

      var errorHandle = function errorHandle(xhr, err) {
        var message = 'action.update.error';

        if (attributes.msgError) {
          message = attributes.msgError;
        }

        API.handleError(message, xhr, err);
      };

      if (method === 'PATCH') {
        var data = {};

        if (attributes.payload) {
          data = attributes.payload;
        }

        API.patch(url, data, successHandle, errorHandle);
      } else if (method === 'POST') {
        var _data = {};

        if (attributes.payload) {
          _data = attributes.payload;
        }

        API.post(url, _data, successHandle, errorHandle);
      } else if (method === 'DELETE') {
        API["delete"](url, successHandle, errorHandle);
      }
    }
  }]);

  return KimaiAPILink;
}(_KimaiPlugin__WEBPACK_IMPORTED_MODULE_14__["default"]);



/***/ }),

/***/ "./assets/js/plugins/KimaiActiveRecords.js":
/*!*************************************************!*\
  !*** ./assets/js/plugins/KimaiActiveRecords.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KimaiActiveRecords; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.is-array */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _KimaiPlugin__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../KimaiPlugin */ "./assets/js/KimaiPlugin.js");






















function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/*
 * This file is part of the Kimai time-tracking app.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*!
 * [KIMAI] KimaiActiveRecords: responsible to display the users active records
 */


var KimaiActiveRecords = /*#__PURE__*/function (_KimaiPlugin) {
  _inherits(KimaiActiveRecords, _KimaiPlugin);

  var _super = _createSuper(KimaiActiveRecords);

  function KimaiActiveRecords(selector, selectorEmpty) {
    var _this;

    _classCallCheck(this, KimaiActiveRecords);

    _this = _super.call(this);
    _this.selector = selector;
    _this.selectorEmpty = selectorEmpty;
    return _this;
  }

  _createClass(KimaiActiveRecords, [{
    key: "getId",
    value: function getId() {
      return 'active-records';
    }
  }, {
    key: "init",
    value: function init() {
      var menu = document.querySelector(this.selector); // the menu can be hidden if user has no permissions to see it

      if (menu === null) {
        return;
      }

      var dropdown = menu.querySelector('ul.dropdown-menu');
      this.attributes = dropdown.dataset;
      this.itemList = dropdown.querySelector('li > ul.menu');
      this.label = menu.querySelector('a > span.label');
      var self = this;

      var handle = function handle() {
        self.reloadActiveRecords();
      };

      document.addEventListener('kimai.timesheetUpdate', handle);
      document.addEventListener('kimai.activityUpdate', handle);
      document.addEventListener('kimai.projectUpdate', handle);
      document.addEventListener('kimai.customerUpdate', handle);
    }
  }, {
    key: "emptyList",
    value: function emptyList() {
      this.itemList.innerHTML = '';
    }
  }, {
    key: "_toggleMenu",
    value: function _toggleMenu(hasEntries) {
      var menu = document.querySelector(this.selector);
      var menuEmpty = document.querySelector(this.selectorEmpty);
      menu.style.display = hasEntries ? 'inline-block' : 'none';

      if (menuEmpty !== null) {
        menuEmpty.style.display = !hasEntries ? 'inline-block' : 'none';
      }
    }
  }, {
    key: "setEntries",
    value: function setEntries(entries) {
      this._toggleMenu(entries.length > 0);

      if (entries.length === 0) {
        this.label.innerText = '';
        this.emptyList();
        return;
      }

      var htmlToInsert = '';
      var durations = this.getContainer().getPlugin('timesheet-duration');

      var _iterator = _createForOfIteratorHelper(entries),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var timesheet = _step.value;
          htmlToInsert += "<li>" + "<a href=\"".concat(this.attributes['href'].replace('000', timesheet.id), "\" data-event=\"kimai.timesheetStop kimai.timesheetUpdate\" class=\"api-link\" data-method=\"PATCH\" data-msg-error=\"timesheet.stop.error\" data-msg-success=\"timesheet.stop.success\">") + "<div class=\"pull-left\">" + "<i class=\"".concat(this.attributes['icon'], " fa-2x\"></i>") + "</div>" + "<h4>" + "<span>".concat(timesheet.activity.name, "</span>") + "<small>" + "<span data-title=\"true\" data-since=\"".concat(timesheet.begin, "\" data-format=\"").concat(this.attributes['format'], "\">").concat(durations.formatDuration(timesheet.duration, this.attributes['format']), "</span>") + "</small>" + "</h4>" + "<p>".concat(timesheet.project.name, " (").concat(timesheet.project.customer.name, ")</p>") + "</a>" + "</li>";
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      if (this.label.dataset.warning < entries.length) {
        this.label.classList = 'label label-danger';
      } else {
        this.label.classList = 'label label-warning';
      }

      this.label.innerText = entries.length;
      this.itemList.innerHTML = htmlToInsert;
      durations.updateRecords();
    }
  }, {
    key: "reloadActiveRecords",
    value: function reloadActiveRecords() {
      var self = this;
      var API = this.getContainer().getPlugin('api');
      API.get(this.attributes['api'], {}, function (result) {
        self.setEntries(result);
      });
    }
  }]);

  return KimaiActiveRecords;
}(_KimaiPlugin__WEBPACK_IMPORTED_MODULE_21__["default"]);



/***/ }),

/***/ "./assets/js/plugins/KimaiActiveRecordsDuration.js":
/*!*********************************************************!*\
  !*** ./assets/js/plugins/KimaiActiveRecordsDuration.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KimaiActiveRecordsDuration; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.is-array */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _KimaiPlugin__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../KimaiPlugin */ "./assets/js/KimaiPlugin.js");























function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/*
 * This file is part of the Kimai time-tracking app.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*!
 * [KIMAI] KimaiActiveRecordsDuration: activate the updates for all active timesheet records on this page
 */



var KimaiActiveRecordsDuration = /*#__PURE__*/function (_KimaiPlugin) {
  _inherits(KimaiActiveRecordsDuration, _KimaiPlugin);

  var _super = _createSuper(KimaiActiveRecordsDuration);

  function KimaiActiveRecordsDuration(selector) {
    var _this;

    _classCallCheck(this, KimaiActiveRecordsDuration);

    _this = _super.call(this);
    _this.selector = selector;
    return _this;
  }

  _createClass(KimaiActiveRecordsDuration, [{
    key: "getId",
    value: function getId() {
      return 'timesheet-duration';
    }
  }, {
    key: "init",
    value: function init() {
      this.updateBrowserTitle = !!this.getConfiguration('updateBrowserTitle');
      this.updateRecords();
      var self = this;

      var handle = function handle() {
        self.updateRecords();
      };

      this._updatesHandler = setInterval(handle, 10000); // this will probably not work as expected, as other event-handler might need longer to update the DOM

      document.addEventListener('kimai.timesheetUpdate', handle);
    }
  }, {
    key: "unregisterUpdates",
    value: function unregisterUpdates() {
      clearInterval(this._updatesHandler);
    }
  }, {
    key: "updateRecords",
    value: function updateRecords() {
      var durations = [];
      var activeRecords = document.querySelectorAll(this.selector);

      if (activeRecords.length === 0) {
        if (this.updateBrowserTitle) {
          document.title = document.querySelector('body').dataset['title'];
        }

        return;
      }

      var _iterator = _createForOfIteratorHelper(activeRecords),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var record = _step.value;
          var since = record.getAttribute('data-since');
          var format = record.getAttribute('data-format');
          var duration = this.formatDuration(since, format);

          if (record.getAttribute('data-title') !== null && duration !== '?') {
            durations.push(duration);
          }

          record.textContent = duration;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      if (durations.length === 0) {
        return;
      }

      if (!this.updateBrowserTitle) {
        return;
      }

      var title = durations.shift();
      var prefix = ' | ';

      var _iterator2 = _createForOfIteratorHelper(durations.slice(0, 2)),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _duration = _step2.value;
          title += prefix + _duration;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      document.title = title;
    }
  }, {
    key: "formatDuration",
    value: function formatDuration(since, format) {
      var duration = moment__WEBPACK_IMPORTED_MODULE_22___default.a.duration(moment__WEBPACK_IMPORTED_MODULE_22___default()(new Date()).diff(moment__WEBPACK_IMPORTED_MODULE_22___default()(since)));
      var hours = parseInt(duration.asHours()).toString();
      var minutes = duration.minutes();
      var seconds = duration.seconds();

      if (hours < 0 || minutes < 0 || seconds < 0) {
        return '?';
      } // special case for hours, as they can overflow the 24h barrier - Kimai does not support days as duration unit


      if (hours.length === 1) {
        hours = '0' + hours;
      }

      return format.replace('%h', hours).replace('%m', ('0' + minutes).substr(-2)).replace('%s', ('0' + seconds).substr(-2));
    }
  }]);

  return KimaiActiveRecordsDuration;
}(_KimaiPlugin__WEBPACK_IMPORTED_MODULE_23__["default"]);



/***/ }),

/***/ "./assets/js/plugins/KimaiAjaxModalForm.js":
/*!*************************************************!*\
  !*** ./assets/js/plugins/KimaiAjaxModalForm.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KimaiAjaxModalForm; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _KimaiReducedClickHandler__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./KimaiReducedClickHandler */ "./assets/js/plugins/KimaiReducedClickHandler.js");


















function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/*
 * This file is part of the Kimai time-tracking app.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*!
 * [KIMAI] KimaiAjaxModalForm
 *
 * allows to assign the given selector to any element, which then is used as click-handler:
 * opening a modal with the content from the URL given in the elements 'data-href' or 'href' attribute
 */



var KimaiAjaxModalForm = /*#__PURE__*/function (_KimaiReducedClickHan) {
  _inherits(KimaiAjaxModalForm, _KimaiReducedClickHan);

  var _super = _createSuper(KimaiAjaxModalForm);

  function KimaiAjaxModalForm(selector) {
    var _this;

    _classCallCheck(this, KimaiAjaxModalForm);

    _this = _super.call(this);
    _this.selector = selector;
    return _this;
  }

  _createClass(KimaiAjaxModalForm, [{
    key: "getId",
    value: function getId() {
      return 'modal';
    }
  }, {
    key: "init",
    value: function init() {
      var self = this;
      this.isDirty = false;
      this.modal = jquery__WEBPACK_IMPORTED_MODULE_17___default()('#remote_form_modal');
      this.modal.on('hide.bs.modal', function (e) {
        if (self.isDirty) {
          if (jquery__WEBPACK_IMPORTED_MODULE_17___default()('#remote_form_modal .modal-body .remote_modal_is_dirty_warning').length === 0) {
            var msg = self.getContainer().getTranslation().get('modal.dirty');
            jquery__WEBPACK_IMPORTED_MODULE_17___default()('#remote_form_modal .modal-body').prepend('<p class="' + (self.modal.hasClass('modal-danger') ? 'well well-sm ' : '') + 'text-danger small remote_modal_is_dirty_warning">' + msg + '</p>');
          }

          e.preventDefault();
          return;
        }

        jquery__WEBPACK_IMPORTED_MODULE_17___default()(self._getFormIdentifier()).off('change', self._isDirtyHandler);
        self.isDirty = false;
        self.getContainer().getPlugin('event').trigger('modal-hide');
      });
      this.modal.on('hidden.bs.modal', function () {
        // kill all references, so GC can kick in
        self.getContainer().getPlugin('form').destroyForm(self._getFormIdentifier());
        jquery__WEBPACK_IMPORTED_MODULE_17___default()('#remote_form_modal .modal-body').replaceWith('');
      });
      this.modal.on('show.bs.modal', function () {
        self.getContainer().getPlugin('event').trigger('modal-show');
      });
      this.modal.on('shown.bs.modal', function () {
        // workaround for autofocus attribute, as the modal "steals" it
        var formAutofocus = jquery__WEBPACK_IMPORTED_MODULE_17___default()(self._getFormIdentifier()).find('[autofocus]');

        if (formAutofocus.length < 1) {
          formAutofocus = jquery__WEBPACK_IMPORTED_MODULE_17___default()(self._getFormIdentifier()).find('input[type=text],textarea,select');
        }

        formAutofocus.filter(':not("[data-datetimepicker=on]")').filter(':visible:first').focus().delay(1000).focus();
      });

      this._addClickHandler(this.selector, function (href) {
        self.openUrlInModal(href);
      });
    }
  }, {
    key: "openUrlInModal",
    value: function openUrlInModal(url, errorHandler) {
      var self = this;

      if (errorHandler === undefined) {
        errorHandler = function errorHandler(xhr, err) {
          if (xhr.status === undefined || xhr.status !== 403) {
            window.location = url;
          }
        };
      }

      jquery__WEBPACK_IMPORTED_MODULE_17___default.a.ajax({
        url: url,
        success: function success(html) {
          self._openFormInModal(html);
        },
        error: errorHandler
      });
    }
    /**
     * Returns the CSS selector for the modal form.
     * 
     * @returns {string}
     * @private
     */

  }, {
    key: "_getFormIdentifier",
    value: function _getFormIdentifier() {
      return '#remote_form_modal .modal-content form';
    }
  }, {
    key: "_openFormInModal",
    value: function _openFormInModal(html) {
      var self = this;

      var formIdentifier = this._getFormIdentifier(); // if any of these is found in a response, the form will be re-displayed


      var flashErrorIdentifier = 'div.alert-error'; // messages to show above the form

      var flashMessageIdentifier = 'div.alert';
      var form = jquery__WEBPACK_IMPORTED_MODULE_17___default()(formIdentifier);
      var remoteModal = this.modal; // will be (re-)activated later

      form.off('submit'); // load new form from given content

      if (jquery__WEBPACK_IMPORTED_MODULE_17___default()(html).find('#form_modal .modal-content').length > 0) {
        // switch classes, in case the modal type changed
        remoteModal.on('hidden.bs.modal', function () {
          if (remoteModal.hasClass('modal-danger')) {
            remoteModal.removeClass('modal-danger');
          }
        });

        if (jquery__WEBPACK_IMPORTED_MODULE_17___default()(html).find('#form_modal').hasClass('modal-danger')) {
          remoteModal.addClass('modal-danger');
        }

        jquery__WEBPACK_IMPORTED_MODULE_17___default()('#remote_form_modal .modal-content').replaceWith(jquery__WEBPACK_IMPORTED_MODULE_17___default()(html).find('#form_modal .modal-content'));
        jquery__WEBPACK_IMPORTED_MODULE_17___default()('#remote_form_modal [data-dismiss=modal]').on('click', function () {
          self.isDirty = false;
        }); // activate new loaded widgets

        self.getContainer().getPlugin('form').activateForm(formIdentifier);
      } // show error flash messages


      var flashMessages = jquery__WEBPACK_IMPORTED_MODULE_17___default()(html).find(flashMessageIdentifier);

      if (flashMessages.length > 0) {
        jquery__WEBPACK_IMPORTED_MODULE_17___default()('#remote_form_modal .modal-body').prepend(flashMessages);
      } // -----------------------------------------------------------------------
      // a fix for firefox focus problems with datepicker in modal
      // see https://github.com/kevinpapst/kimai2/issues/618


      var enforceModalFocusFn = jquery__WEBPACK_IMPORTED_MODULE_17___default.a.fn.modal.Constructor.prototype.enforceFocus;

      jquery__WEBPACK_IMPORTED_MODULE_17___default.a.fn.modal.Constructor.prototype.enforceFocus = function () {};

      remoteModal.on('hidden.bs.modal', function () {
        jquery__WEBPACK_IMPORTED_MODULE_17___default.a.fn.modal.Constructor.prototype.enforceFocus = enforceModalFocusFn;
      }); // -----------------------------------------------------------------------

      remoteModal.modal('show'); // the new form that was loaded via ajax

      form = jquery__WEBPACK_IMPORTED_MODULE_17___default()(formIdentifier);

      this._isDirtyHandler = function (e) {
        self.isDirty = true;
      };

      form.on('change', this._isDirtyHandler); // click handler for modal save button, to send forms via ajax

      form.on('submit', function (event) {
        var btn = jquery__WEBPACK_IMPORTED_MODULE_17___default()(formIdentifier + ' button[type=submit]').button('loading');
        var eventName = form.attr('data-form-event');
        var events = self.getContainer().getPlugin('event');
        var alert = self.getContainer().getPlugin('alert');
        event.preventDefault();
        event.stopPropagation();
        jquery__WEBPACK_IMPORTED_MODULE_17___default.a.ajax({
          url: form.attr('action'),
          type: form.attr('method'),
          data: form.serialize(),
          success: function success(html) {
            btn.button('reset');
            var hasFieldError = jquery__WEBPACK_IMPORTED_MODULE_17___default()(html).find('#form_modal .modal-content .has-error').length > 0;
            var hasFormError = jquery__WEBPACK_IMPORTED_MODULE_17___default()(html).find('#form_modal .modal-content ul.list-unstyled li.text-danger').length > 0;
            var hasFlashError = jquery__WEBPACK_IMPORTED_MODULE_17___default()(html).find(flashErrorIdentifier).length > 0;

            if (hasFieldError || hasFormError || hasFlashError) {
              self._openFormInModal(html);
            } else {
              events.trigger(eventName); // try to find form defined messages first ...

              var msg = form.attr('data-msg-success');

              if (msg === null || msg === undefined) {
                // ... but if none was available, check the response to find server rendered flash-message
                var flashMessage = jquery__WEBPACK_IMPORTED_MODULE_17___default()(html).find('section.content div.row div.alert.alert-success');

                if (flashMessage.length > 0) {
                  var flashContent = flashMessage.contents();

                  if (flashContent.length === 3) {
                    msg = flashContent[2].textContent;
                  }
                }
              } // ... and if even that is not available, we use a generic fallback message


              if (msg === null || msg === undefined) {
                msg = 'action.update.success';
              }

              self.isDirty = false;
              remoteModal.modal('hide');
              alert.success(msg);
            }

            return false;
          },
          error: function error(xhr, err) {
            var message = form.attr('data-msg-error');

            if (message === null || message === undefined) {
              message = 'action.update.error';
            }

            if (xhr.responseJSON && xhr.responseJSON.message) {
              err = xhr.responseJSON.message;
            } else if (xhr.status && xhr.statusText) {
              err = '[' + xhr.status + '] ' + xhr.statusText;
            }

            alert.error(message, err); // this is useful for changing form fields and retrying to save (and in development to test form changes)

            setTimeout(function () {
              btn.button('reset');
            }, 1500);
          }
        });
      });
    }
  }]);

  return KimaiAjaxModalForm;
}(_KimaiReducedClickHandler__WEBPACK_IMPORTED_MODULE_18__["default"]);



/***/ }),

/***/ "./assets/js/plugins/KimaiAlert.js":
/*!*****************************************!*\
  !*** ./assets/js/plugins/KimaiAlert.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KimaiAlert; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.is-array */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.join */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _KimaiPlugin__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../KimaiPlugin */ "./assets/js/KimaiPlugin.js");



















function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/*
 * This file is part of the Kimai time-tracking app.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*!
 * [KIMAI] KimaiAlert: notifications for Kimai
 */



var KimaiAlert = /*#__PURE__*/function (_KimaiPlugin) {
  _inherits(KimaiAlert, _KimaiPlugin);

  var _super = _createSuper(KimaiAlert);

  function KimaiAlert() {
    _classCallCheck(this, KimaiAlert);

    return _super.apply(this, arguments);
  }

  _createClass(KimaiAlert, [{
    key: "getId",
    value: function getId() {
      return 'alert';
    }
    /**
     * @param {string} title
     * @param {string|array} message
     */

  }, {
    key: "error",
    value: function error(title, message) {
      var translation = this.getContainer().getTranslation();

      if (translation.has(title)) {
        title = translation.get(title);
      }

      if (translation.has(message)) {
        message = translation.get(message);
      }

      if (Array.isArray(message)) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_18___default.a.fire({
          icon: 'error',
          title: title.replace('%reason%', ''),
          html: message.join('<br>')
        });
      } else {
        sweetalert2__WEBPACK_IMPORTED_MODULE_18___default.a.fire({
          icon: 'error',
          title: title.replace('%reason%', ''),
          text: message
        });
      }
    }
  }, {
    key: "warning",
    value: function warning(message) {
      this._show('warning', message);
    }
  }, {
    key: "success",
    value: function success(message) {
      this._toast('success', message);
    }
  }, {
    key: "info",
    value: function info(message) {
      this._show('info', message);
    }
  }, {
    key: "_show",
    value: function _show(type, message) {
      var translation = this.getContainer().getTranslation();

      if (translation.has(message)) {
        message = translation.get(message);
      }

      sweetalert2__WEBPACK_IMPORTED_MODULE_18___default.a.fire({
        icon: type,
        title: message
      });
    }
  }, {
    key: "_toast",
    value: function _toast(type, message) {
      var translation = this.getContainer().getTranslation();

      if (translation.has(message)) {
        message = translation.get(message);
      }

      sweetalert2__WEBPACK_IMPORTED_MODULE_18___default.a.fire({
        timer: 2000,
        timerProgressBar: true,
        toast: true,
        position: 'top',
        showConfirmButton: false,
        icon: type,
        title: message
      });
    }
    /**
     * Callback receives a value and needs to decide what should happen with it
     *
     * @param message
     * @param callback
     */

  }, {
    key: "question",
    value: function question(message, callback) {
      var translation = this.getContainer().getTranslation();

      if (translation.has(message)) {
        message = translation.get(message);
      }

      sweetalert2__WEBPACK_IMPORTED_MODULE_18___default.a.fire({
        title: message,
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: translation.get('confirm'),
        cancelButtonText: translation.get('cancel')
      }).then(function (result) {
        callback(result.value);
      });
    }
  }]);

  return KimaiAlert;
}(_KimaiPlugin__WEBPACK_IMPORTED_MODULE_19__["default"]);



/***/ }),

/***/ "./assets/js/plugins/KimaiAlternativeLinks.js":
/*!****************************************************!*\
  !*** ./assets/js/plugins/KimaiAlternativeLinks.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KimaiAlternativeLinks; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _KimaiReducedClickHandler__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./KimaiReducedClickHandler */ "./assets/js/plugins/KimaiReducedClickHandler.js");















function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/*
 * This file is part of the Kimai time-tracking app.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*!
 * [KIMAI] KimaiAlternativeLinks
 *
 * allows to assign the given selector to any element, which then is used as click-handler
 * redirecting to the URL given in the elements 'data-href' or 'href' attribute
 */



var KimaiAlternativeLinks = /*#__PURE__*/function (_KimaiReducedClickHan) {
  _inherits(KimaiAlternativeLinks, _KimaiReducedClickHan);

  var _super = _createSuper(KimaiAlternativeLinks);

  function KimaiAlternativeLinks(selector) {
    var _this;

    _classCallCheck(this, KimaiAlternativeLinks);

    _this = _super.call(this);
    _this.selector = selector;
    return _this;
  }

  _createClass(KimaiAlternativeLinks, [{
    key: "init",
    value: function init() {
      this._addClickHandler(this.selector, function (href) {
        window.location = href;
      });
    }
  }]);

  return KimaiAlternativeLinks;
}(_KimaiReducedClickHandler__WEBPACK_IMPORTED_MODULE_15__["default"]);



/***/ }),

/***/ "./assets/js/plugins/KimaiAutocomplete.js":
/*!************************************************!*\
  !*** ./assets/js/plugins/KimaiAutocomplete.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KimaiAutocomplete; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.includes */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.join */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.string.includes */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _KimaiPlugin__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../KimaiPlugin */ "./assets/js/KimaiPlugin.js");




















function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/*
 * This file is part of the Kimai time-tracking app.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


/**
 * Supporting auto-complete fields via API.
 * Currently used for timesheet tagging in toolbar and edit dialogs.
 */

var KimaiAutocomplete = /*#__PURE__*/function (_KimaiPlugin) {
  _inherits(KimaiAutocomplete, _KimaiPlugin);

  var _super = _createSuper(KimaiAutocomplete);

  function KimaiAutocomplete(selector) {
    var _this;

    _classCallCheck(this, KimaiAutocomplete);

    _this = _super.call(this);
    _this.selector = selector;
    return _this;
  }

  _createClass(KimaiAutocomplete, [{
    key: "init",
    value: function init() {
      this.minChars = this.getConfiguration('autoComplete');
    }
  }, {
    key: "getId",
    value: function getId() {
      return 'autocomplete';
    }
  }, {
    key: "splitTagList",
    value: function splitTagList(val) {
      return val.split(/,\s*/);
    }
  }, {
    key: "extractLastTag",
    value: function extractLastTag(term) {
      return this.splitTagList(term).pop();
    }
  }, {
    key: "activateAutocomplete",
    value: function activateAutocomplete(selector) {
      var self = this;
      jquery__WEBPACK_IMPORTED_MODULE_19___default()(selector + ' ' + this.selector).each(function (index) {
        var currentField = jquery__WEBPACK_IMPORTED_MODULE_19___default()(this);
        var apiUrl = currentField.attr('data-autocomplete-url');
        var API = self.getContainer().getPlugin('api');
        currentField // don't navigate away from the field on tab when selecting an item
        .on("keydown", function (event) {
          if (event.keyCode === jquery__WEBPACK_IMPORTED_MODULE_19___default.a.ui.keyCode.TAB && jquery__WEBPACK_IMPORTED_MODULE_19___default()(this).autocomplete("instance").menu.active) {
            event.preventDefault();
          }
        }).autocomplete({
          source: function source(request, response) {
            var lastEntry = self.extractLastTag(request.term);
            API.get(apiUrl, {
              'name': lastEntry
            }, function (data) {
              response(data);
            });
          },
          search: function search() {
            // custom minLength
            var term = self.extractLastTag(this.value);

            if (term.length < self.minChars) {
              return false;
            }
          },
          focus: function focus() {
            // prevent value inserted on focus
            return false;
          },
          select: function select(event, ui) {
            var terms = self.splitTagList(this.value); // remove the current input

            terms.pop(); // check if selected tag is already in list

            if (!terms.includes(ui.item.value)) {
              // add the selected item
              terms.push(ui.item.value);
            } // add placeholder to get the comma-and-space at the end


            terms.push("");
            this.value = terms.join(", ");
            $(this).trigger('change');
            return false;
          }
        });
      });
    }
  }, {
    key: "destroyAutocomplete",
    value: function destroyAutocomplete(selector) {
      jquery__WEBPACK_IMPORTED_MODULE_19___default()(selector + ' ' + this.selector).each(function (index) {
        var currentField = jquery__WEBPACK_IMPORTED_MODULE_19___default()(this);
        currentField.autocomplete("destroy");
        currentField.removeData('autocomplete');
      });
    }
  }]);

  return KimaiAutocomplete;
}(_KimaiPlugin__WEBPACK_IMPORTED_MODULE_20__["default"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/js/plugins/KimaiConfirmationLink.js":
/*!****************************************************!*\
  !*** ./assets/js/plugins/KimaiConfirmationLink.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KimaiConfirmationLink; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _KimaiPlugin__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../KimaiPlugin */ "./assets/js/KimaiPlugin.js");















function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/*
 * This file is part of the Kimai time-tracking app.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/**
 * Needs to be initialized with a class name.
 *
 * Allows to assign the given selector to any element, which then is used as click-handler
 * calling an API method and trigger the event from data-event attribute afterwards.
 *
 * @param selector
 */

var KimaiConfirmationLink = /*#__PURE__*/function (_KimaiPlugin) {
  _inherits(KimaiConfirmationLink, _KimaiPlugin);

  var _super = _createSuper(KimaiConfirmationLink);

  function KimaiConfirmationLink(selector) {
    var _this;

    _classCallCheck(this, KimaiConfirmationLink);

    _this = _super.call(this);
    _this.selector = selector;
    return _this;
  }

  _createClass(KimaiConfirmationLink, [{
    key: "init",
    value: function init() {
      var self = this;
      document.addEventListener('click', function (event) {
        var target = event.target;

        while (target !== null && !target.matches('body')) {
          if (target.classList.contains(self.selector)) {
            (function () {
              var attributes = target.dataset; // is this a link? 

              var url = attributes['href']; // or another HTML element with a custom href 

              if (!url) {
                url = target.getAttribute('href');
              } // or is this a button?


              var form = null;

              if (target.type === 'submit' && target.form !== undefined) {
                form = target.form;
              }

              if (attributes.question !== undefined) {
                self.getContainer().getPlugin('alert').question(attributes.question, function (value) {
                  if (value) {
                    if (form === null) {
                      document.location = url;
                    } else {
                      if (url !== null) {
                        form.action = url;
                      }

                      form.submit();
                    }
                  }
                });
              }

              event.preventDefault();
              event.stopPropagation();
            })();
          }

          target = target.parentNode;
        }
      });
    }
  }]);

  return KimaiConfirmationLink;
}(_KimaiPlugin__WEBPACK_IMPORTED_MODULE_14__["default"]);



/***/ }),

/***/ "./assets/js/plugins/KimaiDatatable.js":
/*!*********************************************!*\
  !*** ./assets/js/plugins/KimaiDatatable.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KimaiDatatable; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.is-array */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _KimaiPlugin__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../KimaiPlugin */ "./assets/js/KimaiPlugin.js");























function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/*
 * This file is part of the Kimai time-tracking app.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*!
 * [KIMAI] KimaiDatatable: handles functionality for the datatable
 */



var KimaiDatatable = /*#__PURE__*/function (_KimaiPlugin) {
  _inherits(KimaiDatatable, _KimaiPlugin);

  var _super = _createSuper(KimaiDatatable);

  function KimaiDatatable(contentAreaSelector, tableSelector) {
    var _this;

    _classCallCheck(this, KimaiDatatable);

    _this = _super.call(this);
    _this.contentArea = contentAreaSelector;
    _this.selector = tableSelector;
    return _this;
  }

  _createClass(KimaiDatatable, [{
    key: "getId",
    value: function getId() {
      return 'datatable';
    }
  }, {
    key: "init",
    value: function init() {
      var dataTable = document.querySelector(this.selector); // not every page contains a dataTable

      if (dataTable === null) {
        return;
      }

      var attributes = dataTable.dataset;
      var events = attributes['reloadEvent'];
      this.fixDropdowns();

      if (events === undefined) {
        return;
      }

      var self = this;

      var handle = function handle() {
        self.reloadDatatable();
      };

      var _iterator = _createForOfIteratorHelper(events.split(' ')),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var eventName = _step.value;
          document.addEventListener(eventName, handle);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      document.addEventListener('pagination-change', handle);
      document.addEventListener('filter-change', handle);
    }
  }, {
    key: "reloadDatatable",
    value: function reloadDatatable() {
      var self = this;
      var contentArea = this.contentArea;
      var durations = this.getContainer().getPlugin('timesheet-duration');
      var toolbarSelector = this.getContainer().getPlugin('toolbar').getSelector();
      var form = jquery__WEBPACK_IMPORTED_MODULE_22___default()(toolbarSelector);
      var loading = '<div class="overlay"><i class="fas fa-sync fa-spin"></i></div>';
      jquery__WEBPACK_IMPORTED_MODULE_22___default()(contentArea).append(loading); // remove the empty fields to prevent errors

      var formData = jquery__WEBPACK_IMPORTED_MODULE_22___default()(toolbarSelector + ' :input').filter(function (index, element) {
        return jquery__WEBPACK_IMPORTED_MODULE_22___default()(element).val() !== '';
      }).serialize();
      jquery__WEBPACK_IMPORTED_MODULE_22___default.a.ajax({
        url: form.attr('action'),
        type: form.attr('method'),
        data: formData,
        success: function success(html) {
          jquery__WEBPACK_IMPORTED_MODULE_22___default()(contentArea).replaceWith(jquery__WEBPACK_IMPORTED_MODULE_22___default()(html).find(contentArea));
          durations.updateRecords();
          self.fixDropdowns();
        },
        error: function error(xhr, err) {
          form.submit();
        }
      });
    }
    /**
     * show dropdown menu upwards, if it is outside the visible viewport
     */

  }, {
    key: "fixDropdowns",
    value: function fixDropdowns() {
      var docHeight = jquery__WEBPACK_IMPORTED_MODULE_22___default()(document).height();
      jquery__WEBPACK_IMPORTED_MODULE_22___default()(this.selector + ' [data-toggle=dropdown]').each(function () {
        var parent = jquery__WEBPACK_IMPORTED_MODULE_22___default()(this).parent();
        var menu = parent.find('.dropdown-menu');

        if (parent && menu) {
          if (parent.offset().top + parent.outerHeight() + menu.outerHeight() > docHeight) {
            parent.addClass('dropup').removeClass('dropdown');
          }
        }
      });
    }
  }]);

  return KimaiDatatable;
}(_KimaiPlugin__WEBPACK_IMPORTED_MODULE_23__["default"]);



/***/ }),

/***/ "./assets/js/plugins/KimaiDatatableColumnView.js":
/*!*******************************************************!*\
  !*** ./assets/js/plugins/KimaiDatatableColumnView.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KimaiDatatableColumnView; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.is-array */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _KimaiPlugin__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../KimaiPlugin */ "./assets/js/KimaiPlugin.js");



















function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/*
 * This file is part of the Kimai time-tracking app.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*!
 * [KIMAI] KimaiDatatableColumnView: manages the visibility of data-table columns in cookies
 */




var KimaiDatatableColumnView = /*#__PURE__*/function (_KimaiPlugin) {
  _inherits(KimaiDatatableColumnView, _KimaiPlugin);

  var _super = _createSuper(KimaiDatatableColumnView);

  function KimaiDatatableColumnView(dataAttribute) {
    var _this;

    _classCallCheck(this, KimaiDatatableColumnView);

    _this = _super.call(this);
    _this.dataAttribute = dataAttribute;
    return _this;
  }

  _createClass(KimaiDatatableColumnView, [{
    key: "getId",
    value: function getId() {
      return 'datatable-column-visibility';
    }
  }, {
    key: "init",
    value: function init() {
      var dataTable = document.querySelector('[' + this.dataAttribute + ']');

      if (dataTable === null) {
        return;
      }

      this.id = dataTable.getAttribute(this.dataAttribute);
      this.modal = document.getElementById('modal_' + this.id);
      this.bindButtons();
    }
  }, {
    key: "bindButtons",
    value: function bindButtons() {
      var self = this;
      this.modal.querySelector('button[data-type=save]').addEventListener('click', function () {
        self.saveVisibility();
      });
      this.modal.querySelector('button[data-type=reset]').addEventListener('click', function () {
        self.resetVisibility();
      });

      var _iterator = _createForOfIteratorHelper(this.modal.querySelectorAll('form input[type=checkbox]')),
          _step;

      try {
        var _loop = function _loop() {
          var checkbox = _step.value;
          checkbox.addEventListener('click', function () {
            self.changeVisibility(checkbox.getAttribute('name'), checkbox.checked);
          });
        };

        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "saveVisibility",
    value: function saveVisibility() {
      var form = this.modal.getElementsByTagName('form')[0];
      var settings = {};

      var _iterator2 = _createForOfIteratorHelper(form.querySelectorAll('input[type=checkbox]')),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var checkbox = _step2.value;
          settings[checkbox.getAttribute('name')] = checkbox.checked;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      js_cookie__WEBPACK_IMPORTED_MODULE_18___default.a.set(form.getAttribute('name'), JSON.stringify(settings), {
        expires: 365,
        SameSite: 'Strict'
      });
      jquery__WEBPACK_IMPORTED_MODULE_19___default()(this.modal).modal('toggle');
    }
  }, {
    key: "resetVisibility",
    value: function resetVisibility() {
      var form = this.modal.getElementsByTagName('form')[0];
      js_cookie__WEBPACK_IMPORTED_MODULE_18___default.a.remove(form.getAttribute('name'));

      var _iterator3 = _createForOfIteratorHelper(form.querySelectorAll('input[type=checkbox]')),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var checkbox = _step3.value;

          if (!checkbox.checked) {
            checkbox.click();
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      jquery__WEBPACK_IMPORTED_MODULE_19___default()(this.modal).modal('toggle');
    }
  }, {
    key: "changeVisibility",
    value: function changeVisibility(columnName, checked) {
      var table = document.getElementById('datatable_' + this.id).getElementsByClassName('dataTable')[0];
      var column = 0;
      var foundColumn = false;

      var _iterator4 = _createForOfIteratorHelper(table.getElementsByTagName('th')),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var columnElement = _step4.value;

          if (columnElement.getAttribute('data-field') === columnName) {
            foundColumn = true;
            break;
          }

          if (columnElement.getAttribute('colspan') !== null) {
            console.log('Tables with colspans are not supported!');
          }

          column++;
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      if (!foundColumn) {
        return;
      }

      var _iterator5 = _createForOfIteratorHelper(table.getElementsByTagName('tr')),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var rowElement = _step5.value;

          if (rowElement.children[column] === undefined) {
            continue;
          }

          if (checked) {
            rowElement.children[column].classList.remove('hidden');
          } else {
            rowElement.children[column].classList.add('hidden');
          }
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    }
  }]);

  return KimaiDatatableColumnView;
}(_KimaiPlugin__WEBPACK_IMPORTED_MODULE_20__["default"]);



/***/ }),

/***/ "./assets/js/plugins/KimaiDatePicker.js":
/*!**********************************************!*\
  !*** ./assets/js/plugins/KimaiDatePicker.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KimaiDatePicker; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _KimaiPlugin__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../KimaiPlugin */ "./assets/js/KimaiPlugin.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_16__);















function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/*
 * This file is part of the Kimai time-tracking app.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*!
 * [KIMAI] KimaiDatePicker: single date selects (currently unused)
 */




var KimaiDatePicker = /*#__PURE__*/function (_KimaiPlugin) {
  _inherits(KimaiDatePicker, _KimaiPlugin);

  var _super = _createSuper(KimaiDatePicker);

  function KimaiDatePicker(selector) {
    var _this;

    _classCallCheck(this, KimaiDatePicker);

    _this = _super.call(this);
    _this.selector = selector;
    return _this;
  }

  _createClass(KimaiDatePicker, [{
    key: "getId",
    value: function getId() {
      return 'date-picker';
    }
  }, {
    key: "activateDatePicker",
    value: function activateDatePicker(selector) {
      var TRANSLATE = this.getContainer().getTranslation();
      var DATE_UTILS = this.getContainer().getPlugin('date');
      var firstDow = this.getConfiguration('first_dow_iso') % 7;
      jquery__WEBPACK_IMPORTED_MODULE_14___default()(selector + ' ' + this.selector).each(function (index) {
        var localeFormat = jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).data('format');
        jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).daterangepicker({
          singleDatePicker: true,
          showDropdowns: true,
          autoUpdateInput: false,
          locale: {
            format: localeFormat,
            firstDay: firstDow,
            applyLabel: TRANSLATE.get('confirm'),
            cancelLabel: TRANSLATE.get('cancel'),
            customRangeLabel: TRANSLATE.get('customRange'),
            daysOfWeek: DATE_UTILS.getWeekDaysShort(),
            monthNames: DATE_UTILS.getMonthNames()
          }
        });
        jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).on('apply.daterangepicker', function (ev, picker) {
          jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).val(picker.startDate.format(localeFormat));
          jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).trigger("change");
        });
      });
    }
  }, {
    key: "destroyDatePicker",
    value: function destroyDatePicker(selector) {
      jquery__WEBPACK_IMPORTED_MODULE_14___default()(selector + ' ' + this.selector).each(function (index) {
        if (jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).data('daterangepicker') !== undefined) {
          jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).daterangepicker('destroy');
          jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).data('daterangepicker').remove();
        }
      });
    }
  }]);

  return KimaiDatePicker;
}(_KimaiPlugin__WEBPACK_IMPORTED_MODULE_15__["default"]);



/***/ }),

/***/ "./assets/js/plugins/KimaiDateRangePicker.js":
/*!***************************************************!*\
  !*** ./assets/js/plugins/KimaiDateRangePicker.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KimaiDateRangePicker; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _KimaiPlugin__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../KimaiPlugin */ "./assets/js/KimaiPlugin.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_16__);















function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/*
 * This file is part of the Kimai time-tracking app.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*!
 * [KIMAI] KimaiDateRangePicker: activate the (daterange picker) compound field in toolbar
 */




var KimaiDateRangePicker = /*#__PURE__*/function (_KimaiPlugin) {
  _inherits(KimaiDateRangePicker, _KimaiPlugin);

  var _super = _createSuper(KimaiDateRangePicker);

  function KimaiDateRangePicker(selector) {
    var _this;

    _classCallCheck(this, KimaiDateRangePicker);

    _this = _super.call(this);
    _this.selector = selector;
    return _this;
  }

  _createClass(KimaiDateRangePicker, [{
    key: "getId",
    value: function getId() {
      return 'date-range-picker';
    }
  }, {
    key: "activateDateRangePicker",
    value: function activateDateRangePicker(selector) {
      var TRANSLATE = this.getContainer().getTranslation();
      var DATE_UTILS = this.getContainer().getPlugin('date');
      var firstDow = this.getConfiguration('first_dow_iso') % 7;
      jquery__WEBPACK_IMPORTED_MODULE_14___default()(selector + ' ' + this.selector).each(function (index) {
        var localeFormat = jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).data('format');
        var separator = jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).data('separator');
        var rangesList = {};
        rangesList[TRANSLATE.get('today')] = [moment__WEBPACK_IMPORTED_MODULE_16___default()(), moment__WEBPACK_IMPORTED_MODULE_16___default()()];
        rangesList[TRANSLATE.get('yesterday')] = [moment__WEBPACK_IMPORTED_MODULE_16___default()().subtract(1, 'days'), moment__WEBPACK_IMPORTED_MODULE_16___default()().subtract(1, 'days')];
        rangesList[TRANSLATE.get('thisWeek')] = [moment__WEBPACK_IMPORTED_MODULE_16___default()().startOf('week'), moment__WEBPACK_IMPORTED_MODULE_16___default()().endOf('week')];
        rangesList[TRANSLATE.get('lastWeek')] = [moment__WEBPACK_IMPORTED_MODULE_16___default()().subtract(1, 'week').startOf('week'), moment__WEBPACK_IMPORTED_MODULE_16___default()().subtract(1, 'week').endOf('week')];
        rangesList[TRANSLATE.get('thisMonth')] = [moment__WEBPACK_IMPORTED_MODULE_16___default()().startOf('month'), moment__WEBPACK_IMPORTED_MODULE_16___default()().endOf('month')];
        rangesList[TRANSLATE.get('lastMonth')] = [moment__WEBPACK_IMPORTED_MODULE_16___default()().subtract(1, 'month').startOf('month'), moment__WEBPACK_IMPORTED_MODULE_16___default()().subtract(1, 'month').endOf('month')];
        rangesList[TRANSLATE.get('thisYear')] = [moment__WEBPACK_IMPORTED_MODULE_16___default()().startOf('year'), moment__WEBPACK_IMPORTED_MODULE_16___default()().endOf('year')];
        rangesList[TRANSLATE.get('lastYear')] = [moment__WEBPACK_IMPORTED_MODULE_16___default()().subtract(1, 'year').startOf('year'), moment__WEBPACK_IMPORTED_MODULE_16___default()().subtract(1, 'year').endOf('year')];
        jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).daterangepicker({
          showDropdowns: true,
          autoUpdateInput: false,
          autoApply: false,
          linkedCalendars: true,
          locale: {
            separator: separator,
            format: localeFormat,
            firstDay: firstDow,
            applyLabel: TRANSLATE.get('confirm'),
            cancelLabel: TRANSLATE.get('cancel'),
            customRangeLabel: TRANSLATE.get('customRange'),
            daysOfWeek: DATE_UTILS.getWeekDaysShort(),
            monthNames: DATE_UTILS.getMonthNames()
          },
          ranges: rangesList,
          alwaysShowCalendars: true
        });
        jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).on('apply.daterangepicker', function (ev, picker) {
          jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).val(picker.startDate.format(localeFormat) + ' - ' + picker.endDate.format(localeFormat));
          jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).data('begin', picker.startDate.format(localeFormat));
          jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).data('end', picker.endDate.format(localeFormat));
          jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).trigger("change");
        });
      });
    }
  }, {
    key: "destroyDateRangePicker",
    value: function destroyDateRangePicker(selector) {
      jquery__WEBPACK_IMPORTED_MODULE_14___default()(selector + ' ' + this.selector).each(function (index) {
        if (jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).data('daterangepicker') !== undefined) {
          jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).daterangepicker('destroy');
          jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).data('daterangepicker').remove();
        }
      });
    }
  }]);

  return KimaiDateRangePicker;
}(_KimaiPlugin__WEBPACK_IMPORTED_MODULE_15__["default"]);



/***/ }),

/***/ "./assets/js/plugins/KimaiDateTimePicker.js":
/*!**************************************************!*\
  !*** ./assets/js/plugins/KimaiDateTimePicker.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KimaiDateTimePicker; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _KimaiPlugin__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../KimaiPlugin */ "./assets/js/KimaiPlugin.js");















function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/*
 * This file is part of the Kimai time-tracking app.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*!
 * [KIMAI] KimaiDateTimePicker: activate the (datetime picker) field in timesheet edit dialog
 */



var KimaiDateTimePicker = /*#__PURE__*/function (_KimaiPlugin) {
  _inherits(KimaiDateTimePicker, _KimaiPlugin);

  var _super = _createSuper(KimaiDateTimePicker);

  function KimaiDateTimePicker(selector) {
    var _this;

    _classCallCheck(this, KimaiDateTimePicker);

    _this = _super.call(this);
    _this.selector = selector;
    return _this;
  }

  _createClass(KimaiDateTimePicker, [{
    key: "getId",
    value: function getId() {
      return 'date-time-picker';
    }
  }, {
    key: "activateDateTimePicker",
    value: function activateDateTimePicker(selector) {
      var TRANSLATE = this.getContainer().getTranslation();
      var DATE_UTILS = this.getContainer().getPlugin('date');
      var firstDow = this.getConfiguration('first_dow_iso') % 7;
      var is24hours = this.getConfiguration('twentyFourHours');
      jquery__WEBPACK_IMPORTED_MODULE_14___default()(selector + ' ' + this.selector).each(function (index) {
        var localeFormat = jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).data('format');
        jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).daterangepicker({
          singleDatePicker: true,
          timePicker: true,
          timePicker24Hour: is24hours,
          showDropdowns: true,
          autoUpdateInput: false,
          locale: {
            format: localeFormat,
            firstDay: firstDow,
            applyLabel: TRANSLATE.get('confirm'),
            cancelLabel: TRANSLATE.get('cancel'),
            customRangeLabel: TRANSLATE.get('customRange'),
            daysOfWeek: DATE_UTILS.getWeekDaysShort(),
            monthNames: DATE_UTILS.getMonthNames()
          }
        });
        jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).on('apply.daterangepicker', function (ev, picker) {
          jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).val(picker.startDate.format(localeFormat));
          jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).trigger("change");
        });
      });
    }
  }, {
    key: "destroyDateTimePicker",
    value: function destroyDateTimePicker(selector) {
      jquery__WEBPACK_IMPORTED_MODULE_14___default()(selector + ' ' + this.selector).each(function (index) {
        if (jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).data('daterangepicker') !== undefined) {
          jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).daterangepicker('destroy');
          jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).data('daterangepicker').remove();
        }
      });
    }
  }]);

  return KimaiDateTimePicker;
}(_KimaiPlugin__WEBPACK_IMPORTED_MODULE_15__["default"]);



/***/ }),

/***/ "./assets/js/plugins/KimaiDateUtils.js":
/*!*********************************************!*\
  !*** ./assets/js/plugins/KimaiDateUtils.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KimaiDateUtils; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _KimaiPlugin__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../KimaiPlugin */ "./assets/js/KimaiPlugin.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_15__);















function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/*
 * This file is part of the Kimai time-tracking app.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*!
 * [KIMAI] KimaiDateUtils: responsible for handling date specific tasks
 */



var KimaiDateUtils = /*#__PURE__*/function (_KimaiPlugin) {
  _inherits(KimaiDateUtils, _KimaiPlugin);

  var _super = _createSuper(KimaiDateUtils);

  function KimaiDateUtils() {
    _classCallCheck(this, KimaiDateUtils);

    return _super.apply(this, arguments);
  }

  _createClass(KimaiDateUtils, [{
    key: "getId",
    value: function getId() {
      return 'date';
    }
  }, {
    key: "getWeekDaysShort",
    value: function getWeekDaysShort() {
      return moment__WEBPACK_IMPORTED_MODULE_15___default.a.localeData().weekdaysShort();
    }
  }, {
    key: "getMonthNames",
    value: function getMonthNames() {
      return moment__WEBPACK_IMPORTED_MODULE_15___default.a.localeData().months();
    }
  }]);

  return KimaiDateUtils;
}(_KimaiPlugin__WEBPACK_IMPORTED_MODULE_14__["default"]);



/***/ }),

/***/ "./assets/js/plugins/KimaiEvent.js":
/*!*****************************************!*\
  !*** ./assets/js/plugins/KimaiEvent.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KimaiEvent; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.is-array */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _KimaiPlugin__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../KimaiPlugin */ "./assets/js/KimaiPlugin.js");





















function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/*
 * This file is part of the Kimai time-tracking app.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*!
 * [KIMAI] KimaiEvent: helper to trigger events
 */


var KimaiEvent = /*#__PURE__*/function (_KimaiPlugin) {
  _inherits(KimaiEvent, _KimaiPlugin);

  var _super = _createSuper(KimaiEvent);

  function KimaiEvent() {
    _classCallCheck(this, KimaiEvent);

    return _super.apply(this, arguments);
  }

  _createClass(KimaiEvent, [{
    key: "getId",
    value: function getId() {
      return 'event';
    }
  }, {
    key: "trigger",
    value: function trigger(name, details) {
      if (name === null || name === undefined) {
        return;
      }

      var _iterator = _createForOfIteratorHelper(name.split(' ')),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var event = _step.value;
          var triggerEvent = new Event(event);

          if (details !== undefined) {
            triggerEvent = new CustomEvent(event, {
              detail: details
            });
          }

          document.dispatchEvent(triggerEvent);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }]);

  return KimaiEvent;
}(_KimaiPlugin__WEBPACK_IMPORTED_MODULE_20__["default"]);



/***/ }),

/***/ "./assets/js/plugins/KimaiForm.js":
/*!****************************************!*\
  !*** ./assets/js/plugins/KimaiForm.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KimaiForm; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _KimaiPlugin__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../KimaiPlugin */ "./assets/js/KimaiPlugin.js");















function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/*
 * This file is part of the Kimai time-tracking app.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*!
 * [KIMAI] KimaiForm: basic functions for all forms
 */


var KimaiForm = /*#__PURE__*/function (_KimaiPlugin) {
  _inherits(KimaiForm, _KimaiPlugin);

  var _super = _createSuper(KimaiForm);

  function KimaiForm() {
    _classCallCheck(this, KimaiForm);

    return _super.apply(this, arguments);
  }

  _createClass(KimaiForm, [{
    key: "getId",
    value: function getId() {
      return 'form';
    }
  }, {
    key: "activateForm",
    value: function activateForm(formSelector, container) {
      this.getContainer().getPlugin('date-range-picker').activateDateRangePicker(formSelector);
      this.getContainer().getPlugin('date-time-picker').activateDateTimePicker(formSelector);
      this.getContainer().getPlugin('date-picker').activateDatePicker(formSelector);
      this.getContainer().getPlugin('autocomplete').activateAutocomplete(formSelector);
      this.getContainer().getPlugin('form-select').activateSelectPicker(formSelector, container);
    }
  }, {
    key: "destroyForm",
    value: function destroyForm(formSelector) {
      this.getContainer().getPlugin('form-select').destroySelectPicker(formSelector);
      this.getContainer().getPlugin('autocomplete').destroyAutocomplete(formSelector);
      this.getContainer().getPlugin('date-picker').destroyDatePicker(formSelector);
      this.getContainer().getPlugin('date-time-picker').destroyDateTimePicker(formSelector);
      this.getContainer().getPlugin('date-range-picker').destroyDateRangePicker(formSelector);
    }
  }]);

  return KimaiForm;
}(_KimaiPlugin__WEBPACK_IMPORTED_MODULE_14__["default"]);



/***/ }),

/***/ "./assets/js/plugins/KimaiFormSelect.js":
/*!**********************************************!*\
  !*** ./assets/js/plugins/KimaiFormSelect.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KimaiFormSelect; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.is-array */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.join */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.splice */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.define-properties */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_entries__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.entries */ "./node_modules/core-js/modules/es.object.entries.js");
/* harmony import */ var core_js_modules_es_object_entries__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/es.string.trim */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var _KimaiPlugin__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../KimaiPlugin */ "./assets/js/KimaiPlugin.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_36__);




































function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/*
 * This file is part of the Kimai time-tracking app.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*!
 * [KIMAI] KimaiFormSelect: enhanced functionality for HTML select's
 */



var KimaiFormSelect = /*#__PURE__*/function (_KimaiPlugin) {
  _inherits(KimaiFormSelect, _KimaiPlugin);

  var _super = _createSuper(KimaiFormSelect);

  function KimaiFormSelect(selector) {
    var _this;

    _classCallCheck(this, KimaiFormSelect);

    _this = _super.call(this);
    _this.selector = selector;
    return _this;
  }

  _createClass(KimaiFormSelect, [{
    key: "getId",
    value: function getId() {
      return 'form-select';
    }
  }, {
    key: "activateSelectPicker",
    value: function activateSelectPicker(selector, container) {
      var elementSelector = this.selector;
      var options = {};

      if (container !== undefined) {
        options = {
          dropdownParent: $(container)
        };
      } // Function to match the name of the parent and not only the names of the children
      // Based on the original matcher function of Select2: https://github.com/select2/select2/blob/5765090318c4d382ae56463cfa25ba8ca7bdd495/src/js/select2/defaults.js#L272
      // More information: https://select2.org/searching | https://github.com/select2/docs/blob/develop/pages/11.searching/docs.md


      function matcher(params, data) {
        // Always return the object if there is nothing to compare
        if (jquery__WEBPACK_IMPORTED_MODULE_36___default.a.trim(params.term) === '') {
          return data;
        } // Check whether options has children


        var hasChildren = data.children && data.children.length > 0; // Split search param by space to search for all terms and convert all to uppercase

        var terms = params.term.toUpperCase().split(' ');
        var original = data.text.toUpperCase(); // Always return the parent option including its children, when the name matches one of the params
        // Check if the text contains all or at least one of the terms

        var foundAll = true;
        var foundOne = false;
        var missingTerms = [];
        terms.forEach(function (item, index) {
          if (original.indexOf(item) > -1) {
            foundOne = true;
          } else {
            foundAll = false;
            missingTerms.push(item);
          }
        }); // If the option element contains all terms, return it

        if (foundAll) {
          return data;
        } // Do a recursive check for options with children


        if (hasChildren) {
          // If the parent already contains one or more search terms, proceed only with the missing ones
          // First: Clone the original params object...
          var newParams = jquery__WEBPACK_IMPORTED_MODULE_36___default.a.extend(true, {}, params);

          if (foundOne) {
            newParams.term = missingTerms.join(' ');
          } else {
            newParams.term = params.term;
          } // Clone the data object if there are children
          // This is required as we modify the object to remove any non-matches


          var match = jquery__WEBPACK_IMPORTED_MODULE_36___default.a.extend(true, {}, data); // Check each child of the option

          for (var c = data.children.length - 1; c >= 0; c--) {
            var child = data.children[c];
            var matches = matcher(newParams, child); // If there wasn't a match, remove the object in the array

            if (matches === null) {
              match.children.splice(c, 1);
            }
          } // If any children matched, return the new object


          if (match.children.length > 0) {
            return match;
          }
        } // If the option or its children do not contain the term, don't return anything


        return null;
      }

      options = _objectSpread(_objectSpread({}, options), {
        language: this.getConfiguration('locale').replace('_', '-'),
        theme: "bootstrap",
        matcher: matcher
      });
      jquery__WEBPACK_IMPORTED_MODULE_36___default()(selector + ' ' + elementSelector).select2(options);
      jquery__WEBPACK_IMPORTED_MODULE_36___default()('body').on('reset', 'form', function (event) {
        setTimeout(function () {
          jquery__WEBPACK_IMPORTED_MODULE_36___default()(event.target).find(elementSelector).trigger('change');
        }, 10);
      });
    }
  }, {
    key: "destroySelectPicker",
    value: function destroySelectPicker(selector) {
      jquery__WEBPACK_IMPORTED_MODULE_36___default()(selector + ' ' + this.selector).select2('destroy');
    }
  }, {
    key: "updateOptions",
    value: function updateOptions(selectIdentifier, data) {
      var select = jquery__WEBPACK_IMPORTED_MODULE_36___default()(selectIdentifier);
      var emptyOption = jquery__WEBPACK_IMPORTED_MODULE_36___default()(selectIdentifier + ' option[value=""]');
      var selectedValue = select.val();
      select.find('option').remove().end().find('optgroup').remove().end();

      if (emptyOption.length !== 0) {
        select.append(this._createOption(emptyOption.text(), ''));
      }

      var emptyOpts = [];
      var options = [];

      for (var _i = 0, _Object$entries = Object.entries(data); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            key = _Object$entries$_i[0],
            value = _Object$entries$_i[1];

        if (key === '__empty__') {
          var _iterator = _createForOfIteratorHelper(value),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var entity = _step.value;
              emptyOpts.push(this._createOption(entity.name, entity.id));
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          continue;
        }

        var optGroup = this._createOptgroup(key);

        var _iterator2 = _createForOfIteratorHelper(value),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _entity = _step2.value;
            optGroup.appendChild(this._createOption(_entity.name, _entity.id));
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        options.push(optGroup);
      }

      select.append(options);
      select.append(emptyOpts); // if available, re-select the previous selected option (mostly usable for global activities)

      select.val(selectedValue); // if we don't trigger the change, the other selects won't reset

      select.trigger('change'); // if select2 is active, this will tell the select to refresh

      if (select.hasClass('selectpicker')) {
        select.trigger('change.select2');
      }
    }
    /**
     * @param {string} label
     * @param {string} value
     * @returns {HTMLElement}
     * @private
     */

  }, {
    key: "_createOption",
    value: function _createOption(label, value) {
      var option = document.createElement('option');
      option.innerText = label;
      option.value = value;
      return option;
    }
    /**
     * @param {string} label
     * @returns {HTMLElement}
     * @private
     */

  }, {
    key: "_createOptgroup",
    value: function _createOptgroup(label) {
      var optGroup = document.createElement('optgroup');
      optGroup.label = label;
      return optGroup;
    }
  }]);

  return KimaiFormSelect;
}(_KimaiPlugin__WEBPACK_IMPORTED_MODULE_35__["default"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/js/plugins/KimaiMultiUpdateTable.js":
/*!****************************************************!*\
  !*** ./assets/js/plugins/KimaiMultiUpdateTable.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KimaiMultiUpdateTable; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.join */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _KimaiPlugin__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../KimaiPlugin */ "./assets/js/KimaiPlugin.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_18__);


















function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/*
 * This file is part of the Kimai time-tracking app.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*!
 * [KIMAI] KimaiMultiUpdateForm: handle the multi update checkbox list and form
 */



var KimaiMultiUpdateTable = /*#__PURE__*/function (_KimaiPlugin) {
  _inherits(KimaiMultiUpdateTable, _KimaiPlugin);

  var _super = _createSuper(KimaiMultiUpdateTable);

  function KimaiMultiUpdateTable() {
    _classCallCheck(this, KimaiMultiUpdateTable);

    return _super.apply(this, arguments);
  }

  _createClass(KimaiMultiUpdateTable, [{
    key: "init",
    value: function init() {
      var self = this;
      jquery__WEBPACK_IMPORTED_MODULE_18___default()('body').on('change', '#multi_update_all', function (event) {
        jquery__WEBPACK_IMPORTED_MODULE_18___default()('.multi_update_single').prop('checked', jquery__WEBPACK_IMPORTED_MODULE_18___default()(event.target).prop('checked'));
        self.toggleForm();
      }).on('change', '.multi_update_single', function (event) {
        self.toggleForm();
      }).on('change', '#multi_update_table_action', function (event) {
        var selectedItem = jquery__WEBPACK_IMPORTED_MODULE_18___default()('#multi_update_table_action option:selected');
        var selectedVal = selectedItem.val();

        if (selectedVal === '') {
          return;
        }

        var form = jquery__WEBPACK_IMPORTED_MODULE_18___default()('#multi_update_form form');
        var selectedText = selectedItem.text();
        var ids = self.getSelectedIds();
        var question = form.attr('data-question').replace(/%action%/, selectedText).replace(/%count%/, ids.length);
        self.getContainer().getPlugin('alert').question(question, function (value) {
          if (value) {
            form.attr('action', selectedVal).submit();
          } else {
            jquery__WEBPACK_IMPORTED_MODULE_18___default()('#multi_update_table_action').val('').trigger('change');
          }
        });
      });
    }
  }, {
    key: "getSelectedIds",
    value: function getSelectedIds() {
      var ids = [];
      jquery__WEBPACK_IMPORTED_MODULE_18___default()('.multi_update_single:checked').each(function (i) {
        ids[i] = $(this).val();
      });
      return ids;
    }
  }, {
    key: "toggleForm",
    value: function toggleForm() {
      var ids = this.getSelectedIds();
      jquery__WEBPACK_IMPORTED_MODULE_18___default()('#multi_update_table_entities').val(ids.join(','));

      if (ids.length > 0) {
        jquery__WEBPACK_IMPORTED_MODULE_18___default()('#multi_update_form').show();
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_18___default()('#multi_update_form').hide();
      }
    }
  }]);

  return KimaiMultiUpdateTable;
}(_KimaiPlugin__WEBPACK_IMPORTED_MODULE_17__["default"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/js/plugins/KimaiRecentActivities.js":
/*!****************************************************!*\
  !*** ./assets/js/plugins/KimaiRecentActivities.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KimaiRecentActivities; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.is-array */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _KimaiPlugin__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../KimaiPlugin */ "./assets/js/KimaiPlugin.js");























function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/*
 * This file is part of the Kimai time-tracking app.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*!
 * [KIMAI] KimaiRecentActivities: responsible to reload the users recent activities
 */


var KimaiRecentActivities = /*#__PURE__*/function (_KimaiPlugin) {
  _inherits(KimaiRecentActivities, _KimaiPlugin);

  var _super = _createSuper(KimaiRecentActivities);

  function KimaiRecentActivities(selector) {
    var _this;

    _classCallCheck(this, KimaiRecentActivities);

    _this = _super.call(this);
    _this.selector = selector;
    return _this;
  }

  _createClass(KimaiRecentActivities, [{
    key: "getId",
    value: function getId() {
      return 'recent-activities';
    }
  }, {
    key: "init",
    value: function init() {
      var menu = document.querySelector(this.selector); // the menu can be hidden if user has no permissions to see it

      if (menu === null) {
        return;
      }

      var dropdown = menu.querySelector('ul.dropdown-menu');
      this.attributes = dropdown.dataset;
      this.itemList = dropdown.querySelector('li > ul.menu');
      var self = this;

      var handle = function handle() {
        self.reloadRecentActivities();
      }; // don't block initial browser rendering


      setTimeout(handle, 500);
      document.addEventListener('kimai.recentActivities', handle);
      document.addEventListener('kimai.timesheetUpdate', handle);
      document.addEventListener('kimai.activityUpdate', handle);
      document.addEventListener('kimai.projectUpdate', handle);
      document.addEventListener('kimai.customerUpdate', handle);
    }
  }, {
    key: "emptyList",
    value: function emptyList() {
      this.itemList.innerHTML = '';
    }
  }, {
    key: "setEntries",
    value: function setEntries(entries) {
      if (entries.length === 0) {
        this.emptyList();
        return;
      }

      var htmlToInsert = '';

      var _iterator = _createForOfIteratorHelper(entries),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var timesheet = _step.value;
          var label = this.attributes['template'].replace('%customer%', timesheet.project.customer.name).replace('%project%', timesheet.project.name).replace('%activity%', timesheet.activity.name);
          htmlToInsert += "<li>" + "<a href=\"".concat(this.attributes['href'].replace('000', timesheet.id), "\" data-event=\"kimai.timesheetStart kimai.timesheetUpdate\" class=\"api-link\" data-method=\"PATCH\" data-msg-error=\"timesheet.start.error\" data-msg-success=\"timesheet.start.success\">") + "<i class=\"".concat(this.attributes['icon'], "\"></i> ").concat(label) + "</a>" + "</li>";
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      this.itemList.innerHTML = htmlToInsert;
    }
  }, {
    key: "reloadRecentActivities",
    value: function reloadRecentActivities() {
      var self = this;
      var API = this.getContainer().getPlugin('api');
      API.get(this.attributes['api'], {}, function (result) {
        self.setEntries(result);
      });
    }
  }]);

  return KimaiRecentActivities;
}(_KimaiPlugin__WEBPACK_IMPORTED_MODULE_22__["default"]);



/***/ }),

/***/ "./assets/js/plugins/KimaiReducedClickHandler.js":
/*!*******************************************************!*\
  !*** ./assets/js/plugins/KimaiReducedClickHandler.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KimaiReducedClickHandler; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _KimaiPlugin__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../KimaiPlugin */ "./assets/js/KimaiPlugin.js");















function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/*
 * This file is part of the Kimai time-tracking app.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*!
 * [KIMAI] KimaiReducedClickHandler: abstract class
 */



var KimaiReducedClickHandler = /*#__PURE__*/function (_KimaiPlugin) {
  _inherits(KimaiReducedClickHandler, _KimaiPlugin);

  var _super = _createSuper(KimaiReducedClickHandler);

  function KimaiReducedClickHandler() {
    _classCallCheck(this, KimaiReducedClickHandler);

    return _super.apply(this, arguments);
  }

  _createClass(KimaiReducedClickHandler, [{
    key: "_addClickHandler",
    value: function _addClickHandler(selector, callback) {
      jquery__WEBPACK_IMPORTED_MODULE_14___default()('body').on('click', selector, function (event) {
        // just in case an inner element is editable, than this should not be triggered
        if (event.target.parentNode.isContentEditable || event.target.isContentEditable) {
          return;
        } // handles the "click" on table rows or list elements


        var target = event.target;

        if (event.currentTarget.matches('tr') || event.currentTarget.matches('li')) {
          while (target !== null && !target.matches('body')) {
            // when an element within the row is clicked, that can trigger stuff itself, we don't want the event to be processed
            // don't act if a link, button or form element was clicked
            if (target.matches('a') || target.matches('button') || target.matches('input')) {
              return;
            }

            target = target.parentNode;
          }
        }

        event.preventDefault();
        event.stopPropagation();
        var href = jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).attr('data-href');

        if (!href) {
          href = jquery__WEBPACK_IMPORTED_MODULE_14___default()(this).attr('href');
        }

        callback(href);
      });
    }
  }]);

  return KimaiReducedClickHandler;
}(_KimaiPlugin__WEBPACK_IMPORTED_MODULE_15__["default"]);



/***/ }),

/***/ "./assets/js/plugins/KimaiSelectDataAPI.js":
/*!*************************************************!*\
  !*** ./assets/js/plugins/KimaiSelectDataAPI.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KimaiSelectDataAPI; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.is-array */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.join */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.sort */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.string.match */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _KimaiPlugin__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../KimaiPlugin */ "./assets/js/KimaiPlugin.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_29__);




























function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/*
 * This file is part of the Kimai time-tracking app.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*!
 * [KIMAI] KimaiSelectDataAPI: <select> boxes with dynamic data from API
 */




var KimaiSelectDataAPI = /*#__PURE__*/function (_KimaiPlugin) {
  _inherits(KimaiSelectDataAPI, _KimaiPlugin);

  var _super = _createSuper(KimaiSelectDataAPI);

  function KimaiSelectDataAPI(selector) {
    var _this;

    _classCallCheck(this, KimaiSelectDataAPI);

    _this = _super.call(this);
    _this.selector = selector;
    return _this;
  }

  _createClass(KimaiSelectDataAPI, [{
    key: "getId",
    value: function getId() {
      return 'select-data-api';
    }
  }, {
    key: "init",
    value: function init() {
      this.activateApiSelects(this.selector);
    }
  }, {
    key: "activateApiSelects",
    value: function activateApiSelects(selector) {
      var self = this;
      var API = this.getContainer().getPlugin('api');
      jquery__WEBPACK_IMPORTED_MODULE_27___default()('body').on('change', selector, function (event) {
        var targetSelect = '#' + this.dataset['relatedSelect']; // if the related target select does not exist, we do not need to load the related data

        if (jquery__WEBPACK_IMPORTED_MODULE_27___default()(targetSelect).length === 0) {
          return;
        }

        var formPrefix = jquery__WEBPACK_IMPORTED_MODULE_27___default()(this).parents('form').first().attr('name');

        if (formPrefix === undefined || formPrefix === null) {
          formPrefix = '';
        } else {
          formPrefix += '_';
        }

        var newApiUrl = self._buildUrlWithFormFields(this.dataset['apiUrl'], formPrefix);

        var selectValue = jquery__WEBPACK_IMPORTED_MODULE_27___default()(this).val(); // Problem: select a project with activities and then select a customer that has no project
        // results in a wrong URL, it triggers "activities?project=" instead of using the "emptyUrl"

        if (selectValue === undefined || selectValue === null || selectValue === '' || Array.isArray(selectValue) && selectValue.length === 0) {
          if (this.dataset['emptyUrl'] === undefined) {
            self._updateSelect(targetSelect, {});

            jquery__WEBPACK_IMPORTED_MODULE_27___default()(targetSelect).attr('disabled', 'disabled');
            return;
          }

          newApiUrl = self._buildUrlWithFormFields(this.dataset['emptyUrl'], formPrefix);
        }

        jquery__WEBPACK_IMPORTED_MODULE_27___default()(targetSelect).removeAttr('disabled');
        API.get(newApiUrl, {}, function (data) {
          self._updateSelect(targetSelect, data);
        });
      });
    }
  }, {
    key: "_buildUrlWithFormFields",
    value: function _buildUrlWithFormFields(apiUrl, formPrefix) {
      var newApiUrl = apiUrl;
      apiUrl.split('?')[1].split('&').forEach(function (item) {
        var _item$split = item.split('='),
            _item$split2 = _slicedToArray(_item$split, 2),
            key = _item$split2[0],
            value = _item$split2[1];

        var decoded = decodeURIComponent(value);
        var test = decoded.match(/%(.*)%/);

        if (test !== null) {
          var targetField = jquery__WEBPACK_IMPORTED_MODULE_27___default()('#' + formPrefix + test[1]);
          var newValue = '';

          if (targetField.length === 0) {// happens for example:
            // - in duration only mode, when the end field is not found
            // console.log('ERROR: Cannot find field with name "' + test[1] + '" by selector: #' + formPrefix + test[1]);
          } else {
            if (targetField.val() !== null) {
              newValue = targetField.val();

              if (newValue !== '') {
                // having that special case here is far from being perfect... but for now it works ;-)
                if (targetField.data('daterangepicker') !== undefined) {
                  if (key === 'begin' || key === 'start' || targetField.data('daterangepicker').singleDatePicker) {
                    newValue = targetField.data('daterangepicker').startDate.format(moment__WEBPACK_IMPORTED_MODULE_29___default.a.HTML5_FMT.DATETIME_LOCAL_SECONDS);
                  } else if (key === 'end') {
                    newValue = targetField.data('daterangepicker').endDate.format(moment__WEBPACK_IMPORTED_MODULE_29___default.a.HTML5_FMT.DATETIME_LOCAL_SECONDS);
                  }
                } else if (targetField.data('format') !== undefined) {
                  if (moment__WEBPACK_IMPORTED_MODULE_29___default()(newValue, targetField.data('format')).isValid()) {
                    newValue = moment__WEBPACK_IMPORTED_MODULE_29___default()(newValue, targetField.data('format')).format(moment__WEBPACK_IMPORTED_MODULE_29___default.a.HTML5_FMT.DATETIME_LOCAL_SECONDS);
                  }
                }
              } else {// happens for example:
                // - when the end date is not set on a timesheet record and the project list is loaded (as the URL contains the %end% replacer)
                // console.log('Empty value found for field with name "' + test[1] + '" by selector: #' + formPrefix + test[1]);
              }
            } else {// happens for example:
                // - when a customer without projects is selected
                // console.log('ERROR: Empty field with name "' + test[1] + '" by selector: #' + formPrefix + test[1]);
              }
          }

          if (Array.isArray(newValue)) {
            newValue = newValue.join(',');
          }

          newApiUrl = newApiUrl.replace(value, newValue);
        }
      });
      return newApiUrl;
    }
  }, {
    key: "_updateSelect",
    value: function _updateSelect(selectName, data) {
      var options = {};

      var _iterator = _createForOfIteratorHelper(data),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var apiData = _step.value;
          var title = '__empty__';

          if (apiData.hasOwnProperty('parentTitle') && apiData.parentTitle !== null) {
            title = apiData.parentTitle;
          }

          if (!options.hasOwnProperty(title)) {
            options[title] = [];
          }

          options[title].push(apiData);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var ordered = {};
      Object.keys(options).sort().forEach(function (key) {
        ordered[key] = options[key];
      });
      this.getContainer().getPlugin('form-select').updateOptions(selectName, ordered);
    }
  }]);

  return KimaiSelectDataAPI;
}(_KimaiPlugin__WEBPACK_IMPORTED_MODULE_28__["default"]);



/***/ }),

/***/ "./assets/js/plugins/KimaiThemeInitializer.js":
/*!****************************************************!*\
  !*** ./assets/js/plugins/KimaiThemeInitializer.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KimaiThemeInitializer; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _KimaiPlugin__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../KimaiPlugin */ "./assets/js/KimaiPlugin.js");


















function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/*
 * This file is part of the Kimai time-tracking app.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*!
 * [KIMAI] KimaiThemeInitializer: initialize theme functionality
 */



var KimaiThemeInitializer = /*#__PURE__*/function (_KimaiPlugin) {
  _inherits(KimaiThemeInitializer, _KimaiPlugin);

  var _super = _createSuper(KimaiThemeInitializer);

  function KimaiThemeInitializer() {
    _classCallCheck(this, KimaiThemeInitializer);

    return _super.apply(this, arguments);
  }

  _createClass(KimaiThemeInitializer, [{
    key: "init",
    value: function init() {
      this.registerGlobalAjaxErrorHandler();
      this.registerAutomaticAlertRemove('div.alert-success', 5000); // activate the dropdown functionality

      jquery__WEBPACK_IMPORTED_MODULE_17___default()('.dropdown-toggle').dropdown(); // activate the tooltip functionality

      jquery__WEBPACK_IMPORTED_MODULE_17___default()('[data-toggle="tooltip"]').tooltip(); // activate all form plugins

      this.getContainer().getPlugin('form').activateForm('.content-wrapper form', 'body');
      this.getContainer().getPlugin('form').activateForm('form.searchform', 'body');
    }
    /**
     * redirect access denied / session timeouts to login page
     */

  }, {
    key: "registerGlobalAjaxErrorHandler",
    value: function registerGlobalAjaxErrorHandler() {
      var loginUrl = this.getConfiguration('login');
      var alert = this.getContainer().getPlugin('alert');
      var translation = this.getContainer().getTranslation().get('login.required');
      jquery__WEBPACK_IMPORTED_MODULE_17___default()(document).ajaxError(function (event, jqxhr, settings, thrownError) {
        if (jqxhr.status !== undefined && jqxhr.status === 403) {
          var loginRequired = jqxhr.getResponseHeader('login-required');

          if (loginRequired !== null) {
            alert.question(translation, function (result) {
              if (result === true) {
                window.location.replace(loginUrl);
              }
            });
          }
        }
      });
    }
    /**
     * auto hide success messages, as they are just meant as user feedback and not as a permanent information
     *
     * @param {string} selector
     * @param {integer} interval
     */

  }, {
    key: "registerAutomaticAlertRemove",
    value: function registerAutomaticAlertRemove(selector, interval) {
      var self = this;
      this._alertRemoveHandler = setInterval(function () {
        self.hideAlert(selector);
      }, interval);
    }
  }, {
    key: "unregisterAutomaticAlertRemove",
    value: function unregisterAutomaticAlertRemove() {
      clearInterval(this._alertRemoveHandler);
    }
    /**
     * @param {string} selector
     */

  }, {
    key: "hideAlert",
    value: function hideAlert(selector) {
      jquery__WEBPACK_IMPORTED_MODULE_17___default()(selector).alert('close');
    }
  }]);

  return KimaiThemeInitializer;
}(_KimaiPlugin__WEBPACK_IMPORTED_MODULE_18__["default"]);



/***/ }),

/***/ "./assets/js/plugins/KimaiToolbar.js":
/*!*******************************************!*\
  !*** ./assets/js/plugins/KimaiToolbar.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KimaiToolbar; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _KimaiPlugin__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../KimaiPlugin */ "./assets/js/KimaiPlugin.js");

















function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/*
 * This file is part of the Kimai time-tracking app.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*!
 * [KIMAI] KimaiToolbar: some event listener to handle the toolbar/data-table filter, toolbar and navigation
 */



var KimaiToolbar = /*#__PURE__*/function (_KimaiPlugin) {
  _inherits(KimaiToolbar, _KimaiPlugin);

  var _super = _createSuper(KimaiToolbar);

  function KimaiToolbar(formSelector, formSubmitActionClass) {
    var _this;

    _classCallCheck(this, KimaiToolbar);

    _this = _super.call(this);
    _this.formSelector = formSelector;
    _this.actionClass = formSubmitActionClass;
    return _this;
  }

  _createClass(KimaiToolbar, [{
    key: "getId",
    value: function getId() {
      return 'toolbar';
    }
  }, {
    key: "init",
    value: function init() {
      var formSelector = this.getSelector();
      var self = this;
      var EVENT = self.getContainer().getPlugin('event');

      this._registerPagination(formSelector, EVENT);

      this._registerSortableTables(formSelector, EVENT);

      this._registerAlternativeSubmitActions(formSelector, this.actionClass); // Reset the page if filter values are changed, otherwise we might end up with a limited set of data,
      // which does not support the given page - and it would be just wrong to stay in the same page


      jquery__WEBPACK_IMPORTED_MODULE_16___default()(formSelector + ' input').change(function (event) {
        switch (event.target.id) {
          case 'order':
          case 'orderBy':
          case 'page':
            break;

          default:
            jquery__WEBPACK_IMPORTED_MODULE_16___default()(formSelector + ' input#page').val(1);
            break;
        }

        self.triggerChange();
      }); // when user selected a new customer or project, reset the pagination back to 1
      // and then find out if the results should be reloaded

      jquery__WEBPACK_IMPORTED_MODULE_16___default()(formSelector + ' select').change(function (event) {
        var reload = true;

        switch (event.target.id) {
          case 'customer':
            if (jquery__WEBPACK_IMPORTED_MODULE_16___default()(formSelector + ' select#project').length > 0) {
              reload = false;
            }

            break;

          case 'project':
            if (jquery__WEBPACK_IMPORTED_MODULE_16___default()(formSelector + ' select#activity').length > 0) {
              reload = false;
            }

            break;
        }

        jquery__WEBPACK_IMPORTED_MODULE_16___default()(formSelector + ' input#page').val(1);

        if (reload) {
          self.triggerChange();
        }
      });
    }
    /**
     * Some actions utilize the filter from the search form and submit it to another URL.
     * @private
     */

  }, {
    key: "_registerAlternativeSubmitActions",
    value: function _registerAlternativeSubmitActions(toolbarSelector, actionBtnClass) {
      document.addEventListener('click', function (event) {
        var target = event.target;

        while (target !== null && !target.matches('body')) {
          if (target.classList.contains(actionBtnClass)) {
            var form = document.querySelector(toolbarSelector);

            if (form === null) {
              return;
            }

            var prevAction = form.action;
            var prevMethod = form.method;
            form.target = '_blank';
            form.action = target.href;

            if (target.dataset.method !== undefined) {
              form.method = target.dataset.method;
            }

            form.submit();
            form.target = '';
            form.action = prevAction;
            form.method = prevMethod;
            event.preventDefault();
            event.stopPropagation();
          }

          target = target.parentNode;
        }
      });
    }
    /**
     * Sortable datatables use hidden fields in the toolbar filter/search form
     * @private
     */

  }, {
    key: "_registerSortableTables",
    value: function _registerSortableTables(formSelector, EVENT) {
      jquery__WEBPACK_IMPORTED_MODULE_16___default()('body').on('click', 'th.sortable', function (event) {
        var $header = jquery__WEBPACK_IMPORTED_MODULE_16___default()(event.target);
        var order = 'DESC';
        var orderBy = $header.data('order');

        if ($header.hasClass('sorting_desc')) {
          order = 'ASC';
        }

        jquery__WEBPACK_IMPORTED_MODULE_16___default()(formSelector + ' #orderBy').val(orderBy);
        jquery__WEBPACK_IMPORTED_MODULE_16___default()(formSelector + ' #order').val(order); // re-render the selectboxes

        jquery__WEBPACK_IMPORTED_MODULE_16___default()(formSelector + ' #orderBy').trigger('change');
        jquery__WEBPACK_IMPORTED_MODULE_16___default()(formSelector + ' #order').trigger('change'); // triggers the datatable reload - search for the event name

        EVENT.trigger('filter-change');
      });
    }
    /**
     * This catches all clicks on the pagination and prevents the default action, as we want to reload the page via JS
     * @private
     */

  }, {
    key: "_registerPagination",
    value: function _registerPagination(formSelector, EVENT) {
      jquery__WEBPACK_IMPORTED_MODULE_16___default()('body').on('click', 'div.navigation ul.pagination li a', function (event) {
        var pager = jquery__WEBPACK_IMPORTED_MODULE_16___default()(formSelector + " input#page");

        if (pager.length === 0) {
          return;
        }

        event.preventDefault();
        event.stopPropagation();
        var urlParts = jquery__WEBPACK_IMPORTED_MODULE_16___default()(this).attr('href').split('/');
        var page = urlParts[urlParts.length - 1];
        pager.val(page);
        pager.trigger('change');
        EVENT.trigger('pagination-change');
        return false;
      });
    }
    /**
     * Triggers an event, that everyone can listen for.
     */

  }, {
    key: "triggerChange",
    value: function triggerChange() {
      this.getContainer().getPlugin('event').trigger('toolbar-change');
    }
    /**
     * Returns the CSS selector to target the toolbar form.
     * 
     * @returns {string}
     */

  }, {
    key: "getSelector",
    value: function getSelector() {
      return this.formSelector;
    }
  }]);

  return KimaiToolbar;
}(_KimaiPlugin__WEBPACK_IMPORTED_MODULE_17__["default"]);



/***/ }),

/***/ "./assets/js/widgets/KimaiCookies.js":
/*!*******************************************!*\
  !*** ./assets/js/widgets/KimaiCookies.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KimaiCookies; });
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
 * This file is part of the Kimai time-tracking app.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*!
 * [KIMAI] KimaiCookies: simple wrapper to handle cookies
 */


var KimaiCookies = /*#__PURE__*/function () {
  function KimaiCookies() {
    _classCallCheck(this, KimaiCookies);
  }

  _createClass(KimaiCookies, null, [{
    key: "set",
    value: function set(name, values, options) {
      js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set(name, values, options);
    }
  }, {
    key: "get",
    value: function get(name) {
      return js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.getJSON(name);
    }
  }, {
    key: "remove",
    value: function remove(name) {
      js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.remove(name);
    }
  }]);

  return KimaiCookies;
}();



/***/ }),

/***/ "./assets/js/widgets/KimaiPaginatedBoxWidget.js":
/*!******************************************************!*\
  !*** ./assets/js/widgets/KimaiPaginatedBoxWidget.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KimaiPaginatedBoxWidget; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.is-array */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_18__);



















function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
 * This file is part of the Kimai time-tracking app.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*!
 * [KIMAI] KimaiPaginatedBoxWidget: handles box widgets that have a pagination
 */


var KimaiPaginatedBoxWidget = /*#__PURE__*/function () {
  function KimaiPaginatedBoxWidget(boxId) {
    _classCallCheck(this, KimaiPaginatedBoxWidget);

    this.selector = boxId;
    this.overlay = jquery__WEBPACK_IMPORTED_MODULE_18___default()('<div class="overlay"><div class="fas fa-sync fa-spin"></div></div>');
    this.widget = jquery__WEBPACK_IMPORTED_MODULE_18___default()(this.selector);
    this.href = this.widget.data('href');
    this.events = this.widget.data('reload').split(' ');
    var self = this;

    var reloadPage = function reloadPage(event) {
      var page = jquery__WEBPACK_IMPORTED_MODULE_18___default()(self.selector + ' .box-tools').data('page');

      var url = self._buildUrl(page);

      self.loadPage(url);
    };

    var _iterator = _createForOfIteratorHelper(this.events),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var eventName = _step.value;
        document.addEventListener(eventName, reloadPage);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    this.widget.on('click', '.box-tools ul.pagination a', function (event) {
      event.preventDefault();
      self.loadPage(jquery__WEBPACK_IMPORTED_MODULE_18___default()(event.currentTarget).attr('href'));
    });
  }

  _createClass(KimaiPaginatedBoxWidget, [{
    key: "_showOverlay",
    value: function _showOverlay() {
      this.widget.append(this.overlay);
    }
  }, {
    key: "_hideOverlay",
    value: function _hideOverlay() {
      jquery__WEBPACK_IMPORTED_MODULE_18___default()(this.overlay).remove();
    }
  }, {
    key: "loadPage",
    value: function loadPage(url) {
      var self = this;
      var selector = this.selector;

      self._showOverlay();

      jquery__WEBPACK_IMPORTED_MODULE_18___default.a.ajax({
        url: url,
        data: {},
        success: function success(response) {
          var html = jquery__WEBPACK_IMPORTED_MODULE_18___default()(response);
          jquery__WEBPACK_IMPORTED_MODULE_18___default()(selector + ' .box-tools').replaceWith(html.find('.box-tools'));
          jquery__WEBPACK_IMPORTED_MODULE_18___default()(selector + ' .box-body').replaceWith(html.find('.box-body'));
          jquery__WEBPACK_IMPORTED_MODULE_18___default()(selector + ' .box-title').replaceWith(html.find('.box-title'));

          if (jquery__WEBPACK_IMPORTED_MODULE_18___default()(selector + ' .box-footer').length > 0) {
            jquery__WEBPACK_IMPORTED_MODULE_18___default()(selector + ' .box-footer').replaceWith(html.find('.box-footer'));
          }

          jquery__WEBPACK_IMPORTED_MODULE_18___default()(selector + ' .box-body [data-toggle="tooltip"]').tooltip();
          self.widget.removeData('error-retry');

          self._hideOverlay();
        },
        dataType: 'html',
        error: function error(jqXHR, textStatus, errorThrown) {
          if (jqXHR.status !== undefined && jqXHR.status === 500) {
            if (self.widget.data('error-retry') !== undefined) {
              // TODO show error message ?
              return;
            }

            var page = jquery__WEBPACK_IMPORTED_MODULE_18___default()(selector + ' .box-tools').data('page');

            if (page > 1) {
              self.widget.data('error-retry', 1);

              var url = self._buildUrl(page - 1);

              self.loadPage(url);
            }
          }

          self._hideOverlay();
        }
      });
    }
  }, {
    key: "_buildUrl",
    value: function _buildUrl(page) {
      return this.href.replace('1', page);
    }
  }], [{
    key: "create",
    value: function create(elementId) {
      return new KimaiPaginatedBoxWidget(elementId);
    }
  }]);

  return KimaiPaginatedBoxWidget;
}();



/***/ }),

/***/ "./assets/js/widgets/KimaiReloadPageWidget.js":
/*!****************************************************!*\
  !*** ./assets/js/widgets/KimaiReloadPageWidget.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KimaiReloadPageWidget; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.is-array */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_17__);


















function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
 * This file is part of the Kimai time-tracking app.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*!
 * [KIMAI] KimaiReloadPageWidget: a simple helper to reload the page on events
 */


var KimaiReloadPageWidget = /*#__PURE__*/function () {
  function KimaiReloadPageWidget(events, fullReload) {
    _classCallCheck(this, KimaiReloadPageWidget);

    this.overlay = jquery__WEBPACK_IMPORTED_MODULE_17___default()('<div class="overlay-wrapper"><div class="overlay"><div class="fas fa-sync fa-spin"></div></div></div>');
    this.widget = jquery__WEBPACK_IMPORTED_MODULE_17___default()('div.content-wrapper');
    var self = this;

    var reloadPage = function reloadPage(event) {
      if (fullReload) {
        document.location.reload(true);
      } else {
        self.loadPage(document.location);
      }
    };

    var _iterator = _createForOfIteratorHelper(events.split(' ')),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var eventName = _step.value;
        document.addEventListener(eventName, reloadPage);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

  _createClass(KimaiReloadPageWidget, [{
    key: "_showOverlay",
    value: function _showOverlay() {
      this.widget.append(this.overlay);
    }
  }, {
    key: "_hideOverlay",
    value: function _hideOverlay() {
      jquery__WEBPACK_IMPORTED_MODULE_17___default()(this.overlay).remove();
    }
  }, {
    key: "loadPage",
    value: function loadPage(url) {
      var self = this;

      self._showOverlay();

      jquery__WEBPACK_IMPORTED_MODULE_17___default.a.ajax({
        url: url,
        data: {},
        success: function success(response) {
          jquery__WEBPACK_IMPORTED_MODULE_17___default()('section.content').replaceWith(jquery__WEBPACK_IMPORTED_MODULE_17___default()(response).find('section.content'));
          document.dispatchEvent(new Event('kimai.reloadPage'));

          self._hideOverlay();
        },
        dataType: 'html',
        error: function error(jqXHR, textStatus, errorThrown) {
          self._hideOverlay();

          document.location = url;
        }
      });
    }
  }], [{
    key: "create",
    value: function create(events, fullReload) {
      if (fullReload === undefined || fullReload === null) {
        fullReload = false;
      }

      return new KimaiReloadPageWidget(events, fullReload);
    }
  }]);

  return KimaiReloadPageWidget;
}();



/***/ }),

/***/ "./assets/sass/app.scss":
/*!******************************!*\
  !*** ./assets/sass/app.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/sass/bootstrap.scss":
/*!************************************!*\
  !*** ./assets/sass/bootstrap.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/sass/fontawesome.scss":
/*!**************************************!*\
  !*** ./assets/sass/fontawesome.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./vendor/kevinpapst/adminlte-bundle/Resources/assets/admin-lte-extensions.scss":
/*!**************************************************************************************!*\
  !*** ./vendor/kevinpapst/adminlte-bundle/Resources/assets/admin-lte-extensions.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./assets/app.js","runtime","vendors~app~calendar~chart","vendors~app~calendar","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9LaW1haUNvbmZpZ3VyYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL0tpbWFpQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9LaW1haUxvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvS2ltYWlQbHVnaW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL0tpbWFpVHJhbnNsYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL0tpbWFpV2ViTG9hZGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wbHVnaW5zL0tpbWFpQVBJLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wbHVnaW5zL0tpbWFpQVBJTGluay5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGx1Z2lucy9LaW1haUFjdGl2ZVJlY29yZHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BsdWdpbnMvS2ltYWlBY3RpdmVSZWNvcmRzRHVyYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BsdWdpbnMvS2ltYWlBamF4TW9kYWxGb3JtLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wbHVnaW5zL0tpbWFpQWxlcnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BsdWdpbnMvS2ltYWlBbHRlcm5hdGl2ZUxpbmtzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wbHVnaW5zL0tpbWFpQXV0b2NvbXBsZXRlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wbHVnaW5zL0tpbWFpQ29uZmlybWF0aW9uTGluay5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGx1Z2lucy9LaW1haURhdGF0YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGx1Z2lucy9LaW1haURhdGF0YWJsZUNvbHVtblZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BsdWdpbnMvS2ltYWlEYXRlUGlja2VyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wbHVnaW5zL0tpbWFpRGF0ZVJhbmdlUGlja2VyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wbHVnaW5zL0tpbWFpRGF0ZVRpbWVQaWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BsdWdpbnMvS2ltYWlEYXRlVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BsdWdpbnMvS2ltYWlFdmVudC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGx1Z2lucy9LaW1haUZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BsdWdpbnMvS2ltYWlGb3JtU2VsZWN0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wbHVnaW5zL0tpbWFpTXVsdGlVcGRhdGVUYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGx1Z2lucy9LaW1haVJlY2VudEFjdGl2aXRpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BsdWdpbnMvS2ltYWlSZWR1Y2VkQ2xpY2tIYW5kbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wbHVnaW5zL0tpbWFpU2VsZWN0RGF0YUFQSS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGx1Z2lucy9LaW1haVRoZW1lSW5pdGlhbGl6ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BsdWdpbnMvS2ltYWlUb29sYmFyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy93aWRnZXRzL0tpbWFpQ29va2llcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvd2lkZ2V0cy9LaW1haVBhZ2luYXRlZEJveFdpZGdldC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvd2lkZ2V0cy9LaW1haVJlbG9hZFBhZ2VXaWRnZXQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Nhc3MvYXBwLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Nhc3MvYm9vdHN0cmFwLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Nhc3MvZm9udGF3ZXNvbWUuc2NzcyIsIndlYnBhY2s6Ly8vLi92ZW5kb3Iva2V2aW5wYXBzdC9hZG1pbmx0ZS1idW5kbGUvUmVzb3VyY2VzL2Fzc2V0cy9hZG1pbi1sdGUtZXh0ZW5zaW9ucy5zY3NzIl0sIm5hbWVzIjpbIiQiLCJyZXF1aXJlIiwiZ2xvYmFsIiwialF1ZXJ5IiwiTW9tZW50IiwibW9tZW50IiwiU29ydGFibGUiLCJBZG1pbkxURSIsIm9wdGlvbnMiLCJLaW1haVBhZ2luYXRlZEJveFdpZGdldCIsIktpbWFpUmVsb2FkUGFnZVdpZGdldCIsIktpbWFpQ29va2llcyIsIktpbWFpQ29uZmlndXJhdGlvbiIsImNvbmZpZ3VyYXRpb25zIiwiX2NvbmZpZ3VyYXRpb25zIiwibmFtZSIsIktpbWFpQ29udGFpbmVyIiwiY29uZmlndXJhdGlvbiIsInRyYW5zbGF0aW9uIiwiRXJyb3IiLCJfY29uZmlndXJhdGlvbiIsIktpbWFpVHJhbnNsYXRpb24iLCJfdHJhbnNsYXRpb24iLCJfcGx1Z2lucyIsInBsdWdpbiIsIktpbWFpUGx1Z2luIiwic2V0Q29udGFpbmVyIiwicHVzaCIsImdldElkIiwiS2ltYWlMb2FkZXIiLCJ0cmFuc2xhdGlvbnMiLCJsb2NhbGUiLCJyZXBsYWNlIiwidG9Mb3dlckNhc2UiLCJraW1haSIsInJlZ2lzdGVyUGx1Z2luIiwiS2ltYWlFdmVudCIsIktpbWFpQVBJIiwiS2ltYWlBbGVydCIsIktpbWFpRGF0ZVV0aWxzIiwiS2ltYWlGb3JtU2VsZWN0IiwiS2ltYWlDb25maXJtYXRpb25MaW5rIiwiS2ltYWlBY3RpdmVSZWNvcmRzRHVyYXRpb24iLCJLaW1haURhdGF0YWJsZUNvbHVtblZpZXciLCJLaW1haURhdGVSYW5nZVBpY2tlciIsIktpbWFpRGF0ZVRpbWVQaWNrZXIiLCJLaW1haURhdGVQaWNrZXIiLCJLaW1haURhdGF0YWJsZSIsIktpbWFpVG9vbGJhciIsIktpbWFpU2VsZWN0RGF0YUFQSSIsIktpbWFpQWx0ZXJuYXRpdmVMaW5rcyIsIktpbWFpQWpheE1vZGFsRm9ybSIsIktpbWFpUmVjZW50QWN0aXZpdGllcyIsIktpbWFpQWN0aXZlUmVjb3JkcyIsIktpbWFpQVBJTGluayIsIktpbWFpQXV0b2NvbXBsZXRlIiwiS2ltYWlGb3JtIiwiS2ltYWlUaGVtZUluaXRpYWxpemVyIiwiS2ltYWlNdWx0aVVwZGF0ZVRhYmxlIiwiZ2V0UGx1Z2luIiwidHJpZ2dlciIsImdldFBsdWdpbnMiLCJtYXAiLCJpbml0IiwiY29yZSIsIl9jb3JlIiwiZ2V0Q29udGFpbmVyIiwiZ2V0Q29uZmlndXJhdGlvbiIsImdldCIsIl90cmFuc2xhdGlvbnMiLCJyb290IiwiZmFjdG9yeSIsImRlZmluZSIsIktpbWFpV2ViTG9hZGVyIiwibW9kdWxlIiwiZXhwb3J0cyIsInNlbGYiLCJ1cmwiLCJkYXRhIiwiY2FsbGJhY2tTdWNjZXNzIiwiY2FsbGJhY2tFcnJvciIsImFqYXgiLCJoZWFkZXJzIiwibWV0aG9kIiwiZGF0YVR5cGUiLCJzdWNjZXNzIiwiZXJyb3IiLCJ1bmRlZmluZWQiLCJnZXRQb3N0RXJyb3JIYW5kbGVyIiwiZ2V0UGF0Y2hFcnJvckhhbmRsZXIiLCJnZXREZWxldGVFcnJvckhhbmRsZXIiLCJ4aHIiLCJlcnIiLCJoYW5kbGVFcnJvciIsIm1lc3NhZ2UiLCJyZXN1bHRFcnJvciIsInJlc3BvbnNlSlNPTiIsInN0YXR1cyIsImVycm9ycyIsImNvbGxlY3RlZCIsImNoaWxkcmVuIiwiZmllbGQiLCJ0bXBGaWVsZCIsImhhc093blByb3BlcnR5IiwibGVuZ3RoIiwic3RhdHVzVGV4dCIsInNlbGVjdG9yIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJ0YXJnZXQiLCJtYXRjaGVzIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJhdHRyaWJ1dGVzIiwiZGF0YXNldCIsImdldEF0dHJpYnV0ZSIsInF1ZXN0aW9uIiwidmFsdWUiLCJfY2FsbEFwaSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwicGFyZW50Tm9kZSIsImV2ZW50TmFtZSIsIkFQSSIsImV2ZW50aW5nIiwiYWxlcnQiLCJzdWNjZXNzSGFuZGxlIiwicmVzdWx0IiwibXNnU3VjY2VzcyIsImVycm9ySGFuZGxlIiwibXNnRXJyb3IiLCJwYXlsb2FkIiwicGF0Y2giLCJwb3N0Iiwic2VsZWN0b3JFbXB0eSIsIm1lbnUiLCJxdWVyeVNlbGVjdG9yIiwiZHJvcGRvd24iLCJpdGVtTGlzdCIsImxhYmVsIiwiaGFuZGxlIiwicmVsb2FkQWN0aXZlUmVjb3JkcyIsImlubmVySFRNTCIsImhhc0VudHJpZXMiLCJtZW51RW1wdHkiLCJzdHlsZSIsImRpc3BsYXkiLCJlbnRyaWVzIiwiX3RvZ2dsZU1lbnUiLCJpbm5lclRleHQiLCJlbXB0eUxpc3QiLCJodG1sVG9JbnNlcnQiLCJkdXJhdGlvbnMiLCJ0aW1lc2hlZXQiLCJpZCIsImFjdGl2aXR5IiwiYmVnaW4iLCJmb3JtYXREdXJhdGlvbiIsImR1cmF0aW9uIiwicHJvamVjdCIsImN1c3RvbWVyIiwid2FybmluZyIsInVwZGF0ZVJlY29yZHMiLCJzZXRFbnRyaWVzIiwidXBkYXRlQnJvd3NlclRpdGxlIiwiX3VwZGF0ZXNIYW5kbGVyIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiYWN0aXZlUmVjb3JkcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0aXRsZSIsInJlY29yZCIsInNpbmNlIiwiZm9ybWF0IiwidGV4dENvbnRlbnQiLCJzaGlmdCIsInByZWZpeCIsInNsaWNlIiwiRGF0ZSIsImRpZmYiLCJob3VycyIsInBhcnNlSW50IiwiYXNIb3VycyIsInRvU3RyaW5nIiwibWludXRlcyIsInNlY29uZHMiLCJzdWJzdHIiLCJpc0RpcnR5IiwibW9kYWwiLCJvbiIsImUiLCJtc2ciLCJnZXRUcmFuc2xhdGlvbiIsInByZXBlbmQiLCJoYXNDbGFzcyIsIl9nZXRGb3JtSWRlbnRpZmllciIsIm9mZiIsIl9pc0RpcnR5SGFuZGxlciIsImRlc3Ryb3lGb3JtIiwicmVwbGFjZVdpdGgiLCJmb3JtQXV0b2ZvY3VzIiwiZmluZCIsImZpbHRlciIsImZvY3VzIiwiZGVsYXkiLCJfYWRkQ2xpY2tIYW5kbGVyIiwiaHJlZiIsIm9wZW5VcmxJbk1vZGFsIiwiZXJyb3JIYW5kbGVyIiwid2luZG93IiwibG9jYXRpb24iLCJodG1sIiwiX29wZW5Gb3JtSW5Nb2RhbCIsImZvcm1JZGVudGlmaWVyIiwiZmxhc2hFcnJvcklkZW50aWZpZXIiLCJmbGFzaE1lc3NhZ2VJZGVudGlmaWVyIiwiZm9ybSIsInJlbW90ZU1vZGFsIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImFjdGl2YXRlRm9ybSIsImZsYXNoTWVzc2FnZXMiLCJlbmZvcmNlTW9kYWxGb2N1c0ZuIiwiZm4iLCJDb25zdHJ1Y3RvciIsInByb3RvdHlwZSIsImVuZm9yY2VGb2N1cyIsImJ0biIsImJ1dHRvbiIsImF0dHIiLCJldmVudHMiLCJ0eXBlIiwic2VyaWFsaXplIiwiaGFzRmllbGRFcnJvciIsImhhc0Zvcm1FcnJvciIsImhhc0ZsYXNoRXJyb3IiLCJmbGFzaE1lc3NhZ2UiLCJmbGFzaENvbnRlbnQiLCJjb250ZW50cyIsInNldFRpbWVvdXQiLCJLaW1haVJlZHVjZWRDbGlja0hhbmRsZXIiLCJoYXMiLCJBcnJheSIsImlzQXJyYXkiLCJTd2FsIiwiZmlyZSIsImljb24iLCJqb2luIiwidGV4dCIsIl9zaG93IiwiX3RvYXN0IiwidGltZXIiLCJ0aW1lclByb2dyZXNzQmFyIiwidG9hc3QiLCJwb3NpdGlvbiIsInNob3dDb25maXJtQnV0dG9uIiwiY2FsbGJhY2siLCJzaG93Q2FuY2VsQnV0dG9uIiwiY29uZmlybUJ1dHRvblRleHQiLCJjYW5jZWxCdXR0b25UZXh0IiwidGhlbiIsIm1pbkNoYXJzIiwidmFsIiwic3BsaXQiLCJ0ZXJtIiwic3BsaXRUYWdMaXN0IiwicG9wIiwiZWFjaCIsImluZGV4IiwiY3VycmVudEZpZWxkIiwiYXBpVXJsIiwia2V5Q29kZSIsInVpIiwiVEFCIiwiYXV0b2NvbXBsZXRlIiwiYWN0aXZlIiwic291cmNlIiwicmVxdWVzdCIsInJlc3BvbnNlIiwibGFzdEVudHJ5IiwiZXh0cmFjdExhc3RUYWciLCJzZWFyY2giLCJzZWxlY3QiLCJ0ZXJtcyIsImluY2x1ZGVzIiwiaXRlbSIsInJlbW92ZURhdGEiLCJhY3Rpb24iLCJzdWJtaXQiLCJjb250ZW50QXJlYVNlbGVjdG9yIiwidGFibGVTZWxlY3RvciIsImNvbnRlbnRBcmVhIiwiZGF0YVRhYmxlIiwiZml4RHJvcGRvd25zIiwicmVsb2FkRGF0YXRhYmxlIiwidG9vbGJhclNlbGVjdG9yIiwiZ2V0U2VsZWN0b3IiLCJsb2FkaW5nIiwiYXBwZW5kIiwiZm9ybURhdGEiLCJlbGVtZW50IiwiZG9jSGVpZ2h0IiwiaGVpZ2h0IiwicGFyZW50Iiwib2Zmc2V0IiwidG9wIiwib3V0ZXJIZWlnaHQiLCJkYXRhQXR0cmlidXRlIiwiZ2V0RWxlbWVudEJ5SWQiLCJiaW5kQnV0dG9ucyIsInNhdmVWaXNpYmlsaXR5IiwicmVzZXRWaXNpYmlsaXR5IiwiY2hlY2tib3giLCJjaGFuZ2VWaXNpYmlsaXR5IiwiY2hlY2tlZCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwic2V0dGluZ3MiLCJDb29raWVzIiwic2V0IiwiSlNPTiIsInN0cmluZ2lmeSIsImV4cGlyZXMiLCJTYW1lU2l0ZSIsInJlbW92ZSIsImNsaWNrIiwiY29sdW1uTmFtZSIsInRhYmxlIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImNvbHVtbiIsImZvdW5kQ29sdW1uIiwiY29sdW1uRWxlbWVudCIsImNvbnNvbGUiLCJsb2ciLCJyb3dFbGVtZW50IiwiYWRkIiwiVFJBTlNMQVRFIiwiREFURV9VVElMUyIsImZpcnN0RG93IiwibG9jYWxlRm9ybWF0IiwiZGF0ZXJhbmdlcGlja2VyIiwic2luZ2xlRGF0ZVBpY2tlciIsInNob3dEcm9wZG93bnMiLCJhdXRvVXBkYXRlSW5wdXQiLCJmaXJzdERheSIsImFwcGx5TGFiZWwiLCJjYW5jZWxMYWJlbCIsImN1c3RvbVJhbmdlTGFiZWwiLCJkYXlzT2ZXZWVrIiwiZ2V0V2Vla0RheXNTaG9ydCIsIm1vbnRoTmFtZXMiLCJnZXRNb250aE5hbWVzIiwiZXYiLCJwaWNrZXIiLCJzdGFydERhdGUiLCJzZXBhcmF0b3IiLCJyYW5nZXNMaXN0Iiwic3VidHJhY3QiLCJzdGFydE9mIiwiZW5kT2YiLCJhdXRvQXBwbHkiLCJsaW5rZWRDYWxlbmRhcnMiLCJyYW5nZXMiLCJhbHdheXNTaG93Q2FsZW5kYXJzIiwiZW5kRGF0ZSIsImlzMjRob3VycyIsInRpbWVQaWNrZXIiLCJ0aW1lUGlja2VyMjRIb3VyIiwibG9jYWxlRGF0YSIsIndlZWtkYXlzU2hvcnQiLCJtb250aHMiLCJkZXRhaWxzIiwidHJpZ2dlckV2ZW50IiwiRXZlbnQiLCJDdXN0b21FdmVudCIsImRldGFpbCIsImRpc3BhdGNoRXZlbnQiLCJmb3JtU2VsZWN0b3IiLCJjb250YWluZXIiLCJhY3RpdmF0ZURhdGVSYW5nZVBpY2tlciIsImFjdGl2YXRlRGF0ZVRpbWVQaWNrZXIiLCJhY3RpdmF0ZURhdGVQaWNrZXIiLCJhY3RpdmF0ZUF1dG9jb21wbGV0ZSIsImFjdGl2YXRlU2VsZWN0UGlja2VyIiwiZGVzdHJveVNlbGVjdFBpY2tlciIsImRlc3Ryb3lBdXRvY29tcGxldGUiLCJkZXN0cm95RGF0ZVBpY2tlciIsImRlc3Ryb3lEYXRlVGltZVBpY2tlciIsImRlc3Ryb3lEYXRlUmFuZ2VQaWNrZXIiLCJlbGVtZW50U2VsZWN0b3IiLCJkcm9wZG93blBhcmVudCIsIm1hdGNoZXIiLCJwYXJhbXMiLCJ0cmltIiwiaGFzQ2hpbGRyZW4iLCJ0b1VwcGVyQ2FzZSIsIm9yaWdpbmFsIiwiZm91bmRBbGwiLCJmb3VuZE9uZSIsIm1pc3NpbmdUZXJtcyIsImZvckVhY2giLCJpbmRleE9mIiwibmV3UGFyYW1zIiwiZXh0ZW5kIiwibWF0Y2giLCJjIiwiY2hpbGQiLCJzcGxpY2UiLCJsYW5ndWFnZSIsInRoZW1lIiwic2VsZWN0MiIsInNlbGVjdElkZW50aWZpZXIiLCJlbXB0eU9wdGlvbiIsInNlbGVjdGVkVmFsdWUiLCJlbmQiLCJfY3JlYXRlT3B0aW9uIiwiZW1wdHlPcHRzIiwiT2JqZWN0Iiwia2V5IiwiZW50aXR5Iiwib3B0R3JvdXAiLCJfY3JlYXRlT3B0Z3JvdXAiLCJhcHBlbmRDaGlsZCIsIm9wdGlvbiIsImNyZWF0ZUVsZW1lbnQiLCJwcm9wIiwidG9nZ2xlRm9ybSIsInNlbGVjdGVkSXRlbSIsInNlbGVjdGVkVmFsIiwic2VsZWN0ZWRUZXh0IiwiaWRzIiwiZ2V0U2VsZWN0ZWRJZHMiLCJpIiwic2hvdyIsImhpZGUiLCJyZWxvYWRSZWNlbnRBY3Rpdml0aWVzIiwiaXNDb250ZW50RWRpdGFibGUiLCJjdXJyZW50VGFyZ2V0IiwiYWN0aXZhdGVBcGlTZWxlY3RzIiwidGFyZ2V0U2VsZWN0IiwiZm9ybVByZWZpeCIsInBhcmVudHMiLCJmaXJzdCIsIm5ld0FwaVVybCIsIl9idWlsZFVybFdpdGhGb3JtRmllbGRzIiwic2VsZWN0VmFsdWUiLCJfdXBkYXRlU2VsZWN0IiwicmVtb3ZlQXR0ciIsImRlY29kZWQiLCJkZWNvZGVVUklDb21wb25lbnQiLCJ0ZXN0IiwidGFyZ2V0RmllbGQiLCJuZXdWYWx1ZSIsIkhUTUw1X0ZNVCIsIkRBVEVUSU1FX0xPQ0FMX1NFQ09ORFMiLCJpc1ZhbGlkIiwic2VsZWN0TmFtZSIsImFwaURhdGEiLCJwYXJlbnRUaXRsZSIsIm9yZGVyZWQiLCJrZXlzIiwic29ydCIsInVwZGF0ZU9wdGlvbnMiLCJyZWdpc3Rlckdsb2JhbEFqYXhFcnJvckhhbmRsZXIiLCJyZWdpc3RlckF1dG9tYXRpY0FsZXJ0UmVtb3ZlIiwidG9vbHRpcCIsImxvZ2luVXJsIiwiYWpheEVycm9yIiwianF4aHIiLCJ0aHJvd25FcnJvciIsImxvZ2luUmVxdWlyZWQiLCJnZXRSZXNwb25zZUhlYWRlciIsImludGVydmFsIiwiX2FsZXJ0UmVtb3ZlSGFuZGxlciIsImhpZGVBbGVydCIsImZvcm1TdWJtaXRBY3Rpb25DbGFzcyIsImFjdGlvbkNsYXNzIiwiRVZFTlQiLCJfcmVnaXN0ZXJQYWdpbmF0aW9uIiwiX3JlZ2lzdGVyU29ydGFibGVUYWJsZXMiLCJfcmVnaXN0ZXJBbHRlcm5hdGl2ZVN1Ym1pdEFjdGlvbnMiLCJjaGFuZ2UiLCJ0cmlnZ2VyQ2hhbmdlIiwicmVsb2FkIiwiYWN0aW9uQnRuQ2xhc3MiLCJwcmV2QWN0aW9uIiwicHJldk1ldGhvZCIsIiRoZWFkZXIiLCJvcmRlciIsIm9yZGVyQnkiLCJwYWdlciIsInVybFBhcnRzIiwicGFnZSIsInZhbHVlcyIsImdldEpTT04iLCJib3hJZCIsIm92ZXJsYXkiLCJ3aWRnZXQiLCJyZWxvYWRQYWdlIiwiX2J1aWxkVXJsIiwibG9hZFBhZ2UiLCJfc2hvd092ZXJsYXkiLCJfaGlkZU92ZXJsYXkiLCJqcVhIUiIsInRleHRTdGF0dXMiLCJlcnJvclRocm93biIsImVsZW1lbnRJZCIsImZ1bGxSZWxvYWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsQ0FBQyxHQUFHQyxtQkFBTyxDQUFDLG9EQUFELENBQWpCOztBQUNBQyxNQUFNLENBQUNGLENBQVAsR0FBV0UsTUFBTSxDQUFDQyxNQUFQLEdBQWdCSCxDQUEzQjs7QUFFQUMsbUJBQU8sQ0FBQyxxRkFBRCxDQUFQOztBQUNBQSxtQkFBTyxDQUFDLGdGQUFELENBQVA7O0FBRUFBLG1CQUFPLENBQUMsMERBQUQsQ0FBUDs7QUFDQUEsbUJBQU8sQ0FBQywwRUFBRCxDQUFQOztBQUNBQSxtQkFBTyxDQUFDLDBFQUFELENBQVA7O0FBQ0FBLG1CQUFPLENBQUMsMEVBQUQsQ0FBUDs7QUFDQUEsbUJBQU8sQ0FBQywwRUFBRCxDQUFQOztBQUNBQSxtQkFBTyxDQUFDLDBFQUFELENBQVA7O0FBQ0FBLG1CQUFPLENBQUMsMEVBQUQsQ0FBUDs7QUFDQUEsbUJBQU8sQ0FBQywwRUFBRCxDQUFQOztBQUNBQSxtQkFBTyxDQUFDLDBFQUFELENBQVA7O0FBQ0FBLG1CQUFPLENBQUMsMEVBQUQs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QUs7QUFDVixVQUFNRCxJQUFJLEdBQUcsSUFBYjs7QUFFQUEsVUFBSSxDQUFDeWEsWUFBTDs7QUFFQWxmLG9EQUFNLENBQUM4RSxJQUFQLENBQVk7QUFDUkosV0FBRyxFQUFFQSxHQURHO0FBRVJDLFlBQUksRUFBRSxFQUZFO0FBR1JPLGVBQU8sRUFBRSxpQkFBVWtNLFFBQVYsRUFBb0I7QUFDekJwUix3REFBTSxDQUFDLGlCQUFELENBQU4sQ0FBMEJxTSxXQUExQixDQUNJck0sOENBQU0sQ0FBQ29SLFFBQUQsQ0FBTixDQUFpQjdFLElBQWpCLENBQXNCLGlCQUF0QixDQURKO0FBR0EvRixrQkFBUSxDQUFDNlEsYUFBVCxDQUF1QixJQUFJSCxLQUFKLENBQVUsa0JBQVYsQ0FBdkI7O0FBQ0F6UyxjQUFJLENBQUMwYSxZQUFMO0FBQ0gsU0FUTztBQVVSbGEsZ0JBQVEsRUFBRSxNQVZGO0FBV1JFLGFBQUssRUFBRSxlQUFTaWEsS0FBVCxFQUFnQkMsVUFBaEIsRUFBNEJDLFdBQTVCLEVBQXlDO0FBQzVDN2EsY0FBSSxDQUFDMGEsWUFBTDs7QUFDQTNZLGtCQUFRLENBQUN3RyxRQUFULEdBQW9CdEksR0FBcEI7QUFDSDtBQWRPLE9BQVo7QUFnQkg7OzsyQkFwQ2EwSixNLEVBQVFvUixVLEVBQVk7QUFDOUIsVUFBSUEsVUFBVSxLQUFLcGEsU0FBZixJQUE0Qm9hLFVBQVUsS0FBSyxJQUEvQyxFQUFxRDtBQUNqREEsa0JBQVUsR0FBRyxLQUFiO0FBQ0g7O0FBQ0QsYUFBTyxJQUFJamYscUJBQUosQ0FBMEI2TixNQUExQixFQUFrQ29SLFVBQWxDLENBQVA7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q0wsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLS0tLS0tLS0tLS0tLS0tLS0tLSBJTkxJTkVEIEFETUlOLUxURSBERUZJTklUSU9OUyAtLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIHJlcXVpcmUoJy4uL3ZlbmRvci9rZXZpbnBhcHN0L2FkbWlubHRlLWJ1bmRsZS9SZXNvdXJjZXMvYXNzZXRzL2FkbWluLWx0ZScpO1xyXG4vLyB0aGlzIHdhcyByZXBsYWNlZCB0byBzYXZlIGFyb3VuZCAzMDBrYiBieTpcclxuLy8gLSByZW1vdmluZyBtb21lbnQgbG9jYWxlcyB3aGljaCBhcmUgbm90IHVzZWRcclxuLy8gLSByZW1vdmluZyBmdWxsY2FsZW5kYXIgbG9jYWxlcyB3aGljaCBhcmUgbm90IHVzZWRcclxuLy8gLSByZW1vdmluZyBpY2hlY2sgd2hpY2ggaXMgbm90IHVzZWRcclxuLy8gLSByZW1vdmluZyBqcXVlcnktdWkgd2hpY2ggaXMgbm90IHVzZWRcclxuXHJcbmNvbnN0ICQgPSByZXF1aXJlKCdqcXVlcnknKTtcclxuZ2xvYmFsLiQgPSBnbG9iYWwualF1ZXJ5ID0gJDtcclxuXHJcbnJlcXVpcmUoJ2Jvb3RzdHJhcC1zYXNzJyk7XHJcbnJlcXVpcmUoJ2pxdWVyeS1zbGltc2Nyb2xsJyk7XHJcblxyXG5yZXF1aXJlKCdzZWxlY3QyJyk7XHJcbnJlcXVpcmUoJ3NlbGVjdDIvZGlzdC9qcy9pMThuL2FyJyk7XHJcbnJlcXVpcmUoJ3NlbGVjdDIvZGlzdC9qcy9pMThuL2NzJyk7XHJcbnJlcXVpcmUoJ3NlbGVjdDIvZGlzdC9qcy9pMThuL2RhJyk7XHJcbnJlcXVpcmUoJ3NlbGVjdDIvZGlzdC9qcy9pMThuL2RlJyk7XHJcbnJlcXVpcmUoJ3NlbGVjdDIvZGlzdC9qcy9pMThuL2VzJyk7XHJcbnJlcXVpcmUoJ3NlbGVjdDIvZGlzdC9qcy9pMThuL2V1Jyk7XHJcbnJlcXVpcmUoJ3NlbGVjdDIvZGlzdC9qcy9pMThuL2ZpJyk7XHJcbnJlcXVpcmUoJ3NlbGVjdDIvZGlzdC9qcy9pMThuL2ZyJyk7XHJcbnJlcXVpcmUoJ3NlbGVjdDIvZGlzdC9qcy9pMThuL2hlJyk7XHJcbnJlcXVpcmUoJ3NlbGVjdDIvZGlzdC9qcy9pMThuL2h1Jyk7XHJcbnJlcXVpcmUoJ3NlbGVjdDIvZGlzdC9qcy9pMThuL2l0Jyk7XHJcbnJlcXVpcmUoJ3NlbGVjdDIvZGlzdC9qcy9pMThuL2phJyk7XHJcbnJlcXVpcmUoJ3NlbGVjdDIvZGlzdC9qcy9pMThuL2tvJyk7XHJcbnJlcXVpcmUoJ3NlbGVjdDIvZGlzdC9qcy9pMThuL25sJyk7XHJcbnJlcXVpcmUoJ3NlbGVjdDIvZGlzdC9qcy9pMThuL3BsJyk7XHJcbnJlcXVpcmUoJ3NlbGVjdDIvZGlzdC9qcy9pMThuL3B0Jyk7XHJcbnJlcXVpcmUoJ3NlbGVjdDIvZGlzdC9qcy9pMThuL3B0LUJSJyk7XHJcbnJlcXVpcmUoJ3NlbGVjdDIvZGlzdC9qcy9pMThuL3JvJyk7XHJcbnJlcXVpcmUoJ3NlbGVjdDIvZGlzdC9qcy9pMThuL3J1Jyk7XHJcbnJlcXVpcmUoJ3NlbGVjdDIvZGlzdC9qcy9pMThuL3NrJyk7XHJcbnJlcXVpcmUoJ3NlbGVjdDIvZGlzdC9qcy9pMThuL3N2Jyk7XHJcbnJlcXVpcmUoJ3NlbGVjdDIvZGlzdC9qcy9pMThuL3RyJyk7XHJcbnJlcXVpcmUoJ3NlbGVjdDIvZGlzdC9qcy9pMThuL3ZpJyk7XHJcbnJlcXVpcmUoJ3NlbGVjdDIvZGlzdC9qcy9pMThuL3poLUNOJyk7XHJcblxyXG5jb25zdCBNb21lbnQgPSByZXF1aXJlKCdtb21lbnQnKTtcclxuZ2xvYmFsLm1vbWVudCA9IE1vbWVudDtcclxucmVxdWlyZSgnbW9tZW50L2xvY2FsZS9hcicpO1xyXG5yZXF1aXJlKCdtb21lbnQvbG9jYWxlL2NzJyk7XHJcbnJlcXVpcmUoJ21vbWVudC9sb2NhbGUvZGEnKTtcclxucmVxdWlyZSgnbW9tZW50L2xvY2FsZS9kZScpO1xyXG5yZXF1aXJlKCdtb21lbnQvbG9jYWxlL2RlLWF0Jyk7XHJcbnJlcXVpcmUoJ21vbWVudC9sb2NhbGUvZGUtY2gnKTtcclxucmVxdWlyZSgnbW9tZW50L2xvY2FsZS9lbycpO1xyXG5yZXF1aXJlKCdtb21lbnQvbG9jYWxlL2VzJyk7XHJcbnJlcXVpcmUoJ21vbWVudC9sb2NhbGUvZXUnKTtcclxucmVxdWlyZSgnbW9tZW50L2xvY2FsZS9maScpO1xyXG5yZXF1aXJlKCdtb21lbnQvbG9jYWxlL2ZyJyk7XHJcbnJlcXVpcmUoJ21vbWVudC9sb2NhbGUvaGUnKTtcclxucmVxdWlyZSgnbW9tZW50L2xvY2FsZS9odScpO1xyXG5yZXF1aXJlKCdtb21lbnQvbG9jYWxlL2l0Jyk7XHJcbnJlcXVpcmUoJ21vbWVudC9sb2NhbGUvamEnKTtcclxucmVxdWlyZSgnbW9tZW50L2xvY2FsZS9rbycpO1xyXG5yZXF1aXJlKCdtb21lbnQvbG9jYWxlL25sJyk7XHJcbnJlcXVpcmUoJ21vbWVudC9sb2NhbGUvcGwnKTtcclxucmVxdWlyZSgnbW9tZW50L2xvY2FsZS9wdCcpO1xyXG5yZXF1aXJlKCdtb21lbnQvbG9jYWxlL3B0LWJyJyk7XHJcbnJlcXVpcmUoJ21vbWVudC9sb2NhbGUvcm8nKTtcclxucmVxdWlyZSgnbW9tZW50L2xvY2FsZS9ydScpO1xyXG5yZXF1aXJlKCdtb21lbnQvbG9jYWxlL3NrJyk7XHJcbnJlcXVpcmUoJ21vbWVudC9sb2NhbGUvc3YnKTtcclxucmVxdWlyZSgnbW9tZW50L2xvY2FsZS90cicpO1xyXG5yZXF1aXJlKCdtb21lbnQvbG9jYWxlL3ZpJyk7XHJcbnJlcXVpcmUoJ21vbWVudC9sb2NhbGUvemgtY24nKTtcclxuXHJcbnJlcXVpcmUoJ2RhdGVyYW5nZXBpY2tlcicpO1xyXG5cclxuY29uc3QgU29ydGFibGUgPSByZXF1aXJlKCdzb3J0YWJsZWpzL1NvcnRhYmxlLm1pbicpO1xyXG5nbG9iYWwuU29ydGFibGUgPSBTb3J0YWJsZTtcclxuXHJcbi8vIC0tLS0tLSBBZG1pbkxURSBmcmFtZXdvcmsgLS0tLS0tXHJcbnJlcXVpcmUoJy4vc2Fzcy9ib290c3RyYXAuc2NzcycpO1xyXG5yZXF1aXJlKCcuL3Nhc3MvZm9udGF3ZXNvbWUuc2NzcycpO1xyXG5yZXF1aXJlKCdhZG1pbi1sdGUvZGlzdC9jc3MvQWRtaW5MVEUubWluLmNzcycpO1xyXG5yZXF1aXJlKCdhZG1pbi1sdGUvZGlzdC9jc3Mvc2tpbnMvX2FsbC1za2lucy5jc3MnKTtcclxucmVxdWlyZSgnLi4vdmVuZG9yL2tldmlucGFwc3QvYWRtaW5sdGUtYnVuZGxlL1Jlc291cmNlcy9hc3NldHMvYWRtaW4tbHRlLWV4dGVuc2lvbnMuc2NzcycpO1xyXG5cclxuZ2xvYmFsLiQuQWRtaW5MVEUgPSB7fTtcclxuZ2xvYmFsLiQuQWRtaW5MVEUub3B0aW9ucyA9IHt9O1xyXG5yZXF1aXJlKCdhZG1pbi1sdGUvZGlzdC9qcy9hZG1pbmx0ZS5taW4nKTtcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLSBJTkxJTkVEIEFETUlOLUxURSBERUZJTklUSU9OUyAtLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxucmVxdWlyZSgnLi9zYXNzL2FwcC5zY3NzJyk7XHJcblxyXG4vLyAtLS0tLS0gS2ltYWkgaXRzZWxmIC0tLS0tLVxyXG5yZXF1aXJlKCcuL2pzL0tpbWFpV2ViTG9hZGVyLmpzJyk7XHJcbmdsb2JhbC5LaW1haVBhZ2luYXRlZEJveFdpZGdldCA9IHJlcXVpcmUoJy4vanMvd2lkZ2V0cy9LaW1haVBhZ2luYXRlZEJveFdpZGdldCcpLmRlZmF1bHQ7XHJcbmdsb2JhbC5LaW1haVJlbG9hZFBhZ2VXaWRnZXQgPSByZXF1aXJlKCcuL2pzL3dpZGdldHMvS2ltYWlSZWxvYWRQYWdlV2lkZ2V0JykuZGVmYXVsdDtcclxuZ2xvYmFsLktpbWFpQ29va2llcyA9IHJlcXVpcmUoJy4vanMvd2lkZ2V0cy9LaW1haUNvb2tpZXMnKS5kZWZhdWx0O1xyXG5cclxuLy8gLS0tLS0tIEF1dG9jb21wbGV0ZSBmb3IgdGFncyBvbmx5IC0tLS0tLVxyXG5yZXF1aXJlKCdqcXVlcnktdWkvdWkvd2lkZ2V0cy9hdXRvY29tcGxldGUnKTtcclxuIiwiLypcclxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIEtpbWFpIHRpbWUtdHJhY2tpbmcgYXBwLlxyXG4gKlxyXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxyXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cclxuICovXHJcblxyXG4vKiFcclxuICogW0tJTUFJXSBLaW1haUNvbmZpZ3VyYXRpb246IGhhbmRsaW5nIGFsbCBjb25maWd1cmF0aW9uIGFuZCBydW50aW1lIHNldHRpbmdzXHJcbiAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2ltYWlDb25maWd1cmF0aW9uIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWd1cmF0aW9ucykge1xyXG4gICAgICAgIHRoaXMuX2NvbmZpZ3VyYXRpb25zID0gY29uZmlndXJhdGlvbnM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0KG5hbWUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY29uZmlndXJhdGlvbnNbbmFtZV07XHJcbiAgICB9XHJcblxyXG4gICAgaGFzKG5hbWUpIHtcclxuICAgICAgICByZXR1cm4gbmFtZSBpbiB0aGlzLl9jb25maWd1cmF0aW9ucztcclxuICAgIH1cclxuXHJcbn1cclxuIiwiLypcclxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIEtpbWFpIHRpbWUtdHJhY2tpbmcgYXBwLlxyXG4gKlxyXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxyXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cclxuICovXHJcblxyXG4vKiFcclxuICogW0tJTUFJXSBLaW1haUNvbnRhaW5lclxyXG4gKlxyXG4gKiBTZXJ2aWNlQ29udGFpbmVyIGZvciBLaW1haVxyXG4gKi9cclxuXHJcbmltcG9ydCBLaW1haUNvbmZpZ3VyYXRpb24gZnJvbSAnLi9LaW1haUNvbmZpZ3VyYXRpb24nO1xyXG5pbXBvcnQgS2ltYWlUcmFuc2xhdGlvbiBmcm9tICcuL0tpbWFpVHJhbnNsYXRpb24nO1xyXG5pbXBvcnQgS2ltYWlQbHVnaW4gZnJvbSAnLi9LaW1haVBsdWdpbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLaW1haUNvbnRhaW5lciB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYSBuZXcgQ29udGFpbmVyIHdpdGggdGhlIGdpdmVuIGNvbmZpZ3VyYXRpb25zIGFuZCB0cmFuc2xhdGlvbnMuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ3VyYXRpb25cclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB0cmFuc2xhdGlvblxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWd1cmF0aW9uLCB0cmFuc2xhdGlvbikge1xyXG4gICAgICAgIGlmICghKGNvbmZpZ3VyYXRpb24gaW5zdGFuY2VvZiBLaW1haUNvbmZpZ3VyYXRpb24pKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ29uZmlndXJhdGlvbiBuZWVkcyB0byBhIEtpbWFpQ29uZmlndXJhdGlvbiBpbnN0YW5jZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9jb25maWd1cmF0aW9uID0gY29uZmlndXJhdGlvbjtcclxuXHJcbiAgICAgICAgaWYgKCEodHJhbnNsYXRpb24gaW5zdGFuY2VvZiBLaW1haVRyYW5zbGF0aW9uKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbmZpZ3VyYXRpb24gbmVlZHMgdG8gYSBLaW1haVRyYW5zbGF0aW9uIGluc3RhbmNlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3RyYW5zbGF0aW9uID0gdHJhbnNsYXRpb247XHJcbiAgICAgICAgdGhpcy5fcGx1Z2lucyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVnaXN0ZXIgYSBuZXcgUGx1Z2luLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7S2ltYWlQbHVnaW59IHBsdWdpblxyXG4gICAgICogQHJldHVybnMge0tpbWFpUGx1Z2lufVxyXG4gICAgICovXHJcbiAgICByZWdpc3RlclBsdWdpbihwbHVnaW4pIHtcclxuICAgICAgICBpZiAoIShwbHVnaW4gaW5zdGFuY2VvZiBLaW1haVBsdWdpbikpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHBsdWdpbiBnaXZlbiwgbmVlZHMgdG8gYmUgYSBLaW1haVBsdWdpbiBpbnN0YW5jZScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcGx1Z2luLnNldENvbnRhaW5lcih0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5fcGx1Z2lucy5wdXNoKHBsdWdpbik7XHJcblxyXG4gICAgICAgIHJldHVybiBwbHVnaW47XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxyXG4gICAgICogQHJldHVybnMge0tpbWFpUGx1Z2lufVxyXG4gICAgICovXHJcbiAgICBnZXRQbHVnaW4obmFtZSkge1xyXG4gICAgICAgIGZvciAobGV0IHBsdWdpbiBvZiB0aGlzLl9wbHVnaW5zKSB7XHJcbiAgICAgICAgICAgIGlmIChwbHVnaW4uZ2V0SWQoKSAhPT0gbnVsbCAmJiBwbHVnaW4uZ2V0SWQoKSA9PT0gbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBsdWdpbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gcGx1Z2luOiAnICsgbmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcmV0dXJucyB7QXJyYXk8S2ltYWlQbHVnaW4+fVxyXG4gICAgICovXHJcbiAgICBnZXRQbHVnaW5zKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wbHVnaW5zO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHJldHVybnMge0tpbWFpVHJhbnNsYXRpb259XHJcbiAgICAgKi9cclxuICAgIGdldFRyYW5zbGF0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90cmFuc2xhdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEByZXR1cm5zIHtLaW1haUNvbmZpZ3VyYXRpb259XHJcbiAgICAgKi9cclxuICAgIGdldENvbmZpZ3VyYXRpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbmZpZ3VyYXRpb247XHJcbiAgICB9XHJcblxyXG59XHJcbiIsIi8qXHJcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBLaW1haSB0aW1lLXRyYWNraW5nIGFwcC5cclxuICpcclxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcclxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXHJcbiAqL1xyXG5cclxuLyohXHJcbiAqIFtLSU1BSV0gS2ltYWlMb2FkZXI6IGJvb3RzdHJhcCB0aGUgYXBwbGljYXRpb24gYW5kIGFsbCBwbHVnaW5zXHJcbiAqL1xyXG5cclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgS2ltYWlUcmFuc2xhdGlvbiBmcm9tIFwiLi9LaW1haVRyYW5zbGF0aW9uXCI7XHJcbmltcG9ydCBLaW1haUNvbmZpZ3VyYXRpb24gZnJvbSBcIi4vS2ltYWlDb25maWd1cmF0aW9uXCI7XHJcbmltcG9ydCBLaW1haUNvbnRhaW5lciBmcm9tIFwiLi9LaW1haUNvbnRhaW5lclwiO1xyXG5pbXBvcnQgS2ltYWlBY3RpdmVSZWNvcmRzRHVyYXRpb24gZnJvbSAnLi9wbHVnaW5zL0tpbWFpQWN0aXZlUmVjb3Jkc0R1cmF0aW9uLmpzJztcclxuaW1wb3J0IEtpbWFpRGF0YXRhYmxlQ29sdW1uVmlldyBmcm9tICcuL3BsdWdpbnMvS2ltYWlEYXRhdGFibGVDb2x1bW5WaWV3LmpzJztcclxuaW1wb3J0IEtpbWFpVGhlbWVJbml0aWFsaXplciBmcm9tIFwiLi9wbHVnaW5zL0tpbWFpVGhlbWVJbml0aWFsaXplclwiO1xyXG5pbXBvcnQgS2ltYWlEYXRlUmFuZ2VQaWNrZXIgZnJvbSBcIi4vcGx1Z2lucy9LaW1haURhdGVSYW5nZVBpY2tlclwiO1xyXG5pbXBvcnQgS2ltYWlEYXRhdGFibGUgZnJvbSBcIi4vcGx1Z2lucy9LaW1haURhdGF0YWJsZVwiO1xyXG5pbXBvcnQgS2ltYWlUb29sYmFyIGZyb20gXCIuL3BsdWdpbnMvS2ltYWlUb29sYmFyXCI7XHJcbmltcG9ydCBLaW1haUFQSSBmcm9tIFwiLi9wbHVnaW5zL0tpbWFpQVBJXCI7XHJcbmltcG9ydCBLaW1haVNlbGVjdERhdGFBUEkgZnJvbSBcIi4vcGx1Z2lucy9LaW1haVNlbGVjdERhdGFBUElcIjtcclxuaW1wb3J0IEtpbWFpRGF0ZVRpbWVQaWNrZXIgZnJvbSBcIi4vcGx1Z2lucy9LaW1haURhdGVUaW1lUGlja2VyXCI7XHJcbmltcG9ydCBLaW1haUFsdGVybmF0aXZlTGlua3MgZnJvbSBcIi4vcGx1Z2lucy9LaW1haUFsdGVybmF0aXZlTGlua3NcIjtcclxuaW1wb3J0IEtpbWFpQWpheE1vZGFsRm9ybSBmcm9tIFwiLi9wbHVnaW5zL0tpbWFpQWpheE1vZGFsRm9ybVwiO1xyXG5pbXBvcnQgS2ltYWlBY3RpdmVSZWNvcmRzIGZyb20gXCIuL3BsdWdpbnMvS2ltYWlBY3RpdmVSZWNvcmRzXCI7XHJcbmltcG9ydCBLaW1haVJlY2VudEFjdGl2aXRpZXMgZnJvbSBcIi4vcGx1Z2lucy9LaW1haVJlY2VudEFjdGl2aXRpZXNcIjtcclxuaW1wb3J0IEtpbWFpRXZlbnQgZnJvbSBcIi4vcGx1Z2lucy9LaW1haUV2ZW50XCI7XHJcbmltcG9ydCBLaW1haUFQSUxpbmsgZnJvbSBcIi4vcGx1Z2lucy9LaW1haUFQSUxpbmtcIjtcclxuaW1wb3J0IEtpbWFpQWxlcnQgZnJvbSBcIi4vcGx1Z2lucy9LaW1haUFsZXJ0XCI7XHJcbmltcG9ydCBLaW1haUF1dG9jb21wbGV0ZSBmcm9tIFwiLi9wbHVnaW5zL0tpbWFpQXV0b2NvbXBsZXRlXCI7XHJcbmltcG9ydCBLaW1haUZvcm1TZWxlY3QgZnJvbSBcIi4vcGx1Z2lucy9LaW1haUZvcm1TZWxlY3RcIjtcclxuaW1wb3J0IEtpbWFpRm9ybSBmcm9tIFwiLi9wbHVnaW5zL0tpbWFpRm9ybVwiO1xyXG5pbXBvcnQgS2ltYWlEYXRlUGlja2VyIGZyb20gXCIuL3BsdWdpbnMvS2ltYWlEYXRlUGlja2VyXCI7XHJcbmltcG9ydCBLaW1haUNvbmZpcm1hdGlvbkxpbmsgZnJvbSBcIi4vcGx1Z2lucy9LaW1haUNvbmZpcm1hdGlvbkxpbmtcIjtcclxuaW1wb3J0IEtpbWFpTXVsdGlVcGRhdGVUYWJsZSBmcm9tIFwiLi9wbHVnaW5zL0tpbWFpTXVsdGlVcGRhdGVUYWJsZVwiO1xyXG5pbXBvcnQgS2ltYWlEYXRlVXRpbHMgZnJvbSBcIi4vcGx1Z2lucy9LaW1haURhdGVVdGlsc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2ltYWlMb2FkZXIge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZ3VyYXRpb25zLCB0cmFuc2xhdGlvbnMpIHtcclxuICAgICAgICAvLyBzZXQgdGhlIGN1cnJlbnQgbG9jYWxlIGZvciBhbGwgamF2YXNjcmlwdCBjb21wb25lbnRzXHJcbiAgICAgICAgbW9tZW50LmxvY2FsZShjb25maWd1cmF0aW9uc1snbG9jYWxlJ10ucmVwbGFjZSgnXycsICctJykudG9Mb3dlckNhc2UoKSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGtpbWFpID0gbmV3IEtpbWFpQ29udGFpbmVyKFxyXG4gICAgICAgICAgICBuZXcgS2ltYWlDb25maWd1cmF0aW9uKGNvbmZpZ3VyYXRpb25zKSxcclxuICAgICAgICAgICAgbmV3IEtpbWFpVHJhbnNsYXRpb24odHJhbnNsYXRpb25zKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGtpbWFpLnJlZ2lzdGVyUGx1Z2luKG5ldyBLaW1haUV2ZW50KCkpO1xyXG4gICAgICAgIGtpbWFpLnJlZ2lzdGVyUGx1Z2luKG5ldyBLaW1haUFQSSgpKTtcclxuICAgICAgICBraW1haS5yZWdpc3RlclBsdWdpbihuZXcgS2ltYWlBbGVydCgpKTtcclxuICAgICAgICBraW1haS5yZWdpc3RlclBsdWdpbihuZXcgS2ltYWlEYXRlVXRpbHMoKSk7XHJcbiAgICAgICAga2ltYWkucmVnaXN0ZXJQbHVnaW4obmV3IEtpbWFpRm9ybVNlbGVjdCgnLnNlbGVjdHBpY2tlcicpKTtcclxuICAgICAgICBraW1haS5yZWdpc3RlclBsdWdpbihuZXcgS2ltYWlDb25maXJtYXRpb25MaW5rKCdjb25maXJtYXRpb24tbGluaycpKTtcclxuICAgICAgICBraW1haS5yZWdpc3RlclBsdWdpbihuZXcgS2ltYWlBY3RpdmVSZWNvcmRzRHVyYXRpb24oJ1tkYXRhLXNpbmNlXScpKTtcclxuICAgICAgICBraW1haS5yZWdpc3RlclBsdWdpbihuZXcgS2ltYWlEYXRhdGFibGVDb2x1bW5WaWV3KCdkYXRhLWNvbHVtbi12aXNpYmlsaXR5JykpO1xyXG4gICAgICAgIGtpbWFpLnJlZ2lzdGVyUGx1Z2luKG5ldyBLaW1haURhdGVSYW5nZVBpY2tlcignaW5wdXRbZGF0YS1kYXRlcmFuZ2VwaWNrZXJlbmFibGU9XCJvblwiXScpKTtcclxuICAgICAgICBraW1haS5yZWdpc3RlclBsdWdpbihuZXcgS2ltYWlEYXRlVGltZVBpY2tlcignaW5wdXRbZGF0YS1kYXRldGltZXBpY2tlcj1cIm9uXCJdJykpO1xyXG4gICAgICAgIGtpbWFpLnJlZ2lzdGVyUGx1Z2luKG5ldyBLaW1haURhdGVQaWNrZXIoJ2lucHV0W2RhdGEtZGF0ZXBpY2tlcmVuYWJsZT1cIm9uXCJdJykpO1xyXG4gICAgICAgIGtpbWFpLnJlZ2lzdGVyUGx1Z2luKG5ldyBLaW1haURhdGF0YWJsZSgnc2VjdGlvbi5jb250ZW50JywgJ3RhYmxlLmRhdGFUYWJsZScpKTtcclxuICAgICAgICBraW1haS5yZWdpc3RlclBsdWdpbihuZXcgS2ltYWlUb29sYmFyKCdmb3JtLnNlYXJjaGZvcm0nLCAndG9vbGJhci1hY3Rpb24nKSk7XHJcbiAgICAgICAga2ltYWkucmVnaXN0ZXJQbHVnaW4obmV3IEtpbWFpU2VsZWN0RGF0YUFQSSgnc2VsZWN0W2RhdGEtcmVsYXRlZC1zZWxlY3RdJykpO1xyXG4gICAgICAgIGtpbWFpLnJlZ2lzdGVyUGx1Z2luKG5ldyBLaW1haUFsdGVybmF0aXZlTGlua3MoJy5hbHRlcm5hdGl2ZS1saW5rJykpO1xyXG4gICAgICAgIGtpbWFpLnJlZ2lzdGVyUGx1Z2luKG5ldyBLaW1haUFqYXhNb2RhbEZvcm0oJy5tb2RhbC1hamF4LWZvcm0nKSk7XHJcbiAgICAgICAga2ltYWkucmVnaXN0ZXJQbHVnaW4obmV3IEtpbWFpUmVjZW50QWN0aXZpdGllcygnbGkubm90aWZpY2F0aW9ucy1tZW51JykpO1xyXG4gICAgICAgIGtpbWFpLnJlZ2lzdGVyUGx1Z2luKG5ldyBLaW1haUFjdGl2ZVJlY29yZHMoJ2xpLm1lc3NhZ2VzLW1lbnUnLCAnbGkubWVzc2FnZXMtbWVudS1lbXB0eScpKTtcclxuICAgICAgICBraW1haS5yZWdpc3RlclBsdWdpbihuZXcgS2ltYWlBUElMaW5rKCdhcGktbGluaycpKTtcclxuICAgICAgICBraW1haS5yZWdpc3RlclBsdWdpbihuZXcgS2ltYWlBdXRvY29tcGxldGUoJy5qcy1hdXRvY29tcGxldGUnKSk7XHJcbiAgICAgICAga2ltYWkucmVnaXN0ZXJQbHVnaW4obmV3IEtpbWFpRm9ybSgpKTtcclxuICAgICAgICBraW1haS5yZWdpc3RlclBsdWdpbihuZXcgS2ltYWlUaGVtZUluaXRpYWxpemVyKCkpO1xyXG4gICAgICAgIGtpbWFpLnJlZ2lzdGVyUGx1Z2luKG5ldyBLaW1haU11bHRpVXBkYXRlVGFibGUoKSk7XHJcbiAgICAgICAgLy9raW1haS5yZWdpc3RlclBsdWdpbihuZXcgS2ltYWlQYXVzZVJlY29yZCgnbGkubWVzc2FnZXMtbWVudSB1bC5tZW51IGxpJykpO1xyXG5cclxuICAgICAgICAvLyBub3RpZnkgYWxsIGxpc3RlbmVycyB0aGF0IEtpbWFpIHBsdWdpbnMgY2FuIG5vdyBiZSByZWdpc3RlcmVkXHJcbiAgICAgICAga2ltYWkuZ2V0UGx1Z2luKCdldmVudCcpLnRyaWdnZXIoJ2tpbWFpLnBsdWdpblJlZ2lzdGVyJywgeydraW1haSc6IGtpbWFpfSk7XHJcblxyXG4gICAgICAgIC8vIGluaXRpYWxpemUgYWxsIHBsdWdpbnNcclxuICAgICAgICBraW1haS5nZXRQbHVnaW5zKCkubWFwKHBsdWdpbiA9PiB7IHBsdWdpbi5pbml0KCk7IH0pO1xyXG5cclxuICAgICAgICAvLyBub3RpZnkgYWxsIGxpc3RlbmVycyB0aGF0IEtpbWFpIGlzIG5vdyByZWFkeSB0byBiZSB1c2VkXHJcbiAgICAgICAga2ltYWkuZ2V0UGx1Z2luKCdldmVudCcpLnRyaWdnZXIoJ2tpbWFpLmluaXRpYWxpemVkJywgeydraW1haSc6IGtpbWFpfSk7XHJcblxyXG4gICAgICAgIHRoaXMua2ltYWkgPSBraW1haTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRLaW1haSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5raW1haTtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiLypcclxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIEtpbWFpIHRpbWUtdHJhY2tpbmcgYXBwLlxyXG4gKlxyXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxyXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cclxuICovXHJcblxyXG4vKiFcclxuICogW0tJTUFJXSBLaW1haVBsdWdpbjogYmFzZSBjbGFzcyBmb3IgYWxsIHBsdWdpbnNcclxuICovXHJcblxyXG5pbXBvcnQgS2ltYWlDb250YWluZXIgZnJvbSBcIi4vS2ltYWlDb250YWluZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtpbWFpUGx1Z2luIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIE92ZXJ3cml0ZSB0aGlzIG1ldGhvZCB0byBpbml0aWFsaXplIHlvdXIgcGx1Z2luLlxyXG4gICAgICpcclxuICAgICAqIEl0IGlzIGNhbGxlZCBBRlRFUiBzZXRDb250YWluZXIoKSBhbmQgQUZURVIgRE9NQ29udGVudExvYWRlZCB3YXMgZmlyZWQuXHJcbiAgICAgKiBZb3UgZG9uJ3QgaGF2ZSBhY2Nlc3MgdG8gdGhlIGNvbnRhaW5lciBiZWZvcmUgdGhpcyBtZXRob2QhXHJcbiAgICAgKi9cclxuICAgIGluaXQoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJZiB5b3UgcmV0dXJuIGFuIElELCB5b3UgaW5kaWNhdGUgdGhhdCB5b3VyIHBsdWdpbiBjYW4gYmUgdXNlZCBieSBvdGhlciBwbHVnaW5zLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd8bnVsbH1cclxuICAgICAqL1xyXG4gICAgZ2V0SWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge0tpbWFpQ29udGFpbmVyfSBjb3JlXHJcbiAgICAgKi9cclxuICAgIHNldENvbnRhaW5lcihjb3JlKSB7XHJcbiAgICAgICAgaWYgKCEoY29yZSBpbnN0YW5jZW9mIEtpbWFpQ29udGFpbmVyKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1BsdWdpbiB3YXMgZ2l2ZW4gYW4gaW52YWxpZCBLaW1haUNvbnRhaW5lcicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9jb3JlID0gY29yZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyBudWxsLCBpZiB4b3UgY2FsbCBpdCBCRUZPUkUgaW5pdCgpLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtLaW1haUNvbnRhaW5lcn1cclxuICAgICAqL1xyXG4gICAgZ2V0Q29udGFpbmVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jb3JlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcclxuICAgICAqIEByZXR1cm5zIHsoc3RyaW5nfG51bWJlcnxib29sZWFuKX1cclxuICAgICAqL1xyXG4gICAgZ2V0Q29uZmlndXJhdGlvbihuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q29udGFpbmVyKCkuZ2V0Q29uZmlndXJhdGlvbigpLmdldChuYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXHJcbiAgICAgKiBAcmV0dXJucyB7S2ltYWlQbHVnaW59XHJcbiAgICAgKi9cclxuICAgIGdldFBsdWdpbihuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q29udGFpbmVyKCkuZ2V0UGx1Z2luKG5hbWUpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCIvKlxyXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgS2ltYWkgdGltZS10cmFja2luZyBhcHAuXHJcbiAqXHJcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXHJcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxyXG4gKi9cclxuXHJcbi8qIVxyXG4gKiBbS0lNQUldIEtpbWFpVHJhbnNsYXRpb246IGhhbmRsaW5nIHRyYW5zbGF0aW9uIHN0cmluZ3NcclxuICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLaW1haVRyYW5zbGF0aW9uIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nLCBzdHJpbmc+fSB0cmFuc2xhdGlvbnNcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IodHJhbnNsYXRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5fdHJhbnNsYXRpb25zID0gdHJhbnNsYXRpb25zO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcclxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XHJcbiAgICAgKi9cclxuICAgIGdldChuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyYW5zbGF0aW9uc1tuYW1lXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXHJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgICAqL1xyXG4gICAgaGFzKG5hbWUpIHtcclxuICAgICAgICByZXR1cm4gbmFtZSBpbiB0aGlzLl90cmFuc2xhdGlvbnM7XHJcbiAgICB9XHJcblxyXG59XHJcbiIsIi8qXHJcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBLaW1haSB0aW1lLXRyYWNraW5nIGFwcC5cclxuICpcclxuICogTWFpbiBKUyBhcHBsaWNhdGlvbiBmaWxlIGZvciBLaW1haSAyLiBUaGlzIGZpbGUgc2hvdWxkIGJlIGluY2x1ZGVkIGluIGFsbCBwYWdlcy5cclxuICpcclxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcclxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXHJcbiAqL1xyXG5cclxuLyohXHJcbiAqIFtLSU1BSV0gV3JhcHBlciBjbGFzcyBmb3IgbG9hZGluZyBLaW1haSBhcHAgaW4gYnJvd3NlciBzY3JpcHQgc2NvcGVcclxuICovXHJcblxyXG5pbXBvcnQgS2ltYWlMb2FkZXIgZnJvbSBcIi4vS2ltYWlMb2FkZXJcIjtcclxuXHJcbihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xyXG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xyXG4gICAgICAgIGRlZmluZShbXSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKHJvb3QuS2ltYWlXZWJMb2FkZXIgPSBmYWN0b3J5KCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cykge1xyXG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByb290LktpbWFpV2ViTG9hZGVyID0gZmFjdG9yeSgpO1xyXG4gICAgfVxyXG59KHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgY2xhc3MgS2ltYWlXZWJMb2FkZXIgZXh0ZW5kcyBLaW1haUxvYWRlciB7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIEtpbWFpV2ViTG9hZGVyO1xyXG5cclxufSkpO1xyXG4iLCIvKlxyXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgS2ltYWkgdGltZS10cmFja2luZyBhcHAuXHJcbiAqXHJcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXHJcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxyXG4gKi9cclxuXHJcbi8qIVxyXG4gKiBbS0lNQUldIEtpbWFpQVBJOiBlYXN5IGFjY2VzcyB0byBBUEkgbWV0aG9kc1xyXG4gKi9cclxuXHJcbmltcG9ydCBqUXVlcnkgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IEtpbWFpUGx1Z2luIGZyb20gXCIuLi9LaW1haVBsdWdpblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2ltYWlBUEkgZXh0ZW5kcyBLaW1haVBsdWdpbiB7XHJcblxyXG4gICAgZ2V0SWQoKSB7XHJcbiAgICAgICAgcmV0dXJuICdhcGknO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCh1cmwsIGRhdGEsIGNhbGxiYWNrU3VjY2VzcywgY2FsbGJhY2tFcnJvcikge1xyXG4gICAgICAgIGpRdWVyeS5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdYLUFVVEgtU0VTU0lPTic6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzonYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgc3VjY2VzczogY2FsbGJhY2tTdWNjZXNzLFxyXG4gICAgICAgICAgICBlcnJvcjogY2FsbGJhY2tFcnJvclxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHBvc3QodXJsLCBkYXRhLCBjYWxsYmFja1N1Y2Nlc3MsIGNhbGxiYWNrRXJyb3IpIHtcclxuICAgICAgICBpZiAoY2FsbGJhY2tFcnJvciA9PT0gbnVsbCB8fCBjYWxsYmFja0Vycm9yID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgY2FsbGJhY2tFcnJvciA9IHRoaXMuZ2V0UG9zdEVycm9ySGFuZGxlcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgalF1ZXJ5LmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ1gtQVVUSC1TRVNTSU9OJzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOidhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgc3VjY2VzczogY2FsbGJhY2tTdWNjZXNzLFxyXG4gICAgICAgICAgICBlcnJvcjogY2FsbGJhY2tFcnJvclxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHBhdGNoKHVybCwgZGF0YSwgY2FsbGJhY2tTdWNjZXNzLCBjYWxsYmFja0Vycm9yKSB7XHJcbiAgICAgICAgaWYgKGNhbGxiYWNrRXJyb3IgPT09IG51bGwgfHwgY2FsbGJhY2tFcnJvciA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrRXJyb3IgPSB0aGlzLmdldFBhdGNoRXJyb3JIYW5kbGVyKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBqUXVlcnkuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnWC1BVVRILVNFU1NJT04nOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6J2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BBVENIJyxcclxuICAgICAgICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgc3VjY2VzczogY2FsbGJhY2tTdWNjZXNzLFxyXG4gICAgICAgICAgICBlcnJvcjogY2FsbGJhY2tFcnJvclxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZSh1cmwsIGNhbGxiYWNrU3VjY2VzcywgY2FsbGJhY2tFcnJvcikge1xyXG4gICAgICAgIGlmIChjYWxsYmFja0Vycm9yID09PSBudWxsIHx8IGNhbGxiYWNrRXJyb3IgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBjYWxsYmFja0Vycm9yID0gdGhpcy5nZXREZWxldGVFcnJvckhhbmRsZXIoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGpRdWVyeS5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdYLUFVVEgtU0VTU0lPTic6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzonYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgc3VjY2VzczogY2FsbGJhY2tTdWNjZXNzLFxyXG4gICAgICAgICAgICBlcnJvcjogY2FsbGJhY2tFcnJvclxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERlbGV0ZUVycm9ySGFuZGxlcigpIHtcclxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24oeGhyLCBlcnIpIHtcclxuICAgICAgICAgICAgc2VsZi5oYW5kbGVFcnJvcignYWN0aW9uLmRlbGV0ZS5lcnJvcicsIHhociwgZXJyKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGdldFBhdGNoRXJyb3JIYW5kbGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbih4aHIsIGVycikge1xyXG4gICAgICAgICAgICBzZWxmLmhhbmRsZUVycm9yKCdhY3Rpb24udXBkYXRlLmVycm9yJywgeGhyLCBlcnIpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UG9zdEVycm9ySGFuZGxlcigpIHtcclxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24oeGhyLCBlcnIpIHtcclxuICAgICAgICAgICAgc2VsZi5oYW5kbGVFcnJvcignYWN0aW9uLnVwZGF0ZS5lcnJvcicsIHhociwgZXJyKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2VcclxuICAgICAqIEBwYXJhbSB7anFYSFJ9IHhoclxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGVyclxyXG4gICAgICovXHJcbiAgICBoYW5kbGVFcnJvcihtZXNzYWdlLCB4aHIsIGVycikge1xyXG4gICAgICAgIGxldCByZXN1bHRFcnJvciA9IGVycjtcclxuICAgICAgICBpZiAoeGhyLnJlc3BvbnNlSlNPTiAmJiB4aHIucmVzcG9uc2VKU09OLm1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgcmVzdWx0RXJyb3IgPSB4aHIucmVzcG9uc2VKU09OLm1lc3NhZ2U7XHJcbiAgICAgICAgICAgIC8vIGZpbmQgdmFsaWRhdGlvbiBlcnJvcnNcclxuICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDQwMCAmJiB4aHIucmVzcG9uc2VKU09OLmVycm9ycykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbGxlY3RlZCA9IFsnPHU+JyArIHJlc3VsdEVycm9yICsgJzwvdT4nXTtcclxuICAgICAgICAgICAgICAgIC8vIGZvcm0gZXJyb3JzIHRoYXQgYXJlIG5vdCBhdHRhY2hlZCB0byBhIGZpZWxkIChsaWtlIGV4dHJhIGZpZWxkcylcclxuICAgICAgICAgICAgICAgIGlmICh4aHIucmVzcG9uc2VKU09OLmVycm9ycy5lcnJvcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBlcnJvciBvZiB4aHIucmVzcG9uc2VKU09OLmVycm9ycy5lcnJvcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sbGVjdGVkLnB1c2goZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh4aHIucmVzcG9uc2VKU09OLmVycm9ycy5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGZpZWxkIGluIHhoci5yZXNwb25zZUpTT04uZXJyb3JzLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0bXBGaWVsZCA9IHhoci5yZXNwb25zZUpTT04uZXJyb3JzLmNoaWxkcmVuW2ZpZWxkXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRtcEZpZWxkLmhhc093blByb3BlcnR5KCdlcnJvcnMnKSAmJiB0bXBGaWVsZC5lcnJvcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgZXJyb3Igb2YgdG1wRmllbGQuZXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sbGVjdGVkLnB1c2goZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGNvbGxlY3RlZC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0RXJyb3IgPSBjb2xsZWN0ZWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKHhoci5zdGF0dXMgJiYgeGhyLnN0YXR1c1RleHQpIHtcclxuICAgICAgICAgICAgcmVzdWx0RXJyb3IgPSAnWycgKyB4aHIuc3RhdHVzICsgJ10gJyArIHhoci5zdGF0dXNUZXh0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5nZXRQbHVnaW4oJ2FsZXJ0JykuZXJyb3IobWVzc2FnZSwgcmVzdWx0RXJyb3IpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCIvKlxyXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgS2ltYWkgdGltZS10cmFja2luZyBhcHAuXHJcbiAqXHJcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXHJcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxyXG4gKi9cclxuXHJcbmltcG9ydCBLaW1haVBsdWdpbiBmcm9tIFwiLi4vS2ltYWlQbHVnaW5cIjtcclxuXHJcbi8qKlxyXG4gKiBOZWVkcyB0byBiZSBpbml0aWFsaXplZCB3aXRoIGEgY2xhc3MgbmFtZS5cclxuICpcclxuICogQSBsaW5rIGxpa2UgPGEgaHJlZj0jIGNsYXNzPXJlbW90ZUxpbms+IGNhbiBiZSBhY3RpdmF0ZWQgd2l0aDpcclxuICogbmV3IEtpbWFpQVBJTGluaygncmVtb3RlTGluaycpXHJcbiAqXHJcbiAqIEFsbG93cyB0byBhc3NpZ24gdGhlIGdpdmVuIHNlbGVjdG9yIHRvIGFueSBlbGVtZW50LCB3aGljaCB0aGVuIGlzIHVzZWQgYXMgY2xpY2staGFuZGxlclxyXG4gKiBjYWxsaW5nIGFuIEFQSSBtZXRob2QgYW5kIHRyaWdnZXIgdGhlIGV2ZW50IGZyb20gZGF0YS1ldmVudCBhdHRyaWJ1dGUgYWZ0ZXJ3YXJkcy5cclxuICpcclxuICogQHBhcmFtIHNlbGVjdG9yXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLaW1haUFQSUxpbmsgZXh0ZW5kcyBLaW1haVBsdWdpbiB7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2VsZWN0b3IpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0b3IgPSBzZWxlY3RvcjtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICAgbGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICAgICAgd2hpbGUgKHRhcmdldCAhPT0gbnVsbCAmJiAhdGFyZ2V0Lm1hdGNoZXMoJ2JvZHknKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoc2VsZi5zZWxlY3RvcikpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVzID0gdGFyZ2V0LmRhdGFzZXQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB1cmwgPSBhdHRyaWJ1dGVzWydocmVmJ107XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF1cmwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsID0gdGFyZ2V0LmdldEF0dHJpYnV0ZSgnaHJlZicpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGF0dHJpYnV0ZXMucXVlc3Rpb24gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmdldENvbnRhaW5lcigpLmdldFBsdWdpbignYWxlcnQnKS5xdWVzdGlvbihhdHRyaWJ1dGVzLnF1ZXN0aW9uLCBmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5fY2FsbEFwaSh1cmwsIGF0dHJpYnV0ZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLl9jYWxsQXBpKHVybCwgYXR0cmlidXRlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRhcmdldCA9IHRhcmdldC5wYXJlbnROb2RlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgX2NhbGxBcGkodXJsLCBhdHRyaWJ1dGVzKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IG1ldGhvZCA9IGF0dHJpYnV0ZXNbJ21ldGhvZCddO1xyXG4gICAgICAgIGNvbnN0IGV2ZW50TmFtZSA9IGF0dHJpYnV0ZXNbJ2V2ZW50J107XHJcbiAgICAgICAgY29uc3QgQVBJID0gdGhpcy5nZXRDb250YWluZXIoKS5nZXRQbHVnaW4oJ2FwaScpO1xyXG4gICAgICAgIGNvbnN0IGV2ZW50aW5nID0gdGhpcy5nZXRDb250YWluZXIoKS5nZXRQbHVnaW4oJ2V2ZW50Jyk7XHJcbiAgICAgICAgY29uc3QgYWxlcnQgPSB0aGlzLmdldENvbnRhaW5lcigpLmdldFBsdWdpbignYWxlcnQnKTtcclxuICAgICAgICBjb25zdCBzdWNjZXNzSGFuZGxlID0gZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGV2ZW50aW5nLnRyaWdnZXIoZXZlbnROYW1lKTtcclxuICAgICAgICAgICAgaWYgKGF0dHJpYnV0ZXMubXNnU3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQuc3VjY2VzcyhhdHRyaWJ1dGVzLm1zZ1N1Y2Nlc3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBlcnJvckhhbmRsZSA9IGZ1bmN0aW9uKHhociwgZXJyKSB7XHJcbiAgICAgICAgICAgIGxldCBtZXNzYWdlID0gJ2FjdGlvbi51cGRhdGUuZXJyb3InO1xyXG4gICAgICAgICAgICBpZiAoYXR0cmlidXRlcy5tc2dFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IGF0dHJpYnV0ZXMubXNnRXJyb3I7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQVBJLmhhbmRsZUVycm9yKG1lc3NhZ2UsIHhociwgZXJyKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAobWV0aG9kID09PSAnUEFUQ0gnKSB7XHJcbiAgICAgICAgICAgIGxldCBkYXRhID0ge307XHJcbiAgICAgICAgICAgIGlmIChhdHRyaWJ1dGVzLnBheWxvYWQpIHtcclxuICAgICAgICAgICAgICAgIGRhdGEgID0gYXR0cmlidXRlcy5wYXlsb2FkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEFQSS5wYXRjaCh1cmwsIGRhdGEsIHN1Y2Nlc3NIYW5kbGUsIGVycm9ySGFuZGxlKTtcclxuICAgICAgICB9IGVsc2UgaWYgKG1ldGhvZCA9PT0gJ1BPU1QnKSB7XHJcbiAgICAgICAgICAgIGxldCBkYXRhID0ge307XHJcbiAgICAgICAgICAgIGlmIChhdHRyaWJ1dGVzLnBheWxvYWQpIHtcclxuICAgICAgICAgICAgICAgIGRhdGEgID0gYXR0cmlidXRlcy5wYXlsb2FkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEFQSS5wb3N0KHVybCwgZGF0YSwgc3VjY2Vzc0hhbmRsZSwgZXJyb3JIYW5kbGUpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobWV0aG9kID09PSAnREVMRVRFJykge1xyXG4gICAgICAgICAgICBBUEkuZGVsZXRlKHVybCwgc3VjY2Vzc0hhbmRsZSwgZXJyb3JIYW5kbGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuIiwiLypcclxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIEtpbWFpIHRpbWUtdHJhY2tpbmcgYXBwLlxyXG4gKlxyXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxyXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cclxuICovXHJcblxyXG4vKiFcclxuICogW0tJTUFJXSBLaW1haUFjdGl2ZVJlY29yZHM6IHJlc3BvbnNpYmxlIHRvIGRpc3BsYXkgdGhlIHVzZXJzIGFjdGl2ZSByZWNvcmRzXHJcbiAqL1xyXG5cclxuaW1wb3J0IEtpbWFpUGx1Z2luIGZyb20gJy4uL0tpbWFpUGx1Z2luJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtpbWFpQWN0aXZlUmVjb3JkcyBleHRlbmRzIEtpbWFpUGx1Z2luIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzZWxlY3Rvciwgc2VsZWN0b3JFbXB0eSkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RvciA9IHNlbGVjdG9yO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0b3JFbXB0eSA9IHNlbGVjdG9yRW1wdHk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SWQoKSB7XHJcbiAgICAgICAgcmV0dXJuICdhY3RpdmUtcmVjb3Jkcyc7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9yKTtcclxuXHJcbiAgICAgICAgLy8gdGhlIG1lbnUgY2FuIGJlIGhpZGRlbiBpZiB1c2VyIGhhcyBubyBwZXJtaXNzaW9ucyB0byBzZWUgaXRcclxuICAgICAgICBpZiAobWVudSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBkcm9wZG93biA9IG1lbnUucXVlcnlTZWxlY3RvcigndWwuZHJvcGRvd24tbWVudScpO1xyXG5cclxuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMgPSBkcm9wZG93bi5kYXRhc2V0O1xyXG4gICAgICAgIHRoaXMuaXRlbUxpc3QgPSBkcm9wZG93bi5xdWVyeVNlbGVjdG9yKCdsaSA+IHVsLm1lbnUnKTtcclxuICAgICAgICB0aGlzLmxhYmVsID0gbWVudS5xdWVyeVNlbGVjdG9yKCdhID4gc3Bhbi5sYWJlbCcpO1xyXG5cclxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgICAgICBjb25zdCBoYW5kbGUgPSBmdW5jdGlvbigpIHsgc2VsZi5yZWxvYWRBY3RpdmVSZWNvcmRzKCk7IH07XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tpbWFpLnRpbWVzaGVldFVwZGF0ZScsIGhhbmRsZSk7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2ltYWkuYWN0aXZpdHlVcGRhdGUnLCBoYW5kbGUpO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tpbWFpLnByb2plY3RVcGRhdGUnLCBoYW5kbGUpO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tpbWFpLmN1c3RvbWVyVXBkYXRlJywgaGFuZGxlKTtcclxuICAgIH1cclxuXHJcbiAgICBlbXB0eUxpc3QoKSB7XHJcbiAgICAgICAgdGhpcy5pdGVtTGlzdC5pbm5lckhUTUwgPSAnJztcclxuICAgIH1cclxuXHJcbiAgICBfdG9nZ2xlTWVudShoYXNFbnRyaWVzKSB7XHJcbiAgICAgICAgY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5zZWxlY3Rvcik7XHJcbiAgICAgICAgY29uc3QgbWVudUVtcHR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9yRW1wdHkpO1xyXG5cclxuICAgICAgICBtZW51LnN0eWxlLmRpc3BsYXkgPSBoYXNFbnRyaWVzID8gJ2lubGluZS1ibG9jaycgOiAnbm9uZSc7XHJcbiAgICAgICAgaWYgKG1lbnVFbXB0eSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBtZW51RW1wdHkuc3R5bGUuZGlzcGxheSA9ICFoYXNFbnRyaWVzID8gJ2lubGluZS1ibG9jaycgOiAnbm9uZSc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldEVudHJpZXMoZW50cmllcykge1xyXG4gICAgICAgIHRoaXMuX3RvZ2dsZU1lbnUoZW50cmllcy5sZW5ndGggPiAwKTtcclxuXHJcbiAgICAgICAgaWYgKGVudHJpZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWwuaW5uZXJUZXh0ID0gJyc7XHJcbiAgICAgICAgICAgIHRoaXMuZW1wdHlMaXN0KCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBodG1sVG9JbnNlcnQgPSAnJztcclxuICAgICAgICBjb25zdCBkdXJhdGlvbnMgPSB0aGlzLmdldENvbnRhaW5lcigpLmdldFBsdWdpbigndGltZXNoZWV0LWR1cmF0aW9uJyk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IHRpbWVzaGVldCBvZiBlbnRyaWVzKSB7XHJcbiAgICAgICAgICAgIGh0bWxUb0luc2VydCArPVxyXG4gICAgICAgICAgICAgICAgICAgIGA8bGk+YCArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGA8YSBocmVmPVwiJHsgdGhpcy5hdHRyaWJ1dGVzWydocmVmJ10ucmVwbGFjZSgnMDAwJywgdGltZXNoZWV0LmlkKSB9XCIgZGF0YS1ldmVudD1cImtpbWFpLnRpbWVzaGVldFN0b3Aga2ltYWkudGltZXNoZWV0VXBkYXRlXCIgY2xhc3M9XCJhcGktbGlua1wiIGRhdGEtbWV0aG9kPVwiUEFUQ0hcIiBkYXRhLW1zZy1lcnJvcj1cInRpbWVzaGVldC5zdG9wLmVycm9yXCIgZGF0YS1tc2ctc3VjY2Vzcz1cInRpbWVzaGVldC5zdG9wLnN1Y2Nlc3NcIj5gICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwicHVsbC1sZWZ0XCI+YCArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYDxpIGNsYXNzPVwiJHsgdGhpcy5hdHRyaWJ1dGVzWydpY29uJ10gfSBmYS0yeFwiPjwvaT5gICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGA8L2Rpdj5gICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGA8aDQ+YCArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYDxzcGFuPiR7IHRpbWVzaGVldC5hY3Rpdml0eS5uYW1lIH08L3NwYW4+YCArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYDxzbWFsbD5gICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYDxzcGFuIGRhdGEtdGl0bGU9XCJ0cnVlXCIgZGF0YS1zaW5jZT1cIiR7IHRpbWVzaGVldC5iZWdpbiB9XCIgZGF0YS1mb3JtYXQ9XCIkeyB0aGlzLmF0dHJpYnV0ZXNbJ2Zvcm1hdCddIH1cIj4keyBkdXJhdGlvbnMuZm9ybWF0RHVyYXRpb24odGltZXNoZWV0LmR1cmF0aW9uLCB0aGlzLmF0dHJpYnV0ZXNbJ2Zvcm1hdCddKSB9PC9zcGFuPmAgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGA8L3NtYWxsPmAgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYDwvaDQ+YCArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgPHA+JHsgdGltZXNoZWV0LnByb2plY3QubmFtZSB9ICgkeyB0aW1lc2hlZXQucHJvamVjdC5jdXN0b21lci5uYW1lIH0pPC9wPmAgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBgPC9hPmAgK1xyXG4gICAgICAgICAgICAgICAgICAgIGA8L2xpPmA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5sYWJlbC5kYXRhc2V0Lndhcm5pbmcgPCBlbnRyaWVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsLmNsYXNzTGlzdCA9ICdsYWJlbCBsYWJlbC1kYW5nZXInO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWwuY2xhc3NMaXN0ID0gJ2xhYmVsIGxhYmVsLXdhcm5pbmcnO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxhYmVsLmlubmVyVGV4dCA9IGVudHJpZXMubGVuZ3RoO1xyXG4gICAgICAgIHRoaXMuaXRlbUxpc3QuaW5uZXJIVE1MID0gaHRtbFRvSW5zZXJ0O1xyXG5cclxuICAgICAgICBkdXJhdGlvbnMudXBkYXRlUmVjb3JkcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbG9hZEFjdGl2ZVJlY29yZHMoKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgY29uc3QgQVBJPSB0aGlzLmdldENvbnRhaW5lcigpLmdldFBsdWdpbignYXBpJyk7XHJcblxyXG4gICAgICAgIEFQSS5nZXQodGhpcy5hdHRyaWJ1dGVzWydhcGknXSwge30sIGZ1bmN0aW9uKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBzZWxmLnNldEVudHJpZXMocmVzdWx0KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiLypcclxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIEtpbWFpIHRpbWUtdHJhY2tpbmcgYXBwLlxyXG4gKlxyXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxyXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cclxuICovXHJcblxyXG4vKiFcclxuICogW0tJTUFJXSBLaW1haUFjdGl2ZVJlY29yZHNEdXJhdGlvbjogYWN0aXZhdGUgdGhlIHVwZGF0ZXMgZm9yIGFsbCBhY3RpdmUgdGltZXNoZWV0IHJlY29yZHMgb24gdGhpcyBwYWdlXHJcbiAqL1xyXG5cclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgS2ltYWlQbHVnaW4gZnJvbSAnLi4vS2ltYWlQbHVnaW4nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2ltYWlBY3RpdmVSZWNvcmRzRHVyYXRpb24gZXh0ZW5kcyBLaW1haVBsdWdpbiB7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2VsZWN0b3IpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0b3IgPSBzZWxlY3RvcjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJZCgpIHtcclxuICAgICAgICByZXR1cm4gJ3RpbWVzaGVldC1kdXJhdGlvbic7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZUJyb3dzZXJUaXRsZSA9ICEhdGhpcy5nZXRDb25maWd1cmF0aW9uKCd1cGRhdGVCcm93c2VyVGl0bGUnKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVJlY29yZHMoKTtcclxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgICAgICBjb25zdCBoYW5kbGUgPSBmdW5jdGlvbigpIHsgc2VsZi51cGRhdGVSZWNvcmRzKCk7IH07XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlc0hhbmRsZXIgPSBzZXRJbnRlcnZhbChoYW5kbGUsIDEwMDAwKTtcclxuICAgICAgICAvLyB0aGlzIHdpbGwgcHJvYmFibHkgbm90IHdvcmsgYXMgZXhwZWN0ZWQsIGFzIG90aGVyIGV2ZW50LWhhbmRsZXIgbWlnaHQgbmVlZCBsb25nZXIgdG8gdXBkYXRlIHRoZSBET01cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdraW1haS50aW1lc2hlZXRVcGRhdGUnLCBoYW5kbGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHVucmVnaXN0ZXJVcGRhdGVzKCkge1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5fdXBkYXRlc0hhbmRsZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVJlY29yZHMoKSB7XHJcbiAgICAgICAgbGV0IGR1cmF0aW9ucyA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGFjdGl2ZVJlY29yZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuc2VsZWN0b3IpO1xyXG5cclxuICAgICAgICBpZiAoYWN0aXZlUmVjb3Jkcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudXBkYXRlQnJvd3NlclRpdGxlKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC50aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5kYXRhc2V0Wyd0aXRsZSddO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvcihsZXQgcmVjb3JkIG9mIGFjdGl2ZVJlY29yZHMpIHtcclxuICAgICAgICAgICAgY29uc3Qgc2luY2UgPSByZWNvcmQuZ2V0QXR0cmlidXRlKCdkYXRhLXNpbmNlJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdCA9IHJlY29yZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZm9ybWF0Jyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGR1cmF0aW9uID0gdGhpcy5mb3JtYXREdXJhdGlvbihzaW5jZSwgZm9ybWF0KTtcclxuICAgICAgICAgICAgaWYgKHJlY29yZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGl0bGUnKSAhPT0gbnVsbCAmJiBkdXJhdGlvbiAhPT0gJz8nKSB7XHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbnMucHVzaChkdXJhdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVjb3JkLnRleHRDb250ZW50ID0gZHVyYXRpb247XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZHVyYXRpb25zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMudXBkYXRlQnJvd3NlclRpdGxlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB0aXRsZSA9IGR1cmF0aW9ucy5zaGlmdCgpO1xyXG4gICAgICAgIGxldCBwcmVmaXggPSAnIHwgJztcclxuXHJcbiAgICAgICAgZm9yIChsZXQgZHVyYXRpb24gb2YgZHVyYXRpb25zLnNsaWNlKDAsIDIpKSB7XHJcbiAgICAgICAgICAgIHRpdGxlICs9IHByZWZpeCArIGR1cmF0aW9uO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkb2N1bWVudC50aXRsZSA9IHRpdGxlO1xyXG4gICAgfVxyXG5cclxuICAgIGZvcm1hdER1cmF0aW9uKHNpbmNlLCBmb3JtYXQpIHtcclxuICAgICAgICBjb25zdCBkdXJhdGlvbiA9IG1vbWVudC5kdXJhdGlvbihtb21lbnQobmV3IERhdGUoKSkuZGlmZihtb21lbnQoc2luY2UpKSk7XHJcblxyXG4gICAgICAgIGxldCBob3VycyA9IHBhcnNlSW50KGR1cmF0aW9uLmFzSG91cnMoKSkudG9TdHJpbmcoKTtcclxuICAgICAgICBsZXQgbWludXRlcyA9IGR1cmF0aW9uLm1pbnV0ZXMoKTtcclxuICAgICAgICBsZXQgc2Vjb25kcyA9IGR1cmF0aW9uLnNlY29uZHMoKTtcclxuXHJcbiAgICAgICAgaWYgKGhvdXJzIDwgMCB8fCBtaW51dGVzIDwgMCB8fCBzZWNvbmRzIDwgMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gJz8nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gc3BlY2lhbCBjYXNlIGZvciBob3VycywgYXMgdGhleSBjYW4gb3ZlcmZsb3cgdGhlIDI0aCBiYXJyaWVyIC0gS2ltYWkgZG9lcyBub3Qgc3VwcG9ydCBkYXlzIGFzIGR1cmF0aW9uIHVuaXRcclxuICAgICAgICBpZiAoaG91cnMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIGhvdXJzID0gJzAnICsgaG91cnM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZm9ybWF0LnJlcGxhY2UoJyVoJywgaG91cnMpLnJlcGxhY2UoJyVtJywgKCcwJyttaW51dGVzKS5zdWJzdHIoLTIpKS5yZXBsYWNlKCclcycsICgnMCcrc2Vjb25kcykuc3Vic3RyKC0yKSk7XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIEtpbWFpIHRpbWUtdHJhY2tpbmcgYXBwLlxyXG4gKlxyXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxyXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cclxuICovXHJcblxyXG4vKiFcclxuICogW0tJTUFJXSBLaW1haUFqYXhNb2RhbEZvcm1cclxuICpcclxuICogYWxsb3dzIHRvIGFzc2lnbiB0aGUgZ2l2ZW4gc2VsZWN0b3IgdG8gYW55IGVsZW1lbnQsIHdoaWNoIHRoZW4gaXMgdXNlZCBhcyBjbGljay1oYW5kbGVyOlxyXG4gKiBvcGVuaW5nIGEgbW9kYWwgd2l0aCB0aGUgY29udGVudCBmcm9tIHRoZSBVUkwgZ2l2ZW4gaW4gdGhlIGVsZW1lbnRzICdkYXRhLWhyZWYnIG9yICdocmVmJyBhdHRyaWJ1dGVcclxuICovXHJcblxyXG5pbXBvcnQgalF1ZXJ5IGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCBLaW1haVJlZHVjZWRDbGlja0hhbmRsZXIgZnJvbSBcIi4vS2ltYWlSZWR1Y2VkQ2xpY2tIYW5kbGVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLaW1haUFqYXhNb2RhbEZvcm0gZXh0ZW5kcyBLaW1haVJlZHVjZWRDbGlja0hhbmRsZXIge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNlbGVjdG9yKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnNlbGVjdG9yID0gc2VsZWN0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SWQoKSB7XHJcbiAgICAgICAgcmV0dXJuICdtb2RhbCc7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLmlzRGlydHkgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5tb2RhbCA9IGpRdWVyeSgnI3JlbW90ZV9mb3JtX21vZGFsJyk7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5vbignaGlkZS5icy5tb2RhbCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGlmIChzZWxmLmlzRGlydHkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChqUXVlcnkoJyNyZW1vdGVfZm9ybV9tb2RhbCAubW9kYWwtYm9keSAucmVtb3RlX21vZGFsX2lzX2RpcnR5X3dhcm5pbmcnKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtc2cgPSBzZWxmLmdldENvbnRhaW5lcigpLmdldFRyYW5zbGF0aW9uKCkuZ2V0KCdtb2RhbC5kaXJ0eScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeSgnI3JlbW90ZV9mb3JtX21vZGFsIC5tb2RhbC1ib2R5JykucHJlcGVuZCgnPHAgY2xhc3M9XCInKyhzZWxmLm1vZGFsLmhhc0NsYXNzKCdtb2RhbC1kYW5nZXInKSA/ICd3ZWxsIHdlbGwtc20gJyA6ICcnKSArICd0ZXh0LWRhbmdlciBzbWFsbCByZW1vdGVfbW9kYWxfaXNfZGlydHlfd2FybmluZ1wiPicgKyBtc2cgKyAnPC9wPicpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGpRdWVyeShzZWxmLl9nZXRGb3JtSWRlbnRpZmllcigpKS5vZmYoJ2NoYW5nZScsIHNlbGYuX2lzRGlydHlIYW5kbGVyKTtcclxuICAgICAgICAgICAgc2VsZi5pc0RpcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHNlbGYuZ2V0Q29udGFpbmVyKCkuZ2V0UGx1Z2luKCdldmVudCcpLnRyaWdnZXIoJ21vZGFsLWhpZGUnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLm1vZGFsLm9uKCdoaWRkZW4uYnMubW9kYWwnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vIGtpbGwgYWxsIHJlZmVyZW5jZXMsIHNvIEdDIGNhbiBraWNrIGluXHJcbiAgICAgICAgICAgIHNlbGYuZ2V0Q29udGFpbmVyKCkuZ2V0UGx1Z2luKCdmb3JtJykuZGVzdHJveUZvcm0oc2VsZi5fZ2V0Rm9ybUlkZW50aWZpZXIoKSk7XHJcbiAgICAgICAgICAgIGpRdWVyeSgnI3JlbW90ZV9mb3JtX21vZGFsIC5tb2RhbC1ib2R5JykucmVwbGFjZVdpdGgoJycpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLm1vZGFsLm9uKCdzaG93LmJzLm1vZGFsJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzZWxmLmdldENvbnRhaW5lcigpLmdldFBsdWdpbignZXZlbnQnKS50cmlnZ2VyKCdtb2RhbC1zaG93Jyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5vbignc2hvd24uYnMubW9kYWwnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vIHdvcmthcm91bmQgZm9yIGF1dG9mb2N1cyBhdHRyaWJ1dGUsIGFzIHRoZSBtb2RhbCBcInN0ZWFsc1wiIGl0XHJcbiAgICAgICAgICAgIGxldCBmb3JtQXV0b2ZvY3VzID0galF1ZXJ5KHNlbGYuX2dldEZvcm1JZGVudGlmaWVyKCkpLmZpbmQoJ1thdXRvZm9jdXNdJyk7XHJcbiAgICAgICAgICAgIGlmIChmb3JtQXV0b2ZvY3VzLmxlbmd0aCA8IDEpIHtcclxuICAgICAgICAgICAgICAgIGZvcm1BdXRvZm9jdXMgPSBqUXVlcnkoc2VsZi5fZ2V0Rm9ybUlkZW50aWZpZXIoKSkuZmluZCgnaW5wdXRbdHlwZT10ZXh0XSx0ZXh0YXJlYSxzZWxlY3QnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3JtQXV0b2ZvY3VzLmZpbHRlcignOm5vdChcIltkYXRhLWRhdGV0aW1lcGlja2VyPW9uXVwiKScpLmZpbHRlcignOnZpc2libGU6Zmlyc3QnKS5mb2N1cygpLmRlbGF5KDEwMDApLmZvY3VzKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuX2FkZENsaWNrSGFuZGxlcih0aGlzLnNlbGVjdG9yLCBmdW5jdGlvbihocmVmKSB7XHJcbiAgICAgICAgICAgIHNlbGYub3BlblVybEluTW9kYWwoaHJlZik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb3BlblVybEluTW9kYWwodXJsLCBlcnJvckhhbmRsZXIpIHtcclxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKGVycm9ySGFuZGxlciA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGVycm9ySGFuZGxlciA9IGZ1bmN0aW9uKHhociwgZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gdW5kZWZpbmVkIHx8IHhoci5zdGF0dXMgIT09IDQwMykge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IHVybDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGpRdWVyeS5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGh0bWwpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuX29wZW5Gb3JtSW5Nb2RhbChodG1sKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGVycm9ySGFuZGxlclxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0aGUgQ1NTIHNlbGVjdG9yIGZvciB0aGUgbW9kYWwgZm9ybS5cclxuICAgICAqIFxyXG4gICAgICogQHJldHVybnMge3N0cmluZ31cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIF9nZXRGb3JtSWRlbnRpZmllcigpIHtcclxuICAgICAgICByZXR1cm4gJyNyZW1vdGVfZm9ybV9tb2RhbCAubW9kYWwtY29udGVudCBmb3JtJztcclxuICAgIH1cclxuXHJcbiAgICBfb3BlbkZvcm1Jbk1vZGFsKGh0bWwpIHtcclxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgbGV0IGZvcm1JZGVudGlmaWVyID0gdGhpcy5fZ2V0Rm9ybUlkZW50aWZpZXIoKTtcclxuICAgICAgICAvLyBpZiBhbnkgb2YgdGhlc2UgaXMgZm91bmQgaW4gYSByZXNwb25zZSwgdGhlIGZvcm0gd2lsbCBiZSByZS1kaXNwbGF5ZWRcclxuICAgICAgICBsZXQgZmxhc2hFcnJvcklkZW50aWZpZXIgPSAnZGl2LmFsZXJ0LWVycm9yJztcclxuICAgICAgICAvLyBtZXNzYWdlcyB0byBzaG93IGFib3ZlIHRoZSBmb3JtXHJcbiAgICAgICAgbGV0IGZsYXNoTWVzc2FnZUlkZW50aWZpZXIgPSAnZGl2LmFsZXJ0JztcclxuICAgICAgICBsZXQgZm9ybSA9IGpRdWVyeShmb3JtSWRlbnRpZmllcik7XHJcbiAgICAgICAgbGV0IHJlbW90ZU1vZGFsID0gdGhpcy5tb2RhbDtcclxuXHJcbiAgICAgICAgLy8gd2lsbCBiZSAocmUtKWFjdGl2YXRlZCBsYXRlclxyXG4gICAgICAgIGZvcm0ub2ZmKCdzdWJtaXQnKTtcclxuXHJcbiAgICAgICAgLy8gbG9hZCBuZXcgZm9ybSBmcm9tIGdpdmVuIGNvbnRlbnRcclxuICAgICAgICBpZiAoalF1ZXJ5KGh0bWwpLmZpbmQoJyNmb3JtX21vZGFsIC5tb2RhbC1jb250ZW50JykubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAvLyBzd2l0Y2ggY2xhc3NlcywgaW4gY2FzZSB0aGUgbW9kYWwgdHlwZSBjaGFuZ2VkXHJcbiAgICAgICAgICAgIHJlbW90ZU1vZGFsLm9uKCdoaWRkZW4uYnMubW9kYWwnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVtb3RlTW9kYWwuaGFzQ2xhc3MoJ21vZGFsLWRhbmdlcicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVtb3RlTW9kYWwucmVtb3ZlQ2xhc3MoJ21vZGFsLWRhbmdlcicpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChqUXVlcnkoaHRtbCkuZmluZCgnI2Zvcm1fbW9kYWwnKS5oYXNDbGFzcygnbW9kYWwtZGFuZ2VyJykpIHtcclxuICAgICAgICAgICAgICAgIHJlbW90ZU1vZGFsLmFkZENsYXNzKCdtb2RhbC1kYW5nZXInKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgalF1ZXJ5KCcjcmVtb3RlX2Zvcm1fbW9kYWwgLm1vZGFsLWNvbnRlbnQnKS5yZXBsYWNlV2l0aChcclxuICAgICAgICAgICAgICAgIGpRdWVyeShodG1sKS5maW5kKCcjZm9ybV9tb2RhbCAubW9kYWwtY29udGVudCcpXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBqUXVlcnkoJyNyZW1vdGVfZm9ybV9tb2RhbCBbZGF0YS1kaXNtaXNzPW1vZGFsXScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5pc0RpcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gYWN0aXZhdGUgbmV3IGxvYWRlZCB3aWRnZXRzXHJcbiAgICAgICAgICAgIHNlbGYuZ2V0Q29udGFpbmVyKCkuZ2V0UGx1Z2luKCdmb3JtJykuYWN0aXZhdGVGb3JtKGZvcm1JZGVudGlmaWVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHNob3cgZXJyb3IgZmxhc2ggbWVzc2FnZXNcclxuICAgICAgICBsZXQgZmxhc2hNZXNzYWdlcyA9IGpRdWVyeShodG1sKS5maW5kKGZsYXNoTWVzc2FnZUlkZW50aWZpZXIpO1xyXG4gICAgICAgIGlmIChmbGFzaE1lc3NhZ2VzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgalF1ZXJ5KCcjcmVtb3RlX2Zvcm1fbW9kYWwgLm1vZGFsLWJvZHknKS5wcmVwZW5kKGZsYXNoTWVzc2FnZXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAvLyBhIGZpeCBmb3IgZmlyZWZveCBmb2N1cyBwcm9ibGVtcyB3aXRoIGRhdGVwaWNrZXIgaW4gbW9kYWxcclxuICAgICAgICAvLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2tldmlucGFwc3Qva2ltYWkyL2lzc3Vlcy82MThcclxuICAgICAgICBsZXQgZW5mb3JjZU1vZGFsRm9jdXNGbiA9IGpRdWVyeS5mbi5tb2RhbC5Db25zdHJ1Y3Rvci5wcm90b3R5cGUuZW5mb3JjZUZvY3VzO1xyXG4gICAgICAgIGpRdWVyeS5mbi5tb2RhbC5Db25zdHJ1Y3Rvci5wcm90b3R5cGUuZW5mb3JjZUZvY3VzID0gZnVuY3Rpb24oKSB7fTtcclxuICAgICAgICByZW1vdGVNb2RhbC5vbignaGlkZGVuLmJzLm1vZGFsJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBqUXVlcnkuZm4ubW9kYWwuQ29uc3RydWN0b3IucHJvdG90eXBlLmVuZm9yY2VGb2N1cyA9IGVuZm9yY2VNb2RhbEZvY3VzRm47XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICAgICAgcmVtb3RlTW9kYWwubW9kYWwoJ3Nob3cnKTtcclxuXHJcbiAgICAgICAgLy8gdGhlIG5ldyBmb3JtIHRoYXQgd2FzIGxvYWRlZCB2aWEgYWpheFxyXG4gICAgICAgIGZvcm0gPSBqUXVlcnkoZm9ybUlkZW50aWZpZXIpO1xyXG5cclxuICAgICAgICB0aGlzLl9pc0RpcnR5SGFuZGxlciA9IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgc2VsZi5pc0RpcnR5ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9ybS5vbignY2hhbmdlJywgdGhpcy5faXNEaXJ0eUhhbmRsZXIpO1xyXG5cclxuICAgICAgICAvLyBjbGljayBoYW5kbGVyIGZvciBtb2RhbCBzYXZlIGJ1dHRvbiwgdG8gc2VuZCBmb3JtcyB2aWEgYWpheFxyXG4gICAgICAgIGZvcm0ub24oJ3N1Ym1pdCcsIGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAgICAgY29uc3QgYnRuID0galF1ZXJ5KGZvcm1JZGVudGlmaWVyICsgJyBidXR0b25bdHlwZT1zdWJtaXRdJykuYnV0dG9uKCdsb2FkaW5nJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50TmFtZSA9IGZvcm0uYXR0cignZGF0YS1mb3JtLWV2ZW50Jyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50cyA9IHNlbGYuZ2V0Q29udGFpbmVyKCkuZ2V0UGx1Z2luKCdldmVudCcpO1xyXG4gICAgICAgICAgICBjb25zdCBhbGVydCA9IHNlbGYuZ2V0Q29udGFpbmVyKCkuZ2V0UGx1Z2luKCdhbGVydCcpO1xyXG5cclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICBqUXVlcnkuYWpheCh7XHJcbiAgICAgICAgICAgICAgICB1cmw6IGZvcm0uYXR0cignYWN0aW9uJyksXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBmb3JtLmF0dHIoJ21ldGhvZCcpLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogZm9ybS5zZXJpYWxpemUoKSxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGh0bWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBidG4uYnV0dG9uKCdyZXNldCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBoYXNGaWVsZEVycm9yID0galF1ZXJ5KGh0bWwpLmZpbmQoJyNmb3JtX21vZGFsIC5tb2RhbC1jb250ZW50IC5oYXMtZXJyb3InKS5sZW5ndGggPiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBoYXNGb3JtRXJyb3IgPSBqUXVlcnkoaHRtbCkuZmluZCgnI2Zvcm1fbW9kYWwgLm1vZGFsLWNvbnRlbnQgdWwubGlzdC11bnN0eWxlZCBsaS50ZXh0LWRhbmdlcicpLmxlbmd0aCA+IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGhhc0ZsYXNoRXJyb3IgPSBqUXVlcnkoaHRtbCkuZmluZChmbGFzaEVycm9ySWRlbnRpZmllcikubGVuZ3RoID4gMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhhc0ZpZWxkRXJyb3IgfHwgaGFzRm9ybUVycm9yIHx8IGhhc0ZsYXNoRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5fb3BlbkZvcm1Jbk1vZGFsKGh0bWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50cy50cmlnZ2VyKGV2ZW50TmFtZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0cnkgdG8gZmluZCBmb3JtIGRlZmluZWQgbWVzc2FnZXMgZmlyc3QgLi4uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtc2cgPSBmb3JtLmF0dHIoJ2RhdGEtbXNnLXN1Y2Nlc3MnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1zZyA9PT0gbnVsbCB8fCBtc2cgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gLi4uIGJ1dCBpZiBub25lIHdhcyBhdmFpbGFibGUsIGNoZWNrIHRoZSByZXNwb25zZSB0byBmaW5kIHNlcnZlciByZW5kZXJlZCBmbGFzaC1tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmxhc2hNZXNzYWdlID0galF1ZXJ5KGh0bWwpLmZpbmQoJ3NlY3Rpb24uY29udGVudCBkaXYucm93IGRpdi5hbGVydC5hbGVydC1zdWNjZXNzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmxhc2hNZXNzYWdlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmxhc2hDb250ZW50ID0gZmxhc2hNZXNzYWdlLmNvbnRlbnRzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZsYXNoQ29udGVudC5sZW5ndGggPT09IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnID0gZmxhc2hDb250ZW50WzJdLnRleHRDb250ZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gLi4uIGFuZCBpZiBldmVuIHRoYXQgaXMgbm90IGF2YWlsYWJsZSwgd2UgdXNlIGEgZ2VuZXJpYyBmYWxsYmFjayBtZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtc2cgPT09IG51bGwgfHwgbXNnID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZyA9ICdhY3Rpb24udXBkYXRlLnN1Y2Nlc3MnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuaXNEaXJ0eSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdGVNb2RhbC5tb2RhbCgnaGlkZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydC5zdWNjZXNzKG1zZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24oeGhyLCBlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZSA9IGZvcm0uYXR0cignZGF0YS1tc2ctZXJyb3InKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobWVzc2FnZSA9PT0gbnVsbCB8fCBtZXNzYWdlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9ICdhY3Rpb24udXBkYXRlLmVycm9yJztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHhoci5yZXNwb25zZUpTT04gJiYgeGhyLnJlc3BvbnNlSlNPTi5tZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVyciA9IHhoci5yZXNwb25zZUpTT04ubWVzc2FnZTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHhoci5zdGF0dXMgJiYgeGhyLnN0YXR1c1RleHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyID0gJ1snICsgeGhyLnN0YXR1cyArJ10gJyArIHhoci5zdGF0dXNUZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBhbGVydC5lcnJvcihtZXNzYWdlLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgaXMgdXNlZnVsIGZvciBjaGFuZ2luZyBmb3JtIGZpZWxkcyBhbmQgcmV0cnlpbmcgdG8gc2F2ZSAoYW5kIGluIGRldmVsb3BtZW50IHRvIHRlc3QgZm9ybSBjaGFuZ2VzKVxyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ0bi5idXR0b24oJ3Jlc2V0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMTUwMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCIvKlxyXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgS2ltYWkgdGltZS10cmFja2luZyBhcHAuXHJcbiAqXHJcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXHJcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxyXG4gKi9cclxuXHJcbi8qIVxyXG4gKiBbS0lNQUldIEtpbWFpQWxlcnQ6IG5vdGlmaWNhdGlvbnMgZm9yIEtpbWFpXHJcbiAqL1xyXG5cclxuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInXHJcbmltcG9ydCBLaW1haVBsdWdpbiBmcm9tIFwiLi4vS2ltYWlQbHVnaW5cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtpbWFpQWxlcnQgZXh0ZW5kcyBLaW1haVBsdWdpbiB7XHJcblxyXG4gICAgZ2V0SWQoKSB7XHJcbiAgICAgICAgcmV0dXJuICdhbGVydCc7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGl0bGVcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfGFycmF5fSBtZXNzYWdlXHJcbiAgICAgKi9cclxuICAgIGVycm9yKHRpdGxlLCBtZXNzYWdlKSB7XHJcbiAgICAgICAgY29uc3QgdHJhbnNsYXRpb24gPSB0aGlzLmdldENvbnRhaW5lcigpLmdldFRyYW5zbGF0aW9uKCk7XHJcbiAgICAgICAgaWYgKHRyYW5zbGF0aW9uLmhhcyh0aXRsZSkpIHtcclxuICAgICAgICAgICAgdGl0bGUgPSB0cmFuc2xhdGlvbi5nZXQodGl0bGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHJhbnNsYXRpb24uaGFzKG1lc3NhZ2UpKSB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2UgPSB0cmFuc2xhdGlvbi5nZXQobWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShtZXNzYWdlKSkge1xyXG4gICAgICAgICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiB0aXRsZS5yZXBsYWNlKCclcmVhc29uJScsICcnKSxcclxuICAgICAgICAgICAgICAgIGh0bWw6IG1lc3NhZ2Uuam9pbignPGJyPicpLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiB0aXRsZS5yZXBsYWNlKCclcmVhc29uJScsICcnKSxcclxuICAgICAgICAgICAgICAgIHRleHQ6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB3YXJuaW5nKG1lc3NhZ2UpIHtcclxuICAgICAgICB0aGlzLl9zaG93KCd3YXJuaW5nJywgbWVzc2FnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3VjY2VzcyhtZXNzYWdlKSB7XHJcbiAgICAgICAgdGhpcy5fdG9hc3QoJ3N1Y2Nlc3MnLCBtZXNzYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICBpbmZvKG1lc3NhZ2UpIHtcclxuICAgICAgICB0aGlzLl9zaG93KCdpbmZvJywgbWVzc2FnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgX3Nob3codHlwZSwgbWVzc2FnZSkge1xyXG4gICAgICAgIGNvbnN0IHRyYW5zbGF0aW9uID0gdGhpcy5nZXRDb250YWluZXIoKS5nZXRUcmFuc2xhdGlvbigpO1xyXG5cclxuICAgICAgICBpZiAodHJhbnNsYXRpb24uaGFzKG1lc3NhZ2UpKSB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2UgPSB0cmFuc2xhdGlvbi5nZXQobWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgICAgICBpY29uOiB0eXBlLFxyXG4gICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfdG9hc3QodHlwZSwgbWVzc2FnZSkge1xyXG4gICAgICAgIGNvbnN0IHRyYW5zbGF0aW9uID0gdGhpcy5nZXRDb250YWluZXIoKS5nZXRUcmFuc2xhdGlvbigpO1xyXG5cclxuICAgICAgICBpZiAodHJhbnNsYXRpb24uaGFzKG1lc3NhZ2UpKSB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2UgPSB0cmFuc2xhdGlvbi5nZXQobWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgICAgICB0aW1lcjogMjAwMCxcclxuICAgICAgICAgICAgdGltZXJQcm9ncmVzc0JhcjogdHJ1ZSxcclxuICAgICAgICAgICAgdG9hc3Q6IHRydWUsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAndG9wJyxcclxuICAgICAgICAgICAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxyXG4gICAgICAgICAgICBpY29uOiB0eXBlLFxyXG4gICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxiYWNrIHJlY2VpdmVzIGEgdmFsdWUgYW5kIG5lZWRzIHRvIGRlY2lkZSB3aGF0IHNob3VsZCBoYXBwZW4gd2l0aCBpdFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBtZXNzYWdlXHJcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2tcclxuICAgICAqL1xyXG4gICAgcXVlc3Rpb24obWVzc2FnZSwgY2FsbGJhY2spIHtcclxuICAgICAgICBjb25zdCB0cmFuc2xhdGlvbiA9IHRoaXMuZ2V0Q29udGFpbmVyKCkuZ2V0VHJhbnNsYXRpb24oKTtcclxuXHJcbiAgICAgICAgaWYgKHRyYW5zbGF0aW9uLmhhcyhtZXNzYWdlKSkge1xyXG4gICAgICAgICAgICBtZXNzYWdlID0gdHJhbnNsYXRpb24uZ2V0KG1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICAgICAgdGl0bGU6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgIGljb246ICdxdWVzdGlvbicsXHJcbiAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiB0cmFuc2xhdGlvbi5nZXQoJ2NvbmZpcm0nKSxcclxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogdHJhbnNsYXRpb24uZ2V0KCdjYW5jZWwnKVxyXG4gICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBjYWxsYmFjayhyZXN1bHQudmFsdWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCIvKlxyXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgS2ltYWkgdGltZS10cmFja2luZyBhcHAuXHJcbiAqXHJcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXHJcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxyXG4gKi9cclxuXHJcbi8qIVxyXG4gKiBbS0lNQUldIEtpbWFpQWx0ZXJuYXRpdmVMaW5rc1xyXG4gKlxyXG4gKiBhbGxvd3MgdG8gYXNzaWduIHRoZSBnaXZlbiBzZWxlY3RvciB0byBhbnkgZWxlbWVudCwgd2hpY2ggdGhlbiBpcyB1c2VkIGFzIGNsaWNrLWhhbmRsZXJcclxuICogcmVkaXJlY3RpbmcgdG8gdGhlIFVSTCBnaXZlbiBpbiB0aGUgZWxlbWVudHMgJ2RhdGEtaHJlZicgb3IgJ2hyZWYnIGF0dHJpYnV0ZVxyXG4gKi9cclxuXHJcbmltcG9ydCBqUXVlcnkgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IEtpbWFpUmVkdWNlZENsaWNrSGFuZGxlciBmcm9tIFwiLi9LaW1haVJlZHVjZWRDbGlja0hhbmRsZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtpbWFpQWx0ZXJuYXRpdmVMaW5rcyBleHRlbmRzIEtpbWFpUmVkdWNlZENsaWNrSGFuZGxlciB7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2VsZWN0b3IpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0b3IgPSBzZWxlY3RvcjtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIHRoaXMuX2FkZENsaWNrSGFuZGxlcih0aGlzLnNlbGVjdG9yLCBmdW5jdGlvbihocmVmKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IGhyZWY7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG59XHJcbiIsIi8qXHJcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBLaW1haSB0aW1lLXRyYWNraW5nIGFwcC5cclxuICpcclxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcclxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXHJcbiAqL1xyXG5cclxuaW1wb3J0IGpRdWVyeSBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgS2ltYWlQbHVnaW4gZnJvbSBcIi4uL0tpbWFpUGx1Z2luXCI7XHJcblxyXG4vKipcclxuICogU3VwcG9ydGluZyBhdXRvLWNvbXBsZXRlIGZpZWxkcyB2aWEgQVBJLlxyXG4gKiBDdXJyZW50bHkgdXNlZCBmb3IgdGltZXNoZWV0IHRhZ2dpbmcgaW4gdG9vbGJhciBhbmQgZWRpdCBkaWFsb2dzLlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2ltYWlBdXRvY29tcGxldGUgZXh0ZW5kcyBLaW1haVBsdWdpbiB7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2VsZWN0b3IpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0b3IgPSBzZWxlY3RvcjtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIHRoaXMubWluQ2hhcnMgPSB0aGlzLmdldENvbmZpZ3VyYXRpb24oJ2F1dG9Db21wbGV0ZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldElkKCkge1xyXG4gICAgICAgIHJldHVybiAnYXV0b2NvbXBsZXRlJztcclxuICAgIH1cclxuXHJcbiAgICBzcGxpdFRhZ0xpc3QodmFsKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbC5zcGxpdCgvLFxccyovKTtcclxuICAgIH1cclxuXHJcbiAgICBleHRyYWN0TGFzdFRhZyh0ZXJtKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3BsaXRUYWdMaXN0KHRlcm0pLnBvcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGFjdGl2YXRlQXV0b2NvbXBsZXRlKHNlbGVjdG9yKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgXHJcbiAgICAgICAgalF1ZXJ5KHNlbGVjdG9yICsgJyAnICsgdGhpcy5zZWxlY3RvcikuZWFjaChmdW5jdGlvbihpbmRleCkge1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50RmllbGQgPSBqUXVlcnkodGhpcyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGFwaVVybCA9IGN1cnJlbnRGaWVsZC5hdHRyKCdkYXRhLWF1dG9jb21wbGV0ZS11cmwnKTtcclxuICAgICAgICAgICAgY29uc3QgQVBJID0gc2VsZi5nZXRDb250YWluZXIoKS5nZXRQbHVnaW4oJ2FwaScpO1xyXG5cclxuICAgICAgICAgICAgY3VycmVudEZpZWxkXHJcbiAgICAgICAgICAgICAgICAvLyBkb24ndCBuYXZpZ2F0ZSBhd2F5IGZyb20gdGhlIGZpZWxkIG9uIHRhYiB3aGVuIHNlbGVjdGluZyBhbiBpdGVtXHJcbiAgICAgICAgICAgICAgICAub24oXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSBqUXVlcnkudWkua2V5Q29kZS5UQUIgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLmF1dG9jb21wbGV0ZShcImluc3RhbmNlXCIpLm1lbnUuYWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5hdXRvY29tcGxldGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2U6IGZ1bmN0aW9uIChyZXF1ZXN0LCByZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFzdEVudHJ5ID0gc2VsZi5leHRyYWN0TGFzdFRhZyhyZXF1ZXN0LnRlcm0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQVBJLmdldChhcGlVcmwsIHsnbmFtZSc6IGxhc3RFbnRyeX0sIGZ1bmN0aW9uKGRhdGEpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY3VzdG9tIG1pbkxlbmd0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRlcm0gPSBzZWxmLmV4dHJhY3RMYXN0VGFnKHRoaXMudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRlcm0ubGVuZ3RoIDwgc2VsZi5taW5DaGFycykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXM6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHByZXZlbnQgdmFsdWUgaW5zZXJ0ZWQgb24gZm9jdXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0OiBmdW5jdGlvbiAoZXZlbnQsIHVpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGVybXMgPSBzZWxmLnNwbGl0VGFnTGlzdCh0aGlzLnZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgdGhlIGN1cnJlbnQgaW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlcm1zLnBvcCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIHNlbGVjdGVkIHRhZyBpcyBhbHJlYWR5IGluIGxpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGVybXMuaW5jbHVkZXModWkuaXRlbS52YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhZGQgdGhlIHNlbGVjdGVkIGl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXJtcy5wdXNoKHVpLml0ZW0udmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYWRkIHBsYWNlaG9sZGVyIHRvIGdldCB0aGUgY29tbWEtYW5kLXNwYWNlIGF0IHRoZSBlbmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlcm1zLnB1c2goXCJcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHRlcm1zLmpvaW4oXCIsIFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGRlc3Ryb3lBdXRvY29tcGxldGUoc2VsZWN0b3IpIHtcclxuICAgICAgICBqUXVlcnkoc2VsZWN0b3IgKyAnICcgKyB0aGlzLnNlbGVjdG9yKS5lYWNoKGZ1bmN0aW9uKGluZGV4KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRGaWVsZCA9IGpRdWVyeSh0aGlzKTtcclxuICAgICAgICAgICAgY3VycmVudEZpZWxkLmF1dG9jb21wbGV0ZShcImRlc3Ryb3lcIik7XHJcbiAgICAgICAgICAgIGN1cnJlbnRGaWVsZC5yZW1vdmVEYXRhKCdhdXRvY29tcGxldGUnKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiLypcclxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIEtpbWFpIHRpbWUtdHJhY2tpbmcgYXBwLlxyXG4gKlxyXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxyXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cclxuICovXHJcblxyXG5pbXBvcnQgS2ltYWlQbHVnaW4gZnJvbSBcIi4uL0tpbWFpUGx1Z2luXCI7XHJcblxyXG4vKipcclxuICogTmVlZHMgdG8gYmUgaW5pdGlhbGl6ZWQgd2l0aCBhIGNsYXNzIG5hbWUuXHJcbiAqXHJcbiAqIEFsbG93cyB0byBhc3NpZ24gdGhlIGdpdmVuIHNlbGVjdG9yIHRvIGFueSBlbGVtZW50LCB3aGljaCB0aGVuIGlzIHVzZWQgYXMgY2xpY2staGFuZGxlclxyXG4gKiBjYWxsaW5nIGFuIEFQSSBtZXRob2QgYW5kIHRyaWdnZXIgdGhlIGV2ZW50IGZyb20gZGF0YS1ldmVudCBhdHRyaWJ1dGUgYWZ0ZXJ3YXJkcy5cclxuICpcclxuICogQHBhcmFtIHNlbGVjdG9yXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLaW1haUNvbmZpcm1hdGlvbkxpbmsgZXh0ZW5kcyBLaW1haVBsdWdpbiB7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2VsZWN0b3IpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0b3IgPSBzZWxlY3RvcjtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICAgbGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICAgICAgd2hpbGUgKHRhcmdldCAhPT0gbnVsbCAmJiAhdGFyZ2V0Lm1hdGNoZXMoJ2JvZHknKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoc2VsZi5zZWxlY3RvcikpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVzID0gdGFyZ2V0LmRhdGFzZXQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlzIHRoaXMgYSBsaW5rPyBcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdXJsID0gYXR0cmlidXRlc1snaHJlZiddO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIG9yIGFub3RoZXIgSFRNTCBlbGVtZW50IHdpdGggYSBjdXN0b20gaHJlZiBcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXVybCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmwgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKCdocmVmJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIG9yIGlzIHRoaXMgYSBidXR0b24/XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZvcm0gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXQudHlwZSA9PT0gJ3N1Ym1pdCcgJiYgdGFyZ2V0LmZvcm0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtID0gdGFyZ2V0LmZvcm07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoYXR0cmlidXRlcy5xdWVzdGlvbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZ2V0Q29udGFpbmVyKCkuZ2V0UGx1Z2luKCdhbGVydCcpLnF1ZXN0aW9uKGF0dHJpYnV0ZXMucXVlc3Rpb24sIGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZm9ybSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbiA9IHVybDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodXJsICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtLmFjdGlvbiA9IHVybDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtLnN1Ym1pdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRhcmdldCA9IHRhcmdldC5wYXJlbnROb2RlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG59XHJcbiIsIi8qXHJcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBLaW1haSB0aW1lLXRyYWNraW5nIGFwcC5cclxuICpcclxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcclxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXHJcbiAqL1xyXG5cclxuLyohXHJcbiAqIFtLSU1BSV0gS2ltYWlEYXRhdGFibGU6IGhhbmRsZXMgZnVuY3Rpb25hbGl0eSBmb3IgdGhlIGRhdGF0YWJsZVxyXG4gKi9cclxuXHJcbmltcG9ydCBqUXVlcnkgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IEtpbWFpUGx1Z2luIGZyb20gXCIuLi9LaW1haVBsdWdpblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2ltYWlEYXRhdGFibGUgZXh0ZW5kcyBLaW1haVBsdWdpbiB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29udGVudEFyZWFTZWxlY3RvciwgdGFibGVTZWxlY3Rvcikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5jb250ZW50QXJlYSA9IGNvbnRlbnRBcmVhU2VsZWN0b3I7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RvciA9IHRhYmxlU2VsZWN0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SWQoKSB7XHJcbiAgICAgICAgcmV0dXJuICdkYXRhdGFibGUnO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgY29uc3QgZGF0YVRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9yKTtcclxuXHJcbiAgICAgICAgLy8gbm90IGV2ZXJ5IHBhZ2UgY29udGFpbnMgYSBkYXRhVGFibGVcclxuICAgICAgICBpZiAoZGF0YVRhYmxlID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBkYXRhVGFibGUuZGF0YXNldDtcclxuICAgICAgICBjb25zdCBldmVudHMgPSBhdHRyaWJ1dGVzWydyZWxvYWRFdmVudCddO1xyXG5cclxuICAgICAgICB0aGlzLmZpeERyb3Bkb3ducygpO1xyXG5cclxuICAgICAgICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgY29uc3QgaGFuZGxlID0gZnVuY3Rpb24oKSB7IHNlbGYucmVsb2FkRGF0YXRhYmxlKCk7IH07XHJcblxyXG4gICAgICAgIGZvciAobGV0IGV2ZW50TmFtZSBvZiBldmVudHMuc3BsaXQoJyAnKSkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgaGFuZGxlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3BhZ2luYXRpb24tY2hhbmdlJywgaGFuZGxlKTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdmaWx0ZXItY2hhbmdlJywgaGFuZGxlKTtcclxuICAgIH1cclxuXHJcbiAgICByZWxvYWREYXRhdGFibGUoKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgY29uc3QgY29udGVudEFyZWEgPSB0aGlzLmNvbnRlbnRBcmVhO1xyXG4gICAgICAgIGNvbnN0IGR1cmF0aW9ucyA9IHRoaXMuZ2V0Q29udGFpbmVyKCkuZ2V0UGx1Z2luKCd0aW1lc2hlZXQtZHVyYXRpb24nKTtcclxuICAgICAgICBjb25zdCB0b29sYmFyU2VsZWN0b3IgPSB0aGlzLmdldENvbnRhaW5lcigpLmdldFBsdWdpbigndG9vbGJhcicpLmdldFNlbGVjdG9yKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgZm9ybSA9IGpRdWVyeSh0b29sYmFyU2VsZWN0b3IpO1xyXG4gICAgICAgIGxldCBsb2FkaW5nID0gJzxkaXYgY2xhc3M9XCJvdmVybGF5XCI+PGkgY2xhc3M9XCJmYXMgZmEtc3luYyBmYS1zcGluXCI+PC9pPjwvZGl2Pic7XHJcbiAgICAgICAgalF1ZXJ5KGNvbnRlbnRBcmVhKS5hcHBlbmQobG9hZGluZyk7XHJcblxyXG4gICAgICAgIC8vIHJlbW92ZSB0aGUgZW1wdHkgZmllbGRzIHRvIHByZXZlbnQgZXJyb3JzXHJcbiAgICAgICAgbGV0IGZvcm1EYXRhID0galF1ZXJ5KHRvb2xiYXJTZWxlY3RvciArICcgOmlucHV0JylcclxuICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbihpbmRleCwgZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGpRdWVyeShlbGVtZW50KS52YWwoKSAhPT0gJyc7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zZXJpYWxpemUoKTtcclxuXHJcbiAgICAgICAgalF1ZXJ5LmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IGZvcm0uYXR0cignYWN0aW9uJyksXHJcbiAgICAgICAgICAgIHR5cGU6IGZvcm0uYXR0cignbWV0aG9kJyksXHJcbiAgICAgICAgICAgIGRhdGE6IGZvcm1EYXRhLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihodG1sKSB7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkoY29udGVudEFyZWEpLnJlcGxhY2VXaXRoKFxyXG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeShodG1sKS5maW5kKGNvbnRlbnRBcmVhKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9ucy51cGRhdGVSZWNvcmRzKCk7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmZpeERyb3Bkb3ducygpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24oeGhyLCBlcnIpIHtcclxuICAgICAgICAgICAgICAgIGZvcm0uc3VibWl0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzaG93IGRyb3Bkb3duIG1lbnUgdXB3YXJkcywgaWYgaXQgaXMgb3V0c2lkZSB0aGUgdmlzaWJsZSB2aWV3cG9ydFxyXG4gICAgICovXHJcbiAgICBmaXhEcm9wZG93bnMoKSB7XHJcbiAgICAgICAgY29uc3QgZG9jSGVpZ2h0ID0galF1ZXJ5KGRvY3VtZW50KS5oZWlnaHQoKTtcclxuICAgICAgICBqUXVlcnkodGhpcy5zZWxlY3RvciArICcgW2RhdGEtdG9nZ2xlPWRyb3Bkb3duXScpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IGpRdWVyeSh0aGlzKS5wYXJlbnQoKTtcclxuICAgICAgICAgICAgY29uc3QgbWVudSA9IHBhcmVudC5maW5kKCcuZHJvcGRvd24tbWVudScpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHBhcmVudCAmJiBtZW51KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoKHBhcmVudC5vZmZzZXQoKS50b3AgKyBwYXJlbnQub3V0ZXJIZWlnaHQoKSArIG1lbnUub3V0ZXJIZWlnaHQoKSkgPiBkb2NIZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQuYWRkQ2xhc3MoJ2Ryb3B1cCcpLnJlbW92ZUNsYXNzKCdkcm9wZG93bicpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIEtpbWFpIHRpbWUtdHJhY2tpbmcgYXBwLlxyXG4gKlxyXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxyXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cclxuICovXHJcblxyXG4vKiFcclxuICogW0tJTUFJXSBLaW1haURhdGF0YWJsZUNvbHVtblZpZXc6IG1hbmFnZXMgdGhlIHZpc2liaWxpdHkgb2YgZGF0YS10YWJsZSBjb2x1bW5zIGluIGNvb2tpZXNcclxuICovXHJcblxyXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xyXG5pbXBvcnQgalF1ZXJ5IGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCBLaW1haVBsdWdpbiBmcm9tIFwiLi4vS2ltYWlQbHVnaW5cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtpbWFpRGF0YXRhYmxlQ29sdW1uVmlldyBleHRlbmRzIEtpbWFpUGx1Z2luIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihkYXRhQXR0cmlidXRlKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmRhdGFBdHRyaWJ1dGUgPSBkYXRhQXR0cmlidXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldElkKCkge1xyXG4gICAgICAgIHJldHVybiAnZGF0YXRhYmxlLWNvbHVtbi12aXNpYmlsaXR5JztcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIGxldCBkYXRhVGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbJyArIHRoaXMuZGF0YUF0dHJpYnV0ZSArICddJyk7XHJcbiAgICAgICAgaWYgKGRhdGFUYWJsZSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaWQgPSBkYXRhVGFibGUuZ2V0QXR0cmlidXRlKHRoaXMuZGF0YUF0dHJpYnV0ZSk7XHJcbiAgICAgICAgdGhpcy5tb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbF8nICsgdGhpcy5pZCk7XHJcbiAgICAgICAgdGhpcy5iaW5kQnV0dG9ucygpO1xyXG4gICAgfVxyXG5cclxuICAgIGJpbmRCdXR0b25zKCkge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLm1vZGFsLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbltkYXRhLXR5cGU9c2F2ZV0nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBzZWxmLnNhdmVWaXNpYmlsaXR5KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5xdWVyeVNlbGVjdG9yKCdidXR0b25bZGF0YS10eXBlPXJlc2V0XScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHNlbGYucmVzZXRWaXNpYmlsaXR5KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZm9yIChsZXQgY2hlY2tib3ggb2YgdGhpcy5tb2RhbC5xdWVyeVNlbGVjdG9yQWxsKCdmb3JtIGlucHV0W3R5cGU9Y2hlY2tib3hdJykpIHtcclxuICAgICAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmNoYW5nZVZpc2liaWxpdHkoY2hlY2tib3guZ2V0QXR0cmlidXRlKCduYW1lJyksIGNoZWNrYm94LmNoZWNrZWQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZVZpc2liaWxpdHkoKSB7XHJcbiAgICAgICAgY29uc3QgZm9ybSA9IHRoaXMubW9kYWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2Zvcm0nKVswXTtcclxuICAgICAgICBsZXQgc2V0dGluZ3MgPSB7fTtcclxuICAgICAgICBmb3IgKGxldCBjaGVja2JveCBvZiBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9Y2hlY2tib3hdJykpIHtcclxuICAgICAgICAgICAgc2V0dGluZ3NbY2hlY2tib3guZ2V0QXR0cmlidXRlKCduYW1lJyldID0gY2hlY2tib3guY2hlY2tlZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgQ29va2llcy5zZXQoZm9ybS5nZXRBdHRyaWJ1dGUoJ25hbWUnKSwgSlNPTi5zdHJpbmdpZnkoc2V0dGluZ3MpLCB7ZXhwaXJlczogMzY1LCBTYW1lU2l0ZTogJ1N0cmljdCd9KTtcclxuICAgICAgICBqUXVlcnkodGhpcy5tb2RhbCkubW9kYWwoJ3RvZ2dsZScpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0VmlzaWJpbGl0eSgpIHtcclxuICAgICAgICBjb25zdCBmb3JtID0gdGhpcy5tb2RhbC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnZm9ybScpWzBdO1xyXG4gICAgICAgIENvb2tpZXMucmVtb3ZlKGZvcm0uZ2V0QXR0cmlidXRlKCduYW1lJykpO1xyXG4gICAgICAgIGZvciAobGV0IGNoZWNrYm94IG9mIGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1jaGVja2JveF0nKSkge1xyXG4gICAgICAgICAgICBpZiAoIWNoZWNrYm94LmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgIGNoZWNrYm94LmNsaWNrKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMubW9kYWwpLm1vZGFsKCd0b2dnbGUnKTtcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VWaXNpYmlsaXR5KGNvbHVtbk5hbWUsIGNoZWNrZWQpIHtcclxuICAgICAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRhdGFibGVfJyArIHRoaXMuaWQpLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2RhdGFUYWJsZScpWzBdO1xyXG4gICAgICAgIGxldCBjb2x1bW4gPSAwO1xyXG4gICAgICAgIGxldCBmb3VuZENvbHVtbiA9IGZhbHNlO1xyXG4gICAgICAgIGZvciAobGV0IGNvbHVtbkVsZW1lbnQgb2YgdGFibGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3RoJykpIHtcclxuICAgICAgICAgICAgaWYgKGNvbHVtbkVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWZpZWxkJykgPT09IGNvbHVtbk5hbWUpIHtcclxuICAgICAgICAgICAgICAgIGZvdW5kQ29sdW1uID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoY29sdW1uRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2NvbHNwYW4nKSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1RhYmxlcyB3aXRoIGNvbHNwYW5zIGFyZSBub3Qgc3VwcG9ydGVkIScpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb2x1bW4rKztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghZm91bmRDb2x1bW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgcm93RWxlbWVudCBvZiB0YWJsZS5nZXRFbGVtZW50c0J5VGFnTmFtZSgndHInKSkge1xyXG4gICAgICAgICAgICBpZiAocm93RWxlbWVudC5jaGlsZHJlbltjb2x1bW5dID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgcm93RWxlbWVudC5jaGlsZHJlbltjb2x1bW5dLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcm93RWxlbWVudC5jaGlsZHJlbltjb2x1bW5dLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG4iLCIvKlxyXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgS2ltYWkgdGltZS10cmFja2luZyBhcHAuXHJcbiAqXHJcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXHJcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxyXG4gKi9cclxuXHJcbi8qIVxyXG4gKiBbS0lNQUldIEtpbWFpRGF0ZVBpY2tlcjogc2luZ2xlIGRhdGUgc2VsZWN0cyAoY3VycmVudGx5IHVudXNlZClcclxuICovXHJcblxyXG5pbXBvcnQgalF1ZXJ5IGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCBLaW1haVBsdWdpbiBmcm9tICcuLi9LaW1haVBsdWdpbic7XHJcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2ltYWlEYXRlUGlja2VyIGV4dGVuZHMgS2ltYWlQbHVnaW4ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNlbGVjdG9yKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnNlbGVjdG9yID0gc2VsZWN0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SWQoKSB7XHJcbiAgICAgICAgcmV0dXJuICdkYXRlLXBpY2tlcic7XHJcbiAgICB9XHJcblxyXG4gICAgYWN0aXZhdGVEYXRlUGlja2VyKHNlbGVjdG9yKSB7XHJcbiAgICAgICAgY29uc3QgVFJBTlNMQVRFID0gdGhpcy5nZXRDb250YWluZXIoKS5nZXRUcmFuc2xhdGlvbigpO1xyXG4gICAgICAgIGNvbnN0IERBVEVfVVRJTFMgPSB0aGlzLmdldENvbnRhaW5lcigpLmdldFBsdWdpbignZGF0ZScpO1xyXG4gICAgICAgIGNvbnN0IGZpcnN0RG93ID0gdGhpcy5nZXRDb25maWd1cmF0aW9uKCdmaXJzdF9kb3dfaXNvJykgJSA3O1xyXG5cclxuICAgICAgICBqUXVlcnkoc2VsZWN0b3IgKyAnICcgKyB0aGlzLnNlbGVjdG9yKS5lYWNoKGZ1bmN0aW9uKGluZGV4KSB7XHJcbiAgICAgICAgICAgIGxldCBsb2NhbGVGb3JtYXQgPSBqUXVlcnkodGhpcykuZGF0YSgnZm9ybWF0Jyk7XHJcbiAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5kYXRlcmFuZ2VwaWNrZXIoe1xyXG4gICAgICAgICAgICAgICAgc2luZ2xlRGF0ZVBpY2tlcjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHNob3dEcm9wZG93bnM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhdXRvVXBkYXRlSW5wdXQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbG9jYWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiBsb2NhbGVGb3JtYXQsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlyc3REYXk6IGZpcnN0RG93LFxyXG4gICAgICAgICAgICAgICAgICAgIGFwcGx5TGFiZWw6IFRSQU5TTEFURS5nZXQoJ2NvbmZpcm0nKSxcclxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxMYWJlbDogVFJBTlNMQVRFLmdldCgnY2FuY2VsJyksXHJcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tUmFuZ2VMYWJlbDogVFJBTlNMQVRFLmdldCgnY3VzdG9tUmFuZ2UnKSxcclxuICAgICAgICAgICAgICAgICAgICBkYXlzT2ZXZWVrOiBEQVRFX1VUSUxTLmdldFdlZWtEYXlzU2hvcnQoKSxcclxuICAgICAgICAgICAgICAgICAgICBtb250aE5hbWVzOiBEQVRFX1VUSUxTLmdldE1vbnRoTmFtZXMoKSxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBqUXVlcnkodGhpcykub24oJ2FwcGx5LmRhdGVyYW5nZXBpY2tlcicsIGZ1bmN0aW9uKGV2LCBwaWNrZXIpIHtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSh0aGlzKS52YWwocGlja2VyLnN0YXJ0RGF0ZS5mb3JtYXQobG9jYWxlRm9ybWF0KSk7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkodGhpcykudHJpZ2dlcihcImNoYW5nZVwiKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVzdHJveURhdGVQaWNrZXIoc2VsZWN0b3IpIHtcclxuICAgICAgICBqUXVlcnkoc2VsZWN0b3IgKyAnICcgKyB0aGlzLnNlbGVjdG9yKS5lYWNoKGZ1bmN0aW9uKGluZGV4KSB7XHJcbiAgICAgICAgICAgIGlmIChqUXVlcnkodGhpcykuZGF0YSgnZGF0ZXJhbmdlcGlja2VyJykgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLmRhdGVyYW5nZXBpY2tlcignZGVzdHJveScpO1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLmRhdGEoJ2RhdGVyYW5nZXBpY2tlcicpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG59XHJcbiIsIi8qXHJcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBLaW1haSB0aW1lLXRyYWNraW5nIGFwcC5cclxuICpcclxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcclxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXHJcbiAqL1xyXG5cclxuLyohXHJcbiAqIFtLSU1BSV0gS2ltYWlEYXRlUmFuZ2VQaWNrZXI6IGFjdGl2YXRlIHRoZSAoZGF0ZXJhbmdlIHBpY2tlcikgY29tcG91bmQgZmllbGQgaW4gdG9vbGJhclxyXG4gKi9cclxuXHJcbmltcG9ydCBqUXVlcnkgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IEtpbWFpUGx1Z2luIGZyb20gJy4uL0tpbWFpUGx1Z2luJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2ltYWlEYXRlUmFuZ2VQaWNrZXIgZXh0ZW5kcyBLaW1haVBsdWdpbiB7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2VsZWN0b3IpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0b3IgPSBzZWxlY3RvcjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJZCgpIHtcclxuICAgICAgICByZXR1cm4gJ2RhdGUtcmFuZ2UtcGlja2VyJztcclxuICAgIH1cclxuXHJcbiAgICBhY3RpdmF0ZURhdGVSYW5nZVBpY2tlcihzZWxlY3Rvcikge1xyXG4gICAgICAgIGNvbnN0IFRSQU5TTEFURSA9IHRoaXMuZ2V0Q29udGFpbmVyKCkuZ2V0VHJhbnNsYXRpb24oKTtcclxuICAgICAgICBjb25zdCBEQVRFX1VUSUxTID0gdGhpcy5nZXRDb250YWluZXIoKS5nZXRQbHVnaW4oJ2RhdGUnKTtcclxuICAgICAgICBjb25zdCBmaXJzdERvdyA9IHRoaXMuZ2V0Q29uZmlndXJhdGlvbignZmlyc3RfZG93X2lzbycpICUgNztcclxuXHJcbiAgICAgICAgalF1ZXJ5KHNlbGVjdG9yICsgJyAnICsgdGhpcy5zZWxlY3RvcikuZWFjaChmdW5jdGlvbihpbmRleCkge1xyXG4gICAgICAgICAgICBsZXQgbG9jYWxlRm9ybWF0ID0galF1ZXJ5KHRoaXMpLmRhdGEoJ2Zvcm1hdCcpO1xyXG4gICAgICAgICAgICBsZXQgc2VwYXJhdG9yID0galF1ZXJ5KHRoaXMpLmRhdGEoJ3NlcGFyYXRvcicpO1xyXG4gICAgICAgICAgICBsZXQgcmFuZ2VzTGlzdCA9IHt9O1xyXG5cclxuICAgICAgICAgICAgcmFuZ2VzTGlzdFtUUkFOU0xBVEUuZ2V0KCd0b2RheScpXSA9IFttb21lbnQoKSwgbW9tZW50KCldO1xyXG4gICAgICAgICAgICByYW5nZXNMaXN0W1RSQU5TTEFURS5nZXQoJ3llc3RlcmRheScpXSA9IFttb21lbnQoKS5zdWJ0cmFjdCgxLCAnZGF5cycpLCBtb21lbnQoKS5zdWJ0cmFjdCgxLCAnZGF5cycpXTtcclxuICAgICAgICAgICAgcmFuZ2VzTGlzdFtUUkFOU0xBVEUuZ2V0KCd0aGlzV2VlaycpXSA9IFttb21lbnQoKS5zdGFydE9mKCd3ZWVrJyksIG1vbWVudCgpLmVuZE9mKCd3ZWVrJyldO1xyXG4gICAgICAgICAgICByYW5nZXNMaXN0W1RSQU5TTEFURS5nZXQoJ2xhc3RXZWVrJyldID0gW21vbWVudCgpLnN1YnRyYWN0KDEsICd3ZWVrJykuc3RhcnRPZignd2VlaycpLCBtb21lbnQoKS5zdWJ0cmFjdCgxLCAnd2VlaycpLmVuZE9mKCd3ZWVrJyldO1xyXG4gICAgICAgICAgICByYW5nZXNMaXN0W1RSQU5TTEFURS5nZXQoJ3RoaXNNb250aCcpXSA9IFttb21lbnQoKS5zdGFydE9mKCdtb250aCcpLCBtb21lbnQoKS5lbmRPZignbW9udGgnKV07XHJcbiAgICAgICAgICAgIHJhbmdlc0xpc3RbVFJBTlNMQVRFLmdldCgnbGFzdE1vbnRoJyldID0gW21vbWVudCgpLnN1YnRyYWN0KDEsICdtb250aCcpLnN0YXJ0T2YoJ21vbnRoJyksIG1vbWVudCgpLnN1YnRyYWN0KDEsICdtb250aCcpLmVuZE9mKCdtb250aCcpXTtcclxuICAgICAgICAgICAgcmFuZ2VzTGlzdFtUUkFOU0xBVEUuZ2V0KCd0aGlzWWVhcicpXSA9IFttb21lbnQoKS5zdGFydE9mKCd5ZWFyJyksIG1vbWVudCgpLmVuZE9mKCd5ZWFyJyldO1xyXG4gICAgICAgICAgICByYW5nZXNMaXN0W1RSQU5TTEFURS5nZXQoJ2xhc3RZZWFyJyldID0gW21vbWVudCgpLnN1YnRyYWN0KDEsICd5ZWFyJykuc3RhcnRPZigneWVhcicpLCBtb21lbnQoKS5zdWJ0cmFjdCgxLCAneWVhcicpLmVuZE9mKCd5ZWFyJyldO1xyXG5cclxuICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLmRhdGVyYW5nZXBpY2tlcih7XHJcbiAgICAgICAgICAgICAgICBzaG93RHJvcGRvd25zOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYXV0b1VwZGF0ZUlucHV0OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGF1dG9BcHBseTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBsaW5rZWRDYWxlbmRhcnM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBsb2NhbGU6IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXBhcmF0b3I6IHNlcGFyYXRvcixcclxuICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6IGxvY2FsZUZvcm1hdCxcclxuICAgICAgICAgICAgICAgICAgICBmaXJzdERheTogZmlyc3REb3csXHJcbiAgICAgICAgICAgICAgICAgICAgYXBwbHlMYWJlbDogVFJBTlNMQVRFLmdldCgnY29uZmlybScpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbExhYmVsOiBUUkFOU0xBVEUuZ2V0KCdjYW5jZWwnKSxcclxuICAgICAgICAgICAgICAgICAgICBjdXN0b21SYW5nZUxhYmVsOiBUUkFOU0xBVEUuZ2V0KCdjdXN0b21SYW5nZScpLFxyXG4gICAgICAgICAgICAgICAgICAgIGRheXNPZldlZWs6IERBVEVfVVRJTFMuZ2V0V2Vla0RheXNTaG9ydCgpLFxyXG4gICAgICAgICAgICAgICAgICAgIG1vbnRoTmFtZXM6IERBVEVfVVRJTFMuZ2V0TW9udGhOYW1lcygpLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHJhbmdlczogcmFuZ2VzTGlzdCxcclxuICAgICAgICAgICAgICAgIGFsd2F5c1Nob3dDYWxlbmRhcnM6IHRydWVcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBqUXVlcnkodGhpcykub24oJ2FwcGx5LmRhdGVyYW5nZXBpY2tlcicsIGZ1bmN0aW9uKGV2LCBwaWNrZXIpIHtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSh0aGlzKS52YWwocGlja2VyLnN0YXJ0RGF0ZS5mb3JtYXQobG9jYWxlRm9ybWF0KSArICcgLSAnICsgcGlja2VyLmVuZERhdGUuZm9ybWF0KGxvY2FsZUZvcm1hdCkpO1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLmRhdGEoJ2JlZ2luJywgcGlja2VyLnN0YXJ0RGF0ZS5mb3JtYXQobG9jYWxlRm9ybWF0KSk7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkodGhpcykuZGF0YSgnZW5kJywgcGlja2VyLmVuZERhdGUuZm9ybWF0KGxvY2FsZUZvcm1hdCkpO1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLnRyaWdnZXIoXCJjaGFuZ2VcIik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGRlc3Ryb3lEYXRlUmFuZ2VQaWNrZXIoc2VsZWN0b3IpIHtcclxuICAgICAgICBqUXVlcnkoc2VsZWN0b3IgKyAnICcgKyB0aGlzLnNlbGVjdG9yKS5lYWNoKGZ1bmN0aW9uKGluZGV4KSB7XHJcbiAgICAgICAgICAgIGlmIChqUXVlcnkodGhpcykuZGF0YSgnZGF0ZXJhbmdlcGlja2VyJykgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLmRhdGVyYW5nZXBpY2tlcignZGVzdHJveScpO1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLmRhdGEoJ2RhdGVyYW5nZXBpY2tlcicpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG59XHJcbiIsIi8qXHJcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBLaW1haSB0aW1lLXRyYWNraW5nIGFwcC5cclxuICpcclxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcclxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXHJcbiAqL1xyXG5cclxuLyohXHJcbiAqIFtLSU1BSV0gS2ltYWlEYXRlVGltZVBpY2tlcjogYWN0aXZhdGUgdGhlIChkYXRldGltZSBwaWNrZXIpIGZpZWxkIGluIHRpbWVzaGVldCBlZGl0IGRpYWxvZ1xyXG4gKi9cclxuXHJcbmltcG9ydCBqUXVlcnkgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IEtpbWFpUGx1Z2luIGZyb20gJy4uL0tpbWFpUGx1Z2luJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtpbWFpRGF0ZVRpbWVQaWNrZXIgZXh0ZW5kcyBLaW1haVBsdWdpbiB7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2VsZWN0b3IpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0b3IgPSBzZWxlY3RvcjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJZCgpIHtcclxuICAgICAgICByZXR1cm4gJ2RhdGUtdGltZS1waWNrZXInO1xyXG4gICAgfVxyXG5cclxuICAgIGFjdGl2YXRlRGF0ZVRpbWVQaWNrZXIoc2VsZWN0b3IpIHtcclxuICAgICAgICBjb25zdCBUUkFOU0xBVEUgPSB0aGlzLmdldENvbnRhaW5lcigpLmdldFRyYW5zbGF0aW9uKCk7XHJcbiAgICAgICAgY29uc3QgREFURV9VVElMUyA9IHRoaXMuZ2V0Q29udGFpbmVyKCkuZ2V0UGx1Z2luKCdkYXRlJyk7XHJcbiAgICAgICAgY29uc3QgZmlyc3REb3cgPSB0aGlzLmdldENvbmZpZ3VyYXRpb24oJ2ZpcnN0X2Rvd19pc28nKSAlIDc7XHJcbiAgICAgICAgY29uc3QgaXMyNGhvdXJzID0gdGhpcy5nZXRDb25maWd1cmF0aW9uKCd0d2VudHlGb3VySG91cnMnKTtcclxuXHJcbiAgICAgICAgalF1ZXJ5KHNlbGVjdG9yICsgJyAnICsgdGhpcy5zZWxlY3RvcikuZWFjaChmdW5jdGlvbihpbmRleCkge1xyXG4gICAgICAgICAgICBsZXQgbG9jYWxlRm9ybWF0ID0galF1ZXJ5KHRoaXMpLmRhdGEoJ2Zvcm1hdCcpO1xyXG4gICAgICAgICAgICBqUXVlcnkodGhpcykuZGF0ZXJhbmdlcGlja2VyKHtcclxuICAgICAgICAgICAgICAgIHNpbmdsZURhdGVQaWNrZXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB0aW1lUGlja2VyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgdGltZVBpY2tlcjI0SG91cjogaXMyNGhvdXJzLFxyXG4gICAgICAgICAgICAgICAgc2hvd0Ryb3Bkb3duczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGF1dG9VcGRhdGVJbnB1dDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBsb2NhbGU6IHtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6IGxvY2FsZUZvcm1hdCxcclxuICAgICAgICAgICAgICAgICAgICBmaXJzdERheTogZmlyc3REb3csXHJcbiAgICAgICAgICAgICAgICAgICAgYXBwbHlMYWJlbDogVFJBTlNMQVRFLmdldCgnY29uZmlybScpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbExhYmVsOiBUUkFOU0xBVEUuZ2V0KCdjYW5jZWwnKSxcclxuICAgICAgICAgICAgICAgICAgICBjdXN0b21SYW5nZUxhYmVsOiBUUkFOU0xBVEUuZ2V0KCdjdXN0b21SYW5nZScpLFxyXG4gICAgICAgICAgICAgICAgICAgIGRheXNPZldlZWs6IERBVEVfVVRJTFMuZ2V0V2Vla0RheXNTaG9ydCgpLFxyXG4gICAgICAgICAgICAgICAgICAgIG1vbnRoTmFtZXM6IERBVEVfVVRJTFMuZ2V0TW9udGhOYW1lcygpLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5vbignYXBwbHkuZGF0ZXJhbmdlcGlja2VyJywgZnVuY3Rpb24oZXYsIHBpY2tlcikge1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLnZhbChwaWNrZXIuc3RhcnREYXRlLmZvcm1hdChsb2NhbGVGb3JtYXQpKTtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSh0aGlzKS50cmlnZ2VyKFwiY2hhbmdlXCIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBkZXN0cm95RGF0ZVRpbWVQaWNrZXIoc2VsZWN0b3IpIHtcclxuICAgICAgICBqUXVlcnkoc2VsZWN0b3IgKyAnICcgKyB0aGlzLnNlbGVjdG9yKS5lYWNoKGZ1bmN0aW9uKGluZGV4KSB7XHJcbiAgICAgICAgICAgIGlmIChqUXVlcnkodGhpcykuZGF0YSgnZGF0ZXJhbmdlcGlja2VyJykgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLmRhdGVyYW5nZXBpY2tlcignZGVzdHJveScpO1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLmRhdGEoJ2RhdGVyYW5nZXBpY2tlcicpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG59XHJcbiIsIi8qXHJcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBLaW1haSB0aW1lLXRyYWNraW5nIGFwcC5cclxuICpcclxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcclxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXHJcbiAqL1xyXG5cclxuLyohXHJcbiAqIFtLSU1BSV0gS2ltYWlEYXRlVXRpbHM6IHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyBkYXRlIHNwZWNpZmljIHRhc2tzXHJcbiAqL1xyXG5cclxuaW1wb3J0IEtpbWFpUGx1Z2luIGZyb20gJy4uL0tpbWFpUGx1Z2luJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2ltYWlEYXRlVXRpbHMgZXh0ZW5kcyBLaW1haVBsdWdpbiB7XHJcblxyXG4gICAgZ2V0SWQoKSB7XHJcbiAgICAgICAgcmV0dXJuICdkYXRlJztcclxuICAgIH1cclxuXHJcbiAgICBnZXRXZWVrRGF5c1Nob3J0KCkge1xyXG4gICAgICAgIHJldHVybiBtb21lbnQubG9jYWxlRGF0YSgpLndlZWtkYXlzU2hvcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRNb250aE5hbWVzKCkge1xyXG4gICAgICAgIHJldHVybiBtb21lbnQubG9jYWxlRGF0YSgpLm1vbnRocygpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCIvKlxyXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgS2ltYWkgdGltZS10cmFja2luZyBhcHAuXHJcbiAqXHJcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXHJcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxyXG4gKi9cclxuXHJcbi8qIVxyXG4gKiBbS0lNQUldIEtpbWFpRXZlbnQ6IGhlbHBlciB0byB0cmlnZ2VyIGV2ZW50c1xyXG4gKi9cclxuXHJcbmltcG9ydCBLaW1haVBsdWdpbiBmcm9tIFwiLi4vS2ltYWlQbHVnaW5cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtpbWFpRXZlbnQgZXh0ZW5kcyBLaW1haVBsdWdpbiB7XHJcblxyXG4gICAgZ2V0SWQoKSB7XHJcbiAgICAgICAgcmV0dXJuICdldmVudCc7XHJcbiAgICB9XHJcblxyXG4gICAgdHJpZ2dlcihuYW1lLCBkZXRhaWxzKSB7XHJcbiAgICAgICAgaWYgKG5hbWUgPT09IG51bGwgfHwgbmFtZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvcihsZXQgZXZlbnQgb2YgbmFtZS5zcGxpdCgnICcpKSB7XHJcbiAgICAgICAgICAgIGxldCB0cmlnZ2VyRXZlbnQgPSBuZXcgRXZlbnQoZXZlbnQpO1xyXG4gICAgICAgICAgICBpZiAoZGV0YWlscyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0cmlnZ2VyRXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoZXZlbnQsIHtkZXRhaWw6IGRldGFpbHN9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KHRyaWdnZXJFdmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBLaW1haSB0aW1lLXRyYWNraW5nIGFwcC5cclxuICpcclxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcclxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXHJcbiAqL1xyXG5cclxuLyohXHJcbiAqIFtLSU1BSV0gS2ltYWlGb3JtOiBiYXNpYyBmdW5jdGlvbnMgZm9yIGFsbCBmb3Jtc1xyXG4gKi9cclxuXHJcbmltcG9ydCBLaW1haVBsdWdpbiBmcm9tIFwiLi4vS2ltYWlQbHVnaW5cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtpbWFpRm9ybSBleHRlbmRzIEtpbWFpUGx1Z2luIHtcclxuXHJcbiAgICBnZXRJZCgpIHtcclxuICAgICAgICByZXR1cm4gJ2Zvcm0nO1xyXG4gICAgfVxyXG5cclxuICAgIGFjdGl2YXRlRm9ybShmb3JtU2VsZWN0b3IsIGNvbnRhaW5lcikge1xyXG4gICAgICAgIHRoaXMuZ2V0Q29udGFpbmVyKCkuZ2V0UGx1Z2luKCdkYXRlLXJhbmdlLXBpY2tlcicpLmFjdGl2YXRlRGF0ZVJhbmdlUGlja2VyKGZvcm1TZWxlY3Rvcik7XHJcbiAgICAgICAgdGhpcy5nZXRDb250YWluZXIoKS5nZXRQbHVnaW4oJ2RhdGUtdGltZS1waWNrZXInKS5hY3RpdmF0ZURhdGVUaW1lUGlja2VyKGZvcm1TZWxlY3Rvcik7XHJcbiAgICAgICAgdGhpcy5nZXRDb250YWluZXIoKS5nZXRQbHVnaW4oJ2RhdGUtcGlja2VyJykuYWN0aXZhdGVEYXRlUGlja2VyKGZvcm1TZWxlY3Rvcik7XHJcbiAgICAgICAgdGhpcy5nZXRDb250YWluZXIoKS5nZXRQbHVnaW4oJ2F1dG9jb21wbGV0ZScpLmFjdGl2YXRlQXV0b2NvbXBsZXRlKGZvcm1TZWxlY3Rvcik7XHJcbiAgICAgICAgdGhpcy5nZXRDb250YWluZXIoKS5nZXRQbHVnaW4oJ2Zvcm0tc2VsZWN0JykuYWN0aXZhdGVTZWxlY3RQaWNrZXIoZm9ybVNlbGVjdG9yLCBjb250YWluZXIpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBkZXN0cm95Rm9ybShmb3JtU2VsZWN0b3IpIHtcclxuICAgICAgICB0aGlzLmdldENvbnRhaW5lcigpLmdldFBsdWdpbignZm9ybS1zZWxlY3QnKS5kZXN0cm95U2VsZWN0UGlja2VyKGZvcm1TZWxlY3Rvcik7XHJcbiAgICAgICAgdGhpcy5nZXRDb250YWluZXIoKS5nZXRQbHVnaW4oJ2F1dG9jb21wbGV0ZScpLmRlc3Ryb3lBdXRvY29tcGxldGUoZm9ybVNlbGVjdG9yKTtcclxuICAgICAgICB0aGlzLmdldENvbnRhaW5lcigpLmdldFBsdWdpbignZGF0ZS1waWNrZXInKS5kZXN0cm95RGF0ZVBpY2tlcihmb3JtU2VsZWN0b3IpO1xyXG4gICAgICAgIHRoaXMuZ2V0Q29udGFpbmVyKCkuZ2V0UGx1Z2luKCdkYXRlLXRpbWUtcGlja2VyJykuZGVzdHJveURhdGVUaW1lUGlja2VyKGZvcm1TZWxlY3Rvcik7XHJcbiAgICAgICAgdGhpcy5nZXRDb250YWluZXIoKS5nZXRQbHVnaW4oJ2RhdGUtcmFuZ2UtcGlja2VyJykuZGVzdHJveURhdGVSYW5nZVBpY2tlcihmb3JtU2VsZWN0b3IpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBLaW1haSB0aW1lLXRyYWNraW5nIGFwcC5cclxuICpcclxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcclxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXHJcbiAqL1xyXG5cclxuLyohXHJcbiAqIFtLSU1BSV0gS2ltYWlGb3JtU2VsZWN0OiBlbmhhbmNlZCBmdW5jdGlvbmFsaXR5IGZvciBIVE1MIHNlbGVjdCdzXHJcbiAqL1xyXG5cclxuaW1wb3J0IEtpbWFpUGx1Z2luIGZyb20gXCIuLi9LaW1haVBsdWdpblwiO1xyXG5pbXBvcnQgalF1ZXJ5IGZyb20gXCJqcXVlcnlcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtpbWFpRm9ybVNlbGVjdCBleHRlbmRzIEtpbWFpUGx1Z2luIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzZWxlY3Rvcikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RvciA9IHNlbGVjdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGdldElkKCkge1xyXG4gICAgICAgIHJldHVybiAnZm9ybS1zZWxlY3QnO1xyXG4gICAgfVxyXG5cclxuICAgIGFjdGl2YXRlU2VsZWN0UGlja2VyKHNlbGVjdG9yLCBjb250YWluZXIpIHtcclxuICAgICAgICBjb25zdCBlbGVtZW50U2VsZWN0b3IgPSB0aGlzLnNlbGVjdG9yO1xyXG4gICAgICAgIGxldCBvcHRpb25zID0ge307XHJcbiAgICAgICAgaWYgKGNvbnRhaW5lciAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICAgICBkcm9wZG93blBhcmVudDogJChjb250YWluZXIpLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gRnVuY3Rpb24gdG8gbWF0Y2ggdGhlIG5hbWUgb2YgdGhlIHBhcmVudCBhbmQgbm90IG9ubHkgdGhlIG5hbWVzIG9mIHRoZSBjaGlsZHJlblxyXG4gICAgICAgIC8vIEJhc2VkIG9uIHRoZSBvcmlnaW5hbCBtYXRjaGVyIGZ1bmN0aW9uIG9mIFNlbGVjdDI6IGh0dHBzOi8vZ2l0aHViLmNvbS9zZWxlY3QyL3NlbGVjdDIvYmxvYi81NzY1MDkwMzE4YzRkMzgyYWU1NjQ2M2NmYTI1YmE4Y2E3YmRkNDk1L3NyYy9qcy9zZWxlY3QyL2RlZmF1bHRzLmpzI0wyNzJcclxuICAgICAgICAvLyBNb3JlIGluZm9ybWF0aW9uOiBodHRwczovL3NlbGVjdDIub3JnL3NlYXJjaGluZyB8IGh0dHBzOi8vZ2l0aHViLmNvbS9zZWxlY3QyL2RvY3MvYmxvYi9kZXZlbG9wL3BhZ2VzLzExLnNlYXJjaGluZy9kb2NzLm1kXHJcbiAgICAgICAgZnVuY3Rpb24gbWF0Y2hlcihwYXJhbXMsIGRhdGEpIHtcclxuICAgICAgICAgICAgLy8gQWx3YXlzIHJldHVybiB0aGUgb2JqZWN0IGlmIHRoZXJlIGlzIG5vdGhpbmcgdG8gY29tcGFyZVxyXG4gICAgICAgICAgICBpZiAoalF1ZXJ5LnRyaW0ocGFyYW1zLnRlcm0pID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIENoZWNrIHdoZXRoZXIgb3B0aW9ucyBoYXMgY2hpbGRyZW5cclxuICAgICAgICAgICAgbGV0IGhhc0NoaWxkcmVuID0gZGF0YS5jaGlsZHJlbiAmJiBkYXRhLmNoaWxkcmVuLmxlbmd0aCA+IDA7XHJcblxyXG4gICAgICAgICAgICAvLyBTcGxpdCBzZWFyY2ggcGFyYW0gYnkgc3BhY2UgdG8gc2VhcmNoIGZvciBhbGwgdGVybXMgYW5kIGNvbnZlcnQgYWxsIHRvIHVwcGVyY2FzZVxyXG4gICAgICAgICAgICBsZXQgdGVybXMgPSBwYXJhbXMudGVybS50b1VwcGVyQ2FzZSgpLnNwbGl0KCcgJyk7XHJcbiAgICAgICAgICAgIGxldCBvcmlnaW5hbCA9IGRhdGEudGV4dC50b1VwcGVyQ2FzZSgpO1xyXG5cclxuICAgICAgICAgICAgLy8gQWx3YXlzIHJldHVybiB0aGUgcGFyZW50IG9wdGlvbiBpbmNsdWRpbmcgaXRzIGNoaWxkcmVuLCB3aGVuIHRoZSBuYW1lIG1hdGNoZXMgb25lIG9mIHRoZSBwYXJhbXNcclxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIHRleHQgY29udGFpbnMgYWxsIG9yIGF0IGxlYXN0IG9uZSBvZiB0aGUgdGVybXNcclxuICAgICAgICAgICAgbGV0IGZvdW5kQWxsID0gdHJ1ZTtcclxuICAgICAgICAgICAgbGV0IGZvdW5kT25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGxldCBtaXNzaW5nVGVybXMgPSBbXTtcclxuICAgICAgICAgICAgdGVybXMuZm9yRWFjaChmdW5jdGlvbihpdGVtLCBpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9yaWdpbmFsLmluZGV4T2YoaXRlbSkgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvdW5kT25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm91bmRBbGwgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBtaXNzaW5nVGVybXMucHVzaChpdGVtKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyBJZiB0aGUgb3B0aW9uIGVsZW1lbnQgY29udGFpbnMgYWxsIHRlcm1zLCByZXR1cm4gaXRcclxuICAgICAgICAgICAgaWYgKGZvdW5kQWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gRG8gYSByZWN1cnNpdmUgY2hlY2sgZm9yIG9wdGlvbnMgd2l0aCBjaGlsZHJlblxyXG4gICAgICAgICAgICBpZiAoaGFzQ2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgICAgIC8vIElmIHRoZSBwYXJlbnQgYWxyZWFkeSBjb250YWlucyBvbmUgb3IgbW9yZSBzZWFyY2ggdGVybXMsIHByb2NlZWQgb25seSB3aXRoIHRoZSBtaXNzaW5nIG9uZXNcclxuICAgICAgICAgICAgICAgIC8vIEZpcnN0OiBDbG9uZSB0aGUgb3JpZ2luYWwgcGFyYW1zIG9iamVjdC4uLlxyXG4gICAgICAgICAgICAgICAgbGV0IG5ld1BhcmFtcyA9IGpRdWVyeS5leHRlbmQodHJ1ZSwge30sIHBhcmFtcyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZm91bmRPbmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXdQYXJhbXMudGVybSA9IG1pc3NpbmdUZXJtcy5qb2luKCcgJyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld1BhcmFtcy50ZXJtID0gcGFyYW1zLnRlcm07XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQ2xvbmUgdGhlIGRhdGEgb2JqZWN0IGlmIHRoZXJlIGFyZSBjaGlsZHJlblxyXG4gICAgICAgICAgICAgICAgLy8gVGhpcyBpcyByZXF1aXJlZCBhcyB3ZSBtb2RpZnkgdGhlIG9iamVjdCB0byByZW1vdmUgYW55IG5vbi1tYXRjaGVzXHJcbiAgICAgICAgICAgICAgICBsZXQgbWF0Y2ggPSBqUXVlcnkuZXh0ZW5kKHRydWUsIHt9LCBkYXRhKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBDaGVjayBlYWNoIGNoaWxkIG9mIHRoZSBvcHRpb25cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGMgPSBkYXRhLmNoaWxkcmVuLmxlbmd0aCAtIDE7IGMgPj0gMDsgYy0tKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNoaWxkID0gZGF0YS5jaGlsZHJlbltjXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1hdGNoZXMgPSBtYXRjaGVyKG5ld1BhcmFtcywgY2hpbGQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGVyZSB3YXNuJ3QgYSBtYXRjaCwgcmVtb3ZlIHRoZSBvYmplY3QgaW4gdGhlIGFycmF5XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoZXMgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2guY2hpbGRyZW4uc3BsaWNlKGMsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBJZiBhbnkgY2hpbGRyZW4gbWF0Y2hlZCwgcmV0dXJuIHRoZSBuZXcgb2JqZWN0XHJcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2guY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtYXRjaDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gSWYgdGhlIG9wdGlvbiBvciBpdHMgY2hpbGRyZW4gZG8gbm90IGNvbnRhaW4gdGhlIHRlcm0sIGRvbid0IHJldHVybiBhbnl0aGluZ1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG9wdGlvbnMgPSB7Li4ub3B0aW9ucywgLi4ue1xyXG4gICAgICAgICAgICBsYW5ndWFnZTogdGhpcy5nZXRDb25maWd1cmF0aW9uKCdsb2NhbGUnKS5yZXBsYWNlKCdfJywgJy0nKSxcclxuICAgICAgICAgICAgdGhlbWU6IFwiYm9vdHN0cmFwXCIsXHJcbiAgICAgICAgICAgIG1hdGNoZXI6IG1hdGNoZXJcclxuICAgICAgICB9fTtcclxuICAgICAgICBqUXVlcnkoc2VsZWN0b3IgKyAnICcgKyBlbGVtZW50U2VsZWN0b3IpLnNlbGVjdDIob3B0aW9ucyk7XHJcblxyXG4gICAgICAgIGpRdWVyeSgnYm9keScpLm9uKCdyZXNldCcsICdmb3JtJywgZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KGV2ZW50LnRhcmdldCkuZmluZChlbGVtZW50U2VsZWN0b3IpLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG4gICAgICAgICAgICB9LCAxMCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVzdHJveVNlbGVjdFBpY2tlcihzZWxlY3Rvcikge1xyXG4gICAgICAgIGpRdWVyeShzZWxlY3RvciArICcgJyArIHRoaXMuc2VsZWN0b3IpLnNlbGVjdDIoJ2Rlc3Ryb3knKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVPcHRpb25zKHNlbGVjdElkZW50aWZpZXIsIGRhdGEpIHtcclxuICAgICAgICBsZXQgc2VsZWN0ID0galF1ZXJ5KHNlbGVjdElkZW50aWZpZXIpO1xyXG4gICAgICAgIGxldCBlbXB0eU9wdGlvbiA9IGpRdWVyeShzZWxlY3RJZGVudGlmaWVyICsgJyBvcHRpb25bdmFsdWU9XCJcIl0nKTtcclxuICAgICAgICBjb25zdCBzZWxlY3RlZFZhbHVlID0gc2VsZWN0LnZhbCgpO1xyXG5cclxuICAgICAgICBzZWxlY3QuZmluZCgnb3B0aW9uJykucmVtb3ZlKCkuZW5kKCkuZmluZCgnb3B0Z3JvdXAnKS5yZW1vdmUoKS5lbmQoKTtcclxuXHJcbiAgICAgICAgaWYgKGVtcHR5T3B0aW9uLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICBzZWxlY3QuYXBwZW5kKHRoaXMuX2NyZWF0ZU9wdGlvbihlbXB0eU9wdGlvbi50ZXh0KCksICcnKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgZW1wdHlPcHRzID0gW107XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBbXTtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoZGF0YSkpIHtcclxuICAgICAgICAgICAgaWYgKGtleSA9PT0gJ19fZW1wdHlfXycpIHtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZW50aXR5IG9mIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW1wdHlPcHRzLnB1c2godGhpcy5fY3JlYXRlT3B0aW9uKGVudGl0eS5uYW1lLCBlbnRpdHkuaWQpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgb3B0R3JvdXAgPSB0aGlzLl9jcmVhdGVPcHRncm91cChrZXkpO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGVudGl0eSBvZiB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgb3B0R3JvdXAuYXBwZW5kQ2hpbGQodGhpcy5fY3JlYXRlT3B0aW9uKGVudGl0eS5uYW1lLCBlbnRpdHkuaWQpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcHRpb25zLnB1c2gob3B0R3JvdXApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2VsZWN0LmFwcGVuZChvcHRpb25zKTtcclxuICAgICAgICBzZWxlY3QuYXBwZW5kKGVtcHR5T3B0cyk7XHJcblxyXG4gICAgICAgIC8vIGlmIGF2YWlsYWJsZSwgcmUtc2VsZWN0IHRoZSBwcmV2aW91cyBzZWxlY3RlZCBvcHRpb24gKG1vc3RseSB1c2FibGUgZm9yIGdsb2JhbCBhY3Rpdml0aWVzKVxyXG4gICAgICAgIHNlbGVjdC52YWwoc2VsZWN0ZWRWYWx1ZSk7XHJcblxyXG4gICAgICAgIC8vIGlmIHdlIGRvbid0IHRyaWdnZXIgdGhlIGNoYW5nZSwgdGhlIG90aGVyIHNlbGVjdHMgd29uJ3QgcmVzZXRcclxuICAgICAgICBzZWxlY3QudHJpZ2dlcignY2hhbmdlJyk7XHJcblxyXG4gICAgICAgIC8vIGlmIHNlbGVjdDIgaXMgYWN0aXZlLCB0aGlzIHdpbGwgdGVsbCB0aGUgc2VsZWN0IHRvIHJlZnJlc2hcclxuICAgICAgICBpZiAoc2VsZWN0Lmhhc0NsYXNzKCdzZWxlY3RwaWNrZXInKSkge1xyXG4gICAgICAgICAgICBzZWxlY3QudHJpZ2dlcignY2hhbmdlLnNlbGVjdDInKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbGFiZWxcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxyXG4gICAgICogQHJldHVybnMge0hUTUxFbGVtZW50fVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgX2NyZWF0ZU9wdGlvbihsYWJlbCwgdmFsdWUpIHtcclxuICAgICAgICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgb3B0aW9uLmlubmVyVGV4dCA9IGxhYmVsO1xyXG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiBvcHRpb247XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbGFiZWxcclxuICAgICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIF9jcmVhdGVPcHRncm91cChsYWJlbCkge1xyXG4gICAgICAgIGxldCBvcHRHcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGdyb3VwJyk7XHJcbiAgICAgICAgb3B0R3JvdXAubGFiZWwgPSBsYWJlbDtcclxuICAgICAgICByZXR1cm4gb3B0R3JvdXA7XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIEtpbWFpIHRpbWUtdHJhY2tpbmcgYXBwLlxyXG4gKlxyXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxyXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cclxuICovXHJcblxyXG4vKiFcclxuICogW0tJTUFJXSBLaW1haU11bHRpVXBkYXRlRm9ybTogaGFuZGxlIHRoZSBtdWx0aSB1cGRhdGUgY2hlY2tib3ggbGlzdCBhbmQgZm9ybVxyXG4gKi9cclxuXHJcbmltcG9ydCBLaW1haVBsdWdpbiBmcm9tICcuLi9LaW1haVBsdWdpbic7XHJcbmltcG9ydCBqUXVlcnkgZnJvbSBcImpxdWVyeVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2ltYWlNdWx0aVVwZGF0ZVRhYmxlIGV4dGVuZHMgS2ltYWlQbHVnaW4ge1xyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgXHJcbiAgICAgICAgalF1ZXJ5KCdib2R5JykuXHJcbiAgICAgICAgICAgIG9uKCdjaGFuZ2UnLCAnI211bHRpX3VwZGF0ZV9hbGwnLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KCcubXVsdGlfdXBkYXRlX3NpbmdsZScpLnByb3AoJ2NoZWNrZWQnLCBqUXVlcnkoZXZlbnQudGFyZ2V0KS5wcm9wKCdjaGVja2VkJykpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi50b2dnbGVGb3JtKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5vbignY2hhbmdlJywgJy5tdWx0aV91cGRhdGVfc2luZ2xlJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYudG9nZ2xlRm9ybSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAub24oJ2NoYW5nZScsICcjbXVsdGlfdXBkYXRlX3RhYmxlX2FjdGlvbicsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZEl0ZW0gPSBqUXVlcnkoJyNtdWx0aV91cGRhdGVfdGFibGVfYWN0aW9uIG9wdGlvbjpzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRWYWwgPSBzZWxlY3RlZEl0ZW0udmFsKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkVmFsID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3QgZm9ybSA9IGpRdWVyeSgnI211bHRpX3VwZGF0ZV9mb3JtIGZvcm0nKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkVGV4dCA9IHNlbGVjdGVkSXRlbS50ZXh0KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpZHMgPSBzZWxmLmdldFNlbGVjdGVkSWRzKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBxdWVzdGlvbiA9IGZvcm0uYXR0cignZGF0YS1xdWVzdGlvbicpLnJlcGxhY2UoLyVhY3Rpb24lLywgc2VsZWN0ZWRUZXh0KS5yZXBsYWNlKC8lY291bnQlLywgaWRzLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHNlbGYuZ2V0Q29udGFpbmVyKCkuZ2V0UGx1Z2luKCdhbGVydCcpLnF1ZXN0aW9uKHF1ZXN0aW9uLCBmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtLmF0dHIoJ2FjdGlvbicsIHNlbGVjdGVkVmFsKS5zdWJtaXQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkoJyNtdWx0aV91cGRhdGVfdGFibGVfYWN0aW9uJykudmFsKCcnKS50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldFNlbGVjdGVkSWRzKClcclxuICAgIHtcclxuICAgICAgICBsZXQgaWRzID0gW107XHJcbiAgICAgICAgalF1ZXJ5KCcubXVsdGlfdXBkYXRlX3NpbmdsZTpjaGVja2VkJykuZWFjaChmdW5jdGlvbihpKXtcclxuICAgICAgICAgICAgaWRzW2ldID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGlkcztcclxuICAgIH1cclxuICAgIFxyXG4gICAgdG9nZ2xlRm9ybSgpIFxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGlkcyA9IHRoaXMuZ2V0U2VsZWN0ZWRJZHMoKTtcclxuICAgICAgICBqUXVlcnkoJyNtdWx0aV91cGRhdGVfdGFibGVfZW50aXRpZXMnKS52YWwoaWRzLmpvaW4oJywnKSk7XHJcblxyXG4gICAgICAgIGlmIChpZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBqUXVlcnkoJyNtdWx0aV91cGRhdGVfZm9ybScpLnNob3coKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBqUXVlcnkoJyNtdWx0aV91cGRhdGVfZm9ybScpLmhpZGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG4iLCIvKlxyXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgS2ltYWkgdGltZS10cmFja2luZyBhcHAuXHJcbiAqXHJcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXHJcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxyXG4gKi9cclxuXHJcbi8qIVxyXG4gKiBbS0lNQUldIEtpbWFpUmVjZW50QWN0aXZpdGllczogcmVzcG9uc2libGUgdG8gcmVsb2FkIHRoZSB1c2VycyByZWNlbnQgYWN0aXZpdGllc1xyXG4gKi9cclxuXHJcbmltcG9ydCBLaW1haVBsdWdpbiBmcm9tICcuLi9LaW1haVBsdWdpbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLaW1haVJlY2VudEFjdGl2aXRpZXMgZXh0ZW5kcyBLaW1haVBsdWdpbiB7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2VsZWN0b3IpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0b3IgPSBzZWxlY3RvcjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJZCgpIHtcclxuICAgICAgICByZXR1cm4gJ3JlY2VudC1hY3Rpdml0aWVzJztcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuc2VsZWN0b3IpO1xyXG4gICAgICAgIC8vIHRoZSBtZW51IGNhbiBiZSBoaWRkZW4gaWYgdXNlciBoYXMgbm8gcGVybWlzc2lvbnMgdG8gc2VlIGl0XHJcbiAgICAgICAgaWYgKG1lbnUgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZHJvcGRvd24gPSBtZW51LnF1ZXJ5U2VsZWN0b3IoJ3VsLmRyb3Bkb3duLW1lbnUnKTtcclxuXHJcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzID0gZHJvcGRvd24uZGF0YXNldDtcclxuICAgICAgICB0aGlzLml0ZW1MaXN0ID0gZHJvcGRvd24ucXVlcnlTZWxlY3RvcignbGkgPiB1bC5tZW51Jyk7XHJcblxyXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGNvbnN0IGhhbmRsZSA9IGZ1bmN0aW9uKCkgeyBzZWxmLnJlbG9hZFJlY2VudEFjdGl2aXRpZXMoKTsgfTtcclxuXHJcbiAgICAgICAgLy8gZG9uJ3QgYmxvY2sgaW5pdGlhbCBicm93c2VyIHJlbmRlcmluZ1xyXG4gICAgICAgIHNldFRpbWVvdXQoaGFuZGxlLCA1MDApO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdraW1haS5yZWNlbnRBY3Rpdml0aWVzJywgaGFuZGxlKTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdraW1haS50aW1lc2hlZXRVcGRhdGUnLCBoYW5kbGUpO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tpbWFpLmFjdGl2aXR5VXBkYXRlJywgaGFuZGxlKTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdraW1haS5wcm9qZWN0VXBkYXRlJywgaGFuZGxlKTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdraW1haS5jdXN0b21lclVwZGF0ZScsIGhhbmRsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZW1wdHlMaXN0KCkge1xyXG4gICAgICAgIHRoaXMuaXRlbUxpc3QuaW5uZXJIVE1MID0gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RW50cmllcyhlbnRyaWVzKSB7XHJcbiAgICAgICAgaWYgKGVudHJpZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW1wdHlMaXN0KCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBodG1sVG9JbnNlcnQgPSAnJztcclxuXHJcbiAgICAgICAgZm9yIChsZXQgdGltZXNoZWV0IG9mIGVudHJpZXMpIHtcclxuICAgICAgICAgICAgbGV0IGxhYmVsID0gdGhpcy5hdHRyaWJ1dGVzWyd0ZW1wbGF0ZSddXHJcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgnJWN1c3RvbWVyJScsIHRpbWVzaGVldC5wcm9qZWN0LmN1c3RvbWVyLm5hbWUpXHJcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgnJXByb2plY3QlJywgdGltZXNoZWV0LnByb2plY3QubmFtZSlcclxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKCclYWN0aXZpdHklJywgdGltZXNoZWV0LmFjdGl2aXR5Lm5hbWUpO1xyXG5cclxuICAgICAgICAgICAgaHRtbFRvSW5zZXJ0ICs9XHJcbiAgICAgICAgICAgICAgICBgPGxpPmAgK1xyXG4gICAgICAgICAgICAgICAgICAgIGA8YSBocmVmPVwiJHsgdGhpcy5hdHRyaWJ1dGVzWydocmVmJ10ucmVwbGFjZSgnMDAwJywgdGltZXNoZWV0LmlkKSB9XCIgZGF0YS1ldmVudD1cImtpbWFpLnRpbWVzaGVldFN0YXJ0IGtpbWFpLnRpbWVzaGVldFVwZGF0ZVwiIGNsYXNzPVwiYXBpLWxpbmtcIiBkYXRhLW1ldGhvZD1cIlBBVENIXCIgZGF0YS1tc2ctZXJyb3I9XCJ0aW1lc2hlZXQuc3RhcnQuZXJyb3JcIiBkYXRhLW1zZy1zdWNjZXNzPVwidGltZXNoZWV0LnN0YXJ0LnN1Y2Nlc3NcIj5gICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYDxpIGNsYXNzPVwiJHsgdGhpcy5hdHRyaWJ1dGVzWydpY29uJ10gfVwiPjwvaT4gJHsgbGFiZWwgfWAgK1xyXG4gICAgICAgICAgICAgICAgICAgIGA8L2E+YCArXHJcbiAgICAgICAgICAgICAgICBgPC9saT5gO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5pdGVtTGlzdC5pbm5lckhUTUwgPSBodG1sVG9JbnNlcnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmVsb2FkUmVjZW50QWN0aXZpdGllcygpIHtcclxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgICAgICBjb25zdCBBUEkgPSB0aGlzLmdldENvbnRhaW5lcigpLmdldFBsdWdpbignYXBpJyk7XHJcblxyXG4gICAgICAgIEFQSS5nZXQodGhpcy5hdHRyaWJ1dGVzWydhcGknXSwge30sIGZ1bmN0aW9uKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBzZWxmLnNldEVudHJpZXMocmVzdWx0KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiLypcclxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIEtpbWFpIHRpbWUtdHJhY2tpbmcgYXBwLlxyXG4gKlxyXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxyXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cclxuICovXHJcblxyXG4vKiFcclxuICogW0tJTUFJXSBLaW1haVJlZHVjZWRDbGlja0hhbmRsZXI6IGFic3RyYWN0IGNsYXNzXHJcbiAqL1xyXG5cclxuaW1wb3J0IGpRdWVyeSBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgS2ltYWlQbHVnaW4gZnJvbSBcIi4uL0tpbWFpUGx1Z2luXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLaW1haVJlZHVjZWRDbGlja0hhbmRsZXIgZXh0ZW5kcyBLaW1haVBsdWdpbiB7XHJcblxyXG4gICAgX2FkZENsaWNrSGFuZGxlcihzZWxlY3RvciwgY2FsbGJhY2spIHtcclxuICAgICAgICBqUXVlcnkoJ2JvZHknKS5vbignY2xpY2snLCBzZWxlY3RvciwgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICAgLy8ganVzdCBpbiBjYXNlIGFuIGlubmVyIGVsZW1lbnQgaXMgZWRpdGFibGUsIHRoYW4gdGhpcyBzaG91bGQgbm90IGJlIHRyaWdnZXJlZFxyXG4gICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUuaXNDb250ZW50RWRpdGFibGUgfHwgZXZlbnQudGFyZ2V0LmlzQ29udGVudEVkaXRhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGhhbmRsZXMgdGhlIFwiY2xpY2tcIiBvbiB0YWJsZSByb3dzIG9yIGxpc3QgZWxlbWVudHNcclxuICAgICAgICAgICAgbGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICAgICAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQubWF0Y2hlcygndHInKSB8fCBldmVudC5jdXJyZW50VGFyZ2V0Lm1hdGNoZXMoJ2xpJykpIHtcclxuICAgICAgICAgICAgICAgIHdoaWxlICh0YXJnZXQgIT09IG51bGwgJiYgIXRhcmdldC5tYXRjaGVzKCdib2R5JykpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyB3aGVuIGFuIGVsZW1lbnQgd2l0aGluIHRoZSByb3cgaXMgY2xpY2tlZCwgdGhhdCBjYW4gdHJpZ2dlciBzdHVmZiBpdHNlbGYsIHdlIGRvbid0IHdhbnQgdGhlIGV2ZW50IHRvIGJlIHByb2Nlc3NlZFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGRvbid0IGFjdCBpZiBhIGxpbmssIGJ1dHRvbiBvciBmb3JtIGVsZW1lbnQgd2FzIGNsaWNrZWRcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0Lm1hdGNoZXMoJ2EnKSB8fCB0YXJnZXQubWF0Y2hlcyAoJ2J1dHRvbicpIHx8IHRhcmdldC5tYXRjaGVzICgnaW5wdXQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldCA9IHRhcmdldC5wYXJlbnROb2RlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBocmVmID0galF1ZXJ5KHRoaXMpLmF0dHIoJ2RhdGEtaHJlZicpO1xyXG4gICAgICAgICAgICBpZiAoIWhyZWYpIHtcclxuICAgICAgICAgICAgICAgIGhyZWYgPSBqUXVlcnkodGhpcykuYXR0cignaHJlZicpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjYWxsYmFjayhocmVmKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiLypcclxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIEtpbWFpIHRpbWUtdHJhY2tpbmcgYXBwLlxyXG4gKlxyXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxyXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cclxuICovXHJcblxyXG4vKiFcclxuICogW0tJTUFJXSBLaW1haVNlbGVjdERhdGFBUEk6IDxzZWxlY3Q+IGJveGVzIHdpdGggZHluYW1pYyBkYXRhIGZyb20gQVBJXHJcbiAqL1xyXG5cclxuaW1wb3J0IGpRdWVyeSBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgS2ltYWlQbHVnaW4gZnJvbSBcIi4uL0tpbWFpUGx1Z2luXCI7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtpbWFpU2VsZWN0RGF0YUFQSSBleHRlbmRzIEtpbWFpUGx1Z2luIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzZWxlY3Rvcikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RvciA9IHNlbGVjdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGdldElkKCkge1xyXG4gICAgICAgIHJldHVybiAnc2VsZWN0LWRhdGEtYXBpJztcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIHRoaXMuYWN0aXZhdGVBcGlTZWxlY3RzKHRoaXMuc2VsZWN0b3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGFjdGl2YXRlQXBpU2VsZWN0cyhzZWxlY3Rvcikge1xyXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGNvbnN0IEFQSSA9IHRoaXMuZ2V0Q29udGFpbmVyKCkuZ2V0UGx1Z2luKCdhcGknKTtcclxuXHJcbiAgICAgICAgalF1ZXJ5KCdib2R5Jykub24oJ2NoYW5nZScsIHNlbGVjdG9yLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgICAgICBjb25zdCB0YXJnZXRTZWxlY3QgPSAnIycgKyB0aGlzLmRhdGFzZXRbJ3JlbGF0ZWRTZWxlY3QnXTtcclxuXHJcbiAgICAgICAgICAgIC8vIGlmIHRoZSByZWxhdGVkIHRhcmdldCBzZWxlY3QgZG9lcyBub3QgZXhpc3QsIHdlIGRvIG5vdCBuZWVkIHRvIGxvYWQgdGhlIHJlbGF0ZWQgZGF0YVxyXG4gICAgICAgICAgICBpZiAoalF1ZXJ5KHRhcmdldFNlbGVjdCkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBmb3JtUHJlZml4ID0galF1ZXJ5KHRoaXMpLnBhcmVudHMoJ2Zvcm0nKS5maXJzdCgpLmF0dHIoJ25hbWUnKTtcclxuICAgICAgICAgICAgaWYgKGZvcm1QcmVmaXggPT09IHVuZGVmaW5lZCB8fCBmb3JtUHJlZml4ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBmb3JtUHJlZml4ID0gJyc7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBmb3JtUHJlZml4ICs9ICdfJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IG5ld0FwaVVybCA9IHNlbGYuX2J1aWxkVXJsV2l0aEZvcm1GaWVsZHModGhpcy5kYXRhc2V0WydhcGlVcmwnXSwgZm9ybVByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RWYWx1ZSA9IGpRdWVyeSh0aGlzKS52YWwoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFByb2JsZW06IHNlbGVjdCBhIHByb2plY3Qgd2l0aCBhY3Rpdml0aWVzIGFuZCB0aGVuIHNlbGVjdCBhIGN1c3RvbWVyIHRoYXQgaGFzIG5vIHByb2plY3RcclxuICAgICAgICAgICAgLy8gcmVzdWx0cyBpbiBhIHdyb25nIFVSTCwgaXQgdHJpZ2dlcnMgXCJhY3Rpdml0aWVzP3Byb2plY3Q9XCIgaW5zdGVhZCBvZiB1c2luZyB0aGUgXCJlbXB0eVVybFwiXHJcbiAgICAgICAgICAgIGlmIChzZWxlY3RWYWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHNlbGVjdFZhbHVlID09PSBudWxsIHx8IHNlbGVjdFZhbHVlID09PSAnJyB8fCAoQXJyYXkuaXNBcnJheShzZWxlY3RWYWx1ZSkgJiYgc2VsZWN0VmFsdWUubGVuZ3RoID09PSAwKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YXNldFsnZW1wdHlVcmwnXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5fdXBkYXRlU2VsZWN0KHRhcmdldFNlbGVjdCwge30pO1xyXG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeSh0YXJnZXRTZWxlY3QpLmF0dHIoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbmV3QXBpVXJsID0gc2VsZi5fYnVpbGRVcmxXaXRoRm9ybUZpZWxkcyh0aGlzLmRhdGFzZXRbJ2VtcHR5VXJsJ10sIGZvcm1QcmVmaXgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBqUXVlcnkodGFyZ2V0U2VsZWN0KS5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpO1xyXG5cclxuICAgICAgICAgICAgQVBJLmdldChuZXdBcGlVcmwsIHt9LCBmdW5jdGlvbihkYXRhKXtcclxuICAgICAgICAgICAgICAgIHNlbGYuX3VwZGF0ZVNlbGVjdCh0YXJnZXRTZWxlY3QsIGRhdGEpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgX2J1aWxkVXJsV2l0aEZvcm1GaWVsZHMoYXBpVXJsLCBmb3JtUHJlZml4KSB7XHJcbiAgICAgICAgbGV0IG5ld0FwaVVybCA9IGFwaVVybDtcclxuXHJcbiAgICAgICAgYXBpVXJsLnNwbGl0KCc/JylbMV0uc3BsaXQoJyYnKS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBsZXQgW2tleSwgdmFsdWVdID0gaXRlbS5zcGxpdCgnPScpO1xyXG4gICAgICAgICAgICBsZXQgZGVjb2RlZCA9IGRlY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7XHJcbiAgICAgICAgICAgIGxldCB0ZXN0ID0gZGVjb2RlZC5tYXRjaCgvJSguKiklLyk7XHJcbiAgICAgICAgICAgIGlmICh0ZXN0ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGFyZ2V0RmllbGQgPSBqUXVlcnkoJyMnICsgZm9ybVByZWZpeCArIHRlc3RbMV0pO1xyXG4gICAgICAgICAgICAgICAgbGV0IG5ld1ZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0RmllbGQubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaGFwcGVucyBmb3IgZXhhbXBsZTpcclxuICAgICAgICAgICAgICAgICAgICAvLyAtIGluIGR1cmF0aW9uIG9ubHkgbW9kZSwgd2hlbiB0aGUgZW5kIGZpZWxkIGlzIG5vdCBmb3VuZFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdFUlJPUjogQ2Fubm90IGZpbmQgZmllbGQgd2l0aCBuYW1lIFwiJyArIHRlc3RbMV0gKyAnXCIgYnkgc2VsZWN0b3I6ICMnICsgZm9ybVByZWZpeCArIHRlc3RbMV0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0RmllbGQudmFsKCkgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgPSB0YXJnZXRGaWVsZC52YWwoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZSAhPT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGhhdmluZyB0aGF0IHNwZWNpYWwgY2FzZSBoZXJlIGlzIGZhciBmcm9tIGJlaW5nIHBlcmZlY3QuLi4gYnV0IGZvciBub3cgaXQgd29ya3MgOy0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0RmllbGQuZGF0YSgnZGF0ZXJhbmdlcGlja2VyJykgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChrZXkgPT09ICdiZWdpbicgfHwga2V5ID09PSAnc3RhcnQnIHx8IHRhcmdldEZpZWxkLmRhdGEoJ2RhdGVyYW5nZXBpY2tlcicpLnNpbmdsZURhdGVQaWNrZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgPSB0YXJnZXRGaWVsZC5kYXRhKCdkYXRlcmFuZ2VwaWNrZXInKS5zdGFydERhdGUuZm9ybWF0KG1vbWVudC5IVE1MNV9GTVQuREFURVRJTUVfTE9DQUxfU0VDT05EUyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdlbmQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0gdGFyZ2V0RmllbGQuZGF0YSgnZGF0ZXJhbmdlcGlja2VyJykuZW5kRGF0ZS5mb3JtYXQobW9tZW50LkhUTUw1X0ZNVC5EQVRFVElNRV9MT0NBTF9TRUNPTkRTKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRhcmdldEZpZWxkLmRhdGEoJ2Zvcm1hdCcpICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobW9tZW50KG5ld1ZhbHVlLCB0YXJnZXRGaWVsZC5kYXRhKCdmb3JtYXQnKSkuaXNWYWxpZCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0gbW9tZW50KG5ld1ZhbHVlLCB0YXJnZXRGaWVsZC5kYXRhKCdmb3JtYXQnKSkuZm9ybWF0KG1vbWVudC5IVE1MNV9GTVQuREFURVRJTUVfTE9DQUxfU0VDT05EUyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaGFwcGVucyBmb3IgZXhhbXBsZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIC0gd2hlbiB0aGUgZW5kIGRhdGUgaXMgbm90IHNldCBvbiBhIHRpbWVzaGVldCByZWNvcmQgYW5kIHRoZSBwcm9qZWN0IGxpc3QgaXMgbG9hZGVkIChhcyB0aGUgVVJMIGNvbnRhaW5zIHRoZSAlZW5kJSByZXBsYWNlcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdFbXB0eSB2YWx1ZSBmb3VuZCBmb3IgZmllbGQgd2l0aCBuYW1lIFwiJyArIHRlc3RbMV0gKyAnXCIgYnkgc2VsZWN0b3I6ICMnICsgZm9ybVByZWZpeCArIHRlc3RbMV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaGFwcGVucyBmb3IgZXhhbXBsZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gLSB3aGVuIGEgY3VzdG9tZXIgd2l0aG91dCBwcm9qZWN0cyBpcyBzZWxlY3RlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnRVJST1I6IEVtcHR5IGZpZWxkIHdpdGggbmFtZSBcIicgKyB0ZXN0WzFdICsgJ1wiIGJ5IHNlbGVjdG9yOiAjJyArIGZvcm1QcmVmaXggKyB0ZXN0WzFdKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobmV3VmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgPSBuZXdWYWx1ZS5qb2luKCcsJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbmV3QXBpVXJsID0gbmV3QXBpVXJsLnJlcGxhY2UodmFsdWUsIG5ld1ZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3QXBpVXJsO1xyXG4gICAgfVxyXG5cclxuICAgIF91cGRhdGVTZWxlY3Qoc2VsZWN0TmFtZSwgZGF0YSkge1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7fTtcclxuICAgICAgICBmb3IgKGNvbnN0IGFwaURhdGEgb2YgZGF0YSkge1xyXG4gICAgICAgICAgICBsZXQgdGl0bGUgPSAnX19lbXB0eV9fJztcclxuICAgICAgICAgICAgaWYgKGFwaURhdGEuaGFzT3duUHJvcGVydHkoJ3BhcmVudFRpdGxlJykgJiYgYXBpRGF0YS5wYXJlbnRUaXRsZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGl0bGUgPSBhcGlEYXRhLnBhcmVudFRpdGxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5oYXNPd25Qcm9wZXJ0eSh0aXRsZSkpIHtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnNbdGl0bGVdID0gW107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3B0aW9uc1t0aXRsZV0ucHVzaChhcGlEYXRhKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG9yZGVyZWQgPSB7fTtcclxuICAgICAgICBPYmplY3Qua2V5cyhvcHRpb25zKS5zb3J0KCkuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcclxuICAgICAgICAgICAgb3JkZXJlZFtrZXldID0gb3B0aW9uc1trZXldO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmdldENvbnRhaW5lcigpLmdldFBsdWdpbignZm9ybS1zZWxlY3QnKS51cGRhdGVPcHRpb25zKHNlbGVjdE5hbWUsIG9yZGVyZWQpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCIvKlxyXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgS2ltYWkgdGltZS10cmFja2luZyBhcHAuXHJcbiAqXHJcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXHJcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxyXG4gKi9cclxuXHJcbi8qIVxyXG4gKiBbS0lNQUldIEtpbWFpVGhlbWVJbml0aWFsaXplcjogaW5pdGlhbGl6ZSB0aGVtZSBmdW5jdGlvbmFsaXR5XHJcbiAqL1xyXG5cclxuaW1wb3J0IGpRdWVyeSBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgS2ltYWlQbHVnaW4gZnJvbSAnLi4vS2ltYWlQbHVnaW4nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2ltYWlUaGVtZUluaXRpYWxpemVyIGV4dGVuZHMgS2ltYWlQbHVnaW4ge1xyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5yZWdpc3Rlckdsb2JhbEFqYXhFcnJvckhhbmRsZXIoKTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyQXV0b21hdGljQWxlcnRSZW1vdmUoJ2Rpdi5hbGVydC1zdWNjZXNzJywgNTAwMCk7XHJcbiAgICAgICAgLy8gYWN0aXZhdGUgdGhlIGRyb3Bkb3duIGZ1bmN0aW9uYWxpdHlcclxuICAgICAgICBqUXVlcnkoJy5kcm9wZG93bi10b2dnbGUnKS5kcm9wZG93bigpO1xyXG4gICAgICAgIC8vIGFjdGl2YXRlIHRoZSB0b29sdGlwIGZ1bmN0aW9uYWxpdHlcclxuICAgICAgICBqUXVlcnkoJ1tkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIl0nKS50b29sdGlwKCk7XHJcbiAgICAgICAgLy8gYWN0aXZhdGUgYWxsIGZvcm0gcGx1Z2luc1xyXG4gICAgICAgIHRoaXMuZ2V0Q29udGFpbmVyKCkuZ2V0UGx1Z2luKCdmb3JtJykuYWN0aXZhdGVGb3JtKCcuY29udGVudC13cmFwcGVyIGZvcm0nLCAnYm9keScpO1xyXG4gICAgICAgIHRoaXMuZ2V0Q29udGFpbmVyKCkuZ2V0UGx1Z2luKCdmb3JtJykuYWN0aXZhdGVGb3JtKCdmb3JtLnNlYXJjaGZvcm0nLCAnYm9keScpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogcmVkaXJlY3QgYWNjZXNzIGRlbmllZCAvIHNlc3Npb24gdGltZW91dHMgdG8gbG9naW4gcGFnZVxyXG4gICAgICovXHJcbiAgICByZWdpc3Rlckdsb2JhbEFqYXhFcnJvckhhbmRsZXIoKSB7XHJcbiAgICAgICAgY29uc3QgbG9naW5VcmwgPSB0aGlzLmdldENvbmZpZ3VyYXRpb24oJ2xvZ2luJyk7XHJcbiAgICAgICAgY29uc3QgYWxlcnQgPSB0aGlzLmdldENvbnRhaW5lcigpLmdldFBsdWdpbignYWxlcnQnKTtcclxuICAgICAgICBjb25zdCB0cmFuc2xhdGlvbiA9IHRoaXMuZ2V0Q29udGFpbmVyKCkuZ2V0VHJhbnNsYXRpb24oKS5nZXQoJ2xvZ2luLnJlcXVpcmVkJyk7XHJcbiAgICAgICAgalF1ZXJ5KGRvY3VtZW50KS5hamF4RXJyb3IoZnVuY3Rpb24oZXZlbnQsIGpxeGhyLCBzZXR0aW5ncywgdGhyb3duRXJyb3IpIHtcclxuICAgICAgICAgICAgaWYgKGpxeGhyLnN0YXR1cyAhPT0gdW5kZWZpbmVkICYmIGpxeGhyLnN0YXR1cyA9PT0gNDAzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsb2dpblJlcXVpcmVkID0ganF4aHIuZ2V0UmVzcG9uc2VIZWFkZXIoJ2xvZ2luLXJlcXVpcmVkJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAobG9naW5SZXF1aXJlZCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0LnF1ZXN0aW9uKHRyYW5zbGF0aW9uLCBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKGxvZ2luVXJsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBhdXRvIGhpZGUgc3VjY2VzcyBtZXNzYWdlcywgYXMgdGhleSBhcmUganVzdCBtZWFudCBhcyB1c2VyIGZlZWRiYWNrIGFuZCBub3QgYXMgYSBwZXJtYW5lbnQgaW5mb3JtYXRpb25cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JcclxuICAgICAqIEBwYXJhbSB7aW50ZWdlcn0gaW50ZXJ2YWxcclxuICAgICAqL1xyXG4gICAgcmVnaXN0ZXJBdXRvbWF0aWNBbGVydFJlbW92ZShzZWxlY3RvciwgaW50ZXJ2YWwpIHtcclxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLl9hbGVydFJlbW92ZUhhbmRsZXIgPSBzZXRJbnRlcnZhbChcclxuICAgICAgICAgICAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmhpZGVBbGVydChzZWxlY3Rvcik7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGludGVydmFsXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICB1bnJlZ2lzdGVyQXV0b21hdGljQWxlcnRSZW1vdmUoKSB7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9hbGVydFJlbW92ZUhhbmRsZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yXHJcbiAgICAgKi9cclxuICAgIGhpZGVBbGVydChzZWxlY3Rvcikge1xyXG4gICAgICAgIGpRdWVyeShzZWxlY3RvcikuYWxlcnQoJ2Nsb3NlJyk7XHJcbiAgICB9XHJcblxyXG59XHJcbiIsIi8qXHJcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBLaW1haSB0aW1lLXRyYWNraW5nIGFwcC5cclxuICpcclxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcclxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXHJcbiAqL1xyXG5cclxuLyohXHJcbiAqIFtLSU1BSV0gS2ltYWlUb29sYmFyOiBzb21lIGV2ZW50IGxpc3RlbmVyIHRvIGhhbmRsZSB0aGUgdG9vbGJhci9kYXRhLXRhYmxlIGZpbHRlciwgdG9vbGJhciBhbmQgbmF2aWdhdGlvblxyXG4gKi9cclxuXHJcbmltcG9ydCBqUXVlcnkgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IEtpbWFpUGx1Z2luIGZyb20gXCIuLi9LaW1haVBsdWdpblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2ltYWlUb29sYmFyIGV4dGVuZHMgS2ltYWlQbHVnaW4ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGZvcm1TZWxlY3RvciwgZm9ybVN1Ym1pdEFjdGlvbkNsYXNzKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmZvcm1TZWxlY3RvciA9IGZvcm1TZWxlY3RvcjtcclxuICAgICAgICB0aGlzLmFjdGlvbkNsYXNzID0gZm9ybVN1Ym1pdEFjdGlvbkNsYXNzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldElkKCkge1xyXG4gICAgICAgIHJldHVybiAndG9vbGJhcic7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICBjb25zdCBmb3JtU2VsZWN0b3IgPSB0aGlzLmdldFNlbGVjdG9yKCk7XHJcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgY29uc3QgRVZFTlQgPSBzZWxmLmdldENvbnRhaW5lcigpLmdldFBsdWdpbignZXZlbnQnKTtcclxuXHJcbiAgICAgICAgdGhpcy5fcmVnaXN0ZXJQYWdpbmF0aW9uKGZvcm1TZWxlY3RvciwgRVZFTlQpO1xyXG4gICAgICAgIHRoaXMuX3JlZ2lzdGVyU29ydGFibGVUYWJsZXMoZm9ybVNlbGVjdG9yLCBFVkVOVCk7XHJcbiAgICAgICAgdGhpcy5fcmVnaXN0ZXJBbHRlcm5hdGl2ZVN1Ym1pdEFjdGlvbnMoZm9ybVNlbGVjdG9yLCB0aGlzLmFjdGlvbkNsYXNzKTtcclxuXHJcbiAgICAgICAgLy8gUmVzZXQgdGhlIHBhZ2UgaWYgZmlsdGVyIHZhbHVlcyBhcmUgY2hhbmdlZCwgb3RoZXJ3aXNlIHdlIG1pZ2h0IGVuZCB1cCB3aXRoIGEgbGltaXRlZCBzZXQgb2YgZGF0YSxcclxuICAgICAgICAvLyB3aGljaCBkb2VzIG5vdCBzdXBwb3J0IHRoZSBnaXZlbiBwYWdlIC0gYW5kIGl0IHdvdWxkIGJlIGp1c3Qgd3JvbmcgdG8gc3RheSBpbiB0aGUgc2FtZSBwYWdlXHJcbiAgICAgICAgalF1ZXJ5KGZvcm1TZWxlY3RvciArJyBpbnB1dCcpLmNoYW5nZShmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChldmVudC50YXJnZXQuaWQpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ29yZGVyJzpcclxuICAgICAgICAgICAgICAgIGNhc2UgJ29yZGVyQnknOlxyXG4gICAgICAgICAgICAgICAgY2FzZSAncGFnZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeShmb3JtU2VsZWN0b3IgKyAnIGlucHV0I3BhZ2UnKS52YWwoMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2VsZi50cmlnZ2VyQ2hhbmdlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gd2hlbiB1c2VyIHNlbGVjdGVkIGEgbmV3IGN1c3RvbWVyIG9yIHByb2plY3QsIHJlc2V0IHRoZSBwYWdpbmF0aW9uIGJhY2sgdG8gMVxyXG4gICAgICAgIC8vIGFuZCB0aGVuIGZpbmQgb3V0IGlmIHRoZSByZXN1bHRzIHNob3VsZCBiZSByZWxvYWRlZFxyXG4gICAgICAgIGpRdWVyeShmb3JtU2VsZWN0b3IgKyAnIHNlbGVjdCcpLmNoYW5nZShmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgbGV0IHJlbG9hZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoZXZlbnQudGFyZ2V0LmlkKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdjdXN0b21lcic6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGpRdWVyeShmb3JtU2VsZWN0b3IgKyAnIHNlbGVjdCNwcm9qZWN0JykubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWxvYWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSAncHJvamVjdCc6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGpRdWVyeShmb3JtU2VsZWN0b3IgKyAnIHNlbGVjdCNhY3Rpdml0eScpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVsb2FkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGpRdWVyeShmb3JtU2VsZWN0b3IgKyAnIGlucHV0I3BhZ2UnKS52YWwoMSk7XHJcblxyXG4gICAgICAgICAgICBpZiAocmVsb2FkKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnRyaWdnZXJDaGFuZ2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU29tZSBhY3Rpb25zIHV0aWxpemUgdGhlIGZpbHRlciBmcm9tIHRoZSBzZWFyY2ggZm9ybSBhbmQgc3VibWl0IGl0IHRvIGFub3RoZXIgVVJMLlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgX3JlZ2lzdGVyQWx0ZXJuYXRpdmVTdWJtaXRBY3Rpb25zKHRvb2xiYXJTZWxlY3RvciwgYWN0aW9uQnRuQ2xhc3MpIHtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGxldCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgICAgIHdoaWxlICh0YXJnZXQgIT09IG51bGwgJiYgIXRhcmdldC5tYXRjaGVzKCdib2R5JykpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKGFjdGlvbkJ0bkNsYXNzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRvb2xiYXJTZWxlY3Rvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZvcm0gPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmV2QWN0aW9uID0gZm9ybS5hY3Rpb247XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJldk1ldGhvZCA9IGZvcm0ubWV0aG9kO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm0udGFyZ2V0ID0gJ19ibGFuayc7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybS5hY3Rpb24gPSB0YXJnZXQuaHJlZjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0LmRhdGFzZXQubWV0aG9kICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybS5tZXRob2QgPSB0YXJnZXQuZGF0YXNldC5tZXRob2Q7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGZvcm0uc3VibWl0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybS50YXJnZXQgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICBmb3JtLmFjdGlvbiA9IHByZXZBY3Rpb247XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybS5tZXRob2QgPSBwcmV2TWV0aG9kO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRhcmdldCA9IHRhcmdldC5wYXJlbnROb2RlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7ICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNvcnRhYmxlIGRhdGF0YWJsZXMgdXNlIGhpZGRlbiBmaWVsZHMgaW4gdGhlIHRvb2xiYXIgZmlsdGVyL3NlYXJjaCBmb3JtXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBfcmVnaXN0ZXJTb3J0YWJsZVRhYmxlcyhmb3JtU2VsZWN0b3IsIEVWRU5UKSB7XHJcbiAgICAgICAgalF1ZXJ5KCdib2R5Jykub24oJ2NsaWNrJywgJ3RoLnNvcnRhYmxlJywgZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgICAgICB2YXIgJGhlYWRlciA9IGpRdWVyeShldmVudC50YXJnZXQpO1xyXG4gICAgICAgICAgICB2YXIgb3JkZXIgPSAnREVTQyc7XHJcbiAgICAgICAgICAgIHZhciBvcmRlckJ5ID0gJGhlYWRlci5kYXRhKCdvcmRlcicpO1xyXG4gICAgICAgICAgICBpZiAoJGhlYWRlci5oYXNDbGFzcygnc29ydGluZ19kZXNjJykpIHtcclxuICAgICAgICAgICAgICAgIG9yZGVyID0gJ0FTQyc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGpRdWVyeShmb3JtU2VsZWN0b3IgKyAnICNvcmRlckJ5JykudmFsKG9yZGVyQnkpO1xyXG4gICAgICAgICAgICBqUXVlcnkoZm9ybVNlbGVjdG9yICsgJyAjb3JkZXInKS52YWwob3JkZXIpO1xyXG5cclxuICAgICAgICAgICAgLy8gcmUtcmVuZGVyIHRoZSBzZWxlY3Rib3hlc1xyXG4gICAgICAgICAgICBqUXVlcnkoZm9ybVNlbGVjdG9yICsgJyAjb3JkZXJCeScpLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG4gICAgICAgICAgICBqUXVlcnkoZm9ybVNlbGVjdG9yICsgJyAjb3JkZXInKS50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHRyaWdnZXJzIHRoZSBkYXRhdGFibGUgcmVsb2FkIC0gc2VhcmNoIGZvciB0aGUgZXZlbnQgbmFtZVxyXG4gICAgICAgICAgICBFVkVOVC50cmlnZ2VyKCdmaWx0ZXItY2hhbmdlJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBjYXRjaGVzIGFsbCBjbGlja3Mgb24gdGhlIHBhZ2luYXRpb24gYW5kIHByZXZlbnRzIHRoZSBkZWZhdWx0IGFjdGlvbiwgYXMgd2Ugd2FudCB0byByZWxvYWQgdGhlIHBhZ2UgdmlhIEpTXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBfcmVnaXN0ZXJQYWdpbmF0aW9uKGZvcm1TZWxlY3RvciwgRVZFTlQpIHtcclxuICAgICAgICBqUXVlcnkoJ2JvZHknKS5vbignY2xpY2snLCAnZGl2Lm5hdmlnYXRpb24gdWwucGFnaW5hdGlvbiBsaSBhJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICAgbGV0IHBhZ2VyID0galF1ZXJ5KGZvcm1TZWxlY3RvciArIFwiIGlucHV0I3BhZ2VcIik7XHJcbiAgICAgICAgICAgIGlmIChwYWdlci5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgbGV0IHVybFBhcnRzID0galF1ZXJ5KHRoaXMpLmF0dHIoJ2hyZWYnKS5zcGxpdCgnLycpO1xyXG4gICAgICAgICAgICBsZXQgcGFnZSA9IHVybFBhcnRzW3VybFBhcnRzLmxlbmd0aC0xXTtcclxuICAgICAgICAgICAgcGFnZXIudmFsKHBhZ2UpO1xyXG4gICAgICAgICAgICBwYWdlci50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuICAgICAgICAgICAgRVZFTlQudHJpZ2dlcigncGFnaW5hdGlvbi1jaGFuZ2UnKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAgKiBUcmlnZ2VycyBhbiBldmVudCwgdGhhdCBldmVyeW9uZSBjYW4gbGlzdGVuIGZvci5cclxuICAgICAqL1xyXG4gICAgdHJpZ2dlckNoYW5nZSgpIHtcclxuICAgICAgICB0aGlzLmdldENvbnRhaW5lcigpLmdldFBsdWdpbignZXZlbnQnKS50cmlnZ2VyKCd0b29sYmFyLWNoYW5nZScpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0aGUgQ1NTIHNlbGVjdG9yIHRvIHRhcmdldCB0aGUgdG9vbGJhciBmb3JtLlxyXG4gICAgICogXHJcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxyXG4gICAgICovXHJcbiAgICBnZXRTZWxlY3RvcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5mb3JtU2VsZWN0b3I7XHJcbiAgICB9XHJcblxyXG59XHJcbiIsIi8qXHJcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBLaW1haSB0aW1lLXRyYWNraW5nIGFwcC5cclxuICpcclxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcclxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXHJcbiAqL1xyXG5cclxuLyohXHJcbiAqIFtLSU1BSV0gS2ltYWlDb29raWVzOiBzaW1wbGUgd3JhcHBlciB0byBoYW5kbGUgY29va2llc1xyXG4gKi9cclxuXHJcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLaW1haUNvb2tpZXMge1xyXG5cclxuICAgIHN0YXRpYyBzZXQobmFtZSwgdmFsdWVzLCBvcHRpb25zKSB7XHJcbiAgICAgICAgQ29va2llcy5zZXQobmFtZSwgdmFsdWVzLCBvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0KG5hbWUpIHtcclxuICAgICAgICByZXR1cm4gQ29va2llcy5nZXRKU09OKG5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyByZW1vdmUobmFtZSkge1xyXG4gICAgICAgIENvb2tpZXMucmVtb3ZlKG5hbWUpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCIvKlxyXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgS2ltYWkgdGltZS10cmFja2luZyBhcHAuXHJcbiAqXHJcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXHJcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxyXG4gKi9cclxuXHJcbi8qIVxyXG4gKiBbS0lNQUldIEtpbWFpUGFnaW5hdGVkQm94V2lkZ2V0OiBoYW5kbGVzIGJveCB3aWRnZXRzIHRoYXQgaGF2ZSBhIHBhZ2luYXRpb25cclxuICovXHJcblxyXG5pbXBvcnQgalF1ZXJ5IGZyb20gXCJqcXVlcnlcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtpbWFpUGFnaW5hdGVkQm94V2lkZ2V0IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihib3hJZCkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0b3IgPSBib3hJZDtcclxuICAgICAgICB0aGlzLm92ZXJsYXkgPSBqUXVlcnkoJzxkaXYgY2xhc3M9XCJvdmVybGF5XCI+PGRpdiBjbGFzcz1cImZhcyBmYS1zeW5jIGZhLXNwaW5cIj48L2Rpdj48L2Rpdj4nKTtcclxuICAgICAgICB0aGlzLndpZGdldCA9IGpRdWVyeSh0aGlzLnNlbGVjdG9yKTtcclxuICAgICAgICB0aGlzLmhyZWYgPSB0aGlzLndpZGdldC5kYXRhKCdocmVmJyk7XHJcbiAgICAgICAgdGhpcy5ldmVudHMgPSB0aGlzLndpZGdldC5kYXRhKCdyZWxvYWQnKS5zcGxpdCgnICcpO1xyXG5cclxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgY29uc3QgcmVsb2FkUGFnZSA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICBjb25zdCBwYWdlID0galF1ZXJ5KHNlbGYuc2VsZWN0b3IgKyAnIC5ib3gtdG9vbHMnKS5kYXRhKCdwYWdlJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IHNlbGYuX2J1aWxkVXJsKHBhZ2UpO1xyXG4gICAgICAgICAgICBzZWxmLmxvYWRQYWdlKHVybCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBldmVudE5hbWUgb2YgdGhpcy5ldmVudHMpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIHJlbG9hZFBhZ2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy53aWRnZXQub24oJ2NsaWNrJywgJy5ib3gtdG9vbHMgdWwucGFnaW5hdGlvbiBhJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHNlbGYubG9hZFBhZ2UoalF1ZXJ5KGV2ZW50LmN1cnJlbnRUYXJnZXQpLmF0dHIoJ2hyZWYnKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHN0YXRpYyBjcmVhdGUoZWxlbWVudElkKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBLaW1haVBhZ2luYXRlZEJveFdpZGdldChlbGVtZW50SWQpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBfc2hvd092ZXJsYXkoKSB7XHJcbiAgICAgICAgdGhpcy53aWRnZXQuYXBwZW5kKHRoaXMub3ZlcmxheSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIF9oaWRlT3ZlcmxheSgpIHtcclxuICAgICAgICBqUXVlcnkodGhpcy5vdmVybGF5KS5yZW1vdmUoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgbG9hZFBhZ2UodXJsKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSB0aGlzLnNlbGVjdG9yO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHNlbGYuX3Nob3dPdmVybGF5KCk7XHJcblxyXG4gICAgICAgIGpRdWVyeS5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGh0bWwgPSBqUXVlcnkocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KHNlbGVjdG9yICsgJyAuYm94LXRvb2xzJykucmVwbGFjZVdpdGgoaHRtbC5maW5kKCcuYm94LXRvb2xzJykpO1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KHNlbGVjdG9yICsgJyAuYm94LWJvZHknKS5yZXBsYWNlV2l0aChodG1sLmZpbmQoJy5ib3gtYm9keScpKTtcclxuICAgICAgICAgICAgICAgIGpRdWVyeShzZWxlY3RvciArICcgLmJveC10aXRsZScpLnJlcGxhY2VXaXRoKGh0bWwuZmluZCgnLmJveC10aXRsZScpKTtcclxuICAgICAgICAgICAgICAgIGlmIChqUXVlcnkoc2VsZWN0b3IgKyAnIC5ib3gtZm9vdGVyJykubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeShzZWxlY3RvciArICcgLmJveC1mb290ZXInKS5yZXBsYWNlV2l0aChodG1sLmZpbmQoJy5ib3gtZm9vdGVyJykpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KHNlbGVjdG9yICsgJyAuYm94LWJvZHkgW2RhdGEtdG9nZ2xlPVwidG9vbHRpcFwiXScpLnRvb2x0aXAoKTtcclxuICAgICAgICAgICAgICAgIHNlbGYud2lkZ2V0LnJlbW92ZURhdGEoJ2Vycm9yLXJldHJ5Jyk7XHJcbiAgICAgICAgICAgICAgICBzZWxmLl9oaWRlT3ZlcmxheSgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2h0bWwnLFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24oanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoanFYSFIuc3RhdHVzICE9PSB1bmRlZmluZWQgJiYganFYSFIuc3RhdHVzID09PSA1MDApIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi53aWRnZXQuZGF0YSgnZXJyb3ItcmV0cnknKSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE8gc2hvdyBlcnJvciBtZXNzYWdlID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwYWdlID0galF1ZXJ5KHNlbGVjdG9yICsgJyAuYm94LXRvb2xzJykuZGF0YSgncGFnZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwYWdlID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLndpZGdldC5kYXRhKCdlcnJvci1yZXRyeScsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdXJsID0gc2VsZi5fYnVpbGRVcmwocGFnZSAtIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmxvYWRQYWdlKHVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2VsZi5faGlkZU92ZXJsYXkoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pOyAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIF9idWlsZFVybChwYWdlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHJlZi5yZXBsYWNlKCcxJywgcGFnZSk7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG4iLCIvKlxyXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgS2ltYWkgdGltZS10cmFja2luZyBhcHAuXHJcbiAqXHJcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXHJcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxyXG4gKi9cclxuXHJcbi8qIVxyXG4gKiBbS0lNQUldIEtpbWFpUmVsb2FkUGFnZVdpZGdldDogYSBzaW1wbGUgaGVscGVyIHRvIHJlbG9hZCB0aGUgcGFnZSBvbiBldmVudHNcclxuICovXHJcblxyXG5pbXBvcnQgalF1ZXJ5IGZyb20gXCJqcXVlcnlcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtpbWFpUmVsb2FkUGFnZVdpZGdldCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZXZlbnRzLCBmdWxsUmVsb2FkKSB7XHJcbiAgICAgICAgdGhpcy5vdmVybGF5ID0galF1ZXJ5KCc8ZGl2IGNsYXNzPVwib3ZlcmxheS13cmFwcGVyXCI+PGRpdiBjbGFzcz1cIm92ZXJsYXlcIj48ZGl2IGNsYXNzPVwiZmFzIGZhLXN5bmMgZmEtc3BpblwiPjwvZGl2PjwvZGl2PjwvZGl2PicpO1xyXG4gICAgICAgIHRoaXMud2lkZ2V0ID0galF1ZXJ5KCdkaXYuY29udGVudC13cmFwcGVyJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICBjb25zdCByZWxvYWRQYWdlID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGlmIChmdWxsUmVsb2FkKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQodHJ1ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmxvYWRQYWdlKGRvY3VtZW50LmxvY2F0aW9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgZXZlbnROYW1lIG9mIGV2ZW50cy5zcGxpdCgnICcpKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCByZWxvYWRQYWdlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHN0YXRpYyBjcmVhdGUoZXZlbnRzLCBmdWxsUmVsb2FkKSB7XHJcbiAgICAgICAgaWYgKGZ1bGxSZWxvYWQgPT09IHVuZGVmaW5lZCB8fCBmdWxsUmVsb2FkID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGZ1bGxSZWxvYWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBLaW1haVJlbG9hZFBhZ2VXaWRnZXQoZXZlbnRzLCBmdWxsUmVsb2FkKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgX3Nob3dPdmVybGF5KCkge1xyXG4gICAgICAgIHRoaXMud2lkZ2V0LmFwcGVuZCh0aGlzLm92ZXJsYXkpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBfaGlkZU92ZXJsYXkoKSB7XHJcbiAgICAgICAgalF1ZXJ5KHRoaXMub3ZlcmxheSkucmVtb3ZlKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGxvYWRQYWdlKHVybCkge1xyXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHNlbGYuX3Nob3dPdmVybGF5KCk7XHJcblxyXG4gICAgICAgIGpRdWVyeS5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSgnc2VjdGlvbi5jb250ZW50JykucmVwbGFjZVdpdGgoXHJcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KHJlc3BvbnNlKS5maW5kKCdzZWN0aW9uLmNvbnRlbnQnKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdraW1haS5yZWxvYWRQYWdlJykpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5faGlkZU92ZXJsYXkoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdodG1sJyxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5faGlkZU92ZXJsYXkoKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uID0gdXJsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7ICAgICAgICBcclxuICAgIH1cclxuXHJcbn1cclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==