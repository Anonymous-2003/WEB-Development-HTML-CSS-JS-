(function (){
    document.querySelector("html").style.filter = "invert(0) hue-rotate(0deg)";

    let media = document.querySelectorAll("imag, picture, video");
    
    media.forEach((mediaItem)=>{
        mediaItem.style.filter = 'invert(0), hue_rotate(0deg)';
    
})

})();