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

/***/ "./src/components/about-us.js":
/*!************************************!*\
  !*** ./src/components/about-us.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_aboutme1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../assets/aboutme1.jpg */ \"./src/assets/aboutme1.jpg\");\n/* harmony import */ var _assets_aboutme2_webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../assets/aboutme2.webp */ \"./src/assets/aboutme2.webp\");\n/* harmony import */ var _assets_aboutme3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../assets/aboutme3.jpg */ \"./src/assets/aboutme3.jpg\");\n/* harmony import */ var _assets_aboutme4_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../assets/aboutme4.jpg */ \"./src/assets/aboutme4.jpg\");\n \r\n \r\n \r\n \r\n\r\nconst AboutUs = () => {\r\n  const aboutUs = document.createElement(\"section\");\r\n  aboutUs.setAttribute('class', 'about-us');\r\n\r\n  const aboutUsHeader = document.createElement(\"h3\");\r\n  aboutUsHeader.setAttribute(\"class\", \"about-us__header\");\r\n  aboutUsHeader.textContent = \"ABOUT US\";\r\n\r\n  const aboutUsDescription = document.createElement(\"div\");\r\n  aboutUsDescription.setAttribute(\"class\", \"about-us__description\");\r\n\r\n  const firstDescription = document.createElement(\"p\");\r\n  firstDescription.setAttribute('class', 'about-us__description-paragraph')\r\n  firstDescription.textContent = \"A world class scandinavian cuisine served by the best vikings out there! Vikings that served the All-Father Odin with the most fresh ingredients out there! \";\r\n\r\n  const firstImage = new Image();\r\n  firstImage.setAttribute('class', 'about-us__description-image');\r\n  firstImage.src = _assets_aboutme1_jpg__WEBPACK_IMPORTED_MODULE_0__;\r\n\r\n  \r\n  const secondDescription = document.createElement(\"p\");\r\n  secondDescription.setAttribute('class', 'about-us__description-paragraph')\r\n  secondDescription.textContent = \"Welcome to Vikings: Sea Breeze, where the echoes of the past meld with the flavors of the present to create a dining experience like no other. Step into a realm where the spirit of Vikings lives on, and indulge in an extraordinary culinary journey that pays homage to their daring adventures and seafaring legacy.\";\r\n\r\n  const secondImage = new Image();\r\n  secondImage.setAttribute('class', 'about-us__description-image');\r\n  secondImage.src = _assets_aboutme2_webp__WEBPACK_IMPORTED_MODULE_1__;\r\n\r\n  const thirdDescription = document.createElement(\"p\");\r\n  thirdDescription.setAttribute('class', 'about-us__description-paragraph')\r\n  thirdDescription.textContent = \"Upon entering Vikings: Sea Breeze, youll be transported to a world of maritime exploration and Norse mythology. The interior is adorned with weathered ship parts, sails billowing overhead, and intricately carved wooden accents reminiscent of Viking longships. The warm, golden lighting casts a magical glow upon the space, inviting you to embark on a voyage through time.  Our staff, dressed as valiant Viking sailors, greet you with a hearty Hail! and a welcoming smile.\";\r\n\r\n  const thirdImage = new Image();\r\n  thirdImage.setAttribute('class', 'about-us__description-image');\r\n  thirdImage.src = _assets_aboutme3_jpg__WEBPACK_IMPORTED_MODULE_2__;\r\n\r\n  const fourthDescription = document.createElement(\"p\");\r\n  fourthDescription.setAttribute('class', 'about-us__description-paragraph')\r\n  fourthDescription.textContent = \"They guide you through the menu, a carefully crafted fusion of traditional Viking fare and contemporary gastronomy. Feast on delectable dishes that capture the essence of Viking life—succulent roasted meats, hearty stews brimming with the bounty of the land and sea, and freshly baked bread that recalls the sustenance of the voyage.\";\r\n\r\n  const fourthImage = new Image();\r\n  fourthImage.setAttribute('class', 'about-us__description-image');\r\n  fourthImage.src = _assets_aboutme4_jpg__WEBPACK_IMPORTED_MODULE_3__;\r\n\r\n  aboutUsDescription.appendChild(firstDescription);\r\n  aboutUsDescription.appendChild(firstImage);\r\n\r\n  aboutUsDescription.appendChild(secondDescription);\r\n  aboutUsDescription.appendChild(secondImage);\r\n  \r\n  aboutUsDescription.appendChild(thirdDescription);\r\n  aboutUsDescription.appendChild(thirdImage);\r\n  \r\n  aboutUsDescription.appendChild(fourthDescription);\r\n  aboutUsDescription.appendChild(fourthImage);\r\n\r\n  aboutUs.appendChild(aboutUsHeader);\r\n  aboutUs.appendChild(aboutUsDescription);\r\n\r\n  return aboutUs;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AboutUs);\r\n\n\n//# sourceURL=webpack://wpstore/./src/components/about-us.js?");

