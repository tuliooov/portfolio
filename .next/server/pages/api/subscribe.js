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
exports.id = "pages/api/subscribe";
exports.ids = ["pages/api/subscribe"];
exports.modules = {

/***/ "faunadb":
/*!**************************!*\
  !*** external "faunadb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("faunadb");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stripe");

/***/ }),

/***/ "(api)/./src/pages/api/subscribe.ts":
/*!************************************!*\
  !*** ./src/pages/api/subscribe.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _service_fauna__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/fauna */ \"(api)/./src/service/fauna.ts\");\n/* harmony import */ var _service_stripe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/stripe */ \"(api)/./src/service/stripe.ts\");\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    try {\n        if (req.method === \"POST\") {\n            var ref;\n            const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)({\n                req\n            });\n            const user = await _service_fauna__WEBPACK_IMPORTED_MODULE_2__.fauna.query(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Get(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Index(\"users_by_email\"), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Casefold(session === null || session === void 0 ? void 0 : (ref = session.user) === null || ref === void 0 ? void 0 : ref.email))));\n            let customerId = user.data.stripe_customer_id;\n            console.log(\"\\uD83D\\uDE80 ~ file: subscribe.ts ~ line 28 ~ customerId\", customerId);\n            if (!customerId) {\n                var ref1;\n                const stripeCustomer = await _service_stripe__WEBPACK_IMPORTED_MODULE_3__.stripe.customers.create({\n                    email: session === null || session === void 0 ? void 0 : (ref1 = session.user) === null || ref1 === void 0 ? void 0 : ref1.email\n                });\n                await _service_fauna__WEBPACK_IMPORTED_MODULE_2__.fauna.query(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Update(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Ref(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Collection(\"users\"), user.ref.id), {\n                    data: {\n                        stripe_customer_id: stripeCustomer.id\n                    }\n                }));\n                customerId = stripeCustomer.id;\n                console.log(\"\\uD83D\\uDE80 ~ file: subscribe.ts ~ line 48 ~ stripeCustomer.id\", stripeCustomer.id);\n            }\n            const stripeCheckoutSession = await _service_stripe__WEBPACK_IMPORTED_MODULE_3__.stripe.checkout.sessions.create({\n                customer: customerId,\n                payment_method_types: [\n                    \"card\"\n                ],\n                billing_address_collection: \"required\",\n                line_items: [\n                    {\n                        price: \"price_1KjZT2DhIAntB1CKJ3n9mW1G\",\n                        quantity: 1\n                    }\n                ],\n                mode: \"subscription\",\n                allow_promotion_codes: true,\n                success_url: process.env.STRIPE_SUCCESS_URL,\n                cancel_url: process.env.STRIPE_CANCEL_URL\n            });\n            return res.status(200).json({\n                sessionId: stripeCheckoutSession.id\n            });\n        } else {\n            res.setHeader(\"Allow\", \"POST\");\n            res.status(405).end(\"Mathod not allowed\");\n        }\n    } catch (error) {\n        console.log(\"error\", error);\n        res.setHeader(\"Allow\", \"POST\");\n        res.status(405).end(error);\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNaaEMsT0FBTyxDQUFDQyxHQUFHLENBQUMsT0FBTyxFQUFFK0IsS0FBSyxDQUFDLENBQUM7UUFDNUI1QyxHQUFHLENBQUMwQyxTQUFTLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQztRQUM5QjFDLEdBQUcsQ0FBQ3VDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0ksR0FBRyxDQUFDQyxLQUFLLENBQUM7S0FDN0I7Q0FDSiIsInNvdXJjZXMiOlsid2VicGFjazovL3R1bGlvX3BvcnRmb2xpby8uL3NyYy9wYWdlcy9hcGkvc3Vic2NyaWJlLnRzPzA1OGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyBxdWVyeSBhcyBxIH0gZnJvbSAnZmF1bmFkYidcbmltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XG5pbXBvcnQgeyBlbnYgfSBmcm9tIFwicHJvY2Vzc1wiO1xuaW1wb3J0IHsgZmF1bmEgfSBmcm9tIFwiLi4vLi4vc2VydmljZS9mYXVuYVwiO1xuaW1wb3J0IHsgc3RyaXBlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2Uvc3RyaXBlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcblxuICAgICAgICAgICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oeyByZXEgfSk7XG4gICAgXG4gICAgICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgZmF1bmEucXVlcnkoXG4gICAgICAgICAgICAgICAgcS5HZXQoXG4gICAgICAgICAgICAgICAgICAgIHEuTWF0Y2goXG4gICAgICAgICAgICAgICAgICAgICAgICBxLkluZGV4KCd1c2Vyc19ieV9lbWFpbCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgcS5DYXNlZm9sZChzZXNzaW9uPy51c2VyPy5lbWFpbCEpXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCBjdXN0b21lcklkID0gdXNlci5kYXRhLnN0cmlwZV9jdXN0b21lcl9pZDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi8J+agCB+IGZpbGU6IHN1YnNjcmliZS50cyB+IGxpbmUgMjggfiBjdXN0b21lcklkXCIsIGN1c3RvbWVySWQpXG4gICAgXG4gICAgICAgICAgICBpZiAoIWN1c3RvbWVySWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdHJpcGVDdXN0b21lciA9IGF3YWl0IHN0cmlwZS5jdXN0b21lcnMuY3JlYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6IHNlc3Npb24/LnVzZXI/LmVtYWlsISxcbiAgICAgICAgICAgICAgICAgICAgLy9tZXRhZGF0YVxuICAgICAgICAgICAgICAgIH0pXG4gICAgXG4gICAgICAgICAgICAgICAgYXdhaXQgZmF1bmEucXVlcnkoXG4gICAgICAgICAgICAgICAgICAgIHEuVXBkYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgcS5SZWYocS5Db2xsZWN0aW9uKCd1c2VycycpLCB1c2VyLnJlZi5pZCksXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJpcGVfY3VzdG9tZXJfaWQ6IHN0cmlwZUN1c3RvbWVyLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIClcbiAgICBcbiAgICAgICAgICAgICAgICBjdXN0b21lcklkID0gc3RyaXBlQ3VzdG9tZXIuaWQ7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLwn5qAIH4gZmlsZTogc3Vic2NyaWJlLnRzIH4gbGluZSA0OCB+IHN0cmlwZUN1c3RvbWVyLmlkXCIsIHN0cmlwZUN1c3RvbWVyLmlkKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IHN0cmlwZUNoZWNrb3V0U2Vzc2lvbiA9IGF3YWl0IHN0cmlwZS5jaGVja291dC5zZXNzaW9ucy5jcmVhdGUoe1xuICAgICAgICAgICAgICAgIGN1c3RvbWVyOiBjdXN0b21lcklkLFxuICAgICAgICAgICAgICAgIHBheW1lbnRfbWV0aG9kX3R5cGVzOiBbJ2NhcmQnXSxcbiAgICAgICAgICAgICAgICBiaWxsaW5nX2FkZHJlc3NfY29sbGVjdGlvbjogJ3JlcXVpcmVkJyxcbiAgICAgICAgICAgICAgICBsaW5lX2l0ZW1zOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlOiAncHJpY2VfMUtqWlQyRGhJQW50QjFDS0ozbjltVzFHJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1YW50aXR5OiAxXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIG1vZGU6ICdzdWJzY3JpcHRpb24nLFxuICAgICAgICAgICAgICAgIGFsbG93X3Byb21vdGlvbl9jb2RlczogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzdWNjZXNzX3VybDogcHJvY2Vzcy5lbnYuU1RSSVBFX1NVQ0NFU1NfVVJMISxcbiAgICAgICAgICAgICAgICBjYW5jZWxfdXJsOiBwcm9jZXNzLmVudi5TVFJJUEVfQ0FOQ0VMX1VSTCFcbiAgICAgICAgICAgIH0pXG4gICAgXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBzZXNzaW9uSWQ6IHN0cmlwZUNoZWNrb3V0U2Vzc2lvbi5pZCB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzLnNldEhlYWRlcignQWxsb3cnLCAnUE9TVCcpXG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwNSkuZW5kKCdNYXRob2Qgbm90IGFsbG93ZWQnKVxuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJlcnJvclwiLCBlcnJvcik7XG4gICAgICAgIHJlcy5zZXRIZWFkZXIoJ0FsbG93JywgJ1BPU1QnKVxuICAgICAgICByZXMuc3RhdHVzKDQwNSkuZW5kKGVycm9yKVxuICAgIH1cbn0iXSwibmFtZXMiOlsicXVlcnkiLCJxIiwiZ2V0U2Vzc2lvbiIsImZhdW5hIiwic3RyaXBlIiwicmVxIiwicmVzIiwibWV0aG9kIiwic2Vzc2lvbiIsInVzZXIiLCJHZXQiLCJNYXRjaCIsIkluZGV4IiwiQ2FzZWZvbGQiLCJlbWFpbCIsImN1c3RvbWVySWQiLCJkYXRhIiwic3RyaXBlX2N1c3RvbWVyX2lkIiwiY29uc29sZSIsImxvZyIsInN0cmlwZUN1c3RvbWVyIiwiY3VzdG9tZXJzIiwiY3JlYXRlIiwiVXBkYXRlIiwiUmVmIiwiQ29sbGVjdGlvbiIsInJlZiIsImlkIiwic3RyaXBlQ2hlY2tvdXRTZXNzaW9uIiwiY2hlY2tvdXQiLCJzZXNzaW9ucyIsImN1c3RvbWVyIiwicGF5bWVudF9tZXRob2RfdHlwZXMiLCJiaWxsaW5nX2FkZHJlc3NfY29sbGVjdGlvbiIsImxpbmVfaXRlbXMiLCJwcmljZSIsInF1YW50aXR5IiwibW9kZSIsImFsbG93X3Byb21vdGlvbl9jb2RlcyIsInN1Y2Nlc3NfdXJsIiwicHJvY2VzcyIsImVudiIsIlNUUklQRV9TVUNDRVNTX1VSTCIsImNhbmNlbF91cmwiLCJTVFJJUEVfQ0FOQ0VMX1VSTCIsInN0YXR1cyIsImpzb24iLCJzZXNzaW9uSWQiLCJzZXRIZWFkZXIiLCJlbmQiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/subscribe.ts\n");

