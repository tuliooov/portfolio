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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "faunadb":
/*!**************************!*\
  !*** external "faunadb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("faunadb");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/github":
/*!*********************************************!*\
  !*** external "next-auth/providers/github" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/github");

/***/ }),

/***/ "(api)/./src/pages/api/auth/[...nextauth].ts":
/*!*********************************************!*\
  !*** ./src/pages/api/auth/[...nextauth].ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/github */ \"next-auth/providers/github\");\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _service_fauna__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/fauna */ \"(api)/./src/service/fauna.ts\");\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_1___default()({\n    providers: [\n        next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2___default()({\n            clientId: process.env.GITHUB_CLIENT_ID,\n            clientSecret: process.env.GITHUB_CLIENT_SECRET,\n            authorization: {\n                params: {\n                    scope: \"read:user\"\n                }\n            }\n        }), \n    ],\n    callbacks: {\n        async signIn ({ user  }) {\n            try {\n                const { email  } = user;\n                await _service_fauna__WEBPACK_IMPORTED_MODULE_3__.fauna.query(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.If(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Not(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Exists(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Index(\"users_by_email\"), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Casefold(email)))), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Create(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Collection(\"users\"), {\n                    data: {\n                        email\n                    }\n                }), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Get(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Index(\"users_by_email\"), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Casefold(email)))));\n                return true;\n            } catch  {\n                return false;\n            }\n        }\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFxQztBQUVKO0FBQ3VCO0FBQ1Q7QUFFL0MsaUVBQWVFLGdEQUFRLENBQUM7SUFDdEJHLFNBQVMsRUFBRTtRQUNURixpRUFBYyxDQUFDO1lBQ2JHLFFBQVEsRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLGdCQUFnQjtZQUN0Q0MsWUFBWSxFQUFFSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0csb0JBQW9CO1lBQzlDQyxhQUFhLEVBQUU7Z0JBQ2JDLE1BQU0sRUFBRTtvQkFDTkMsS0FBSyxFQUFFLFdBQVc7aUJBQ25CO2FBQ0Y7U0FDRixDQUFDO0tBQ0g7SUFDREMsU0FBUyxFQUFFO1FBQ1QsTUFBTUMsTUFBTSxFQUFDLEVBQUVDLElBQUksR0FBRSxFQUFvQjtZQUd2QyxJQUFJO2dCQUVGLE1BQU0sRUFBRUMsS0FBSyxHQUFFLEdBQUdELElBQUk7Z0JBRXRCLE1BQU1iLHVEQUFXLENBQ2ZILDZDQUFJLENBQ0ZBLDhDQUFLLENBQ0hBLGlEQUFRLENBQ05BLGdEQUFPLENBQ0xBLGdEQUFPLENBQUMsZ0JBQWdCLENBQUMsRUFDekJBLG1EQUFVLENBQUNpQixLQUFLLENBQUMsQ0FDbEIsQ0FDRixDQUNGLEVBQ0RqQixpREFBUSxDQUNOQSxxREFBWSxDQUFDLE9BQU8sQ0FBQyxFQUFFO29CQUNyQjBCLElBQUksRUFBRTt3QkFBRVQsS0FBSztxQkFBRTtpQkFDaEIsQ0FDRixFQUNEakIsOENBQUssQ0FDSEEsZ0RBQU8sQ0FDTEEsZ0RBQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxFQUN6QkEsbURBQVUsQ0FBQ2lCLEtBQUssQ0FBQyxDQUNsQixDQUNGLENBQ0YsQ0FDRjtnQkFFRCxPQUFPLElBQUksQ0FBQzthQUNiLENBQUMsT0FBTTtnQkFDTixPQUFPLEtBQUssQ0FBQzthQUNkO1NBQ0Y7S0FDRjtDQUNGLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3R1bGlvX3BvcnRmb2xpby8uL3NyYy9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzPzUwYTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcXVlcnkgYXMgcSB9IGZyb20gXCJmYXVuYWRiXCI7XG5cbmltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCI7XG5pbXBvcnQgR2l0SHViUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ2l0aHViXCI7XG5pbXBvcnQgeyBmYXVuYSB9IGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlL2ZhdW5hXCI7XG5cbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKHtcbiAgcHJvdmlkZXJzOiBbXG4gICAgR2l0SHViUHJvdmlkZXIoe1xuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdJVEhVQl9DTElFTlRfSUQsXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdJVEhVQl9DTElFTlRfU0VDUkVULFxuICAgICAgYXV0aG9yaXphdGlvbjoge1xuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBzY29wZTogXCJyZWFkOnVzZXJcIixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIGNhbGxiYWNrczoge1xuICAgIGFzeW5jIHNpZ25Jbih7IHVzZXIgfSk6IFByb21pc2U8Ym9vbGVhbj4ge1xuXG4gICAgICBcbiAgICAgIHRyeSB7XG5cbiAgICAgICAgY29uc3QgeyBlbWFpbCB9ID0gdXNlclxuXG4gICAgICAgIGF3YWl0IGZhdW5hLnF1ZXJ5KFxuICAgICAgICAgIHEuSWYoXG4gICAgICAgICAgICBxLk5vdChcbiAgICAgICAgICAgICAgcS5FeGlzdHMoXG4gICAgICAgICAgICAgICAgcS5NYXRjaChcbiAgICAgICAgICAgICAgICAgIHEuSW5kZXgoJ3VzZXJzX2J5X2VtYWlsJyksXG4gICAgICAgICAgICAgICAgICBxLkNhc2Vmb2xkKGVtYWlsKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIHEuQ3JlYXRlKFxuICAgICAgICAgICAgICBxLkNvbGxlY3Rpb24oJ3VzZXJzJyksIHsgXG4gICAgICAgICAgICAgICAgZGF0YTogeyBlbWFpbCB9IFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIHEuR2V0KFxuICAgICAgICAgICAgICBxLk1hdGNoKFxuICAgICAgICAgICAgICAgIHEuSW5kZXgoJ3VzZXJzX2J5X2VtYWlsJyksXG4gICAgICAgICAgICAgICAgcS5DYXNlZm9sZChlbWFpbClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9LFxuICB9LFxufSk7Il0sIm5hbWVzIjpbInF1ZXJ5IiwicSIsIk5leHRBdXRoIiwiR2l0SHViUHJvdmlkZXIiLCJmYXVuYSIsInByb3ZpZGVycyIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIkdJVEhVQl9DTElFTlRfSUQiLCJjbGllbnRTZWNyZXQiLCJHSVRIVUJfQ0xJRU5UX1NFQ1JFVCIsImF1dGhvcml6YXRpb24iLCJwYXJhbXMiLCJzY29wZSIsImNhbGxiYWNrcyIsInNpZ25JbiIsInVzZXIiLCJlbWFpbCIsIklmIiwiTm90IiwiRXhpc3RzIiwiTWF0Y2giLCJJbmRleCIsIkNhc2Vmb2xkIiwiQ3JlYXRlIiwiQ29sbGVjdGlvbiIsImRhdGEiLCJHZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/[...nextauth].ts\n");

