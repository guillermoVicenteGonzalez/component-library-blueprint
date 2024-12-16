import type { Meta, StoryObj } from '@storybook/react'
// import { expect } from '@storybook/jest'
// import { within } from '@storybook/testing-library'
import { JorgeComponent } from './jorge-component'

const meta: Meta<typeof JorgeComponent> = {
    title: 'JorgeComponent',
    component: JorgeComponent,
    argTypes: {},
}

export default meta
type Story = StoryObj<typeof JorgeComponent>

export const Default: Story = {
    args: {},
    // async play({ canvasElement }) {
    //     const canvas = within(canvasElement)
    //     const container = canvas.getByTestId('jorge-component')

    //     void expect(container).toBeTruthy()
    // },
}