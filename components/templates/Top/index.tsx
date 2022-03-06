import { Typography } from '@mui/material'
import React from 'react'
import styles from './styles.module.scss'

type Props = {
  members: {
    id: number
    username: string
  }[]
  photos: {
    id: number
    title: string
    url: string
    thumbnailUrl: string
  }[]
}

export const Top: React.VFC<Props> = ({ members, photos }) => (
  <div className={styles.top}>
    {photos.length > 0 ? (
      <div className={styles.top__item}>
        <Typography variant="h2">photos</Typography>
        <ul className={styles.top__photos}>
          {photos.map(({ id, title, url, thumbnailUrl }) => (
            <li key={id} className={styles.top__photo}>
              <a href={url} className={styles.top__photoLink}>
                <div className={styles.top__photoContent}>
                  <div className={styles.top__photoImage}>
                    <img
                      src={thumbnailUrl}
                      alt={title}
                      className={styles.top__photoImageContent}
                    />
                  </div>
                  <div className={styles.top__photoItem}>
                    <p className={styles.top__photoTitle}>{title}</p>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    ) : null}
    {members.length > 0 ? (
      <div className={styles.top__item}>
        <Typography variant="h2">contributors</Typography>
        <ul className={styles.top__contributors}>
          {members.map(({ id, username }) => (
            <li key={id} className={styles.top__contributor}>
              {username}
            </li>
          ))}
        </ul>
      </div>
    ) : null}
  </div>
)