/***/ }),

/***/ "(api)/./src/service/fauna.ts":
/*!******************************!*\
  !*** ./src/service/fauna.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fauna\": () => (/* binding */ fauna)\n/* harmony export */ });\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst fauna = new faunadb__WEBPACK_IMPORTED_MODULE_0__.Client({\n    secret: process.env.FAUNADB_KEY,\n    domain: \"db.us.fauna.com\"\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvc2VydmljZS9mYXVuYS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFekIsTUFBTUMsS0FBSyxHQUFHLElBQUlELDJDQUFNLENBQUM7SUFDNUJFLE1BQU0sRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFdBQVc7SUFDL0JDLE1BQU0sRUFBRSxpQkFBaUI7Q0FDMUIsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHVsaW9fcG9ydGZvbGlvLy4vc3JjL3NlcnZpY2UvZmF1bmEudHM/N2QwNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDbGllbnQgfSBmcm9tICdmYXVuYWRiJ1xuXG5leHBvcnQgY29uc3QgZmF1bmEgPSBuZXcgQ2xpZW50KHtcbiAgICBzZWNyZXQ6IHByb2Nlc3MuZW52LkZBVU5BREJfS0VZLFxuICAgIGRvbWFpbjogXCJkYi51cy5mYXVuYS5jb21cIixcbiAgfSk7XG4iXSwibmFtZXMiOlsiQ2xpZW50IiwiZmF1bmEiLCJzZWNyZXQiLCJwcm9jZXNzIiwiZW52IiwiRkFVTkFEQl9LRVkiLCJkb21haW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/service/fauna.ts\n");

/***/ }),

