/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".haveFelt {\\n\\ttext-decoration: line-through;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://top-tofeel/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://top-tofeel/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://top-tofeel/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://top-tofeel/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://top-tofeel/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://top-tofeel/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://top-tofeel/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://top-tofeel/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://top-tofeel/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://top-tofeel/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\nclass feeling {\n\t// will want to add other properties later: how long delayed, priority, etc.\n\tconstructor(name, about, date, haveFelt = false, project = 'default') {\n\t\tthis._name = name;\n\t\tthis._about = about;\n\t\tthis._date = date;\n\t\tthis._haveFelt = haveFelt;\n\t\tthis._project = project;\n\t}\n\n\t// for flipping the condition of \"have felt\"\n\ttoggleFelt() {\n\t\tif (this._haveFelt !== true) {\n\t\t\tthis._haveFelt = true;\n\t\t} else {\n\t\t\tthis._haveFelt = false;\n\t\t}\n\t\treturn;\n\t}\n\n\t// ok write some gets and sets\n\tget name() {\n\t\treturn this._name;\n\t}\n\n\tset name(value) {\n\t\tthis._name = value;\n\t}\n\n\tget about() {\n\t\treturn this._about;\n\t}\n\n\tset about(value) {\n\t\tthis._about = value;\n\t}\n\n\tget date() {\n\t\treturn this._date;\n\t}\n\n\tset date(value) {\n\t\tthis._date = value;\n\t}\n\n\tget haveFelt() {\n\t\treturn this._haveFelt;\n\t}\n\n\tset haveFelt(value) {\n\t\tthis._haveFelt = value;\n\t}\n\n\tget project() {\n\t\treturn this._project;\n\t}\n\n\tset project(value) {\n\t\tthis._project = value;\n\t}\n}\n\nfunction FeelingList() {\n\tconst _list = [];\n\n\t// just a simple push to add a feel to the list\n\tconst addFeel = (feeling) => {\n\t\t_list.push(feeling);\n\t};\n\n\t// lets you access the internal array\n\tconst getAllFeels = () => {\n\t\treturn _list;\n\t};\n\n\t// uses filter function to pull out and make temp array\n\tconst showHaveFelt = () => {\n\t\tlet haveFeltList = _list.filter(function (feel) {\n\t\t\treturn feel.haveFelt === true;\n\t\t});\n\t\treturn haveFeltList;\n\t};\n\n\t// same as above\n\tconst showHaveNotFelt = () => {\n\t\tlet haveNotFeltList = _list.filter(function (feel) {\n\t\t\treturn feel.haveFelt === false;\n\t\t});\n\t\treturn haveNotFeltList;\n\t};\n\n\t// sort be recent, but don't alter original list\n\tconst sortByRecent = () => {\n\t\treturn (sortedList = _list.slice().sort((a, b) => b.date - a.date));\n\t};\n\n\tconst showUniqueProjects = () => {\n\t\t// iterates through passed array of objects, and creates a new array of just the list of Projects\n\t\t// only shows unique projects, by making a new array of the set of the filtered array\n\t\treturn Array.from(new Set(_list.map((array) => array.project)));\n\t};\n\n\tconst showProjectSelection = (projectName) => {\n\t\tlet projectList = _list.filter((feel) => feel.project === projectName);\n\t\treturn projectList;\n\t};\n\n\t//edits main array and removes a feel\n\tconst removeFeel = (index) => {\n\t\t_list.splice(index, 1);\n\t};\n\n\treturn {\n\t\taddFeel,\n\t\tgetAllFeels,\n\t\tshowHaveFelt,\n\t\tshowHaveNotFelt,\n\t\tshowUniqueProjects,\n\t\tshowProjectSelection,\n\t\tsortByRecent,\n\t\tremoveFeel,\n\t};\n}\n\n// ok let's instantiate a local feelList\n\nfunction DOMHandler() {\n\t// later on just make this an instance of FeelingList()\n\tlet feelList = FeelingList();\n\n\t// --- hardcoded section start --- (to be removed later)\n\n\tconst sad = new feeling(\n\t\t'sad',\n\t\t'how hard coding is',\n\t\t'date here',\n\t\tfalse,\n\t\t'delay'\n\t);\n\tconst glad = new feeling(\n\t\t'glad',\n\t\t'every time my code runs',\n\t\t'date here',\n\t\ttrue,\n\t\t'me'\n\t);\n\tconst mad = new feeling(\n\t\t'mad',\n\t\t`when i can't figure out how it works`,\n\t\t'date here',\n\t\ttrue,\n\t\t'me'\n\t);\n\n\tfeelList.addFeel(sad);\n\tfeelList.addFeel(glad);\n\tfeelList.addFeel(mad);\n\t// ----------------- hardcoded section end ------------------\n\n\tlet tempList = [];\n\n\tlet currentProject = 'all';\n\n\ttempList = feelList;\n\n\tconst containerDiv = document.querySelector('.container');\n\n\tconst projectElement = document.createElement('ul');\n\n\tconst listElement = document.createElement('ul');\n\n\tcontainerDiv.appendChild(projectElement);\n\tcontainerDiv.appendChild(listElement);\n\n\tconst projectDisplay = () => {\n\t\tconst projList = feelList.showUniqueProjects();\n\n\t\t// will this work to always have an \"all\" button?\n\t\tprojList.push('all');\n\n\t\tfor (let i = 0; i < projList.length; i++) {\n\t\t\tlet button = document.createElement('button');\n\n\t\t\tbutton.innerHTML = `${projList[i]}`;\n\t\t\tbutton.name = `${projList[i]}`;\n\t\t\tbutton.value = `${projList[i]}`;\n\t\t\tbutton.id = `${projList[i]}`;\n\n\t\t\tbutton.addEventListener('click', function () {\n\t\t\t\tcurrentProject = `${projList[i]}`;\n\n\t\t\t\tif (currentProject === 'all') {\n\t\t\t\t\tdisplayList(feelList.getAllFeels());\n\t\t\t\t} else {\n\t\t\t\t\tdisplayList(feelList.showProjectSelection(currentProject));\n\t\t\t\t}\n\n\t\t\t\t// set the temp list here to the current sorted array of the projects, and then call displayList\n\t\t\t\t// or pass that array to displaylist? that'd be tidier\n\t\t\t});\n\t\t\tprojectElement.appendChild(button);\n\t\t}\n\n\t\t// create buttons for each project\n\t\t// create event listener for each button\n\t\t// depending on which pressed, send that sorted array to displayList\n\t};\n\n\t// just display the list, handle the form element later on\n\tconst displayList = (array) => {\n\t\tlistElement.innerHTML = '';\n\n\t\tfor (let i = 0; i < array.length; i++) {\n\t\t\tlet item = document.createElement('li');\n\n\t\t\titem.textContent = `${array[i].name}, \n\t\t\t\t\t\t\t\t${array[i].about}, \n\t\t\t\t\t\t\t\t${array[i].date}`;\n\n\t\t\tlet feltItButton = document.createElement('button');\n\n\t\t\tconsole.log(array[i].name, array[i].haveFelt);\n\n\t\t\tif (array[i].haveFelt === false) {\n\t\t\t\tfeltItButton.textContent = 'Felt it?';\n\t\t\t\titem.removeAttribute('class', 'haveFelt');\n\t\t\t} else {\n\t\t\t\tfeltItButton.textContent = 'Feeling it again?';\n\t\t\t\titem.setAttribute('class', 'haveFelt');\n\t\t\t}\n\n\t\t\tfeltItButton.id = i;\n\n\t\t\t// some redundant code bullshit, but can't figure out just now\n\n\t\t\tfeltItButton.addEventListener('click', function () {\n\t\t\t\tarray[i].toggleFelt();\n\n\t\t\t\tif (array[i].haveFelt === false) {\n\t\t\t\t\tfeltItButton.textContent = 'Felt it?';\n\t\t\t\t\titem.removeAttribute('class', 'haveFelt');\n\t\t\t\t} else {\n\t\t\t\t\tfeltItButton.textContent = 'Feeling it again?';\n\t\t\t\t\titem.setAttribute('class', 'haveFelt');\n\t\t\t\t}\n\t\t\t});\n\n\t\t\titem.appendChild(feltItButton);\n\n\t\t\tlistElement.appendChild(item);\n\t\t}\n\n\t\taddForm(); // so whenever you call a display, it plops in a form line at the end!\n\t\treturn;\n\t};\n\n\tconst createForm = () => {\n\t\t// create form\n\t\tconst form = document.createElement('form');\n\n\t\t// create input fields\n\n\t\tconst inFeel = document.createElement('input');\n\t\tinFeel.type = 'text';\n\t\tinFeel.name = 'inFeel';\n\t\tinFeel.placeholder = `What's the Feeling?`;\n\n\t\tconst inDesc = document.createElement('input');\n\t\tinDesc.type = 'text';\n\t\tinDesc.name = 'inDesc';\n\t\tinDesc.placeholder = `What's it about?`;\n\n\t\tconst inWhen = document.createElement('input');\n\t\tinWhen.type = 'text';\n\t\tinWhen.name = 'inWhen';\n\t\tinWhen.placeholder = 'When? YYYY-MM-DD';\n\n\t\tconst radioFeelingIt = document.createElement('input');\n\t\tradioFeelingIt.type = 'radio';\n\t\tradioFeelingIt.name = 'felt';\n\t\tradioFeelingIt.value = false;\n\t\tradioFeelingIt.checked = true; // well that doesn't work, fix it next\n\n\t\tconst radioFeelingItLabel = document.createElement('label');\n\t\tradioFeelingItLabel.textContent = 'Feeling It Now?';\n\n\t\tconst radioFeltIt = document.createElement('input');\n\t\tradioFeltIt.type = 'radio';\n\t\tradioFeltIt.name = 'felt';\n\t\tradioFeltIt.value = true;\n\n\t\tconst radioFeltItLabel = document.createElement('label');\n\t\tradioFeltItLabel.textContent = 'Felt It Through?';\n\n\t\tconst submitButton = document.createElement('button');\n\t\tsubmitButton.type = 'submit';\n\t\tsubmitButton.textContent = '+';\n\n\t\tform.appendChild(inFeel);\n\t\tform.appendChild(inDesc);\n\t\tform.appendChild(inWhen);\n\t\tform.appendChild(radioFeelingIt);\n\t\tform.appendChild(radioFeelingItLabel);\n\t\tform.appendChild(radioFeltIt);\n\t\tform.appendChild(radioFeltItLabel);\n\t\tform.appendChild(submitButton);\n\n\t\tform.addEventListener('submit', function (event) {\n\t\t\tevent.preventDefault();\n\n\t\t\t// create the feeling from the form content\n\t\t\tlet tempFeel = new feeling(\n\t\t\t\tform.elements.inFeel.value,\n\t\t\t\tform.elements.inDesc.value,\n\t\t\t\tform.elements.inWhen.value\n\t\t\t);\n\n\t\t\tconst radioButtons = document.querySelectorAll('input[name=\"felt\"]');\n\n\t\t\tfor (const radioButton of radioButtons) {\n\t\t\t\tif (radioButton.checked) {\n\t\t\t\t\ttempFeel.haveFelt = radioButton.value;\n\t\t\t\t\tconsole.log(tempFeel.name, tempFeel.haveFelt);\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t// add the feeling to the main list\n\t\t\tfeelList.addFeel(tempFeel);\n\n\t\t\t// run the display code to refresh the display\n\t\t\t// if the current project list is all, show all feels, otherwise show project list of current project\n\t\t\tif (currentProject === 'all') {\n\t\t\t\tdisplayList(feelList.getAllFeels());\n\t\t\t} else {\n\t\t\t\tdisplayList(feelList.showProjectSelection(currentProject));\n\t\t\t}\n\t\t});\n\t\treturn form;\n\t};\n\n\tconst addForm = () => {\n\t\tlet formLine = document.createElement('li');\n\t\tformLine.appendChild(createForm());\n\t\tlistElement.appendChild(formLine);\n\t};\n\n\t// maybe have a function that just runs the full display functions in proper order\n\t//\n\n\t// initial calls after functions have been declared\n\n\tprojectDisplay();\n\n\t// initial display of all feels\n\tdisplayList(feelList.getAllFeels());\n}\n\nDOMHandler();\n\n\n//# sourceURL=webpack://top-tofeel/./src/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.js");
/******/ 	
/******/ })()
;