(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/UserLogin/UserLogin"],{

/***/ 42:
/*!*************************************************************************************!*\
  !*** D:/third-2/Vue/shortTerm/HIP/main.js?{"page":"pages%2FUserLogin%2FUserLogin"} ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _UserLogin = _interopRequireDefault(__webpack_require__(/*! ./pages/UserLogin/UserLogin.vue */ 43));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_UserLogin.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 43:
/*!******************************************************************!*\
  !*** D:/third-2/Vue/shortTerm/HIP/pages/UserLogin/UserLogin.vue ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserLogin_vue_vue_type_template_id_5bd0b644___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserLogin.vue?vue&type=template&id=5bd0b644& */ 44);
/* harmony import */ var _UserLogin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserLogin.vue?vue&type=script&lang=js& */ 46);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _UserLogin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _UserLogin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _shortTerm_HBuilderX_3_1_22_20210709_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shortTerm/HBuilderX.3.1.22.20210709.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);

var renderjs




/* normalize component */

var component = Object(_shortTerm_HBuilderX_3_1_22_20210709_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserLogin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserLogin_vue_vue_type_template_id_5bd0b644___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserLogin_vue_vue_type_template_id_5bd0b644___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _UserLogin_vue_vue_type_template_id_5bd0b644___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/UserLogin/UserLogin.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 44:
/*!*************************************************************************************************!*\
  !*** D:/third-2/Vue/shortTerm/HIP/pages/UserLogin/UserLogin.vue?vue&type=template&id=5bd0b644& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shortTerm_HBuilderX_3_1_22_20210709_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_shortTerm_HBuilderX_3_1_22_20210709_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_shortTerm_HBuilderX_3_1_22_20210709_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_shortTerm_HBuilderX_3_1_22_20210709_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_shortTerm_HBuilderX_3_1_22_20210709_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_shortTerm_HBuilderX_3_1_22_20210709_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_UserLogin_vue_vue_type_template_id_5bd0b644___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../shortTerm/HBuilderX.3.1.22.20210709.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../shortTerm/HBuilderX.3.1.22.20210709.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../shortTerm/HBuilderX.3.1.22.20210709.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../shortTerm/HBuilderX.3.1.22.20210709.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../shortTerm/HBuilderX.3.1.22.20210709.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../shortTerm/HBuilderX.3.1.22.20210709.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./UserLogin.vue?vue&type=template&id=5bd0b644& */ 45);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _shortTerm_HBuilderX_3_1_22_20210709_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_shortTerm_HBuilderX_3_1_22_20210709_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_shortTerm_HBuilderX_3_1_22_20210709_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_shortTerm_HBuilderX_3_1_22_20210709_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_shortTerm_HBuilderX_3_1_22_20210709_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_shortTerm_HBuilderX_3_1_22_20210709_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_UserLogin_vue_vue_type_template_id_5bd0b644___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _shortTerm_HBuilderX_3_1_22_20210709_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_shortTerm_HBuilderX_3_1_22_20210709_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_shortTerm_HBuilderX_3_1_22_20210709_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_shortTerm_HBuilderX_3_1_22_20210709_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_shortTerm_HBuilderX_3_1_22_20210709_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_shortTerm_HBuilderX_3_1_22_20210709_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_UserLogin_vue_vue_type_template_id_5bd0b644___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _shortTerm_HBuilderX_3_1_22_20210709_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_shortTerm_HBuilderX_3_1_22_20210709_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_shortTerm_HBuilderX_3_1_22_20210709_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_shortTerm_HBuilderX_3_1_22_20210709_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_shortTerm_HBuilderX_3_1_22_20210709_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_shortTerm_HBuilderX_3_1_22_20210709_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_UserLogin_vue_vue_type_template_id_5bd0b644___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _shortTerm_HBuilderX_3_1_22_20210709_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_shortTerm_HBuilderX_3_1_22_20210709_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_shortTerm_HBuilderX_3_1_22_20210709_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_shortTerm_HBuilderX_3_1_22_20210709_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_shortTerm_HBuilderX_3_1_22_20210709_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_shortTerm_HBuilderX_3_1_22_20210709_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_UserLogin_vue_vue_type_template_id_5bd0b644___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 45:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/third-2/Vue/shortTerm/HIP/pages/UserLogin/UserLogin.vue?vue&type=template&id=5bd0b644& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uImage: function() {
      return __webpack_require__.e(/*! import() | uview-ui/components/u-image/u-image */ "uview-ui/components/u-image/u-image").then(__webpack_require__.bind(null, /*! @/uview-ui/components/u-image/u-image.vue */ 242))
    }
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 46:
/*!*******************************************************************************************!*\
  !*** D:/third-2/Vue/shortTerm/HIP/pages/UserLogin/UserLogin.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shortTerm_HBuilderX_3_1_22_20210709_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_shortTerm_HBuilderX_3_1_22_20210709_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_shortTerm_HBuilderX_3_1_22_20210709_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_shortTerm_HBuilderX_3_1_22_20210709_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_shortTerm_HBuilderX_3_1_22_20210709_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_UserLogin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../shortTerm/HBuilderX.3.1.22.20210709.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../shortTerm/HBuilderX.3.1.22.20210709.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../shortTerm/HBuilderX.3.1.22.20210709.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../shortTerm/HBuilderX.3.1.22.20210709.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../shortTerm/HBuilderX.3.1.22.20210709.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./UserLogin.vue?vue&type=script&lang=js& */ 47);
