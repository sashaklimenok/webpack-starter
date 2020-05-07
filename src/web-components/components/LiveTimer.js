export class LiveTimer extends HTMLElement {

  render() {
    this.innerHTML = `<time-formatted hour="numeric" minute="numeric" second="numeric">
    </time-formatted>`;
    this.timeFormatted = this.firstElementChild;
  }

  update() {
    this.date = new Date();
    this.timeFormatted.setAttribute("datetime", this.date);
    this.dispatchEvent(new CustomEvent("tick", { detail: this.date }));
  }

  connectedCallback() {
    this.render();
    this.timer = setInterval(() => this.update(), 1e3);
  }

  disconnectedCallback() {
    clearInterval(this.timer);
  }
}

customElements.define("live-timer", LiveTimer);
