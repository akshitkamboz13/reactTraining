const obj1 = {
    firstname : "akshit",
    age : 12,
    about : function(){
        console.log(`Username is ${this.firstname} and age is ${this.age}`);
    }
}
// Instead of this
const myFunc = obj1.about;
myFunc();
//we use
const myFun = obj1.about.bind(obj1);
myFun()