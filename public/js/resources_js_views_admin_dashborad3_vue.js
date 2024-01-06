(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_admin_dashborad3_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/dashborad3.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/dashborad3.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _chart_demo_chart_bar_demo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chart/demo/chart-bar-demo */ "./resources/js/chart/demo/chart-bar-demo.js");
/* harmony import */ var _admin_components_lib_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../admin/components/lib/api */ "./resources/js/views/admin/components/lib/api.js");
/* harmony import */ var _pro_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pro.vue */ "./resources/js/views/admin/pro.vue");
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
  components: {
    Profile: _pro_vue__WEBPACK_IMPORTED_MODULE_2__.default
  },
  mounted: function mounted() {
    (0,_chart_demo_chart_bar_demo__WEBPACK_IMPORTED_MODULE_0__.default)();
  },
  data: function data() {
    return _defineProperty({
      method: 'POST',
      model: {}
    }, "model", '');
  },
  created: function created() {
    var _this = this;

    (0,_admin_components_lib_api__WEBPACK_IMPORTED_MODULE_1__.get)('/getuser').then(function (res) {
      _this.setData(res);
    });
  },
  methods: {
    setData: function setData(res) {
      vue__WEBPACK_IMPORTED_MODULE_3__.default.set(this.$data, 'model', res.data.data);
      console.log(res.data.data); //   console.log(res.data)
    },
    profile: function profile() {
      this.$router.push('/admin/dashborad4');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/pro.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/pro.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _admin_components_lib_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../admin/components/lib/api */ "./resources/js/views/admin/components/lib/api.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'profile',
  data: function data() {
    return _defineProperty({
      method: 'POST',
      model: {}
    }, "model", '');
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(["user"])),
  created: function created() {
    var _this = this;

    (0,_admin_components_lib_api__WEBPACK_IMPORTED_MODULE_0__.get)('/getuser').then(function (res) {
      _this.setData(res);
    });
  },
  methods: {
    setData: function setData(res) {
      vue__WEBPACK_IMPORTED_MODULE_2__.default.set(this.$data, 'model', res.data.data);
      console.log(res.data.data); //   console.log(res.data)
    },
    profile: function profile() {
      this.$router.push("/admin/dashborad4/".concat(this.user.id));
    }
  }
});

/***/ }),

/***/ "./resources/js/chart/demo/chart-bar-demo.js":
/*!***************************************************!*\
  !*** ./resources/js/chart/demo/chart-bar-demo.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ chartBarDemo)
/* harmony export */ });
function number_format(number, decimals, dec_point, thousands_sep) {
  // *     example: number_format(1234.56, 2, ',', ' ');
  // *     return: '1 234,56'
  number = (number + "").replace(",", "").replace(" ", "");

  var n = !isFinite(+number) ? 0 : +number,
      prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
      sep = typeof thousands_sep === "undefined" ? "," : thousands_sep,
      dec = typeof dec_point === "undefined" ? "." : dec_point,
      s = "",
      toFixedFix = function toFixedFix(n, prec) {
    var k = Math.pow(10, prec);
    return "" + Math.round(n * k) / k;
  }; // Fix for IE parseFloat(0.55).toFixed(0) = 0;


  s = (prec ? toFixedFix(n, prec) : "" + Math.round(n)).split(".");

  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }

  if ((s[1] || "").length < prec) {
    s[1] = s[1] || "";
    s[1] += new Array(prec - s[1].length + 1).join("0");
  }

  return s.join(dec);
}

