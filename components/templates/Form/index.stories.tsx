import { ComponentStory } from '@storybook/react'
import { Form } from '.'

export default {
  title: 'templates/Form',
  component: Form,
}

const Template: ComponentStory<typeof Form> = (props) => <Form {...props} />

export const Default = Template.bind({})
