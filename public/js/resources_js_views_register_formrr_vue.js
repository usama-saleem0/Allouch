(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_register_formrr_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/branddetail.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/branddetail.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _businesstype_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./businesstype.vue */ "./resources/js/views/register/businesstype.vue");
/* harmony import */ var _admin_components_lib_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../admin/components/lib/api */ "./resources/js/views/admin/components/lib/api.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Type: _businesstype_vue__WEBPACK_IMPORTED_MODULE_0__.default
  },
  data: function data() {
    return {
      method: 'POST',
      isModalOpens: true,
      type: false,
      showss: true,
      form: {}
    };
  },
  methods: {
    closeModal: function closeModal() {
      console.log('avcd');
      this.showss = false;
      $('#popup-box').modal('hide');
    },
    save: function save() {
      var _this = this;

      this.form.userId = this.userId;
      (0,_admin_components_lib_api__WEBPACK_IMPORTED_MODULE_1__.byMethod)(this.method, 'brand_register', this.form).then(function (res) {
        if (res.data.data) {
          // console.log(res.data.data.id)
          _this.user_id = res.data.data.user_id;
          _this.showss = false;
          _this.type = true; // this.$router.push(`/register/company/${this.company_id}`);
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/formr.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/formr.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _admin_components_lib_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../admin/components/lib/api */ "./resources/js/views/admin/components/lib/api.js");
/* harmony import */ var _register_profile_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../register/profile.vue */ "./resources/js/views/register/profile.vue");
/* harmony import */ var _branddetail_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./branddetail.vue */ "./resources/js/views/register/branddetail.vue");
/* harmony import */ var vue_sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-sweetalert2 */ "./node_modules/vue-sweetalert2/dist/vue-sweetalert.umd.js");
/* harmony import */ var vue_sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var sweetalert2_dist_sweetalert2_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.min.css */ "./node_modules/sweetalert2/dist/sweetalert2.min.css");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Form",
  components: {
    Upload: _register_profile_vue__WEBPACK_IMPORTED_MODULE_1__.default,
    Brand: _branddetail_vue__WEBPACK_IMPORTED_MODULE_2__.default,
    VueSweetalert2: (vue_sweetalert2__WEBPACK_IMPORTED_MODULE_3___default())
  },
  data: function data() {
    return {
      bgColor1: '#FFF',
      bgColor2: '#FFF',
      shows: true,
      uploads: false,
      brand: false,
      form: {},
      method: 'POST',
      user_name: "",
      email: "",
      password: "",
      user_id: "",
      contact: "",
      auth_type: "",
      isLoading: false
    };
  },
  methods: {
    // datas(e){
    //     this.auth = e;
    // },
    closeModal: function closeModal() {
      console.log('avcd');
      this.shows = false;
      $('#popup-box').modal('hide');
    },
    auths: function auths(e) {
      this.auth_type = e;

      if (e == 'Influencer') {
        this.bgColor1 = '#F96';
        this.bgColor2 = '#FFF';
      }

      if (e == 'Brand') {
        this.bgColor1 = '#FFF';
        this.bgColor2 = '#F96';
      }
    },
    save: function save() {
      var _this = this;

      this.form.user_name = this.user_name;
      this.form.email = this.email;
      this.form.contact = this.contact;
      this.form.password = this.password;
      this.form.auth_type = this.auth_type; // console.log(this.form);

      (0,_admin_components_lib_api__WEBPACK_IMPORTED_MODULE_0__.byMethod)(this.method, 'register', this.form).then(function (res) {
        console.log(res);

        if (res.data.data.auth_type == 'Influencer') {
          console.log(res.data.data.id);
          _this.user_id = res.data.data.id;
          _this.shows = false;
          _this.uploads = true; // this.$router.push(`/register/company/${this.company_id}`);
        }

        if (res.data.data.auth_type == 'Brand') {
          console.log(res.data.data.id);
          _this.user_id = res.data.data.id;
          _this.shows = false;
          _this.brand = true; // this.$router.push(`/register/company/${this.company_id}`);
        }

        if (res.data.data.auth_type == null) {
          _this.$swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'PLease Select Influencer or Brand for Registration',
            // Set the position to top-end for the toast
            showConfirmButton: false,
            // Hide the "OK" button for the toast
            timer: 3000,
            // Adjust the timer (milliseconds) for how long the toast will be shown
            timerProgressBar: true
          });
        }
      })["catch"](function (error) {
        if (error.response.status === 422) {
          console.log(error.response.data.errors.email[0]);
          var dynamic = error.response.data.errors.email[0];

          _this.$swal.fire({
            icon: 'error',
            title: 'Error',
            text: "".concat(dynamic),
            // Set the position to top-end for the toast
            showConfirmButton: false,
            // Hide the "OK" button for the toast
            timer: 3000,
            // Adjust the timer (milliseconds) for how long the toast will be shown
            timerProgressBar: true
          });

          _this.errors = error.response.data.errors;
        }

        _this.isProcessing = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/formrr.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/formrr.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _register_formr_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../register/formr.vue */ "./resources/js/views/register/formr.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Form",
  components: {
    Singup: _register_formr_vue__WEBPACK_IMPORTED_MODULE_2__.default
  },
  data: function data() {
    return {
      bgColor1: '#FFF',
      bgColor2: '#FFF',
      show: true,
      singups: false,
      email: "",
      password: "",
      auth: "",
      verificationStatus: this.$route.query.verification_status ? true : false,
      verificationMessage: '',
      verificationAlertClasses: {
        'alert-success': false,
        'alert-danger': false
      }
    };
  },
  created: function created() {
    if (this.$route.query.verification_status === "success") {
      this.verificationMessage = "Your account has been verified. Please log in.";
      this.verificationAlertClasses['alert-success'] = true;
    } else if (this.$route.query.verification_status === "error") {
      this.verificationMessage = "Your account could not be verified.";
      this.verificationAlertClasses['alert-danger'] = true;
    }
  },
  methods: {
    datas: function datas(e) {
      this.auth = e;

      if (e == 'Influencer') {
        this.bgColor1 = '#F96';
        this.bgColor2 = '#FFF';
      }

      if (e == 'Brand') {
        this.bgColor1 = '#FFF';
        this.bgColor2 = '#F96';
      }
    },
    login: function login() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var response, dynamic;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().post("login", {
                  email: _this.email,
                  password: _this.password,
                  auttype: _this.auth
                });

              case 3:
                response = _context.sent;
                localStorage.setItem("token", response.data.token);

                _this.$store.dispatch("user", response.data.user);

                _this.$emit('cancel');

                if (response.data.user.auth_type == 'Influencer') {
                  console.log(response.data.user.auth_type);

                  _this.$router.push("/influncer/dashborad").then(function () {
                    location.reload();
                  });

                  ;
                }

                if (response.data.user.auth_type == 'Brand') {
                  console.log(response.data.user.auth_type);

                  _this.$router.push("/Branddashoboard").then(function () {
                    location.reload();
                  });

                  ;
                }

                _context.next = 16;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0.response.data.message);
                dynamic = _context.t0.response.data.message;

                _this.$swal.fire({
                  icon: 'error',
                  title: 'Error',
                  text: "".concat(dynamic),
                  // Set the position to top-end for the toast
                  showConfirmButton: false,
                  // Hide the "OK" button for the toast
                  timer: 3000,
                  // Adjust the timer (milliseconds) for how long the toast will be shown
                  timerProgressBar: true
                }); // notify.authError(error);


              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 11]]);
      }))();
    },
    singup: function singup() {
      console.log('cdcdcdcd');
      this.show = false;
      this.singups = true; // $('#popup-box').modal('hide');
      // $('#popup-boxs').modal('show');
    },
    closeModal: function closeModal() {
      console.log('avcd');
      this.shows = false;
      $('#popup-box').modal('hide');
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/profile.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/profile.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _admin_components_lib_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../admin/components/lib/api */ "./resources/js/views/admin/components/lib/api.js");
/* harmony import */ var _register_formz_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../register/formz.vue */ "./resources/js/views/register/formz.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Final: _register_formz_vue__WEBPACK_IMPORTED_MODULE_1__.default
  },
  props: {
    userId: {
      type: Number,
      required: true
    }
  },
  data: function data() {
    return {
      method: 'POST',
      imageUrl: null,
      file: null,
      form: {},
      showss: true,
      "final": false
    };
  },
  methods: {
    closeModal: function closeModal() {
      console.log('avcd');
      this.shows = false;
      $('#popup-box').modal('hide');
      window.location.reload();
    },
    handleFileChange: function handleFileChange(event) {
      this.file = event.target.files[0];
      this.imageUrl = URL.createObjectURL(this.file);
      console.log(this.imageUrl);
    },
    onDragOver: function onDragOver(event) {
      event.preventDefault();
    },
    onDrop: function onDrop(event) {
      event.preventDefault();
      this.file = event.dataTransfer.files[0];
      this.imageUrl = URL.createObjectURL(this.file);
    },
    openFileDialog: function openFileDialog() {
      //   document.getElementById('file-input').click();
      this.$refs.fileInput.click();
    },
    save: function save() {
      var _this = this;

      var formData = new FormData();
      formData.append('image', this.file);
      formData.append('bio', this.form.bio);
      formData.append('facebook', this.form.facebook);
      formData.append('instagram', this.form.instagram);
      formData.append('linkdin', this.form.linkdin);
      formData.append('user_id', this.userId);
      (0,_admin_components_lib_api__WEBPACK_IMPORTED_MODULE_0__.byMethod)(this.method, '/api/profile', formData).then(function (res) {
        if (res.data.data) {
          console.log(res.data.data);
          _this.showss = false;
          _this["final"] = true; // this.$router.push('/brands');
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/sweetalert2/dist/sweetalert2.min.css":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/sweetalert2/dist/sweetalert2.min.css ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:-webkit-min-content auto -webkit-min-content;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:\"top-start     top            top-end\" \"center-start  center         center-end\" \"bottom-start  bottom-center  bottom-end\";grid-template-rows:minmax(-webkit-min-content, auto) minmax(-webkit-min-content, auto) minmax(-webkit-min-content, auto);grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:rgba(0,0,0,.4)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em;text-align:center}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em}div:where(.swal2-container) button:where(.swal2-close){z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) .swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::-moz-placeholder, div:where(.swal2-container) input:where(.swal2-file)::-moz-placeholder, div:where(.swal2-container) textarea:where(.swal2-textarea)::-moz-placeholder{color:#ccc}div:where(.swal2-container) input:where(.swal2-input):-ms-input-placeholder, div:where(.swal2-container) input:where(.swal2-file):-ms-input-placeholder, div:where(.swal2-container) textarea:where(.swal2-textarea):-ms-input-placeholder{color:#ccc}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:#fff}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:\"!\";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#facea8;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-i-mark .5s;animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#9de0f6;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-i-mark .8s;animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#c9dae1;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-question-mark .8s;animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@-webkit-keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@-webkit-keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@-webkit-keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@-webkit-keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/branddetail.vue?vue&type=style&index=0&id=10ef68ab&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/branddetail.vue?vue&type=style&index=0&id=10ef68ab&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n*[data-v-10ef68ab]{\n        padding: 0;\n        margin: 0;\n        box-sizing: border-box;\n}\nsection.form-1-sec[data-v-10ef68ab] {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n.main-form[data-v-10ef68ab] {\n    width: 100%;\n    height: 900px;\n    border-radius: 50px;\n    background-image: url(/images/Up.png);\n    position: relative;\n    display: flex;\n    justify-content: space-between;\n    flex-wrap: wrap;\n    gap: 40px 0px;\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n}\n.form-img[data-v-10ef68ab] {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.form-titel[data-v-10ef68ab] {\n    width: 30%;\n    display: flex;\n    justify-content: flex-end;\n}\n.form-img img[data-v-10ef68ab] {\n    width: 19%;\n}\n.form-titel h2[data-v-10ef68ab] {\n    color: #1C1D1E;\n    font-family: sans-serif;\n    font-size: 32px;\n    font-style: normal;\n    font-weight: 800;\n    line-height: normal;\n}\n.form-box[data-v-10ef68ab] {\n    width: 66%;\n}\n.form-1[data-v-10ef68ab] {\n    width: 63%;\n    height: 703px;\n    flex-shrink: 0;\n    border-radius: 40px;\n    background: #FFF;\n    box-shadow: 0px 4px 35px 0px rgba(0, 0, 0, 0.08);\n    z-index: 1;\n    position: relative;\n    padding: 50px 45px;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: space-between;\n}\n.form-box img[data-v-10ef68ab] {\n    position: absolute;\n    left: 205px;\n    bottom: 0px;\n}\n.input-group-1[data-v-10ef68ab] {\n    width: 46%;\n    display: flex;\n    flex-direction: column;\n}\n.input-group-2[data-v-10ef68ab] {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n}\n.input-group-1 label[data-v-10ef68ab] {\n    color: #000;\n    font-family: sans-serif;\n    font-size: 18px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n    padding-bottom: 10px;\n}\n.input-group-1 input[data-v-10ef68ab] {\n    border-radius: 9px;\n    border: 1px solid #ADADAD;\n    background: #FFF;\n    color: #808080;\n    font-family: sans-serif;\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 300;\n    line-height: normal;\n    padding: 15px;\n}\n.input-group-2 label[data-v-10ef68ab] {\n    color: #000;\n    font-family: sans-serif;\n    font-size: 18px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n    padding-bottom: 10px;\n}\n.input-group-2 input[data-v-10ef68ab] {\n    border-radius: 9px;\n    border: 1px solid #ADADAD;\n    background: #FFF;\n    color: #808080;\n    font-family: sans-serif;\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 300;\n    line-height: normal;\n    padding: 15px;\n}\nbutton.form-btn[data-v-10ef68ab] {\n    width: 100%;\n    display: flex;\n    height: 44px;\n    padding: 10px 0px;\n    justify-content: center;\n    align-items: center;\n    gap: 7.647px;\n    flex-shrink: 0;\n    border-radius: 6px;\n    border: 1px solid #000;\n    background: #F96;\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\n}\nbutton.form-btn p[data-v-10ef68ab] {color: #FFF;text-align: center;font-family: sans-serif;font-size: 16px;font-style: normal;font-weight: 700;line-height: 24px; /* 150% */}\na.form-last[data-v-10ef68ab] {\n    width: 60%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-decoration: none;\n    gap: 14px;\n    padding-top:30px;\n}\na.form-last p[data-v-10ef68ab] {\n    color: #000;\n    font-family: Anton;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: normal;\n    cursor: pointer;\n}\n@media screen and (max-width: 1600px){\n.main-form[data-v-10ef68ab] {\n    width: 100%;\n    height: 785px;\n    border-radius: 50px;\n    background-image: url(/images/Up.png);\n    position: relative;\n    display: flex;\n    justify-content: space-between;\n    flex-wrap: wrap;\n    gap: 40px 0px;\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n}\n.form-1[data-v-10ef68ab] {\n    width: 65%;\n    height: 600px;\n    flex-shrink: 0;\n    border-radius: 30px;\n    background: #FFF;\n    box-shadow: 0px 4px 35px 0px rgba(0, 0, 0, 0.08);\n    z-index: 1;\n    position: relative;\n    padding: 30px 30px;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: space-between;\n}\n.form-box img[data-v-10ef68ab] {\n    position: absolute;\n    left: 160px;\n    bottom: 0px;\n    width: 32%;\n}\n.form-titel h2[data-v-10ef68ab] {\n    color: #1C1D1E;\n    font-family: sans-serif;\n    font-size: 30px;\n    font-style: normal;\n    font-weight: 800;\n    line-height: normal;\n}\n}\n@media screen and (max-width: 1440px){\n.main-form[data-v-10ef68ab] {\n    width: 100%;\n    height: 650px;\n    border-radius: 50px;\n    background-image: url(/images/Up.png);\n    position: relative;\n    display: flex;\n    justify-content: space-between;\n    flex-wrap: wrap;\n    gap: 40px 0px;\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n}\n.form-1[data-v-10ef68ab] {\n    width: 63%;\n    height: 480px;\n    flex-shrink: 0;\n    border-radius: 29px;\n    background: #FFF;\n    box-shadow: 0px 4px 35px 0px rgba(0, 0, 0, 0.08);\n    z-index: 1;\n    position: relative;\n    padding: 20px 20px;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: space-between;\n}\na.form-last[data-v-10ef68ab] {\n    width: 60%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-decoration: none;\n    gap: 14px;\n    padding-top: 15px;\n}\n.input-group-1 label[data-v-10ef68ab] {\n    color: #000;\n    font-family: sans-serif;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n    padding-bottom: 5px;\n}\n.input-group-2 label[data-v-10ef68ab] {\n    color: #000;\n    font-family: sans-serif;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n    padding-bottom: 5px;\n}\n.input-group-2 input[data-v-10ef68ab] {\n    border-radius: 5px;\n    border: 1px solid #ADADAD;\n    background: #FFF;\n    color: #808080;\n    font-family: sans-serif;\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 300;\n    line-height: normal;\n    padding: 10px;\n}.input-group-1 input[data-v-10ef68ab] {\n    border-radius: 5px;\n    border: 1px solid #ADADAD;\n    background: #FFF;\n    color: #808080;\n    font-family: sans-serif;\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 300;\n    line-height: normal;\n    padding: 10px;\n}\nbutton.form-btn[data-v-10ef68ab] {\n    width: 100%;\n    display: flex;\n    height: 42px;\n    padding: 10px 0px;\n    justify-content: center;\n    align-items: center;\n    gap: 7.647px;\n    flex-shrink: 0;\n    border-radius: 6px;\n    border: 1px solid #000;\n    background: #F96;\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\n}\na.form-last svg[data-v-10ef68ab] {\n    width: 30px;\n    height: 30px;\n}\n}\n@media screen and (max-width: 1366px){\n.main-form[data-v-10ef68ab] {\n    width: 100%;\n    height: 560px;\n    border-radius: 44px;\n    background-image: url(/images/Up.png);\n    position: relative;\n    display: flex;\n    justify-content: space-between;\n    flex-wrap: wrap;\n    gap: 30px 0px;\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n}\n.form-1[data-v-10ef68ab] {\n    width: 63%;\n    height: 420px;\n    flex-shrink: 0;\n    border-radius: 24px;\n    background: #FFF;\n    box-shadow: 0px 4px 35px 0px rgba(0, 0, 0, 0.08);\n    z-index: 1;\n    position: relative;\n    padding: 20px;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: space-between;\n}\n.input-group-1 label[data-v-10ef68ab] {\n    color: #000;\n    font-family: sans-serif;\n    font-size: 12px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n    padding-bottom: 5px;\n}\n.input-group-2 label[data-v-10ef68ab] {\n    color: #000;\n    font-family: sans-serif;\n    font-size: 12px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n    padding-bottom: 5px;\n}\n.input-group-2 input[data-v-10ef68ab] {\n    border-radius: 5px;\n    border: 1px solid #ADADAD;\n    background: #FFF;\n    color: #808080;\n    font-family: sans-serif;\n    font-size: 12px;\n    font-style: normal;\n    font-weight: 300;\n    line-height: normal;\n    padding: 8px;\n}\nbutton.form-btn p[data-v-10ef68ab] {\n    color: #FFF;\n    text-align: center;\n    font-family: sans-serif;\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: 26px;\n}\nbutton.form-btn[data-v-10ef68ab] {\n    width: 100%;\n    display: flex;\n    height: 38px;\n    padding: 8px 0px;\n    justify-content: center;\n    align-items: center;\n    gap: 7.647px;\n    flex-shrink: 0;\n    border-radius: 6px;\n    border: 1px solid #000;\n    background: #F96;\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\n}\n.input-group-1 input[data-v-10ef68ab] {\n    border-radius: 5px;\n    border: 1px solid #ADADAD;\n    background: #FFF;\n    color: #808080;\n    font-family: sans-serif;\n    font-size: 12px;\n    font-style: normal;\n    font-weight: 300;\n    line-height: normal;\n    padding: 8px;\n}\n.form-box img[data-v-10ef68ab] {\n    position: absolute;\n    left: 162px;\n    bottom: 0px;\n    width: 27%;\n}\na.form-last svg[data-v-10ef68ab] {\n    width: 20px;\n    height: 20px;\n}\na.form-last[data-v-10ef68ab] {\n    width: 60%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-decoration: none;\n    gap: 10px;\n    padding-top: 15px;\n}\na.form-last p[data-v-10ef68ab] {\n    color: #000;\n    font-family: Anton;\n    font-size: 12px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: normal;\n    cursor: pointer;\n}\n}\n@media screen and (max-width: 768px){\n.form-1[data-v-10ef68ab] {\n    width: 68%;\n    height: 420px;\n    flex-shrink: 0;\n    border-radius: 24px;\n    background: #FFF;\n    box-shadow: 0px 4px 35px 0px rgba(0, 0, 0, 0.08);\n    z-index: 1;\n    position: relative;\n    padding: 20px;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: space-between;\n}\nbutton.form-btn[data-v-10ef68ab]{\n    width: 100%;\n    display: flex;\n    height: 32px;\n    padding: 8px 0px;\n    justify-content: center;\n    align-items: center;\n    gap: 7.647px;\n    flex-shrink: 0;\n    border-radius: 6px;\n    border: 1px solid #000;\n    background: #F96;\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\n}\n.main-form[data-v-10ef68ab] {\n    width: 100%;\n    height: 100%;\n    border-radius: 25px;\n    background-image: url(/images/Up.png);\n    position: relative;\n    display: flex;\n    justify-content: space-between;\n    flex-wrap: wrap;\n    gap: 30px 0px;\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n    padding-top: 12px;\n}\n.form-titel h2[data-v-10ef68ab] {\n    color: #1C1D1E;\n    font-family: sans-serif;\n    font-size: 24px;\n    font-style: normal;\n    font-weight: 800;\n    line-height: normal;\n}\n.form-box img[data-v-10ef68ab] {\n    position: absolute;\n    left: 90px;\n    bottom: 0px;\n    width: 35%;\n}\n}\n@media screen and (max-width: 425px){\n.main-form[data-v-10ef68ab] {\n    width: 100%;\n    height: 100%;\n    border-radius: 25px;\n    background-image: url(/images/Up.png);\n    position: relative;\n    display: flex;\n    justify-content: space-between;\n    flex-wrap: wrap;\n    gap: 20px 0px;\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n    padding: 12px 0px;\n}\n.form-box[data-v-10ef68ab] {\n    width: 100%;\n    padding: 0px 20px;\n}\n.form-img img[data-v-10ef68ab] {\n    width: 35%;\n}\n.form-1[data-v-10ef68ab] {\n    width: 100%;\n    height: 420px;\n    flex-shrink: 0;\n    border-radius: 24px;\n    background: #FFF;\n    box-shadow: 0px 4px 35px 0px rgba(0, 0, 0, 0.08);\n    z-index: 1;\n    position: relative;\n    padding: 20px;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: space-between;\n}\n.form-box img[data-v-10ef68ab] {\n    position: absolute;\n    left: 90px;\n    bottom: 0px;\n    width: 35%;\n    display: none;\n}\na.form-last[data-v-10ef68ab] {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-decoration: none;\n    gap: 10px;\n    padding-top: 15px;\n}\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/formr.vue?vue&type=style&index=0&id=0ea660fe&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/formr.vue?vue&type=style&index=0&id=0ea660fe&scoped=true&lang=css& ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\n*[data-v-0ea660fe]{\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\nsection.form-2-sec[data-v-0ea660fe] {\n    width: 100%;\n}\n.main-form[data-v-0ea660fe] {\n    width: 100%;\n    height: 900px;\n    background-image: url(/images/Up.png);\n    padding: 10px 40px;\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n}\n.main-box[data-v-0ea660fe] {\n    width: 100%;\n    display: flex;\n    position: relative;\n    gap: 225px;\n    justify-content: space-between;\n    flex-direction: column;\n}s\n\n.logo-from[data-v-0ea660fe] {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.from-titel[data-v-0ea660fe] {width: 32%;padding-top: 60px;}\n.from-box[data-v-0ea660fe] {\n    width: 44%;\n    position: absolute;\n    z-index: 1;\n    right: 0px;\n    display: flex;\n    top: 35px;\n    align-items: center;\n}\n.from-card[data-v-0ea660fe] {\n    width: 40%;\n}\n.from-titel h1[data-v-0ea660fe] {\n    color: #1C1D1E;\n    font-family: sans-serif;\n    font-size: 34px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: normal;\n}\n.from-titel h3[data-v-0ea660fe] {\n    color: #1B1C1D;\n    font-family: sans-serif;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 40px;\n    font-size: 24px;\n    padding: 8px 0px;\n}\n.from-titel p[data-v-0ea660fe] {\n    color: #1B1C1D;\n  \n    font-size: 13px;\n    font-style: normal;\n    font-weight: 300;\n    line-height: normal;\n}\n.from-titel form[data-v-0ea660fe] {\n    width: 533px;\n    height: 703px;\n    flex-shrink: 0;\n    border-radius: 40px;\n    background: #FFF;\n    box-shadow: 0px 4px 35px 0px rgba(0, 0, 0, 0.08);\n}\n.form[data-v-0ea660fe] {\n    border-radius: 40px;\n    background: #FFF;\n    box-shadow: 0px 4px 35px 0px rgba(0, 0, 0, 0.08);\n    width: 100%;\n    height: 703px;\n    flex-shrink: 0;\n    z-index: 1;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    align-items: center;\n    padding: 30px;\n}\n.from-box img[data-v-0ea660fe] {position: absolute;right: 315px;top: 30px; width: 90%;}\n.card-box[data-v-0ea660fe] {\n    width: 100%;\n    display: flex;\n    gap: 20px;\n    align-items: center;\n    padding: 24px 0px;\n}\n.card[data-v-0ea660fe] {\n    width: 145px;\n    height: 164px;\n    flex-shrink: 0;\n    border-radius: 9px;\n    background: #F96;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n.card img[data-v-0ea660fe] {\n    width: 50%;\n}\n.card h2[data-v-0ea660fe] {\n    color: #1B1C1D;\n    font-family: sans-serif;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: normal;\n    padding: 5px 0px;\n}\n.card p[data-v-0ea660fe] {\n    color: #1B1C1D;\n    font-family: Poppins;\n    font-size: 13px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n}\n.from-card h2[data-v-0ea660fe] {\n    color: #000;\n    font-family: sans-serif;\n    font-size: 18px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n}\n.from-card a[data-v-0ea660fe] {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n}\n.from-card a p[data-v-0ea660fe] {\n    color: #000;\n    font-family: Anton;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n}\n.fromr-btn[data-v-0ea660fe] {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    gap: 10px;\n}\n.input-group[data-v-0ea660fe] {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n}\n.input-group-1[data-v-0ea660fe] {\n    width: 48%;\n    display: flex;\n    flex-direction: column;\n}\n.input-group-1 label[data-v-0ea660fe] {\n    color: #000;\n    font-family: sans-serif;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n    padding-bottom: 10px;\n}\n.input-group-1 input[data-v-0ea660fe] {\n    border-radius: 9px;\n    border: 1px solid #ADADAD;\n    background: #FFF;\n    padding: 20px;\n}\n.input-group label[data-v-0ea660fe] {\n    color: #000;\n    font-family: sans-serif;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n    padding-bottom: 10px;\n}\n.input-group input[data-v-0ea660fe] {\n    border-radius: 9px;\n    border: 1px solid #ADADAD;\n    background: #FFF;\n    padding: 20px;\n}\nbutton.button-20[data-v-0ea660fe] {\n    width: 100%;\n    border-radius: 6px;\n    border: 1px solid #000;\n    background: #F96;\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\n    display: flex;\n    height: 44px;\n    padding: 10px 0px;\n    justify-content: center;\n    align-items: center;\n    gap: 7.647px;\n    flex-shrink: 0;\n}\nbutton.button-20 p[data-v-0ea660fe] {\n    color: #FFF;\n    text-align: center;\n    font-family: DM Sans;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: 24px; /* 150% */\n}\nform.form-main h2[data-v-0ea660fe] {\n    color: #1B1C1D;\n    font-family: sans-serif;\n    font-size: 55px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: normal;\n    margin: 0px;\n}\nbutton.Influencer[data-v-0ea660fe] {\n    border-radius: 6px;\n    border: 1px solid #000;\n    /* background: #FFF; */\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\n    padding: 11px 10px 9px 10px;\n    color: #000;\n    text-align: center;\n    font-family: sans-serif;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: 24px; /* 150% */\n}\nbutton.Brand[data-v-0ea660fe] {\n    border-radius: 6px;\n    border: 1px solid #000;\n    /* background: #F96; */\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\n    padding: 11px 26px 9px 26px;\n    color: black;\n    text-align: center;\n    font-family: sans-serif;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: 24px; /* 150% */\n}\n.fromr-btn a[data-v-0ea660fe] {\n    color: gray;\n    width: 32%;\n}\n.fromr-btn a span[data-v-0ea660fe] {\n    color: #F96;\n}\n.button-main[data-v-0ea660fe] {\n    border-radius: 6px;\n    border: 1px solid #000;\n    background: #F96;\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 20px;\n    height: 44px;\n    color: #FFF;\n    text-align: center;\n    font-family: sans-serif;\n    font-weight: 700;\n    line-height: 24px; /* 150% */\n}\n@media screen and (max-width: 1600px){\n.main-form[data-v-0ea660fe] {\n    width: 100%;\n    height: 785px;\n    background-image: url(/images/Up.png);\n    padding: 10px 40px;\n    border-radius: 50px;\n}\n.input-group-1 input[data-v-0ea660fe] {\n    border-radius: 9px;\n    border: 1px solid #ADADAD;\n    background: #FFF;\n    padding: 15px;\n}\n.fromr-btn a[data-v-0ea660fe] {\n    color: gray;\n    width: 32%;\n    font-size: 14px;\n}\n.from-titel h1[data-v-0ea660fe] {\n    color: #1C1D1E;\n    font-family: sans-serif;\n    font-size: 32px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: normal;\n}\n.from-titel[data-v-0ea660fe] {\n    width: 38%;\n    padding-top: 60px;\n}\n.main-box[data-v-0ea660fe]{\n    width: 100%;\n    display: flex;\n    position: relative;\n    gap: 140px;\n    justify-content: space-between;\n    flex-direction: column;\n}\n.form[data-v-0ea660fe] {\n    border-radius: 40px;\n    background: #FFF;\n    box-shadow: 0px 4px 35px 0px rgba(0, 0, 0, 0.08);\n    width: 100%;\n    height: 615px;\n    flex-shrink: 0;\n    z-index: 1;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    align-items: center;\n    padding: 25px;\n}\nbutton.Influencer[data-v-0ea660fe] {\n    border-radius: 6px;\n    border: 1px solid #000;\n\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\n    padding: 8px 8px 8px 8px;\n    color: #000;\n    text-align: center;\n    font-family: sans-serif;\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: 24px;\n}\nbutton.Brand[data-v-0ea660fe] {\n    border-radius: 6px;\n    border: 1px solid #000;\n\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\n    padding: 8px 20px 8px 20px;\n    color: black;\n    text-align: center;\n    font-family: sans-serif;\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: 24px;\n}\n.input-group input[data-v-0ea660fe] {\n    border-radius: 9px;\n    border: 1px solid #ADADAD;\n    background: #FFF;\n    padding: 15px;\n}\n.from-box img[data-v-0ea660fe] {\n    position: absolute;\n    right: 250px;\n    top: 110px;\n    width: 90%;\n}\n.from-box[data-v-0ea660fe] {\n    width: 40%;\n    position: absolute;\n    z-index: 1;\n    right: 0px;\n    display: flex;\n    top: 35px;\n    align-items: center;\n}\n}\n@media screen and (max-width: 1440px){\n.from-titel h1[data-v-0ea660fe] {\n    color: #1C1D1E;\n    font-family: sans-serif;\n    font-size: 28px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: normal;\n}\n.input-group-1 input[data-v-0ea660fe] {\n    border-radius: 9px;\n    border: 1px solid #ADADAD;\n    background: #FFF;\n    padding: 10px;\n}\n.input-group-1 label[data-v-0ea660fe] {\n    color: #000;\n    font-family: sans-serif;\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n    padding-bottom: 10px;\n}\n.fromr-btn a[data-v-0ea660fe] {\n    color: gray;\n    width: 32%;\n    font-size: 12px;\n}\n.from-titel h3[data-v-0ea660fe] {\n    color: #1B1C1D;\n    font-family: sans-serif;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 30px;\n    font-size: 20px;\n    padding: 8px 0px;\n}\n.main-form[data-v-0ea660fe] {\n    width: 100%;\n    height: 650px;\n    background-image: url(/images/Up.png);\n    padding: 10px 30px;\n    border-radius: 50px;\n}\nbutton.Influencer[data-v-0ea660fe] {\n    border-radius: 6px;\n    border: 1px solid #000;\n    /* background: #FFF; */\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\n    padding: 6px;\n    color: #000;\n    text-align: center;\n    font-family: sans-serif;\n    font-size: 12px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: 15px;\n}\nbutton.Brand[data-v-0ea660fe] {\n    border-radius: 6px;\n    border: 1px solid #000;\n    /* background: #F96; */\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\n    padding:6px 12px;\n    color: black;\n    text-align: center;\n    font-family: sans-serif;\n    font-size: 12px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: 15px;\n}\n.fromr-btn a[data-v-0ea660fe] {\n    color: gray;\n    width: 32%;\n    font-size: 14px;\n}\n.fromr-btn a span[data-v-0ea660fe] {\n    color: #F96;\n}\n.input-group label[data-v-0ea660fe] {\n    color: #000;\n    font-family: sans-serif;\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n    padding-bottom: 10px;\n}\n.input-group input[data-v-0ea660fe] {\n    border-radius: 9px;\n    border: 1px solid #ADADAD;\n    background: #FFF;\n    padding: 10px;\n}\n.form[data-v-0ea660fe] {\n    border-radius: 40px;\n    background: #FFF;\n    box-shadow: 0px 4px 35px 0px rgba(0, 0, 0, 0.08);\n    width: 100%;\n    height: 485px;\n    flex-shrink: 0;\n    z-index: 1;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    align-items: center;\n    padding: 20px;\n}\n.card[data-v-0ea660fe] {\n    width: 115px;\n    height: 115px;\n    flex-shrink: 0;\n    border-radius: 9px;\n    background: #F96;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n.from-card h2[data-v-0ea660fe] {\n    color: #000;\n    font-family: sans-serif;\n    font-size: 15px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n}\n.from-card a p[data-v-0ea660fe] {\n    color: #000;\n    font-family: Anton;\n    font-size: 15px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n}\n.card-box[data-v-0ea660fe] {\n    width: 100%;\n    display: flex;\n    gap: 20px;\n    align-items: center;\n    padding: 18px 0px;\n}\n.main-box[data-v-0ea660fe] {\n    width: 100%;\n    display: flex;\n    position: relative;\n    gap: 90px;\n    justify-content: space-between;\n    flex-direction: column;\n}\n.from-box img[data-v-0ea660fe] {\n    position: absolute;\n    right: 230px;\n    top: 45px;\n    width: 85%;\n}\n}\n@media screen and (max-width: 1366px){\n.logo-from img[data-v-0ea660fe] {\n    width: 20%;\n}\n.input-group-1 input[data-v-0ea660fe] {\n    border-radius: 5px;\n    border: 1px solid #ADADAD;\n    background: #FFF;\n    padding: 8px;\n    font-size: 12px;\n}\n.from-titel h1[data-v-0ea660fe] {\n    color: #1C1D1E;\n    font-family: sans-serif;\n    font-size: 24px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: normal;\n}\n.from-titel h3[data-v-0ea660fe] {\n    color: #1B1C1D;\n    font-family: sans-serif;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 30px;\n    font-size: 18px;\n    padding: 8px 0px;\n}\n.from-titel[data-v-0ea660fe] {\n    width: 32%;\n    padding-top: 40px;\n}\n.from-titel p[data-v-0ea660fe] {\n    color: #1B1C1D;\n    font-size: 12px;\n    font-style: normal;\n    font-weight: 300;\n    line-height: normal;\n}\n.card[data-v-0ea660fe] {\n    width: 110px;\n    height: 110px;\n    flex-shrink: 0;\n    border-radius: 9px;\n    background: #F96;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n.from-card h2[data-v-0ea660fe] {\n    color: #000;\n    font-family: sans-serif;\n    font-size: 12px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n}\n.card p[data-v-0ea660fe] {\n    color: #1B1C1D;\n    font-family: Poppins;\n    font-size: 10px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n}\n.card img[data-v-0ea660fe] {\n    width: 45%;\n}\n.from-card a p[data-v-0ea660fe] {\n    color: #000;\n    font-family: Anton;\n    font-size: 12px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n}\n.from-card a svg[data-v-0ea660fe] {\n    width: 20px;\n    height: 20px;\n}\n.card-box[data-v-0ea660fe] {\n    width: 100%;\n    display: flex;\n    gap: 20px;\n    align-items: center;\n    padding: 15px 0px;\n}\n.main-form[data-v-0ea660fe] {\n    width: 100%;\n    height: 560px;\n    background-image: url(/images/Up.png);\n    padding: 10px 25px;\n    border-radius: 45px;\n}\n.input-group label[data-v-0ea660fe] {\n    color: #000;\n    font-family: sans-serif;\n    font-size: 12px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n    padding-bottom: 8px;\n}\nbutton.button-20[data-v-0ea660fe] {\n    width: 100%;\n    border-radius: 6px;\n    border: 1px solid #000;\n    background: #F96;\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\n    display: flex;\n    height: 38px;\n    padding: 10px 0px;\n    justify-content: center;\n    align-items: center;\n    gap: 7.647px;\n    flex-shrink: 0;\n}\nbutton.button-20 p[data-v-0ea660fe] {\n    color: #FFF;\n    text-align: center;\n    font-family: DM Sans;\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: 24px;\n}\n.form-main.form p[data-v-0ea660fe] {\n    font-size: 12px;\n}\n.form[data-v-0ea660fe] {\n    border-radius: 30px;\n    background: #FFF;\n    box-shadow: 0px 4px 35px 0px rgba(0, 0, 0, 0.08);\n    width: 100%;\n    height: 420px;\n    flex-shrink: 0;\n    z-index: 1;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    align-items: center;\n    padding: 18px;\n}\n.main-box[data-v-0ea660fe] {\n    width: 100%;\n    display: flex;\n    position: relative;\n    gap: 75px;\n    justify-content: space-between;\n    flex-direction: column;\n}\n.input-group input[data-v-0ea660fe] {\n    border-radius: 5px;\n    border: 1px solid #ADADAD;\n    background: #FFF;\n    padding: 8px;\n    font-size: 12px;\n}\n.from-box img[data-v-0ea660fe] {\n    position: absolute;\n    right: 230px;\n    top: 45px;\n    width: 75%;\n}\n}\n@media screen and (max-width: 1024px){\nsection.form-1-sec[data-v-208aaa41][data-v-0ea660fe] {\n    width: 90%;\n}\n}\n@media screen and (max-width: 768px){\n.main-form[data-v-0ea660fe] {\n    width: 100%;\n    height: 100%;\n    background-image: url(/images/Up.png);\n    padding: 10px 25px;\n    border-radius: 25px;    width: 100%;\n    height: 100%;\n    background-image: url(/images/Up.png);\n    padding: 10px 25px;\n    border-radius: 25px;\n}\n.main-box[data-v-0ea660fe] {\n    width: 100%;\n    display: flex;\n    position: relative;\n    gap: 25px;\n    justify-content: space-between;\n    align-content: center;\n    flex-wrap: wrap;\n    align-items: center;\n}\n.from-titel[data-v-0ea660fe] {\n    width: 48%;\n    padding-top: 40px;\n    text-align: center;\n}\n.from-box[data-v-0ea660fe] {\n    width: 55%;\n    position: relative;\n    z-index: 0;\n    display: flex;\n    align-items: center;\n    margin-left: 90px;\n}\n.from-card[data-v-0ea660fe] {\n    width: 50%;\n    padding-top: 70px;\n}\n.from-box img[data-v-0ea660fe] {\n    position: absolute;\n    right: 250px;\n    top: 15px;\n    width: 70%;\n    bottom: 0px;\n}\n}\n@media screen and (max-width: 425px){\n.main-form[data-v-0ea660fe] {\n    width: 100%;\n    height: 100%;\n    background-image: url(/images/Up.png);\n    padding: 10px 15px;\n    border-radius: 24px;\n}\n.main-box[data-v-0ea660fe] {\n    width: 100%;\n    display: flex;\n    position: relative;\n    gap: 24px;\n    justify-content: space-between;\n    align-content: center;\n    flex-wrap: wrap;\n    align-items: center;\n}\n.from-titel[data-v-0ea660fe] {\n    width: 100%;\n    padding-top: 40px;\n    text-align: center;\n}\n.from-box[data-v-0ea660fe] {\n    width: 100%;\n    position: relative;\n    z-index: 0;\n    display: flex;\n    align-items: center;\n    margin-left: 0px;\n}\n.from-card[data-v-0ea660fe] {\n    width: 100%;\n    padding-top: 70px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n}\n.from-box img[data-v-0ea660fe] {\n    position: absolute;\n    right: 250px;\n    top: 15px;\n    width: 70%;\n    bottom: 0px;\n    display: none;\n}\n.card-box[data-v-0ea660fe] {\n    width: 100%;\n    display: flex;\n    gap: 20px;\n    align-items: center;\n    padding: 15px 0px;\n    justify-content: center;\n}\n.logo-from img[data-v-0ea660fe] {\n    width: 40%;\n}\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/formrr.vue?vue&type=style&index=0&id=208aaa41&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/formrr.vue?vue&type=style&index=0&id=208aaa41&scoped=true&lang=css& ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\n*[data-v-208aaa41]{\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\nsection.form-1-sec[data-v-208aaa41] {\n    width: 67%;\n}\n.main-form[data-v-208aaa41] {\n    width: 100%;\n    height: 900px;\n    background-image: url(/images/Up.png);\n    padding: 10px 40px;\n    background-position: center;\n    background-size: cover;\n    background-repeat: no-repeat;\n}\n.main-box[data-v-208aaa41] {\n    width: 100%;\n    display: flex;\n    position: relative;\n    gap: 225px;\n    justify-content: space-between;\n    flex-direction: column;\n}\n.logo-from[data-v-208aaa41] {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.from-titel[data-v-208aaa41] {width: 32%;padding-top: 60px;}\n.from-box[data-v-208aaa41] {\n    width: 40%;\n    position: absolute;\n    z-index: 1;\n    right: 35px;\n    display: flex;\n    top: 35px;\n    align-items: center;\n}\n.from-card[data-v-208aaa41] {\n    width: 40%;\n}\n.from-titel h1[data-v-208aaa41] {\n    color: #1C1D1E;\n    font-family: sans-serif;\n    font-size: 34px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: normal;\n}\n.from-titel h3[data-v-208aaa41] {\n    color: #1B1C1D;\n    font-family: sans-serif;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 40px;\n    font-size: 24px;\n    padding: 8px 0px;\n}\n.from-titel p[data-v-208aaa41] {\n    color: #1B1C1D;\n  \n    font-size: 13px;\n    font-style: normal;\n    font-weight: 300;\n    line-height: normal;\n}\n.from-titel form[data-v-208aaa41] {\n    width: 533px;\n    height: 703px;\n    flex-shrink: 0;\n    border-radius: 40px;\n    background: #FFF;\n    box-shadow: 0px 4px 35px 0px rgba(0, 0, 0, 0.08);\n}\n.form[data-v-208aaa41] {\n    border-radius: 40px;\n    background: #FFF;\n    box-shadow: 0px 4px 35px 0px rgba(0, 0, 0, 0.08);\n    width: 533px;\n    height: 703px;\n    flex-shrink: 0;\n    z-index: 1;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    align-items: center;\n    padding: 30px;\n}\n.from-box img[data-v-208aaa41] {position: absolute;right: 255px;top: 0px; width: 100%;}\n.card-box[data-v-208aaa41] {\n    width: 100%;\n    display: flex;\n    gap: 20px;\n    align-items: center;\n    padding: 24px 0px;\n}\n.card[data-v-208aaa41] {\n    width: 145px;\n    height: 164px;\n    flex-shrink: 0;\n    border-radius: 9px;\n    background: #F96;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n.card img[data-v-208aaa41] {\n    width: 50%;\n}\n.card h2[data-v-208aaa41] {\n    color: #1B1C1D;\n    font-family: sans-serif;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: normal;\n    padding: 5px 0px;\n}\n.card p[data-v-208aaa41] {\n    color: #1B1C1D;\n    font-family: Poppins;\n    font-size: 13px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n}\n.from-card h2[data-v-208aaa41] {\n    color: #000;\n    font-family: sans-serif;\n    font-size: 18px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n}\n.from-card a[data-v-208aaa41] {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n}\n.from-card a p[data-v-208aaa41] {\n    color: #000;\n    font-family: Anton;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n}\n.fromr-btn[data-v-208aaa41] {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    gap: 10px;\n}\n.input-group[data-v-208aaa41] {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n}\n.input-group-1[data-v-208aaa41] {\n    width: 48%;\n    display: flex;\n    flex-direction: column;\n}\n.input-group-1 label[data-v-208aaa41] {\n    color: #000;\n    font-family: sans-serif;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n    padding-bottom: 10px;\n}\n.input-group-1 input[data-v-208aaa41] {\n    border-radius: 9px;\n    border: 1px solid #ADADAD;\n    background: #FFF;\n    padding: 20px;\n}\n.input-group label[data-v-208aaa41] {\n    color: #000;\n    font-family: sans-serif;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n    padding-bottom: 10px;\n}\n.input-group input[data-v-208aaa41] {\n    border-radius: 9px;\n    border: 1px solid #ADADAD;\n    background: #FFF;\n    padding: 20px;\n}\nbutton.button-20[data-v-208aaa41] {\n    width: 100%;\n    border-radius: 6px;\n    border: 1px solid #000;\n    background: #F96;\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\n    display: flex;\n    height: 44px;\n    padding: 10px 0px;\n    justify-content: center;\n    align-items: center;\n    gap: 7.647px;\n    flex-shrink: 0;\n}\nbutton.button-20 p[data-v-208aaa41] {\n    color: #FFF;\n    text-align: center;\n    font-family: DM Sans;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: 24px; /* 150% */\n}\nform.form-main h2[data-v-208aaa41] {\n    color: #1B1C1D;\n    font-family: sans-serif;\n    font-size: 55px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: normal;\n    margin: 0px;\n}\n.fromr-btn[data-v-208aaa41] {}\nbutton.Influencer[data-v-208aaa41] {\n    border-radius: 6px;\n    border: 1px solid #000;\n    /* background: #FFF; */\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\n    padding: 11px 10px 9px 10px;\n    color: #000;\n    text-align: center;\n    font-family: sans-serif;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: 24px; /* 150% */\n}\nbutton.Brand[data-v-208aaa41] {\n    border-radius: 6px;\n    border: 1px solid #000;\n    /* background: #F96; */\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\n    padding: 11px 26px 9px 26px;\n    color: black;\n    text-align: center;\n    font-family: sans-serif;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: 24px; /* 150% */\n}\n.fromr-btn a[data-v-208aaa41] {\n    color: gray;\n    width: 32%;\n}\n.fromr-btn a span[data-v-208aaa41] {\n    color: #F96;\n}\n.button-main[data-v-208aaa41] {\n    border-radius: 6px;\n    border: 1px solid #000;\n    background: #F96;\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 20px;\n    height: 44px;\n    color: #FFF;\n    text-align: center;\n    font-family: sans-serif;\n    font-weight: 700;\n    line-height: 24px; /* 150% */\n}\n@media screen and (max-width: 1600px){\n.main-form[data-v-208aaa41] {\n    width: 100%;\n    height: 785px;\n    background-image: url(/images/Up.png);\n    padding: 10px 40px;\n    border-radius: 50px;\n}\n.from-titel h1[data-v-208aaa41] {\n    color: #1C1D1E;\n    font-family: sans-serif;\n    font-size: 32px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: normal;\n}\n.from-titel[data-v-208aaa41] {\n    width: 38%;\n    padding-top: 60px;\n}\n.main-box[data-v-208aaa41] {\n    width: 100%;\n    display: flex;\n    position: relative;\n    gap: 140px;\n    justify-content: space-between;\n    flex-direction: column;\n}\n.form[data-v-208aaa41] {\n    border-radius: 40px;\n    background: #FFF;\n    box-shadow: 0px 4px 35px 0px rgba(0, 0, 0, 0.08);\n    width: 100%;\n    height: 615px;\n    flex-shrink: 0;\n    z-index: 1;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    align-items: center;\n    padding: 25px;\n}\nbutton.Influencer[data-v-208aaa41] {\n    border-radius: 6px;\n    border: 1px solid #000;\n\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\n    padding: 8px 8px 8px 8px;\n    color: #000;\n    text-align: center;\n    font-family: sans-serif;\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: 24px;\n}\nbutton.Brand[data-v-208aaa41] {\n    border-radius: 6px;\n    border: 1px solid #000;\n\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\n    padding: 8px 20px 8px 20px;\n    color: black;\n    text-align: center;\n    font-family: sans-serif;\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: 24px;\n}\n.input-group input[data-v-208aaa41] {\n    border-radius: 9px;\n    border: 1px solid #ADADAD;\n    background: #FFF;\n    padding: 15px;\n}\n.from-box img[data-v-208aaa41] {\n    position: absolute;\n    right: 250px;\n    top: 110px;\n    width: 90%;\n}\n.from-box[data-v-208aaa41] {\n    width: 40%;\n    position: absolute;\n    z-index: 1;\n    right: 0px;\n    display: flex;\n    top: 35px;\n    align-items: center;\n}\n}\n@media screen and (max-width: 1440px){\n.from-titel h1[data-v-208aaa41] {\n    color: #1C1D1E;\n    font-family: sans-serif;\n    font-size: 28px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: normal;\n}\n.from-titel h3[data-v-208aaa41] {\n    color: #1B1C1D;\n    font-family: sans-serif;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 30px;\n    font-size: 20px;\n    padding: 8px 0px;\n}\n.main-form[data-v-208aaa41] {\n    width: 100%;\n    height: 650px;\n    background-image: url(/images/Up.png);\n    padding: 10px 30px;\n    border-radius: 50px;\n}\nbutton.Influencer[data-v-208aaa41] {\n    border-radius: 6px;\n    border: 1px solid #000;\n    /* background: #FFF; */\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\n    padding: 6px;\n    color: #000;\n    text-align: center;\n    font-family: sans-serif;\n    font-size: 12px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: 15px;\n}\nbutton.Brand[data-v-208aaa41] {\n    border-radius: 6px;\n    border: 1px solid #000;\n    /* background: #F96; */\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\n    padding: 6px 12px ;\n    color: black;\n    text-align: center;\n    font-family: sans-serif;\n    font-size: 12px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: 15px;\n}\n.fromr-btn a[data-v-208aaa41] {\n    color: gray;\n    width: 32%;\n    font-size: 14px;\n}\n.fromr-btn a span[data-v-208aaa41] {\n    color: #F96;\n}\n.input-group label[data-v-208aaa41] {\n    color: #000;\n    font-family: sans-serif;\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n    padding-bottom: 10px;\n}\n.input-group input[data-v-208aaa41] {\n    border-radius: 9px;\n    border: 1px solid #ADADAD;\n    background: #FFF;\n    padding: 10px;\n}\n.form[data-v-208aaa41] {\n    border-radius: 40px;\n    background: #FFF;\n    box-shadow: 0px 4px 35px 0px rgba(0, 0, 0, 0.08);\n    width: 100%;\n    height: 485px;\n    flex-shrink: 0;\n    z-index: 1;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    align-items: center;\n    padding: 20px;\n}\n.card[data-v-208aaa41] {\n    width: 115px;\n    height: 115px;\n    flex-shrink: 0;\n    border-radius: 9px;\n    background: #F96;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n.from-card h2[data-v-208aaa41] {\n    color: #000;\n    font-family: sans-serif;\n    font-size: 15px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n}\n.from-card a p[data-v-208aaa41] {\n    color: #000;\n    font-family: Anton;\n    font-size: 15px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n}\n.card-box[data-v-208aaa41] {\n    width: 100%;\n    display: flex;\n    gap: 20px;\n    align-items: center;\n    padding: 18px 0px;\n}\n.main-box[data-v-208aaa41] {\n    width: 100%;\n    display: flex;\n    position: relative;\n    gap: 90px;\n    justify-content: space-between;\n    flex-direction: column;\n}\n.from-box img[data-v-208aaa41] {\n    position: absolute;\n    right: 230px;\n    top: 45px;\n    width: 85%;\n}\n}\n@media screen and (max-width: 1366px){\n.logo-from img[data-v-208aaa41] {\n    width: 20%;\n}\n.from-titel h1[data-v-208aaa41] {\n    color: #1C1D1E;\n    font-family: sans-serif;\n    font-size: 24px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: normal;\n}\n.from-titel h3[data-v-208aaa41] {\n    color: #1B1C1D;\n    font-family: sans-serif;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 30px;\n    font-size: 18px;\n    padding: 8px 0px;\n}\n.from-titel[data-v-208aaa41] {\n    width: 32%;\n    padding-top: 40px;\n}\n.from-titel p[data-v-208aaa41] {\n    color: #1B1C1D;\n    font-size: 12px;\n    font-style: normal;\n    font-weight: 300;\n    line-height: normal;\n}\n.card[data-v-208aaa41] {\n    width: 110px;\n    height: 110px;\n    flex-shrink: 0;\n    border-radius: 9px;\n    background: #F96;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n.from-card h2[data-v-208aaa41] {\n    color: #000;\n    font-family: sans-serif;\n    font-size: 12px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n}\n.card p[data-v-208aaa41] {\n    color: #1B1C1D;\n    font-family: Poppins;\n    font-size: 10px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n}\n.card img[data-v-208aaa41] {\n    width: 45%;\n}\n.from-card a p[data-v-208aaa41] {\n    color: #000;\n    font-family: Anton;\n    font-size: 12px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n}\n.from-card a svg[data-v-208aaa41] {\n    width: 20px;\n    height: 20px;\n}\n.card-box[data-v-208aaa41] {\n    width: 100%;\n    display: flex;\n    gap: 20px;\n    align-items: center;\n    padding: 15px 0px;\n}\n.main-form[data-v-208aaa41] {\n    width: 100%;\n    height: 560px;\n    background-image: url(/images/Up.png);\n    padding: 10px 25px;\n    border-radius: 45px;\n}\n.input-group label[data-v-208aaa41] {\n    color: #000;\n    font-family: sans-serif;\n    font-size: 12px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n    padding-bottom: 8px;\n}\nbutton.button-20[data-v-208aaa41] {\n    width: 100%;\n    border-radius: 6px;\n    border: 1px solid #000;\n    background: #F96;\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\n    display: flex;\n    height: 38px;\n    padding: 10px 0px;\n    justify-content: center;\n    align-items: center;\n    gap: 7.647px;\n    flex-shrink: 0;\n}\nbutton.button-20 p[data-v-208aaa41] {\n    color: #FFF;\n    text-align: center;\n    font-family: DM Sans;\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: 24px;\n}\n.form-main.form p[data-v-208aaa41] {\n    font-size: 12px;\n}\n.form[data-v-208aaa41] {\n    border-radius: 30px;\n    background: #FFF;\n    box-shadow: 0px 4px 35px 0px rgba(0, 0, 0, 0.08);\n    width: 100%;\n    height: 420px;\n    flex-shrink: 0;\n    z-index: 1;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    align-items: center;\n    padding: 18px;\n}\n.main-box[data-v-208aaa41] {\n    width: 100%;\n    display: flex;\n    position: relative;\n    gap: 75px;\n    justify-content: space-between;\n    flex-direction: column;\n}\n.input-group input[data-v-208aaa41] {\n    border-radius: 5px;\n    border: 1px solid #ADADAD;\n    background: #FFF;\n    padding: 8px;\n    font-size: 12px;\n}\n.from-box img[data-v-208aaa41] {\n    position: absolute;\n    right: 230px;\n    top: 45px;\n    width: 75%;\n}\n}\n@media screen and (max-width: 1024px){\nsection.form-1-sec[data-v-208aaa41] {\n    width: 90%;\n}\n}\n@media screen and (max-width: 768px){\n.main-form[data-v-208aaa41] {\n        width: 100%;\n    height: 100%;\n    background-image: url(/images/Up.png);\n    padding: 10px 25px;\n    border-radius: 25px;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n.main-box[data-v-208aaa41] {\n    width: 100%;\n    display: flex;\n    position: relative;\n    gap: 25px;\n    justify-content: space-between;\n    align-content: center;\n    flex-wrap: wrap;\n    align-items: center;\n}\n.from-titel[data-v-208aaa41] {\n    width: 48%;\n    padding-top: 40px;\n    text-align: center;\n}\n.from-box[data-v-208aaa41] {\n    width: 55%;\n    position: relative;\n    z-index: 0;\n    display: flex;\n    align-items: center;\n    margin-left: 90px;\n}\n.from-card[data-v-208aaa41] {\n    width: 50%;\n    padding-top: 70px;\n}\n.from-box img[data-v-208aaa41] {\n    position: absolute;\n    right: 250px;\n    top: 15px;\n    width: 70%;\n    bottom: 0px;\n}\n}\n@media screen and (max-width: 425px){\n.main-form[data-v-208aaa41] {\n    width: 100%;\n    height: 100%;\n    background-image: url(/images/Up.png);\n    padding: 10px 15px;\n    border-radius: 24px;\n}\n.main-box[data-v-208aaa41] {\n    width: 100%;\n    display: flex;\n    position: relative;\n    gap: 24px;\n    justify-content: space-between;\n    align-content: center;\n    flex-wrap: wrap;\n    align-items: center;\n}\n.from-titel[data-v-208aaa41] {\n    width: 100%;\n    padding-top: 40px;\n    text-align: center;\n}\n.from-box[data-v-208aaa41] {\n    width: 100%;\n    position: relative;\n    z-index: 0;\n    display: flex;\n    align-items: center;\n    margin-left: 0px;\n}\n.from-card[data-v-208aaa41] {\n    width: 100%;\n    padding-top: 70px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n}\n.from-box img[data-v-208aaa41] {\n    position: absolute;\n    right: 250px;\n    top: 15px;\n    width: 70%;\n    bottom: 0px;\n    display: none;\n}\n.card-box[data-v-208aaa41] {\n    width: 100%;\n    display: flex;\n    gap: 20px;\n    align-items: center;\n    padding: 15px 0px;\n    justify-content: center;\n}\n.logo-from img[data-v-208aaa41] {\n    width: 40%;\n}\n}\n", ""]);
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/profile.vue?vue&type=style&index=0&id=273194bc&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/profile.vue?vue&type=style&index=0&id=273194bc&scoped=true&lang=css& ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.image-preview img[data-v-273194bc] {\r\n  max-width: 88%;\r\n  max-height: 200px;\n}\n*[data-v-273194bc]{\r\n        padding: 0;\r\n        margin: 0;\r\n        box-sizing: border-box;\n}\nsection.form-1-sec[data-v-273194bc] {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\n}\n.icon-input1[data-v-273194bc] {\r\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'%3E%3Cpath d='M20.9 2H3.1C2.80826 2 2.52847 2.11589 2.32218 2.32218C2.11589 2.52847 2 2.80826 2 3.1V20.9C2 21.1917 2.11589 21.4715 2.32218 21.6778C2.52847 21.8841 2.80826 22 3.1 22H12.68V14.25H10.08V11.25H12.68V9C12.6261 8.47176 12.6885 7.93813 12.8627 7.43654C13.0369 6.93495 13.3188 6.47755 13.6885 6.09641C14.0582 5.71528 14.5068 5.41964 15.0028 5.23024C15.4989 5.04083 16.0304 4.96225 16.56 5C17.3383 4.99521 18.1163 5.03528 18.89 5.12V7.82H17.3C16.04 7.82 15.8 8.42 15.8 9.29V11.22H18.8L18.41 14.22H15.8V22H20.9C21.0445 22 21.1875 21.9715 21.321 21.9163C21.4544 21.861 21.5757 21.78 21.6778 21.6778C21.78 21.5757 21.861 21.4544 21.9163 21.321C21.9715 21.1875 22 21.0445 22 20.9V3.1C22 2.95555 21.9715 2.81251 21.9163 2.67905C21.861 2.54559 21.78 2.42433 21.6778 2.32218C21.5757 2.22004 21.4544 2.13901 21.321 2.08373C21.1875 2.02845 21.0445 2 20.9 2Z' fill='%23FF5757'/%3E%3C/svg%3E\");\r\n    background-repeat: no-repeat;\r\n    background-position: 10px center;\r\n    padding-left: 40px; /* Adjust this value based on the width of your SVG icon */\n}\n.icon-input2[data-v-273194bc] {\r\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'%3E%3Cpath d='M13.028 2C14.153 2.003 14.724 2.009 15.217 2.023L15.411 2.03C15.635 2.038 15.856 2.048 16.123 2.06C17.187 2.11 17.913 2.278 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.2239 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.952 8.144 21.962 8.365 21.97 8.59L21.976 8.784C21.991 9.276 21.997 9.847 21.999 10.972L22 11.718V13.028C22.0024 13.7574 21.9948 14.4868 21.977 15.216L21.971 15.41C21.963 15.635 21.953 15.856 21.941 16.122C21.891 17.187 21.721 17.912 21.475 18.55C21.2246 19.2178 20.8311 19.8226 20.322 20.322C19.8219 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.123 21.94C15.8857 21.9512 15.6483 21.9612 15.411 21.97L15.217 21.976C14.724 21.99 14.153 21.997 13.028 21.999L12.282 22H10.973C10.2432 22.0025 9.51349 21.9949 8.78397 21.977L8.58997 21.971C8.35258 21.962 8.11524 21.9517 7.87797 21.94C6.81397 21.89 6.08797 21.722 5.44997 21.475C4.78264 21.2244 4.17818 20.8308 3.67897 20.322C3.17001 19.8223 2.77619 19.2176 2.52497 18.55C2.27797 17.913 2.10997 17.187 2.05997 16.122C2.04883 15.8847 2.03883 15.6474 2.02997 15.41L2.02497 15.216C2.00654 14.4868 1.9982 13.7574 1.99997 13.028V10.972C1.99718 10.2426 2.00451 9.5132 2.02197 8.784L2.02897 8.59C2.03697 8.365 2.04697 8.144 2.05897 7.878C2.10897 6.813 2.27697 6.088 2.52397 5.45C2.77508 4.7819 3.16969 4.17702 3.67997 3.678C4.17906 3.16947 4.78311 2.77599 5.44997 2.525C6.08797 2.278 6.81297 2.11 7.87797 2.06C8.14397 2.048 8.36597 2.038 8.58997 2.03L8.78397 2.024C9.51316 2.00623 10.2426 1.99857 10.972 2.001L13.028 2ZM12 7C10.6739 7 9.40211 7.52678 8.46443 8.46447C7.52675 9.40215 6.99997 10.6739 6.99997 12C6.99997 13.3261 7.52675 14.5979 8.46443 15.5355C9.40211 16.4732 10.6739 17 12 17C13.326 17 14.5978 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5978 7.52678 13.326 7 12 7ZM12 9C12.3939 8.99993 12.7841 9.07747 13.1481 9.22817C13.5121 9.37887 13.8428 9.5998 14.1214 9.87833C14.4001 10.1569 14.6211 10.4875 14.7719 10.8515C14.9227 11.2154 15.0004 11.6055 15.0005 11.9995C15.0005 12.3935 14.923 12.7836 14.7723 13.1476C14.6216 13.5116 14.4007 13.8423 14.1221 14.121C13.8436 14.3996 13.5129 14.6206 13.149 14.7714C12.785 14.9223 12.3949 14.9999 12.001 15C11.2053 15 10.4423 14.6839 9.87965 14.1213C9.31704 13.5587 9.00097 12.7956 9.00097 12C9.00097 11.2044 9.31704 10.4413 9.87965 9.87868C10.4423 9.31607 11.2053 9 12.001 9M17.251 5.5C16.9194 5.5 16.6015 5.6317 16.3671 5.86612C16.1327 6.10054 16.001 6.41848 16.001 6.75C16.001 7.08152 16.1327 7.39946 16.3671 7.63388C16.6015 7.8683 16.9194 8 17.251 8C17.5825 8 17.9004 7.8683 18.1349 7.63388C18.3693 7.39946 18.501 7.08152 18.501 6.75C18.501 6.41848 18.3693 6.10054 18.1349 5.86612C17.9004 5.6317 17.5825 5.5 17.251 5.5Z' fill='%23FF5757'/%3E%3C/svg%3E\");\r\n    background-repeat: no-repeat;\r\n    background-position: 10px center;\r\n    padding-left: 40px;\n}\n.icon-input3[data-v-273194bc] {\r\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'%3E%3Cpath d='M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z' fill='%23FF5757'/%3E%3C/svg%3E\");\r\n    background-repeat: no-repeat;\r\n    background-position: 10px center;\r\n    padding-left: 40px; /* Adjust this value based on the width of your SVG icon */\n}\n.main-form[data-v-273194bc] {\r\n    width: 100%;\r\n    height: 900px;\r\n    border-radius: 50px;\r\n    background-image: url(/images/Up.png);\r\n    position: relative;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    flex-wrap: wrap;\r\n    gap:40px 0px ;\n}\n.form-img[data-v-273194bc] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\n}\n.input-3[data-v-273194bc] {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: space-between;\n}\n.input-3 label[data-v-273194bc] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    width: 100%;\r\n    padding-bottom: 10px;\n}\n.input-3 input[data-v-273194bc] {\r\n    width: 28%;\r\n    border-radius: 9px;\r\n    border: 1px solid #ADADAD;\r\n    padding: 10px 10px 10px 40px;\n}\n.form-titel[data-v-273194bc] {\r\n    width: 30%;\r\n    display: flex;\r\n    justify-content: flex-end;\n}\n.form-img img[data-v-273194bc] {\r\n    width: 19%;\n}\n.form-titel h2[data-v-273194bc] {\r\n    color: #1C1D1E;\r\n    font-family: sans-serif;\r\n    font-size: 32px;\r\n    font-style: normal;\r\n    font-weight: 800;\r\n    line-height: normal;\n}\n.form-box[data-v-273194bc] {\r\n    width: 66%;\n}\n.form-1[data-v-273194bc] {\r\n    width: 63%;\r\n    height: 703px;\r\n    flex-shrink: 0;\r\n    border-radius: 40px;\r\n    background: #FFF;\r\n    box-shadow: 0px 4px 35px 0px rgba(0, 0, 0, 0.08);\r\n    z-index: 1;\r\n    position: relative;\r\n    padding: 50px 45px;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n    justify-content: space-between;\n}\n.imgss[data-v-273194bc] {\r\n    position: absolute;\r\n    left: 205px;\r\n    bottom: 0px;\n}\n.input-group-1[data-v-273194bc] {\r\n    width: 46%;\r\n    display: flex;\r\n    flex-direction: column;\n}\n.input-group-2[data-v-273194bc] {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\n}\n.input-group-1 label[data-v-273194bc] {\r\n    color: #000;\r\n    font-family: Poppins;\r\n    font-size: 18px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    padding-bottom: 10px;\n}\n.input-group-1 input[data-v-273194bc] {\r\n    border-radius: 9px;\r\n    border: 1px solid #ADADAD;\r\n    background: #FFF;\r\n    color: #808080;\r\n    font-family: Poppins;\r\n    font-size: 14px;\r\n    font-style: normal;\r\n    font-weight: 300;\r\n    line-height: normal;\r\n    padding: 15px;\n}\n.input-group-2 label[data-v-273194bc] {\r\n    color: #000;\r\n    font-family: Poppins;\r\n    font-size: 18px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    padding-bottom: 10px;\n}\n.input-group-2 input[data-v-273194bc] {\r\n    border-radius: 9px;\r\n    border: 1px solid #ADADAD;\r\n    background: #FFF;\r\n    color: #808080;\r\n    font-family: Poppins;\r\n    font-size: 14px;\r\n    font-style: normal;\r\n    font-weight: 300;\r\n    line-height: normal;\r\n    padding: 15px;\n}\nbutton.form-btn[data-v-273194bc] {\r\n    width: 100%;\r\n    display: flex;\r\n    height: 44px;\r\n    padding: 10px 0px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 7.647px;\r\n    flex-shrink: 0;\r\n    border-radius: 6px;\r\n    border: 1px solid #000;\r\n    background: #F96;\r\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\n}\nbutton.form-btn p[data-v-273194bc] {color: #FFF;text-align: center;font-family: DM Sans;font-size: 16px;font-style: normal;font-weight: 700;line-height: 24px; /* 150% */}\na.form-last[data-v-273194bc] {\r\n    width: 60%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    text-decoration: none;\r\n    gap: 14px;\r\n    padding-top:30px;\n}\na.form-last p[data-v-273194bc] {\r\n    color: #000;\r\n    font-family: Anton;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    line-height: normal;\r\n    cursor: pointer;\n}\n.drop-zone[data-v-273194bc] {\r\n    width: 100%;\r\n    height: 280px;\r\n    padding: 25px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    text-align: center;\r\n    font-family: \"Quicksand\", sans-serif;\r\n    font-weight: 500;\r\n    font-size: 20px;\r\n    cursor: pointer;\r\n    border-radius: 9px;\r\n    border: 1px solid #FF5757;\r\n    background: #FFF;\n}\n.drop-zone--over[data-v-273194bc] {\r\n  border-style: solid;\n}\n.drop-zone__input[data-v-273194bc] {\r\n  display: none;\n}\n.drop-zone__thumb[data-v-273194bc] {\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 10px;\r\n  overflow: hidden;\r\n  background-color: #cccccc;\r\n  background-size: cover;\r\n  position: relative;\n}\n.drop-zone__thumb[data-v-273194bc]::after {\r\n  content: attr(data-label);\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  padding: 5px 0;\r\n  color: #ffffff;\r\n  background: rgba(0, 0, 0, 0.75);\r\n  font-size: 14px;\r\n  text-align: center;\n}\ndiv#app[data-v-273194bc] {\r\n    width: 100%;\n}\n.img-input[data-v-273194bc] {\r\n    width: 100%;\n}\n.img-input label[data-v-273194bc] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    padding-bottom: 10px;\n}\nimg.image-preview[data-v-273194bc] {\r\n    width: 100%;\r\n    min-width: 443px;\r\n    min-height: 278px;\r\n    border-radius: 5px;\r\n    max-width: 443px;\r\n    max-height: 278px;\n}\n@media screen and (max-width: 1600px){\n.form-titel h2[data-v-273194bc] {\r\n    color: #1C1D1E;\r\n    font-family: sans-serif;\r\n    font-size: 29px;\r\n    font-style: normal;\r\n    font-weight: 800;\r\n    line-height: normal;\n}\nimg.image-preview[data-v-273194bc] {\r\n    width: 100%;\r\n    min-width: 394px;\r\n    min-height: 180px;\r\n    border-radius: 5px;\r\n    max-width: 443px;\r\n    max-height: 180px;\n}\n.form-1[data-v-273194bc] {\r\n    width: 63%;\r\n    height: 606px;\r\n    flex-shrink: 0;\r\n    border-radius: 24px;\r\n    background: #FFF;\r\n    box-shadow: 0px 4px 35px 0px rgba(0, 0, 0, 0.08);\r\n    z-index: 1;\r\n    position: relative;\r\n    padding: 24px 25px;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n    justify-content: space-between;\n}\n.main-form[data-v-273194bc] {\r\n    width: 100%;\r\n    height: 785px;\r\n    border-radius: 50px;\r\n    background-image: url(/images/Up.png);\r\n    position: relative;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    flex-wrap: wrap;\r\n    gap: 30px 0px;\r\n    background-position: center;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\n}\n.form-titel[data-v-273194bc] {\r\n    width: 28%;\r\n    display: flex;\r\n    justify-content: flex-end;\n}\n.drop-zone[data-v-273194bc] {\r\n    width: 100%;\r\n    height: 180px;\r\n    padding: 25px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    text-align: center;\r\n    font-family: \"Quicksand\", sans-serif;\r\n    font-weight: 500;\r\n    font-size: 20px;\r\n    cursor: pointer;\r\n    border-radius: 9px;\r\n    border: 1px solid #FF5757;\r\n    background: #FFF;\n}\na.form-last[data-v-273194bc] {\r\n    width: 60%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    text-decoration: none;\r\n    gap: 14px;\r\n    padding-top: 20px;\n}\n.imgss[data-v-273194bc] {\r\n    position: absolute;\r\n    left: 160px;\r\n    bottom: 0px;\r\n    width: 32%;\n}\n}\n@media screen and (max-width: 1440px){\n.main-form[data-v-273194bc] {\r\n    width: 100%;\r\n    height: 650px;\r\n    border-radius: 50px;\r\n    background-image: url(/images/Up.png);\r\n    position: relative;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    flex-wrap: wrap;\r\n    gap: 25px 0px;\r\n    background-position: center;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\n}\nimg.image-preview[data-v-273194bc] {\r\n    width: 100%;\r\n    min-width: 318px;\r\n    min-height: 124px;\r\n    border-radius: 5px;\r\n    max-width: 443px;\r\n    max-height: 124px;\n}\n.drop-zone[data-v-273194bc] {\r\n    width: 100%;\r\n    height: 125px;\r\n    padding: 25px;\r\n    display: flex;\r\n    align-items: center;\r\n    text-align: center;\r\n    font-family: \"Quicksand\", sans-serif;\r\n    font-weight: 500;\r\n    font-size: 20px;\r\n    cursor: pointer;\r\n    border-radius: 9px;\r\n    border: 1px solid #FF5757;\r\n    background: #FFF;\r\n    justify-content: center;\n}\n.input-group-2 input[data-v-273194bc] {\r\n    border-radius: 9px;\r\n    border: 1px solid #ADADAD;\r\n    background: #FFF;\r\n    color: #808080;\r\n    font-family: Poppins;\r\n    font-size: 14px;\r\n    font-style: normal;\r\n    font-weight: 300;\r\n    line-height: normal;\r\n    padding: 10px;\n}\n.img-input label[data-v-273194bc] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 14px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    padding-bottom: 10px;\n}\n.input-group-2 label[data-v-273194bc] {\r\n    color: #000;\r\n    font-family: Poppins;\r\n    font-size: 14px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    padding-bottom: 10px;\n}\n.input-3 label[data-v-273194bc] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 14px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    width: 100%;\r\n    padding-bottom: 10px;\n}\n.form-1[data-v-273194bc] {\r\n    width: 58%;\r\n    height: 485px;\r\n    flex-shrink: 0;\r\n    border-radius: 24px;\r\n    background: #FFF;\r\n    box-shadow: 0px 4px 35px 0px rgba(0, 0, 0, 0.08);\r\n    z-index: 1;\r\n    position: relative;\r\n    padding: 24px 25px;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n    justify-content: space-between;\n}\n.imgss[data-v-273194bc] {\r\n    position: absolute;\r\n    left: 160px;\r\n    bottom: 0px;\r\n    width: 30%;\n}\na.form-last p[data-v-273194bc] {\r\n    color: #000;\r\n    font-family: Anton;\r\n    font-size: 15px;\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    line-height: normal;\r\n    cursor: pointer;\n}\n}\n@media screen and (max-width: 1366px){\n.main-form[data-v-273194bc] {\r\n    width: 100%;\r\n    height: 560px;\r\n    border-radius: 45px;\r\n    background-image: url(/images/Up.png);\r\n    position: relative;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    flex-wrap: wrap;\r\n    gap: 25px 0px;\r\n    background-position: center;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\n}\n.form-1[data-v-273194bc] {\r\n    width:55%;\r\n    height: 420px;\r\n    flex-shrink: 0;\r\n    border-radius: 20px;\r\n    background: #FFF;\r\n    box-shadow: 0px 4px 35px 0px rgba(0, 0, 0, 0.08);\r\n    z-index: 1;\r\n    position: relative;\r\n    padding: 20px 24px;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n    justify-content: space-between;\n}\nimg.image-preview[data-v-273194bc] {\r\n    width: 100%;\r\n    min-width: 282px;\r\n    min-height: 108px;\r\n    border-radius: 5px;\r\n    max-width: 443px;\r\n    max-height: 108px;\n}\na.form-last p[data-v-273194bc] {\r\n    color: #000;\r\n    font-family: Anton;\r\n    font-size: 12px;\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    line-height: normal;\r\n    cursor: pointer;\n}\na.form-last svg[data-v-273194bc] {\r\n    width: 20px;\r\n    height: 20px;\n}\nbutton.form-btn[data-v-273194bc] {\r\n    width: 100%;\r\n    display: flex;\r\n    height: 38px;\r\n    padding: 10px 0px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 7.647px;\r\n    flex-shrink: 0;\r\n    border-radius: 6px;\r\n    border: 1px solid #000;\r\n    background: #F96;\r\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\n}\nbutton.form-btn p[data-v-273194bc] {\r\n    color: #FFF;\r\n    text-align: center;\r\n    font-family: DM Sans;\r\n    font-size: 14px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 24px;\n}\n.drop-zone[data-v-273194bc] {\r\n    width: 100%;\r\n    height: 110px;\r\n    padding: 25px;\r\n    display: flex;\r\n    align-items: center;\r\n    text-align: center;\r\n    font-family: \"Quicksand\", sans-serif;\r\n    font-weight: 500;\r\n    font-size: 20px;\r\n    cursor: pointer;\r\n    border-radius: 9px;\r\n    border: 1px solid #FF5757;\r\n    background: #FFF;\r\n    justify-content: center;\n}\n.img-input label[data-v-273194bc] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 12px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    padding-bottom: 8px;\n}\n.input-group-2 label[data-v-273194bc] {\r\n    color: #000;\r\n    font-family: Poppins;\r\n    font-size: 12px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    padding-bottom: 8px;\n}\n.input-3 label[data-v-273194bc] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 12px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    width: 100%;\r\n    padding-bottom: 8px;\n}\n.input-group-2 input[data-v-273194bc] {\r\n    border-radius: 9px;\r\n    border: 1px solid #ADADAD;\r\n    background: #FFF;\r\n    color: #808080;\r\n    font-family: Poppins;\r\n    font-size: 12px;\r\n    font-style: normal;\r\n    font-weight: 300;\r\n    line-height: normal;\r\n    padding: 8px;\n}\n.input-3 input[data-v-273194bc] {\r\n    width: 28%;\r\n    border-radius: 9px;\r\n    border: 1px solid #ADADAD;\r\n    padding: 8px 8px 8px 35px !important;\n}\n.imgss[data-v-273194bc] {\r\n    position: absolute;\r\n    left: 170px;\r\n    bottom: 0px;\r\n    \r\n    width: 26%;\n}\n}\n@media screen and (max-width: 768px){\n.main-form[data-v-273194bc] {\r\n    width: 100%;\r\n    height: 560px;\r\n    border-radius: 24px;\r\n    background-image: url(/images/Up.png);\r\n    position: relative;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    flex-wrap: wrap;\r\n    gap: 25px 0px;\r\n    background-position: center;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\n}\n.main-form[data-v-273194bc] {\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: 24px;\r\n    background-image: url(/images/Up.png);\r\n    position: relative;\r\n    display: flex;\r\n    gap: 25px 0px;\r\n    background-position: center;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    flex-direction: column;\r\n    align-content: center;\r\n    align-items: center;\n}\n.form-titel[data-v-273194bc] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\n}\n.form-1[data-v-273194bc] {\r\n    width: 50%;\r\n    height: 420px;\r\n    flex-shrink: 0;\r\n    border-radius: 20px;\r\n    background: #FFF;\r\n    box-shadow: 0px 4px 35px 0px rgba(0, 0, 0, 0.08);\r\n    z-index: 1;\r\n    position: relative;\r\n    padding: 20px 24px;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n    justify-content: space-between;\n}\n.imgss[data-v-273194bc] {\r\n    position: relative;\r\n    left: 85px;\r\n    bottom: 0px;\r\n    width: 33%;\n}\n.form-box[data-v-273194bc] {\r\n    display: flex;\r\n    width: 100%;\r\n    flex-wrap: wrap;\r\n    justify-content: flex-start;\n}\na.form-last[data-v-273194bc] {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    text-decoration: none;\r\n    gap: 14px;\r\n    padding-top: 20px;\n}\nimg.image-preview[data-v-273194bc] {\r\n    width: 100%;\r\n    min-width: 288px;\r\n    min-height: 108px;\r\n    border-radius: 5px;\r\n    max-width: 443px;\r\n    max-height: 108px;\n}\n}\n@media screen and (max-width: 425px){\n.main-form[data-v-273194bc] {\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: 24px;\r\n    background-image: url(/images/Up.png);\r\n    position: relative;\r\n    display: flex;\r\n    gap: 25px 0px;\r\n    background-position: center;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    flex-direction: column;\r\n    align-content: center;\r\n    align-items: center;\r\n    padding: 20px;\n}\ndiv#popup-box[data-v-273194bc] {\r\n    padding-right: 0px;\n}\n.form-img img[data-v-273194bc] {\r\n    width: 40%;\n}\n.form-titel h2[data-v-273194bc] {\r\n    color: #1C1D1E;\r\n    font-family: sans-serif;\r\n    font-size: 24px;\r\n    font-style: normal;\r\n    font-weight: 800;\r\n    line-height: normal;\n}\n.imgss[data-v-273194bc] {\r\n    position: relative;\r\n    left: 85px;\r\n    bottom: 0px;\r\n    width: 33%;\r\n    display: none;\n}\n.form-1[data-v-273194bc] {\r\n    width: 100%;\r\n    height: 420px;\r\n    flex-shrink: 0;\r\n    border-radius: 20px;\r\n    background: #FFF;\r\n    box-shadow: 0px 4px 35px 0px rgba(0, 0, 0, 0.08);\r\n    z-index: 1;\r\n    position: relative;\r\n    padding: 20px 24px;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n    justify-content: space-between;\n}\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/sweetalert2/dist/sweetalert2.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/sweetalert2/dist/sweetalert2.min.css ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_sweetalert2_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./sweetalert2.min.css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/sweetalert2/dist/sweetalert2.min.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_sweetalert2_min_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_sweetalert2_min_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/branddetail.vue?vue&type=style&index=0&id=10ef68ab&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/branddetail.vue?vue&type=style&index=0&id=10ef68ab&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_branddetail_vue_vue_type_style_index_0_id_10ef68ab_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./branddetail.vue?vue&type=style&index=0&id=10ef68ab&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/branddetail.vue?vue&type=style&index=0&id=10ef68ab&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_branddetail_vue_vue_type_style_index_0_id_10ef68ab_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_branddetail_vue_vue_type_style_index_0_id_10ef68ab_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/formr.vue?vue&type=style&index=0&id=0ea660fe&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/formr.vue?vue&type=style&index=0&id=0ea660fe&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_formr_vue_vue_type_style_index_0_id_0ea660fe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./formr.vue?vue&type=style&index=0&id=0ea660fe&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/formr.vue?vue&type=style&index=0&id=0ea660fe&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_formr_vue_vue_type_style_index_0_id_0ea660fe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_formr_vue_vue_type_style_index_0_id_0ea660fe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/formrr.vue?vue&type=style&index=0&id=208aaa41&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/formrr.vue?vue&type=style&index=0&id=208aaa41&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_formrr_vue_vue_type_style_index_0_id_208aaa41_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./formrr.vue?vue&type=style&index=0&id=208aaa41&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/formrr.vue?vue&type=style&index=0&id=208aaa41&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_formrr_vue_vue_type_style_index_0_id_208aaa41_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_formrr_vue_vue_type_style_index_0_id_208aaa41_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/profile.vue?vue&type=style&index=0&id=273194bc&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/profile.vue?vue&type=style&index=0&id=273194bc&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_style_index_0_id_273194bc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./profile.vue?vue&type=style&index=0&id=273194bc&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/profile.vue?vue&type=style&index=0&id=273194bc&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_style_index_0_id_273194bc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_style_index_0_id_273194bc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/views/register/branddetail.vue":
/*!*****************************************************!*\
  !*** ./resources/js/views/register/branddetail.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _branddetail_vue_vue_type_template_id_10ef68ab_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./branddetail.vue?vue&type=template&id=10ef68ab&scoped=true& */ "./resources/js/views/register/branddetail.vue?vue&type=template&id=10ef68ab&scoped=true&");
/* harmony import */ var _branddetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./branddetail.vue?vue&type=script&lang=js& */ "./resources/js/views/register/branddetail.vue?vue&type=script&lang=js&");
/* harmony import */ var _branddetail_vue_vue_type_style_index_0_id_10ef68ab_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./branddetail.vue?vue&type=style&index=0&id=10ef68ab&scoped=true&lang=css& */ "./resources/js/views/register/branddetail.vue?vue&type=style&index=0&id=10ef68ab&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _branddetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _branddetail_vue_vue_type_template_id_10ef68ab_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _branddetail_vue_vue_type_template_id_10ef68ab_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "10ef68ab",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/register/branddetail.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

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

/***/ "./resources/js/views/register/formr.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/register/formr.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _formr_vue_vue_type_template_id_0ea660fe_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formr.vue?vue&type=template&id=0ea660fe&scoped=true& */ "./resources/js/views/register/formr.vue?vue&type=template&id=0ea660fe&scoped=true&");
/* harmony import */ var _formr_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formr.vue?vue&type=script&lang=js& */ "./resources/js/views/register/formr.vue?vue&type=script&lang=js&");
/* harmony import */ var _formr_vue_vue_type_style_index_0_id_0ea660fe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formr.vue?vue&type=style&index=0&id=0ea660fe&scoped=true&lang=css& */ "./resources/js/views/register/formr.vue?vue&type=style&index=0&id=0ea660fe&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _formr_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _formr_vue_vue_type_template_id_0ea660fe_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _formr_vue_vue_type_template_id_0ea660fe_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "0ea660fe",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/register/formr.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/register/formrr.vue":
/*!************************************************!*\
  !*** ./resources/js/views/register/formrr.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _formrr_vue_vue_type_template_id_208aaa41_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formrr.vue?vue&type=template&id=208aaa41&scoped=true& */ "./resources/js/views/register/formrr.vue?vue&type=template&id=208aaa41&scoped=true&");
