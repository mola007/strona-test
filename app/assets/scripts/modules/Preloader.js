class Preloader{

  constructor(){  

  this.bannerPhotoContainer = document.querySelector('.banner__photo-container');
  this.bannerPhotoWrapper = document.querySelector('.banner__photo-wrapper');
  //this.hideInitially();
  this.addHTML();
  this.loader;

  this.events();   
  }

  hideInitially(){
    this.bannerPhotoWrapper.style.display = "none";
    this.bannerPhotoWrapper.style.opacity = 0;
  }

  events(){       
  window.addEventListener('load', this.hideLoader.bind(this)); 
  }

  hideLoader(){
     
      setTimeout(() => {
          this.loader.style.opacity = 0;
          this.loader.style.display = 'none';

          this.bannerPhotoWrapper.style.display = 'block';
          
          setTimeout(()=>this.bannerPhotoWrapper.style.opacity = 1, 50);
       
          }, 1500); 
  }
 

  addHTML(){
    let preloaderHtml = `
    <div class='preloader__dots'>
      <div class='preloader__dot'></div>
      <div class='preloader__dot'></div>
      <div class='preloader__dot'></div>
      <div class='preloader__dot'></div>
      <div class='preloader__dot'></div>   
    </div>
  `;

    let newElement = document.createElement('div'); 
    newElement.className = "preloader";
    this.bannerPhotoContainer.appendChild(newElement);

    this.loader = document.querySelector('.preloader');

    if(this.loader) this.loader.innerHTML = preloaderHtml;
   
}  

}

export default Preloader;