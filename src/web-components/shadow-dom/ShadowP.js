export class ShadowP extends HTMLElement {

  connectedCallback() {
    this.shadow = this.attachShadow({mode: 'open'});
    this.shadow.innerHTML = `<p>Shadow Paragraph by ${this.getAttribute('name')}</p>`;
  }

}

customElements.define('shadow-p', ShadowP);