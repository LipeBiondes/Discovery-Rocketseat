function toggleMode() {
  const html = document.body
  html.classList.toggle('light')

  const img = document.querySelector('#profile img')

  if (html.classList.contains('light')) {
    img.setAttribute('src', './assets/assets/avatar-light.png')

    img.setAttribute('alt', 'Maykão com oculos de sol')
  } else {
    img.setAttribute('src', './assets/assets/avatar.png')
    img.setAttribute('alt', 'Maykão sem oculos de sol')
  }
}
