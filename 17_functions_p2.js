const calculateCartPrice= function(val1,val2,...nums){
    console.log(nums,val1,val2);

}


calculateCartPrice(1,2,3,4,5,6,7,8);

const obj = {
    username:"dhatrish",
    price:500
}

function handleObject(anyobject){
       console.log(`username is ${obj.username} and its price is ${obj.price}`)
};


handleObject(obj);



const newArr = [1,2,3,4,5,6];

function returnSecondValue (getArray){
    return getArray[1];
}

console.log(returnSecondValue(newArr));