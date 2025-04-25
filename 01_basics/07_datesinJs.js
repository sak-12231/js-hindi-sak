// Dates

let myDate = new Date()
/*console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());

console.log(typeof myDate);*/

//let myCreatedDate = new Date( 2025, 0, 22)
//let myCreatedDate = new Date( 2025, 0, 22, 3, 20)
//let myCreatedDate = new Date("2025-01-12")
let myCreatedDate = new Date("01-15-2025")


//console.log(myCreatedDate);
//console.log(myCreatedDate.toDateString());
//console.log(myCreatedDate.toLocaleDateString());
//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

//console.log(myTimeStamp);
//console.log(myCreatedDate.getTime());
//console.log(Date.now());
//console.log(Date.now()/1000);

//console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getMonth());
console.log(newDate.getMonth() + 1);

// '${newDate.getMonth()} and the time'

newDate.toLocaleString('default',{
    weekday: "long"
})