/***/ }),

/***/ "./src/components/best-seller.js":
/*!***************************************!*\
  !*** ./src/components/best-seller.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product */ \"./src/components/product.js\");\n/* harmony import */ var _data_products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../data/products */ \"./src/data/products.js\");\n\r\n\r\n\r\nconst BestSeller = () => {\r\n  const bestseller = document.createElement(\"section\");\r\n  bestseller.setAttribute(\"class\", \"best-seller\");\r\n\r\n  const bestsellerTitle = document.createElement(\"div\");\r\n  bestsellerTitle.setAttribute(\"class\", \"best-seller__title\");\r\n\r\n  const title = document.createElement(\"h3\");\r\n  title.textContent = \"BEST SELLER\";\r\n\r\n  bestsellerTitle.appendChild(title);\r\n\r\n  let bestsellerProduct = (0,_product__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_data_products__WEBPACK_IMPORTED_MODULE_1__[\"default\"][0]);\r\n  bestsellerProduct.classList.add(\"best-seller__product\");\r\n\r\n  let productInfoChildren = bestsellerProduct.children[1].childNodes;\r\n  bestsellerProduct.children[1].classList.add(\r\n    \"best-seller__product-info\",\r\n    \"best-seller__product-info--centered\"\r\n  );\r\n\r\n  bestsellerProduct.children[1].children[3].childNodes.forEach((element) => {\r\n    // console.log(element)\r\n    if (element.className === \"product__info-category\") {\r\n      element.classList.add(\"best-seller__product-category\");\r\n    }\r\n  });\r\n\r\n  bestsellerProduct.children[1].childNodes[\r\n    productInfoChildren.length - 1\r\n  ].classList.add(\"best-seller__product-action\");\r\n  console.log(bestsellerProduct);\r\n\r\n  bestseller.appendChild(bestsellerTitle);\r\n\r\n  bestsellerTitle.insertAdjacentElement(\"afterend\", bestsellerProduct);\r\n\r\n  return bestseller;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BestSeller);\r\n\n\n//# sourceURL=webpack://wpstore/./src/components/best-seller.js?");

/***/ }),

/***/ "./src/components/contact-links.js":
/*!*****************************************!*\
  !*** ./src/components/contact-links.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst ContactLink = (contactTitle, contactIcon) =>\r\n{\r\n  const contactLink = document.createElement('div');\r\n  contactLink.setAttribute('class', 'link')\r\n\r\n  const EmailAddress = document.createElement('span');\r\n  EmailAddress.setAttribute('class', 'link__title');\r\n  EmailAddress.textContent = contactTitle;\r\n\r\n  const EmailIcon = new Image(25, 25);\r\n  EmailIcon.setAttribute('class', 'link__icon');\r\n  EmailIcon.src = contactIcon;\r\n\r\n  contactLink.appendChild(EmailIcon);\r\n  contactLink.appendChild(EmailAddress);\r\n\r\n  return contactLink;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactLink);\r\n\r\n\n\n//# sourceURL=webpack://wpstore/./src/components/contact-links.js?");

/***/ }),

