import { useCommentsService } from '../../../../../services/templates/hooks/useCommentsService'

export const useCommentsData = ({
  data,
}: ReturnType<typeof useCommentsService>) =>
  data?.comments
    ?.filter(
      <T>(item: T): item is NonNullable<T> => typeof item !== 'undefined'
    )
    .map(({ id, name, body }) => ({
      id,
      name,
      body,
    }))
