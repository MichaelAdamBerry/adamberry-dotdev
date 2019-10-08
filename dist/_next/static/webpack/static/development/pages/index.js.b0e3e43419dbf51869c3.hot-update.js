webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Card.js":
/*!****************************!*\
  !*** ./components/Card.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Card; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");







var _jsxFileName = "/Users/michaelberry/Desktop/new-website/components/Card.js";






_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_10__["library"].add(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_11__["fab"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__["faLongArrowAltRight"]);

var Card =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Card, _React$Component);

  function Card() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Card);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Card)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      hovered: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "setHover", function () {
      return _this.setState({
        hovered: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "cancelHover", function () {
      return _this.setState({
        hovered: false
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Card, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          text = _this$props.text,
          tools = _this$props.tools,
          tags = _this$props.tags;
      var hovered = this.state.hovered;
      var arrowMarginLeft = hovered ? "0" : "5px";
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        onMouseOver: this.setHover,
        onMouseLeave: this.cancelHover,
        className: "jsx-990660107" + " " + "card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-990660107" + " " + "sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-990660107" + " " + "vert",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
        className: "jsx-990660107",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "jsx-990660107",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, "project"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-990660107" + " " + "card-main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-990660107" + " " + "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", {
        className: "jsx-990660107",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, title)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-990660107" + " " + "tags",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, tags.join(", ")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-990660107" + " " + "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "jsx-990660107",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, text)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-990660107" + " " + "tools",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
        className: "jsx-990660107",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, tools.join(" | "))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-990660107" + " " + "arrow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "jsx-990660107",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "view code "), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__["faLongArrowAltRight"],
        style: {
          width: "1em",
          height: "1em",
          marginLeft: arrowMarginLeft
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "990660107",
        __self: this
      }, ".card.jsx-990660107{cursor:hover;background-color:var(--main-background);font-size:17px;display:grid;grid-template-columns:15% 85%;grid-template-rows:40px;}.arrow.jsx-990660107{color:var(--main-light-blue);font-style:italic;padding:1em 0;}.tags.jsx-990660107{color:var(--main-light-blue);font-size:small;font-style:italic;width:70%;margin:auto;}.tools.jsx-990660107{grid-column:2;justify-self:center;}.tools.jsx-990660107 h4.jsx-990660107{margin:0px auto 0px auto;}.sidebar.jsx-990660107{font-size:17px;grid-column:1;grid-row:1/ 4;border-right:solid 5px;}.vert.jsx-990660107{font-size:17px;grid-column:1;grid-row:1/4;justify-self:right;white-space:nowrap;-webkit-writing-mode:tb;-ms-writing-mode:tb;writing-mode:tb;}.vert.jsx-990660107 h4.jsx-990660107{text-align:left;margin-top:1em;}.vert.jsx-990660107 span.jsx-990660107{background-color:var(--main-light-blue);padding:1em 0 1em 0;}h3.jsx-990660107{font-family:\"Teko\",sans-serif;text-align:center;margin:0 auto 0 auto;}.title.jsx-990660107{font-size:2em;}.vert.jsx-990660107 h4.jsx-990660107{-webkit-writing-mode:tb;-ms-writing-mode:tb;writing-mode:tb;margin-block-end:3px;white-space:nowrap;display:none;}.card-main.jsx-990660107{grid-column:2;grid-row:1/4;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;text-align:center;}.content.jsx-990660107{margin:0 0.5em 0 0.5em;text-align:left;}@media (min-width:765px) and (max-width:1024px){.card.jsx-990660107{font-size:14px;}}@media (min-width:320px) and (max-width:480px){.card.jsx-990660107{grid-template-columns:10% 90%;width:100vw;border-bottom:solid;}.vert.jsx-990660107{background-color:var(--main-light-blue);justify-self:unset;opacity:0.5;}.sidebar.jsx-990660107{z-index:2;}card-main.jsx-990660107{padding-top:1em;}}@media (min-width:481px) and (max-width:900px){.card.jsx-990660107{font-size:12px;grid-template-columns:0% 100%;min-width:170px;border-left:solid 5px;}.vert.jsx-990660107,.sidebar.jsx-990660107,.vert.jsx-990660107 h4.jsx-990660107{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsYmVycnkvRGVza3RvcC9uZXctd2Vic2l0ZS9jb21wb25lbnRzL0NhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbURvQixBQUcwQixBQVNnQixBQU1BLEFBUWYsQUFLVyxBQUlWLEFBT0EsQUFTQyxBQUt3QixBQUtULEFBTWpCLEFBSUUsQUFPRixBQVFTLEFBS04sQUFNZSxBQUtVLEFBSzlCLEFBR00sQUFLRCxBQVNGLFVBaEJmLEdBeEd3QyxBQXlIeEMsQ0FsR29CLEFBeUN0QixBQVdlLENBM0NDLEFBT0EsQUFpRGQsQUF3QmdDLENBaEVqQixBQTJEZixPQXhCZ0IsRUF2RGxCLEVBZ0RlLEVBbkVLLEFBTUYsQUFrQkYsQUFPRCxDQWtCSyxBQW9DSixDQTdDaEIsR0F6QkEsS0E0REEsQ0EvQnNCLEFBOENDLEVBMURGLEFBc0RHLENBN0RDLEVBbEJMLEFBaUdBLEVBdkdKLENBaURPLEtBMUROLE1BbUdELENBOUNoQixBQWN1QixDQXpEdkIsQUErQnFCLEFBd0VLLENBbEJ4QixDQS9FVSxHQWtCWixFQWpDZSxDQTBEZixFQXlDRSxFQW5GWSxPQXlCSSxDQXhDYyxBQWtFWCxFQThDbkIsRUFoR0YsZUFtRGUsQ0FPUyxVQXpFRSxFQW1FMUIsc0JBbEVBLEtBdUNBLHVDQWtDb0Isa0JBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy9taWNoYWVsYmVycnkvRGVza3RvcC9uZXctd2Vic2l0ZS9jb21wb25lbnRzL0NhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XG5pbXBvcnQgeyBsaWJyYXJ5IH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZVwiO1xuaW1wb3J0IHsgZmFiIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnNcIjtcbmltcG9ydCB7IGZhTG9uZ0Fycm93QWx0UmlnaHQgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5saWJyYXJ5LmFkZChmYWIsIGZhTG9uZ0Fycm93QWx0UmlnaHQpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7IGhvdmVyZWQ6IGZhbHNlIH07XG5cbiAgc2V0SG92ZXIgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgaG92ZXJlZDogdHJ1ZSB9KTtcbiAgY2FuY2VsSG92ZXIgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgaG92ZXJlZDogZmFsc2UgfSk7XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdGl0bGUsIHRleHQsIHRvb2xzLCB0YWdzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgaG92ZXJlZCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBhcnJvd01hcmdpbkxlZnQgPSBob3ZlcmVkID8gXCIwXCIgOiBcIjVweFwiO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIG9uTW91c2VPdmVyPXt0aGlzLnNldEhvdmVyfVxuICAgICAgICBvbk1vdXNlTGVhdmU9e3RoaXMuY2FuY2VsSG92ZXJ9XG4gICAgICAgIGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyXCIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2ZXJ0XCI+XG4gICAgICAgICAgPGg0PlxuICAgICAgICAgICAgPHNwYW4+cHJvamVjdDwvc3Bhbj5cbiAgICAgICAgICA8L2g0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLW1haW5cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XG4gICAgICAgICAgICA8aDM+e3RpdGxlfTwvaDM+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWdzXCI+e3RhZ3Muam9pbihcIiwgXCIpfTwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICA8cD57dGV4dH08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b29sc1wiPlxuICAgICAgICAgICAgPGg0Pnt0b29scy5qb2luKFwiIHwgXCIpfTwvaDQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnJvd1wiPlxuICAgICAgICAgICAgPHNwYW4+e2B2aWV3IGNvZGUgYH08L3NwYW4+XG4gICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXG4gICAgICAgICAgICAgIGljb249e2ZhTG9uZ0Fycm93QWx0UmlnaHR9XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMWVtXCIsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjFlbVwiLFxuICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IGFycm93TWFyZ2luTGVmdFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuY2FyZCB7XG4gICAgICAgICAgICBjdXJzb3I6IGhvdmVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iYWNrZ3JvdW5kKTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE1JSA4NSU7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDQwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmFycm93IHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1tYWluLWxpZ2h0LWJsdWUpO1xuICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICAgICAgcGFkZGluZzogMWVtIDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnRhZ3Mge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLW1haW4tbGlnaHQtYmx1ZSk7XG4gICAgICAgICAgICBmb250LXNpemU6IHNtYWxsO1xuICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudG9vbHMge1xuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDI7XG4gICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudG9vbHMgaDQge1xuICAgICAgICAgICAgbWFyZ2luOiAwcHggYXV0byAwcHggYXV0bztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuc2lkZWJhciB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMTtcbiAgICAgICAgICAgIGdyaWQtcm93OiAxLyA0O1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCA1cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnZlcnQge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDE7XG4gICAgICAgICAgICBncmlkLXJvdzogMS80O1xuICAgICAgICAgICAganVzdGlmeS1zZWxmOiByaWdodDtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICB3cml0aW5nLW1vZGU6IHRiO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC52ZXJ0IGg0IHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnZlcnQgc3BhbiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWxpZ2h0LWJsdWUpO1xuICAgICAgICAgICAgcGFkZGluZzogMWVtIDAgMWVtIDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaDMge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiVGVrb1wiLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG8gMCBhdXRvO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDJlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudmVydCBoNCB7XG4gICAgICAgICAgICB3cml0aW5nLW1vZGU6IHRiO1xuICAgICAgICAgICAgbWFyZ2luLWJsb2NrLWVuZDogM3B4O1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNhcmQtbWFpbiB7XG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMjtcbiAgICAgICAgICAgIGdyaWQtcm93OiAxLzQ7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgICBtYXJnaW46IDAgMC41ZW0gMCAwLjVlbTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjVweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgICAgICAgICAgLmNhcmQge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAgICAgICAgIC5jYXJkIHtcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMCUgOTAlO1xuICAgICAgICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnZlcnQge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWxpZ2h0LWJsdWUpO1xuICAgICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IHVuc2V0O1xuICAgICAgICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc2lkZWJhciB7XG4gICAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXJkLW1haW4ge1xuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMWVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNDgxcHgpIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xuICAgICAgICAgICAgLmNhcmQge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMCUgMTAwJTtcbiAgICAgICAgICAgICAgbWluLXdpZHRoOiAxNzBweDtcbiAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnZlcnQsXG4gICAgICAgICAgICAuc2lkZWJhcixcbiAgICAgICAgICAgIC52ZXJ0IGg0IHtcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/michaelberry/Desktop/new-website/components/Card.js */"));
    }
  }]);

  return Card;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.b0e3e43419dbf51869c3.hot-update.js.map