/***/ "./src/components/contact.js":
/*!***********************************!*\
  !*** ./src/components/contact.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _contact_links__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact-links */ \"./src/components/contact-links.js\");\n\r\n\r\nconst Contact = () => {\r\n  const contact = document.createElement(\"section\");\r\n  contact.setAttribute(\"class\", \"contact\");\r\n\r\n  const contactTitle = document.createElement(\"h3\");\r\n  contactTitle.setAttribute('class', 'contact__title');\r\n  contactTitle.textContent = \"CONTACT US\";\r\n\r\n  const contactInformation = document.createElement(\"div\");\r\n  contactInformation.setAttribute(\"class\", \"contact__information\");\r\n\r\n  const contactEmail = (0,_contact_links__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"rivasjeannefrancis@gmail.com\", 'https://img.icons8.com/ios/50/D29614/new-post--v1.png');\r\n  const contactTel = (0,_contact_links__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"0995-200-1234\", \"https://img.icons8.com/ios/50/D29614/phone--v1.png\");\r\n  const contactLoc = (0,_contact_links__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"149 31 Nynäshamn, Sweden\", \"https://img.icons8.com/ios/50/D29614/map-marker--v1.png\");\r\n\r\n//   const EmailAddress = document.createElement('span');\r\n//   EmailAddress.textContent = \"rivasjeannefrancis@gmail.com\";\r\n\r\n//   const EmailIcon = new Image(25, 25);\r\n//   EmailIcon.src = 'https://img.icons8.com/ios/50/new-post--v1.png';\r\n\r\n    \r\n  contactInformation.appendChild(contactEmail);\r\n  contactInformation.appendChild(contactTel);\r\n  contactInformation.appendChild(contactLoc);\r\n//   contactEmail.appendChild(EmailIcon);\r\n//   contactEmail.appendChild(EmailAddress);\r\n\r\n  contact.appendChild(contactTitle);\r\n  contact.appendChild(contactInformation);\r\n\r\n  return contact;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);\r\n\n\n//# sourceURL=webpack://wpstore/./src/components/contact.js?");

/***/ }),

/***/ "./src/components/footer.js":
/*!**********************************!*\
  !*** ./src/components/footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Footer = () => \r\n{\r\n    const footer = document.createElement(\"footer\");\r\n    footer.setAttribute(\"class\", \"footer\");\r\n\r\n    const footerContent = document.createElement(\"div\");\r\n    footerContent.setAttribute(\"class\", \"footer__content\")\r\n\r\n    const contentCreator = document.createElement(\"p\");\r\n    contentCreator.setAttribute(\"class\", \"footer__content-by\");\r\n    contentCreator.textContent = \"Made by Code4V for the Odin Project\";\r\n\r\n    footerContent.appendChild(contentCreator);\r\n\r\n    footer.appendChild(footerContent);\r\n\r\n    return footer;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);\n\n//# sourceURL=webpack://wpstore/./src/components/footer.js?");

/***/ }),

