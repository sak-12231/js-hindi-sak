const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, curval){
  //  console.log(`acc: ${acc} and curval: ${curval}`);
   // return acc + curval
 // }, 0)

 const myTotal = myNums.reduce( (acc , curr) => acc + curr , 0)

  console.log(myTotal);

  const shoppingCart = [
    {
    itemName: "js course",
    price: 2999
  },
    {
    itemName: "data science course",
    price: 12999
  },
    {
    itemName: "mobile dev course",
    price: 5999
  },
    {
    itemName: "py course",
    price: 999
  },
]

const pricetopay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(pricetopay);