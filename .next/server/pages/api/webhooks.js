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

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stripe");

/***/ }),

/***/ "(api)/./src/pages/api/webhooks.ts":
/*!***********************************!*\
  !*** ./src/pages/api/webhooks.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _service_stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../service/stripe */ \"(api)/./src/service/stripe.ts\");\n\nasync function buffer(readable) {\n    const chucks = [];\n    for await (const chuck of readable){\n        chucks.push(typeof chuck === \"string\" ? Buffer.from(chuck) : chuck);\n    }\n    return Buffer.concat(chucks);\n}\nconst config = {\n    api: {\n        bodyParser: false\n    }\n};\nconst relevantEvents = new Set([\n    \"checkout.session.completed\"\n]);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    if (req.method === \"POST\") {\n        const buf = await buffer(req);\n        const secret = req.headers[\"stripe-signature\"];\n        let event;\n        try {\n            event = _service_stripe__WEBPACK_IMPORTED_MODULE_0__.stripe.webhooks.constructEvent(buf, secret, process.env.STRIPE_WEBHOOK_SECRET);\n        } catch (error) {\n            return res.status(400).send(`Webhook error: ${error.message}`);\n        }\n        const { type  } = event;\n        if (relevantEvents.has(type)) {\n            // fazer algo\n            console.log(\"evento recebido\", type);\n        }\n        res.json({\n            received: true\n        });\n    }\n    res.setHeader(\"Allow\", \"POST\");\n    res.status(405).end(\"Mathod not allowed\");\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3dlYmhvb2tzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUc4QztBQUU5QyxlQUFlQyxNQUFNLENBQUNDLFFBQWtCLEVBQUM7SUFDckMsTUFBTUMsTUFBTSxHQUFHLEVBQUU7SUFFakIsV0FBVyxNQUFNQyxLQUFLLElBQUlGLFFBQVEsQ0FBQztRQUMvQkMsTUFBTSxDQUFDRSxJQUFJLENBQ1AsT0FBT0QsS0FBSyxLQUFLLFFBQVEsR0FBR0UsTUFBTSxDQUFDQyxJQUFJLENBQUNILEtBQUssQ0FBQyxHQUFHQSxLQUFLLENBQ3pEO0tBQ0o7SUFFRCxPQUFPRSxNQUFNLENBQUNFLE1BQU0sQ0FBQ0wsTUFBTSxDQUFDO0NBQy9CO0FBRU0sTUFBTU0sTUFBTSxHQUFHO0lBQ2xCQyxHQUFHLEVBQUU7UUFDREMsVUFBVSxFQUFFLEtBQUs7S0FDcEI7Q0FDSjtBQUVELE1BQU1DLGNBQWMsR0FBRyxJQUFJQyxHQUFHLENBQUM7SUFDM0IsNEJBQTRCO0NBQy9CLENBQUM7QUFFRixpRUFBZSxPQUFPQyxHQUFtQixFQUFFQyxHQUFvQixHQUFLO0lBQ2hFLElBQUlELEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLE1BQU0sRUFBRTtRQUN2QixNQUFNQyxHQUFHLEdBQUcsTUFBTWhCLE1BQU0sQ0FBQ2EsR0FBRyxDQUFDO1FBQzdCLE1BQU1JLE1BQU0sR0FBR0osR0FBRyxDQUFDSyxPQUFPLENBQUMsa0JBQWtCLENBQUM7UUFFOUMsSUFBSUMsS0FBSztRQUVULElBQUk7WUFDQUEsS0FBSyxHQUFHcEIsMkVBQThCLENBQUNpQixHQUFHLEVBQUVDLE1BQU0sRUFBRUssT0FBTyxDQUFDQyxHQUFHLENBQUNDLHFCQUFxQixDQUFDO1NBRXpGLENBQUMsT0FBT0MsS0FBSyxFQUFFO1lBQ1osT0FBT1gsR0FBRyxDQUFDWSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQyxDQUFDLGVBQWUsRUFBRUYsS0FBSyxDQUFDRyxPQUFPLENBQUMsQ0FBQyxDQUFDO1NBQ2pFO1FBRUQsTUFBTSxFQUFFQyxJQUFJLEdBQUUsR0FBR1YsS0FBSztRQUV0QixJQUFHUixjQUFjLENBQUNtQixHQUFHLENBQUNELElBQUksQ0FBQyxFQUFDO1lBQ3hCLGFBQWE7WUFDYkUsT0FBTyxDQUFDQyxHQUFHLENBQUMsaUJBQWlCLEVBQUVILElBQUksQ0FBQyxDQUFDO1NBRXhDO1FBRURmLEdBQUcsQ0FBQ21CLElBQUksQ0FBQztZQUFFQyxRQUFRLEVBQUUsSUFBSTtTQUFDLENBQUM7S0FDOUI7SUFDRHBCLEdBQUcsQ0FBQ3FCLFNBQVMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDO0lBQzlCckIsR0FBRyxDQUFDWSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNVLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQztDQUM1QyIsInNvdXJjZXMiOlsid2VicGFjazovL3R1bGlvX3BvcnRmb2xpby8uL3NyYy9wYWdlcy9hcGkvd2ViaG9va3MudHM/ZDNhNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IFJlYWRhYmxlIH0gZnJvbSAnc3RyZWFtJ1xuaW1wb3J0IFN0cmlwZSBmcm9tIFwic3RyaXBlXCI7XG5pbXBvcnQgeyBzdHJpcGUgfSBmcm9tIFwiLi4vLi4vc2VydmljZS9zdHJpcGVcIjtcblxuYXN5bmMgZnVuY3Rpb24gYnVmZmVyKHJlYWRhYmxlOiBSZWFkYWJsZSl7XG4gICAgY29uc3QgY2h1Y2tzID0gW11cblxuICAgIGZvciBhd2FpdCAoY29uc3QgY2h1Y2sgb2YgcmVhZGFibGUpe1xuICAgICAgICBjaHVja3MucHVzaChcbiAgICAgICAgICAgIHR5cGVvZiBjaHVjayA9PT0gJ3N0cmluZycgPyBCdWZmZXIuZnJvbShjaHVjaykgOiBjaHVja1xuICAgICAgICApXG4gICAgfTtcblxuICAgIHJldHVybiBCdWZmZXIuY29uY2F0KGNodWNrcylcbn1cblxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcbiAgICBhcGk6IHtcbiAgICAgICAgYm9keVBhcnNlcjogZmFsc2VcbiAgICB9XG59XG5cbmNvbnN0IHJlbGV2YW50RXZlbnRzID0gbmV3IFNldChbXG4gICAgJ2NoZWNrb3V0LnNlc3Npb24uY29tcGxldGVkJ1xuXSlcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PiB7XG4gICAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xuICAgICAgICBjb25zdCBidWYgPSBhd2FpdCBidWZmZXIocmVxKVxuICAgICAgICBjb25zdCBzZWNyZXQgPSByZXEuaGVhZGVyc1snc3RyaXBlLXNpZ25hdHVyZSddXG5cbiAgICAgICAgbGV0IGV2ZW50OiBTdHJpcGUuRXZlbnRcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZXZlbnQgPSBzdHJpcGUud2ViaG9va3MuY29uc3RydWN0RXZlbnQoYnVmLCBzZWNyZXQsIHByb2Nlc3MuZW52LlNUUklQRV9XRUJIT09LX1NFQ1JFVClcblxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKGBXZWJob29rIGVycm9yOiAke2Vycm9yLm1lc3NhZ2V9YClcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHsgdHlwZSB9ID0gZXZlbnRcblxuICAgICAgICBpZihyZWxldmFudEV2ZW50cy5oYXModHlwZSkpe1xuICAgICAgICAgICAgLy8gZmF6ZXIgYWxnb1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJldmVudG8gcmVjZWJpZG9cIiwgdHlwZSk7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIHJlcy5qc29uKHsgcmVjZWl2ZWQ6IHRydWV9KVxuICAgIH0gXG4gICAgcmVzLnNldEhlYWRlcignQWxsb3cnLCAnUE9TVCcpXG4gICAgcmVzLnN0YXR1cyg0MDUpLmVuZCgnTWF0aG9kIG5vdCBhbGxvd2VkJylcbn0iXSwibmFtZXMiOlsic3RyaXBlIiwiYnVmZmVyIiwicmVhZGFibGUiLCJjaHVja3MiLCJjaHVjayIsInB1c2giLCJCdWZmZXIiLCJmcm9tIiwiY29uY2F0IiwiY29uZmlnIiwiYXBpIiwiYm9keVBhcnNlciIsInJlbGV2YW50RXZlbnRzIiwiU2V0IiwicmVxIiwicmVzIiwibWV0aG9kIiwiYnVmIiwic2VjcmV0IiwiaGVhZGVycyIsImV2ZW50Iiwid2ViaG9va3MiLCJjb25zdHJ1Y3RFdmVudCIsInByb2Nlc3MiLCJlbnYiLCJTVFJJUEVfV0VCSE9PS19TRUNSRVQiLCJlcnJvciIsInN0YXR1cyIsInNlbmQiLCJtZXNzYWdlIiwidHlwZSIsImhhcyIsImNvbnNvbGUiLCJsb2ciLCJqc29uIiwicmVjZWl2ZWQiLCJzZXRIZWFkZXIiLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/webhooks.ts\n");

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
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/webhooks.ts"));
module.exports = __webpack_exports__;

})();