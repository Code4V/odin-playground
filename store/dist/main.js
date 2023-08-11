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

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Header = () =>\r\n{\r\n    const header = document.createElement('header');\r\n    header.setAttribute('class', 'header');\r\n    \r\n    const headerImage = document.createElement('img');\r\n    headerImage.setAttribute('class', 'header__image');\r\n    headerImage.setAttribute('src', 'assets/header_bg.jpg');\r\n\r\n    const headerContents = document.createElement('div');\r\n    headerContents.setAttribute('class', 'header__contents');\r\n\r\n    const headerContentsTitle = document.createElement('h1');\r\n    headerContentsTitle.setAttribute('class', 'header__title');\r\n    headerContentsTitle.textContent = 'VIKINGS: SEA BREEZE';\r\n\r\n    const headerContentsSubtitle = document.createElement('p');\r\n    headerContentsSubtitle.setAttribute('class', 'header__subtitle');\r\n    headerContentsSubtitle.textContent = 'Where kings come to dine!';\r\n\r\n    const headerContentsButtons = document.createElement('div');\r\n    headerContentsButtons.setAttribute('class', 'header__buttons');\r\n\r\n    const headerButton = document.createElement('button');\r\n    headerButton.setAttribute('class', 'button header__buttons-see--primary');\r\n    headerButton.textContent = 'SEE MENU'\r\n\r\n    headerContentsButtons.appendChild(headerButton);\r\n\r\n    \r\n    headerContents.appendChild(headerContentsTitle);\r\n    \r\n    headerContentsTitle.insertAdjacentElement('afterend', headerContentsSubtitle);\r\n    headerContentsSubtitle.insertAdjacentElement('afterend', headerContentsButtons);\r\n    \r\n    headerImage.insertAdjacentElement('afterend', headerContents);\r\n\r\n\r\n    header.appendChild(headerImage)\r\n    header.appendChild(headerContents)\r\n\r\n    return header;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n\n//# sourceURL=webpack://wpstore/./src/components/header.js?");

/***/ }),

/***/ "./src/components/menu.js":
/*!********************************!*\
  !*** ./src/components/menu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product */ \"./src/components/product.js\");\n/* harmony import */ var _data_products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../data/products */ \"./src/data/products.js\");\n/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navigation */ \"./src/components/navigation.js\");\n\r\n\r\n\r\n\r\nconst Menu = (currentCategory) =>\r\n{\r\n    const menu = document.createElement('section');\r\n    menu.setAttribute('class', 'menu');\r\n\r\n    const menuItems = document.createElement('div');\r\n    menuItems.setAttribute('class', 'menu__items');\r\n\r\n    const menuTitle = document.createElement('div');\r\n    menuTitle.setAttribute('class', 'menu__title');\r\n\r\n    const title = document.createElement('h3');\r\n    title.textContent = 'MENU';\r\n\r\n    menuTitle.appendChild(title);\r\n\r\n    // const menuNavigation = document.createElement('nav');\r\n    \r\n    menu.appendChild(menuTitle);\r\n    \r\n    menuTitle.insertAdjacentElement('afterend', menuItems)\r\n    \r\n    menuItems.insertAdjacentElement('beforebegin', (0,_navigation__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([\"All\", \"Main Course\", \"Appetizers\", \"Desserts\", \"Drinks\", \"Sides\"], currentCategory))\r\n    \r\n    _data_products__WEBPACK_IMPORTED_MODULE_1__[\"default\"].map(element => {\r\n        if (element.productCategory.includes(currentCategory) || \r\n            currentCategory == null)\r\n        menuItems.appendChild((0,_product__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(element));\r\n    })\r\n\r\n\r\n    return menu;\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);\n\n//# sourceURL=webpack://wpstore/./src/components/menu.js?");

/***/ }),

/***/ "./src/components/navigation.js":
/*!**************************************!*\
  !*** ./src/components/navigation.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Navigation = (items = [], selected = '') => {\r\n\r\n    const navigation = document.createElement('nav');\r\n    navigation.setAttribute('class', 'navigation');\r\n\r\n    const navigationItems = document.createElement('ul');\r\n    navigationItems.setAttribute('class', 'navigation__items');\r\n\r\n    items.forEach((element, index) => {\r\n\r\n        const item = document.createElement('li');\r\n        item.setAttribute('class', 'navigation__items-item');\r\n        \r\n        if((selected == '' && index === 0) || (selected.toUpperCase() === element.toUpperCase()) )\r\n        item.setAttribute('class', 'active');\r\n        \r\n      \r\n\r\n\r\n        item.textContent = element;\r\n        navigationItems.appendChild(item)\r\n    });\r\n\r\n\r\n\r\n\r\n    navigation.appendChild(navigationItems);\r\n\r\n    return navigation; \r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navigation); \n\n//# sourceURL=webpack://wpstore/./src/components/navigation.js?");

/***/ }),

