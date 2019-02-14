import './hello-name'

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
    expect(element).toBeDefined()
  })

  it('should have shadowRoot.', () => {
    expect(element.shadowRoot).toBeDefined()
  })

  it('should initialize attribute and property.', () => {
    document.body.removeChild(element)

    const template = document.createElement('template')
    template.innerHTML = `
      <hello-name name="Jane"></hello-name>
    `
    document.body.appendChild(document.importNode(template.content, true))
    element = document.querySelector('hello-name')

    expect(element.hasAttribute('name')).toBeTruthy()
    expect(element.getAttribute('name')).toEqual('Jane')
    expect(element.name).toEqual('Jane')
  })

  it('should set attribute using property set.', () => {
    document.body.removeChild(element)

    const template = document.createElement('template')
    template.innerHTML = `
      <hello-name name="Jane"></hello-name>
    `
    document.body.appendChild(document.importNode(template.content, true))
    element = document.querySelector('hello-name')
    element.setAttribute('name', 'Maria')

    expect(element.hasAttribute('name')).toBeTruthy()
    expect(element.getAttribute('name')).toEqual('Maria')
  })


})