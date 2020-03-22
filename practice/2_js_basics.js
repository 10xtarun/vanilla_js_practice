/*
var variables are executed on top -> vairable hoisting
*/
function scope1(){
    var top = "top";
    bottom = "bottom";
    console.log(bottom);
    var bottom;
}
//scope1();
/*
var keyword has scope of closest function scope
*/

/*let keyword */
function scope3(some){
    if(some){
        let val = '12';
    }
    console.log(val);
}
//scope3(true);
/*
let -> has closest block scope {}
*/

/*type of variables */
/*
boolean, number, string, undefined,
object, function and symbol
*/

/*Truthy/Falsey*/
/*
empty = null = undefined = false
0 = '' = "" = NaN = undefined = null

true = any_number = non-empty strings & object
*/

/* === vs == */ 
/*
JS - script language - variables are not assigned a type 
during declaration - types are interpreted as the code runs
=== checks type and value
== checks only value
both can be used only on strings and numbers
*/

/*Objects Equality */
/*
two objects cannot be equal because they point at different memory locations
each property is checked for equality of two objects
*/

