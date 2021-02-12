'use strict'

const inputObj = document.querySelector('.input');
const btnObj = document.querySelector('.submit');
const outputObj = document.querySelector('.output');

function multiplyWithString(a, b) {
    
    const product = Array(a.length+b.length).fill(0);
    for (let i = a.length; i--; ) {
        let carry = 0;
        for (let j = b.length; j--; ) {
            product[1+i+j] += carry + a[i]*b[j];
            carry = Math.floor(product[1+i+j] / 10);
            product[1+i+j] = product[1+i+j] % 10;
        }
        product[i] += carry;
    }
    return product.join("").replace(/^0*(\d)/, "$1");
}

function factorial(n) {
    let fact = '1';
    for (let i = 2; i <= n; ++i)
        fact = multiplyWithString(fact, i.toString());
    return fact;
}

function sumbitAction() {
    const input = Number(inputObj.valueAsNumber);

    const output = input + '! = ' + factorial(Number(input));
    outputObj.textContent = output;
    console.log(output);
}

btnObj.addEventListener('click', sumbitAction);