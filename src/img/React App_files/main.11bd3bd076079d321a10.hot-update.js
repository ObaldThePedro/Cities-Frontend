webpackHotUpdate("main",{

/***/ "./src/containers/HomepageContainer.jsx":
/*!**********************************************!*\
  !*** ./src/containers/HomepageContainer.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _img_homepage_jpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/homepage.jpeg */ "./src/img/homepage.jpeg");
/* harmony import */ var _img_homepage_jpeg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_img_homepage_jpeg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _AutoComplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AutoComplete */ "./src/containers/AutoComplete.jsx");
var _jsxFileName = "/Users/pedrol7/Desktop/Cities/Frontend/cities/src/containers/HomepageContainer.jsx";







const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(theme => ({
  main_container: {
    position: 'relative',
    backgroundColor: '#e3f2fd',
    height: '60vh',
    marginTop: '15vh',
    border: 'solid 1px #b0bec5'
  },
  title: {
    textAlign: 'center'
  },
  sub_container: {
    height: '50vh',
    padding: '0px',
    boxShadow: '1px 1px 4px'
  },
  description: {
    flexGrow: 1,
    position: 'absolute',
    top: '200px',
    left: '0',
    width: '100%',
    textAlign: 'center',
    paddingLeft: '20px',
    paddingRight: '20px'
  },
  input: {
    marginLeft: '40%',
    marginRight: '40%',
    width: '25%',
    height: '30%',
    textAlign: 'center',
    backgroundColor: 'white',
    color: 'black',
    borderRadius: '4px',
    boxShadow: '1px 2px 3px'
  },
  image: {
    position: 'relative',
    opacity: '0.3',
    maxWidth: '100%',
    maxHeight: '100%',
    height: '100%',
    width: '100%',
    border: 'solid 1px'
  }
}));

const HomepageContainer = props => {
  const classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    maxWidth: "false",
    className: classes.main_container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.title,
    variant: "h2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, "Cities"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    maxWidth: "false",
    className: classes.sub_container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _img_homepage_jpeg__WEBPACK_IMPORTED_MODULE_5___default.a,
    className: classes.image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "h5",
    className: classes.description,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, "Get to know your dream city. Compare your dream city with other cities on quality of life, salaries, cost of living and more.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AutoComplete__WEBPACK_IMPORTED_MODULE_6__["default"], {
    cities: props.cities,
    input_style: classes.input,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (HomepageContainer);

/***/ })

})
//# sourceMappingURL=main.11bd3bd076079d321a10.hot-update.js.map