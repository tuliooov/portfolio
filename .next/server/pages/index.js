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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/components/SubscribeButton/styles.module.scss":
/*!***********************************************************!*\
  !*** ./src/components/SubscribeButton/styles.module.scss ***!
  \***********************************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"subscribeButton\": \"styles_subscribeButton__52c6u\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TdWJzY3JpYmVCdXR0b24vc3R5bGVzLm1vZHVsZS5zY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHVsaW9fcG9ydGZvbGlvLy4vc3JjL2NvbXBvbmVudHMvU3Vic2NyaWJlQnV0dG9uL3N0eWxlcy5tb2R1bGUuc2Nzcz9kYmU1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInN1YnNjcmliZUJ1dHRvblwiOiBcInN0eWxlc19zdWJzY3JpYmVCdXR0b25fXzUyYzZ1XCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/SubscribeButton/styles.module.scss\n");

/***/ }),

/***/ "./src/pages/home.module.scss":
/*!************************************!*\
  !*** ./src/pages/home.module.scss ***!
  \************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"contentContainer\": \"home_contentContainer__HYuN8\",\n\t\"hero\": \"home_hero__lhpWS\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaG9tZS5tb2R1bGUuc2Nzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHVsaW9fcG9ydGZvbGlvLy4vc3JjL3BhZ2VzL2hvbWUubW9kdWxlLnNjc3M/ZTRjMyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250ZW50Q29udGFpbmVyXCI6IFwiaG9tZV9jb250ZW50Q29udGFpbmVyX19IWXVOOFwiLFxuXHRcImhlcm9cIjogXCJob21lX2hlcm9fX2xocFdTXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/home.module.scss\n");

/***/ }),

