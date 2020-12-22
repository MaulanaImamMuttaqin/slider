let images = document.querySelectorAll(".wrapper img"),
    prev = document.querySelector("#left"),
    next = document.querySelector("#right"),
    slidePosition= 0,
    firtSlide = images[0],
    lastChild = images[images.length] ,
    slideWidth = firtSlide.getBoundingClientRect().width;

// prev.addEventListener("click", function(){shiftSlide(-1)})
// next.addEventListener("click", function(){shiftSlide(1)})


function shiftSlide(dirc){
    if(dirc > 0 ){
        slidePosition = slidePosition + slideWidth

    }
    else{
        slidePosition = slidePosition - slideWidth
    }
    
    images.forEach(image => {
        image.style.right = slidePosition +"px"
    })
    
    console.log(slidePosition)
}