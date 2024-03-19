// console.log(2>1);
// console.log(2>=1);
// console.log(2!=1);
// console.log(2==1);

console.log("2">1); //true string is converted in number
console.log("02">1); //true
/*
javascript allows compariosions between different datatypes typescript does not.
*/

console.log(null > 0); //false
console.log(null == 0);//false //coz null is coerces/persuaded/treated as undefined
console.log(null >= 0);//true

/*
Comparisions convert null to number, treating it as 0.
null >= 0 is true and null > 0 is false.
*/

//===

console.log("2"===2);//false === checks values as well as datatype.


