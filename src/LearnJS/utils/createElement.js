export default function createElement(styles, text, attrinutes = {}) {
    const element = document.createElement('div');

    for (const [key, prop] of Object.entries(styles)) {
        element.style[key] = prop;
    }
    for (const [key, prop] of Object.entries(attrinutes)) {
        element.setAttribute(key, prop);
    }

    element.textContent = text;

    return element
}
