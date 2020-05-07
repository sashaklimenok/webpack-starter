export class HelloButton extends HTMLButtonElement {
  constructor() {
    super();
    this.addEventListener('click', () => console.log(this.innerHTML));
  }
  connectedCallback() {
    console.log('hello');
  }
}

customElements.define('hello-button', HelloButton, {extends: 'button'});