import type { Meta, StoryObj } from '@storybook/react';

import { ProgressBar } from '.';
import useTimer from '@/app/hooks/useTimer';
import { useEffect } from 'react';

function Template({ expireTime }: { expireTime: number }) {
  const { isRunning, time, start, stop } = useTimer(expireTime);
  useEffect(() => {
    start();
  }, []);

  useEffect(() => {
    if (!isRunning && time === 0)
      stop();
  }, [isRunning, time]);

  return (
    <ProgressBar
      time={time}
      expireTime={expireTime}
    />
  );
}

const meta = {
  title: 'Component/ProgressBar',
  component: Template,
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
} satisfies Meta<typeof Template>;

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

