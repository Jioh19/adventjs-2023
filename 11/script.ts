function getIndexsForPalindrome(word: string): number[] {
  let objetivo = word.slice(Math.ceil(word.length / 2)) 
  let inicio = word.slice(0, Math.floor(word.length / 2))
  let result = [];
  console.log(inicio, objetivo); 
  for(let i = 0; i < inicio.length; i++) {
    let x: number;
    if(inicio[i] != objetivo[i]) {
      x = i;
      for (let j = i; j < Math.ceil(word.length / 2); j++){
        if (word[j] == objetivo[i]) {
          result.push([i,j]);
        }
      }
    }
  }
  // for(let i = 0; i < word.length/2; i++) {
  //  if(word[i] != word[word.length - i - 1]) {
  //     return [-1, i];
  //   }
  // }
	return [0, 0];
}

console.log(getIndexsForPalindrome('aaababa'));