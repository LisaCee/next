webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/Contact.js":
/*!**************************!*\
  !*** ./pages/Contact.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Skills; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
var _jsxFileName = "/home/lisa/Documents/Coding/Projects/PORTFOLIOS/next/pages/Contact.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





 // import '../src/styles/contact.css';

var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {
    container: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1)
    },
    dense: {
      marginTop: theme.spacing(2)
    },
    menu: {
      width: 200
    }
  };
});
function Skills() {
  var classes = useStyles();
  return __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("div", {
    id: "contactForm",
    className: "jsx-3696513229",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h5",
    id: "contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Contact Me"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "body1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Whether you wish to work with me or just want to chat about Prince or programming, I'd love to hear from you."), __jsx("form", {
    action: "https://formspree.io/lisaceedesign@gmail.com",
    method: "POST",
    autoComplete: "off",
    className: "jsx-3696513229" + " " + (classes.container || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    id: "name",
    label: "Name",
    name: "name",
    margin: "normal",
    variant: "outlined",
    fullWidth: true,
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), __jsx("input", {
    type: "hidden",
    name: "_next",
    value: "http://www.lisaceedesign.com",
    className: "jsx-3696513229",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    id: "email",
    label: "Email",
    type: "email",
    name: "email",
    autoComplete: "email",
    margin: "normal",
    variant: "outlined",
    fullWidth: true,
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    id: "subject",
    label: "Subject",
    type: "subject",
    name: "subject",
    margin: "normal",
    variant: "outlined",
    fullWidth: true,
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    id: "outlined-multiline-static",
    label: "Message",
    multiline: true,
    rows: "4",
    margin: "normal",
    variant: "outlined",
    fullWidth: true,
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    type: "submit",
    className: "primary submit",
    variant: "contained",
    id: "submit",
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "Submit"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    type: "reset",
    value: "Reset Form",
    color: "secondary",
    variant: "contained",
    id: "cancel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, "Reset"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3696513229",
    __self: this
  }, ".MuiInputBase-formControl.jsx-3696513229{background:white;}button.MuiButtonBase-root.jsx-3696513229{margin:3%;}button#submit.MuiButtonBase-root.primary.submit.MuiButton-contained.jsx-3696513229{background-color:#17a2b8 !important;}button#submit.MuiButtonBase-root.primary.submit.MuiButton-contained.jsx-3696513229:hover{background-color:#007388 !important;}.MuiButton-containedSecondary.jsx-3696513229{background-color:#9ea7aa !important;}.MuiButton-containedSecondary.jsx-3696513229:hover{color:#17a2b8 !important;background-color:rgba(0,0,0,0.08) !important;}@media (min-width:768px){form.jsx-3696513229{max-width:70%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xpc2EvRG9jdW1lbnRzL0NvZGluZy9Qcm9qZWN0cy9QT1JURk9MSU9TL25leHQvcGFnZXMvQ29udGFjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4R2tCLEFBRzBCLEFBSVAsQUFJMEIsQUFJQSxBQUlBLEFBSVgsQUFNVCxVQXJCbEIsSUFzQkUsR0ExQkYsUUFvQmtELFdBWmxELEFBSUEsQUFJQSxrQ0FLQSIsImZpbGUiOiIvaG9tZS9saXNhL0RvY3VtZW50cy9Db2RpbmcvUHJvamVjdHMvUE9SVEZPTElPUy9uZXh0L3BhZ2VzL0NvbnRhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbi8vIGltcG9ydCAnLi4vc3JjL3N0eWxlcy9jb250YWN0LmNzcyc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgY29udGFpbmVyOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhXcmFwOiAnd3JhcCdcbiAgfSxcbiAgdGV4dEZpZWxkOiB7XG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygxKSxcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygxKVxuICB9LFxuICBkZW5zZToge1xuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygyKVxuICB9LFxuICBtZW51OiB7XG4gICAgd2lkdGg6IDIwMFxuICB9XG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNraWxscygpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxkaXYgaWQ9J2NvbnRhY3RGb3JtJz5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDUnIGlkPSdjb250YWN0Jz5cbiAgICAgICAgICBDb250YWN0IE1lXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nYm9keTEnPlxuICAgICAgICAgIFdoZXRoZXIgeW91IHdpc2ggdG8gd29yayB3aXRoIG1lIG9yIGp1c3Qgd2FudCB0byBjaGF0IGFib3V0IFByaW5jZSBvclxuICAgICAgICAgIHByb2dyYW1taW5nLCBJJ2QgbG92ZSB0byBoZWFyIGZyb20geW91LlxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDxmb3JtXG4gICAgICAgICAgYWN0aW9uPSdodHRwczovL2Zvcm1zcHJlZS5pby9saXNhY2VlZGVzaWduQGdtYWlsLmNvbSdcbiAgICAgICAgICBtZXRob2Q9J1BPU1QnXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn1cbiAgICAgICAgICBhdXRvQ29tcGxldGU9J29mZidcbiAgICAgICAgPlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGlkPSduYW1lJ1xuICAgICAgICAgICAgbGFiZWw9J05hbWUnXG4gICAgICAgICAgICBuYW1lPSduYW1lJ1xuICAgICAgICAgICAgbWFyZ2luPSdub3JtYWwnXG4gICAgICAgICAgICB2YXJpYW50PSdvdXRsaW5lZCdcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT0naGlkZGVuJ1xuICAgICAgICAgICAgbmFtZT0nX25leHQnXG4gICAgICAgICAgICB2YWx1ZT0naHR0cDovL3d3dy5saXNhY2VlZGVzaWduLmNvbSdcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGlkPSdlbWFpbCdcbiAgICAgICAgICAgIGxhYmVsPSdFbWFpbCdcbiAgICAgICAgICAgIHR5cGU9J2VtYWlsJ1xuICAgICAgICAgICAgbmFtZT0nZW1haWwnXG4gICAgICAgICAgICBhdXRvQ29tcGxldGU9J2VtYWlsJ1xuICAgICAgICAgICAgbWFyZ2luPSdub3JtYWwnXG4gICAgICAgICAgICB2YXJpYW50PSdvdXRsaW5lZCdcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGlkPSdzdWJqZWN0J1xuICAgICAgICAgICAgbGFiZWw9J1N1YmplY3QnXG4gICAgICAgICAgICB0eXBlPSdzdWJqZWN0J1xuICAgICAgICAgICAgbmFtZT0nc3ViamVjdCdcbiAgICAgICAgICAgIG1hcmdpbj0nbm9ybWFsJ1xuICAgICAgICAgICAgdmFyaWFudD0nb3V0bGluZWQnXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGlkPSdvdXRsaW5lZC1tdWx0aWxpbmUtc3RhdGljJ1xuICAgICAgICAgICAgbGFiZWw9J01lc3NhZ2UnXG4gICAgICAgICAgICBtdWx0aWxpbmVcbiAgICAgICAgICAgIHJvd3M9JzQnXG4gICAgICAgICAgICBtYXJnaW49J25vcm1hbCdcbiAgICAgICAgICAgIHZhcmlhbnQ9J291dGxpbmVkJ1xuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgdHlwZT0nc3VibWl0J1xuICAgICAgICAgICAgY2xhc3NOYW1lPSdwcmltYXJ5IHN1Ym1pdCdcbiAgICAgICAgICAgIHZhcmlhbnQ9J2NvbnRhaW5lZCdcbiAgICAgICAgICAgIGlkPSdzdWJtaXQnXG4gICAgICAgICAgICBjb2xvcj0ncHJpbWFyeSdcbiAgICAgICAgICA+XG4gICAgICAgICAgICBTdWJtaXRcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICB0eXBlPSdyZXNldCdcbiAgICAgICAgICAgIHZhbHVlPSdSZXNldCBGb3JtJ1xuICAgICAgICAgICAgY29sb3I9J3NlY29uZGFyeSdcbiAgICAgICAgICAgIHZhcmlhbnQ9J2NvbnRhaW5lZCdcbiAgICAgICAgICAgIGlkPSdjYW5jZWwnXG4gICAgICAgICAgPlxuICAgICAgICAgICAgUmVzZXRcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAuTXVpSW5wdXRCYXNlLWZvcm1Db250cm9sIHtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGJ1dHRvbi5NdWlCdXR0b25CYXNlLXJvb3Qge1xuICAgICAgICBtYXJnaW46IDMlO1xuICAgICAgfVxuICAgICAgXG4gICAgICBidXR0b24jc3VibWl0Lk11aUJ1dHRvbkJhc2Utcm9vdC5wcmltYXJ5LnN1Ym1pdC5NdWlCdXR0b24tY29udGFpbmVkIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE3YTJiOCAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgICAgXG4gICAgICBidXR0b24jc3VibWl0Lk11aUJ1dHRvbkJhc2Utcm9vdC5wcmltYXJ5LnN1Ym1pdC5NdWlCdXR0b24tY29udGFpbmVkOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzM4OCAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgICAgXG4gICAgICAuTXVpQnV0dG9uLWNvbnRhaW5lZFNlY29uZGFyeSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5ZWE3YWEgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLk11aUJ1dHRvbi1jb250YWluZWRTZWNvbmRhcnk6aG92ZXIge1xuICAgICAgICBjb2xvcjogIzE3YTJiOCAhaW1wb3J0YW50O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDgpICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgICBcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgICAgICBmb3JtIHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDcwJTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59XG4iXX0= */\n/*@ sourceURL=/home/lisa/Documents/Coding/Projects/PORTFOLIOS/next/pages/Contact.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.8039f72f5dfaba5b7c0e.hot-update.js.map