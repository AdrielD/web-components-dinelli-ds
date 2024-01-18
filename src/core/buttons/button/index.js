import template from './template.js';

class DSButton extends HTMLElement {
  VARIANTS = ['primary', 'secondary', 'link'];
  DEFAULT_VARIANT = 'primary';

  static get observedAttributes() {
    return ['variant', 'disabled'];
  }

  get variant() {
    return this.getAttribute('variant');
  }

  set variant(value) {
    if (this.VARIANTS.includes(value)) {
      this.setAttribute('variant', value);
    } else {
      this.setAttribute('variant', this.DEFAULT_VARIANT);
    }
  }

  get disabled() {
    return this.getAttribute('disabled');
  }

  set disabled(_) {
    if (this.hasAttribute('disabled')) {
      this.setAttribute('disabled', true);
    } else {
      this.removeAttribute('disabled');
    }
  }

  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(template.content.cloneNode(true));
    this.button = shadow.querySelector('button');
  }

  setStyle() {
    this.button.classList.remove();
    this.button.classList.add(this.variant);
    this.button.disabled = this.disabled;
  }

  render() {
    this.setStyle();
  }

  connectedCallback() {
    this.variant = this.variant || this.DEFAULT_VARIANT;
  }

  attributeChangedCallback(attribute, oldValue, newValue) {
    if (attribute === 'variant' && oldValue !== newValue) {
      this.variant = newValue;
    }

    if (attribute === 'disabled' && oldValue !== newValue) {
      this.disabled = newValue;
    }

    this.render();
  }
}

customElements.define('ds-button', DSButton);