/***/ "./src/components/SubscribeButton/index.tsx":
/*!**************************************************!*\
  !*** ./src/components/SubscribeButton/index.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SubscribeButton\": () => (/* binding */ SubscribeButton)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _service_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/api */ \"./src/service/api.ts\");\n/* harmony import */ var _service_stripe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/stripe.js */ \"./src/service/stripe.js.ts\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.module.scss */ \"./src/components/SubscribeButton/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction SubscribeButton({ priceId  }) {\n    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    const handleSubscribe = async ()=>{\n        if (!session) {\n            (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)(\"github\");\n            return;\n        }\n        try {\n            const { data  } = await _service_api__WEBPACK_IMPORTED_MODULE_2__.api.post(\"/subscribe\");\n            const { sessionId  } = data;\n            const stripe = await (0,_service_stripe_js__WEBPACK_IMPORTED_MODULE_3__.getStripeJs)();\n            await stripe.redirectToCheckout({\n                sessionId\n            });\n        } catch (error) {\n            let errorMessage = \"Failed\";\n            if (error instanceof Error) {\n                errorMessage = error.message;\n            }\n            alert(errorMessage);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        type: \"button\",\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().subscribeButton),\n        onClick: handleSubscribe,\n        children: \"Subscribe now\"\n    }, void 0, false, {\n        fileName: \"/Users/bi004231/Documents/RocketSeat/portfolio/src/components/SubscribeButton/index.tsx\",\n        lineNumber: 38,\n        columnNumber: 9\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TdWJzY3JpYmVCdXR0b24vaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQXFEO0FBQ2Q7QUFDYztBQUNaO0FBS2xDLFNBQVNLLGVBQWUsQ0FBQyxFQUFFQyxPQUFPLEdBQXdCLEVBQUM7SUFFOUQsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLE9BQU8sR0FBRSxHQUFHUCwyREFBVSxFQUFFO0lBRXRDLE1BQU1RLGVBQWUsR0FBRyxVQUFZO1FBQ2hDLElBQUcsQ0FBQ0QsT0FBTyxFQUFDO1lBQ1JSLHVEQUFNLENBQUMsUUFBUSxDQUFDO1lBQ2hCLE9BQU87U0FDVjtRQUVELElBQUk7WUFDQSxNQUFNLEVBQUVPLElBQUksR0FBRSxHQUFHLE1BQU1MLGtEQUFRLENBQUMsWUFBWSxDQUFDO1lBQzdDLE1BQU0sRUFBRVMsU0FBUyxHQUFFLEdBQUdKLElBQUk7WUFFMUIsTUFBTUssTUFBTSxHQUFHLE1BQU1ULCtEQUFXLEVBQUU7WUFDbEMsTUFBTVMsTUFBTSxDQUFDQyxrQkFBa0IsQ0FBQztnQkFBQ0YsU0FBUzthQUFDLENBQUM7U0FDL0MsQ0FBQyxPQUFPRyxLQUFLLEVBQUU7WUFDWixJQUFJQyxZQUFZLEdBQUcsUUFBUTtZQUMzQixJQUFJRCxLQUFLLFlBQVlFLEtBQUssRUFBRTtnQkFDeEJELFlBQVksR0FBR0QsS0FBSyxDQUFDRyxPQUFPLENBQUM7YUFDaEM7WUFDREMsS0FBSyxDQUFDSCxZQUFZLENBQUMsQ0FBQztTQUN2QjtLQUlKO0lBRUQscUJBQ0ksOERBQUNJLFFBQU07UUFDSEMsSUFBSSxFQUFDLFFBQVE7UUFDYkMsU0FBUyxFQUFFakIsNEVBQXNCO1FBQ2pDbUIsT0FBTyxFQUFFZCxlQUFlO2tCQUMzQixlQUVEOzs7OztZQUFTLENBQ1o7Q0FDSiIsInNvdXJjZXMiOlsid2VicGFjazovL3R1bGlvX3BvcnRmb2xpby8uL3NyYy9jb21wb25lbnRzL1N1YnNjcmliZUJ1dHRvbi9pbmRleC50c3g/OTBlNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzaWduSW4sIHVzZVNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnO1xuaW1wb3J0IHsgYXBpIH0gZnJvbSAnLi4vLi4vc2VydmljZS9hcGknXG5pbXBvcnQgeyBnZXRTdHJpcGVKcyB9IGZyb20gJy4uLy4uL3NlcnZpY2Uvc3RyaXBlLmpzJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2NzcydcblxuaW50ZXJmYWNlIFN1YnNjcmliZUJ1dHRvblByb3BzIHtcbiAgICBwcmljZUlkOiBzdHJpbmdcbn1cbmV4cG9ydCBmdW5jdGlvbiBTdWJzY3JpYmVCdXR0b24oeyBwcmljZUlkIH06IFN1YnNjcmliZUJ1dHRvblByb3BzKXtcblxuICAgIGNvbnN0IHsgZGF0YTogc2Vzc2lvbiB9ID0gdXNlU2Vzc2lvbigpO1xuXG4gICAgY29uc3QgaGFuZGxlU3Vic2NyaWJlID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBpZighc2Vzc2lvbil7XG4gICAgICAgICAgICBzaWduSW4oJ2dpdGh1YicpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBhcGkucG9zdCgnL3N1YnNjcmliZScpXG4gICAgICAgICAgICBjb25zdCB7IHNlc3Npb25JZCB9ID0gZGF0YVxuXG4gICAgICAgICAgICBjb25zdCBzdHJpcGUgPSBhd2FpdCBnZXRTdHJpcGVKcygpXG4gICAgICAgICAgICBhd2FpdCBzdHJpcGUucmVkaXJlY3RUb0NoZWNrb3V0KHtzZXNzaW9uSWR9KVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgbGV0IGVycm9yTWVzc2FnZSA9ICdGYWlsZWQnO1xuICAgICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWxlcnQoZXJyb3JNZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG5cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgdHlwZT0nYnV0dG9uJ1xuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc3Vic2NyaWJlQnV0dG9ufSBcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVN1YnNjcmliZX1cbiAgICAgICAgPlxuICAgICAgICAgICAgU3Vic2NyaWJlIG5vd1xuICAgICAgICA8L2J1dHRvbj5cbiAgICApXG59Il0sIm5hbWVzIjpbInNpZ25JbiIsInVzZVNlc3Npb24iLCJhcGkiLCJnZXRTdHJpcGVKcyIsInN0eWxlcyIsIlN1YnNjcmliZUJ1dHRvbiIsInByaWNlSWQiLCJkYXRhIiwic2Vzc2lvbiIsImhhbmRsZVN1YnNjcmliZSIsInBvc3QiLCJzZXNzaW9uSWQiLCJzdHJpcGUiLCJyZWRpcmVjdFRvQ2hlY2tvdXQiLCJlcnJvciIsImVycm9yTWVzc2FnZSIsIkVycm9yIiwibWVzc2FnZSIsImFsZXJ0IiwiYnV0dG9uIiwidHlwZSIsImNsYXNzTmFtZSIsInN1YnNjcmliZUJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/SubscribeButton/index.tsx\n");

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_SubscribeButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SubscribeButton */ \"./src/components/SubscribeButton/index.tsx\");\n/* harmony import */ var _service_stripe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/stripe */ \"./src/service/stripe.ts\");\n/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.module.scss */ \"./src/pages/home.module.scss\");\n/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_home_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction Home({ product  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Home | Tulio Portfolio\"\n                }, void 0, false, {\n                    fileName: \"/Users/bi004231/Documents/RocketSeat/portfolio/src/pages/index.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/bi004231/Documents/RocketSeat/portfolio/src/pages/index.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().contentContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().hero),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"\\uD83D\\uDC4F Hey, welcome\"\n                            }, void 0, false, {\n                                fileName: \"/Users/bi004231/Documents/RocketSeat/portfolio/src/pages/index.tsx\",\n                                lineNumber: 22,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: [\n                                    \"News about the \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: \"React\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/bi004231/Documents/RocketSeat/portfolio/src/pages/index.tsx\",\n                                        lineNumber: 23,\n                                        columnNumber: 30\n                                    }, this),\n                                    \" world.\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/bi004231/Documents/RocketSeat/portfolio/src/pages/index.tsx\",\n                                lineNumber: 23,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Get access to all the publications. \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/bi004231/Documents/RocketSeat/portfolio/src/pages/index.tsx\",\n                                        lineNumber: 25,\n                                        columnNumber: 49\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: [\n                                            \"for \",\n                                            product.amount,\n                                            \" month\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/bi004231/Documents/RocketSeat/portfolio/src/pages/index.tsx\",\n                                        lineNumber: 26,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/bi004231/Documents/RocketSeat/portfolio/src/pages/index.tsx\",\n                                lineNumber: 24,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SubscribeButton__WEBPACK_IMPORTED_MODULE_2__.SubscribeButton, {\n                                priceId: product.priceId\n                            }, void 0, false, {\n                                fileName: \"/Users/bi004231/Documents/RocketSeat/portfolio/src/pages/index.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/bi004231/Documents/RocketSeat/portfolio/src/pages/index.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/images/avatar.svg\",\n                        alt: \"Girl coding\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bi004231/Documents/RocketSeat/portfolio/src/pages/index.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/bi004231/Documents/RocketSeat/portfolio/src/pages/index.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n};\nconst getStaticProps = async ()=>{\n    const price = await _service_stripe__WEBPACK_IMPORTED_MODULE_3__.stripe.prices.retrieve(\"price_1KjZT2DhIAntB1CKJ3n9mW1G\");\n    const product = {\n        priceId: price.id,\n        amount: new Intl.NumberFormat(\"en-US\", {\n            style: \"currency\",\n            currency: \"USD\"\n        }).format(price.unit_amount / 100)\n    };\n    return {\n        props: {\n            product\n        },\n        revalidate: 60 * 60 * 24\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM0QjtBQUNtQztBQUNyQjtBQUVIO0FBUXhCLFNBQVNJLElBQUksQ0FBQyxFQUFFQyxPQUFPLEdBQWEsRUFBRTtJQUNuRCxxQkFDRTs7MEJBQ0UsOERBQUNMLGtEQUFJOzBCQUNILDRFQUFDTSxPQUFLOzhCQUFDLHdCQUFzQjs7Ozs7d0JBQVE7Ozs7O29CQUNoQzswQkFDUCw4REFBQ0MsTUFBSTtnQkFBQ0MsU0FBUyxFQUFFTCwyRUFBdUI7O2tDQUN0Qyw4REFBQ08sU0FBTzt3QkFBQ0YsU0FBUyxFQUFFTCwrREFBVzs7MENBQzdCLDhEQUFDUyxNQUFJOzBDQUFDLDJCQUFjOzs7OztvQ0FBTzswQ0FDM0IsOERBQUNDLElBQUU7O29DQUFDLGlCQUFlO2tEQUFBLDhEQUFDRCxNQUFJO2tEQUFDLE9BQUs7Ozs7OzRDQUFPO29DQUFBLFNBQU87Ozs7OztvQ0FBSzswQ0FDakQsOERBQUNFLEdBQUM7O29DQUFDLHNDQUNtQztrREFBQSw4REFBQ0MsSUFBRTs7Ozs0Q0FBRztrREFDMUMsOERBQUNILE1BQUk7OzRDQUFDLE1BQUk7NENBQUNQLE9BQU8sQ0FBQ1csTUFBTTs0Q0FBQyxRQUFNOzs7Ozs7NENBQU87Ozs7OztvQ0FDckM7MENBQ0osOERBQUNmLHdFQUFlO2dDQUFDZ0IsT0FBTyxFQUFFWixPQUFPLENBQUNZLE9BQU87Ozs7O29DQUFJOzs7Ozs7NEJBQ3JDO2tDQUNWLDhEQUFDQyxLQUFHO3dCQUFDQyxHQUFHLEVBQUMsb0JBQW9CO3dCQUFDQyxHQUFHLEVBQUMsYUFBYTs7Ozs7NEJBQUc7Ozs7OztvQkFDN0M7O29CQUNOLENBQ0o7Q0FDRjtBQUVNLE1BQU1DLGNBQWMsR0FBbUIsVUFBWTtJQUN4RCxNQUFNQyxLQUFLLEdBQUcsTUFBTXBCLG1FQUFzQixDQUFDLGdDQUFnQyxDQUFDO0lBRTVFLE1BQU1HLE9BQU8sR0FBRztRQUNkWSxPQUFPLEVBQUVLLEtBQUssQ0FBQ0csRUFBRTtRQUNqQlQsTUFBTSxFQUFFLElBQUlVLElBQUksQ0FBQ0MsWUFBWSxDQUFDLE9BQU8sRUFBRTtZQUNyQ0MsS0FBSyxFQUFFLFVBQVU7WUFDakJDLFFBQVEsRUFBRSxLQUFLO1NBQ2hCLENBQUMsQ0FBQ0MsTUFBTSxDQUFDUixLQUFLLENBQUNTLFdBQVcsR0FBSSxHQUFHLENBQUM7S0FDcEM7SUFFRCxPQUFPO1FBQ0xDLEtBQUssRUFBRTtZQUNMM0IsT0FBTztTQUNSO1FBQ0Q0QixVQUFVLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFO0tBQ3pCO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90dWxpb19wb3J0Zm9saW8vLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2V0U3RhdGljUHJvcHMgfSBmcm9tICduZXh0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgU3Vic2NyaWJlQnV0dG9uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9TdWJzY3JpYmVCdXR0b24nXG5pbXBvcnQgeyBzdHJpcGUgfSBmcm9tICcuLi9zZXJ2aWNlL3N0cmlwZSdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2hvbWUubW9kdWxlLnNjc3MnXG5cbmludGVyZmFjZSBIb21lUHJvcHMge1xuICBwcm9kdWN0OiB7XG4gICAgcHJpY2VJZDogc3RyaW5nXG4gICAgYW1vdW50OiBudW1iZXJcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IHByb2R1Y3QgfTogSG9tZVByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+SG9tZSB8IFR1bGlvIFBvcnRmb2xpbzwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50Q29udGFpbmVyfT5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuaGVyb30+XG4gICAgICAgICAgPHNwYW4+8J+RjyBIZXksIHdlbGNvbWU8L3NwYW4+XG4gICAgICAgICAgPGgxPk5ld3MgYWJvdXQgdGhlIDxzcGFuPlJlYWN0PC9zcGFuPiB3b3JsZC48L2gxPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgR2V0IGFjY2VzcyB0byBhbGwgdGhlIHB1YmxpY2F0aW9ucy4gPGJyIC8+XG4gICAgICAgICAgICA8c3Bhbj5mb3Ige3Byb2R1Y3QuYW1vdW50fSBtb250aDwvc3Bhbj5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPFN1YnNjcmliZUJ1dHRvbiBwcmljZUlkPXtwcm9kdWN0LnByaWNlSWR9IC8+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2F2YXRhci5zdmdcIiBhbHQ9XCJHaXJsIGNvZGluZ1wiIC8+XG4gICAgICA8L21haW4+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcHJpY2UgPSBhd2FpdCBzdHJpcGUucHJpY2VzLnJldHJpZXZlKCdwcmljZV8xS2paVDJEaElBbnRCMUNLSjNuOW1XMUcnKVxuXG4gIGNvbnN0IHByb2R1Y3QgPSB7XG4gICAgcHJpY2VJZDogcHJpY2UuaWQsXG4gICAgYW1vdW50OiBuZXcgSW50bC5OdW1iZXJGb3JtYXQoJ2VuLVVTJywge1xuICAgICAgc3R5bGU6ICdjdXJyZW5jeScsXG4gICAgICBjdXJyZW5jeTogJ1VTRCdcbiAgICB9KS5mb3JtYXQocHJpY2UudW5pdF9hbW91bnQhIC8gMTAwKVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcHJvZHVjdFxuICAgIH0sXG4gICAgcmV2YWxpZGF0ZTogNjAgKiA2MCAqIDI0XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwiU3Vic2NyaWJlQnV0dG9uIiwic3RyaXBlIiwic3R5bGVzIiwiSG9tZSIsInByb2R1Y3QiLCJ0aXRsZSIsIm1haW4iLCJjbGFzc05hbWUiLCJjb250ZW50Q29udGFpbmVyIiwic2VjdGlvbiIsImhlcm8iLCJzcGFuIiwiaDEiLCJwIiwiYnIiLCJhbW91bnQiLCJwcmljZUlkIiwiaW1nIiwic3JjIiwiYWx0IiwiZ2V0U3RhdGljUHJvcHMiLCJwcmljZSIsInByaWNlcyIsInJldHJpZXZlIiwiaWQiLCJJbnRsIiwiTnVtYmVyRm9ybWF0Iiwic3R5bGUiLCJjdXJyZW5jeSIsImZvcm1hdCIsInVuaXRfYW1vdW50IiwicHJvcHMiLCJyZXZhbGlkYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "./src/service/api.ts":
/*!****************************!*\
  !*** ./src/service/api.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"api\": () => (/* binding */ api)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst api = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n    baseURL: \"/api\"\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZS9hcGkudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTBCO0FBRW5CLE1BQU1DLEdBQUcsR0FBR0QsbURBQVksQ0FBQztJQUM1QkcsT0FBTyxFQUFFLE1BQU07Q0FDbEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3R1bGlvX3BvcnRmb2xpby8uL3NyYy9zZXJ2aWNlL2FwaS50cz8wYmZjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuZXhwb3J0IGNvbnN0IGFwaSA9IGF4aW9zLmNyZWF0ZSh7XG4gICAgYmFzZVVSTDogJy9hcGknXG59KSJdLCJuYW1lcyI6WyJheGlvcyIsImFwaSIsImNyZWF0ZSIsImJhc2VVUkwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/service/api.ts\n");

