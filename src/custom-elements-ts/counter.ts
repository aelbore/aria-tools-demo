import { CustomElement, Prop, Watch } from 'custom-elements-ts'

@CustomElement({
  tag: 'custom-elements-ts-counter',
  template: `
    <button id="count"></button>
  `,
  style: `
    :host { display: inline-block; }
    :host button {
      width: 50px;
      height: 50px;
      color: white;
      background-color: #000;
      border: 0;
      border-radius: 5px;
      font-size: 20px;
      outline: none;
      cursor: pointer;
    }    
  `
})
export class CustomElementCounter extends HTMLElement {

  @Prop() count;

  @Watch('count')
  onPropertyChangedCount(value) {
    
  }

}