/***/ "./src/components/header-navigation.js":
/*!*********************************************!*\
  !*** ./src/components/header-navigation.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation */ \"./src/components/navigation.js\");\n\r\n\r\nconst HeaderNavigation = () =>\r\n{\r\n    const MainNavigation = document.createElement(\"nav\");\r\n    MainNavigation.setAttribute(\"class\", \"header-navigation\");\r\n\r\n    const headerNavigationTitle = document.createElement(\"p\");\r\n    headerNavigationTitle.setAttribute(\"class\", \"header-navigation__logo\");\r\n    headerNavigationTitle.textContent = \"VIKINGS\";\r\n\r\n    let headerNavigation = (0,_navigation__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"Home\", \"Menu\", \"Contact\"])\r\n    headerNavigation.classList.add('header-navigation__navigation');\r\n\r\n    headerNavigation.childNodes[0].classList.add('header-navigation__navigation-items');\r\n\r\n    MainNavigation.appendChild(headerNavigationTitle);\r\n    MainNavigation.appendChild(headerNavigation);\r\n    \r\n    document.addEventListener('scroll', () => {\r\n        MainNavigation.classList.add(\"header-navigation--scrolled\")\r\n        if(document.scrollingElement.scrollTop > 0)\r\n        {\r\n        }\r\n        else\r\n        {\r\n        MainNavigation.classList.remove(\"header-navigation--scrolled\")\r\n        }\r\n    })\r\n\r\n    return MainNavigation;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderNavigation);\n\n//# sourceURL=webpack://wpstore/./src/components/header-navigation.js?");

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_header_bg_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../assets/header_bg.jpg */ \"./src/assets/header_bg.jpg\");\n\r\n\r\nconst Header = () =>\r\n{\r\n    const header = document.createElement('header');\r\n    header.setAttribute('class', 'header');\r\n    \r\n    const headerImageContainer = document.createElement('div');\r\n    headerImageContainer.setAttribute('class', 'header__image');\r\n\r\n    \r\n    \r\n    const headerImage = new Image();\r\n    // headerImage.classList.add('class', 'header__image');\r\n    headerImage.src = _assets_header_bg_jpg__WEBPACK_IMPORTED_MODULE_0__;\r\n    // const headerImage = document.createElement('img');\r\n    // headerImage.setAttribute('class', 'header__image');\r\n    // headerImage.setAttribute('src', 'assets/header_bg.jpg');\r\n    \r\n    headerImageContainer.appendChild(headerImage);\r\n\r\n    const headerContents = document.createElement('div');\r\n    headerContents.setAttribute('class', 'header__contents');\r\n    const headerContentsTitle = document.createElement('h1');\r\n    headerContentsTitle.setAttribute('class', 'header__title');\r\n    headerContentsTitle.textContent = 'VIKINGS: SEA BREEZE';\r\n\r\n    const headerContentsSubtitle = document.createElement('p');\r\n    headerContentsSubtitle.setAttribute('class', 'header__subtitle');\r\n    headerContentsSubtitle.textContent = 'Where kings come to dine!';\r\n\r\n    const headerContentsButtons = document.createElement('div');\r\n    headerContentsButtons.setAttribute('class', 'header__buttons');\r\n\r\n    const headerButton = document.createElement('button');\r\n    headerButton.setAttribute('class', 'button header__buttons-see--primary');\r\n    headerButton.setAttribute('type', 'button')\r\n    headerButton.textContent = 'SEE MENU'\r\n\r\n    headerButton.addEventListener('click', () => {\r\n        alert(clicked);\r\n    })\r\n\r\n    headerContentsButtons.appendChild(headerButton);\r\n\r\n    \r\n    headerContents.appendChild(headerContentsTitle);\r\n    \r\n    headerContentsTitle.insertAdjacentElement('afterend', headerContentsSubtitle);\r\n    headerContentsSubtitle.insertAdjacentElement('afterend', headerContentsButtons);\r\n    \r\n    headerImage.insertAdjacentElement('afterend', headerContents);\r\n\r\n\r\n    header.appendChild(headerImageContainer)\r\n    header.appendChild(headerContents)\r\n\r\n    return header;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n\n//# sourceURL=webpack://wpstore/./src/components/header.js?");

/***/ }),

