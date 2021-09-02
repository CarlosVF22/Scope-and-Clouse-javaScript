const helloWorld = () =>{
    const hello = "hello World";
    console.log(hello);
}

helloWorld();

//no podemos acceder a la const hello
console.log(hello);

var scope = "im a global";

const functionScope = () =>{
    var scope = "im just a local";
    const func = () =>{
        return scope;
    }
    console.log(func());
}
functionScope();