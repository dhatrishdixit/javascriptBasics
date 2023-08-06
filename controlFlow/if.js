const temperature = 41 ;

if( temperature === 41){   
    let power = "fly" ;
    console.log(`power is : ${power}`)
    console.log("true");
}else{
    console.log(false);
}
// console.log(`2power is : ${power}`)

//implicit scope 

const balance = 200 ;
if(balance > 100) console.log("true1");

//dont do this 

if(balance > 100) console.log("true1"),console.log("true2");

// if , else , else if, &&, || 

// < , > , <= , >= , == , != ,===, !==