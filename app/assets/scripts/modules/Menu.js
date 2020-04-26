import $ from 'jquery';

class Menu{
    constructor(){
        this.menuContent = document.querySelectorAll('.menu__content');
        this.menuTab = document.querySelectorAll('.menu__tab-btn'); 

        this.showContent();
    }

    showContent(){
        let that = this, i, j, k;
        for(i = 0; i < this.menuTab.length; i++){
            this.menuTab[i].addEventListener('click', function(e){

                e.preventDefault();

                for(j = 0; j < that.menuTab.length; j++){
                    that.menuTab[j].classList.remove('menu__tab-btn--current');
                }

                this.classList.add('menu__tab-btn--current');

                for(k = 0; k < that.menuContent.length; k++){
                    that.menuContent[k].style.display = "none";
                    that.menuContent[k].style.opacity = 0;
                }
                
                let currentContent =  this.getAttribute('data-content'); 
                let currentEl =  document.getElementById(currentContent);

                currentEl.style.display = "block";

                setTimeout(()=>currentEl.style.opacity = 1, 50);
            });
        }
    }
}
export default Menu;