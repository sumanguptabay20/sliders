const slide = document.querySelectorAll('.slider')
slide.forEach(slider => {

  slider.addEventListener('click', () => {
    removeactiveclass()
    slider.classList.add('active')
  })
})
function removeactiveclass() {
  slide.forEach(slider => {
    slider.classList.remove('active')
  })
  //  for(let i=0; i<)


}