const myNum = [1,2,3,4];

// const myTotal = myNum.reduce(function (accumulator,currentValue,index){
                                  
//                console.log(`value of accumulator is : ${accumulator} and currentValue is : ${currentValue} at index : ${index}`);
//                return accumulator + currentValue;
// },0);

const myTotal = myNum.reduce((acc,curr)=>acc+curr,0);
const myTotal1 = myNum.reduce((acc,curr)=>acc+curr);
const myProduct = myNum.reduce((acc,curr)=>acc*curr);

console.log(myTotal,myTotal1,myProduct);


// real life example 

const shoppingCart = [
    {
        item:"mobile",
        price:20000,
    },
    {
        item:"laptop",
        price:40000,
    },
    {
        item:"watch",
        price:5000,
    },
    {
        item:"camera",
        price:10000,
    },
]


// const price = shoppingCart.map((item)=>item.price);
// console.log(price);
// const totalPrice = price.reduce((acc,curr)=>acc+curr);
// console.log(totalPrice);


const totalPrice = shoppingCart.reduce((acc,curr)=>acc+curr.price,0);
console.log(totalPrice);