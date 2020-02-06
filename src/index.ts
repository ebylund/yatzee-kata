export enum Categories {
  ONES,
  TWOS,
  THREES,
  FOURS,
  FIVES,
  SIXES
}

export default (roll: number[], category: Categories) => {
  switch (category) {
    case Categories.ONES:
        return roll
          .filter(it => it === 1)
          .reduce((sum, cur) => sum + cur, 0)

    case Categories.TWOS:
        return roll
          .filter(it => it === 2)
          .reduce((sum, cur) => sum + cur, 0)

    case Categories.THREES:
      return 3

    case Categories.FOURS:
      return 4

    case Categories.FIVES:
      return 5

    case Categories.SIXES:
      return 6

    default:
      break;
  }
}
