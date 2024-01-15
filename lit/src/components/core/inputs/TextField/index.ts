import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './style.ts';

@customElement('ds-textfield')
class TextField extends LitElement {
  static styles = styles;

  render() {
    return html`
      <input type="text" />
    `;
  }
}

export default TextField;

declare global {
  interface HTMLElementTagNameMap {
    "ds-textfield": TextField;
  }
}
