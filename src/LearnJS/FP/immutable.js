const listColor = [
    { title: 'red' },
    { title: 'green' },
    { title: 'yellow' },
]

function changeColor(list, color) {
    return [...list, { color }]
}

const newListColor = changeColor(listColor, 'black');

console.log(listColor);
console.log(newListColor);