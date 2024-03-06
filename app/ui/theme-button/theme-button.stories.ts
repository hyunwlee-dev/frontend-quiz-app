import type { Meta, StoryObj } from '@storybook/react';

import { ThemeButton } from '.';
import { Theme } from '../../types/theme';

const meta = {
  title: 'Componene/ThemeButton',
  component: ThemeButton,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'light', value: '#ABC1E1' },
        { name: 'dark', value: '#313E51' }
      ],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    theme: {
      options: [Theme[Theme.LIGHT], Theme[Theme.DARK]],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof ThemeButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightMode: Story = {
  args: {
    theme: Theme[Theme.LIGHT]
  },
};

export const DarkMode: Story = {
  args: {
    theme: Theme[Theme.DARK]
  },
};

