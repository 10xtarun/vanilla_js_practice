/*
array in js are reference-based that means
a1 = [1,2,3]
a2 = a1

a2[0] = 5

"a1[5,2,3]"
*/

/*
.push() //insert at last
.pop() //removes from last and returns
.shift //removes from start and returns
iteration to acces - for, while, for-in
*/
//for-in implementation
var array1 = "tarun".split('');

for(var x in array1){
    console.log(x+" - "+array1[x]);
}

/*
for-of
*/
for (var element of array1){
    console.log(element);
}

/*
forEach
- cannot break or skip elements
- is more expressive and explicit
*/

array1.forEach((element, index) => {
    console.log(element+" - "+index);
});

/*
.slice(begin, end)
*/
console.log(array1.slice(1,3));

/*
array.slice() === array //false
because memory locations are different
*/

/*
.splice(begin, size, element1, element2,...)
time compex - O(n)
*/
arrNum = [1,2,3,4,5,6];

arrNum.splice(1,1,'x','y');

console.log(arrNum);

/*
.concat()
*/

console.log(arrNum.concat([7,8,9]));

/*
.length //property
*/

/*
spread operator
*/

//functionName(...arrNum);