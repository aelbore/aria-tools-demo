import '../../../src/native-wc/hello-name'

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

  it('should set attribute using setAttribute.', () => {
    document.body.removeChild(element)

    element = createElement()
    element.setAttribute('name', 'Maria')

    expect(element.hasAttribute('name')).toBeTruthy()
    expect(element.getAttribute('name')).toEqual('Maria')
    expect(element.name).toEqual('Maria')
  })

  it('should set attribute using set property.', () => {
    document.body.removeChild(element)

    element = createElement()
    element.name = 'Maria'

    expect(element.hasAttribute('name')).toBeTruthy()
    expect(element.getAttribute('name')).toEqual('Maria')
    expect(element.name).toEqual('Maria')
  })

  it('should rerender when attribute changed.', () => {
    document.body.removeChild(element)

    element = createElement()
    element.name = 'Maria'
    
    expect(element.shadowRoot.innerHTML.trim()).toEqual(`<h1>Hello Maria</h1>`)
  })

})