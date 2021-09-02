// el debug sirve para pausar la ejecucion del codigo y ver que esta ocurriendo
//forma mas correcta que tienen los desarrolladores para probar el codigo.
// el closure recuerda el contexto en el que fue creado.


var a ="hello";
function hello(){
    let b = "hello world";
    const c = "hello world!";
    if(true){
        let d = "hello world !!"
        debugger
    }
}
hello();
