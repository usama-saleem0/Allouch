(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_admin_influencer_page_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/influencer_page.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/influencer_page.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _admin_components_lib_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../admin/components/lib/api */ "./resources/js/views/admin/components/lib/api.js");
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'admin',
  data: function data() {
    var _ref;

    return _ref = {
      method: 'POST',
      model: {}
    }, _defineProperty(_ref, "model", []), _defineProperty(_ref, "model", ''), _ref;
  },
  created: function created() {
    var _this = this;

    (0,_admin_components_lib_api__WEBPACK_IMPORTED_MODULE_0__.get)('/get_all_influencers').then(function (res) {
      _this.setData(res);
    });
  },
  methods: {
    setData: function setData(res) {
      vue__WEBPACK_IMPORTED_MODULE_1__.default.set(this.$data, 'model', res.data.data);
      console.log(res.data.data); //   console.log(res.data)
    },
    profile_page: function profile_page(e) {
      this.$router.push("/admin/dashborad4/".concat(e));
    },
    profile: function profile() {
      this.$router.push('/admin/dashborad4');
    }
  }
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/influencer_page.vue?vue&type=style&index=0&id=6ba05ac2&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/influencer_page.vue?vue&type=style&index=0&id=6ba05ac2&scoped=true&lang=css& ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.card-box[data-v-6ba05ac2] {\r\n   \r\n\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    flex-wrap: wrap;\r\n    gap: 30px 0px;\n}\n.cards[data-v-6ba05ac2] {\r\n    border-radius: 16px;\r\n    border: 2px solid #000;\r\n    background: #F96;\r\n    box-shadow: 4px 4px 0px 2px #1B1C1D;\r\n    width: 30%;\r\n    height: 369px;\r\n    flex-shrink: 0;\r\n    padding: 30px;\r\n    cursor: pointer;\n}\n.id-box img[data-v-6ba05ac2] {\r\n    width: 47%;\r\n    border-radius: 50%;\r\n   \r\n    max-height: 190px;\r\n    min-height: 190px;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\n}\n.page-1[data-v-6ba05ac2] {\r\n    width: 100%;\r\n    background-color: #F5F3EA;\r\n    padding: 30px;\n}\n.contanir[data-v-6ba05ac2] {\r\n    width: 100%;\r\n    max-width: 1600px;\r\n    margin: 0 auto;\n}\n.card-box[data-v-6ba05ac2] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    flex-wrap: wrap;\r\n    gap: 30px 0px;\n}\n.cards[data-v-6ba05ac2] {\r\n    border-radius: 16px;\r\n    border: 2px solid #000;\r\n    background: #F96;\r\n    box-shadow: 4px 4px 0px 2px #1B1C1D;\r\n    width: 30%;\r\n    height: 100%;\r\n    flex-shrink: 0;\r\n    cursor: pointer;\n}\n.main[data-v-6ba05ac2] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\n}\n.box-1[data-v-6ba05ac2] {\r\n    height: 100%;\r\n    background: transparent;\r\n    width: 100%;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    gap: 38px;\n}\n.box-2[data-v-6ba05ac2] {\r\n    height: 100%;\r\n    flex-shrink: 0;\r\n    border-radius: 20px;\r\n    background: #FFF;\r\n    box-shadow: 0px 10px 54px 0px rgba(0, 0, 0, 0.25);\r\n    width: 30%;\r\n    padding: 30px;\n}\n.Sponsorship[data-v-6ba05ac2] {\r\n    width: 100%;\r\n    height: 100%;\r\n    flex-shrink: 0;\r\n    border-radius: 20px;\r\n   \r\n    padding: 30px 33px ;\n}\n.btn-box[data-v-6ba05ac2] {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: 30px 0px;\n}\n.btn-2[data-v-6ba05ac2] {\r\n    display: flex;\r\n    width: 46%;\r\n    justify-content: space-between;\n}\n.btn-1[data-v-6ba05ac2] {\r\n    width: 35%;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 18px;\n}\n.Campaign[data-v-6ba05ac2] {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 10px;\r\n    border-radius: 10px;\r\n    background: #FFF;\r\n    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\r\n    padding: 12px 20px;\n}\n.Campaign h2[data-v-6ba05ac2] {\r\n    padding: 0px;\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: normal;\n}\n.Campaign p[data-v-6ba05ac2] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 14px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: normal;\r\n    margin: 0px;\n}\n.over-btn[data-v-6ba05ac2] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    padding: 50px 0px 0px 0px;\n}\n.over-btn button[data-v-6ba05ac2] {\r\n    border-radius: 6px;\r\n    border: 1px solid #000;\r\n    background: #F96;\r\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\r\n    display: inline-flex;\r\n    padding: 10px 21.25px 10px 20px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 4.75px;\r\n    color: #FFF;\r\n    text-align: center;\r\n    font-family: sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 24px; /* 150% */\n}\n.btn-1 button[data-v-6ba05ac2] {\r\n    border-radius: 6px;\r\n    border: 1px solid #000;\r\n    background: #F96;\r\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\r\n    display: flex;\r\n    width: 154.75px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 7.647px;\r\n    flex-shrink: 0;\r\n    padding: 10px;\r\n    color: #FFF;\r\n    text-align: center;\r\n    font-family: sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 24px; /* 150% */\n}\nbutton.Add[data-v-6ba05ac2] {\r\n    border-radius: 6px;\r\n    border: 1px solid #000;\r\n    background: #F5F3EA;\r\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\r\n    color: #000;\n}\n.OverView[data-v-6ba05ac2] {\r\n    width: 100%;\r\n    padding-top: 75px;\n}\n.OverView h2[data-v-6ba05ac2] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 26px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: 24px; /* 92.308% */\r\n    margin: 0px;\r\n    padding-bottom: 30px;\n}\n.over-box[data-v-6ba05ac2] {\r\n    width: 100%;\r\n    display: flex;\n}\n.Over-card h4[data-v-6ba05ac2] {\r\n    color: #FF5757;\r\n    font-family: sans-serif;\r\n    font-size: 20px;\r\n    font-style: normal;\r\n    font-weight: 800;\r\n    line-height: 24px; /* 114.286% */\r\n    margin: 0px;\n}\n.Over-card h4 span[data-v-6ba05ac2] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 38px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 24px; /* 58.537% */\r\n    padding-left: 5px;\n}\n.Over-card[data-v-6ba05ac2] {\r\n    width: 25%;\n}\r\n\r\n/* .../ */\n.pox-1[data-v-6ba05ac2] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 20px;\r\n    border-bottom: 1px solid #000;\n}\n.pox-1 h2[data-v-6ba05ac2] {\r\n    color: #000;\r\n    text-align: center;\r\n    font-family: sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 800;\r\n    line-height: 24px; /* 150% */\r\n    margin: 0px;\r\n    padding: 0px;\n}\n.top-btn[data-v-6ba05ac2] {\r\n    width: 49%;\r\n    display: flex;\r\n    align-items: center;\n}\n.top-btn button[data-v-6ba05ac2] {\r\n    border: none;\r\n    background: transparent;\n}\n.pox-2[data-v-6ba05ac2] {\r\n    width: 100%;\r\n    padding: 20px;\n}\n.pox-2 p[data-v-6ba05ac2] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 18px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    letter-spacing: -0.96px;\r\n    margin: 0px;\n}\n.pox-2 h2[data-v-6ba05ac2] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    line-height: 24px; /* 150% */\r\n    padding: 15px 0px;\n}\n.pox-box[data-v-6ba05ac2] {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    gap: 10px 0px;\n}\n.yes[data-v-6ba05ac2] {\r\n    width: 50%;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 5px;\n}\n.pox-3[data-v-6ba05ac2] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: flex-end;\r\n    padding: 25px 0px 0px 0px;\n}\n.pox-3 h2[data-v-6ba05ac2] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 18px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    padding: 0px 0px 0px 0px;\n}\n.pox-3 p[data-v-6ba05ac2] {\r\n    color: #000;\r\n    text-align: center;\r\n    font-family: sans-serif;\r\n    font-size: 15px;\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    line-height: 24px; /* 150% */\r\n    width: 40%;\n}\n.pox-3 h2 span[data-v-6ba05ac2] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 20px;\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    line-height: normal;\n}\nbutton.llo[data-v-6ba05ac2] {\r\n    color: #fff;\n}\r\n\r\n\r\n\r\n/* .../ */\n.box-2 h2[data-v-6ba05ac2] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 18px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: normal;\n}\n.id-box[data-v-6ba05ac2] {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    padding: 70px 0px 120px 0px;\n}\n.id-box h2[data-v-6ba05ac2] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 26px;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    margin: 0px;\r\n    padding: 20px 0px 4px 0px;\n}\n.id-box h3[data-v-6ba05ac2] {color: #000;font-family: sans-serif;font-size: 16px;font-style: normal;font-weight: 500;line-height: normal;}\n.titel-box[data-v-6ba05ac2] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding-bottom: 20px;\n}\n.id-titel[data-v-6ba05ac2] {\r\n    display: flex;\r\n    align-items: center;\r\n    width: 30%;\r\n    justify-content: space-between;\n}\n.id-titel p[data-v-6ba05ac2] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: normal;\r\n    margin: 0px;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\n}\n.contact-box[data-v-6ba05ac2] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    padding-bottom: 40px;\n}\n.contact[data-v-6ba05ac2] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    gap: 15px;\n}\n.contact p[data-v-6ba05ac2] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    margin: 0px;\n}\n.para-box[data-v-6ba05ac2] {\r\n    width: 100%;\r\n    border-top: 1px solid #F96;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\n}\n.para-box p[data-v-6ba05ac2] {\r\n    color: #000;\r\n    text-align: center;\r\n    font-family: sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: 24px; /* 150% */\r\n    margin: 0px;\r\n    padding: 32px 0px 44px 0px;\n}\n.para-box button[data-v-6ba05ac2] {\r\n    border-radius: 6px;\r\n    border: 1px solid #000;\r\n    background: #F96;\r\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\r\n    display: flex;\r\n    width: 154.75px;\r\n    height: 44px;\r\n    padding: 10px 18px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 7.647px;\r\n    flex-shrink: 0;\r\n     /* 150% */\n}\n.para-box button p[data-v-6ba05ac2] {\r\n    color: #FFF;\r\n    text-align: center;\r\n    font-family: sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 24px; /* 150% */\r\n    padding: 0px;\n}\n.new-1[data-v-6ba05ac2] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\n}\n.new-2[data-v-6ba05ac2] {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\n}\n.new-3[data-v-6ba05ac2] {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\n}\n.rol-1[data-v-6ba05ac2] {\r\n    border-radius: 20px;\r\n    background: #FFF;\r\n    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\r\n    flex-shrink: 0;\r\n    width: 36%;\r\n    padding: 32px;\n}\n.rol-1 p[data-v-6ba05ac2] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: 24px; /* 150% */\r\n    margin: 0px;\r\n    padding-bottom: 12px;\n}\n.rol-1 h2[data-v-6ba05ac2] {\r\n    color: #1B1C1D;\r\n    font-family: sans-serif;\r\n    font-size: 66px;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\n}\n.new-btn-lid[data-v-6ba05ac2] {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\n}\n.new-btn-lid  button[data-v-6ba05ac2] {\r\n    border-radius: 6px;\r\n    border: 1px solid #000;\r\n    background: #F96;\r\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\r\n    display: flex;\r\n    width: 154.75px;\r\n    height: 44px;\r\n    padding: 10px 18px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 7.647px;\r\n    flex-shrink: 0;\n}\n.new-btn-lid button p[data-v-6ba05ac2] {\r\n    margin: 0px;\r\n    color: #FFF;\r\n    text-align: center;\r\n    font-family: sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 24px;\r\n    margin: 0px;\r\n    padding: 0px;\n}\n.rol-3[data-v-6ba05ac2] {\r\n    width: 62%;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding-top: 24px;\n}\n.rol-3 p[data-v-6ba05ac2] {\r\n    margin: 0px;\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: normal;\r\n    width: 100%;\n}\n.rol-card[data-v-6ba05ac2] {\r\n    width: 48%;\r\n    border-radius: 10px;\r\n    background: #FFF;\r\n    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: 10px 15px;\r\n    flex-wrap: wrap;\n}\n.rol-para h2[data-v-6ba05ac2] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: normal;\r\n    margin: 0px;\n}\n.rol-para[data-v-6ba05ac2] {\r\n    width: 84%;\n}\n.rol-para p[data-v-6ba05ac2] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 14px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: normal;\r\n    margin: 0px;\n}\n.div-1[data-v-6ba05ac2] {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-around;\n}\n.div-1 h2[data-v-6ba05ac2] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    margin: 0px;\r\n    width: 80%;\n}\n.div-1 p[data-v-6ba05ac2] {\r\n    width: 20%;\n}\n.div-2[data-v-6ba05ac2] {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding-top: 15px;\n}\n.Enrolled[data-v-6ba05ac2] {\r\n    display: flex;\r\n    align-items: center;\r\n    width: 58%;\n}\n.Reviews[data-v-6ba05ac2] {\r\n    width: 40%;\r\n    display: flex;\r\n    align-items: center;\n}\n.short-card[data-v-6ba05ac2] {\r\n    width: 24%;\r\n    border-radius: 20px;\r\n    background: #FFF;\r\n    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\r\n    padding: 18px 25px;\n}\n.short-card p[data-v-6ba05ac2] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: 24px; /* 150% */\r\n    margin: 0px;\n}\n.short-card h2[data-v-6ba05ac2] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 42px;\r\n    font-style: normal;\r\n    font-weight: 1000;\r\n    line-height: normal;\r\n    margin: 0px;\r\n    padding: 12px 0px 5px 0px;\n}\n.short-card h3[data-v-6ba05ac2] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    margin: 0px;\n}\n.dashbord-card[data-v-6ba05ac2] {\r\n    background: #FFF;\r\n    box-shadow: 4px 0px 24px 0px rgba(0, 0, 0, 0.25);\r\n    height: 417px;\r\n    flex-shrink: 0;\r\n    width: 64%;\r\n    border-radius: 20px 0px 0px 20px;\n}\n.conting-card[data-v-6ba05ac2] {\r\n    height: 417px;\r\n    flex-shrink: 0;\r\n    background: #FFF;\r\n    box-shadow: 4px 0px 24px 0px rgba(0, 0, 0, 0.25);\r\n    width: 35%;\r\n    padding: 42px 40px;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    border-radius: 0px 20px 20px 0px;\n}\n.conting-card h2[data-v-6ba05ac2] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 26px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: 24px; /* 92.308% */\r\n    width: 100%;\r\n    margin: 0px;\n}\n.divs[data-v-6ba05ac2] {\r\n    width: 48%;\n}\n.divs h2[data-v-6ba05ac2] {\r\n    color: #F96;\r\n    font-family: sans-serif;\r\n    font-size: 21px;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: 24px; /* 114.286% */\r\n    margin: 0px;\n}\n.divs h3[data-v-6ba05ac2] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 41px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 24px; /* 58.537% */\r\n    margin: 0px;\r\n    padding-top: 20px;\n}\n.poxi-1[data-v-6ba05ac2] {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 30px;\n}\n.poxi-2[data-v-6ba05ac2] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding-top: 10px;\n}\n.poxi-3[data-v-6ba05ac2] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 45px 0px 21px 0px;\n}\n.poxi-4[data-v-6ba05ac2] {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\n}\n.poxi-1 img[data-v-6ba05ac2] {\r\n    border-radius: 80px;\r\n    width: 80px;\r\n    height: 80px;\r\n    flex-shrink: 0;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\n}\n.poxi-titel h2[data-v-6ba05ac2] {\r\n    color: #000;\r\n    font-family: auto;\r\n    font-size: 20px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\n}\n.poxi-titel h2[data-v-6ba05ac2] {\r\n    color: #000;\r\n    font-family: fantasy;\r\n    font-size: 20px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\n}\n.poxi-titel p[data-v-6ba05ac2] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: normal;\r\n    padding: 0px;\r\n    margin: 0px;\n}\n.poxi2-titel[data-v-6ba05ac2] {\r\n    width: 28%;\n}\n.poxi2-titel0[data-v-6ba05ac2] {\r\n    width: 34%;\n}\n.poxi2-titel h2[data-v-6ba05ac2] {\r\n    color: #000;\r\n    font-family: fantasy;\r\n    font-size: 34px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    margin: 0px;\n}\n.poxi2-titel0 h2[data-v-6ba05ac2] {\r\n    color: #000;\r\n    font-family: fantasy;\r\n    font-size: 34px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    margin: 0px;\r\n    border-left: 1px solid #000;\r\n    border-right: 1px solid #000;\r\n    text-align: center;\n}\nh2.spon-para[data-v-6ba05ac2] {\r\n    color: #000;\r\n    font-family: fantasy;\r\n    font-size: 30px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: normal;\r\n    padding-bottom: 24px;\n}\n*[data-v-6ba05ac2] {\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\n}\n.poxi2-titel p[data-v-6ba05ac2] {\r\n    color: #000;\r\n    font-family: fantasy;\r\n    font-size: 10px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    margin: 0px;\n}\n.poxi2-titel0 p[data-v-6ba05ac2] {\r\n    color: #000;\r\n    font-family: fantasy;\r\n    font-size: 10px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    margin: 0px;\r\n    text-align: center;\n}\n.poxi3-box[data-v-6ba05ac2] {\r\n    width: 44%;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 5px;\n}\n.poxi3-box h3[data-v-6ba05ac2] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 13px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: normal;\r\n    margin: 0px;\r\n    margin: 0px;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\n}\n.poxi4-box[data-v-6ba05ac2] {\r\n    width: 60%;\n}\n.poxi4-box p[data-v-6ba05ac2] {\r\n    color: #000;\r\n    font-size: 18px;\r\n    font-family: sans-serif;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    margin: 0px;\n}\n.poxi4-box h2[data-v-6ba05ac2] {\r\n    color: #000;\r\n    font-family: fantasy;\r\n    font-size: 18px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    margin: 0px;\n}\n.poxi42-box[data-v-6ba05ac2] {\r\n    width: 40%;\n}\n.poxi42-box p[data-v-6ba05ac2] {\r\n    color: #000;\r\n    font-size: 18px;\r\n    font-family: sans-serif;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    margin: 0px;\n}\n.poxi42-box h2[data-v-6ba05ac2] {\r\n    color: #000;\r\n    font-family: fantasy;\r\n    font-size: 18px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    margin: 0px;\n}\n@media screen and (max-width: 1600px){\n.contanir[data-v-6ba05ac2] {\r\n    width: 100%;\r\n    max-width: 1440px;\r\n    margin: 0 auto;\n}\n.dashbord-card[data-v-6ba05ac2] {\r\n    background: #FFF;\r\n    box-shadow: 4px 0px 24px 0px rgba(0, 0, 0, 0.25);\r\n    height: 400px;\r\n    flex-shrink: 0;\r\n    width: 64%;\r\n    border-radius: 20px 0px 0px 20px;\n}\n.divs h2[data-v-6ba05ac2] {\r\n    color: #F96;\r\n    font-family: sans-serif;\r\n    font-size: 18px;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: 24px;\r\n    margin: 0px;\n}\n.divs h3[data-v-6ba05ac2] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 38px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 24px;\r\n    margin: 0px;\r\n    padding-top: 12px;\n}\n.rol-1 h2[data-v-6ba05ac2] {\r\n    color: #1B1C1D;\r\n    font-family: sans-serif;\r\n    font-size: 55px;\r\n    font-style: normal;\r\n    font-weight: 1000;\r\n    line-height: normal;\r\n    text-align: center;\n}\n.new-btn-lid button[data-v-6ba05ac2] {\r\n    border-radius: 6px;\r\n    border: 1px solid #000;\r\n    background: #F96;\r\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\r\n    display: flex;\r\n    width: 130px;\r\n    height: 38px;\r\n    padding: 10px 18px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 7.647px;\r\n    flex-shrink: 0;\n}\n.new-btn-lid button p[data-v-6ba05ac2] {\r\n    margin: 0px;\r\n    color: #FFF;\r\n    text-align: center;\r\n    font-family: sans-serif;\r\n    font-size: 12px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 24px;\r\n    margin: 0px;\r\n    padding: 0px;\n}\n.rol-1[data-v-6ba05ac2] {\r\n    border-radius: 20px;\r\n    background: #FFF;\r\n    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\r\n    flex-shrink: 0;\r\n    width: 36%;\r\n    padding: 30px;\n}\n.rol-3[data-v-6ba05ac2] {\r\n    width: 62%;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding-top: 15px;\n}\n.rol-card svg[data-v-6ba05ac2] {\r\n    width: 26px;\r\n    height: 25px;\n}\n.rol-3 p[data-v-6ba05ac2] {\r\n    margin: 0px;\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 14px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: normal;\r\n    width: 100%;\n}\n.rol-para p[data-v-6ba05ac2] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 12px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: normal;\r\n    margin: 0px;\n}\n.pox-1[data-v-6ba05ac2] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 12px;\r\n    border-bottom: 1px solid #000;\n}\n.top-btn button[data-v-6ba05ac2] {\r\n    border: none;\r\n    background: transparent;\r\n    padding: 4px;\n}\n.yes[data-v-6ba05ac2] {\r\n    width: 50%;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 2px;\n}\n.pox-3 h2 span[data-v-6ba05ac2] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 17px;\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    line-height: normal;\n}\n.div-1 p[data-v-6ba05ac2] {\r\n    width: 20%;\n}\n.short-card h2[data-v-6ba05ac2] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 38px;\r\n    font-style: normal;\r\n    font-weight: 1000;\r\n    line-height: normal;\r\n    margin: 0px;\r\n    padding: 5px 0px 0px 0px;\n}\n.conting-card[data-v-6ba05ac2] {\r\n    height: 400px;\r\n    flex-shrink: 0;\r\n    background: #FFF;\r\n    box-shadow: 4px 0px 24px 0px rgba(0, 0, 0, 0.25);\r\n    width: 35%;\r\n    padding: 15px 25px;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    border-radius: 0px 20px 20px 0px;\n}\n.id-box[data-v-6ba05ac2] {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    padding: 35px 0px 70px 0px;\n}\n.short-card[data-v-6ba05ac2] {\r\n    width: 24%;\r\n    border-radius: 20px;\r\n    background: #FFF;\r\n    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\r\n    padding: 14px 20px;\n}\n.pox-3 p[data-v-6ba05ac2] {\r\n \r\n    color: #000;\r\n    text-align: center;\r\n    font-family: sans-serif;\r\n    font-size: 14px;\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    line-height: 24px;\r\n    width: 40%;\n}\n.pox-3 h2[data-v-6ba05ac2] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 17px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    padding: 0px 0px 0px 0px;\n}\n.btn-1 button[data-v-6ba05ac2] {\r\n    border-radius: 6px;\r\n    border: 1px solid #000;\r\n    background: #F96;\r\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\r\n    display: flex;\r\n    width: 154.75px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 7.647px;\r\n    flex-shrink: 0;\r\n    padding: 8px;\r\n    color: #FFF;\r\n    text-align: center;\r\n    font-family: sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 24px;\n}\n.btn-2[data-v-6ba05ac2] {\r\n    display: flex;\r\n    width: 50%;\r\n    justify-content: space-between;\n}\n.id-titel[data-v-6ba05ac2] {\r\n    display: flex;\r\n    align-items: center;\r\n    width: 32%;\r\n    justify-content: space-between;\n}\n.over-btn button[data-v-6ba05ac2] {\r\n    border-radius: 6px;\r\n    border: 1px solid #000;\r\n    background: #F96;\r\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\r\n    display: inline-flex;\r\n    padding: 8px 21.25px 8px 20px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 4.75px;\r\n    color: #FFF;\r\n    text-align: center;\r\n    font-family: sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 24px;\n}\n.Over-card h4 span[data-v-6ba05ac2] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 35px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 24px;\r\n    padding-left: 5px;\n}\n.Over-card h4[data-v-6ba05ac2] {\r\n    color: #FF5757;\r\n    font-family: sans-serif;\r\n    font-size: 18px;\r\n    font-style: normal;\r\n    font-weight: 800;\r\n    line-height: 24px;\r\n    margin: 0px;\n}\n.para-box button[data-v-6ba05ac2] {\r\n    border-radius: 6px;\r\n    border: 1px solid #000;\r\n    background: #F96;\r\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\r\n    display: flex;\r\n    width: 154.75px;\r\n    height: 42px;\r\n    padding: 10px 18px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 7.647px;\r\n    flex-shrink: 0;\n}\n.cards[data-v-6ba05ac2] {\r\n    border-radius: 15px;\r\n    border: 2px solid #000;\r\n    background: #F96;\r\n    box-shadow: 4px 4px 0px 2px #1B1C1D;\r\n    width: 30%;\r\n    height: 100%;\r\n    flex-shrink: 0;\r\n    padding: 20px;\r\n    cursor: pointer;\n}\nbutton.Add[data-v-6ba05ac2] {\r\n    border-radius: 6px;\r\n    border: 1px solid #000 !important;\r\n    background: #F5F3EA !important;\r\n    box-shadow: 2px 2px 0px 0px #1B1C1D !important; \r\n    color: #000 !important;\n}\n.poxi-1 img[data-v-6ba05ac2] {\r\n    border-radius: 80px;\r\n    width: 70px;\r\n    height: 70px;\r\n    flex-shrink: 0;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\n}\n.poxi-titel h2[data-v-6ba05ac2] {\r\n    color: #000;\r\n    font-family: fantasy;\r\n    font-size: 18px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\n}\n.poxi-titel p[data-v-6ba05ac2] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 14px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: normal;\r\n    padding: 0px;\r\n    margin: 0px;\n}\n.poxi-1[data-v-6ba05ac2] {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 15px;\n}\n.poxi2-titel h2[data-v-6ba05ac2] {\r\n    color: #000;\r\n    font-family: fantasy;\r\n    font-size: 30px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    margin: 0px;\n}\n.poxi2-titel0 h2[data-v-6ba05ac2] {\r\n    color: #000;\r\n    font-family: fantasy;\r\n    font-size: 30px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    margin: 0px;\r\n    border-left: 1px solid #000;\r\n    border-right: 1px solid #000;\r\n    text-align: center;\n}\n.poxi3-box h3[data-v-6ba05ac2] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 12px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: normal;\r\n    margin: 0px;\r\n    margin: 0px;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\n}\n.poxi3-box[data-v-6ba05ac2] {\r\n    width: 44%;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 3px;\n}\n.poxi-3[data-v-6ba05ac2] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 30px 0px 18px 0px;\n}\n.poxi4-box p[data-v-6ba05ac2] {\r\n    color: #000;\r\n    font-size: 16px;\r\n    font-family: sans-serif;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    margin: 0px;\n}\n.poxi4-box h2[data-v-6ba05ac2] {\r\n    color: #000;\r\n    font-family: fantasy;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    margin: 0px;\n}\n.poxi42-box p[data-v-6ba05ac2] {\r\n    color: #000;\r\n    font-size: 16px;\r\n    font-family: sans-serif;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    margin: 0px;\n}\n.poxi42-box h2[data-v-6ba05ac2] {\r\n    color: #000;\r\n    font-family: fantasy;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    margin: 0px;\n}\n}\n@media screen and (max-width: 1440px){\n.id-box h3[data-v-6ba05ac2] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 14px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: normal;\n}\n.contanir[data-v-6ba05ac2] {\r\n    width: 100%;\r\n    max-width: 1170px;\r\n    margin: 0 auto;\n}\n.div-1 h2[data-v-6ba05ac2] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 14px;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    margin: 0px;\r\n    width: 80%;\n}\n.rol-para h2[data-v-6ba05ac2] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 12px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: normal;\r\n    margin: 0px;\n}\n.rol-3 p[data-v-6ba05ac2] {\r\n    margin: 0px;\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 13px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: normal;\r\n    width: 100%;\n}\n.rol-1 h2[data-v-6ba05ac2] {\r\n    color: #1B1C1D;\r\n    font-family: sans-serif;\r\n    font-size: 38px;\r\n    font-style: normal;\r\n    font-weight: 1000;\r\n    line-height: normal;\r\n    text-align: center;\n}\n.new-btn-lid button[data-v-6ba05ac2] {\r\n    border-radius: 6px;\r\n    border: 1px solid #000;\r\n    background: #F96;\r\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\r\n    display: flex;\r\n    width: 110px;\r\n    height: 34px;\r\n    padding: 10px 0px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 4px;\r\n    flex-shrink: 0;\n}\n.div-1 svg[data-v-6ba05ac2] {\r\n    width: 20px;\r\n    height: 20px;\n}\n.div-1 p[data-v-6ba05ac2] {\r\n    width: 20%;\r\n    font-size: 12px;\n}\n.rol-para p[data-v-6ba05ac2] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 10px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: normal;\r\n    margin: 0px;\n}\n.Reviews p[data-v-6ba05ac2] {\r\n    font-size: 10px;\n}\n.Enrolled p[data-v-6ba05ac2] {\r\n    font-size: 10px;\n}\n.div-2[data-v-6ba05ac2] {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding-top: 3px;\n}\n.short-card p[data-v-6ba05ac2] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 15px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: 24px;\r\n    margin: 0px;\n}\n.short-card h2[data-v-6ba05ac2] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 25px;\r\n    font-style: normal;\r\n    font-weight: 1000;\r\n    line-height: normal;\r\n    margin: 0px;\r\n    padding: 0px 0px 0px 0px;\n}\n.short-card[data-v-6ba05ac2] {\r\n    width: 24%;\r\n    border-radius: 15px;\r\n    background: #FFF;\r\n    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\r\n    padding: 12px 20px;\n}\n.dashbord-card[data-v-6ba05ac2] {\r\n    background: #FFF;\r\n    box-shadow: 4px 0px 24px 0px rgba(0, 0, 0, 0.25);\r\n    height: 350px;\r\n    flex-shrink: 0;\r\n    width: 64%;\r\n    border-radius: 20px 0px 0px 20px;\n}\n.conting-card[data-v-6ba05ac2] {\r\n    height: 350px;\r\n    flex-shrink: 0;\r\n    background: #FFF;\r\n    box-shadow: 4px 0px 24px 0px rgba(0, 0, 0, 0.25);\r\n    width: 35%;\r\n    padding: 15px 25px;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    border-radius: 0px 20px 20px 0px;\n}\n.box-1[data-v-6ba05ac2] {\r\n    height: 100%;\r\n    background: transparent;\r\n    width: 100%;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    gap: 30px;\n}\n.divs h2[data-v-6ba05ac2] {\r\n    color: #F96;\r\n    font-family: sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: 24px;\r\n    margin: 0px;\n}\n.divs h3[data-v-6ba05ac2] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 28px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 24px;\r\n    margin: 0px;\r\n    padding-top: 10px;\n}\n.conting-card[data-v-6ba05ac2] {\r\n    height: 350px;\r\n    flex-shrink: 0;\r\n    background: #FFF;\r\n    box-shadow: 4px 0px 24px 0px rgba(0, 0, 0, 0.25);\r\n    width: 35%;\r\n    padding: 12px 15px;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    border-radius: 0px 20px 20px 0px;\n}\n.id-box[data-v-6ba05ac2] {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    padding: 40px 0px 65px 0px;\n}\n.rol-1[data-v-6ba05ac2] {\r\n    border-radius: 20px;\r\n    background: #FFF;\r\n    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\r\n    flex-shrink: 0;\r\n    width: 36%;\r\n    padding: 20px;\n}\n.pox-2 h2[data-v-6ba05ac2] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    line-height: 20px;\r\n    padding: 12px 0px;\n}\n.Sponsorship[data-v-6ba05ac2] {\r\n    width: 100%;\r\n    height: 100%;\r\n    flex-shrink: 0;\r\n    border-radius: 20px;\r\n  \r\n    padding: 30px 20px;\n}\n.OverView[data-v-6ba05ac2] {\r\n    width: 100%;\r\n    padding-top: 60px;\n}\n.OverView h2[data-v-6ba05ac2] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 24px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: 24px;\r\n    margin: 0px;\r\n    padding-bottom: 20px;\n}\n.Over-card h4[data-v-6ba05ac2] {\r\n    color: #FF5757;\r\n    font-family: sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 800;\r\n    line-height: 24px;\r\n    margin: 0px;\n}\n.Over-card h4 span[data-v-6ba05ac2] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 28px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 24px;\r\n    padding-left: 0px;\n}\n.over-btn[data-v-6ba05ac2] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    padding: 40px 0px 0px 0px;\n}\n.over-btn button[data-v-6ba05ac2] {\r\n    border-radius: 6px;\r\n    border: 1px solid #000;\r\n    background: #F96;\r\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\r\n    display: inline-flex;\r\n    padding: 7px 16.25px 7px 15px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 4.75px;\r\n    color: #FFF;\r\n    text-align: center;\r\n    font-family: sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 24px;\n}\n.top-btn button[data-v-6ba05ac2] {\r\n    border: none;\r\n    background: transparent;\r\n    padding: 4px;\r\n    display: flex;\r\n    align-items: center;\n}\n.top-btn button svg[data-v-6ba05ac2] {\r\n    width: 15px;\r\n    height: 15px;\n}\n.top-btn[data-v-6ba05ac2] {\r\n    width: 42%;\r\n    display: flex;\r\n    align-items: center;\n}\n.pox-1[data-v-6ba05ac2] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 8px;\r\n    border-bottom: 1px solid #000;\n}\n.top-btn button span[data-v-6ba05ac2] {\r\n    font-size: 12px;\n}\n.pox-1 h2[data-v-6ba05ac2] {\r\n    color: #000;\r\n    text-align: center;\r\n    font-family: sans-serif;\r\n    font-size: 14px;\r\n    font-style: normal;\r\n    font-weight: 800;\r\n    line-height: 24px;\r\n    margin: 0px;\r\n    padding: 0px;\n}\n.pox-2[data-v-6ba05ac2] {\r\n    width: 100%;\r\n    padding: 10px;\n}\n.pox-2 p[data-v-6ba05ac2] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    letter-spacing: -0.96px;\r\n    margin: 0px;\n}\n.pox-3 h2[data-v-6ba05ac2] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 14px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    padding: 0px 0px 0px 0px;\r\n    width: 58%;\n}\n.pox-3[data-v-6ba05ac2] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: flex-end;\r\n    padding: 15px 0px;\n}\n.pox-box[data-v-6ba05ac2] {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    gap: 5px 0px;\n}\n.cards[data-v-6ba05ac2] {\r\n    border-radius: 14px;\r\n    border: 2px solid #000;\r\n    background: #F96;\r\n    box-shadow: 4px 4px 0px 2px #1B1C1D;\r\n    width: 32%;\r\n    height: 100%;\r\n    flex-shrink: 0;\r\n    padding: 15px;\r\n    cursor: pointer;\n}\n.yes p[data-v-6ba05ac2] {\r\n    font-size: 14px;\n}\n.pox-3 h2 span[data-v-6ba05ac2] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 15px;\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    line-height: normal;\n}\n.pox-3 p[data-v-6ba05ac2] {\r\n    color: #000;\r\n    text-align: center;\r\n    font-family: sans-serif;\r\n    font-size: 12px;\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    line-height: 24px;\r\n    width: 44%;\r\n    margin: 0px;\r\n    padding: 0px;\n}\n.btn-1 button[data-v-6ba05ac2] {\r\n    border-radius: 6px;\r\n    border: 1px solid #000;\r\n    background: #F96;\r\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\r\n    display: flex;\r\n    width: 130.75px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 7.647px;\r\n    flex-shrink: 0;\r\n    padding: 6px;\r\n    color: #FFF;\r\n    text-align: center;\r\n    font-family: sans-serif;\r\n    font-size: 14px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 24px;\n}\n.btn-2[data-v-6ba05ac2] {\r\n    display: flex;\r\n    width: 52%;\r\n    justify-content: space-between;\n}\n.Campaign[data-v-6ba05ac2] {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 8px;\r\n    border-radius: 10px;\r\n    background: #FFF;\r\n    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\r\n    padding: 8px 10px;\n}\n.Campaign svg[data-v-6ba05ac2] {\r\n    width: 30px;\r\n    height: 30px;\n}\n.id-box[data-v-6ba05ac2] {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    padding: 50px 0px 80px 0px;\n}\r\n/* .id-box img {\r\n    width: 40%;\r\n} */\n.id-box img[data-v-6ba05ac2] {\r\n    width: 50%;\r\n    border-radius: 50%;\r\n   \r\n    max-height: 150px;\r\n    min-height: 150px;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\n}\n.id-box h2[data-v-6ba05ac2] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 24px;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    margin: 0px;\r\n    padding: 15px 0px 2px 0px;\n}\n.contact[data-v-6ba05ac2] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    gap: 5px;\n}\n.contact p[data-v-6ba05ac2] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 12px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    margin: 0px;\n}\n.id-titel p[data-v-6ba05ac2] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 10px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: normal;\r\n    margin: 0px;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\n}\n.id-titel svg[data-v-6ba05ac2] {\r\n    width: 18px;\r\n    height: 18px;\n}\n.contact-box[data-v-6ba05ac2] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    padding-bottom: 15px;\n}\n.para-box p[data-v-6ba05ac2] {\r\n    color: #000;\r\n    text-align: center;\r\n    font-family: sans-serif;\r\n    font-size: 13px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: 24px;\r\n    margin: 0px;\r\n    padding: 25px 0px 25px 0px;\n}\n.para-box button[data-v-6ba05ac2] {\r\n    border-radius: 6px;\r\n    border: 1px solid #000;\r\n    background: #F96;\r\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\r\n    display: flex;\r\n    width: 144.75px;\r\n    height: 38px;\r\n    padding: 10px 18px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 7.647px;\r\n    flex-shrink: 0;\n}\n.main[data-v-6ba05ac2] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: flex-start;\n}\n.box-2[data-v-6ba05ac2] {\r\n    height: 100%;\r\n    flex-shrink: 0;\r\n    border-radius: 20px;\r\n    background: #FFF;\r\n    box-shadow: 0px 10px 54px 0px rgba(0, 0, 0, 0.25);\r\n    width: 30%;\r\n    padding: 24px;\n}\n.poxi-1 img[data-v-6ba05ac2] {\r\n    border-radius: 80px;\r\n    width: 60px;\r\n    height: 60px;\r\n    flex-shrink: 0;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\n}\n.poxi-titel h2[data-v-6ba05ac2] {\r\n    color: #000;\r\n    font-family: fantasy;\r\n    font-size: 18px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    padding-bottom: 4px;\n}\n.poxi-1[data-v-6ba05ac2] {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 10px;\n}\n.poxi2-titel h2[data-v-6ba05ac2] {\r\n    color: #000;\r\n    font-family: fantasy;\r\n    font-size: 23px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    margin: 0px;\n}\n.poxi2-titel p[data-v-6ba05ac2] {\r\n    color: #000;\r\n    font-family: fantasy;\r\n    font-size: 9px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    margin: 0px;\n}\n.poxi2-titel0 h2[data-v-6ba05ac2] {\r\n    color: #000;\r\n    font-family: fantasy;\r\n    font-size: 24px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    margin: 0px;\r\n    border-left: 1px solid #000;\r\n    border-right: 1px solid #000;\r\n    text-align: center;\n}\n.poxi2-titel0 p[data-v-6ba05ac2] {\r\n    color: #000;\r\n    font-family: fantasy;\r\n    font-size: 8px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    margin: 0px;\r\n    text-align: center;\n}\n.poxi3-box[data-v-6ba05ac2] {\r\n    width: 48%;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 3px;\n}\nh2.spon-para[data-v-6ba05ac2] {\r\n    color: #000;\r\n    font-family: fantasy;\r\n    font-size: 30px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: normal;\r\n    padding-bottom: 15px;\n}\n}\n@media screen and (max-width: 1024px){\n.page-1[data-v-6ba05ac2] {\r\n    width: 100%;\r\n    background-color: #F5F3EA;\r\n    padding: 40px;\n}\n.main[data-v-6ba05ac2] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-wrap: wrap;\r\n    gap: 55px 0px;\n}\n.box-1[data-v-6ba05ac2] {\r\n  height: 100%;\r\n    background: transparent;\r\n    width: 100%;\n}\n.box-2[data-v-6ba05ac2] {\r\n    height: 720px;\r\n    flex-shrink: 0;\r\n    border-radius: 20px;\r\n    background: #FFF;\r\n    box-shadow: 0px 10px 54px 0px rgba(0, 0, 0, 0.25);\r\n    width: 42%;\r\n    padding: 24px;\n}\n.btn-2[data-v-6ba05ac2] {\r\n    display: flex;\r\n    width: 44%;\r\n    justify-content: space-between;\n}\n}\n@media screen and (max-width: 768px){\n.cards[data-v-6ba05ac2] {\r\n    border-radius: 16px;\r\n    border: 2px solid #000;\r\n    background: #F96;\r\n    box-shadow: 4px 4px 0px 2px #1B1C1D;\r\n    width: 44%;\r\n    height: 100%;\r\n    flex-shrink: 0;\r\n    cursor: pointer;\n}\n.new-1[data-v-6ba05ac2] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    flex-direction: column;\n}\n.rol-1[data-v-6ba05ac2] {\r\n    border-radius: 20px;\r\n    background: #FFF;\r\n    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\r\n    flex-shrink: 0;\r\n    width: 45%;\r\n    padding: 20px;\n}\n.rol-3[data-v-6ba05ac2] {\r\n    width: 75%;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding-top: 15px;\r\n    gap: 15px;\n}\n.card-box[data-v-6ba05ac2] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n    gap: 31px;\r\n\r\n\r\n    /* width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    flex-wrap: wrap;\r\n    gap: 30px 0px; */\n}\n.btn-box[data-v-6ba05ac2] {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: stretch;\r\n    justify-content: space-between;\r\n    padding: 30px 0px 0px 0px ; \r\n    flex-direction: column;\r\n    gap: 25px;\n}\n.btn-2[data-v-6ba05ac2] {\r\n    display: flex;\r\n    width: 60%;\r\n    justify-content: space-between;\n}\n.box-2[data-v-6ba05ac2] {\r\n    height: 720px;\r\n    flex-shrink: 0;\r\n    border-radius: 20px;\r\n    background: #FFF;\r\n    box-shadow: 0px 10px 54px 0px rgba(0, 0, 0, 0.25);\r\n    width: 58%;\r\n    padding: 24px;\n}\n.Sponsorship[data-v-6ba05ac2] {\r\n    width: 100%;\r\n    height: 100%;\r\n    flex-shrink: 0;\r\n    border-radius: 20px;\r\n   \r\n    padding: 30px 20px;\n}\n}\n@media screen and (max-width: 425px){\n.short-card h3[data-v-6ba05ac2] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 12px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    margin: 0px;\n}\n.id-titel p[data-v-6ba05ac2] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 8px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: normal;\r\n    margin: 0px;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\n}\n.contact p[data-v-6ba05ac2] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 10px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    margin: 0px;\n}\n.rol-1 p[data-v-6ba05ac2] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 13px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: 24px;\r\n    margin: 0px;\r\n    padding-bottom: 12px;\n}\n.page-1[data-v-6ba05ac2] {\r\n    width: 100%;\r\n    background-color: #F5F3EA;\r\n    padding: 20px;\n}\n.rol-card svg[data-v-6ba05ac2] {\r\n    width: 20px;\r\n    height: 20px;\n}\n.yes[data-v-6ba05ac2] {\r\n    width: 50%;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 2px;\r\n    justify-content: center;\n}\n.cards[data-v-6ba05ac2] {\r\n    border-radius: 16px;\r\n    border: 2px solid #000;\r\n    background: #F96;\r\n    box-shadow: 4px 4px 0px 2px #1B1C1D;\r\n    width: 85%;\r\n    height: 100%;\r\n    flex-shrink: 0;\r\n    cursor: pointer;\n}\n.btn-box[data-v-6ba05ac2] {\r\n    width: 100%;\r\n    display: flex;\r\n    padding: 30px 0px 0px 0px;\r\n    flex-direction: column;\r\n    gap: 25px ;\r\n    align-content: center;\r\n    align-items: center;\n}\n.btn-1[data-v-6ba05ac2] {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 18px;\r\n    justify-content: center;\n}\n.btn-2[data-v-6ba05ac2] {\r\n    display: flex;\r\n    width: 60%;\r\n    flex-direction: column;\r\n    gap: 12px;\n}\n.over-box[data-v-6ba05ac2] {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    gap: 20px 0px;\n}\n.Over-card[data-v-6ba05ac2] {\r\n    width: 50%;\n}\n.OverView[data-v-6ba05ac2] {\r\n    width: 100%;\r\n    padding-top: 40px;\n}\n.over-btn button[data-v-6ba05ac2] {\r\n    border-radius: 6px;\r\n    border: 1px solid #000;\r\n    background: #F96;\r\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\r\n    display: inline-flex;\r\n    padding: 6px 16.25px 6px 15px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 4.75px;\r\n    color: #FFF;\r\n    text-align: center;\r\n    font-family: sans-serif;\r\n    font-size: 14px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 24px;\n}\n.over-btn[data-v-6ba05ac2] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    padding: 30px 0px 0px 0px;\n}\n.box-2[data-v-6ba05ac2] {\r\n    height: 100%;\r\n    flex-shrink: 0;\r\n    border-radius: 20px;\r\n    background: #FFF;\r\n    box-shadow: 0px 10px 54px 0px rgba(0, 0, 0, 0.25);\r\n    width: 90%;\n}\n.id-box[data-v-6ba05ac2] {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    padding: 30px 0px 50px 0px;\n}\n.rol-1[data-v-6ba05ac2] {\r\n    border-radius: 20px;\r\n    background: #FFF;\r\n    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\r\n    flex-shrink: 0;\r\n    width: 100%;\r\n    padding: 20px;\n}\n.new-btn-lid[data-v-6ba05ac2] {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 20px;\n}\n.rol-3[data-v-6ba05ac2] {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding-top: 15px;\r\n    gap: 10px;\n}\n.rol-card[data-v-6ba05ac2] {\r\n    width: 48%;\r\n    border-radius: 10px;\r\n    background: #FFF;\r\n    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: 12px 10px;\r\n    flex-wrap: wrap;\n}\n.rol-para h2[data-v-6ba05ac2] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 12px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: normal;\r\n    margin: 0px;\n}\n.rol-para p[data-v-6ba05ac2] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 8px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: normal;\r\n    margin: 0px;\n}\n.div-1 h2[data-v-6ba05ac2] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 12px;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    margin: 0px;\r\n    width: 80%;\n}\n.div-1 svg[data-v-6ba05ac2] {\r\n    width: 15px;\r\n    height: 15px;\n}\n.Enrolled p[data-v-6ba05ac2] {\r\n    font-size: 7px;\n}\n.Reviews p[data-v-6ba05ac2] {\r\n    font-size: 7px;\n}\n.Enrolled svg[data-v-6ba05ac2] {\r\n    width: 18px;\r\n    height: 18px;\n}\n.Reviews svg[data-v-6ba05ac2] {\r\n    width: 18px;\r\n    height: 18px;\n}\n.new-2[data-v-6ba05ac2] {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    flex-wrap: wrap;\r\n    gap: 30px;\n}\n.short-card[data-v-6ba05ac2] {\r\n    width: 42%;\r\n    background: #FFF;\r\n    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\r\n    padding: 12px 20px;\n}\n.new-3[data-v-6ba05ac2] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 28px;\n}\n.dashbord-card[data-v-6ba05ac2] {\r\n    background: #FFF;\r\n    box-shadow: 4px 0px 24px 0px rgba(0, 0, 0, 0.25);\r\n    height: 100%;\r\n    flex-shrink: 0;\r\n    width: 90%;\r\n    border-radius: 20px;\n}\n.conting-card[data-v-6ba05ac2] {\r\n    height: 350px;\r\n    flex-shrink: 0;\r\n    background: #FFF;\r\n    box-shadow: 4px 0px 24px 0px rgba(0, 0, 0, 0.25);\r\n    width: 76%;\r\n    padding: 12px 15px;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    border-radius: 20px;\n}\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/influencer_page.vue?vue&type=style&index=0&id=6ba05ac2&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/influencer_page.vue?vue&type=style&index=0&id=6ba05ac2&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_influencer_page_vue_vue_type_style_index_0_id_6ba05ac2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./influencer_page.vue?vue&type=style&index=0&id=6ba05ac2&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/influencer_page.vue?vue&type=style&index=0&id=6ba05ac2&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_influencer_page_vue_vue_type_style_index_0_id_6ba05ac2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_influencer_page_vue_vue_type_style_index_0_id_6ba05ac2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/views/admin/influencer_page.vue":
/*!******************************************************!*\
  !*** ./resources/js/views/admin/influencer_page.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _influencer_page_vue_vue_type_template_id_6ba05ac2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./influencer_page.vue?vue&type=template&id=6ba05ac2&scoped=true& */ "./resources/js/views/admin/influencer_page.vue?vue&type=template&id=6ba05ac2&scoped=true&");
