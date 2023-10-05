// ES6 

class User{
    constructor(username,email,password){
        this.username = username ;
        this.email = email ;
        this.password = password ;
    }
    
    encryptPassword(){
        this.password = `${this.password}abc` ;
        // return `${this.password}abc`;
    }
    changePassword(){
        this.password = this.password.toUpperCase();
        // return `${this.password.toUpperCase()}`
    }
}


const check = new User('chai','chai@email.com','abc');

check.encryptPassword();
check.changePassword();
console.log(check.password);


// behind the scene 

function User1(username,email,password){
     this.username = username ;
     this.password = password ;
     this.email = email ;


}

User1.prototype.encryptPassword = function (){
    this.password = `${this.password}abc` ;
}

User1.prototype.changePassword = function (){
    this.password = `${this.password.toUpperCase()}`;
}
console.log('___________________________________________________')
const check1 = new User1('chai','chai@email.com','abc');

check1.encryptPassword();
check1.changePassword();
console.log(check1.password);
