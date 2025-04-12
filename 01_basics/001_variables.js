const accountId = 14423
let accountEmail = "sakshisrivastav262@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
 let accountState;

//accountId = 2  //not allowed

accountEmail = "sak19@gmail.com"
accountPassword = "23456"
accountCity = "Delhi"


console.log(accountId);


/*
prefer not to use var 
because of issue im block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);