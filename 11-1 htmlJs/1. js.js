//by id
const item1 = document.getElementById("item1");
console.log(item1);

item1.style.backgroundColor = "red";


//by class
const item2 = document.getElementsByClassName("item2");
console.log(item2);

item2[1].style.color = "blue"

for(let i = 0; i < item2.length; i++){
    item2[i].style.backgroundColor = "green"
}

//query selector
const item4 = document.querySelector("h3");
item4.style.color = "pink"