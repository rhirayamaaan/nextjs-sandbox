type ServiceDefaultReturnType<DataType = unknown> = {
  data?: DataType
  isLoading: boolean
  errors?: (Error | null)[]
}

export type ServiceHookType<DataType> = () => ServiceDefaultReturnType<DataType>
