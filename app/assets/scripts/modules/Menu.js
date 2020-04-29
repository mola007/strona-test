import $ from 'jquery';

class Menu{
    constructor(){
        this.menuContent = document.querySelectorAll('.menu__content')
        this.menuTab = document.querySelectorAll('.menu__tab-btn') 

    }

    showContent(e){

        this.menuTab.forEach(btn => btn.classList.remove('menu__tab-btn--current'))
        e.target.classList.add('menu__tab-btn--current')

        this.menuContent.forEach(content => {
            content.style.display = "none"
            content.style.opacity = 0
        })

            let clickedBtn =  e.target.getAttribute('data-content') 
            let currentEl =  document.getElementById(clickedBtn)
           
            currentEl.style.display = "block"
            setTimeout(()=>currentEl.style.opacity = 1, 50)    
    }
}
export default Menu