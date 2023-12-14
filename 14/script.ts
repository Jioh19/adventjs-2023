function maxGifts(houses: number[]) {
  const n = houses.length;
  let max1 = houses[0]
  let max2 = houses[1]

  for(const house of houses.slice(2)) {
    let aux = max2
    max2 = (max2 < max1 + house)?  max1 + house: max2;
    max1 = aux
  }

  const set = [
      0,
      houses[0],
      max2
    ]
    return set[+(n>0) +(n>1) ]
}
console.log(maxGifts([2, 4, 2])); // 4 (4)
console.log(maxGifts([5, 1, 1, 5])); // 10 (5 + 5)
console.log(maxGifts([4, 1, 1, 4, 2, 1])); // 9 (4 + 4 + 1)
console.log(maxGifts([1, 3, 1, 3, 100])); // 103 (3 + 100)
