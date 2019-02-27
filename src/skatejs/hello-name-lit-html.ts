import Element, { h } from '@skatejs/element-lit-html'

class SkateHelloNameLitHtml  extends Element {
  name: string
  
  static get props(){
    return {
      name: String
    }
  }

  updated(props) {
    const self = this as any;
    Object.keys(props).forEach(prop => {
      self.setAttribute(prop, this[prop])
    })
  }

  render() {
    return h `
      <h1>Hello ${this.name}</h1>
    `;
  }
}

customElements.define('skate-hello-name-lit-html', SkateHelloNameLitHtml)