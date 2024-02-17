import {api} from "./utils";

const successDiv = document.querySelector('.showSuccess');
const errorDiv = document.querySelector('.errorDiv');
const buttonClass = document.querySelector('.recordSale');
const errorText = document.querySelector('.errorText');

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
    const quantity = document.querySelector("#quantity").value;
    const unitCost = document.querySelector("#unitCost").value;

    if (quantity === '') {
        errorDiv.style.display = 'block';
        errorText.innerHTML = 'Quantity should not be empty';
    } else if (unitCost === '') {
        errorDiv.style.display = 'block';
        errorText.innerHTML = 'Unit Cost should not be empty';
    } else {
        const token = document.querySelector('[name="csrf-token"]');
        let formData = new FormData();
        formData.append('quantity', quantity);
        formData.append('unit_cost', unitCost);
        formData.append('_token', token.getAttribute('content'));

        let headers = {
            'X-CSRF-TOKEN': token.getAttribute('content')
        };

        successDiv.style.display = 'none';
        errorDiv.style.display = 'none';
        buttonClass.disabled = 'disabled';

        const API_URL = '/api/saveSale';
        api(API_URL, formData, {method: 'POST', headers: headers})
            .then(function (response) {
                console.log(response)
                if (response.data.success) {
                    successDiv.style.display = 'block';
                    buttonClass.disabled = '';
                } else {
                    errorDiv.style.display = 'block';
                    errorText.innerHTML = response.data.message;
                }
            })
            .catch(error => {
                console.log(JSON.stringify(error));
                errorDiv.style.display = 'block';
                errorText.innerHTML = response.data.message;
            });
    }
});
