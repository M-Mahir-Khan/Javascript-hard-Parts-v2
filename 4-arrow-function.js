// Arrow fundtion

function multiplyByTwo1(input){return input *2};

const multiplyByTwo2 = (input) => { input*2};

const multiplyByTwo3 = (input) => input*2;

const multiplyByTwo4 = input => input *2;

function copyArrayAndManipulate(arr,instruction){
    let output = [];
    for(let i = 0; i < arr.length; i++){
        output.push(instruction(arr[i]))
    }
    return output;
}


let array = [1,2,3];
const result = copyArrayAndManipulate(array,multiplyByTwo4);
console.log(result);