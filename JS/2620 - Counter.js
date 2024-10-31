/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let timesCalled = n
    
    return function() {
        timesCalled++
        return timesCalled - 1
    };
};
