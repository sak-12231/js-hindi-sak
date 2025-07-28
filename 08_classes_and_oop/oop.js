 const user = {
    username: "sakshi",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
      //console.log("Got user details from database");
      //console.log(`username: ${this.username}`);
      console.log(this);
    }
 }

 // console.log(user.username);
 // console.log(user.getUserDetails());
 // console.log(this);

 function User(username, loginCount, isLoggedIn){
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn

  this.greeting = function(){
    console.log(`welcome ${this.username}`);
  }

  return this
 }

 const userOne = new User("sakshi" , 8, true)
 const userTwo = new User("srivastav", 10, false)


 console.log(userOne.Constructor);
 console.log(userTwo);