function maxGifts(houses) {
  const n = houses.length;
	const dp = new Array(n).fill(0);
	dp[0] = houses[0];
	dp[1] = Math.max(houses[0], houses[1]);

  let i = 2;
  for(const house of houses) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + houses[i]);

  }


  const set = [
      0,
      houses[0],
      dp[n-1]
    ]
    return set[+(n>0) +(n>1) ]
}

console.log(maxGifts([2, 4, 2])); // 4 (4)
console.log(maxGifts([5, 1, 1, 5])); // 10 (5 + 5)
console.log(maxGifts([4, 1, 1, 4, 2, 1])); // 9 (4 + 4 + 1)
console.log(maxGifts([1, 3, 1, 3, 100])); // 103 (3 + 100)
