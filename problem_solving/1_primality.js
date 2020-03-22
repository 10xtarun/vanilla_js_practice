/*naive approach */
function isPrime(n){
    if(n <=1 ){
        return false;
    }
    //check from 2 to n-1
    for (var i=2; i<n; i++){
        if(n%i == 0){
            return false;
        }
    }
    return true;
}
//console.log(isPrime(723));

/*Analyze*/
/*
all primes are of 6k+1 / 6k-1 except 2 and 3
6-1 = 5
6*1 + 1 = 7
6*2 + 1 = 13
and so on...

square root of n is not prime number, n is not prime by mathematical definition
loop should stop there
*/
function isPrimeNew(n){
    if(n <= 1) return false;
    if(n <= 3) return true;

    //this is checked so that we can skip
    //middle five numbers in below loop
    if(n % 2 == 0 || n%3 == 0 ) return false;

    for(var i = 5; i*i <= n; i=i+6){
        //console.log(i)
        console.log(i*i)
        console.log(i+2);
        if(n%i == 0 || n % (i+2) == 0){
            return false;
        }
    }
    return true;
}

console.log(isPrimeNew(353));