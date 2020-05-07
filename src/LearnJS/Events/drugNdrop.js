import createElement from "../utils/createElement";
import getRootElement from "../utils/getRootElement";

const root = getRootElement();

const containerStyle = {
    width: '1100px',
    display: 'flex',
    flexWrap: 'wrap',
    margin: '0 auto'
}
const container = createElement(containerStyle);
const containerPrew = createElement(containerStyle);
root.append(container);
root.append(containerPrew);


const parentSyle = {
    width: '200px',
    height: 'auto',
    border: '1px solid green',
}
const childStyle = {
    width: '120px',
    height: '120px',
    cursor: 'move',
    margin: '5px auto',
    border: '1px solid orange'
}



for (let i = 0; i < 10; i++) {
    const parent = createElement(parentSyle, `Parent #${i + 1}`);
    parent.classList.add('parent');
    container.append(parent);
}


for (let i = 0; i < 10; i++) {
    const child = createElement(childStyle, `child #${i + 1}`, { draggable: true });
    child.classList.add('child');
    child.setAttribute('id', `child-${i}`);
    containerPrew.append(child)
}


function dragStart(event) {
    event.dataTransfer.setData('text', event.target.id);
}

function dragOver(event) {
    event.preventDefault();
}

function drop(event) {
    const childID = event.dataTransfer.getData('text');
    event.target.append(document.getElementById(childID));
}

const childs = document.querySelectorAll('.child');
childs.forEach(elem => elem.addEventListener('dragstart', dragStart));

const parents = document.querySelectorAll('.parent');
parents.forEach(elem => {
    elem.addEventListener('dragover', dragOver)
    elem.addEventListener('drop', drop)
});

