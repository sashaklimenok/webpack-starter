let i = 0;
let start = new Date();
const progress = document.getElementById('progress');
const progressBar = document.getElementById('progress-bar');

export default function splitDifficultTask() {
    progress.classList.remove('d-none');

    do {
        i++;
    } while (i % 1e3 != 0) {
        progressBar.style.width = `${i / 10000}%`;
        progressBar.textContent = `${i / 10000}%`;
    }

    if (i < 1e6) {
        setTimeout(splitDifficultTask);
    }
}

function count() {

    // перенесём планирование очередного вызова в начало
    if (i < 1e9 - 1e6) {
        setTimeout(count); // запланировать новый вызов
    }

    do {
        i++;
    } while (i % 1e6 != 0);

    if (i == 1e9) {
        alert("Done in " + (Date.now() - start) + 'ms');
    }

}

