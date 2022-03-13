import { ComponentStory } from '@storybook/react'
import { Top } from '.'

export default {
  title: 'templates/Top',
  component: Top,
}

const Template: ComponentStory<typeof Top> = (props) => <Top {...props} />

export const Default = Template.bind({})

Default.args = {
  members: [
    {
      id: 1,
      username: 'username',
    },
  ],
  photos: [
    {
      id: 1,
      url: 'https://www.yahoo.co.jp',
      thumbnailUrl: 'https://dummyimage.com/300x300',
      title: 'title',
    },
  ],
}
