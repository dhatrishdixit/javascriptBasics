function User(email,password){
    this._email = email ;
    this._password = password ;

    Object.defineProperty(this,'password',{  
        set:function(value){
            this._password = value ;
        },
        get: function(){
            return this._password.toUpperCase();
        }
    })
    Object.defineProperty(this,'email',{
        get:function(){
             return this._email.toUpperCase();
        },

        set:function(value){
            this._email = value ;
        }
        
    })
}


const user1 = new User('dhatrish@gmail.com','abc');
console.log(user1.email,user1.password);