let images = document.querySelectorAll(".wrapper img"),
    wrapper = document.querySelector(".wrapper"),
    prev = document.querySelector("#left"),
    next = document.querySelector("#right"),
    slideWidth= images[0].getBoundingClientRect().width,
    slidePosition = 0;

prev.addEventListener("click", function(){shiftSlide(-1)})
next.addEventListener("click", function(){shiftSlide(1)})

function shiftSlide(dirc){

    if(dirc > 0 ){
        slidePosition = slidePosition + slideWidth
        if(slidePosition === slideWidth*images.length){
            slidePosition = 0
        }
    }
    else{
        slidePosition = slidePosition - slideWidth
        if(slidePosition < 0 ){
            slidePosition = slideWidth*(images.length-1)
        }
    }
    wrapper.style.right = slidePosition +"px"
}

