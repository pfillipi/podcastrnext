webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/components/Player/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Player/index.tsx ***!
  \*****************************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Player\", function() { return Player; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var rc_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rc-slider */ \"./node_modules/rc-slider/es/index.js\");\n/* harmony import */ var rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-slider/assets/index.css */ \"./node_modules/rc-slider/assets/index.css\");\n/* harmony import */ var rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _context_PlayerContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../context/PlayerContext */ \"./src/context/PlayerContext.tsx\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.module.scss */ \"./src/components/Player/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n\n\nvar _jsxFileName = \"/Users/fillipi/Documents/GitHub/podcastrnext/src/components/Player/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Player() {\n  _s();\n\n  var audioRef = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])(null);\n\n  var _usePlayer = Object(_context_PlayerContext__WEBPACK_IMPORTED_MODULE_5__[\"usePlayer\"])(),\n      episodeList = _usePlayer.episodeList,\n      currentEpisodeIndex = _usePlayer.currentEpisodeIndex,\n      isPlaying = _usePlayer.isPlaying,\n      isLooping = _usePlayer.isLooping,\n      isShuffling = _usePlayer.isShuffling,\n      togglePlay = _usePlayer.togglePlay,\n      toggleLoop = _usePlayer.toggleLoop,\n      toggleShuffle = _usePlayer.toggleShuffle,\n      setPlayingState = _usePlayer.setPlayingState,\n      playNext = _usePlayer.playNext,\n      playPrevious = _usePlayer.playPrevious,\n      hasNext = _usePlayer.hasNext,\n      hasPrevious = _usePlayer.hasPrevious;\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (!audioRef.current) {\n      return;\n    }\n\n    if (isPlaying) {\n      audioRef.current.play();\n    } else {\n      audioRef.current.pause();\n    }\n  }, [isPlaying]);\n  var episode = episodeList[currentEpisodeIndex];\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.playerContainer,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"header\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: \"/playing.svg\",\n        alt: \"Now playing\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n        children: \"Now playing\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }, this), episode ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.currentEpisode,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {\n        width: 592,\n        height: 592,\n        src: episode.thumbnail,\n        objectFit: \"cover\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 11\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n        children: episode.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 11\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        children: episode.members\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 9\n    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.emptyPlayer,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n        children: \"Select a podcast to listen\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"footer\", {\n      className: !episode ? _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.empty : '',\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.progress,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: \"00:00\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.slider,\n          children: episode ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(rc_slider__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            trackStyle: {\n              backgroundColor: '#04d361'\n            },\n            railStyle: {\n              backgroundColor: '#9f75ff'\n            },\n            handleStyle: {\n              borderColor: '#04d361',\n              borderWidth: 4\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 73,\n            columnNumber: 15\n          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.emptySlider\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 79,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: \"00:00\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 9\n      }, this), episode && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"audio\", {\n        src: episode.url,\n        autoPlay: true,\n        loop: isLooping,\n        ref: audioRef,\n        onPlay: function onPlay() {\n          return setPlayingState(true);\n        },\n        onPause: function onPause() {\n          return setPlayingState(false);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 11\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.buttons,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          type: \"button\",\n          disabled: !episode || episodeList.length === 1,\n          onClick: toggleShuffle,\n          className: isShuffling ? _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.isActive : '',\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            src: \"/shuffle.svg\",\n            alt: \"Shuffle\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 103,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 97,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          type: \"button\",\n          onClick: playPrevious,\n          disabled: !episode || !hasPrevious,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            src: \"/play-previous.svg\",\n            alt: \"Previous\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 106,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 105,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          type: \"button\",\n          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.playButton,\n          disabled: !episode,\n          onClick: togglePlay,\n          children: isPlaying ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            src: \"/pause.svg\",\n            alt: \"Play\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 115,\n            columnNumber: 17\n          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            src: \"/play.svg\",\n            alt: \"Play\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 116,\n            columnNumber: 17\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 108,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          type: \"button\",\n          onClick: playNext,\n          disabled: !episode || !hasNext,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            src: \"/play-next.svg\",\n            alt: \"Next\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 120,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 119,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          type: \"button\",\n          disabled: !episode,\n          onClick: toggleLoop,\n          className: isLooping ? _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.isActive : '',\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            src: \"/repeat.svg\",\n            alt: \"Repeat\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 128,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 122,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 45,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Player, \"WroQnLaAdlQHC7TWXQJ0pu3u4t4=\", false, function () {\n  return [_context_PlayerContext__WEBPACK_IMPORTED_MODULE_5__[\"usePlayer\"]];\n});\n\n_c = Player;\n\nvar _c;\n\n$RefreshReg$(_c, \"Player\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUGxheWVyL2luZGV4LnRzeD82ODJkIl0sIm5hbWVzIjpbIlBsYXllciIsImF1ZGlvUmVmIiwidXNlUmVmIiwidXNlUGxheWVyIiwiZXBpc29kZUxpc3QiLCJjdXJyZW50RXBpc29kZUluZGV4IiwiaXNQbGF5aW5nIiwiaXNMb29waW5nIiwiaXNTaHVmZmxpbmciLCJ0b2dnbGVQbGF5IiwidG9nZ2xlTG9vcCIsInRvZ2dsZVNodWZmbGUiLCJzZXRQbGF5aW5nU3RhdGUiLCJwbGF5TmV4dCIsInBsYXlQcmV2aW91cyIsImhhc05leHQiLCJoYXNQcmV2aW91cyIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJwbGF5IiwicGF1c2UiLCJlcGlzb2RlIiwic3R5bGVzIiwicGxheWVyQ29udGFpbmVyIiwiY3VycmVudEVwaXNvZGUiLCJ0aHVtYm5haWwiLCJ0aXRsZSIsIm1lbWJlcnMiLCJlbXB0eVBsYXllciIsImVtcHR5IiwicHJvZ3Jlc3MiLCJzbGlkZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJDb2xvciIsImJvcmRlcldpZHRoIiwiZW1wdHlTbGlkZXIiLCJ1cmwiLCJidXR0b25zIiwibGVuZ3RoIiwiaXNBY3RpdmUiLCJwbGF5QnV0dG9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRU8sU0FBU0EsTUFBVCxHQUFrQjtBQUFBOztBQUN2QixNQUFNQyxRQUFRLEdBQUdDLG9EQUFNLENBQW1CLElBQW5CLENBQXZCOztBQUR1QixtQkFpQm5CQyx3RUFBUyxFQWpCVTtBQUFBLE1BSXJCQyxXQUpxQixjQUlyQkEsV0FKcUI7QUFBQSxNQUtyQkMsbUJBTHFCLGNBS3JCQSxtQkFMcUI7QUFBQSxNQU1yQkMsU0FOcUIsY0FNckJBLFNBTnFCO0FBQUEsTUFPckJDLFNBUHFCLGNBT3JCQSxTQVBxQjtBQUFBLE1BUXJCQyxXQVJxQixjQVFyQkEsV0FScUI7QUFBQSxNQVNyQkMsVUFUcUIsY0FTckJBLFVBVHFCO0FBQUEsTUFVckJDLFVBVnFCLGNBVXJCQSxVQVZxQjtBQUFBLE1BV3JCQyxhQVhxQixjQVdyQkEsYUFYcUI7QUFBQSxNQVlyQkMsZUFacUIsY0FZckJBLGVBWnFCO0FBQUEsTUFhckJDLFFBYnFCLGNBYXJCQSxRQWJxQjtBQUFBLE1BY3JCQyxZQWRxQixjQWNyQkEsWUFkcUI7QUFBQSxNQWVyQkMsT0FmcUIsY0FlckJBLE9BZnFCO0FBQUEsTUFnQnJCQyxXQWhCcUIsY0FnQnJCQSxXQWhCcUI7O0FBbUJ2QkMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSSxDQUFDaEIsUUFBUSxDQUFDaUIsT0FBZCxFQUF1QjtBQUNyQjtBQUNEOztBQUVELFFBQUlaLFNBQUosRUFBZTtBQUNiTCxjQUFRLENBQUNpQixPQUFULENBQWlCQyxJQUFqQjtBQUNELEtBRkQsTUFFTztBQUNMbEIsY0FBUSxDQUFDaUIsT0FBVCxDQUFpQkUsS0FBakI7QUFDRDtBQUNGLEdBVlEsRUFVTixDQUFDZCxTQUFELENBVk0sQ0FBVDtBQVlBLE1BQU1lLE9BQU8sR0FBR2pCLFdBQVcsQ0FBQ0MsbUJBQUQsQ0FBM0I7QUFFQSxzQkFDRTtBQUFLLGFBQVMsRUFBRWlCLDBEQUFNLENBQUNDLGVBQXZCO0FBQUEsNEJBQ0U7QUFBQSw4QkFDRTtBQUFLLFdBQUcsRUFBQyxjQUFUO0FBQXdCLFdBQUcsRUFBQztBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBTUlGLE9BQU8sZ0JBQ1A7QUFBSyxlQUFTLEVBQUVDLDBEQUFNLENBQUNFLGNBQXZCO0FBQUEsOEJBQ0UscUVBQUMsaURBQUQ7QUFDRSxhQUFLLEVBQUUsR0FEVDtBQUVFLGNBQU0sRUFBRSxHQUZWO0FBR0UsV0FBRyxFQUFFSCxPQUFPLENBQUNJLFNBSGY7QUFJRSxpQkFBUyxFQUFDO0FBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBT0U7QUFBQSxrQkFBU0osT0FBTyxDQUFDSztBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEYsZUFRRTtBQUFBLGtCQUFPTCxPQUFPLENBQUNNO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURPLGdCQVlQO0FBQUssZUFBUyxFQUFFTCwwREFBTSxDQUFDTSxXQUF2QjtBQUFBLDZCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWxCSixlQXVCRTtBQUFRLGVBQVMsRUFBRSxDQUFDUCxPQUFELEdBQVdDLDBEQUFNLENBQUNPLEtBQWxCLEdBQTBCLEVBQTdDO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFFUCwwREFBTSxDQUFDUSxRQUF2QjtBQUFBLGdDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBSyxtQkFBUyxFQUFFUiwwREFBTSxDQUFDUyxNQUF2QjtBQUFBLG9CQUNHVixPQUFPLGdCQUNOLHFFQUFDLGlEQUFEO0FBQ0Usc0JBQVUsRUFBRTtBQUFFVyw2QkFBZSxFQUFFO0FBQW5CLGFBRGQ7QUFFRSxxQkFBUyxFQUFFO0FBQUVBLDZCQUFlLEVBQUU7QUFBbkIsYUFGYjtBQUdFLHVCQUFXLEVBQUU7QUFBRUMseUJBQVcsRUFBRSxTQUFmO0FBQTBCQyx5QkFBVyxFQUFFO0FBQXZDO0FBSGY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFETSxnQkFPTjtBQUFLLHFCQUFTLEVBQUVaLDBEQUFNLENBQUNhO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLGVBYUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsRUFpQkdkLE9BQU8saUJBQ047QUFDRSxXQUFHLEVBQUVBLE9BQU8sQ0FBQ2UsR0FEZjtBQUVFLGdCQUFRLE1BRlY7QUFHRSxZQUFJLEVBQUU3QixTQUhSO0FBSUUsV0FBRyxFQUFFTixRQUpQO0FBS0UsY0FBTSxFQUFFO0FBQUEsaUJBQU1XLGVBQWUsQ0FBQyxJQUFELENBQXJCO0FBQUEsU0FMVjtBQU1FLGVBQU8sRUFBRTtBQUFBLGlCQUFNQSxlQUFlLENBQUMsS0FBRCxDQUFyQjtBQUFBO0FBTlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWxCSixlQTRCRTtBQUFLLGlCQUFTLEVBQUVVLDBEQUFNLENBQUNlLE9BQXZCO0FBQUEsZ0NBQ0U7QUFDRSxjQUFJLEVBQUMsUUFEUDtBQUVFLGtCQUFRLEVBQUUsQ0FBQ2hCLE9BQUQsSUFBWWpCLFdBQVcsQ0FBQ2tDLE1BQVosS0FBdUIsQ0FGL0M7QUFHRSxpQkFBTyxFQUFFM0IsYUFIWDtBQUlFLG1CQUFTLEVBQUVILFdBQVcsR0FBR2MsMERBQU0sQ0FBQ2lCLFFBQVYsR0FBcUIsRUFKN0M7QUFBQSxpQ0FNRTtBQUFLLGVBQUcsRUFBQyxjQUFUO0FBQXdCLGVBQUcsRUFBQztBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQVNFO0FBQVEsY0FBSSxFQUFDLFFBQWI7QUFBc0IsaUJBQU8sRUFBRXpCLFlBQS9CO0FBQTZDLGtCQUFRLEVBQUUsQ0FBQ08sT0FBRCxJQUFZLENBQUNMLFdBQXBFO0FBQUEsaUNBQ0U7QUFBSyxlQUFHLEVBQUMsb0JBQVQ7QUFBOEIsZUFBRyxFQUFDO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVRGLGVBWUU7QUFDRSxjQUFJLEVBQUMsUUFEUDtBQUVFLG1CQUFTLEVBQUVNLDBEQUFNLENBQUNrQixVQUZwQjtBQUdFLGtCQUFRLEVBQUUsQ0FBQ25CLE9BSGI7QUFJRSxpQkFBTyxFQUFFWixVQUpYO0FBQUEsb0JBTUdILFNBQVMsZ0JBQ047QUFBSyxlQUFHLEVBQUMsWUFBVDtBQUFzQixlQUFHLEVBQUM7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFETSxnQkFFTjtBQUFLLGVBQUcsRUFBQyxXQUFUO0FBQXFCLGVBQUcsRUFBQztBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUk47QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFaRixlQXVCRTtBQUFRLGNBQUksRUFBQyxRQUFiO0FBQXNCLGlCQUFPLEVBQUVPLFFBQS9CO0FBQXlDLGtCQUFRLEVBQUUsQ0FBQ1EsT0FBRCxJQUFZLENBQUNOLE9BQWhFO0FBQUEsaUNBQ0U7QUFBSyxlQUFHLEVBQUMsZ0JBQVQ7QUFBMEIsZUFBRyxFQUFDO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXZCRixlQTBCRTtBQUNFLGNBQUksRUFBQyxRQURQO0FBRUUsa0JBQVEsRUFBRSxDQUFDTSxPQUZiO0FBR0UsaUJBQU8sRUFBRVgsVUFIWDtBQUlFLG1CQUFTLEVBQUVILFNBQVMsR0FBR2UsMERBQU0sQ0FBQ2lCLFFBQVYsR0FBcUIsRUFKM0M7QUFBQSxpQ0FNRTtBQUFLLGVBQUcsRUFBQyxhQUFUO0FBQXVCLGVBQUcsRUFBQztBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkExQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBNUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXZCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTBGRDs7R0EzSGV2QyxNO1VBaUJWRyxnRTs7O0tBakJVSCxNIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvUGxheWVyL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCB7IHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNsaWRlciBmcm9tICdyYy1zbGlkZXInO1xuXG5pbXBvcnQgJ3JjLXNsaWRlci9hc3NldHMvaW5kZXguY3NzJztcblxuaW1wb3J0IHsgdXNlUGxheWVyIH0gZnJvbSAnLi4vLi4vY29udGV4dC9QbGF5ZXJDb250ZXh0JztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2Nzcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBQbGF5ZXIoKSB7XG4gIGNvbnN0IGF1ZGlvUmVmID0gdXNlUmVmPEhUTUxBdWRpb0VsZW1lbnQ+KG51bGwpO1xuXG4gIGNvbnN0IHtcbiAgICBlcGlzb2RlTGlzdCxcbiAgICBjdXJyZW50RXBpc29kZUluZGV4LFxuICAgIGlzUGxheWluZyxcbiAgICBpc0xvb3BpbmcsXG4gICAgaXNTaHVmZmxpbmcsXG4gICAgdG9nZ2xlUGxheSxcbiAgICB0b2dnbGVMb29wLFxuICAgIHRvZ2dsZVNodWZmbGUsXG4gICAgc2V0UGxheWluZ1N0YXRlLFxuICAgIHBsYXlOZXh0LFxuICAgIHBsYXlQcmV2aW91cyxcbiAgICBoYXNOZXh0LFxuICAgIGhhc1ByZXZpb3VzXG4gIH0gPSB1c2VQbGF5ZXIoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghYXVkaW9SZWYuY3VycmVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChpc1BsYXlpbmcpIHtcbiAgICAgIGF1ZGlvUmVmLmN1cnJlbnQucGxheSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhdWRpb1JlZi5jdXJyZW50LnBhdXNlKCk7XG4gICAgfVxuICB9LCBbaXNQbGF5aW5nXSlcblxuICBjb25zdCBlcGlzb2RlID0gZXBpc29kZUxpc3RbY3VycmVudEVwaXNvZGVJbmRleF1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGxheWVyQ29udGFpbmVyfT5cbiAgICAgIDxoZWFkZXI+XG4gICAgICAgIDxpbWcgc3JjPVwiL3BsYXlpbmcuc3ZnXCIgYWx0PVwiTm93IHBsYXlpbmdcIiAvPlxuICAgICAgICA8c3Ryb25nPk5vdyBwbGF5aW5nPC9zdHJvbmc+XG4gICAgICA8L2hlYWRlcj5cblxuICAgICAgeyBlcGlzb2RlID8gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmN1cnJlbnRFcGlzb2RlfT5cbiAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgIHdpZHRoPXs1OTJ9XG4gICAgICAgICAgICBoZWlnaHQ9ezU5Mn1cbiAgICAgICAgICAgIHNyYz17ZXBpc29kZS50aHVtYm5haWx9XG4gICAgICAgICAgICBvYmplY3RGaXQ9XCJjb3ZlclwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8c3Ryb25nPntlcGlzb2RlLnRpdGxlfTwvc3Ryb25nPlxuICAgICAgICAgIDxzcGFuPntlcGlzb2RlLm1lbWJlcnN9PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZW1wdHlQbGF5ZXJ9PlxuICAgICAgICAgIDxzdHJvbmc+U2VsZWN0IGEgcG9kY2FzdCB0byBsaXN0ZW48L3N0cm9uZz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuXG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17IWVwaXNvZGUgPyBzdHlsZXMuZW1wdHkgOiAnJ30+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZ3Jlc3N9PlxuICAgICAgICAgIDxzcGFuPjAwOjAwPC9zcGFuPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2xpZGVyfT5cbiAgICAgICAgICAgIHtlcGlzb2RlID8gKFxuICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgdHJhY2tTdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjMDRkMzYxJyB9fVxuICAgICAgICAgICAgICAgIHJhaWxTdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjOWY3NWZmJyB9fVxuICAgICAgICAgICAgICAgIGhhbmRsZVN0eWxlPXt7IGJvcmRlckNvbG9yOiAnIzA0ZDM2MScsIGJvcmRlcldpZHRoOiA0IH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVtcHR5U2xpZGVyfSAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8c3Bhbj4wMDowMDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAge2VwaXNvZGUgJiYgKFxuICAgICAgICAgIDxhdWRpb1xuICAgICAgICAgICAgc3JjPXtlcGlzb2RlLnVybH1cbiAgICAgICAgICAgIGF1dG9QbGF5XG4gICAgICAgICAgICBsb29wPXtpc0xvb3Bpbmd9XG4gICAgICAgICAgICByZWY9e2F1ZGlvUmVmfVxuICAgICAgICAgICAgb25QbGF5PXsoKSA9PiBzZXRQbGF5aW5nU3RhdGUodHJ1ZSl9XG4gICAgICAgICAgICBvblBhdXNlPXsoKSA9PiBzZXRQbGF5aW5nU3RhdGUoZmFsc2UpfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25zfT5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGRpc2FibGVkPXshZXBpc29kZSB8fCBlcGlzb2RlTGlzdC5sZW5ndGggPT09IDF9XG4gICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVTaHVmZmxlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtpc1NodWZmbGluZyA/IHN0eWxlcy5pc0FjdGl2ZSA6ICcnfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL3NodWZmbGUuc3ZnXCIgYWx0PVwiU2h1ZmZsZVwiIC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17cGxheVByZXZpb3VzfSBkaXNhYmxlZD17IWVwaXNvZGUgfHwgIWhhc1ByZXZpb3VzfT5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL3BsYXktcHJldmlvdXMuc3ZnXCIgYWx0PVwiUHJldmlvdXNcIiAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucGxheUJ1dHRvbn1cbiAgICAgICAgICAgIGRpc2FibGVkPXshZXBpc29kZX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZVBsYXl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2lzUGxheWluZ1xuICAgICAgICAgICAgICA/IDxpbWcgc3JjPVwiL3BhdXNlLnN2Z1wiIGFsdD1cIlBsYXlcIiAvPlxuICAgICAgICAgICAgICA6IDxpbWcgc3JjPVwiL3BsYXkuc3ZnXCIgYWx0PVwiUGxheVwiIC8+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17cGxheU5leHR9IGRpc2FibGVkPXshZXBpc29kZSB8fCAhaGFzTmV4dH0+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9wbGF5LW5leHQuc3ZnXCIgYWx0PVwiTmV4dFwiIC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBkaXNhYmxlZD17IWVwaXNvZGV9XG4gICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVMb29wfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtpc0xvb3BpbmcgPyBzdHlsZXMuaXNBY3RpdmUgOiAnJ31cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9yZXBlYXQuc3ZnXCIgYWx0PVwiUmVwZWF0XCIgLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8L2RpdiA+XG4gICk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Player/index.tsx\n");

/***/ })

})