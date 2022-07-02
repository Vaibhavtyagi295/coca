
gsap.from("#loop ",{
y:30,
duration:2,
opacity:0,
delay:5
});
gsap.from("button ",{
    y:-30,
    opacity:0,
    duration:3,
    delay:8
   
});
gsap.from("h2 ",{
x:20,
duration:2,
delay:1,
opacity:0
});

var soo = document.querySelector("h2").style.color = "white";

var btn = document.querySelector("button");
btn.addEventListener("click",()=>{
    window.open('https://www.coca-colacompany.com/')
});




