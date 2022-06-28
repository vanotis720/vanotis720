// LOADER
document.getElementById('app').classList.add("none");

function showContent() {
    document.querySelector(".container-loader").classList.add("hidden");
    document.getElementById('app').classList.remove("none");
}
setTimeout(showContent, 3000);

/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}

// tESTIMONIAL GALLERY
 //Portfolio Gallery

 const filterBtn = document.querySelector("#filterBtn").children;
 const item = document.querySelector(".gallery").children;

 for (let i = 0; i < filterBtn.length; i++) {
     filterBtn[i].addEventListener("click", function() {
         for (let j = 0; j < filterBtn.length; j++) {
             filterBtn[j].classList.remove("active");
         }
         this.classList.add("active");
         const target = this.getAttribute("data-target");
         for (let k = 0; k < item.length; k++) {
             item[k].style.display = "none";
             if (target == item[k].getAttribute("data-id")) {
                 item[k].style.display = "block";
             }
             if (target == "all") {
                 item[k].style.display = "block";
             }
         }
     });
 }

 const closeLightbox = document.querySelector(".close-lightbox");
 const lightbox = document.querySelector(".lightbox");
 const lightboxImg = lightbox.querySelector("img");

 lightbox.addEventListener("click", function() {
     if (event.target != lightboxImg) {
         lightbox.classList.remove("show");
         lightbox.classList.add("hide");
     }
 });

 closeLightbox.addEventListener("click", function() {
     lightbox.classList.remove("show");
     lightbox.classList.add("hide");
 });

 const gallery = document.querySelector(".gallery");

 const galleryItem = document.querySelectorAll(".item");

 galleryItem.forEach(function(element) {
     element.querySelector(".bx-plus").addEventListener("click", function() {
         lightbox.classList.remove("hide");
         lightbox.classList.add("show");
         lightboxImg.src = element.querySelector("img").getAttribute("src");
     });
 });
