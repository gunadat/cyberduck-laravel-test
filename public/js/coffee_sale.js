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

var successDiv = document.querySelector('.showSuccess');
var errorDiv = document.querySelector('.errorDiv');
var buttonClass = document.querySelector('.recordSale');
var errorText = document.querySelector('.errorText');
var token = document.querySelector('[name="csrf-token"]');
var SALES_LIST_API_URL = '/api/list-sales-report';
var headers = {
  'X-CSRF-TOKEN': token.getAttribute('content')
};
document.querySelector('#unitCost').addEventListener('blur', function () {
  var quantity = document.querySelector('#quantity').value;
  var unitCost = document.querySelector('#unitCost').value;
  if (quantity !== '' && unitCost !== '') {
    document.querySelector("#sellingPrice").innerHTML = calculateSalePrice(quantity, unitCost);
  }
});
var calculateSalePrice = function calculateSalePrice(quantity, unitCost) {
  var profitMargin = 0.25;
  var shippingCost = 10.00;
  var cost = parseInt(quantity) * parseFloat(unitCost);
  return (cost / (1 - profitMargin) + shippingCost).toFixed(2);
};
document.querySelector('.recordSale').addEventListener('click', function (e) {
  e.preventDefault();
  var quantity = document.querySelector("#quantity");
  var unitCost = document.querySelector("#unitCost");
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
    console.log(response);
    if (response.success) {
      var result = response.data;
      document.querySelector('#totalRecords').innerHTML = response.total;
      var html = '';
      result.forEach(function (k, v) {
        html += '<tr>';
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
})();
})();

/******/ })()
;