function memoize(fn){
    let cache = {};
    return function(...args){
        const key = JSON.stringify(args);
        if(cache[key]){
            //console.log('stored')
            console.log(cache)
            return cache[key];
        }
        // executing the function 
        //console.log('check')
        const value = fn(...args)
        cache[key] = value;
        return value
    }
}

function square(n){
    return n*n;
}