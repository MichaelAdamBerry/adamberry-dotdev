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
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");







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
      }, tools.join(" | "))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_13__["Spring"], {
        to: {
          marginLeft: hovered ? "3em" : "0",
          textUnderline: hovered ? "underline" : "none",
          size: hovered ? "1.3em;" : "1em"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, function (_ref) {
        var marginLeft = _ref.marginLeft,
            textUnderline = _ref.textUnderline,
            size = _ref.size;
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          style: {
            marginLeft: marginLeft,
            textDecoration: textUnderline
          },
          className: "jsx-990660107" + " " + "arrow",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
          style: {
            fontSize: size
          },
          className: "jsx-990660107",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          },
          __self: this
        }, "view code "), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeIcon"], {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__["faLongArrowAltRight"],
          style: {
            width: size,
            height: size,
            marginLeft: size
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          },
          __self: this
        }));
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "990660107",
        __self: this
      }, ".card.jsx-990660107{cursor:hover;background-color:var(--main-background);font-size:17px;display:grid;grid-template-columns:15% 85%;grid-template-rows:40px;}.arrow.jsx-990660107{color:var(--main-light-blue);font-style:italic;padding:1em 0;}.tags.jsx-990660107{color:var(--main-light-blue);font-size:small;font-style:italic;width:70%;margin:auto;}.tools.jsx-990660107{grid-column:2;justify-self:center;}.tools.jsx-990660107 h4.jsx-990660107{margin:0px auto 0px auto;}.sidebar.jsx-990660107{font-size:17px;grid-column:1;grid-row:1/ 4;border-right:solid 5px;}.vert.jsx-990660107{font-size:17px;grid-column:1;grid-row:1/4;justify-self:right;white-space:nowrap;-webkit-writing-mode:tb;-ms-writing-mode:tb;writing-mode:tb;}.vert.jsx-990660107 h4.jsx-990660107{text-align:left;margin-top:1em;}.vert.jsx-990660107 span.jsx-990660107{background-color:var(--main-light-blue);padding:1em 0 1em 0;}h3.jsx-990660107{font-family:\"Teko\",sans-serif;text-align:center;margin:0 auto 0 auto;}.title.jsx-990660107{font-size:2em;}.vert.jsx-990660107 h4.jsx-990660107{-webkit-writing-mode:tb;-ms-writing-mode:tb;writing-mode:tb;margin-block-end:3px;white-space:nowrap;display:none;}.card-main.jsx-990660107{grid-column:2;grid-row:1/4;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;text-align:center;}.content.jsx-990660107{margin:0 0.5em 0 0.5em;text-align:left;}@media (min-width:765px) and (max-width:1024px){.card.jsx-990660107{font-size:14px;}}@media (min-width:320px) and (max-width:480px){.card.jsx-990660107{grid-template-columns:10% 90%;width:100vw;border-bottom:solid;}.vert.jsx-990660107{background-color:var(--main-light-blue);justify-self:unset;opacity:0.5;}.sidebar.jsx-990660107{z-index:2;}card-main.jsx-990660107{padding-top:1em;}}@media (min-width:481px) and (max-width:900px){.card.jsx-990660107{font-size:12px;grid-template-columns:0% 100%;min-width:170px;border-left:solid 5px;}.vert.jsx-990660107,.sidebar.jsx-990660107,.vert.jsx-990660107 h4.jsx-990660107{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsYmVycnkvRGVza3RvcC9uZXctd2Vic2l0ZS9jb21wb25lbnRzL0NhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUVvQixBQUcwQixBQVNnQixBQU1BLEFBUWYsQUFLVyxBQUlWLEFBT0EsQUFTQyxBQUt3QixBQUtULEFBTWpCLEFBSUUsQUFPRixBQVFTLEFBS04sQUFNZSxBQUtVLEFBSzlCLEFBR00sQUFLRCxBQVNGLFVBaEJmLEdBeEd3QyxBQXlIeEMsQ0FsR29CLEFBeUN0QixBQVdlLENBM0NDLEFBT0EsQUFpRGQsQUF3QmdDLENBaEVqQixBQTJEZixPQXhCZ0IsRUF2RGxCLEVBZ0RlLEVBbkVLLEFBTUYsQUFrQkYsQUFPRCxDQWtCSyxBQW9DSixDQTdDaEIsR0F6QkEsS0E0REEsQ0EvQnNCLEFBOENDLEVBMURGLEFBc0RHLENBN0RDLEVBbEJMLEFBaUdBLEVBdkdKLENBaURPLEtBMUROLE1BbUdELENBOUNoQixBQWN1QixDQXpEdkIsQUErQnFCLEFBd0VLLENBbEJ4QixDQS9FVSxHQWtCWixFQWpDZSxDQTBEZixFQXlDRSxFQW5GWSxPQXlCSSxDQXhDYyxBQWtFWCxFQThDbkIsRUFoR0YsZUFtRGUsQ0FPUyxVQXpFRSxFQW1FMUIsc0JBbEVBLEtBdUNBLHVDQWtDb0Isa0JBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy9taWNoYWVsYmVycnkvRGVza3RvcC9uZXctd2Vic2l0ZS9jb21wb25lbnRzL0NhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XG5pbXBvcnQgeyBsaWJyYXJ5IH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZVwiO1xuaW1wb3J0IHsgZmFiIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnNcIjtcbmltcG9ydCB7IGZhTG9uZ0Fycm93QWx0UmlnaHQgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQgeyBTcHJpbmcsIGNvbmZpZyB9IGZyb20gXCJyZWFjdC1zcHJpbmdcIjtcbmxpYnJhcnkuYWRkKGZhYiwgZmFMb25nQXJyb3dBbHRSaWdodCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0ZSA9IHsgaG92ZXJlZDogZmFsc2UgfTtcblxuICBzZXRIb3ZlciA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBob3ZlcmVkOiB0cnVlIH0pO1xuICBjYW5jZWxIb3ZlciA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBob3ZlcmVkOiBmYWxzZSB9KTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB0aXRsZSwgdGV4dCwgdG9vbHMsIHRhZ3MgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBob3ZlcmVkIH0gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIG9uTW91c2VPdmVyPXt0aGlzLnNldEhvdmVyfVxuICAgICAgICBvbk1vdXNlTGVhdmU9e3RoaXMuY2FuY2VsSG92ZXJ9XG4gICAgICAgIGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyXCIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2ZXJ0XCI+XG4gICAgICAgICAgPGg0PlxuICAgICAgICAgICAgPHNwYW4+cHJvamVjdDwvc3Bhbj5cbiAgICAgICAgICA8L2g0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLW1haW5cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XG4gICAgICAgICAgICA8aDM+e3RpdGxlfTwvaDM+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWdzXCI+e3RhZ3Muam9pbihcIiwgXCIpfTwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICA8cD57dGV4dH08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b29sc1wiPlxuICAgICAgICAgICAgPGg0Pnt0b29scy5qb2luKFwiIHwgXCIpfTwvaDQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPFNwcmluZ1xuICAgICAgICAgICAgdG89e3tcbiAgICAgICAgICAgICAgbWFyZ2luTGVmdDogaG92ZXJlZCA/IFwiM2VtXCIgOiBcIjBcIixcbiAgICAgICAgICAgICAgdGV4dFVuZGVybGluZTogaG92ZXJlZCA/IFwidW5kZXJsaW5lXCIgOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgc2l6ZTogaG92ZXJlZCA/IFwiMS4zZW07XCIgOiBcIjFlbVwiXG4gICAgICAgICAgICB9fT5cbiAgICAgICAgICAgIHsoeyBtYXJnaW5MZWZ0LCB0ZXh0VW5kZXJsaW5lLCBzaXplIH0pID0+IChcbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFycm93XCJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogbWFyZ2luTGVmdCxcbiAgICAgICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiB0ZXh0VW5kZXJsaW5lXG4gICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IHNpemUgfX0+e2B2aWV3IGNvZGUgYH08L3NwYW4+XG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxuICAgICAgICAgICAgICAgICAgaWNvbj17ZmFMb25nQXJyb3dBbHRSaWdodH1cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBzaXplLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHNpemUsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IHNpemVcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvU3ByaW5nPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5jYXJkIHtcbiAgICAgICAgICAgIGN1cnNvcjogaG92ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJhY2tncm91bmQpO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTUlIDg1JTtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogNDBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuYXJyb3cge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLW1haW4tbGlnaHQtYmx1ZSk7XG4gICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgICAgICBwYWRkaW5nOiAxZW0gMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudGFncyB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tbWFpbi1saWdodC1ibHVlKTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC50b29scyB7XG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMjtcbiAgICAgICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC50b29scyBoNCB7XG4gICAgICAgICAgICBtYXJnaW46IDBweCBhdXRvIDBweCBhdXRvO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zaWRlYmFyIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAxO1xuICAgICAgICAgICAgZ3JpZC1yb3c6IDEvIDQ7XG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDVweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudmVydCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMTtcbiAgICAgICAgICAgIGdyaWQtcm93OiAxLzQ7XG4gICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgIHdyaXRpbmctbW9kZTogdGI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnZlcnQgaDQge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudmVydCBzcGFuIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tbGlnaHQtYmx1ZSk7XG4gICAgICAgICAgICBwYWRkaW5nOiAxZW0gMCAxZW0gMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBoMyB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJUZWtvXCIsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0byAwIGF1dG87XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC52ZXJ0IGg0IHtcbiAgICAgICAgICAgIHdyaXRpbmctbW9kZTogdGI7XG4gICAgICAgICAgICBtYXJnaW4tYmxvY2stZW5kOiAzcHg7XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY2FyZC1tYWluIHtcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAyO1xuICAgICAgICAgICAgZ3JpZC1yb3c6IDEvNDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICAgIG1hcmdpbjogMCAwLjVlbSAwIDAuNWVtO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2NXB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgICAgICAgICAuY2FyZCB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgICAgICAgICAgLmNhcmQge1xuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwJSA5MCU7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudmVydCB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tbGlnaHQtYmx1ZSk7XG4gICAgICAgICAgICAgIGp1c3RpZnktc2VsZjogdW5zZXQ7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zaWRlYmFyIHtcbiAgICAgICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhcmQtbWFpbiB7XG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA0ODFweCkgYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gICAgICAgICAgICAuY2FyZCB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwJSAxMDAlO1xuICAgICAgICAgICAgICBtaW4td2lkdGg6IDE3MHB4O1xuICAgICAgICAgICAgICBib3JkZXItbGVmdDogc29saWQgNXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAudmVydCxcbiAgICAgICAgICAgIC5zaWRlYmFyLFxuICAgICAgICAgICAgLnZlcnQgaDQge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19 */\n/*@ sourceURL=/Users/michaelberry/Desktop/new-website/components/Card.js */"));
    }
  }]);

  return Card;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.77b8e8ead937f5b26e9c.hot-update.js.map