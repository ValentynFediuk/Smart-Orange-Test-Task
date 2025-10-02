/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/styles.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/styles.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/decor-1.svg */ "./src/images/decor-1.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/clover.svg */ "./src/images/clover.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../images/pin.svg */ "./src/images/pin.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../images/card-bottom.svg */ "./src/images/card-bottom.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  box-sizing: border-box;
}

button {
  border: none;
}

h1, h2, h3, h4, h5, h6 {
  margin: 0;
  line-height: 120%;
}

p {
  margin: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

body {
  width: 100%;
  max-width: 100%;
  margin: 0;
  font-family: "Inter Tight", sans-serif;
  color: #000;
  background: #EFF3F5;
  line-height: 120%;
}

.container {
  max-width: 1830px;
  width: 100%;
  margin: 0 auto;
  padding-inline: 15px;
}

img {
  height: 100%;
  width: 100%;
  max-width: 100%;
}

.logo {
  position: absolute;
  top: 24px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 32px;
  font-weight: 500;
  text-align: center;
}

.header {
  position: relative;
}
.header__slider-slide {
  position: relative;
}
.header__slider-slide-image {
  position: absolute;
  top: 0;
  z-index: -1;
}
.header__slider-slide-title {
  margin: 0;
  padding-block: 190px;
  text-align: center;
  color: #EFF3F5;
  font-size: 98px;
  font-weight: 400;
  line-height: 1;
}

.custom-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 36px;
  cursor: pointer;
  z-index: 10;
  border-radius: 50%;
  transition: background 0.3s;
}
.custom-arrow:before {
  content: none;
}

.slick-prev.custom-arrow {
  left: 60px;
}

.slick-next.custom-arrow {
  right: 100px;
}

.decorative-line {
  position: absolute;
  bottom: 25px;
  margin-inline: 60px;
  left: 0;
  right: 0;
  background-color: #000;
  height: 1px;
}
.decorative-line:before, .decorative-line:after {
  content: "";
  position: absolute;
}
.decorative-line:before {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) no-repeat;
  width: 41px;
  top: -4px;
  height: 9px;
}
.decorative-line:after {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) no-repeat;
  width: 22px;
  height: 22px;
  top: -11px;
  right: -20px;
}
.decorative-line--footer {
  top: 0;
  margin-inline: 0;
  background-color: rgba(10, 15, 19, 0.2);
  margin-left: 60px;
  margin-right: 100px;
}
.decorative-line--footer:before {
  left: -60px;
}
.decorative-line--footer:after {
  color: #0A0F13;
  font-size: 14px;
  content: "Smarto";
  text-transform: uppercase;
  font-weight: 500;
  background-image: none;
  right: -60px;
  line-height: 1;
  top: -6px;
}

.portfolio {
  padding-block: 100px;
}
.portfolio__title {
  font-size: 48px;
  font-weight: 500;
  margin-bottom: 40px;
}
.portfolio__tabs {
  display: flex;
  gap: 60px;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 100px;
  cursor: pointer;
  overflow: scroll;
}
.portfolio__tabs-item--active {
  text-decoration: underline;
}
.portfolio__loading, .portfolio__empty, .portfolio__error {
  font-size: 18px;
  color: #737373;
  grid-column: 1/-1;
}
.portfolio__load-more {
  margin-top: 132px;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  text-transform: uppercase;
  border-bottom: 1px solid #000;
  background: transparent;
  padding: 0;
  cursor: pointer;
  font-weight: 600;
  transition: opacity 0.2s ease;
  display: block;
  margin-inline: auto;
}
.portfolio__load-more:disabled {
  opacity: 0.6;
  cursor: default;
}
.portfolio__spinner {
  width: 16px;
  height: 16px;
  border: 2px solid rgba(168, 168, 168, 0.2);
  border-top-color: #737373;
  border-radius: 50%;
  display: none;
  animation: spin 0.7s linear infinite;
}
.is-loading .portfolio__spinner {
  display: inline-block;
}

@keyframes spin {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
.contacts-social__list {
  display: flex;
  gap: 16px;
  align-items: center;
}
.contacts-social__list-item-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.contacts-social__list-item .contacts-social__icon {
  height: 40px;
  width: 40px;
}

.contacts-social__icon {
  width: 24px;
  height: 24px;
  display: block;
}

.footer__title {
  font-size: 64px;
  font-weight: 600;
  margin-bottom: 30px;
}

.contacts {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 84px;
}

.contacts-office__title,
.contacts-social__title,
.contacts-phones__title,
.contacts-email__title {
  font-size: 24px;
  margin-bottom: 23px;
}

.contacts-office__mail {
  display: block;
  font-weight: 500;
  margin-bottom: 42px;
}

.contacts-office__button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 14px;
  padding: 13px 20px;
  color: #EFF3F5;
  border: 1px solid #000;
  border-radius: 999px;
  font-weight: 600;
  background: #000;
}

