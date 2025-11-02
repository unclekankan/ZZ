const dt = document.querySelector('.dt')
window.addEventListener('scroll', function () {
  const nt = document.documentElement.scrollTop
  if (nt >= 100) {
    dt.style.display = 'block'
  } else { dt.style.display = 'none' }
})
dt.addEventListener('click', function () {
  document.documentElement.scrollTop = 0
})