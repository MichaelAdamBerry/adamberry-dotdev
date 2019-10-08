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
        onMouseEnter: this.setHover,
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
      }, ".card.jsx-990660107{cursor:hover;background-color:var(--main-background);font-size:17px;display:grid;grid-template-columns:15% 85%;grid-template-rows:40px;}.arrow.jsx-990660107{color:var(--main-light-blue);font-style:italic;padding:1em 0;}.tags.jsx-990660107{color:var(--main-light-blue);font-size:small;font-style:italic;width:70%;margin:auto;}.tools.jsx-990660107{grid-column:2;justify-self:center;}.tools.jsx-990660107 h4.jsx-990660107{margin:0px auto 0px auto;}.sidebar.jsx-990660107{font-size:17px;grid-column:1;grid-row:1/ 4;border-right:solid 5px;}.vert.jsx-990660107{font-size:17px;grid-column:1;grid-row:1/4;justify-self:right;white-space:nowrap;-webkit-writing-mode:tb;-ms-writing-mode:tb;writing-mode:tb;}.vert.jsx-990660107 h4.jsx-990660107{text-align:left;margin-top:1em;}.vert.jsx-990660107 span.jsx-990660107{background-color:var(--main-light-blue);padding:1em 0 1em 0;}h3.jsx-990660107{font-family:\"Teko\",sans-serif;text-align:center;margin:0 auto 0 auto;}.title.jsx-990660107{font-size:2em;}.vert.jsx-990660107 h4.jsx-990660107{-webkit-writing-mode:tb;-ms-writing-mode:tb;writing-mode:tb;margin-block-end:3px;white-space:nowrap;display:none;}.card-main.jsx-990660107{grid-column:2;grid-row:1/4;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;text-align:center;}.content.jsx-990660107{margin:0 0.5em 0 0.5em;text-align:left;}@media (min-width:765px) and (max-width:1024px){.card.jsx-990660107{font-size:14px;}}@media (min-width:320px) and (max-width:480px){.card.jsx-990660107{grid-template-columns:10% 90%;width:100vw;border-bottom:solid;}.vert.jsx-990660107{background-color:var(--main-light-blue);justify-self:unset;opacity:0.5;}.sidebar.jsx-990660107{z-index:2;}card-main.jsx-990660107{padding-top:1em;}}@media (min-width:481px) and (max-width:900px){.card.jsx-990660107{font-size:12px;grid-template-columns:0% 100%;min-width:170px;border-left:solid 5px;}.vert.jsx-990660107,.sidebar.jsx-990660107,.vert.jsx-990660107 h4.jsx-990660107{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsYmVycnkvRGVza3RvcC9uZXctd2Vic2l0ZS9jb21wb25lbnRzL0NhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbURvQixBQUcwQixBQVNnQixBQU1BLEFBUWYsQUFLVyxBQUlWLEFBT0EsQUFTQyxBQUt3QixBQUtULEFBTWpCLEFBSUUsQUFPRixBQVFTLEFBS04sQUFNZSxBQUtVLEFBSzlCLEFBR00sQUFLRCxBQVNGLFVBaEJmLEdBeEd3QyxBQXlIeEMsQ0FsR29CLEFBeUN0QixBQVdlLENBM0NDLEFBT0EsQUFpRGQsQUF3QmdDLENBaEVqQixBQTJEZixPQXhCZ0IsRUF2RGxCLEVBZ0RlLEVBbkVLLEFBTUYsQUFrQkYsQUFPRCxDQWtCSyxBQW9DSixDQTdDaEIsR0F6QkEsS0E0REEsQ0EvQnNCLEFBOENDLEVBMURGLEFBc0RHLENBN0RDLEVBbEJMLEFBaUdBLEVBdkdKLENBaURPLEtBMUROLE1BbUdELENBOUNoQixBQWN1QixDQXpEdkIsQUErQnFCLEFBd0VLLENBbEJ4QixDQS9FVSxHQWtCWixFQWpDZSxDQTBEZixFQXlDRSxFQW5GWSxPQXlCSSxDQXhDYyxBQWtFWCxFQThDbkIsRUFoR0YsZUFtRGUsQ0FPUyxVQXpFRSxFQW1FMUIsc0JBbEVBLEtBdUNBLHVDQWtDb0Isa0JBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy9taWNoYWVsYmVycnkvRGVza3RvcC9uZXctd2Vic2l0ZS9jb21wb25lbnRzL0NhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XG5pbXBvcnQgeyBsaWJyYXJ5IH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZVwiO1xuaW1wb3J0IHsgZmFiIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnNcIjtcbmltcG9ydCB7IGZhTG9uZ0Fycm93QWx0UmlnaHQgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5saWJyYXJ5LmFkZChmYWIsIGZhTG9uZ0Fycm93QWx0UmlnaHQpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7IGhvdmVyZWQ6IGZhbHNlIH07XG5cbiAgc2V0SG92ZXIgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgaG92ZXJlZDogdHJ1ZSB9KTtcbiAgY2FuY2VsSG92ZXIgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgaG92ZXJlZDogZmFsc2UgfSk7XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdGl0bGUsIHRleHQsIHRvb2xzLCB0YWdzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgaG92ZXJlZCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBhcnJvd01hcmdpbkxlZnQgPSBob3ZlcmVkID8gXCIwXCIgOiBcIjVweFwiO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIG9uTW91c2VFbnRlcj17dGhpcy5zZXRIb3Zlcn1cbiAgICAgICAgb25Nb3VzZUxlYXZlPXt0aGlzLmNhbmNlbEhvdmVyfVxuICAgICAgICBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhclwiIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmVydFwiPlxuICAgICAgICAgIDxoND5cbiAgICAgICAgICAgIDxzcGFuPnByb2plY3Q8L3NwYW4+XG4gICAgICAgICAgPC9oND5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1tYWluXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgPGgzPnt0aXRsZX08L2gzPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFnc1wiPnt0YWdzLmpvaW4oXCIsIFwiKX08L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgPHA+e3RleHR9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9vbHNcIj5cbiAgICAgICAgICAgIDxoND57dG9vbHMuam9pbihcIiB8IFwiKX08L2g0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJyb3dcIj5cbiAgICAgICAgICAgIDxzcGFuPntgdmlldyBjb2RlIGB9PC9zcGFuPlxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxuICAgICAgICAgICAgICBpY29uPXtmYUxvbmdBcnJvd0FsdFJpZ2h0fVxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjFlbVwiLFxuICAgICAgICAgICAgICAgIGhlaWdodDogXCIxZW1cIixcbiAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBhcnJvd01hcmdpbkxlZnRcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmNhcmQge1xuICAgICAgICAgICAgY3Vyc29yOiBob3ZlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmFja2dyb3VuZCk7XG4gICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxNSUgODUlO1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0MHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5hcnJvdyB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tbWFpbi1saWdodC1ibHVlKTtcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgICAgIHBhZGRpbmc6IDFlbSAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC50YWdzIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1tYWluLWxpZ2h0LWJsdWUpO1xuICAgICAgICAgICAgZm9udC1zaXplOiBzbWFsbDtcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnRvb2xzIHtcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAyO1xuICAgICAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnRvb2xzIGg0IHtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG8gMHB4IGF1dG87XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnNpZGViYXIge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDE7XG4gICAgICAgICAgICBncmlkLXJvdzogMS8gNDtcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogc29saWQgNXB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC52ZXJ0IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAxO1xuICAgICAgICAgICAgZ3JpZC1yb3c6IDEvNDtcbiAgICAgICAgICAgIGp1c3RpZnktc2VsZjogcmlnaHQ7XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgd3JpdGluZy1tb2RlOiB0YjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudmVydCBoNCB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMWVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC52ZXJ0IHNwYW4ge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1saWdodC1ibHVlKTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDFlbSAwIDFlbSAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlRla29cIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvIDAgYXV0bztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnZlcnQgaDQge1xuICAgICAgICAgICAgd3JpdGluZy1tb2RlOiB0YjtcbiAgICAgICAgICAgIG1hcmdpbi1ibG9jay1lbmQ6IDNweDtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jYXJkLW1haW4ge1xuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDI7XG4gICAgICAgICAgICBncmlkLXJvdzogMS80O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgICAgbWFyZ2luOiAwIDAuNWVtIDAgMC41ZW07XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY1cHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICAgICAgICAgIC5jYXJkIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICAgICAgICAuY2FyZCB7XG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAlIDkwJTtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC52ZXJ0IHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1saWdodC1ibHVlKTtcbiAgICAgICAgICAgICAganVzdGlmeS1zZWxmOiB1bnNldDtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNpZGViYXIge1xuICAgICAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FyZC1tYWluIHtcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDFlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDQ4MXB4KSBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgICAgICAgICAgIC5jYXJkIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAlIDEwMCU7XG4gICAgICAgICAgICAgIG1pbi13aWR0aDogMTcwcHg7XG4gICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiBzb2xpZCA1cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC52ZXJ0LFxuICAgICAgICAgICAgLnNpZGViYXIsXG4gICAgICAgICAgICAudmVydCBoNCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0= */\n/*@ sourceURL=/Users/michaelberry/Desktop/new-website/components/Card.js */"));
    }
  }]);

  return Card;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ })

})
//# sourceMappingURL=index.js.0db5f3ac352a4aa5691c.hot-update.js.map