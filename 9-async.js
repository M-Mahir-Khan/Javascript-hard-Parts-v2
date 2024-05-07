function printHello(){
    console.log("hello world");
}

setTimeout(()=>{
    console.log("hello from first setTimeout");
},3000)
setTimeout(printHello,1000);

console.log("print it first");