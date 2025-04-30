 //singleton ---> means when we make through constructor ,then make singleton object
 //Object.create 

 //object literals


 const mySym = Symbol("key1")


const JsUser = {
    name: "Sakshi",
    "full name": "Sakshi Srivastav",
    [mySym]: "myKey1", 
    age: 23,
    location: "Ludhiana",
    email: "sakshisrivastav262@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//console.log(JsUser.email);
//console.log(JsUser["email"]);
//console.log(JsUser["full name"]);
//console.log(JsUser.mySym);
//console.log(typeof JsUser.mySym);
//console.log(JsUser[mySym]);

JsUser.email = "ggi2021.2161@ggi.ac.in"
//Object.freeze(JsUser)
JsUser.email = "sakshisrivastavmicrosoft.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
} 

JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}  



//console.log(JsUser.greeting); //undefined
//console.log(JsUser.greeting());
//console.log(JsUser.greeting);

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());



