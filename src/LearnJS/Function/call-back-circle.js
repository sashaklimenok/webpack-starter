const root = document.getElementById('root');
root.append(createButton('Show-Circle'));

function createButton(content) {
    const button = document.createElement('button');
    button.classList.add(content);
    button.textContent = content;
    return button;
}

function showCircle(width, height, callBack) {
    const circle = document.createElement('div');
    root.append(circle);
    circleStyle(circle, width, height)
    setTimeout(() => callBack(circle), 1000);
}

function circleStyle(circle, width, height) {
    circle.style.width = `${width}px`;
    circle.style.height = `${height}px`;
    circle.style.background = 'red';
    circle.style.transition = '1s';
    circle.style.borderRadius = '50%';
    return circle
}

const show = document.querySelector('.Show-Circle');
show.addEventListener('click', () => showCircle(150, 150, circle => {
    circle.textContent = 'Hello World';
    circle.style.transform = 'translateX(200px)';
    return circle;
} ))