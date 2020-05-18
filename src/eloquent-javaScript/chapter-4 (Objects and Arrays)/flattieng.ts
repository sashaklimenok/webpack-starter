import { UNICODE } from "../mock";

const unicodeRanges = UNICODE.filter((el: any, i) => el.living && i < 2).map((unicode) => unicode.ranges);

function flattening(arr: any[]): any {
  const result: any = [];
  return function req(arr) {
    for (const item of arr) {
      item instanceof Array ? req(item) : result.push(item);
    }
    return result
  }(arr);
}

flattening(unicodeRanges);
