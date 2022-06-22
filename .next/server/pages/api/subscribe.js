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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _service_stripe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/stripe */ \"(api)/./src/service/stripe.ts\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    if (req.method === \"POST\") {\n        console.log(\"req\", req);\n        const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_0__.getSession)({\n            req\n        });\n        console.log(\"session\", session);\n        const stripeCostumer = await _service_stripe__WEBPACK_IMPORTED_MODULE_1__.stripe.customers.create({\n            email: session.user.email\n        });\n        const stripeCheckoutSession = await _service_stripe__WEBPACK_IMPORTED_MODULE_1__.stripe.checkout.sessions.create({\n            customer: stripeCostumer.id,\n            payment_method_types: [\n                \"card\"\n            ],\n            billing_address_collection: \"required\",\n            line_items: [\n                {\n                    price: \"price_1KjZT2DhIAntB1CKJ3n9mW1G\",\n                    quantity: 1\n                }, \n            ],\n            mode: \"subscription\",\n            allow_promotion_codes: true,\n            success_url: process.env.STRIPE_SUCCESS_URL,\n            cancel_url: process.env.STRIPE_CANCEL_URL\n        });\n        return res.status(200).json({\n            sessionId: stripeCheckoutSession.id\n        });\n    } else {\n        res.setHeader(\"Allow\", \"POST\");\n        res.status(405).end(\"Mathod not allowed\");\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3N1YnNjcmliZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQzZDO0FBRUM7QUFFOUMsaUVBQWUsT0FBT0UsR0FBbUIsRUFBRUMsR0FBb0IsR0FBSztJQUNoRSxJQUFHRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxNQUFNLEVBQUM7UUFFckJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLEtBQUssRUFBRUosR0FBRyxDQUFDLENBQUM7UUFHeEIsTUFBTUssT0FBTyxHQUFHLE1BQU1QLDJEQUFVLENBQUM7WUFBRUUsR0FBRztTQUFFLENBQUM7UUFFekNHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsRUFBRUMsT0FBTyxDQUFDLENBQUM7UUFFaEMsTUFBTUMsY0FBYyxHQUFHLE1BQU1QLG9FQUF1QixDQUFDO1lBQ2pEVSxLQUFLLEVBQUVKLE9BQU8sQ0FBQ0ssSUFBSSxDQUFDRCxLQUFLO1NBQzVCLENBQUM7UUFFRixNQUFNRSxxQkFBcUIsR0FBRyxNQUFNWiw0RUFBK0IsQ0FBQztZQUNoRWUsUUFBUSxFQUFFUixjQUFjLENBQUNTLEVBQUU7WUFDM0JDLG9CQUFvQixFQUFFO2dCQUFDLE1BQU07YUFBQztZQUM5QkMsMEJBQTBCLEVBQUUsVUFBVTtZQUN0Q0MsVUFBVSxFQUFFO2dCQUNSO29CQUFFQyxLQUFLLEVBQUUsZ0NBQWdDO29CQUFFQyxRQUFRLEVBQUUsQ0FBQztpQkFBRTthQUMzRDtZQUNEQyxJQUFJLEVBQUUsY0FBYztZQUNwQkMscUJBQXFCLEVBQUUsSUFBSTtZQUMzQkMsV0FBVyxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0Msa0JBQWtCO1lBQzNDQyxVQUFVLEVBQUVILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRyxpQkFBaUI7U0FDNUMsQ0FBQztRQUVGLE9BQU8zQixHQUFHLENBQUM0QixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFQyxTQUFTLEVBQUVwQixxQkFBcUIsQ0FBQ0ksRUFBRTtTQUFFLENBQUM7S0FDdkUsTUFBTTtRQUNIZCxHQUFHLENBQUMrQixTQUFTLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQztRQUM5Qi9CLEdBQUcsQ0FBQzRCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0ksR0FBRyxDQUFDLG9CQUFvQixDQUFDO0tBQzVDO0NBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90dWxpb19wb3J0Zm9saW8vLi9zcmMvcGFnZXMvYXBpL3N1YnNjcmliZS50cz8wNThhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcbmltcG9ydCB7IGVudiB9IGZyb20gXCJwcm9jZXNzXCI7XG5pbXBvcnQgeyBzdHJpcGUgfSBmcm9tIFwiLi4vLi4vc2VydmljZS9zdHJpcGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PiB7XG4gICAgaWYocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKXtcblxuICAgICAgICBjb25zb2xlLmxvZyhcInJlcVwiLCByZXEpO1xuICAgICAgICBcblxuICAgICAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbih7IHJlcSB9KTtcbiAgICAgICAgXG4gICAgICAgIGNvbnNvbGUubG9nKFwic2Vzc2lvblwiLCBzZXNzaW9uKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHN0cmlwZUNvc3R1bWVyID0gYXdhaXQgc3RyaXBlLmN1c3RvbWVycy5jcmVhdGUoe1xuICAgICAgICAgICAgZW1haWw6IHNlc3Npb24udXNlci5lbWFpbCxcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBzdHJpcGVDaGVja291dFNlc3Npb24gPSBhd2FpdCBzdHJpcGUuY2hlY2tvdXQuc2Vzc2lvbnMuY3JlYXRlKHtcbiAgICAgICAgICAgIGN1c3RvbWVyOiBzdHJpcGVDb3N0dW1lci5pZCxcbiAgICAgICAgICAgIHBheW1lbnRfbWV0aG9kX3R5cGVzOiBbJ2NhcmQnXSxcbiAgICAgICAgICAgIGJpbGxpbmdfYWRkcmVzc19jb2xsZWN0aW9uOiAncmVxdWlyZWQnLFxuICAgICAgICAgICAgbGluZV9pdGVtczogW1xuICAgICAgICAgICAgICAgIHsgcHJpY2U6ICdwcmljZV8xS2paVDJEaElBbnRCMUNLSjNuOW1XMUcnLCBxdWFudGl0eTogMSB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIG1vZGU6ICdzdWJzY3JpcHRpb24nLFxuICAgICAgICAgICAgYWxsb3dfcHJvbW90aW9uX2NvZGVzOiB0cnVlLFxuICAgICAgICAgICAgc3VjY2Vzc191cmw6IHByb2Nlc3MuZW52LlNUUklQRV9TVUNDRVNTX1VSTCxcbiAgICAgICAgICAgIGNhbmNlbF91cmw6IHByb2Nlc3MuZW52LlNUUklQRV9DQU5DRUxfVVJMXG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc2Vzc2lvbklkOiBzdHJpcGVDaGVja291dFNlc3Npb24uaWQgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXMuc2V0SGVhZGVyKCdBbGxvdycsICdQT1NUJylcbiAgICAgICAgcmVzLnN0YXR1cyg0MDUpLmVuZCgnTWF0aG9kIG5vdCBhbGxvd2VkJylcbiAgICB9XG59Il0sIm5hbWVzIjpbImdldFNlc3Npb24iLCJzdHJpcGUiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJjb25zb2xlIiwibG9nIiwic2Vzc2lvbiIsInN0cmlwZUNvc3R1bWVyIiwiY3VzdG9tZXJzIiwiY3JlYXRlIiwiZW1haWwiLCJ1c2VyIiwic3RyaXBlQ2hlY2tvdXRTZXNzaW9uIiwiY2hlY2tvdXQiLCJzZXNzaW9ucyIsImN1c3RvbWVyIiwiaWQiLCJwYXltZW50X21ldGhvZF90eXBlcyIsImJpbGxpbmdfYWRkcmVzc19jb2xsZWN0aW9uIiwibGluZV9pdGVtcyIsInByaWNlIiwicXVhbnRpdHkiLCJtb2RlIiwiYWxsb3dfcHJvbW90aW9uX2NvZGVzIiwic3VjY2Vzc191cmwiLCJwcm9jZXNzIiwiZW52IiwiU1RSSVBFX1NVQ0NFU1NfVVJMIiwiY2FuY2VsX3VybCIsIlNUUklQRV9DQU5DRUxfVVJMIiwic3RhdHVzIiwianNvbiIsInNlc3Npb25JZCIsInNldEhlYWRlciIsImVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/subscribe.ts\n");

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