const n1 = document.querySelector('#number1');
const n2 = document.querySelector('#number2');
const result = document.querySelector('#result-box');   

function sum() {
    result.innerHTML = parseInt(n1.value) + parseInt(n2.value);
}

function multiply() {
    result.innerHTML = parseInt(n1.value) * parseInt(n2.value);
}

function clean() {
    n1.value = '';
    n2.value = '';
    result.innerHTML = 0;
    document.querySelector(".input-error").classList.remove('input-error');
}


