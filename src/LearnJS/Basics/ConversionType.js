/*
* Строковое преобразование
*/

let bool = true;
let boolToString = String(bool); 

/*
* Численное преобразование
*/

let willConvertToNumber = ('6' / '2');
let strNumber = '123';
let number = Number(strNumber);

let nullNumber = Number(null) // 0
let undefinedNumber = Number(undefined) // NaN

'' = 0;
undefined + `при численном преобразовании становится NaN, не 0.`

"" + 1 + 0 //10
"" - 1 + 0 // -1
true + false // 1
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // 9px
"$" + 4 + 5 // $45
"4" - 2 // 2
"4px" - 2 // NaN
7 / 0 // infinity
"  -9  " + 5 // -95
"  -9  " - 5 // 4
null + 1 // 1
undefined + 1 // NaN
" \t \n" - 2 // 2