/* harmony import */ var _formrr_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formrr.vue?vue&type=script&lang=js& */ "./resources/js/views/register/formrr.vue?vue&type=script&lang=js&");
/* harmony import */ var _formrr_vue_vue_type_style_index_0_id_208aaa41_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formrr.vue?vue&type=style&index=0&id=208aaa41&scoped=true&lang=css& */ "./resources/js/views/register/formrr.vue?vue&type=style&index=0&id=208aaa41&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _formrr_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _formrr_vue_vue_type_template_id_208aaa41_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _formrr_vue_vue_type_template_id_208aaa41_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "208aaa41",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/register/formrr.vue"
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

/***/ "./resources/js/views/register/profile.vue":
/*!*************************************************!*\
  !*** ./resources/js/views/register/profile.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _profile_vue_vue_type_template_id_273194bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.vue?vue&type=template&id=273194bc&scoped=true& */ "./resources/js/views/register/profile.vue?vue&type=template&id=273194bc&scoped=true&");
/* harmony import */ var _profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.vue?vue&type=script&lang=js& */ "./resources/js/views/register/profile.vue?vue&type=script&lang=js&");
/* harmony import */ var _profile_vue_vue_type_style_index_0_id_273194bc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.vue?vue&type=style&index=0&id=273194bc&scoped=true&lang=css& */ "./resources/js/views/register/profile.vue?vue&type=style&index=0&id=273194bc&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _profile_vue_vue_type_template_id_273194bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _profile_vue_vue_type_template_id_273194bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "273194bc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/register/profile.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/register/branddetail.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/register/branddetail.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_branddetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./branddetail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/branddetail.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_branddetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

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

