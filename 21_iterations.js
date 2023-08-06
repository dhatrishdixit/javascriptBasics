

for(let index = 0 ; index < 10 ; index++){
    // const element = index ;
    if(index == 6){
        console.log('6 is the best');
    }
    console.log(index); 
}


for(let i = 1 ; i<= 10 ;i++){
    for(let j = 1;j<= 10 ;j++){
        console.log(`${i} x ${j} = ${i*j}`)
    }
}


// continue and break   

for(let i = 1 ; i<=10 ;i++){
   
    if(i==5){
        console.log("5 is detected");
        break;
    }

    console.log(i);

}

for(let i = 1 ; i<=10 ;i++){
   
    if(i==5){
        console.log("5 is detected");
        continue;
    }

    console.log(i);

}
