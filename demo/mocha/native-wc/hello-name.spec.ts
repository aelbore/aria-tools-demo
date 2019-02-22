import '../../../src/native-wc/hello-name'

import { expect } from 'chai'

const elementName = 'native-wc-hello-name'

describe(`NativeWebComponentHelloName <${elementName}></${elementName}>`, () => {
  let element;

  const createElement = () => {
    const template = document.createElement('template')
    template.innerHTML = `<${elementName} name="Jane"></${elementName}>`
    document.body.appendChild(template.content.cloneNode(true))
  
    return document.querySelector(elementName);
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
    expect(element.hasAttribute('name')).to.false
  })

  it('should initialize attribute and property.', () => {
    document.body.removeChild(element)

    element = createElement()

    expect(element.hasAttribute('name')).to.be.true
    expect(element.getAttribute('name')).to.equal('Jane')
    expect(element.name).to.equal('Jane')
  })

  it('should set attribute using setAttribute.', () => {
    document.body.removeChild(element)

    element = createElement()
    element.setAttribute('name', 'Maria')

    expect(element.hasAttribute('name')).to.be.true
    expect(element.getAttribute('name')).to.equal('Maria')
    expect(element.name).to.equal('Maria')
  })

  it('should set attribute using set property.', () => {
    document.body.removeChild(element)

    element = createElement()
    element.name = 'Maria'

    expect(element.hasAttribute('name')).to.be.true
    expect(element.getAttribute('name')).to.equal('Maria')
    expect(element.name).to.equal('Maria')
  })

  it('should rerender when attribute changed.', () => {
    document.body.removeChild(element)

    element = createElement()
    element.name = 'Maria'
    
    expect(element.shadowRoot.innerHTML.trim()).to.equal(`<h1>Hello Maria</h1>`)
  })

})