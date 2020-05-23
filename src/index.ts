import { debounce } from "./eloquent-javaScript/chapter-5 (High order functions)/debounce";

let test = (arg: any) => {
  console.log(arg)
};

test = debounce(test, 1000);

test(100);
setTimeout(() => test(200), 1000);
