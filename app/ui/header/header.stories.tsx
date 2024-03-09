import type { Meta, StoryObj } from '@storybook/react';

import { Header } from '.';
import ThemeProvider from '@/app/contexts/theme.context';

const meta = {
  title: 'Component/Header',
  component: Header,
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
    type: {
      options: ['none', 'html', 'css', 'js', 'accessibility'],
      control: 'select'
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    )
  ],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const None: Story = {
  args: {
    type: 'none',
  },
};

export const HTML: Story = {
  args: {
    type: 'html',
  },
};

export const CSS: Story = {
  args: {
    type: 'css',
  },
};

export const JavaScript: Story = {
  args: {
    type: 'js',
  },
};

export const Accessibility: Story = {
  args: {
    type: 'accessibility',
  },
};           
