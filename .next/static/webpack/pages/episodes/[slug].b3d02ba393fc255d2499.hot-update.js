webpackHotUpdate_N_E("pages/episodes/[slug]",{

/***/ "./src/context/PlayerContext.tsx":
/*!***************************************!*\
  !*** ./src/context/PlayerContext.tsx ***!
  \***************************************/
/*! exports provided: PlayerContext, PlayerContextProvider, usePlayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PlayerContext\", function() { return PlayerContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PlayerContextProvider\", function() { return PlayerContextProvider; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"usePlayer\", function() { return usePlayer; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/Users/fillipi/Documents/GitHub/podcastrnext/src/context/PlayerContext.tsx\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\nvar PlayerContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])({});\nfunction PlayerContextProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      episodeList = _useState[0],\n      setEpisodeList = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      currentEpisodeIndex = _useState2[0],\n      setCurrentEpisodeIndex = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isPlaying = _useState3[0],\n      setIsPlaying = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(true),\n      isLooping = _useState4[0],\n      setIsLooping = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isShuffling = _useState5[0],\n      setIsShuffling = _useState5[1];\n\n  function play(episode) {\n    setEpisodeList([episode]);\n    setCurrentEpisodeIndex(0);\n    setIsPlaying(true);\n  }\n\n  function playList(list, index) {\n    setEpisodeList(list);\n    setCurrentEpisodeIndex(index);\n    setIsPlaying(true);\n  }\n\n  function togglePlay() {\n    setIsPlaying(!isPlaying);\n  }\n\n  function toggleLoop() {\n    setIsLooping(!isLooping);\n  }\n\n  function toggleShuffle() {\n    setIsShuffling(!isShuffling);\n  }\n\n  function setPlayingState(state) {\n    setIsPlaying(state);\n  }\n\n  var hasPrevious = currentEpisodeIndex > 0;\n  var hasNext = currentEpisodeIndex + 1 < episodeList.length;\n\n  function playNext() {\n    if (isShuffling) {\n      var nextRandomEpisodeIndex = Math.floor(Math.random() * episodeList.length);\n      setCurrentEpisodeIndex(nextRandomEpisodeIndex);\n    } else if (hasNext) {\n      setCurrentEpisodeIndex(currentEpisodeIndex + 1);\n    }\n  }\n\n  function playPrevious() {\n    if (hasPrevious) {\n      setCurrentEpisodeIndex(currentEpisodeIndex - 1);\n    }\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(PlayerContext.Provider, {\n    value: {\n      episodeList: episodeList,\n      currentEpisodeIndex: currentEpisodeIndex,\n      play: play,\n      playList: playList,\n      playNext: playNext,\n      playPrevious: playPrevious,\n      isPlaying: isPlaying,\n      isLooping: isLooping,\n      isShuffling: isShuffling,\n      togglePlay: togglePlay,\n      setPlayingState: setPlayingState,\n      hasNext: hasNext,\n      hasPrevious: hasPrevious,\n      toggleLoop: toggleLoop,\n      toggleShuffle: toggleShuffle\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 90,\n    columnNumber: 5\n  }, this);\n}\n\n_s(PlayerContextProvider, \"SO8ABw4CKN1YdLgUBN8zOL8DvdY=\");\n\n_c = PlayerContextProvider;\nvar usePlayer = function usePlayer() {\n  _s2();\n\n  return Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(PlayerContext);\n};\n\n_s2(usePlayer, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\n\nvar _c;\n\n$RefreshReg$(_c, \"PlayerContextProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHQvUGxheWVyQ29udGV4dC50c3g/MjAxMSJdLCJuYW1lcyI6WyJQbGF5ZXJDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIlBsYXllckNvbnRleHRQcm92aWRlciIsImNoaWxkcmVuIiwidXNlU3RhdGUiLCJlcGlzb2RlTGlzdCIsInNldEVwaXNvZGVMaXN0IiwiY3VycmVudEVwaXNvZGVJbmRleCIsInNldEN1cnJlbnRFcGlzb2RlSW5kZXgiLCJpc1BsYXlpbmciLCJzZXRJc1BsYXlpbmciLCJpc0xvb3BpbmciLCJzZXRJc0xvb3BpbmciLCJpc1NodWZmbGluZyIsInNldElzU2h1ZmZsaW5nIiwicGxheSIsImVwaXNvZGUiLCJwbGF5TGlzdCIsImxpc3QiLCJpbmRleCIsInRvZ2dsZVBsYXkiLCJ0b2dnbGVMb29wIiwidG9nZ2xlU2h1ZmZsZSIsInNldFBsYXlpbmdTdGF0ZSIsInN0YXRlIiwiaGFzUHJldmlvdXMiLCJoYXNOZXh0IiwibGVuZ3RoIiwicGxheU5leHQiLCJuZXh0UmFuZG9tRXBpc29kZUluZGV4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicGxheVByZXZpb3VzIiwidXNlUGxheWVyIiwidXNlQ29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQTRCTyxJQUFNQSxhQUFhLGdCQUFHQywyREFBYSxDQUFDLEVBQUQsQ0FBbkM7QUFNQSxTQUFTQyxxQkFBVCxPQUF5RTtBQUFBOztBQUFBLE1BQXhDQyxRQUF3QyxRQUF4Q0EsUUFBd0M7O0FBQUEsa0JBQ3hDQyxzREFBUSxDQUFDLEVBQUQsQ0FEZ0M7QUFBQSxNQUN2RUMsV0FEdUU7QUFBQSxNQUMxREMsY0FEMEQ7O0FBQUEsbUJBRXhCRixzREFBUSxDQUFDLENBQUQsQ0FGZ0I7QUFBQSxNQUV2RUcsbUJBRnVFO0FBQUEsTUFFbERDLHNCQUZrRDs7QUFBQSxtQkFHNUNKLHNEQUFRLENBQUMsS0FBRCxDQUhvQztBQUFBLE1BR3ZFSyxTQUh1RTtBQUFBLE1BRzVEQyxZQUg0RDs7QUFBQSxtQkFJNUNOLHNEQUFRLENBQUMsSUFBRCxDQUpvQztBQUFBLE1BSXZFTyxTQUp1RTtBQUFBLE1BSTVEQyxZQUo0RDs7QUFBQSxtQkFLeENSLHNEQUFRLENBQUMsS0FBRCxDQUxnQztBQUFBLE1BS3ZFUyxXQUx1RTtBQUFBLE1BSzFEQyxjQUwwRDs7QUFPOUUsV0FBU0MsSUFBVCxDQUFjQyxPQUFkLEVBQWdDO0FBQzlCVixrQkFBYyxDQUFDLENBQUNVLE9BQUQsQ0FBRCxDQUFkO0FBQ0FSLDBCQUFzQixDQUFDLENBQUQsQ0FBdEI7QUFDQUUsZ0JBQVksQ0FBQyxJQUFELENBQVo7QUFDRDs7QUFFRCxXQUFTTyxRQUFULENBQWtCQyxJQUFsQixFQUFtQ0MsS0FBbkMsRUFBa0Q7QUFDaERiLGtCQUFjLENBQUNZLElBQUQsQ0FBZDtBQUNBViwwQkFBc0IsQ0FBQ1csS0FBRCxDQUF0QjtBQUNBVCxnQkFBWSxDQUFDLElBQUQsQ0FBWjtBQUNEOztBQUVELFdBQVNVLFVBQVQsR0FBc0I7QUFDcEJWLGdCQUFZLENBQUMsQ0FBQ0QsU0FBRixDQUFaO0FBQ0Q7O0FBRUQsV0FBU1ksVUFBVCxHQUFzQjtBQUNwQlQsZ0JBQVksQ0FBQyxDQUFDRCxTQUFGLENBQVo7QUFDRDs7QUFFRCxXQUFTVyxhQUFULEdBQXlCO0FBQ3ZCUixrQkFBYyxDQUFDLENBQUNELFdBQUYsQ0FBZDtBQUNEOztBQUVELFdBQVNVLGVBQVQsQ0FBeUJDLEtBQXpCLEVBQXlDO0FBQ3ZDZCxnQkFBWSxDQUFDYyxLQUFELENBQVo7QUFDRDs7QUFFRCxNQUFNQyxXQUFXLEdBQUdsQixtQkFBbUIsR0FBRyxDQUExQztBQUNBLE1BQU1tQixPQUFPLEdBQUluQixtQkFBbUIsR0FBRyxDQUF2QixHQUE0QkYsV0FBVyxDQUFDc0IsTUFBeEQ7O0FBRUEsV0FBU0MsUUFBVCxHQUFvQjtBQUNsQixRQUFJZixXQUFKLEVBQWlCO0FBQ2YsVUFBTWdCLHNCQUFzQixHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCM0IsV0FBVyxDQUFDc0IsTUFBdkMsQ0FBL0I7QUFFQW5CLDRCQUFzQixDQUFDcUIsc0JBQUQsQ0FBdEI7QUFDRCxLQUpELE1BSU8sSUFBSUgsT0FBSixFQUFhO0FBQ2xCbEIsNEJBQXNCLENBQUNELG1CQUFtQixHQUFHLENBQXZCLENBQXRCO0FBQ0Q7QUFDRjs7QUFFRCxXQUFTMEIsWUFBVCxHQUF3QjtBQUN0QixRQUFJUixXQUFKLEVBQWlCO0FBQ2ZqQiw0QkFBc0IsQ0FBQ0QsbUJBQW1CLEdBQUcsQ0FBdkIsQ0FBdEI7QUFDRDtBQUNGOztBQUVELHNCQUNFLHFFQUFDLGFBQUQsQ0FBZSxRQUFmO0FBQ0UsU0FBSyxFQUFFO0FBQ0xGLGlCQUFXLEVBQVhBLFdBREs7QUFFTEUseUJBQW1CLEVBQW5CQSxtQkFGSztBQUdMUSxVQUFJLEVBQUpBLElBSEs7QUFJTEUsY0FBUSxFQUFSQSxRQUpLO0FBS0xXLGNBQVEsRUFBUkEsUUFMSztBQU1MSyxrQkFBWSxFQUFaQSxZQU5LO0FBT0x4QixlQUFTLEVBQVRBLFNBUEs7QUFRTEUsZUFBUyxFQUFUQSxTQVJLO0FBU0xFLGlCQUFXLEVBQVhBLFdBVEs7QUFVTE8sZ0JBQVUsRUFBVkEsVUFWSztBQVdMRyxxQkFBZSxFQUFmQSxlQVhLO0FBWUxHLGFBQU8sRUFBUEEsT0FaSztBQWFMRCxpQkFBVyxFQUFYQSxXQWJLO0FBY0xKLGdCQUFVLEVBQVZBLFVBZEs7QUFlTEMsbUJBQWEsRUFBYkE7QUFmSyxLQURUO0FBQUEsY0FtQkduQjtBQW5CSDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF1QkQ7O0dBN0VlRCxxQjs7S0FBQUEscUI7QUErRVQsSUFBTWdDLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFDN0IsU0FBT0Msd0RBQVUsQ0FBQ25DLGFBQUQsQ0FBakI7QUFDRCxDQUZNOztJQUFNa0MsUyIsImZpbGUiOiIuL3NyYy9jb250ZXh0L1BsYXllckNvbnRleHQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIFJlYWN0Tm9kZSwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcblxudHlwZSBFcGlzb2RlID0ge1xuICB0aXRsZTogc3RyaW5nO1xuICBtZW1iZXJzOiBzdHJpbmc7XG4gIHRodW1ibmFpbDogc3RyaW5nO1xuICBkdXJhdGlvbjogbnVtYmVyO1xuICB1cmw6IHN0cmluZztcbn07XG5cbnR5cGUgUGxheWVyQ29udGV4dERhdGEgPSB7XG4gIGVwaXNvZGVMaXN0OiBFcGlzb2RlW107XG4gIGN1cnJlbnRFcGlzb2RlSW5kZXg6IG51bWJlcjtcbiAgaXNQbGF5aW5nOiBib29sZWFuO1xuICBpc0xvb3Bpbmc6IGJvb2xlYW47XG4gIGlzU2h1ZmZsaW5nOiBib29sZWFuO1xuICBwbGF5OiAoZXBpc29kZTogRXBpc29kZSkgPT4gdm9pZDtcbiAgcGxheUxpc3Q6IChsaXN0OiBFcGlzb2RlW10sIGluZGV4OiBudW1iZXIpID0+IHZvaWQ7XG4gIHNldFBsYXlpbmdTdGF0ZTogKHN0YXRlOiBib29sZWFuKSA9PiB2b2lkO1xuICB0b2dnbGVQbGF5OiAoKSA9PiB2b2lkO1xuICB0b2dnbGVMb29wOiAoKSA9PiB2b2lkO1xuICB0b2dnbGVTaHVmZmxlOiAoKSA9PiB2b2lkO1xuICBwbGF5TmV4dDogKCkgPT4gdm9pZDtcbiAgcGxheVByZXZpb3VzOiAoKSA9PiB2b2lkO1xuICBoYXNOZXh0OiBib29sZWFuO1xuICBoYXNQcmV2aW91czogYm9vbGVhbjtcbn07XG5cbmV4cG9ydCBjb25zdCBQbGF5ZXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBQbGF5ZXJDb250ZXh0RGF0YSk7XG5cbnR5cGUgUGxheWVyQ29udGV4dFByb3ZpZGVyUHJvcHMgPSB7XG4gIGNoaWxkcmVuOiBSZWFjdE5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBQbGF5ZXJDb250ZXh0UHJvdmlkZXIoeyBjaGlsZHJlbiB9OiBQbGF5ZXJDb250ZXh0UHJvdmlkZXJQcm9wcykge1xuICBjb25zdCBbZXBpc29kZUxpc3QsIHNldEVwaXNvZGVMaXN0XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2N1cnJlbnRFcGlzb2RlSW5kZXgsIHNldEN1cnJlbnRFcGlzb2RlSW5kZXhdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtpc1BsYXlpbmcsIHNldElzUGxheWluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc0xvb3BpbmcsIHNldElzTG9vcGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW2lzU2h1ZmZsaW5nLCBzZXRJc1NodWZmbGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgZnVuY3Rpb24gcGxheShlcGlzb2RlOiBFcGlzb2RlKSB7XG4gICAgc2V0RXBpc29kZUxpc3QoW2VwaXNvZGVdKTtcbiAgICBzZXRDdXJyZW50RXBpc29kZUluZGV4KDApO1xuICAgIHNldElzUGxheWluZyh0cnVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBsYXlMaXN0KGxpc3Q6IEVwaXNvZGVbXSwgaW5kZXg6IG51bWJlcikge1xuICAgIHNldEVwaXNvZGVMaXN0KGxpc3QpO1xuICAgIHNldEN1cnJlbnRFcGlzb2RlSW5kZXgoaW5kZXgpO1xuICAgIHNldElzUGxheWluZyh0cnVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvZ2dsZVBsYXkoKSB7XG4gICAgc2V0SXNQbGF5aW5nKCFpc1BsYXlpbmcpO1xuICB9XG5cbiAgZnVuY3Rpb24gdG9nZ2xlTG9vcCgpIHtcbiAgICBzZXRJc0xvb3BpbmcoIWlzTG9vcGluZyk7XG4gIH1cblxuICBmdW5jdGlvbiB0b2dnbGVTaHVmZmxlKCkge1xuICAgIHNldElzU2h1ZmZsaW5nKCFpc1NodWZmbGluZyk7XG4gIH1cblxuICBmdW5jdGlvbiBzZXRQbGF5aW5nU3RhdGUoc3RhdGU6IGJvb2xlYW4pIHtcbiAgICBzZXRJc1BsYXlpbmcoc3RhdGUpO1xuICB9XG5cbiAgY29uc3QgaGFzUHJldmlvdXMgPSBjdXJyZW50RXBpc29kZUluZGV4ID4gMDtcbiAgY29uc3QgaGFzTmV4dCA9IChjdXJyZW50RXBpc29kZUluZGV4ICsgMSkgPCBlcGlzb2RlTGlzdC5sZW5ndGhcblxuICBmdW5jdGlvbiBwbGF5TmV4dCgpIHtcbiAgICBpZiAoaXNTaHVmZmxpbmcpIHtcbiAgICAgIGNvbnN0IG5leHRSYW5kb21FcGlzb2RlSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBlcGlzb2RlTGlzdC5sZW5ndGgpXG5cbiAgICAgIHNldEN1cnJlbnRFcGlzb2RlSW5kZXgobmV4dFJhbmRvbUVwaXNvZGVJbmRleClcbiAgICB9IGVsc2UgaWYgKGhhc05leHQpIHtcbiAgICAgIHNldEN1cnJlbnRFcGlzb2RlSW5kZXgoY3VycmVudEVwaXNvZGVJbmRleCArIDEpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHBsYXlQcmV2aW91cygpIHtcbiAgICBpZiAoaGFzUHJldmlvdXMpIHtcbiAgICAgIHNldEN1cnJlbnRFcGlzb2RlSW5kZXgoY3VycmVudEVwaXNvZGVJbmRleCAtIDEpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFBsYXllckNvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIGVwaXNvZGVMaXN0LFxuICAgICAgICBjdXJyZW50RXBpc29kZUluZGV4LFxuICAgICAgICBwbGF5LFxuICAgICAgICBwbGF5TGlzdCxcbiAgICAgICAgcGxheU5leHQsXG4gICAgICAgIHBsYXlQcmV2aW91cyxcbiAgICAgICAgaXNQbGF5aW5nLFxuICAgICAgICBpc0xvb3BpbmcsXG4gICAgICAgIGlzU2h1ZmZsaW5nLFxuICAgICAgICB0b2dnbGVQbGF5LFxuICAgICAgICBzZXRQbGF5aW5nU3RhdGUsXG4gICAgICAgIGhhc05leHQsXG4gICAgICAgIGhhc1ByZXZpb3VzLFxuICAgICAgICB0b2dnbGVMb29wLFxuICAgICAgICB0b2dnbGVTaHVmZmxlLFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9QbGF5ZXJDb250ZXh0LlByb3ZpZGVyPlxuICApXG59XG5cbmV4cG9ydCBjb25zdCB1c2VQbGF5ZXIgPSAoKSA9PiB7XG4gIHJldHVybiB1c2VDb250ZXh0KFBsYXllckNvbnRleHQpO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/context/PlayerContext.tsx\n");

/***/ })

})