.contacts-office__button:hover {
  background: #000;
  color: #EFF3F5;
  border-color: #000;
}

.contacts-office__button-icon {
  width: 18px;
  height: 18px;
  display: inline-block;
}

.contacts-phones__list {
  display: grid;
  gap: 8px;
}

.contacts-phones__item {
  display: flex;
  align-items: baseline;
  gap: 10px;
}

.contacts-phones__link {
  font-weight: 600;
}

.contacts-phones__note {
  color: #737373;
  font-size: 12px;
}

.contacts-email__link {
  font-weight: 500;
  font-size: 20px;
}

.footer__right {
  isolation: isolate;
  flex: 1;
}
.footer__right-images {
  position: relative;
}
.footer__right-images-image {
  max-width: 680px;
  height: auto;
  position: absolute;
  right: 0;
}
.footer__right-images-image:first-of-type {
  z-index: 2;
  right: 150px;
}
.footer__right-label {
  position: absolute;
  left: 77px;
  top: 80px;
  font-size: 96px;
  color: #503b27;
  z-index: 3;
  line-height: 1;
  mix-blend-mode: hard-light;
}
.footer__right-tag {
  position: absolute;
  right: 142px;
  bottom: -136px;
  font-size: 96px;
  color: white;
  z-index: 3;
  line-height: 1;
  mix-blend-mode: exclusion;
}

.footer {
  padding-block: 200px;
}
.footer__inner {
  display: flex;
  justify-content: space-between;
}
.footer__left {
  padding-top: 50px;
  position: relative;
  max-width: 880px;
  width: 100%;
}
.footer__right {
  position: relative;
  display: flex;
  justify-content: flex-end;
}

.portfolio__list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 160px;
}
.portfolio__card {
  max-width: 440px;
  width: 100%;
  border: 1px solid rgba(168, 168, 168, 0.2);
  border-bottom: none;
  position: relative;
}
.portfolio__card-inner {
  padding: 20px 12px;
}
.portfolio__card:before, .portfolio__card:after {
  content: "";
  position: absolute;
}
.portfolio__card:before {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) no-repeat;
  width: 50px;
  height: 52px;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
}
.portfolio__card:after {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_3___}) no-repeat;
  width: 100%;
  height: 41px;
  bottom: 0;
  transform: translateY(100%);
}
.portfolio__card-top {
  display: flex;
  justify-content: space-between;
  margin-bottom: 28px;
}
.portfolio__card-top-year {
  font-size: 20px;
  font-weight: 500;
}
.portfolio__card-top-type {
  line-height: 140%;
  text-transform: uppercase;
  font-weight: 500;
  padding: 4px 8px;
  border: 1px solid #A8A8A8;
  border-radius: 20px;
}
.portfolio__card-image {
  margin-bottom: 12px;
}
.portfolio__card-title {
  margin-bottom: 28px;
  font-size: 24px;
}
.portfolio__card-address {
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 28px;
}
.portfolio__card-tags-title {
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 9px;
  text-transform: uppercase;
}
.portfolio__card-tags-list {
  display: flex;
  flex-wrap: wrap;
  gap: 2px;
}
.portfolio__card-tags-list-item {
  font-size: 14px;
  border: 1px solid rgba(168, 168, 168, 0.2);
  border-radius: 20px;
  padding: 4px 8px;
  color: #737373;
  font-weight: 500;
  text-transform: uppercase;
}

.contacts-office__title {
  font-size: 24px;
  font-weight: 600;
}

