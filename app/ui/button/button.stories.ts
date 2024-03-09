import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '.';

const meta = {
  title: 'Component/Button',
  component: Button,
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
    variant: {
      options: ['primary', 'selection'],
      control: { type: 'radio' },
    },
    iconName: {
      options: ['accessibility', 'css', 'html', 'js', 'a', 'b', 'c', 'd'],
      control: { type: 'radio' },
    },
    textContent: {
      control: 'string'
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryButton: Story = {
  args: {
    textContent: 'Subit Answer',
  },
};

export const HtmlButton: Story = {
  args: {
    variant: 'selection',
    iconName: 'html'
  },
};

export const CssButton: Story = {
  args: {
    variant: 'selection',
    iconName: 'css'
  },
};

export const JsButton: Story = {
  args: {
    variant: 'selection',
    iconName: 'js'
  },
};

export const AccessibilityButton: Story = {
  args: {
    variant: 'selection',
    iconName: 'accessibility'
  },
};

export const AButton: Story = {
  args: {
    variant: 'selection',
    iconName: 'a',
    textContent: '4.5 : 1'
  },
};

export const BButton: Story = {
  args: {
    variant: 'selection',
    iconName: 'b',
    textContent: '3 : 1'
  },
};

export const CButton: Story = {
  args: {
    variant: 'selection',
    iconName: 'c',
    textContent: '2.5 : 1'
  },
};

export const DButton: Story = {
  args: {
    variant: 'selection',
    iconName: 'd',
    textContent: '5 : 1'
  },
};        
