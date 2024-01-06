(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_register_businesstype_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/businesstype.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/businesstype.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _admin_components_lib_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../admin/components/lib/api */ "./resources/js/views/admin/components/lib/api.js");
/* harmony import */ var _form3_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form3.vue */ "./resources/js/views/register/form3.vue");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Borders",
  props: {
    userId: {
      type: Number,
      required: true
    }
  },
  components: {
    Country: _form3_vue__WEBPACK_IMPORTED_MODULE_1__.default
  },
  data: function data() {
    var _ref;

    return _ref = {
      count: false,
      showw: true,
      method: 'POST',
      form: {
        company: '',
        id: ''
      }
    }, _defineProperty(_ref, "method", 'POST'), _defineProperty(_ref, "bgColor1", 'white'), _defineProperty(_ref, "bgColor2", 'white'), _defineProperty(_ref, "bgColor3", 'white'), _defineProperty(_ref, "bgColor4", 'white'), _defineProperty(_ref, "bgColor5", 'white'), _defineProperty(_ref, "bgColor6", 'white'), _defineProperty(_ref, "bgColor7", 'white'), _defineProperty(_ref, "bgColor8", 'white'), _ref;
  },
  methods: {
    datas: function datas(e, num) {
      this.company_type = e;
      console.log(this.company_type);

      if (num == 1) {
        this.bgColor1 = '#F96';
        this.bgColor2 = 'white';
        this.bgColor3 = 'white';
        this.bgColor4 = 'white';
        this.bgColor5 = 'white';
        this.bgColor6 = 'white';
        this.bgColor7 = 'white';
        this.bgColor8 = 'white';
      }

      if (num == 2) {
        this.bgColor1 = 'white';
        this.bgColor2 = '#F96';
        this.bgColor3 = 'white';
        this.bgColor4 = 'white';
        this.bgColor5 = 'white';
        this.bgColor6 = 'white';
        this.bgColor7 = 'white';
        this.bgColor8 = 'white';
      }

      if (num == 3) {
        this.bgColor1 = 'white';
        this.bgColor2 = 'white';
        this.bgColor3 = '#F96';
        this.bgColor4 = 'white';
        this.bgColor5 = 'white';
        this.bgColor6 = 'white';
        this.bgColor7 = 'white';
        this.bgColor8 = 'white';
      }

      if (num == 4) {
        this.bgColor1 = 'white';
        this.bgColor2 = 'white';
        this.bgColor3 = 'white';
        this.bgColor4 = '#F96';
        this.bgColor5 = 'white';
        this.bgColor6 = 'white';
        this.bgColor7 = 'white';
        this.bgColor8 = 'white';
      }

      if (num == 5) {
        this.bgColor1 = 'white';
        this.bgColor2 = 'white';
        this.bgColor3 = 'white';
        this.bgColor4 = 'white';
        this.bgColor5 = '#F96';
        this.bgColor6 = 'white';
        this.bgColor7 = 'white';
        this.bgColor8 = 'white';
      }

      if (num == 6) {
        this.bgColor1 = 'white';
        this.bgColor2 = 'white';
        this.bgColor3 = 'white';
        this.bgColor4 = 'white';
        this.bgColor5 = 'white';
        this.bgColor6 = '#F96';
        this.bgColor7 = 'white';
        this.bgColor8 = 'white';
      }

      if (num == 7) {
        this.bgColor1 = 'white';
        this.bgColor2 = 'white';
        this.bgColor3 = 'white';
        this.bgColor4 = 'white';
        this.bgColor5 = 'white';
        this.bgColor6 = 'white';
        this.bgColor7 = '#F96';
        this.bgColor8 = 'white';
      }

      if (num == 8) {
        this.bgColor1 = 'white';
        this.bgColor2 = 'white';
        this.bgColor3 = 'white';
        this.bgColor4 = 'white';
        this.bgColor5 = 'white';
        this.bgColor6 = 'white';
        this.bgColor7 = 'white';
        this.bgColor8 = '#F96';
      }
    },
    closeModal: function closeModal() {
      console.log('avcd');
      this.showw = false;
      $('#popup-box').modal('hide');
    },
    save: function save() {
      var _this = this;

      this.form.userId = this.userId;
      this.form.businesstype = this.company_type;
      (0,_admin_components_lib_api__WEBPACK_IMPORTED_MODULE_0__.byMethod)(this.method, 'businesstype', this.form).then(function (res) {
        if (res.data.data) {
          // console.log(res.data.data.id)
          _this.user_id = res.data.data.user_id;
          _this.showw = false;
          _this.count = true; // this.$router.push(`/register/company/${this.company_id}`);
        }
      })["catch"](function (error) {
        if (error.response.status === 422) {
          _this.errors = error.response.data.errors;
        }

        _this.isProcessing = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/form3.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/form3.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _admin_components_lib_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../admin/components/lib/api */ "./resources/js/views/admin/components/lib/api.js");
/* harmony import */ var _formz_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formz.vue */ "./resources/js/views/register/formz.vue");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Borders",
  components: {
    Final: _formz_vue__WEBPACK_IMPORTED_MODULE_1__.default
  },
  props: {
    userId: {
      type: Number,
      required: true
    }
  },
  data: function data() {
    var _ref;

    return _ref = {
      sho: true,
      fin: false,
      method: 'POST',
      form: {}
    }, _defineProperty(_ref, "method", 'POST'), _defineProperty(_ref, "bgColor1", 'white'), _defineProperty(_ref, "bgColor2", 'white'), _defineProperty(_ref, "bgColor3", 'white'), _defineProperty(_ref, "bgColor4", 'white'), _defineProperty(_ref, "bgColor5", 'white'), _defineProperty(_ref, "bgColor6", 'white'), _defineProperty(_ref, "bgColor7", 'white'), _defineProperty(_ref, "bgColor8", 'white'), _ref;
  },
  methods: {
    datas: function datas(e, num) {
      this.company_type = e;
      console.log(this.company_type);

      if (num == 1) {
        this.bgColor1 = '#F96';
        this.bgColor2 = 'white';
        this.bgColor3 = 'white';
        this.bgColor4 = 'white';
        this.bgColor5 = 'white';
        this.bgColor6 = 'white';
        this.bgColor7 = 'white';
        this.bgColor8 = 'white';
      }

      if (num == 2) {
        this.bgColor1 = 'white';
        this.bgColor2 = '#F96';
        this.bgColor3 = 'white';
        this.bgColor4 = 'white';
        this.bgColor5 = 'white';
        this.bgColor6 = 'white';
        this.bgColor7 = 'white';
        this.bgColor8 = 'white';
      }

      if (num == 3) {
        this.bgColor1 = 'white';
        this.bgColor2 = 'white';
        this.bgColor3 = '#F96';
        this.bgColor4 = 'white';
        this.bgColor5 = 'white';
        this.bgColor6 = 'white';
        this.bgColor7 = 'white';
        this.bgColor8 = 'white';
      }

      if (num == 4) {
        this.bgColor1 = 'white';
        this.bgColor2 = 'white';
        this.bgColor3 = 'white';
        this.bgColor4 = '#F96';
        this.bgColor5 = 'white';
        this.bgColor6 = 'white';
        this.bgColor7 = 'white';
        this.bgColor8 = 'white';
      }

      if (num == 5) {
        this.bgColor1 = 'white';
        this.bgColor2 = 'white';
        this.bgColor3 = 'white';
        this.bgColor4 = 'white';
        this.bgColor5 = '#F96';
        this.bgColor6 = 'white';
        this.bgColor7 = 'white';
        this.bgColor8 = 'white';
      }

      if (num == 6) {
        this.bgColor1 = 'white';
        this.bgColor2 = 'white';
        this.bgColor3 = 'white';
        this.bgColor4 = 'white';
        this.bgColor5 = 'white';
        this.bgColor6 = '#F96';
        this.bgColor7 = 'white';
        this.bgColor8 = 'white';
      }

      if (num == 7) {
        this.bgColor1 = 'white';
        this.bgColor2 = 'white';
        this.bgColor3 = 'white';
        this.bgColor4 = 'white';
        this.bgColor5 = 'white';
        this.bgColor6 = 'white';
        this.bgColor7 = '#F96';
        this.bgColor8 = 'white';
      }

      if (num == 8) {
        this.bgColor1 = 'white';
        this.bgColor2 = 'white';
        this.bgColor3 = 'white';
        this.bgColor4 = 'white';
        this.bgColor5 = 'white';
        this.bgColor6 = 'white';
        this.bgColor7 = 'white';
        this.bgColor8 = '#F96';
      }
    },
    closeModal: function closeModal() {
      console.log('avcdssss');
      this.showw = false;
      $('#popup-box').modal('hide');
      window.location.reload();
    },
    save: function save() {
      var _this = this;

      this.form.userId = this.userId;
      this.form.country = this.company_type;
      (0,_admin_components_lib_api__WEBPACK_IMPORTED_MODULE_0__.byMethod)(this.method, 'country', this.form).then(function (res) {
        if (res.data.data) {
          // console.log(res.data.data.id)
          _this.user_id = res.data.data.user_id;
          _this.sho = false;
          _this.fin = true; // this.$router.push(`/register/company/${this.company_id}`);
        }
      })["catch"](function (error) {
        if (error.response.status === 422) {
          _this.errors = error.response.data.errors;
        }

        _this.isProcessing = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/formz.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/formz.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Form"
});

/***/ }),

/***/ "./resources/js/views/admin/components/lib/api.js":
/*!********************************************************!*\
  !*** ./resources/js/views/admin/components/lib/api.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "get": () => (/* binding */ get),
/* harmony export */   "byMethod": () => (/* binding */ byMethod)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

function get(url, params) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default()({
    method: 'GET',
    url: url,
    params: params
  });
}
function byMethod(method, url, data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default()({
    method: method,
    url: url,
    data: data
  });
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/businesstype.vue?vue&type=style&index=0&id=0b01a477&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/businesstype.vue?vue&type=style&index=0&id=0b01a477&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n*[data-v-0b01a477]{\n        padding: 0;\n        margin: 0;\n        box-sizing: border-box;\n}\nsection.form-1-sec[data-v-0b01a477] {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n.main-form[data-v-0b01a477] {\n    width: 100% !important;\n    height: 900px;\n    border-radius: 50px;\n    background-image: url(/images/Up.png);\n    position: relative;\n    display: flex;\n    justify-content: space-between;\n    flex-wrap: wrap;\n    gap:40px 0px;\n}\n.form-img[data-v-0b01a477] {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.form-titel[data-v-0b01a477] {\n    width: 30%;\n    display: flex;\n    justify-content: flex-end;\n}\n.form-img img[data-v-0b01a477] {\n    width: 19%;\n}\n.form-titel h2[data-v-0b01a477] {\n    color: #1C1D1E;\n    font-family: sans-serif;\n    font-size: 32px;\n    font-style: normal;\n    font-weight: 800;\n    line-height: normal;\n}\n.form-box[data-v-0b01a477] {\n    width: 66%;\n}\nform.form-1[data-v-0b01a477] {\n    width: 64%;\n    height: 703px;\n    flex-shrink: 0;\n    border-radius: 40px;\n    background: #FFF;\n    box-shadow: 0px 4px 35px 0px rgba(0, 0, 0, 0.08);\n    z-index: 1;\n    position: relative;\n    padding: 45px 40px;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: center;\n}\n.form-box img[data-v-0b01a477] {\n    position: absolute;\n    left: 205px;\n    bottom: 0px;\n}\nbutton.form-btn[data-v-0b01a477] {\n    width: 100%;\n    display: flex;\n    height: 44px;\n    padding: 10px 0px;\n    justify-content: center;\n    align-items: center;\n    gap: 7.647px;\n    flex-shrink: 0;\n    border-radius: 6px;\n    border: 1px solid #000;\n    background: #F96;\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\n}\nbutton.form-btn p[data-v-0b01a477] {color: #FFF;text-align: center;font-family: DM Sans;font-size: 16px;font-style: normal;font-weight: 700;line-height: 24px; /* 150% */}\na.form-last[data-v-0b01a477] {\n    width: 60%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-decoration: none;\n    gap: 14px;\n    padding-top:30px;\n}\na.form-last p[data-v-0b01a477] {\n    color: #000;\n    font-family: Anton;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: normal;\n}\n.input-group-2[data-v-0b01a477] {\n    border-radius: 6px;\n    border: 1px solid #000;\n    background: #FFF;\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\n    display: flex;\n    padding: 11px 0px 9px 0px;\n    justify-content: center;\n    align-items: center;\n    width: 92%;\n}\n.input-group-2 h2[data-v-0b01a477] {\n    color: #000;\n    text-align: center;\n    font-size: 18px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: 24px; /* 150% */\n    font-family: sans-serif;\n}\n@media screen and (max-width: 1600px){\n.main-form[data-v-0b01a477] {\n    width: 100%;\n    height: 785px;\n    border-radius: 50px;\n    background-image: url(/images/Up.png);\n    position: relative;\n    display: flex;\n    justify-content: space-between;\n    flex-wrap: wrap;\n    gap: 40px 0px;\n    background-position: center;\n    background-size: cover;\n    background-repeat: no-repeat;\n}\nform.form-1[data-v-0b01a477] {\n    width: 65%;\n    height: 600px;\n    flex-shrink: 0;\n    border-radius: 30px;\n    background: #FFF;\n    box-shadow: 0px 4px 35px 0px rgba(0, 0, 0, 0.08);\n    z-index: 1;\n    position: relative;\n    padding:30px;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: center;\n}\na.form-last[data-v-0b01a477] {\n    width: 60%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-decoration: none;\n    gap: 14px;\n    padding-top: 20px;\n}\n.form-box img[data-v-0b01a477] {\n    position: absolute;\n    left: 154px;\n    bottom: 0px;\n    width: 33%;\n}\n}\n@media screen and (max-width: 1440px){\n.main-form[data-v-0b01a477] {\n    width: 100%;\n    height: 650px;\n    border-radius: 50px;\n    background-image: url(/images/Up.png);\n    position: relative;\n    display: flex;\n    justify-content: space-between;\n    flex-wrap: wrap;\n    gap: 30px 0px;\n    background-position: center;\n    background-size: cover;\n    background-repeat: no-repeat;\n}\nform.form-1[data-v-0b01a477] {\n    width: 63%;\n    height: 510px;\n    flex-shrink: 0;\n    border-radius: 29px;\n    background: #FFF;\n    box-shadow: 0px 4px 35px 0px rgba(0, 0, 0, 0.08);\n    z-index: 1;\n    position: relative;\n    padding: 20px;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: center;\n}\n.input-group-2[data-v-0b01a477] {\n    border-radius: 6px;\n    border: 1px solid #000;\n    background: #FFF;\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\n    display: flex;\n    padding: 9px 0px 8px 0px;\n    justify-content: center;\n    align-items: center;\n    width: 92%;\n}\n.input-group-2 h2[data-v-0b01a477] {\n    color: #000;\n    text-align: center;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: 20px;\n    font-family: sans-serif;\n}\nbutton.form-btn[data-v-0b01a477] {\n    width: 100%;\n    display: flex;\n    height: 40px;\n    padding: 8px 0px;\n    justify-content: center;\n    align-items: center;\n    gap: 7.647px;\n    flex-shrink: 0;\n    border-radius: 6px;\n    border: 1px solid #000;\n    background: #F96;\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\n}\n.form-box img[data-v-0b01a477] {\n    position: absolute;\n    left: 145px;\n    bottom: 0px;\n    width: 30%;\n}\n}\n@media screen and (max-width: 1366px){\n.main-form[data-v-0b01a477] {\n    width: 100%;\n    height: 560px;\n    border-radius: 50px;\n    background-image: url(/images/Up.png);\n    position: relative;\n    display: flex;\n    justify-content: space-between;\n    flex-wrap: wrap;\n    gap: 30px 0px;\n    background-position: center;\n    background-size: cover;\n    background-repeat: no-repeat;\n}\n.form-box img[data-v-0b01a477] {\n    position: absolute;\n    left: 160px;\n    bottom: 0px;\n    width: 27%;\n}\nform.form-1[data-v-0b01a477] {\n    width: 63%;\n    height: 420px;\n    flex-shrink: 0;\n    border-radius: 30px;\n    background: #FFF;\n    box-shadow: 0px 4px 35px 0px rgba(0, 0, 0, 0.08);\n    z-index: 1;\n    position: relative;\n    padding: 20px;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: center;\n}\na.form-last[data-v-0b01a477] {\n    width: 60%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-decoration: none;\n    gap: 14px;\n    padding-top: 15px;\n}\n.input-group-2[data-v-0b01a477] {\n    border-radius: 6px;\n    border: 1px solid #000;\n    background: #FFF;\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\n    display: flex;\n    padding: 10px 0px 10px 0px;\n    justify-content: center;\n    align-items: center;\n    width: 92%;\n}\n.input-group-2 h2[data-v-0b01a477] {\n    color: #000;\n    text-align: center;\n    font-size: 12px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: 12px;\n    font-family: sans-serif;\n}\nbutton.form-btn[data-v-0b01a477] {\n    width: 100%;\n    display: flex;\n    height: 34px;\n    padding: 8px 0px;\n    justify-content: center;\n    align-items: center;\n    gap: 7.647px;\n    flex-shrink: 0;\n    border-radius: 6px;\n    border: 1px solid #000;\n    background: #F96;\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\n}\nbutton.form-btn p[data-v-0b01a477] {\n    color: #FFF;\n    text-align: center;\n    font-family: DM Sans;\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: 24px;\n}\na.form-last svg[data-v-0b01a477] {\n    width: 20px;\n    height: 20px;\n}\na.form-last p[data-v-0b01a477] {\n    color: #000;\n    font-family: Anton;\n    font-size: 12px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: normal;\n}\na.form-last[data-v-0b01a477] {\n    width: 60%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-decoration: none;\n    gap: 10px;\n    padding-top: 15px;\n}\n}\n@media screen and (max-width: 768px){\n.main-form[data-v-0b01a477] {\n    width: 100%;\n    height: 100%;\n    border-radius: 25px;\n    background-image: url(/images/Up.png);\n    position: relative;\n    display: flex;\n    justify-content: space-between;\n    flex-wrap: wrap;\n    gap: 30px 0px;\n    background-position: center;\n    background-size: cover;\n    background-repeat: no-repeat;\n    padding-top: 15px;\n}\nform.form-1[data-v-0b01a477] {\n    width: 68%;\n    height: 420px;\n    flex-shrink: 0;\n    border-radius: 24px;\n    background: #FFF;\n    box-shadow: 0px 4px 35px 0px rgba(0, 0, 0, 0.08);\n    z-index: 1;\n    position: relative;\n    padding: 20px;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: center;\n}\n.form-titel h2[data-v-0b01a477] {\n    color: #1C1D1E;\n    font-family: sans-serif;\n    font-size: 24px;\n    font-style: normal;\n    font-weight: 800;\n    line-height: normal;\n}\n.form-box img[data-v-0b01a477] {\n    position: absolute;\n    left: 90px;\n    bottom: 0px;\n    width: 35%;\n}\n}\n@media screen and (max-width: 425px){\n.form-titel[data-v-0b01a477] {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.form-box[data-v-0b01a477] {\n    width: 100%;\n    padding: 0px 20px;\n}\n.form-box img[data-v-0b01a477] {\n    position: absolute;\n    left: 90px;\n    bottom: 0px;\n    width: 35%;\n    display: none;\n}\nform.form-1[data-v-0b01a477] {\n    width: 100%;\n    height: 420px;\n    flex-shrink: 0;\n    border-radius: 24px;\n    background: #FFF;\n    box-shadow: 0px 4px 35px 0px rgba(0, 0, 0, 0.08);\n    z-index: 1;\n    position: relative;\n    padding: 20px;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: center;\n}\na.form-last[data-v-0b01a477] {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-decoration: none;\n    gap: 10px;\n    padding-top: 15px;\n}\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/form3.vue?vue&type=style&index=0&id=1595f27c&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/form3.vue?vue&type=style&index=0&id=1595f27c&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n*[data-v-1595f27c]{\n        padding: 0;\n        margin: 0;\n        box-sizing: border-box;\n}\nsection.form-1-sec[data-v-1595f27c] {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n.main-form[data-v-1595f27c] {\n    width: 100% !important;\n    height: 900px;\n    border-radius: 50px;\n    background-image: url(/images/Up.png);\n    position: relative;\n    display: flex;\n    justify-content: space-between;\n    flex-wrap: wrap;\n    gap:40px 0px;\n}\n.form-img[data-v-1595f27c] {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.form-titel[data-v-1595f27c] {\n    width: 30%;\n    display: flex;\n    justify-content: flex-end;\n}\n.form-img img[data-v-1595f27c] {\n    width: 19%;\n}\n.form-titel h2[data-v-1595f27c] {\n    color: #1C1D1E;\n    font-family: sans-serif;\n    font-size: 32px;\n    font-style: normal;\n    font-weight: 800;\n    line-height: normal;\n}\n.form-box[data-v-1595f27c] {\n    width: 66%;\n}\nform.form-1[data-v-1595f27c] {\n    width: 64%;\n    height: 703px;\n    flex-shrink: 0;\n    border-radius: 40px;\n    background: #FFF;\n    box-shadow: 0px 4px 35px 0px rgba(0, 0, 0, 0.08);\n    z-index: 1;\n    position: relative;\n    padding: 45px 40px;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: center;\n}\n.form-box img[data-v-1595f27c] {\n    position: absolute;\n    left: 205px;\n    bottom: 0px;\n}\nbutton.form-btn[data-v-1595f27c] {\n    width: 100%;\n    display: flex;\n    height: 44px;\n    padding: 10px 0px;\n    justify-content: center;\n    align-items: center;\n    gap: 7.647px;\n    flex-shrink: 0;\n    border-radius: 6px;\n    border: 1px solid #000;\n    background: #F96;\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\n}\nbutton.form-btn p[data-v-1595f27c] {color: #FFF;text-align: center;font-family: DM Sans;font-size: 16px;font-style: normal;font-weight: 700;line-height: 24px; /* 150% */}\na.form-last[data-v-1595f27c] {\n    width: 60%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-decoration: none;\n    gap: 14px;\n    padding-top:30px;\n}\na.form-last p[data-v-1595f27c] {\n    color: #000;\n    font-family: Anton;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: normal;\n}\n.input-group-2[data-v-1595f27c] {\n    border-radius: 6px;\n    border: 1px solid #000;\n    background: #FFF;\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\n    display: flex;\n    padding: 11px 0px 9px 0px;\n    justify-content: center;\n    align-items: center;\n    width: 92%;\n}\n.input-group-2 h2[data-v-1595f27c] {\n    color: #000;\n    text-align: center;\n    font-size: 18px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: 24px; /* 150% */\n    font-family: sans-serif;\n}\n@media screen and (max-width: 1600px){\n.main-form[data-v-1595f27c] {\n    width: 100%;\n    height: 785px;\n    border-radius: 50px;\n    background-image: url(/images/Up.png);\n    position: relative;\n    display: flex;\n    justify-content: space-between;\n    flex-wrap: wrap;\n    gap: 40px 0px;\n    background-position: center;\n    background-size: cover;\n    background-repeat: no-repeat;\n}\nform.form-1[data-v-1595f27c] {\n    width: 65%;\n    height: 600px;\n    flex-shrink: 0;\n    border-radius: 30px;\n    background: #FFF;\n    box-shadow: 0px 4px 35px 0px rgba(0, 0, 0, 0.08);\n    z-index: 1;\n    position: relative;\n    padding:30px;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: center;\n}\na.form-last[data-v-1595f27c] {\n    width: 60%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-decoration: none;\n    gap: 14px;\n    padding-top: 20px;\n}\n.form-box img[data-v-1595f27c] {\n    position: absolute;\n    left: 154px;\n    bottom: 0px;\n    width: 33%;\n}\n}\n@media screen and (max-width: 1440px){\n.main-form[data-v-1595f27c] {\n    width: 100%;\n    height: 650px;\n    border-radius: 50px;\n    background-image: url(/images/Up.png);\n    position: relative;\n    display: flex;\n    justify-content: space-between;\n    flex-wrap: wrap;\n    gap: 30px 0px;\n    background-position: center;\n    background-size: cover;\n    background-repeat: no-repeat;\n}\nform.form-1[data-v-1595f27c] {\n    width: 63%;\n    height: 510px;\n    flex-shrink: 0;\n    border-radius: 29px;\n    background: #FFF;\n    box-shadow: 0px 4px 35px 0px rgba(0, 0, 0, 0.08);\n    z-index: 1;\n    position: relative;\n    padding: 20px;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: center;\n}\n.input-group-2[data-v-1595f27c] {\n    border-radius: 6px;\n    border: 1px solid #000;\n    background: #FFF;\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\n    display: flex;\n    padding: 9px 0px 8px 0px;\n    justify-content: center;\n    align-items: center;\n    width: 92%;\n}\n.input-group-2 h2[data-v-1595f27c] {\n    color: #000;\n    text-align: center;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: 20px;\n    font-family: sans-serif;\n}\nbutton.form-btn[data-v-1595f27c] {\n    width: 100%;\n    display: flex;\n    height: 40px;\n    padding: 8px 0px;\n    justify-content: center;\n    align-items: center;\n    gap: 7.647px;\n    flex-shrink: 0;\n    border-radius: 6px;\n    border: 1px solid #000;\n    background: #F96;\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\n}\n.form-box img[data-v-1595f27c] {\n    position: absolute;\n    left: 145px;\n    bottom: 0px;\n    width: 30%;\n}\n}\n@media screen and (max-width: 1366px){\n.main-form[data-v-1595f27c] {\n    width: 100%;\n    height: 560px;\n    border-radius: 50px;\n    background-image: url(/images/Up.png);\n    position: relative;\n    display: flex;\n    justify-content: space-between;\n    flex-wrap: wrap;\n    gap: 30px 0px;\n    background-position: center;\n    background-size: cover;\n    background-repeat: no-repeat;\n}\n.form-box img[data-v-1595f27c] {\n    position: absolute;\n    left: 160px;\n    bottom: 0px;\n    width: 27%;\n}\nform.form-1[data-v-1595f27c] {\n    width: 63%;\n    height: 420px;\n    flex-shrink: 0;\n    border-radius: 30px;\n    background: #FFF;\n    box-shadow: 0px 4px 35px 0px rgba(0, 0, 0, 0.08);\n    z-index: 1;\n    position: relative;\n    padding: 20px;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: center;\n}\na.form-last[data-v-1595f27c] {\n    width: 60%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-decoration: none;\n    gap: 14px;\n    padding-top: 15px;\n}\n.input-group-2[data-v-1595f27c] {\n    border-radius: 6px;\n    border: 1px solid #000;\n    background: #FFF;\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\n    display: flex;\n    padding: 10px 0px 10px 0px;\n    justify-content: center;\n    align-items: center;\n    width: 92%;\n}\n.input-group-2 h2[data-v-1595f27c] {\n    color: #000;\n    text-align: center;\n    font-size: 12px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: 12px;\n    font-family: sans-serif;\n}\nbutton.form-btn[data-v-1595f27c] {\n    width: 100%;\n    display: flex;\n    height: 34px;\n    padding: 8px 0px;\n    justify-content: center;\n    align-items: center;\n    gap: 7.647px;\n    flex-shrink: 0;\n    border-radius: 6px;\n    border: 1px solid #000;\n    background: #F96;\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\n}\nbutton.form-btn p[data-v-1595f27c] {\n    color: #FFF;\n    text-align: center;\n    font-family: DM Sans;\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: 24px;\n}\na.form-last svg[data-v-1595f27c] {\n    width: 20px;\n    height: 20px;\n}\na.form-last p[data-v-1595f27c] {\n    color: #000;\n    font-family: Anton;\n    font-size: 12px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: normal;\n}\na.form-last[data-v-1595f27c] {\n    width: 60%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-decoration: none;\n    gap: 10px;\n    padding-top: 15px;\n}\n}\n@media screen and (max-width: 768px){\n.main-form[data-v-1595f27c] {\n    width: 100%;\n    height: 100%;\n    border-radius: 25px;\n    background-image: url(/images/Up.png);\n    position: relative;\n    display: flex;\n    justify-content: space-between;\n    flex-wrap: wrap;\n    gap: 30px 0px;\n    background-position: center;\n    background-size: cover;\n    background-repeat: no-repeat;\n    padding-top: 15px;\n}\nform.form-1[data-v-1595f27c] {\n    width: 68%;\n    height: 420px;\n    flex-shrink: 0;\n    border-radius: 24px;\n    background: #FFF;\n    box-shadow: 0px 4px 35px 0px rgba(0, 0, 0, 0.08);\n    z-index: 1;\n    position: relative;\n    padding: 20px;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: center;\n}\n.form-titel h2[data-v-1595f27c] {\n    color: #1C1D1E;\n    font-family: sans-serif;\n    font-size: 24px;\n    font-style: normal;\n    font-weight: 800;\n    line-height: normal;\n}\n.form-box img[data-v-1595f27c] {\n    position: absolute;\n    left: 90px;\n    bottom: 0px;\n    width: 35%;\n}\n}\n@media screen and (max-width: 425px){\n.form-titel[data-v-1595f27c] {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.form-box[data-v-1595f27c] {\n    width: 100%;\n    padding: 0px 20px;\n}\n.form-box img[data-v-1595f27c] {\n    position: absolute;\n    left: 90px;\n    bottom: 0px;\n    width: 35%;\n    display: none;\n}\nform.form-1[data-v-1595f27c] {\n    width: 100%;\n    height: 420px;\n    flex-shrink: 0;\n    border-radius: 24px;\n    background: #FFF;\n    box-shadow: 0px 4px 35px 0px rgba(0, 0, 0, 0.08);\n    z-index: 1;\n    position: relative;\n    padding: 20px;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: center;\n}\na.form-last[data-v-1595f27c] {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-decoration: none;\n    gap: 10px;\n    padding-top: 15px;\n}\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/formz.vue?vue&type=style&index=0&id=0dc4e8ee&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/formz.vue?vue&type=style&index=0&id=0dc4e8ee&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n*[data-v-0dc4e8ee]{\n        padding: 0;\n        margin: 0;\n        box-sizing: border-box;\n}\nsection.form-1-sec[data-v-0dc4e8ee] {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n.main-form[data-v-0dc4e8ee] {\n    border-radius: 50px;\n    background: #F96;\n    width: 100%;\n    height: 900px;\n    padding:20px 50px 0px 50px;\n}\n.form-img[data-v-0dc4e8ee] {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.col-lg-6.col-md-12.col-sm-12 img[data-v-0dc4e8ee] {\n    width: 100%;\n}\n.form-titel h3[data-v-0dc4e8ee] {\n    color: #000;\n    font-family: sans-serif;\n    font-size: 38px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: normal;\n}\n.form-titel h1[data-v-0dc4e8ee] {\n    color: #000;\n    font-family: sans-serif;\n    font-size: 74px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: normal;\n    padding: 15px 0px;\n}\n.form-titel p[data-v-0dc4e8ee] {\n    color: #000;\n    font-family: sans-serif;\n    font-size: 38px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: normal;\n}\n.form-titel a[data-v-0dc4e8ee] {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    justify-content: center;\n    padding-top: 15px;\n}\n.form-titel a p[data-v-0dc4e8ee] {\n    color: #000;\n    font-family: Anton;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: normal;\n}\n.form-titel a svg[data-v-0dc4e8ee] {\n    width: 30px;\n    height: 30px;\n    flex-shrink: 0;\n}\n.row.formz[data-v-0dc4e8ee] {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n@media screen and (max-width: 1600px){\n.main-form[data-v-0dc4e8ee] {\n    border-radius: 50px;\n    background: #F96;\n    width: 100%;\n    height: 770px;\n    padding: 20px 50px 0px 50px;\n}\n.form-titel h3[data-v-0dc4e8ee] {\n    color: #000;\n    font-family: sans-serif;\n    font-size: 30px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: normal;\n}\n.form-titel h1[data-v-0dc4e8ee] {\n    color: #000;\n    font-family: sans-serif;\n    font-size: 58px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: normal;\n    padding: 15px 0px;\n}\n.form-titel p[data-v-0dc4e8ee] {\n    color: #000;\n    font-family: sans-serif;\n    font-size: 34px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: normal;\n}\n.imger img[data-v-0dc4e8ee] {\n    width: 100%;\n}\n.form-titel a p[data-v-0dc4e8ee] {\n    color: #000;\n    font-family: Anton;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: normal;\n}\n}\n@media screen and (max-width: 1440px){\n.main-form[data-v-0dc4e8ee] {\n    border-radius: 50px;\n    background: #F96;\n    width: 100%;\n    height: 650px;\n    padding: 20px 50px 0px 50px;\n}\n.form-titel h3[data-v-0dc4e8ee] {\n    color: #000;\n    font-family: sans-serif;\n    font-size: 28px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: normal;\n}\n.form-titel h1[data-v-0dc4e8ee] {\n    color: #000;\n    font-family: sans-serif;\n    font-size: 52px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: normal;\n    padding: 15px 0px;\n}\n.form-titel p[data-v-0dc4e8ee] {\n    color: #000;\n    font-family: sans-serif;\n    font-size: 28px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: normal;\n}\n.col-lg-6.col-md-12.col-sm-12.imger img[data-v-0dc4e8ee] {\n    width: 93%;\n}\n.form-titel a p[data-v-0dc4e8ee] {\n    color: #000;\n    font-family: Anton;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: normal;\n}\n.imger img[data-v-0dc4e8ee] {\n    width: 93%;\n}\n}\n@media screen and (max-width: 1366px){\n.main-form[data-v-0dc4e8ee] {\n    border-radius:45px;\n    background: #F96;\n    width: 100%;\n    height: 560px;\n    padding: 20px 35px 0px 35px;\n}\n.form-titel h3[data-v-0dc4e8ee] {\n    color: #000;\n    font-family: sans-serif;\n    font-size: 24px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: normal;\n}\n.form-titel h1[data-v-0dc4e8ee] {\n    color: #000;\n    font-family: sans-serif;\n    font-size: 45px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: normal;\n    padding: 10px 0px;\n}\n.form-titel p[data-v-0dc4e8ee] {\n    color: #000;\n    font-family: sans-serif;\n    font-size: 24px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: normal;\n}\n.col-lg-6.col-md-12.col-sm-12.imger img[data-v-0dc4e8ee] {\n    width: 80%;\n}\n.form-titel a p[data-v-0dc4e8ee] {\n    color: #000;\n    font-family: Anton;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: normal;\n}\n.imger img[data-v-0dc4e8ee] {\n    width: 80%;\n}\n}\n@media screen and (max-width: 768px){\n.main-form[data-v-0dc4e8ee] {\n    border-radius: 25px;\n    background: #F96;\n    width: 100%;\n    height: 100%;\n    padding: 20px 30px 0px 30px;\n}\n.imger img[data-v-0dc4e8ee] {\n    width: 82%;\n}\n.form-titel h3[data-v-0dc4e8ee] {\n    color: #000;\n    font-family: sans-serif;\n    font-size: 20px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: normal;\n}\n.form-titel h1[data-v-0dc4e8ee] {\n    color: #000;\n    font-family: sans-serif;\n    font-size: 38px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: normal;\n    padding: 10px 0px;\n}\n.form-titel p[data-v-0dc4e8ee] {\n    color: #000;\n    font-family: sans-serif;\n    font-size: 20px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: normal;\n}\n.form-titel a svg[data-v-0dc4e8ee] {\n    width: 20px;\n    height: 20px;\n    flex-shrink: 0;\n}\n.form-titel a p[data-v-0dc4e8ee] {\n    color: #000;\n    font-family: Anton;\n    font-size: 12px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: normal;\n}\n}\n@media screen and (max-width: 425px){\n.row.formz[data-v-0dc4e8ee] {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    flex-direction: column-reverse;\n    gap: 30px;\n    align-content: center;\n    padding-top: 30px;\n}\n.main-form[data-v-0dc4e8ee] {\n    border-radius: 25px;\n    background: #F96;\n    width: 100%;\n    height: 100%;\n    padding: 20px 20px 0px 20px;\n}\n.form-titel h3[data-v-0dc4e8ee] {\n    color: #000;\n    font-family: sans-serif;\n    font-size: 18px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: normal;\n    text-align: center;\n}\n.form-titel h1[data-v-0dc4e8ee] {\n    color: #000;\n    font-family: sans-serif;\n    font-size: 30px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: normal;\n    padding: 10px 0px;\n    text-align: center;\n}\n.form-titel p[data-v-0dc4e8ee] {\n    color: #000;\n    font-family: sans-serif;\n    font-size: 18px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: normal;\n    text-align: center;\n}\n.form-titel a p[data-v-0dc4e8ee] {\n    color: #000;\n    font-family: Anton;\n    font-size: 12px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: normal;\n}\n.form-titel a svg[data-v-0dc4e8ee] {\n    width: 20px;\n    height: 20px;\n    flex-shrink: 0;\n}\n.form-img img[data-v-0dc4e8ee] {\n    width: 45%;\n}\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/businesstype.vue?vue&type=style&index=0&id=0b01a477&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/businesstype.vue?vue&type=style&index=0&id=0b01a477&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_businesstype_vue_vue_type_style_index_0_id_0b01a477_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./businesstype.vue?vue&type=style&index=0&id=0b01a477&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/businesstype.vue?vue&type=style&index=0&id=0b01a477&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_businesstype_vue_vue_type_style_index_0_id_0b01a477_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_businesstype_vue_vue_type_style_index_0_id_0b01a477_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/form3.vue?vue&type=style&index=0&id=1595f27c&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/form3.vue?vue&type=style&index=0&id=1595f27c&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form3_vue_vue_type_style_index_0_id_1595f27c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./form3.vue?vue&type=style&index=0&id=1595f27c&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/form3.vue?vue&type=style&index=0&id=1595f27c&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form3_vue_vue_type_style_index_0_id_1595f27c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form3_vue_vue_type_style_index_0_id_1595f27c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/formz.vue?vue&type=style&index=0&id=0dc4e8ee&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/formz.vue?vue&type=style&index=0&id=0dc4e8ee&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_formz_vue_vue_type_style_index_0_id_0dc4e8ee_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./formz.vue?vue&type=style&index=0&id=0dc4e8ee&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/formz.vue?vue&type=style&index=0&id=0dc4e8ee&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_formz_vue_vue_type_style_index_0_id_0dc4e8ee_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_formz_vue_vue_type_style_index_0_id_0dc4e8ee_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/views/register/businesstype.vue":
/*!******************************************************!*\
  !*** ./resources/js/views/register/businesstype.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _businesstype_vue_vue_type_template_id_0b01a477_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./businesstype.vue?vue&type=template&id=0b01a477&scoped=true& */ "./resources/js/views/register/businesstype.vue?vue&type=template&id=0b01a477&scoped=true&");
/* harmony import */ var _businesstype_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./businesstype.vue?vue&type=script&lang=js& */ "./resources/js/views/register/businesstype.vue?vue&type=script&lang=js&");
/* harmony import */ var _businesstype_vue_vue_type_style_index_0_id_0b01a477_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./businesstype.vue?vue&type=style&index=0&id=0b01a477&scoped=true&lang=css& */ "./resources/js/views/register/businesstype.vue?vue&type=style&index=0&id=0b01a477&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _businesstype_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _businesstype_vue_vue_type_template_id_0b01a477_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _businesstype_vue_vue_type_template_id_0b01a477_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "0b01a477",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/register/businesstype.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/register/form3.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/register/form3.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _form3_vue_vue_type_template_id_1595f27c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form3.vue?vue&type=template&id=1595f27c&scoped=true& */ "./resources/js/views/register/form3.vue?vue&type=template&id=1595f27c&scoped=true&");
/* harmony import */ var _form3_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form3.vue?vue&type=script&lang=js& */ "./resources/js/views/register/form3.vue?vue&type=script&lang=js&");
/* harmony import */ var _form3_vue_vue_type_style_index_0_id_1595f27c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form3.vue?vue&type=style&index=0&id=1595f27c&scoped=true&lang=css& */ "./resources/js/views/register/form3.vue?vue&type=style&index=0&id=1595f27c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _form3_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _form3_vue_vue_type_template_id_1595f27c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _form3_vue_vue_type_template_id_1595f27c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "1595f27c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/register/form3.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/register/formz.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/register/formz.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _formz_vue_vue_type_template_id_0dc4e8ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formz.vue?vue&type=template&id=0dc4e8ee&scoped=true& */ "./resources/js/views/register/formz.vue?vue&type=template&id=0dc4e8ee&scoped=true&");
/* harmony import */ var _formz_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formz.vue?vue&type=script&lang=js& */ "./resources/js/views/register/formz.vue?vue&type=script&lang=js&");
/* harmony import */ var _formz_vue_vue_type_style_index_0_id_0dc4e8ee_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formz.vue?vue&type=style&index=0&id=0dc4e8ee&scoped=true&lang=css& */ "./resources/js/views/register/formz.vue?vue&type=style&index=0&id=0dc4e8ee&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _formz_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _formz_vue_vue_type_template_id_0dc4e8ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _formz_vue_vue_type_template_id_0dc4e8ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "0dc4e8ee",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/register/formz.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/register/businesstype.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/register/businesstype.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_businesstype_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./businesstype.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/businesstype.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_businesstype_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/register/form3.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/views/register/form3.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form3_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./form3.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/form3.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_form3_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/register/formz.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/views/register/formz.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_formz_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./formz.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/formz.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_formz_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/register/businesstype.vue?vue&type=style&index=0&id=0b01a477&scoped=true&lang=css&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/views/register/businesstype.vue?vue&type=style&index=0&id=0b01a477&scoped=true&lang=css& ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_businesstype_vue_vue_type_style_index_0_id_0b01a477_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./businesstype.vue?vue&type=style&index=0&id=0b01a477&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/businesstype.vue?vue&type=style&index=0&id=0b01a477&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/views/register/form3.vue?vue&type=style&index=0&id=1595f27c&scoped=true&lang=css&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/views/register/form3.vue?vue&type=style&index=0&id=1595f27c&scoped=true&lang=css& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_form3_vue_vue_type_style_index_0_id_1595f27c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./form3.vue?vue&type=style&index=0&id=1595f27c&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/form3.vue?vue&type=style&index=0&id=1595f27c&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/views/register/formz.vue?vue&type=style&index=0&id=0dc4e8ee&scoped=true&lang=css&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/views/register/formz.vue?vue&type=style&index=0&id=0dc4e8ee&scoped=true&lang=css& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_formz_vue_vue_type_style_index_0_id_0dc4e8ee_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./formz.vue?vue&type=style&index=0&id=0dc4e8ee&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/formz.vue?vue&type=style&index=0&id=0dc4e8ee&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/views/register/businesstype.vue?vue&type=template&id=0b01a477&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/views/register/businesstype.vue?vue&type=template&id=0b01a477&scoped=true& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_businesstype_vue_vue_type_template_id_0b01a477_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_businesstype_vue_vue_type_template_id_0b01a477_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_businesstype_vue_vue_type_template_id_0b01a477_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./businesstype.vue?vue&type=template&id=0b01a477&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/businesstype.vue?vue&type=template&id=0b01a477&scoped=true&");


