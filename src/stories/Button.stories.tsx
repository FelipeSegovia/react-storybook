import type { Meta, StoryObj } from '@storybook/react'
import Button from '../components/atoms/Button.tsx'
import { ComponentProps } from 'react'
import { fn } from '@storybook/test'

type StoryProps = ComponentProps<typeof Button>

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<StoryProps> = {
  component: Button,
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'select' },
    },
  },
  args: {
    onClick: fn(),
  },
  title: 'Design System/Atoms/Button',
}

export default meta
type Story = StoryObj<StoryProps>

export const Primary: Story = {
  args: {
    children: 'Click me!',
    variant: 'primary',
    size: 'md',
  },
  render: (args) => {
    return <Button {...args} />
  },
}

export const Secondary: Story = {
  args: {
    children: 'Click me!',
    variant: 'secondary',
    size: 'md',
  },
  render: (args) => {
    return <Button {...args} />
  },
}
