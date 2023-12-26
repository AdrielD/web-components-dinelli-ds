import { html } from 'lit';
import './style.css';

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'link';
  onClick: () => void;
  disabled?: boolean;
  children?: any;
}

const Button = ({
  variant = 'primary',
  onClick,
  disabled = false,
  children
}: ButtonProps) => {
  return html`
    <button
      type="button"
      class=${variant}
      ?disabled=${disabled}
      @click=${!disabled && onClick}
    >
      <slot>${children}</slot>
    </button>
  `;
};

export default Button;
