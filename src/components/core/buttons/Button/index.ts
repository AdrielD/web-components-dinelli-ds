import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './style';

export type ButtonVariant = 'primary' | 'secondary' | 'link';

@customElement('ds-button')
class Button extends LitElement {

  static styles = styles;

  @property({ type: Boolean }) disabled: boolean = false;
  @property() variant: ButtonVariant = 'primary';
  // @property() onClick: Function = () => {};

  render() {
    return html`
      <button class=${this.variant} ?disabled=${this.disabled}>
        <slot></slot>
      </button>
    `;
  }
}

export default Button;

declare global {
  interface HTMLElementTagNameMap {
    "ds-button": Button;
  }
}
