// change manual slides

function previousSlide () {
    changeSlide(-1);
}

function nextSlide () {
    changeSlide(1);
}

function changeSlide (num) {
    let currentSlide = document.getElementsByClassName('current')[0];
    let slidesCollection = document.getElementsByClassName('slides');
    let indexOfLastSlide = document.getElementsByClassName('slides').length - 1;
    let indexCurrentElement = Array.from(currentSlide.parentNode.children).indexOf(currentSlide);

    if (num < 0) {
        if(indexCurrentElement === 0){
            slidesCollection[indexOfLastSlide].className = "slides current";
            currentSlide.className = "slides";
        }else {
            indexCurrentElement -= 1;
            slidesCollection[indexCurrentElement].className = "slides current";
            currentSlide.className = "slides";
        }
    }else if (num > 0){
        if(indexCurrentElement === indexOfLastSlide){
            slidesCollection[0].className = "slides current";
            currentSlide.className = "slides";
        }else {
            indexCurrentElement += 1;
            slidesCollection[indexCurrentElement].className = "slides current";
            currentSlide.className = "slides";
        }
    } 
}

// change auto slides

function changeSlideAuto(){
    let body = document.getElementsByTagName('body')[0];
    if(body.className.trim(' ') === "page page-about"){
        console.log('HI');
        let currentSlide = document.getElementsByClassName('current')[0];
        let slidesCollection = document.getElementsByClassName('slides');
        let indexOfLastSlide = document.getElementsByClassName('slides').length - 1;
        let indexCurrentElement = Array.from(currentSlide.parentNode.children).indexOf(currentSlide);
        
        if(indexCurrentElement === indexOfLastSlide){
            slidesCollection[0].className = "slides current";
            currentSlide.className = "slides";
        }else {
            indexCurrentElement += 1;
            slidesCollection[indexCurrentElement].className = "slides current";
            currentSlide.className = "slides";
        }
    
        setTimeout(changeSlideAuto, 3500);
    }
}
