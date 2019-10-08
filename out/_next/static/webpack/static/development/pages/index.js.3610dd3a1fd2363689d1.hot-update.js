webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Card.js":
/*!****************************!*\
  !*** ./components/Card.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/michaelberry/Desktop/new-website/components/Card.js";


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var title = _ref.title,
      text = _ref.text,
      tools = _ref.tools;
  //formats the tool array into a string separated by "|"
  var toolStr = tools.reduce(function (str, cur, ind) {
    if (ind !== 0) {
      return "".concat(str, " | ").concat(cur);
    } else {
      return str + cur;
    }
  }, "");
  console.log(toolStr);
  var newToolStr = tools.join("|");
  console.log(newToolStr);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1826757966" + " " + "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1826757966" + " " + "sidebar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1826757966" + " " + "vert",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: "jsx-1826757966",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, title)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1826757966" + " " + "card-main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1826757966" + " " + "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1826757966",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, text)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1826757966" + " " + "tools",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: "jsx-1826757966",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, tools.map(function (tool, ind) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      key: ind,
      className: "jsx-1826757966",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, "| ".concat(tool, " |"));
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1826757966",
    __self: this
  }, ".card.jsx-1826757966{cursor:hover;border:solid 0.5px gray;background-color:white;font-size:17px;display:grid;grid-template-columns:15% 70%;grid-template-rows:40px;}.tools.jsx-1826757966{grid-column:2;justify-self:center;}.sidebar.jsx-1826757966{font-size:17px;grid-column:1;grid-row:1/ 4;border-right:solid 5px;}.vert.jsx-1826757966{font-size:15px;grid-column:1;grid-row:1/4;justify-self:start;white-space:nowrap;-webkit-writing-mode:tb;-ms-writing-mode:tb;writing-mode:tb;}h4.jsx-1826757966{font-family:\"Teko\",sans-serif;text-align:center;}.vert.jsx-1826757966 h4.jsx-1826757966{-webkit-writing-mode:tb;-ms-writing-mode:tb;writing-mode:tb;margin-block-end:3px;white-space:nowrap;}.card-main.jsx-1826757966{grid-column:2;grid-row:1/4;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.content.jsx-1826757966{margin-left:1em;}@media (min-width:765px) and (max-width:1024px){.card.jsx-1826757966{font-size:14px;}}@media (min-width:320px) and (max-width:480px){.card.jsx-1826757966{margin-bottom:1em;}.vert.jsx-1826757966{background-color:#e4a4a4f0;justify-self:unset;}.sidebar.jsx-1826757966{z-index:2;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsYmVycnkvRGVza3RvcC9uZXctd2Vic2l0ZS9jb21wb25lbnRzL0NhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUNrQixBQUd3QixBQVVDLEFBS0MsQUFPQSxBQVNnQixBQUtmLEFBT0YsQUFPRSxBQUlDLEFBTUcsQUFHUyxBQUlqQixVQUNaLEdBbkV3QixDQVVKLEFBaUNQLENBNUJDLEFBT0EsQUFnQ2QsQ0FKRixFQVVFLFNBaEJhLEFBbUJRLEVBL0NQLEFBT0QsQ0FRSyxJQXBCcEIsR0FWeUIsS0F1QkosQ0FQSSxHQStDdkIsRUFoQ0YsWUE5QmlCLEFBa0NNLENBWEYsS0FQckIsU0FmZSxLQXVCRyxDQVlHLE9BbENXLFlBbUNoQyxDQU13QixpQkF4Q0Usc0JBc0IxQixFQXJCQSxxQ0F3Q0EiLCJmaWxlIjoiL1VzZXJzL21pY2hhZWxiZXJyeS9EZXNrdG9wL25ldy13ZWJzaXRlL2NvbXBvbmVudHMvQ2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICh7IHRpdGxlLCB0ZXh0LCB0b29scyB9KSA9PiB7XG4gIC8vZm9ybWF0cyB0aGUgdG9vbCBhcnJheSBpbnRvIGEgc3RyaW5nIHNlcGFyYXRlZCBieSBcInxcIlxuICBjb25zdCB0b29sU3RyID0gdG9vbHMucmVkdWNlKChzdHIsIGN1ciwgaW5kKSA9PiB7XG4gICAgaWYgKGluZCAhPT0gMCkge1xuICAgICAgcmV0dXJuIGAke3N0cn0gfCAke2N1cn1gO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gc3RyICsgY3VyO1xuICAgIH1cbiAgfSwgXCJcIik7XG4gIGNvbnNvbGUubG9nKHRvb2xTdHIpO1xuXG4gIGNvbnN0IG5ld1Rvb2xTdHIgPSB0b29scy5qb2luKFwifFwiKTtcblxuICBjb25zb2xlLmxvZyhuZXdUb29sU3RyKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyXCIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmVydFwiPlxuICAgICAgICA8aDQ+e3RpdGxlfTwvaDQ+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1tYWluXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgIDxwPnt0ZXh0fTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9vbHNcIj5cbiAgICAgICAgICA8aDQ+XG4gICAgICAgICAgICB7dG9vbHMubWFwKCh0b29sLCBpbmQpID0+IChcbiAgICAgICAgICAgICAgPHNwYW4ga2V5PXtpbmR9PntgfCAke3Rvb2x9IHxgfTwvc3Bhbj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvaDQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5jYXJkIHtcbiAgICAgICAgICBjdXJzb3I6IGhvdmVyO1xuICAgICAgICAgIGJvcmRlcjogc29saWQgMC41cHggZ3JheTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE1JSA3MCU7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnRvb2xzIHtcbiAgICAgICAgICBncmlkLWNvbHVtbjogMjtcbiAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zaWRlYmFyIHtcbiAgICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgICAgZ3JpZC1jb2x1bW46IDE7XG4gICAgICAgICAgZ3JpZC1yb3c6IDEvIDQ7XG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCA1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAudmVydCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgIGdyaWQtY29sdW1uOiAxO1xuICAgICAgICAgIGdyaWQtcm93OiAxLzQ7XG4gICAgICAgICAganVzdGlmeS1zZWxmOiBzdGFydDtcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgIHdyaXRpbmctbW9kZTogdGI7XG4gICAgICAgIH1cblxuICAgICAgICBoNCB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiVGVrb1wiLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC52ZXJ0IGg0IHtcbiAgICAgICAgICB3cml0aW5nLW1vZGU6IHRiO1xuICAgICAgICAgIG1hcmdpbi1ibG9jay1lbmQ6IDNweDtcblxuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZC1tYWluIHtcbiAgICAgICAgICBncmlkLWNvbHVtbjogMjtcbiAgICAgICAgICBncmlkLXJvdzogMS80O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMWVtO1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjVweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgICAgICAgIC5jYXJkIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgICAgICAgIC5jYXJkIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnZlcnQge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U0YTRhNGYwO1xuICAgICAgICAgICAganVzdGlmeS1zZWxmOiB1bnNldDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNpZGViYXIge1xuICAgICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXX0= */\n/*@ sourceURL=/Users/michaelberry/Desktop/new-website/components/Card.js */"));
});

/***/ })

})
//# sourceMappingURL=index.js.3610dd3a1fd2363689d1.hot-update.js.map