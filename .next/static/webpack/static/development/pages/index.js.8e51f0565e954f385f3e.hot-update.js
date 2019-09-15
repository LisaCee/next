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
  height: '240px'
};

function Movie() {
  return __jsx("img", {
    src: "/static/movie-time-machine.jpg",
    alt: "movieTM",
    id: "movieIMG",
    style: movieImgStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
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
      lineNumber: 34
    },
    __self: this
  }, __jsx(_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Movie Time Machine",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), __jsx(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: classes.media,
    title: "Movie Time Machine",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx(Movie, {
    className: classes.media,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  })), __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
    color: "textSecondary",
    component: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "A time machine app that searches for movies by year"), __jsx("br", {
    className: "jsx-4151219269",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-4151219269" + " " + 'details',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("i", {
    title: "react",
    className: "jsx-4151219269" + " " + 'fab fa-react fa-lg',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), __jsx("i", {
    title: "css3",
    className: "jsx-4151219269" + " " + 'fab fa-css3 fa-lg',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), __jsx("i", {
    title: "bootstrap",
    className: "jsx-4151219269" + " " + 'fab fa-bootstrap fa-lg',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), __jsx("i", {
    title: "github",
    className: "jsx-4151219269" + " " + 'fab fa-github fa-lg',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }))), __jsx(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    size: "small",
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx("a", {
    href: "https://movie-time-machine.netlify.com/",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "jsx-4151219269",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "Visit"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4151219269",
    __self: this
  }, ".MuiPaper-root.jsx-4151219269{margin:0 auto;padding:1%;height:525px;}.MuiCardHeader-title.jsx-4151219269{color:#007388;margin-left:-15px !important;font-family:'Raleway',sans-serif;}div.details.jsx-4151219269{display:-webkit-box;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-top:3%;-webkit-box-pack:space-evenly;-ms-flex-pack:space-evenly;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;max-width:300px;height:1.5rem;}div.details.jsx-4151219269 .fab.jsx-4151219269,div.details.jsx-4151219269 .fas.jsx-4151219269{color:#17a2b8;font-size:1.5rem;}button.jsx-4151219269{margin-bottom:1%;background-color:rgba(0,0,0,0.08) !important;}button.jsx-4151219269 span.MuiButton-label.jsx-4151219269 a.jsx-4151219269{color:#007388 !important;}.MuiButton-root.jsx-4151219269:hover{background-color:#007388 !important;}.MuiButton-root.jsx-4151219269:hover .MuiButton-label.jsx-4151219269 a.jsx-4151219269{color:#ffffff !important;-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xpc2EvRG9jdW1lbnRzL0NvZGluZy9Qcm9qZWN0cy9QT1JURk9MSU9TL25leHQvcGFnZXMvTW92aWVUTS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtRWtCLEFBR3VCLEFBTUEsQUFNTSxBQWFOLEFBS0csQUFLUSxBQUlXLEFBSVgsY0ExQ2QsQUFNa0IsQUFtQlosR0FLK0IsR0FsQjVCLEtBWFAsQUFrQ2YsQUFRdUIsTUFqQnZCLEtBYUEsRUFyQ0EsRUFXZSxHQU5xQixtQkF3QnBDLGFBYUEsQ0FwQ0Esc0NBTWdCLGNBQ2dCLDhCQUNDLDJCQUNNLDJIQUNyQixnQkFDRixjQUNoQiIsImZpbGUiOiIvaG9tZS9saXNhL0RvY3VtZW50cy9Db2RpbmcvUHJvamVjdHMvUE9SVEZPTElPUy9uZXh0L3BhZ2VzL01vdmllVE0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgQ2FyZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkJztcbmltcG9ydCBDYXJkSGVhZGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRIZWFkZXInO1xuaW1wb3J0IENhcmRBY3Rpb25zIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRBY3Rpb25zJztcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudCc7XG5pbXBvcnQgQ2FyZE1lZGlhIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRNZWRpYSc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICBjYXJkOiB7XG4gICAgbWF4V2lkdGg6IDM0NSxcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuc2Vjb25kYXJ5XG4gIH0sXG4gIG1lZGlhOiB7XG4gICAgaGVpZ2h0OiAyNDBcbiAgfVxufSkpO1xuXG5jb25zdCBtb3ZpZUltZ1N0eWxlID0ge1xuICBoZWlnaHQ6ICcyNDBweCdcbn1cbmZ1bmN0aW9uIE1vdmllKCkge1xuICAgIHJldHVybiAoPGltZyBzcmM9XCIvc3RhdGljL21vdmllLXRpbWUtbWFjaGluZS5qcGdcIiBhbHQ9XCJtb3ZpZVRNXCIgaWQ9XCJtb3ZpZUlNR1wiIHN0eWxlPXttb3ZpZUltZ1N0eWxlfS8+KVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vdmllVE0oKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICByZXR1cm4gKFxuICAgIDxDYXJkIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkfSBpZD0nZ2FsbGVyeSc+XG4gICAgICA8Q2FyZEhlYWRlciB0aXRsZT0nTW92aWUgVGltZSBNYWNoaW5lJyAvPlxuXG4gICAgICA8Q2FyZE1lZGlhXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZWRpYX1cbiAgICAgICAgdGl0bGU9J01vdmllIFRpbWUgTWFjaGluZSdcbiAgICAgID5cbiAgICAgIDxNb3ZpZSBjbGFzc05hbWU9e2NsYXNzZXMubWVkaWF9Lz5cbiAgICAgIDwvQ2FyZE1lZGlhPlxuXG4gICAgICA8Q2FyZENvbnRlbnQ+XG4gICAgICAgIDxUeXBvZ3JhcGh5IGNvbG9yPSd0ZXh0U2Vjb25kYXJ5JyBjb21wb25lbnQ9J3AnPlxuICAgICAgICAgIEEgdGltZSBtYWNoaW5lIGFwcCB0aGF0IHNlYXJjaGVzIGZvciBtb3ZpZXMgYnkgeWVhclxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGV0YWlscyc+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPSdmYWIgZmEtcmVhY3QgZmEtbGcnIHRpdGxlPSdyZWFjdCcgLz5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhYiBmYS1jc3MzIGZhLWxnJyB0aXRsZT0nY3NzMycgLz5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhYiBmYS1ib290c3RyYXAgZmEtbGcnIHRpdGxlPSdib290c3RyYXAnIC8+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPSdmYWIgZmEtZ2l0aHViIGZhLWxnJyB0aXRsZT0nZ2l0aHViJyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQ2FyZENvbnRlbnQ+XG5cbiAgICAgIDxDYXJkQWN0aW9ucz5cbiAgICAgICAgPEJ1dHRvbiBzaXplPSdzbWFsbCcgY29sb3I9J3ByaW1hcnknPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPSdodHRwczovL21vdmllLXRpbWUtbWFjaGluZS5uZXRsaWZ5LmNvbS8nXG4gICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcbiAgICAgICAgICAgIHJlbD0nbm9vcGVuZXIgbm9yZWZlcnJlcidcbiAgICAgICAgICA+XG4gICAgICAgICAgICBWaXNpdFxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L0NhcmRBY3Rpb25zPlxuICAgICAgPHN0eWxlIGpzeD57YFxuLk11aVBhcGVyLXJvb3Qge1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgcGFkZGluZzogMSU7XG4gICAgICAgIGhlaWdodDogNTI1cHg7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5NdWlDYXJkSGVhZGVyLXRpdGxlIHtcbiAgICAgICAgY29sb3I6ICMwMDczODg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMTVweCAhaW1wb3J0YW50O1xuICAgICAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xuICAgICAgfVxuICAgICAgXG4gICAgICBkaXYuZGV0YWlscyB7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgbWFyZ2luLXRvcDogMyU7XG4gICAgICAgIC13ZWJraXQtYm94LXBhY2s6IHNwYWNlLWV2ZW5seTtcbiAgICAgICAgICAgIC1tcy1mbGV4LXBhY2s6IHNwYWNlLWV2ZW5seTtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICAgICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICAgICAgaGVpZ2h0OiAxLjVyZW07XG4gICAgICB9XG4gICAgICBcbiAgICAgIGRpdi5kZXRhaWxzIC5mYWIsXG4gICAgICBkaXYuZGV0YWlscyAuZmFzIHtcbiAgICAgICAgY29sb3I6ICMxN2EyYjg7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgfVxuICAgICAgXG4gICAgICBidXR0b24ge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxJTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA4KSAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgICAgXG4gICAgICBidXR0b24gc3Bhbi5NdWlCdXR0b24tbGFiZWwgYSB7XG4gICAgICAgIGNvbG9yOiAjMDA3Mzg4ICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5NdWlCdXR0b24tcm9vdDpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDczODggIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLk11aUJ1dHRvbi1yb290OmhvdmVyIC5NdWlCdXR0b24tbGFiZWwgYSB7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1gfTwvc3R5bGU+XG4gICAgPC9DYXJkPlxuICApO1xufVxuIl19 */\n/*@ sourceURL=/home/lisa/Documents/Coding/Projects/PORTFOLIOS/next/pages/MovieTM.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.8e51f0565e954f385f3e.hot-update.js.map