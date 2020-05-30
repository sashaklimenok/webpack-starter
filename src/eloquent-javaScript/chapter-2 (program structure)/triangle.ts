export const drawTriangle = (size: number): string => {
  let i: number = 0;
  let char: string = '';
  while(i <= size) {
    char += '#';
    i++
  }

  return char;
}
