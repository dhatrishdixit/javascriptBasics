class User{
   constructor(username){
    this.username = username ;
   } 
    
   logMe(){
    console.log(`user ${this.username}`)
   }
}

class Teacher extends User{
     constructor(username,email,password){
         super(username);
         this.email = email ;
         this.password = password ;
     }

     addCourse(){
        console.log(`a new course was added by  ${this.username}`);
     }
}

const chai = new User('chai');
const teacher = new Teacher('chaiTeacher','chai@gmail.com','password');

chai.logMe();
teacher.addCourse();
console.log(teacher instanceof Teacher);