webpackHotUpdate_N_E("pages/index",{

/***/ "./components/AppLayout.js":
/*!*********************************!*\
  !*** ./components/AppLayout.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _LoginForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LoginForm */ "./components/LoginForm.js");
/* harmony import */ var _UserProfile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./UserProfile */ "./components/UserProfile.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var _templateObject,
    _templateObject2,
    _this = undefined,
    _jsxFileName = "C:\\Users\\nogo0\\#code\\Learnworkspace\\table5\\front\\components\\AppLayout.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








var SearchInput = Object(styled_components__WEBPACK_IMPORTED_MODULE_8__["default"])(antd__WEBPACK_IMPORTED_MODULE_4__["Input"].Search)(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  vertical-align: middle;\n"])));
_c = SearchInput;
var GithubIcon = Object(styled_components__WEBPACK_IMPORTED_MODULE_8__["default"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["GithubOutlined"])(_templateObject2 || (_templateObject2 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-size: 16px;\n  color: gray;\n  margin: 5px;\n"])));
_c2 = GithubIcon;

var AppLayout = function AppLayout(_ref) {
  _s();

  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isLoggedIn = _useState[0],
      setIsLoggedIn = _useState[1];

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"], {
    mode: "horizontal",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, "\uB178\uB4DC\uBC84\uB4DC"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/profile",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, "\uD504\uB85C\uD544"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, __jsx(SearchInput, {
    enterButton: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/signup",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, "\uD68C\uC6D0\uAC00\uC785")))), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    gutter: 8,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    xs: 24,
    md: 6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, isLoggedIn ? __jsx(_UserProfile__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }) : __jsx(_LoginForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
    setisLoggedIn: setisLoggedIn,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    xs: 24,
    md: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, children), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    xs: 24,
    md: 6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "https://github.com/nogoduck",
    target: "_black",
    rel: "noreferrer noopener",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, "Made by Ad =>", __jsx(GithubIcon, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }), "Github"))));
};

_s(AppLayout, "g0MSgNVZk+vKiEFnDJ9VPEfswFA=");

_c3 = AppLayout;
AppLayout.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (AppLayout);

var _c, _c2, _c3;

