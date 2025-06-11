 const coding = ["js", "ruby", "java", "cpp", "python"]


// const values = coding.forEach( (item) => {
//   // console.log(item);
 //   return item
 // })

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => num > 4 )  //filter
// const newNums = myNums.filter( (num) => {
 //    return num > 4     // scope open
// })


/* const newNums = []

myNums.forEach( (num) =>{
    if(num > 4) {
        newNums.push(num)
    }
})
console.log(newNums); */

let userBooks =  books.filter( (bk) => bk.genre === 'history')

userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "history"
})


console.log(userBooks)
 


