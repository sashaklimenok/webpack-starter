const getAbsoluteURL = () => {
    let path = null;

    return function (url) {
        if (!path) {
            path = document.createElement('a');
            path.href = url;
            return path.href
        }
    }
}

const getUrl = getAbsoluteURL();

console.log(getUrl('/hello'))