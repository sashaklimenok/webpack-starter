export const isEven = (a: number): boolean => {
  if(a < 0) throw new Error('number does not be less 0');
  if(a === 0) return true;
  if(a === 1) return false;
  return isEven(a - 2);
}
