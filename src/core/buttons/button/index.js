import template from './template.js';

class DSButton extends HTMLElement {
  VARIANTS = ['primary', 'secondary', 'link'];

  static get observedAttributes() {
    return ['variant'];
  }

  get variant() {
    console.log('get variant');
    return this.getAttribute('variant');
  }

  set variant(value) {
    if (this.VARIANTS.includes(value)) {
      this.setAttribute('variant', value);
    } else {
      this.removeAttribute('variant');
    }
  }

  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(template.content.cloneNode(true));
    this.button = shadow.querySelector('button');
  }

  setStyle() {
    console.log('setStyle');
    this.button.classList = [];
    this.button.classList.add(this.variant);
  }

  render() {
    console.log('render');
    this.setStyle();
  }

  connectedCallback() {
    console.log('connectedCallback');  
  }

  attributeChangedCallback(attribute, oldValue, newValue) {
    console.log('attributeChangedCallback');
    if (attribute === 'variant' && oldValue !== newValue) {
      this.variant = newValue;
    }

    this.render();
  }

  adoptedCallback() {
    console.log('adoptedCallback');  
  }
}

customElements.define('ds-button', DSButton);