/***/ }),

/***/ "./src/service/stripe.js.ts":
/*!**********************************!*\
  !*** ./src/service/stripe.js.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStripeJs\": () => (/* binding */ getStripeJs)\n/* harmony export */ });\n/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stripe/stripe-js */ \"@stripe/stripe-js\");\n/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__);\n\nconst getStripeJs = async ()=>{\n    return await (0,_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__.loadStripe)(\"pk_test_51KjZRRDhIAntB1CKV3Vabo6Pw4J0tXL99wcUAGRX3xDnvsFFrAM0qqCAPix0fTvZ60Szr6rEFWK31kJg28Lkuyk600VFUYV1n5\");\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZS9zdHJpcGUuanMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQzhDO0FBRXZDLE1BQU1DLFdBQVcsR0FBRyxVQUFZO0lBQ25DLE9BQU8sTUFBTUQsNkRBQVUsQ0FBQ0UsNkdBQXlDLENBQUM7Q0FDckUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90dWxpb19wb3J0Zm9saW8vLi9zcmMvc2VydmljZS9zdHJpcGUuanMudHM/ODJlZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IGxvYWRTdHJpcGUgfSBmcm9tICdAc3RyaXBlL3N0cmlwZS1qcydcblxuZXhwb3J0IGNvbnN0IGdldFN0cmlwZUpzID0gYXN5bmMgKCkgPT4ge1xuICAgIHJldHVybiBhd2FpdCBsb2FkU3RyaXBlKHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NUUklQRV9QVUJMSUNfS0VZKVxufSJdLCJuYW1lcyI6WyJsb2FkU3RyaXBlIiwiZ2V0U3RyaXBlSnMiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfU1RSSVBFX1BVQkxJQ19LRVkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/service/stripe.js.ts\n");

