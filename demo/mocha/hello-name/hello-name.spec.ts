import './hello-name'

import { expect } from 'chai'

describe('HelloName', () => {
  let element;

  beforeEach(() => {
    element = document.createElement('hello-name')
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

  it('should initialize attribute and property.', () => {
    document.body.removeChild(element)

    const template = document.createElement('template')
    template.innerHTML = `
      <hello-name name="Jane"></hello-name>
    `
    document.body.appendChild(document.importNode(template.content, true))
    element = document.querySelector('hello-name')

    expect(element.hasAttribute('name')).to.be.true
    expect(element.getAttribute('name')).to.equal('Jane')
    expect(element.name).to.equal('Jane')
  })

})