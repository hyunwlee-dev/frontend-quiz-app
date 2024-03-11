import type { Meta, StoryObj } from '@storybook/react';

import { ProgressBar } from '.';

const meta = {
  title: 'Component/ProgressBar',
  component: ProgressBar,
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'light', value: 'var(--color-light-bluish)' },
        { name: 'dark', value: 'var(--color-dark-navy)' }
      ],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    expireTime: {
      control: { type: 'number' },
    },
  },
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProgressBar1s: Story = {
  args: {
    expireTime: 1000,
  },
};

export const ProgressBar2s: Story = {
  args: {
    expireTime: 2000,
  },
};

export const ProgressBar3s: Story = {
  args: {
    expireTime: 3000,
  },
};

export const ProgressBar4s: Story = {
  args: {
    expireTime: 4000,
  },
};

