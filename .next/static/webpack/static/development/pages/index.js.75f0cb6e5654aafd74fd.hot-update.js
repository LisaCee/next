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
    className: "jsx-119618786",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-119618786" + " " + 'details',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("i", {
    title: "react",
    className: "jsx-119618786" + " " + 'fab fa-react fa-lg',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), __jsx("i", {
    title: "css3",
    className: "jsx-119618786" + " " + 'fab fa-css3 fa-lg',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), __jsx("i", {
    title: "bootstrap",
    className: "jsx-119618786" + " " + 'fab fa-bootstrap fa-lg',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), __jsx("i", {
    title: "github",
    className: "jsx-119618786" + " " + 'fab fa-github fa-lg',
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
    className: "jsx-119618786",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "Visit"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "119618786",
    __self: this
  }, "img#movieIMG.jsx-119618786{max-height:100px;}.MuiPaper-root.jsx-119618786{margin:0 auto;padding:1%;height:525px;}.MuiCardHeader-title.jsx-119618786{color:#007388;margin-left:-15px !important;font-family:'Raleway',sans-serif;}div.details.jsx-119618786{display:-webkit-box;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-top:3%;-webkit-box-pack:space-evenly;-ms-flex-pack:space-evenly;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;max-width:300px;height:1.5rem;}div.details.jsx-119618786 .fab.jsx-119618786,div.details.jsx-119618786 .fas.jsx-119618786{color:#17a2b8;font-size:1.5rem;}button.jsx-119618786{margin-bottom:1%;background-color:rgba(0,0,0,0.08) !important;}button.jsx-119618786 span.MuiButton-label.jsx-119618786 a.jsx-119618786{color:#007388 !important;}.MuiButton-root.jsx-119618786:hover{background-color:#007388 !important;}.MuiButton-root.jsx-119618786:hover .MuiButton-label.jsx-119618786 a.jsx-119618786{color:#ffffff !important;-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xpc2EvRG9jdW1lbnRzL0NvZGluZy9Qcm9qZWN0cy9QT1JURk9MSU9TL25leHQvcGFnZXMvTW92aWVUTS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtRWtCLEFBRzBCLEFBR0gsQUFNQSxBQU1NLEFBYU4sQUFLRyxBQUtRLEFBSVcsQUFJWCxjQTFDZCxBQU1rQixBQW1CWixHQTVCbkIsQUFpQ2tELEdBbEI1QixLQVhQLEFBa0NmLEFBUXVCLE1BakJ2QixLQWFBLEVBckNBLEVBV2UsR0FOcUIsbUJBd0JwQyxhQWFBLENBcENBLHNDQU1nQixjQUNnQiw4QkFDQywyQkFDTSwySEFDckIsZ0JBQ0YsY0FDaEIiLCJmaWxlIjoiL2hvbWUvbGlzYS9Eb2N1bWVudHMvQ29kaW5nL1Byb2plY3RzL1BPUlRGT0xJT1MvbmV4dC9wYWdlcy9Nb3ZpZVRNLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IENhcmQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZCc7XG5pbXBvcnQgQ2FyZEhlYWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkSGVhZGVyJztcbmltcG9ydCBDYXJkQWN0aW9ucyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQWN0aW9ucyc7XG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnQnO1xuaW1wb3J0IENhcmRNZWRpYSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkTWVkaWEnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgY2FyZDoge1xuICAgIG1heFdpZHRoOiAzNDUsXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyKSxcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnNlY29uZGFyeVxuICB9LFxuICBtZWRpYToge1xuICAgIGhlaWdodDogMjQwXG4gIH1cbn0pKTtcblxuY29uc3QgbW92aWVJbWdTdHlsZSA9IHtcbiAgaGVpZ2h0OiAnMjQwcHgnXG59XG5mdW5jdGlvbiBNb3ZpZSgpIHtcbiAgICByZXR1cm4gKDxpbWcgc3JjPVwiL3N0YXRpYy9tb3ZpZS10aW1lLW1hY2hpbmUuanBnXCIgYWx0PVwibW92aWVUTVwiIGlkPVwibW92aWVJTUdcIiBzdHlsZT17bW92aWVJbWdTdHlsZX0vPilcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb3ZpZVRNKCkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q2FyZCBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZH0gaWQ9J2dhbGxlcnknPlxuICAgICAgPENhcmRIZWFkZXIgdGl0bGU9J01vdmllIFRpbWUgTWFjaGluZScgLz5cblxuICAgICAgPENhcmRNZWRpYVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubWVkaWF9XG4gICAgICAgIHRpdGxlPSdNb3ZpZSBUaW1lIE1hY2hpbmUnXG4gICAgICA+XG4gICAgICA8TW92aWUgY2xhc3NOYW1lPXtjbGFzc2VzLm1lZGlhfS8+XG4gICAgICA8L0NhcmRNZWRpYT5cblxuICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICA8VHlwb2dyYXBoeSBjb2xvcj0ndGV4dFNlY29uZGFyeScgY29tcG9uZW50PSdwJz5cbiAgICAgICAgICBBIHRpbWUgbWFjaGluZSBhcHAgdGhhdCBzZWFyY2hlcyBmb3IgbW92aWVzIGJ5IHllYXJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RldGFpbHMnPlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmFiIGZhLXJlYWN0IGZhLWxnJyB0aXRsZT0ncmVhY3QnIC8+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPSdmYWIgZmEtY3NzMyBmYS1sZycgdGl0bGU9J2NzczMnIC8+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPSdmYWIgZmEtYm9vdHN0cmFwIGZhLWxnJyB0aXRsZT0nYm9vdHN0cmFwJyAvPlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmFiIGZhLWdpdGh1YiBmYS1sZycgdGl0bGU9J2dpdGh1YicgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0NhcmRDb250ZW50PlxuXG4gICAgICA8Q2FyZEFjdGlvbnM+XG4gICAgICAgIDxCdXR0b24gc2l6ZT0nc21hbGwnIGNvbG9yPSdwcmltYXJ5Jz5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly9tb3ZpZS10aW1lLW1hY2hpbmUubmV0bGlmeS5jb20vJ1xuICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXG4gICAgICAgICAgICByZWw9J25vb3BlbmVyIG5vcmVmZXJyZXInXG4gICAgICAgICAgPlxuICAgICAgICAgICAgVmlzaXRcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9DYXJkQWN0aW9ucz5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGltZyNtb3ZpZUlNRyB7XG4gICAgICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xuICAgICAgfVxuICAgICAgLk11aVBhcGVyLXJvb3Qge1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgcGFkZGluZzogMSU7XG4gICAgICAgIGhlaWdodDogNTI1cHg7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5NdWlDYXJkSGVhZGVyLXRpdGxlIHtcbiAgICAgICAgY29sb3I6ICMwMDczODg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMTVweCAhaW1wb3J0YW50O1xuICAgICAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xuICAgICAgfVxuICAgICAgXG4gICAgICBkaXYuZGV0YWlscyB7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgbWFyZ2luLXRvcDogMyU7XG4gICAgICAgIC13ZWJraXQtYm94LXBhY2s6IHNwYWNlLWV2ZW5seTtcbiAgICAgICAgICAgIC1tcy1mbGV4LXBhY2s6IHNwYWNlLWV2ZW5seTtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICAgICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICAgICAgaGVpZ2h0OiAxLjVyZW07XG4gICAgICB9XG4gICAgICBcbiAgICAgIGRpdi5kZXRhaWxzIC5mYWIsXG4gICAgICBkaXYuZGV0YWlscyAuZmFzIHtcbiAgICAgICAgY29sb3I6ICMxN2EyYjg7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgfVxuICAgICAgXG4gICAgICBidXR0b24ge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxJTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA4KSAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgICAgXG4gICAgICBidXR0b24gc3Bhbi5NdWlCdXR0b24tbGFiZWwgYSB7XG4gICAgICAgIGNvbG9yOiAjMDA3Mzg4ICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5NdWlCdXR0b24tcm9vdDpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDczODggIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLk11aUJ1dHRvbi1yb290OmhvdmVyIC5NdWlCdXR0b24tbGFiZWwgYSB7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1gfTwvc3R5bGU+XG4gICAgPC9DYXJkPlxuICApO1xufVxuIl19 */\n/*@ sourceURL=/home/lisa/Documents/Coding/Projects/PORTFOLIOS/next/pages/MovieTM.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.75f0cb6e5654aafd74fd.hot-update.js.map