/***/ "./resources/js/views/register/formr.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/views/register/formr.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_formr_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./formr.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/formr.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_formr_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/register/formrr.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/register/formrr.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_formrr_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./formrr.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/formrr.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_formrr_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

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

/***/ "./resources/js/views/register/profile.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/register/profile.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./profile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/profile.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/register/branddetail.vue?vue&type=style&index=0&id=10ef68ab&scoped=true&lang=css&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/views/register/branddetail.vue?vue&type=style&index=0&id=10ef68ab&scoped=true&lang=css& ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_branddetail_vue_vue_type_style_index_0_id_10ef68ab_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./branddetail.vue?vue&type=style&index=0&id=10ef68ab&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/branddetail.vue?vue&type=style&index=0&id=10ef68ab&scoped=true&lang=css&");


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

/***/ "./resources/js/views/register/formr.vue?vue&type=style&index=0&id=0ea660fe&scoped=true&lang=css&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/views/register/formr.vue?vue&type=style&index=0&id=0ea660fe&scoped=true&lang=css& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_formr_vue_vue_type_style_index_0_id_0ea660fe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./formr.vue?vue&type=style&index=0&id=0ea660fe&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/formr.vue?vue&type=style&index=0&id=0ea660fe&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/views/register/formrr.vue?vue&type=style&index=0&id=208aaa41&scoped=true&lang=css&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/views/register/formrr.vue?vue&type=style&index=0&id=208aaa41&scoped=true&lang=css& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_formrr_vue_vue_type_style_index_0_id_208aaa41_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./formrr.vue?vue&type=style&index=0&id=208aaa41&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/formrr.vue?vue&type=style&index=0&id=208aaa41&scoped=true&lang=css&");


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

