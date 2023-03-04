function carregar() {
  var hrs = window.document.querySelector('div#hrs')
  var img = window.document.querySelector('#img')
  var data = new Date()
  var hora = data.getHours()
  hrs.innerHTML = `Agora são ${hora} horas.`
  if (hora >=0 && hora < 12) {
    img.src = 'fotomanha.jpg'
    document.body.style.background = '#F7C586'
  } else if (hora >=13 && hora <=18) {
    img.src = 'fototarde.jpg'
    document.body.style.background = '#ECB065'
  } else {
    img.src = 'fotonoite.jpg'
    document.body.style.background ='#BC4C44'
  }
}