import '../../../src/custom-elements-ts/counter'

const elementName = 'custom-elements-ts-counter'

describe(`CustomElementCounter <${elementName}></${elementName}>`, () => {
  let element;

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
    expect(element).toBeDefined()
  })

  it('should have shadowRoot.', () => {
    expect(element.shadowRoot).toBeDefined()
  })  

  it('should not initialize property.', () => {
    expect(element.count).toBeNull()
  })

  it('should not have attribute [count]', () => {
    expect(element.hasAttribute('count')).toBeFalsy()
  })

  it('should initialize attribute and property.', () => {
    document.body.removeChild(element)

    element = createElement()

    expect(element.hasAttribute('count')).toBeTruthy()
    expect(element.getAttribute('count')).toEqual('1')
    expect(element.count).toEqual("1")
  })


})