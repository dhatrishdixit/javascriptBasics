const myObj = {
    _user:'dhatrish',
    _password:'abc',

    get password(){
        return this._password.toUpperCase();
    },
    set password(value){
        this._password = value;
    }

}

console.log(myObj.password);