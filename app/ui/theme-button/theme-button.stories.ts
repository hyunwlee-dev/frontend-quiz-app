import type { Meta, StoryObj } from '@storybook/react';

import { ThemeButton } from '.';
import { Theme } from '@/app/types/theme';

const meta = {
  title: 'Component/ThemeButton',
  component: ThemeButton,
  parameters: {
    layout: 'centered',
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
    theme: {
      options: [Theme.LIGHT, Theme.DARK],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof ThemeButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightMode: Story = {
  args: {
    theme: Theme.LIGHT
  },
};

export const DarkMode: Story = {
  args: {
    theme: Theme.DARK
  },
};