/***/ "./src/components/menu.js":
/*!********************************!*\
  !*** ./src/components/menu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product */ \"./src/components/product.js\");\n/* harmony import */ var _data_products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../data/products */ \"./src/data/products.js\");\n/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navigation */ \"./src/components/navigation.js\");\n/* harmony import */ var _assets_NotFound_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../assets/NotFound.png */ \"./src/assets/NotFound.png\");\n\r\n\r\n\r\n\r\n\r\nconst Menu = (currentCategory) => {\r\n  const menu = document.createElement(\"section\");\r\n  menu.setAttribute(\"class\", \"menu\");\r\n\r\n  const menuItems = document.createElement(\"div\");\r\n  menuItems.setAttribute(\"class\", \"menu__items\");\r\n\r\n  const menuNotFound = new Image();\r\n  menuNotFound.src = _assets_NotFound_png__WEBPACK_IMPORTED_MODULE_3__;\r\n\r\n  const menuEmpty = document.createElement(\"p\");\r\n  menuEmpty.setAttribute(\r\n    \"class\",\r\n    \"menu__items-content menu__items-content--empty\"\r\n  );\r\n  menuEmpty.textContent =\r\n    \"Oops! Looks like the high seas took these part of the menu!\";\r\n\r\n  const menuTitle = document.createElement(\"div\");\r\n  menuTitle.setAttribute(\"class\", \"menu__title\");\r\n\r\n  const title = document.createElement(\"h3\");\r\n  title.textContent = \"MENU\";\r\n\r\n  menuTitle.appendChild(title);\r\n\r\n  // const menuNavigation = document.createElement('nav');\r\n\r\n  menu.appendChild(menuTitle);\r\n\r\n  menuTitle.insertAdjacentElement(\"afterend\", menuItems);\r\n\r\n  let menuNavigation = (0,_navigation__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\r\n    [\"All\", \"Main Course\", \"Appetizers\", \"Desserts\", \"Drinks\", \"Sides\"],\r\n    currentCategory\r\n  );\r\n\r\n  menuItems.insertAdjacentElement(\"beforebegin\", menuNavigation);\r\n\r\n  _data_products__WEBPACK_IMPORTED_MODULE_1__[\"default\"].map((element) => {\r\n    if (\r\n      element.productCategory.includes(currentCategory) ||\r\n      currentCategory == null\r\n    )\r\n      menuItems.appendChild((0,_product__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(element));\r\n  });\r\n\r\n  menuNavigation.childNodes[0].childNodes.forEach((element) => {\r\n    element.addEventListener(\"click\", () => {\r\n\r\n      menuItems.textContent = \"\";\r\n      let isEmpty = true;\r\n      _data_products__WEBPACK_IMPORTED_MODULE_1__[\"default\"].map((product) => {\r\n        if (\r\n          product.productCategory.includes(element.textContent) ||\r\n          element.textContent == \"All\"\r\n        ) {\r\n          menuItems.appendChild((0,_product__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(product));\r\n          isEmpty = false;\r\n        }\r\n      });\r\n\r\n      if (isEmpty) {\r\n        menuItems.appendChild(menuNotFound);\r\n        menuItems.appendChild(menuEmpty);\r\n      }\r\n    });\r\n  });\r\n\r\n  return menu;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);\r\n\n\n//# sourceURL=webpack://wpstore/./src/components/menu.js?");

/***/ }),

/***/ "./src/components/navigation.js":
/*!**************************************!*\
  !*** ./src/components/navigation.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Navigation = (items = [], selected = \"\") => {\r\n  const navigation = document.createElement(\"nav\");\r\n  navigation.setAttribute(\"class\", \"navigation\");\r\n\r\n  const navigationItems = document.createElement(\"ul\");\r\n  navigationItems.setAttribute(\"class\", \"navigation__items\");\r\n\r\n  items.forEach((element, index) => {\r\n    const item = document.createElement(\"li\");\r\n    item.setAttribute(\"class\", \"navigation__items-item\");\r\n\r\n    if (\r\n      (selected == \"\" && index === 0) ||\r\n      selected.toUpperCase() === element.toUpperCase()\r\n    )\r\n      item.setAttribute(\"class\", \"navigation__items-item active\");\r\n\r\n    item.textContent = element;\r\n    navigationItems.appendChild(item);\r\n  });\r\n\r\n  if (items) {\r\n    navigationItems.childNodes.forEach((element) => {\r\n      element.addEventListener(\"click\", () => {\r\n        element.parentElement.childNodes.forEach((child) => {\r\n          if (child.classList.contains(\"active\"))\r\n            child.setAttribute(\"class\", \"navigation__items-item\");\r\n        });\r\n\r\n        element.classList.add(\"active\");\r\n      });\r\n    });\r\n  }\r\n\r\n  navigation.appendChild(navigationItems);\r\n\r\n  return navigation;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navigation);\r\n\n\n//# sourceURL=webpack://wpstore/./src/components/navigation.js?");

/***/ }),