/***/ "(api)/./src/service/stripe.ts":
/*!*******************************!*\
  !*** ./src/service/stripe.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"stripe\": () => (/* binding */ stripe)\n/* harmony export */ });\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stripe */ \"stripe\");\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stripe__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../package.json */ \"(api)/./package.json\");\n\n\nconst stripe = new (stripe__WEBPACK_IMPORTED_MODULE_0___default())(process.env.STRIPE_API_KEY, {\n    apiVersion: \"2020-08-27\",\n    appInfo: {\n        name: \"TulioAnnotation\",\n        version: _package_json__WEBPACK_IMPORTED_MODULE_1__.version\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvc2VydmljZS9zdHJpcGUudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEyQjtBQUNpQjtBQUVyQyxNQUFNRSxNQUFNLEdBQUcsSUFBSUYsK0NBQU0sQ0FDNUJHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxjQUFjLEVBQzFCO0lBQ0lDLFVBQVUsRUFBRSxZQUFZO0lBQ3hCQyxPQUFPLEVBQUU7UUFDTEMsSUFBSSxFQUFFLGlCQUFpQjtRQUN2QlAsT0FBTztLQUNWO0NBQ0osQ0FDSiIsInNvdXJjZXMiOlsid2VicGFjazovL3R1bGlvX3BvcnRmb2xpby8uL3NyYy9zZXJ2aWNlL3N0cmlwZS50cz9kOGZhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdHJpcGUgZnJvbSAnc3RyaXBlJ1xuaW1wb3J0IHsgdmVyc2lvbiB9IGZyb20gJy4uLy4uL3BhY2thZ2UuanNvbidcblxuZXhwb3J0IGNvbnN0IHN0cmlwZSA9IG5ldyBTdHJpcGUoXG4gICAgcHJvY2Vzcy5lbnYuU1RSSVBFX0FQSV9LRVksXG4gICAge1xuICAgICAgICBhcGlWZXJzaW9uOiAnMjAyMC0wOC0yNycsXG4gICAgICAgIGFwcEluZm86IHtcbiAgICAgICAgICAgIG5hbWU6ICdUdWxpb0Fubm90YXRpb24nLFxuICAgICAgICAgICAgdmVyc2lvblxuICAgICAgICB9LFxuICAgIH1cbikiXSwibmFtZXMiOlsiU3RyaXBlIiwidmVyc2lvbiIsInN0cmlwZSIsInByb2Nlc3MiLCJlbnYiLCJTVFJJUEVfQVBJX0tFWSIsImFwaVZlcnNpb24iLCJhcHBJbmZvIiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/service/stripe.ts\n");

/***/ }),

/***/ "(api)/./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

module.exports = JSON.parse('{"name":"tulio_portfolio","version":"0.1.0","private":true,"scripts":{"dev":"next dev","build":"next build","start":"next start","lint":"next lint"},"dependencies":{"@stripe/stripe-js":"^1.32.0","axios":"^0.27.2","faunadb":"^4.5.4","next":"12.1.4","next-auth":"^4.3.4","react":"18.0.0","react-dom":"18.0.0","react-icons":"^4.3.1","sass":"^1.49.10","stripe":"^8.214.0"},"devDependencies":{"@types/next-auth":"^3.15.0","@types/node":"^17.0.23","@types/react":"^17.0.43","eslint":"8.12.0","eslint-config-next":"12.1.4","typescript":"^4.6.3"}}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/subscribe.ts"));
module.exports = __webpack_exports__;

})();