const testComponentProps = <T>(
  ComponentMock: jest.Mock,
  tester: (props: T) => void
) => {
  ComponentMock.mockImplementation((data: T) => {
    tester(data)
    return 'Mocked Component'
  })
}

export { testComponentProps }
