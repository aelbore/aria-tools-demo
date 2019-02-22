class NativeWebComponentCounter extends HTMLElement {

  constructor() {
    super()
    this.attachShadow({ mode: 'open' })

    this.addEventListener('click', this.incrementCount.bind(this))
  }

  static get observedAttributes() {
    return [ 'count' ]
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render()
    }
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

  private initProps() {
    const props = (this.constructor as any).observedAttributes
    for (const prop of props) {
      if (this.hasAttribute(prop)) {
        this[prop] = this.getAttribute(prop)
      }
    }
  }

  render() {
    const template = document.createElement('template')
    template.innerHTML = `
      <style>
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
      </style>
      <button id="count">
        ${this.count}
      </button>`
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }

}

customElements.define('native-wc-counter', NativeWebComponentCounter)