const userEmail = []
//const userEmail = ""
//const userEmail = "s@sakshi.ai"

if(userEmail){
    console.log("got user email");
}
else {
    console.log("don't have user email")
}

// falsy values

// false, 0 ,-0, BigInt 0n, "", null, undefined, NaN

//truethy values
// "0", 'false', " ",[], {}, function(){}
 
/* if(userEmail.length === 0){
    console.log("array is empty");
}*/

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20


console.log(val1);

//terniary operator

// condition ? true : false

const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")

