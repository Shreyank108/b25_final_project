function everything(){ 
    var timer = document.querySelector("#timer h1")
var timerButton = document.querySelector("#timer button")

var audio=new Audio("./african-savanna.mp3")
var grow  = 0
var int = setInterval(function(){
    if(grow < 90){ 
        grow += Math.floor(Math.random()*20)
        timer.innerHTML = grow+"%"
    } else{
        grow = 100
        timer.innerHTML = grow+"%"
        // console.log("Hey")
        timer.style.transform = "translateY(-100%)"
        timerButton.style.transform = "translateY(-100%)"
        timerButton.style.opacity = "1"


        clearInterval(int)
       
    }
},Math.floor(Math.random()*300))


timerButton.addEventListener("click",function(){
      audio.play()

    gsap.to("#page1",{
        scale:1,
        duration:0.5
    })
    gsap.to("#timer",{
        opacity:0
    })
    gsap.to("#leaves img",{
        scale:1, 
        rotate:"-3deg"
    })
    gsap.to("#logbaag img",{
        opacity:1,
    })
    gsap.to("#quote h5",{
        opacity:1,
    })
    gsap.to("#circo",{
        opacity:1,
    })
    gsap.to("#nav",{ 
        transform:"translateY(0px)"
    })
    gsap.to("body",{ 
        overflow:"visible",
    })
   
})
}
everything();