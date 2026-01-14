function scrollToContact(){
  document.getElementById("contact").scrollIntoView({behavior:"smooth"});
}

window.addEventListener("scroll",()=>{
  document.querySelectorAll(".card").forEach(card=>{
    if(card.getBoundingClientRect().top < window.innerHeight){
      card.style.opacity="1";
      card.style.transform="translateY(0)";
    }
  })
});