$RefreshReg$(_c, "SearchInput");
$RefreshReg$(_c2, "GithubIcon");
$RefreshReg$(_c3, "AppLayout");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcHBMYXlvdXQuanMiXSwibmFtZXMiOlsiU2VhcmNoSW5wdXQiLCJzdHlsZWQiLCJJbnB1dCIsIlNlYXJjaCIsIkdpdGh1Ykljb24iLCJHaXRodWJPdXRsaW5lZCIsIkFwcExheW91dCIsImNoaWxkcmVuIiwidXNlU3RhdGUiLCJpc0xvZ2dlZEluIiwic2V0SXNMb2dnZWRJbiIsInNldGlzTG9nZ2VkSW4iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJub2RlIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFdBQVcsR0FBR0MsaUVBQU0sQ0FBQ0MsMENBQUssQ0FBQ0MsTUFBUCxDQUFULDRLQUFqQjtLQUFNSCxXO0FBR04sSUFBTUksVUFBVSxHQUFHSCxpRUFBTSxDQUFDSSxnRUFBRCxDQUFULHVNQUFoQjtNQUFNRCxVOztBQU1OLElBQU1FLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQWtCO0FBQUE7O0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlOztBQUNsQyxrQkFBb0NDLHNEQUFRLENBQUMsS0FBRCxDQUE1QztBQUFBLE1BQU9DLFVBQVA7QUFBQSxNQUFtQkMsYUFBbkI7O0FBQ0EsU0FDRSxtRUFDRSxNQUFDLHlDQUFEO0FBQU0sUUFBSSxFQUFDLFlBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBREYsQ0FERixDQURGLEVBTUUsTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsVUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFERixDQURGLENBTkYsRUFXRSxNQUFDLHlDQUFELENBQU0sSUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxXQUFEO0FBQWEsZUFBVyxNQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FYRixFQWNFLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLFNBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBREYsQ0FERixDQWRGLENBREYsRUFxQkUsTUFBQyx3Q0FBRDtBQUFLLFVBQU0sRUFBRSxDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdDQUFEO0FBQUssTUFBRSxFQUFFLEVBQVQ7QUFBYSxNQUFFLEVBQUUsQ0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRCxVQUFVLEdBQ1QsTUFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRFMsR0FHVCxNQUFDLGtEQUFEO0FBQVcsaUJBQWEsRUFBRUUsYUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpKLENBREYsRUFRRSxNQUFDLHdDQUFEO0FBQUssTUFBRSxFQUFFLEVBQVQ7QUFBYSxNQUFFLEVBQUUsRUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHSixRQURILENBUkYsRUFXRSxNQUFDLHdDQUFEO0FBQUssTUFBRSxFQUFFLEVBQVQ7QUFBYSxNQUFFLEVBQUUsQ0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsUUFBSSxFQUFDLDZCQURQO0FBRUUsVUFBTSxFQUFDLFFBRlQ7QUFHRSxPQUFHLEVBQUMscUJBSE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFNRSxNQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5GLFdBREYsQ0FYRixDQXJCRixDQURGO0FBK0NELENBakREOztHQUFNRCxTOztNQUFBQSxTO0FBbUROQSxTQUFTLENBQUNNLFNBQVYsR0FBc0I7QUFDcEJMLFVBQVEsRUFBRU0saURBQVMsQ0FBQ0MsSUFBVixDQUFlQztBQURMLENBQXRCO0FBSWVULHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmRlNWZhNDdhZWZiMDIzZjk5YTJlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgTWVudSwgSW5wdXQsIFJvdywgQ29sIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgR2l0aHViT3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuXHJcbmltcG9ydCBMb2dpbkZvcm0gZnJvbSBcIi4vTG9naW5Gb3JtXCI7XHJcbmltcG9ydCBVc2VyUHJvZmlsZSBmcm9tIFwiLi9Vc2VyUHJvZmlsZVwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgU2VhcmNoSW5wdXQgPSBzdHlsZWQoSW5wdXQuU2VhcmNoKWBcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG5gO1xyXG5jb25zdCBHaXRodWJJY29uID0gc3R5bGVkKEdpdGh1Yk91dGxpbmVkKWBcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6IGdyYXk7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbmA7XHJcblxyXG5jb25zdCBBcHBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgW2lzTG9nZ2VkSW4sIHNldElzTG9nZ2VkSW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TWVudSBtb2RlPVwiaG9yaXpvbnRhbFwiPlxyXG4gICAgICAgIDxNZW51Lkl0ZW0+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICA8YT7rhbjrk5zrsoTrk5w8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgPE1lbnUuSXRlbT5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZmlsZVwiPlxyXG4gICAgICAgICAgICA8YT7tlITroZztlYQ8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgPE1lbnUuSXRlbT5cclxuICAgICAgICAgIDxTZWFyY2hJbnB1dCBlbnRlckJ1dHRvbiAvPlxyXG4gICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgIDxNZW51Lkl0ZW0+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL3NpZ251cFwiPlxyXG4gICAgICAgICAgICA8YT7tmozsm5DqsIDsnoU8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgIDwvTWVudT5cclxuICAgICAgPFJvdyBndXR0ZXI9ezh9PlxyXG4gICAgICAgIDxDb2wgeHM9ezI0fSBtZD17Nn0+XHJcbiAgICAgICAgICB7aXNMb2dnZWRJbiA/IChcclxuICAgICAgICAgICAgPFVzZXJQcm9maWxlIC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8TG9naW5Gb3JtIHNldGlzTG9nZ2VkSW49e3NldGlzTG9nZ2VkSW59IC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDxDb2wgeHM9ezI0fSBtZD17MTJ9PlxyXG4gICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDxDb2wgeHM9ezI0fSBtZD17Nn0+XHJcbiAgICAgICAgICA8YVxyXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL25vZ29kdWNrXCJcclxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYWNrXCJcclxuICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlciBub29wZW5lclwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIE1hZGUgYnkgQWQgPT5cclxuICAgICAgICAgICAgPEdpdGh1Ykljb24gLz5cclxuICAgICAgICAgICAgR2l0aHViXHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgIDwvUm93PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbkFwcExheW91dC5wcm9wVHlwZXMgPSB7XHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHBMYXlvdXQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=