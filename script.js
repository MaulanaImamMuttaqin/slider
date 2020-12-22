let images = document.querySelectorAll(".slider-container img")
let p = 0;
function change(param){
    if(param > 0){
        p++
    }else{
        p--
    }
    if(p > images.length-1){
        p = 0
    }else if(p<0){
        p = images.length-1
    }
    images.forEach(image => {
        image.style.transform = `translate(-${p}00%,0)`
    })
}

setInterval(()=>{
   change(1)
},2500)