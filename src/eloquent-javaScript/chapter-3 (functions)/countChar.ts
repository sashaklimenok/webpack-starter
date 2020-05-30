export const countChar = (word: string, searchChar: string): number => {
  let count = 0;
  for (const char of word) {
      if (char === searchChar) {
          count++;
      };
  }
  return count;
}