function chartBarDemo() {
  // Set new default font family and font color to mimic Bootstrap's default styling
  Chart.defaults.global.defaultFontFamily = "Nunito", '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
  Chart.defaults.global.defaultFontColor = "#858796"; // Bar Chart Example

  var ctx = document.getElementById("myBarChart");
  var myBarChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["MON", "TUE", "WED", "THU", "FRI", "SAT"],
      datasets: [{
        label: "Revenue",
        backgroundColor: "#FF9966",
        hoverBackgroundColor: "#FF5757",
        borderColor: "#4e73df",
        data: [4215, 5312, 6251, 7841, 9821, 14984]
      }]
    },
    options: {
      maintainAspectRatio: false,
      layout: {
        padding: {
          left: 10,
          right: 25,
          top: 25,
          bottom: 0
        }
      },
      scales: {
        xAxes: [{
          time: {
            unit: "month"
          },
          gridLines: {
            display: false,
            drawBorder: false
          },
          ticks: {
            maxTicksLimit: 6
          },
          maxBarThickness: 25
        }],
        yAxes: [{
          ticks: {
            min: 0,
            max: 15000,
            maxTicksLimit: 5,
            padding: 10,
            // Include a dollar sign in the ticks
            callback: function callback(value, index, values) {
              return "$" + number_format(value);
            }
          },
          gridLines: {
            color: "rgb(234, 236, 244)",
            zeroLineColor: "rgb(234, 236, 244)",
            drawBorder: false,
            borderDash: [2],
            zeroLineBorderDash: [2]
          }
        }]
      },
      legend: {
        display: false
      },
      tooltips: {
        titleMarginBottom: 10,
        titleFontColor: "#6e707e",
        titleFontSize: 14,
        backgroundColor: "rgb(255,255,255)",
        bodyFontColor: "#858796",
        borderColor: "#dddfeb",
        borderWidth: 1,
        xPadding: 15,
        yPadding: 15,
        displayColors: false,
        caretPadding: 10,
        callbacks: {
          label: function label(tooltipItem, chart) {
            var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || "";
            return datasetLabel + ": $" + number_format(tooltipItem.yLabel);
          }
        }
      }
    }
  });
}

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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/dashborad3.vue?vue&type=style&index=0&id=fde58848&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/dashborad3.vue?vue&type=style&index=0&id=fde58848&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.id-box img[data-v-fde58848] {\r\n    width: 47%;\r\n    border-radius: 50%;\r\n   \r\n    max-height: 190px;\r\n    min-height: 190px;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\n}\n.page-1[data-v-fde58848] {\r\n    width: 100%;\r\n    background-color: #F5F3EA;\r\n    padding: 30px;\n}\n.contanir[data-v-fde58848] {\r\n    width: 100%;\r\n    max-width: 1600px;\r\n    margin: 0 auto;\n}\n.Sponsorship h2[data-v-fde58848] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 18px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: 24px; /* 150% */\r\n    padding-bottom: 25px;\r\n    margin: 0px ;\n}\n.card-box[data-v-fde58848] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\n}\n.cards[data-v-fde58848] {\r\n    border-radius: 16px;\r\n    border: 2px solid #000;\r\n    background: #F96;\r\n    box-shadow: 4px 4px 0px 2px #1B1C1D;\r\n    width: 30%;\r\n    height: 100%;\r\n    flex-shrink: 0;\n}\n.main[data-v-fde58848] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\n}\n.box-1[data-v-fde58848] {\r\n    height: 100%;\r\n    background: transparent;\r\n    width: 67%;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    gap: 38px;\n}\n.box-2[data-v-fde58848] {\r\n    height: 100%;\r\n    flex-shrink: 0;\r\n    border-radius: 20px;\r\n    background: #FFF;\r\n    box-shadow: 0px 10px 54px 0px rgba(0, 0, 0, 0.25);\r\n    width: 30%;\r\n    padding: 30px;\n}\n.Sponsorship[data-v-fde58848] {\r\n    width: 100%;\r\n    height: 100%;\r\n    flex-shrink: 0;\r\n    border-radius: 20px;\r\n    background: #FFF;\r\n    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\r\n    padding: 30px 33px ;\n}\n.btn-box[data-v-fde58848] {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: 30px 0px;\n}\n.btn-2[data-v-fde58848] {\r\n    display: flex;\r\n    width: 46%;\r\n    justify-content: space-between;\n}\n.btn-1[data-v-fde58848] {\r\n    width: 35%;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 18px;\n}\n.Campaign[data-v-fde58848] {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 10px;\r\n    border-radius: 10px;\r\n    background: #FFF;\r\n    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\r\n    padding: 12px 20px;\n}\n.Campaign h2[data-v-fde58848] {\r\n    padding: 0px;\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: normal;\n}\n.Campaign p[data-v-fde58848] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 14px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: normal;\r\n    margin: 0px;\n}\n.over-btn[data-v-fde58848] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    padding: 50px 0px 0px 0px;\n}\n.over-btn button[data-v-fde58848] {\r\n    border-radius: 6px;\r\n    border: 1px solid #000;\r\n    background: #F96;\r\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\r\n    display: inline-flex;\r\n    padding: 10px 21.25px 10px 20px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 4.75px;\r\n    color: #FFF;\r\n    text-align: center;\r\n    font-family: sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 24px; /* 150% */\n}\n.btn-1 button[data-v-fde58848] {\r\n    border-radius: 6px;\r\n    border: 1px solid #000;\r\n    background: #F96;\r\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\r\n    display: flex;\r\n    width: 154.75px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 7.647px;\r\n    flex-shrink: 0;\r\n    padding: 10px;\r\n    color: #FFF;\r\n    text-align: center;\r\n    font-family: sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 24px; /* 150% */\n}\nbutton.Add[data-v-fde58848] {\r\n    border-radius: 6px;\r\n    border: 1px solid #000;\r\n    background: #F5F3EA;\r\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\r\n    color: #000;\n}\n.OverView[data-v-fde58848] {\r\n    width: 100%;\r\n    padding-top: 75px;\n}\n.OverView h2[data-v-fde58848] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 26px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: 24px; /* 92.308% */\r\n    margin: 0px;\r\n    padding-bottom: 30px;\n}\n.over-box[data-v-fde58848] {\r\n    width: 100%;\r\n    display: flex;\n}\n.Over-card h4[data-v-fde58848] {\r\n    color: #FF5757;\r\n    font-family: sans-serif;\r\n    font-size: 20px;\r\n    font-style: normal;\r\n    font-weight: 800;\r\n    line-height: 24px; /* 114.286% */\r\n    margin: 0px;\n}\n.Over-card h4 span[data-v-fde58848] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 38px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 24px; /* 58.537% */\r\n    padding-left: 5px;\n}\n.Over-card[data-v-fde58848] {\r\n    width: 25%;\n}\r\n\r\n/* .../ */\n.pox-1[data-v-fde58848] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 20px;\r\n    border-bottom: 1px solid #000;\n}\n.pox-1 h2[data-v-fde58848] {\r\n    color: #000;\r\n    text-align: center;\r\n    font-family: sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 800;\r\n    line-height: 24px; /* 150% */\r\n    margin: 0px;\r\n    padding: 0px;\n}\n.top-btn[data-v-fde58848] {\r\n    width: 49%;\r\n    display: flex;\r\n    align-items: center;\n}\n.top-btn button[data-v-fde58848] {\r\n    border: none;\r\n    background: transparent;\n}\n.pox-2[data-v-fde58848] {\r\n    width: 100%;\r\n    padding: 20px;\n}\n.pox-2 p[data-v-fde58848] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 18px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    letter-spacing: -0.96px;\r\n    margin: 0px;\n}\n.pox-2 h2[data-v-fde58848] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    line-height: 24px; /* 150% */\r\n    padding: 15px 0px;\n}\n.pox-box[data-v-fde58848] {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    gap: 10px 0px;\n}\n.yes[data-v-fde58848] {\r\n    width: 50%;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 5px;\n}\n.pox-3[data-v-fde58848] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: flex-end;\r\n    padding: 25px 0px 0px 0px;\n}\n.pox-3 h2[data-v-fde58848] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 18px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    padding: 0px 0px 0px 0px;\n}\n.pox-3 p[data-v-fde58848] {\r\n    color: #000;\r\n    text-align: center;\r\n    font-family: sans-serif;\r\n    font-size: 15px;\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    line-height: 24px; /* 150% */\r\n    width: 40%;\n}\n.pox-3 h2 span[data-v-fde58848] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 20px;\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    line-height: normal;\n}\nbutton.llo[data-v-fde58848] {\r\n    color: #fff;\n}\r\n\r\n\r\n\r\n/* .../ */\n.box-2 h2[data-v-fde58848] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 18px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: normal;\n}\n.id-box[data-v-fde58848] {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    padding: 70px 0px 120px 0px;\n}\n.id-box h2[data-v-fde58848] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 26px;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    margin: 0px;\r\n    padding: 20px 0px 4px 0px;\n}\n.id-box h3[data-v-fde58848] {color: #000;font-family: sans-serif;font-size: 16px;font-style: normal;font-weight: 500;line-height: normal;}\n.titel-box[data-v-fde58848] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding-bottom: 20px;\n}\n.id-titel[data-v-fde58848] {\r\n    display: flex;\r\n    align-items: center;\r\n    width: 30%;\r\n    justify-content: space-between;\n}\n.id-titel p[data-v-fde58848] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: normal;\r\n    margin: 0px;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\n}\n.contact-box[data-v-fde58848] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    padding-bottom: 40px;\n}\n.contact[data-v-fde58848] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    gap: 15px;\n}\n.contact p[data-v-fde58848] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    margin: 0px;\n}\n.para-box[data-v-fde58848] {\r\n    width: 100%;\r\n    border-top: 1px solid #F96;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\n}\n.para-box p[data-v-fde58848] {\r\n    color: #000;\r\n    text-align: center;\r\n    font-family: sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: 24px; /* 150% */\r\n    margin: 0px;\r\n    padding: 32px 0px 44px 0px;\n}\n.para-box button[data-v-fde58848] {\r\n    border-radius: 6px;\r\n    border: 1px solid #000;\r\n    background: #F96;\r\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\r\n    display: flex;\r\n    width: 154.75px;\r\n    height: 44px;\r\n    padding: 10px 18px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 7.647px;\r\n    flex-shrink: 0;\r\n     /* 150% */\n}\n.para-box button p[data-v-fde58848] {\r\n    color: #FFF;\r\n    text-align: center;\r\n    font-family: sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 24px; /* 150% */\r\n    padding: 0px;\n}\n.new-1[data-v-fde58848] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\n}\n.new-2[data-v-fde58848] {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\n}\n.new-3[data-v-fde58848] {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\n}\n.rol-1[data-v-fde58848] {\r\n    border-radius: 20px;\r\n    background: #FFF;\r\n    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\r\n    flex-shrink: 0;\r\n    width: 36%;\r\n    padding: 32px;\n}\n.rol-1 p[data-v-fde58848] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: 24px; /* 150% */\r\n    margin: 0px;\r\n    padding-bottom: 12px;\n}\n.rol-1 h2[data-v-fde58848] {\r\n    color: #1B1C1D;\r\n    font-family: sans-serif;\r\n    font-size: 66px;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\n}\n.new-btn-lid[data-v-fde58848] {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\n}\n.new-btn-lid  button[data-v-fde58848] {\r\n    border-radius: 6px;\r\n    border: 1px solid #000;\r\n    background: #F96;\r\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\r\n    display: flex;\r\n    width: 154.75px;\r\n    height: 44px;\r\n    padding: 10px 18px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 7.647px;\r\n    flex-shrink: 0;\n}\n.new-btn-lid button p[data-v-fde58848] {\r\n    margin: 0px;\r\n    color: #FFF;\r\n    text-align: center;\r\n    font-family: sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 24px;\r\n    margin: 0px;\r\n    padding: 0px;\n}\n.rol-3[data-v-fde58848] {\r\n    width: 62%;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding-top: 24px;\n}\n.rol-3 p[data-v-fde58848] {\r\n    margin: 0px;\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: normal;\r\n    width: 100%;\n}\n.rol-card[data-v-fde58848] {\r\n    width: 48%;\r\n    border-radius: 10px;\r\n    background: #FFF;\r\n    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: 10px 15px;\r\n    flex-wrap: wrap;\n}\n.rol-para h2[data-v-fde58848] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: normal;\r\n    margin: 0px;\n}\n.rol-para[data-v-fde58848] {\r\n    width: 84%;\n}\n.rol-para p[data-v-fde58848] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 14px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: normal;\r\n    margin: 0px;\n}\n.div-1[data-v-fde58848] {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-around;\n}\n.div-1 h2[data-v-fde58848] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    margin: 0px;\r\n    width: 80%;\n}\n.div-1 p[data-v-fde58848] {\r\n    width: 20%;\n}\n.div-2[data-v-fde58848] {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding-top: 15px;\n}\n.Enrolled[data-v-fde58848] {\r\n    display: flex;\r\n    align-items: center;\r\n    width: 58%;\n}\n.Enrolled[data-v-fde58848] {}\n.Reviews[data-v-fde58848] {\r\n    width: 40%;\r\n    display: flex;\r\n    align-items: center;\n}\n.short-card[data-v-fde58848] {\r\n    width: 24%;\r\n    border-radius: 20px;\r\n    background: #FFF;\r\n    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\r\n    padding: 18px 25px;\n}\n.short-card p[data-v-fde58848] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: 24px; /* 150% */\r\n    margin: 0px;\n}\n.short-card h2[data-v-fde58848] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 42px;\r\n    font-style: normal;\r\n    font-weight: 1000;\r\n    line-height: normal;\r\n    margin: 0px;\r\n    padding: 12px 0px 5px 0px;\n}\n.short-card h3[data-v-fde58848] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    margin: 0px;\n}\n.dashbord-card[data-v-fde58848] {\r\n    background: #FFF;\r\n    box-shadow: 4px 0px 24px 0px rgba(0, 0, 0, 0.25);\r\n    height: 417px;\r\n    flex-shrink: 0;\r\n    width: 64%;\r\n    border-radius: 20px 0px 0px 20px;\n}\n.conting-card[data-v-fde58848] {\r\n    height: 417px;\r\n    flex-shrink: 0;\r\n    background: #FFF;\r\n    box-shadow: 4px 0px 24px 0px rgba(0, 0, 0, 0.25);\r\n    width: 35%;\r\n    padding: 42px 40px;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    border-radius: 0px 20px 20px 0px;\n}\n.conting-card h2[data-v-fde58848] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 26px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: 24px; /* 92.308% */\r\n    width: 100%;\r\n    margin: 0px;\n}\n.divs[data-v-fde58848] {\r\n    width: 48%;\n}\n.divs h2[data-v-fde58848] {\r\n    color: #F96;\r\n    font-family: sans-serif;\r\n    font-size: 21px;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: 24px; /* 114.286% */\r\n    margin: 0px;\n}\n.divs h3[data-v-fde58848] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 41px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 24px; /* 58.537% */\r\n    margin: 0px;\r\n    padding-top: 20px;\n}\n@media screen and (max-width: 1600px){\n.contanir[data-v-fde58848] {\r\n    width: 100%;\r\n    max-width: 1440px;\r\n    margin: 0 auto;\n}\n.dashbord-card[data-v-fde58848] {\r\n    background: #FFF;\r\n    box-shadow: 4px 0px 24px 0px rgba(0, 0, 0, 0.25);\r\n    height: 400px;\r\n    flex-shrink: 0;\r\n    width: 64%;\r\n    border-radius: 20px 0px 0px 20px;\n}\n.divs h2[data-v-fde58848] {\r\n    color: #F96;\r\n    font-family: sans-serif;\r\n    font-size: 18px;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: 24px;\r\n    margin: 0px;\n}\n.divs h3[data-v-fde58848] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 38px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 24px;\r\n    margin: 0px;\r\n    padding-top: 12px;\n}\n.rol-1 h2[data-v-fde58848] {\r\n    color: #1B1C1D;\r\n    font-family: sans-serif;\r\n    font-size: 55px;\r\n    font-style: normal;\r\n    font-weight: 1000;\r\n    line-height: normal;\r\n    text-align: center;\n}\n.new-btn-lid button[data-v-fde58848] {\r\n    border-radius: 6px;\r\n    border: 1px solid #000;\r\n    background: #F96;\r\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\r\n    display: flex;\r\n    width: 130px;\r\n    height: 38px;\r\n    padding: 10px 18px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 7.647px;\r\n    flex-shrink: 0;\n}\n.new-btn-lid button p[data-v-fde58848] {\r\n    margin: 0px;\r\n    color: #FFF;\r\n    text-align: center;\r\n    font-family: sans-serif;\r\n    font-size: 12px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 24px;\r\n    margin: 0px;\r\n    padding: 0px;\n}\n.rol-1[data-v-fde58848] {\r\n    border-radius: 20px;\r\n    background: #FFF;\r\n    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\r\n    flex-shrink: 0;\r\n    width: 36%;\r\n    padding: 30px;\n}\n.rol-3[data-v-fde58848] {\r\n    width: 62%;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding-top: 15px;\n}\n.rol-card svg[data-v-fde58848] {\r\n    width: 26px;\r\n    height: 25px;\n}\n.rol-3 p[data-v-fde58848] {\r\n    margin: 0px;\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 14px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: normal;\r\n    width: 100%;\n}\n.rol-para p[data-v-fde58848] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 12px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: normal;\r\n    margin: 0px;\n}\n.pox-1[data-v-fde58848] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 12px;\r\n    border-bottom: 1px solid #000;\n}\n.top-btn button[data-v-fde58848] {\r\n    border: none;\r\n    background: transparent;\r\n    padding: 4px;\n}\n.yes[data-v-fde58848] {\r\n    width: 50%;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 2px;\n}\n.pox-3 h2 span[data-v-fde58848] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 17px;\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    line-height: normal;\n}\n.div-1 p[data-v-fde58848] {\r\n    width: 20%;\n}\n.short-card h2[data-v-fde58848] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 38px;\r\n    font-style: normal;\r\n    font-weight: 1000;\r\n    line-height: normal;\r\n    margin: 0px;\r\n    padding: 5px 0px 0px 0px;\n}\n.conting-card[data-v-fde58848] {\r\n    height: 400px;\r\n    flex-shrink: 0;\r\n    background: #FFF;\r\n    box-shadow: 4px 0px 24px 0px rgba(0, 0, 0, 0.25);\r\n    width: 35%;\r\n    padding: 15px 25px;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    border-radius: 0px 20px 20px 0px;\n}\n.id-box[data-v-fde58848] {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    padding: 35px 0px 70px 0px;\n}\n.short-card[data-v-fde58848] {\r\n    width: 24%;\r\n    border-radius: 20px;\r\n    background: #FFF;\r\n    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\r\n    padding: 14px 20px;\n}\n.pox-3 p[data-v-fde58848] {\r\n \r\n    color: #000;\r\n    text-align: center;\r\n    font-family: sans-serif;\r\n    font-size: 14px;\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    line-height: 24px;\r\n    width: 40%;\n}\n.pox-3 h2[data-v-fde58848] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 17px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    padding: 0px 0px 0px 0px;\n}\n.btn-1 button[data-v-fde58848] {\r\n    border-radius: 6px;\r\n    border: 1px solid #000;\r\n    background: #F96;\r\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\r\n    display: flex;\r\n    width: 154.75px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 7.647px;\r\n    flex-shrink: 0;\r\n    padding: 8px;\r\n    color: #FFF;\r\n    text-align: center;\r\n    font-family: sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 24px;\n}\n.btn-2[data-v-fde58848] {\r\n    display: flex;\r\n    width: 50%;\r\n    justify-content: space-between;\n}\n.id-titel[data-v-fde58848] {\r\n    display: flex;\r\n    align-items: center;\r\n    width: 32%;\r\n    justify-content: space-between;\n}\n.over-btn button[data-v-fde58848] {\r\n    border-radius: 6px;\r\n    border: 1px solid #000;\r\n    background: #F96;\r\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\r\n    display: inline-flex;\r\n    padding: 8px 21.25px 8px 20px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 4.75px;\r\n    color: #FFF;\r\n    text-align: center;\r\n    font-family: sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 24px;\n}\n.Over-card h4 span[data-v-fde58848] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 35px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 24px;\r\n    padding-left: 5px;\n}\n.Over-card h4[data-v-fde58848] {\r\n    color: #FF5757;\r\n    font-family: sans-serif;\r\n    font-size: 18px;\r\n    font-style: normal;\r\n    font-weight: 800;\r\n    line-height: 24px;\r\n    margin: 0px;\n}\n.para-box button[data-v-fde58848] {\r\n    border-radius: 6px;\r\n    border: 1px solid #000;\r\n    background: #F96;\r\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\r\n    display: flex;\r\n    width: 154.75px;\r\n    height: 42px;\r\n    padding: 10px 18px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 7.647px;\r\n    flex-shrink: 0;\n}\nbutton.Add[data-v-fde58848] {\r\n    border-radius: 6px;\r\n    border: 1px solid #000 !important;\r\n    background: #F5F3EA !important;\r\n    box-shadow: 2px 2px 0px 0px #1B1C1D !important; \r\n    color: #000 !important;\n}\n}\n@media screen and (max-width: 1440px){\n.id-box h3[data-v-fde58848] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 14px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: normal;\n}\n.contanir[data-v-fde58848] {\r\n    width: 100%;\r\n    max-width: 1170px;\r\n    margin: 0 auto;\n}\n.div-1 h2[data-v-fde58848] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 14px;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    margin: 0px;\r\n    width: 80%;\n}\n.rol-para h2[data-v-fde58848] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 12px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: normal;\r\n    margin: 0px;\n}\n.rol-3 p[data-v-fde58848] {\r\n    margin: 0px;\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 13px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: normal;\r\n    width: 100%;\n}\n.rol-1 h2[data-v-fde58848] {\r\n    color: #1B1C1D;\r\n    font-family: sans-serif;\r\n    font-size: 38px;\r\n    font-style: normal;\r\n    font-weight: 1000;\r\n    line-height: normal;\r\n    text-align: center;\n}\n.new-btn-lid button[data-v-fde58848] {\r\n    border-radius: 6px;\r\n    border: 1px solid #000;\r\n    background: #F96;\r\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\r\n    display: flex;\r\n    width: 110px;\r\n    height: 34px;\r\n    padding: 10px 0px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 4px;\r\n    flex-shrink: 0;\n}\n.div-1 svg[data-v-fde58848] {\r\n    width: 20px;\r\n    height: 20px;\n}\n.div-1 p[data-v-fde58848] {\r\n    width: 20%;\r\n    font-size: 12px;\n}\n.rol-para p[data-v-fde58848] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 10px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: normal;\r\n    margin: 0px;\n}\n.Reviews p[data-v-fde58848] {\r\n    font-size: 10px;\n}\n.Enrolled p[data-v-fde58848] {\r\n    font-size: 10px;\n}\n.div-2[data-v-fde58848] {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding-top: 3px;\n}\n.short-card p[data-v-fde58848] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 15px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: 24px;\r\n    margin: 0px;\n}\n.short-card h2[data-v-fde58848] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 25px;\r\n    font-style: normal;\r\n    font-weight: 1000;\r\n    line-height: normal;\r\n    margin: 0px;\r\n    padding: 0px 0px 0px 0px;\n}\n.short-card[data-v-fde58848] {\r\n    width: 24%;\r\n    border-radius: 15px;\r\n    background: #FFF;\r\n    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\r\n    padding: 12px 20px;\n}\n.dashbord-card[data-v-fde58848] {\r\n    background: #FFF;\r\n    box-shadow: 4px 0px 24px 0px rgba(0, 0, 0, 0.25);\r\n    height: 350px;\r\n    flex-shrink: 0;\r\n    width: 64%;\r\n    border-radius: 20px 0px 0px 20px;\n}\n.conting-card[data-v-fde58848] {\r\n    height: 350px;\r\n    flex-shrink: 0;\r\n    background: #FFF;\r\n    box-shadow: 4px 0px 24px 0px rgba(0, 0, 0, 0.25);\r\n    width: 35%;\r\n    padding: 15px 25px;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    border-radius: 0px 20px 20px 0px;\n}\n.box-1[data-v-fde58848] {\r\n    height: 100%;\r\n    background: transparent;\r\n    width: 67%;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    gap: 30px;\n}\n.divs h2[data-v-fde58848] {\r\n    color: #F96;\r\n    font-family: sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: 24px;\r\n    margin: 0px;\n}\n.divs h3[data-v-fde58848] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 28px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 24px;\r\n    margin: 0px;\r\n    padding-top: 10px;\n}\n.conting-card[data-v-fde58848] {\r\n    height: 350px;\r\n    flex-shrink: 0;\r\n    background: #FFF;\r\n    box-shadow: 4px 0px 24px 0px rgba(0, 0, 0, 0.25);\r\n    width: 35%;\r\n    padding: 12px 15px;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    border-radius: 0px 20px 20px 0px;\n}\n.id-box[data-v-fde58848] {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    padding: 40px 0px 65px 0px;\n}\n.rol-1[data-v-fde58848] {\r\n    border-radius: 20px;\r\n    background: #FFF;\r\n    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\r\n    flex-shrink: 0;\r\n    width: 36%;\r\n    padding: 20px;\n}\n.pox-2 h2[data-v-fde58848] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    line-height: 20px;\r\n    padding: 12px 0px;\n}\n.Sponsorship[data-v-fde58848] {\r\n    width: 100%;\r\n    height: 100%;\r\n    flex-shrink: 0;\r\n    border-radius: 20px;\r\n    background: #FFF;\r\n    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\r\n    padding: 30px 20px;\n}\n.OverView[data-v-fde58848] {\r\n    width: 100%;\r\n    padding-top: 60px;\n}\n.OverView h2[data-v-fde58848] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 24px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: 24px;\r\n    margin: 0px;\r\n    padding-bottom: 20px;\n}\n.Over-card h4[data-v-fde58848] {\r\n    color: #FF5757;\r\n    font-family: sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 800;\r\n    line-height: 24px;\r\n    margin: 0px;\n}\n.Over-card h4 span[data-v-fde58848] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 28px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 24px;\r\n    padding-left: 0px;\n}\n.over-btn[data-v-fde58848] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    padding: 40px 0px 0px 0px;\n}\n.over-btn button[data-v-fde58848] {\r\n    border-radius: 6px;\r\n    border: 1px solid #000;\r\n    background: #F96;\r\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\r\n    display: inline-flex;\r\n    padding: 7px 16.25px 7px 15px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 4.75px;\r\n    color: #FFF;\r\n    text-align: center;\r\n    font-family: sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 24px;\n}\n.top-btn button[data-v-fde58848] {\r\n    border: none;\r\n    background: transparent;\r\n    padding: 4px;\r\n    display: flex;\r\n    align-items: center;\n}\n.top-btn button svg[data-v-fde58848] {\r\n    width: 15px;\r\n    height: 15px;\n}\n.top-btn[data-v-fde58848] {\r\n    width: 42%;\r\n    display: flex;\r\n    align-items: center;\n}\n.pox-1[data-v-fde58848] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 8px;\r\n    border-bottom: 1px solid #000;\n}\n.top-btn button span[data-v-fde58848] {\r\n    font-size: 12px;\n}\n.pox-1 h2[data-v-fde58848] {\r\n    color: #000;\r\n    text-align: center;\r\n    font-family: sans-serif;\r\n    font-size: 14px;\r\n    font-style: normal;\r\n    font-weight: 800;\r\n    line-height: 24px;\r\n    margin: 0px;\r\n    padding: 0px;\n}\n.pox-2[data-v-fde58848] {\r\n    width: 100%;\r\n    padding: 10px;\n}\n.pox-2 p[data-v-fde58848] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    letter-spacing: -0.96px;\r\n    margin: 0px;\n}\n.pox-3 h2[data-v-fde58848] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 14px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    padding: 0px 0px 0px 0px;\r\n    width: 58%;\n}\n.pox-3[data-v-fde58848] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: flex-end;\r\n    padding: 15px 0px;\n}\n.pox-box[data-v-fde58848] {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    gap: 5px 0px;\n}\n.cards[data-v-fde58848] {\r\n    border-radius: 16px;\r\n    border: 2px solid #000;\r\n    background: #F96;\r\n    box-shadow: 4px 4px 0px 2px #1B1C1D;\r\n    width: 30%;\r\n    height: 100%;\r\n    flex-shrink: 0;\n}\n.yes p[data-v-fde58848] {\r\n    font-size: 14px;\n}\n.pox-3 h2 span[data-v-fde58848] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 15px;\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    line-height: normal;\n}\n.pox-3 p[data-v-fde58848] {\r\n    color: #000;\r\n    text-align: center;\r\n    font-family: sans-serif;\r\n    font-size: 12px;\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    line-height: 24px;\r\n    width: 44%;\r\n    margin: 0px;\r\n    padding: 0px;\n}\n.btn-1 button[data-v-fde58848] {\r\n    border-radius: 6px;\r\n    border: 1px solid #000;\r\n    background: #F96;\r\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\r\n    display: flex;\r\n    width: 130.75px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 7.647px;\r\n    flex-shrink: 0;\r\n    padding: 6px;\r\n    color: #FFF;\r\n    text-align: center;\r\n    font-family: sans-serif;\r\n    font-size: 14px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 24px;\n}\n.btn-2[data-v-fde58848] {\r\n    display: flex;\r\n    width: 52%;\r\n    justify-content: space-between;\n}\n.Campaign[data-v-fde58848] {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 8px;\r\n    border-radius: 10px;\r\n    background: #FFF;\r\n    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\r\n    padding: 8px 10px;\n}\n.Campaign svg[data-v-fde58848] {\r\n    width: 30px;\r\n    height: 30px;\n}\n.id-box[data-v-fde58848] {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    padding: 50px 0px 80px 0px;\n}\r\n/* .id-box img {\r\n    width: 40%;\r\n} */\n.id-box img[data-v-fde58848] {\r\n    width: 50%;\r\n    border-radius: 50%;\r\n   \r\n    max-height: 150px;\r\n    min-height: 150px;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\n}\n.id-box h2[data-v-fde58848] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 24px;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    margin: 0px;\r\n    padding: 15px 0px 2px 0px;\n}\n.contact[data-v-fde58848] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    gap: 5px;\n}\n.contact p[data-v-fde58848] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 12px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    margin: 0px;\n}\n.id-titel p[data-v-fde58848] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 10px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: normal;\r\n    margin: 0px;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\n}\n.id-titel svg[data-v-fde58848] {\r\n    width: 18px;\r\n    height: 18px;\n}\n.contact-box[data-v-fde58848] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    padding-bottom: 15px;\n}\n.para-box p[data-v-fde58848] {\r\n    color: #000;\r\n    text-align: center;\r\n    font-family: sans-serif;\r\n    font-size: 13px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: 24px;\r\n    margin: 0px;\r\n    padding: 25px 0px 25px 0px;\n}\n.para-box button[data-v-fde58848] {\r\n    border-radius: 6px;\r\n    border: 1px solid #000;\r\n    background: #F96;\r\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\r\n    display: flex;\r\n    width: 144.75px;\r\n    height: 38px;\r\n    padding: 10px 18px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 7.647px;\r\n    flex-shrink: 0;\n}\n.main[data-v-fde58848] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: flex-start;\n}\n.box-2[data-v-fde58848] {\r\n    height: 100%;\r\n    flex-shrink: 0;\r\n    border-radius: 20px;\r\n    background: #FFF;\r\n    box-shadow: 0px 10px 54px 0px rgba(0, 0, 0, 0.25);\r\n    width: 30%;\r\n    padding: 24px;\n}\n}\n@media screen and (max-width: 1024px){\n.page-1[data-v-fde58848] {\r\n    width: 100%;\r\n    background-color: #F5F3EA;\r\n    padding: 40px;\n}\n.main[data-v-fde58848] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-wrap: wrap;\r\n    gap: 55px 0px;\n}\n.box-1[data-v-fde58848] {\r\n  height: 100%;\r\n    background: transparent;\r\n    width: 100%;\n}\n.box-2[data-v-fde58848] {\r\n    height: 720px;\r\n    flex-shrink: 0;\r\n    border-radius: 20px;\r\n    background: #FFF;\r\n    box-shadow: 0px 10px 54px 0px rgba(0, 0, 0, 0.25);\r\n    width: 42%;\r\n    padding: 24px;\n}\n.btn-2[data-v-fde58848] {\r\n    display: flex;\r\n    width: 44%;\r\n    justify-content: space-between;\n}\n}\n@media screen and (max-width: 768px){\n.cards[data-v-fde58848] {\r\n    border-radius: 16px;\r\n    border: 2px solid #000;\r\n    background: #F96;\r\n    box-shadow: 4px 4px 0px 2px #1B1C1D;\r\n    width: 44%;\r\n    height: 100%;\r\n    flex-shrink: 0;\n}\n.new-1[data-v-fde58848] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    flex-direction: column;\n}\n.rol-1[data-v-fde58848] {\r\n    border-radius: 20px;\r\n    background: #FFF;\r\n    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\r\n    flex-shrink: 0;\r\n    width: 45%;\r\n    padding: 20px;\n}\n.rol-3[data-v-fde58848] {\r\n    width: 75%;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding-top: 15px;\r\n    gap: 15px;\n}\n.card-box[data-v-fde58848] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n    gap: 31px;\n}\n.btn-box[data-v-fde58848] {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: stretch;\r\n    justify-content: space-between;\r\n    padding: 30px 0px 0px 0px ; \r\n    flex-direction: column;\r\n    gap: 25px;\n}\n.btn-2[data-v-fde58848] {\r\n    display: flex;\r\n    width: 60%;\r\n    justify-content: space-between;\n}\n.box-2[data-v-fde58848] {\r\n    height: 720px;\r\n    flex-shrink: 0;\r\n    border-radius: 20px;\r\n    background: #FFF;\r\n    box-shadow: 0px 10px 54px 0px rgba(0, 0, 0, 0.25);\r\n    width: 58%;\r\n    padding: 24px;\n}\n.Sponsorship[data-v-fde58848] {\r\n    width: 100%;\r\n    height: 100%;\r\n    flex-shrink: 0;\r\n    border-radius: 20px;\r\n    background: #FFF;\r\n    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\r\n    padding: 30px 20px;\n}\n}\n@media screen and (max-width: 425px){\n.short-card h3[data-v-fde58848] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 12px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    margin: 0px;\n}\n.id-titel p[data-v-fde58848] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 8px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: normal;\r\n    margin: 0px;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\n}\n.contact p[data-v-fde58848] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 10px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    margin: 0px;\n}\n.rol-1 p[data-v-fde58848] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 13px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: 24px;\r\n    margin: 0px;\r\n    padding-bottom: 12px;\n}\n.page-1[data-v-fde58848] {\r\n    width: 100%;\r\n    background-color: #F5F3EA;\r\n    padding: 20px;\n}\n.rol-card svg[data-v-fde58848] {\r\n    width: 20px;\r\n    height: 20px;\n}\n.yes[data-v-fde58848] {\r\n    width: 50%;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 2px;\r\n    justify-content: center;\n}\n.cards[data-v-fde58848] {\r\n    border-radius: 16px;\r\n    border: 2px solid #000;\r\n    background: #F96;\r\n    box-shadow: 4px 4px 0px 2px #1B1C1D;\r\n    width: 85%;\r\n    height: 100%;\r\n    flex-shrink: 0;\n}\n.btn-box[data-v-fde58848] {\r\n    width: 100%;\r\n    display: flex;\r\n    padding: 30px 0px 0px 0px;\r\n    flex-direction: column;\r\n    gap: 25px ;\r\n    align-content: center;\r\n    align-items: center;\n}\n.btn-1[data-v-fde58848] {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 18px;\r\n    justify-content: center;\n}\n.btn-2[data-v-fde58848] {\r\n    display: flex;\r\n    width: 60%;\r\n    flex-direction: column;\r\n    gap: 12px;\n}\n.over-box[data-v-fde58848] {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    gap: 20px 0px;\n}\n.Over-card[data-v-fde58848] {\r\n    width: 50%;\n}\n.OverView[data-v-fde58848] {\r\n    width: 100%;\r\n    padding-top: 40px;\n}\n.over-btn button[data-v-fde58848] {\r\n    border-radius: 6px;\r\n    border: 1px solid #000;\r\n    background: #F96;\r\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\r\n    display: inline-flex;\r\n    padding: 6px 16.25px 6px 15px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 4.75px;\r\n    color: #FFF;\r\n    text-align: center;\r\n    font-family: sans-serif;\r\n    font-size: 14px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 24px;\n}\n.over-btn[data-v-fde58848] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    padding: 30px 0px 0px 0px;\n}\n.box-2[data-v-fde58848] {\r\n    height: 100%;\r\n    flex-shrink: 0;\r\n    border-radius: 20px;\r\n    background: #FFF;\r\n    box-shadow: 0px 10px 54px 0px rgba(0, 0, 0, 0.25);\r\n    width: 90%;\n}\n.id-box[data-v-fde58848] {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    padding: 30px 0px 50px 0px;\n}\n.rol-1[data-v-fde58848] {\r\n    border-radius: 20px;\r\n    background: #FFF;\r\n    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\r\n    flex-shrink: 0;\r\n    width: 100%;\r\n    padding: 20px;\n}\n.new-btn-lid[data-v-fde58848] {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 20px;\n}\n.rol-3[data-v-fde58848] {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding-top: 15px;\r\n    gap: 10px;\n}\n.rol-card[data-v-fde58848] {\r\n    width: 48%;\r\n    border-radius: 10px;\r\n    background: #FFF;\r\n    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: 12px 10px;\r\n    flex-wrap: wrap;\n}\n.rol-para h2[data-v-fde58848] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 12px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: normal;\r\n    margin: 0px;\n}\n.rol-para p[data-v-fde58848] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 8px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: normal;\r\n    margin: 0px;\n}\n.div-1 h2[data-v-fde58848] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 12px;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    margin: 0px;\r\n    width: 80%;\n}\n.div-1 svg[data-v-fde58848] {\r\n    width: 15px;\r\n    height: 15px;\n}\n.Enrolled p[data-v-fde58848] {\r\n    font-size: 7px;\n}\n.Reviews p[data-v-fde58848] {\r\n    font-size: 7px;\n}\n.Enrolled svg[data-v-fde58848] {\r\n    width: 18px;\r\n    height: 18px;\n}\n.Reviews svg[data-v-fde58848] {\r\n    width: 18px;\r\n    height: 18px;\n}\n.new-2[data-v-fde58848] {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    flex-wrap: wrap;\r\n    gap: 30px;\n}\n.short-card[data-v-fde58848] {\r\n    width: 42%;\r\n    background: #FFF;\r\n    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\r\n    padding: 12px 20px;\n}\n.new-3[data-v-fde58848] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 28px;\n}\n.dashbord-card[data-v-fde58848] {\r\n    background: #FFF;\r\n    box-shadow: 4px 0px 24px 0px rgba(0, 0, 0, 0.25);\r\n    height: 100%;\r\n    flex-shrink: 0;\r\n    width: 90%;\r\n    border-radius: 20px;\n}\n.conting-card[data-v-fde58848] {\r\n    height: 350px;\r\n    flex-shrink: 0;\r\n    background: #FFF;\r\n    box-shadow: 4px 0px 24px 0px rgba(0, 0, 0, 0.25);\r\n    width: 76%;\r\n    padding: 12px 15px;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    border-radius: 20px;\n}\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/pro.vue?vue&type=style&index=0&id=cfc11104&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/pro.vue?vue&type=style&index=0&id=cfc11104&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.id-box img[data-v-cfc11104] {\n    width: 47%;\n    border-radius: 50%;\n   \n    max-height: 190px;\n    min-height: 190px;\n    -o-object-fit: cover;\n       object-fit: cover;\n}\n.page-1[data-v-cfc11104] {\n    width: 100%;\n    background-color: #F5F3EA;\n    padding: 30px;\n}\n.contanir[data-v-cfc11104] {\n    width: 100%;\n    max-width: 1600px;\n    margin: 0 auto;\n}\n.Sponsorship h2[data-v-cfc11104] {\n    color: #000;\n    font-family: sans-serif;\n    font-size: 18px;\n    font-style: normal;\n    font-weight: 500;\n    line-height: 24px; /* 150% */\n    padding-bottom: 25px;\n    margin: 0px ;\n}\n.card-box[data-v-cfc11104] {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n}\n.cards[data-v-cfc11104] {\n    border-radius: 16px;\n    border: 2px solid #000;\n    background: #F96;\n    box-shadow: 4px 4px 0px 2px #1B1C1D;\n    width: 30%;\n    height: 100%;\n    flex-shrink: 0;\n}\n.main[data-v-cfc11104] {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n}\n.box-1[data-v-cfc11104] {\n    height: 100%;\n    background: transparent;\n    width: 67%;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: space-between;\n    gap: 38px;\n}\n.box-2[data-v-cfc11104] {\n    height: 100% !important;\n    flex-shrink: 0;\n    border-radius: 20px;\n    background: #FFF;\n    box-shadow: 0px 10px 54px 0px rgba(0, 0, 0, 0.25);\n    width: 30%;\n    padding: 30px;\n}\n.Sponsorship[data-v-cfc11104] {\n    width: 100%;\n    height: 100%;\n    flex-shrink: 0;\n    border-radius: 20px;\n    background: #FFF;\n    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\n    padding: 30px 33px ;\n}\n.btn-box[data-v-cfc11104] {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 30px 0px;\n}\n.btn-2[data-v-cfc11104] {\n    display: flex;\n    width: 46%;\n    justify-content: space-between;\n}\n.btn-1[data-v-cfc11104] {\n    width: 35%;\n    display: flex;\n    align-items: center;\n    gap: 18px;\n}\n.Campaign[data-v-cfc11104] {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    border-radius: 10px;\n    background: #FFF;\n    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\n    padding: 12px 20px;\n}\n.Campaign h2[data-v-cfc11104] {\n    padding: 0px;\n    color: #000;\n    font-family: sans-serif;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 500;\n    line-height: normal;\n}\n.Campaign p[data-v-cfc11104] {\n    color: #000;\n    font-family: sans-serif;\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 500;\n    line-height: normal;\n    margin: 0px;\n}\n.over-btn[data-v-cfc11104] {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    padding: 50px 0px 0px 0px;\n}\n.over-btn button[data-v-cfc11104] {\n    border-radius: 6px;\n    border: 1px solid #000;\n    background: #F96;\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\n    display: inline-flex;\n    padding: 10px 21.25px 10px 20px;\n    justify-content: center;\n    align-items: center;\n    gap: 4.75px;\n    color: #FFF;\n    text-align: center;\n    font-family: sans-serif;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: 24px; /* 150% */\n}\n.btn-1 button[data-v-cfc11104] {\n    border-radius: 6px;\n    border: 1px solid #000;\n    background: #F96;\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\n    display: flex;\n    width: 154.75px;\n    justify-content: center;\n    align-items: center;\n    gap: 7.647px;\n    flex-shrink: 0;\n    padding: 10px;\n    color: #FFF;\n    text-align: center;\n    font-family: sans-serif;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: 24px; /* 150% */\n}\nbutton.Add[data-v-cfc11104] {\n    border-radius: 6px;\n    border: 1px solid #000;\n    background: #F5F3EA;\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\n    color: #000;\n}\n.OverView[data-v-cfc11104] {\n    width: 100%;\n    padding-top: 75px;\n}\n.OverView h2[data-v-cfc11104] {\n    color: #000;\n    font-family: sans-serif;\n    font-size: 26px;\n    font-style: normal;\n    font-weight: 500;\n    line-height: 24px; /* 92.308% */\n    margin: 0px;\n    padding-bottom: 30px;\n}\n.over-box[data-v-cfc11104] {\n    width: 100%;\n    display: flex;\n}\n.Over-card h4[data-v-cfc11104] {\n    color: #FF5757;\n    font-family: sans-serif;\n    font-size: 20px;\n    font-style: normal;\n    font-weight: 800;\n    line-height: 24px; /* 114.286% */\n    margin: 0px;\n}\n.Over-card h4 span[data-v-cfc11104] {\n    color: #000;\n    font-family: sans-serif;\n    font-size: 38px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: 24px; /* 58.537% */\n    padding-left: 5px;\n}\n.Over-card[data-v-cfc11104] {\n    width: 25%;\n}\n\n/* .../ */\n.pox-1[data-v-cfc11104] {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 20px;\n    border-bottom: 1px solid #000;\n}\n.pox-1 h2[data-v-cfc11104] {\n    color: #000;\n    text-align: center;\n    font-family: sans-serif;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 800;\n    line-height: 24px; /* 150% */\n    margin: 0px;\n    padding: 0px;\n}\n.top-btn[data-v-cfc11104] {\n    width: 49%;\n    display: flex;\n    align-items: center;\n}\n.top-btn button[data-v-cfc11104] {\n    border: none;\n    background: transparent;\n}\n.pox-2[data-v-cfc11104] {\n    width: 100%;\n    padding: 20px;\n}\n.pox-2 p[data-v-cfc11104] {\n    color: #000;\n    font-family: sans-serif;\n    font-size: 18px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n    letter-spacing: -0.96px;\n    margin: 0px;\n}\n.pox-2 h2[data-v-cfc11104] {\n    color: #000;\n    font-family: sans-serif;\n    font-style: normal;\n    font-weight: 600;\n    line-height: 24px; /* 150% */\n    padding: 15px 0px;\n}\n.pox-box[data-v-cfc11104] {\n    width: 100%;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: space-between;\n    gap: 10px 0px;\n}\n.yes[data-v-cfc11104] {\n    width: 50%;\n    display: flex;\n    align-items: center;\n    gap: 5px;\n}\n.pox-3[data-v-cfc11104] {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end;\n    padding: 25px 0px 0px 0px;\n}\n.pox-3 h2[data-v-cfc11104] {\n    color: #000;\n    font-family: sans-serif;\n    font-size: 18px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n    padding: 0px 0px 0px 0px;\n}\n.pox-3 p[data-v-cfc11104] {\n    color: #000;\n    text-align: center;\n    font-family: sans-serif;\n    font-size: 15px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: 24px; /* 150% */\n    width: 40%;\n}\n.pox-3 h2 span[data-v-cfc11104] {\n    color: #000;\n    font-family: sans-serif;\n    font-size: 20px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: normal;\n}\nbutton.llo[data-v-cfc11104] {\n    color: #fff;\n}\n.box-2 h2[data-v-cfc11104] {\n    color: #000;\n    font-family: sans-serif;\n    font-size: 18px;\n    font-style: normal;\n    font-weight: 500;\n    line-height: normal;\n}\n.id-box[data-v-cfc11104] {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 70px 0px 120px 0px;\n}\n.id-box h2[data-v-cfc11104] {\n    color: #000;\n    font-family: sans-serif;\n    font-size: 26px;\n    font-style: normal;\n    font-weight: bold;\n    line-height: normal;\n    margin: 0px;\n    padding: 20px 0px 4px 0px;\n}\n.id-box h3[data-v-cfc11104] {color: #000;font-family: sans-serif;font-size: 16px;font-style: normal;font-weight: 500;line-height: normal;}\n.titel-box[data-v-cfc11104] {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-bottom: 20px;\n}\n.id-titel[data-v-cfc11104] {\n    display: flex;\n    align-items: center;\n    width: 30%;\n    justify-content: space-between;\n}\n.id-titel p[data-v-cfc11104] {\n    color: #000;\n    font-family: sans-serif;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 500;\n    line-height: normal;\n    margin: 0px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n.contact-box[data-v-cfc11104] {\n    width: 100%;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    padding-bottom: 40px;\n}\n.contact[data-v-cfc11104] {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 15px;\n}\n.contact p[data-v-cfc11104] {\n    color: #000;\n    font-family: sans-serif;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n    margin: 0px;\n}\n.para-box[data-v-cfc11104] {\n    width: 100%;\n    border-top: 1px solid #F96;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n}\n.para-box p[data-v-cfc11104] {\n    color: #000;\n    text-align: center;\n    font-family: sans-serif;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 500;\n    line-height: 24px; /* 150% */\n    margin: 0px;\n    padding: 32px 0px 44px 0px;\n}\n.para-box button[data-v-cfc11104] {\n    border-radius: 6px;\n    border: 1px solid #000;\n    background: #F96;\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\n    display: flex;\n    width: 154.75px;\n    height: 44px;\n    padding: 10px 18px;\n    justify-content: center;\n    align-items: center;\n    gap: 7.647px;\n    flex-shrink: 0;\n     /* 150% */\n}\n.para-box button p[data-v-cfc11104] {\n    color: #FFF;\n    text-align: center;\n    font-family: sans-serif;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: 24px; /* 150% */\n    padding: 0px;\n}\n.new-1[data-v-cfc11104] {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n}\n.new-2[data-v-cfc11104] {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n.new-3[data-v-cfc11104] {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n.rol-1[data-v-cfc11104] {\n    border-radius: 20px;\n    background: #FFF;\n    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\n    flex-shrink: 0;\n    width: 36%;\n    padding: 32px;\n}\n.rol-1 p[data-v-cfc11104] {\n    color: #000;\n    font-family: sans-serif;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 500;\n    line-height: 24px; /* 150% */\n    margin: 0px;\n    padding-bottom: 12px;\n}\n.rol-1 h2[data-v-cfc11104] {\n    color: #1B1C1D;\n    font-family: sans-serif;\n    font-size: 66px;\n    font-style: normal;\n    font-weight: bold;\n    line-height: normal;\n}\n.new-btn-lid[data-v-cfc11104] {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n.new-btn-lid  button[data-v-cfc11104] {\n    border-radius: 6px;\n    border: 1px solid #000;\n    background: #F96;\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\n    display: flex;\n    width: 154.75px;\n    height: 44px;\n    padding: 10px 18px;\n    justify-content: center;\n    align-items: center;\n    gap: 7.647px;\n    flex-shrink: 0;\n}\n.new-btn-lid button p[data-v-cfc11104] {\n    margin: 0px;\n    color: #FFF;\n    text-align: center;\n    font-family: sans-serif;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: 24px;\n    margin: 0px;\n    padding: 0px;\n}\n.rol-3[data-v-cfc11104] {\n    width: 62%;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: space-between;\n    padding-top: 24px;\n}\n.rol-3 p[data-v-cfc11104] {\n    margin: 0px;\n    color: #000;\n    font-family: sans-serif;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 500;\n    line-height: normal;\n    width: 100%;\n}\n.rol-card[data-v-cfc11104] {\n    width: 48%;\n    border-radius: 10px;\n    background: #FFF;\n    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 10px 15px;\n    flex-wrap: wrap;\n}\n.rol-para h2[data-v-cfc11104] {\n    color: #000;\n    font-family: sans-serif;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 500;\n    line-height: normal;\n    margin: 0px;\n}\n.rol-para[data-v-cfc11104] {\n    width: 84%;\n}\n.rol-para p[data-v-cfc11104] {\n    color: #000;\n    font-family: sans-serif;\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 500;\n    line-height: normal;\n    margin: 0px;\n}\n.div-1[data-v-cfc11104] {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n}\n.div-1 h2[data-v-cfc11104] {\n    color: #000;\n    font-family: sans-serif;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: bold;\n    line-height: normal;\n    margin: 0px;\n    width: 80%;\n}\n.div-1 p[data-v-cfc11104] {\n    width: 20%;\n}\n.div-2[data-v-cfc11104] {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding-top: 15px;\n}\n.Enrolled[data-v-cfc11104] {\n    display: flex;\n    align-items: center;\n    width: 58%;\n}\n.Enrolled[data-v-cfc11104] {}\n.Reviews[data-v-cfc11104] {\n    width: 40%;\n    display: flex;\n    align-items: center;\n}\n.short-card[data-v-cfc11104] {\n    width: 24%;\n    border-radius: 20px;\n    background: #FFF;\n    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\n    padding: 18px 25px;\n}\n.short-card p[data-v-cfc11104] {\n    color: #000;\n    font-family: sans-serif;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 500;\n    line-height: 24px; /* 150% */\n    margin: 0px;\n}\n.short-card h2[data-v-cfc11104] {\n    color: #000;\n    font-family: sans-serif;\n    font-size: 42px;\n    font-style: normal;\n    font-weight: 1000;\n    line-height: normal;\n    margin: 0px;\n    padding: 12px 0px 5px 0px;\n}\n.short-card h3[data-v-cfc11104] {\n    color: #000;\n    font-family: sans-serif;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n    margin: 0px;\n}\n.dashbord-card[data-v-cfc11104] {\n    background: #FFF;\n    box-shadow: 4px 0px 24px 0px rgba(0, 0, 0, 0.25);\n    height: 417px;\n    flex-shrink: 0;\n    width: 64%;\n    border-radius: 20px 0px 0px 20px;\n}\n.conting-card[data-v-cfc11104] {\n    height: 417px;\n    flex-shrink: 0;\n    background: #FFF;\n    box-shadow: 4px 0px 24px 0px rgba(0, 0, 0, 0.25);\n    width: 35%;\n    padding: 42px 40px;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: space-between;\n    border-radius: 0px 20px 20px 0px;\n}\n.conting-card h2[data-v-cfc11104] {\n    color: #000;\n    font-family: sans-serif;\n    font-size: 26px;\n    font-style: normal;\n    font-weight: 500;\n    line-height: 24px; /* 92.308% */\n    width: 100%;\n    margin: 0px;\n}\n.divs[data-v-cfc11104] {\n    width: 48%;\n}\n.divs h2[data-v-cfc11104] {\n    color: #F96;\n    font-family: sans-serif;\n    font-size: 21px;\n    font-style: normal;\n    font-weight: bold;\n    line-height: 24px; /* 114.286% */\n    margin: 0px;\n}\n.divs h3[data-v-cfc11104] {\n    color: #000;\n    font-family: sans-serif;\n    font-size: 41px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: 24px; /* 58.537% */\n    margin: 0px;\n    padding-top: 20px;\n}\n@media screen and (max-width: 1600px){\n.contanir[data-v-cfc11104] {\n    width: 100%;\n    max-width: 1440px;\n    margin: 0 auto;\n}\n.dashbord-card[data-v-cfc11104] {\n    background: #FFF;\n    box-shadow: 4px 0px 24px 0px rgba(0, 0, 0, 0.25);\n    height: 400px;\n    flex-shrink: 0;\n    width: 64%;\n    border-radius: 20px 0px 0px 20px;\n}\n.divs h2[data-v-cfc11104] {\n    color: #F96;\n    font-family: sans-serif;\n    font-size: 18px;\n    font-style: normal;\n    font-weight: bold;\n    line-height: 24px;\n    margin: 0px;\n}\n.divs h3[data-v-cfc11104] {\n    color: #000;\n    font-family: sans-serif;\n    font-size: 38px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: 24px;\n    margin: 0px;\n    padding-top: 12px;\n}\n.rol-1 h2[data-v-cfc11104] {\n    color: #1B1C1D;\n    font-family: sans-serif;\n    font-size: 55px;\n    font-style: normal;\n    font-weight: 1000;\n    line-height: normal;\n    text-align: center;\n}\n.new-btn-lid button[data-v-cfc11104] {\n    border-radius: 6px;\n    border: 1px solid #000;\n    background: #F96;\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\n    display: flex;\n    width: 130px;\n    height: 38px;\n    padding: 10px 18px;\n    justify-content: center;\n    align-items: center;\n    gap: 7.647px;\n    flex-shrink: 0;\n}\n.new-btn-lid button p[data-v-cfc11104] {\n    margin: 0px;\n    color: #FFF;\n    text-align: center;\n    font-family: sans-serif;\n    font-size: 12px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: 24px;\n    margin: 0px;\n    padding: 0px;\n}\n.rol-1[data-v-cfc11104] {\n    border-radius: 20px;\n    background: #FFF;\n    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\n    flex-shrink: 0;\n    width: 36%;\n    padding: 30px;\n}\n.rol-3[data-v-cfc11104] {\n    width: 62%;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: space-between;\n    padding-top: 15px;\n}\n.rol-card svg[data-v-cfc11104] {\n    width: 26px;\n    height: 25px;\n}\n.rol-3 p[data-v-cfc11104] {\n    margin: 0px;\n    color: #000;\n    font-family: sans-serif;\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 500;\n    line-height: normal;\n    width: 100%;\n}\n.rol-para p[data-v-cfc11104] {\n    color: #000;\n    font-family: sans-serif;\n    font-size: 12px;\n    font-style: normal;\n    font-weight: 500;\n    line-height: normal;\n    margin: 0px;\n}\n.pox-1[data-v-cfc11104] {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 12px;\n    border-bottom: 1px solid #000;\n}\n.top-btn button[data-v-cfc11104] {\n    border: none;\n    background: transparent;\n    padding: 4px;\n}\n.yes[data-v-cfc11104] {\n    width: 50%;\n    display: flex;\n    align-items: center;\n    gap: 2px;\n}\n.pox-3 h2 span[data-v-cfc11104] {\n    color: #000;\n    font-family: sans-serif;\n    font-size: 17px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: normal;\n}\n.div-1 p[data-v-cfc11104] {\n    width: 20%;\n}\n.short-card h2[data-v-cfc11104] {\n    color: #000;\n    font-family: sans-serif;\n    font-size: 38px;\n    font-style: normal;\n    font-weight: 1000;\n    line-height: normal;\n    margin: 0px;\n    padding: 5px 0px 0px 0px;\n}\n.conting-card[data-v-cfc11104] {\n    height: 400px;\n    flex-shrink: 0;\n    background: #FFF;\n    box-shadow: 4px 0px 24px 0px rgba(0, 0, 0, 0.25);\n    width: 35%;\n    padding: 15px 25px;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: space-between;\n    border-radius: 0px 20px 20px 0px;\n}\n.id-box[data-v-cfc11104] {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 35px 0px 70px 0px;\n}\n.short-card[data-v-cfc11104] {\n    width: 24%;\n    border-radius: 20px;\n    background: #FFF;\n    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\n    padding: 14px 20px;\n}\n.pox-3 p[data-v-cfc11104] {\n \n    color: #000;\n    text-align: center;\n    font-family: sans-serif;\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: 24px;\n    width: 40%;\n}\n.pox-3 h2[data-v-cfc11104] {\n    color: #000;\n    font-family: sans-serif;\n    font-size: 17px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n    padding: 0px 0px 0px 0px;\n}\n.btn-1 button[data-v-cfc11104] {\n    border-radius: 6px;\n    border: 1px solid #000;\n    background: #F96;\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\n    display: flex;\n    width: 154.75px;\n    justify-content: center;\n    align-items: center;\n    gap: 7.647px;\n    flex-shrink: 0;\n    padding: 8px;\n    color: #FFF;\n    text-align: center;\n    font-family: sans-serif;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: 24px;\n}\n.btn-2[data-v-cfc11104] {\n    display: flex;\n    width: 50%;\n    justify-content: space-between;\n}\n.id-titel[data-v-cfc11104] {\n    display: flex;\n    align-items: center;\n    width: 32%;\n    justify-content: space-between;\n}\n.over-btn button[data-v-cfc11104] {\n    border-radius: 6px;\n    border: 1px solid #000;\n    background: #F96;\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\n    display: inline-flex;\n    padding: 8px 21.25px 8px 20px;\n    justify-content: center;\n    align-items: center;\n    gap: 4.75px;\n    color: #FFF;\n    text-align: center;\n    font-family: sans-serif;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: 24px;\n}\n.Over-card h4 span[data-v-cfc11104] {\n    color: #000;\n    font-family: sans-serif;\n    font-size: 35px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: 24px;\n    padding-left: 5px;\n}\n.Over-card h4[data-v-cfc11104] {\n    color: #FF5757;\n    font-family: sans-serif;\n    font-size: 18px;\n    font-style: normal;\n    font-weight: 800;\n    line-height: 24px;\n    margin: 0px;\n}\n.para-box button[data-v-cfc11104] {\n    border-radius: 6px;\n    border: 1px solid #000;\n    background: #F96;\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\n    display: flex;\n    width: 154.75px;\n    height: 42px;\n    padding: 10px 18px;\n    justify-content: center;\n    align-items: center;\n    gap: 7.647px;\n    flex-shrink: 0;\n}\nbutton.Add[data-v-cfc11104] {\n    border-radius: 6px;\n    border: 1px solid #000 !important;\n    background: #F5F3EA !important;\n    box-shadow: 2px 2px 0px 0px #1B1C1D !important; \n    color: #000 !important;\n}\n}\n@media screen and (max-width: 1440px){\n.id-box h3[data-v-cfc11104] {\n    color: #000;\n    font-family: sans-serif;\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 500;\n    line-height: normal;\n}\n.contanir[data-v-cfc11104] {\n    width: 100%;\n    max-width: 1170px;\n    margin: 0 auto;\n}\n.div-1 h2[data-v-cfc11104] {\n    color: #000;\n    font-family: sans-serif;\n    font-size: 14px;\n    font-style: normal;\n    font-weight: bold;\n    line-height: normal;\n    margin: 0px;\n    width: 80%;\n}\n.rol-para h2[data-v-cfc11104] {\n    color: #000;\n    font-family: sans-serif;\n    font-size: 12px;\n    font-style: normal;\n    font-weight: 500;\n    line-height: normal;\n    margin: 0px;\n}\n.rol-3 p[data-v-cfc11104] {\n    margin: 0px;\n    color: #000;\n    font-family: sans-serif;\n    font-size: 13px;\n    font-style: normal;\n    font-weight: 500;\n    line-height: normal;\n    width: 100%;\n}\n.rol-1 h2[data-v-cfc11104] {\n    color: #1B1C1D;\n    font-family: sans-serif;\n    font-size: 38px;\n    font-style: normal;\n    font-weight: 1000;\n    line-height: normal;\n    text-align: center;\n}\n.new-btn-lid button[data-v-cfc11104] {\n    border-radius: 6px;\n    border: 1px solid #000;\n    background: #F96;\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\n    display: flex;\n    width: 110px;\n    height: 34px;\n    padding: 10px 0px;\n    justify-content: center;\n    align-items: center;\n    gap: 4px;\n    flex-shrink: 0;\n}\n.div-1 svg[data-v-cfc11104] {\n    width: 20px;\n    height: 20px;\n}\n.div-1 p[data-v-cfc11104] {\n    width: 20%;\n    font-size: 12px;\n}\n.rol-para p[data-v-cfc11104] {\n    color: #000;\n    font-family: sans-serif;\n    font-size: 10px;\n    font-style: normal;\n    font-weight: 500;\n    line-height: normal;\n    margin: 0px;\n}\n.Reviews p[data-v-cfc11104] {\n    font-size: 10px;\n}\n.Enrolled p[data-v-cfc11104] {\n    font-size: 10px;\n}\n.div-2[data-v-cfc11104] {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding-top: 3px;\n}\n.short-card p[data-v-cfc11104] {\n    color: #000;\n    font-family: sans-serif;\n    font-size: 15px;\n    font-style: normal;\n    font-weight: 500;\n    line-height: 24px;\n    margin: 0px;\n}\n.short-card h2[data-v-cfc11104] {\n    color: #000;\n    font-family: sans-serif;\n    font-size: 25px;\n    font-style: normal;\n    font-weight: 1000;\n    line-height: normal;\n    margin: 0px;\n    padding: 0px 0px 0px 0px;\n}\n.short-card[data-v-cfc11104] {\n    width: 24%;\n    border-radius: 15px;\n    background: #FFF;\n    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\n    padding: 12px 20px;\n}\n.dashbord-card[data-v-cfc11104] {\n    background: #FFF;\n    box-shadow: 4px 0px 24px 0px rgba(0, 0, 0, 0.25);\n    height: 350px;\n    flex-shrink: 0;\n    width: 64%;\n    border-radius: 20px 0px 0px 20px;\n}\n.conting-card[data-v-cfc11104] {\n    height: 350px;\n    flex-shrink: 0;\n    background: #FFF;\n    box-shadow: 4px 0px 24px 0px rgba(0, 0, 0, 0.25);\n    width: 35%;\n    padding: 15px 25px;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: space-between;\n    border-radius: 0px 20px 20px 0px;\n}\n.box-1[data-v-cfc11104] {\n    height: 100%;\n    background: transparent;\n    width: 67%;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: space-between;\n    gap: 30px;\n}\n.divs h2[data-v-cfc11104] {\n    color: #F96;\n    font-family: sans-serif;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: bold;\n    line-height: 24px;\n    margin: 0px;\n}\n.divs h3[data-v-cfc11104] {\n    color: #000;\n    font-family: sans-serif;\n    font-size: 28px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: 24px;\n    margin: 0px;\n    padding-top: 10px;\n}\n.conting-card[data-v-cfc11104] {\n    height: 350px;\n    flex-shrink: 0;\n    background: #FFF;\n    box-shadow: 4px 0px 24px 0px rgba(0, 0, 0, 0.25);\n    width: 35%;\n    padding: 12px 15px;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: space-between;\n    border-radius: 0px 20px 20px 0px;\n}\n.id-box[data-v-cfc11104] {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 40px 0px 65px 0px;\n}\n.rol-1[data-v-cfc11104] {\n    border-radius: 20px;\n    background: #FFF;\n    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\n    flex-shrink: 0;\n    width: 36%;\n    padding: 20px;\n}\n.pox-2 h2[data-v-cfc11104] {\n    color: #000;\n    font-family: sans-serif;\n    font-style: normal;\n    font-weight: 600;\n    line-height: 20px;\n    padding: 12px 0px;\n}\n.Sponsorship[data-v-cfc11104] {\n    width: 100%;\n    height: 100%;\n    flex-shrink: 0;\n    border-radius: 20px;\n    background: #FFF;\n    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\n    padding: 30px 20px;\n}\n.OverView[data-v-cfc11104] {\n    width: 100%;\n    padding-top: 60px;\n}\n.OverView h2[data-v-cfc11104] {\n    color: #000;\n    font-family: sans-serif;\n    font-size: 24px;\n    font-style: normal;\n    font-weight: 500;\n    line-height: 24px;\n    margin: 0px;\n    padding-bottom: 20px;\n}\n.Over-card h4[data-v-cfc11104] {\n    color: #FF5757;\n    font-family: sans-serif;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 800;\n    line-height: 24px;\n    margin: 0px;\n}\n.Over-card h4 span[data-v-cfc11104] {\n    color: #000;\n    font-family: sans-serif;\n    font-size: 28px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: 24px;\n    padding-left: 0px;\n}\n.over-btn[data-v-cfc11104] {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    padding: 40px 0px 0px 0px;\n}\n.over-btn button[data-v-cfc11104] {\n    border-radius: 6px;\n    border: 1px solid #000;\n    background: #F96;\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\n    display: inline-flex;\n    padding: 7px 16.25px 7px 15px;\n    justify-content: center;\n    align-items: center;\n    gap: 4.75px;\n    color: #FFF;\n    text-align: center;\n    font-family: sans-serif;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: 24px;\n}\n.top-btn button[data-v-cfc11104] {\n    border: none;\n    background: transparent;\n    padding: 4px;\n    display: flex;\n    align-items: center;\n}\n.top-btn button svg[data-v-cfc11104] {\n    width: 15px;\n    height: 15px;\n}\n.top-btn[data-v-cfc11104] {\n    width: 42%;\n    display: flex;\n    align-items: center;\n}\n.pox-1[data-v-cfc11104] {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 8px;\n    border-bottom: 1px solid #000;\n}\n.top-btn button span[data-v-cfc11104] {\n    font-size: 12px;\n}\n.pox-1 h2[data-v-cfc11104] {\n    color: #000;\n    text-align: center;\n    font-family: sans-serif;\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 800;\n    line-height: 24px;\n    margin: 0px;\n    padding: 0px;\n}\n.pox-2[data-v-cfc11104] {\n    width: 100%;\n    padding: 10px;\n}\n.pox-2 p[data-v-cfc11104] {\n    color: #000;\n    font-family: sans-serif;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n    letter-spacing: -0.96px;\n    margin: 0px;\n}\n.pox-3 h2[data-v-cfc11104] {\n    color: #000;\n    font-family: sans-serif;\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n    padding: 0px 0px 0px 0px;\n    width: 58%;\n}\n.pox-3[data-v-cfc11104] {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end;\n    padding: 15px 0px;\n}\n.pox-box[data-v-cfc11104] {\n    width: 100%;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: space-between;\n    gap: 5px 0px;\n}\n.cards[data-v-cfc11104] {\n    border-radius: 16px;\n    border: 2px solid #000;\n    background: #F96;\n    box-shadow: 4px 4px 0px 2px #1B1C1D;\n    width: 30%;\n    height: 100%;\n    flex-shrink: 0;\n}\n.yes p[data-v-cfc11104] {\n    font-size: 14px;\n}\n.pox-3 h2 span[data-v-cfc11104] {\n    color: #000;\n    font-family: sans-serif;\n    font-size: 15px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: normal;\n}\n.pox-3 p[data-v-cfc11104] {\n    color: #000;\n    text-align: center;\n    font-family: sans-serif;\n    font-size: 12px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: 24px;\n    width: 44%;\n    margin: 0px;\n    padding: 0px;\n}\n.btn-1 button[data-v-cfc11104] {\n    border-radius: 6px;\n    border: 1px solid #000;\n    background: #F96;\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\n    display: flex;\n    width: 130.75px;\n    justify-content: center;\n    align-items: center;\n    gap: 7.647px;\n    flex-shrink: 0;\n    padding: 6px;\n    color: #FFF;\n    text-align: center;\n    font-family: sans-serif;\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: 24px;\n}\n.btn-2[data-v-cfc11104] {\n    display: flex;\n    width: 52%;\n    justify-content: space-between;\n}\n.Campaign[data-v-cfc11104] {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    border-radius: 10px;\n    background: #FFF;\n    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\n    padding: 8px 10px;\n}\n.Campaign svg[data-v-cfc11104] {\n    width: 30px;\n    height: 30px;\n}\n.id-box[data-v-cfc11104] {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 50px 0px 80px 0px;\n}\n.id-box img[data-v-cfc11104] {\n    width: 50%;\n    border-radius: 50%;\n   \n    max-height: 150px;\n    min-height: 150px;\n    -o-object-fit: cover;\n       object-fit: cover;\n}\n.id-box h2[data-v-cfc11104] {\n    color: #000;\n    font-family: sans-serif;\n    font-size: 24px;\n    font-style: normal;\n    font-weight: bold;\n    line-height: normal;\n    margin: 0px;\n    padding: 15px 0px 2px 0px;\n}\n.contact[data-v-cfc11104] {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 5px;\n}\n.contact p[data-v-cfc11104] {\n    color: #000;\n    font-family: sans-serif;\n    font-size: 12px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n    margin: 0px;\n}\n.id-titel p[data-v-cfc11104] {\n    color: #000;\n    font-family: sans-serif;\n    font-size: 10px;\n    font-style: normal;\n    font-weight: 500;\n    line-height: normal;\n    margin: 0px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n.id-titel svg[data-v-cfc11104] {\n    width: 18px;\n    height: 18px;\n}\n.contact-box[data-v-cfc11104] {\n    width: 100%;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    padding-bottom: 15px;\n}\n.para-box p[data-v-cfc11104] {\n    color: #000;\n    text-align: center;\n    font-family: sans-serif;\n    font-size: 13px;\n    font-style: normal;\n    font-weight: 500;\n    line-height: 24px;\n    margin: 0px;\n    padding: 25px 0px 25px 0px;\n}\n.para-box button[data-v-cfc11104] {\n    border-radius: 6px;\n    border: 1px solid #000;\n    background: #F96;\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\n    display: flex;\n    width: 144.75px;\n    height: 38px;\n    padding: 10px 18px;\n    justify-content: center;\n    align-items: center;\n    gap: 7.647px;\n    flex-shrink: 0;\n}\n.main[data-v-cfc11104] {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-start;\n}\n.box-2[data-v-cfc11104] {\n    height: 100% !important;\n    flex-shrink: 0;\n    border-radius: 20px;\n    background: #FFF;\n    box-shadow: 0px 10px 54px 0px rgba(0, 0, 0, 0.25);\n    width: 30%;\n    padding: 24px;\n}\n}\n@media screen and (max-width: 1024px){\n.page-1[data-v-cfc11104] {\n    width: 100%;\n    background-color: #F5F3EA;\n    padding: 40px;\n}\n.main[data-v-cfc11104] {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-wrap: wrap;\n    gap: 55px 0px;\n}\n.box-1[data-v-cfc11104] {\n  height: 100%;\n    background: transparent;\n    width: 100%;\n}\n.box-2[data-v-cfc11104] {\n    height: 100% !important;\n    flex-shrink: 0;\n    border-radius: 20px;\n    background: #FFF;\n    box-shadow: 0px 10px 54px 0px rgba(0, 0, 0, 0.25);\n    width: 42%;\n    padding: 24px;\n}\n.btn-2[data-v-cfc11104] {\n    display: flex;\n    width: 44%;\n    justify-content: space-between;\n}\n}\n@media screen and (max-width: 768px){\n.cards[data-v-cfc11104] {\n    border-radius: 16px;\n    border: 2px solid #000;\n    background: #F96;\n    box-shadow: 4px 4px 0px 2px #1B1C1D;\n    width: 44%;\n    height: 100%;\n    flex-shrink: 0;\n}\n.new-1[data-v-cfc11104] {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    flex-direction: column;\n}\n.rol-1[data-v-cfc11104] {\n    border-radius: 20px;\n    background: #FFF;\n    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\n    flex-shrink: 0;\n    width: 45%;\n    padding: 20px;\n}\n.rol-3[data-v-cfc11104] {\n    width: 75%;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: space-between;\n    padding-top: 15px;\n    gap: 15px;\n}\n.card-box[data-v-cfc11104] {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    align-items: center;\n    gap: 31px;\n}\n.btn-box[data-v-cfc11104] {\n    width: 100%;\n    display: flex;\n    align-items: stretch;\n    justify-content: space-between;\n    padding: 30px 0px 0px 0px ; \n    flex-direction: column;\n    gap: 25px;\n}\n.btn-2[data-v-cfc11104] {\n    display: flex;\n    width: 60%;\n    justify-content: space-between;\n}\n.box-2[data-v-cfc11104] {\n    height: 100% !important;\n    flex-shrink: 0;\n    border-radius: 20px;\n    background: #FFF;\n    box-shadow: 0px 10px 54px 0px rgba(0, 0, 0, 0.25);\n    width: 58%;\n    padding: 24px;\n}\n.Sponsorship[data-v-cfc11104] {\n    width: 100%;\n    height: 100%;\n    flex-shrink: 0;\n    border-radius: 20px;\n    background: #FFF;\n    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\n    padding: 30px 20px;\n}\n}\n@media screen and (max-width: 425px){\n.short-card h3[data-v-cfc11104] {\n    color: #000;\n    font-family: sans-serif;\n    font-size: 12px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n    margin: 0px;\n}\n.id-titel p[data-v-cfc11104] {\n    color: #000;\n    font-family: sans-serif;\n    font-size: 8px;\n    font-style: normal;\n    font-weight: 500;\n    line-height: normal;\n    margin: 0px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n.contact p[data-v-cfc11104] {\n    color: #000;\n    font-family: sans-serif;\n    font-size: 10px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n    margin: 0px;\n}\n.rol-1 p[data-v-cfc11104] {\n    color: #000;\n    font-family: sans-serif;\n    font-size: 13px;\n    font-style: normal;\n    font-weight: 500;\n    line-height: 24px;\n    margin: 0px;\n    padding-bottom: 12px;\n}\n.page-1[data-v-cfc11104] {\n    width: 100%;\n    background-color: #F5F3EA;\n    padding: 20px;\n}\n.rol-card svg[data-v-cfc11104] {\n    width: 20px;\n    height: 20px;\n}\n.yes[data-v-cfc11104] {\n    width: 50%;\n    display: flex;\n    align-items: center;\n    gap: 2px;\n    justify-content: center;\n}\n.cards[data-v-cfc11104] {\n    border-radius: 16px;\n    border: 2px solid #000;\n    background: #F96;\n    box-shadow: 4px 4px 0px 2px #1B1C1D;\n    width: 85%;\n    height: 100%;\n    flex-shrink: 0;\n}\n.btn-box[data-v-cfc11104] {\n    width: 100%;\n    display: flex;\n    padding: 30px 0px 0px 0px;\n    flex-direction: column;\n    gap: 25px ;\n    align-content: center;\n    align-items: center;\n}\n.btn-1[data-v-cfc11104] {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    gap: 18px;\n    justify-content: center;\n}\n.btn-2[data-v-cfc11104] {\n    display: flex;\n    width: 60%;\n    flex-direction: column;\n    gap: 12px;\n}\n.over-box[data-v-cfc11104] {\n    width: 100%;\n    display: flex;\n    flex-wrap: wrap;\n    gap: 20px 0px;\n}\n.Over-card[data-v-cfc11104] {\n    width: 50%;\n}\n.OverView[data-v-cfc11104] {\n    width: 100%;\n    padding-top: 40px;\n}\n.over-btn button[data-v-cfc11104] {\n    border-radius: 6px;\n    border: 1px solid #000;\n    background: #F96;\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\n    display: inline-flex;\n    padding: 6px 16.25px 6px 15px;\n    justify-content: center;\n    align-items: center;\n    gap: 4.75px;\n    color: #FFF;\n    text-align: center;\n    font-family: sans-serif;\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: 24px;\n}\n.over-btn[data-v-cfc11104] {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    padding: 30px 0px 0px 0px;\n}\n.box-2[data-v-cfc11104] {\n    height: 100% !important;\n    flex-shrink: 0;\n    border-radius: 20px;\n    background: #FFF;\n    box-shadow: 0px 10px 54px 0px rgba(0, 0, 0, 0.25);\n    width: 90%;\n}\n.id-box[data-v-cfc11104] {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 30px 0px 50px 0px;\n}\n.rol-1[data-v-cfc11104] {\n    border-radius: 20px;\n    background: #FFF;\n    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\n    flex-shrink: 0;\n    width: 100%;\n    padding: 20px;\n}\n.new-btn-lid[data-v-cfc11104] {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 20px;\n}\n.rol-3[data-v-cfc11104] {\n    width: 100%;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: space-between;\n    padding-top: 15px;\n    gap: 10px;\n}\n.rol-card[data-v-cfc11104] {\n    width: 48%;\n    border-radius: 10px;\n    background: #FFF;\n    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 12px 10px;\n    flex-wrap: wrap;\n}\n.rol-para h2[data-v-cfc11104] {\n    color: #000;\n    font-family: sans-serif;\n    font-size: 12px;\n    font-style: normal;\n    font-weight: 500;\n    line-height: normal;\n    margin: 0px;\n}\n.rol-para p[data-v-cfc11104] {\n    color: #000;\n    font-family: sans-serif;\n    font-size: 8px;\n    font-style: normal;\n    font-weight: 500;\n    line-height: normal;\n    margin: 0px;\n}\n.div-1 h2[data-v-cfc11104] {\n    color: #000;\n    font-family: sans-serif;\n    font-size: 12px;\n    font-style: normal;\n    font-weight: bold;\n    line-height: normal;\n    margin: 0px;\n    width: 80%;\n}\n.div-1 svg[data-v-cfc11104] {\n    width: 15px;\n    height: 15px;\n}\n.Enrolled p[data-v-cfc11104] {\n    font-size: 7px;\n}\n.Reviews p[data-v-cfc11104] {\n    font-size: 7px;\n}\n.Enrolled svg[data-v-cfc11104] {\n    width: 18px;\n    height: 18px;\n}\n.Reviews svg[data-v-cfc11104] {\n    width: 18px;\n    height: 18px;\n}\n.new-2[data-v-cfc11104] {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-wrap: wrap;\n    gap: 30px;\n}\n.short-card[data-v-cfc11104] {\n    width: 42%;\n    background: #FFF;\n    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\n    padding: 12px 20px;\n}\n.new-3[data-v-cfc11104] {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    flex-direction: column;\n    align-items: center;\n    gap: 28px;\n}\n.dashbord-card[data-v-cfc11104] {\n    background: #FFF;\n    box-shadow: 4px 0px 24px 0px rgba(0, 0, 0, 0.25);\n    height: 100%;\n    flex-shrink: 0;\n    width: 90%;\n    border-radius: 20px;\n}\n.conting-card[data-v-cfc11104] {\n    height: 350px;\n    flex-shrink: 0;\n    background: #FFF;\n    box-shadow: 4px 0px 24px 0px rgba(0, 0, 0, 0.25);\n    width: 76%;\n    padding: 12px 15px;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: space-between;\n    border-radius: 20px;\n}\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/dashborad3.vue?vue&type=style&index=0&id=fde58848&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/dashborad3.vue?vue&type=style&index=0&id=fde58848&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashborad3_vue_vue_type_style_index_0_id_fde58848_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./dashborad3.vue?vue&type=style&index=0&id=fde58848&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/dashborad3.vue?vue&type=style&index=0&id=fde58848&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashborad3_vue_vue_type_style_index_0_id_fde58848_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashborad3_vue_vue_type_style_index_0_id_fde58848_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/pro.vue?vue&type=style&index=0&id=cfc11104&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/pro.vue?vue&type=style&index=0&id=cfc11104&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_pro_vue_vue_type_style_index_0_id_cfc11104_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./pro.vue?vue&type=style&index=0&id=cfc11104&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/pro.vue?vue&type=style&index=0&id=cfc11104&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_pro_vue_vue_type_style_index_0_id_cfc11104_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_pro_vue_vue_type_style_index_0_id_cfc11104_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/views/admin/dashborad3.vue":
/*!*************************************************!*\
  !*** ./resources/js/views/admin/dashborad3.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dashborad3_vue_vue_type_template_id_fde58848_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashborad3.vue?vue&type=template&id=fde58848&scoped=true& */ "./resources/js/views/admin/dashborad3.vue?vue&type=template&id=fde58848&scoped=true&");
