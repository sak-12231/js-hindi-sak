 // Primitive

// 7 types : String , Number , Boolean , null , Undefined, Symbol, BigInt

const score = 100
const  scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
  
console.log(id === anotherId);

const bigNumber = 23456783356764n

// Reference (Non primitive)



// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name:"sakshi",
    age: 22,
}

const myfunction = function(){
    console.log("Hello World");
}


console.log(typeof anotherId); // symbol
console.log(typeof scoreValue); // number
console.log(typeof outsideTemp); // object
console.log(typeof bigNumber); // bigInt
console.log(typeof myfunction); // function
console.log(typeof heros); //object
console.log(typeof myObj); // object
console.log(typeof userEmail); // undefined





