function setUser(userName){
    this.username = userName ;
    console.log('called');
}

const dhatrish = new setUser("dhatrish")
console.log(dhatrish, typeof dhatrish );

function createUser(userName,passWord,emailId){
    setUser.call(this,userName);

    this.password = passWord ;
    this.email = emailId ;

}

const user = new createUser('dhatrish','123','123@gmail.com');
console.log(user);