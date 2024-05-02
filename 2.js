function arrayMultiplyBy2(arr){
    let output = [];
    for(let i = 0; i < arr.length; i++){
        output.push(arr[i] *2)
    }
    return output;
}

let array = [1,2,3];
let result = arrayMultiplyBy2(array);
console.log(result);