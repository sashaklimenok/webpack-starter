const invokeIf = (condition, fnTrue, fnFalse) => (condition) ? fnTrue() : fnFalse();
const showWelcome = () => console.log("Welcome!!!");
const showUnauthorized = () => console.log("Unauthorized!!!");
invokeIf(true, showWelcome, showUnauthorized)  // "Welcome" 
invokeIf(false, showWelcome, showUnauthorized) // "Unauthorized

const countdown = (value, fn, delay = 1000) => {
    fn(value);
    return (value > 0) ?
        setTimeout(() => countdown(value - 1, fn), delay) : value
}

countdown(10, console.log())