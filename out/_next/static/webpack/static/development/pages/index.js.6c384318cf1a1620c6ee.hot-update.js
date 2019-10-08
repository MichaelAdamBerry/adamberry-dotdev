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
  var newToolStr = tools.join(" | ");
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
  }, ".card.jsx-1826757966{cursor:hover;border:solid 0.5px gray;background-color:white;font-size:17px;display:grid;grid-template-columns:15% 70%;grid-template-rows:40px;}.tools.jsx-1826757966{grid-column:2;justify-self:center;}.sidebar.jsx-1826757966{font-size:17px;grid-column:1;grid-row:1/ 4;border-right:solid 5px;}.vert.jsx-1826757966{font-size:15px;grid-column:1;grid-row:1/4;justify-self:start;white-space:nowrap;-webkit-writing-mode:tb;-ms-writing-mode:tb;writing-mode:tb;}h4.jsx-1826757966{font-family:\"Teko\",sans-serif;text-align:center;}.vert.jsx-1826757966 h4.jsx-1826757966{-webkit-writing-mode:tb;-ms-writing-mode:tb;writing-mode:tb;margin-block-end:3px;white-space:nowrap;}.card-main.jsx-1826757966{grid-column:2;grid-row:1/4;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.content.jsx-1826757966{margin-left:1em;}@media (min-width:765px) and (max-width:1024px){.card.jsx-1826757966{font-size:14px;}}@media (min-width:320px) and (max-width:480px){.card.jsx-1826757966{margin-bottom:1em;}.vert.jsx-1826757966{background-color:#e4a4a4f0;justify-self:unset;}.sidebar.jsx-1826757966{z-index:2;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsYmVycnkvRGVza3RvcC9uZXctd2Vic2l0ZS9jb21wb25lbnRzL0NhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUNrQixBQUd3QixBQVVDLEFBS0MsQUFPQSxBQVNnQixBQUtmLEFBT0YsQUFPRSxBQUlDLEFBTUcsQUFHUyxBQUlqQixVQUNaLEdBbkV3QixDQVVKLEFBaUNQLENBNUJDLEFBT0EsQUFnQ2QsQ0FKRixFQVVFLFNBaEJhLEFBbUJRLEVBL0NQLEFBT0QsQ0FRSyxJQXBCcEIsR0FWeUIsS0F1QkosQ0FQSSxHQStDdkIsRUFoQ0YsWUE5QmlCLEFBa0NNLENBWEYsS0FQckIsU0FmZSxLQXVCRyxDQVlHLE9BbENXLFlBbUNoQyxDQU13QixpQkF4Q0Usc0JBc0IxQixFQXJCQSxxQ0F3Q0EiLCJmaWxlIjoiL1VzZXJzL21pY2hhZWxiZXJyeS9EZXNrdG9wL25ldy13ZWJzaXRlL2NvbXBvbmVudHMvQ2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICh7IHRpdGxlLCB0ZXh0LCB0b29scyB9KSA9PiB7XG4gIC8vZm9ybWF0cyB0aGUgdG9vbCBhcnJheSBpbnRvIGEgc3RyaW5nIHNlcGFyYXRlZCBieSBcInxcIlxuICBjb25zdCB0b29sU3RyID0gdG9vbHMucmVkdWNlKChzdHIsIGN1ciwgaW5kKSA9PiB7XG4gICAgaWYgKGluZCAhPT0gMCkge1xuICAgICAgcmV0dXJuIGAke3N0cn0gfCAke2N1cn1gO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gc3RyICsgY3VyO1xuICAgIH1cbiAgfSwgXCJcIik7XG4gIGNvbnNvbGUubG9nKHRvb2xTdHIpO1xuXG4gIGNvbnN0IG5ld1Rvb2xTdHIgPSB0b29scy5qb2luKFwiIHwgXCIpO1xuXG4gIGNvbnNvbGUubG9nKG5ld1Rvb2xTdHIpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXJcIiAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2ZXJ0XCI+XG4gICAgICAgIDxoND57dGl0bGV9PC9oND5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLW1haW5cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgPHA+e3RleHR9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b29sc1wiPlxuICAgICAgICAgIDxoND5cbiAgICAgICAgICAgIHt0b29scy5tYXAoKHRvb2wsIGluZCkgPT4gKFxuICAgICAgICAgICAgICA8c3BhbiBrZXk9e2luZH0+e2B8ICR7dG9vbH0gfGB9PC9zcGFuPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9oND5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmNhcmQge1xuICAgICAgICAgIGN1cnNvcjogaG92ZXI7XG4gICAgICAgICAgYm9yZGVyOiBzb2xpZCAwLjVweCBncmF5O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTUlIDcwJTtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDQwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAudG9vbHMge1xuICAgICAgICAgIGdyaWQtY29sdW1uOiAyO1xuICAgICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNpZGViYXIge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgICBncmlkLWNvbHVtbjogMTtcbiAgICAgICAgICBncmlkLXJvdzogMS8gNDtcbiAgICAgICAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC52ZXJ0IHtcbiAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgZ3JpZC1jb2x1bW46IDE7XG4gICAgICAgICAgZ3JpZC1yb3c6IDEvNDtcbiAgICAgICAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgd3JpdGluZy1tb2RlOiB0YjtcbiAgICAgICAgfVxuXG4gICAgICAgIGg0IHtcbiAgICAgICAgICBmb250LWZhbWlseTogXCJUZWtvXCIsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLnZlcnQgaDQge1xuICAgICAgICAgIHdyaXRpbmctbW9kZTogdGI7XG4gICAgICAgICAgbWFyZ2luLWJsb2NrLWVuZDogM3B4O1xuXG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkLW1haW4ge1xuICAgICAgICAgIGdyaWQtY29sdW1uOiAyO1xuICAgICAgICAgIGdyaWQtcm93OiAxLzQ7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxZW07XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2NXB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgICAgICAgLmNhcmQge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICAgICAgLmNhcmQge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudmVydCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRhNGE0ZjA7XG4gICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IHVuc2V0O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2lkZWJhciB7XG4gICAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcbiJdfQ== */\n/*@ sourceURL=/Users/michaelberry/Desktop/new-website/components/Card.js */"));
});

/***/ })

})
//# sourceMappingURL=index.js.6c384318cf1a1620c6ee.hot-update.js.map