function movimento(tipo) {

  if(tipo==1) {
    arquivo = "logo.sky.png";
  }
  if (tipo==2) {
    arquivo = "logo.dark.png";
  }
  
document.getElementById("troca").src=arquivo;

}

var swiper = new Swiper(".swiper", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  keyboard: true,
});
  
function scrollToSection(event) {
  event.preventDefault();
  const targetId = this.getAttribute("href").substring(1); // Remove o "#" do href
  const targetElement = document.getElementById(targetId);
  const offsetBottom = targetElement.getBoundingClientRect().top;

  window.scrollTo({
      top: offsetBottom + window.scrollY,
      behavior: "smooth"
  });
}

// Adicione o evento de clique aos links com a classe "scroll"
const scrollLinks = document.querySelectorAll(".scroll");
scrollLinks.forEach(link => {
  link.addEventListener("click", scrollToSection);
});
function moment(tipos, imageId) {
  var foto;

  if (tipos == 1) {
      foto = "inte.dark.png";
  }
  if (tipos == 2) {
      foto = "inte.sky.png";
  }

  document.getElementById(imageId).src = foto;
}

