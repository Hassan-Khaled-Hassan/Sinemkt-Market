let navbar = document.querySelector(".navbar"),
  nemos = document.querySelector("#scroll-Top .return-to-top");
nemos.onclick  = function(){
  document.documentElement.scrollTop=0;
  document.body.scrollTop=0
}
window.onload=function(){
    if (this.scrollY > 100) {
      navbar.classList.add("show");
    } 
    else {
      navbar.classList.remove("show");
    }
}

window.onscroll=function(){
    if(this.scrollY>600){
      nemos.classList.add("show")
    }
    else if (this.scrollY > 300) {
      navbar.classList.add("show");
    }
    else{
      nemos.classList.remove("show");
      nemos.classList.remove("show");
    }
}


var buttoons = document.querySelectorAll(
  ".navbar .navbar-nav .nav-link"
),
btton=[...buttoons];


buttoons.forEach((link) => {
  link.addEventListener("click", function () {
    for (let i = 0; i < btton.length; i++) {
      btton[i].classList.remove("active");
    }
    link.classList.add("active");
  });
});
// =====================================
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");
    if(window.scrollY < 500){
      btton[0].classList.add("active");
    }
    else if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      for (let i = 0; i < btton.length; i++) {
        btton[i].classList.remove("active");
      }
      document
        .querySelector(".navbar .navbar-nav .nav-link[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".navbar .navbar-nav .nav-link[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}
window.addEventListener("scroll", scrollActive);

// ========================================
var copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logos").appendChild(copy);
