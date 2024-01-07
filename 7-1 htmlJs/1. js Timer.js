const clock = document.getElementById("clock");
setInterval(()=>{
    console.log(new Date().getHours() , ":",new Date().getMinutes() , ":", new Date().getSeconds())
},[3000])