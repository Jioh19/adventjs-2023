function optimizeIntervals(intervals) {

  intervals.sort((a, b) => a[0] - b[0]);

  const mergedIntervals = [intervals[0]];

  for (const interval of intervals) {
    const currentInterval = interval;
    const lastMergedInterval = mergedIntervals[mergedIntervals.length - 1];

    if (currentInterval[0] <= lastMergedInterval[1]) {
      lastMergedInterval[1] = Math.max(lastMergedInterval[1], currentInterval[1]);
    } else {
      mergedIntervals.push(currentInterval);
    }
  }

  return mergedIntervals;
}
console.log(
	optimizeIntervals([
		[3, 4000],
		[1, 2],
		[2, 6000],
	])
);
