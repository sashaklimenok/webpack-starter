import { APP_NAME } from './global/constants';
import './global/styles/style.scss';
import img1 from 'assets/img/avatar.png';
console.log(APP_NAME);

const image = new Image();
image.src = img1;
document.body.append(image);


