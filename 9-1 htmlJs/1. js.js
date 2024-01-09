// console.log(`User Name is ${this.name} and age is ${this.age}`);

// const user1 = {
//     name : "ram",
//     age : 14,
//     about : "student"
// }
// const user2 = {
//     name : "shaam",
//     age : 20,
//     about : "senior"
// }
// const user3 = {
//     name : "raghu",
//     age : 28,
//     about : "teacher"
// }

// // console.log(this);
// console.log(`User Name is ${this.name} and age is ${this.age}`);
// document.getElementById("text").textContent = "hello";
// function studentsinfro(){
// this.name = user.name
// }
// console.log(user1.name);
// console.log(user2.name);
// console.log(user3.name);

const user1 = {
    name: "ram",
    age: 14,
    about: "student"
};
const user2 = {
    name: "shaam",
    age: 20,
    about: "senior"
};
const user3 = {
    name: "raghu",
    age: 28,
    about: "teacher"
};



function displayUserInfo() {
    console.log(`User Name is ${this.name} and age is ${this.age}`);
    document.getElementById("text").textContent = "hello";
}
user1.displayInfo = displayUserInfo;
user2.displayInfo = displayUserInfo;
user3.displayInfo = displayUserInfo;

user1.displayInfo();
user2.displayInfo();

////////////////////////////////////////////////////////////////
console.log("------------------------------");
////////////////////////////////////////////////////////////////

const users = [
    {
        name: "ram",
        age: 14,
        about: "student"
    },
    {
        name: "shaam",
        age: 20,
        about: "senior"
    },
    {
        name: "raghu",
        age: 28,
        about: "teacher"
    }
]
users.forEach(user=>{
    user.displayInfo1 = displayUserInfo;
})
users.forEach(user=>{
    user.displayInfo1();
})
