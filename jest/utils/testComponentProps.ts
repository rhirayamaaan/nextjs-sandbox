const testComponentProps =
  (ComponentMock: jest.Mock) =>
  <T>(tester: (props: T) => void) => {
    ComponentMock.mockImplementation((data: T) => {
      tester(data)
    })
  }

export { testComponentProps }
