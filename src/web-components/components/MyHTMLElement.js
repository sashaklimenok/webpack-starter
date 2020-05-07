export class MyHTMLElement extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    console.log('My element connected, Element added to DOM');
  }

  disconnectedCallback() {
    console.log('My Element disconneted, Element was removed from DOM');
  }
  
  static get observedAttributes() {
    return []
  }

  attribeteChangedcallback(name, oldValue, newValue) {
    console.log('Callback will be call when attr will be change');
  }

  adoptedCallback() {
    console.log('callback will be call when element will be move to another document');
  }

}

customElements.define('my-element', MyHTMLElement);