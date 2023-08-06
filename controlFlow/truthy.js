const userEmail = [];

if(userEmail){
    console.log(true);
}else{
    console.log(false);
}


// notes 
// imp 
// falsy value
//false , 0 , -0 , BigInt 0n , "", null, undefined, NaN



// surprising truthy value 
// "0" , 'false', " " ,[],{},function() {}

const emptyObj = {} ;

if(Object.keys(emptyObj).length === 0){
    console.log("object is empty ");
}else{
    console.log("object is not empty ");
}
// imp 
// false == 0 , false == '', 0 == ''
// all these are true 