/* harmony import */ var _influencer_page_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./influencer_page.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/influencer_page.vue?vue&type=script&lang=js&");
/* harmony import */ var _influencer_page_vue_vue_type_style_index_0_id_6ba05ac2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./influencer_page.vue?vue&type=style&index=0&id=6ba05ac2&scoped=true&lang=css& */ "./resources/js/views/admin/influencer_page.vue?vue&type=style&index=0&id=6ba05ac2&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _influencer_page_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _influencer_page_vue_vue_type_template_id_6ba05ac2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _influencer_page_vue_vue_type_template_id_6ba05ac2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "6ba05ac2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/influencer_page.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/influencer_page.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/admin/influencer_page.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_influencer_page_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./influencer_page.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/influencer_page.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_influencer_page_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/admin/influencer_page.vue?vue&type=style&index=0&id=6ba05ac2&scoped=true&lang=css&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/views/admin/influencer_page.vue?vue&type=style&index=0&id=6ba05ac2&scoped=true&lang=css& ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_influencer_page_vue_vue_type_style_index_0_id_6ba05ac2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./influencer_page.vue?vue&type=style&index=0&id=6ba05ac2&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/influencer_page.vue?vue&type=style&index=0&id=6ba05ac2&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/views/admin/influencer_page.vue?vue&type=template&id=6ba05ac2&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/views/admin/influencer_page.vue?vue&type=template&id=6ba05ac2&scoped=true& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_influencer_page_vue_vue_type_template_id_6ba05ac2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_influencer_page_vue_vue_type_template_id_6ba05ac2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_influencer_page_vue_vue_type_template_id_6ba05ac2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./influencer_page.vue?vue&type=template&id=6ba05ac2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/influencer_page.vue?vue&type=template&id=6ba05ac2&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/influencer_page.vue?vue&type=template&id=6ba05ac2&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/influencer_page.vue?vue&type=template&id=6ba05ac2&scoped=true& ***!
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
  return _c("div", { staticClass: "page-1" }, [
    _c("div", { staticClass: "contanir" }, [
      _c("div", { staticClass: "main" }, [
        _c("div", { staticClass: "box-1" }, [
          _c("div", { staticClass: "Sponsorship" }, [
            _c("h2", { staticClass: "spon-para" }, [_vm._v(" Influencers")]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "card-box" },
              _vm._l(_vm.model, function(item) {
                return _c(
                  "div",
                  {
                    staticClass: "cards",
                    on: {
                      click: function($event) {
                        return _vm.profile_page(item.id)
                      }
                    }
                  },
                  [
                    _c("div", { staticClass: "poxi-1" }, [
                      _c("img", {
                        attrs: { src: "/uploads/" + item.image, alt: "" }
                      }),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "poxi-titel",
                          staticStyle: { overflow: "hidden" }
                        },
                        [
                          _c("h2", [_vm._v(_vm._s(item.user_name))]),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(item.email))])
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _vm._m(0, true),
                    _vm._v(" "),
                    _c("div", { staticClass: "poxi-3" }, [
                      _c("div", { staticClass: "poxi3-box" }, [
                        _c(
                          "svg",
                          {
                            attrs: {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "20",
                              height: "20",
                              viewBox: "0 0 20 20",
                              fill: "none"
                            }
                          },
                          [
                            _c("path", {
                              attrs: {
                                d:
                                  "M17.417 1.66675H2.58366C2.34054 1.66675 2.10739 1.76333 1.93548 1.93523C1.76357 2.10714 1.66699 2.3403 1.66699 2.58341V17.4167C1.66699 17.6599 1.76357 17.893 1.93548 18.0649C2.10739 18.2368 2.34054 18.3334 2.58366 18.3334H10.567V11.8751H8.40032V9.37508H10.567V7.50008C10.5221 7.05988 10.5741 6.61519 10.7193 6.1972C10.8644 5.7792 11.0993 5.39804 11.4074 5.08042C11.7155 4.76281 12.0893 4.51645 12.5027 4.35861C12.9161 4.20078 13.359 4.13529 13.8003 4.16675C14.4489 4.16276 15.0972 4.19614 15.742 4.26675V6.51675H14.417C13.367 6.51675 13.167 7.01675 13.167 7.74175V9.35008H15.667L15.342 11.8501H13.167V18.3334H17.417C17.5374 18.3334 17.6566 18.3097 17.7678 18.2636C17.879 18.2176 17.9801 18.15 18.0652 18.0649C18.1503 17.9798 18.2178 17.8788 18.2639 17.7675C18.3099 17.6563 18.3337 17.5371 18.3337 17.4167V2.58341C18.3337 2.46304 18.3099 2.34384 18.2639 2.23262C18.2178 2.12141 18.1503 2.02035 18.0652 1.93523C17.9801 1.85011 17.879 1.78259 17.7678 1.73653C17.6566 1.69046 17.5374 1.66675 17.417 1.66675Z",
                                fill: "#FF5757"
                              }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c("h3", [
                          _vm._v(
                            _vm._s(item.instagram ? item.instagram : "----")
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "poxi3-box" }, [
                        _c(
                          "svg",
                          {
                            attrs: {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "20",
                              height: "20",
                              viewBox: "0 0 20 20",
                              fill: "none"
                            }
                          },
                          [
                            _c("path", {
                              attrs: {
                                d:
                                  "M10.8565 1.66675C11.794 1.66925 12.2698 1.67425 12.6807 1.68591L12.8423 1.69175C13.029 1.69841 13.2132 1.70675 13.4357 1.71675C14.3223 1.75841 14.9273 1.89841 15.4582 2.10425C16.0082 2.31591 16.4715 2.60258 16.9348 3.06508C17.3586 3.48166 17.6865 3.98557 17.8957 4.54175C18.1015 5.07258 18.2415 5.67758 18.2832 6.56508C18.2932 6.78675 18.3015 6.97091 18.3082 7.15841L18.3132 7.32008C18.3257 7.73008 18.3307 8.20591 18.3323 9.14341L18.3332 9.76508V10.8567C18.3352 11.4646 18.3288 12.0724 18.314 12.6801L18.309 12.8417C18.3023 13.0292 18.294 13.2134 18.284 13.4351C18.2423 14.3226 18.1007 14.9267 17.8957 15.4584C17.6871 16.0149 17.3591 16.5189 16.9348 16.9351C16.5181 17.3587 16.0143 17.6865 15.4582 17.8959C14.9273 18.1017 14.3223 18.2417 13.4357 18.2834C13.2379 18.2927 13.0401 18.3011 12.8423 18.3084L12.6807 18.3134C12.2698 18.3251 11.794 18.3309 10.8565 18.3326L10.2348 18.3334H9.144C8.53588 18.3355 7.92777 18.3291 7.31983 18.3142L7.15816 18.3092C6.96034 18.3018 6.76256 18.2931 6.56483 18.2834C5.67816 18.2417 5.07316 18.1017 4.5415 17.8959C3.98539 17.6871 3.48168 17.3591 3.06566 16.9351C2.64153 16.5187 2.31335 16.0147 2.104 15.4584C1.89816 14.9276 1.75816 14.3226 1.7165 13.4351C1.70721 13.2373 1.69888 13.0396 1.6915 12.8417L1.68733 12.6801C1.67197 12.0724 1.66503 11.4646 1.6665 10.8567V9.14341C1.66417 8.53558 1.67028 7.92775 1.68483 7.32008L1.69066 7.15841C1.69733 6.97091 1.70566 6.78675 1.71566 6.56508C1.75733 5.67758 1.89733 5.07341 2.10316 4.54175C2.31242 3.985 2.64126 3.48093 3.0665 3.06508C3.48241 2.64131 3.98578 2.3134 4.5415 2.10425C5.07316 1.89841 5.67733 1.75841 6.56483 1.71675C6.7865 1.70675 6.9715 1.69841 7.15816 1.69175L7.31983 1.68675C7.92749 1.67194 8.53533 1.66555 9.14316 1.66758L10.8565 1.66675ZM9.99983 5.83341C8.89476 5.83341 7.83495 6.2724 7.05355 7.0538C6.27215 7.8352 5.83316 8.89501 5.83316 10.0001C5.83316 11.1052 6.27215 12.165 7.05355 12.9464C7.83495 13.7278 8.89476 14.1667 9.99983 14.1667C11.1049 14.1667 12.1647 13.7278 12.9461 12.9464C13.7275 12.165 14.1665 11.1052 14.1665 10.0001C14.1665 8.89501 13.7275 7.8352 12.9461 7.0538C12.1647 6.2724 11.1049 5.83341 9.99983 5.83341ZM9.99983 7.50008C10.3281 7.50003 10.6532 7.56464 10.9566 7.69022C11.2599 7.81581 11.5355 7.99991 11.7677 8.23202C11.9999 8.46413 12.1841 8.7397 12.3098 9.04299C12.4355 9.34628 12.5002 9.67136 12.5002 9.99966C12.5003 10.328 12.4357 10.6531 12.3101 10.9564C12.1845 11.2597 12.0004 11.5354 11.7683 11.7676C11.5362 11.9997 11.2606 12.1839 10.9573 12.3096C10.654 12.4353 10.329 12.5 10.0007 12.5001C9.33762 12.5001 8.70174 12.2367 8.2329 11.7678C7.76406 11.299 7.50066 10.6631 7.50066 10.0001C7.50066 9.33704 7.76406 8.70115 8.2329 8.23231C8.70174 7.76347 9.33762 7.50008 10.0007 7.50008M14.3757 4.58341C14.0994 4.58341 13.8344 4.69316 13.6391 4.88851C13.4437 5.08386 13.334 5.34881 13.334 5.62508C13.334 5.90135 13.4437 6.1663 13.6391 6.36165C13.8344 6.557 14.0994 6.66675 14.3757 6.66675C14.6519 6.66675 14.9169 6.557 15.1122 6.36165C15.3076 6.1663 15.4173 5.90135 15.4173 5.62508C15.4173 5.34881 15.3076 5.08386 15.1122 4.88851C14.9169 4.69316 14.6519 4.58341 14.3757 4.58341Z",
                                fill: "#FF5757"
                              }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c("h3", [
                          _vm._v(_vm._s(item.facebook ? item.facebook : "----"))
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _vm._m(1, true)
                  ]
                )
              }),
              0
            )
          ])
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
    return _c("div", { staticClass: "poxi-2" }, [
      _c("div", { staticClass: "poxi2-titel" }, [
        _c("h2", [_vm._v("$12k")]),
        _vm._v(" "),
        _c("p", [_vm._v("Our Investment")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "poxi2-titel0" }, [
        _c("h2", [_vm._v("60%")]),
        _vm._v(" "),
        _c("p", [_vm._v("Profit Generated")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "poxi2-titel" }, [
        _c("h2", [_vm._v("$22k")]),
        _vm._v(" "),
        _c("p", [_vm._v("Total Income")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "poxi-4" }, [
      _c("div", { staticClass: "poxi4-box" }, [
        _c("p", [_vm._v("Tenure")]),
        _vm._v(" "),
        _c("h2", [_vm._v("Since 46 days")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "poxi42-box" }, [
        _c("p", [_vm._v("last Paid")]),
        _vm._v(" "),
        _c("h2", [_vm._v("29 Feb 2022")])
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);