/***/ "./src/components/product.js":
/*!***********************************!*\
  !*** ./src/components/product.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Product = (item) => {\r\n  console.log(item)\r\n  \r\n  const product = document.createElement(\"div\");\r\n  product.setAttribute(\"class\", \"product\");\r\n  product.setAttribute(\"id\", `${item.productID}`);\r\n\r\n  const productImage = document.createElement(\"div\");\r\n  productImage.setAttribute(\"class\", \"product__image\");\r\n\r\n  const image = document.createElement(\"img\");\r\n  // image.setAttribute(\"src\", \"https://picsum.photos/id/677/250\");\r\n  image.setAttribute(\"src\", `${item.productImage}`);\r\n  image.setAttribute(\"alt\", \"testing image\");\r\n\r\n  productImage.appendChild(image);\r\n\r\n  const productInfo = document.createElement(\"div\");\r\n  productInfo.setAttribute(\"class\", \"product__info\");\r\n\r\n  const infoTitle = document.createElement(\"span\");\r\n  infoTitle.setAttribute(\"class\", \"product__info-title\");\r\n  infoTitle.textContent = item.productName;\r\n\r\n  const infoDescription = document.createElement(\"p\");\r\n  infoDescription.setAttribute(\"class\", \"product__info-description\");\r\n  infoDescription.textContent = item.productDescription;\r\n\r\n  const infoPrice = document.createElement(\"p\");\r\n  infoPrice.setAttribute(\"class\", \"product__info-price\");\r\n  infoPrice.textContent = item.productPrice;\r\n\r\n  const infoButton = document.createElement(\"button\");\r\n  infoButton.setAttribute(\"class\", \"product__info-action\");\r\n  infoButton.setAttribute(\"type\", \"button\");\r\n  infoButton.textContent = \"ORDER NOW\";\r\n\r\n  const infoCategory = document.createElement(\"div\");\r\n\r\n  productInfo.appendChild(infoTitle);\r\n  infoTitle.insertAdjacentElement(\"afterend\", infoDescription);\r\n  infoDescription.insertAdjacentElement(\"afterend\", infoPrice);\r\n  infoPrice.insertAdjacentElement(\"afterend\", infoButton);\r\n\r\n  item.productCategory.forEach((element) => {\r\n    const category = document.createElement(\"span\");\r\n    category.setAttribute(\"class\", \"product__info-category\");\r\n    category.textContent = element;\r\n\r\n    infoCategory.appendChild(category);\r\n    // infoPrice.insertAdjacentElement('afterend', category)\r\n  });\r\n\r\n  infoPrice.insertAdjacentElement(\"afterend\", infoCategory);\r\n\r\n  product.appendChild(productImage);\r\n  productImage.insertAdjacentElement(\"afterend\", productInfo);\r\n\r\n  return product;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Product);\r\n\n\n//# sourceURL=webpack://wpstore/./src/components/product.js?");

/***/ }),

