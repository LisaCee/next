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
    className: "jsx-348954860",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-348954860" + " " + 'details',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx("i", {
    title: "react",
    className: "jsx-348954860" + " " + 'fab fa-react fa-lg',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), __jsx("i", {
    title: "css3",
    className: "jsx-348954860" + " " + 'fab fa-css3 fa-lg',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), __jsx("i", {
    title: "bootstrap",
    className: "jsx-348954860" + " " + 'fab fa-bootstrap fa-lg',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), __jsx("i", {
    title: "github",
    className: "jsx-348954860" + " " + 'fab fa-github fa-lg',
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
    className: "jsx-348954860",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Visit"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "348954860",
    __self: this
  }, "img.jsx-348954860{height:240px;}.MuiPaper-root.jsx-348954860{margin:0 auto;padding:1%;height:525px;}.MuiCardHeader-title.jsx-348954860{color:#007388;margin-left:-15px !important;font-family:'Raleway',sans-serif;}div.details.jsx-348954860{display:-webkit-box;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-top:3%;-webkit-box-pack:space-evenly;-ms-flex-pack:space-evenly;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;max-width:300px;height:1.5rem;}div.details.jsx-348954860 .fab.jsx-348954860,div.details.jsx-348954860 .fas.jsx-348954860{color:#17a2b8;font-size:1.5rem;}button.jsx-348954860{margin-bottom:1%;background-color:rgba(0,0,0,0.08) !important;}button.jsx-348954860 span.MuiButton-label.jsx-348954860 a.jsx-348954860{color:#007388 !important;}.MuiButton-root.jsx-348954860:hover{background-color:#007388 !important;}.MuiButton-root.jsx-348954860:hover .MuiButton-label.jsx-348954860 a.jsx-348954860{color:#ffffff !important;-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xpc2EvRG9jdW1lbnRzL0NvZGluZy9Qcm9qZWN0cy9QT1JURk9MSU9TL25leHQvcGFnZXMvTW92aWVUTS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRWtCLEFBR3NCLEFBR0MsQUFNQSxBQU1NLEFBYU4sQUFLRyxBQUtRLEFBSVcsQUFJWCxhQTdDM0IsQ0FHYSxBQU1rQixBQW1CWixHQUsrQixHQWxCNUIsS0FYUCxBQWtDZixBQVF1QixNQWpCdkIsS0FhQSxFQXJDQSxFQVdlLEdBTnFCLG1CQXdCcEMsYUFhQSxDQXBDQSxzQ0FNZ0IsY0FDZ0IsOEJBQ0MsMkJBQ00sMkhBQ3JCLGdCQUNGLGNBQ2hCIiwiZmlsZSI6Ii9ob21lL2xpc2EvRG9jdW1lbnRzL0NvZGluZy9Qcm9qZWN0cy9QT1JURk9MSU9TL25leHQvcGFnZXMvTW92aWVUTS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBDYXJkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmQnO1xuaW1wb3J0IENhcmRIZWFkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEhlYWRlcic7XG5pbXBvcnQgQ2FyZEFjdGlvbnMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEFjdGlvbnMnO1xuaW1wb3J0IENhcmRDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50JztcbmltcG9ydCBDYXJkTWVkaWEgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZE1lZGlhJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIGNhcmQ6IHtcbiAgICBtYXhXaWR0aDogMzQ1LFxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5zZWNvbmRhcnlcbiAgfSxcbiAgbWVkaWE6IHtcbiAgICBoZWlnaHQ6IDI0MFxuICB9XG59KSk7XG5cbmZ1bmN0aW9uIE1vdmllKCkge1xuICAgIHJldHVybiAoPGltZyBzcmM9XCIvc3RhdGljL21vdmllLXRpbWUtbWFjaGluZS5qcGdcIiBhbHQ9XCJtb3ZpZVRNXCIvPilcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb3ZpZVRNKCkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q2FyZCBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZH0gaWQ9J2dhbGxlcnknPlxuICAgICAgPENhcmRIZWFkZXIgdGl0bGU9J01vdmllIFRpbWUgTWFjaGluZScgLz5cblxuICAgICAgPENhcmRNZWRpYVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubWVkaWF9XG4gICAgICAgIHRpdGxlPSdNb3ZpZSBUaW1lIE1hY2hpbmUnXG4gICAgICA+XG4gICAgICA8TW92aWUgY2xhc3NOYW1lPXtjbGFzc2VzLm1lZGlhfS8+XG4gICAgICA8L0NhcmRNZWRpYT5cblxuICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICA8VHlwb2dyYXBoeSBjb2xvcj0ndGV4dFNlY29uZGFyeScgY29tcG9uZW50PSdwJz5cbiAgICAgICAgICBBIHRpbWUgbWFjaGluZSBhcHAgdGhhdCBzZWFyY2hlcyBmb3IgbW92aWVzIGJ5IHllYXJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RldGFpbHMnPlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmFiIGZhLXJlYWN0IGZhLWxnJyB0aXRsZT0ncmVhY3QnIC8+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPSdmYWIgZmEtY3NzMyBmYS1sZycgdGl0bGU9J2NzczMnIC8+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPSdmYWIgZmEtYm9vdHN0cmFwIGZhLWxnJyB0aXRsZT0nYm9vdHN0cmFwJyAvPlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmFiIGZhLWdpdGh1YiBmYS1sZycgdGl0bGU9J2dpdGh1YicgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0NhcmRDb250ZW50PlxuXG4gICAgICA8Q2FyZEFjdGlvbnM+XG4gICAgICAgIDxCdXR0b24gc2l6ZT0nc21hbGwnIGNvbG9yPSdwcmltYXJ5Jz5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly9tb3ZpZS10aW1lLW1hY2hpbmUubmV0bGlmeS5jb20vJ1xuICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXG4gICAgICAgICAgICByZWw9J25vb3BlbmVyIG5vcmVmZXJyZXInXG4gICAgICAgICAgPlxuICAgICAgICAgICAgVmlzaXRcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9DYXJkQWN0aW9ucz5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGltZyB7XG4gICAgICAgIGhlaWdodDogMjQwcHg7XG4gICAgICB9XG4gICAgICAuTXVpUGFwZXItcm9vdCB7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBwYWRkaW5nOiAxJTtcbiAgICAgICAgaGVpZ2h0OiA1MjVweDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLk11aUNhcmRIZWFkZXItdGl0bGUge1xuICAgICAgICBjb2xvcjogIzAwNzM4ODtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0xNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGRpdi5kZXRhaWxzIHtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBtYXJnaW4tdG9wOiAzJTtcbiAgICAgICAgLXdlYmtpdC1ib3gtcGFjazogc3BhY2UtZXZlbmx5O1xuICAgICAgICAgICAgLW1zLWZsZXgtcGFjazogc3BhY2UtZXZlbmx5O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgICBtYXgtd2lkdGg6IDMwMHB4O1xuICAgICAgICBoZWlnaHQ6IDEuNXJlbTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgZGl2LmRldGFpbHMgLmZhYixcbiAgICAgIGRpdi5kZXRhaWxzIC5mYXMge1xuICAgICAgICBjb2xvcjogIzE3YTJiODtcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICB9XG4gICAgICBcbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDElO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDgpICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGJ1dHRvbiBzcGFuLk11aUJ1dHRvbi1sYWJlbCBhIHtcbiAgICAgICAgY29sb3I6ICMwMDczODggIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLk11aUJ1dHRvbi1yb290OmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzM4OCAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgICAgXG4gICAgICAuTXVpQnV0dG9uLXJvb3Q6aG92ZXIgLk11aUJ1dHRvbi1sYWJlbCBhIHtcbiAgICAgICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfWB9PC9zdHlsZT5cbiAgICA8L0NhcmQ+XG4gICk7XG59XG4iXX0= */\n/*@ sourceURL=/home/lisa/Documents/Coding/Projects/PORTFOLIOS/next/pages/MovieTM.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.c9af42f4b6d236e7c718.hot-update.js.map