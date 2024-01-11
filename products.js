const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible')
      observer.unobserve(entry.target)
    }
  })
})

const fadeIns = document.querySelectorAll('.fade-in')
fadeIns.forEach(fadeIn => {
  observer.observe(fadeIn)
})