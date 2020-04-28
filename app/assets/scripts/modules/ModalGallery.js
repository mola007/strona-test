import $ from 'jquery';

class ModalGallery{
    constructor(){

      this.injectHTML()
      this.modal = document.querySelector('.modal')
      this.closeIcon = document.querySelector('.modal__close')
      this.nextIcon = document.querySelector('.modal__btn--next')
      this.prevIcon = document.querySelector('.modal__btn--prev')
      //nie potrzebuję tego dłużej, całość jest w App.js
      // this.thumbnailsColl = document.querySelectorAll('.gallery__img')
      this.modalImgColl = document.querySelectorAll('.modal__img')
      this.events()  
    }

    keyPressHandler(e){
      if(e.keyCode == 27){
        this.closeTheModal()
      }
    }

    events(){
      //nie potrzebuję tego dłużej, całość jest w App.js
      // this.thumbnailsColl.forEach(el => el.addEventListener("click", e => this.openTheModal(e)))
      this.closeIcon.addEventListener("click", () => this.closeTheModal())
      document.addEventListener("keyup", e => this.keyPressHandler(e))
      this.nextIcon.addEventListener("click", () => this.nextImg())
      this.prevIcon.addEventListener("click", () => this.prevImg())
    }

    openTheModal(e){

       this.modal.style.display = "block"
       setTimeout(()=>this.modal.classList.add('modal--is-visible'), 50)

       e.target.src = e.target.dataset.src

      this.modalImgColl.forEach(modalImg => {

          modalImg.src = modalImg.dataset.src

           if(e.target.src == modalImg.src){
             modalImg.classList.add('modal__img--current')
            }
         })   
    }

    closeTheModal(){

        this.modal.classList.remove("modal--is-visible")
        this.modal.style.display = "none"
          
          // document.body.classList.remove('body-no-scroll');
          this.current = document.querySelector('.modal__img--current')
          this.current.classList.remove('modal__img--current')     
    
    }

    nextImg(){
        this.current = document.querySelector(".modal__img--current")
        this.current.classList.remove("modal__img--current")

        if(this.current.nextElementSibling){
          this.current.nextElementSibling.classList.add('modal__img--current')
          }else{
            this.modalImgColl[0].classList.add('modal__img--current')    
          }
   
    }

    prevImg(){
        this.current = document.querySelector('.modal__img--current')
        this.current.classList.remove('modal__img--current')

        if(this.current.previousElementSibling){
          this.current.previousElementSibling.classList.add('modal__img--current')
          }else{
            this.modalImgColl[this.modalImgColl.length - 1].classList.add('modal__img--current')  
          }
    
    }

    injectHTML(){
      document.body.insertAdjacentHTML('beforeend', `
      <div class = "modal">
        <div class = "modal__img-wrapper">
          <img class = "lazyload modal__img" alt = "goście w pizzeri"
          data-src = "assets/images/gallery-till-small/goscie-w-pizzerii-till-small-hi-dpi.jpg"/>
          <img class = "lazyload modal__img" alt = "pakowanie pizzy"
          data-src = "assets/images/gallery-till-small/pakowanie-pizzy-till-small-hi-dpi.jpg"/>
          <img class = "modal__img" alt = "goscie w pizzerii"
          data-src = "assets/images/gallery-till-small/goscie-w-pizzerii2-till-small-hi-dpi.jpg"/>
          <img class = "lazyload modal__img" alt = "piec w pizzerii"
          data-src = "assets/images/gallery-till-small/piec-w-pizzerii-till-small-hi-dpi.jpg"/>
          <img class = "lazyload modal__img" alt = "pizza"
          data-src = "assets/images/gallery-till-small/pizza-till-small-hi-dpi.jpg"/>
          <img class = "lazyload modal__img" alt = "pizza"
          data-src = "assets/images/gallery-till-small/pizza2-till-small-hi-dpi.jpg"/>
          <img class = "lazyload modal__img" alt = "skladniki na pizze"
          data-src = "assets/images/gallery-till-small/skladniki-na-pizze-till-small-hi-dpi.jpg"/>
          <img class = "lazyload modal__img" alt = "pudełka na pizzę"
          data-src = "assets/images/gallery-till-small/pudelka-na-pizze-till-small-hi-dpi.jpg"/>
          <img class = "lazyload modal__img" alt = "w pizzerii"
          data-src = "assets/images/gallery-till-small/w-pizzerii2-till-small-hi-dpi.jpg"/>
          <img class = "lazyload modal__img" alt = "robienie pizzy"
          data-src = "assets/images/gallery-till-small/robienie-pizzy-till-small-hi-dpi.jpg"/>
          <img class = "lazyload modal__img" alt = "w pizzerii"
          data-src = "assets/images/gallery-till-small/w-pizzerii-till-small-hi-dpi.jpg"/>
          <img class = "lazyload modal__img" alt = "wyrabianie pizzy"
          data-src = "assets/images/gallery-till-small/wyrabianie-pizzy-till-small-hi-dpi.jpg"/>
      </div>
      <span class = "modal__btn modal__btn--next"><i class="fas fa-chevron-right"></i></span>
      <span class = "modal__btn modal__btn--prev"><i class="fas fa-chevron-left"></i></span>
      <span class = "modal__close"><i class="fas fa-times"></i></span>
    </div>
      `)

    }

   

        

     


  

   
}

export default ModalGallery;