/***/ }),

/***/ "./src/service/stripe.ts":
/*!*******************************!*\
  !*** ./src/service/stripe.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"stripe\": () => (/* binding */ stripe)\n/* harmony export */ });\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stripe */ \"stripe\");\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stripe__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../package.json */ \"./package.json\");\n\n\nconst stripe = new (stripe__WEBPACK_IMPORTED_MODULE_0___default())(process.env.STRIPE_API_KEY, {\n    apiVersion: \"2020-08-27\",\n    appInfo: {\n        name: \"TulioAnnotation\",\n        version: _package_json__WEBPACK_IMPORTED_MODULE_1__.version\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZS9zdHJpcGUudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEyQjtBQUNpQjtBQUVyQyxNQUFNRSxNQUFNLEdBQUcsSUFBSUYsK0NBQU0sQ0FDNUJHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxjQUFjLEVBQzFCO0lBQ0lDLFVBQVUsRUFBRSxZQUFZO0lBQ3hCQyxPQUFPLEVBQUU7UUFDTEMsSUFBSSxFQUFFLGlCQUFpQjtRQUN2QlAsT0FBTztLQUNWO0NBQ0osQ0FDSiIsInNvdXJjZXMiOlsid2VicGFjazovL3R1bGlvX3BvcnRmb2xpby8uL3NyYy9zZXJ2aWNlL3N0cmlwZS50cz9kOGZhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdHJpcGUgZnJvbSAnc3RyaXBlJ1xuaW1wb3J0IHsgdmVyc2lvbiB9IGZyb20gJy4uLy4uL3BhY2thZ2UuanNvbidcblxuZXhwb3J0IGNvbnN0IHN0cmlwZSA9IG5ldyBTdHJpcGUoXG4gICAgcHJvY2Vzcy5lbnYuU1RSSVBFX0FQSV9LRVksXG4gICAge1xuICAgICAgICBhcGlWZXJzaW9uOiAnMjAyMC0wOC0yNycsXG4gICAgICAgIGFwcEluZm86IHtcbiAgICAgICAgICAgIG5hbWU6ICdUdWxpb0Fubm90YXRpb24nLFxuICAgICAgICAgICAgdmVyc2lvblxuICAgICAgICB9LFxuICAgIH1cbikiXSwibmFtZXMiOlsiU3RyaXBlIiwidmVyc2lvbiIsInN0cmlwZSIsInByb2Nlc3MiLCJlbnYiLCJTVFJJUEVfQVBJX0tFWSIsImFwaVZlcnNpb24iLCJhcHBJbmZvIiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/service/stripe.ts\n");

/***/ }),

/***/ "@stripe/stripe-js":
/*!************************************!*\
  !*** external "@stripe/stripe-js" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@stripe/stripe-js");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stripe");

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"name":"tulio_portfolio","version":"0.1.0","private":true,"scripts":{"dev":"next dev","build":"next build","start":"next start","lint":"next lint"},"dependencies":{"@stripe/stripe-js":"^1.32.0","axios":"^0.27.2","faunadb":"^4.5.4","next":"12.1.4","next-auth":"^4.3.4","react":"18.0.0","react-dom":"18.0.0","react-icons":"^4.3.1","sass":"^1.49.10","stripe":"^8.214.0"},"devDependencies":{"@types/next-auth":"^3.15.0","@types/node":"^17.0.23","@types/react":"^17.0.43","eslint":"8.12.0","eslint-config-next":"12.1.4","typescript":"^4.6.3"}}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();