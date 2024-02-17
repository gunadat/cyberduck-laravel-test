/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/utils.js":
/*!*******************************!*\
  !*** ./resources/js/utils.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   api: () => (/* binding */ api)
/* harmony export */ });
function api(url, data) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    method: 'POST'
  };
  var TechError = 'Could not process the request due to technical error. Please contact support.';
  return new Promise(function (accept, reject) {
    var _options$headers;
    var xhr = new XMLHttpRequest();
    xhr.open(options.method, url);
    if (options !== null && options !== void 0 && (_options$headers = options.headers) !== null && _options$headers !== void 0 && _options$headers.csrf) {
      xhr.setRequestHeader('X-CSRF-TOKEN', options.headers.csrf);
    }
    if (options.jsonRequest) {
      xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    }
    if (options.authCookieName) {
      xhr.setRequestHeader('Authorization', 'Bearer ' + getCookie(options.authCookieName));
    }
    xhr.onload = function () {
      if (xhr.status === 401) {
        // analyze HTTP status of the response
        reject({
          success: false,
          status: xhr.status,
          message: xhr.statusText
        });
      } else if (xhr.status !== 200) {
        // analyze HTTP status of the response
        console.log("".concat(xhr.status, ": ").concat(xhr.statusText));
        reject({
          success: false,
          message: TechError
        });
      } else {
        // send the result
        accept(JSON.parse(xhr.response));
      }
    };
    xhr.onerror = function (e) {
      console.log(e);
      reject({
        success: false,
        message: TechError
      });
    };
    try {
      xhr.send(data);
    } catch (e) {
      console.log(e);
      reject({
        success: false,
        message: TechError
      });
    }
  });
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************************!*\
  !*** ./resources/js/coffee_sale.js ***!
  \*************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./resources/js/utils.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var successDiv = document.querySelector('.showSuccess');
var errorDiv = document.querySelector('.errorDiv');
var buttonClass = document.querySelector('.recordSale');
var errorText = document.querySelector('.errorText');
var token = document.querySelector('[name="csrf-token"]');
var SALES_LIST_API_URL = '/api/list-sales-report';
var PRODUCT_LIST_API_URL = '/api/product-list';
var PRODUCT_CONFIG_API_URL = '/api/product-config';
var headers = {
  'X-CSRF-TOKEN': token.getAttribute('content')
};
document.querySelector('#unitCost').addEventListener('blur', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
  var quantity, unitCost, product;
  return _regeneratorRuntime().wrap(function _callee$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        quantity = document.querySelector('#quantity').value;
        unitCost = document.querySelector('#unitCost').value;
        product = document.querySelector('#product').value;
        if (!(quantity !== '' && unitCost !== '' && product !== '')) {
          _context.next = 8;
          break;
        }
        _context.next = 6;
        return calculateSalePrice(quantity, unitCost, product);
      case 6:
        _context.t0 = _context.sent;
        document.querySelector("#sellingPrice").innerHTML = '&pound;' + _context.t0;
      case 8:
      case "end":
        return _context.stop();
    }
  }, _callee);
})));
var calculateSalePrice = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(quantity, unitCost, productId) {
    var profitMargin, shippingCost, cost;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.api)(PRODUCT_CONFIG_API_URL + '?productId=' + productId, '', {
            method: 'GET',
            headers: headers
          }).then(function (response) {
            if (response.success) {
              profitMargin = parseFloat(response.data.profit_margin);
              shippingCost = parseFloat(response.data.shipping_cost);
            }
          })["catch"](function (error) {
            console.log(JSON.stringify(error));
          });
        case 2:
          cost = parseInt(quantity) * parseFloat(unitCost);
          return _context2.abrupt("return", (cost / (1 - profitMargin) + shippingCost).toFixed(2));
        case 4:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function calculateSalePrice(_x, _x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();
document.querySelector('.recordSale').addEventListener('click', function (e) {
  e.preventDefault();
  var quantity = document.querySelector("#quantity");
  var unitCost = document.querySelector("#unitCost");
  var product = document.querySelector("#product");
  var sellingPrice = document.querySelector("#sellingPrice");
  if (quantity.value === '') {
    errorDiv.style.display = 'block';
    errorText.innerHTML = 'Quantity should not be empty';
  } else if (unitCost.value === '') {
    errorDiv.style.display = 'block';
    errorText.innerHTML = 'Unit Cost should not be empty';
  } else {
    var formData = new FormData();
    formData.append('quantity', quantity.value);
    formData.append('unit_cost', unitCost.value);
    formData.append('product_id', product.value);
    formData.append('_token', token.getAttribute('content'));
    successDiv.style.display = 'none';
    errorDiv.style.display = 'none';
    buttonClass.disabled = 'disabled';
    var API_URL = '/api/save-sales';
    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.api)(API_URL, formData, {
      method: 'POST',
      headers: headers
    }).then(function (response) {
      if (response.success) {
        successDiv.style.display = 'block';
        buttonClass.disabled = '';
        setTimeout(function () {
          successDiv.style.display = 'none';
          quantity.value = '';
          unitCost.value = '';
          product.value = '';
          sellingPrice.innerHTML = '';
        }, 1000);
        listSaleRecords();
      } else {
        errorDiv.style.display = 'block';
        errorText.innerHTML = response.message;
        buttonClass.disabled = '';
      }
    })["catch"](function (error) {
      console.log(JSON.stringify(error));
      errorDiv.style.display = 'block';
      errorText.innerHTML = error.message;
      buttonClass.disabled = '';
    });
  }
});
var listSaleRecords = function listSaleRecords() {
  var tableBody = document.querySelector('#salesReport tbody');
  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.api)(SALES_LIST_API_URL, '', {
    method: 'GET',
    headers: headers
  }).then(function (response) {
    if (response.success) {
      var result = response.data;
      document.querySelector('#totalRecords').innerHTML = response.total;
      var html = '';
      result.forEach(function (k, v) {
        html += '<tr>';
        html += '<td>' + k.productName + '</td>';
        html += '<td>' + k.quantity + '</td>';
        html += '<td>' + Number(k.unitCost).toFixed(2) + '</td>';
        html += '<td>' + Number(k.sellingPrice).toFixed(2) + '</td>';
        html += '</tr>';
      });
      tableBody.innerHTML = html;
    }
  })["catch"](function (error) {
    console.log(JSON.stringify(error));
  });
};
(function () {
  listSaleRecords();
  var productDropdown = document.querySelector('#product');
  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.api)(PRODUCT_LIST_API_URL, '', {
    method: 'GET',
    headers: headers
  }).then(function (response) {
    if (response.success) {
      var result = response.data;
      var html = '<option value="">--Select--</option>';
      result.forEach(function (k, v) {
        html += '<option value="' + k.product_id + '">' + k.product_name + '</option>';
      });
      productDropdown.innerHTML = html;
    }
  })["catch"](function (error) {
    console.log(JSON.stringify(error));
  });
})();
})();

/******/ })()
;