/*
+, -, /, *, modulus
*/
/*
32-bit floating-point-representation
31 - sign bit
30 to 23 - exponnet value e
23 - fraction value
*/
/*
decimal fractions causes rounding errors
0.1 + 0.2 === 0.3 results false
*/
//console.log(0.1 + 0.2 === 0.3)

/*why ? */
/*
To really understand why 0.1 cannot be represented properly as a
32-bit floating-point number, you must understand binary. 
Representing many decimals in binary requires an infinite number of digits.
This because binary numbers are represented by 2^n where n is an integer.
While trying to calculate 0.1, long division will go on forever. 
*/

/*js Number Object */
/*
Integer Division does not work in JS
*/

/*Number.EPSILON*/
function numberEquals(x, y){
    return Math.abs(x - y) < Number.EPSILON;
}
//console.log(numberEquals(0.1 + 0.2, 0.3));
//console.log(Number.EPSILON);

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE);

console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MIN_VALUE);

/*Infinity */
console.log(-Infinity < Number.MAX_SAFE_INTEGER);



