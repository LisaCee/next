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
var movieImgStyle = {
  height: '240px',
  margin: 'auto'
};

function Movie() {
  return __jsx("img", {
    src: "/static/movie-time-machine.jpg",
    alt: "movieTM",
    id: "movieIMG",
    style: movieImgStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
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
      lineNumber: 35
    },
    __self: this
  }, __jsx(_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Movie Time Machine",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), __jsx(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: classes.media,
    title: "Movie Time Machine",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx(Movie, {
    className: classes.media,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  })), __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
    color: "textSecondary",
    component: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "A time machine app that searches for movies by year"), __jsx("br", {
    className: "jsx-4151219269",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-4151219269" + " " + 'details',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("i", {
    title: "react",
    className: "jsx-4151219269" + " " + 'fab fa-react fa-lg',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), __jsx("i", {
    title: "css3",
    className: "jsx-4151219269" + " " + 'fab fa-css3 fa-lg',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), __jsx("i", {
    title: "bootstrap",
    className: "jsx-4151219269" + " " + 'fab fa-bootstrap fa-lg',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), __jsx("i", {
    title: "github",
    className: "jsx-4151219269" + " " + 'fab fa-github fa-lg',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }))), __jsx(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    size: "small",
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx("a", {
    href: "https://movie-time-machine.netlify.com/",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "jsx-4151219269",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "Visit"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4151219269",
    __self: this
  }, ".MuiPaper-root.jsx-4151219269{margin:0 auto;padding:1%;height:525px;}.MuiCardHeader-title.jsx-4151219269{color:#007388;margin-left:-15px !important;font-family:'Raleway',sans-serif;}div.details.jsx-4151219269{display:-webkit-box;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-top:3%;-webkit-box-pack:space-evenly;-ms-flex-pack:space-evenly;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;max-width:300px;height:1.5rem;}div.details.jsx-4151219269 .fab.jsx-4151219269,div.details.jsx-4151219269 .fas.jsx-4151219269{color:#17a2b8;font-size:1.5rem;}button.jsx-4151219269{margin-bottom:1%;background-color:rgba(0,0,0,0.08) !important;}button.jsx-4151219269 span.MuiButton-label.jsx-4151219269 a.jsx-4151219269{color:#007388 !important;}.MuiButton-root.jsx-4151219269:hover{background-color:#007388 !important;}.MuiButton-root.jsx-4151219269:hover .MuiButton-label.jsx-4151219269 a.jsx-4151219269{color:#ffffff !important;-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xpc2EvRG9jdW1lbnRzL0NvZGluZy9Qcm9qZWN0cy9QT1JURk9MSU9TL25leHQvcGFnZXMvTW92aWVUTS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRWtCLEFBR3VCLEFBTUEsQUFNTSxBQWFOLEFBS0csQUFLUSxBQUlXLEFBSVgsY0ExQ2QsQUFNa0IsQUFtQlosR0FLK0IsR0FsQjVCLEtBWFAsQUFrQ2YsQUFRdUIsTUFqQnZCLEtBYUEsRUFyQ0EsRUFXZSxHQU5xQixtQkF3QnBDLGFBYUEsQ0FwQ0Esc0NBTWdCLGNBQ2dCLDhCQUNDLDJCQUNNLDJIQUNyQixnQkFDRixjQUNoQiIsImZpbGUiOiIvaG9tZS9saXNhL0RvY3VtZW50cy9Db2RpbmcvUHJvamVjdHMvUE9SVEZPTElPUy9uZXh0L3BhZ2VzL01vdmllVE0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgQ2FyZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkJztcbmltcG9ydCBDYXJkSGVhZGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRIZWFkZXInO1xuaW1wb3J0IENhcmRBY3Rpb25zIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRBY3Rpb25zJztcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudCc7XG5pbXBvcnQgQ2FyZE1lZGlhIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRNZWRpYSc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICBjYXJkOiB7XG4gICAgbWF4V2lkdGg6IDM0NSxcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuc2Vjb25kYXJ5XG4gIH0sXG4gIG1lZGlhOiB7XG4gICAgaGVpZ2h0OiAyNDBcbiAgfVxufSkpO1xuXG5jb25zdCBtb3ZpZUltZ1N0eWxlID0ge1xuICBoZWlnaHQ6ICcyNDBweCcsXG4gIG1hcmdpbjogJ2F1dG8nXG59XG5mdW5jdGlvbiBNb3ZpZSgpIHtcbiAgICByZXR1cm4gKDxpbWcgc3JjPVwiL3N0YXRpYy9tb3ZpZS10aW1lLW1hY2hpbmUuanBnXCIgYWx0PVwibW92aWVUTVwiIGlkPVwibW92aWVJTUdcIiBzdHlsZT17bW92aWVJbWdTdHlsZX0vPilcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb3ZpZVRNKCkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q2FyZCBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZH0gaWQ9J2dhbGxlcnknPlxuICAgICAgPENhcmRIZWFkZXIgdGl0bGU9J01vdmllIFRpbWUgTWFjaGluZScgLz5cblxuICAgICAgPENhcmRNZWRpYVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubWVkaWF9XG4gICAgICAgIHRpdGxlPSdNb3ZpZSBUaW1lIE1hY2hpbmUnXG4gICAgICA+XG4gICAgICA8TW92aWUgY2xhc3NOYW1lPXtjbGFzc2VzLm1lZGlhfS8+XG4gICAgICA8L0NhcmRNZWRpYT5cblxuICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICA8VHlwb2dyYXBoeSBjb2xvcj0ndGV4dFNlY29uZGFyeScgY29tcG9uZW50PSdwJz5cbiAgICAgICAgICBBIHRpbWUgbWFjaGluZSBhcHAgdGhhdCBzZWFyY2hlcyBmb3IgbW92aWVzIGJ5IHllYXJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RldGFpbHMnPlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmFiIGZhLXJlYWN0IGZhLWxnJyB0aXRsZT0ncmVhY3QnIC8+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPSdmYWIgZmEtY3NzMyBmYS1sZycgdGl0bGU9J2NzczMnIC8+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPSdmYWIgZmEtYm9vdHN0cmFwIGZhLWxnJyB0aXRsZT0nYm9vdHN0cmFwJyAvPlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmFiIGZhLWdpdGh1YiBmYS1sZycgdGl0bGU9J2dpdGh1YicgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0NhcmRDb250ZW50PlxuXG4gICAgICA8Q2FyZEFjdGlvbnM+XG4gICAgICAgIDxCdXR0b24gc2l6ZT0nc21hbGwnIGNvbG9yPSdwcmltYXJ5Jz5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly9tb3ZpZS10aW1lLW1hY2hpbmUubmV0bGlmeS5jb20vJ1xuICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXG4gICAgICAgICAgICByZWw9J25vb3BlbmVyIG5vcmVmZXJyZXInXG4gICAgICAgICAgPlxuICAgICAgICAgICAgVmlzaXRcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9DYXJkQWN0aW9ucz5cbiAgICAgIDxzdHlsZSBqc3g+e2Bcbi5NdWlQYXBlci1yb290IHtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIHBhZGRpbmc6IDElO1xuICAgICAgICBoZWlnaHQ6IDUyNXB4O1xuICAgICAgfVxuICAgICAgXG4gICAgICAuTXVpQ2FyZEhlYWRlci10aXRsZSB7XG4gICAgICAgIGNvbG9yOiAjMDA3Mzg4O1xuICAgICAgICBtYXJnaW4tbGVmdDogLTE1cHggIWltcG9ydGFudDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgZGl2LmRldGFpbHMge1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG1hcmdpbi10b3A6IDMlO1xuICAgICAgICAtd2Via2l0LWJveC1wYWNrOiBzcGFjZS1ldmVubHk7XG4gICAgICAgICAgICAtbXMtZmxleC1wYWNrOiBzcGFjZS1ldmVubHk7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgICAgIGhlaWdodDogMS41cmVtO1xuICAgICAgfVxuICAgICAgXG4gICAgICBkaXYuZGV0YWlscyAuZmFiLFxuICAgICAgZGl2LmRldGFpbHMgLmZhcyB7XG4gICAgICAgIGNvbG9yOiAjMTdhMmI4O1xuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgYnV0dG9uIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMSU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wOCkgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgYnV0dG9uIHNwYW4uTXVpQnV0dG9uLWxhYmVsIGEge1xuICAgICAgICBjb2xvcjogIzAwNzM4OCAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgICAgXG4gICAgICAuTXVpQnV0dG9uLXJvb3Q6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3Mzg4ICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5NdWlCdXR0b24tcm9vdDpob3ZlciAuTXVpQnV0dG9uLWxhYmVsIGEge1xuICAgICAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICB9YH08L3N0eWxlPlxuICAgIDwvQ2FyZD5cbiAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=/home/lisa/Documents/Coding/Projects/PORTFOLIOS/next/pages/MovieTM.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.56ece56ce958c11c4731.hot-update.js.map