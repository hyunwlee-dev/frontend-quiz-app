import type { Meta, StoryObj } from '@storybook/react';

import { Icon } from '.';

const meta = {
  title: 'Component/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      options: ['img', 'text'],
      control: { type: 'radio' },
    },
    iconName: {
      options: ['accessibility', 'css', 'html', 'js'],
      control: { type: 'select' },
    },
    backgroundColor: {
      control: 'color'
    },
    fontColor: {
      control: 'color'
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AccessibilityIcon: Story = {
  args: {
    type: 'img',
    iconName: 'accessibility'
  },
};

export const CssIcon: Story = {
  args: {
    type: 'img',
    iconName: 'css'
  },
};

export const HtmlIcon: Story = {
  args: {
    type: 'img',
    iconName: 'html'
  },
};

export const JsIcon: Story = {
  args: {
    type: 'img',
    iconName: 'js'
  },
};

export const AIconInactive: Story = {
  args: {
    type: 'text',
    iconName: 'a'
  },
};

export const AIconActive: Story = {
  args: {
    type: 'text',
    iconName: 'a',
    backgroundColor: 'var(--color-primary)',
    fontColor: 'var(--color-white)'
  },
};

export const AIconHover: Story = {
  args: {
    type: 'text',
    iconName: 'a',
    backgroundColor: 'var(--color-light-primary)',
    fontColor: 'var(--color-primary)'

  },
};
