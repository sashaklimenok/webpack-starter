export const findSolution = (target: number) => {
  function find(current: number, history: string): any {
    if(current === target) return history;
    if(current > target) return null;
    return find(current + 5, `(${history} + 5)`) ||
           find(current * 3, `(${history} * 3)`);
  }
  return find(1, '1');
}
