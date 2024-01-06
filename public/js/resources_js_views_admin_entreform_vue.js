(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_admin_entreform_vue"],{

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

/***/ "./resources/js/views/admin/entreform.vue?vue&type=style&index=0&id=2c2d89b3&scoped=true&lang=css&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/views/admin/entreform.vue?vue&type=style&index=0&id=2c2d89b3&scoped=true&lang=css& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_entreform_vue_vue_type_style_index_0_id_2c2d89b3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./entreform.vue?vue&type=style&index=0&id=2c2d89b3&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/entreform.vue?vue&type=style&index=0&id=2c2d89b3&scoped=true&lang=css&");


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