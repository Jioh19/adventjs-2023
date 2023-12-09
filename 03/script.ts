function findNaughtyStep(original: string, modified: string) {

  for (let i = 0; i < original.length; i++) {
    if (original[i] == modified[i]) {
      continue;
    }
    return original.length > modified.length ? original[i] : modified[i];
  }
  return (original.length < modified.length) 
  ? modified[modified.length - 1] : "";
  // let j: number = 0;
  // for(const orig of original) {
  //   if(orig == modified[j]) {
  //     j++;
  //     continue;
  //   }
  //   return original.length>modified.length?orig:modified[j];
  // }
  // return (original.length<modified.length)?modified[j]:"";
}

const original = 'stepfor'
const modified = 'stepor'
console.log(findNaughtyStep(original, modified));