const dt = document.querySelector('.dt')
window.addEventListener('scroll', function () {
  const nt = document.documentElement.scrollTop
  if (nt >= 100) {
    document.querySelector('.top').style.transform = 'translateY(0)'
    dt.style.display = 'block'
  } else {
    dt.style.display = 'none'
    document.querySelector('.top').style.transform = 'translateY(-100px)'
  }
})
dt.addEventListener('click', function () {
  document.documentElement.scrollTop = 0
})