/* harmony import */ var _shortTerm_HBuilderX_3_1_22_20210709_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_shortTerm_HBuilderX_3_1_22_20210709_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_shortTerm_HBuilderX_3_1_22_20210709_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_shortTerm_HBuilderX_3_1_22_20210709_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_shortTerm_HBuilderX_3_1_22_20210709_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_UserLogin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_shortTerm_HBuilderX_3_1_22_20210709_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_shortTerm_HBuilderX_3_1_22_20210709_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_shortTerm_HBuilderX_3_1_22_20210709_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_shortTerm_HBuilderX_3_1_22_20210709_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_shortTerm_HBuilderX_3_1_22_20210709_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_UserLogin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _shortTerm_HBuilderX_3_1_22_20210709_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_shortTerm_HBuilderX_3_1_22_20210709_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_shortTerm_HBuilderX_3_1_22_20210709_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_shortTerm_HBuilderX_3_1_22_20210709_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_shortTerm_HBuilderX_3_1_22_20210709_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_UserLogin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _shortTerm_HBuilderX_3_1_22_20210709_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_shortTerm_HBuilderX_3_1_22_20210709_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_shortTerm_HBuilderX_3_1_22_20210709_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_shortTerm_HBuilderX_3_1_22_20210709_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_shortTerm_HBuilderX_3_1_22_20210709_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_UserLogin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_shortTerm_HBuilderX_3_1_22_20210709_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_shortTerm_HBuilderX_3_1_22_20210709_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_shortTerm_HBuilderX_3_1_22_20210709_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_shortTerm_HBuilderX_3_1_22_20210709_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_shortTerm_HBuilderX_3_1_22_20210709_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_UserLogin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 47:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/third-2/Vue/shortTerm/HIP/pages/UserLogin/UserLogin.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;








var _UserIndex = _interopRequireDefault(__webpack_require__(/*! ../../static/store/UserIndex.js */ 11));
var _WXBizDataCrypt = _interopRequireDefault(__webpack_require__(/*! ../../WXBizDataCrypt.js */ 48));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
//
//
//
//
//
//
//
var _default = { onLoad: function onLoad() {/**
                                             * 获取药品列表
                                             * uni.request({
                                            	 * url:'',
                                            	 * method:'GET',
                                            	 * success:(res)=>{
                                            		 * 
                                            	 }
                                             })*/}, data: function data() {return { Code: '',
      openid: '',
      session_key: '',
      avatarUrl: '',
      userName: '',
      src2: 'https://github.com/maojiangyu/img/blob/main/%E5%8C%BB%E9%99%A2.png?raw=true',
      src: 'https://iconfont.alicdn.com/t/7dc11ab6-0509-43bf-a0ab-62056a85bfde.png' };

  },
  methods: {
    login: function login() {var _this = this;
      uni.getUserProfile({
        desc: 'Wexin', // 这个参数是必须的
        success: function success(res) {

          _this.avatarUrl = res.userInfo.avatarUrl;
          _this.userName = res.userInfo.nickName;
          _UserIndex.default.state.avatarUrl = _this.avatarUrl;
          _UserIndex.default.state.UserName = _this.userName;
          //登录
          uni.login({
            provider: 'weixin',
            success: function success(res) {
              // console.log('登录成功：', res);
              //获取临时登录凭证code
              _this.Code = res.code;
              //获取openid，session_key
              var appid = "wx2d6f34fa4034778d"; //需替换
              var secret = "4fefc57c42a25878476cccd7426dde5b"; //需替换
              var url = 'https://api.weixin.qq.com/sns/jscode2session?appid=' + appid + '&secret=' + secret +
              '&js_code=' +
              _this.Code + '&grant_type=authorization_code';
              uni.request({
                url: url, // 请求路径
                success: function success(res) {
                  // console.log('openid session_key:', res.data);
                  _this.openid = res.data.openid;
                  _this.session_key = res.data.session_key;

                  //获取用户信息
                  uni.getUserInfo({
                    provider: 'weixin',
                    success: function success(res) {

                      //解密encryptedData，可获取用户openId
                      var pc = new _WXBizDataCrypt.default(appid, _this.session_key);
                      var data = pc.decryptData(res.encryptedData, res.iv);

                      _this.openid = data.openId;
                      _UserIndex.default.state.open_id = _this.openid;
                    },
                    fail: function fail(err) {
                      console.log('获取用户信息错误：', err);
                    } });


                },
                fail: function fail(err) {
                  console.log('请求失败：', err);
                } });

            },
            fail: function fail(err) {
              console.log('登录失败：', err);
            } });

          uni.navigateTo({
            url: '../UserIndex/UserIndex' });

        } });



    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ })

},[[42,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/UserLogin/UserLogin.js.map