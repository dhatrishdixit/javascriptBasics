try{
    console.log('hello')
    let issue = false ;
    if(issue){
        throw new Error('there is some mistake')
    }
    else{
        console.log('code is working correctly ')
    }
}
catch(err){
    console.log(err);
}
finally{
    console.log('finally is there ')
}