import type { Meta, StoryObj } from '@storybook/react'
// import { expect } from '@storybook/jest'
// import { within } from '@storybook/testing-library'
import { Simple } from './simple'

const meta: Meta<typeof Simple> = {
    title: 'Simple',
    component: Simple,
    argTypes: {},
}

export default meta
type Story = StoryObj<typeof Simple>

export const Default: Story = {
    args: {},
    // async play({ canvasElement }) {
    //     const canvas = within(canvasElement)
    //     const container = canvas.getByTestId('simple')

    //     void expect(container).toBeTruthy()
    // },
}