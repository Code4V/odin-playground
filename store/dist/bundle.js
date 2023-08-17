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

/***/ "./src/components/best-seller.js":
/*!***************************************!*\
  !*** ./src/components/best-seller.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product */ \"./src/components/product.js\");\n/* harmony import */ var _data_products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../data/products */ \"./src/data/products.js\");\n\r\n\r\n\r\nconst BestSeller = () => {\r\n  const bestseller = document.createElement(\"section\");\r\n  bestseller.setAttribute(\"class\", \"best-seller\");\r\n\r\n  const bestsellerTitle = document.createElement(\"div\");\r\n  bestsellerTitle.setAttribute(\"class\", \"best-seller__title\");\r\n\r\n  const title = document.createElement(\"h3\");\r\n  title.textContent = \"BEST SELLER\";\r\n\r\n  bestsellerTitle.appendChild(title);\r\n\r\n  let bestsellerProduct = (0,_product__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_data_products__WEBPACK_IMPORTED_MODULE_1__[\"default\"][0]);\r\n  bestsellerProduct.classList.add(\"best-seller__product\");\r\n\r\n  let productInfoChildren = bestsellerProduct.children[1].childNodes;\r\n  bestsellerProduct.children[1].classList.add(\r\n    \"best-seller__product-info\",\r\n    \"best-seller__product-info--centered\"\r\n  );\r\n\r\n  bestsellerProduct.children[1].children[3].childNodes.forEach((element) => {\r\n    // console.log(element)\r\n    if (element.className === \"product__info-category\") {\r\n      element.classList.add(\"best-seller__product-category\");\r\n    }\r\n  });\r\n\r\n  bestsellerProduct.children[1].childNodes[\r\n    productInfoChildren.length - 1\r\n  ].classList.add(\"best-seller__product-action\");\r\n  console.log(bestsellerProduct);\r\n\r\n  bestseller.appendChild(bestsellerTitle);\r\n\r\n  bestsellerTitle.insertAdjacentElement(\"afterend\", bestsellerProduct);\r\n\r\n  return bestseller;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BestSeller);\r\n\n\n//# sourceURL=webpack://wpstore/./src/components/best-seller.js?");

/***/ }),

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product */ \"./src/components/product.js\");\n/* harmony import */ var _data_products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../data/products */ \"./src/data/products.js\");\n/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navigation */ \"./src/components/navigation.js\");\n/* harmony import */ var _assets_NotFound_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../assets/NotFound.png */ \"./src/assets/NotFound.png\");\n\r\n\r\n\r\n\r\n\r\nconst Menu = (currentCategory) => {\r\n  const menu = document.createElement(\"section\");\r\n  menu.setAttribute(\"class\", \"menu\");\r\n\r\n  const menuItems = document.createElement(\"div\");\r\n  menuItems.setAttribute(\"class\", \"menu__items\");\r\n\r\n  const menuNotFound = new Image();\r\n  menuNotFound.src = _assets_NotFound_png__WEBPACK_IMPORTED_MODULE_3__;\r\n\r\n  const menuEmpty = document.createElement(\"p\");\r\n  menuEmpty.setAttribute(\r\n    \"class\",\r\n    \"menu__items-content menu__items-content--empty\"\r\n  );\r\n  menuEmpty.textContent =\r\n    \"Oops! Looks like the high seas took these part of the menu!\";\r\n\r\n  const menuTitle = document.createElement(\"div\");\r\n  menuTitle.setAttribute(\"class\", \"menu__title\");\r\n\r\n  const title = document.createElement(\"h3\");\r\n  title.textContent = \"MENU\";\r\n\r\n  menuTitle.appendChild(title);\r\n\r\n  // const menuNavigation = document.createElement('nav');\r\n\r\n  menu.appendChild(menuTitle);\r\n\r\n  menuTitle.insertAdjacentElement(\"afterend\", menuItems);\r\n\r\n  let menuNavigation = (0,_navigation__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\r\n    [\"All\", \"Main Course\", \"Appetizers\", \"Desserts\", \"Drinks\", \"Sides\"],\r\n    currentCategory\r\n  );\r\n\r\n  menuItems.insertAdjacentElement(\"beforebegin\", menuNavigation);\r\n\r\n  _data_products__WEBPACK_IMPORTED_MODULE_1__[\"default\"].map((element) => {\r\n    if (\r\n      element.productCategory.includes(currentCategory) ||\r\n      currentCategory == null\r\n    )\r\n      menuItems.appendChild((0,_product__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(element));\r\n  });\r\n\r\n  menuNavigation.childNodes[0].childNodes.forEach((element) => {\r\n    element.addEventListener(\"click\", () => {\r\n      element.parentElement.childNodes.forEach((child) => {\r\n        if (child.classList.contains(\"active\"))\r\n          child.setAttribute(\"class\", \"navigation__items-item\");\r\n      });\r\n\r\n      element.classList.add(\"active\");\r\n\r\n      menuItems.textContent = \"\";\r\n      let isEmpty = true;\r\n      _data_products__WEBPACK_IMPORTED_MODULE_1__[\"default\"].map((product) => {\r\n        if (\r\n          product.productCategory.includes(element.textContent) ||\r\n          element.textContent == \"All\"\r\n        ) {\r\n          menuItems.appendChild((0,_product__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(product));\r\n          isEmpty = false;\r\n        }\r\n      });\r\n\r\n      if (isEmpty) {\r\n        menuItems.appendChild(menuNotFound);\r\n        menuItems.appendChild(menuEmpty);\r\n      }\r\n    });\r\n  });\r\n\r\n  return menu;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);\r\n\n\n//# sourceURL=webpack://wpstore/./src/components/menu.js?");

