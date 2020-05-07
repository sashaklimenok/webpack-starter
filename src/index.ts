import './shared/styles/main.scss';
import { createElement } from './shared';

const root: HTMLDivElement | null = document.querySelector('#root');
const heading: HTMLHeadingElement = document.createElement('h1');
heading.textContent = 'Hello Webpack';
if (root) {
  root.append(heading);
}

const test = createElement('div', {marginTop: '10px'});
console.log(test);
