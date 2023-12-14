function maxGifts(houses) {
  const n = houses.length;
  let max1 = houses[0]
  let max2 = (houses[0] < houses[1])? houses[1]: houses[0] 

  for(let i = 2; i < houses.length; i++) {
    let aux = max2
    max2 = (max2 < max1 + houses[i])?  max1 + houses[i]: max2;
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
