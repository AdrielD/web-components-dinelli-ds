import type { StoryObj } from '@storybook/web-components';
// import type { ButtonProps } from './index.ts';
import './index.ts';

const meta = {
  title: 'Core Components/Buttons/Button',
  tags: ['autodocs'],
  render: (args: any) => {
    return `
      <ds-button
        ${args.disabled ? 'disabled' : ''}
        variant=${args.variant}
        onClick=${args.onClick}
      >
        Ahoy!
      </ds-button>
    `;
  },
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'link'] },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj;

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    disabled: true,
  },
};
