import {api} from "./utils";

const successDiv = document.querySelector('.showSuccess');
const errorDiv = document.querySelector('.errorDiv');
const buttonClass = document.querySelector('.recordSale');
const errorText = document.querySelector('.errorText');
const token = document.querySelector('[name="csrf-token"]');
const SALES_LIST_API_URL = '/api/list-sales-report';

let headers = {
    'X-CSRF-TOKEN': token.getAttribute('content')
};
document.querySelector('#unitCost').addEventListener('blur', function () {
    let quantity = document.querySelector('#quantity').value;
    let unitCost = document.querySelector('#unitCost').value;

    if (quantity !== '' && unitCost !== '') {
        document.querySelector("#sellingPrice").innerHTML = calculateSalePrice(quantity, unitCost);
    }
});
const calculateSalePrice = (quantity, unitCost) => {
    const profitMargin = 0.25;
    const shippingCost = 10.00;
    let cost = parseInt(quantity) * parseFloat(unitCost);
    return ((cost / (1 - profitMargin)) + shippingCost).toFixed(2);
}

document.querySelector('.recordSale').addEventListener('click', function (e) {
    e.preventDefault();
    const quantity = document.querySelector("#quantity");
    const unitCost = document.querySelector("#unitCost");
    const sellingPrice = document.querySelector("#sellingPrice");

    if (quantity.value === '') {
        errorDiv.style.display = 'block';
        errorText.innerHTML = 'Quantity should not be empty';
    } else if (unitCost.value === '') {
        errorDiv.style.display = 'block';
        errorText.innerHTML = 'Unit Cost should not be empty';
    } else {
        let formData = new FormData();
        formData.append('quantity', quantity.value);
        formData.append('unit_cost', unitCost.value);
        formData.append('_token', token.getAttribute('content'));

        successDiv.style.display = 'none';
        errorDiv.style.display = 'none';
        buttonClass.disabled = 'disabled';

        const API_URL = '/api/save-sales';
        api(API_URL, formData, {method: 'POST', headers: headers})
            .then(function (response) {
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
            })
            .catch(error => {
                console.log(JSON.stringify(error));
                errorDiv.style.display = 'block';
                errorText.innerHTML = error.message;
                buttonClass.disabled = '';
            });
    }
});

const listSaleRecords = () => {
    const tableBody = document.querySelector('#salesReport tbody');
    api(SALES_LIST_API_URL, '', {method: 'GET', headers: headers})
        .then(function (response) {
            console.log(response);
            if(response.success){
                let result = response.data;
                document.querySelector('#totalRecords').innerHTML = response.total;
                let html = '';
                result.forEach(function (k, v) {
                    html += '<tr>';
                    html += '<td>' + k.quantity + '</td>'
                    html += '<td>' + Number(k.unitCost).toFixed(2) + '</td>'
                    html += '<td>' + Number(k.sellingPrice).toFixed(2) + '</td>'
                    html += '</tr>';
                });
                tableBody.innerHTML = html;
            }
        })
        .catch(error => {
            console.log(JSON.stringify(error));
        });
}
(function () {
    listSaleRecords();
})();
