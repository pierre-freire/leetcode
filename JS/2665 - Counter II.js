/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let val = init

    return {
        increment: () => {
            val++
            return val
        },
        decrement: () => {
            val--
            return val
        },
        reset: () => {
            val = init
            return val
        }
    }
};
