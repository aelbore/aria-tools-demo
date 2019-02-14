
class HelloName extends HTMLElement {

  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  static get observeAttributes() {
    return [ 'name' ]
  }

  attiributeChangeCallback(name, oldValue, newValue) {
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
    for (const prop of (this.constructor as any).observeAttributes) {
      if (this.hasAttribute(prop)) {
        this[prop] = this.getAttribute(prop)
      }
    }
    this.render()
  }

  render() {
    const template = document.createElement('template')
    template.innerHTML = `<h1>Hello ${this.name}</h1>`
    this.shadowRoot.appendChild(document.importNode(template.content, true))
  }

}

customElements.define('hello-name', HelloName)