// a const y a let solo se puede acceder dentro del bloque

const fruits = () =>{
    if(true){
        var fruits1 = "apple";
        var fruits2 = "banana";
        let fruits3 = "kiwi";
        const fruits4 = "mango";
        console.log(fruits3);
        console.log(fruits4);
    }
    console.log(fruits1);
    console.log(fruits2);
    // console.log(fruits3);
    // console.log(fruits4);
}

fruits();

let x = 1; //let se esta asignando un valor global 
{
    let x = 2; //valor local
    console.log(x);
}
console.log(x);

// --------------------------------

var x = 1; 
{
    var x = 2; //la variable es reescrita
    console.log(x);
}
console.log(x);

//---------------------------------------

//siempre es mejor trabajar iteraciones con let
const anotherFunction = ()=>{
    for(let i =0;i<10;i++){
        setTimeout(()=>{
            console.log(i);
        },1000) //1000 milisegundos, igual a un segundo
    }
}
anotherFunction();