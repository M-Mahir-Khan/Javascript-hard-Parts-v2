// closure in javascript

function outer(){
    function multiplyBy2(num){
        return num * 2;
    }
    return multiplyBy2
}

const generator = outer();
console.log(generator(2));