//we cant user this function in arrow function

const obj1 = {
    firstname : "akshit",
    age : 12,
    about : ()=>{
        console.log(`Username is ${this.firstname} and age is ${this.age}`);
    }
}
obj1.about()


//but can use it(this function) in normal function
const obj2 = {
    firstname : "akshit",
    age : 12,
    about : function(){
        console.log(`Username is ${this.firstname} and age is ${this.age}`);
    }
}
obj2.about()