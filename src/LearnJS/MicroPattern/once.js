function once(fn) {
    let resault = null;

    return function () {
        if(fn) {
            resault = fn.apply(this, arguments);
            fn = null;

            return resault;
        }
    }
}

const log = once(() => console.log('hello'));
log();
