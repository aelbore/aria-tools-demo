import '../../../src/lit-element/hello-name'

import { expect } from 'chai'

const elementName = 'lit-element-hello-name'

describe(`LitElementHelloName <${elementName}></${elementName}>`, () => {
  let element;

  const createElement = () => {
    const template = document.createElement('template')
    template.innerHTML = `<${elementName} name="Jane"></${elementName}>`
    document.body.appendChild(template.content.cloneNode(true))
  
    return document.body.querySelector(elementName);
  }

  beforeEach(() => {
    element = document.createElement(elementName)
    document.body.appendChild(element)
  })

  afterEach(() => {
    document.body.removeChild(element)
  })

  it('should have element', () => {
    expect(element).not.undefined
  })

  it('should have shadowRoot.', () => {
    expect(element.shadowRoot).not.undefined
  })

  it('should not have attribute [name]', () => {
    expect(element.hasAttribute('name')).to.be.false
  })

  it('should initialize attribute and property.', () => {
    document.body.removeChild(element)

    element = createElement()

    expect(element.hasAttribute('name')).to.be.true
    expect(element.getAttribute('name')).to.equal('Jane')
    expect(element.name).to.equal('Jane')
  })

  it('should set attribute using setAttribute.', async function() {
    document.body.removeChild(element)

    element = createElement()
    element.setAttribute('name', 'Maria')
    await element.requestUpdate()

    expect(element.hasAttribute('name')).to.be.true
    expect(element.getAttribute('name')).to.equal('Maria')
    expect(element.name).to.equal('Maria')
  })

  it('should set attribute using set property.', async function() {
    document.body.removeChild(element)

    const template = document.createElement('template')
    template.innerHTML = `<${elementName} name="Jane"></${elementName}>`
    document.body.appendChild(template.content.cloneNode(true))

    element = document.body.querySelector(elementName)
    element.name = 'Maria'
    await element.requestUpdate()
   
    expect(element.hasAttribute('name')).to.be.true
    expect(element.getAttribute('name')).to.equal('Maria')
    expect(element.name).to.equal('Maria')
  })

  it('should rerender when attribute changed.', async function() {
    document.body.removeChild(element)

    element = createElement()
    element.name = 'Maria'
    await element.requestUpdate()
    
    expect(element.shadowRoot.innerHTML.replace(/<!---->/g, ''))
      .to.equal(`<h1>Hello Maria</h1>`)
  })

})