window.onload =  () => {

    var slides =  document.getElementsByClassName("slide");
    var i = 1;
    function slide() {

        if(i < slides.length && i!=0){
            slides[i].classList.add("active");
            slides[i].classList.remove("slide-inactive");

            slides[i-1].classList.add("slide-inactive");
            slides[i-1].classList.remove("active");

            i++;

        }else if (i == 0){
            slides[i].classList.add("active");
            slides[i].classList.remove("slide-inactive");

            slides[slides.length-1].classList.add("slide-inactive");
            slides[slides.length-1].classList.remove("active");

            i++;
        } else{
            slides[0].classList.add("active");
            slides[0].classList.remove("slide-inactive");

            slides[i-1].classList.add("slide-inactive");
            slides[i-1].classList.remove("active");
            i=0;
        }
        
        
        
        console.log("hehe");
        
    }
    setInterval(function(){ 
        slide();   
    }, 5000);
}