function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}




const aaa=document.getElementById("box");
aaa.addEventListener("mouseover",function(){
    aaa.style.backgroundColor = "pink"
})
aaa.addEventListener("mouseout",function(){
    aaa.style.backgroundColor= "orange"
})


const aaaa=document.getElementById("boxx");
aaaa.addEventListener("mouseover",function(){
    aaaa.style.backgroundColor = "blue"
})
aaaa.addEventListener("mouseout",function(){
    aaaa.style.backgroundColor= "black"
})

/////////////////////////////////////////////////
//-------------------VS-----------------------//
///////////////////////////////////////////////

const bbb=document.getElementById("box2");
bbb.addEventListener("mouseenter",function(){
    bbb.style.backgroundColor = "pink"
})
bbb.addEventListener("mouseleave",function(){
    bbb.style.backgroundColor= "orange"
})


const bbbb=document.getElementById("boxx2");

bbbb.addEventListener("mouseenter",function(){
    let randomColor = getRandomColor();
    bbbb.style.backgroundColor = randomColor
})
bbbb.addEventListener("mouseleave",function(){
    let randomColor = getRandomColor();
    bbbb.style.backgroundColor= randomColor
})