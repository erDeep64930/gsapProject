




var tl = gsap.timeline()

tl.from(".line h1",{
    y:150,
    stagger:0.2,
    duration:0.8,
    delay:2,
})

tl.from("#line1-part1, .line h2",{
    opacity:0,
    onStart:function(){

        
var h5Timer = document.querySelector("#line1-part1 h5");

var grow = 0;


setInterval(function(){
    if(grow<100){
        grow++;
        h5Timer.innerHTML = grow++;
    }else {
        grow=100;
        h5Timer.innerHTML = grow;
    }


},30)


    }
})

tl.to("#loader",{
    opacity:0,
    duration:0.4,
    delay:4,
})

tl.from("#page1",{
    y:1200,
    opacity:0,
    delay:0.4,
    ease:Power4,
    duration:0.5

})

tl.to("#loader",{
    display:"none",
})

document.addEventListener("mousemove",function(dets){
    gsap.to("#crsr",{
        left:dets.x,
        top:dets.y,
    })
})