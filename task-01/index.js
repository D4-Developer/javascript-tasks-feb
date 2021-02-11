'use strict'

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
console.log('Factorial of 1000');
console.log(factorial(1000));