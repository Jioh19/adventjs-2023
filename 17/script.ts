function optimizeIntervals(intervals: number[][]): number[][] {
  intervals.sort((a, b) => a[0]- b[0])
  let result = []
  for (const num of intervals) {
    result.push(num)
  }
  console.log(num)
	return intervals;
}

console.log(
	optimizeIntervals([
		[5, 8],
		[2, 7],
		[3, 4],
	])
);