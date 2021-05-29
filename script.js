var firstCurrency = document.getElementById('currency-one'),
    secondCurrency = document.getElementById('currency-two'),
    firstAmount = document.getElementById('amount-one'),
    secondAmount = document.getElementById('amount-two'),
    swapButton = document.getElementById('swap'),
    rate = document.getElementById('rate');


calculate();
firstCurrency.addEventListener('change', calculate);
firstAmount.addEventListener('input', calculate);
secondCurrency.addEventListener('change', calculate);
secondAmount.addEventListener('input', calculate);
swapButton.addEventListener('click', swap);
swapButton.addEventListener('click', calculate);




function calculate() {
    fetch(`https://api.exchangerate-api.com/v4/latest/${firstCurrency.value}`)
    .then(res => res.json())
    .then(data => {
        rate.innerHTML = `1${firstCurrency.value} = ${data.rates[secondCurrency.value]}${secondCurrency.value}`;
        secondAmount.value = (firstAmount.value * data.rates[secondCurrency.value]).toFixed(2);
    });
}


function swap() {
    var temp = firstCurrency.value;
    firstCurrency.value = secondCurrency.value;
    secondCurrency.value = temp;
    if(swapButton.style.padding == '10px 15px') {
        swapButton.style.padding = '11px 16px';
    } else {
        swapButton.style.padding = '10px 15px';
    }
}