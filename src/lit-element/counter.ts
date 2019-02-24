import { LitElement, html, css } from 'lit-element'

class LitElementCounter extends LitElement {

  count;

  static get properties() {
    return {
      count: {
        type: Number
      }
    }
  }

  static get styles() {
    return [
      css `
        :host { display: inline-block; }
        :host button {
          width: 50px;
          height: 50px;
          color: white;
          background-color: #000;
          border: 0;
          border-radius: 5px;
          font-size: 20px;
          outline: none;
          cursor: pointer;
        } 
      `
    ]
  }

  incrementCount(e: CustomEvent) {
    this.count = this.count + 1
  }

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      this.setAttribute(propName, this[propName])
    });
  }

  render() {
    return html `
      <button id="count" @click=${this.incrementCount}>
        ${this.count}
      </button>   
    `
  }

}

customElements.define('lit-element-counter', LitElementCounter)