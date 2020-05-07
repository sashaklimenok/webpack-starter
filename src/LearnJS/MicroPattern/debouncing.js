
function debounce(func, wait) {
    let timeout;
    return function () {
        const later = () => {
            func.apply(this, arguments);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

const changeHandler = debounce(function (evt) {
    document.getElementById('text').textContent = evt.target.value;
}, 3e2);

document.getElementById('input').addEventListener('input', changeHandler);