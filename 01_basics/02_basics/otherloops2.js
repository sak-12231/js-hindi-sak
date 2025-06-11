const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "rubby",
    swift: "swift by apple"
} 

for (const key in myObject) {
   console.log(`${key} shortcut is for ${myObject[key]}`); 
}

const programming = ["js", "cpp", "rb", "swift", "java"]

for (const key in programming) {
    console.log(programming[key]);
}


const  map = new Map()
 map.set('IN', "India")
 map.set('USA', "United state of Amercia")
 map.set('Fr', "France")
 map.set('IN', "India")

 for (const key in map) {
   console.log(key);
 }
