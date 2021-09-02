// Scope global
// las variables globales no deberian reescribir 
// la palabra reservada let y const no permite reasignar valor a dicha variable


var hello = "hello";
var world = "hello world"
const helloWorld = "hello world"
console.log(hello);

const anotherFuncion = () =>{
    console.log(hello);
    console.log(world);
    console.log(helloWord);
}

anotherFuncion();

// mala practica
const helloWorld = () =>{
    globalVar = "im global"
}
helloWorld();
console.log(globalVar);
