import { Top } from '.'

export const Basic = () => (
  <Top
    members={[
      {
        id: 1,
        username: 'testuser1',
      },
    ]}
    photos={[
      {
        id: 1,
        title: 'testtodo1',
        url: 'xxx',
        thumbnailUrl: 'xxx',
      },
    ]}
  />
)

export default {
  title: 'templates/top',
}