@media (max-width: 1800px) {
  .footer__inner {
    justify-content: center;
  }
  .footer__left {
    max-width: 100%;
  }
  .footer__right {
    order: -1;
    display: none;
  }
}
@media (max-width: 1200px) {
  .portfolio__list {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 900px) {
  .footer__right-images-image {
    max-width: 380px;
  }
}
@media (max-width: 768px) {
  .header__slider-slide-title {
    font-size: 36px;
    padding-block: 150px;
  }
  .slick-prev, .slick-next {
    height: auto;
  }
  .slick-prev.custom-arrow {
    left: 30px;
  }
  .slick-next.custom-arrow {
    right: 60px;
  }
  .decorative-line {
    margin-inline: 30px;
  }
  .decorative-line:before {
    left: -15px;
  }
  .portfolio {
    padding-block: 50px;
  }
  .portfolio__title {
    font-size: 30px;
  }
  .portfolio__list {
    grid-template-columns: repeat(1, 1fr);
    gap: 80px;
  }
  .portfolio__tabs {
    margin-bottom: 50px;
  }
  .portfolio__card {
    margin-inline: auto;
  }
  .portfolio__card-title {
    font-size: 20px;
  }
  .portfolio__card-address {
    font-size: 16px;
    margin-bottom: 20px;
  }
  .portfolio__tabs-item {
    font-size: 16px;
  }
  .portfolio__load-more {
    margin-bottom: 60px;
  }
  .contacts {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
  }
  .footer {
    padding-block: 50px;
  }
  .footer__title {
    font-size: 44px;
  }
  .contacts-office__title, .contacts-social__title, .contacts-phones__title, .contacts-email__title {
    font-size: 24px;
  }
  .decorative-line--footer {
    margin-right: 120px;
    margin-left: 15px;
  }
}
@media (max-width: 400px) {
  .slick-prev.custom-arrow {
    left: 0px;
  }
  .slick-next.custom-arrow {
    right: 40px;
  }
}`, "",{"version":3,"sources":["webpack://./src/scss/styles.scss"],"names":[],"mappings":"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","sourcesContent":["// Main SCSS entrypoint.\n// Keep comments in English inside code.\n\n$black: #000;\n$white: #EFF3F5;\n$grey: #A8A8A8;\n$greyDark: #737373;\n$greyLight: rgba(168, 168, 168, 0.2);\n\n* {\n  box-sizing: border-box;\n}\n\nbutton {\n  border: none;\n}\n\nh1, h2, h3, h4, h5, h6 {\n  margin: 0;\n  line-height: 120%;\n}\n\np {\n  margin: 0;\n}\n\na {\n  color: inherit;\n  text-decoration: none;\n}\n\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  width: 100%;\n  max-width: 100%;\n  margin: 0;\n  font-family: \"Inter Tight\", sans-serif;\n  color: $black;\n  background: $white;\n  line-height: 120%;\n}\n\n.container {\n  max-width: 1830px;\n  width: 100%;\n  margin: 0 auto;\n  padding-inline: 15px;\n}\n\nimg {\n  height: 100%;\n  width: 100%;\n  max-width: 100%;\n}\n\n.logo {\n  position: absolute;\n  top: 24px;\n  left: 50%;\n  transform: translateX(-50%);\n  font-size: 32px;\n  font-weight: 500;\n  text-align: center;\n}\n\n.header {\n  position: relative;\n  \n  &__slider-slide {\n    position: relative;\n  }\n  \n  &__slider-slide-image {\n    position: absolute;\n    top: 0;\n    z-index: -1;\n  }\n  \n  &__slider-slide-title {\n    margin: 0;\n    padding-block: 190px;\n    text-align: center;\n    color: $white;\n    font-size: 98px;\n    font-weight: 400;\n    line-height: 1;\n  }\n}\n\n.custom-arrow {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #fff;\n  border: none;\n  padding: 10px 20px;\n  font-size: 36px;\n  cursor: pointer;\n  z-index: 10;\n  border-radius: 50%;\n  transition: background 0.3s;\n  \n  &:before {\n    content: none;\n  }\n}\n\n.slick-prev.custom-arrow {\n  left: 60px; // позиція лівої стрілки\n}\n\n.slick-next.custom-arrow {\n  right: 100px; // позиція правої стрілки\n}\n\n.decorative-line {\n  position: absolute;\n  bottom: 25px;\n  margin-inline: 60px;\n  left: 0;\n  right: 0;\n  background-color: $black;\n  height: 1px;\n  \n  &:before, &:after {\n    content: \"\";\n    position: absolute;\n  }\n  \n  &:before {\n    background: url('../images/decor-1.svg') no-repeat;\n    width: 41px;\n    top: -4px;\n    height: 9px;\n  }\n  \n  &:after {\n    background: url('../images/clover.svg') no-repeat;\n    width: 22px;\n    height: 22px;\n    top: -11px;\n    right: -20px;\n  }\n  \n  &--footer {\n    top: 0;\n    margin-inline: 0;\n    background-color: rgba(10, 15, 19, 0.2);\n    margin-left: 60px;\n    margin-right: 100px;\n    \n    &:before {\n      left: -60px;\n    }\n    \n    &:after {\n      color: #0A0F13;\n      font-size: 14px;\n      content: 'Smarto';\n      text-transform: uppercase;\n      font-weight: 500;\n      background-image: none;\n      right: -60px;\n      line-height: 1;\n      top: -6px;\n    }\n  }\n}\n\n.portfolio {\n  padding-block: 100px;\n  \n  &__title {\n    font-size: 48px;\n    font-weight: 500;\n    margin-bottom: 40px;\n  }\n  \n  &__tabs {\n    display: flex;\n    gap: 60px;\n    font-size: 24px;\n    font-weight: 600;\n    margin-bottom: 100px;\n    cursor: pointer;\n    overflow: scroll;\n  }\n  \n  &__tabs-item--active {\n    text-decoration: underline;\n  }\n  \n  &__loading,\n  &__empty,\n  &__error {\n    font-size: 18px;\n    color: $greyDark;\n    grid-column: 1/-1;\n  }\n  \n  &__load-more {\n    margin-top: 132px;\n    align-items: center;\n    gap: 10px;\n    font-size: 14px;\n    text-transform: uppercase;\n    border-bottom: 1px solid $black;\n    background: transparent;\n    padding: 0;\n    cursor: pointer;\n    font-weight: 600;\n    transition: opacity .2s ease;\n    display: block;\n    margin-inline: auto;\n    \n    &:disabled {\n      opacity: .6;\n      cursor: default;\n    }\n  }\n  \n  &__spinner {\n    width: 16px;\n    height: 16px;\n    border: 2px solid $greyLight;\n    border-top-color: $greyDark;\n    border-radius: 50%;\n    display: none;\n    animation: spin 0.7s linear infinite;\n  }\n  \n  .is-loading &__spinner {\n    display: inline-block;\n  }\n}\n\n@keyframes spin {\n  from {\n    transform: rotate(0);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n// Social icons\n.contacts-social {\n  &__list {\n    display: flex;\n    gap: 16px;\n    align-items: center;\n  }\n  \n  &__list-item-link {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n  }\n}\n\n.contacts-social__list-item {\n  .contacts-social__icon {\n    height: 40px;\n    width: 40px;\n  }\n}\n\n.contacts-social__icon {\n  width: 24px;\n  height: 24px;\n  display: block;\n}\n\n.footer__title {\n  font-size: 64px;\n  font-weight: 600;\n  margin-bottom: 30px;\n}\n\n.contacts {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 84px;\n}\n\n.contacts-office__title,\n.contacts-social__title,\n.contacts-phones__title,\n.contacts-email__title {\n  font-size: 24px;\n  margin-bottom: 23px;\n}\n\n.contacts-office__mail {\n  display: block;\n  font-weight: 500;\n  margin-bottom: 42px;\n}\n\n.contacts-office__button {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  font-size: 14px;\n  padding: 13px 20px;\n  color: $white;\n  border: 1px solid $black;\n  border-radius: 999px;\n  font-weight: 600;\n  background: $black;\n}\n\n.contacts-office__button:hover {\n  background: $black;\n  color: $white;\n  border-color: $black;\n}\n\n.contacts-office__button-icon {\n  width: 18px;\n  height: 18px;\n  display: inline-block;\n}\n\n.contacts-phones__list {\n  display: grid;\n  gap: 8px;\n}\n\n.contacts-phones__item {\n  display: flex;\n  align-items: baseline;\n  gap: 10px;\n}\n\n.contacts-phones__link {\n  font-weight: 600;\n}\n\n.contacts-phones__note {\n  color: $greyDark;\n  font-size: 12px;\n}\n\n.contacts-email__link {\n  font-weight: 500;\n  font-size: 20px;\n}\n\n.footer__right {\n  isolation: isolate;\n  flex: 1;\n  \n  &-images {\n    position: relative;\n  }\n  \n  &-images-image {\n    max-width: 680px;\n    height: auto;\n    position: absolute;\n    right: 0;\n    \n    &:first-of-type {\n      z-index: 2;\n      right: 150px;\n    }\n  }\n  \n  &-label {\n    position: absolute;\n    left: 77px;\n    top: 80px;\n    font-size: 96px;\n    color: #503b27;\n    z-index: 3;\n    line-height: 1;\n    mix-blend-mode: hard-light;\n  }\n  \n  &-tag {\n    position: absolute;\n    right: 142px;\n    bottom: -136px;\n    font-size: 96px;\n    color: white;\n    z-index: 3;\n    line-height: 1;\n    mix-blend-mode: exclusion;\n  }\n}\n\n.footer {\n  padding-block: 200px;\n  &__inner {\n    display: flex;\n    justify-content: space-between;\n  }\n  \n  &__left {\n    padding-top: 50px;\n    position: relative;\n    max-width: 880px;\n    width: 100%;\n  }\n  \n  &__right {\n    position: relative;\n    display: flex;\n    justify-content: flex-end;\n  }\n}\n\n.portfolio {\n  &__list {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-gap: 160px;\n  }\n  \n  &__card {\n    max-width: 440px;\n    width: 100%;\n    border: 1px solid $greyLight;\n    border-bottom: none;\n    position: relative;\n    \n    &-inner {\n      padding: 20px 12px;\n    }\n    \n    &:before, &:after {\n      content: \"\";\n      position: absolute;\n    }\n    \n    &:before {\n      background: url('../images/pin.svg') no-repeat;\n      width: 50px;\n      height: 52px;\n      top: 0;\n      left: 50%;\n      transform: translate(-50%, -50%);\n    }\n    \n    &:after {\n      background: url('../images/card-bottom.svg') no-repeat;\n      width: 100%;\n      height: 41px;\n      bottom: 0;\n      transform: translateY(100%);\n    }\n  }\n  \n  &__card-top {\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 28px;\n  }\n  \n  &__card-top-year {\n    font-size: 20px;\n    font-weight: 500;\n  }\n  \n  &__card-top-type {\n    line-height: 140%;\n    text-transform: uppercase;\n    font-weight: 500;\n    padding: 4px 8px;\n    border: 1px solid $grey;\n    border-radius: 20px;\n  }\n  \n  &__card-image {\n    margin-bottom: 12px;\n  }\n  \n  &__card-title {\n    margin-bottom: 28px;\n    font-size: 24px;\n  }\n  \n  &__card-address {\n    font-size: 20px;\n    font-weight: 500;\n    margin-bottom: 28px;\n  }\n  \n  &__card-tags-title {\n    font-size: 14px;\n    font-weight: 500;\n    margin-bottom: 9px;\n    text-transform: uppercase;\n  }\n  \n  &__card-tags-list {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 2px;\n  }\n  \n  &__card-tags-list-item {\n    font-size: 14px;\n    border: 1px solid $greyLight;\n    border-radius: 20px;\n    padding: 4px 8px;\n    color: $greyDark;\n    font-weight: 500;\n    text-transform: uppercase;\n  }\n}\n\n.contacts {\n  &-office__title {\n    font-size: 24px;\n    font-weight: 600;\n  }\n}\n\n@media (max-width: 1800px) {\n  .footer {\n    &__inner {\n      justify-content: center;\n    }\n    &__left {\n      max-width: 100%;\n    }\n    &__right {\n      order: -1;\n      display: none;\n    }\n  }\n}\n\n@media (max-width: 1200px) {\n  .portfolio {\n    &__list {\n      grid-template-columns: repeat(2, 1fr);\n    }\n  }\n}\n\n@media (max-width: 900px) {\n  .footer {\n    &__right-images-image {\n      max-width: 380px;\n    }\n  }\n}\n\n@media (max-width: 768px) {\n  .header {\n    &__slider-slide-title {\n      font-size: 36px;\n      padding-block: 150px;\n    }\n  }\n  \n  .slick-prev, .slick-next {\n    height: auto;\n  }\n  \n  .slick-prev.custom-arrow {\n    left: 30px; // позиція лівої стрілки\n  }\n  \n  .slick-next.custom-arrow {\n    right: 60px; // позиція правої стрілки\n  }\n  \n  .decorative-line {\n    margin-inline: 30px;\n    \n    &:before {\n      left: -15px;\n    }\n  }\n  .portfolio {\n    padding-block: 50px;\n    \n    &__title {\n      font-size: 30px;\n    }\n    \n    &__list {\n      grid-template-columns: repeat(1, 1fr);\n      gap: 80px;\n    }\n    \n    &__tabs {\n      margin-bottom: 50px;\n    }\n    \n    &__card {\n      margin-inline: auto;\n    }\n    \n    &__card-title {\n      font-size: 20px;\n    }\n    \n    &__card-address {\n      font-size: 16px;\n      margin-bottom: 20px;\n    }\n    \n    &__tabs-item {\n      font-size: 16px;\n    }\n    \n    &__load-more {\n      margin-bottom: 60px;\n    }\n  }\n  \n  .contacts {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 30px;\n  }\n  \n  .footer {\n    padding-block: 50px;\n    &__title {\n      font-size: 44px;\n    }\n  }\n  \n  .contacts-office__title, .contacts-social__title, .contacts-phones__title, .contacts-email__title {\n    font-size: 24px;\n  }\n  \n  .decorative-line {\n    &--footer {\n      margin-right: 120px;\n      margin-left: 15px;\n    }\n  }\n}\n\n@media (max-width: 400px) {\n  .slick-prev.custom-arrow {\n    left: 0px; // позиція лівої стрілки\n  }\n  \n  .slick-next.custom-arrow {\n    right: 40px; // позиція правої стрілки\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/images/card-bottom.svg":
/*!************************************!*\
  !*** ./src/images/card-bottom.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "26cbe41ab8a5583c4155.svg";

/***/ }),

/***/ "./src/images/clover.svg":
/*!*******************************!*\
  !*** ./src/images/clover.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "879bcd528687b529628a.svg";

/***/ }),

/***/ "./src/images/decor-1.svg":
/*!********************************!*\
  !*** ./src/images/decor-1.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ceb4852e0c11af3aa45e.svg";

/***/ }),

/***/ "./src/images/pin.svg":
/*!****************************!*\
  !*** ./src/images/pin.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a704b1c3b089e37a9fd7.svg";

/***/ }),

/***/ "./src/js/portfolio.js":
/*!*****************************!*\
  !*** ./src/js/portfolio.js ***!
  \*****************************/
/***/ (() => {

function _regeneratorKeys(e) { var n = Object(e), r = []; for (var t in n) r.unshift(t); return function e() { for (; r.length;) if ((t = r.pop()) in n) return e.value = t, e.done = !1, e; return e.done = !0, e; }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
/*
Fetch + render portfolio cards from a JSON endpoint (vanilla JS).
Adds tabs filtering, initial render of max 3 items, and a Load More button with spinner.
Comments are in English as requested.
*/

var API_URL = "https://test.smarto.agency/smarto_complexes_list.json" || 0;
var CONTAINER_SELECTOR = '#portfolio-list';
var TABS_SELECTOR = '.portfolio__tabs';
var FALLBACK_IMG = '/assets/images/mock.jpg'; // fallback if JSON has no image
var PAGE_SIZE = Number("3") || 3; // show max 3 at start and per page

// State
var ALL_ITEMS = [];
var currentFilter = 'Усі';
var visibleCount = PAGE_SIZE;
var isLoadingMore = false;
var loadMoreBtn = null;

// sanitize text by setting textContent (prevents html injection)
function createText(tag, text, className) {
  var el = document.createElement(tag);
  if (className) el.className = className;
  el.textContent = text !== null && text !== void 0 ? text : '';
  return el;
}

// create the tags list <ul> from an array of strings
function createTagsList() {
  var tags = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var wrapper = document.createElement('div');
  wrapper.className = 'portfolio__card-tags';
  var title = createText('h5', 'Види робіт:', 'portfolio__card-tags-title');
  wrapper.appendChild(title);
  var ul = document.createElement('ul');
  ul.className = 'portfolio__card-tags-list';

  // limit tags to reasonable number to avoid layout explosion
  var MAX_TAGS = 12;
  (Array.isArray(tags) ? tags.slice(0, MAX_TAGS) : []).forEach(function (tag) {
    var li = createText('li', tag, 'portfolio__card-tags-list-item');
    ul.appendChild(li);
  });
  wrapper.appendChild(ul);
  return wrapper;
}

// build single card DOM from item object
function buildCard(item) {
  // Item shape is unknown; try common field names and fallback sensibly.
  // English comments here; textual content set with textContent to avoid XSS.
  var year = item.year || item.date || item.top_year || '';
  var type = item.type || item.category || item.top_type || '';
  var imgSrc = item.image || item.img || item.picture || item.thumbnail || FALLBACK_IMG;
  var title = item.title || item.name || item.project || 'Без назви';
  var address = item.address || item.location || item.adress || '';
  var tags = item.tags || item.work_types || item.categories || [];

  // create elements
  var card = document.createElement('div');
  card.className = 'portfolio__card';
  var inner = document.createElement('div');
  inner.className = 'portfolio__card-inner';
  var top = document.createElement('div');
  top.className = 'portfolio__card-top';
  top.appendChild(createText('div', year ? "".concat(year) : '', 'portfolio__card-top-year'));
  top.appendChild(createText('div', type ? "".concat(type) : '', 'portfolio__card-top-type'));
  var img = document.createElement('img');
  img.className = 'portfolio__card-image';
  img.alt = title;
  img.src = imgSrc;
  img.loading = 'lazy';
  // if image fails to load, use fallback
  img.onerror = function () {
    img.onerror = null;
    img.src = FALLBACK_IMG;
  };
  var h4 = createText('h4', title, 'portfolio__card-title');
  var pAddr = createText('p', address, 'portfolio__card-address');
  inner.appendChild(top);
  inner.appendChild(img);
  inner.appendChild(h4);
  inner.appendChild(pAddr);
  inner.appendChild(createTagsList(tags));
  card.appendChild(inner);
  return card;
}
function matchesFilter(item, filterLabel) {
  if (!filterLabel || filterLabel === 'Усі') return true;
  var type = (item.type || item.category || item.top_type || '').toString().toLowerCase();
  var label = filterLabel.toString().toLowerCase();
  return type.includes(label);
}
function getFilteredItems() {
  return (ALL_ITEMS || []).filter(function (item) {
    return matchesFilter(item, currentFilter);
  });
}
function ensureLoadMoreButton(container) {
  if (loadMoreBtn) return loadMoreBtn;
  loadMoreBtn = document.createElement('button');
  loadMoreBtn.type = 'button';
  loadMoreBtn.className = 'portfolio__load-more';
  loadMoreBtn.innerHTML = "\n  <span class=\"portfolio__load-more-text\">\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 \u0449\u0435</span>\n  <svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M8 2.24988C7.58579 2.24988 7.25 2.58566 7.25 2.99988V11.0946L5.54883 9.26648C5.26667 8.96354 4.7924 8.94651 4.48926 9.22839C4.1861 9.51065 4.16892 9.98578 4.45117 10.2889L7.45117 13.5106L8 14.1005L8.54883 13.5106L11.5488 10.2889C11.8311 9.98578 11.8139 9.51065 11.5107 9.22839C11.2076 8.94651 10.7333 8.96354 10.4512 9.26648L8.75 11.0946V2.99988C8.75 2.58567 8.41421 2.24988 8 2.24988Z\" fill=\"#0A0F13\"/>\n</svg>\n  <span class=\"portfolio__spinner\" aria-hidden=\"true\"></span>\n  ";
  loadMoreBtn.addEventListener('click', /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          if (!isLoadingMore) {
            _context.n = 1;
            break;
          }
          return _context.a(2);
        case 1:
          isLoadingMore = true;
          loadMoreBtn.classList.add('is-loading');
          loadMoreBtn.disabled = true;

          // Simulate async delay for UX; could be used with server-side pagination in future.
          _context.n = 2;
          return new Promise(function (r) {
            return setTimeout(r, 700);
          });
        case 2:
          visibleCount += PAGE_SIZE;
          renderList(container);
          isLoadingMore = false;
          loadMoreBtn.classList.remove('is-loading');
          loadMoreBtn.disabled = false;
        case 3:
          return _context.a(2);
      }
    }, _callee);
  })));

  // insert after container
  container.parentNode.insertBefore(loadMoreBtn, container.nextSibling);
  return loadMoreBtn;
}
function renderList(container) {
  var items = getFilteredItems();
  container.innerHTML = '';
  var slice = items.slice(0, visibleCount);
  slice.forEach(function (item) {
    return container.appendChild(buildCard(item));
  });

  // handle empty
  if (slice.length === 0) {
    container.innerHTML = '<p class="portfolio__empty">Нічого не знайдено.</p>';
  }

  // load more button logic
  var btn = ensureLoadMoreButton(container);
  if (items.length > visibleCount) {
    btn.style.display = '';
  } else {
    btn.style.display = 'none';
  }
}
function setupTabs(container) {
  var tabsRoot = document.querySelector(TABS_SELECTOR);
  if (!tabsRoot) return;
  tabsRoot.addEventListener('click', function (e) {
    var li = e.target.closest('.portfolio__tabs-item');
    if (!li) return;

    // set active class
    tabsRoot.querySelectorAll('.portfolio__tabs-item').forEach(function (el) {
      return el.classList.remove('portfolio__tabs-item--active');
    });
    li.classList.add('portfolio__tabs-item--active');

    // update filter and reset visible count
    currentFilter = (li.textContent || '').trim();
    visibleCount = PAGE_SIZE;
    renderList(container);
  });
}
function getUniqueTypes() {
  var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var seen = new Set();
  var result = [];
  items.forEach(function (it) {
    var raw = (it.type || it.category || it.top_type || '').toString().trim();
    if (!raw) return;
    var key = raw.toLowerCase();
    if (!seen.has(key)) {
      seen.add(key);
      result.push(raw);
    }
  });
  return result;
}
function buildTabsFromItems() {
  var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var tabsRoot = document.querySelector(TABS_SELECTOR);
  if (!tabsRoot) return;
  var types = getUniqueTypes(items);
  // Always include 'Усі' first
  var labels = ['Усі'].concat(_toConsumableArray(types));

  // Rebuild list
  tabsRoot.innerHTML = '';
  labels.forEach(function (label, idx) {
    var li = document.createElement('li');
    li.className = 'portfolio__tabs-item' + (idx === 0 ? ' portfolio__tabs-item--active' : '');
    li.textContent = label;
    tabsRoot.appendChild(li);
  });
}

// main init
function initPortfolio() {
  return _initPortfolio.apply(this, arguments);
} // auto init
function _initPortfolio() {
  _initPortfolio = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
    var apiUrl,
      containerSelector,
      container,
      resp,
      data,
      items,
      k,
      _args2 = arguments,
      _t,
      _t2,
      _t3;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.p = _context2.n) {
        case 0:
          apiUrl = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : API_URL;
          containerSelector = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : CONTAINER_SELECTOR;
          container = document.querySelector(containerSelector);
          if (container) {
            _context2.n = 1;
            break;
          }
          console.error('Portfolio container not found:', containerSelector);
          return _context2.a(2);
        case 1:
          // initial loading state
          container.innerHTML = '<p class="portfolio__loading">Завантаження…</p>';
          _context2.p = 2;
          _context2.n = 3;
          return fetch(apiUrl, {
            cache: 'no-store'
          });
        case 3:
          resp = _context2.v;
          if (resp.ok) {
            _context2.n = 4;
            break;
          }
          throw new Error("HTTP ".concat(resp.status));
        case 4:
          _context2.n = 5;
          return resp.json();
        case 5:
          data = _context2.v;
          // attempt to extract an array from various possible shapes
          items = null;
          if (!Array.isArray(data)) {
            _context2.n = 6;
            break;
          }
          items = data;
          _context2.n = 14;
          break;
        case 6:
          if (!Array.isArray(data.data)) {
            _context2.n = 7;
            break;
          }
          items = data.data;
          _context2.n = 14;
          break;
        case 7:
          if (!Array.isArray(data.complexes)) {
            _context2.n = 8;
            break;
          }
          items = data.complexes;
          _context2.n = 14;
          break;
        case 8:
          if (!Array.isArray(data.items)) {
            _context2.n = 9;
            break;
          }
          items = data.items;
          _context2.n = 14;
          break;
        case 9:
          if (!Array.isArray(data.projects)) {
            _context2.n = 10;
            break;
          }
          items = data.projects;
          _context2.n = 14;
          break;
        case 10:
          if (!Array.isArray(data.list)) {
            _context2.n = 11;
            break;
          }
          items = data.list;
          _context2.n = 14;
          break;
        case 11:
          _t = _regeneratorKeys(data);
        case 12:
          if ((_t2 = _t()).done) {
            _context2.n = 14;
            break;
          }
          k = _t2.value;
          if (!Array.isArray(data[k])) {
            _context2.n = 13;
            break;
          }
          items = data[k];
          return _context2.a(3, 14);
        case 13:
          _context2.n = 12;
          break;
        case 14:
          ALL_ITEMS = Array.isArray(items) ? items : [];

          // build tabs based on item types and prepare UI
          buildTabsFromItems(ALL_ITEMS);
          setupTabs(container);

          // initial render
          currentFilter = 'Усі';
          visibleCount = PAGE_SIZE;
          renderList(container);
          _context2.n = 16;
          break;
        case 15:
          _context2.p = 15;
          _t3 = _context2.v;
          console.error('Failed to fetch/render portfolio:', _t3);
          container.innerHTML = "<p class=\"portfolio__error\">\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F \u0434\u0430\u043D\u0438\u0445: ".concat(_t3.message, "</p>");
        case 16:
          return _context2.a(2);
      }
    }, _callee2, null, [[2, 15]]);
  }));
  return _initPortfolio.apply(this, arguments);
}
initPortfolio();

/***/ }),

/***/ "./src/js/slider.js":
/*!**************************!*\
  !*** ./src/js/slider.js ***!
  \**************************/
/***/ (() => {

$(".header__slider").slick({
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: "\n  <button class=\"slick-prev custom-arrow\">\n<svg width=\"40\" height=\"24\" viewBox=\"0 0 40 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <!-- Main horizontal line -->\n  <line x1=\"38\" y1=\"12\" x2=\"2\" y2=\"12\" stroke=\"#EFF3F5\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n  <!-- Arrowhead -->\n  <line x1=\"12\" y1=\"4\" x2=\"2\" y2=\"12\" stroke=\"#EFF3F5\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n  <line x1=\"12\" y1=\"20\" x2=\"2\" y2=\"12\" stroke=\"#EFF3F5\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n</svg>\n\n  </button>\n",
  nextArrow: "\n  <button class=\"slick-next custom-arrow\">\n   <svg width=\"40\" height=\"24\" viewBox=\"0 0 40 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <!-- Main horizontal line -->\n  <line x1=\"2\" y1=\"12\" x2=\"38\" y2=\"12\" stroke=\"#EFF3F5\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n  <!-- Arrowhead -->\n  <line x1=\"28\" y1=\"4\" x2=\"38\" y2=\"12\" stroke=\"#EFF3F5\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n  <line x1=\"28\" y1=\"20\" x2=\"38\" y2=\"12\" stroke=\"#EFF3F5\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n</svg>\n  </button>\n"
});

/***/ }),

/***/ "./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/styles.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/assets/js/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/styles.scss */ "./src/scss/styles.scss");
/* harmony import */ var _portfolio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./portfolio */ "./src/js/portfolio.js");
/* harmony import */ var _portfolio__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_portfolio__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slider */ "./src/js/slider.js");
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_slider__WEBPACK_IMPORTED_MODULE_2__);
// Main JS entrypoint.
// Use modern JS, transpiled by Babel for older browsers.




})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map