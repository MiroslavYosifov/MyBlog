function showCardContent (e) {
    let currentCard = e.target.parentNode.parentNode;
    let currentCardContent = e.target.parentNode.parentNode.childNodes[3];
    console.log(currentCard.className);
    if (currentCard.className.trim() === "space-card-container"){
        console.log('working');
        
    }
    let isHidden = currentCardContent.style.display;
    console.log(isHidden);
    
    if(isHidden === "block" && currentCard.className.trim() === "space-card-container portrait checked"){
        currentCardContent.style.display = "none";
        currentCard.className = "space-card-container"
    }else if(currentCard.className.trim() === "space-card-container"){
        currentCardContent.style.display = "block"
        currentCard.className = "space-card-container portrait checked"
    }
}