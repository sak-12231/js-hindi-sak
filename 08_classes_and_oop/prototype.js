 // let myName = "sakshi     "
 // let myChannel = "chai"

 // console.log(myName.truelength);


 let myHero = ["thor", "spiderman"]

 let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
 }

 Object.prototype.sakshi = function(){
    console.log(`sakshi is present in all object`);
 }

 Array.prototype.heySakshi = function(){
   console.log(`Sakshi says hello`);
 }

 //heroPower.sakshi()
 myHero.sakshi()
 myHero.heySakshi()
 // heroPower.heySakshi()

 // Inheritance

 const User = {
  name: "chai",
  email: "chai34@google.com"
 }

 const Teacher = {
   makeVideo: true
 }

 const TeachingSupport ={
   isAvailable: false
 }

 const TASupport  = {
   makeAssignment: 'JS assignment',
   fullTime: true,
   __proto__: TeachingSupport
 }

 Teacher.__proto__ = User

 // modern syntax
 Object.setPrototypeOf(TeachingSupport, Teacher)

 let anotherUsername = "chaiorcode"

 String.prototype.trueLength = function(){
  console.log(`${this}`);
  // console.log(`${this.name}`);
  console.log(`True length is: ${this.trim().length}`);
 }

 anotherUsername.trueLength()
 "sakshi".trueLength()
 "iceTea".trueLength()