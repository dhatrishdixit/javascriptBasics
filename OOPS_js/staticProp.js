class User{
    constructor(username){
        this.username = username ;
    }

    logMe(){
        console.log(`${this.username} is logged in`);
    }

    static userId(){
        return '123';
    }
}

const newUser = new User('dhatrish');
console.log(newUser);
newUser.logMe();
// newUser.userId();


class Teacher extends User{
    constructor(username){
        super(username)
    }

    verification(){
        console.log(`${this.username} is a teacher`);
    }
}

const ds = new Teacher('dhatrish');
ds.verification();
ds.logMe();
// ds.userId();
