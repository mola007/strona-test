// import $ from 'jquery'
// import 'owl.carousel/dist/assets/owl.carousel.css'
// import 'owl.carousel'



class OwlSlider{

    constructor(){  

      
        $('.owl-carousel').owlCarousel({
            center: true,      
            loop:true,
            stagePadding: 0,
            slideBy:1,
            margin: 0,
            nav:false,
            dots: false,
            autoplayHoverPause:true,
            autoplay:true,
            autoplayTimeout:3000,
            responsive:{
                0:{
                    items:1
                },
                768:{
                    items:3
                },
                1300:{
                    items:5
                }
            }
        });
    
    }
}

export default OwlSlider;