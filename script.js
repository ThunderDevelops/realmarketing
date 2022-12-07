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

const balle = document.getElementById('balle')
const date = new Date(1669796915857)

setInterval(() => {
  let time = new Date(date.getTime() - new Date().getTime())
  let d = time.getDay()
  let h = time.getHours()
  let m = time.getMinutes()
  let s = time.getSeconds()

  day = d < 10 ? "0" + d : d;
  hour = h < 10 ? "0" + h : h;
  min = m < 10 ? "0" + m : m;
  sec = s < 10 ? "0" + s : s;
  balle.innerHTML = `${day}:${hour}:${min}:${sec}`
}, 1000)