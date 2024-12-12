import { describe, test, expect } from '@jest/globals'

describe('hello jest', () => {
  test('1 + 1', () => {
    expect(1 + 1).toBe(2)
  })
})