/***/ "./src/components/product.js":
/*!***********************************!*\
  !*** ./src/components/product.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Product = (item) =>\r\n{\r\n    const product = document.createElement('div');\r\n    product.setAttribute('class', 'product');\r\n\r\n    const productImage = document.createElement('div');\r\n    productImage.setAttribute('class', 'product__image');\r\n\r\n    const image = document.createElement('img');\r\n    image.setAttribute('src', 'https://picsum.photos/id/677/250');\r\n    image.setAttribute('alt', 'testing image');\r\n    \r\n    productImage.appendChild(image);\r\n\r\n    const productInfo = document.createElement('div');\r\n    productInfo.setAttribute('class', 'product__info');\r\n    \r\n    const infoTitle = document.createElement('span');\r\n    infoTitle.setAttribute('class', 'product__info-title');\r\n    infoTitle.textContent = item.productName;\r\n\r\n    const infoDescription = document.createElement('p');\r\n    infoDescription.setAttribute('class', 'product__info-description');\r\n    infoDescription.textContent = item.productDescription;\r\n    \r\n    const infoButton = document.createElement('button');\r\n    infoButton.setAttribute('class', 'product__info-action');\r\n    infoButton.textContent = \"ORDER NOW\";\r\n\r\n    productInfo.appendChild(infoTitle);\r\n    infoTitle.insertAdjacentElement('afterend', infoDescription);\r\n    infoDescription.insertAdjacentElement('afterend', infoButton);\r\n\r\n\r\n    product.appendChild(productImage);\r\n    productImage.insertAdjacentElement('afterend', productInfo);\r\n    \r\n    return product;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Product);\n\n//# sourceURL=webpack://wpstore/./src/components/product.js?");

/***/ }),

/***/ "./src/data/products.js":
/*!******************************!*\
  !*** ./src/data/products.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar products = \r\n    [ \r\n        {\r\n        'productID': 'md0001',\r\n        'productName': 'Fish Fillet',\r\n        'productDescription': 'A Fillet Fish fresh from the ocean',\r\n        'productPrice': 900,\r\n        'productCategory': \r\n            [\r\n            'Main Course',\r\n            'Sides'\r\n            ],\r\n        },\r\n\r\n        {\r\n        'productID': 'md0002',\r\n        'productName': 'Swedish MeatBall',\r\n        'productDescription': 'A Fillet Fish fresh from the ocean',\r\n        'productPrice': 900,\r\n        'productCategory': \r\n            [\r\n            'Main Course'\r\n            ],\r\n        },\r\n        {\r\n        'productID': 'md0003',\r\n        'productName': 'Swedish',\r\n        'productDescription': 'A Fillet Fish fresh from the ocean',\r\n        'productPrice': 900,\r\n        'productCategory': \r\n            [\r\n            'Main Course',\r\n            'Drinks'\r\n            ],\r\n        },\r\n        {\r\n        'productID': 'md0003',\r\n        'productName': 'Odin\\'s Dinner',\r\n        'productDescription': 'Dine to the glorious meal of Odin himself!',\r\n        'productPrice': 900,\r\n        'productCategory': \r\n            [\r\n            'Drinks'\r\n            ],\r\n        },\r\n    ]\r\n;\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (products);\n\n//# sourceURL=webpack://wpstore/./src/data/products.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/header */ \"./src/components/header.js\");\n/* harmony import */ var _components_product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/product */ \"./src/components/product.js\");\n/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/menu */ \"./src/components/menu.js\");\n/* harmony import */ var _components_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/navigation */ \"./src/components/navigation.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst main = document.querySelector(\"#content\");\r\n\r\n\r\nmain.insertAdjacentElement('beforebegin', (0,_components_navigation__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(['Home', 'Menu', 'Contact']))\r\n\r\nmain.insertAdjacentElement('afterbegin',(0,_components_header__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\r\n\r\ndocument.addEventListener('DOMContentLoaded', ()=>{\r\n\r\n    main.appendChild((0,_components_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('Drinks'))\r\n\r\n})\r\n\r\n// main.innerHTML = \"HELLO\"\n\n//# sourceURL=webpack://wpstore/./src/index.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;