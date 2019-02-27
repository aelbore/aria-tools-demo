import '../../../src/skatejs/hello-name-lit-html'

import { expect } from 'chai'

const elementName = 'skate-hello-name-lit-html'

describe('SkateHelloNameLitHtml', () => {
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
    expect(element.hasAttribute('name')).to.be.false
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

  it('should set attribute using set property.', async () => {
    document.body.removeChild(element)

    await new Promise((resolve) => {
      element = createElement()
      element.name = "Maria"
      resolve(element)
    })
    .then((element: any) => {
      expect(element.hasAttribute('name')).to.true
      expect(element.name).to.equal('Maria')
      expect(element.getAttribute('name')).to.equal('Maria')
    })
  })

  it('should rerender when property changed.', async () => {
    document.body.removeChild(element)

    await new Promise(resolve => {
      element = createElement()
      element.name = 'Maria'
      resolve(element)
    })
    .then((element: any) => {
      const expected = element.shadowRoot.innerHTML
      .replace('\n', '')
      .replace(/<!---->/gm, '')
      .trim()
      
      expect(expected).to.equal(`<h1>Hello Maria</h1>`)
    })
  })

})