const inputNumber1 = document.querySelector('#number1');
const inputNumber2 = document.querySelector('#number2');
const result = document.querySelector('#result-box');   

function sum() {
    const n1 = inputNumber1.value;
    const n2 = inputNumber2.value;

    if(isNumber(n1) && isNumber(n2)) {
        result.innerHTML = (+n1) + (+n2);

    }else if(!isNumber(n1) && !isNumber(n2)){
        inputNumber1.classList.add('input-error');
        inputNumber2.classList.add('input-error');

    }else if(!isNumber(n1)){
        inputNumber1.classList.add('input-error');

    }else if(!isNumber(n2)){
        inputNumber2.classList.add('input-error');
    }
  
}

function multiply() {
    const n1 = inputNumber1.value;
    const n2 = inputNumber2.value;
    result.innerHTML = (+n1) * (+n2);
}

function clean() {
    inputNumber1.value = '';
    inputNumber2.value = '';
    result.innerHTML = 0;
    inputNumber1.classList.remove('input-error');
    inputNumber2.classList.remove('input-error');
}

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}