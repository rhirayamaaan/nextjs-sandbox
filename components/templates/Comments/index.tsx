import React from 'react'

type Props = {
  items?: {
    id: number
    name: string
    body: string
  }[]
}

export const Comments: React.VFC<Props> = ({ items }) =>
  items && items.length > 0 ? (
    <div>
      <ul>
        {items.map(({ id, name, body }) => (
          <li key={id}>
            <p>{name}</p>
            <p>{body}</p>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <div>Not Found</div>
  )
