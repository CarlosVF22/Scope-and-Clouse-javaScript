// Crar variables privadas a las cuales solo se puede acceder desde un metodo
const person = () =>{
    var saveName = "name";
    return {
        getname: () =>{
            return saveName;
        },
        setname: (name) =>{
            saveName = name;
        },
    };
};

newPerson = person();
console.log(newPerson.getname());
newPerson.setname("oscar");
console.log(newPerson.getname());