export class UserCard extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
    <div>Имя:
      <slot name="username"></slot>
    </div>
    <div>Дата рождения:
      <slot name="birthday"></slot>
    </div>
    <fieldset>
      <legend>Другая информация</legend>
      <slot></slot>
    </fieldset>
    `;
  }
}

customElements.define('user-card', UserCard);
