
class NativeWebComponentCounter extends HTMLElement {

  constructor() {
    super()
    this.attachShadow({ mode: 'open' })

    this.addEventListener('click', this.incrementCount.bind(this))
  }

  static get observeAttributes() {
    return [ 'name' ]
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.render()
  }

  get count() {
    return this.getAttribute('count')
  }

  set count(value) {
    this.setAttribute('count', value)
  }

  connectedCallback() {
    this.initProps()
    this.render()
  }

  incrementCount(e: CustomEvent) {
    this.count = (parseInt(this.count) + 1).toString();
  }

  render() {
    this.shadowRoot
      .innerHTML = `
      <button id="count">${this.count}</button>       
    `
  }

  private initProps() {
    const props = (this.constructor as any).observeAttributes
    for (const prop of props) {
      if (this.hasAttribute(prop)) {
        this[prop] = this.getAttribute(prop)
      }
    }
  }

}

customElements.define('native-wc-counter', NativeWebComponentCounter)