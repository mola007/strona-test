import "../styles/styles.css"
import Preloader from './modules/Preloader'
import Menu from './modules/Menu'


new Preloader()
new Menu()
let modalGallery

document.querySelectorAll(".gallery__img").forEach(el => {
    el.addEventListener("click", (e) => {   
      if(typeof modalGallery == "undefined") {
       
        import(/*webpackChunkName: "modal"*/ "./modules/ModalGallery").then( x => {
          console.log(x)
            modalGallery = new x.default()
            setTimeout(() => modalGallery.openTheModal(e), 20)
        }).catch(() => console.log('not working'))
      } else{
        modalGallery.openTheModal(e)
      }
    })
})


/*const modalGallery  = new ModalGallery()*/

/*import OwlSlider from './modules/OwlSlider';






const owlSlider  = new OwlSlider();


*/


if(module.hot){
    module.hot.accept();
}

