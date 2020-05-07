window.addEventListener('unhandledrejection', function (event) {
    // объект события имеет два специальных свойства:
    alert(event.promise); // [object Promise] - промис, который сгенерировал ошибку
    alert(event.reason); // Error: Ошибка! - объект ошибки, которая не была обработана
});


// Запрашиваем user.json
fetch(`https://api.github.com/users/sashaklimenok`)
    // Загружаем ответ в формате json
    .then(response => response.json())

    //Чтобы сделать наш код расширяемым, нам нужно возвращать ещё один промис
    .then(githubUser => new Promise((resolve, reject) => {
        setTimeout(() => resolve(githubUser), 2e3)
    }))
    .then(user => console.log(user))








function loadJson(url) {
    return fetch(url)
        .then(response => response.json());
}

function loadGithubUser(name) {
    return fetch(`https://api.github.com/users/${name}`)
        .then(response => response.json());
}

function showAvatar(githubUser) {
    return new Promise(function (resolve, reject) {
        let img = document.createElement('img');
        img.src = githubUser.avatar_url;
        img.className = "promise-avatar-example";
        document.body.append(img);

        setTimeout(() => {
            img.remove();
            resolve(githubUser);
        }, 3000);
    });
}

// Используем их:
loadJson('/article/promise-chaining/user.json')
    .then(user => loadGithubUser(user.name))
    .then(showAvatar)
    .then(githubUser => alert(`Показ аватара ${githubUser.name} завершён`))
    .catch(err => console.log(err)) 



new Promise(function (resolve, reject) {
    setTimeout(() => {
        throw new Error("Whoops!"); //try..catch" вокруг кода функции. Поэтому обрабатываются все синхронные ошибки. 
    }, 1000);
}).catch(alert);