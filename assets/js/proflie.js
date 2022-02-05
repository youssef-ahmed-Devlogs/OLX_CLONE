// Fun Variables Tab Ads
tabLink = ()=>{
// variables tab Ads
let li = document.querySelectorAll(".User-Ads li");
let liArray = Array.from(li);
let tab = document.querySelectorAll(".tabs > div");
let tabArray = Array.from(tab);
// fun tab Ads


  liArray.forEach((el) => {
    el.addEventListener("click", function (e)  {
      liArray.forEach((el) => {
        el.classList.remove("active");
      });
      e.currentTarget.classList.add("active");
      tabArray.forEach((div) => {
        div.style.display = "none";
      });
     document.querySelector(e.currentTarget.dataset.tabs).style.display = "block";
        
    });
  });



}
tabLink();
