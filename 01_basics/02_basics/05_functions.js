 function sayMyName(){
 
 console.log("H");
 console.log("C");
 console.log("R");
 console.log("E");
 console.log("S");
 console.log("T");
 }

 //sayMyName()

// function addTwoNumbers(number1, number2){
  //  console.log(number1 + number2);

 //}
 
 function addTwoNumbers(number1, number2){
    
  // let result = number1 + number2
   //console.log("sakshi");  //function work before use return
  // return result
   //console.log("sakshi");  //function do not work afer  use return result

   return number1 + number2  //dirct value return ,it casn save space

}




 //addTwoNumbers(3,6)
 //addTwoNumbers(3, "6")
 //addTwoNumbers(3, "a")
 //addTwoNumbers(3, null)

 const result = addTwoNumbers(3, 6)

 //console.log("Result:", result);

 function loginUserMessage(username = "sam"){
 //if(username === undefined){
 if(!username){
  console.log("Please enter username");
  return
 }
   return `${username} just logged in`
 }


loginUserMessage("sakshi")  //function execute and return a value but not to ask print or store the function, so it is not print 
console.log(loginUserMessage("sakshi"));
console.log(loginUserMessage("")); 
console.log(loginUserMessage());  //undefined


   

 




