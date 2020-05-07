const fetch = require('node-fetch');

class Test {

    constructor() {
        this._baseURL = 'https://api.github.com/users/';
    }

    async getUsers(names) {
        let jobs = [];

        for (let name of names) {
            try {
                let responce = await fetch(`${this._baseURL}${name}`);
                if (!responce.ok) throw new Error();
                let job = responce.json();
                jobs.push(job);
            } catch (err) {
                throw new Error(err.message);
            }
        }

        let results = await Promise.all(jobs);

        return results;
    }

}

const fetchRequest = new Test();
fetchRequest.getUsers(['sashaklimenok'])
    .then(res => console.log(res))
    .catch(err => console.log(err))