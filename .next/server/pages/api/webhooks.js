"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/webhooks";
exports.ids = ["pages/api/webhooks"];
exports.modules = {

/***/ "(api)/./src/pages/api/webhooks.ts":
/*!***********************************!*\
  !*** ./src/pages/api/webhooks.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    console.log(\"evento recebido\");\n    res.status(200).json({\n        ok: true\n    });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3dlYmhvb2tzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFFQSxpRUFBZSxPQUFPQSxHQUFtQixFQUFFQyxHQUFvQixHQUFLO0lBQ2hFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQy9CRixHQUFHLENBQUNHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1FBQUVDLEVBQUUsRUFBRSxJQUFJO0tBQUMsQ0FBQztDQUNwQyIsInNvdXJjZXMiOlsid2VicGFjazovL3R1bGlvX3BvcnRmb2xpby8uL3NyYy9wYWdlcy9hcGkvd2ViaG9va3MudHM/ZDNhNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJldmVudG8gcmVjZWJpZG9cIik7XG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBvazogdHJ1ZX0pXG59Il0sIm5hbWVzIjpbInJlcSIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJqc29uIiwib2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/webhooks.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/webhooks.ts"));
module.exports = __webpack_exports__;

})();