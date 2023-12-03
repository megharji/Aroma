var tl = gsap.timeline()

tl.from(" .circle, .nav >a",{
    x:-50,
    duration: 0.2,
    delay: 0.3,
    opacity: 0,
    stagger: 0.3
})

tl.from(" .heading1>img, .heading1>h1",{
    y:-50,
    duration: 0.3,
    delay: 0.3,
    opacity: 0,
    stagger: 0.3
})

tl.from(" .heading>h2, .heading>button",{
    y:-50,
    duration: 0.3,
    delay: 0.3,
    opacity: 0,
    stagger: 0.3
})


var ordernow =  document.querySelector(".order")
var heading1 =  document.querySelector(".heading1")
var aboutus =  document.querySelector(".pg1")
var head =  document.querySelector(".head")

var check = 0

ordernow.addEventListener("click", function(){
    if(check == 0){
        aboutus.style.top = 0 
        heading1.style.display = "none"
        head.style.display = "none"
        ordernow.innerHTML = "Back"
        ordernow.style.marginTop = "87%"
        ordernow.style.padding = "1%"
        check = 1
    }else{
        aboutus.style.top = "-100%"  
        heading1.style.display = "flex"
        head.style.display = "flex"  
        ordernow.innerHTML = "About Us"
        ordernow.style.marginTop = "5%"

        check = 0
    }
    
})


var pg4beans =  document.querySelector(".pg4beans1")
var pg4head =  document.querySelector(".pg4head")
var pg4button =  document.querySelector(".pg4button")
var pg4para =  document.querySelector(".pg4para")

var check = 0

pg4button.addEventListener("click", function(){
    if(check == 0){
        pg4beans.style.display = "flex" 
        pg4para.style.display = "none"
        pg4head.style.display = "none"
        pg4button.innerHTML = "Back"
        pg4button.style.marginTop = "30%"
        check = 1
    }else{
        pg4beans.style.display = "none" 
        pg4para.style.display = "flex"
        pg4head.style.display = "flex"
        pg4button.innerHTML = "Explore More"
        pg4button.style.marginTop = "0"

        check = 0
    }
    
})