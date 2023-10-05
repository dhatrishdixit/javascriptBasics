let name = 'dhatrish';

const obj = {
    name :'dhatrish2',
    logIn: function(){
         console.log(`${this.name} is logged in`)
    }
}

const obj2 = {
    name : 'dhatrish3'
}

obj.logIn();
const tell = obj.logIn.bind(obj2);
tell();