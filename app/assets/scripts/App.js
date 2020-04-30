import "lazysizes"

import "../styles/styles.css"

import Preloader from './modules/Preloader'


new Preloader()
let modalGallery, menu


/*if(document.querySelector(".owl-carousel")){
  import('./modules/OwlSlider').then(x => {
    new x.default()
  }).catch(() => console.log('modal not found'))
}*/

document.querySelectorAll(".menu__tab-btn").forEach(btn => {
  btn.addEventListener("click", (e) => {  
    e.preventDefault() 
    if(typeof menu == "undefined") {
      import(/*webpackChunkName: "menu"*/ "./modules/Menu").then( x => {
        menu = new x.default()
        setTimeout(() => menu.showContent(e), 20)
    }).catch(() => console.log('not working'))
    } else{
      menu.showContent(e)
    }
  })
})

document.querySelectorAll(".gallery__img").forEach(el => {
    el.addEventListener("click", (e) => {   
      if(typeof modalGallery == "undefined") {
        import(/*webpackChunkName: "modal"*/ "./modules/ModalGallery").then( x => {
            modalGallery = new x.default()
            setTimeout(() => modalGallery.openTheModal(e), 20)
        }).catch(() => console.log('not working'))
      } else{
        modalGallery.openTheModal(e)
      }
    })
})


if(module.hot){
    module.hot.accept()
}

