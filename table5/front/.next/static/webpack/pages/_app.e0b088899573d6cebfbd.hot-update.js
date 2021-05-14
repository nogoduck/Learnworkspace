webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, addPost, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var initialState = {
  mainPoasts: [{
    id: 1,
    User: {
      id: 1,
      nickname: "NotAngry"
    },
    content: "첫 버드",
    Images: [{
      src: "http://placehold.it/500x500"
    }, {
      src: "http://placehold.it/450x450"
    }, {
      src: "http://placehold.it/400x400"
    }],
    Comments: [{
      User: {
        nickname: "FabioWimber"
      },
      content: "kona is hard"
    }, {
      User: {
        nickname: "OuO"
      },
      content: "Second Comment"
    }]
  }],
  imagePaths: [],
  postAdded: false
};
var ADD_POST = "ADD_POST";
var addPost = {
  type: ADD_POST
};
var dummyPost = {
  id: 2,
  content: "쓰레기값",
  User: {
    id: 1,
    nickname: "bin"
  },
  Images: [],
  Comments: []
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ADD_POST:
      return _objectSpread(_objectSpread({}, state), {}, {
        mainPosts: [dummyPost].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.mainPoasts))
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9hc3RzIiwiaWQiLCJVc2VyIiwibmlja25hbWUiLCJjb250ZW50IiwiSW1hZ2VzIiwic3JjIiwiQ29tbWVudHMiLCJpbWFnZVBhdGhzIiwicG9zdEFkZGVkIiwiQUREX1BPU1QiLCJhZGRQb3N0IiwidHlwZSIsImR1bW15UG9zdCIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsIm1haW5Qb3N0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLElBQU1BLFlBQVksR0FBRztBQUMxQkMsWUFBVSxFQUFFLENBQ1Y7QUFDRUMsTUFBRSxFQUFFLENBRE47QUFFRUMsUUFBSSxFQUFFO0FBQ0pELFFBQUUsRUFBRSxDQURBO0FBRUpFLGNBQVEsRUFBRTtBQUZOLEtBRlI7QUFNRUMsV0FBTyxFQUFFLE1BTlg7QUFPRUMsVUFBTSxFQUFFLENBQ047QUFBRUMsU0FBRyxFQUFFO0FBQVAsS0FETSxFQUVOO0FBQUVBLFNBQUcsRUFBRTtBQUFQLEtBRk0sRUFHTjtBQUFFQSxTQUFHLEVBQUU7QUFBUCxLQUhNLENBUFY7QUFZRUMsWUFBUSxFQUFFLENBQ1I7QUFDRUwsVUFBSSxFQUFFO0FBQ0pDLGdCQUFRLEVBQUU7QUFETixPQURSO0FBSUVDLGFBQU8sRUFBRTtBQUpYLEtBRFEsRUFPUjtBQUNFRixVQUFJLEVBQUU7QUFDSkMsZ0JBQVEsRUFBRTtBQUROLE9BRFI7QUFJRUMsYUFBTyxFQUFFO0FBSlgsS0FQUTtBQVpaLEdBRFUsQ0FEYztBQThCMUJJLFlBQVUsRUFBRSxFQTlCYztBQStCMUJDLFdBQVMsRUFBRTtBQS9CZSxDQUFyQjtBQWtDUCxJQUFNQyxRQUFRLEdBQUcsVUFBakI7QUFDTyxJQUFNQyxPQUFPLEdBQUc7QUFDckJDLE1BQUksRUFBRUY7QUFEZSxDQUFoQjtBQUlQLElBQU1HLFNBQVMsR0FBRztBQUNoQlosSUFBRSxFQUFFLENBRFk7QUFFaEJHLFNBQU8sRUFBRSxNQUZPO0FBR2hCRixNQUFJLEVBQUU7QUFDSkQsTUFBRSxFQUFFLENBREE7QUFFSkUsWUFBUSxFQUFFO0FBRk4sR0FIVTtBQU9oQkUsUUFBTSxFQUFFLEVBUFE7QUFRaEJFLFVBQVEsRUFBRTtBQVJNLENBQWxCOztBQVdBLElBQU1PLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQWtDO0FBQUEsTUFBakNDLEtBQWlDLHVFQUF6QmhCLFlBQXlCO0FBQUEsTUFBWGlCLE1BQVc7O0FBQ2hELFVBQVFBLE1BQU0sQ0FBQ0osSUFBZjtBQUNFLFNBQUtGLFFBQUw7QUFDRSw2Q0FDS0ssS0FETDtBQUVFRSxpQkFBUyxHQUFHSixTQUFILHNHQUFpQkUsS0FBSyxDQUFDZixVQUF2QjtBQUZYOztBQUlGO0FBQ0UsYUFBT2UsS0FBUDtBQVBKO0FBU0QsQ0FWRDs7QUFZZUQsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5lMGIwODg4OTk1NzNkNmNlYmZiZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBtYWluUG9hc3RzOiBbXHJcbiAgICB7XHJcbiAgICAgIGlkOiAxLFxyXG4gICAgICBVc2VyOiB7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgbmlja25hbWU6IFwiTm90QW5ncnlcIixcclxuICAgICAgfSxcclxuICAgICAgY29udGVudDogXCLssqsg67KE65OcXCIsXHJcbiAgICAgIEltYWdlczogW1xyXG4gICAgICAgIHsgc3JjOiBcImh0dHA6Ly9wbGFjZWhvbGQuaXQvNTAweDUwMFwiIH0sXHJcbiAgICAgICAgeyBzcmM6IFwiaHR0cDovL3BsYWNlaG9sZC5pdC80NTB4NDUwXCIgfSxcclxuICAgICAgICB7IHNyYzogXCJodHRwOi8vcGxhY2Vob2xkLml0LzQwMHg0MDBcIiB9LFxyXG4gICAgICBdLFxyXG4gICAgICBDb21tZW50czogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIFVzZXI6IHtcclxuICAgICAgICAgICAgbmlja25hbWU6IFwiRmFiaW9XaW1iZXJcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBjb250ZW50OiBcImtvbmEgaXMgaGFyZFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgVXNlcjoge1xyXG4gICAgICAgICAgICBuaWNrbmFtZTogXCJPdU9cIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBjb250ZW50OiBcIlNlY29uZCBDb21tZW50XCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgXSxcclxuICBpbWFnZVBhdGhzOiBbXSxcclxuICBwb3N0QWRkZWQ6IGZhbHNlLFxyXG59O1xyXG5cclxuY29uc3QgQUREX1BPU1QgPSBcIkFERF9QT1NUXCI7XHJcbmV4cG9ydCBjb25zdCBhZGRQb3N0ID0ge1xyXG4gIHR5cGU6IEFERF9QT1NULFxyXG59O1xyXG5cclxuY29uc3QgZHVtbXlQb3N0ID0ge1xyXG4gIGlkOiAyLFxyXG4gIGNvbnRlbnQ6IFwi7JOw66CI6riw6rCSXCIsXHJcbiAgVXNlcjoge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBuaWNrbmFtZTogXCJiaW5cIixcclxuICB9LFxyXG4gIEltYWdlczogW10sXHJcbiAgQ29tbWVudHM6IFtdLFxyXG59O1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBBRERfUE9TVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBtYWluUG9zdHM6IFtkdW1teVBvc3QsIC4uLnN0YXRlLm1haW5Qb2FzdHNdLFxyXG4gICAgICB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=