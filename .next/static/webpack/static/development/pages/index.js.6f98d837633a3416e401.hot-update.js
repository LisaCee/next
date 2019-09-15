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
    className: "jsx-3181870822",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3181870822" + " " + 'details',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx("i", {
    title: "react",
    className: "jsx-3181870822" + " " + 'fab fa-react fa-lg',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), __jsx("i", {
    title: "css3",
    className: "jsx-3181870822" + " " + 'fab fa-css3 fa-lg',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), __jsx("i", {
    title: "bootstrap",
    className: "jsx-3181870822" + " " + 'fab fa-bootstrap fa-lg',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), __jsx("i", {
    title: "github",
    className: "jsx-3181870822" + " " + 'fab fa-github fa-lg',
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
    className: "jsx-3181870822",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Visit"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3181870822",
    __self: this
  }, ".MuiPaper-root.jsx-3181870822{margin:0 auto;padding:1%;height:525px;}.MuiCardHeader-title.jsx-3181870822{color:#007388;margin-left:-15px !important;font-family:'Raleway',sans-serif;}div.details.jsx-3181870822{display:-webkit-box;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-top:3%;-webkit-box-pack:space-evenly;-ms-flex-pack:space-evenly;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;max-width:300px;height:1.5rem;}div.details.jsx-3181870822 .fab.jsx-3181870822,div.details.jsx-3181870822 .fas.jsx-3181870822{color:#17a2b8;font-size:1.5rem;}button.jsx-3181870822{margin-bottom:1%;background-color:rgba(0,0,0,0.08) !important;}button.jsx-3181870822 span.MuiButton-label.jsx-3181870822 a.jsx-3181870822{color:#007388 !important;}.MuiButton-root.jsx-3181870822:hover{background-color:#007388 !important;}.MuiButton-root.jsx-3181870822:hover .MuiButton-label.jsx-3181870822 a.jsx-3181870822{color:#ffffff !important;-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xpc2EvRG9jdW1lbnRzL0NvZGluZy9Qcm9qZWN0cy9QT1JURk9MSU9TL25leHQvcGFnZXMvTW92aWVUTS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRWtCLEFBR3VCLEFBTUEsQUFNTSxBQWFOLEFBS0csQUFLUSxBQUlXLEFBSVgsY0ExQ2QsQUFNa0IsQUFtQlosR0FLK0IsR0FsQjVCLEtBWFAsQUFrQ2YsQUFRdUIsTUFqQnZCLEtBYUEsRUFyQ0EsRUFXZSxHQU5xQixtQkF3QnBDLGFBYUEsQ0FwQ0Esc0NBTWdCLGNBQ2dCLDhCQUNDLDJCQUNNLDJIQUNyQixnQkFDRixjQUNoQiIsImZpbGUiOiIvaG9tZS9saXNhL0RvY3VtZW50cy9Db2RpbmcvUHJvamVjdHMvUE9SVEZPTElPUy9uZXh0L3BhZ2VzL01vdmllVE0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgQ2FyZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkJztcbmltcG9ydCBDYXJkSGVhZGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRIZWFkZXInO1xuaW1wb3J0IENhcmRBY3Rpb25zIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRBY3Rpb25zJztcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudCc7XG5pbXBvcnQgQ2FyZE1lZGlhIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRNZWRpYSc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICBjYXJkOiB7XG4gICAgbWF4V2lkdGg6IDM0NSxcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuc2Vjb25kYXJ5XG4gIH0sXG4gIG1lZGlhOiB7XG4gICAgaGVpZ2h0OiAyNDBcbiAgfVxufSkpO1xuXG5mdW5jdGlvbiBNb3ZpZSgpIHtcbiAgICByZXR1cm4gKDxpbWcgc3JjPVwiL3N0YXRpYy9tb3ZpZS10aW1lLW1hY2hpbmUuanBnXCIgYWx0PVwibW92aWVUTVwiLz4pXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW92aWVUTSgpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIHJldHVybiAoXG4gICAgPENhcmQgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmR9IGlkPSdnYWxsZXJ5Jz5cbiAgICAgIDxDYXJkSGVhZGVyIHRpdGxlPSdNb3ZpZSBUaW1lIE1hY2hpbmUnIC8+XG5cbiAgICAgIDxDYXJkTWVkaWFcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1lZGlhfVxuICAgICAgICB0aXRsZT0nTW92aWUgVGltZSBNYWNoaW5lJ1xuICAgICAgPlxuICAgICAgPE1vdmllIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZWRpYX0vPlxuICAgICAgPC9DYXJkTWVkaWE+XG5cbiAgICAgIDxDYXJkQ29udGVudD5cbiAgICAgICAgPFR5cG9ncmFwaHkgY29sb3I9J3RleHRTZWNvbmRhcnknIGNvbXBvbmVudD0ncCc+XG4gICAgICAgICAgQSB0aW1lIG1hY2hpbmUgYXBwIHRoYXQgc2VhcmNoZXMgZm9yIG1vdmllcyBieSB5ZWFyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkZXRhaWxzJz5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhYiBmYS1yZWFjdCBmYS1sZycgdGl0bGU9J3JlYWN0JyAvPlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmFiIGZhLWNzczMgZmEtbGcnIHRpdGxlPSdjc3MzJyAvPlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmFiIGZhLWJvb3RzdHJhcCBmYS1sZycgdGl0bGU9J2Jvb3RzdHJhcCcgLz5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhYiBmYS1naXRodWIgZmEtbGcnIHRpdGxlPSdnaXRodWInIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9DYXJkQ29udGVudD5cblxuICAgICAgPENhcmRBY3Rpb25zPlxuICAgICAgICA8QnV0dG9uIHNpemU9J3NtYWxsJyBjb2xvcj0ncHJpbWFyeSc+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vbW92aWUtdGltZS1tYWNoaW5lLm5ldGxpZnkuY29tLydcbiAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xuICAgICAgICAgICAgcmVsPSdub29wZW5lciBub3JlZmVycmVyJ1xuICAgICAgICAgID5cbiAgICAgICAgICAgIFZpc2l0XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvQ2FyZEFjdGlvbnM+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAuTXVpUGFwZXItcm9vdCB7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBwYWRkaW5nOiAxJTtcbiAgICAgICAgaGVpZ2h0OiA1MjVweDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLk11aUNhcmRIZWFkZXItdGl0bGUge1xuICAgICAgICBjb2xvcjogIzAwNzM4ODtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0xNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGRpdi5kZXRhaWxzIHtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBtYXJnaW4tdG9wOiAzJTtcbiAgICAgICAgLXdlYmtpdC1ib3gtcGFjazogc3BhY2UtZXZlbmx5O1xuICAgICAgICAgICAgLW1zLWZsZXgtcGFjazogc3BhY2UtZXZlbmx5O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgICBtYXgtd2lkdGg6IDMwMHB4O1xuICAgICAgICBoZWlnaHQ6IDEuNXJlbTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgZGl2LmRldGFpbHMgLmZhYixcbiAgICAgIGRpdi5kZXRhaWxzIC5mYXMge1xuICAgICAgICBjb2xvcjogIzE3YTJiODtcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICB9XG4gICAgICBcbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDElO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDgpICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGJ1dHRvbiBzcGFuLk11aUJ1dHRvbi1sYWJlbCBhIHtcbiAgICAgICAgY29sb3I6ICMwMDczODggIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLk11aUJ1dHRvbi1yb290OmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzM4OCAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgICAgXG4gICAgICAuTXVpQnV0dG9uLXJvb3Q6aG92ZXIgLk11aUJ1dHRvbi1sYWJlbCBhIHtcbiAgICAgICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfWB9PC9zdHlsZT5cbiAgICA8L0NhcmQ+XG4gICk7XG59XG4iXX0= */\n/*@ sourceURL=/home/lisa/Documents/Coding/Projects/PORTFOLIOS/next/pages/MovieTM.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.6f98d837633a3416e401.hot-update.js.map