/***/ }),

/***/ "./resources/js/views/register/form3.vue?vue&type=template&id=1595f27c&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/views/register/form3.vue?vue&type=template&id=1595f27c&scoped=true& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form3_vue_vue_type_template_id_1595f27c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form3_vue_vue_type_template_id_1595f27c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form3_vue_vue_type_template_id_1595f27c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./form3.vue?vue&type=template&id=1595f27c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/form3.vue?vue&type=template&id=1595f27c&scoped=true&");


/***/ }),

/***/ "./resources/js/views/register/formz.vue?vue&type=template&id=0dc4e8ee&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/views/register/formz.vue?vue&type=template&id=0dc4e8ee&scoped=true& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_formz_vue_vue_type_template_id_0dc4e8ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_formz_vue_vue_type_template_id_0dc4e8ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_formz_vue_vue_type_template_id_0dc4e8ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./formz.vue?vue&type=template&id=0dc4e8ee&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/formz.vue?vue&type=template&id=0dc4e8ee&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/businesstype.vue?vue&type=template&id=0b01a477&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/businesstype.vue?vue&type=template&id=0b01a477&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("section", { staticClass: "form-1-sec" }, [
    _vm.showw
      ? _c("div", { staticClass: "main-form" }, [
          _vm._m(0),
          _vm._v(" "),
          _vm._m(1),
          _vm._v(" "),
          _c("div", { staticClass: "form-box" }, [
            _c("img", { attrs: { src: "/images/Character.png", alt: "" } }),
            _vm._v(" "),
            _c("form", { staticClass: "form-1", attrs: { action: "" } }, [
              _c(
                "div",
                {
                  staticClass: "input-group-2",
                  style: { backgroundColor: _vm.bgColor1 },
                  on: {
                    click: function($event) {
                      return _vm.datas("Ecommerce", 1)
                    }
                  }
                },
                [_c("h2", [_vm._v("Ecommerce")])]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "input-group-2",
                  style: { backgroundColor: _vm.bgColor2 },
                  on: {
                    click: function($event) {
                      return _vm.datas("Enterprise B2C", 2)
                    }
                  }
                },
                [_c("h2", [_vm._v("Enterprise B2C")])]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "input-group-2",
                  style: { backgroundColor: _vm.bgColor3 },
                  on: {
                    click: function($event) {
                      return _vm.datas("Restaurant", 3)
                    }
                  }
                },
                [_c("h2", [_vm._v("Restaurant")])]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "input-group-2",
                  style: { backgroundColor: _vm.bgColor4 },
                  on: {
                    click: function($event) {
                      return _vm.datas("Agency", 4)
                    }
                  }
                },
                [_c("h2", [_vm._v("Agency")])]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "input-group-2",
                  style: { backgroundColor: _vm.bgColor5 },
                  on: {
                    click: function($event) {
                      return _vm.datas("Appliction Mobile", 5)
                    }
                  }
                },
                [_c("h2", [_vm._v("Appliction Mobile")])]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "input-group-2",
                  style: { backgroundColor: _vm.bgColor6 },
                  on: {
                    click: function($event) {
                      return _vm.datas("Distribution", 6)
                    }
                  }
                },
                [_c("h2", [_vm._v("Distribution")])]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "input-group-2",
                  style: { backgroundColor: _vm.bgColor7 },
                  on: {
                    click: function($event) {
                      return _vm.datas("Automobile", 7)
                    }
                  }
                },
                [_c("h2", [_vm._v("Automobile")])]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "input-group-2",
                  style: { backgroundColor: _vm.bgColor8 },
                  on: {
                    click: function($event) {
                      return _vm.datas("Other", 8)
                    }
                  }
                },
                [_c("h2", [_vm._v("Other")])]
              ),
              _vm._v(" "),
              _c(
                "button",
                { staticClass: "form-btn", on: { click: _vm.save } },
                [
                  _c("p", [_vm._v("Start for free ")]),
                  _vm._v(" "),
                  _c(
                    "svg",
                    {
                      attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "13",
                        height: "13",
                        viewBox: "0 0 13 13",
                        fill: "none"
                      }
                    },
                    [
                      _c("path", {
                        attrs: {
                          d:
                            "M2.51254 5.45272C3.05034 5.44321 3.53631 5.41563 4.01895 5.49884C4.06983 5.5074 4.12879 5.47935 4.18253 5.46318C4.44738 5.38329 4.71319 5.37236 4.9828 5.44131C5.21723 5.50122 5.45642 5.44986 5.6937 5.46746C6.05983 5.49456 6.42408 5.39566 6.78785 5.4142C7.08408 5.42942 7.38366 5.42466 7.678 5.47079C7.82731 5.49409 7.96852 5.50217 8.12116 5.46366C8.28711 5.42229 8.45164 5.52167 8.62378 5.52167C8.81304 5.52167 8.99943 5.56922 9.18108 5.62343C9.38459 5.68382 9.43594 5.86831 9.28759 6.0181C9.06124 6.24682 8.76549 6.34715 8.45926 6.39185C8.20581 6.42894 7.94713 6.45033 7.69178 6.46365C7.42169 6.47744 7.1497 6.57064 6.8758 6.48029C6.82873 6.4646 6.77025 6.46127 6.72269 6.47411C6.4041 6.56161 6.07268 6.50264 5.75171 6.56541C5.65281 6.5849 5.54438 6.57825 5.44357 6.56256C5.30377 6.54068 5.16968 6.54449 5.03654 6.58823C4.86631 6.64434 4.69704 6.57302 4.52632 6.57634C4.35371 6.57967 4.18253 6.58585 4.01895 6.62722C3.7617 6.69284 3.50588 6.65623 3.25528 6.6296C3.02894 6.60583 2.81068 6.6258 2.58767 6.6315C2.37702 6.63721 2.15686 6.65528 1.94954 6.61867C1.71416 6.57682 1.61193 6.36189 1.52586 6.1655C1.44883 5.98957 1.55725 5.85975 1.67565 5.73327C1.85015 5.54639 2.05129 5.44653 2.31045 5.46413C2.39509 5.46983 2.48116 5.45414 2.51397 5.45224L2.51254 5.45272Z",
                          fill: "white"
                        }
                      }),
                      _vm._v(" "),
                      _c("path", {
                        attrs: {
                          d:
                            "M9.13513 9.8451C8.83651 9.84748 8.60731 9.58072 8.65724 9.27068C8.69005 9.06574 8.76518 8.87411 8.89833 8.70768C9.00056 8.57977 9.10422 8.45091 9.18839 8.31111C9.48177 7.82181 9.80322 7.35391 10.1884 6.93166C10.2221 6.89457 10.2497 6.84654 10.2664 6.79899C10.3657 6.51416 10.565 6.2978 10.7595 6.07907C10.8779 5.94593 10.8883 5.84702 10.7533 5.7291C10.5745 5.57265 10.4347 5.39386 10.3353 5.17798C10.2649 5.02582 10.1166 4.93737 10.0082 4.81612C9.85743 4.64731 9.76043 4.44094 9.65439 4.24646C9.50745 3.97685 9.2949 3.76192 9.12229 3.5156C8.94825 3.26739 8.80227 3.00396 8.69671 2.71913C8.67294 2.65493 8.65629 2.58646 8.64964 2.51846C8.63775 2.39008 8.71573 2.31019 8.81607 2.2479C8.91069 2.18894 8.9958 2.21366 9.07949 2.27595C9.24497 2.39911 9.42043 2.5042 9.54882 2.67728C9.71287 2.89792 9.96299 3.0439 10.1052 3.28736C10.4799 3.50086 10.6601 3.88507 10.9159 4.20414C11.0662 4.39149 11.2497 4.55364 11.4261 4.71817C11.5683 4.85083 11.6843 4.99586 11.7357 5.18654C11.7656 5.29733 11.8322 5.38673 11.894 5.48136C12.0414 5.70722 12.0319 5.93737 11.8874 6.16276C11.6739 6.49562 11.497 6.85225 11.2549 7.16703C11.0039 7.49371 10.8375 7.87982 10.545 8.17844C10.3672 8.36008 10.273 8.59356 10.1632 8.81847C10.0115 9.12898 9.83222 9.4238 9.57782 9.66345C9.43755 9.79517 9.30917 9.84415 9.13656 9.84557L9.13513 9.8451Z",
                          fill: "white"
                        }
                      })
                    ]
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "form-last",
                on: {
                  click: function($event) {
                    return _vm.$emit("cancel")
                  }
                }
              },
              [
                _c(
                  "svg",
                  {
                    attrs: {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "30",
                      height: "30",
                      viewBox: "0 0 30 30",
                      fill: "none"
                    }
                  },
                  [
                    _c("path", {
                      attrs: {
                        d:
                          "M25.6131 4.38811C19.7639 -1.4627 10.2434 -1.4627 4.39417 4.38811C1.56078 7.22338 0 10.9922 0 15.0004C0 19.0087 1.56078 22.7775 4.39417 25.6116C7.31937 28.5376 11.1615 30 15.0036 30C18.8457 30 22.6879 28.5376 25.6131 25.6116C31.4623 19.7608 31.4623 10.24 25.6131 4.38811ZM23.9698 23.9678C19.0259 28.9131 10.9813 28.9131 6.03745 23.9678C3.6434 21.5731 2.32432 18.3879 2.32432 15.0004C2.32432 11.6129 3.6434 8.4277 6.03745 6.03184C10.9813 1.0866 19.0259 1.08778 23.9698 6.03184C28.9125 10.9771 28.9125 19.0238 23.9698 23.9678Z",
                        fill: "black"
                      }
                    }),
                    _vm._v(" "),
                    _c("path", {
                      attrs: {
                        d:
                          "M20.0112 18.2127L16.721 14.9264L20.0112 11.64C20.4644 11.1867 20.4644 10.4508 20.0123 9.99626C19.5579 9.54057 18.8223 9.54174 18.3679 9.99509L15.0755 13.2838L11.7831 9.99509C11.3287 9.54174 10.593 9.54057 10.1386 9.99626C9.68538 10.4508 9.68537 11.1866 10.1398 11.64L13.4299 14.9264L10.1398 18.2127C9.68537 18.666 9.68538 19.4019 10.1386 19.8565C10.3652 20.0843 10.6639 20.1971 10.9614 20.1971C11.259 20.1971 11.5565 20.0831 11.7831 19.8576L15.0755 16.5689L18.3679 19.8576C18.5946 20.0843 18.8921 20.1971 19.1896 20.1971C19.4872 20.1971 19.7858 20.0831 20.0125 19.8565C20.4656 19.4019 20.4656 18.666 20.0112 18.2127Z",
                        fill: "black"
                      }
                    })
                  ]
                ),
                _vm._v(" "),
                _c(
                  "p",
                  {
                    on: {
                      click: function($event) {
                        return _vm.$emit("cancel")
                      }
                    }
                  },
                  [_vm._v("Get Back To Main Screen")]
                )
              ]
            )
          ])
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.count
      ? _c(
          "div",
          [
            _c("Country", {
              attrs: { "user-id": _vm.user_id },
              on: { cancel: _vm.closeModal }
            })
          ],
          1
        )
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-img" }, [
      _c("img", { attrs: { src: "/images/logo.png", alt: "" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-titel" }, [
      _c("h2", [_vm._v("step-2")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/form3.vue?vue&type=template&id=1595f27c&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/form3.vue?vue&type=template&id=1595f27c&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("section", { staticClass: "form-1-sec" }, [
    _vm.sho
      ? _c("div", { staticClass: "main-form" }, [
          _vm._m(0),
          _vm._v(" "),
          _vm._m(1),
          _vm._v(" "),
          _c("div", { staticClass: "form-box" }, [
            _c("img", { attrs: { src: "/images/Character.png", alt: "" } }),
            _vm._v(" "),
            _c("form", { staticClass: "form-1", attrs: { action: "" } }, [
              _c(
                "div",
                {
                  staticClass: "input-group-2",
                  style: { backgroundColor: _vm.bgColor1 },
                  on: {
                    click: function($event) {
                      return _vm.datas("South Africa", 1)
                    }
                  }
                },
                [
                  _c(
                    "svg",
                    {
                      attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "21",
                        height: "15",
                        viewBox: "0 0 21 15",
                        fill: "none"
                      }
                    },
                    [
                      _c(
                        "g",
                        { attrs: { "clip-path": "url(#clip0_213_8455)" } },
                        [
                          _c("rect", {
                            attrs: {
                              width: "21",
                              height: "15",
                              rx: "3",
                              fill: "white"
                            }
                          }),
                          _vm._v(" "),
                          _c("path", {
                            attrs: {
                              d:
                                "M19 0H2C0.89543 0 0 0.89543 0 2V13C0 14.1046 0.89543 15 2 15H19C20.1046 15 21 14.1046 21 13V2C21 0.89543 20.1046 0 19 0Z",
                              fill: "white"
                            }
                          }),
                          _vm._v(" "),
                          _c("path", {
                            attrs: {
                              "fill-rule": "evenodd",
                              "clip-rule": "evenodd",
                              d: "M0 10H21V15H0V10Z",
                              fill: "#1A47B8"
                            }
                          }),
                          _vm._v(" "),
                          _c("path", {
                            attrs: {
                              "fill-rule": "evenodd",
                              "clip-rule": "evenodd",
                              d: "M0 0H21V5H0V0Z",
                              fill: "#F93939"
                            }
                          }),
                          _vm._v(" "),
                          _c("path", {
                            attrs: {
                              "fill-rule": "evenodd",
                              "clip-rule": "evenodd",
                              d: "M8.013 10L2 15.033H0V0H2L8 5H21V10H8.013Z",
                              fill: "white"
                            }
                          }),
                          _vm._v(" "),
                          _c("path", {
                            attrs: {
                              "fill-rule": "evenodd",
                              "clip-rule": "evenodd",
                              d: "M7.7 9L0.5 15L0 15.033V0H0.5L7.7 6H21V9H7.7Z",
                              fill: "#249F58"
                            }
                          }),
                          _vm._v(" "),
                          _c("path", {
                            attrs: {
                              "fill-rule": "evenodd",
                              "clip-rule": "evenodd",
                              d: "M0 3L6 7.5L0 12V3Z",
                              fill: "#FFDA2C"
                            }
                          }),
                          _vm._v(" "),
                          _c("path", {
                            attrs: {
                              "fill-rule": "evenodd",
                              "clip-rule": "evenodd",
                              d: "M0 4L4.75 7.5L0 11V4Z",
                              fill: "#151515"
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c("defs", [
                        _c("clipPath", { attrs: { id: "clip0_213_8455" } }, [
                          _c("rect", {
                            attrs: {
                              width: "21",
                              height: "15",
                              rx: "3",
                              fill: "white"
                            }
                          })
                        ])
                      ])
                    ]
                  ),
                  _c("h2", [_vm._v("South Africa")])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "input-group-2",
                  style: { backgroundColor: _vm.bgColor2 },
                  on: {
                    click: function($event) {
                      return _vm.datas("United States", 2)
                    }
                  }
                },
                [
                  _c(
                    "svg",
                    {
                      attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "21",
                        height: "15",
                        viewBox: "0 0 21 15",
                        fill: "none"
                      }
                    },
                    [
                      _c(
                        "g",
                        { attrs: { "clip-path": "url(#clip0_213_12288)" } },
                        [
                          _c("rect", {
                            attrs: {
                              width: "21",
                              height: "15",
                              rx: "3",
                              fill: "white"
                            }
                          }),
                          _vm._v(" "),
                          _c("path", {
                            attrs: {
                              "fill-rule": "evenodd",
                              "clip-rule": "evenodd",
                              d: "M0 0H9V7H0V0Z",
                              fill: "#1A47B8"
                            }
                          }),
                          _vm._v(" "),
                          _c("path", {
                            attrs: {
                              "fill-rule": "evenodd",
                              "clip-rule": "evenodd",
                              d:
                                "M9 0V1H21V0H9ZM9 2V3H21V2H9ZM9 4V5H21V4H9ZM9 6V7H21V6H9ZM0 8V9H21V8H0ZM0 10V11H21V10H0ZM0 12V13H21V12H0ZM0 14V15H21V14H0Z",
                              fill: "#F93939"
                            }
                          }),
                          _vm._v(" "),
                          _c("path", {
                            attrs: {
                              "fill-rule": "evenodd",
                              "clip-rule": "evenodd",
                              d:
                                "M1 1V2H2V1H1ZM3 1V2H4V1H3ZM5 1V2H6V1H5ZM7 1V2H8V1H7ZM6 2V3H7V2H6ZM4 2V3H5V2H4ZM2 2V3H3V2H2ZM1 3V4H2V3H1ZM3 3V4H4V3H3ZM5 3V4H6V3H5ZM7 3V4H8V3H7ZM1 5V6H2V5H1ZM3 5V6H4V5H3ZM5 5V6H6V5H5ZM7 5V6H8V5H7ZM6 4V5H7V4H6ZM4 4V5H5V4H4ZM2 4V5H3V4H2Z",
                              fill: "white"
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c("defs", [
                        _c("clipPath", { attrs: { id: "clip0_213_12288" } }, [
                          _c("rect", {
                            attrs: {
                              width: "21",
                              height: "15",
                              rx: "3",
                              fill: "white"
                            }
                          })
                        ])
                      ])
                    ]
                  ),
                  _c("h2", [_vm._v("United States")])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "input-group-2",
                  style: { backgroundColor: _vm.bgColor3 },
                  on: {
                    click: function($event) {
                      return _vm.datas("Canada", 3)
                    }
                  }
                },
                [
                  _c(
                    "svg",
                    {
                      attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "21",
                        height: "15",
                        viewBox: "0 0 21 15",
                        fill: "none"
                      }
                    },
                    [
                      _c(
                        "g",
                        { attrs: { "clip-path": "url(#clip0_213_16116)" } },
                        [
                          _c("rect", {
                            attrs: {
                              width: "21",
                              height: "15",
                              rx: "3",
                              fill: "white"
                            }
                          }),
                          _vm._v(" "),
                          _c("path", {
                            attrs: {
                              d:
                                "M10.7059 11.6176H10.2941L10.3971 9.97059C10.3912 9.88385 10.3496 9.86105 10.1912 9.86765L8.54412 10.0735C8.54412 10.0735 8.85294 9.66176 8.85294 9.45588C8.85294 9.25 7 7.91176 7 7.91176C7 7.91176 7.41176 7.80882 7.51471 7.70588C7.61765 7.60294 7.10294 6.47059 7.10294 6.47059C7.10294 6.47059 8.14906 6.88235 8.23529 6.77941C8.32153 6.67647 8.44118 6.26471 8.44118 6.26471C8.44118 6.26471 9.26471 7.19118 9.47059 7.19118C9.67647 7.19118 9.05882 4.92647 9.05882 4.92647C9.05882 4.92647 9.57353 5.33824 9.77941 5.33824C9.98529 5.33824 10.5 4 10.5 4C10.5 4 11.0147 5.33824 11.1176 5.33824C11.2206 5.33824 11.9412 4.92647 11.9412 4.92647C11.9412 4.92647 11.4265 7.08824 11.5294 7.19118C11.6324 7.29412 12.5588 6.26471 12.5588 6.26471C12.5588 6.26471 12.6618 6.67647 12.7647 6.77941C12.8676 6.88235 13.8971 6.47059 13.8971 6.47059C13.8971 6.47059 13.3824 7.60294 13.4853 7.70588C13.5882 7.80882 14 7.91176 14 7.91176C14 7.91176 12.1471 9.25 12.1471 9.45588C12.1471 9.66176 12.3529 10.0735 12.3529 10.0735L10.8088 9.86765C10.6847 9.83206 10.6417 9.85907 10.6029 9.97059L10.7059 11.6176Z",
                              fill: "#F93939"
                            }
                          }),
                          _vm._v(" "),
                          _c("rect", {
                            attrs: {
                              x: "16",
                              width: "5",
                              height: "15",
                              fill: "#F93939"
                            }
                          }),
                          _vm._v(" "),
                          _c("rect", {
                            attrs: { width: "5", height: "15", fill: "#F93939" }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c("defs", [
                        _c("clipPath", { attrs: { id: "clip0_213_16116" } }, [
                          _c("rect", {
                            attrs: {
                              width: "21",
                              height: "15",
                              rx: "3",
                              fill: "white"
                            }
                          })
                        ])
                      ])
                    ]
                  ),
                  _c("h2", [_vm._v("Canada")])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "input-group-2",
                  style: { backgroundColor: _vm.bgColor4 },
                  on: {
                    click: function($event) {
                      return _vm.datas("Ireland", 4)
                    }
                  }
                },
                [
                  _c(
                    "svg",
                    {
                      attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "21",
                        height: "15",
                        viewBox: "0 0 21 15",
                        fill: "none"
                      }
                    },
                    [
                      _c(
                        "g",
                        { attrs: { "clip-path": "url(#clip0_213_19944)" } },
                        [
                          _c("path", {
                            attrs: {
                              d:
                                "M19 0H2C0.89543 0 0 0.89543 0 2V13C0 14.1046 0.89543 15 2 15H19C20.1046 15 21 14.1046 21 13V2C21 0.89543 20.1046 0 19 0Z",
                              fill: "white"
                            }
                          }),
                          _vm._v(" "),
                          _c("path", {
                            attrs: {
                              "fill-rule": "evenodd",
                              "clip-rule": "evenodd",
                              d: "M14 0H21V15H14V0Z",
                              fill: "#FF6C2D"
                            }
                          }),
                          _vm._v(" "),
                          _c("path", {
                            attrs: {
                              "fill-rule": "evenodd",
                              "clip-rule": "evenodd",
                              d: "M0 0H7V15H0V0Z",
                              fill: "#249F58"
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c("defs", [
                        _c("clipPath", { attrs: { id: "clip0_213_19944" } }, [
                          _c("rect", {
                            attrs: {
                              width: "21",
                              height: "15",
                              rx: "3",
                              fill: "white"
                            }
                          })
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c("h2", [_vm._v("Ireland")])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "input-group-2",
                  style: { backgroundColor: _vm.bgColor5 },
                  on: {
                    click: function($event) {
                      return _vm.datas("United States", 5)
                    }
                  }
                },
                [
                  _c(
                    "svg",
                    {
                      attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "21",
                        height: "15",
                        viewBox: "0 0 21 15",
                        fill: "none"
                      }
                    },
                    [
                      _c(
                        "g",
                        { attrs: { "clip-path": "url(#clip0_213_19952)" } },
                        [
                          _c("rect", {
                            attrs: {
                              width: "21",
                              height: "15",
                              rx: "3",
                              fill: "white"
                            }
                          }),
                          _vm._v(" "),
                          _c("path", {
                            attrs: {
                              "fill-rule": "evenodd",
                              "clip-rule": "evenodd",
                              d: "M0 0H9V7H0V0Z",
                              fill: "#1A47B8"
                            }
                          }),
                          _vm._v(" "),
                          _c("path", {
                            attrs: {
                              "fill-rule": "evenodd",
                              "clip-rule": "evenodd",
                              d:
                                "M9 0V1H21V0H9ZM9 2V3H21V2H9ZM9 4V5H21V4H9ZM9 6V7H21V6H9ZM0 8V9H21V8H0ZM0 10V11H21V10H0ZM0 12V13H21V12H0ZM0 14V15H21V14H0Z",
                              fill: "#F93939"
                            }
                          }),
                          _vm._v(" "),
                          _c("path", {
                            attrs: {
                              "fill-rule": "evenodd",
                              "clip-rule": "evenodd",
                              d:
                                "M1 1V2H2V1H1ZM3 1V2H4V1H3ZM5 1V2H6V1H5ZM7 1V2H8V1H7ZM6 2V3H7V2H6ZM4 2V3H5V2H4ZM2 2V3H3V2H2ZM1 3V4H2V3H1ZM3 3V4H4V3H3ZM5 3V4H6V3H5ZM7 3V4H8V3H7ZM1 5V6H2V5H1ZM3 5V6H4V5H3ZM5 5V6H6V5H5ZM7 5V6H8V5H7ZM6 4V5H7V4H6ZM4 4V5H5V4H4ZM2 4V5H3V4H2Z",
                              fill: "white"
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c("defs", [
                        _c("clipPath", { attrs: { id: "clip0_213_19952" } }, [
                          _c("rect", {
                            attrs: {
                              width: "21",
                              height: "15",
                              rx: "3",
                              fill: "white"
                            }
                          })
                        ])
                      ])
                    ]
                  ),
                  _c("h2", [_vm._v("United States")])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "input-group-2",
                  style: { backgroundColor: _vm.bgColor6 },
                  on: {
                    click: function($event) {
                      return _vm.datas("Ireland", 6)
                    }
                  }
                },
                [
                  _c(
                    "svg",
                    {
                      attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "21",
                        height: "15",
                        viewBox: "0 0 21 15",
                        fill: "none"
                      }
                    },
                    [
                      _c(
                        "g",
                        { attrs: { "clip-path": "url(#clip0_213_19965)" } },
                        [
                          _c("path", {
                            attrs: {
                              d:
                                "M19 0H2C0.89543 0 0 0.89543 0 2V13C0 14.1046 0.89543 15 2 15H19C20.1046 15 21 14.1046 21 13V2C21 0.89543 20.1046 0 19 0Z",
                              fill: "white"
                            }
                          }),
                          _vm._v(" "),
                          _c("path", {
                            attrs: {
                              "fill-rule": "evenodd",
                              "clip-rule": "evenodd",
                              d: "M14 0H21V15H14V0Z",
                              fill: "#FF6C2D"
                            }
                          }),
                          _vm._v(" "),
                          _c("path", {
                            attrs: {
                              "fill-rule": "evenodd",
                              "clip-rule": "evenodd",
                              d: "M0 0H7V15H0V0Z",
                              fill: "#249F58"
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c("defs", [
                        _c("clipPath", { attrs: { id: "clip0_213_19965" } }, [
                          _c("rect", {
                            attrs: {
                              width: "21",
                              height: "15",
                              rx: "3",
                              fill: "white"
                            }
                          })
                        ])
                      ])
                    ]
                  ),
                  _c("h2", [_vm._v("Ireland")])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "input-group-2",
                  style: { backgroundColor: _vm.bgColor7 },
                  on: {
                    click: function($event) {
                      return _vm.datas("Canada", 7)
                    }
                  }
                },
                [
                  _c(
                    "svg",
                    {
                      attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "21",
                        height: "15",
                        viewBox: "0 0 21 15",
                        fill: "none"
                      }
                    },
                    [
                      _c(
                        "g",
                        { attrs: { "clip-path": "url(#clip0_213_19958)" } },
                        [
                          _c("rect", {
                            attrs: {
                              width: "21",
                              height: "15",
                              rx: "3",
                              fill: "white"
                            }
                          }),
                          _vm._v(" "),
                          _c("path", {
                            attrs: {
                              d:
                                "M10.7059 11.6176H10.2941L10.3971 9.97059C10.3912 9.88385 10.3496 9.86105 10.1912 9.86765L8.54412 10.0735C8.54412 10.0735 8.85294 9.66176 8.85294 9.45588C8.85294 9.25 7 7.91176 7 7.91176C7 7.91176 7.41176 7.80882 7.51471 7.70588C7.61765 7.60294 7.10294 6.47059 7.10294 6.47059C7.10294 6.47059 8.14906 6.88235 8.23529 6.77941C8.32153 6.67647 8.44118 6.26471 8.44118 6.26471C8.44118 6.26471 9.26471 7.19118 9.47059 7.19118C9.67647 7.19118 9.05882 4.92647 9.05882 4.92647C9.05882 4.92647 9.57353 5.33824 9.77941 5.33824C9.98529 5.33824 10.5 4 10.5 4C10.5 4 11.0147 5.33824 11.1176 5.33824C11.2206 5.33824 11.9412 4.92647 11.9412 4.92647C11.9412 4.92647 11.4265 7.08824 11.5294 7.19118C11.6324 7.29412 12.5588 6.26471 12.5588 6.26471C12.5588 6.26471 12.6618 6.67647 12.7647 6.77941C12.8676 6.88235 13.8971 6.47059 13.8971 6.47059C13.8971 6.47059 13.3824 7.60294 13.4853 7.70588C13.5882 7.80882 14 7.91176 14 7.91176C14 7.91176 12.1471 9.25 12.1471 9.45588C12.1471 9.66176 12.3529 10.0735 12.3529 10.0735L10.8088 9.86765C10.6847 9.83206 10.6417 9.85907 10.6029 9.97059L10.7059 11.6176Z",
                              fill: "#F93939"
                            }
                          }),
                          _vm._v(" "),
                          _c("rect", {
                            attrs: {
                              x: "16",
                              width: "5",
                              height: "15",
                              fill: "#F93939"
                            }
                          }),
                          _vm._v(" "),
                          _c("rect", {
                            attrs: { width: "5", height: "15", fill: "#F93939" }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c("defs", [
                        _c("clipPath", { attrs: { id: "clip0_213_19958" } }, [
                          _c("rect", {
                            attrs: {
                              width: "21",
                              height: "15",
                              rx: "3",
                              fill: "white"
                            }
                          })
                        ])
                      ])
                    ]
                  ),
                  _c("h2", [_vm._v("Canada")])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "input-group-2",
                  style: { backgroundColor: _vm.bgColor8 },
                  on: {
                    click: function($event) {
                      return _vm.datas("Other", 8)
                    }
                  }
                },
                [_c("h2", [_vm._v("Other")])]
              ),
              _vm._v(" "),
              _c(
                "button",
                { staticClass: "form-btn", on: { click: _vm.save } },
                [
                  _c("p", [_vm._v("Start for free ")]),
                  _vm._v(" "),
                  _c(
                    "svg",
                    {
                      attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "13",
                        height: "13",
                        viewBox: "0 0 13 13",
                        fill: "none"
                      }
                    },
                    [
                      _c("path", {
                        attrs: {
                          d:
                            "M2.51254 5.45272C3.05034 5.44321 3.53631 5.41563 4.01895 5.49884C4.06983 5.5074 4.12879 5.47935 4.18253 5.46318C4.44738 5.38329 4.71319 5.37236 4.9828 5.44131C5.21723 5.50122 5.45642 5.44986 5.6937 5.46746C6.05983 5.49456 6.42408 5.39566 6.78785 5.4142C7.08408 5.42942 7.38366 5.42466 7.678 5.47079C7.82731 5.49409 7.96852 5.50217 8.12116 5.46366C8.28711 5.42229 8.45164 5.52167 8.62378 5.52167C8.81304 5.52167 8.99943 5.56922 9.18108 5.62343C9.38459 5.68382 9.43594 5.86831 9.28759 6.0181C9.06124 6.24682 8.76549 6.34715 8.45926 6.39185C8.20581 6.42894 7.94713 6.45033 7.69178 6.46365C7.42169 6.47744 7.1497 6.57064 6.8758 6.48029C6.82873 6.4646 6.77025 6.46127 6.72269 6.47411C6.4041 6.56161 6.07268 6.50264 5.75171 6.56541C5.65281 6.5849 5.54438 6.57825 5.44357 6.56256C5.30377 6.54068 5.16968 6.54449 5.03654 6.58823C4.86631 6.64434 4.69704 6.57302 4.52632 6.57634C4.35371 6.57967 4.18253 6.58585 4.01895 6.62722C3.7617 6.69284 3.50588 6.65623 3.25528 6.6296C3.02894 6.60583 2.81068 6.6258 2.58767 6.6315C2.37702 6.63721 2.15686 6.65528 1.94954 6.61867C1.71416 6.57682 1.61193 6.36189 1.52586 6.1655C1.44883 5.98957 1.55725 5.85975 1.67565 5.73327C1.85015 5.54639 2.05129 5.44653 2.31045 5.46413C2.39509 5.46983 2.48116 5.45414 2.51397 5.45224L2.51254 5.45272Z",
                          fill: "white"
                        }
                      }),
                      _vm._v(" "),
                      _c("path", {
                        attrs: {
                          d:
                            "M9.13513 9.8451C8.83651 9.84748 8.60731 9.58072 8.65724 9.27068C8.69005 9.06574 8.76518 8.87411 8.89833 8.70768C9.00056 8.57977 9.10422 8.45091 9.18839 8.31111C9.48177 7.82181 9.80322 7.35391 10.1884 6.93166C10.2221 6.89457 10.2497 6.84654 10.2664 6.79899C10.3657 6.51416 10.565 6.2978 10.7595 6.07907C10.8779 5.94593 10.8883 5.84702 10.7533 5.7291C10.5745 5.57265 10.4347 5.39386 10.3353 5.17798C10.2649 5.02582 10.1166 4.93737 10.0082 4.81612C9.85743 4.64731 9.76043 4.44094 9.65439 4.24646C9.50745 3.97685 9.2949 3.76192 9.12229 3.5156C8.94825 3.26739 8.80227 3.00396 8.69671 2.71913C8.67294 2.65493 8.65629 2.58646 8.64964 2.51846C8.63775 2.39008 8.71573 2.31019 8.81607 2.2479C8.91069 2.18894 8.9958 2.21366 9.07949 2.27595C9.24497 2.39911 9.42043 2.5042 9.54882 2.67728C9.71287 2.89792 9.96299 3.0439 10.1052 3.28736C10.4799 3.50086 10.6601 3.88507 10.9159 4.20414C11.0662 4.39149 11.2497 4.55364 11.4261 4.71817C11.5683 4.85083 11.6843 4.99586 11.7357 5.18654C11.7656 5.29733 11.8322 5.38673 11.894 5.48136C12.0414 5.70722 12.0319 5.93737 11.8874 6.16276C11.6739 6.49562 11.497 6.85225 11.2549 7.16703C11.0039 7.49371 10.8375 7.87982 10.545 8.17844C10.3672 8.36008 10.273 8.59356 10.1632 8.81847C10.0115 9.12898 9.83222 9.4238 9.57782 9.66345C9.43755 9.79517 9.30917 9.84415 9.13656 9.84557L9.13513 9.8451Z",
                          fill: "white"
                        }
                      })
                    ]
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _c("a", { staticClass: "form-last", attrs: { href: "#" } }, [
              _c(
                "svg",
                {
                  attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "30",
                    height: "30",
                    viewBox: "0 0 30 30",
                    fill: "none"
                  }
                },
                [
                  _c("path", {
                    attrs: {
                      d:
                        "M25.6131 4.38811C19.7639 -1.4627 10.2434 -1.4627 4.39417 4.38811C1.56078 7.22338 0 10.9922 0 15.0004C0 19.0087 1.56078 22.7775 4.39417 25.6116C7.31937 28.5376 11.1615 30 15.0036 30C18.8457 30 22.6879 28.5376 25.6131 25.6116C31.4623 19.7608 31.4623 10.24 25.6131 4.38811ZM23.9698 23.9678C19.0259 28.9131 10.9813 28.9131 6.03745 23.9678C3.6434 21.5731 2.32432 18.3879 2.32432 15.0004C2.32432 11.6129 3.6434 8.4277 6.03745 6.03184C10.9813 1.0866 19.0259 1.08778 23.9698 6.03184C28.9125 10.9771 28.9125 19.0238 23.9698 23.9678Z",
                      fill: "black"
                    }
                  }),
                  _vm._v(" "),
                  _c("path", {
                    attrs: {
                      d:
                        "M20.0112 18.2127L16.721 14.9264L20.0112 11.64C20.4644 11.1867 20.4644 10.4508 20.0123 9.99626C19.5579 9.54057 18.8223 9.54174 18.3679 9.99509L15.0755 13.2838L11.7831 9.99509C11.3287 9.54174 10.593 9.54057 10.1386 9.99626C9.68538 10.4508 9.68537 11.1866 10.1398 11.64L13.4299 14.9264L10.1398 18.2127C9.68537 18.666 9.68538 19.4019 10.1386 19.8565C10.3652 20.0843 10.6639 20.1971 10.9614 20.1971C11.259 20.1971 11.5565 20.0831 11.7831 19.8576L15.0755 16.5689L18.3679 19.8576C18.5946 20.0843 18.8921 20.1971 19.1896 20.1971C19.4872 20.1971 19.7858 20.0831 20.0125 19.8565C20.4656 19.4019 20.4656 18.666 20.0112 18.2127Z",
                      fill: "black"
                    }
                  })
                ]
              ),
              _vm._v(" "),
              _c("p", [_vm._v("Get Back To Main Screen")])
            ])
          ])
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.fin
      ? _c(
          "div",
          [
            _c("Final", {
              attrs: { "user-id": _vm.user_id },
              on: { cancel: _vm.closeModal }
            })
          ],
          1
        )
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-img" }, [
      _c("img", { attrs: { src: "/images/logo.png", alt: "" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-titel" }, [
      _c("h2", [_vm._v("step-2")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/formz.vue?vue&type=template&id=0dc4e8ee&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/formz.vue?vue&type=template&id=0dc4e8ee&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("section", { staticClass: "form-1-sec" }, [
    _c("div", { staticClass: "main-form" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "row formz" }, [
        _vm._m(1),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-6 col-md-6 col-sm-12 form-titel" }, [
          _c("h3", [_vm._v("Thanks For Your Precious Time")]),
          _vm._v(" "),
          _c("h1", [_vm._v("Please Wait I am Working On This")]),
          _vm._v(" "),
          _c("p", [_vm._v("Brand Journey Start’s Here")]),
          _vm._v(" "),
          _c(
            "a",
            {
              attrs: { href: "#" },
              on: {
                click: function($event) {
                  return _vm.$emit("cancel")
                }
              }
            },
            [
              _c(
                "svg",
                {
                  attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "30",
                    height: "30",
                    viewBox: "0 0 30 30",
                    fill: "none"
                  }
                },
                [
                  _c("path", {
                    attrs: {
                      d:
                        "M25.6131 4.38811C19.7639 -1.4627 10.2434 -1.4627 4.39417 4.38811C1.56078 7.22338 0 10.9922 0 15.0004C0 19.0087 1.56078 22.7775 4.39417 25.6116C7.31937 28.5376 11.1615 30 15.0036 30C18.8457 30 22.6879 28.5376 25.6131 25.6116C31.4623 19.7608 31.4623 10.24 25.6131 4.38811ZM23.9698 23.9678C19.0259 28.9131 10.9813 28.9131 6.03745 23.9678C3.6434 21.5731 2.32432 18.3879 2.32432 15.0004C2.32432 11.6129 3.6434 8.4277 6.03745 6.03184C10.9813 1.0866 19.0259 1.08778 23.9698 6.03184C28.9125 10.9771 28.9125 19.0238 23.9698 23.9678Z",
                      fill: "black"
                    }
                  }),
                  _vm._v(" "),
                  _c("path", {
                    attrs: {
                      d:
                        "M20.0112 18.2127L16.721 14.9264L20.0112 11.64C20.4644 11.1867 20.4644 10.4508 20.0123 9.99626C19.5579 9.54057 18.8223 9.54174 18.3679 9.99509L15.0755 13.2838L11.7831 9.99509C11.3287 9.54174 10.593 9.54057 10.1386 9.99626C9.68538 10.4508 9.68537 11.1866 10.1398 11.64L13.4299 14.9264L10.1398 18.2127C9.68537 18.666 9.68538 19.4019 10.1386 19.8565C10.3652 20.0843 10.6639 20.1971 10.9614 20.1971C11.259 20.1971 11.5565 20.0831 11.7831 19.8576L15.0755 16.5689L18.3679 19.8576C18.5946 20.0843 18.8921 20.1971 19.1896 20.1971C19.4872 20.1971 19.7858 20.0831 20.0125 19.8565C20.4656 19.4019 20.4656 18.666 20.0112 18.2127Z",
                      fill: "black"
                    }
                  })
                ]
              ),
              _vm._v(" "),
              _c(
                "p",
                {
                  on: {
                    click: function($event) {
                      return _vm.$emit("cancel")
                    }
                  }
                },
                [_vm._v("Get Back To Main Screen")]
              )
            ]
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-img" }, [
      _c("img", { attrs: { src: "/images/logo.png", alt: "" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-lg-6 col-md-6 col-sm-12 imger" }, [
      _c("img", { attrs: { src: "/images/Characters.png", alt: "" } })
    ])
  }
]
render._withStripped = true



/***/ })

}]);