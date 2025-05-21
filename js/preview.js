function createCounter(selector = '', init = 0, eage = [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]) {
    let el = document.querySelector(selector);
    let count = init;
    if (el === null) {
        console.error('Element not found');
        return;
    }

    el.value = count;
    function increment() {
        if (count < eage[1]) {
            count++;
            el.value = count;
        }
    }
    function decrement() {
        if (count > eage[0]) {
            count--;
            el.value = count;
        }
    }
    return {
        increment,
        decrement
    };
}
let quantity = createCounter('.quantity input[type="number"', 1, [1, 10]);
console.log(quantity);
