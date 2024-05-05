function outer(){
    let counter = 0;
    function incrementCounter(){return counter++}
    return incrementCounter()
}

let myNewfunc = outer();
console.log(myNewfunc());
console.log(myNewfunc());
