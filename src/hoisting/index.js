//el hoisting eleva las delcaraciones
a = 2;
var a ;
console.log(a); //2

// -----------------------------
console.log(a);
var a =2;
// --------------------------------
// el hoisting eleva la funcion
nameOfDog("elmo");
function nameOfDog(name){
    console.log(name);
}