/***/ }),

/***/ "(api)/./src/service/fauna.ts":
/*!******************************!*\
  !*** ./src/service/fauna.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fauna\": () => (/* binding */ fauna)\n/* harmony export */ });\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst fauna = new faunadb__WEBPACK_IMPORTED_MODULE_0__.Client({\n    secret: process.env.FAUNADB_KEY,\n    domain: \"db.us.fauna.com\"\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvc2VydmljZS9mYXVuYS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFekIsTUFBTUMsS0FBSyxHQUFHLElBQUlELDJDQUFNLENBQUM7SUFDNUJFLE1BQU0sRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFdBQVc7SUFDL0JDLE1BQU0sRUFBRSxpQkFBaUI7Q0FDMUIsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHVsaW9fcG9ydGZvbGlvLy4vc3JjL3NlcnZpY2UvZmF1bmEudHM/N2QwNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDbGllbnQgfSBmcm9tICdmYXVuYWRiJ1xuXG5leHBvcnQgY29uc3QgZmF1bmEgPSBuZXcgQ2xpZW50KHtcbiAgICBzZWNyZXQ6IHByb2Nlc3MuZW52LkZBVU5BREJfS0VZLFxuICAgIGRvbWFpbjogXCJkYi51cy5mYXVuYS5jb21cIixcbiAgfSk7XG4iXSwibmFtZXMiOlsiQ2xpZW50IiwiZmF1bmEiLCJzZWNyZXQiLCJwcm9jZXNzIiwiZW52IiwiRkFVTkFEQl9LRVkiLCJkb21haW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/service/fauna.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();