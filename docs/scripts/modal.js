function showImage (e){
    e.preventDefault();
    let imgUrl = e.target.childNodes[1].childNodes[0].src;
    let modal = document.getElementsByClassName('modal')[0];
    let modalUrl = document.getElementsByClassName('inner')[0].childNodes[1].childNodes[0];
    modalUrl.src = imgUrl;
    modal.style.display = "flex";  
}

function hideImage (e){
    let modal = document.getElementsByClassName('modal')[0];
    modal.style.display = "none";
}