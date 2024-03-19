let score = 33;

console.log(typeof score);

let valueInNumber = Number(score);

console.log(typeof valueInNumber);

/*
"33" => 33
"33abs" => NaN (not a number) it will be converted in number type but impurely
true/false => 1/0;
undefined => NaN
null => object type value will be 0
*/

let isLoggedIn =1;

let booleanIsLoggedIn= Boolean(isLoggedIn);

console.log(booleanIsLoggedIn);

/*
1/0 => true/false
""/"abc" => false/true
*/

let someNumber=false;

let stringNumber= String(someNumber);

console.log(stringNumber);
console.log(typeof stringNumber);

/*
33 => "33" string type
true/false => "true"/"false"
undefined and null => "undefined" and "null"
*/

//link to study Primitive Conversion
/*https://tc39.es/ecma262/#sec-toprimitive*/

//################### OPERATIONS ####################

console.log(2+2);//4
console.log(2-2);//0
console.log(2*3);//6
console.log(2/2);//1
console.log(2/2);//1
console.log(4%2);//0
console.log(2**3);//8

let str1="hello"
let str2=" Arpit"
console.log(str1+str2);// hello Arpit

console.log("1"+2);//12
console.log(1+"2");//12
console.log("1"+2+2);//122
console.log(1+2+"2");//32
/*
it first check the first value type if string then later values are returned as string.
if number then checks the later as number or string then perform operations.
*/
console.log(( 3 + 3 ) * 5 % 3 );//0 ((9*5)%3)
/*
here operation are done from left to right giving priority to braces.
*/

console.log(+true);//1
console.log(+"");//0

