import './style.css'
import logoImage from './assets/Logo.jpeg'
import profileImage from './assets/FotoPerfil.jpeg'
import oabImage from './assets/fotoOAB.jpeg'

const imageMap = {
  logo: logoImage,
  profile: profileImage,
  oab: oabImage,
}

document.querySelectorAll('[data-img]').forEach((element) => {
  const key = element.getAttribute('data-img')
  if (!key) return
  const src = imageMap[key]
  if (src) {
    element.setAttribute('src', src)
  }
})

const currentYear = document.querySelector('[data-year]')
if (currentYear) {
  currentYear.textContent = String(new Date().getFullYear())
}
