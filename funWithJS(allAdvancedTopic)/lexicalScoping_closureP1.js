function outer(){
     let value = '123';
     //console.log(outer,secret)
     function inner1(){
        let secret = 'abc'
        console.log('inner1',value);
     }
     function inner2(){
        //console.log(inner2,secret)
        console.log('inner2',value);
     }
     inner1();
     inner2();
}

outer();
//console.log('too outer',value);


