//

function outer() {
    let counter = 0;
    function incrementCounter() {
        return counter++;
    }
    incrementCounter()
}
console.log(outer()); // undefined

