import { renderHook } from '@testing-library/react-hooks'
import { useTopService } from '.'

// This is a temporaly test case...
describe('useTopService', () => {
  it('is the nice hook', () => {
    renderHook(() => useTopService())
  })
})
