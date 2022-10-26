let button = document.getElementById("top")
button.onclick = () => toTop()
window.onscroll = function() {scrolling()}

function scrolling() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button.style.display = 'block'
  } else {
    button.style.display = 'none'
  }
}

function toTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
}