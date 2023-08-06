const myNum = [1,2,3,4,5,6,7,8,9];
const myNum2 = myNum.map((num)=> num+10);
console.log(myNum2);
const myNum3 = myNum.map((num)=>{
    return num+10;
})

console.log(myNum3);
const myNum4 = [];
myNum.forEach(element => {
    myNum4.push(element+10);
});
console.log(myNum4);


const myNum5 = myNum
               .map((items)=> items*10)
               .map((items)=>items+1)
               .filter((items)=>items>=40);

console.log(myNum5);