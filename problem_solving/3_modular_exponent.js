/*
Given three numbers x, y, and p, compute (xˆy) % p. (This is modular exponentiation.)
Here, x is the base, y is exponent, and p is the modulus.
Modular exponentiation is a type of exponentiation performed over a modulus,
which is useful in computer science and used in the field of public-key encryption
algorithms.
*/
function exponentiation(base, expo, mod){
    val = 1;
    curExpo = 0;
    while(curExpo != expo){
        val = (base * val) % mod;
        curExpo+=1;
        console.log(val);
    }
}

exponentiation(4, 3, 5);