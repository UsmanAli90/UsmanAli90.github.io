// Creating responsive icon section

const mobile_nav=document.querySelector(".mobile-navbar-btn");
const headerElem=document.querySelector(".header");

mobile_nav.addEventListener("click", () =>{
  headerElem.classList.toggle("active");
});



// Creating portfolio tabbed section

const p_btns=document.querySelector(".p-btns");
const p_btn=document.querySelectorAll(".b-btn");
const p_img_elem=document.querySelectorAll(".img-overlay");

p_btns.addEventListener("click",(e) =>{
    const p_btn_clicked=e.target;
    console.log(p_btn_clicked);

    p_btn.forEach((curElem)=>{
        curElem.classList.remove("p-btn-active")
    });

    p_btn_clicked.classList.add("p-btn-active")
    const btn_num=p_btn_clicked.dataset.btnNum;
    console.log(btn_num);
    const img_active=document.querySelectorAll(`.p-btn--${btn_num}`);

    p_img_elem.forEach((curElem)=> curElem.classList.add("p-image-not-active"))
    img_active.forEach((curElem)=> curElem.classList.remove("p-image-not-active"))
});


// swiper js code
 new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  autoplay:{
    delay:2500,
  },
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


// Scroll to top
const herosection=document.querySelector(".section-hero");
const footerElem=document.querySelector(".section-footer");

const scrollelement=document.createElement("div");
scrollelement.classList.add("scrollTop-style");
scrollelement.innerHTML=`<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`;
footerElem.after(scrollelement);
const scrollTop=()=>{
  herosection.scrollIntoView({behavior:"smooth"})
}
scrollelement.addEventListener("click",scrollTop);

// Media query using js
const myjsmedia=(widthsize)=>{
  if(widthsize.matchMedia){
    new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30, 
  });
} else{
  new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
   
});
}
};
const widthsize=window.matchMedia("(max-width:780px)");
myjsmedia(widthsize);
widthsize.addEventListener("change",myjsmedia)