/* harmony import */ var _dashborad3_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashborad3.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/dashborad3.vue?vue&type=script&lang=js&");
/* harmony import */ var _dashborad3_vue_vue_type_style_index_0_id_fde58848_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashborad3.vue?vue&type=style&index=0&id=fde58848&scoped=true&lang=css& */ "./resources/js/views/admin/dashborad3.vue?vue&type=style&index=0&id=fde58848&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _dashborad3_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _dashborad3_vue_vue_type_template_id_fde58848_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _dashborad3_vue_vue_type_template_id_fde58848_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "fde58848",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/dashborad3.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/pro.vue":
/*!******************************************!*\
  !*** ./resources/js/views/admin/pro.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pro_vue_vue_type_template_id_cfc11104_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pro.vue?vue&type=template&id=cfc11104&scoped=true& */ "./resources/js/views/admin/pro.vue?vue&type=template&id=cfc11104&scoped=true&");
/* harmony import */ var _pro_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pro.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/pro.vue?vue&type=script&lang=js&");
/* harmony import */ var _pro_vue_vue_type_style_index_0_id_cfc11104_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pro.vue?vue&type=style&index=0&id=cfc11104&scoped=true&lang=css& */ "./resources/js/views/admin/pro.vue?vue&type=style&index=0&id=cfc11104&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _pro_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _pro_vue_vue_type_template_id_cfc11104_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _pro_vue_vue_type_template_id_cfc11104_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "cfc11104",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/pro.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/dashborad3.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/admin/dashborad3.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashborad3_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./dashborad3.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/dashborad3.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashborad3_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/admin/pro.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/views/admin/pro.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pro_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./pro.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/pro.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pro_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/admin/dashborad3.vue?vue&type=style&index=0&id=fde58848&scoped=true&lang=css&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/views/admin/dashborad3.vue?vue&type=style&index=0&id=fde58848&scoped=true&lang=css& ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashborad3_vue_vue_type_style_index_0_id_fde58848_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./dashborad3.vue?vue&type=style&index=0&id=fde58848&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/dashborad3.vue?vue&type=style&index=0&id=fde58848&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/views/admin/pro.vue?vue&type=style&index=0&id=cfc11104&scoped=true&lang=css&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/views/admin/pro.vue?vue&type=style&index=0&id=cfc11104&scoped=true&lang=css& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_pro_vue_vue_type_style_index_0_id_cfc11104_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./pro.vue?vue&type=style&index=0&id=cfc11104&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/pro.vue?vue&type=style&index=0&id=cfc11104&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/views/admin/dashborad3.vue?vue&type=template&id=fde58848&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/views/admin/dashborad3.vue?vue&type=template&id=fde58848&scoped=true& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dashborad3_vue_vue_type_template_id_fde58848_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dashborad3_vue_vue_type_template_id_fde58848_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dashborad3_vue_vue_type_template_id_fde58848_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./dashborad3.vue?vue&type=template&id=fde58848&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/dashborad3.vue?vue&type=template&id=fde58848&scoped=true&");


