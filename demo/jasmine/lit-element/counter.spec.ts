import '../../../src/lit-element/counter'

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
    expect(element).toBeDefined()
  })

  it('should have shadowRoot.', () => {
    expect(element.shadowRoot).toBeDefined()
  })  

  it('should not initialize property.', () => {
    expect(element.count).toBeUndefined()
  })

  it('should not have attribute [count]', () => {
    expect(element.hasAttribute('count')).toBeFalsy()
  })

  it('should initialize attribute and property.', () => {
    document.body.removeChild(element)

    element = createElement()

    expect(element.hasAttribute('count')).toBeTruthy()
    expect(element.getAttribute('count')).toEqual('1')
    expect(element.count).toEqual(1)
  })

  it('should increment count when button click.', async function() {
    document.body.removeChild(element)

    element = await createElement()
    element.shadowRoot.querySelector('button').click()

    expect(element.count).toEqual(2)
  })

})