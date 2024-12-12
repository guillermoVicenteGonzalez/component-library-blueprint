import type { Meta, StoryObj } from '@storybook/react'
// import { expect } from '@storybook/jest'
// import { within } from '@storybook/testing-library'
import { Test } from './test'

const meta: Meta<typeof Test> = {
    title: 'Test',
    component: Test,
    argTypes: {},
}

export default meta
type Story = StoryObj<typeof Test>

export const Default: Story = {
    args: {},
    // async play({ canvasElement }) {
    //     const canvas = within(canvasElement)
    //     const container = canvas.getByTestId('test')

    //     void expect(container).toBeTruthy()
    // },
}