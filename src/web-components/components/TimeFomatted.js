export class TimeFormatted extends HTMLElement {
  
  render() {
    const date = new Date(this.getAttribute('datetime') || Date.now());
    this.innerHTML = new Intl.DateTimeFormat('default', {
      year: this.getAttribute('year') || undefined,
      month: this.getAttribute('month') || undefined,
      day: this.getAttribute('day') || undefined,
      hour: this.getAttribute('hour') || undefined,
      minute: this.getAttribute('minute') || undefined,
      second: this.getAttribute('second') || undefined,
      timeZoneName: this.getAttribute('time-zone-name') || undefined
    }).format(date);
  }

  connectedCallback() {
    if(!this.rendered) {
      this.render();
      this.rendered = true
    }
  }

  static get observedAttributes() {
    return ['datetime']
  }

  attributeChangedCallback() {
    this.render();
  }


}

customElements.define('time-formatted', TimeFormatted);