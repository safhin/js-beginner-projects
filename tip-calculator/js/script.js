
//Select dom elements

const billElem = document.querySelector('#bill');
const personsElem = document.querySelector('#person');
const percentElem = document.querySelector('.percent');
const btn = document.querySelector('#btn-submit');

const tipElem = document.querySelector('.tip');
const totalElem = document.querySelector('.total');
const eachBillElem = document.querySelector('.each-bill');
const resultElem = document.querySelector('.result');

resultElem.style.display = 'none';



btn.addEventListener('click', function(){
    resultElem.style.display = 'block';
    let bill = billElem.value;
    let persons = personsElem.value;
    let percent = percentElem.value;

    let tip = (percent / 100) * bill;
    let totalTip = parseInt(tip) + parseInt(bill);

    tipElem.innerHTML = tip;
    totalElem.innerHTML = totalTip;
    eachBillElem.innerHTML = totalTip / personsElem.value;
    
    billElem.value = '';
    percentElem.value = '';
    personsElem.value = '';
});