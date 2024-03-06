import type { Meta, StoryObj } from '@storybook/react';

import ThemeButton from '.';
import { Theme } from '../../types/theme';

const meta = {
  title: 'components/ThemeButton',
  component: ThemeButton,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'light', value: '#ABC1E1' },
        { name: 'dark', value: '#313E51' }
      ],
    }
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ThemeButton>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const LightMode: Story = {
  args: {
    theme: Theme.LIGHT,
    onClick: () => { }
  },
};

export const DarkMode: Story = {
  args: {
    theme: Theme.DARK,
    onClick: () => { console.log('hi') }
  },
};
