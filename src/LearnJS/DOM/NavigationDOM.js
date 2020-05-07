// '<html>' = document.documentElement;
// '<body>' = document.body;
// '<head>' = document.head;

// let elem = null;

// elem.childNodes[0] === elem.firstChild
// elem.childNodes[elem.childNodes.length - 1] === elem.lastChild
// elem.hasChildNodes()

// родителем <body> является <html>
// console.log(document.body.parentNode === document.documentElement); // выведет true

// после <head> идёт <body>
// console.log(document.head.nextSibling); // HTMLBodyElement

// перед <body> находится <head>
// console.log(document.body.previousSibling); // HTMLHeadElement

//table

const table = document.getElementById('table');

table.rows //– коллекция строк <tr> таблицы.
table.caption ///tHead/tFoot – ссылки на элементы таблицы <caption>, <thead>, <tfoot>.
table.tBodies //– коллекция элементов таблицы <tbody> (по спецификации их может быть больше одного).
table.tbody.rows //– коллекция строк <tr> секции.

table.tr.cells //– коллекция <td> и <th> ячеек, находящихся внутри строки <tr>.
table.tr.sectionRowIndex //– номер строки <tr> в текущей секции <thead>/<tbody>/<tfoot>.
table.tr.rowIndex //– номер строки <tr> в таблице (включая все строки таблицы).
table.td.cellIndex //– номер ячейки в строке <tr>.

for (let i = 0; i < table.rows.length; i++) {
    let row = table.rows[i];
    row.cells[i].style.backgroundColor = 'red';
}