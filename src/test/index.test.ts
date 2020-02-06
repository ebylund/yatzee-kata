import { expect } from 'chai'
import calcScore, { Categories } from '../index';
import 'mocha'

describe('Yatzee', () => {
  describe('Upper case categories', () => {
    const testCases = [
      {roll: [1,2,3,4,5], category: Categories.ONES, expected: 1 },
      {roll: [1,2,3,4,5], category: Categories.TWOS, expected: 2 },
      {roll: [1,2,3,4,5], category: Categories.THREES, expected: 3 },
      {roll: [1,2,3,4,5], category: Categories.FOURS, expected: 4 },
      {roll: [1,2,3,4,5], category: Categories.FIVES, expected: 5 },
      {roll: [6,2,3,4,5], category: Categories.SIXES, expected: 6 },
      {roll: [1,1,3,4,5], category: Categories.ONES, expected: 2 },
      {roll: [2,2,3,4,5], category: Categories.TWOS, expected: 4 },
     
    ]

    for (const testCase of testCases) {
      it(`should return ${testCase.expected} from the sum of matching numbers for ${testCase.category + 1}`, () => {
        const score = calcScore(testCase.roll, testCase.category)
        expect(score).to.eq(testCase.expected)
      })
    }

  })
})
