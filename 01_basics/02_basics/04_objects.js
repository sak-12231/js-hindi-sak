 //const TinderUser = new Object()  //singleton object
 const TinderUser = {}  //non-singleton object

 TinderUser.id = "123abc"
 TinderUser.name = "Jonny"
 TinderUser.isLoggedIn = false

 //console.log(TinderUser);

 const regularUser = {
    email: "abc234@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Harry",
            lastname: "Sharma"
        }
    }
 }
   
 //console.log(regularUser.fullname.userfullname);
 //console.log(regularUser.fullnmae?.userfullname.firstname);  //means variable exist krta h ya nhi,API se reponse aane pr yeh syntax use krna padtha h


 const obj1 = {1: "a", 2: "b"}
 const obj2 = {3: "c", 4: "d"}
 const obj4 = {5: "a", 6: "b"}

 //const obj3 = {obj1, obj2}
 //const obj3 = Object.assign({}, obj1, obj2, obj4)

 const obj3 = {...obj1, ...obj2}
 //console.log(obj3);

 const users = [
    {
        id: 1,
        email: "s@gmail.com"
    },

     {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 1,
        email: "s@gmail.com"
    }
]

users[1].email
console.log(TinderUser);

console.log(Object.keys(TinderUser));
console.log(Object.values(TinderUser));
console.log(Object.entries(TinderUser));

console.log(TinderUser.hasOwnProperty('isLogged'));