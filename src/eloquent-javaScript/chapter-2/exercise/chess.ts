export const chess = (size: number): string => {
  let char: string = '';

  for(let x = 0; x < size; x++) {
    for(let y = 0; y < size; y++) {
      if((x + y) % 2 === 0) {
        char += ' ';
      }else {
        char += '#';
      }
    }
    char += '\n'
  }
  return char;
}
