import type { Meta, StoryObj } from '@storybook/web-components';
import type { ButtonProps } from './index.ts';
import Button from './index.ts';

const meta = {
  title: 'Core Components/Buttons/Button',
  tags: ['autodocs'],
  render: (args) => Button(args),
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'link'] },
    disabled: { control: 'boolean' },
    onClick: { action: 'onClick' },
  },
} satisfies Meta<ButtonProps>;

export default meta;
type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
  args: {
    children: 'Ahoy!',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Ahoy!',
    disabled: true,
  },
};
