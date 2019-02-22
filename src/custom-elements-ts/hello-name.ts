import { CustomElement, Prop, Watch } from 'custom-elements-ts'

@CustomElement({
  tag: 'custom-elements-ts-hello-name',
  template: `
    <h1>Hello</h1>
  `
})
export class CustomElementHelloName extends HTMLElement {

  @Prop() name;

  @Watch('name')
  onPropertyChangedName(value) {
    this.shadowRoot
      .querySelector('h1')
      .innerHTML = `Hello ${value.new}`
  }

}