(function (){
    document.querySelector("html").style.filter = "invert(1) hue-rotate(180deg)";

    let media = document.querySelectorAll("imag, picture, video");
    
    media.forEach((mediaItem)=>{
        mediaItem.style.filter = 'invert(1), hue_rotate(180deg)';
    
})

})();           