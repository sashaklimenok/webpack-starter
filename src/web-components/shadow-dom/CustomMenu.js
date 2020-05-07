export class CustomMenu extends HTMLElement {

  constructor() {
    super();
    this.handleSlotChange = this.handleSlotChange.bind(this);
  }

  handleSlotChange(evt) {
    console.log(evt.target.name);
  }

  connectedCallback() {
    const menuTemplate = document.getElementById('menu-tpl');
    this.attachShadow({mode: 'open'});
    this.shadowRoot.append(menuTemplate.content.cloneNode(true));
    this.shadowRoot.firstElementChild.addEventListener('click', () => {
      const menu = this.shadowRoot.querySelector('.list-group-item');
      menu.hidden = !menu.hidden;
    })
    this.shadowRoot.lastElementChild.addEventListener('slotchange', this.handleSlotChange)
  }

  disconnectedCallback() {
    this.shadowRoot.lastElementChild.removeEventListener('slotchange', this.handleSlotChange);
  }

}

customElements.define('custom-menu', CustomMenu);