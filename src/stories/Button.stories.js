import { Button } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
};

export const Primary = {
  args: {
    type: 'primary',
    label: 'Button',
  },
};

export const Secondary = {
  args: {
    type: 'secondary',
    label: 'Button',
  },
};

export const Text = {
  args: {
    type: 'text',
    label: 'Button',
  },
};