/***/ }),

/***/ "./src/components/navigation.js":
/*!**************************************!*\
  !*** ./src/components/navigation.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Navigation = (items = [], selected = \"\") => {\r\n  const navigation = document.createElement(\"nav\");\r\n  navigation.setAttribute(\"class\", \"navigation\");\r\n\r\n  const navigationItems = document.createElement(\"ul\");\r\n  navigationItems.setAttribute(\"class\", \"navigation__items\");\r\n\r\n  items.forEach((element, index) => {\r\n    const item = document.createElement(\"li\");\r\n    item.setAttribute(\"class\", \"navigation__items-item\");\r\n\r\n    if (\r\n      (selected == \"\" && index === 0) ||\r\n      selected.toUpperCase() === element.toUpperCase()\r\n    )\r\n      item.setAttribute(\"class\", \"navigation__items-item active\");\r\n\r\n    item.textContent = element;\r\n    navigationItems.appendChild(item);\r\n  });\r\n\r\n  navigation.appendChild(navigationItems);\r\n\r\n  return navigation;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navigation);\r\n\n\n//# sourceURL=webpack://wpstore/./src/components/navigation.js?");

/***/ }),

/***/ "./src/components/product.js":
/*!***********************************!*\
  !*** ./src/components/product.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Product = (item) => {\r\n  const product = document.createElement(\"div\");\r\n  product.setAttribute(\"class\", \"product\");\r\n  product.setAttribute(\"id\", `${item.productID}`);\r\n\r\n  const productImage = document.createElement(\"div\");\r\n  productImage.setAttribute(\"class\", \"product__image\");\r\n\r\n  const image = document.createElement(\"img\");\r\n  // image.setAttribute(\"src\", \"https://picsum.photos/id/677/250\");\r\n  image.setAttribute(\"src\", \"https://picsum.photos/250\");\r\n  image.setAttribute(\"alt\", \"testing image\");\r\n\r\n  productImage.appendChild(image);\r\n\r\n  const productInfo = document.createElement(\"div\");\r\n  productInfo.setAttribute(\"class\", \"product__info\");\r\n\r\n  const infoTitle = document.createElement(\"span\");\r\n  infoTitle.setAttribute(\"class\", \"product__info-title\");\r\n  infoTitle.textContent = item.productName;\r\n\r\n  const infoDescription = document.createElement(\"p\");\r\n  infoDescription.setAttribute(\"class\", \"product__info-description\");\r\n  infoDescription.textContent = item.productDescription;\r\n\r\n  const infoPrice = document.createElement(\"p\");\r\n  infoPrice.setAttribute(\"class\", \"product__info-price\");\r\n  infoPrice.textContent = item.productPrice;\r\n\r\n  const infoButton = document.createElement(\"button\");\r\n  infoButton.setAttribute(\"class\", \"product__info-action\");\r\n  infoButton.setAttribute(\"type\", \"button\");\r\n  infoButton.textContent = \"ORDER NOW\";\r\n\r\n  const infoCategory = document.createElement(\"div\");\r\n\r\n  productInfo.appendChild(infoTitle);\r\n  infoTitle.insertAdjacentElement(\"afterend\", infoDescription);\r\n  infoDescription.insertAdjacentElement(\"afterend\", infoPrice);\r\n  infoPrice.insertAdjacentElement(\"afterend\", infoButton);\r\n\r\n  item.productCategory.forEach((element) => {\r\n    const category = document.createElement(\"span\");\r\n    category.setAttribute(\"class\", \"product__info-category\");\r\n    category.textContent = element;\r\n\r\n    infoCategory.appendChild(category);\r\n    // infoPrice.insertAdjacentElement('afterend', category)\r\n  });\r\n\r\n  infoPrice.insertAdjacentElement(\"afterend\", infoCategory);\r\n\r\n  product.appendChild(productImage);\r\n  productImage.insertAdjacentElement(\"afterend\", productInfo);\r\n\r\n  return product;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Product);\r\n\n\n//# sourceURL=webpack://wpstore/./src/components/product.js?");

/***/ }),

