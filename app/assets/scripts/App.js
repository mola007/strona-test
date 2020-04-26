import "../styles/styles.css";
import Preloader from './modules/Preloader';
import Menu from './modules/Menu';
import ModalGallery from './modules/ModalGallery';

const preloader  = new Preloader();
const menu  = new Menu();
const modalGallery  = new ModalGallery();

/*import OwlSlider from './modules/OwlSlider';





const owlSlider  = new OwlSlider();


*/

if(module.hot){
    module.hot.accept();
}

