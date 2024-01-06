(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_admin_dashborad4_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/dashborad4.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/dashborad4.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _chart_demo_chart_bar_demo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chart/demo/chart-bar-demo */ "./resources/js/chart/demo/chart-bar-demo.js");
/* harmony import */ var _admin_components_lib_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../admin/components/lib/api */ "./resources/js/views/admin/components/lib/api.js");
/* harmony import */ var _entreform_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./entreform.vue */ "./resources/js/views/admin/entreform.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Edit: _entreform_vue__WEBPACK_IMPORTED_MODULE_2__.default
  },
  data: function data() {
    var _ref;

    return _ref = {
      isModalOpen: true,
      method: 'POST',
      model: {},
      ancd: []
    }, _defineProperty(_ref, "model", ''), _defineProperty(_ref, "count", 0), _ref;
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_3__.mapGetters)(["user"])),
  created: function created() {
    var _this = this;

    this.id = this.$route.params.id;
    (0,_admin_components_lib_api__WEBPACK_IMPORTED_MODULE_1__.get)('/getprofile?id=' + this.id).then(function (res) {
      _this.setData(res);
    });
  },
  methods: {
    hiring: function hiring() {
      this.$router.push("/allmerchandises/".concat(this.id));
    },
    chat: function chat() {
      this.$router.push({
        name: 'chats',
        params: {
          id: JSON.stringify(this.model)
        }
      }); // this.$router.push(`/chats/${this.id}`)
    },
    openModal: function openModal() {
      $('#popup-box').modal('show');
    },
    closeModal: function closeModal() {
      var _this2 = this;

      console.log('avcd');
      this.shows = false;
      $('#popup-box').modal('hide');
      (0,_admin_components_lib_api__WEBPACK_IMPORTED_MODULE_1__.get)('/getprofile?id=' + this.id).then(function (res) {
        _this2.setData(res);
      });
    },
    editform: function editform() {
      this.$router.push('/entrefrom');
    },
    setData: function setData(res) {
      vue__WEBPACK_IMPORTED_MODULE_4__.default.set(this.$data, 'model', res.data.data);
      vue__WEBPACK_IMPORTED_MODULE_4__.default.set(this.$data, 'ancd', res.data.data["package"]);

      if (Array.isArray(this.ancd) && this.ancd.length > 0) {
        this.count = 1;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/entreform.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/entreform.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _chart_demo_chart_bar_demo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chart/demo/chart-bar-demo */ "./resources/js/chart/demo/chart-bar-demo.js");
/* harmony import */ var _admin_components_lib_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../admin/components/lib/api */ "./resources/js/views/admin/components/lib/api.js");
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



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'admin',
  data: function data() {
    var _ref;

    return _ref = {
      method: 'POST',
      model: {}
    }, _defineProperty(_ref, "model", ''), _defineProperty(_ref, "selectedImage", null), _defineProperty(_ref, "images", ''), _defineProperty(_ref, "file", {}), _defineProperty(_ref, "form", {}), _ref;
  },
  created: function created() {
    var _this = this;

    (0,_admin_components_lib_api__WEBPACK_IMPORTED_MODULE_1__.get)('/getuser').then(function (res) {
      _this.setData(res);
    });
  },
  methods: {
    openFileInput: function openFileInput() {
      // Trigger a click on the hidden file input element
      this.$refs.fileInput.click();
    },
    handleFileChange: function handleFileChange(event) {
      var _this2 = this;

      var file = event.target.files[0];

      if (file) {
        this.images = file; // Use FileReader to read the selected image

        var reader = new FileReader();

        reader.onload = function (e) {
          _this2.selectedImage = e.target.result;
        };

        reader.readAsDataURL(file);
      }
    },
    save: function save() {
      var _this3 = this;

      var formData = new FormData();
      formData.append('image', this.images);
      formData.append('bio', this.form.bio);
      formData.append('facebook', this.form.facebook);
      formData.append('instagram', this.form.instagram);
      formData.append('linkdin', this.form.linkdin);
      formData.append('username', this.form.user_name);
      (0,_admin_components_lib_api__WEBPACK_IMPORTED_MODULE_1__.byMethod)(this.method, '/api/edit_profile', formData).then(function (res) {
        if (res.data.saved) {
          _this3.$emit('cancel'); // this.$router.push('admin/dashborad4')


          console.log(res.data.saved); // this.$router.push('/brands');
        }
      })["catch"](function (error) {
        if (error.response.status === 422) {
          _this3.errors = error.response.data.errors;
        }

        _this3.isProcessing = false;
      });
    },
    setData: function setData(res) {
      vue__WEBPACK_IMPORTED_MODULE_2__.default.set(this.$data, 'form', res.data.data);
      console.log(res.data.data);
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/dashborad4.vue?vue&type=style&index=0&id=fdc95946&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/dashborad4.vue?vue&type=style&index=0&id=fdc95946&scoped=true&lang=css& ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\n*[data-v-fdc95946]{\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\n}\n.page-1[data-v-fdc95946] {\r\n    width: 100%;\r\n    background-color: #F5F3EA;\r\n    padding: 30px;\n}\n.contanir[data-v-fdc95946] {\r\n    width: 100%;\r\n    max-width: 1600px;\r\n    margin: 0 auto;\n}\n.main[data-v-fdc95946] {\r\n    width: 100%;\r\n    height: 871px;\r\n    flex-shrink: 0;\r\n    border-radius: 20px;\r\n    background: #FFF;\r\n    box-shadow: 0px 10px 54px 0px rgba(0, 0, 0, 0.25);\n}\n.roll-1[data-v-fdc95946] {\r\n    width: 100%;\r\n    height: 191px;\r\n    flex-shrink: 1;\r\n    background-image: url(/images/bgimg.png);\r\n    border-radius: 20px 20px  0px 0px;\n}\n.roll-2[data-v-fdc95946] {\r\n    width: 100%;\r\n    padding: 0px 60px;\n}\n.list-1[data-v-fdc95946] {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: flex-start;\r\n    justify-content: space-between;\r\n    padding: 25px 0px 15px 0px;\r\n    border-bottom: 2px solid #f96;\n}\n.list-1 img[data-v-fdc95946] {\r\n    width: 11%;\r\n    position: relative;\r\n    z-index: 1;\r\n    margin-top: -80px;\r\n    border-radius: 50%;\r\n    max-height: 155px;\r\n    min-height: 155px;\r\n\r\n    -o-object-fit: cover;\r\n    object-fit: cover;\n}\n.list-titel[data-v-fdc95946] {\r\n    width: 54%;\n}\n.list-titel span[data-v-fdc95946] {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 10px;\r\n    width: 100%;\n}\n.list-titel span h2[data-v-fdc95946] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 40px;\r\n    font-style: normal;\r\n    font-weight: 800;\r\n    line-height: normal;\r\n    margin: 0px;\n}\n.list-id[data-v-fdc95946] {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 20px;\r\n    padding: 5px 0px 8px 0px;\n}\n.list-id h2[data-v-fdc95946] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: normal;\r\n    font-size: 16px;\r\n    display: flex;\r\n    flex-direction: row-reverse;\r\n    align-items: center;\r\n    gap: 10px;\r\n    margin: 0px;\n}\n.list-titel p[data-v-fdc95946] {\r\n    color: #000;\r\n    font-family: 'Nunito';\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 24px; /* 150% */\r\n    margin: 0px;\r\n    padding-right: 50px;\n}\n.btn-ides[data-v-fdc95946] {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding-top: 45px;\n}\n.buttons[data-v-fdc95946] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    align-items: center;\r\n    gap: 20px;\r\n    padding-top: 10px;\n}\n.list-btn[data-v-fdc95946] {\r\n    width: 30%;\n}\n.btn-ides span[data-v-fdc95946] {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 10px;\r\n    justify-content: center;\n}\ns[data-v-fdc95946] {}\n.btn-ides h2[data-v-fdc95946] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 14px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: normal;\r\n    margin: 0px;\n}\n.buttons button[data-v-fdc95946] {\r\n    display: flex;\r\n    width: 154.75px;\r\n    height: 44px;\r\n    padding: 10px 18px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 7.647px;\r\n    flex-shrink: 0;\r\n    border-radius: 6px;\r\n    border: 1px solid #000;\r\n    background: #F5F3EA;\r\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\r\n    color: #000;\r\n    text-align: center;\r\n    font-family: sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 24px; /* 150% */\n}\nbutton.Hire[data-v-fdc95946] {\r\n    border-radius: 6px;\r\n    border: 1px solid #000;\r\n    background: #F96;\r\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\r\n    color: #fff;\n}\n.pox-1[data-v-fdc95946] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 20px;\r\n    border-bottom: 1px solid #000;\n}\n.pox-1 h2[data-v-fdc95946] {\r\n    color: #000;\r\n    text-align: center;\r\n    font-family: sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 800;\r\n    line-height: 24px; /* 150% */\r\n    margin: 0px;\r\n    padding: 0px;\n}\n.top-btn[data-v-fdc95946] {\r\n    width: 49%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-end;\r\n    gap: 10px;\n}\n.top-btn button[data-v-fdc95946] {\r\n    border: none;\r\n    background: transparent;\n}\n.pox-2[data-v-fdc95946] {\r\n    width: 100%;\r\n    padding: 20px;\n}\n.pox-2 p[data-v-fdc95946] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 18px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    letter-spacing: -0.96px;\r\n    margin: 0px;\n}\n.pox-2 h2[data-v-fdc95946] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    line-height: 24px; /* 150% */\r\n    padding: 15px 0px;\n}\n.pox-box[data-v-fdc95946] {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    gap: 10px 0px;\n}\n.yes[data-v-fdc95946] {\r\n    width: 50%;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 5px;\n}\n.pox-3[data-v-fdc95946] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: flex-end;\r\n    padding: 25px 0px 0px 0px;\n}\n.pox-3 h2[data-v-fdc95946] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 18px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    padding: 0px 0px 0px 0px;\r\n    margin: 0px;\n}\n.pox-3 p[data-v-fdc95946] {\r\n    color: #000;\r\n    text-align: center;\r\n    font-family: sans-serif;\r\n    font-size: 15px;\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    line-height: 24px; /* 150% */\r\n    width: 40%;\n}\n.carousel-control-prev[data-v-fdc95946], .carousel-control-next[data-v-fdc95946] {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    z-index: 1;\r\n    display: flex;\r\n    width: 5% !important;\r\n    color: #fff;\r\n    text-align: center !important;\r\n    opacity: 0.5;\r\n    transition: opacity 0.15s ease;\r\n    justify-content: center !important;\r\n    align-items: center !important;\n}\n.pox-3 h2 span[data-v-fdc95946] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 20px;\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    line-height: normal;\n}\nbutton.llo[data-v-fdc95946] {\r\n    color: #fff;\n}\n.cards[data-v-fdc95946] {\r\n    border-radius: 16px;\r\n    border: 2px solid #000;\r\n    background: #F96;\r\n    box-shadow: 4px 4px 0px 2px #1B1C1D;\r\n    width: 30%;\r\n    height: 350px;\r\n    flex-shrink: 0;\n}\n.more-card[data-v-fdc95946] {\r\n    width: 70%;\r\n    display: flex;\r\n    justify-content: space-between;\n}\n.more-card[data-v-fdc95946] {\r\n    width: 70%;\r\n    display: flex;\r\n    justify-content: space-between;\n}\n.salider-card[data-v-fdc95946] {\r\n    height: 445px;\r\n    flex-shrink: 0;\r\n    border-left: 2px solid #F96;\r\n    width: 28%;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    padding: 20px 10px;\n}\n.list-2[data-v-fdc95946] {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\n}\n.mine-card[data-v-fdc95946] {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\n}\n.Jobs-card[data-v-fdc95946] {\r\n    display: inline-flex;\r\n    height: 144px;\r\n    padding: 17px 15px 17px 16px;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: flex-start;\r\n    gap: 9px;\r\n    flex-shrink: 0;\r\n    border-radius: 20px;\r\n    background: #FFF;\r\n    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\n}\n.Jobs-card p[data-v-fdc95946] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: 24px; /* 150% */\r\n    margin: 0px;\n}\n.Jobs-card p span[data-v-fdc95946] {\r\n    color: green;\n}\n.Jobs-card h2[data-v-fdc95946] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 46px;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    margin: 0px;\n}\n.Jobs-cards[data-v-fdc95946] {\r\n    display: inline-flex;\r\n    height: 144px;\r\n    padding: 17px 46px 17px 16px;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: flex-start;\r\n    gap: 9px;\r\n    flex-shrink: 0;\r\n    border-radius: 20px;\r\n    background: #FFF;\r\n    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\n}\n.Jobs-cards p[data-v-fdc95946] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: 24px; /* 150% */\r\n    margin: 0px;\n}\n.run-card h2[data-v-fdc95946] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: 24px;\n}\n.Jobs-cards h2[data-v-fdc95946] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 46px;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    margin: 0px;\n}\n.slide-card[data-v-fdc95946] {\r\n    border-radius: 16px;\r\n    border: 2px solid #000;\r\n    background: #FFF;\r\n    box-shadow: 4px 4px 0px 2px #1B1C1D;\r\n    width: 100%;\r\n    height: 184px;\r\n    flex-shrink: 0;\r\n    padding: 20px;\n}\n.run-card[data-v-fdc95946] {\r\n    width: 350px;\n}\n.imger[data-v-fdc95946] {}\n.imger[data-v-fdc95946] {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\n}\n.imger img[data-v-fdc95946] {\r\n    width: 15%;\n}\n.imger h2[data-v-fdc95946] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    margin: 0px;\n}\n.slide-card p[data-v-fdc95946] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 18px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    letter-spacing: -0.96px;\r\n    margin: 0px;\r\n    padding: 30px 30px 30px 0px;\n}\n@media screen and (max-width: 1600px){\n.cards[data-v-fdc95946] {\r\n    border-radius: 16px;\r\n    border: 2px solid #000;\r\n    background: #F96;\r\n    box-shadow: 4px 4px 0px 2px #1B1C1D;\r\n    width: 30%;\r\n    height: 315px;\r\n    flex-shrink: 0;\n}\n.contanir[data-v-fdc95946] {\r\n    width: 100%;\r\n    max-width: 1440px;\r\n    margin: 0 auto;\n}\n.roll-1[data-v-fdc95946] {\r\n    width: 100%;\r\n    height: 135px;\r\n    flex-shrink: 1;\r\n    background-image: url(/images/bgimg.png);\r\n    border-radius: 20px 20px 0px 0px;\n}\n.list-titel p[data-v-fdc95946] {\r\n    color: #000;\r\n    font-family: 'Nunito';\r\n    font-size: 15px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 24px;\r\n    margin: 0px;\r\n    padding-right: 0px;\n}\n.list-id h2[data-v-fdc95946] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: normal;\r\n    font-size: 15px;\r\n    display: flex;\r\n    flex-direction: row-reverse;\r\n    align-items: center;\r\n    gap: 5px;\r\n    margin: 0px;\n}\n.btn-ides span[data-v-fdc95946] {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 5px;\r\n    justify-content: center;\n}\n.list-titel span h2[data-v-fdc95946] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 35px;\r\n    font-style: normal;\r\n    font-weight: 800;\r\n    line-height: normal;\r\n    margin: 0px;\n}\n.list-titel span svg[data-v-fdc95946] {\r\n    width: 35px;\r\n    height: 35px;\n}\n.pox-1[data-v-fdc95946] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 15px;\r\n    border-bottom: 1px solid #000;\n}\n.pox-2 h2[data-v-fdc95946] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    line-height: 24px;\r\n    padding: 10px 0px;\r\n    font-size: 22px;\n}\n.pox-3 h2 span[data-v-fdc95946] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 18px;\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    line-height: normal;\n}\n.pox-3 h2[data-v-fdc95946] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 18px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    padding: 0px 0px 0px 0px;\r\n    margin: 0px;\n}\n.pox-3[data-v-fdc95946] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: flex-end;\r\n    padding: 10px 0px 0px 0px;\n}\n.mine-card[data-v-fdc95946] {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    gap: 18px;\n}\n.Jobs-card[data-v-fdc95946] {\r\n    display: inline-flex;\r\n    height: 130px;\r\n    padding: 15px 12px 15px 12px;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: flex-start;\r\n    gap: 5px;\r\n    flex-shrink: 0;\r\n    border-radius: 20px;\r\n    background: #FFF;\r\n    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\n}\n.Jobs-cards[data-v-fdc95946] {\r\n    display: inline-flex;\r\n    height: 130px;\r\n    padding: 15px 35px 15px 15px;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: flex-start;\r\n    gap: 9px;\r\n    flex-shrink: 0;\r\n    border-radius: 20px;\r\n    background: #FFF;\r\n    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\n}\n.main[data-v-fdc95946] {\r\n    width: 100%;\r\n    height: 100%;\r\n    flex-shrink: 0;\r\n    border-radius: 20px;\r\n    background: #FFF;\r\n    box-shadow: 0px 10px 54px 0px rgba(0, 0, 0, 0.25);\n}\n}\n@media screen and (max-width: 1440px){\n.pox-1 h2[data-v-fdc95946] {\r\n    color: #000;\r\n    text-align: center;\r\n    font-family: sans-serif;\r\n    font-size: 14px;\r\n    font-style: normal;\r\n    font-weight: 800;\r\n    line-height: 24px;\r\n    margin: 0px;\r\n    padding: 0px;\n}\n.cards[data-v-fdc95946] {\r\n    border-radius: 16px;\r\n    border: 2px solid #000;\r\n    background: #F96;\r\n    box-shadow: 4px 4px 0px 2px #1B1C1D;\r\n    width: 30%;\r\n    height: 280px;\r\n    flex-shrink: 0;\n}\n.btn-ides h2[data-v-fdc95946] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 12px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: normal;\r\n    margin: 0px;\n}\n.contanir[data-v-fdc95946] {\r\n    width: 100%;\r\n    max-width: 1170px;\r\n    margin: 0 auto;\n}\n.roll-2[data-v-fdc95946] {\r\n    width: 100%;\r\n    padding: 0px 25px;\n}\n.list-titel span h2[data-v-fdc95946] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 30px;\r\n    font-style: normal;\r\n    font-weight: 800;\r\n    line-height: normal;\r\n    margin: 0px;\n}\n.list-titel[data-v-fdc95946] {\r\n    width: 55%;\n}\n.list-id span svg[data-v-fdc95946] {\r\n    width: 20px;\r\n    height: 20px;\n}\n.list-btn[data-v-fdc95946] {\r\n    width: 34%;\n}\n.list-titel p[data-v-fdc95946] {\r\n    color: #000;\r\n    font-family: 'Nunito';\r\n    font-size: 14px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 18px;\r\n    margin: 0px;\r\n    padding-right: 11px;\n}\n.btn-ides[data-v-fdc95946] {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    padding-top: 45px;\r\n    justify-content: flex-end;\r\n    gap: 4px;\n}\n.btn-ides span svg[data-v-fdc95946] {\r\n    width: 20px;\r\n    height: 20px;\n}\n.list-1 img[data-v-fdc95946] {\r\n    width: 10%;\r\n    position: relative;\r\n    z-index: 1;\r\n    margin-top: -80px;\r\n\r\n  \r\n    margin-top: -80px;\r\n    border-radius: 50%;\r\n    max-height: 115px;\r\n    min-height: 115px;\r\n\r\n    -o-object-fit: cover;\r\n\r\n       object-fit: cover;\n}\n.list-titel p[data-v-fdc95946] {\r\n    color: #000;\r\n    font-family: 'Nunito';\r\n    font-size: 13px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 24px;\r\n    margin: 0px;\r\n    padding-right: 20px;\n}\n.list-id h2[data-v-fdc95946] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: normal;\r\n    font-size: 15px;\r\n    display: flex;\r\n    flex-direction: row-reverse;\r\n    align-items: center;\r\n    gap: 5px;\r\n    margin: 0px;\r\n    font-size: 13px;\n}\n.buttons[data-v-fdc95946] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    align-items: center;\r\n    gap: 15px;\r\n    padding-top: 0px;\n}\n.buttons button[data-v-fdc95946] {\r\n    display: flex;\r\n    width: 130px;\r\n    height: 35px;\r\n    padding: 10px 18px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 4.647px;\r\n    flex-shrink: 0;\r\n    border-radius: 6px;\r\n    border: 1px solid #000;\r\n    background: #F5F3EA;\r\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\r\n    color: #000;\r\n    text-align: center;\r\n    font-family: sans-serif;\r\n    font-size: 14px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 24px;\n}\n.pox-1[data-v-fdc95946] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 8px;\r\n    border-bottom: 1px solid #000;\n}\n.top-btn button svg[data-v-fdc95946] {\r\n    width: 15px;\r\n    height: 15px;\n}\n.top-btn[data-v-fdc95946] {\r\n    width: 49%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-end;\r\n    gap: 5px;\n}\n.pox-2 p[data-v-fdc95946] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    letter-spacing: -0.96px;\r\n    margin: 0px;\n}\n.pox-2[data-v-fdc95946] {\r\n    width: 100%;\r\n    padding: 15px;\n}\n.pox-2 h2[data-v-fdc95946] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    line-height: 10px;\r\n    padding: 15px 0px;\r\n    font-size: 18px;\r\n    margin: 0px;\n}\n.pox-3 h2[data-v-fdc95946] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 15px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    padding: 0px 0px 0px 0px;\r\n    margin: 0px;\n}\n.pox-3 h2 span[data-v-fdc95946] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 15px;\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    line-height: normal;\n}\n.pox-2 p[data-v-fdc95946] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 13px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    letter-spacing: -0.96px;\r\n    margin: 0px;\n}\n.yes svg[data-v-fdc95946] {\r\n    width: 20px;\r\n    height: 20px;\n}\n.Jobs-card[data-v-fdc95946] {\r\n    display: inline-flex;\r\n    height: 115px;\r\n    padding: 8px 12px 8px 12px;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: flex-start;\r\n    gap: 0px;\r\n    flex-shrink: 0;\r\n    border-radius: 15px;\r\n    background: #FFF;\r\n    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\n}\n.Jobs-card p[data-v-fdc95946] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 12px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: 24px;\r\n    margin: 0px;\n}\n.Jobs-card h2[data-v-fdc95946] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 30px;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    margin: 0px;\n}\n.Jobs-cards[data-v-fdc95946] {\r\n    display: inline-flex;\r\n    height: 115px;\r\n    padding: 8px 30px 8px 12px;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: flex-start;\r\n    gap: 0px;\r\n    flex-shrink: 0;\r\n    border-radius: 15px;\r\n    background: #FFF;\r\n    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\n}\n.Jobs-cards p[data-v-fdc95946] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 12px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: 24px;\r\n    margin: 0px;\n}\n.Jobs-cards h2[data-v-fdc95946] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 30px;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    margin: 0px;\n}\n.slide-card[data-v-fdc95946] {\r\n    border-radius: 16px;\r\n    border: 2px solid #000;\r\n    background: #FFF;\r\n    box-shadow: 4px 4px 0px 2px #1B1C1D;\r\n    width: 100%;\r\n    height: 184px;\r\n    flex-shrink: 0;\r\n    padding: 10px;\n}\n.imger h2[data-v-fdc95946] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 13px;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    margin: 0px;\n}\n.imger img[data-v-fdc95946] {\r\n    width: 14%;\n}\n.slide-card p[data-v-fdc95946] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    letter-spacing: -0.96px;\r\n    margin: 0px;\r\n    padding: 20px 30px 20px 0px;\n}\n.slide-card[data-v-fdc95946] {\r\n    border-radius: 16px;\r\n    border: 2px solid #000;\r\n    background: #FFF;\r\n    box-shadow: 4px 4px 0px 2px #1B1C1D;\r\n    width: 100%;\r\n    height: 145px;\r\n    flex-shrink: 0;\r\n    padding: 10px;\n}\n.salider-card[data-v-fdc95946] {\r\n    height: 100%;\r\n    flex-shrink: 0;\r\n    border-left: 2px solid #F96;\r\n    width: 28%;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    padding: 20px 10px;\n}\n}\n@media screen and (max-width: 1024px){\n.buttons[data-v-fdc95946] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 15px;\r\n    padding-top: 0px;\n}\n.btn-ides[data-v-fdc95946] {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    padding-top: 20px;\r\n    justify-content: flex-end;\r\n    gap: 4px;\n}\n.list-btn[data-v-fdc95946] {\r\n    width: 38%;\r\n    padding-top: 20px;\n}\n.btn-ides h2[data-v-fdc95946] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 10px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: normal;\r\n    margin: 0px;\r\n    white-space: nowrap; /* Prevent text from wrapping */\r\n    overflow: hidden; /* Hide overflowed text */\r\n    text-overflow: ellipsis;\n}\n.list-1[data-v-fdc95946] {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: flex-start;\r\n    justify-content: space-between;\r\n    padding: 25px 0px 15px 0px;\r\n    border-bottom: 2px solid #f96;\n}\n.list-titel span h2[data-v-fdc95946] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 28px;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    margin: 0px;\n}\n.list-titel[data-v-fdc95946] {\r\n    width: 62%;\n}\n.list-titel p[data-v-fdc95946] {\r\n    color: #000;\r\n    font-family: 'Nunito';\r\n    font-size: 13px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 18px;\r\n    margin: 0px;\r\n    padding-right: 0px;\n}\n.pox-1[data-v-fdc95946] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 5px;\r\n    border-bottom: 1px solid #000;\n}\n.pox-1 h2[data-v-fdc95946] {\r\n    color: #000;\r\n    text-align: center;\r\n    font-family: sans-serif;\r\n    font-size: 12px;\r\n    font-style: normal;\r\n    font-weight: 800;\r\n    line-height: 24px;\r\n    margin: 0px;\r\n    padding: 0px;\n}\n.top-btn button span[data-v-fdc95946] {\r\n    font-size: 12px;\n}\n.pox-2 p[data-v-fdc95946] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 13px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    letter-spacing: -0.96px;\r\n    margin: 0px;\n}\n.pox-2 h2[data-v-fdc95946] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    line-height: 10px;\r\n    padding: 10px 0px;\r\n    font-size: 15px;\r\n    margin: 0px;\n}\n.yes[data-v-fdc95946] {\r\n    width: 50%;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 2px;\n}\n.pox-3 h2 span[data-v-fdc95946] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 14px;\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    line-height: normal;\n}\n.pox-2[data-v-fdc95946] {\r\n    width: 100%;\r\n    padding: 10px;\n}\n.pox-3 h2[data-v-fdc95946] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 13px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    padding: 0px 0px 0px 0px;\r\n    margin: 0px;\n}\n.pox-2 p[data-v-fdc95946] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 12px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    letter-spacing: -0.96px;\r\n    margin: 0px;\n}\n.page-1[data-v-fdc95946] {\r\n    width: 100%;\r\n    background-color: #F5F3EA;\r\n    padding: 0px 15px;\n}\n.roll-2[data-v-fdc95946] {\r\n    width: 100%;\r\n    padding: 0px 20px;\n}\n.Jobs-card[data-v-fdc95946] {\r\n    display: inline-flex;\r\n    height: 88px;\r\n    padding: 6px 8px 6px 8px;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: flex-start;\r\n    gap: 0px;\r\n    flex-shrink: 0;\r\n    border-radius: 15px;\r\n    background: #FFF;\r\n    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\n}\n.Jobs-card p[data-v-fdc95946] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 12px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: 24px;\r\n    margin: 0px;\n}\n.Jobs-card h2[data-v-fdc95946] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 24px;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    margin: 0px;\n}\n.Jobs-cards[data-v-fdc95946] {\r\n    display: inline-flex;\r\n    height: 88px;\r\n    padding: 6px 8px 6px 8px;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: flex-start;\r\n    gap: 0px;\r\n    flex-shrink: 0;\r\n    border-radius: 15px;\r\n    background: #FFF;\r\n    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\n}\n.Jobs-cards p[data-v-fdc95946] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 12px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: 24px;\r\n    margin: 0px;\n}\n.Jobs-cards h2[data-v-fdc95946] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 24px;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    margin: 0px;\n}\n.icon-box svg[data-v-fdc95946] {\r\n    width: 15px;\r\n    height: 15px;\n}\n}\n@media screen and (max-width: 768px){\n.list-titel p[data-v-fdc95946] {\r\n    color: #000;\r\n    font-family: 'Nunito';\r\n    font-size: 13px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 18px;\r\n    margin: 0px;\r\n    padding-right: 80px;\n}\n.salider-card[data-v-fdc95946]{\r\n    height: 100%;\r\n    flex-shrink: 0;\r\n    border: 2px solid #F96;\r\n    width: 68%;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    padding: 20px 10px;\r\n    align-content: center;\r\n    border-radius: 15px;\n}\n.more-card[data-v-fdc95946]{\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\n}\n.list-2[data-v-fdc95946][data-v-fdc95946] {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    flex-wrap: wrap;\r\n    gap: 30px;\r\n    padding: 20px 0px;\n}\n.mine-card[data-v-fdc95946][data-v-fdc95946] {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 18px;\n}\n.Jobs-cards[data-v-fdc95946][data-v-fdc95946] {\r\n    display: inline-flex;\r\n    height: 88px;\r\n    padding: 6px 30px 6px 8px;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: flex-start;\r\n    gap: 0px;\r\n    flex-shrink: 0;\r\n    border-radius: 15px;\r\n    background: #FFF;\r\n    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\n}\n.run-card h2[data-v-fdc95946][data-v-fdc95946] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: 24px;\r\n    padding: 20px 0px 10px 0px;\n}\n}\n@media screen and (max-width: 425px){\n.more-card[data-v-fdc95946][data-v-fdc95946] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n    gap: 20px;\n}\n.list-titel[data-v-fdc95946][data-v-fdc95946] {\r\n    width: 100%;\r\n    padding-top: 18px;\n}\n.list-btn[data-v-fdc95946][data-v-fdc95946] {\r\n    width: 100%;\r\n    padding-top: 20px;\n}\n.list-1 img[data-v-fdc95946][data-v-fdc95946] {\r\n    width: 30%;\r\n    position: relative;\r\n    z-index: 1;\r\n    margin-top: -85px;\r\n   \r\n    position: relative;\r\n    z-index: 1;\r\n    margin-top: -80px;\r\n    border-radius: 50%;\r\n    max-height: 115px;\r\n    min-height: 115px;\r\n\r\n    -o-object-fit: cover;\r\n\r\n       object-fit: cover;\n}\n.list-1[data-v-fdc95946][data-v-fdc95946] {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding: 25px 0px 15px 0px;\r\n    border-bottom: 2px solid #f96;\r\n    flex-direction: column;\n}\n.list-id[data-v-fdc95946][data-v-fdc95946] {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 15px;\r\n    padding: 0px 0px 5px 0px;\n}\n.cards[data-v-fdc95946][data-v-fdc95946] {\r\n    border-radius: 16px;\r\n    border: 2px solid #000;\r\n    background: #F96;\r\n    box-shadow: 4px 4px 0px 2px #1B1C1D;\r\n    width: 65%;\r\n    height: 100%;\r\n    flex-shrink: 0;\n}\n.salider-card[data-v-fdc95946][data-v-fdc95946] {\r\n    height: 100%;\r\n    flex-shrink: 0;\r\n    border: 2px solid #F96;\r\n    width: 98%;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    padding: 20px 10px;\r\n    align-content: center;\r\n    border-radius: 15px;\n}\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/entreform.vue?vue&type=style&index=0&id=2c2d89b3&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/entreform.vue?vue&type=style&index=0&id=2c2d89b3&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n*[data-v-2c2d89b3]{\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\n}\n.main-div[data-v-2c2d89b3] {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\n}\n.main-box[data-v-2c2d89b3] {\r\n    width: 67.20%;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n    align-content: center;\r\n    align-items: center;\r\n    background-color: #FF9966;\r\n    border-radius: 50px;\r\n    gap: 85px;\r\n    padding: 40px 0px;\n}\n.logo-from[data-v-2c2d89b3] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\n}\n.main-form[data-v-2c2d89b3] {\r\n    width: 75%;\r\n    border-radius: 40px;\r\n    background: #FFF;\r\n    box-shadow: 0px 4px 35px 0px rgba(0, 0, 0, 0.08);\n}\n.form-col-1[data-v-2c2d89b3] {\r\n    display: flex;\r\n    width: 100%;\r\n    height: 152px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-shrink: 0;\r\n    background-image:url(/images/bgimg.png);\r\n    /* background: linear-gradient(90deg, rgba(255, 153, 102, 0.29) 0%, rgba(255, 153, 102, 0.72) 50.04%, rgba(255, 153, 102, 0.29) 100%), lightgray 0px -359.563px / 141.93% 598.766% no-repeat; */\r\n    border-radius: 40px 40px 0px 0px;\r\n    opacity: 0.7;\n}\n.form-col-2[data-v-2c2d89b3] {\r\n    width: 100%;\r\n    padding: 33px 95px;\n}\n.input-box[data-v-2c2d89b3] {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    gap: 16px;\n}\n.input-group[data-v-2c2d89b3] {\r\n    width: 48%;\r\n    display: flex;\r\n    flex-direction: column;\n}\n.input-group-1[data-v-2c2d89b3] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    width: 100%;\n}\n.input-group-3[data-v-2c2d89b3] {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: space-between;\n}\n.input-group label[data-v-2c2d89b3] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    padding-bottom: 15px;\n}\n.input-3[data-v-2c2d89b3] {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: space-between;\n}\n.input-3 label[data-v-2c2d89b3] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    width: 100%;\r\n    padding-bottom: 10px;\n}\n.input-3 input[data-v-2c2d89b3] {\r\n    width: 28%;\r\n    border-radius: 9px;\r\n    border: 1px solid #ADADAD;\r\n    padding: 10px 10px 10px 40px;\n}\n.icon-input1[data-v-2c2d89b3] {\r\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'%3E%3Cpath d='M20.9 2H3.1C2.80826 2 2.52847 2.11589 2.32218 2.32218C2.11589 2.52847 2 2.80826 2 3.1V20.9C2 21.1917 2.11589 21.4715 2.32218 21.6778C2.52847 21.8841 2.80826 22 3.1 22H12.68V14.25H10.08V11.25H12.68V9C12.6261 8.47176 12.6885 7.93813 12.8627 7.43654C13.0369 6.93495 13.3188 6.47755 13.6885 6.09641C14.0582 5.71528 14.5068 5.41964 15.0028 5.23024C15.4989 5.04083 16.0304 4.96225 16.56 5C17.3383 4.99521 18.1163 5.03528 18.89 5.12V7.82H17.3C16.04 7.82 15.8 8.42 15.8 9.29V11.22H18.8L18.41 14.22H15.8V22H20.9C21.0445 22 21.1875 21.9715 21.321 21.9163C21.4544 21.861 21.5757 21.78 21.6778 21.6778C21.78 21.5757 21.861 21.4544 21.9163 21.321C21.9715 21.1875 22 21.0445 22 20.9V3.1C22 2.95555 21.9715 2.81251 21.9163 2.67905C21.861 2.54559 21.78 2.42433 21.6778 2.32218C21.5757 2.22004 21.4544 2.13901 21.321 2.08373C21.1875 2.02845 21.0445 2 20.9 2Z' fill='%23FF5757'/%3E%3C/svg%3E\");\r\n    background-repeat: no-repeat;\r\n    background-position: 10px center;\r\n    padding-left: 40px; /* Adjust this value based on the width of your SVG icon */\n}\n.icon-input2[data-v-2c2d89b3] {\r\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'%3E%3Cpath d='M13.028 2C14.153 2.003 14.724 2.009 15.217 2.023L15.411 2.03C15.635 2.038 15.856 2.048 16.123 2.06C17.187 2.11 17.913 2.278 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.2239 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.952 8.144 21.962 8.365 21.97 8.59L21.976 8.784C21.991 9.276 21.997 9.847 21.999 10.972L22 11.718V13.028C22.0024 13.7574 21.9948 14.4868 21.977 15.216L21.971 15.41C21.963 15.635 21.953 15.856 21.941 16.122C21.891 17.187 21.721 17.912 21.475 18.55C21.2246 19.2178 20.8311 19.8226 20.322 20.322C19.8219 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.123 21.94C15.8857 21.9512 15.6483 21.9612 15.411 21.97L15.217 21.976C14.724 21.99 14.153 21.997 13.028 21.999L12.282 22H10.973C10.2432 22.0025 9.51349 21.9949 8.78397 21.977L8.58997 21.971C8.35258 21.962 8.11524 21.9517 7.87797 21.94C6.81397 21.89 6.08797 21.722 5.44997 21.475C4.78264 21.2244 4.17818 20.8308 3.67897 20.322C3.17001 19.8223 2.77619 19.2176 2.52497 18.55C2.27797 17.913 2.10997 17.187 2.05997 16.122C2.04883 15.8847 2.03883 15.6474 2.02997 15.41L2.02497 15.216C2.00654 14.4868 1.9982 13.7574 1.99997 13.028V10.972C1.99718 10.2426 2.00451 9.5132 2.02197 8.784L2.02897 8.59C2.03697 8.365 2.04697 8.144 2.05897 7.878C2.10897 6.813 2.27697 6.088 2.52397 5.45C2.77508 4.7819 3.16969 4.17702 3.67997 3.678C4.17906 3.16947 4.78311 2.77599 5.44997 2.525C6.08797 2.278 6.81297 2.11 7.87797 2.06C8.14397 2.048 8.36597 2.038 8.58997 2.03L8.78397 2.024C9.51316 2.00623 10.2426 1.99857 10.972 2.001L13.028 2ZM12 7C10.6739 7 9.40211 7.52678 8.46443 8.46447C7.52675 9.40215 6.99997 10.6739 6.99997 12C6.99997 13.3261 7.52675 14.5979 8.46443 15.5355C9.40211 16.4732 10.6739 17 12 17C13.326 17 14.5978 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5978 7.52678 13.326 7 12 7ZM12 9C12.3939 8.99993 12.7841 9.07747 13.1481 9.22817C13.5121 9.37887 13.8428 9.5998 14.1214 9.87833C14.4001 10.1569 14.6211 10.4875 14.7719 10.8515C14.9227 11.2154 15.0004 11.6055 15.0005 11.9995C15.0005 12.3935 14.923 12.7836 14.7723 13.1476C14.6216 13.5116 14.4007 13.8423 14.1221 14.121C13.8436 14.3996 13.5129 14.6206 13.149 14.7714C12.785 14.9223 12.3949 14.9999 12.001 15C11.2053 15 10.4423 14.6839 9.87965 14.1213C9.31704 13.5587 9.00097 12.7956 9.00097 12C9.00097 11.2044 9.31704 10.4413 9.87965 9.87868C10.4423 9.31607 11.2053 9 12.001 9M17.251 5.5C16.9194 5.5 16.6015 5.6317 16.3671 5.86612C16.1327 6.10054 16.001 6.41848 16.001 6.75C16.001 7.08152 16.1327 7.39946 16.3671 7.63388C16.6015 7.8683 16.9194 8 17.251 8C17.5825 8 17.9004 7.8683 18.1349 7.63388C18.3693 7.39946 18.501 7.08152 18.501 6.75C18.501 6.41848 18.3693 6.10054 18.1349 5.86612C17.9004 5.6317 17.5825 5.5 17.251 5.5Z' fill='%23FF5757'/%3E%3C/svg%3E\");\r\n    background-repeat: no-repeat;\r\n    background-position: 10px center;\r\n    padding-left: 40px;\n}\n.icon-input3[data-v-2c2d89b3] {\r\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'%3E%3Cpath d='M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z' fill='%23FF5757'/%3E%3C/svg%3E\");\r\n    background-repeat: no-repeat;\r\n    background-position: 10px center;\r\n    padding-left: 40px; /* Adjust this value based on the width of your SVG icon */\n}\n.input-group-1 lable[data-v-2c2d89b3] {}\n.input-group-1 label[data-v-2c2d89b3] {color: #000;font-family: sans-serif;font-size: 16px;font-style: normal;font-weight: 400;line-height: normal;padding-bottom: 15px;}\n.input-group-3 label[data-v-2c2d89b3] {\r\n    width: 100%;\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    padding-bottom: 15px;\n}\n.input-group input[data-v-2c2d89b3] {\r\n    border-radius: 9px;\r\n    border: 1px solid #ADADAD;\r\n    background: #FFF;\r\n    padding: 15px;\r\n    flex-shrink: 0;\r\n    width: 100%;\n}\n.input-group-1 input[data-v-2c2d89b3] {\r\n    border-radius: 9px;\r\n    border: 1px solid #ADADAD;\r\n    background: #FFF;\r\n    padding: 15px;\r\n    width: 100%;\n}\n.input-group-1 textarea[data-v-2c2d89b3] {\r\n    border-radius: 9px;\r\n    border: 1px solid #ADADAD;\r\n    background: #FFF;\r\n    padding: 15px;\r\n    width: 100%;\n}\n.input-group-3 input[data-v-2c2d89b3] {\r\n    border-radius: 9px;\r\n    border: 1px solid #ADADAD;\r\n    background: #FFF;\r\n    padding: 15px;\r\n    width: 30%;\n}\n.imagestate[data-v-2c2d89b3]{\r\n    width: 13%;\r\n    position: relative;\r\n    z-index: 1;\r\n   \r\n    margin-top: -70px;\r\n    border-radius: 50%;\r\n    max-height: 125px;\r\n    -o-object-fit: cover;\r\n    object-fit: cover;\r\n    left: 50px;\r\n    opacity: 0.8;\r\n    min-height: 115px;\n}\n.imagestate[data-v-2c2d89b3]::before {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    background-color: rgba(255, 0, 0, 0.5); \r\n    border-radius: 50%;\n}\n.buttons[data-v-2c2d89b3] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 20px;\r\n    padding-top: 10px;\n}\n.Hire[data-v-2c2d89b3] {\r\n    border-radius: 6px;\r\n    border: 1px solid #000;\r\n    background: #F96;\r\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\r\n    color: #fff;\n}\nbutton.Hire[data-v-2c2d89b3] {\r\n    display: flex;\r\n    width: 154.75px;\r\n    height: 44px;\r\n    padding: 10px 18px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 7.647px;\r\n    flex-shrink: 0;\n}\n.custom-file-input[data-v-2c2d89b3] {\r\n  position: relative;\r\n  display: inline-block;\r\n  cursor: pointer;\n}\n.custom-file-input input[data-v-2c2d89b3] {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  opacity: 0;\r\n  cursor: pointer;\n}\n@media screen and (max-width: 1440px){\n.main-box[data-v-2c2d89b3] {\r\n    width: 80%;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n    align-content: center;\r\n    align-items: center;\r\n    background-color: #FF9966;\r\n    border-radius: 50px;\r\n    gap: 85px;\r\n    padding: 40px 0px;\n}\n.imagestate[data-v-2c2d89b3]{\r\n    width: 14%;\r\n    position: relative;\r\n    z-index: 1;\r\n    \r\n    margin-top: -70px;\r\n    border-radius: 50%;\r\n    max-height: 115px;\r\n    min-height: 115px;\r\n    -o-object-fit: cover;\r\n    object-fit: cover;\r\n    left: 50px;\r\n\r\n    opacity: 0.8;\n}\n}\r\n\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/dashborad4.vue?vue&type=style&index=0&id=fdc95946&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/dashborad4.vue?vue&type=style&index=0&id=fdc95946&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashborad4_vue_vue_type_style_index_0_id_fdc95946_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./dashborad4.vue?vue&type=style&index=0&id=fdc95946&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/dashborad4.vue?vue&type=style&index=0&id=fdc95946&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashborad4_vue_vue_type_style_index_0_id_fdc95946_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashborad4_vue_vue_type_style_index_0_id_fdc95946_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/entreform.vue?vue&type=style&index=0&id=2c2d89b3&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/entreform.vue?vue&type=style&index=0&id=2c2d89b3&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_entreform_vue_vue_type_style_index_0_id_2c2d89b3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./entreform.vue?vue&type=style&index=0&id=2c2d89b3&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/entreform.vue?vue&type=style&index=0&id=2c2d89b3&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_entreform_vue_vue_type_style_index_0_id_2c2d89b3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_entreform_vue_vue_type_style_index_0_id_2c2d89b3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/views/admin/dashborad4.vue":
/*!*************************************************!*\
  !*** ./resources/js/views/admin/dashborad4.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dashborad4_vue_vue_type_template_id_fdc95946_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashborad4.vue?vue&type=template&id=fdc95946&scoped=true& */ "./resources/js/views/admin/dashborad4.vue?vue&type=template&id=fdc95946&scoped=true&");
/* harmony import */ var _dashborad4_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashborad4.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/dashborad4.vue?vue&type=script&lang=js&");
/* harmony import */ var _dashborad4_vue_vue_type_style_index_0_id_fdc95946_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashborad4.vue?vue&type=style&index=0&id=fdc95946&scoped=true&lang=css& */ "./resources/js/views/admin/dashborad4.vue?vue&type=style&index=0&id=fdc95946&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _dashborad4_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _dashborad4_vue_vue_type_template_id_fdc95946_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _dashborad4_vue_vue_type_template_id_fdc95946_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "fdc95946",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/dashborad4.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/entreform.vue":
/*!************************************************!*\
  !*** ./resources/js/views/admin/entreform.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _entreform_vue_vue_type_template_id_2c2d89b3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entreform.vue?vue&type=template&id=2c2d89b3&scoped=true& */ "./resources/js/views/admin/entreform.vue?vue&type=template&id=2c2d89b3&scoped=true&");
/* harmony import */ var _entreform_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entreform.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/entreform.vue?vue&type=script&lang=js&");
/* harmony import */ var _entreform_vue_vue_type_style_index_0_id_2c2d89b3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./entreform.vue?vue&type=style&index=0&id=2c2d89b3&scoped=true&lang=css& */ "./resources/js/views/admin/entreform.vue?vue&type=style&index=0&id=2c2d89b3&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _entreform_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _entreform_vue_vue_type_template_id_2c2d89b3_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _entreform_vue_vue_type_template_id_2c2d89b3_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "2c2d89b3",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/entreform.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/dashborad4.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/admin/dashborad4.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashborad4_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./dashborad4.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/dashborad4.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashborad4_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/admin/entreform.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/admin/entreform.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_entreform_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./entreform.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/entreform.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_entreform_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/admin/dashborad4.vue?vue&type=style&index=0&id=fdc95946&scoped=true&lang=css&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/views/admin/dashborad4.vue?vue&type=style&index=0&id=fdc95946&scoped=true&lang=css& ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashborad4_vue_vue_type_style_index_0_id_fdc95946_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./dashborad4.vue?vue&type=style&index=0&id=fdc95946&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/dashborad4.vue?vue&type=style&index=0&id=fdc95946&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/views/admin/entreform.vue?vue&type=style&index=0&id=2c2d89b3&scoped=true&lang=css&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/views/admin/entreform.vue?vue&type=style&index=0&id=2c2d89b3&scoped=true&lang=css& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_entreform_vue_vue_type_style_index_0_id_2c2d89b3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./entreform.vue?vue&type=style&index=0&id=2c2d89b3&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/entreform.vue?vue&type=style&index=0&id=2c2d89b3&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/views/admin/dashborad4.vue?vue&type=template&id=fdc95946&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/views/admin/dashborad4.vue?vue&type=template&id=fdc95946&scoped=true& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dashborad4_vue_vue_type_template_id_fdc95946_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dashborad4_vue_vue_type_template_id_fdc95946_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dashborad4_vue_vue_type_template_id_fdc95946_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./dashborad4.vue?vue&type=template&id=fdc95946&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/dashborad4.vue?vue&type=template&id=fdc95946&scoped=true&");


/***/ }),

