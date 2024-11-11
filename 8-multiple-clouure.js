function outer(){
    let counter = 0;
    function incrementCounter(){
        return ++counter
    }
    return incrementCounter
}

let myNewfunc = outer();

console.log(myNewfunc());   // 1
console.log(myNewfunc());   // 2

let anotherFunc = outer()

console.log(anotherFunc()); // 1
console.log(anotherFunc()); // 2

console.log(outer()());     // 1
console.log(outer()());     // 1


