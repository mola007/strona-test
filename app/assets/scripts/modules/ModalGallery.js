import $ from 'jquery';

class ModalGallery{
    constructor(){

      this.modal = document.querySelector('.modal');
      this.thumbnailsPar = document.querySelector('.gallery__grid');
      this.thumbnailsArr = Array.from(this.thumbnailsPar.children);
      //this.thumbnailsArr = document.querySelectorAll('.gallery__img');
      this.modalImgPar = document.querySelector('.modal__img-wrapper');
      this.modalImgArr = Array.from(this.modalImgPar.children);
      this.next = document.querySelector('.modal__btn--next');
      this.prev = document.querySelector('.modal__btn--prev');
      this.currentImg;
      this.close = document.querySelector('.modal__close');

        this.openModal();
        this.nextSlide();
        this.prevSlide();
        this.closeModal();   
    }

    openModal(){
    
      let that = this;

      this.thumbnailsArr.forEach(img => img.addEventListener('click', function(e){

        //that.modal.classList.add("modal--is-visible");
        that.modal.style.display = "block";

        setTimeout(()=>that.modal.classList.add('modal--is-visible'), 50);

        document.body.classList.add('body-no-scroll');

         

          that.modalImgArr.forEach(modalImg => {

            modalImg.src = modalImg.dataset.src;

            if(e.target.src == modalImg.src)modalImg.classList.add('modal__img--current');
        
          });
        }));  
      }

        nextSlide(){
          this.next.addEventListener('click', ()=>{
            this.current = document.querySelector('.modal__img--current');
            this.current.classList.remove('modal__img--current');

            if(this.current.nextElementSibling){
              this.current.nextElementSibling.classList.add('modal__img--current');
              }else{
                this.modalImgArr[0].classList.add('modal__img--current');    
              }
          })
        }

        prevSlide(){
          this.prev.addEventListener('click', ()=>{
            this.current = document.querySelector('.modal__img--current');
            this.current.classList.remove('modal__img--current');

            if(this.current.previousElementSibling){
              this.current.previousElementSibling.classList.add('modal__img--current');
              }else{
              this.modalImgArr[this.modalImgArr.length - 1].classList.add('modal__img--current');  
              }
          })
         
        }

      closeModal(){
        this.close.addEventListener('click', ()=>{
            this.modal.style.display = "none";
            this.modal.classList.remove("modal--is-visible");
            document.body.classList.remove('body-no-scroll');
            this.current = document.querySelector('.modal__img--current');
            this.current.classList.remove('modal__img--current');     
        });
    };

   
}

export default ModalGallery;
