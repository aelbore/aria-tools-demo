import '../../../src/lit-element/counter'

import { expect } from 'chai'

const elementName = 'lit-element-counter'

describe(`LitElementCounter <${elementName}></${elementName}>`, () => {
  let element;

  const createElement = () => {
    const template = document.createElement('template')
    template.innerHTML = `<${elementName} count="1"></${elementName}>`
    document.body.appendChild(template.content.cloneNode(true))

    return document.body.querySelector(elementName)
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
    expect(element.count).to.be.undefined
  })

  it('should not have attribute [count]', () => {
    expect(element.hasAttribute('count')).to.be.false
  })

  it('should initialize attribute and property.', () => {
    document.body.removeChild(element)

    element = createElement()

    expect(element.hasAttribute('count')).to.be.true
    expect(element.getAttribute('count')).to.equal('1')
    expect(element.count).to.equal(1)
  })

  it('should increment count when button click.', async function() {
    document.body.removeChild(element)

    element = await createElement()
    element.shadowRoot.querySelector('button').click()

    expect(element.count).to.equal(2)
  })

})