/***/ "./src/data/products.js":
/*!******************************!*\
  !*** ./src/data/products.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar products = \r\n    [ \r\n        {\r\n        'productID': 'md0001',\r\n        'productName': 'Fish Fillet',\r\n        'productDescription': 'A Fillet Fish fresh from the ocean',\r\n        'productPrice': 900,\r\n        'productCategory': \r\n            [\r\n            'Main Course',\r\n            'Sides'\r\n            ],\r\n        },\r\n\r\n        {\r\n        'productID': 'md0002',\r\n        'productName': 'Swedish MeatBall',\r\n        'productDescription': 'A Fillet Fish fresh from the ocean',\r\n        'productPrice': 900,\r\n        'productCategory': \r\n            [\r\n            'Main Course'\r\n            ],\r\n        },\r\n        {\r\n        'productID': 'md0003',\r\n        'productName': 'Swedish Pancake',\r\n        'productDescription': 'A Fillet Fish fresh from the ocean',\r\n        'productPrice': 900,\r\n        'productCategory': \r\n            [\r\n            'Main Course',\r\n            'Drinks'\r\n            ],\r\n        },\r\n        {\r\n        'productID': 'md0004',\r\n        'productName': 'Odin\\'s Dinner',\r\n        'productDescription': 'Dine to the glorious meal of Odin himself!',\r\n        'productPrice': 900,\r\n        'productCategory': \r\n            [\r\n            'Drinks'\r\n            ],\r\n        },\r\n    ]\r\n;\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (products);\n\n//# sourceURL=webpack://wpstore/./src/data/products.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/header */ \"./src/components/header.js\");\n/* harmony import */ var _components_product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/product */ \"./src/components/product.js\");\n/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/menu */ \"./src/components/menu.js\");\n/* harmony import */ var _components_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/navigation */ \"./src/components/navigation.js\");\n/* harmony import */ var _components_best_seller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/best-seller */ \"./src/components/best-seller.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst main = document.querySelector(\"#content\");\r\n\r\n// main.insertAdjacentElement('beforebegin', Navigation(['Home', 'Menu', 'Contact']))\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n  main.insertAdjacentElement(\"afterbegin\", (0,_components_header__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\r\n  main.appendChild((0,_components_best_seller__WEBPACK_IMPORTED_MODULE_4__[\"default\"])());\r\n  main.appendChild((0,_components_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\r\n});\r\n\r\n// main.innerHTML = \"HELLO\"\r\n\n\n//# sourceURL=webpack://wpstore/./src/index.js?");

/***/ }),

/***/ "./src/assets/NotFound.png":
/*!*********************************!*\
  !*** ./src/assets/NotFound.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1f01e73fb1a0213d1199.png\";\n\n//# sourceURL=webpack://wpstore/./src/assets/NotFound.png?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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