/*
Primitive datatypes

7 types:
String, number, boolean, null, undefined, Symbol, BigInt.
*/

const naam="Arpit" // string
const score=100; //number
const scoreValue=110.3; //number

const isLoggedIn=true; // boolean
const outsideTemp=null; // null
let userEmail; //undefined

const id=Symbol('123'); // Symbol

const bigNumber=48451498745166878n; //bigInt

/*

Refernce Types(Non primitive):
Array, Object, functions.
*/

let arr=["Ironman","Hanuman", "Superman"];// Array

let meObj={    // Object
    name:"Arpit",
    age:23
}

const fun=function(){   //function
    console.log("hello arpit");
}

// *******************Memory Allocation ********************

// Stack(Primitive)   Heap(Non-Primitive)

let myName="Arpit";

let yourName=myName;
yourName="Something";

console.log(myName);
console.log(yourName);


let user1={
    email:"user1@google.com",
    city:"delhi"

}

let user2=user1;

user2.city="Noida";

console.log(user1);
console.log(user2);
