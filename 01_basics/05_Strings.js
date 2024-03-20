const name="Arpit";
const email="arpit@google.com";

console.log(`Hello my Name is ${name} and my email id is ${email}.`);// String interpolation

const gameName =new String(" Arpit Shukla");// String is object
console.log(gameName.length);// gives length of string
console.log(gameName.charAt(2));// gives character at that index value
console.log(gameName.indexOf('t'));// gives index position of that character

const newStr= gameName.substring(0,4);// gives string from index 0 to 4
console.log(newStr);

const anotherStr = gameName.slice(-9, 16);
console.log(anotherStr);// -here shows that it starts from reverse to 4

console.log(gameName.trim());// clear unwanted spaces

console.log(gameName.replace(" ",'-'));// replaces the conditional statement with another like spaces with hyphen here.

console.log(gameName.includes(" "));// checks condition and return boolean value true  or false.

console.log(gameName.split(" "));// splits the content in array according to given condition like spaces here

const str2=" is a good person.";
console.log(gameName.concat(str2));

const str3= new String("Arpit1");
console.log(str3);
console.log(str3.toString());

