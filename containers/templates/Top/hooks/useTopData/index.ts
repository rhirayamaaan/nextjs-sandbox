import { useTopService } from '../../../../../services/templates/hooks/useTopService'

export const useTopData = ({ data }: ReturnType<typeof useTopService>) => {
  const members =
    data?.users
      ?.filter(
        <T>(item: T): item is NonNullable<T> => typeof item !== 'undefined'
      )
      .map(({ id, username }) => ({
        id,
        username,
      })) ?? []

  const photos =
    data?.photos
      ?.filter(
        <T>(item: T): item is NonNullable<T> => typeof item !== 'undefined'
      )
      .map(({ id, title, url, thumbnailUrl }) => ({
        id,
        title,
        url,
        thumbnailUrl,
      })) ?? []

  return {
    members,
    photos,
  }
}
