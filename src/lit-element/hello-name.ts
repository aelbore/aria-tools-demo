import { LitElement, html } from 'lit-element'

class LitElementHelloName extends LitElement {

  name: string;

  static get properties() {
    return {
      name: {
        type: String
      }
    }
  }

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      this.setAttribute(propName, this[propName])
    });
  }

  render() {
    return html `<h1>Hello ${this.name}</h1>`
  }

}

customElements.define('lit-element-hello-name', LitElementHelloName)