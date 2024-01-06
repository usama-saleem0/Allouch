(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_admin_chat_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/chat.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/chat.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      userselect: false,
      form: {},
      chatname: 'Christiana Adams',
      inf_img: 'Ellipse.png',
      model: []
    }, _defineProperty(_ref, "model", {}), _defineProperty(_ref, "method", 'POST'), _defineProperty(_ref, "messages", []), _defineProperty(_ref, "influencer", []), _defineProperty(_ref, "chat_user", ''), _defineProperty(_ref, "chatter", {}), _defineProperty(_ref, "intervalId", null), _defineProperty(_ref, "newMessage", ''), _ref;
  },
  created: function created() {
    var _this = this;

    console.log('aaaa');
    (0,_admin_components_lib_api__WEBPACK_IMPORTED_MODULE_0__.get)('/getuser').then(function (res) {
      _this.influncer();

      _this.setData(res);
    });
  },
  methods: {
    setitem: function setitem(e) {
      var _this2 = this;

      this.chatname = e.user_name;
      this.reciever_id = e.id;
      this.inf_img = e.image;
      this.chatter = e;
      console.log(this.chatter);
      (0,_admin_components_lib_api__WEBPACK_IMPORTED_MODULE_0__.get)('/getchat?id=' + e.id).then(function (res) {
        // console.log(res.data.camp)
        vue__WEBPACK_IMPORTED_MODULE_1__.default.set(_this2.$data, 'messages', res.data.data);
        vue__WEBPACK_IMPORTED_MODULE_1__.default.set(_this2.$data, 'chat_user', res.data.chat_user);

        _this2.influncer();
      });
    },
    influncer: function influncer() {
      var _this3 = this;

      console.log('abbbb');
      (0,_admin_components_lib_api__WEBPACK_IMPORTED_MODULE_0__.get)('/getinfluencer').then(function (res) {
        console.log(res.data.influencer);
        vue__WEBPACK_IMPORTED_MODULE_1__.default.set(_this3.$data, 'influencer', res.data.influencer);
      });
    },
    profile: function profile() {
      this.$router.push('/admin/dashborad4');
    },
    sendMessage: function sendMessage() {
      var _this4 = this;

      if (this.newMessage.trim() !== '') {
        this.messages.push({
          user: 'You',
          text: this.newMessage
        });
        this.scrollChatToBottom(); // this.form.message = this.messages.text
      }

      this.form.reciever_id = this.reciever_id;
      this.form.reciever_name = this.chatname;
      this.form.message = this.newMessage;
      console.log(this.newMessage);
      (0,_admin_components_lib_api__WEBPACK_IMPORTED_MODULE_0__.byMethod)(this.method, 'chats', this.form).then(function (res) {
        if (res.data && res.data.saved) {
          _this4.influncer(); //             get('/getuserchat')
          //   .then((res) => {
          //   })

        }
      });
      this.newMessage = ''; //   this.newMessage = '';
    },
    scrollChatToBottom: function scrollChatToBottom() {
      var chatBox = document.getElementById('chat-box');
      chatBox.scrollTop = chatBox.scrollHeight;
    },
    setData: function setData(res) {
      vue__WEBPACK_IMPORTED_MODULE_1__.default.set(this.$data, 'model', res.data.data); // console.log(res.data.data)
      //   console.log(res.data)
    }
  },
  mounted: function mounted() {
    var _this5 = this;

    this.setitem(this.chatter);
    this.intervalId = setInterval(function () {
      if (_this5.chatter.id) {
        _this5.setitem(_this5.chatter);
      }

      console.log('fffffffsssssss', _this5.chatter);
    }, 3000);
  },
  beforeDestroy: function beforeDestroy() {
    clearInterval(this.intervalId);
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/chat.vue?vue&type=style&index=0&id=0037c057&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/chat.vue?vue&type=style&index=0&id=0037c057&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.pos[data-v-0037c057]{\r\n    position: absolute;\r\n    left: 42px;\r\n    bottom: -3px;\n}\n.imges[data-v-0037c057]{\r\n    width: 100%;\r\n    max-height: 55px;\r\n    min-height: 55px;\r\n    border-radius: 50%;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\n}\n.ahtis[data-v-0037c057]{\r\n    width: 500px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center; margin-bottom: 20px;\n}\n.buts[data-v-0037c057]{\r\n    display: flex;\r\n    width: 102px;\r\n    height: 34px;\r\n    padding: 5px 24px 5px 23px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-shrink: 0;\r\n    border-radius: 6px;\r\n    border: 1px solid #000;\r\n    background: #F96;\r\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\r\n    color: white;\n}\n.ss[data-v-0037c057]{\r\n    color: #000;\r\n    font-family: DM Sans;\r\n    font-size: 12px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: normal;\n}\n.sss[data-v-0037c057]{\r\n    color: #000;\r\n    font-family: fantasy;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\n}\n.cent[data-v-0037c057]{\r\n  background-color: #FF9966;\r\n    display: flex;\r\n    align-items: center;\r\n    border-radius: 10px 10px 0px 0px;\n}\n.dyncols[data-v-0037c057]{\r\n  display: flex;\r\n    justify-content: flex-start;\n}\n.dyncol[data-v-0037c057]{\r\n  display: flex;\r\n    justify-content: flex-end;\n}\n.message[data-v-0037c057] {\r\n  max-width: 50%;\r\n    word-wrap: break-word;\r\n    background-color: #FF9966;\r\n    min-height: 50px;\r\n    border-radius: 10px 10px 0px 10px;\r\n    padding: 5px;\r\n    margin-bottom: 10px;\r\n    border: 2px solid #000;\r\n \r\n    box-shadow: 4px 4px 0px 2px #1B1C1D;\n}\n.messagess[data-v-0037c057] {\r\n max-width: 50%;\r\n    word-wrap: break-word;\r\n    background-color: rgb(225, 220, 220);\r\n    min-height: 50px;\r\n    border-radius: 10px 10px 0px 10px;\r\n    padding: 5px;\r\n        margin-bottom: 10px;\r\n\r\n        border: 2px solid #000;\r\n \r\n box-shadow: 4px 4px 0px 2px #1B1C1D;\n}\n[data-v-0037c057]::-webkit-scrollbar {\r\n  width: 1px;\n}\r\n\r\n/* Track */\n[data-v-0037c057]::-webkit-scrollbar-track {\r\n  box-shadow: inset 0 0 5px grey; \r\n  border-radius: 10px;\n}\r\n \r\n/* Handle */\n[data-v-0037c057]::-webkit-scrollbar-thumb {\r\n  background: rgb(20, 20, 20); \r\n  border-radius: 10px;\n}\r\n\r\n/* Handle on hover */\n[data-v-0037c057]::-webkit-scrollbar-thumb:hover {\r\n  background: #1b1b1b;\n}\n.hhh[data-v-0037c057]{\r\n  color: black;\r\n    font-weight: bold;\n}\n.sp[data-v-0037c057]{\r\n  color: #000;\r\n   \r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: normal;\n}\n.imgs[data-v-0037c057]{\r\n  height: 55px;\r\n    /* margin-left: 10px; */\r\n    padding: 0px 10px 0px 10px;\r\n    height: 55px;\r\n    /* margin-left: 10px; */\r\n    padding: 0px 10px 0px 10px;\r\n    /* width: 24%; */\r\n    max-width: 80px;\r\n    min-width: 80px;\r\n    border-radius: 50%;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\n}\n.blacktr[data-v-0037c057]{\r\n  color: white;\r\n    background-color: #101010;\n}\n.orangetr[data-v-0037c057]{\r\n  color: black;\n}\n.buttonsss[data-v-0037c057]{\r\n  \r\n  border: none;\r\n    width: 80px;\r\n    height: 44px;\r\n    border-radius: 10px;\r\n    background-color: #FF9966;\r\n    color: white;\r\n    font-weight: bold;\r\n    bottom: 0;\r\n    margin-bottom: 12px;\r\n    font-size: x-large;\n}\n.buttonss[data-v-0037c057]{\r\n  \r\n  border: none;\r\n    background-color: #e37a00;\r\n    color: white;\r\n    border-radius: 5px;\n}\n.lefts[data-v-0037c057]{\r\n  font-size: x-small;\r\n    margin-left: 10px;\r\n    color: gray;\r\n    padding-bottom: 15px;\n}\n.rounded_image[data-v-0037c057]{\r\n  /* width: 15%; */\r\n   \r\n    margin-left: 10px;\n}\r\n\r\n    /* #app {\r\n      max-width: 400px;\r\n      margin: 0 auto;\r\n      padding: 20px;\r\n      border: 1px solid #ccc;\r\n    } */\n.chat-box[data-v-0037c057] {\r\n      \r\n    height: 500px;\r\n    overflow-y: scroll;\r\n    overflow-x: hidden;\r\n    height: 445px;\r\n    /* overflow-y: scroll; */\r\n    background-color: white;\r\n    color: black;\r\n    /* border-radius: 20px; */\r\n    padding: 10px;\r\n    width: 101%;\n}\n.coloum[data-v-0037c057]{\r\n      background-color: white;\r\n    border-radius: 20px;\r\n    margin-bottom: 20px;\n}\n.buttonsss[data-v-0037c057]{\r\n      border: none;\r\n    width: 80px;\r\n    height: 44px;\r\n    border-radius: 10px;\r\n    background-color: #FF9966;\r\n    color: white;\r\n    font-weight: bold;\r\n    bottom: 0;\r\n    margin-bottom: 12px;\n}\n.inp[data-v-0037c057]{\r\n      width: 88%;\r\n    border-radius: 10px;\r\n    height: 2em;\r\n    background-color:transparent;\r\n    border: none;\r\n    outline: none;\r\n    color: black;\n}\n.inps[data-v-0037c057]{\r\n      /* width: 88%; */\r\n    /* border-radius: 10px; */\r\n    height: 3em;\r\n    background-color: #FF9966;\r\n    border: none;\r\n\r\n    color: black;\r\n    border-radius: 16px;\r\nborder: 2px solid #000;\r\npadding-left: 15px;\r\n\r\n\r\n\r\nbox-shadow: 4px 4px 0px 2px #1B1C1D;\n}\n.page-1[data-v-0037c057] {\r\n    width: 100%;\r\n    background-color: #F5F3EA;\r\n    padding: 30px;\n}\n.contanir[data-v-0037c057] {\r\n    width: 100%;\r\n    max-width: 1600px;\r\n    margin: 0 auto;\n}\n.Sponsorship h2[data-v-0037c057] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 18px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: 24px; /* 150% */\r\n    padding-bottom: 25px;\r\n    margin: 0px ;\n}\n.card-box[data-v-0037c057] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\n}\n.cards[data-v-0037c057] {\r\n    border-radius: 16px;\r\n    border: 2px solid #000;\r\n    background: #F96;\r\n    box-shadow: 4px 4px 0px 2px #1B1C1D;\r\n    width: 30%;\r\n    height: 369px;\r\n    flex-shrink: 0;\n}\n.main[data-v-0037c057] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\n}\n.box-1[data-v-0037c057] {\r\n    /* height: 871px; */\r\n    background: transparent;\r\n    width: 67%;\n}\n.box-2[data-v-0037c057] {\r\n    height: 100%;\r\n    flex-shrink: 0;\r\n    border-radius: 20px;\r\n    background: #FFF;\r\n    box-shadow: 0px 10px 54px 0px rgba(0, 0, 0, 0.25);\r\n    width: 90%;\r\n    padding: 30px;\n}\n.Sponsorship[data-v-0037c057] {\r\n    width: 100%;\r\n    height: 871px;\r\n    flex-shrink: 0;\r\n    border-radius: 20px;\r\n    background: #FFF;\r\n    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\r\n    padding: 30px 33px ;\n}\n.btn-box[data-v-0037c057] {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: 30px 0px;\n}\n.btn-2[data-v-0037c057] {\r\n    display: flex;\r\n    width: 46%;\r\n    justify-content: space-between;\n}\n.btn-1[data-v-0037c057] {\r\n    width: 35%;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 18px;\n}\n.Campaign[data-v-0037c057] {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 10px;\r\n    border-radius: 10px;\r\n    background: #FFF;\r\n    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\r\n    padding: 12px 20px;\n}\n.Campaign h2[data-v-0037c057] {\r\n    padding: 0px;\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: normal;\n}\n.Campaign p[data-v-0037c057] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 14px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: normal;\r\n    margin: 0px;\n}\n.over-btn[data-v-0037c057] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    padding: 50px 0px 0px 0px;\n}\n.over-btn button[data-v-0037c057] {\r\n    border-radius: 6px;\r\n    border: 1px solid #000;\r\n    background: #F96;\r\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\r\n    display: inline-flex;\r\n    padding: 10px 21.25px 10px 20px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 4.75px;\r\n    color: #FFF;\r\n    text-align: center;\r\n    font-family: sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 24px; /* 150% */\n}\n.btn-1 button[data-v-0037c057] {\r\n    border-radius: 6px;\r\n    border: 1px solid #000;\r\n    background: #F96;\r\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\r\n    display: flex;\r\n    width: 154.75px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 7.647px;\r\n    flex-shrink: 0;\r\n    padding: 10px;\r\n    color: #FFF;\r\n    text-align: center;\r\n    font-family: sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 24px; /* 150% */\n}\nbutton.Add[data-v-0037c057] {\r\n    border-radius: 6px;\r\n    border: 1px solid #000;\r\n    background: #F5F3EA;\r\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\r\n    color: #000;\n}\n.OverView[data-v-0037c057] {\r\n    width: 100%;\r\n    padding-top: 75px;\n}\n.OverView h2[data-v-0037c057] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 26px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: 24px; /* 92.308% */\r\n    margin: 0px;\r\n    padding-bottom: 30px;\n}\n.over-box[data-v-0037c057] {\r\n    width: 100%;\r\n    display: flex;\n}\n.Over-card h4[data-v-0037c057] {\r\n    color: #FF5757;\r\n    font-family: sans-serif;\r\n    font-size: 20px;\r\n    font-style: normal;\r\n    font-weight: 800;\r\n    line-height: 24px; /* 114.286% */\r\n    margin: 0px;\n}\n.Over-card h4 span[data-v-0037c057] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 38px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 24px; /* 58.537% */\r\n    padding-left: 5px;\n}\n.Over-card[data-v-0037c057] {\r\n    width: 25%;\n}\r\n\r\n/* .../ */\n.pox-1[data-v-0037c057] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 20px;\r\n    border-bottom: 1px solid #000;\n}\n.pox-1 h2[data-v-0037c057] {\r\n    color: #000;\r\n    text-align: center;\r\n    font-family: sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 800;\r\n    line-height: 24px; /* 150% */\r\n    margin: 0px;\r\n    padding: 0px;\n}\n.top-btn[data-v-0037c057] {\r\n    width: 49%;\r\n    display: flex;\r\n    align-items: center;\n}\n.top-btn button[data-v-0037c057] {\r\n    border: none;\r\n    background: transparent;\n}\n.pox-2[data-v-0037c057] {\r\n    width: 100%;\r\n    padding: 20px;\n}\n.pox-2 p[data-v-0037c057] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 18px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    letter-spacing: -0.96px;\r\n    margin: 0px;\n}\n.pox-2 h2[data-v-0037c057] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    line-height: 24px; /* 150% */\r\n    padding: 15px 0px;\n}\n.pox-box[data-v-0037c057] {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    gap: 10px 0px;\n}\n.yes[data-v-0037c057] {\r\n    width: 50%;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 5px;\n}\n.yes[data-v-0037c057] {}\n.pox-3[data-v-0037c057] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: flex-end;\r\n    padding: 25px 0px;\n}\n.pox-3 h2[data-v-0037c057] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 18px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    padding: 0px 0px 0px 0px;\n}\n.pox-3 p[data-v-0037c057] {\r\n    color: #000;\r\n    text-align: center;\r\n    font-family: sans-serif;\r\n    font-size: 15px;\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    line-height: 24px; /* 150% */\r\n    width: 40%;\n}\n.pox-3 h2 span[data-v-0037c057] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 20px;\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    line-height: normal;\n}\nbutton.llo[data-v-0037c057] {\r\n    color: #fff;\n}\r\n\r\n/* .../ */\n.id-box img[data-v-0037c057] {\r\n    width: 80%;\r\n    border-radius: 50%;\r\n    max-height: 140px;\r\n    min-height: 140px;\r\n\r\n   \r\n    -o-object-fit: cover;\r\n\r\n   \r\n       object-fit: cover;\n}\n.box-2 h2[data-v-0037c057] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 18px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: normal;\n}\n.id-box[data-v-0037c057] {\r\n    width: 100%;\r\n    display: flex;\r\n    /* flex-direction: column; */\r\n    align-items: center;\r\n    padding: 20px 0px 25px 0px;\n}\nh2.chat-para[data-v-0037c057] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 24px;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\n}\n.id-box h2[data-v-0037c057] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 26px;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    margin: 0px;\r\n    padding: 20px 0px 4px 0px;\n}\n.id-box h3[data-v-0037c057] {color: #000;font-family: sans-serif;font-size: 12px;font-style: normal;font-weight: 500;line-height: normal;}\n.titel-box[data-v-0037c057] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding-bottom: 20px;\n}\n.id-titel[data-v-0037c057] {\r\n    display: flex;\r\n    align-items: center;\r\n    width: 30%;\r\n    justify-content: space-between;\n}\n.id-titel p[data-v-0037c057] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: normal;\r\n    margin: 0px;\n}\n.contact-box[data-v-0037c057] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    padding-bottom: 40px;\n}\n.contact[data-v-0037c057] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    gap: 15px;\n}\n.contact p[data-v-0037c057] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    margin: 0px;\n}\n.para-box[data-v-0037c057] {\r\n    width: 100%;\r\n    border-top: 1px solid #F96;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    align-items: center;\n}\n.para-box p[data-v-0037c057] {\r\n    color: #000;\r\n    text-align: center;\r\n    font-family: sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: 22px; /* 150% */\r\n    margin: 0px;\r\n    padding: 20px 0px 0px 0px;\n}\n.buttons[data-v-0037c057] {\r\n    border-radius: 6px;\r\n    border: 1px solid #000;\r\n    background: #F96;\r\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\r\n    display: flex;\r\n    width: 154.75px;\r\n    height: 44px;\r\n    padding: 10px 18px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 7.647px;\r\n    flex-shrink: 0;\r\n     /* 150% */\n}\n.buttonp[data-v-0037c057] {\r\n    color: #FFF;\r\n    text-align: center;\r\n    font-family: sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 24px; \r\n    padding-top: 15px;\n}\n@media screen and (max-width: 1600px){\n.ahtis[data-v-0037c057]{\r\n    width: 430px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center; margin-bottom: 10px;\n}\n.contanir[data-v-0037c057] {\r\n    width: 100%;\r\n    max-width: 1440px;\r\n    margin: 0 auto;\n}\n.pox-1[data-v-0037c057] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 12px;\r\n    border-bottom: 1px solid #000;\n}\n.top-btn button[data-v-0037c057] {\r\n    border: none;\r\n    background: transparent;\r\n    padding: 4px;\n}\n.yes[data-v-0037c057] {\r\n    width: 50%;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 2px;\n}\n.pox-3 h2 span[data-v-0037c057] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 17px;\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    line-height: normal;\n}\n.pox-3 p[data-v-0037c057] {\r\n    color: #000;\r\n    text-align: center;\r\n    font-family: sans-serif;\r\n    font-size: 14px;\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    line-height: 24px;\r\n    width: 40%;\n}\n.pox-3 h2[data-v-0037c057] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 17px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    padding: 0px 0px 0px 0px;\n}\n.btn-1 button[data-v-0037c057] {\r\n    border-radius: 6px;\r\n    border: 1px solid #000;\r\n    background: #F96;\r\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\r\n    display: flex;\r\n    width: 154.75px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 7.647px;\r\n    flex-shrink: 0;\r\n    padding: 8px;\r\n    color: #FFF;\r\n    text-align: center;\r\n    font-family: sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 24px;\n}\n.btn-2[data-v-0037c057] {\r\n    display: flex;\r\n    width: 50%;\r\n    justify-content: space-between;\n}\n.id-titel[data-v-0037c057] {\r\n    display: flex;\r\n    align-items: center;\r\n    width: 32%;\r\n    justify-content: space-between;\n}\n.over-btn button[data-v-0037c057] {\r\n    border-radius: 6px;\r\n    border: 1px solid #000;\r\n    background: #F96;\r\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\r\n    display: inline-flex;\r\n    padding: 8px 21.25px 8px 20px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 4.75px;\r\n    color: #FFF;\r\n    text-align: center;\r\n    font-family: sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 24px;\n}\n.Over-card h4 span[data-v-0037c057] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 35px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 24px;\r\n    padding-left: 5px;\n}\n.Over-card h4[data-v-0037c057] {\r\n    color: #FF5757;\r\n    font-family: sans-serif;\r\n    font-size: 18px;\r\n    font-style: normal;\r\n    font-weight: 800;\r\n    line-height: 24px;\r\n    margin: 0px;\n}\n.buttons[data-v-0037c057] {\r\n    border-radius: 6px;\r\n    border: 1px solid #000;\r\n    background: #F96;\r\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\r\n    display: flex;\r\n    width: 154.75px;\r\n    height: 42px;\r\n    padding: 10px 18px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 7.647px;\r\n    flex-shrink: 0;\n}\nbutton.Add[data-v-0037c057] {\r\n    border-radius: 6px;\r\n    border: 1px solid #000 !important;\r\n    background: #F5F3EA !important;\r\n    box-shadow: 2px 2px 0px 0px #1B1C1D !important; \r\n    color: #000 !important;\n}\n}\n@media screen and (max-width: 1440px){\n.imges[data-v-0037c057]{\r\n    width: 150%;\r\n    max-height: 43px;\r\n    min-height: 43px;\r\n    border-radius: 50%;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\n}\n.ahtis[data-v-0037c057]{\r\n    width: 315px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center; margin-bottom: 20px;\n}\n.id-box h3[data-v-0037c057] {color: #000;font-family: sans-serif;font-size: 10px;font-style: normal;font-weight: 500;line-height: normal;}\n.contanir[data-v-0037c057] {\r\n    width: 100%;\r\n    max-width: 1170px;\r\n    margin: 0 auto;\n}\n.pox-2 h2[data-v-0037c057] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    line-height: 20px;\r\n    padding: 12px 0px;\n}\n.Sponsorship[data-v-0037c057] {\r\n    width: 100%;\r\n    height: 720px;\r\n    flex-shrink: 0;\r\n    border-radius: 20px;\r\n    background: #FFF;\r\n    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\r\n    padding: 30px 20px;\n}\n.OverView[data-v-0037c057] {\r\n    width: 100%;\r\n    padding-top: 60px;\n}\n.OverView h2[data-v-0037c057] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 24px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: 24px;\r\n    margin: 0px;\r\n    padding-bottom: 20px;\n}\n.Over-card h4[data-v-0037c057] {\r\n    color: #FF5757;\r\n    font-family: sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 800;\r\n    line-height: 24px;\r\n    margin: 0px;\n}\n.Over-card h4 span[data-v-0037c057] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 28px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 24px;\r\n    padding-left: 0px;\n}\n.over-btn[data-v-0037c057] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    padding: 40px 0px 0px 0px;\n}\n.over-btn button[data-v-0037c057] {\r\n    border-radius: 6px;\r\n    border: 1px solid #000;\r\n    background: #F96;\r\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\r\n    display: inline-flex;\r\n    padding: 7px 16.25px 7px 15px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 4.75px;\r\n    color: #FFF;\r\n    text-align: center;\r\n    font-family: sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 24px;\n}\n.top-btn button[data-v-0037c057] {\r\n    border: none;\r\n    background: transparent;\r\n    padding: 4px;\r\n    display: flex;\r\n    align-items: center;\n}\n.top-btn button svg[data-v-0037c057] {\r\n    width: 15px;\r\n    height: 15px;\n}\n.top-btn[data-v-0037c057] {\r\n    width: 42%;\r\n    display: flex;\r\n    align-items: center;\n}\n.pox-1[data-v-0037c057] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 8px;\r\n    border-bottom: 1px solid #000;\n}\n.top-btn button span[data-v-0037c057] {\r\n    font-size: 12px;\n}\n.pox-1 h2[data-v-0037c057] {\r\n    color: #000;\r\n    text-align: center;\r\n    font-family: sans-serif;\r\n    font-size: 14px;\r\n    font-style: normal;\r\n    font-weight: 800;\r\n    line-height: 24px;\r\n    margin: 0px;\r\n    padding: 0px;\n}\n.pox-2[data-v-0037c057] {\r\n    width: 100%;\r\n    padding: 10px;\n}\n.pox-2 p[data-v-0037c057] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    letter-spacing: -0.96px;\r\n    margin: 0px;\n}\n.pox-3 h2[data-v-0037c057] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 14px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    padding: 0px 0px 0px 0px;\r\n    width: 58%;\n}\n.pox-3[data-v-0037c057] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: flex-end;\r\n    padding: 15px 0px;\n}\n.pox-box[data-v-0037c057] {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    gap: 5px 0px;\n}\n.cards[data-v-0037c057] {\r\n    border-radius: 16px;\r\n    border: 2px solid #000;\r\n    background: #F96;\r\n    box-shadow: 4px 4px 0px 2px #1B1C1D;\r\n    width: 30%;\r\n    height: 280px;\r\n    flex-shrink: 0;\n}\n.yes p[data-v-0037c057] {\r\n    font-size: 14px;\n}\n.pox-3 h2 span[data-v-0037c057] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 15px;\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    line-height: normal;\n}\n.pox-3 p[data-v-0037c057] {\r\n    color: #000;\r\n    text-align: center;\r\n    font-family: sans-serif;\r\n    font-size: 12px;\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    line-height: 24px;\r\n    width: 44%;\r\n    margin: 0px;\r\n    padding: 0px;\n}\n.btn-1 button[data-v-0037c057] {\r\n    border-radius: 6px;\r\n    border: 1px solid #000;\r\n    background: #F96;\r\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\r\n    display: flex;\r\n    width: 130.75px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 7.647px;\r\n    flex-shrink: 0;\r\n    padding: 6px;\r\n    color: #FFF;\r\n    text-align: center;\r\n    font-family: sans-serif;\r\n    font-size: 14px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 24px;\n}\n.btn-2[data-v-0037c057] {\r\n    display: flex;\r\n    width: 52%;\r\n    justify-content: space-between;\n}\n.Campaign[data-v-0037c057] {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 8px;\r\n    border-radius: 10px;\r\n    background: #FFF;\r\n    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\r\n    padding: 8px 10px;\n}\n.Campaign svg[data-v-0037c057] {\r\n    width: 30px;\r\n    height: 30px;\n}\n.id-box[data-v-0037c057] {\r\n    width: 100%;\r\n    display: flex;\r\n    /* flex-direction: column; */\r\n    align-items: center;\r\n    padding: 20px 0px 25px 0px;\n}\n.id-box img[data-v-0037c057] {\r\n    width: 100%;\r\n  \r\n    border-radius: 50%;\r\n    max-height: 130px;\r\n    min-height: 130px;\r\n\r\n    -o-object-fit: cover;\r\n\r\n       object-fit: cover;\n}\n.id-box h2[data-v-0037c057] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 21px;\r\n    font-style: normal;\r\n    font-weight: 800;\r\n    line-height: normal;\r\n    margin: 0px;\r\n    padding: 15px 0px 2px 0px;\n}\n.contact[data-v-0037c057] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    gap: 5px;\n}\n.contact p[data-v-0037c057] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 14px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    margin: 0px;\n}\n.id-titel p[data-v-0037c057] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 12px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: normal;\r\n    margin: 0px;\n}\n.id-titel svg[data-v-0037c057] {\r\n    width: 18px;\r\n    height: 18px;\n}\n.contact-box[data-v-0037c057] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    padding-bottom: 15px;\n}\n.para-box p[data-v-0037c057] {\r\n  color: #000;\r\n    text-align: center;\r\n    font-family: sans-serif;\r\n    font-size: 14px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: 22px;\r\n    margin: 0px;\r\n    padding: 20px 0px 0px 0px;\n}\n.buttons[data-v-0037c057] {\r\n    border-radius: 6px;\r\n    border: 1px solid #000;\r\n    background: #F96;\r\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\r\n    display: flex;\r\n    width: 144.75px;\r\n    height: 38px;\r\n    padding: 10px 18px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 7.647px;\r\n    flex-shrink: 0;\n}\n.main[data-v-0037c057] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: flex-start;\n}\n.box-2[data-v-0037c057] {\r\n    height:100%;\r\n    flex-shrink: 0;\r\n    border-radius: 20px;\r\n    background: #FFF;\r\n    box-shadow: 0px 10px 54px 0px rgba(0, 0, 0, 0.25);\r\n    width: 90%;\r\n    padding: 24px;\n}\n}\n@media screen and (max-width: 1024px){\n.id-box h3[data-v-0037c057] {color: #000;font-family: sans-serif;font-size: 10px;font-style: normal;font-weight: 500;line-height: normal;}\n.page-1[data-v-0037c057] {\r\n    width: 100%;\r\n    background-color: #F5F3EA;\r\n    padding: 40px;\n}\n.main[data-v-0037c057] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-wrap: wrap;\r\n    gap: 55px 0px;\n}\n.box-1[data-v-0037c057] {\r\n  /* height: 720px; */\r\n    background: transparent;\r\n    width: 100%;\n}\n.box-2[data-v-0037c057] {\r\n    height: 100%;\r\n    flex-shrink: 0;\r\n    border-radius: 20px;\r\n    background: #FFF;\r\n    box-shadow: 0px 10px 54px 0px rgba(0, 0, 0, 0.25);\r\n    width: 40%;\r\n    padding: 24px;\n}\n.btn-2[data-v-0037c057] {\r\n    display: flex;\r\n    width: 44%;\r\n    justify-content: space-between;\n}\n}\n@media screen and (max-width: 768px){\n.id-box h3[data-v-0037c057] {color: #000;font-family: sans-serif;font-size: 10px;font-style: normal;font-weight: 500;line-height: normal;}\n.cards[data-v-0037c057] {\r\n    border-radius: 16px;\r\n    border: 2px solid #000;\r\n    background: #F96;\r\n    box-shadow: 4px 4px 0px 2px #1B1C1D;\r\n    width: 44%;\r\n    height: 260px;\r\n    flex-shrink: 0;\n}\n.inp[data-v-0037c057][data-v-0037c057] {\r\n    width: 85%;\r\n    border-radius: 10px;\r\n    height: 2em;\r\n    background-color: transparent;\r\n    border: none;\r\n    outline: none;\r\n    color: black;\n}\n.card-box[data-v-0037c057] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n    gap: 31px;\n}\n.btn-box[data-v-0037c057] {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: stretch;\r\n    justify-content: space-between;\r\n    padding: 30px 0px;\r\n    flex-direction: column;\r\n    gap: 25px;\n}\n.btn-2[data-v-0037c057] {\r\n    display: flex;\r\n    width: 60%;\r\n    justify-content: space-between;\n}\n.box-2[data-v-0037c057] {\r\n    height: 100%;\r\n    flex-shrink: 0;\r\n    border-radius: 20px;\r\n    background: #FFF;\r\n    box-shadow: 0px 10px 54px 0px rgba(0, 0, 0, 0.25);\r\n    width: 55%;\r\n    padding: 24px;\n}\n.Sponsorship[data-v-0037c057] {\r\n    width: 100%;\r\n    height: 720px;\r\n    flex-shrink: 0;\r\n    border-radius: 20px;\r\n    background: #FFF;\r\n    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\r\n    padding: 30px 20px;\n}\n}\n@media screen and (max-width: 425px){\n.id-box h3[data-v-0037c057] {color: #000;font-family: sans-serif;font-size: 8px;font-style: normal;font-weight: 500;line-height: normal;}\n.page-1[data-v-0037c057] {\r\n    width: 100%;\r\n    background-color: #F5F3EA;\r\n    padding: 20px;\n}\n.inp[data-v-0037c057][data-v-0037c057][data-v-0037c057] {\r\n    width: 75%;\r\n    border-radius: 10px;\r\n    height: 2em;\r\n    background-color: transparent;\r\n    border: none;\r\n    outline: none;\r\n    color: black;\n}\n.yes[data-v-0037c057] {\r\n    width: 50%;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 2px;\r\n    justify-content: center;\n}\n.cards[data-v-0037c057] {\r\n    border-radius: 16px;\r\n    border: 2px solid #000;\r\n    background: #F96;\r\n    box-shadow: 4px 4px 0px 2px #1B1C1D;\r\n    width: 85%;\r\n    height: 260px;\r\n    flex-shrink: 0;\n}\n.btn-box[data-v-0037c057] {\r\n    width: 100%;\r\n    display: flex;\r\n    padding: 30px 0px 0px 0px;\r\n    flex-direction: column;\r\n    gap: 25px ;\r\n    align-content: center;\r\n    align-items: center;\n}\n.btn-1[data-v-0037c057] {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 18px;\r\n    justify-content: center;\n}\n.btn-2[data-v-0037c057] {\r\n    display: flex;\r\n    width: 60%;\r\n    flex-direction: column;\r\n    gap: 12px;\n}\n.over-box[data-v-0037c057] {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    gap: 20px 0px;\n}\n.Over-card[data-v-0037c057] {\r\n    width: 50%;\n}\n.OverView[data-v-0037c057] {\r\n    width: 100%;\r\n    padding-top: 40px;\n}\n.over-btn button[data-v-0037c057] {\r\n    border-radius: 6px;\r\n    border: 1px solid #000;\r\n    background: #F96;\r\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\r\n    display: inline-flex;\r\n    padding: 6px 16.25px 6px 15px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 4.75px;\r\n    color: #FFF;\r\n    text-align: center;\r\n    font-family: sans-serif;\r\n    font-size: 14px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 24px;\n}\n.over-btn[data-v-0037c057] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    padding: 30px 0px 0px 0px;\n}\n.box-2[data-v-0037c057] {\r\n    height: 100%;\r\n    flex-shrink: 0;\r\n    border-radius: 20px;\r\n    background: #FFF;\r\n    box-shadow: 0px 10px 54px 0px rgba(0, 0, 0, 0.25);\r\n    width: 90%;\n}\n.id-box[data-v-0037c057] {\r\n    width: 100%;\r\n    display: flex;\r\n    /* flex-direction: column; */\r\n    align-items: center;\r\n    padding: 20px 0px 25px 0px;\n}\n}\n@media screen and (max-width: 375px){\n.inp[data-v-0037c057][data-v-0037c057][data-v-0037c057] {\r\n    width: 70%;\r\n    border-radius: 10px;\r\n    height: 2em;\r\n    background-color: transparent;\r\n    border: none;\r\n    outline: none;\r\n    color: black;\n}\n}\n@media screen and (max-width: 325px){\n.inp[data-v-0037c057][data-v-0037c057][data-v-0037c057] {\r\n    width: 64%;\r\n    border-radius: 10px;\r\n    height: 2em;\r\n    background-color: transparent;\r\n    border: none;\r\n    outline: none;\r\n    color: black;\n}\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/chat.vue?vue&type=style&index=0&id=0037c057&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/chat.vue?vue&type=style&index=0&id=0037c057&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_style_index_0_id_0037c057_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./chat.vue?vue&type=style&index=0&id=0037c057&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/chat.vue?vue&type=style&index=0&id=0037c057&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_style_index_0_id_0037c057_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_style_index_0_id_0037c057_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/views/admin/chat.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/admin/chat.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _chat_vue_vue_type_template_id_0037c057_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat.vue?vue&type=template&id=0037c057&scoped=true& */ "./resources/js/views/admin/chat.vue?vue&type=template&id=0037c057&scoped=true&");
/* harmony import */ var _chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/chat.vue?vue&type=script&lang=js&");
/* harmony import */ var _chat_vue_vue_type_style_index_0_id_0037c057_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat.vue?vue&type=style&index=0&id=0037c057&scoped=true&lang=css& */ "./resources/js/views/admin/chat.vue?vue&type=style&index=0&id=0037c057&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _chat_vue_vue_type_template_id_0037c057_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _chat_vue_vue_type_template_id_0037c057_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "0037c057",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/chat.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/chat.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/views/admin/chat.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./chat.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/chat.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/admin/chat.vue?vue&type=style&index=0&id=0037c057&scoped=true&lang=css&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/views/admin/chat.vue?vue&type=style&index=0&id=0037c057&scoped=true&lang=css& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_style_index_0_id_0037c057_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./chat.vue?vue&type=style&index=0&id=0037c057&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/chat.vue?vue&type=style&index=0&id=0037c057&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/views/admin/chat.vue?vue&type=template&id=0037c057&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/admin/chat.vue?vue&type=template&id=0037c057&scoped=true& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_template_id_0037c057_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_template_id_0037c057_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_template_id_0037c057_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./chat.vue?vue&type=template&id=0037c057&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/chat.vue?vue&type=template&id=0037c057&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/chat.vue?vue&type=template&id=0037c057&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/chat.vue?vue&type=template&id=0037c057&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
          _c("div", { staticClass: "col-12 coloum" }, [
            _c("div", { staticClass: "row cent" }, [
              _c(
                "div",
                {
                  staticClass: "col",
                  staticStyle: { "margin-bottom": "10px", "margin-top": "10px" }
                },
                [
                  _vm.inf_img
                    ? _c("img", {
                        staticClass: "imgs",
                        attrs: { src: "/uploads/" + _vm.inf_img }
                      })
                    : _c("img", {
                        staticClass: "imgs",
                        attrs: { src: "/images/Characters.png" }
                      }),
                  _vm._v(" "),
                  _c("span", { staticClass: "sp" }, [
                    _vm._v(_vm._s(_vm.chatname))
                  ])
                ]
              ),
              _vm._v(" "),
              _vm._m(0)
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "chat-box", attrs: { id: "chat-box" } },
              _vm._l(_vm.messages, function(message) {
                return _c("div", { key: message.id, staticClass: "col-12" }, [
                  _c(
                    "div",
                    {
                      class: {
                        dyncols: message.sender_id != _vm.chat_user,
                        dyncol:
                          message.sender_id == _vm.chat_user || message.user
                      }
                    },
                    [
                      _c(
                        "div",
                        {
                          class: {
                            message: message.sender_id == _vm.chat_user,
                            messagess:
                              message.sender_id != _vm.chat_user &&
                              !message.user,
                            message: message.text
                          }
                        },
                        [
                          _c("strong", [
                            _vm._v(
                              _vm._s(
                                message.sender_id
                                  ? message.sender_id == _vm.chat_user
                                    ? "You"
                                    : _vm.chatname
                                  : message.user
                              ) + ":"
                            )
                          ]),
                          _vm._v(" " + _vm._s(message.text) + "\n        ")
                        ]
                      )
                    ]
                  )
                ])
              }),
              0
            ),
            _vm._v(" "),
            _c("div", { staticClass: "inps" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.newMessage,
                    expression: "newMessage"
                  }
                ],
                staticClass: "inp",
                attrs: { placeholder: "Type a message..." },
                domProps: { value: _vm.newMessage },
                on: {
                  keyup: function($event) {
                    if (
                      !$event.type.indexOf("key") &&
                      _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                    ) {
                      return null
                    }
                    return _vm.sendMessage.apply(null, arguments)
                  },
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.newMessage = $event.target.value
                  }
                }
              }),
              _vm._v(" "),
              _c(
                "button",
                { staticClass: "buttonsss", on: { click: _vm.sendMessage } },
                [
                  _c(
                    "svg",
                    {
                      attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        height: "1em",
                        viewBox: "0 0 512 512"
                      }
                    },
                    [
                      _c("path", {
                        attrs: {
                          d:
                            "M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"
                        }
                      })
                    ]
                  )
                ]
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col" }, [
          _c(
            "div",
            {
              staticClass: "row",
              staticStyle: { display: "flex", "justify-content": "center" }
            },
            [
              _c("div", { staticClass: "box-2" }, [
                _c("h2", [_vm._v("Personal Profile")]),
                _vm._v(" "),
                _c("div", { staticClass: "row id-box " }, [
                  _c("div", { staticClass: "col-6 text-center" }, [
                    _vm.model.auth_type == "Influencer"
                      ? _c("img", {
                          attrs: { src: "/uploads/" + _vm.model.image, alt: "" }
                        })
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.model.auth_type == "Brand"
                      ? _c("img", {
                          attrs: { src: "/images/Characters.png", alt: "" }
                        })
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-6" }, [
                    _c("h2", [_vm._v(_vm._s(_vm.model.user_name))]),
                    _vm._v(" "),
                    _c("h3", [_vm._v(_vm._s(_vm.model.email))]),
                    _vm._v(" "),
                    _vm.model.auth_type == "Influencer"
                      ? _c(
                          "button",
                          {
                            staticClass: "buttons",
                            on: { click: _vm.profile }
                          },
                          [
                            _c("p", { staticClass: "buttonp" }, [
                              _vm._v("Profile")
                            ]),
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
                          ]
                        )
                      : _vm._e()
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "para-box" }, [
                  _c("p", [_vm._v(_vm._s(_vm.model.bio))])
                ])
              ])
            ]
          ),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("h2", { staticClass: "chat-para" }, [_vm._v("Chat")]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "col",
              staticStyle: {
                overflow: "scroll",
                height: "200px",
                "overflow-x": "hidden"
              }
            },
            _vm._l(_vm.influencer, function(inf) {
              return _c("div", { staticClass: "div" }, [
                _c(
                  "div",
                  {
                    staticClass: "row",
                    staticStyle: {
                      display: "flex",
                      "justify-content": "space-between",
                      "margin-left": "5px",
                      width: "100%"
                    }
                  },
                  [
                    _c("div", { staticClass: "row ahtis" }, [
                      _c("div", { staticClass: "col-2" }, [
                        _c("a", [
                          inf.image
                            ? _c("img", {
                                staticClass: "imges",
                                attrs: { src: "/uploads/" + inf.image, alt: "" }
                              })
                            : _c("img", {
                                staticClass: "imges",
                                attrs: {
                                  src: "/images/Characters.png",
                                  alt: ""
                                }
                              }),
                          _vm._v(" "),
                          inf.chat_count > 0
                            ? _c(
                                "span",
                                {
                                  staticClass:
                                    "badge badge-danger badge-counter pos"
                                },
                                [_vm._v(_vm._s(inf.chat_count))]
                              )
                            : _vm._e()
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-7" }, [
                        _c("span", { staticClass: "sss" }, [
                          _vm._v(
                            _vm._s(inf.user_name ? inf.user_name : "Influencer")
                          )
                        ]),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v(" "),
                        _c("span", { staticClass: "ss" }, [
                          _vm._v(_vm._s(inf.bio ? "Influencer" : "Influencer"))
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-3" }, [
                        _c(
                          "button",
                          {
                            staticClass: "buts",
                            on: {
                              click: function($event) {
                                return _vm.setitem(inf)
                              }
                            }
                          },
                          [_vm._v("Chat")]
                        )
                      ])
                    ])
                  ]
                )
              ])
            }),
            0
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
    return _c(
      "div",
      {
        staticClass: "col text-right",
        staticStyle: { "margin-bottom": "10px", "margin-top": "10px" }
      },
      [
        _c(
          "p",
          {
            staticStyle: {
              color: "#000",
              "font-size": "16px",
              "font-style": "normal",
              "font-weight": "700",
              "line-height": "normal"
            }
          },
          [
            _vm._v("See Profile\n\n"),
            _c("img", { attrs: { src: "/images/basil_settings-solid.png" } })
          ]
        )
      ]
    )
  }
]
render._withStripped = true



/***/ })

}]);