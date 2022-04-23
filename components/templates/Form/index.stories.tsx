import { ComponentStory } from '@storybook/react'
import { Form } from '.'

export default {
  title: 'templates/Form',
  component: Form,
}

const Template: ComponentStory<typeof Form> = ({ onSubmit, ...props }) => {
  const withPreventDefault: typeof onSubmit = (event) => {
    event.preventDefault()
    onSubmit(event)
  }

  return <Form onSubmit={withPreventDefault} {...props} />
}

export const Default = Template.bind({})
