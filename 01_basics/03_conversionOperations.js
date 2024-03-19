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