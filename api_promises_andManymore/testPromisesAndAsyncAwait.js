const baseURL = 'https://random-data-api.com/api/v2';

// fetch(`${baseURL}/users`)
// .then((response)=>response.json())
// .then((data)=>console.log(data))
// .catch(e=>console.log(e));


// in this way we are using api calling synchronously inside a function 
const apiCall = async () => {
    try{
        const response = await fetch(`${baseURL}/users`);
        console.log(typeof response);     
        const data = await response.json();
        console.log(data);
        console.log(typeof data);  
        console.log('data succesfully got back') 
    }
    catch(err){
        console.log(err);
    }
 
}
apiCall();
console.log('first comment');