/***/ }),

/***/ "./resources/js/views/admin/pro.vue?vue&type=template&id=cfc11104&scoped=true&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/admin/pro.vue?vue&type=template&id=cfc11104&scoped=true& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pro_vue_vue_type_template_id_cfc11104_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pro_vue_vue_type_template_id_cfc11104_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pro_vue_vue_type_template_id_cfc11104_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./pro.vue?vue&type=template&id=cfc11104&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/pro.vue?vue&type=template&id=cfc11104&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/dashborad3.vue?vue&type=template&id=fde58848&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/dashborad3.vue?vue&type=template&id=fde58848&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
      _c(
        "div",
        { staticClass: "main" },
        [
          _c("div", { staticClass: "box-1" }, [
            _c("div", { staticClass: "new-1" }, [
              _c("div", { staticClass: "rol-1" }, [
                _c("p", [_vm._v("Total Income")]),
                _vm._v(" "),
                _c("h2", [_vm._v("$18,627.00")]),
                _vm._v(" "),
                _c("div", { staticClass: "new-btn-lid" }, [
                  _c("button", [
                    _c("p", [_vm._v("View Details")]),
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
                              "M2.51273 5.45272C3.05053 5.44321 3.5365 5.41563 4.01914 5.49884C4.07002 5.5074 4.12898 5.47935 4.18272 5.46318C4.44757 5.38329 4.71338 5.37236 4.98299 5.44131C5.21742 5.50122 5.4566 5.44986 5.69388 5.46746C6.06002 5.49456 6.42426 5.39566 6.78803 5.4142C7.08427 5.42942 7.38384 5.42466 7.67818 5.47079C7.82749 5.49409 7.96871 5.50217 8.12135 5.46366C8.2873 5.42229 8.45183 5.52167 8.62396 5.52167C8.81322 5.52167 8.99962 5.56922 9.18126 5.62343C9.38478 5.68382 9.43613 5.86831 9.28778 6.0181C9.06143 6.24682 8.76567 6.34715 8.45944 6.39185C8.20599 6.42894 7.94732 6.45033 7.69197 6.46365C7.42188 6.47744 7.14989 6.57064 6.87599 6.48029C6.82892 6.4646 6.77043 6.46127 6.72288 6.47411C6.40429 6.56161 6.07286 6.50264 5.75189 6.56541C5.65299 6.5849 5.54457 6.57825 5.44376 6.56256C5.30396 6.54068 5.16987 6.54449 5.03673 6.58823C4.8665 6.64434 4.69722 6.57302 4.52651 6.57634C4.3539 6.57967 4.18272 6.58585 4.01914 6.62722C3.76189 6.69284 3.50607 6.65623 3.25547 6.6296C3.02913 6.60583 2.81087 6.6258 2.58786 6.6315C2.37721 6.63721 2.15705 6.65528 1.94973 6.61867C1.71435 6.57682 1.61211 6.36189 1.52604 6.1655C1.44901 5.98957 1.55743 5.85975 1.67583 5.73327C1.85034 5.54639 2.05148 5.44653 2.31064 5.46413C2.39528 5.46983 2.48135 5.45414 2.51416 5.45224L2.51273 5.45272Z",
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
                  ]),
                  _vm._v(" "),
                  _c("button", [
                    _c("p", [_vm._v("Full Report")]),
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
                              "M2.51273 5.45272C3.05053 5.44321 3.5365 5.41563 4.01914 5.49884C4.07002 5.5074 4.12898 5.47935 4.18272 5.46318C4.44757 5.38329 4.71338 5.37236 4.98299 5.44131C5.21742 5.50122 5.4566 5.44986 5.69388 5.46746C6.06002 5.49456 6.42426 5.39566 6.78803 5.4142C7.08427 5.42942 7.38384 5.42466 7.67818 5.47079C7.82749 5.49409 7.96871 5.50217 8.12135 5.46366C8.2873 5.42229 8.45183 5.52167 8.62396 5.52167C8.81322 5.52167 8.99962 5.56922 9.18126 5.62343C9.38478 5.68382 9.43613 5.86831 9.28778 6.0181C9.06143 6.24682 8.76567 6.34715 8.45944 6.39185C8.20599 6.42894 7.94732 6.45033 7.69197 6.46365C7.42188 6.47744 7.14989 6.57064 6.87599 6.48029C6.82892 6.4646 6.77043 6.46127 6.72288 6.47411C6.40429 6.56161 6.07286 6.50264 5.75189 6.56541C5.65299 6.5849 5.54457 6.57825 5.44376 6.56256C5.30396 6.54068 5.16987 6.54449 5.03673 6.58823C4.8665 6.64434 4.69722 6.57302 4.52651 6.57634C4.3539 6.57967 4.18272 6.58585 4.01914 6.62722C3.76189 6.69284 3.50607 6.65623 3.25547 6.6296C3.02913 6.60583 2.81087 6.6258 2.58786 6.6315C2.37721 6.63721 2.15705 6.65528 1.94973 6.61867C1.71435 6.57682 1.61211 6.36189 1.52604 6.1655C1.44901 5.98957 1.55743 5.85975 1.67583 5.73327C1.85034 5.54639 2.05148 5.44653 2.31064 5.46413C2.39528 5.46983 2.48135 5.45414 2.51416 5.45224L2.51273 5.45272Z",
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
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "rol-3" }, [
                _c("p", [_vm._v("Previous Live")]),
                _vm._v(" "),
                _c("div", { staticClass: "rol-card" }, [
                  _c(
                    "svg",
                    {
                      attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "40",
                        height: "40",
                        viewBox: "0 0 40 40",
                        fill: "none"
                      }
                    },
                    [
                      _c(
                        "g",
                        { attrs: { "clip-path": "url(#clip0_131_632)" } },
                        [
                          _c("path", {
                            attrs: {
                              d:
                                "M40 20C40 8.95437 31.0456 0 20 0C8.95437 0 0 8.95437 0 20C0 29.9825 7.31375 38.2567 16.875 39.757V25.7812H11.7969V20H16.875V15.5937C16.875 10.5812 19.8609 7.8125 24.4294 7.8125C26.6175 7.8125 28.9062 8.20312 28.9062 8.20312V13.125H26.3844C23.8998 13.125 23.125 14.6667 23.125 16.2484V20H28.6719L27.7852 25.7812H23.125V39.757C32.6862 38.2567 40 29.9827 40 20Z",
                              fill: "#1877F2"
                            }
                          }),
                          _vm._v(" "),
                          _c("path", {
                            attrs: {
                              d:
                                "M27.7852 25.7812L28.6719 20H23.125V16.2484C23.125 14.6666 23.8998 13.125 26.3844 13.125H28.9062V8.20312C28.9062 8.20312 26.6175 7.8125 24.4292 7.8125C19.8609 7.8125 16.875 10.5813 16.875 15.5938V20H11.7969V25.7812H16.875V39.757C17.9088 39.919 18.9536 40.0003 20 40C21.0464 40.0003 22.0912 39.9191 23.125 39.757V25.7812H27.7852Z",
                              fill: "white"
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c("defs", [
                        _c("clipPath", { attrs: { id: "clip0_131_632" } }, [
                          _c("rect", {
                            attrs: { width: "40", height: "40", fill: "white" }
                          })
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _vm._m(0)
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "rol-card" }, [
                  _c(
                    "svg",
                    {
                      attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "40",
                        height: "40",
                        viewBox: "0 0 40 40",
                        fill: "none"
                      }
                    },
                    [
                      _c(
                        "g",
                        { attrs: { "clip-path": "url(#clip0_131_643)" } },
                        [
                          _c("path", {
                            attrs: {
                              d:
                                "M30.625 0H9.375C4.19733 0 0 4.19733 0 9.375V30.625C0 35.8027 4.19733 40 9.375 40H30.625C35.8027 40 40 35.8027 40 30.625V9.375C40 4.19733 35.8027 0 30.625 0Z",
                              fill: "url(#paint0_radial_131_643)"
                            }
                          }),
                          _vm._v(" "),
                          _c("path", {
                            attrs: {
                              d:
                                "M30.625 0H9.375C4.19733 0 0 4.19733 0 9.375V30.625C0 35.8027 4.19733 40 9.375 40H30.625C35.8027 40 40 35.8027 40 30.625V9.375C40 4.19733 35.8027 0 30.625 0Z",
                              fill: "url(#paint1_radial_131_643)"
                            }
                          }),
                          _vm._v(" "),
                          _c("path", {
                            attrs: {
                              d:
                                "M20.0014 4.375C15.758 4.375 15.2253 4.39359 13.5588 4.46938C11.8953 4.54563 10.7598 4.80891 9.76641 5.19531C8.73859 5.59438 7.86688 6.12828 6.99844 6.99703C6.12922 7.86562 5.59531 8.73734 5.195 9.76469C4.8075 10.7584 4.54391 11.8944 4.46906 13.557C4.39453 15.2238 4.375 15.7566 4.375 20.0002C4.375 24.2438 4.39375 24.7747 4.46938 26.4412C4.54594 28.1047 4.80922 29.2402 5.19531 30.2336C5.59469 31.2614 6.12859 32.1331 6.99734 33.0016C7.86563 33.8708 8.73734 34.4059 9.76438 34.805C10.7586 35.1914 11.8942 35.4547 13.5573 35.5309C15.2241 35.6067 15.7563 35.6253 19.9995 35.6253C24.2434 35.6253 24.7744 35.6067 26.4409 35.5309C28.1044 35.4547 29.2411 35.1914 30.2353 34.805C31.2627 34.4059 32.1331 33.8708 33.0012 33.0016C33.8705 32.1331 34.4042 31.2614 34.8047 30.2341C35.1887 29.2402 35.4525 28.1044 35.5306 26.4416C35.6055 24.775 35.625 24.2438 35.625 20.0002C35.625 15.7566 35.6055 15.2241 35.5306 13.5573C35.4525 11.8939 35.1887 10.7586 34.8047 9.76516C34.4042 8.73734 33.8705 7.86562 33.0012 6.99703C32.1322 6.12797 31.263 5.59406 30.2344 5.19547C29.2383 4.80891 28.1022 4.54547 26.4387 4.46938C24.772 4.39359 24.2414 4.375 19.9966 4.375H20.0014ZM18.5997 7.19078C19.0158 7.19016 19.48 7.19078 20.0014 7.19078C24.1734 7.19078 24.6678 7.20578 26.3153 7.28063C27.8387 7.35031 28.6656 7.60484 29.2164 7.81875C29.9456 8.10188 30.4655 8.44047 31.012 8.9875C31.5589 9.53438 31.8973 10.0552 32.1813 10.7844C32.3952 11.3344 32.65 12.1613 32.7194 13.6847C32.7942 15.3319 32.8105 15.8266 32.8105 19.9966C32.8105 24.1666 32.7942 24.6614 32.7194 26.3084C32.6497 27.8319 32.3952 28.6587 32.1813 29.2089C31.8981 29.9381 31.5589 30.4573 31.012 31.0039C30.4652 31.5508 29.9459 31.8892 29.2164 32.1725C28.6663 32.3873 27.8387 32.6413 26.3153 32.7109C24.6681 32.7858 24.1734 32.802 20.0014 32.802C15.8292 32.802 15.3347 32.7858 13.6877 32.7109C12.1642 32.6406 11.3373 32.3861 10.7861 32.1722C10.057 31.8889 9.53609 31.5505 8.98922 31.0036C8.44234 30.4567 8.10391 29.9372 7.82 29.2077C7.60609 28.6575 7.35125 27.8306 7.28188 26.3072C7.20703 24.66 7.19203 24.1653 7.19203 19.9927C7.19203 15.8202 7.20703 15.328 7.28188 13.6808C7.35156 12.1573 7.60609 11.3305 7.82 10.7797C8.10328 10.0505 8.44234 9.52969 8.98938 8.98281C9.53625 8.43594 10.057 8.09734 10.7862 7.81359C11.337 7.59875 12.1642 7.34484 13.6877 7.27484C15.1291 7.20969 15.6877 7.19016 18.5997 7.18687V7.19078ZM28.342 9.78516C27.3069 9.78516 26.467 10.6242 26.467 11.6595C26.467 12.6947 27.3069 13.5345 28.342 13.5345C29.3772 13.5345 30.217 12.6947 30.217 11.6595C30.217 10.6244 29.3772 9.78453 28.342 9.78453V9.78516ZM20.0014 11.9759C15.5702 11.9759 11.9773 15.5688 11.9773 20.0002C11.9773 24.4316 15.5702 28.0227 20.0014 28.0227C24.4328 28.0227 28.0244 24.4316 28.0244 20.0002C28.0244 15.5689 24.4325 11.9759 20.0011 11.9759H20.0014ZM20.0014 14.7917C22.8778 14.7917 25.2098 17.1234 25.2098 20.0002C25.2098 22.8766 22.8778 25.2086 20.0014 25.2086C17.1248 25.2086 14.7931 22.8766 14.7931 20.0002C14.7931 17.1234 17.1248 14.7917 20.0014 14.7917Z",
                              fill: "white"
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "defs",
                        [
                          _c(
                            "radialGradient",
                            {
                              attrs: {
                                id: "paint0_radial_131_643",
                                cx: "0",
                                cy: "0",
                                r: "1",
                                gradientUnits: "userSpaceOnUse",
                                gradientTransform:
                                  "translate(10.625 43.0808) rotate(-90) scale(39.643 36.8711)"
                              }
                            },
                            [
                              _c("stop", {
                                attrs: { "stop-color": "#FFDD55" }
                              }),
                              _vm._v(" "),
                              _c("stop", {
                                attrs: {
                                  offset: "0.1",
                                  "stop-color": "#FFDD55"
                                }
                              }),
                              _vm._v(" "),
                              _c("stop", {
                                attrs: {
                                  offset: "0.5",
                                  "stop-color": "#FF543E"
                                }
                              }),
                              _vm._v(" "),
                              _c("stop", {
                                attrs: { offset: "1", "stop-color": "#C837AB" }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "radialGradient",
                            {
                              attrs: {
                                id: "paint1_radial_131_643",
                                cx: "0",
                                cy: "0",
                                r: "1",
                                gradientUnits: "userSpaceOnUse",
                                gradientTransform:
                                  "translate(-6.70016 2.88141) rotate(78.681) scale(17.7206 73.045)"
                              }
                            },
                            [
                              _c("stop", {
                                attrs: { "stop-color": "#3771C8" }
                              }),
                              _vm._v(" "),
                              _c("stop", {
                                attrs: {
                                  offset: "0.128",
                                  "stop-color": "#3771C8"
                                }
                              }),
                              _vm._v(" "),
                              _c("stop", {
                                attrs: {
                                  offset: "1",
                                  "stop-color": "#6600FF",
                                  "stop-opacity": "0"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("clipPath", { attrs: { id: "clip0_131_643" } }, [
                            _c("rect", {
                              attrs: {
                                width: "40",
                                height: "40",
                                fill: "white"
                              }
                            })
                          ])
                        ],
                        1
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _vm._m(1)
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "rol-card" }, [
                  _c("div", { staticClass: "div-1" }, [
                    _c("h2", [_vm._v("Total Active Couses")]),
                    _vm._v(" "),
                    _c("p", [
                      _c(
                        "svg",
                        {
                          attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "22",
                            height: "22",
                            viewBox: "0 0 22 22",
                            fill: "none"
                          }
                        },
                        [
                          _c("path", {
                            attrs: {
                              d:
                                "M3.23167 9.9416C4.21763 9.92416 5.10858 9.8736 5.99342 10.0261C6.0867 10.0418 6.19479 9.99042 6.29332 9.96077C6.77887 9.81431 7.26619 9.79427 7.76048 9.92068C8.19027 10.0305 8.62876 9.93635 9.06378 9.96862C9.73503 10.0183 10.4028 9.83699 11.0697 9.87098C11.6128 9.89888 12.162 9.89015 12.7017 9.97472C12.9754 10.0174 13.2343 10.0323 13.5141 9.96165C13.8184 9.88581 14.12 10.068 14.4356 10.068C14.7826 10.068 15.1243 10.1552 15.4573 10.2546C15.8304 10.3653 15.9246 10.7035 15.6526 10.9781C15.2376 11.3974 14.6954 11.5814 14.134 11.6633C13.6693 11.7313 13.1951 11.7705 12.7269 11.795C12.2318 11.8202 11.7331 11.9911 11.231 11.8255C11.1447 11.7967 11.0375 11.7906 10.9503 11.8141C10.3662 11.9746 9.75857 11.8664 9.17013 11.9815C8.98881 12.0173 8.79004 12.0051 8.60522 11.9763C8.34892 11.9362 8.10309 11.9432 7.859 12.0234C7.54691 12.1262 7.23657 11.9955 6.9236 12.0016C6.60715 12.0077 6.29332 12.019 5.99342 12.0948C5.52179 12.2151 5.05279 12.148 4.59336 12.0992C4.1784 12.0556 3.77826 12.0922 3.36941 12.1027C2.98321 12.1132 2.57959 12.1463 2.1995 12.0792C1.76797 12.0024 1.58054 11.6084 1.42275 11.2484C1.28152 10.9258 1.48029 10.6878 1.69736 10.4559C2.01729 10.1133 2.38604 9.93025 2.86117 9.96251C3.01634 9.97296 3.17414 9.9442 3.23429 9.94072L3.23167 9.9416Z",
                              fill: "#1C1D1E"
                            }
                          }),
                          _vm._v(" "),
                          _c("path", {
                            attrs: {
                              d:
                                "M15.3727 17.9943C14.8253 17.9987 14.4051 17.5096 14.4966 16.9412C14.5568 16.5655 14.6945 16.2142 14.9386 15.9091C15.126 15.6746 15.3161 15.4383 15.4704 15.182C16.0082 14.285 16.5976 13.4271 17.3037 12.653C17.3656 12.585 17.4161 12.497 17.4467 12.4098C17.6289 11.8876 17.9941 11.4909 18.3507 11.0899C18.5678 10.8459 18.5869 10.6645 18.3394 10.4483C18.0116 10.1615 17.7553 9.83372 17.5731 9.43794C17.4441 9.15898 17.1721 8.99683 16.9733 8.77453C16.6969 8.46505 16.5191 8.0867 16.3247 7.73016C16.0553 7.23587 15.6656 6.84183 15.3492 6.39025C15.0301 5.9352 14.7625 5.45224 14.569 4.93005C14.5254 4.81235 14.4949 4.68682 14.4827 4.56216C14.4609 4.32679 14.6038 4.18033 14.7878 4.06613C14.9613 3.95804 15.1173 4.00336 15.2707 4.11756C15.5741 4.34335 15.8958 4.53601 16.1312 4.85333C16.4319 5.25783 16.8905 5.52546 17.1511 5.97181C17.8381 6.36322 18.1685 7.06761 18.6375 7.65257C18.913 7.99604 19.2494 8.29332 19.5728 8.59496C19.8335 8.83817 20.0462 9.10406 20.1404 9.45364C20.1953 9.65675 20.3174 9.82065 20.4307 9.99414C20.7009 10.4082 20.6835 10.8302 20.4186 11.2434C20.0271 11.8536 19.7028 12.5074 19.259 13.0845C18.7988 13.6834 18.4937 14.3913 17.9575 14.9388C17.6315 15.2718 17.4589 15.6998 17.2575 16.1122C16.9794 16.6814 16.6507 17.2219 16.1843 17.6613C15.9272 17.9028 15.6918 17.9926 15.3754 17.9952L15.3727 17.9943Z",
                              fill: "#1C1D1E"
                            }
                          })
                        ]
                      ),
                      _vm._v(" 15")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "div-2" }, [
                    _c("div", { staticClass: "Enrolled" }, [
                      _c(
                        "svg",
                        {
                          attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none"
                          }
                        },
                        [
                          _c("path", {
                            attrs: {
                              d:
                                "M16 17.0001V19.0001H2V17.0001C2 17.0001 2 13.0001 9 13.0001C16 13.0001 16 17.0001 16 17.0001ZM12.5 7.50005C12.5 6.80782 12.2947 6.13113 11.9101 5.55556C11.5256 4.97998 10.9789 4.53138 10.3394 4.26647C9.69985 4.00157 8.99612 3.93226 8.31718 4.0673C7.63825 4.20235 7.01461 4.5357 6.52513 5.02518C6.03564 5.51466 5.7023 6.1383 5.56725 6.81724C5.4322 7.49617 5.50152 8.1999 5.76642 8.83944C6.03133 9.47899 6.47993 10.0256 7.0555 10.4102C7.63108 10.7948 8.30777 11.0001 9 11.0001C9.92826 11.0001 10.8185 10.6313 11.4749 9.97493C12.1313 9.31855 12.5 8.42831 12.5 7.50005ZM15.94 13.0001C16.5547 13.4758 17.0578 14.0805 17.4137 14.7716C17.7696 15.4626 17.9697 16.2233 18 17.0001V19.0001H22V17.0001C22 17.0001 22 13.3701 15.94 13.0001ZM15 4.00005C14.3117 3.99622 13.6385 4.20201 13.07 4.59005C13.6774 5.43879 14.0041 6.45634 14.0041 7.50005C14.0041 8.54377 13.6774 9.56132 13.07 10.4101C13.6385 10.7981 14.3117 11.0039 15 11.0001C15.9283 11.0001 16.8185 10.6313 17.4749 9.97493C18.1313 9.31855 18.5 8.42831 18.5 7.50005C18.5 6.57179 18.1313 5.68156 17.4749 5.02518C16.8185 4.3688 15.9283 4.00005 15 4.00005Z",
                              fill: "#FF5757"
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c("p", [_vm._v("123 Enrolled Users")])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "Reviews" }, [
                      _c(
                        "svg",
                        {
                          attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none"
                          }
                        },
                        [
                          _c("path", {
                            attrs: {
                              d:
                                "M21.75 6V18C21.75 18.3978 21.592 18.7794 21.3107 19.0607C21.0294 19.342 20.6478 19.5 20.25 19.5H7.73437L4.72687 22.1353C4.72325 22.1392 4.71916 22.1427 4.71468 22.1456C4.44534 22.3744 4.10341 22.5 3.75 22.5C3.52994 22.4996 3.31265 22.451 3.11343 22.3575C2.85431 22.2381 2.63508 22.0465 2.48195 21.8058C2.32883 21.5651 2.2483 21.2853 2.25 21V6C2.25 5.60218 2.40803 5.22064 2.68934 4.93934C2.97064 4.65804 3.35217 4.5 3.75 4.5H20.25C20.6478 4.5 21.0294 4.65804 21.3107 4.93934C21.592 5.22064 21.75 5.60218 21.75 6Z",
                              fill: "#FF5757"
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c("p", [_vm._v("100 Reviews")])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "rol-card" }, [
                  _c("div", { staticClass: "div-1" }, [
                    _c("h2", [_vm._v("Total Active Couses")]),
                    _vm._v(" "),
                    _c("p", [
                      _c(
                        "svg",
                        {
                          attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "22",
                            height: "22",
                            viewBox: "0 0 22 22",
                            fill: "none"
                          }
                        },
                        [
                          _c("path", {
                            attrs: {
                              d:
                                "M3.23167 9.9416C4.21763 9.92416 5.10858 9.8736 5.99342 10.0261C6.0867 10.0418 6.19479 9.99042 6.29332 9.96077C6.77887 9.81431 7.26619 9.79427 7.76048 9.92068C8.19027 10.0305 8.62876 9.93635 9.06378 9.96862C9.73503 10.0183 10.4028 9.83699 11.0697 9.87098C11.6128 9.89888 12.162 9.89015 12.7017 9.97472C12.9754 10.0174 13.2343 10.0323 13.5141 9.96165C13.8184 9.88581 14.12 10.068 14.4356 10.068C14.7826 10.068 15.1243 10.1552 15.4573 10.2546C15.8304 10.3653 15.9246 10.7035 15.6526 10.9781C15.2376 11.3974 14.6954 11.5814 14.134 11.6633C13.6693 11.7313 13.1951 11.7705 12.7269 11.795C12.2318 11.8202 11.7331 11.9911 11.231 11.8255C11.1447 11.7967 11.0375 11.7906 10.9503 11.8141C10.3662 11.9746 9.75857 11.8664 9.17013 11.9815C8.98881 12.0173 8.79004 12.0051 8.60522 11.9763C8.34892 11.9362 8.10309 11.9432 7.859 12.0234C7.54691 12.1262 7.23657 11.9955 6.9236 12.0016C6.60715 12.0077 6.29332 12.019 5.99342 12.0948C5.52179 12.2151 5.05279 12.148 4.59336 12.0992C4.1784 12.0556 3.77826 12.0922 3.36941 12.1027C2.98321 12.1132 2.57959 12.1463 2.1995 12.0792C1.76797 12.0024 1.58054 11.6084 1.42275 11.2484C1.28152 10.9258 1.48029 10.6878 1.69736 10.4559C2.01729 10.1133 2.38604 9.93025 2.86117 9.96251C3.01634 9.97296 3.17414 9.9442 3.23429 9.94072L3.23167 9.9416Z",
                              fill: "#1C1D1E"
                            }
                          }),
                          _vm._v(" "),
                          _c("path", {
                            attrs: {
                              d:
                                "M15.3727 17.9943C14.8253 17.9987 14.4051 17.5096 14.4966 16.9412C14.5568 16.5655 14.6945 16.2142 14.9386 15.9091C15.126 15.6746 15.3161 15.4383 15.4704 15.182C16.0082 14.285 16.5976 13.4271 17.3037 12.653C17.3656 12.585 17.4161 12.497 17.4467 12.4098C17.6289 11.8876 17.9941 11.4909 18.3507 11.0899C18.5678 10.8459 18.5869 10.6645 18.3394 10.4483C18.0116 10.1615 17.7553 9.83372 17.5731 9.43794C17.4441 9.15898 17.1721 8.99683 16.9733 8.77453C16.6969 8.46505 16.5191 8.0867 16.3247 7.73016C16.0553 7.23587 15.6656 6.84183 15.3492 6.39025C15.0301 5.9352 14.7625 5.45224 14.569 4.93005C14.5254 4.81235 14.4949 4.68682 14.4827 4.56216C14.4609 4.32679 14.6038 4.18033 14.7878 4.06613C14.9613 3.95804 15.1173 4.00336 15.2707 4.11756C15.5741 4.34335 15.8958 4.53601 16.1312 4.85333C16.4319 5.25783 16.8905 5.52546 17.1511 5.97181C17.8381 6.36322 18.1685 7.06761 18.6375 7.65257C18.913 7.99604 19.2494 8.29332 19.5728 8.59496C19.8335 8.83817 20.0462 9.10406 20.1404 9.45364C20.1953 9.65675 20.3174 9.82065 20.4307 9.99414C20.7009 10.4082 20.6835 10.8302 20.4186 11.2434C20.0271 11.8536 19.7028 12.5074 19.259 13.0845C18.7988 13.6834 18.4937 14.3913 17.9575 14.9388C17.6315 15.2718 17.4589 15.6998 17.2575 16.1122C16.9794 16.6814 16.6507 17.2219 16.1843 17.6613C15.9272 17.9028 15.6918 17.9926 15.3754 17.9952L15.3727 17.9943Z",
                              fill: "#1C1D1E"
                            }
                          })
                        ]
                      ),
                      _vm._v(" 15")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "div-2" }, [
                    _c("div", { staticClass: "Enrolled" }, [
                      _c(
                        "svg",
                        {
                          attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none"
                          }
                        },
                        [
                          _c("path", {
                            attrs: {
                              d:
                                "M16 17.0001V19.0001H2V17.0001C2 17.0001 2 13.0001 9 13.0001C16 13.0001 16 17.0001 16 17.0001ZM12.5 7.50005C12.5 6.80782 12.2947 6.13113 11.9101 5.55556C11.5256 4.97998 10.9789 4.53138 10.3394 4.26647C9.69985 4.00157 8.99612 3.93226 8.31718 4.0673C7.63825 4.20235 7.01461 4.5357 6.52513 5.02518C6.03564 5.51466 5.7023 6.1383 5.56725 6.81724C5.4322 7.49617 5.50152 8.1999 5.76642 8.83944C6.03133 9.47899 6.47993 10.0256 7.0555 10.4102C7.63108 10.7948 8.30777 11.0001 9 11.0001C9.92826 11.0001 10.8185 10.6313 11.4749 9.97493C12.1313 9.31855 12.5 8.42831 12.5 7.50005ZM15.94 13.0001C16.5547 13.4758 17.0578 14.0805 17.4137 14.7716C17.7696 15.4626 17.9697 16.2233 18 17.0001V19.0001H22V17.0001C22 17.0001 22 13.3701 15.94 13.0001ZM15 4.00005C14.3117 3.99622 13.6385 4.20201 13.07 4.59005C13.6774 5.43879 14.0041 6.45634 14.0041 7.50005C14.0041 8.54377 13.6774 9.56132 13.07 10.4101C13.6385 10.7981 14.3117 11.0039 15 11.0001C15.9283 11.0001 16.8185 10.6313 17.4749 9.97493C18.1313 9.31855 18.5 8.42831 18.5 7.50005C18.5 6.57179 18.1313 5.68156 17.4749 5.02518C16.8185 4.3688 15.9283 4.00005 15 4.00005Z",
                              fill: "#FF5757"
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c("p", [_vm._v("123 Enrolled Users")])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "Reviews" }, [
                      _c(
                        "svg",
                        {
                          attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none"
                          }
                        },
                        [
                          _c("path", {
                            attrs: {
                              d:
                                "M21.75 6V18C21.75 18.3978 21.592 18.7794 21.3107 19.0607C21.0294 19.342 20.6478 19.5 20.25 19.5H7.73437L4.72687 22.1353C4.72325 22.1392 4.71916 22.1427 4.71468 22.1456C4.44534 22.3744 4.10341 22.5 3.75 22.5C3.52994 22.4996 3.31265 22.451 3.11343 22.3575C2.85431 22.2381 2.63508 22.0465 2.48195 21.8058C2.32883 21.5651 2.2483 21.2853 2.25 21V6C2.25 5.60218 2.40803 5.22064 2.68934 4.93934C2.97064 4.65804 3.35217 4.5 3.75 4.5H20.25C20.6478 4.5 21.0294 4.65804 21.3107 4.93934C21.592 5.22064 21.75 5.60218 21.75 6Z",
                              fill: "#FF5757"
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c("p", [_vm._v("100 Reviews")])
                    ])
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _vm._m(2),
            _vm._v(" "),
            _vm._m(3)
          ]),
          _vm._v(" "),
          _c("Profile")
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "rol-para" }, [
      _c("h2", [_vm._v("March,15 18:02")]),
      _vm._v(" "),
      _c("p", [_vm._v("“Unbox Free Gifts Giveaway................")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "rol-para" }, [
      _c("h2", [_vm._v("March,15 18:02")]),
      _vm._v(" "),
      _c("p", [_vm._v("“Unbox Free Gifts Giveaway................")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "new-2" }, [
      _c("div", { staticClass: "short-card" }, [
        _c("p", [_vm._v("Active Jobs")]),
        _vm._v(" "),
        _c("h2", [_vm._v("24.9k")]),
        _vm._v(" "),
        _c("h3", [_vm._v("+11.6% (2817)")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "short-card" }, [
        _c("p", [_vm._v("Completed")]),
        _vm._v(" "),
        _c("h2", [_vm._v("24.9k")]),
        _vm._v(" "),
        _c("h3", [_vm._v("+11.6% (2817)")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "short-card" }, [
        _c("p", [_vm._v("Paid")]),
        _vm._v(" "),
        _c("h2", [_vm._v("24.9k")]),
        _vm._v(" "),
        _c("h3", [_vm._v("+11.6% (2817)")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "short-card" }, [
        _c("p", [_vm._v("Un Paid")]),
        _vm._v(" "),
        _c("h2", [_vm._v("24.9k")]),
        _vm._v(" "),
        _c("h3", [_vm._v("+11.6% (2817)")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "new-3" }, [
      _c("div", { staticClass: "dashbord-card" }, [
        _c("div", { staticClass: "chart-bar" }, [
          _c("canvas", { attrs: { id: "myBarChart" } })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "conting-card" }, [
        _c("h2", [_vm._v("OverView")]),
        _vm._v(" "),
        _c("div", { staticClass: "divs" }, [
          _c("h2", [_vm._v("Total Unique Users")]),
          _vm._v(" "),
          _c("h3", [_vm._v("20.3k")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "divs" }, [
          _c("h2", [_vm._v("Total Unique Users")]),
          _vm._v(" "),
          _c("h3", [_vm._v("20.3k")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "divs" }, [
          _c("h2", [_vm._v("Total Unique Users")]),
          _vm._v(" "),
          _c("h3", [_vm._v("20.3k")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "divs" }, [
          _c("h2", [_vm._v("Total Unique Users")]),
          _vm._v(" "),
          _c("h3", [_vm._v("20.3k")])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/pro.vue?vue&type=template&id=cfc11104&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/pro.vue?vue&type=template&id=cfc11104&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "box-2" }, [
    _c("h2", [_vm._v("Influencer Profile")]),
    _vm._v(" "),
    _c("div", { staticClass: "id-box" }, [
      _c("img", { attrs: { src: "/uploads/" + _vm.model.image, alt: "" } }),
      _vm._v(" "),
      _c("h2", [_vm._v(_vm._s(_vm.model.user_name))]),
      _vm._v(" "),
      _c("h3", [_vm._v(_vm._s(_vm.model.email))])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "contact-box" }, [
      _c("div", { staticClass: "contact" }, [
        _c(
          "svg",
          {
            attrs: {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none"
            }
          },
          [
            _c("path", {
              attrs: {
                opacity: "0.3",
                d: "M20 8L12 13L4 8V18H20V8ZM20 6H4L12 10.99L20 6Z",
                fill: "#FF9966"
              }
            }),
            _vm._v(" "),
            _c("path", {
              attrs: {
                d:
                  "M4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20ZM20 6L12 10.99L4 6H20ZM4 8L12 13L20 8V18H4V8Z",
                fill: "#FF9966"
              }
            })
          ]
        ),
        _c("p", [_vm._v(_vm._s(_vm.model.email))])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "contact" }, [
        _c(
          "svg",
          {
            attrs: {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none"
            }
          },
          [
            _c("path", {
              attrs: {
                d:
                  "M6.62 10.79C8.06 13.62 10.38 15.93 13.21 17.38L15.41 15.18C15.68 14.91 16.08 14.82 16.43 14.94C17.55 15.31 18.76 15.51 20 15.51C20.55 15.51 21 15.96 21 16.51V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z",
                fill: "#FF9966"
              }
            })
          ]
        ),
        _c("p", [_vm._v(_vm._s(_vm.model.contact))])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "titel-box" }, [
      _c("div", { staticClass: "id-titel" }, [
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
                  "M18.9 0H1.1C0.808262 0 0.528473 0.115893 0.322183 0.322183C0.115893 0.528473 0 0.808262 0 1.1V18.9C0 19.1917 0.115893 19.4715 0.322183 19.6778C0.528473 19.8841 0.808262 20 1.1 20H10.68V12.25H8.08V9.25H10.68V7C10.6261 6.47176 10.6885 5.93813 10.8627 5.43654C11.0369 4.93495 11.3188 4.47755 11.6885 4.09641C12.0582 3.71528 12.5068 3.41964 13.0028 3.23024C13.4989 3.04083 14.0304 2.96225 14.56 3C15.3383 2.99521 16.1163 3.03528 16.89 3.12V5.82H15.3C14.04 5.82 13.8 6.42 13.8 7.29V9.22H16.8L16.41 12.22H13.8V20H18.9C19.0445 20 19.1875 19.9715 19.321 19.9163C19.4544 19.861 19.5757 19.78 19.6778 19.6778C19.78 19.5757 19.861 19.4544 19.9163 19.321C19.9715 19.1875 20 19.0445 20 18.9V1.1C20 0.955546 19.9715 0.812506 19.9163 0.679048C19.861 0.54559 19.78 0.424327 19.6778 0.322183C19.5757 0.220038 19.4544 0.139013 19.321 0.0837326C19.1875 0.0284524 19.0445 0 18.9 0Z",
                fill: "#FF5757"
              }
            })
          ]
        ),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            _vm._s(_vm.model.facebook ? _vm.model.facebook : "No Facebook Id")
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "id-titel" }, [
        _c(
          "svg",
          {
            attrs: {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none"
            }
          },
          [
            _c("path", {
              attrs: {
                d:
                  "M13.028 2C14.153 2.003 14.724 2.009 15.217 2.023L15.411 2.03C15.635 2.038 15.856 2.048 16.123 2.06C17.187 2.11 17.913 2.278 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.952 8.144 21.962 8.365 21.97 8.59L21.976 8.784C21.991 9.276 21.997 9.847 21.999 10.972L22 11.718V13.028C22.0025 13.7574 21.9948 14.4868 21.977 15.216L21.971 15.41C21.963 15.635 21.953 15.856 21.941 16.122C21.891 17.187 21.721 17.912 21.475 18.55C21.2247 19.2178 20.8312 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.123 21.94C15.8857 21.9512 15.6484 21.9612 15.411 21.97L15.217 21.976C14.724 21.99 14.153 21.997 13.028 21.999L12.282 22H10.973C10.2433 22.0025 9.51355 21.9949 8.78403 21.977L8.59003 21.971C8.35264 21.962 8.1153 21.9517 7.87803 21.94C6.81403 21.89 6.08803 21.722 5.45003 21.475C4.7827 21.2244 4.17824 20.8308 3.67903 20.322C3.17007 19.8223 2.77625 19.2176 2.52503 18.55C2.27803 17.913 2.11003 17.187 2.06003 16.122C2.04889 15.8847 2.03889 15.6474 2.03003 15.41L2.02503 15.216C2.0066 14.4868 1.99827 13.7574 2.00003 13.028V10.972C1.99724 10.2426 2.00457 9.5132 2.02203 8.784L2.02903 8.59C2.03703 8.365 2.04703 8.144 2.05903 7.878C2.10903 6.813 2.27703 6.088 2.52403 5.45C2.77514 4.7819 3.16975 4.17702 3.68003 3.678C4.17912 3.16947 4.78317 2.77599 5.45003 2.525C6.08803 2.278 6.81303 2.11 7.87803 2.06C8.14403 2.048 8.36603 2.038 8.59003 2.03L8.78403 2.024C9.51322 2.00623 10.2426 1.99857 10.972 2.001L13.028 2ZM12 7C10.6739 7 9.40218 7.52678 8.46449 8.46447C7.52681 9.40215 7.00003 10.6739 7.00003 12C7.00003 13.3261 7.52681 14.5979 8.46449 15.5355C9.40218 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5356 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5356 8.46447C14.5979 7.52678 13.3261 7 12 7ZM12 9C12.394 8.99993 12.7841 9.07747 13.1481 9.22817C13.5121 9.37887 13.8429 9.5998 14.1215 9.87833C14.4001 10.1569 14.6212 10.4875 14.772 10.8515C14.9228 11.2154 15.0005 11.6055 15.0005 11.9995C15.0006 12.3935 14.9231 12.7836 14.7724 13.1476C14.6217 13.5116 14.4007 13.8423 14.1222 14.121C13.8437 14.3996 13.513 14.6206 13.149 14.7714C12.7851 14.9223 12.395 14.9999 12.001 15C11.2054 15 10.4423 14.6839 9.87971 14.1213C9.3171 13.5587 9.00103 12.7956 9.00103 12C9.00103 11.2044 9.3171 10.4413 9.87971 9.87868C10.4423 9.31607 11.2054 9 12.001 9M17.251 5.5C16.9195 5.5 16.6016 5.6317 16.3671 5.86612C16.1327 6.10054 16.001 6.41848 16.001 6.75C16.001 7.08152 16.1327 7.39946 16.3671 7.63388C16.6016 7.8683 16.9195 8 17.251 8C17.5825 8 17.9005 7.8683 18.1349 7.63388C18.3693 7.39946 18.501 7.08152 18.501 6.75C18.501 6.41848 18.3693 6.10054 18.1349 5.86612C17.9005 5.6317 17.5825 5.5 17.251 5.5Z",
                fill: "#FF5757"
              }
            })
          ]
        ),
        _c("p", [
          _vm._v(
            _vm._s(
              _vm.model.instagram ? _vm.model.instagram : "No Instagram Id"
            )
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "id-titel" }, [
        _c(
          "svg",
          {
            attrs: {
              xmlns: "http://www.w3.org/2000/svg",
              width: "18",
              height: "18",
              viewBox: "0 0 18 18",
              fill: "none"
            }
          },
          [
            _c("path", {
              attrs: {
                d:
                  "M16 0C16.5304 0 17.0391 0.210714 17.4142 0.585786C17.7893 0.960859 18 1.46957 18 2V16C18 16.5304 17.7893 17.0391 17.4142 17.4142C17.0391 17.7893 16.5304 18 16 18H2C1.46957 18 0.960859 17.7893 0.585786 17.4142C0.210714 17.0391 0 16.5304 0 16V2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0H16ZM15.5 15.5V10.2C15.5 9.33539 15.1565 8.5062 14.5452 7.89483C13.9338 7.28346 13.1046 6.94 12.24 6.94C11.39 6.94 10.4 7.46 9.92 8.24V7.13H7.13V15.5H9.92V10.57C9.92 9.8 10.54 9.17 11.31 9.17C11.6813 9.17 12.0374 9.3175 12.2999 9.58005C12.5625 9.8426 12.71 10.1987 12.71 10.57V15.5H15.5ZM3.88 5.56C4.32556 5.56 4.75288 5.383 5.06794 5.06794C5.383 4.75288 5.56 4.32556 5.56 3.88C5.56 2.95 4.81 2.19 3.88 2.19C3.43178 2.19 3.00193 2.36805 2.68499 2.68499C2.36805 3.00193 2.19 3.43178 2.19 3.88C2.19 4.81 2.95 5.56 3.88 5.56ZM5.27 15.5V7.13H2.5V15.5H5.27Z",
                fill: "#FF5757"
              }
            })
          ]
        ),
        _c("p", [
          _vm._v(
            _vm._s(_vm.model.linkdin ? _vm.model.linkdin : "No Linkdin Id")
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "para-box" }, [
      _c("p", [_vm._v(_vm._s(_vm.model.bio))]),
      _vm._v(" "),
      _c("button", { on: { click: _vm.profile } }, [
        _c("p", [_vm._v("Profile")]),
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
                  "M2.51273 5.45272C3.05053 5.44321 3.5365 5.41563 4.01914 5.49884C4.07002 5.5074 4.12898 5.47935 4.18272 5.46318C4.44757 5.38329 4.71338 5.37236 4.98299 5.44131C5.21742 5.50122 5.4566 5.44986 5.69388 5.46746C6.06002 5.49456 6.42426 5.39566 6.78803 5.4142C7.08427 5.42942 7.38384 5.42466 7.67818 5.47079C7.82749 5.49409 7.96871 5.50217 8.12135 5.46366C8.2873 5.42229 8.45183 5.52167 8.62396 5.52167C8.81322 5.52167 8.99962 5.56922 9.18126 5.62343C9.38478 5.68382 9.43613 5.86831 9.28778 6.0181C9.06143 6.24682 8.76567 6.34715 8.45944 6.39185C8.20599 6.42894 7.94732 6.45033 7.69197 6.46365C7.42188 6.47744 7.14989 6.57064 6.87599 6.48029C6.82892 6.4646 6.77043 6.46127 6.72288 6.47411C6.40429 6.56161 6.07286 6.50264 5.75189 6.56541C5.65299 6.5849 5.54457 6.57825 5.44376 6.56256C5.30396 6.54068 5.16987 6.54449 5.03673 6.58823C4.8665 6.64434 4.69722 6.57302 4.52651 6.57634C4.3539 6.57967 4.18272 6.58585 4.01914 6.62722C3.76189 6.69284 3.50607 6.65623 3.25547 6.6296C3.02913 6.60583 2.81087 6.6258 2.58786 6.6315C2.37721 6.63721 2.15705 6.65528 1.94973 6.61867C1.71435 6.57682 1.61211 6.36189 1.52604 6.1655C1.44901 5.98957 1.55743 5.85975 1.67583 5.73327C1.85034 5.54639 2.05148 5.44653 2.31064 5.46413C2.39528 5.46983 2.48135 5.45414 2.51416 5.45224L2.51273 5.45272Z",
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
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);