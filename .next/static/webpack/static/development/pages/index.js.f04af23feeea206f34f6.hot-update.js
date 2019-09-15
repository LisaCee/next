webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/MovieTM.js":
/*!**************************!*\
  !*** ./pages/MovieTM.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MovieTM; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardHeader */ "./node_modules/@material-ui/core/esm/CardHeader/index.js");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CardActions */ "./node_modules/@material-ui/core/esm/CardActions/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
var _jsxFileName = "/home/lisa/Documents/Coding/Projects/PORTFOLIOS/next/pages/MovieTM.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {
    card: {
      maxWidth: 345,
      padding: theme.spacing(2),
      color: theme.palette.text.secondary
    },
    media: {
      height: 240
    }
  };
});

function Movie() {
  return __jsx("img", {
    src: "/static/movie-time-machine.jpg",
    alt: "movieTM",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  });
}

function MovieTM() {
  var classes = useStyles();
  return __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.card,
    id: "gallery",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx(_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Movie Time Machine",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), __jsx(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: classes.media,
    title: "Movie Time Machine",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx(Movie, {
    className: classes.media,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  })), __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
    color: "textSecondary",
    component: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "A time machine app that searches for movies by year"), __jsx("br", {
    className: "jsx-826081860",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-826081860" + " " + 'details',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx("i", {
    title: "react",
    className: "jsx-826081860" + " " + 'fab fa-react fa-lg',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), __jsx("i", {
    title: "css3",
    className: "jsx-826081860" + " " + 'fab fa-css3 fa-lg',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), __jsx("i", {
    title: "bootstrap",
    className: "jsx-826081860" + " " + 'fab fa-bootstrap fa-lg',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), __jsx("i", {
    title: "github",
    className: "jsx-826081860" + " " + 'fab fa-github fa-lg',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }))), __jsx(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    size: "small",
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx("a", {
    href: "https://movie-time-machine.netlify.com/",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "jsx-826081860",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Visit"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "826081860",
    __self: this
  }, "img.jsx-826081860{max-height:100px;}.MuiPaper-root.jsx-826081860{margin:0 auto;padding:1%;height:525px;}.MuiCardHeader-title.jsx-826081860{color:#007388;margin-left:-15px !important;font-family:'Raleway',sans-serif;}div.details.jsx-826081860{display:-webkit-box;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-top:3%;-webkit-box-pack:space-evenly;-ms-flex-pack:space-evenly;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;max-width:300px;height:1.5rem;}div.details.jsx-826081860 .fab.jsx-826081860,div.details.jsx-826081860 .fas.jsx-826081860{color:#17a2b8;font-size:1.5rem;}button.jsx-826081860{margin-bottom:1%;background-color:rgba(0,0,0,0.08) !important;}button.jsx-826081860 span.MuiButton-label.jsx-826081860 a.jsx-826081860{color:#007388 !important;}.MuiButton-root.jsx-826081860:hover{background-color:#007388 !important;}.MuiButton-root.jsx-826081860:hover .MuiButton-label.jsx-826081860 a.jsx-826081860{color:#ffffff !important;-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xpc2EvRG9jdW1lbnRzL0NvZGluZy9Qcm9qZWN0cy9QT1JURk9MSU9TL25leHQvcGFnZXMvTW92aWVUTS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRWtCLEFBRzBCLEFBR0gsQUFNQSxBQU1NLEFBYU4sQUFLRyxBQUtRLEFBSVcsQUFJWCxjQTFDZCxBQU1rQixBQW1CWixHQTVCbkIsQUFpQ2tELEdBbEI1QixLQVhQLEFBa0NmLEFBUXVCLE1BakJ2QixLQWFBLEVBckNBLEVBV2UsR0FOcUIsbUJBd0JwQyxhQWFBLENBcENBLHNDQU1nQixjQUNnQiw4QkFDQywyQkFDTSwySEFDckIsZ0JBQ0YsY0FDaEIiLCJmaWxlIjoiL2hvbWUvbGlzYS9Eb2N1bWVudHMvQ29kaW5nL1Byb2plY3RzL1BPUlRGT0xJT1MvbmV4dC9wYWdlcy9Nb3ZpZVRNLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IENhcmQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZCc7XG5pbXBvcnQgQ2FyZEhlYWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkSGVhZGVyJztcbmltcG9ydCBDYXJkQWN0aW9ucyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQWN0aW9ucyc7XG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnQnO1xuaW1wb3J0IENhcmRNZWRpYSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkTWVkaWEnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgY2FyZDoge1xuICAgIG1heFdpZHRoOiAzNDUsXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyKSxcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnNlY29uZGFyeVxuICB9LFxuICBtZWRpYToge1xuICAgIGhlaWdodDogMjQwXG4gIH1cbn0pKTtcblxuZnVuY3Rpb24gTW92aWUoKSB7XG4gICAgcmV0dXJuICg8aW1nIHNyYz1cIi9zdGF0aWMvbW92aWUtdGltZS1tYWNoaW5lLmpwZ1wiIGFsdD1cIm1vdmllVE1cIi8+KVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vdmllVE0oKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICByZXR1cm4gKFxuICAgIDxDYXJkIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkfSBpZD0nZ2FsbGVyeSc+XG4gICAgICA8Q2FyZEhlYWRlciB0aXRsZT0nTW92aWUgVGltZSBNYWNoaW5lJyAvPlxuXG4gICAgICA8Q2FyZE1lZGlhXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZWRpYX1cbiAgICAgICAgdGl0bGU9J01vdmllIFRpbWUgTWFjaGluZSdcbiAgICAgID5cbiAgICAgIDxNb3ZpZSBjbGFzc05hbWU9e2NsYXNzZXMubWVkaWF9Lz5cbiAgICAgIDwvQ2FyZE1lZGlhPlxuXG4gICAgICA8Q2FyZENvbnRlbnQ+XG4gICAgICAgIDxUeXBvZ3JhcGh5IGNvbG9yPSd0ZXh0U2Vjb25kYXJ5JyBjb21wb25lbnQ9J3AnPlxuICAgICAgICAgIEEgdGltZSBtYWNoaW5lIGFwcCB0aGF0IHNlYXJjaGVzIGZvciBtb3ZpZXMgYnkgeWVhclxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGV0YWlscyc+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPSdmYWIgZmEtcmVhY3QgZmEtbGcnIHRpdGxlPSdyZWFjdCcgLz5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhYiBmYS1jc3MzIGZhLWxnJyB0aXRsZT0nY3NzMycgLz5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhYiBmYS1ib290c3RyYXAgZmEtbGcnIHRpdGxlPSdib290c3RyYXAnIC8+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPSdmYWIgZmEtZ2l0aHViIGZhLWxnJyB0aXRsZT0nZ2l0aHViJyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQ2FyZENvbnRlbnQ+XG5cbiAgICAgIDxDYXJkQWN0aW9ucz5cbiAgICAgICAgPEJ1dHRvbiBzaXplPSdzbWFsbCcgY29sb3I9J3ByaW1hcnknPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPSdodHRwczovL21vdmllLXRpbWUtbWFjaGluZS5uZXRsaWZ5LmNvbS8nXG4gICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcbiAgICAgICAgICAgIHJlbD0nbm9vcGVuZXIgbm9yZWZlcnJlcidcbiAgICAgICAgICA+XG4gICAgICAgICAgICBWaXNpdFxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L0NhcmRBY3Rpb25zPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgaW1nIHtcbiAgICAgICAgbWF4LWhlaWdodDogMTAwcHg7XG4gICAgICB9XG4gICAgICAuTXVpUGFwZXItcm9vdCB7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBwYWRkaW5nOiAxJTtcbiAgICAgICAgaGVpZ2h0OiA1MjVweDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLk11aUNhcmRIZWFkZXItdGl0bGUge1xuICAgICAgICBjb2xvcjogIzAwNzM4ODtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0xNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGRpdi5kZXRhaWxzIHtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBtYXJnaW4tdG9wOiAzJTtcbiAgICAgICAgLXdlYmtpdC1ib3gtcGFjazogc3BhY2UtZXZlbmx5O1xuICAgICAgICAgICAgLW1zLWZsZXgtcGFjazogc3BhY2UtZXZlbmx5O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgICBtYXgtd2lkdGg6IDMwMHB4O1xuICAgICAgICBoZWlnaHQ6IDEuNXJlbTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgZGl2LmRldGFpbHMgLmZhYixcbiAgICAgIGRpdi5kZXRhaWxzIC5mYXMge1xuICAgICAgICBjb2xvcjogIzE3YTJiODtcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICB9XG4gICAgICBcbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDElO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDgpICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGJ1dHRvbiBzcGFuLk11aUJ1dHRvbi1sYWJlbCBhIHtcbiAgICAgICAgY29sb3I6ICMwMDczODggIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLk11aUJ1dHRvbi1yb290OmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzM4OCAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgICAgXG4gICAgICAuTXVpQnV0dG9uLXJvb3Q6aG92ZXIgLk11aUJ1dHRvbi1sYWJlbCBhIHtcbiAgICAgICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfWB9PC9zdHlsZT5cbiAgICA8L0NhcmQ+XG4gICk7XG59XG4iXX0= */\n/*@ sourceURL=/home/lisa/Documents/Coding/Projects/PORTFOLIOS/next/pages/MovieTM.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.f04af23feeea206f34f6.hot-update.js.map