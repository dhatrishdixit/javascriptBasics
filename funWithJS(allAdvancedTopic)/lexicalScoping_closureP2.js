//function ka pura lexical scope return hota hai !!! isi wajah se value abhi bhi context mei hai 

function outer(){
    let value = '123';
    function inner(){
        console.log('value :',value);
    }

    return inner ;
}

const myFun = outer();
myFun() ;