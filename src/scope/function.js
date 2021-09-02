// Scope local dentro de una funcion

const fruits = () =>{
    var fruit = "apple";
    console.log(fruit)
}
fruits();

//no podemos acceder a fruit ya que no es una variable global
console.log(fruit);

// las variables declaradas con let o const no se pueden reasignar dentro de la funcion
const anotherFunction = () =>{
    var x =1;
    var x =2;
    let y = 1;
    // let y = 2;
    console.log(x);
    console.log(y);
}

anotherFunction();

//Es mejor utilizar LET Y CONST PARA LLAMAR A LAS VARIABLES
