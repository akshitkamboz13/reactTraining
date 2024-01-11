// const obj1 ={
//     name : "akshit",
//     lastname : "kamboj",
//     age : 24,
//     email : "akshit@gmail.com",
//     address : "karnal",
//     about : function(){
//         console.log(`${this.name} ${this.lastname} is ${this.age} years old`);
//     },
//     is18 : function(){
//         return this.age >= 18;
//     }
// }

// obj1.about();

function fill(name,lastname,age,email,address){
    user = {}
    this.name = name;
    this.lastname = lastname;
    this.age = age;
    this.email = email;
    this.address = address;
    this.about = function(){
        console.log(`${name} ${lastname} is ${age} years old`);
    };
    this.is18 = function(){
        return this.age >= 18;
    }
}

const obj2 = fill("ram","chand",45,"raamchand@email.com","mohali");
console.log(obj2);
const aboutuser2 = obj2.about()

