import { ComponentStory } from '@storybook/react'
import { Comments } from '.'

export default {
  title: 'templates/Comments',
  component: Comments,
}

const Template: ComponentStory<typeof Comments> = (props) => (
  <Comments {...props} />
)

export const Default = Template.bind({})

Default.args = {
  items: [
    {
      id: 1,
      name: 'username1',
      body: 'body1',
    },
    {
      id: 2,
      name: 'username2',
      body: 'body2',
    },
    {
      id: 3,
      name: 'username3',
      body: 'body3',
    },
  ],
}
