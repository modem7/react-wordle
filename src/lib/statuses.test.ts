import { getGuessStatuses } from './statuses'

const mockSolutionGetter = jest.fn()

beforeEach(() => {
  jest.mock('./words', () => ({
    ...jest.requireActual('./words'),
    get solution() {
      return mockSolutionGetter()
    },
  }))
})

describe('getGuessStatuses', () => {
  test('guess statuses', () => {
    expect(getGuessStatuses('ABCDE', 'EDCBA')).toEqual([
      'present',
      'present',
      'correct',
      'present',
      'present',
    ])
    expect(getGuessStatuses('ABCDE', 'VWXYZ')).toEqual([
      'absent',
      'absent',
      'absent',
      'absent',
      'absent',
    ])
    expect(getGuessStatuses('ABCDE', 'ABCDE')).toEqual([
      'correct',
      'correct',
      'correct',
      'correct',
      'correct',
    ])
  })
})
