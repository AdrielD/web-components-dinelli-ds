import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import primary from './styles/primary';
import secondary from './styles/secondary';
import link from './styles/link';

export const buttonVariants = ['primary', 'secondary', 'link'];
export type ButtonVariant = typeof buttonVariants[number];

@customElement('ds-button')
class Button extends LitElement {
  static styles = [primary, secondary, link];

  @property({ type: Boolean }) disabled: boolean = false;
  @property() variant: ButtonVariant = 'primary';

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
