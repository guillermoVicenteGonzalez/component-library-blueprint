import type { Meta, StoryObj } from '@storybook/react'
// import { expect } from '@storybook/jest'
// import { within } from '@storybook/testing-library'
import { Complex } from './complex'

const meta: Meta<typeof Complex> = {
    title: 'Complex',
    component: Complex,
    argTypes: {},
}

export default meta
type Story = StoryObj<typeof Complex>

export const Default: Story = {
    args: {},
    // async play({ canvasElement }) {
    //     const canvas = within(canvasElement)
    //     const container = canvas.getByTestId('complex')

    //     void expect(container).toBeTruthy()
    // },
}