/***/ "./resources/js/views/admin/entreform.vue?vue&type=template&id=2c2d89b3&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/admin/entreform.vue?vue&type=template&id=2c2d89b3&scoped=true& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_entreform_vue_vue_type_template_id_2c2d89b3_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_entreform_vue_vue_type_template_id_2c2d89b3_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_entreform_vue_vue_type_template_id_2c2d89b3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./entreform.vue?vue&type=template&id=2c2d89b3&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/entreform.vue?vue&type=template&id=2c2d89b3&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/dashborad4.vue?vue&type=template&id=fdc95946&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/dashborad4.vue?vue&type=template&id=fdc95946&scoped=true& ***!
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
      _c("div", { staticClass: "main" }, [
        _c("div", { staticClass: "roll-1" }),
        _vm._v(" "),
        _c("div", { staticClass: "roll-2" }, [
          _c("div", { staticClass: "list-1" }, [
            _c("img", {
              attrs: { src: "/uploads/" + _vm.model.image, alt: "" }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "list-titel" }, [
              _c("span", [
                _c("h2", [_vm._v(_vm._s(_vm.model.user_name))]),
                _c(
                  "svg",
                  {
                    attrs: {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "44",
                      height: "44",
                      viewBox: "0 0 44 44",
                      fill: "none"
                    }
                  },
                  [
                    _c("path", {
                      attrs: {
                        d:
                          "M23.8846 3.6665C25.9471 3.672 26.9939 3.683 27.8978 3.70867L28.2534 3.7215C28.6641 3.73617 29.0693 3.7545 29.5588 3.7765C31.5094 3.86817 32.8404 4.17617 34.0083 4.629C35.2183 5.09467 36.2376 5.72534 37.2569 6.74284C38.1892 7.65931 38.9105 8.76792 39.3708 9.9915C39.8236 11.1593 40.1316 12.4903 40.2233 14.4428C40.2453 14.9305 40.2636 15.3357 40.2783 15.7482L40.2893 16.1038C40.3168 17.0058 40.3278 18.0527 40.3314 20.1152L40.3333 21.4828V23.8845C40.3378 25.2217 40.3237 26.559 40.2911 27.8958L40.2801 28.2515C40.2654 28.664 40.2471 29.0692 40.2251 29.5568C40.1334 31.5093 39.8218 32.8385 39.3708 34.0082C38.9118 35.2324 38.1903 36.3413 37.2569 37.2568C36.3402 38.1888 35.2317 38.91 34.0083 39.3707C32.8404 39.8235 31.5094 40.1315 29.5588 40.2232C29.1237 40.2437 28.6886 40.262 28.2534 40.2782L27.8978 40.2892C26.9939 40.3148 25.9471 40.3277 23.8846 40.3313L22.5169 40.3332H20.1171C18.7792 40.3378 17.4414 40.3237 16.1039 40.291L15.7483 40.28C15.313 40.2635 14.8779 40.2446 14.4429 40.2232C12.4923 40.1315 11.1613 39.8235 9.99158 39.3707C8.76815 38.9112 7.65998 38.1897 6.74475 37.2568C5.81167 36.3407 5.08966 35.232 4.62909 34.0082C4.17625 32.8403 3.86825 31.5093 3.77659 29.5568C3.75616 29.1218 3.73783 28.6867 3.72159 28.2515L3.71242 27.8958C3.67863 26.559 3.66335 25.2218 3.66659 23.8845V20.1152C3.66147 18.7779 3.67491 17.4407 3.70692 16.1038L3.71975 15.7482C3.73442 15.3357 3.75275 14.9305 3.77475 14.4428C3.86642 12.4903 4.17442 11.1612 4.62725 9.9915C5.08763 8.76666 5.81107 7.65771 6.74659 6.74284C7.66159 5.81054 8.76902 5.08915 9.99158 4.629C11.1613 4.17617 12.4904 3.86817 14.4429 3.7765C14.9306 3.7545 15.3376 3.73617 15.7483 3.7215L16.1039 3.7105C17.4408 3.67793 18.778 3.66387 20.1153 3.66834L23.8846 3.6665ZM21.9999 12.8332C19.5688 12.8332 17.2372 13.7989 15.5181 15.518C13.799 17.2371 12.8333 19.5687 12.8333 21.9998C12.8333 24.431 13.799 26.7626 15.5181 28.4816C17.2372 30.2007 19.5688 31.1665 21.9999 31.1665C24.4311 31.1665 26.7626 30.2007 28.4817 28.4816C30.2008 26.7626 31.1666 24.431 31.1666 21.9998C31.1666 19.5687 30.2008 17.2371 28.4817 15.518C26.7626 13.7989 24.4311 12.8332 21.9999 12.8332ZM21.9999 16.4998C22.7222 16.4997 23.4374 16.6419 24.1047 16.9181C24.7721 17.1944 25.3785 17.5995 25.8893 18.1101C26.4001 18.6207 26.8053 19.227 27.0818 19.8942C27.3583 20.5615 27.5007 21.2766 27.5008 21.9989C27.501 22.7212 27.3588 23.4364 27.0825 24.1037C26.8062 24.7711 26.4012 25.3775 25.8906 25.8883C25.3799 26.3991 24.7737 26.8043 24.1064 27.0808C23.4392 27.3573 22.724 27.4997 22.0018 27.4998C20.5431 27.4998 19.1441 26.9204 18.1127 25.8889C17.0812 24.8575 16.5018 23.4585 16.5018 21.9998C16.5018 20.5411 17.0812 19.1422 18.1127 18.1107C19.1441 17.0793 20.5431 16.4998 22.0018 16.4998M31.6268 10.0832C31.019 10.0832 30.4361 10.3246 30.0063 10.7544C29.5765 11.1842 29.3351 11.767 29.3351 12.3748C29.3351 12.9826 29.5765 13.5655 30.0063 13.9953C30.4361 14.4251 31.019 14.6665 31.6268 14.6665C32.2345 14.6665 32.8174 14.4251 33.2472 13.9953C33.677 13.5655 33.9184 12.9826 33.9184 12.3748C33.9184 11.767 33.677 11.1842 33.2472 10.7544C32.8174 10.3246 32.2345 10.0832 31.6268 10.0832Z",
                        fill: "#FF5757"
                      }
                    })
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "list-id" }, [
                _c("h2", [_vm._v(_vm._s(_vm.model.user_name))]),
                _vm._v(" "),
                _c("h2", [
                  _vm._v(_vm._s(_vm.model.email)),
                  _c("span", [
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
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("p", [_vm._v(_vm._s(_vm.model.bio))])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "list-btn" }, [
              _vm.user && _vm.user.auth_type === "Brand"
                ? _c("div", { staticClass: "buttons" }, [
                    _c(
                      "button",
                      {
                        staticClass: "Hire",
                        staticStyle: {
                          "background-color": "#f96",
                          color: "white"
                        },
                        on: { click: _vm.hiring }
                      },
                      [
                        _vm._v("Hire"),
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
                                  "M2.51279 5.45247C3.05059 5.44296 3.53656 5.41538 4.0192 5.49859C4.07008 5.50715 4.12904 5.4791 4.18278 5.46293C4.44763 5.38304 4.71344 5.37211 4.98305 5.44106C5.21748 5.50097 5.45666 5.44961 5.69394 5.46721C6.06008 5.49431 6.42432 5.39541 6.78809 5.41395C7.08433 5.42917 7.3839 5.42441 7.67824 5.47054C7.82755 5.49384 7.96877 5.50192 8.12141 5.46341C8.28736 5.42204 8.45189 5.52142 8.62402 5.52142C8.81328 5.52142 8.99968 5.56897 9.18132 5.62318C9.38484 5.68357 9.43619 5.86806 9.28784 6.01785C9.06149 6.24657 8.76573 6.3469 8.4595 6.3916C8.20605 6.42869 7.94738 6.45008 7.69203 6.4634C7.42194 6.47719 7.14995 6.57039 6.87605 6.48004C6.82898 6.46435 6.77049 6.46102 6.72294 6.47386C6.40435 6.56136 6.07292 6.50239 5.75195 6.56516C5.65305 6.58465 5.54463 6.578 5.44382 6.56231C5.30402 6.54043 5.16993 6.54424 5.03679 6.58798C4.86656 6.64409 4.69728 6.57277 4.52657 6.57609C4.35396 6.57942 4.18278 6.5856 4.0192 6.62697C3.76195 6.69259 3.50613 6.65598 3.25553 6.62935C3.02919 6.60558 2.81093 6.62555 2.58792 6.63125C2.37727 6.63696 2.15711 6.65503 1.94979 6.61842C1.71441 6.57657 1.61217 6.36164 1.52611 6.16525C1.44907 5.98932 1.55749 5.8595 1.67589 5.73302C1.8504 5.54614 2.05154 5.44628 2.3107 5.46388C2.39534 5.46958 2.48141 5.45389 2.51422 5.45199L2.51279 5.45247Z",
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
                    ),
                    _vm._v(" "),
                    _c("button", { on: { click: _vm.chat } }, [
                      _vm._v(
                        "\n                            Discuss\n                            "
                      ),
                      _c(
                        "svg",
                        {
                          staticStyle: { color: "black" },
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
                                "M2.51279 5.45247C3.05059 5.44296 3.53656 5.41538 4.0192 5.49859C4.07008 5.50715 4.12904 5.4791 4.18278 5.46293C4.44763 5.38304 4.71344 5.37211 4.98305 5.44106C5.21748 5.50097 5.45666 5.44961 5.69394 5.46721C6.06008 5.49431 6.42432 5.39541 6.78809 5.41395C7.08433 5.42917 7.3839 5.42441 7.67824 5.47054C7.82755 5.49384 7.96877 5.50192 8.12141 5.46341C8.28736 5.42204 8.45189 5.52142 8.62402 5.52142C8.81328 5.52142 8.99968 5.56897 9.18132 5.62318C9.38484 5.68357 9.43619 5.86806 9.28784 6.01785C9.06149 6.24657 8.76573 6.3469 8.4595 6.3916C8.20605 6.42869 7.94738 6.45008 7.69203 6.4634C7.42194 6.47719 7.14995 6.57039 6.87605 6.48004C6.82898 6.46435 6.77049 6.46102 6.72294 6.47386C6.40435 6.56136 6.07292 6.50239 5.75195 6.56516C5.65305 6.58465 5.54463 6.578 5.44382 6.56231C5.30402 6.54043 5.16993 6.54424 5.03679 6.58798C4.86656 6.64409 4.69728 6.57277 4.52657 6.57609C4.35396 6.57942 4.18278 6.5856 4.0192 6.62697C3.76195 6.69259 3.50613 6.65598 3.25553 6.62935C3.02919 6.60558 2.81093 6.62555 2.58792 6.63125C2.37727 6.63696 2.15711 6.65503 1.94979 6.61842C1.71441 6.57657 1.61217 6.36164 1.52611 6.16525C1.44907 5.98932 1.55749 5.8595 1.67589 5.73302C1.8504 5.54614 2.05154 5.44628 2.3107 5.46388C2.39534 5.46958 2.48141 5.45389 2.51422 5.45199L2.51279 5.45247Z",
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
                : _vm._e(),
              _vm._v(" "),
              _vm.user && _vm.user.auth_type === "Influencer"
                ? _c("div", { staticClass: "buttons" }, [
                    _c(
                      "button",
                      {
                        staticClass: "Hire",
                        staticStyle: {
                          "background-color": "#f96",
                          color: "white"
                        },
                        on: { click: _vm.openModal }
                      },
                      [
                        _vm._v("Edit Profile"),
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
                                  "M2.51279 5.45247C3.05059 5.44296 3.53656 5.41538 4.0192 5.49859C4.07008 5.50715 4.12904 5.4791 4.18278 5.46293C4.44763 5.38304 4.71344 5.37211 4.98305 5.44106C5.21748 5.50097 5.45666 5.44961 5.69394 5.46721C6.06008 5.49431 6.42432 5.39541 6.78809 5.41395C7.08433 5.42917 7.3839 5.42441 7.67824 5.47054C7.82755 5.49384 7.96877 5.50192 8.12141 5.46341C8.28736 5.42204 8.45189 5.52142 8.62402 5.52142C8.81328 5.52142 8.99968 5.56897 9.18132 5.62318C9.38484 5.68357 9.43619 5.86806 9.28784 6.01785C9.06149 6.24657 8.76573 6.3469 8.4595 6.3916C8.20605 6.42869 7.94738 6.45008 7.69203 6.4634C7.42194 6.47719 7.14995 6.57039 6.87605 6.48004C6.82898 6.46435 6.77049 6.46102 6.72294 6.47386C6.40435 6.56136 6.07292 6.50239 5.75195 6.56516C5.65305 6.58465 5.54463 6.578 5.44382 6.56231C5.30402 6.54043 5.16993 6.54424 5.03679 6.58798C4.86656 6.64409 4.69728 6.57277 4.52657 6.57609C4.35396 6.57942 4.18278 6.5856 4.0192 6.62697C3.76195 6.69259 3.50613 6.65598 3.25553 6.62935C3.02919 6.60558 2.81093 6.62555 2.58792 6.63125C2.37727 6.63696 2.15711 6.65503 1.94979 6.61842C1.71441 6.57657 1.61217 6.36164 1.52611 6.16525C1.44907 5.98932 1.55749 5.8595 1.67589 5.73302C1.8504 5.54614 2.05154 5.44628 2.3107 5.46388C2.39534 5.46958 2.48141 5.45389 2.51422 5.45199L2.51279 5.45247Z",
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
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c("div", { staticClass: "btn-ides" }, [
                _c("span", [
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
                            "M20.9 2H3.1C2.80826 2 2.52847 2.11589 2.32218 2.32218C2.11589 2.52847 2 2.80826 2 3.1V20.9C2 21.1917 2.11589 21.4715 2.32218 21.6778C2.52847 21.8841 2.80826 22 3.1 22H12.68V14.25H10.08V11.25H12.68V9C12.6261 8.47176 12.6885 7.93813 12.8627 7.43654C13.0369 6.93495 13.3188 6.47755 13.6885 6.09641C14.0582 5.71528 14.5068 5.41964 15.0028 5.23024C15.4989 5.04083 16.0304 4.96225 16.56 5C17.3383 4.99521 18.1163 5.03528 18.89 5.12V7.82H17.3C16.04 7.82 15.8 8.42 15.8 9.29V11.22H18.8L18.41 14.22H15.8V22H20.9C21.0445 22 21.1875 21.9715 21.321 21.9163C21.4544 21.861 21.5757 21.78 21.6778 21.6778C21.78 21.5757 21.861 21.4544 21.9163 21.321C21.9715 21.1875 22 21.0445 22 20.9V3.1C22 2.95555 21.9715 2.81251 21.9163 2.67905C21.861 2.54559 21.78 2.42433 21.6778 2.32218C21.5757 2.22004 21.4544 2.13901 21.321 2.08373C21.1875 2.02845 21.0445 2 20.9 2Z",
                          fill: "#FF5757"
                        }
                      })
                    ]
                  ),
                  _c("h2", [
                    _vm._v(
                      _vm._s(
                        _vm.model.facebook
                          ? _vm.model.facebook
                          : "No Facebook Id"
                      )
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("span", [
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
                            "M13.0281 2C14.1531 2.003 14.7241 2.009 15.2171 2.023L15.4111 2.03C15.6351 2.038 15.8561 2.048 16.1231 2.06C17.1871 2.11 17.9131 2.278 18.5501 2.525C19.2101 2.779 19.7661 3.123 20.3221 3.678C20.8306 4.1779 21.224 4.78259 21.4751 5.45C21.7221 6.087 21.8901 6.813 21.9401 7.878C21.9521 8.144 21.9621 8.365 21.9701 8.59L21.9761 8.784C21.9911 9.276 21.9971 9.847 21.9991 10.972L22.0001 11.718V13.028C22.0025 13.7574 21.9949 14.4868 21.9771 15.216L21.9711 15.41C21.9631 15.635 21.9531 15.856 21.9411 16.122C21.8911 17.187 21.7211 17.912 21.4751 18.55C21.2248 19.2178 20.8312 19.8226 20.3221 20.322C19.8221 20.8303 19.2174 21.2238 18.5501 21.475C17.9131 21.722 17.1871 21.89 16.1231 21.94C15.8858 21.9512 15.6485 21.9612 15.4111 21.97L15.2171 21.976C14.7241 21.99 14.1531 21.997 13.0281 21.999L12.2821 22H10.9731C10.2434 22.0025 9.51361 21.9949 8.78409 21.977L8.59009 21.971C8.3527 21.962 8.11536 21.9517 7.87809 21.94C6.81409 21.89 6.08809 21.722 5.45009 21.475C4.78276 21.2244 4.17831 20.8308 3.67909 20.322C3.17013 19.8223 2.77631 19.2176 2.52509 18.55C2.27809 17.913 2.11009 17.187 2.06009 16.122C2.04895 15.8847 2.03895 15.6474 2.03009 15.41L2.02509 15.216C2.00666 14.4868 1.99833 13.7574 2.00009 13.028V10.972C1.9973 10.2426 2.00463 9.5132 2.02209 8.784L2.02909 8.59C2.03709 8.365 2.04709 8.144 2.05909 7.878C2.10909 6.813 2.27709 6.088 2.52409 5.45C2.7752 4.7819 3.16981 4.17702 3.68009 3.678C4.17918 3.16947 4.78323 2.77599 5.45009 2.525C6.08809 2.278 6.81309 2.11 7.87809 2.06C8.14409 2.048 8.36609 2.038 8.59009 2.03L8.78409 2.024C9.51328 2.00623 10.2427 1.99857 10.9721 2.001L13.0281 2ZM12.0001 7C10.674 7 9.40224 7.52678 8.46455 8.46447C7.52687 9.40215 7.00009 10.6739 7.00009 12C7.00009 13.3261 7.52687 14.5979 8.46455 15.5355C9.40224 16.4732 10.674 17 12.0001 17C13.3262 17 14.5979 16.4732 15.5356 15.5355C16.4733 14.5979 17.0001 13.3261 17.0001 12C17.0001 10.6739 16.4733 9.40215 15.5356 8.46447C14.5979 7.52678 13.3262 7 12.0001 7ZM12.0001 9C12.3941 8.99993 12.7842 9.07747 13.1482 9.22817C13.5122 9.37887 13.8429 9.5998 14.1216 9.87833C14.4002 10.1569 14.6212 10.4875 14.772 10.8515C14.9229 11.2154 15.0005 11.6055 15.0006 11.9995C15.0007 12.3935 14.9231 12.7836 14.7724 13.1476C14.6217 13.5116 14.4008 13.8423 14.1223 14.121C13.8437 14.3996 13.5131 14.6206 13.1491 14.7714C12.7851 14.9223 12.3951 14.9999 12.0011 15C11.2054 15 10.4424 14.6839 9.87977 14.1213C9.31716 13.5587 9.00109 12.7956 9.00109 12C9.00109 11.2044 9.31716 10.4413 9.87977 9.87868C10.4424 9.31607 11.2054 9 12.0011 9M17.2511 5.5C16.9196 5.5 16.6016 5.6317 16.3672 5.86612C16.1328 6.10054 16.0011 6.41848 16.0011 6.75C16.0011 7.08152 16.1328 7.39946 16.3672 7.63388C16.6016 7.8683 16.9196 8 17.2511 8C17.5826 8 17.9006 7.8683 18.135 7.63388C18.3694 7.39946 18.5011 7.08152 18.5011 6.75C18.5011 6.41848 18.3694 6.10054 18.135 5.86612C17.9006 5.6317 17.5826 5.5 17.2511 5.5Z",
                          fill: "#FF5757"
                        }
                      })
                    ]
                  ),
                  _c("h2", [
                    _vm._v(
                      _vm._s(
                        _vm.model.instagram
                          ? _vm.model.instagram
                          : "No Instagram Id"
                      )
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("span", [
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
                            "M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z",
                          fill: "#FF5757"
                        }
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c("h2", [
                    _vm._v(
                      _vm._s(
                        _vm.model.linkdin ? _vm.model.linkdin : "No Linkdin Id"
                      )
                    )
                  ])
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "list-2" }, [
            _vm.count == 1
              ? _c(
                  "div",
                  { staticClass: "more-card" },
                  _vm._l(_vm.model.package, function(item) {
                    return _c("div", { staticClass: "cards" }, [
                      _c("div", { staticClass: "pox-1" }, [
                        _c("h2", [_vm._v(_vm._s(item.title))]),
                        _vm._v(" "),
                        _c("div", { staticClass: "top-btn" }, [
                          _c("button", [
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
                                      "M12.0583 3.23158C12.0757 4.21754 12.1263 5.10849 11.9737 5.99333C11.958 6.08661 12.0095 6.1947 12.0391 6.29322C12.1856 6.77878 12.2056 7.2661 12.0792 7.76039C11.9694 8.19017 12.0635 8.62867 12.0313 9.06369C11.9816 9.73494 12.1629 10.4027 12.1289 11.0696C12.101 11.6127 12.1097 12.1619 12.0252 12.7016C11.9824 12.9753 11.9676 13.2342 12.0382 13.514C12.1141 13.8183 11.9319 14.1199 11.9319 14.4355C11.9319 14.7825 11.8447 15.1242 11.7453 15.4572C11.6346 15.8303 11.2964 15.9245 11.0218 15.6525C10.6024 15.2375 10.4185 14.6953 10.3365 14.1339C10.2685 13.6692 10.2293 13.195 10.2049 12.7268C10.1796 12.2317 10.0088 11.733 10.1744 11.2309C10.2032 11.1446 10.2093 11.0374 10.1857 10.9502C10.0253 10.3661 10.1334 9.75848 10.0184 9.17004C9.98262 8.98872 9.99481 8.78995 10.0236 8.60513C10.0637 8.34883 10.0567 8.103 9.97651 7.85891C9.87365 7.54682 10.0044 7.23647 9.99831 6.92351C9.99221 6.60706 9.98088 6.29323 9.90503 5.99333C9.78473 5.5217 9.85185 5.0527 9.90067 4.59327C9.94425 4.17831 9.90764 3.77817 9.89719 3.36931C9.88672 2.98312 9.85359 2.5795 9.92071 2.19941C9.99743 1.76788 10.3915 1.58045 10.7515 1.42266C11.0741 1.28143 11.3121 1.4802 11.5439 1.69727C11.8866 2.01719 12.0696 2.38595 12.0374 2.86108C12.0269 3.01625 12.0557 3.17405 12.0592 3.2342L12.0583 3.23158Z",
                                    fill: "#1C1D1E"
                                  }
                                }),
                                _vm._v(" "),
                                _c("path", {
                                  attrs: {
                                    d:
                                      "M4.00555 15.3727C4.00118 14.8253 4.49024 14.4051 5.05865 14.4966C5.43437 14.5568 5.7857 14.6945 6.09082 14.9386C6.32532 15.126 6.56156 15.3161 6.81786 15.4704C7.71491 16.0082 8.57273 16.5976 9.34685 17.3037C9.41485 17.3656 9.50291 17.4161 9.59008 17.4467C10.1123 17.6289 10.5089 17.9941 10.9099 18.3507C11.154 18.5678 11.3354 18.5869 11.5515 18.3394C11.8384 18.0116 12.1662 17.7553 12.5619 17.5731C12.8409 17.4441 13.0031 17.1721 13.2253 16.9733C13.5348 16.6969 13.9132 16.5191 14.2697 16.3247C14.764 16.0553 15.158 15.6656 15.6096 15.3492C16.0647 15.0301 16.5476 14.7625 17.0698 14.569C17.1875 14.5254 17.3131 14.4949 17.4377 14.4827C17.6731 14.4609 17.8195 14.6038 17.9337 14.7878C18.0418 14.9613 17.9965 15.1173 17.8823 15.2707C17.6565 15.5741 17.4639 15.8958 17.1466 16.1312C16.742 16.4319 16.4744 16.8905 16.0281 17.1511C15.6367 17.8381 14.9323 18.1685 14.3473 18.6375C14.0038 18.913 13.7066 19.2494 13.4049 19.5728C13.1617 19.8335 12.8958 20.0462 12.5462 20.1404C12.3431 20.1953 12.1792 20.3174 12.0057 20.4307C11.5917 20.7009 11.1697 20.6835 10.7565 20.4186C10.1463 20.0271 9.49244 19.7028 8.91534 19.259C8.31643 18.7988 7.60856 18.4937 7.06109 17.9575C6.72808 17.6315 6.30004 17.4589 5.8877 17.2575C5.31843 16.9794 4.77793 16.6507 4.33857 16.1843C4.09709 15.9272 4.00729 15.6918 4.00469 15.3754L4.00555 15.3727Z",
                                    fill: "#1C1D1E"
                                  }
                                })
                              ]
                            ),
                            _c("span", [_vm._v("110 ")])
                          ]),
                          _vm._v(" "),
                          _c("button", { staticClass: "llo" }, [
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
                                      "M9.94172 18.7684C9.92428 17.7825 9.87372 16.8915 10.0263 16.0067C10.042 15.9134 9.99054 15.8053 9.96089 15.7068C9.81443 15.2212 9.79439 14.7339 9.9208 14.2396C10.0306 13.8098 9.93647 13.3713 9.96874 12.9363C10.0184 12.2651 9.83711 11.5973 9.8711 10.9304C9.899 10.3873 9.89027 9.83805 9.97485 9.29843C10.0176 9.0247 10.0324 8.76579 9.96177 8.48595C9.88593 8.18171 10.0681 7.88007 10.0681 7.5645C10.0681 7.21752 10.1553 6.87579 10.2547 6.54278C10.3654 6.16966 10.7036 6.07552 10.9782 6.3475C11.3976 6.76247 11.5815 7.3047 11.6635 7.86612C11.7315 8.33078 11.7707 8.80501 11.7951 9.27315C11.8204 9.76832 11.9912 10.267 11.8256 10.7691C11.7968 10.8554 11.7907 10.9626 11.8143 11.0498C11.9747 11.6339 11.8666 12.2415 11.9816 12.83C12.0174 13.0113 12.0052 13.2101 11.9764 13.3949C11.9363 13.6512 11.9433 13.897 12.0235 14.1411C12.1264 14.4532 11.9956 14.7635 12.0017 15.0765C12.0078 15.3929 12.0191 15.7068 12.095 16.0067C12.2153 16.4783 12.1482 16.9473 12.0993 17.4067C12.0558 17.8217 12.0924 18.2218 12.1028 18.6307C12.1133 19.0169 12.1464 19.4205 12.0793 19.8006C12.0026 20.2321 11.6085 20.4196 11.2485 20.5773C10.9259 20.7186 10.6879 20.5198 10.4561 20.3027C10.1134 19.9828 9.93037 19.614 9.96264 19.1389C9.97309 18.9837 9.94432 18.826 9.94084 18.7658L9.94172 18.7684Z",
                                    fill: "white"
                                  }
                                }),
                                _vm._v(" "),
                                _c("path", {
                                  attrs: {
                                    d:
                                      "M17.9945 6.62727C17.9988 7.17474 17.5098 7.59494 16.9413 7.5034C16.5656 7.44325 16.2143 7.30551 15.9092 7.0614C15.6747 6.87398 15.4384 6.68393 15.1821 6.52962C14.2851 5.99176 13.4273 5.40243 12.6531 4.69631C12.5851 4.63441 12.4971 4.58385 12.4099 4.55333C11.8877 4.37113 11.4911 4.00586 11.0901 3.64926C10.846 3.43219 10.6646 3.41312 10.4485 3.66062C10.1616 3.98842 9.83385 4.24474 9.43807 4.42694C9.1591 4.55595 8.99695 4.82794 8.77466 5.02671C8.46517 5.30305 8.08683 5.48088 7.73028 5.67529C7.23599 5.94468 6.84196 6.33436 6.39037 6.65081C5.93532 6.96988 5.45236 7.23751 4.93017 7.43104C4.81247 7.47461 4.68695 7.50514 4.56228 7.51733C4.32692 7.53913 4.18045 7.39617 4.06625 7.21221C3.95816 7.03874 4.00348 6.88271 4.11768 6.72927C4.34347 6.42589 4.53614 6.10422 4.85345 5.86884C5.25796 5.56808 5.52559 5.10952 5.97193 4.84886C6.36335 4.16191 7.06773 3.83152 7.65269 3.36252C7.99617 3.08697 8.29344 2.75055 8.59508 2.42715C8.83829 2.16645 9.10418 1.95379 9.45376 1.85955C9.65687 1.80474 9.82077 1.68264 9.99426 1.56934C10.4083 1.2991 10.8303 1.31652 11.2435 1.58144C11.8537 1.97285 12.5076 2.29717 13.0847 2.74102C13.6836 3.20119 14.3914 3.50626 14.9389 4.04249C15.2719 4.36853 15.7 4.54113 16.1123 4.74251C16.6816 5.02061 17.2221 5.34927 17.6614 5.81567C17.9029 6.07283 17.9927 6.30819 17.9953 6.62464L17.9945 6.62727Z",
                                    fill: "white"
                                  }
                                })
                              ]
                            ),
                            _c("span", [_vm._v("110 ")])
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "pox-2" }, [
                        _c("p", [_vm._v(_vm._s(item.description))]),
                        _vm._v(" "),
                        _c("h2", [_vm._v("What’s Included")]),
                        _vm._v(" "),
                        _c("div", { staticClass: "pox-box" }, [
                          _c("div", { staticClass: "yes" }, [
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
                                      "M21 7.00009L9 19.0001L3.5 13.5001L4.91 12.0901L9 16.1701L19.59 5.59009L21 7.00009Z",
                                    fill: "black"
                                  }
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _c("p", [_vm._v(_vm._s(item.include_1))])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "yes" }, [
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
                                      "M21 7.00009L9 19.0001L3.5 13.5001L4.91 12.0901L9 16.1701L19.59 5.59009L21 7.00009Z",
                                    fill: "black"
                                  }
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _c("p", [_vm._v(_vm._s(item.include_2))])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "yes" }, [
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
                                      "M21 7.00009L9 19.0001L3.5 13.5001L4.91 12.0901L9 16.1701L19.59 5.59009L21 7.00009Z",
                                    fill: "black"
                                  }
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _c("p", [_vm._v(_vm._s(item.include_2))])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "yes" }, [
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
                                      "M21 7.00009L9 19.0001L3.5 13.5001L4.91 12.0901L9 16.1701L19.59 5.59009L21 7.00009Z",
                                    fill: "black"
                                  }
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _c("p", [_vm._v(_vm._s(item.include_2))])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "pox-3" }, [
                          _c("h2", [
                            _vm._v("Active Duration"),
                            _c("br"),
                            _c("span", [
                              _vm._v(
                                _vm._s(item.hours) +
                                  " Hours " +
                                  _vm._s(item.minutes) +
                                  "min"
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("p", [_vm._v("Price: " + _vm._s(item.price))])
                        ])
                      ])
                    ])
                  }),
                  0
                )
              : _c(
                  "div",
                  {
                    staticClass: "more-card",
                    staticStyle: {
                      width: "70%",
                      display: "flex",
                      "justify-content": "center"
                    }
                  },
                  [
                    _c(
                      "h2",
                      {
                        staticStyle: { color: "black", "font-weight": "bold" }
                      },
                      [
                        _vm._v(
                          "\n                        No Package Yet\n                    "
                        )
                      ]
                    )
                  ]
                ),
            _vm._v(" "),
            _c("div", { staticClass: "salider-card" }, [
              _vm._m(0),
              _vm._v(" "),
              _c("div", { staticClass: "run-card" }, [
                _c("h2", [_vm._v("Reviews")]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "carousel slide",
                    attrs: {
                      id: "carouselExampleControls",
                      "data-ride": "carousel"
                    }
                  },
                  [
                    _c("div", { staticClass: "carousel-inner" }, [
                      _c("div", { staticClass: "carousel-item active" }, [
                        _c("div", { staticClass: "slide-card" }, [
                          _c("div", { staticClass: "imger" }, [
                            _c("img", {
                              attrs: { src: "/images/salider.png", alt: "" }
                            }),
                            _vm._v(" "),
                            _c("h2", [_vm._v("Christiana Adams")]),
                            _vm._v(" "),
                            _c("div", { staticClass: "icon-box" }, [
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
                                      opacity: "0.2",
                                      d:
                                        "M14.3851 11.539C14.2995 11.6143 14.2358 11.7113 14.2009 11.8198C14.1659 11.9284 14.161 12.0443 14.1867 12.1554L15.2429 16.7289C15.2709 16.8483 15.263 16.9733 15.2204 17.0883C15.1777 17.2034 15.1022 17.3033 15.0031 17.3757C14.9041 17.4481 14.786 17.4897 14.6634 17.4954C14.5409 17.5011 14.4194 17.4706 14.314 17.4078L10.3219 14.9859C10.2248 14.9269 10.1135 14.8957 9.99998 14.8957C9.88645 14.8957 9.7751 14.9269 9.6781 14.9859L5.68591 17.4078C5.58058 17.4706 5.45907 17.5011 5.33654 17.4954C5.214 17.4897 5.09585 17.4481 4.99682 17.3757C4.89778 17.3033 4.82223 17.2034 4.77959 17.0883C4.73695 16.9733 4.72909 16.8483 4.75701 16.7289L5.81326 12.1554C5.83893 12.0443 5.83404 11.9284 5.7991 11.8198C5.76416 11.7113 5.70048 11.6143 5.61482 11.539L2.0906 8.46479C1.99638 8.38471 1.92803 8.27849 1.8942 8.15955C1.86038 8.04062 1.86259 7.91432 1.90056 7.79664C1.93853 7.67896 2.01056 7.57519 2.10752 7.49846C2.20449 7.42173 2.32203 7.37548 2.44529 7.36558L7.0906 6.96401C7.20394 6.95392 7.31236 6.91308 7.40419 6.84589C7.49602 6.7787 7.56777 6.68773 7.6117 6.58276L9.42654 2.25776C9.47501 2.14594 9.55512 2.05074 9.65701 1.98386C9.75889 1.91698 9.8781 1.88135 9.99998 1.88135C10.1219 1.88135 10.2411 1.91698 10.3429 1.98386C10.4448 2.05074 10.5249 2.14594 10.5734 2.25776L12.3883 6.58276C12.4322 6.68773 12.5039 6.7787 12.5958 6.84589C12.6876 6.91308 12.796 6.95392 12.9094 6.96401L17.5547 7.36558C17.6779 7.37548 17.7955 7.42173 17.8924 7.49846C17.9894 7.57519 18.0614 7.67896 18.0994 7.79664C18.1374 7.91432 18.1396 8.04062 18.1058 8.15955C18.0719 8.27849 18.0036 8.38471 17.9094 8.46479L14.3851 11.539Z",
                                      fill: "#FF9966"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("path", {
                                    attrs: {
                                      d:
                                        "M18.6875 7.60062C18.6118 7.36733 18.4692 7.16146 18.2773 7.00865C18.0855 6.85584 17.8529 6.76285 17.6086 6.74125L12.9688 6.34125L11.15 2.01625C11.0553 1.78931 10.8956 1.59546 10.691 1.45911C10.4863 1.32276 10.2459 1.25 10 1.25C9.75412 1.25 9.51371 1.32276 9.30907 1.45911C9.10443 1.59546 8.94471 1.78931 8.85002 2.01625L7.03674 6.34125L2.39142 6.74359C2.14614 6.7642 1.9124 6.85678 1.71952 7.0097C1.52663 7.16262 1.38319 7.36909 1.30718 7.60321C1.23117 7.83733 1.22598 8.08868 1.29225 8.32574C1.35852 8.5628 1.49331 8.77502 1.6797 8.93578L5.20392 12.0155L4.14767 16.5889C4.09182 16.8282 4.10776 17.0787 4.19349 17.309C4.27923 17.5394 4.43095 17.7393 4.6297 17.8839C4.82845 18.0284 5.0654 18.1112 5.31094 18.1218C5.55647 18.1324 5.79968 18.0704 6.01017 17.9436L9.99455 15.5217L13.9875 17.9436C14.198 18.0704 14.4412 18.1324 14.6868 18.1218C14.9323 18.1112 15.1692 18.0284 15.368 17.8839C15.5667 17.7393 15.7185 17.5394 15.8042 17.309C15.8899 17.0787 15.9059 16.8282 15.85 16.5889L14.7945 12.0108L18.318 8.93578C18.5044 8.77446 18.6389 8.56164 18.7046 8.32408C18.7704 8.08651 18.7644 7.83481 18.6875 7.60062ZM17.4985 7.99125L13.975 11.0662C13.8035 11.2154 13.676 11.4085 13.606 11.6248C13.5361 11.841 13.5265 12.0723 13.5781 12.2936L14.6367 16.8748L10.6469 14.453C10.4522 14.3344 10.2287 14.2717 10.0008 14.2717C9.77289 14.2717 9.54937 14.3344 9.35471 14.453L5.37033 16.8748L6.42189 12.2967C6.47357 12.0754 6.46393 11.8442 6.394 11.6279C6.32407 11.4116 6.1965 11.2185 6.02502 11.0694L2.50002 7.99594C2.49973 7.9936 2.49973 7.99124 2.50002 7.9889L7.14377 7.58734C7.37049 7.56736 7.58745 7.48585 7.77125 7.35162C7.95505 7.21738 8.09871 7.03551 8.18674 6.82562L10 2.50609L11.8125 6.82562C11.9005 7.03551 12.0442 7.21738 12.228 7.35162C12.4118 7.48585 12.6288 7.56736 12.8555 7.58734L17.5 7.9889V7.99437L17.4985 7.99125Z",
                                      fill: "#FF9966"
                                    }
                                  })
                                ]
                              ),
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
                                      opacity: "0.2",
                                      d:
                                        "M14.3851 11.539C14.2995 11.6143 14.2358 11.7113 14.2009 11.8198C14.1659 11.9284 14.161 12.0443 14.1867 12.1554L15.2429 16.7289C15.2709 16.8483 15.263 16.9733 15.2204 17.0883C15.1777 17.2034 15.1022 17.3033 15.0031 17.3757C14.9041 17.4481 14.786 17.4897 14.6634 17.4954C14.5409 17.5011 14.4194 17.4706 14.314 17.4078L10.3219 14.9859C10.2248 14.9269 10.1135 14.8957 9.99998 14.8957C9.88645 14.8957 9.7751 14.9269 9.6781 14.9859L5.68591 17.4078C5.58058 17.4706 5.45907 17.5011 5.33654 17.4954C5.214 17.4897 5.09585 17.4481 4.99682 17.3757C4.89778 17.3033 4.82223 17.2034 4.77959 17.0883C4.73695 16.9733 4.72909 16.8483 4.75701 16.7289L5.81326 12.1554C5.83893 12.0443 5.83404 11.9284 5.7991 11.8198C5.76416 11.7113 5.70048 11.6143 5.61482 11.539L2.0906 8.46479C1.99638 8.38471 1.92803 8.27849 1.8942 8.15955C1.86038 8.04062 1.86259 7.91432 1.90056 7.79664C1.93853 7.67896 2.01056 7.57519 2.10752 7.49846C2.20449 7.42173 2.32203 7.37548 2.44529 7.36558L7.0906 6.96401C7.20394 6.95392 7.31236 6.91308 7.40419 6.84589C7.49602 6.7787 7.56777 6.68773 7.6117 6.58276L9.42654 2.25776C9.47501 2.14594 9.55512 2.05074 9.65701 1.98386C9.75889 1.91698 9.8781 1.88135 9.99998 1.88135C10.1219 1.88135 10.2411 1.91698 10.3429 1.98386C10.4448 2.05074 10.5249 2.14594 10.5734 2.25776L12.3883 6.58276C12.4322 6.68773 12.5039 6.7787 12.5958 6.84589C12.6876 6.91308 12.796 6.95392 12.9094 6.96401L17.5547 7.36558C17.6779 7.37548 17.7955 7.42173 17.8924 7.49846C17.9894 7.57519 18.0614 7.67896 18.0994 7.79664C18.1374 7.91432 18.1396 8.04062 18.1058 8.15955C18.0719 8.27849 18.0036 8.38471 17.9094 8.46479L14.3851 11.539Z",
                                      fill: "#FF9966"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("path", {
                                    attrs: {
                                      d:
                                        "M18.6875 7.60062C18.6118 7.36733 18.4692 7.16146 18.2773 7.00865C18.0855 6.85584 17.8529 6.76285 17.6086 6.74125L12.9688 6.34125L11.15 2.01625C11.0553 1.78931 10.8956 1.59546 10.691 1.45911C10.4863 1.32276 10.2459 1.25 10 1.25C9.75412 1.25 9.51371 1.32276 9.30907 1.45911C9.10443 1.59546 8.94471 1.78931 8.85002 2.01625L7.03674 6.34125L2.39142 6.74359C2.14614 6.7642 1.9124 6.85678 1.71952 7.0097C1.52663 7.16262 1.38319 7.36909 1.30718 7.60321C1.23117 7.83733 1.22598 8.08868 1.29225 8.32574C1.35852 8.5628 1.49331 8.77502 1.6797 8.93578L5.20392 12.0155L4.14767 16.5889C4.09182 16.8282 4.10776 17.0787 4.19349 17.309C4.27923 17.5394 4.43095 17.7393 4.6297 17.8839C4.82845 18.0284 5.0654 18.1112 5.31094 18.1218C5.55647 18.1324 5.79968 18.0704 6.01017 17.9436L9.99455 15.5217L13.9875 17.9436C14.198 18.0704 14.4412 18.1324 14.6868 18.1218C14.9323 18.1112 15.1692 18.0284 15.368 17.8839C15.5667 17.7393 15.7185 17.5394 15.8042 17.309C15.8899 17.0787 15.9059 16.8282 15.85 16.5889L14.7945 12.0108L18.318 8.93578C18.5044 8.77446 18.6389 8.56164 18.7046 8.32408C18.7704 8.08651 18.7644 7.83481 18.6875 7.60062ZM17.4985 7.99125L13.975 11.0662C13.8035 11.2154 13.676 11.4085 13.606 11.6248C13.5361 11.841 13.5265 12.0723 13.5781 12.2936L14.6367 16.8748L10.6469 14.453C10.4522 14.3344 10.2287 14.2717 10.0008 14.2717C9.77289 14.2717 9.54937 14.3344 9.35471 14.453L5.37033 16.8748L6.42189 12.2967C6.47357 12.0754 6.46393 11.8442 6.394 11.6279C6.32407 11.4116 6.1965 11.2185 6.02502 11.0694L2.50002 7.99594C2.49973 7.9936 2.49973 7.99124 2.50002 7.9889L7.14377 7.58734C7.37049 7.56736 7.58745 7.48585 7.77125 7.35162C7.95505 7.21738 8.09871 7.03551 8.18674 6.82562L10 2.50609L11.8125 6.82562C11.9005 7.03551 12.0442 7.21738 12.228 7.35162C12.4118 7.48585 12.6288 7.56736 12.8555 7.58734L17.5 7.9889V7.99437L17.4985 7.99125Z",
                                      fill: "#FF9966"
                                    }
                                  })
                                ]
                              ),
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
                                      opacity: "0.2",
                                      d:
                                        "M14.3851 11.539C14.2995 11.6143 14.2358 11.7113 14.2009 11.8198C14.1659 11.9284 14.161 12.0443 14.1867 12.1554L15.2429 16.7289C15.2709 16.8483 15.263 16.9733 15.2204 17.0883C15.1777 17.2034 15.1022 17.3033 15.0031 17.3757C14.9041 17.4481 14.786 17.4897 14.6634 17.4954C14.5409 17.5011 14.4194 17.4706 14.314 17.4078L10.3219 14.9859C10.2248 14.9269 10.1135 14.8957 9.99998 14.8957C9.88645 14.8957 9.7751 14.9269 9.6781 14.9859L5.68591 17.4078C5.58058 17.4706 5.45907 17.5011 5.33654 17.4954C5.214 17.4897 5.09585 17.4481 4.99682 17.3757C4.89778 17.3033 4.82223 17.2034 4.77959 17.0883C4.73695 16.9733 4.72909 16.8483 4.75701 16.7289L5.81326 12.1554C5.83893 12.0443 5.83404 11.9284 5.7991 11.8198C5.76416 11.7113 5.70048 11.6143 5.61482 11.539L2.0906 8.46479C1.99638 8.38471 1.92803 8.27849 1.8942 8.15955C1.86038 8.04062 1.86259 7.91432 1.90056 7.79664C1.93853 7.67896 2.01056 7.57519 2.10752 7.49846C2.20449 7.42173 2.32203 7.37548 2.44529 7.36558L7.0906 6.96401C7.20394 6.95392 7.31236 6.91308 7.40419 6.84589C7.49602 6.7787 7.56777 6.68773 7.6117 6.58276L9.42654 2.25776C9.47501 2.14594 9.55512 2.05074 9.65701 1.98386C9.75889 1.91698 9.8781 1.88135 9.99998 1.88135C10.1219 1.88135 10.2411 1.91698 10.3429 1.98386C10.4448 2.05074 10.5249 2.14594 10.5734 2.25776L12.3883 6.58276C12.4322 6.68773 12.5039 6.7787 12.5958 6.84589C12.6876 6.91308 12.796 6.95392 12.9094 6.96401L17.5547 7.36558C17.6779 7.37548 17.7955 7.42173 17.8924 7.49846C17.9894 7.57519 18.0614 7.67896 18.0994 7.79664C18.1374 7.91432 18.1396 8.04062 18.1058 8.15955C18.0719 8.27849 18.0036 8.38471 17.9094 8.46479L14.3851 11.539Z",
                                      fill: "#FF9966"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("path", {
                                    attrs: {
                                      d:
                                        "M18.6875 7.60062C18.6118 7.36733 18.4692 7.16146 18.2773 7.00865C18.0855 6.85584 17.8529 6.76285 17.6086 6.74125L12.9688 6.34125L11.15 2.01625C11.0553 1.78931 10.8956 1.59546 10.691 1.45911C10.4863 1.32276 10.2459 1.25 10 1.25C9.75412 1.25 9.51371 1.32276 9.30907 1.45911C9.10443 1.59546 8.94471 1.78931 8.85002 2.01625L7.03674 6.34125L2.39142 6.74359C2.14614 6.7642 1.9124 6.85678 1.71952 7.0097C1.52663 7.16262 1.38319 7.36909 1.30718 7.60321C1.23117 7.83733 1.22598 8.08868 1.29225 8.32574C1.35852 8.5628 1.49331 8.77502 1.6797 8.93578L5.20392 12.0155L4.14767 16.5889C4.09182 16.8282 4.10776 17.0787 4.19349 17.309C4.27923 17.5394 4.43095 17.7393 4.6297 17.8839C4.82845 18.0284 5.0654 18.1112 5.31094 18.1218C5.55647 18.1324 5.79968 18.0704 6.01017 17.9436L9.99455 15.5217L13.9875 17.9436C14.198 18.0704 14.4412 18.1324 14.6868 18.1218C14.9323 18.1112 15.1692 18.0284 15.368 17.8839C15.5667 17.7393 15.7185 17.5394 15.8042 17.309C15.8899 17.0787 15.9059 16.8282 15.85 16.5889L14.7945 12.0108L18.318 8.93578C18.5044 8.77446 18.6389 8.56164 18.7046 8.32408C18.7704 8.08651 18.7644 7.83481 18.6875 7.60062ZM17.4985 7.99125L13.975 11.0662C13.8035 11.2154 13.676 11.4085 13.606 11.6248C13.5361 11.841 13.5265 12.0723 13.5781 12.2936L14.6367 16.8748L10.6469 14.453C10.4522 14.3344 10.2287 14.2717 10.0008 14.2717C9.77289 14.2717 9.54937 14.3344 9.35471 14.453L5.37033 16.8748L6.42189 12.2967C6.47357 12.0754 6.46393 11.8442 6.394 11.6279C6.32407 11.4116 6.1965 11.2185 6.02502 11.0694L2.50002 7.99594C2.49973 7.9936 2.49973 7.99124 2.50002 7.9889L7.14377 7.58734C7.37049 7.56736 7.58745 7.48585 7.77125 7.35162C7.95505 7.21738 8.09871 7.03551 8.18674 6.82562L10 2.50609L11.8125 6.82562C11.9005 7.03551 12.0442 7.21738 12.228 7.35162C12.4118 7.48585 12.6288 7.56736 12.8555 7.58734L17.5 7.9889V7.99437L17.4985 7.99125Z",
                                      fill: "#FF9966"
                                    }
                                  })
                                ]
                              ),
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
                                      opacity: "0.2",
                                      d:
                                        "M14.3851 11.539C14.2995 11.6143 14.2358 11.7113 14.2009 11.8198C14.1659 11.9284 14.161 12.0443 14.1867 12.1554L15.2429 16.7289C15.2709 16.8483 15.263 16.9733 15.2204 17.0883C15.1777 17.2034 15.1022 17.3033 15.0031 17.3757C14.9041 17.4481 14.786 17.4897 14.6634 17.4954C14.5409 17.5011 14.4194 17.4706 14.314 17.4078L10.3219 14.9859C10.2248 14.9269 10.1135 14.8957 9.99998 14.8957C9.88645 14.8957 9.7751 14.9269 9.6781 14.9859L5.68591 17.4078C5.58058 17.4706 5.45907 17.5011 5.33654 17.4954C5.214 17.4897 5.09585 17.4481 4.99682 17.3757C4.89778 17.3033 4.82223 17.2034 4.77959 17.0883C4.73695 16.9733 4.72909 16.8483 4.75701 16.7289L5.81326 12.1554C5.83893 12.0443 5.83404 11.9284 5.7991 11.8198C5.76416 11.7113 5.70048 11.6143 5.61482 11.539L2.0906 8.46479C1.99638 8.38471 1.92803 8.27849 1.8942 8.15955C1.86038 8.04062 1.86259 7.91432 1.90056 7.79664C1.93853 7.67896 2.01056 7.57519 2.10752 7.49846C2.20449 7.42173 2.32203 7.37548 2.44529 7.36558L7.0906 6.96401C7.20394 6.95392 7.31236 6.91308 7.40419 6.84589C7.49602 6.7787 7.56777 6.68773 7.6117 6.58276L9.42654 2.25776C9.47501 2.14594 9.55512 2.05074 9.65701 1.98386C9.75889 1.91698 9.8781 1.88135 9.99998 1.88135C10.1219 1.88135 10.2411 1.91698 10.3429 1.98386C10.4448 2.05074 10.5249 2.14594 10.5734 2.25776L12.3883 6.58276C12.4322 6.68773 12.5039 6.7787 12.5958 6.84589C12.6876 6.91308 12.796 6.95392 12.9094 6.96401L17.5547 7.36558C17.6779 7.37548 17.7955 7.42173 17.8924 7.49846C17.9894 7.57519 18.0614 7.67896 18.0994 7.79664C18.1374 7.91432 18.1396 8.04062 18.1058 8.15955C18.0719 8.27849 18.0036 8.38471 17.9094 8.46479L14.3851 11.539Z",
                                      fill: "#FF9966"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("path", {
                                    attrs: {
                                      d:
                                        "M18.6875 7.60062C18.6118 7.36733 18.4692 7.16146 18.2773 7.00865C18.0855 6.85584 17.8529 6.76285 17.6086 6.74125L12.9688 6.34125L11.15 2.01625C11.0553 1.78931 10.8956 1.59546 10.691 1.45911C10.4863 1.32276 10.2459 1.25 10 1.25C9.75412 1.25 9.51371 1.32276 9.30907 1.45911C9.10443 1.59546 8.94471 1.78931 8.85002 2.01625L7.03674 6.34125L2.39142 6.74359C2.14614 6.7642 1.9124 6.85678 1.71952 7.0097C1.52663 7.16262 1.38319 7.36909 1.30718 7.60321C1.23117 7.83733 1.22598 8.08868 1.29225 8.32574C1.35852 8.5628 1.49331 8.77502 1.6797 8.93578L5.20392 12.0155L4.14767 16.5889C4.09182 16.8282 4.10776 17.0787 4.19349 17.309C4.27923 17.5394 4.43095 17.7393 4.6297 17.8839C4.82845 18.0284 5.0654 18.1112 5.31094 18.1218C5.55647 18.1324 5.79968 18.0704 6.01017 17.9436L9.99455 15.5217L13.9875 17.9436C14.198 18.0704 14.4412 18.1324 14.6868 18.1218C14.9323 18.1112 15.1692 18.0284 15.368 17.8839C15.5667 17.7393 15.7185 17.5394 15.8042 17.309C15.8899 17.0787 15.9059 16.8282 15.85 16.5889L14.7945 12.0108L18.318 8.93578C18.5044 8.77446 18.6389 8.56164 18.7046 8.32408C18.7704 8.08651 18.7644 7.83481 18.6875 7.60062ZM17.4985 7.99125L13.975 11.0662C13.8035 11.2154 13.676 11.4085 13.606 11.6248C13.5361 11.841 13.5265 12.0723 13.5781 12.2936L14.6367 16.8748L10.6469 14.453C10.4522 14.3344 10.2287 14.2717 10.0008 14.2717C9.77289 14.2717 9.54937 14.3344 9.35471 14.453L5.37033 16.8748L6.42189 12.2967C6.47357 12.0754 6.46393 11.8442 6.394 11.6279C6.32407 11.4116 6.1965 11.2185 6.02502 11.0694L2.50002 7.99594C2.49973 7.9936 2.49973 7.99124 2.50002 7.9889L7.14377 7.58734C7.37049 7.56736 7.58745 7.48585 7.77125 7.35162C7.95505 7.21738 8.09871 7.03551 8.18674 6.82562L10 2.50609L11.8125 6.82562C11.9005 7.03551 12.0442 7.21738 12.228 7.35162C12.4118 7.48585 12.6288 7.56736 12.8555 7.58734L17.5 7.9889V7.99437L17.4985 7.99125Z",
                                      fill: "#FF9966"
                                    }
                                  })
                                ]
                              ),
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
                                      opacity: "0.2",
                                      d:
                                        "M14.3851 11.539C14.2995 11.6143 14.2358 11.7113 14.2009 11.8198C14.1659 11.9284 14.161 12.0443 14.1867 12.1554L15.2429 16.7289C15.2709 16.8483 15.263 16.9733 15.2204 17.0883C15.1777 17.2034 15.1022 17.3033 15.0031 17.3757C14.9041 17.4481 14.786 17.4897 14.6634 17.4954C14.5409 17.5011 14.4194 17.4706 14.314 17.4078L10.3219 14.9859C10.2248 14.9269 10.1135 14.8957 9.99998 14.8957C9.88645 14.8957 9.7751 14.9269 9.6781 14.9859L5.68591 17.4078C5.58058 17.4706 5.45907 17.5011 5.33654 17.4954C5.214 17.4897 5.09585 17.4481 4.99682 17.3757C4.89778 17.3033 4.82223 17.2034 4.77959 17.0883C4.73695 16.9733 4.72909 16.8483 4.75701 16.7289L5.81326 12.1554C5.83893 12.0443 5.83404 11.9284 5.7991 11.8198C5.76416 11.7113 5.70048 11.6143 5.61482 11.539L2.0906 8.46479C1.99638 8.38471 1.92803 8.27849 1.8942 8.15955C1.86038 8.04062 1.86259 7.91432 1.90056 7.79664C1.93853 7.67896 2.01056 7.57519 2.10752 7.49846C2.20449 7.42173 2.32203 7.37548 2.44529 7.36558L7.0906 6.96401C7.20394 6.95392 7.31236 6.91308 7.40419 6.84589C7.49602 6.7787 7.56777 6.68773 7.6117 6.58276L9.42654 2.25776C9.47501 2.14594 9.55512 2.05074 9.65701 1.98386C9.75889 1.91698 9.8781 1.88135 9.99998 1.88135C10.1219 1.88135 10.2411 1.91698 10.3429 1.98386C10.4448 2.05074 10.5249 2.14594 10.5734 2.25776L12.3883 6.58276C12.4322 6.68773 12.5039 6.7787 12.5958 6.84589C12.6876 6.91308 12.796 6.95392 12.9094 6.96401L17.5547 7.36558C17.6779 7.37548 17.7955 7.42173 17.8924 7.49846C17.9894 7.57519 18.0614 7.67896 18.0994 7.79664C18.1374 7.91432 18.1396 8.04062 18.1058 8.15955C18.0719 8.27849 18.0036 8.38471 17.9094 8.46479L14.3851 11.539Z",
                                      fill: "#43423D",
                                      "fill-opacity": "0.7"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("path", {
                                    attrs: {
                                      d:
                                        "M18.6875 7.60062C18.6118 7.36733 18.4692 7.16146 18.2773 7.00865C18.0855 6.85584 17.8529 6.76285 17.6086 6.74125L12.9688 6.34125L11.15 2.01625C11.0553 1.78931 10.8956 1.59546 10.691 1.45911C10.4863 1.32276 10.2459 1.25 10 1.25C9.75412 1.25 9.51371 1.32276 9.30907 1.45911C9.10443 1.59546 8.94471 1.78931 8.85002 2.01625L7.03674 6.34125L2.39142 6.74359C2.14614 6.7642 1.9124 6.85678 1.71952 7.0097C1.52663 7.16262 1.38319 7.36909 1.30718 7.60321C1.23117 7.83733 1.22598 8.08868 1.29225 8.32574C1.35852 8.5628 1.49331 8.77502 1.6797 8.93578L5.20392 12.0155L4.14767 16.5889C4.09182 16.8282 4.10776 17.0787 4.19349 17.309C4.27923 17.5394 4.43095 17.7393 4.6297 17.8839C4.82845 18.0284 5.0654 18.1112 5.31094 18.1218C5.55647 18.1324 5.79968 18.0704 6.01017 17.9436L9.99455 15.5217L13.9875 17.9436C14.198 18.0704 14.4412 18.1324 14.6868 18.1218C14.9323 18.1112 15.1692 18.0284 15.368 17.8839C15.5667 17.7393 15.7185 17.5394 15.8042 17.309C15.8899 17.0787 15.9059 16.8282 15.85 16.5889L14.7945 12.0108L18.318 8.93578C18.5044 8.77446 18.6389 8.56164 18.7046 8.32408C18.7704 8.08651 18.7644 7.83481 18.6875 7.60062ZM17.4985 7.99125L13.975 11.0662C13.8035 11.2154 13.676 11.4085 13.606 11.6248C13.5361 11.841 13.5265 12.0723 13.5781 12.2936L14.6367 16.8748L10.6469 14.453C10.4522 14.3344 10.2287 14.2717 10.0008 14.2717C9.77289 14.2717 9.54937 14.3344 9.35471 14.453L5.37033 16.8748L6.42189 12.2967C6.47357 12.0754 6.46393 11.8442 6.394 11.6279C6.32407 11.4116 6.1965 11.2185 6.02502 11.0694L2.50002 7.99594C2.49973 7.9936 2.49973 7.99124 2.50002 7.9889L7.14377 7.58734C7.37049 7.56736 7.58745 7.48585 7.77125 7.35162C7.95505 7.21738 8.09871 7.03551 8.18674 6.82562L10 2.50609L11.8125 6.82562C11.9005 7.03551 12.0442 7.21738 12.228 7.35162C12.4118 7.48585 12.6288 7.56736 12.8555 7.58734L17.5 7.9889V7.99437L17.4985 7.99125Z",
                                      fill: "#43423D",
                                      "fill-opacity": "0.7"
                                    }
                                  })
                                ]
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(
                              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper pharetra ligula."
                            )
                          ])
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _vm._m(1),
                    _vm._v(" "),
                    _vm._m(2)
                  ]
                )
              ])
            ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _vm.isModalOpen
      ? _c("div", { staticClass: "modal", attrs: { id: "popup-box" } }, [
          _c(
            "div",
            {
              staticStyle: {
                display: "flex",
                "padding-left": "0px",
                "justify-content": "space-evenly"
              }
            },
            [_c("Edit", { on: { cancel: _vm.closeModal } })],
            1
          )
        ])
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mine-card" }, [
      _c("div", { staticClass: "Jobs-card" }, [
        _c("p", [_vm._v("Jobs Completed")]),
        _vm._v(" "),
        _c("h2", [_vm._v("1000+")]),
        _vm._v(" "),
        _c("p", [_vm._v("Completion Rate: "), _c("span", [_vm._v("89%")])])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "Jobs-cards" }, [
        _c("p", [_vm._v("Total Impressions")]),
        _vm._v(" "),
        _c("h2", [_vm._v("24.5k")]),
        _vm._v(" "),
        _c("p", [_vm._v("+11.6% (2817)")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "carousel-control-prev",
        attrs: {
          href: "#carouselExampleControls",
          role: "button",
          "data-slide": "prev"
        }
      },
      [
        _c("span", {
          staticClass: "carousel-control-prev-icon",
          attrs: { "aria-hidden": "true" }
        }),
        _vm._v(" "),
        _c("span", { staticClass: "sr-only" }, [_vm._v("Previous")])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "carousel-control-next",
        attrs: {
          href: "#carouselExampleControls",
          role: "button",
          "data-slide": "next"
        }
      },
      [
        _c("span", {
          staticClass: "carousel-control-next-icon",
          attrs: { "aria-hidden": "true" }
        }),
        _vm._v(" "),
        _c("span", { staticClass: "sr-only" }, [_vm._v("Next")])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/entreform.vue?vue&type=template&id=2c2d89b3&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/entreform.vue?vue&type=template&id=2c2d89b3&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "main-div" }, [
    _c("div", { staticClass: "main-box" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "main-form" }, [
        _c("div", { staticClass: "form-col-1" }),
        _vm._v(" "),
        _c("img", {
          staticClass: "imagestate",
          attrs: {
            src: _vm.selectedImage
              ? _vm.selectedImage
              : "/uploads/" + _vm.form.image,
            alt: ""
          }
        }),
        _vm._v(" "),
        _c("input", {
          ref: "fileInput",
          staticStyle: { display: "none" },
          attrs: { type: "file" },
          on: { change: _vm.handleFileChange }
        }),
        _vm._v(" "),
        _c("img", {
          staticStyle: {
            position: "relative",
            "z-index": "1",
            cursor: "pointer"
          },
          attrs: { src: "/images/tabler_edit.png", alt: "" },
          on: { click: _vm.openFileInput }
        }),
        _vm._v(" "),
        _c("div", { staticClass: "form-col-2" }, [
          _c("div", { staticClass: "input-box" }, [
            _c("div", { staticClass: "input-group" }, [
              _c("label", { attrs: { for: "text" } }, [
                _vm._v("Edit Username")
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.user_name,
                    expression: "form.user_name"
                  }
                ],
                attrs: { type: "text", placeholder: "@alex" },
                domProps: { value: _vm.form.user_name },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.form, "user_name", $event.target.value)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "input-group" }, [
              _c("label", { attrs: { for: "text" } }, [_vm._v("Edit Email")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.email,
                    expression: "form.email"
                  }
                ],
                attrs: { type: "text", placeholder: "Alex@someone.com" },
                domProps: { value: _vm.form.email },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.form, "email", $event.target.value)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "input-group-1" }, [
              _c("label", { attrs: { for: "text" } }, [_vm._v("Edit Bio")]),
              _vm._v(" "),
              _c("textarea", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.bio,
                    expression: "form.bio"
                  }
                ],
                attrs: { type: "text" },
                domProps: { value: _vm.form.bio },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.form, "bio", $event.target.value)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "input-3" }, [
              _c("label", { attrs: { for: "text" } }, [
                _vm._v("Provide Social Media Handles")
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.facebook,
                    expression: "form.facebook"
                  }
                ],
                staticClass: "icon-input1",
                attrs: { type: "text", placeholder: "" },
                domProps: { value: _vm.form.facebook },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.form, "facebook", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.instagram,
                    expression: "form.instagram"
                  }
                ],
                staticClass: "icon-input2",
                attrs: { type: "text", placeholder: "" },
                domProps: { value: _vm.form.instagram },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.form, "instagram", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.linkdin,
                    expression: "form.linkdin"
                  }
                ],
                staticClass: "icon-input3",
                attrs: { type: "text", placeholder: "" },
                domProps: { value: _vm.form.linkdin },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.form, "linkdin", $event.target.value)
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("div", { staticClass: "buttons" }, [
            _c(
              "button",
              {
                staticClass: "Hire",
                staticStyle: { "background-color": "#f96", color: "white" },
                on: { click: _vm.save }
              },
              [
                _vm._v("Edit Profile"),
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
                          "M2.51279 5.45247C3.05059 5.44296 3.53656 5.41538 4.0192 5.49859C4.07008 5.50715 4.12904 5.4791 4.18278 5.46293C4.44763 5.38304 4.71344 5.37211 4.98305 5.44106C5.21748 5.50097 5.45666 5.44961 5.69394 5.46721C6.06008 5.49431 6.42432 5.39541 6.78809 5.41395C7.08433 5.42917 7.3839 5.42441 7.67824 5.47054C7.82755 5.49384 7.96877 5.50192 8.12141 5.46341C8.28736 5.42204 8.45189 5.52142 8.62402 5.52142C8.81328 5.52142 8.99968 5.56897 9.18132 5.62318C9.38484 5.68357 9.43619 5.86806 9.28784 6.01785C9.06149 6.24657 8.76573 6.3469 8.4595 6.3916C8.20605 6.42869 7.94738 6.45008 7.69203 6.4634C7.42194 6.47719 7.14995 6.57039 6.87605 6.48004C6.82898 6.46435 6.77049 6.46102 6.72294 6.47386C6.40435 6.56136 6.07292 6.50239 5.75195 6.56516C5.65305 6.58465 5.54463 6.578 5.44382 6.56231C5.30402 6.54043 5.16993 6.54424 5.03679 6.58798C4.86656 6.64409 4.69728 6.57277 4.52657 6.57609C4.35396 6.57942 4.18278 6.5856 4.0192 6.62697C3.76195 6.69259 3.50613 6.65598 3.25553 6.62935C3.02919 6.60558 2.81093 6.62555 2.58792 6.63125C2.37727 6.63696 2.15711 6.65503 1.94979 6.61842C1.71441 6.57657 1.61217 6.36164 1.52611 6.16525C1.44907 5.98932 1.55749 5.8595 1.67589 5.73302C1.8504 5.54614 2.05154 5.44628 2.3107 5.46388C2.39534 5.46958 2.48141 5.45389 2.51422 5.45199L2.51279 5.45247Z",
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
    return _c("div", { staticClass: "logo-from" }, [
      _c("img", { attrs: { src: "/images/logo.png", alt: "" } })
    ])
  }
]
render._withStripped = true



/***/ })

}]);