function copyArrayAndManipulate(arr,instruction){
    let output = [];
    for(let i = 0; i < arr.length; i++){
        output.push(instruction(arr[i]))
    }
    return output;
}

function multiplyBy2(input){return input * 2};
function devideBy2(input){return input / 2};
function addthree(input){return input + 3}

let array = [1,2,3];

console.log(`Original arr is ${array}`);
console.log(copyArrayAndManipulate(array,multiplyBy2));
console.log(copyArrayAndManipulate(array,devideBy2));
console.log(copyArrayAndManipulate(array,addthree));