'mode strict'


const scrollingArrow = document.getElementById('scroller')
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  if (slideIndex > slides.length) { slideIndex = 1 }
  
  // Put all pictures on display none at the start
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  
  setTimeout(() => {
  showSlides(slideIndex++)
  }, 2000)
}



scrolling = () =>{
  window.scroll({
    top:0,
    left:0,
    behavior: 'smooth'
  })
}


scrollingArrow.addEventListener('click', e =>{
  e.preventDefault()
  scrolling()
})

if (window.scroll) {
  
}