/***/ "./resources/js/views/register/profile.vue?vue&type=style&index=0&id=273194bc&scoped=true&lang=css&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/views/register/profile.vue?vue&type=style&index=0&id=273194bc&scoped=true&lang=css& ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_style_index_0_id_273194bc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./profile.vue?vue&type=style&index=0&id=273194bc&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/profile.vue?vue&type=style&index=0&id=273194bc&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/views/register/branddetail.vue?vue&type=template&id=10ef68ab&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/views/register/branddetail.vue?vue&type=template&id=10ef68ab&scoped=true& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_branddetail_vue_vue_type_template_id_10ef68ab_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_branddetail_vue_vue_type_template_id_10ef68ab_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_branddetail_vue_vue_type_template_id_10ef68ab_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./branddetail.vue?vue&type=template&id=10ef68ab&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/branddetail.vue?vue&type=template&id=10ef68ab&scoped=true&");


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

/***/ "./resources/js/views/register/formr.vue?vue&type=template&id=0ea660fe&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/views/register/formr.vue?vue&type=template&id=0ea660fe&scoped=true& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_formr_vue_vue_type_template_id_0ea660fe_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_formr_vue_vue_type_template_id_0ea660fe_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_formr_vue_vue_type_template_id_0ea660fe_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./formr.vue?vue&type=template&id=0ea660fe&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/formr.vue?vue&type=template&id=0ea660fe&scoped=true&");


