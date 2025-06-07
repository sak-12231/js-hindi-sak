 //let a = 10
 //const b = 20
 //var c = 30 

 //var c = 300
 let a =300

 if(true){
    let a = 10
    const b = 20
    //var c = 30
   // c = 30
  // console.log("INNER:", a);
 }
   


 

// console.log(a);
 //console.log(b);
// console.log(c);

function one(){
    const username = "sakshi"

    function two(){
        website = "youtube"
        console.log(username);
    }
   // console.log(website);  //website is not defined bcoz it is in outside the scope
    // two()  //two is not call isliye execute nhi hoga
    two()
}

//one()

if(true){
    const username = "simpy"
    if(username === "simpy"){
        const website = " youtube"
        //console.log(username + website)
    }
    //console.log(website);
}

//console.log(username);

//*****************************interesting*********************************** 
console.log(addone(5));
function addone(num1){     // it is function
    return num1 + 1
}

//addone(5)

addTwo(5 )
const addTwo = function(num){    // it is expression
    return num + 2
}

//addTwo(5)