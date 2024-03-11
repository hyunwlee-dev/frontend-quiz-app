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
      control: 'text'
    },
    state: {
      options: ['inactive', 'active', 'correct', 'incorrect', 'show-answer'],
      control: { type: 'radio' },
    },
    inValid: {
      control: 'boolean'
    }
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryButton: Story = {
  args: {
    textContent: 'Subit Answer',
  },
};

export const PrimaryNotSlectedButton: Story = {
  args: {
    textContent: 'Subit Answer',
    inValid: true
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

export const InactiveAButton: Story = {
  args: {
    variant: 'selection',
    iconName: 'a',
    textContent: '4.5 : 1',
    state: 'inactive'
  },
};

export const ActiveAButton: Story = {
  args: {
    variant: 'selection',
    iconName: 'a',
    textContent: '3 : 1',
    state: 'active'
  },
};

export const CorrectAButton: Story = {
  args: {
    variant: 'selection',
    iconName: 'a',
    textContent: '2.5 : 1',
    state: 'correct'
  },
};

export const IncorrectAButton: Story = {
  args: {
    variant: 'selection',
    iconName: 'a',
    textContent: '5 : 1',
    state: 'incorrect'
  },
};

export const ShowAnswerAButton: Story = {
  args: {
    variant: 'selection',
    iconName: 'a',
    textContent: '5 : 1',
    state: 'show-answer'
  },
};        
