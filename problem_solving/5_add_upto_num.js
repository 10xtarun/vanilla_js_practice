/*
Find Two Array Elements in an Array That Add Up to a Number
Problem: Given the array arr, find and return two indices of the array
that add up to weight or return -1 if there is no combination that
adds up to weight.
For example, in an array like [1,2,3,4,5], what numbers add up to
9?
The answers are 4 and 5, of course.
*/

numArray = [3,5,4,1,6]
weight = 9

numArray.sort();
console.log(numArray);

function findWeightPairs(){
    numArray.forEach(element => {
        num = weight - element;
        if(numArray.indexOf(num) != -1){
            console.log(element+" - "+numArray[numArray.indexOf(num)]);
        }
    });
}
//findWeightPairs();

/*
storing and retrieving JS Object Property takes O(1) time
*/

function findSumBetter(arr, weight){
    var hashtable = {};
    for(var i=0, arrLength=arr.length; i<arrLength; i++){
        var currentElement = arr[i];
        difference = weight - currentElement;

        if(hashtable[currentElement] != undefined){
            return[i, hashtable[weight-currentElement]];
        }else{
            //store index
            hashtable[difference]=i;
        }
    }
    return -1;
}

console.log(findWeightPairs(numArray, weight));
