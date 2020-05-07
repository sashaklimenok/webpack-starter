const lodash = `https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js`;

function getLodashLibrary(src, cb) {
    const script = document.createElement('script');
    script.src = src;
    script.addEventListener('load', function () {
        try {
            cb(null, script);
        }catch (e) {
            cb(e)
            alert(`Sorry error => ${e}`)
        }
    })
    document.head.append(script);
}

getLodashLibrary(lodash, (err, script) => {
    if(!err) {
        console.log(script);
    }else {
        console.log(err.message);
    }
})