import type { StoryObj } from '@storybook/web-components';
import { buttonVariants } from './index.ts';

const meta = {
  title: 'Core Components/Buttons/Button',
  tags: ['autodocs'],
  render: (args: any) => {
    return `
      <ds-button
        ${args.disabled ? 'disabled' : ''}
        variant=${args.variant}
      >
        Ahoy!
      </ds-button>
    `;
  },
  argTypes: {
    variant: { control: 'select', options: buttonVariants },
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