/***/ "./src/data/products.js":
/*!******************************!*\
  !*** ./src/data/products.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar products = \r\n    [ \r\n        {\r\n        'productID': 'md0001',\r\n        'productName': 'Fish Fillet',\r\n        'productDescription': 'A Fillet Fish fresh from the ocean',\r\n        'productPrice': 900,\r\n        'productImage': `https://picsum.photos/id/${Math.ceil(Math.random()*100)}/250`,\r\n        'productCategory': \r\n            [\r\n            'Main Course',\r\n            'Sides'\r\n            ],\r\n        },\r\n\r\n        {\r\n        'productID': 'md0002',\r\n        'productName': 'Swedish MeatBall',\r\n        'productDescription': 'A Fillet Fish fresh from the ocean',\r\n        'productPrice': 900,\r\n        'productImage': `https://picsum.photos/id/${Math.ceil(Math.random()*100)}/250`,\r\n        'productCategory': \r\n            [\r\n            'Main Course'\r\n            ],\r\n        },\r\n        {\r\n        'productID': 'md0003',\r\n        'productName': 'Swedish Pancake',\r\n        'productDescription': 'A Fillet Fish fresh from the ocean',\r\n        'productPrice': 900,\r\n        'productImage': `https://picsum.photos/id/${Math.ceil(Math.random()*100)}/250`,\r\n        'productCategory': \r\n            [\r\n            'Main Course',\r\n            'Drinks'\r\n            ],\r\n        },\r\n        {\r\n        'productID': 'md0004',\r\n        'productName': 'Odin\\'s Dinner',\r\n        'productDescription': 'Dine to the glorious meal of Odin himself!',\r\n        'productPrice': 900,\r\n        'productImage': `https://picsum.photos/id/${Math.ceil(Math.random()*100)}/250`,\r\n        'productCategory': \r\n            [\r\n            'Drinks'\r\n            ],\r\n        },\r\n        \r\n    ]\r\n;\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (products);\n\n//# sourceURL=webpack://wpstore/./src/data/products.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/header */ \"./src/components/header.js\");\n/* harmony import */ var _components_about_us__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/about-us */ \"./src/components/about-us.js\");\n/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/menu */ \"./src/components/menu.js\");\n/* harmony import */ var _components_header_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/header-navigation */ \"./src/components/header-navigation.js\");\n/* harmony import */ var _components_best_seller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/best-seller */ \"./src/components/best-seller.js\");\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/footer */ \"./src/components/footer.js\");\n/* harmony import */ var _components_contact__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/contact */ \"./src/components/contact.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst main = document.querySelector(\"#content\");\r\n\r\nconst container = document.createElement(\"div\");\r\ncontainer.classList.add(\"main__body\");\r\n\r\nconst headerNavigation = (0,_components_header_navigation__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n// main.insertAdjacentElement('beforebegin', Navigation(['Home', 'Menu', 'Contact']))\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n  main.appendChild(container);\r\n  main.insertAdjacentElement(\"afterbegin\", headerNavigation);\r\n  container.appendChild((0,_components_header__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\r\n  container.appendChild((0,_components_about_us__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\r\n  main.appendChild((0,_components_footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"])());\r\n\r\n  headerNavigation.childNodes[1].childNodes[0].childNodes.forEach((element) => {\r\n    element.addEventListener(\"click\", () => {\r\n      container.textContent = \"\";\r\n\r\n      switch (element.textContent.toUpperCase()) {\r\n        case \"HOME\":\r\n          container.appendChild((0,_components_header__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\r\n          container.appendChild((0,_components_about_us__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\r\n          break;\r\n        case \"MENU\":\r\n          container.appendChild((0,_components_header__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\r\n          container.appendChild((0,_components_best_seller__WEBPACK_IMPORTED_MODULE_4__[\"default\"])());\r\n          container.appendChild((0,_components_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\r\n          break;\r\n        case \"CONTACT\":\r\n          container.appendChild((0,_components_header__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\r\n          container.appendChild((0,_components_contact__WEBPACK_IMPORTED_MODULE_6__[\"default\"])());\r\n          break;\r\n      }\r\n    });\r\n  });\r\n});\r\n\r\n// main.innerHTML = \"HELLO\"\r\n\n\n//# sourceURL=webpack://wpstore/./src/index.js?");

/***/ }),

/***/ "./src/assets/NotFound.png":
/*!*********************************!*\
  !*** ./src/assets/NotFound.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1f01e73fb1a0213d1199.png\";\n\n//# sourceURL=webpack://wpstore/./src/assets/NotFound.png?");

/***/ }),

/***/ "./src/assets/aboutme1.jpg":
/*!*********************************!*\
  !*** ./src/assets/aboutme1.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8d3e2feb973a8d8823b9.jpg\";\n\n//# sourceURL=webpack://wpstore/./src/assets/aboutme1.jpg?");

/***/ }),

/***/ "./src/assets/aboutme2.webp":
/*!**********************************!*\
  !*** ./src/assets/aboutme2.webp ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7afc4213dd0647f0bbd6.webp\";\n\n//# sourceURL=webpack://wpstore/./src/assets/aboutme2.webp?");

/***/ }),

/***/ "./src/assets/aboutme3.jpg":
/*!*********************************!*\
  !*** ./src/assets/aboutme3.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bb887b715e7914b44153.jpg\";\n\n//# sourceURL=webpack://wpstore/./src/assets/aboutme3.jpg?");

/***/ }),

/***/ "./src/assets/aboutme4.jpg":
/*!*********************************!*\
  !*** ./src/assets/aboutme4.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"17f1a0a4baeebe5fdfba.jpg\";\n\n//# sourceURL=webpack://wpstore/./src/assets/aboutme4.jpg?");

/***/ }),

/***/ "./src/assets/header_bg.jpg":
/*!**********************************!*\
  !*** ./src/assets/header_bg.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c04f8bec248d4cd77c91.jpg\";\n\n//# sourceURL=webpack://wpstore/./src/assets/header_bg.jpg?");

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