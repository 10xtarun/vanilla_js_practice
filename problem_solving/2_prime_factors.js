/*
prime factors of numbers - 10 = 5 x 2
*/
function primeFactors(num) {
    for(var i=2; i<=num/2; i++){
        if(num%i == 0){
            console.log(i+" "+(num/i))
        }
    }
}
//primeFactors(1200);

//efficient approach
function primeFactorsNew(n){
    //print the number of 2s that divide n
    while(n%2==0){
        console.log(2);
        n = n/2;
    }
    //n must be odd at this point
    //we can skip one element (i = i+2)
    for (var i=3; i*i <=n; i=i/2){
        while(n%i == 0){
            console.log(i);
            n = n/i;
        }
    }

}
primeFactorsNew(50);