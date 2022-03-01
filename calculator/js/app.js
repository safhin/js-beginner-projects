const calculas = document.querySelector('.calculus');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const divider = document.querySelector('.division');
const multiplication = document.querySelector('.multiplication');
const clear = document.querySelector('.clear');
const result = document.querySelector('.equal');
const numbers = document.querySelectorAll('.number');

numbers.forEach(function(number){
    var digit = number.innerHTML;
    number.addEventListener('click', function(){
        var p = document.createElement('p');
        p.setAttribute('class', 'digit');
        p.innerHTML = digit;
        calculas.appendChild(p);
    });
});

clear.addEventListener('click', function(){
    const digits = document.querySelectorAll('.digit');
    digits.forEach(function(value){
        calculas.removeChild(value);
    });
});

result.addEventListener('click', function(){
    const digits = document.querySelectorAll('.digit');
    const digitsArr = [];
    digits.forEach(function(value){
        digitsArr.push(value.innerHTML);
    });
    let str = digitsArr.join("");
    console.log(str);
    let result = eval(str);
    digits.forEach(function(value){
        calculas.removeChild(value);
    });
    var span = document.createElement('p');
    span.setAttribute('class', 'digit');
    span.innerHTML = result;
    calculas.appendChild(span);
});