/***/ }),

/***/ "./resources/js/views/register/formrr.vue?vue&type=template&id=208aaa41&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/register/formrr.vue?vue&type=template&id=208aaa41&scoped=true& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_formrr_vue_vue_type_template_id_208aaa41_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_formrr_vue_vue_type_template_id_208aaa41_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_formrr_vue_vue_type_template_id_208aaa41_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./formrr.vue?vue&type=template&id=208aaa41&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/formrr.vue?vue&type=template&id=208aaa41&scoped=true&");


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

/***/ "./resources/js/views/register/profile.vue?vue&type=template&id=273194bc&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/views/register/profile.vue?vue&type=template&id=273194bc&scoped=true& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_template_id_273194bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_template_id_273194bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_template_id_273194bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./profile.vue?vue&type=template&id=273194bc&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/profile.vue?vue&type=template&id=273194bc&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/branddetail.vue?vue&type=template&id=10ef68ab&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/branddetail.vue?vue&type=template&id=10ef68ab&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
    _vm.showss
      ? _c("div", { staticClass: "main-form" }, [
          _vm._m(0),
          _vm._v(" "),
          _vm._m(1),
          _vm._v(" "),
          _c("div", { staticClass: "form-box" }, [
            _c("img", { attrs: { src: "/images/Character.png", alt: "" } }),
            _vm._v(" "),
            _c("div", { staticClass: "form-1" }, [
              _c("div", { staticClass: "input-group-1" }, [
                _c("label", { attrs: { for: "text" } }, [_vm._v("First Name")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.first_name,
                      expression: "form.first_name"
                    }
                  ],
                  attrs: { type: "text", placeholder: "Write here" },
                  domProps: { value: _vm.form.first_name },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "first_name", $event.target.value)
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "input-group-1" }, [
                _c("label", { attrs: { for: "text" } }, [_vm._v("Last Name ")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.last_name,
                      expression: "form.last_name"
                    }
                  ],
                  attrs: { type: "text", placeholder: "Write here" },
                  domProps: { value: _vm.form.last_name },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "last_name", $event.target.value)
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "input-group-2" }, [
                _c("label", { attrs: { for: "text" } }, [
                  _vm._v("Company Location")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.location,
                      expression: "form.location"
                    }
                  ],
                  attrs: {
                    type: "text",
                    placeholder: "location\r\n                        "
                  },
                  domProps: { value: _vm.form.location },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "location", $event.target.value)
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "input-group-2" }, [
                _c("label", { attrs: { for: "text" } }, [
                  _vm._v("Company Name")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.company,
                      expression: "form.company"
                    }
                  ],
                  attrs: { type: "text", placeholder: "C name" },
                  domProps: { value: _vm.form.company },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "company", $event.target.value)
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "input-group-2" }, [
                _c("label", { attrs: { for: "text" } }, [
                  _vm._v("Company Website ")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.website,
                      expression: "form.website"
                    }
                  ],
                  attrs: { type: "text", placeholder: "Website" },
                  domProps: { value: _vm.form.website },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "website", $event.target.value)
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "input-group-2" }, [
                _c("label", { attrs: { for: "number" } }, [_vm._v("Contact")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.contact,
                      expression: "form.contact"
                    }
                  ],
                  attrs: { type: "number", placeholder: "Contact" },
                  domProps: { value: _vm.form.contact },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "contact", $event.target.value)
                    }
                  }
                })
              ]),
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
                    staticStyle: { cursor: "pointer" },
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
    _vm.type
      ? _c(
          "div",
          [
            _c("Type", {
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/formr.vue?vue&type=template&id=0ea660fe&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/formr.vue?vue&type=template&id=0ea660fe&scoped=true& ***!
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
  return _c("section", { staticClass: "form-2-sec" }, [
    _vm.shows
      ? _c("div", { staticClass: "main-form" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "main-box" }, [
            _vm._m(1),
            _vm._v(" "),
            _c("div", { staticClass: "from-box" }, [
              _c("img", { attrs: { src: "/images/Character.png", alt: "" } }),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "form-main form", attrs: { action: "" } },
                [
                  _c("div", { staticClass: "fromr-btn" }, [
                    _c(
                      "button",
                      {
                        staticClass: "Influencer",
                        style: { backgroundColor: _vm.bgColor1 },
                        on: {
                          click: function($event) {
                            return _vm.auths("Influencer")
                          }
                        }
                      },
                      [_vm._v("As Influencer")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "Brand",
                        style: { backgroundColor: _vm.bgColor2 },
                        on: {
                          click: function($event) {
                            return _vm.auths("Brand")
                          }
                        }
                      },
                      [_vm._v("As Brand")]
                    ),
                    _vm._v(" "),
                    _vm._m(2)
                  ]),
                  _vm._v(" "),
                  _c(
                    "h2",
                    {
                      staticStyle: { "font-family": "fantasy", color: "#000" }
                    },
                    [_vm._v("Sign up")]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "input-group" }, [
                    _c("label", { attrs: { for: "text" } }, [
                      _vm._v("Email address")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.email,
                          expression: "email"
                        }
                      ],
                      attrs: {
                        type: "text",
                        placeholder: "Username or email address"
                      },
                      domProps: { value: _vm.email },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.email = $event.target.value
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "input-group-1" }, [
                    _c("label", { attrs: { for: "text" } }, [
                      _vm._v("User name")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.user_name,
                          expression: "user_name"
                        }
                      ],
                      attrs: { type: "text", placeholder: "User name" },
                      domProps: { value: _vm.user_name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.user_name = $event.target.value
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "input-group-1" }, [
                    _c("label", { attrs: { for: "number" } }, [
                      _vm._v("Contact Number")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.contact,
                          expression: "contact"
                        }
                      ],
                      attrs: { type: "number", placeholder: "Contact Number" },
                      domProps: { value: _vm.contact },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.contact = $event.target.value
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "input-group" }, [
                    _c("label", { attrs: { for: "Password" } }, [
                      _vm._v("Enter your Password")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.password,
                          expression: "password"
                        }
                      ],
                      attrs: { type: "Password", placeholder: "Password" },
                      domProps: { value: _vm.password },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.password = $event.target.value
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c(
                    "button",
                    { staticClass: "button-20", on: { click: _vm.save } },
                    [
                      _c("p", [_vm._v("Start for free")]),
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
                                "M2.51254 5.45272C3.05034 5.44321 3.53631 5.41563 4.01895 5.49884C4.06983 5.5074 4.12879 5.47935 4.18253 5.46318C4.44738 5.38329 4.71319 5.37236 4.9828 5.44131C5.21723 5.50122 5.45642 5.44986 5.6937 5.46746C6.05984 5.49456 6.42408 5.39566 6.78785 5.4142C7.08409 5.42942 7.38366 5.42466 7.678 5.47079C7.82731 5.49409 7.96852 5.50217 8.12116 5.46366C8.28711 5.42229 8.45165 5.52167 8.62378 5.52167C8.81304 5.52167 8.99944 5.56922 9.18108 5.62343C9.3846 5.68382 9.43594 5.86831 9.28759 6.0181C9.06124 6.24682 8.76549 6.34715 8.45926 6.39185C8.20581 6.42894 7.94713 6.45033 7.69178 6.46365C7.42169 6.47744 7.1497 6.57064 6.8758 6.48029C6.82873 6.4646 6.77024 6.46127 6.72269 6.47411C6.4041 6.56161 6.07268 6.50264 5.75171 6.56541C5.65281 6.5849 5.54438 6.57825 5.44357 6.56256C5.30377 6.54068 5.16968 6.54449 5.03654 6.58823C4.86631 6.64434 4.69703 6.57302 4.52632 6.57634C4.35371 6.57967 4.18253 6.58585 4.01895 6.62722C3.7617 6.69284 3.50588 6.65623 3.25528 6.6296C3.02894 6.60583 2.81068 6.6258 2.58767 6.6315C2.37702 6.63721 2.15686 6.65528 1.94954 6.61867C1.71416 6.57682 1.61193 6.36189 1.52586 6.1655C1.44883 5.98957 1.55725 5.85975 1.67565 5.73327C1.85015 5.54639 2.05129 5.44653 2.31045 5.46413C2.39509 5.46983 2.48116 5.45414 2.51397 5.45224L2.51254 5.45272Z",
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
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "from-card" }, [
              _c("h2", [_vm._v("Login as")]),
              _vm._v(" "),
              _vm._m(3),
              _vm._v(" "),
              _c("a", { attrs: { href: "#" } }, [
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
              ])
            ])
          ])
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.uploads
      ? _c(
          "div",
          [
            _c("Upload", {
              attrs: { "user-id": _vm.user_id },
              on: { cancel: _vm.closeModal }
            })
          ],
          1
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.brand
      ? _c(
          "div",
          [
            _c("Brand", {
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
    return _c("div", { staticClass: "logo-from" }, [
      _c("img", { attrs: { src: "/images/logo.png", alt: "" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "from-titel" }, [
      _c("h1", [_vm._v("We’re Glad, You’re Here")]),
      _vm._v(" "),
      _c("h3", [
        _vm._v("Your journey with Influencer Marketing... Will be just awesome")
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { attrs: { href: "#" } }, [
      _vm._v("Have an Account ?"),
      _c("span", [_vm._v("Sign in")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-box" }, [
      _c("div", { staticClass: "card" }, [
        _c("img", { attrs: { src: "/images/Ellipse4.png", alt: "" } }),
        _vm._v(" "),
        _c("h2", [_vm._v("John peter")]),
        _vm._v(" "),
        _c("p", [_vm._v("Active 1 days ago")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card" }, [
        _c("img", { attrs: { src: "/images/Ellipse4.png", alt: "" } }),
        _vm._v(" "),
        _c("h2", [_vm._v("John peter")]),
        _vm._v(" "),
        _c("p", [_vm._v("Active 1 days ago")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/formrr.vue?vue&type=template&id=208aaa41&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/formrr.vue?vue&type=template&id=208aaa41&scoped=true& ***!
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
  return _c("section", { staticClass: "form-1-sec" }, [
    _vm.show
      ? _c("div", { staticClass: "main-form" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "main-box" }, [
            _vm._m(1),
            _vm._v(" "),
            _c("div", { staticClass: "from-box" }, [
              _c("img", { attrs: { src: "/images/Character.png", alt: "" } }),
              _vm._v(" "),
              _c("div", { staticClass: "form-main form" }, [
                _c("div", { staticClass: "fromr-btn" }, [
                  _c(
                    "button",
                    {
                      staticClass: "Influencer",
                      style: { backgroundColor: _vm.bgColor1 },
                      on: {
                        click: function($event) {
                          return _vm.datas("Influencer")
                        }
                      }
                    },
                    [_vm._v("As Influencer")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "Brand",
                      style: { backgroundColor: _vm.bgColor2 },
                      on: {
                        click: function($event) {
                          return _vm.datas("Brand")
                        }
                      }
                    },
                    [_vm._v("As Brand")]
                  ),
                  _vm._v(" "),
                  _c("a", { attrs: { href: "#" } }, [
                    _vm._v("No Account ?"),
                    _c("span", { on: { click: _vm.singup } }, [
                      _vm._v("Sign up")
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "h2",
                  { staticStyle: { "font-family": "fantasy", color: "#000" } },
                  [_vm._v("Sign in")]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "input-group" }, [
                  _c("label", { attrs: { for: "text" } }, [
                    _vm._v("Enter your username or email address")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.email,
                        expression: "email"
                      }
                    ],
                    attrs: {
                      type: "text",
                      placeholder: "Username or email address"
                    },
                    domProps: { value: _vm.email },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.email = $event.target.value
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "input-group" }, [
                  _c("label", { attrs: { for: "Password" } }, [
                    _vm._v("Enter your Password")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.password,
                        expression: "password"
                      }
                    ],
                    attrs: { type: "Password", placeholder: "Password" },
                    domProps: { value: _vm.password },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.password = $event.target.value
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("p", [_vm._v("Forgot Password?")]),
                _vm._v(" "),
                _c(
                  "button",
                  { staticClass: "button-20", on: { click: _vm.login } },
                  [
                    _c("p", [_vm._v("Start for free")]),
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
                              "M2.51254 5.45272C3.05034 5.44321 3.53631 5.41563 4.01895 5.49884C4.06983 5.5074 4.12879 5.47935 4.18253 5.46318C4.44738 5.38329 4.71319 5.37236 4.9828 5.44131C5.21723 5.50122 5.45642 5.44986 5.6937 5.46746C6.05984 5.49456 6.42408 5.39566 6.78785 5.4142C7.08409 5.42942 7.38366 5.42466 7.678 5.47079C7.82731 5.49409 7.96852 5.50217 8.12116 5.46366C8.28711 5.42229 8.45165 5.52167 8.62378 5.52167C8.81304 5.52167 8.99944 5.56922 9.18108 5.62343C9.3846 5.68382 9.43594 5.86831 9.28759 6.0181C9.06124 6.24682 8.76549 6.34715 8.45926 6.39185C8.20581 6.42894 7.94713 6.45033 7.69178 6.46365C7.42169 6.47744 7.1497 6.57064 6.8758 6.48029C6.82873 6.4646 6.77024 6.46127 6.72269 6.47411C6.4041 6.56161 6.07268 6.50264 5.75171 6.56541C5.65281 6.5849 5.54438 6.57825 5.44357 6.56256C5.30377 6.54068 5.16968 6.54449 5.03654 6.58823C4.86631 6.64434 4.69703 6.57302 4.52632 6.57634C4.35371 6.57967 4.18253 6.58585 4.01895 6.62722C3.7617 6.69284 3.50588 6.65623 3.25528 6.6296C3.02894 6.60583 2.81068 6.6258 2.58767 6.6315C2.37702 6.63721 2.15686 6.65528 1.94954 6.61867C1.71416 6.57682 1.61193 6.36189 1.52586 6.1655C1.44883 5.98957 1.55725 5.85975 1.67565 5.73327C1.85015 5.54639 2.05129 5.44653 2.31045 5.46413C2.39509 5.46983 2.48116 5.45414 2.51397 5.45224L2.51254 5.45272Z",
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
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "from-card" }, [
              _c("h2", [_vm._v("Login as")]),
              _vm._v(" "),
              _vm._m(2),
              _vm._v(" "),
              _c("a", { attrs: { href: "#" } }, [
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
              ])
            ])
          ])
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.singups
      ? _c(
          "div",
          { staticStyle: { display: "flex", "justify-content": "center" } },
          [_c("Singup", { on: { cancel: _vm.closeModal } })],
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
    return _c("div", { staticClass: "logo-from" }, [
      _c("img", { attrs: { src: "/images/logo.png", alt: "" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "from-titel" }, [
      _c("h1", [_vm._v("We’re Glad, You’re Here")]),
      _vm._v(" "),
      _c("h3", [
        _vm._v("Your journey with Influencer Marketing... Will be just awesome")
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-box" }, [
      _c("div", { staticClass: "card" }, [
        _c("img", { attrs: { src: "/images/Ellipse4.png", alt: "" } }),
        _vm._v(" "),
        _c("h2", [_vm._v("John peter")]),
        _vm._v(" "),
        _c("p", [_vm._v("Active 1 days ago")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card" }, [
        _c("img", { attrs: { src: "/images/Ellipse4.png", alt: "" } }),
        _vm._v(" "),
        _c("h2", [_vm._v("John peter")]),
        _vm._v(" "),
        _c("p", [_vm._v("Active 1 days ago")])
      ])
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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/profile.vue?vue&type=template&id=273194bc&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/profile.vue?vue&type=template&id=273194bc&scoped=true& ***!
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
  return _c("section", { staticClass: "form-1-sec" }, [
    _vm.showss
      ? _c("div", { staticClass: "main-form" }, [
          _vm._m(0),
          _vm._v(" "),
          _vm._m(1),
          _vm._v(" "),
          _c("div", { staticClass: "form-box" }, [
            _c("img", {
              staticClass: "imgss",
              attrs: { src: "/images/Character.png", alt: "" }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "form-1" }, [
              _c("div", { staticClass: "img-input" }, [
                _c("label", { attrs: { for: "text" } }, [
                  _vm._v("Upload Your Profile Picture")
                ]),
                _vm._v(" "),
                _c("div", [
                  _c(
                    "div",
                    {
                      staticClass: "drop-zone",
                      attrs: { id: "image-drop-area" },
                      on: {
                        dragover: _vm.onDragOver,
                        drop: _vm.onDrop,
                        click: _vm.openFileDialog
                      }
                    },
                    [
                      _c("input", {
                        ref: "fileInput",
                        staticStyle: { display: "none" },
                        attrs: {
                          type: "file",
                          id: "file-input",
                          accept: "image/*"
                        },
                        on: { change: _vm.handleFileChange }
                      }),
                      _vm._v(" "),
                      !_vm.imageUrl
                        ? _c("div", { staticClass: "image-drop-zone" }, [
                            _c("span", { staticClass: "drop-zone__prompt" }, [
                              _c(
                                "svg",
                                {
                                  attrs: {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "74",
                                    height: "74",
                                    viewBox: "0 0 74 74",
                                    fill: "none"
                                  }
                                },
                                [
                                  _c("path", {
                                    attrs: {
                                      d:
                                        "M58.5833 40.0771H40.0833V58.5771H33.9166V40.0771H15.4166V33.9104H33.9166V15.4104H40.0833V33.9104H58.5833V40.0771Z",
                                      fill: "#FF9966"
                                    }
                                  })
                                ]
                              )
                            ])
                          ])
                        : _c("div", { staticClass: "drop-zone" }, [
                            _c("img", {
                              staticClass: "image-preview",
                              attrs: {
                                src: _vm.imageUrl,
                                alt: "Uploaded Image"
                              }
                            })
                          ])
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "input-group-2" }, [
                _c("label", { attrs: { for: "text" } }, [_vm._v("Bio")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.bio,
                      expression: "form.bio"
                    }
                  ],
                  attrs: {
                    type: "text",
                    placeholder: "Write here\r\n                        "
                  },
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
              ]),
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
                    staticStyle: { cursor: "pointer" },
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
    _vm.final
      ? _c("div", [_c("Final", { on: { cancel: _vm.closeModal } })], 1)
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



/***/ })

}]);