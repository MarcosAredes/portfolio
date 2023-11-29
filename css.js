

let abrir = document.getElementById('abrir_menu')
let menumobile = document.getElementById('menu_mobile')
let overlay = document.getElementById('overlay_menu')

  abrir.addEventListener('click', ()=>{
    menumobile.classList.add('open_main')
  })

  menumobile.addEventListener('click', ()=>{
    menumobile.classList.remove('open_main')
  })
  
  
  overlay.addEventListener('click', ()=>{
    menumobile.classList.remove('open_main')
  })


  