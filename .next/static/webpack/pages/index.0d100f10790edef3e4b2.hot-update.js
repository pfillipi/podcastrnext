webpackHotUpdate_N_E("pages/index",{

/***/ "./src/context/PlayerContext.tsx":
/*!***************************************!*\
  !*** ./src/context/PlayerContext.tsx ***!
  \***************************************/
/*! exports provided: PlayerContext, PlayerContextProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PlayerContext\", function() { return PlayerContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PlayerContextProvider\", function() { return PlayerContextProvider; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/Users/fillipi/Documents/GitHub/podcastrnext/src/context/PlayerContext.tsx\",\n    _s = $RefreshSig$();\n\n\nvar PlayerContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])({});\nfunction PlayerContextProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      episodeList = _useState[0],\n      setEpisodeList = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      currentEpisodeIndex = _useState2[0],\n      setCurrentEpisodeIndex = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isPlaying = _useState3[0],\n      setIsPlaying = _useState3[1];\n\n  function play(episode) {\n    setEpisodeList([episode]);\n    setCurrentEpisodeIndex(0);\n    setIsPlaying(true);\n  }\n\n  function playList(list, index) {\n    setEpisodeList(list);\n    setCurrentEpisodeIndex(index);\n    setIsPlaying(true);\n  }\n\n  function togglePlay() {\n    setIsPlaying(!isPlaying);\n  }\n\n  function setPlayingState(state) {\n    setIsPlaying(state);\n  }\n\n  var hasPrevious = currentEpisodeIndex > 0;\n  var hasNext = currentEpisodeIndex + 1 < episodeList.length;\n\n  function playNext() {\n    if (hasNext) {\n      setCurrentEpisodeIndex(currentEpisodeIndex + 1);\n    }\n  }\n\n  function playPrevious() {\n    if (hasPrevious) {\n      setCurrentEpisodeIndex(currentEpisodeIndex - 1);\n    }\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(PlayerContext.Provider, {\n    value: {\n      episodeList: episodeList,\n      currentEpisodeIndex: currentEpisodeIndex,\n      play: play,\n      playList: playList,\n      playNext: playNext,\n      playPrevious: playPrevious,\n      isPlaying: isPlaying,\n      togglePlay: togglePlay,\n      setPlayingState: setPlayingState,\n      hasNext: hasNext,\n      hasPrevious: hasPrevious\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 70,\n    columnNumber: 5\n  }, this);\n}\n\n_s(PlayerContextProvider, \"LrQXJ4YCuKXOoMsmvRtpeyylJ9U=\");\n\n_c = PlayerContextProvider;\n\nvar _c;\n\n$RefreshReg$(_c, \"PlayerContextProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHQvUGxheWVyQ29udGV4dC50c3g/MjAxMSJdLCJuYW1lcyI6WyJQbGF5ZXJDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIlBsYXllckNvbnRleHRQcm92aWRlciIsImNoaWxkcmVuIiwidXNlU3RhdGUiLCJlcGlzb2RlTGlzdCIsInNldEVwaXNvZGVMaXN0IiwiY3VycmVudEVwaXNvZGVJbmRleCIsInNldEN1cnJlbnRFcGlzb2RlSW5kZXgiLCJpc1BsYXlpbmciLCJzZXRJc1BsYXlpbmciLCJwbGF5IiwiZXBpc29kZSIsInBsYXlMaXN0IiwibGlzdCIsImluZGV4IiwidG9nZ2xlUGxheSIsInNldFBsYXlpbmdTdGF0ZSIsInN0YXRlIiwiaGFzUHJldmlvdXMiLCJoYXNOZXh0IiwibGVuZ3RoIiwicGxheU5leHQiLCJwbGF5UHJldmlvdXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBc0JPLElBQU1BLGFBQWEsZ0JBQUdDLDJEQUFhLENBQUMsRUFBRCxDQUFuQztBQU1BLFNBQVNDLHFCQUFULE9BQXlFO0FBQUE7O0FBQUEsTUFBeENDLFFBQXdDLFFBQXhDQSxRQUF3Qzs7QUFBQSxrQkFDeENDLHNEQUFRLENBQUMsRUFBRCxDQURnQztBQUFBLE1BQ3ZFQyxXQUR1RTtBQUFBLE1BQzFEQyxjQUQwRDs7QUFBQSxtQkFFeEJGLHNEQUFRLENBQUMsQ0FBRCxDQUZnQjtBQUFBLE1BRXZFRyxtQkFGdUU7QUFBQSxNQUVsREMsc0JBRmtEOztBQUFBLG1CQUc1Q0osc0RBQVEsQ0FBQyxLQUFELENBSG9DO0FBQUEsTUFHdkVLLFNBSHVFO0FBQUEsTUFHNURDLFlBSDREOztBQUs5RSxXQUFTQyxJQUFULENBQWNDLE9BQWQsRUFBZ0M7QUFDOUJOLGtCQUFjLENBQUMsQ0FBQ00sT0FBRCxDQUFELENBQWQ7QUFDQUosMEJBQXNCLENBQUMsQ0FBRCxDQUF0QjtBQUNBRSxnQkFBWSxDQUFDLElBQUQsQ0FBWjtBQUNEOztBQUVELFdBQVNHLFFBQVQsQ0FBa0JDLElBQWxCLEVBQW1DQyxLQUFuQyxFQUFrRDtBQUNoRFQsa0JBQWMsQ0FBQ1EsSUFBRCxDQUFkO0FBQ0FOLDBCQUFzQixDQUFDTyxLQUFELENBQXRCO0FBQ0FMLGdCQUFZLENBQUMsSUFBRCxDQUFaO0FBQ0Q7O0FBRUQsV0FBU00sVUFBVCxHQUFzQjtBQUNwQk4sZ0JBQVksQ0FBQyxDQUFDRCxTQUFGLENBQVo7QUFDRDs7QUFFRCxXQUFTUSxlQUFULENBQXlCQyxLQUF6QixFQUF5QztBQUN2Q1IsZ0JBQVksQ0FBQ1EsS0FBRCxDQUFaO0FBQ0Q7O0FBRUQsTUFBTUMsV0FBVyxHQUFHWixtQkFBbUIsR0FBRyxDQUExQztBQUNBLE1BQU1hLE9BQU8sR0FBSWIsbUJBQW1CLEdBQUcsQ0FBdkIsR0FBNEJGLFdBQVcsQ0FBQ2dCLE1BQXhEOztBQUVBLFdBQVNDLFFBQVQsR0FBb0I7QUFDbEIsUUFBSUYsT0FBSixFQUFhO0FBQ1haLDRCQUFzQixDQUFDRCxtQkFBbUIsR0FBRyxDQUF2QixDQUF0QjtBQUNEO0FBQ0Y7O0FBRUQsV0FBU2dCLFlBQVQsR0FBd0I7QUFDdEIsUUFBSUosV0FBSixFQUFpQjtBQUNmWCw0QkFBc0IsQ0FBQ0QsbUJBQW1CLEdBQUcsQ0FBdkIsQ0FBdEI7QUFDRDtBQUNGOztBQUVELHNCQUNFLHFFQUFDLGFBQUQsQ0FBZSxRQUFmO0FBQ0UsU0FBSyxFQUFFO0FBQ0xGLGlCQUFXLEVBQVhBLFdBREs7QUFFTEUseUJBQW1CLEVBQW5CQSxtQkFGSztBQUdMSSxVQUFJLEVBQUpBLElBSEs7QUFJTEUsY0FBUSxFQUFSQSxRQUpLO0FBS0xTLGNBQVEsRUFBUkEsUUFMSztBQU1MQyxrQkFBWSxFQUFaQSxZQU5LO0FBT0xkLGVBQVMsRUFBVEEsU0FQSztBQVFMTyxnQkFBVSxFQUFWQSxVQVJLO0FBU0xDLHFCQUFlLEVBQWZBLGVBVEs7QUFVTEcsYUFBTyxFQUFQQSxPQVZLO0FBV0xELGlCQUFXLEVBQVhBO0FBWEssS0FEVDtBQUFBLGNBZUdoQjtBQWZIO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW1CRDs7R0EzRGVELHFCOztLQUFBQSxxQiIsImZpbGUiOiIuL3NyYy9jb250ZXh0L1BsYXllckNvbnRleHQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0JztcblxudHlwZSBFcGlzb2RlID0ge1xuICB0aXRsZTogc3RyaW5nO1xuICBtZW1iZXJzOiBzdHJpbmc7XG4gIHRodW1ibmFpbDogc3RyaW5nO1xuICBkdXJhdGlvbjogbnVtYmVyO1xuICB1cmw6IHN0cmluZztcbn07XG5cbnR5cGUgUGxheWVyQ29udGV4dERhdGEgPSB7XG4gIGVwaXNvZGVMaXN0OiBFcGlzb2RlW107XG4gIGN1cnJlbnRFcGlzb2RlSW5kZXg6IG51bWJlcjtcbiAgaXNQbGF5aW5nOiBib29sZWFuO1xuICBwbGF5OiAoZXBpc29kZTogRXBpc29kZSkgPT4gdm9pZDtcbiAgcGxheUxpc3Q6IChsaXN0OiBFcGlzb2RlW10sIGluZGV4OiBudW1iZXIpID0+IHZvaWQ7XG4gIHNldFBsYXlpbmdTdGF0ZTogKHN0YXRlOiBib29sZWFuKSA9PiB2b2lkO1xuICB0b2dnbGVQbGF5OiAoKSA9PiB2b2lkO1xuICBwbGF5TmV4dDogKCkgPT4gdm9pZDtcbiAgcGxheVByZXZpb3VzOiAoKSA9PiB2b2lkO1xufTtcblxuZXhwb3J0IGNvbnN0IFBsYXllckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9IGFzIFBsYXllckNvbnRleHREYXRhKTtcblxudHlwZSBQbGF5ZXJDb250ZXh0UHJvdmlkZXJQcm9wcyA9IHtcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFBsYXllckNvbnRleHRQcm92aWRlcih7IGNoaWxkcmVuIH06IFBsYXllckNvbnRleHRQcm92aWRlclByb3BzKSB7XG4gIGNvbnN0IFtlcGlzb2RlTGlzdCwgc2V0RXBpc29kZUxpc3RdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbY3VycmVudEVwaXNvZGVJbmRleCwgc2V0Q3VycmVudEVwaXNvZGVJbmRleF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2lzUGxheWluZywgc2V0SXNQbGF5aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBmdW5jdGlvbiBwbGF5KGVwaXNvZGU6IEVwaXNvZGUpIHtcbiAgICBzZXRFcGlzb2RlTGlzdChbZXBpc29kZV0pO1xuICAgIHNldEN1cnJlbnRFcGlzb2RlSW5kZXgoMCk7XG4gICAgc2V0SXNQbGF5aW5nKHRydWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gcGxheUxpc3QobGlzdDogRXBpc29kZVtdLCBpbmRleDogbnVtYmVyKSB7XG4gICAgc2V0RXBpc29kZUxpc3QobGlzdCk7XG4gICAgc2V0Q3VycmVudEVwaXNvZGVJbmRleChpbmRleCk7XG4gICAgc2V0SXNQbGF5aW5nKHRydWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gdG9nZ2xlUGxheSgpIHtcbiAgICBzZXRJc1BsYXlpbmcoIWlzUGxheWluZyk7XG4gIH1cblxuICBmdW5jdGlvbiBzZXRQbGF5aW5nU3RhdGUoc3RhdGU6IGJvb2xlYW4pIHtcbiAgICBzZXRJc1BsYXlpbmcoc3RhdGUpO1xuICB9XG5cbiAgY29uc3QgaGFzUHJldmlvdXMgPSBjdXJyZW50RXBpc29kZUluZGV4ID4gMDtcbiAgY29uc3QgaGFzTmV4dCA9IChjdXJyZW50RXBpc29kZUluZGV4ICsgMSkgPCBlcGlzb2RlTGlzdC5sZW5ndGhcblxuICBmdW5jdGlvbiBwbGF5TmV4dCgpIHtcbiAgICBpZiAoaGFzTmV4dCkge1xuICAgICAgc2V0Q3VycmVudEVwaXNvZGVJbmRleChjdXJyZW50RXBpc29kZUluZGV4ICsgMSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcGxheVByZXZpb3VzKCkge1xuICAgIGlmIChoYXNQcmV2aW91cykge1xuICAgICAgc2V0Q3VycmVudEVwaXNvZGVJbmRleChjdXJyZW50RXBpc29kZUluZGV4IC0gMSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8UGxheWVyQ29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgZXBpc29kZUxpc3QsXG4gICAgICAgIGN1cnJlbnRFcGlzb2RlSW5kZXgsXG4gICAgICAgIHBsYXksXG4gICAgICAgIHBsYXlMaXN0LFxuICAgICAgICBwbGF5TmV4dCxcbiAgICAgICAgcGxheVByZXZpb3VzLFxuICAgICAgICBpc1BsYXlpbmcsXG4gICAgICAgIHRvZ2dsZVBsYXksXG4gICAgICAgIHNldFBsYXlpbmdTdGF0ZSxcbiAgICAgICAgaGFzTmV4dCxcbiAgICAgICAgaGFzUHJldmlvdXNcbiAgICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvUGxheWVyQ29udGV4dC5Qcm92aWRlcj5cbiAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/context/PlayerContext.tsx\n");

/***/ })

})