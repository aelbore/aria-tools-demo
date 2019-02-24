import '../../../src/lit-element/hello-name'

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
    expect(element).toBeDefined()
  })

  it('should have shadowRoot.', () => {
    expect(element.shadowRoot).toBeDefined()
  })

  it('should not have attribute [name]', () => {
    expect(element.hasAttribute('name')).toBeFalsy()
  })

  it('should initialize attribute and property.', () => {
    document.body.removeChild(element)

    element = createElement()

    expect(element.hasAttribute('name')).toBeTruthy()
    expect(element.getAttribute('name')).toEqual('Jane')
    expect(element.name).toEqual('Jane')
  })

  it('should set attribute using setAttribute.', async function() {
    document.body.removeChild(element)

    element = createElement()
    element.setAttribute('name', 'Maria')
    await element.requestUpdate()

    expect(element.hasAttribute('name')).toBeTruthy()
    expect(element.getAttribute('name')).toEqual('Maria')
    expect(element.name).toEqual('Maria')
  })

  it('should set attribute using set property.', async function() {
    document.body.removeChild(element)

    const template = document.createElement('template')
    template.innerHTML = `<${elementName} name="Jane"></${elementName}>`
    document.body.appendChild(template.content.cloneNode(true))

    element = document.body.querySelector(elementName)
    element.name = 'Maria'
    await element.requestUpdate()
   
    expect(element.hasAttribute('name')).toBeTruthy()
    expect(element.getAttribute('name')).toEqual('Maria')
    expect(element.name).toEqual('Maria')
  })

  it('should rerender when attribute changed.', async function() {
    document.body.removeChild(element)

    element = createElement()
    element.name = 'Maria'
    await element.requestUpdate()
    
    expect(element.shadowRoot.innerHTML.replace(/<!---->/g, ''))
      .toEqual(`<h1>Hello Maria</h1>`)
  })

})