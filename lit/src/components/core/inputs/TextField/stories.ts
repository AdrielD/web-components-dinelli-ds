import type { StoryObj } from '@storybook/web-components';
import './index.ts';

const meta = {
  title: 'Core Components/Inputs/TextField',
  tags: ['autodocs'],
  render: (args: any) => {
    return `
      <ds-textfield />
    `;
  },
  argTypes: {
  },
};

export default meta;
type Story = StoryObj;

export const TextField: Story = {
  args: {},
};
