 // for of

 // ["", "", "" ]
 // [{}, {}, {}]

 const arr = [1, 2, 3, 4, 5]

 for (const num of arr) {
    console.log(num);
    
 }

 const greetings = "hello world!"

 for (const greet of greetings) {
    console.log(`each char is ${greet}`);
    
 }


 const  map = new Map()
 map.set('IN', "India")
 map.set('USA', "United state of Amercia")
 map.set('Fr', "France")
 map.set('IN', "India")


 console.log(map);

 for (const [key, value] of map) {  //array destructure 
   console.log(key, ':-', value);
 }

 const myObject = {
   'game1': 'NFS',
   'game2': 'Spiderman'
 }

 /* for (const [key, value] of myObject) {
   console.log(key, ':-', value);
   
 } */