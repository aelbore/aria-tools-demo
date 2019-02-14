import './counter'

describe('Native-WC-Counter', () => {
  let element;

  beforeEach(() => {
    element = document.createElement('native-wc-counter')
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

  it('should not have attribute count', () => {
    expect(element.hasAttribute('count')).toBeFalsy()
  })

  it('should set attribute using property set.', () => {
    document.body.removeChild(element)

    const template = document.createElement('template')
    template.innerHTML = `
      <native-wc-counter count="10"></native-wc-counter>
    `
    document.body.appendChild(document.importNode(template.content, true))
    element = document.querySelector('native-wc-counter')
    element.click()

    expect(element.count).toEqual('11')
  })

  it('should initialize attribute and property.', () => {
    document.body.removeChild(element)

    const template = document.createElement('template')
    template.innerHTML = `
      <native-wc-counter count="10"></native-wc-counter>
    `
    document.body.appendChild(document.importNode(template.content, true))
    element = document.querySelector('native-wc-counter')
    
    expect(element.hasAttribute('count')).toBeTruthy()
    expect(element.getAttribute('count')).toEqual('10')
    expect(element.count).toEqual('10')
  })


})