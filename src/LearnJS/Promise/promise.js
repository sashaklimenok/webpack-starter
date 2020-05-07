function loadScript(src) {
    return new Promise((resolve, reject) => {
        let script = document.createElement('script');
        script.src = src;

        script.addEventListener('load', function () {
            try {
                resolve(script);
            } catch {
                reject(new Error(`Ошибка загрузки скрипта ${src}`))
            }
        })

        document.head.append(script);
    });
}

let promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");

promise.then(
    script => console.log(`${script.src} загружен!`),
    error => console.log(`Ошибка: ${error.message}`)
);

promise.then(script => console.log('Ещё один обработчик...'));