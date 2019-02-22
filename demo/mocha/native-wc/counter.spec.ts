import '../../../src/native-wc/counter'

import { expect } from 'chai'

describe('Native-WC-Counter <native-wc-counter></native-wc-counter>', () => {
  let element, elementName = 'native-wc-counter'

  const createElement = () => {
    const template = document.createElement('template')
    template.innerHTML = `
      <${elementName} count="1"></${elementName}>
    `
    document.body.appendChild(template.content.cloneNode(true))
    return document.querySelector(elementName)
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

  it('should not initialize property.', () => {
    expect(element.count).to.be.null
  })

  it('should not have attribute [count]', () => {
    expect(element.hasAttribute('count')).to.false
  })

  it('should initialize attribute and property.', () => {
    document.body.removeChild(element)

    element = createElement()

    expect(element.hasAttribute('count')).to.true
    expect(element.getAttribute('count')).to.equal('1')
    expect(element.count).to.equal("1")
  })

  it('should set attribute using setAttribute.', () => {
    document.body.removeChild(element)

    element = createElement()
    element.setAttribute('count', '1')

    expect(element.hasAttribute('count')).to.be.true
    expect(element.getAttribute('count')).to.equal('1')
    expect(element.count).to.equal('1')
  })

  it('should set attribute using set property.', () => {
    document.body.removeChild(element)

    element = createElement()
    element.count = "1"

    expect(element.hasAttribute('count')).to.be.true
    expect(element.getAttribute('count')).to.equal('1')
    expect(element.count).to.equal('1')
  })

  it('should increment count when button click.', () => {
    document.body.removeChild(element)

    element = createElement()
    element.click()

    expect(element.count).to.equal('2')
  })

})