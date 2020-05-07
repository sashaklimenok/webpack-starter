const asyncIterator = {
    [Symbol.asyncIterator]() {
        return {
            current: 0,
            to: 10,

            async next() {
                await new Promise((resolve) => setTimeout(resolve, 1e3));

                if (this.current < this.to) {
                    return { done: false, value: this.current++ }
                }

                return {
                    done: true,
                    value: this.current
                }
            }
        }
    }
}




    // ; (async () => {

    //     for await (let value of asyncIterator) { // (4)
    //         console.log(value); // 1,2,3,4,5
    //     }

    // })()



async function* generateSequence(start, end) {

    for (let i = start; i <= end; i++) {

        // ура, можно использовать await!
        await new Promise(resolve => setTimeout(resolve, 1000));

        yield i;
    }

}

;(async () => {

    let generator = generateSequence(1, 5);
    for await (let value of generator) {
        console.log(value); // 1, потом 2, потом 3, потом 4, потом 5
    }

})();