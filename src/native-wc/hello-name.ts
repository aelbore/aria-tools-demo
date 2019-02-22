class NativeWebComponentHelloName extends HTMLElement {

  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  static get observedAttributes() {
    return [ 'name' ]
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render()
    }
  }

  get name() {
    return this.getAttribute('name')
  }

  set name(value) {
    this.setAttribute('name', value)
  }

  connectedCallback() {
    this.initProps()
    this.render()
  }

  private initProps() {
    const props = (this.constructor as any).observedAttributes
    for (const prop of props) {
      if (this.hasAttribute(prop)) {
        this[prop] = this.getAttribute(prop)
      }
    }
  }

  render() {
    this.shadowRoot.innerHTML = `<h1>Hello ${this.name}</h1>`
  }

}

customElements.define('native-wc-hello-name', NativeWebComponentHelloName)